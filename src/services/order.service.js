import { apiClient, cacheHelpers } from './http-client.js'
import { API_ENDPOINTS, CACHE_CONFIG, FEATURE_FLAGS } from '../config/api.config.js'
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
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
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
   * Get orders by customer phone
   * @param {string} customerPhone - Customer phone number
   * @param {Object} params - Additional query parameters
   * @returns {Promise<Object>} API response with customer orders
   */
  async getOrdersByCustomer(customerPhone, params = {}) {
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
    // Get current order to validate transition
    const currentOrderResponse = await this.getOrderById(id)
    if (!currentOrderResponse.success) {
      return currentOrderResponse
    }

    const currentOrder = currentOrderResponse.data
    const currentStatus = currentOrder.status

    // Validate status transition
    if (!validateOrderStatusTransition(currentStatus, newStatus)) {
      return {
        success: false,
        error: {
          type: 'business_rule',
          message: `No se puede cambiar de "${currentStatus}" a "${newStatus}"`
        }
      }
    }

    // Validate update data
    const updateData = { id, status: newStatus, notes }
    
    try {
      UpdateOrderStatusSchema.parse(updateData)
    } catch (error) {
      return {
        success: false,
        error: { type: 'validation', errors: error.errors }
      }
    }

    try {
      const response = await apiClient.patch(
        API_ENDPOINTS.ORDERS.UPDATE_STATUS(id), 
        updateData
      )
      
      if (response.success) {
        // Clear cache to refresh order data
        this._clearOrderCache()
        cacheHelpers.clear(`${this.cachePrefix}_${id}`)
      }
      
      return response
    } catch (error) {
      console.error('Error updating order status:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al actualizar estado del pedido' }
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
    cacheHelpers.clear(this.cachePrefix)
  }
}

// Export singleton instance
export const orderService = new OrderService()
export default orderService