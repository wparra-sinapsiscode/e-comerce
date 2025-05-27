import { z } from 'zod'

// Available icons enum (based on your existing categories)
export const CategoryIconSchema = z.enum([
  'Apple', 'Carrot', 'Milk', 'Drumstick', 'Fish', 
  'Bread', 'Wine', 'ShoppingBasket', 'Coffee', 'Egg'
])

// Category schema
export const CategorySchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1, 'Nombre de categoría requerido').max(50),
  icon: CategoryIconSchema,
  color: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Color debe ser formato hexadecimal válido'),
  sort_order: z.number().int().default(0),
  active: z.boolean().default(true),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
  
  // Computed fields
  products_count: z.number().int().min(0).optional(),
})

// Category creation schema
export const CreateCategorySchema = CategorySchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
  products_count: true,
})

// Category update schema
export const UpdateCategorySchema = CreateCategorySchema.partial().extend({
  id: z.number().int().positive(),
})

// Category with products schema
export const CategoryWithProductsSchema = CategorySchema.extend({
  products: z.array(z.object({
    id: z.number().int().positive(),
    name: z.string(),
    price: z.number().positive(),
    image: z.string().url().optional().nullable(),
  })).optional(),
})

// Category query schema
export const CategoryQuerySchema = z.object({
  include_products: z.boolean().default(false),
  include_count: z.boolean().default(true),
  active_only: z.boolean().default(true),
  sort_by: z.enum(['name', 'sort_order', 'created_at']).default('sort_order'),
  sort_order: z.enum(['asc', 'desc']).default('asc'),
})

// Available colors for categories
export const CATEGORY_COLORS = [
  '#e74c3c', // Red
  '#3498db', // Blue  
  '#2ecc71', // Green
  '#f39c12', // Orange
  '#9b59b6', // Purple
  '#1abc9c', // Turquoise
  '#e67e22', // Dark orange
  '#34495e', // Dark blue
  '#f1c40f', // Yellow
  '#95a5a6', // Gray
]

// Icon mappings with descriptions
export const ICON_DESCRIPTIONS = {
  Apple: 'Frutas',
  Carrot: 'Verduras', 
  Milk: 'Lácteos',
  Drumstick: 'Carnes',
  Fish: 'Pescados',
  Bread: 'Panadería',
  Wine: 'Bebidas',
  ShoppingBasket: 'Abarrotes',
  Coffee: 'Cafetería',
  Egg: 'Huevos y derivados',
}

// Type exports
export const CategoryType = CategorySchema._type
export const CreateCategoryType = CreateCategorySchema._type
export const UpdateCategoryType = UpdateCategorySchema._type
export const CategoryQueryType = CategoryQuerySchema._type

// Validation helpers
export const validateCategory = (data) => {
  try {
    return { success: true, data: CategorySchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateCreateCategory = (data) => {
  try {
    return { success: true, data: CreateCategorySchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateUpdateCategory = (data) => {
  try {
    return { success: true, data: UpdateCategorySchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

// Helper function to get icon description
export const getIconDescription = (icon) => {
  return ICON_DESCRIPTIONS[icon] || icon
}

// Helper function to validate color format
export const isValidColor = (color) => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)
}

export default {
  CategorySchema,
  CreateCategorySchema,
  UpdateCategorySchema,
  CategoryWithProductsSchema,
  CategoryQuerySchema,
  validateCategory,
  validateCreateCategory,
  validateUpdateCategory,
  CATEGORY_COLORS,
  ICON_DESCRIPTIONS,
  getIconDescription,
  isValidColor,
}