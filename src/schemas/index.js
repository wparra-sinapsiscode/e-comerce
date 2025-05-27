/**
 * Centralized schema exports
 * Single point of import for all Zod schemas and validation utilities
 */

// Schema exports
export * from './auth.schema.js'
export * from './category.schema.js'
export * from './order.schema.js'
export * from './payment.schema.js'
export * from './product.schema.js'

// Common validation schemas
import { z } from 'zod'

// Common field schemas that can be reused
export const CommonSchemas = {
  // ID fields
  id: z.number().int().positive(),
  stringId: z.string().min(1),
  uuid: z.string().uuid(),
  
  // Pagination
  pagination: z.object({
    page: z.number().int().positive().default(1),
    limit: z.number().int().positive().max(100).default(20),
    sort_by: z.string().optional(),
    sort_order: z.enum(['asc', 'desc']).default('asc'),
  }),
  
  // Timestamps
  timestamp: z.string().datetime(),
  optionalTimestamp: z.string().datetime().optional(),
  
  // Text fields
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  notes: z.string().max(300).optional(),
  
  // Contact info
  email: z.string().email(),
  phone: z.string().min(9).max(15),
  address: z.string().min(10).max(200),
  
  // Numbers
  price: z.number().positive(),
  quantity: z.number().positive(),
  percentage: z.number().min(0).max(100),
  
  // URLs and files
  url: z.string().url(),
  imageUrl: z.string().url().optional().nullable(),
  
  // Boolean flags
  active: z.boolean().default(true),
  featured: z.boolean().default(false),
}

// API Response schemas
export const APIResponseSchema = z.object({
  success: z.boolean(),
  data: z.any(),
  message: z.string().optional(),
  errors: z.array(z.string()).optional(),
  meta: z.object({
    page: z.number().int().optional(),
    limit: z.number().int().optional(),
    total: z.number().int().optional(),
    total_pages: z.number().int().optional(),
  }).optional(),
})

export const ErrorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  errors: z.array(z.object({
    field: z.string().optional(),
    message: z.string(),
    code: z.string().optional(),
  })).optional(),
  code: z.string().optional(),
  timestamp: z.string().datetime().optional(),
})

// File upload schemas
export const FileUploadSchema = z.object({
  file: z.any(), // File object
  type: z.enum(['image', 'document', 'voucher']),
  max_size: z.number().int().positive().default(5 * 1024 * 1024), // 5MB
  allowed_types: z.array(z.string()).optional(),
})

export const UploadResponseSchema = z.object({
  success: z.boolean(),
  url: z.string().url(),
  filename: z.string(),
  size: z.number().int(),
  type: z.string(),
})

// Search and filter schemas
export const SearchSchema = z.object({
  q: z.string().min(1).max(100),
  category: z.string().optional(),
  min_price: z.number().positive().optional(),
  max_price: z.number().positive().optional(),
  sort: z.enum(['name', 'price', 'date', 'relevance']).default('relevance'),
  order: z.enum(['asc', 'desc']).default('asc'),
})

// Date range schema
export const DateRangeSchema = z.object({
  start_date: z.string().datetime(),
  end_date: z.string().datetime(),
}).refine(data => new Date(data.start_date) <= new Date(data.end_date), {
  message: 'La fecha de inicio debe ser anterior a la fecha final',
  path: ['end_date'],
})

// Validation utility functions
export const createValidationResult = (success, data = null, error = null) => ({
  success,
  data,
  error,
})

export const validateSchema = (schema, data) => {
  try {
    const validData = schema.parse(data)
    return createValidationResult(true, validData, null)
  } catch (error) {
    return createValidationResult(false, null, error.errors)
  }
}

// Generic CRUD validation helpers
export const createCRUDValidators = (schema) => {
  const createSchema = schema.omit({ id: true, created_at: true, updated_at: true })
  const updateSchema = createSchema.partial().extend({ id: z.number().int().positive() })
  
  return {
    validateCreate: (data) => validateSchema(createSchema, data),
    validateUpdate: (data) => validateSchema(updateSchema, data),
    validateFull: (data) => validateSchema(schema, data),
  }
}

// Form validation helpers for React Hook Form
export const createFormResolver = (schema) => {
  return async (data) => {
    try {
      const validData = schema.parse(data)
      return { values: validData, errors: {} }
    } catch (error) {
      const formErrors = {}
      error.errors.forEach(err => {
        const path = err.path.join('.')
        formErrors[path] = { message: err.message }
      })
      return { values: {}, errors: formErrors }
    }
  }
}

// Environment validation schema
export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'staging']).default('development'),
  REACT_APP_API_URL: z.string().url(),
  REACT_APP_USE_MOCK_DATA: z.string().transform(val => val === 'true').default('false'),
  REACT_APP_ENABLE_REAL_PAYMENTS: z.string().transform(val => val === 'true').default('false'),
  REACT_APP_DEBUG_API: z.string().transform(val => val === 'true').default('false'),
})

export default {
  CommonSchemas,
  APIResponseSchema,
  ErrorResponseSchema,
  FileUploadSchema,
  UploadResponseSchema,
  SearchSchema,
  DateRangeSchema,
  validateSchema,
  createValidationResult,
  createCRUDValidators,
  createFormResolver,
  EnvSchema,
}