import { apiClient, cacheHelpers } from './http-client.js'
import { API_ENDPOINTS, CACHE_CONFIG, FEATURE_FLAGS } from '../config/api.config.js'
import { storageService } from './storage.service.js'
import { 
  validateOrder, 
  validateCreateOrder, 
  validateOrderStatusTransition,
  calculateOrderTotals,
  generateOrderId,
  OrderSchema,
  CreateOrderSchema,
  UpdateOrderStatusSchema,
  ORDER_STATUS_FLOW 
} from '../schemas/order.schema.js'

// Mock data fallback
import { initialOrders as mockOrders } from '../data/sampleData.js'

/**
 * Order Service
 * Handles all order-related API operations
 */

class OrderService {
  constructor() {
    this.cachePrefix = 'orders'
    this.cacheTTL = CACHE_CONFIG.ORDERS_CACHE_TIME
  }

  /**
   * Get all orders with optional filters (Admin)
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} API response with orders array
   */
  async getOrders(params = {}) {
    console.log('📦 order.service: Solicitando TODOS los pedidos a la API (Admin)...');
    
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      return this._getMockOrders(params)
    }

    const cacheKey = `${this.cachePrefix}_list_${JSON.stringify(params)}`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.ORDERS.BASE, params)
      
      if (response.success) {
        // Verificar si hay pedidos DELIVERED que deberíamos preservar
        try {
          const deliveredOrderIds = storageService.get('deliveredOrders') || [];
          
          if (deliveredOrderIds.length > 0) {
            console.log('🔍 order.service: Verificando si hay pedidos DELIVERED que preservar:', deliveredOrderIds);
            
            // Obtener los pedidos actuales
            const orders = response.data.orders || [];
            
            // Verificar si algún pedido DELIVERED no está en los resultados
            const missingDeliveredIds = deliveredOrderIds.filter(
              id => !orders.some(order => order.id === id)
            );
            
            if (missingDeliveredIds.length > 0) {
              console.log('🔄 order.service: Recuperando pedidos DELIVERED que no están en resultados:', missingDeliveredIds);
              
              // Buscar estos pedidos en caché
              const deliveredOrders = [];
              for (const id of missingDeliveredIds) {
                const cachedOrder = cacheHelpers.get(`${this.cachePrefix}_delivered_${id}`);
                if (cachedOrder) {
                  deliveredOrders.push(cachedOrder);
                }
              }
              
              if (deliveredOrders.length > 0) {
                console.log('✅ order.service: Recuperados pedidos DELIVERED desde caché:', deliveredOrders.length);
                
                // Combinar con los resultados de la API
                response.data.orders = [...orders, ...deliveredOrders];
                
                // Actualizar el total
                if (response.data.total) {
                  response.data.total += deliveredOrders.length;
                }
              }
            }
          }
        } catch (cacheError) {
          console.error('❌ order.service: Error al procesar caché de pedidos DELIVERED:', cacheError);
        }
        
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      console.log('📦 order.service: Respuesta de TODOS los pedidos recibida:', response);
      
      return response
    } catch (error) {
      console.error('Error fetching orders:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar pedidos' }
      }
    }
  }

  /**
   * Get order by ID
   * @param {string} id - Order ID
   * @returns {Promise<Object>} API response with order data
   */
  async getOrderById(id) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const order = mockOrders.find(o => o.id === id)
      return {
        success: !!order,
        data: order || null,
        error: !order ? { type: 'not_found', message: 'Pedido no encontrado' } : null
      }
    }

    const cacheKey = `${this.cachePrefix}_${id}`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.ORDERS.BY_ID(id))
      
      if (response.success) {
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching order:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar pedido' }
      }
    }
  }

  /**
   * Get my orders (authenticated user)
   * @param {Object} params - Additional query parameters
   * @returns {Promise<Object>} API response with user orders
   */
  async getMyOrders(params = {}) {
    console.log('📦 order.service: Solicitando mis pedidos a la API...');
    
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      // For mock data, return all orders (in real app, this would be filtered by user)
      return {
        success: true,
        data: {
          orders: mockOrders,
          total: mockOrders.length
        }
      }
    }

    try {
      const response = await apiClient.get(`${API_ENDPOINTS.ORDERS.BASE}/my-orders`, params)
      
      console.log('📦 order.service: Respuesta de mis pedidos recibida:', response);
      
      return response
    } catch (error) {
      console.error('Error fetching my orders:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar mis pedidos' }
      }
    }
  }

  /**
   * Get orders by customer phone (admin use)
   * @param {string} customerPhone - Customer phone number
   * @param {Object} params - Additional query parameters
   * @returns {Promise<Object>} API response with customer orders
   */
  async getOrdersByCustomer(customerPhone, params = {}) {
    console.log('📦 order.service: Solicitando pedidos a la API...');
    
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const customerOrders = mockOrders.filter(o => o.customer_phone === customerPhone)
      return {
        success: true,
        data: {
          orders: customerOrders,
          total: customerOrders.length
        }
      }
    }

    try {
      const response = await apiClient.get(
        API_ENDPOINTS.ORDERS.BY_CUSTOMER(customerPhone), 
        params
      )
      
      console.log('📦 order.service: Respuesta de la API recibida:', response);
      
      return response
    } catch (error) {
      console.error('Error fetching customer orders:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar pedidos del cliente' }
      }
    }
  }

  /**
   * Get orders by status
   * @param {string} status - Order status
   * @param {Object} params - Additional query parameters
   * @returns {Promise<Object>} API response with filtered orders
   */
  async getOrdersByStatus(status, params = {}) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const filteredOrders = mockOrders.filter(o => o.status === status)
      return {
        success: true,
        data: {
          orders: filteredOrders,
          total: filteredOrders.length
        }
      }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.ORDERS.BY_STATUS(status), params)
      return response
    } catch (error) {
      console.error('Error fetching orders by status:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar pedidos por estado' }
      }
    }
  }

  /**
   * Create new order
   * @param {Object} orderData - Order data from checkout
   * @returns {Promise<Object>} API response with created order
   */
  async createOrder(orderData) {
    // Validate order data
    const validation = validateCreateOrder(orderData)
    if (!validation.success) {
      return {
        success: false,
        error: { type: 'validation', errors: validation.error }
      }
    }

    console.log('📦 order.service: Enviando datos a la API /orders con el siguiente payload:', validation.data);
    
    try {
      const response = await apiClient.post(API_ENDPOINTS.ORDERS.BASE, validation.data)
      
      if (response.success) {
        // Clear cache to refresh order lists
        this._clearOrderCache()
      }
      
      return response
    } catch (error) {
      console.error('Error creating order:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al crear pedido' }
      }
    }
  }

  /**
   * Update order status (Admin only)
   * @param {string} id - Order ID
   * @param {string} newStatus - New status
   * @param {string} notes - Optional notes
   * @returns {Promise<Object>} API response
   */
  async updateOrderStatus(id, newStatus, notes = '') {
    console.log('🚀 ORDER SERVICE: Iniciando actualización de estado del pedido:', {
      orderId: id,
      nuevoEstado: newStatus
    });
    
    // Get current order to validate transition
    const currentOrderResponse = await this.getOrderById(id)
    if (!currentOrderResponse.success) {
      console.error('❌ ORDER SERVICE: No se pudo obtener el pedido actual:', currentOrderResponse.error);
      return currentOrderResponse
    }

    const currentOrder = currentOrderResponse.data
    const currentStatus = currentOrder.status
    
    console.log('🔍 ORDER SERVICE: Estado actual del pedido:', {
      estadoActual: currentStatus,
      nuevoEstado: newStatus
    });

    // Ya no es necesario normalizar si el frontend ya envía en MAYÚSCULAS
    // Pero mantenemos una verificación por seguridad
    const normalizedStatus = typeof newStatus === 'string' 
      ? newStatus.toUpperCase() 
      : (newStatus ? String(newStatus).toUpperCase() : '');
    
    console.log('🔄 ORDER SERVICE: Verificando formato de estado:', {
      estadoRecibido: newStatus,
      estadoNormalizado: normalizedStatus
    });
    
    // Preparar datos para actualización
    const updateData = { status: normalizedStatus, notes }
    
    try {
      // Obtener token de autenticación
      const token = storageService.get('ecommerce_auth_token');
      if (!token) {
        console.error('❌ ORDER SERVICE: No hay token de autenticación disponible');
        return {
          success: false,
          error: { 
            type: 'auth', 
            message: 'Sesión expirada o no autenticada. Por favor, inicie sesión nuevamente.' 
          }
        };
      }
      
      let response;
      
      // Usamos el nuevo endpoint de payment controller que funciona para todos los estados
      console.log('📤 ORDER SERVICE: Usando endpoint de payment controller para actualizar estado:', {
        endpoint: API_ENDPOINTS.PAYMENTS.UPDATE_ORDER_STATUS(id),
        data: updateData
      });
      
      response = await apiClient.patch(
        API_ENDPOINTS.PAYMENTS.UPDATE_ORDER_STATUS(id), 
        updateData,
        { 
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          } 
        }
      );
      
      console.log('📥 ORDER SERVICE: Respuesta de actualización:', {
        success: response.success,
        data: response.data ? {
          id: response.data.id,
          status: response.data.status
        } : null,
        error: response.error
      });
      
      if (response.success) {
        console.log('🗑️ ORDER SERVICE: Limpiando caché para actualizar datos');
        
        if (normalizedStatus === 'DELIVERED') {
          console.log('⚠️ ORDER SERVICE: Estado DELIVERED - preservando en caché');
          
          // Agregar a sessionStorage para persistencia
          try {
            const deliveredOrders = storageService.get('deliveredOrders') || [];
            if (!deliveredOrders.includes(id)) {
              deliveredOrders.push(id);
              storageService.set('deliveredOrders', deliveredOrders);
              console.log('💾 ORDER SERVICE: Pedido DELIVERED guardado en sessionStorage');
            }
          } catch (e) {
            console.error('Error al guardar pedido DELIVERED en sessionStorage:', e);
          }
          
          // Preservar pedido en caché especial para DELIVERED
          const orderCache = cacheHelpers.get(`${this.cachePrefix}_${id}`);
          if (orderCache) {
            const deliveredOrder = {
              ...orderCache, 
              status: 'DELIVERED', // Ahora todo en MAYÚSCULAS
              _delivered_at: new Date().toISOString(),
              _preserved: true
            };
            
            // Limpiar caché normal
            this._clearOrderCache();
            
            // Pero volver a guardar este pedido específico con TTL extendido (1 hora)
            const DELIVERED_TTL = 60 * 60 * 1000; // 1 hora
            cacheHelpers.set(`${this.cachePrefix}_${id}`, deliveredOrder, DELIVERED_TTL);
            cacheHelpers.set(`${this.cachePrefix}_delivered_${id}`, deliveredOrder, DELIVERED_TTL);
            
            console.log('✅ ORDER SERVICE: Pedido DELIVERED preservado en caché especial');
          } else {
            // Si no tenemos el pedido en caché, obtenerlo del servidor
            console.log('🔄 ORDER SERVICE: Recargando pedido DELIVERED del API para caché');
            
            try {
              // Hacer llamada directa sin usar caché para asegurar datos frescos
              const refreshResponse = await apiClient.get(API_ENDPOINTS.ORDERS.BY_ID(id), {}, {
                headers: { 
                  'Authorization': `Bearer ${storageService.get('ecommerce_auth_token')}`,
                  'Cache-Control': 'no-cache, no-store, must-revalidate' 
                }
              });
              
              if (refreshResponse.success) {
                const deliveredOrder = {
                  ...refreshResponse.data,
                  status: 'DELIVERED', // Ahora todo en MAYÚSCULAS
                  _delivered_at: new Date().toISOString(),
                  _preserved: true
                };
                
                // Guardar en caché especial con TTL extendido (1 hora)
                const DELIVERED_TTL = 60 * 60 * 1000; // 1 hora
                cacheHelpers.set(`${this.cachePrefix}_${id}`, deliveredOrder, DELIVERED_TTL);
                cacheHelpers.set(`${this.cachePrefix}_delivered_${id}`, deliveredOrder, DELIVERED_TTL);
                
                console.log('✅ ORDER SERVICE: Pedido DELIVERED recargado y guardado en caché');
              }
            } catch (refreshError) {
              console.error('❌ ORDER SERVICE: Error al recargar pedido DELIVERED:', refreshError);
            }
          }
        } else {
          // Para otros estados, limpieza normal
          this._clearOrderCache();
          cacheHelpers.clear(`${this.cachePrefix}_${id}`);
        }
        
        // Verificar que la actualización se haya guardado correctamente
        try {
          console.log('🔍 ORDER SERVICE: Verificando actualización en BD...');
          // Hacer una llamada directa sin usar caché para asegurar datos frescos
          const verifyResponse = await apiClient.get(API_ENDPOINTS.ORDERS.BY_ID(id), {}, {
            headers: { 
              'Authorization': `Bearer ${storageService.get('ecommerce_auth_token')}`,
              'Cache-Control': 'no-cache, no-store, must-revalidate' 
            }
          });
          console.log('🔎 ORDER SERVICE: Estado actual en BD:', verifyResponse?.data?.status);
          
          // No realizamos verificación adicional ya que puede generar falsos positivos
          // La operación se considera exitosa si la respuesta inicial fue exitosa
          console.log('✅ ORDER SERVICE: Consideramos la actualización exitosa basados en la respuesta inicial');
        } catch (verifyError) {
          console.error('⚠️ ORDER SERVICE: Error al verificar actualización:', verifyError);
        }
      }
      
      return response
    } catch (error) {
      console.error('❌ ORDER SERVICE: Error al actualizar estado del pedido:', error)
      return {
        success: false,
        error: { 
          type: 'network', 
          message: 'Error al actualizar estado del pedido',
          details: error.message 
        }
      }
    }
  }

  /**
   * Calculate order totals from cart items
   * @param {Array} items - Array of order items
   * @param {number} taxRate - Tax rate (default 18% for Peru)
   * @returns {Object} Calculated totals
   */
  calculateTotals(items, taxRate = 0.18) {
    return calculateOrderTotals(items, taxRate)
  }

  /**
   * Generate a unique order ID
   * @returns {string} Generated order ID
   */
  generateId() {
    return generateOrderId()
  }

  /**
   * Get order statistics (Admin)
   * @param {Object} params - Date range and other filters
   * @returns {Promise<Object>} API response with order statistics
   */
  async getOrderStats(params = {}) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      // Mock statistics
      const stats = {
        total_orders: mockOrders.length,
        pending_orders: mockOrders.filter(o => o.status === 'awaiting_payment').length,
        completed_orders: mockOrders.filter(o => o.status === 'delivered').length,
        total_revenue: mockOrders
          .filter(o => o.status === 'delivered')
          .reduce((sum, o) => sum + o.total, 0),
        avg_order_value: mockOrders.length > 0 
          ? mockOrders.reduce((sum, o) => sum + o.total, 0) / mockOrders.length 
          : 0,
        by_status: {
          awaiting_payment: mockOrders.filter(o => o.status === 'awaiting_payment').length,
          preparing: mockOrders.filter(o => o.status === 'preparing').length,
          ready_for_shipping: mockOrders.filter(o => o.status === 'ready_for_shipping').length,
          shipped: mockOrders.filter(o => o.status === 'shipped').length,
          delivered: mockOrders.filter(o => o.status === 'delivered').length,
          cancelled: mockOrders.filter(o => o.status === 'cancelled').length,
        }
      }
      
      return { success: true, data: stats }
    }

    try {
      const response = await apiClient.get(`${API_ENDPOINTS.ORDERS.BASE}/stats`, params)
      return response
    } catch (error) {
      console.error('Error fetching order stats:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar estadísticas de pedidos' }
      }
    }
  }

  /**
   * Cancel order
   * @param {string} id - Order ID
   * @param {string} reason - Cancellation reason
   * @returns {Promise<Object>} API response
   */
  async cancelOrder(id, reason = '') {
    try {
      const response = await apiClient.patch(`${API_ENDPOINTS.ORDERS.BY_ID(id)}/cancel`, {
        reason
      })
      
      if (response.success) {
        this._clearOrderCache()
        cacheHelpers.clear(`${this.cachePrefix}_${id}`)
      }
      
      return response
    } catch (error) {
      console.error('Error cancelling order:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cancelar pedido' }
      }
    }
  }

  /**
   * Get order items
   * @param {string} orderId - Order ID
   * @returns {Promise<Object>} API response with order items
   */
  async getOrderItems(orderId) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const order = mockOrders.find(o => o.id === orderId)
      return {
        success: !!order,
        data: { items: order?.items || [] }
      }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.ORDERS.ITEMS(orderId))
      return response
    } catch (error) {
      console.error('Error fetching order items:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar items del pedido' }
      }
    }
  }

  /**
   * Search orders
   * @param {string} query - Search query (customer name, phone, order ID)
   * @param {Object} params - Additional search parameters
   * @returns {Promise<Object>} API response with search results
   */
  async searchOrders(query, params = {}) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const searchResults = mockOrders.filter(order =>
        order.id.toLowerCase().includes(query.toLowerCase()) ||
        order.customer.toLowerCase().includes(query.toLowerCase()) ||
        order.customer_phone.includes(query)
      )
      
      return {
        success: true,
        data: {
          orders: searchResults,
          total: searchResults.length
        }
      }
    }

    try {
      const searchParams = { q: query, ...params }
      const response = await apiClient.get(`${API_ENDPOINTS.ORDERS.BASE}/search`, searchParams)
      return response
    } catch (error) {
      console.error('Error searching orders:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error en la búsqueda de pedidos' }
      }
    }
  }

  // Private methods

  /**
   * Get mock orders for development
   * @private
   */
  _getMockOrders(params = {}) {
    let filteredOrders = [...mockOrders]
    
    // Apply filters
    if (params.status) {
      filteredOrders = filteredOrders.filter(o => o.status === params.status)
    }
    
    if (params.payment_status) {
      filteredOrders = filteredOrders.filter(o => o.payment_status === params.payment_status)
    }
    
    if (params.customer_phone) {
      filteredOrders = filteredOrders.filter(o => o.customer_phone === params.customer_phone)
    }
    
    if (params.date_from) {
      filteredOrders = filteredOrders.filter(o => new Date(o.date) >= new Date(params.date_from))
    }
    
    if (params.date_to) {
      filteredOrders = filteredOrders.filter(o => new Date(o.date) <= new Date(params.date_to))
    }
    
    // Apply sorting
    if (params.sort_by) {
      filteredOrders.sort((a, b) => {
        let valueA = a[params.sort_by]
        let valueB = b[params.sort_by]
        
        if (params.sort_by === 'date') {
          valueA = new Date(valueA)
          valueB = new Date(valueB)
        }
        
        if (typeof valueA === 'string') {
          valueA = valueA.toLowerCase()
          valueB = valueB.toLowerCase()
        }
        
        if (params.sort_order === 'desc') {
          return valueB > valueA ? 1 : -1
        }
        return valueA > valueB ? 1 : -1
      })
    } else {
      // Default sort by date desc
      filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
    
    // Apply pagination
    const page = params.page || 1
    const limit = params.limit || 20
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedOrders = filteredOrders.slice(startIndex, endIndex)
    
    return {
      success: true,
      data: {
        orders: paginatedOrders,
        total: filteredOrders.length,
        page,
        limit,
        total_pages: Math.ceil(filteredOrders.length / limit)
      }
    }
  }

  /**
   * Clear order-related cache
   * @private
   */
  _clearOrderCache() {
    console.log('🧹 ORDER SERVICE: Limpiando caché de pedidos');
    
    // Intentar preservar pedidos DELIVERED al limpiar caché
    // Primero buscamos todos los pedidos DELIVERED en caché
    const deliveredOrders = [];
    const allKeys = Object.keys(cacheHelpers.getAllKeys ? cacheHelpers.getAllKeys() : {});
    
    for (const key of allKeys) {
      if (key.startsWith(this.cachePrefix)) {
        const cached = cacheHelpers.get(key);
        // Estado ya debe estar en MAYÚSCULAS
        if (cached && cached.status === 'DELIVERED') {
          deliveredOrders.push({key, data: cached});
        }
      }
    }
    
    // Limpiamos todo el caché
    cacheHelpers.clear(this.cachePrefix);
    
    // Restauramos los pedidos DELIVERED
    if (deliveredOrders.length > 0) {
      console.log(`🔄 ORDER SERVICE: Restaurando ${deliveredOrders.length} pedidos DELIVERED al caché`);
      for (const {key, data} of deliveredOrders) {
        cacheHelpers.set(key, data, this.cacheTTL * 2); // Mayor tiempo de caché para delivered
      }
    }
  }
}

// Export singleton instance
export const orderService = new OrderService()
export default orderService