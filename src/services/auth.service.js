import { apiClient, authHelpers } from './http-client.js'
import { API_ENDPOINTS, FEATURE_FLAGS, AUTH_TOKEN_KEY, USER_DATA_KEY } from '../config/api.config.js'
import { 
  validateLogin, 
  validateRegister, 
  validateGuestCheckout,
  hasPermission,
  isTokenExpired,
  getUserFromToken,
  formatPhone,
  LoginSchema,
  RegisterSchema,
  GuestCheckoutSchema,
  TokenResponseSchema 
} from '../schemas/auth.schema.js'

/**
 * Authentication Service
 * Handles all authentication-related API operations
 */

class AuthService {
  constructor() {
    this.currentUser = null
    this.isInitialized = false
  }

  /**
   * Initialize auth service - check for existing session
   * @returns {Promise<Object>} Current user data or null
   */
  async initialize() {
    if (this.isInitialized) {
      return this.currentUser
    }

    const token = authHelpers.getToken()
    if (token && !isTokenExpired(token)) {
      try {
        // Verify token with server
        const response = await apiClient.get(API_ENDPOINTS.AUTH.PROFILE)
        if (response.success && response.data.user) {
          this.currentUser = response.data.user
          localStorage.setItem(USER_DATA_KEY, JSON.stringify(this.currentUser))
        } else {
          // Token is invalid, clear it
          // COMENTADO: Evitar logout automático durante inicialización
          // this.logout()
        }
      } catch (error) {
        // Token verification failed, clear session
        // COMENTADO: Evitar logout automático durante inicialización
        // this.logout()
      }
    } else {
      // No valid token
      // COMENTADO: Evitar logout automático durante inicialización
      // this.logout()
    }

    this.isInitialized = true
    return this.currentUser
  }

  /**
   * Login user
   * @param {Object} credentials - Login credentials (email/phone + password)
   * @returns {Promise<Object>} API response with user data and token
   */
  async login(credentials) {
    // Validate login data
    const validation = validateLogin(credentials)
    if (!validation.success) {
      return {
        success: false,
        error: { type: 'validation', errors: validation.error }
      }
    }

    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, validation.data)
      console.log('Frontend - Login response:', response)
      
      if (response.success) {
        // Los tokens están en response.data.data (doble anidación por el apiClient wrapper)
        const authData = response.data.data
        const { access_token, refresh_token, user } = authData
        
        // Store tokens and user data (solo si user es válido)
        if (user && typeof user === 'object') {
          authHelpers.setToken(access_token, refresh_token)
          this.currentUser = user
          localStorage.setItem(USER_DATA_KEY, JSON.stringify(user))
        } else {
          throw new Error('Invalid user data received from server')
        }
        
        return {
          success: true,
          data: {
            user,
            token: access_token
          }
        }
      }
      
      return response
    } catch (error) {
      console.error('Error during login:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al iniciar sesión' }
      }
    }
  }

  /**
   * Admin login (separate endpoint for enhanced security)
   * @param {Object} credentials - Admin credentials
   * @returns {Promise<Object>} API response with admin user data
   */
  async adminLogin(credentials) {
    try {
      // Validate email format
      if (!credentials.email || !credentials.password) {
        return {
          success: false,
          error: { type: 'validation', message: 'Email y contraseña requeridos' }
        }
      }

      const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, {
        ...credentials,
        admin: true // Flag for admin login
      })
      
      if (response.success) {
        const { access_token, refresh_token, user } = response.data.data
        
        // Verify user has admin role (backend uses ADMIN in uppercase)
        if (user.role !== 'ADMIN') {
          return {
            success: false,
            error: { type: 'permission', message: 'Acceso no autorizado' }
          }
        }
        
        // Store tokens and user data (solo si user es válido)
        if (user && typeof user === 'object') {
          authHelpers.setToken(access_token, refresh_token)
          this.currentUser = user
          localStorage.setItem(USER_DATA_KEY, JSON.stringify(user))
        } else {
          throw new Error('Invalid user data received from server')
        }
        
        return {
          success: true,
          data: {
            user,
            token: access_token
          }
        }
      }
      
      return response
    } catch (error) {
      console.error('Error during admin login:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al iniciar sesión como administrador' }
      }
    }
  }

  /**
   * Register new user
   * @param {Object} userData - Registration data
   * @returns {Promise<Object>} API response with user data
   */
  async register(userData) {
    console.log('🔵 REGISTRO PÚBLICO - Datos del usuario:', userData)
    
    // BYPASS VALIDACIÓN PARA REGISTRO PÚBLICO SIMPLIFICADO
    // const validation = validateRegister(userData)
    // if (!validation.success) { ... }
    
    // ENVIAR DIRECTO AL BACKEND CON FORMATO CORRECTO
    const dataToSend = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
      confirm_password: userData.confirmPassword || userData.password,
      accept_terms: true, // Auto aceptar para registro público
      role: 'CUSTOMER' // Forzar rol cliente
    }
    
    console.log('🔵 ENVIANDO AL BACKEND:', dataToSend)

    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER, dataToSend)
      console.log('🔵 RESPUESTA REGISTRO:', response)
      
      if (response.data?.success) {
        console.log('✅ REGISTRO EXITOSO - Auto login...')
        // Auto login después del registro
        const { access_token, user } = response.data.data
        
        if (access_token && user) {
          console.log('🔵 GUARDANDO TOKEN Y USUARIO:', { token: access_token.substring(0, 20) + '...', user: user.email })
          localStorage.setItem(AUTH_TOKEN_KEY, access_token)
          localStorage.setItem(USER_DATA_KEY, JSON.stringify(user))
          this.currentUser = user
          
          return {
            success: true,
            data: {
              user: user,
              token: access_token
            }
          }
        }
      }
      
      console.log('🔴 REGISTRO FALLIDO:', response.data)
      return response.data
    } catch (error) {
      console.error('🔴 AUTH SERVICE - Error completo:', error)
      console.error('🔴 AUTH SERVICE - Error response:', error.response?.data)
      return {
        success: false,
        error: { type: 'network', message: 'Error al registrar usuario' }
      }
    }
  }

  /**
   * Guest checkout (no registration required)
   * @param {Object} guestData - Guest checkout data
   * @returns {Promise<Object>} API response with guest session
   */
  async guestCheckout(guestData) {
    // Validate guest data
    const validation = validateGuestCheckout(guestData)
    if (!validation.success) {
      return {
        success: false,
        error: { type: 'validation', errors: validation.error }
      }
    }

    // Format phone number
    const formattedData = {
      ...validation.data,
      phone: formatPhone(validation.data.phone)
    }

    try {
      const response = await apiClient.post(`${API_ENDPOINTS.AUTH.LOGIN}/guest`, formattedData)
      
      if (response.success) {
        // Store guest session (temporary)
        const { session_token, guest_data } = response.data
        
        // Store minimal session data
        localStorage.setItem('guest_session', session_token)
        localStorage.setItem('guest_data', JSON.stringify(guest_data))
        
        return {
          success: true,
          data: {
            guest: true,
            user: guest_data,
            session: session_token
          }
        }
      }
      
      return response
    } catch (error) {
      console.error('Error during guest checkout:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error en checkout de invitado' }
      }
    }
  }

  /**
   * Logout user
   * @returns {Promise<void>}
   */
  async logout() {
    try {
      // Call logout endpoint to invalidate server session
      const token = authHelpers.getToken()
      if (token) {
        await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT)
      }
    } catch (error) {
      // Ignore logout errors - clear local session anyway
      console.warn('Error during logout:', error)
    } finally {
      // Clear local session data
      authHelpers.clearToken()
      localStorage.removeItem(USER_DATA_KEY)
      localStorage.removeItem('guest_session')
      localStorage.removeItem('guest_data')
      this.currentUser = null
    }
  }

  /**
   * Get current user
   * @returns {Object|null} Current user data
   */
  getCurrentUser() {
    if (this.currentUser) {
      return this.currentUser
    }

    // Try to get from localStorage
    const userData = localStorage.getItem(USER_DATA_KEY)
    
    // Debug logs para identificar el problema
    console.log('LocalStorage auth_token:', localStorage.getItem(AUTH_TOKEN_KEY))
    console.log('LocalStorage user_data:', userData)
    console.log('LocalStorage user_data type:', typeof userData)
    
    // Verificar que userData no sea null, undefined, o la string "undefined"
    if (userData && userData !== 'undefined' && userData !== 'null') {
      try {
        this.currentUser = JSON.parse(userData)
        return this.currentUser
      } catch (error) {
        console.error('Error parsing user data:', error)
        // Limpiar datos corruptos
        localStorage.removeItem(USER_DATA_KEY)
        this.currentUser = null
      }
    }

    return null
  }

  /**
   * Check if user is authenticated
   * @returns {boolean} True if user is authenticated
   */
  isAuthenticated() {
    return authHelpers.isAuthenticated() && !!this.getCurrentUser()
  }

  /**
   * Check if user is admin
   * @returns {boolean} True if user has admin role
   */
  isAdmin() {
    const user = this.getCurrentUser()
    return user?.role === 'ADMIN'
  }

  /**
   * Check if user has specific permission
   * @param {string} permission - Permission to check
   * @returns {boolean} True if user has permission
   */
  hasPermission(permission) {
    const user = this.getCurrentUser()
    if (!user) return false
    
    return hasPermission(user.role, permission)
  }

  /**
   * Update user profile
   * @param {Object} updateData - Profile update data
   * @returns {Promise<Object>} API response with updated user
   */
  async updateProfile(updateData) {
    if (!this.isAuthenticated()) {
      return {
        success: false,
        error: { type: 'auth', message: 'Usuario no autenticado' }
      }
    }

    try {
      const response = await apiClient.put(API_ENDPOINTS.AUTH.PROFILE, updateData)
      
      if (response.success) {
        // Update local user data
        this.currentUser = { ...this.currentUser, ...response.data.user }
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(this.currentUser))
      }
      
      return response
    } catch (error) {
      console.error('Error updating profile:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al actualizar perfil' }
      }
    }
  }

  /**
   * Change password
   * @param {Object} passwordData - Current and new password
   * @returns {Promise<Object>} API response
   */
  async changePassword(passwordData) {
    if (!this.isAuthenticated()) {
      return {
        success: false,
        error: { type: 'auth', message: 'Usuario no autenticado' }
      }
    }

    try {
      const response = await apiClient.post(`${API_ENDPOINTS.AUTH.PROFILE}/change-password`, passwordData)
      return response
    } catch (error) {
      console.error('Error changing password:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cambiar contraseña' }
      }
    }
  }

  /**
   * Request password reset
   * @param {string} email - User email
   * @returns {Promise<Object>} API response
   */
  async requestPasswordReset(email) {
    try {
      const response = await apiClient.post(`${API_ENDPOINTS.AUTH.LOGIN}/reset-password`, {
        email
      })
      return response
    } catch (error) {
      console.error('Error requesting password reset:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al solicitar restablecimiento' }
      }
    }
  }

  /**
   * Confirm password reset
   * @param {Object} resetData - Reset token and new password
   * @returns {Promise<Object>} API response
   */
  async confirmPasswordReset(resetData) {
    try {
      const response = await apiClient.post(`${API_ENDPOINTS.AUTH.LOGIN}/confirm-reset`, resetData)
      return response
    } catch (error) {
      console.error('Error confirming password reset:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al confirmar restablecimiento' }
      }
    }
  }

  /**
   * Refresh authentication token
   * @returns {Promise<Object>} API response with new token
   */
  async refreshToken() {
    const refreshToken = localStorage.getItem('refresh_token')
    if (!refreshToken) {
      this.logout()
      return {
        success: false,
        error: { type: 'auth', message: 'No refresh token available' }
      }
    }

    try {
      const response = await apiClient.post(API_ENDPOINTS.AUTH.REFRESH, {
        refresh_token: refreshToken
      })
      
      if (response.success) {
        const { access_token, refresh_token: newRefreshToken } = response.data
        authHelpers.setToken(access_token, newRefreshToken)
        
        return {
          success: true,
          data: { token: access_token }
        }
      }
      
      // Refresh failed, logout user
      this.logout()
      return response
    } catch (error) {
      console.error('Error refreshing token:', error)
      this.logout()
      return {
        success: false,
        error: { type: 'auth', message: 'Token refresh failed' }
      }
    }
  }

  /**
   * Get user permissions
   * @returns {Array} Array of user permissions
   */
  getUserPermissions() {
    const user = this.getCurrentUser()
    if (!user) return []
    
    const permissions = USER_PERMISSIONS[user.role] || []
    return permissions
  }

  // Development/testing helpers

  /**
   * Mock login for development
   * @param {string} role - User role (admin, customer)
   * @returns {Object} Mock user session
   */
  mockLogin(role = 'customer') {
    if (!FEATURE_FLAGS.USE_MOCK_DATA) {
      console.warn('Mock login only available in development mode')
      return { success: false }
    }

    const mockUser = {
      id: 1,
      email: role === 'admin' ? 'admin@test.com' : 'customer@test.com',
      name: role === 'admin' ? 'Administrador' : 'Cliente Test',
      phone: '+51987654321',
      role,
      active: true,
      email_verified: true,
      phone_verified: true,
    }

    const mockToken = 'mock_jwt_token_' + Date.now()
    
    authHelpers.setToken(mockToken)
    this.currentUser = mockUser
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(mockUser))
    
    return {
      success: true,
      data: {
        user: mockUser,
        token: mockToken
      }
    }
  }
}

// Export singleton instance
export const authService = new AuthService()
export default authService