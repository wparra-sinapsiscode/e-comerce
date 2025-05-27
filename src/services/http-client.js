import axios from 'axios'
import { 
  API_ENDPOINTS, 
  DEFAULT_HEADERS, 
  HTTP_STATUS, 
  ERROR_MESSAGES,
  AUTH_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  FEATURE_FLAGS 
} from '../config/api.config.js'

/**
 * HTTP Client with interceptors for API communication
 * Handles authentication, error handling, and request/response transformation
 */

// Create axios instance
const httpClient = axios.create({
  baseURL: API_ENDPOINTS.API_BASE,
  timeout: API_ENDPOINTS.TIMEOUT,
  headers: DEFAULT_HEADERS,
})

// Request interceptor for authentication and logging
httpClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    console.log('🔐 Token from localStorage:', token ? `Found (${token.substring(0, 20)}...)` : 'Not found')
    console.log('🔐 AUTH_TOKEN_KEY:', AUTH_TOKEN_KEY)
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      console.log('🔐 Authorization header set')
    } else {
      console.log('🔐 No token found, request will be unauthenticated')
    }
    
    // Log API calls (always in development)
    console.log(`🌐 API Request: ${config.method?.toUpperCase()} ${config.url}`, {
      data: config.data,
      params: config.params,
      headers: config.headers,
    })
    
    return config
  },
  (error) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor for error handling and token refresh
httpClient.interceptors.response.use(
  (response) => {
    // Log successful responses in debug mode
    if (FEATURE_FLAGS.DEBUG_API_CALLS) {
      console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, {
        status: response.status,
        data: response.data,
      })
    }
    
    return response
  },
  async (error) => {
    const originalRequest = error.config
    
    // Log errors in debug mode
    if (FEATURE_FLAGS.DEBUG_API_CALLS) {
      console.error(`❌ API Error: ${originalRequest?.method?.toUpperCase()} ${originalRequest?.url}`, {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      })
    }
    
    // Handle token refresh
    if (error.response?.status === HTTP_STATUS.UNAUTHORIZED && !originalRequest._retry) {
      originalRequest._retry = true
      
      try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)
        if (refreshToken) {
          const response = await axios.post(`${API_ENDPOINTS.API_BASE}${API_ENDPOINTS.AUTH.REFRESH}`, {
            refresh_token: refreshToken
          })
          
          const { access_token } = response.data
          localStorage.setItem(AUTH_TOKEN_KEY, access_token)
          
          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${access_token}`
          return httpClient(originalRequest)
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        localStorage.removeItem(AUTH_TOKEN_KEY)
        localStorage.removeItem(REFRESH_TOKEN_KEY)
        // COMENTADO: Evitar redirección automática durante inicialización
        // window.location.href = '/login'
        console.log('🔐 Refresh token failed, but not redirecting during initialization')
        return Promise.reject(refreshError)
      }
    }
    
    // Transform error response
    const transformedError = transformError(error)
    return Promise.reject(transformedError)
  }
)

// Error transformation utility
const transformError = (error) => {
  const response = error.response
  
  if (!response) {
    // Network error
    return {
      type: 'network',
      message: ERROR_MESSAGES.NETWORK_ERROR,
      originalError: error,
    }
  }
  
  const { status, data } = response
  
  switch (status) {
    case HTTP_STATUS.BAD_REQUEST:
      return {
        type: 'validation',
        message: data?.message || ERROR_MESSAGES.VALIDATION_ERROR,
        errors: data?.errors || [],
        originalError: error,
      }
      
    case HTTP_STATUS.UNAUTHORIZED:
      return {
        type: 'auth',
        message: data?.message || ERROR_MESSAGES.UNAUTHORIZED,
        originalError: error,
      }
      
    case HTTP_STATUS.FORBIDDEN:
      return {
        type: 'permission',
        message: data?.message || ERROR_MESSAGES.FORBIDDEN,
        originalError: error,
      }
      
    case HTTP_STATUS.NOT_FOUND:
      return {
        type: 'not_found',
        message: data?.message || ERROR_MESSAGES.NOT_FOUND,
        originalError: error,
      }
      
    case HTTP_STATUS.VALIDATION_ERROR:
      return {
        type: 'validation',
        message: data?.message || ERROR_MESSAGES.VALIDATION_ERROR,
        errors: data?.errors || [],
        originalError: error,
      }
      
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
      return {
        type: 'server',
        message: data?.message || ERROR_MESSAGES.SERVER_ERROR,
        originalError: error,
      }
      
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
      return {
        type: 'service',
        message: data?.message || ERROR_MESSAGES.TIMEOUT_ERROR,
        originalError: error,
      }
      
    default:
      return {
        type: 'unknown',
        message: data?.message || ERROR_MESSAGES.GENERIC_ERROR,
        originalError: error,
      }
  }
}

// High-level API methods
export const apiClient = {
  // GET request
  get: async (url, params = {}, config = {}) => {
    try {
      const response = await httpClient.get(url, { params, ...config })
      return {
        success: true,
        data: response.data,
        meta: response.headers,
      }
    } catch (error) {
      return {
        success: false,
        error,
        data: null,
      }
    }
  },
  
  // POST request
  post: async (url, data = {}, config = {}) => {
    try {
      const response = await httpClient.post(url, data, config)
      return {
        success: true,
        data: response.data,
        meta: response.headers,
      }
    } catch (error) {
      return {
        success: false,
        error,
        data: null,
      }
    }
  },
  
  // PUT request
  put: async (url, data = {}, config = {}) => {
    try {
      const response = await httpClient.put(url, data, config)
      return {
        success: true,
        data: response.data,
        meta: response.headers,
      }
    } catch (error) {
      return {
        success: false,
        error,
        data: null,
      }
    }
  },
  
  // PATCH request
  patch: async (url, data = {}, config = {}) => {
    try {
      const response = await httpClient.patch(url, data, config)
      return {
        success: true,
        data: response.data,
        meta: response.headers,
      }
    } catch (error) {
      return {
        success: false,
        error,
        data: null,
      }
    }
  },
  
  // DELETE request
  delete: async (url, config = {}) => {
    try {
      const response = await httpClient.delete(url, config)
      return {
        success: true,
        data: response.data,
        meta: response.headers,
      }
    } catch (error) {
      return {
        success: false,
        error,
        data: null,
      }
    }
  },
  
  // File upload
  upload: async (url, file, additionalData = {}, onProgress = null) => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      
      // Add additional data to form
      Object.keys(additionalData).forEach(key => {
        formData.append(key, additionalData[key])
      })
      
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      
      // Add progress callback if provided
      if (onProgress) {
        config.onUploadProgress = (progressEvent) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onProgress(progress)
        }
      }
      
      const response = await httpClient.post(url, formData, config)
      return {
        success: true,
        data: response.data,
        meta: response.headers,
      }
    } catch (error) {
      return {
        success: false,
        error,
        data: null,
      }
    }
  },
}

// Authentication helpers
export const authHelpers = {
  setToken: (token, refreshToken = null) => {
    localStorage.setItem(AUTH_TOKEN_KEY, token)
    if (refreshToken) {
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    }
  },
  
  getToken: () => {
    return localStorage.getItem(AUTH_TOKEN_KEY)
  },
  
  clearToken: () => {
    localStorage.removeItem(AUTH_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  },
  
  isAuthenticated: () => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY)
    return !!token && !isTokenExpired(token)
  },
}

// Token validation utility
const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return Date.now() >= payload.exp * 1000
  } catch {
    return true
  }
}

// Request/Response logging for development
export const enableDebugMode = () => {
  window.localStorage.setItem('API_DEBUG', 'true')
}

export const disableDebugMode = () => {
  window.localStorage.removeItem('API_DEBUG')
}

// Cache utilities (simple in-memory cache)
const cache = new Map()

export const cacheHelpers = {
  set: (key, data, ttl = 5 * 60 * 1000) => { // 5 minutes default
    const expiresAt = Date.now() + ttl
    cache.set(key, { data, expiresAt })
  },
  
  get: (key) => {
    const cached = cache.get(key)
    if (!cached) return null
    
    if (Date.now() > cached.expiresAt) {
      cache.delete(key)
      return null
    }
    
    return cached.data
  },
  
  clear: (pattern = null) => {
    if (pattern) {
      for (const key of cache.keys()) {
        if (key.includes(pattern)) {
          cache.delete(key)
        }
      }
    } else {
      cache.clear()
    }
  },
}

// Single export block to avoid duplicates
export { httpClient }
export default apiClient