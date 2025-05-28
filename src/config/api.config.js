/**
 * API Configuration
 * Centralized configuration for all API endpoints and settings
 */

// Environment-based configuration
const API_CONFIG = {
  development: {
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
    API_VERSION: import.meta.env.VITE_API_VERSION || 'v1',
    TIMEOUT: 10000,
  },
  production: {
    BASE_URL: 'https://api.ecommerce-app.com',
    API_VERSION: 'v1',
    TIMEOUT: 15000,
  },
  staging: {
    BASE_URL: 'https://staging-api.ecommerce-app.com',
    API_VERSION: 'v1',
    TIMEOUT: 12000,
  }
};

// Get current environment
const ENV = import.meta.env.VITE_ENVIRONMENT || 'development';
const currentConfig = API_CONFIG[ENV];

// API Endpoints
export const API_ENDPOINTS = {
  // Base configuration
  BASE_URL: currentConfig.BASE_URL,
  API_VERSION: currentConfig.API_VERSION,
  TIMEOUT: currentConfig.TIMEOUT,

  // Full API base URL
  API_BASE: `${currentConfig.BASE_URL}/api/${currentConfig.API_VERSION}`,

  // Authentication endpoints
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile',
  },

  // Products endpoints
  PRODUCTS: {
    BASE: '/products',
    BY_ID: (id) => `/products/${id}`,
    BY_CATEGORY: (categoryId) => `/products/category/${categoryId}`,
    SEARCH: '/products/search',
    FEATURED: '/products/featured',
    PRESENTATIONS: (productId) => `/products/${productId}/presentations`,
  },

  // Categories endpoints
  CATEGORIES: {
    BASE: '/categories',
    BY_ID: (id) => `/categories/${id}`,
    WITH_PRODUCTS: '/categories/with-products',
  },

  // Orders endpoints
  ORDERS: {
    BASE: '/orders',
    BY_ID: (id) => `/orders/${id}`,
    BY_CUSTOMER: (customerId) => `/orders/customer/${customerId}`,
    BY_STATUS: (status) => `/orders/status/${status}`,
    UPDATE_STATUS: (id) => `/orders/${id}/status`,
    ITEMS: (orderId) => `/orders/${orderId}/items`,
  },

  // Payments endpoints
  PAYMENTS: {
    BASE: '/payments',
    BY_ID: (id) => `/payments/${id}`,
    BY_ORDER: (orderId) => `/payments/order/${orderId}`,
    VERIFY: (id) => `/payments/${id}/verify`,
    CONFIRM: (id) => `/payments/${id}/confirm`,
    UPLOAD_VOUCHER: (id) => `/payments/${id}/voucher`,
  },

  // Admin endpoints
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    STATS: '/admin/stats',
    REPORTS: '/admin/reports',
  },

  // File upload endpoints
  UPLOADS: {
    IMAGES: '/uploads/images',
    VOUCHERS: '/uploads/vouchers',
    DOCUMENTS: '/uploads/documents',
  }
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  VALIDATION_ERROR: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

// Request headers
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

// Auth token key for localStorage
export const AUTH_TOKEN_KEY = 'ecommerce_auth_token';
export const REFRESH_TOKEN_KEY = 'ecommerce_refresh_token';
export const USER_DATA_KEY = 'ecommerce_user_data';

// API Feature flags (for gradual rollout) - CORREGIDO PARA VITE
export const FEATURE_FLAGS = {
  USE_MOCK_DATA: import.meta.env.VITE_USE_MOCK_DATA === 'true',
  ENABLE_REAL_PAYMENTS: import.meta.env.VITE_ENABLE_REAL_PAYMENTS === 'true',
  ENABLE_PUSH_NOTIFICATIONS: import.meta.env.VITE_ENABLE_PUSH_NOTIFICATIONS === 'true',
  DEBUG_API_CALLS: import.meta.env.VITE_DEBUG_API === 'true',
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,
  DEFAULT_PAGE: 1,
};

// Cache configuration
export const CACHE_CONFIG = {
  PRODUCTS_CACHE_TIME: 5 * 60 * 1000, // 5 minutes
  CATEGORIES_CACHE_TIME: 30 * 60 * 1000, // 30 minutes
  ORDERS_CACHE_TIME: 2 * 60 * 1000, // 2 minutes
  USER_CACHE_TIME: 10 * 60 * 1000, // 10 minutes
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Error de conexión. Verifica tu internet.',
  UNAUTHORIZED: 'Tu sesión ha expirado. Inicia sesión nuevamente.',
  FORBIDDEN: 'No tienes permisos para realizar esta acción.',
  NOT_FOUND: 'El recurso solicitado no fue encontrado.',
  VALIDATION_ERROR: 'Los datos enviados no son válidos.',
  SERVER_ERROR: 'Error interno del servidor. Intenta más tarde.',
  TIMEOUT_ERROR: 'La petición tardó demasiado tiempo.',
  GENERIC_ERROR: 'Ocurrió un error inesperado.',
};

export default {
  API_ENDPOINTS,
  HTTP_STATUS,
  DEFAULT_HEADERS,
  FEATURE_FLAGS,
  PAGINATION,
  CACHE_CONFIG,
  ERROR_MESSAGES,
};