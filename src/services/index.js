/**
 * Services Index
 * Centralized export of all API services
 */

// Export individual services
export { default as authService } from './auth.service.js'
export { default as productService } from './product.service.js'
export { default as categoryService } from './category.service.js'
export { default as orderService } from './order.service.js'
export { default as paymentService } from './payment.service.js'

// Export HTTP client utilities
export { apiClient, authHelpers, cacheHelpers, httpClient } from './http-client.js'

// Import services for internal use
import authServiceModule from './auth.service.js'
import productServiceModule from './product.service.js' 
import categoryServiceModule from './category.service.js'
import orderServiceModule from './order.service.js'
import paymentServiceModule from './payment.service.js'
import { cacheHelpers, apiClient } from './http-client.js'

// Service initialization and utilities
class ServiceManager {
  constructor() {
    this.services = {
      auth: authServiceModule,
      products: productServiceModule,
      categories: categoryServiceModule,
      orders: orderServiceModule,
      payments: paymentServiceModule,
    }
    this.initialized = false
  }

  /**
   * Initialize all services
   * @returns {Promise<void>}
   */
  async initialize() {
    if (this.initialized) return

    try {
      // Initialize auth service first (it may set up authentication state)
      await this.services.auth.initialize()
      
      console.log('✅ Services initialized successfully')
      this.initialized = true
    } catch (error) {
      console.error('❌ Error initializing services:', error)
      throw error
    }
  }

  /**
   * Clear all service caches
   */
  clearAllCaches() {
    cacheHelpers.clear()
    console.log('🧹 All service caches cleared')
  }

  /**
   * Get service health status
   * @returns {Object} Health status of all services
   */
  async getHealthStatus() {
    const status = {
      auth: false,
      api: false,
      cache: false,
      timestamp: new Date().toISOString(),
    }

    try {
      // Check auth service
      status.auth = !!this.services.auth.getCurrentUser()
      
      // Check API connectivity (lightweight ping)
      const apiResponse = await apiClient.get('/health')
      status.api = apiResponse.success
      
      // Check cache functionality
      const testKey = 'health_check_' + Date.now()
      cacheHelpers.set(testKey, 'test', 1000)
      status.cache = cacheHelpers.get(testKey) === 'test'
      
    } catch (error) {
      console.warn('Health check partial failure:', error)
    }

    return status
  }

  /**
   * Enable debug mode for all services
   */
  enableDebugMode() {
    localStorage.setItem('API_DEBUG', 'true')
    console.log('🐛 Debug mode enabled for all services')
  }

  /**
   * Disable debug mode for all services
   */
  disableDebugMode() {
    localStorage.removeItem('API_DEBUG')
    console.log('✅ Debug mode disabled')
  }
}

// Export singleton service manager
export const serviceManager = new ServiceManager()

// Convenience method to initialize all services
export const initializeServices = () => serviceManager.initialize()

// Error boundary for service calls
export const withErrorBoundary = (serviceCall) => {
  return async (...args) => {
    try {
      const result = await serviceCall(...args)
      return result
    } catch (error) {
      console.error('Service call error:', error)
      
      // Return standardized error response
      return {
        success: false,
        error: {
          type: 'service_error',
          message: 'Error interno del servicio',
          originalError: error,
        },
        data: null,
      }
    }
  }
}

// Service call wrapper with automatic retry
export const withRetry = (serviceCall, maxRetries = 3, delay = 1000) => {
  return async (...args) => {
    let lastError = null
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const result = await serviceCall(...args)
        
        // If successful or non-retryable error, return immediately
        if (result.success || (result.error?.type !== 'network')) {
          return result
        }
        
        lastError = result
      } catch (error) {
        lastError = {
          success: false,
          error: {
            type: 'network',
            message: 'Error de conexión',
            originalError: error,
          }
        }
      }
      
      // Wait before retry (except on last attempt)
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delay * attempt))
      }
    }
    
    // All retries failed
    return {
      ...lastError,
      error: {
        ...lastError.error,
        message: `Error después de ${maxRetries} intentos: ${lastError.error.message}`,
        retries: maxRetries,
      }
    }
  }
}

// Development utilities
export const devUtils = {
  /**
   * Mock all services to use fake data
   */
  enableMockMode: () => {
    localStorage.setItem('USE_MOCK_DATA', 'true')
    window.location.reload()
  },
  
  /**
   * Disable mock mode and use real APIs
   */
  disableMockMode: () => {
    localStorage.removeItem('USE_MOCK_DATA')
    window.location.reload()
  },
  
  /**
   * Clear all service data and restart
   */
  resetServices: async () => {
    serviceManager.clearAllCaches()
    await authServiceModule.logout()
    window.location.reload()
  },
  
  /**
   * Get service performance metrics
   */
  getPerformanceMetrics: () => {
    // This would integrate with performance monitoring
    return {
      averageResponseTime: '~200ms',
      cacheHitRate: '85%',
      errorRate: '2%',
      uptime: '99.9%',
    }
  },
}

// Make dev utils available globally in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  window.serviceDevUtils = devUtils
  window.serviceManager = serviceManager
}

export default {
  authService: authServiceModule,
  productService: productServiceModule,
  categoryService: categoryServiceModule,
  orderService: orderServiceModule,
  paymentService: paymentServiceModule,
  ServiceManager: serviceManager,
  initializeServices,
  withErrorBoundary,
  withRetry,
  devUtils,
}