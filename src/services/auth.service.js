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
        if (response.success) {
          this.currentUser = response.data.user
          localStorage.setItem(USER_DATA_KEY, JSON.stringify(this.currentUser))
        } else {
          // Token is invalid, clear it
          this.logout()
        }
      } catch (error) {
        // Token verification failed, clear session
        this.logout()
      }
    } else {
      // No valid token
      this.logout()
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
      
      if (response.success) {
        // FIX: Los tokens están en response.data.data, no en response.data
        const authData = response.data.data || response.data
        const { access_token, refresh_token, user } = authData
        
        // Store tokens and user data
        authHelpers.setToken(access_token, refresh_token)
        this.currentUser = user
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(user))
        
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
        const { access_token, refresh_token, user } = response.data
        
        // Verify user has admin role
        if (user.role !== 'admin') {
          return {
            success: false,
            error: { type: 'permission', message: 'Acceso no autorizado' }
          }
        }
        
        // Store tokens and user data
        authHelpers.setToken(access_token, refresh_token)
        this.currentUser = user
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(user))
        
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
    // Validate registration data
    const validation = validateRegister(userData)
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
      const response = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER, formattedData)
      
      if (response.success) {
        // Auto-login after successful registration
        const loginResponse = await this.login({
          email: formattedData.email,
          password: formattedData.password
        })
        
        return loginResponse
      }
      
      return response
    } catch (error) {
      console.error('Error during registration:', error)
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
    if (userData) {
      try {
        this.currentUser = JSON.parse(userData)
        return this.currentUser
      } catch (error) {
        console.error('Error parsing user data:', error)
        this.logout()
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
    return user?.role === 'admin'
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