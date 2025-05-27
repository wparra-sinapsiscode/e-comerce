import { z } from 'zod'

// Unit types enum
export const UnitTypeSchema = z.enum(['kg', 'u', 'l', 'g', 'paq', 'presentation'])

// Presentation schema
export const PresentationSchema = z.object({
  id: z.number().int().positive(),
  product_id: z.number().int().positive().optional(),
  name: z.string().min(1, 'Nombre de presentación requerido').max(50),
  price: z.number().positive('El precio debe ser mayor a 0'),
  unit: z.string().min(1, 'Unidad requerida').max(20),
  sort_order: z.number().int().default(0),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
})

// Product schema
export const ProductSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1, 'Nombre del producto requerido').max(100),
  category_id: z.number().int().positive('Categoría requerida'),
  price: z.number().positive('El precio debe ser mayor a 0'),
  unit: UnitTypeSchema,
  description: z.string().max(500).optional().nullable(),
  image: z.string().url().optional().nullable(),
  presentations: z.array(PresentationSchema).optional(),
  active: z.boolean().default(true),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
  
  // Computed fields that might come from backend
  category_name: z.string().optional(),
  category_color: z.string().optional(),
  category_icon: z.string().optional(),
})

// Product creation schema (without computed fields)
export const CreateProductSchema = ProductSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  category_name: true,
  category_color: true,
  category_icon: true,
})

// Product update schema (partial except for id)
export const UpdateProductSchema = CreateProductSchema.partial().extend({
  id: z.number().int().positive(),
})

// Product query parameters schema
export const ProductQuerySchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(12),
  category_id: z.number().int().positive().optional(),
  search: z.string().optional(),
  sort_by: z.enum(['name', 'price', 'created_at']).default('name'),
  sort_order: z.enum(['asc', 'desc']).default('asc'),
  min_price: z.number().positive().optional(),
  max_price: z.number().positive().optional(),
  unit: UnitTypeSchema.optional(),
  active: z.boolean().optional(),
})

// Product with presentations for frontend use
export const ProductWithPresentationsSchema = ProductSchema.extend({
  presentations: z.array(PresentationSchema).default([]),
})

// Presentation creation schema
export const CreatePresentationSchema = PresentationSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
})

// Unit configuration schema (for frontend logic)
export const UnitConfigSchema = z.object({
  unit: UnitTypeSchema,
  allowDecimals: z.boolean(),
  step: z.number().positive(),
  minQuantity: z.number().positive(),
  label: z.string(),
  displayDecimals: z.number().int().min(0).max(3),
})

// Type exports for TypeScript-like usage
export const ProductType = ProductSchema._type
export const CreateProductType = CreateProductSchema._type
export const UpdateProductType = UpdateProductSchema._type
export const PresentationType = PresentationSchema._type
export const CreatePresentationType = CreatePresentationSchema._type
export const ProductQueryType = ProductQuerySchema._type

// Validation helpers
export const validateProduct = (data) => {
  try {
    return { success: true, data: ProductSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateCreateProduct = (data) => {
  try {
    return { success: true, data: CreateProductSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateProductQuery = (params) => {
  try {
    return { success: true, data: ProductQuerySchema.parse(params), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

// Default unit configurations (matching your existing logic)
export const DEFAULT_UNIT_CONFIGS = {
  kg: {
    allowDecimals: true,
    step: 0.1,
    minQuantity: 0.1,
    label: 'kg',
    displayDecimals: 1
  },
  u: {
    allowDecimals: false,
    step: 1,
    minQuantity: 1,
    label: 'unidad(es)',
    displayDecimals: 0
  },
  l: {
    allowDecimals: true,
    step: 0.25,
    minQuantity: 0.25,
    label: 'litros',
    displayDecimals: 2
  },
  g: {
    allowDecimals: true,
    step: 0.1,
    minQuantity: 0.1,
    label: 'gramos',
    displayDecimals: 1
  },
  paq: {
    allowDecimals: false,
    step: 1,
    minQuantity: 1,
    label: 'paquete(s)',
    displayDecimals: 0
  },
  presentation: {
    allowDecimals: false,
    step: 1,
    minQuantity: 1,
    label: 'presentación',
    displayDecimals: 0
  }
}

export default {
  ProductSchema,
  CreateProductSchema,
  UpdateProductSchema,
  PresentationSchema,
  CreatePresentationSchema,
  ProductQuerySchema,
  validateProduct,
  validateCreateProduct,
  validateProductQuery,
  DEFAULT_UNIT_CONFIGS,
}