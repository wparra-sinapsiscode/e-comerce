import { apiClient, cacheHelpers } from './http-client.js'
import { API_ENDPOINTS, CACHE_CONFIG, FEATURE_FLAGS } from '../config/api.config.js'
import { 
  validateProduct, 
  validateCreateProduct, 
  validateProductQuery,
  ProductSchema,
  CreateProductSchema,
  UpdateProductSchema 
} from '../schemas/product.schema.js'

// Mock data fallback (will be removed after backend integration)
import { products as mockProducts } from '../data/sampleData.js'

/**
 * Product Service
 * Handles all product-related API operations
 */

class ProductService {
  constructor() {
    this.cachePrefix = 'products'
    this.cacheTTL = CACHE_CONFIG.PRODUCTS_CACHE_TIME
  }

  /**
   * Get all products with optional filters
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} API response with products array
   */
  async getProducts(params = {}) {
    // Use mock data if feature flag is enabled
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      return this._getMockProducts(params)
    }

    // Generate cache key
    const cacheKey = `${this.cachePrefix}_list_${JSON.stringify(params)}`
    
    // Check cache first
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    // Validate query parameters
    const validation = validateProductQuery(params)
    if (!validation.success) {
      return {
        success: false,
        error: { type: 'validation', errors: validation.error }
      }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.BASE, validation.data)
      
      if (response.success) {
        // Cache successful response
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching products:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar productos' }
      }
    }
  }

  /**
   * Get product by ID
   * @param {number} id - Product ID
   * @returns {Promise<Object>} API response with product data
   */
  async getProductById(id) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const product = mockProducts.find(p => p.id === parseInt(id))
      return {
        success: !!product,
        data: product || null,
        error: !product ? { type: 'not_found', message: 'Producto no encontrado' } : null
      }
    }

    const cacheKey = `${this.cachePrefix}_${id}`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.BY_ID(id))
      
      if (response.success) {
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching product:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar producto' }
      }
    }
  }

  /**
   * Get products by category
   * @param {number} categoryId - Category ID
   * @param {Object} params - Additional query parameters
   * @returns {Promise<Object>} API response with products array
   */
  async getProductsByCategory(categoryId, params = {}) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const filteredProducts = mockProducts.filter(p => p.category_id === parseInt(categoryId))
      return { success: true, data: { products: filteredProducts, total: filteredProducts.length } }
    }

    const cacheKey = `${this.cachePrefix}_category_${categoryId}_${JSON.stringify(params)}`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.BY_CATEGORY(categoryId), params)
      
      if (response.success) {
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching products by category:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar productos de la categoría' }
      }
    }
  }

  /**
   * Search products
   * @param {string} query - Search query
   * @param {Object} params - Additional search parameters
   * @returns {Promise<Object>} API response with search results
   */
  async searchProducts(query, params = {}) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const searchResults = mockProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description?.toLowerCase().includes(query.toLowerCase())
      )
      return { success: true, data: { products: searchResults, total: searchResults.length } }
    }

    const searchParams = { q: query, ...params }
    
    try {
      const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.SEARCH, searchParams)
      return response
    } catch (error) {
      console.error('Error searching products:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error en la búsqueda' }
      }
    }
  }

  /**
   * Get featured products
   * @param {number} limit - Maximum number of products to return
   * @returns {Promise<Object>} API response with featured products
   */
  async getFeaturedProducts(limit = 8) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const featured = mockProducts.slice(0, limit)
      return { success: true, data: { products: featured, total: featured.length } }
    }

    const cacheKey = `${this.cachePrefix}_featured_${limit}`
    const cached = cacheHelpers.get(cacheKey)
    if (cached) {
      return { success: true, data: cached, fromCache: true }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.FEATURED, { limit })
      
      if (response.success) {
        cacheHelpers.set(cacheKey, response.data, this.cacheTTL)
      }
      
      return response
    } catch (error) {
      console.error('Error fetching featured products:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar productos destacados' }
      }
    }
  }

  /**
   * Create new product (Admin only)
   * @param {Object} productData - Product data
   * @returns {Promise<Object>} API response with created product
   */
  async createProduct(productData) {
    // Validate product data
    const validation = validateCreateProduct(productData)
    if (!validation.success) {
      return {
        success: false,
        error: { type: 'validation', errors: validation.error }
      }
    }

    try {
      const response = await apiClient.post(API_ENDPOINTS.PRODUCTS.BASE, validation.data)
      
      if (response.success) {
        // Clear cache to refresh product lists
        this._clearProductCache()
      }
      
      return response
    } catch (error) {
      console.error('Error creating product:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al crear producto' }
      }
    }
  }

  /**
   * Update product (Admin only)
   * @param {number} id - Product ID
   * @param {Object} updateData - Updated product data
   * @returns {Promise<Object>} API response with updated product
   */
  async updateProduct(id, updateData) {
    const dataWithId = { id: parseInt(id), ...updateData }
    
    try {
      // Validate with UpdateProductSchema
      UpdateProductSchema.parse(dataWithId)
    } catch (error) {
      return {
        success: false,
        error: { type: 'validation', errors: error.errors }
      }
    }

    try {
      const response = await apiClient.put(API_ENDPOINTS.PRODUCTS.BY_ID(id), dataWithId)
      
      if (response.success) {
        // Clear cache to refresh product data
        this._clearProductCache()
        cacheHelpers.clear(`${this.cachePrefix}_${id}`)
      }
      
      return response
    } catch (error) {
      console.error('Error updating product:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al actualizar producto' }
      }
    }
  }

  /**
   * Delete product (Admin only)
   * @param {number} id - Product ID
   * @returns {Promise<Object>} API response
   */
  async deleteProduct(id) {
    console.log('🗑️ SERVICE DELETE - ID:', id)
    console.log('🗑️ SERVICE DELETE - URL:', API_ENDPOINTS.PRODUCTS.BY_ID(id))
    
    try {
      const response = await apiClient.delete(API_ENDPOINTS.PRODUCTS.BY_ID(id))
      console.log('🗑️ SERVICE DELETE RESPONSE:', response)
      
      if (response.success) {
        // Clear cache
        this._clearProductCache()
        cacheHelpers.clear(`${this.cachePrefix}_${id}`)
      }
      
      return response
    } catch (error) {
      console.error('❌ SERVICE DELETE ERROR:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al eliminar producto' }
      }
    }
  }

  /**
   * Alias for deleteProduct (for compatibility)
   * @param {number} id - Product ID
   * @returns {Promise<Object>} API response
   */
  async delete(id) {
    console.log('🗑️ SERVICE DELETE ALIAS - Calling deleteProduct with ID:', id)
    return this.deleteProduct(id)
  }

  /**
   * Get product presentations
   * @param {number} productId - Product ID
   * @returns {Promise<Object>} API response with presentations
   */
  async getProductPresentations(productId) {
    if (FEATURE_FLAGS.USE_MOCK_DATA) {
      const product = mockProducts.find(p => p.id === parseInt(productId))
      return {
        success: true,
        data: { presentations: product?.presentations || [] }
      }
    }

    try {
      const response = await apiClient.get(API_ENDPOINTS.PRODUCTS.PRESENTATIONS(productId))
      return response
    } catch (error) {
      console.error('Error fetching product presentations:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al cargar presentaciones' }
      }
    }
  }

  /**
   * Upload product image
   * @param {File} file - Image file
   * @param {Function} onProgress - Progress callback
   * @returns {Promise<Object>} API response with image URL
   */
  async uploadProductImage(file, onProgress = null) {
    // Validate file
    if (!file || !file.type.startsWith('image/')) {
      return {
        success: false,
        error: { type: 'validation', message: 'Archivo debe ser una imagen válida' }
      }
    }

    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      return {
        success: false,
        error: { type: 'validation', message: 'La imagen no debe superar 5MB' }
      }
    }

    try {
      const response = await apiClient.upload(
        API_ENDPOINTS.UPLOADS.IMAGES,
        file,
        { type: 'product' },
        onProgress
      )
      
      return response
    } catch (error) {
      console.error('Error uploading image:', error)
      return {
        success: false,
        error: { type: 'network', message: 'Error al subir imagen' }
      }
    }
  }

  // Private methods

  /**
   * Get mock products for development
   * @private
   */
  _getMockProducts(params = {}) {
    let filteredProducts = [...mockProducts]
    
    // Apply filters
    if (params.category_id) {
      filteredProducts = filteredProducts.filter(p => p.category_id === parseInt(params.category_id))
    }
    
    if (params.search) {
      const search = params.search.toLowerCase()
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(search) ||
        p.description?.toLowerCase().includes(search)
      )
    }
    
    if (params.min_price) {
      filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(params.min_price))
    }
    
    if (params.max_price) {
      filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(params.max_price))
    }
    
    // Apply sorting
    if (params.sort_by) {
      filteredProducts.sort((a, b) => {
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
    }
    
    // Apply pagination
    const page = params.page || 1
    const limit = params.limit || 12
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)
    
    return {
      success: true,
      data: {
        products: paginatedProducts,
        total: filteredProducts.length,
        page,
        limit,
        total_pages: Math.ceil(filteredProducts.length / limit)
      }
    }
  }

  /**
   * Alias for getProducts (for compatibility)
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} API response with products array
   */
  async getAll(params = {}) {
    return this.getProducts(params)
  }

  /**
   * Clear product-related cache
   * @private
   */
  _clearProductCache() {
    cacheHelpers.clear(this.cachePrefix)
  }
}

// Export singleton instance
export const productService = new ProductService()
export default productService