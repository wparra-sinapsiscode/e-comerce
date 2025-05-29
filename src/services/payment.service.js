import { apiClient, cacheHelpers } from './http-client.js'
import { API_ENDPOINTS, CACHE_CONFIG, FEATURE_FLAGS } from '../config/api.config.js'
import { 
  validatePayment, 
  validateCreatePayment, 
  validateVerifyPayment,
  isVoucherRequired,
  isValidVoucherFile,
  generatePaymentId,
  formatAmount,
  PaymentSchema,
  CreatePaymentSchema,
  VerifyPaymentSchema 
} from '../schemas/payment.schema.js'

// Mock data fallback
import { initialPayments as mockPayments, paymentInfo as mockPaymentInfo } from '../data/sampleData.js'

/**
 * Payment Service
 * Handles all payment-related API operations
 */

class PaymentService {
  constructor() {
    this.cachePrefix = 'payments'
    this.cacheTTL = CACHE_CONFIG.ORDERS_CACHE_TIME // Same as orders
  }

  /**
   * Get all payments with optional filters (Admin)
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} API response with payments array
   */
  async getPayments(params = {}) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      return this._getMockPayments(params)
    }

    const cacheKey = `${this.cachePrefix}_list_${JSON.stringify(params)}`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.PAYMENTS.BASE, params)
      
      if (response.success) {
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching payments:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar pagos' }
      }
    }
  }

  /**
   * Get payment by ID
   * @param {string} id - Payment ID
   * @returns {Promise<Object>} API response with payment data
   */
  async getPaymentById(id) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const payment = mockPayments.find(p => p.id === id)
      return {
        success: !!payment,
        data: payment || null,
        error: !payment ? { type: 'not_found', message: 'Pago no encontrado' } : null
      }
    }

    const cacheKey = `${this.cachePrefix}_${id}`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.PAYMENTS.BY_ID(id))
      
      if (response.success) {
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching payment:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar pago' }
      }
    }
  }

  /**
   * Get payment by order ID
   * @param {string} orderId - Order ID
   * @returns {Promise<Object>} API response with payment data
   */
  async getPaymentByOrder(orderId) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const payment = mockPayments.find(p => p.order_id === orderId)
      return {
        success: !!payment,
        data: payment || null,
        error: !payment ? { type: 'not_found', message: 'Pago no encontrado para este pedido' } : null
      }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.PAYMENTS.BY_ORDER(orderId))
      return response
    } catch (error) {
      console.error('Error fetching payment by order:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar pago del pedido' }
      }
    }
  }

  /**
   * Create new payment
   * @param {Object} paymentData - Payment data
   * @returns {Promise<Object>} API response with created payment
   */
  async createPayment(paymentData) {
    // Validate payment data
    const validation = validateCreatePayment(paymentData)
    if (!validation.success) {
      return {
        success: false,
        error: { type: 'validation', errors: validation.error }
      }
    }

    try {
      const response = await apiClient.post(API_ENDPOINTS.PAYMENTS.BASE, validation.data)
      
      if (response.success) {
        // Clear cache to refresh payment lists
        this._clearPaymentCache()
      }
      
      return response
    } catch (error) {
      console.error('Error creating payment:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al crear pago' }
      }
    }
  }

  /**
   * Verify payment (Admin only)
   * @param {string} id - Payment ID
   * @param {string} status - 'verified' or 'rejected'
   * @param {string} notes - Verification notes
   * @param {string} rejectedReason - Reason if rejected
   * @returns {Promise<Object>} API response
   */
  async verifyPayment(id, status, notes = '', rejectedReason = '') {
    const verificationData = {
      id,
      status,
      verification_notes: notes,
      rejected_reason: status === 'REJECTED' ? rejectedReason : undefined
    }

    // Validate verification data
    const validation = validateVerifyPayment(verificationData)
    if (!validation.success) {
      return {
        success: false,
        error: { type: 'validation', errors: validation.error }
      }
    }

    try {
      const response = await apiClient.patch(
        API_ENDPOINTS.PAYMENTS.VERIFY(id), 
        validation.data
      )
      
      if (response.success) {
        // Clear cache to refresh payment data
        this._clearPaymentCache()
        cacheHelpers.clear(`${this.cachePrefix}_${id}`)
      }
      
      return response
    } catch (error) {
      console.error('Error verifying payment:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al verificar pago' }
      }
    }
  }

  /**
   * Confirm verified payment and start order preparation (Admin only)
   * @param {string} id - Payment ID
   * @param {string} notes - Confirmation notes
   * @returns {Promise<Object>} API response
   */
  async confirmPayment(id, notes = '') {
    const confirmationData = {
      confirmation_notes: notes
    }

    try {
      const response = await apiClient.patch(
        API_ENDPOINTS.PAYMENTS.CONFIRM(id), 
        confirmationData
      )
      
      if (response.success) {
        // Clear cache to refresh payment and order data
        this._clearPaymentCache()
        cacheHelpers.clear(`${this.cachePrefix}_${id}`)
        // Also clear orders cache since order status will change
        cacheHelpers.clear('orders')
      }
      
      return response
    } catch (error) {
      console.error('Error confirming payment:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al confirmar pago' }
      }
    }
  }

  /**
   * Upload payment voucher
   * @param {string} paymentId - Payment ID
   * @param {File} file - Voucher file
   * @param {Function} onProgress - Upload progress callback
   * @returns {Promise<Object>} API response with voucher URL
   */
  async uploadVoucher(paymentId, file, onProgress = null) {
    // Validate file
    if (!isValidVoucherFile(file)) {
      return {
        success: false,
        error: { 
          type: 'validation', 
          message: 'Archivo inválido. Debe ser JPG, PNG, WebP o PDF y menor a 5MB' 
        }
      }
    }

    try {
      const response = await apiClient.upload(
        API_ENDPOINTS.PAYMENTS.UPLOAD_VOUCHER(paymentId),
        file,
        { payment_id: paymentId },
        onProgress
      )
      
      if (response.success) {
        // Clear cache to refresh payment data
        this._clearPaymentCache()
        cacheHelpers.clear(`${this.cachePrefix}_${paymentId}`)
      }
      
      return response
    } catch (error) {
      console.error('Error uploading voucher:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al subir comprobante' }
      }
    }
  }

  /**
   * Get pending payments for verification (Admin)
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} API response with pending payments
   */
  async getPendingPayments(params = {}) {
    const pendingParams = { ...params, status: 'pending' }
    return this.getPayments(pendingParams)
  }

  /**
   * Get payment statistics (Admin)
   * @param {Object} params - Date range and other filters
   * @returns {Promise<Object>} API response with payment statistics
   */
  async getPaymentStats(params = {}) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      // Mock statistics
      const stats = {
        total_payments: mockPayments.length,
        pending_payments: mockPayments.filter(p => p.status === 'PENDING').length,
        verified_payments: mockPayments.filter(p => p.status === 'VERIFIED').length,
        rejected_payments: mockPayments.filter(p => p.status === 'REJECTED').length,
        total_amount: mockPayments.reduce((sum, p) => sum + p.amount, 0),
        verified_amount: mockPayments
          .filter(p => p.status === 'VERIFIED')
          .reduce((sum, p) => sum + p.amount, 0),
        pending_amount: mockPayments
          .filter(p => p.status === 'PENDING')
          .reduce((sum, p) => sum + p.amount, 0),
        by_method: {
          TRANSFER: mockPayments.filter(p => p.method === 'TRANSFER').length,
          YAPE: mockPayments.filter(p => p.method === 'YAPE').length,
          PLIN: mockPayments.filter(p => p.method === 'PLIN').length,
          CASH: mockPayments.filter(p => p.method === 'CASH').length,
        }
      }
      
      return { success: true, data: stats }
    }

    try {
      const response = await apiClient.get(`${API_ENDPOINTS.PAYMENTS.BASE}/stats`, params)
      return response
    } catch (error) {
      console.error('Error fetching payment stats:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar estadísticas de pagos' }
      }
    }
  }

  /**
   * Get payment information for customers
   * @returns {Promise<Object>} API response with payment methods info
   */
  async getPaymentInfo() {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      return {
        success: true,
        data: mockPaymentInfo
      }
    }

    const cacheKey = `${this.cachePrefix}_info`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(`${API_ENDPOINTS.PAYMENTS.BASE}/info`)
      
      if (response.success) {
        // Cache payment info for longer since it changes rarely
        cacheHelpers.set(cacheKey, response.data, 30 * 60 * 1000) // 30 minutes
      }
      
      return response
    } catch (error) {
      console.error('Error fetching payment info:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar información de pagos' }
      }
    }
  }

  /**
   * Generate payment ID
   * @returns {string} Generated payment ID
   */
  generateId() {
    return generatePaymentId()
  }

  /**
   * Format amount with currency
   * @param {number} amount - Amount to format
   * @param {string} currency - Currency symbol
   * @returns {string} Formatted amount
   */
  formatAmount(amount, currency = 'S/') {
    return formatAmount(amount, currency)
  }

  /**
   * Check if voucher is required for payment method
   * @param {string} method - Payment method
   * @returns {boolean} True if voucher is required
   */
  isVoucherRequired(method) {
    return isVoucherRequired(method)
  }

  /**
   * Validate voucher file
   * @param {File} file - File to validate
   * @returns {boolean} True if file is valid
   */
  isValidVoucherFile(file) {
    return isValidVoucherFile(file)
  }

  /**
   * Search payments
   * @param {string} query - Search query
   * @param {Object} params - Additional search parameters
   * @returns {Promise<Object>} API response with search results
   */
  async searchPayments(query, params = {}) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const searchResults = mockPayments.filter(payment =>
        payment.id.toLowerCase().includes(query.toLowerCase()) ||
        payment.order_id.toLowerCase().includes(query.toLowerCase()) ||
        payment.customer_name.toLowerCase().includes(query.toLowerCase()) ||
        payment.customer_phone.includes(query)
      )
      
      return {
        success: true,
        data: {
          payments: searchResults,
          total: searchResults.length
        }
      }
    }

    try {
      const searchParams = { q: query, ...params }
      const response = await apiClient.get(`${API_ENDPOINTS.PAYMENTS.BASE}/search`, searchParams)
      return response
    } catch (error) {
      console.error('Error searching payments:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error en la búsqueda de pagos' }
      }
    }
  }

  // Private methods

  /**
   * Get mock payments for development
   * @private
   */
  _getMockPayments(params = {}) {
    let filteredPayments = [...mockPayments]
    
    // Apply filters
    if (params.status) {
      filteredPayments = filteredPayments.filter(p => p.status === params.status)
    }
    
    if (params.method) {
      filteredPayments = filteredPayments.filter(p => p.method === params.method)
    }
    
    if (params.order_id) {
      filteredPayments = filteredPayments.filter(p => p.order_id === params.order_id)
    }
    
    if (params.customer_phone) {
      filteredPayments = filteredPayments.filter(p => p.customer_phone === params.customer_phone)
    }
    
    if (params.date_from) {
      filteredPayments = filteredPayments.filter(p => new Date(p.date) >= new Date(params.date_from))
    }
    
    if (params.date_to) {
      filteredPayments = filteredPayments.filter(p => new Date(p.date) <= new Date(params.date_to))
    }
    
    if (params.amount_min) {
      filteredPayments = filteredPayments.filter(p => p.amount >= parseFloat(params.amount_min))
    }
    
    if (params.amount_max) {
      filteredPayments = filteredPayments.filter(p => p.amount <= parseFloat(params.amount_max))
    }
    
    // Apply sorting
    if (params.sort_by) {
      filteredPayments.sort((a, b) => {
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
      filteredPayments.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
    
    // Apply pagination
    const page = params.page || 1
    const limit = params.limit || 20
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedPayments = filteredPayments.slice(startIndex, endIndex)
    
    return {
      success: true,
      data: {
        payments: paginatedPayments,
        total: filteredPayments.length,
        page,
        limit,
        total_pages: Math.ceil(filteredPayments.length / limit)
      }
    }
  }

  /**
   * Clear payment-related cache
   * @private
   */
  _clearPaymentCache() {
    cacheHelpers.clear(this.cachePrefix)
  }
}

// Export singleton instance
export const paymentService = new PaymentService()
export default paymentService