import { apiClient, cacheHelpers } from './http-client.js'
import { API_ENDPOINTS, CACHE_CONFIG, FEATURE_FLAGS } from '../config/api.config.js'
import { 
  validateCategory, 
  validateCreateCategory, 
  validateUpdateCategory,
  CategorySchema,
  CreateCategorySchema,
  UpdateCategorySchema 
} from '../schemas/category.schema.js'

// Mock data fallback
import { categories as mockCategories } from '../data/sampleData.js'

/**
 * Category Service
 * Handles all category-related API operations
 */

class CategoryService {
  constructor() {
    this.cachePrefix = 'categories'
    this.cacheTTL = CACHE_CONFIG.CATEGORIES_CACHE_TIME
  }

  /**
   * Get all categories
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} API response with categories array
   */
  async getCategories(params = {}) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      return this._getMockCategories(params)
    }

    const cacheKey = `${this.cachePrefix}_list_${JSON.stringify(params)}`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.CATEGORIES.BASE, params)
      
      if (response.success) {
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching categories:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar categorías' }
      }
    }
  }

  /**
   * Get category by ID
   * @param {number} id - Category ID
   * @returns {Promise<Object>} API response with category data
   */
  async getCategoryById(id) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const category = mockCategories.find(c => c.id === parseInt(id))
      return {
        success: !!category,
        data: category || null,
        error: !category ? { type: 'not_found', message: 'Categoría no encontrada' } : null
      }
    }

    const cacheKey = `${this.cachePrefix}_${id}`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.CATEGORIES.BY_ID(id))
      
      if (response.success) {
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching category:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar categoría' }
      }
    }
  }

  /**
   * Get categories with product counts
   * @returns {Promise<Object>} API response with categories and product counts
   */
  async getCategoriesWithProducts() {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      // Simulate product counts (would come from backend)
      const categoriesWithCounts = mockCategories.map(category => ({
        ...category,
        products_count: Math.floor(Math.random() * 20) + 1 // Random count for demo
      }))
      
      return {
        success: true,
        data: { categories: categoriesWithCounts }
      }
    }

    const cacheKey = `${this.cachePrefix}_with_products`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.CATEGORIES.WITH_PRODUCTS)
      
      if (response.success) {
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching categories with products:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar categorías con productos' }
      }
    }
  }

  /**
   * Create new category (Admin only)
   * @param {Object} categoryData - Category data
   * @returns {Promise<Object>} API response with created category
   */
  async createCategory(categoryData) {
    // Validate category data
    const validation = validateCreateCategory(categoryData)
    if (!validation.success) {
      return {
        success: false,
        error: { type: 'validation', errors: validation.error }
      }
    }

    try {
      const response = await apiClient.post(API_ENDPOINTS.CATEGORIES.BASE, validation.data)
      
      if (response.success) {
        // Clear cache to refresh category lists
        this._clearCategoryCache()
      }
      
      return response
    } catch (error) {
      console.error('Error creating category:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al crear categoría' }
      }
    }
  }

  /**
   * Update category (Admin only)
   * @param {number} id - Category ID
   * @param {Object} updateData - Updated category data
   * @returns {Promise<Object>} API response with updated category
   */
  async updateCategory(id, updateData) {
    const dataWithId = { id: parseInt(id), ...updateData }
    
    // Validate update data
    const validation = validateUpdateCategory(dataWithId)
    if (!validation.success) {
      return {
        success: false,
        error: { type: 'validation', errors: validation.error }
      }
    }

    try {
      const response = await apiClient.put(API_ENDPOINTS.CATEGORIES.BY_ID(id), validation.data)
      
      if (response.success) {
        // Clear cache to refresh category data
        this._clearCategoryCache()
        cacheHelpers.clear(`${this.cachePrefix}_${id}`)
      }
      
      return response
    } catch (error) {
      console.error('Error updating category:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al actualizar categoría' }
      }
    }
  }

  /**
   * Delete category (Admin only)
   * @param {number} id - Category ID
   * @returns {Promise<Object>} API response
   */
  async deleteCategory(id) {
    try {
      const response = await apiClient.delete(API_ENDPOINTS.CATEGORIES.BY_ID(id))
      
      if (response.success) {
        // Clear cache
        this._clearCategoryCache()
        cacheHelpers.clear(`${this.cachePrefix}_${id}`)
      }
      
      return response
    } catch (error) {
      console.error('Error deleting category:', error)
      
      // Handle specific error cases
      if (error.type === 'validation' && error.message.includes('products')) {
        return {
          success: false,
          error: { 
            type: 'business_rule', 
            message: 'No se puede eliminar una categoría que tiene productos asociados' 
          }
        }
      }
      
      return {
        success: false,
        error: { type: 'network', message: 'Error al eliminar categoría' }
      }
    }
  }

  /**
   * Check if category name is available
   * @param {string} name - Category name to check
   * @param {number} excludeId - ID to exclude from check (for updates)
   * @returns {Promise<Object>} API response with availability status
   */
  async checkCategoryNameAvailability(name, excludeId = null) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const exists = mockCategories.some(cat => 
        cat.name.toLowerCase() === name.toLowerCase() && 
        cat.id !== excludeId
      )
      
      return {
        success: true,
        data: { available: !exists }
      }
    }

    try {
      const params = { name }
      if (excludeId) {
        params.exclude_id = excludeId
      }
      
      const response = await apiClient.get(`${API_ENDPOINTS.CATEGORIES.BASE}/check-name`, params)
      return response
    } catch (error) {
      console.error('Error checking category name:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al verificar nombre' }
      }
    }
  }

  /**
   * Get category statistics
   * @returns {Promise<Object>} API response with category statistics
   */
  async getCategoryStats() {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      // Mock statistics
      const stats = {
        total_categories: mockCategories.length,
        active_categories: mockCategories.filter(c => c.active !== false).length,
        categories_with_products: Math.floor(mockCategories.length * 0.8),
        top_categories: mockCategories.slice(0, 3).map(cat => ({
          ...cat,
          products_count: Math.floor(Math.random() * 50) + 1
        }))
      }
      
      return { success: true, data: stats }
    }

    try {
      const response = await apiClient.get(`${API_ENDPOINTS.CATEGORIES.BASE}/stats`)
      return response
    } catch (error) {
      console.error('Error fetching category stats:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar estadísticas' }
      }
    }
  }

  /**
   * Reorder categories
   * @param {Array} categoryOrders - Array of {id, sort_order} objects
   * @returns {Promise<Object>} API response
   */
  async reorderCategories(categoryOrders) {
    // Validate order data
    const validOrders = categoryOrders.every(order => 
      typeof order.id === 'number' && 
      typeof order.sort_order === 'number'
    )
    
    if (!validOrders) {
      return {
        success: false,
        error: { type: 'validation', message: 'Datos de orden inválidos' }
      }
    }

    try {
      const response = await apiClient.patch(`${API_ENDPOINTS.CATEGORIES.BASE}/reorder`, {
        orders: categoryOrders
      })
      
      if (response.success) {
        this._clearCategoryCache()
      }
      
      return response
    } catch (error) {
      console.error('Error reordering categories:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al reordenar categorías' }
      }
    }
  }

  // Private methods

  /**
   * Get mock categories for development
   * @private
   */
  _getMockCategories(params = {}) {
    let filteredCategories = [...mockCategories]
    
    // Apply filters
    if (params.active_only !== false) {
      filteredCategories = filteredCategories.filter(c => c.active !== false)
    }
    
    // Apply sorting
    if (params.sort_by) {
      filteredCategories.sort((a, b) => {
        let valueA = a[params.sort_by]
        let valueB = b[params.sort_by]
        
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
      // Default sort by sort_order
      filteredCategories.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    }
    
    return {
      success: true,
      data: {
        categories: filteredCategories,
        total: filteredCategories.length
      }
    }
  }

  /**
   * Alias for getCategories (for compatibility)
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} API response with categories array
   */
  async getAll(params = {}) {
    return this.getCategories(params)
  }

  /**
   * Clear category-related cache
   * @private
   */
  _clearCategoryCache() {
    cacheHelpers.clear(this.cachePrefix)
  }
}

// Export singleton instance
export const categoryService = new CategoryService()
export default categoryService