import { z } from 'zod'

// Order status enum - usando MAYÚSCULAS para coincidir con el backend
export const OrderStatusSchema = z.enum([
  'AWAITING_PAYMENT',
  'PREPARING', 
  'READY_FOR_SHIPPING',
  'SHIPPED',
  'DELIVERED',
  'CANCELLED'
])

// Payment method enum
export const PaymentMethodSchema = z.enum([
  'TRANSFER',
  'YAPE', 
  'PLIN',
  'CASH'
])

// Payment status enum
export const PaymentStatusSchema = z.enum([
  'PENDING',
  'VERIFIED',
  'REJECTED'
])

// Order item schema
export const OrderItemSchema = z.object({
  id: z.number().int().positive().optional(),
  order_id: z.string().optional(),
  product_id: z.number().int().positive(),
  product_name: z.string().min(1, 'Nombre del producto requerido'),
  quantity: z.number().positive('La cantidad debe ser mayor a 0'),
  price: z.number().positive('El precio debe ser mayor a 0'),
  total: z.number().positive('El total debe ser mayor a 0'),
  presentation_info: z.object({
    id: z.number().int().positive(),
    name: z.string(),
    unit: z.string(),
  }).optional().nullable(),
})

// Customer info schema (embedded in order)
export const CustomerInfoSchema = z.object({
  name: z.string().min(1, 'Nombre del cliente requerido').max(100),
  phone: z.string().min(9, 'Teléfono debe tener al menos 9 dígitos').max(15),
  email: z.string().email('Email inválido').optional().nullable(),
  address: z.string().min(10, 'Dirección debe tener al menos 10 caracteres').max(200),
})

// Order schema
export const OrderSchema = z.object({
  id: z.string().min(1, 'ID de pedido requerido'),
  customer_name: z.string().min(1, 'Nombre del cliente requerido').max(100),
  customer_phone: z.string().min(9, 'Teléfono inválido').max(15),
  customer_email: z.string().email().optional().nullable(),
  customer_address: z.string().min(10, 'Dirección muy corta').max(200),
  date: z.string().datetime(),
  status: OrderStatusSchema,
  payment_method: PaymentMethodSchema,
  payment_status: PaymentStatusSchema.default('pending'),
  items: z.array(OrderItemSchema).min(1, 'El pedido debe tener al menos un producto'),
  subtotal: z.number().min(0, 'Subtotal debe ser mayor o igual a 0'),
  tax: z.number().min(0, 'Impuesto debe ser mayor o igual a 0'),
  total: z.number().positive('Total debe ser mayor a 0'),
  notes: z.string().max(300).optional().nullable(),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
  
  // Tracking fields
  status_history: z.array(z.object({
    status: OrderStatusSchema,
    timestamp: z.string().datetime(),
    notes: z.string().optional(),
    updated_by: z.string().optional(),
  })).optional(),
  
  // Delivery info
  delivery_date: z.string().datetime().optional().nullable(),
  delivery_notes: z.string().max(200).optional().nullable(),
})

// Order creation schema (what frontend sends)
export const CreateOrderSchema = z.object({
  customer_name: z.string().min(1, 'Nombre requerido').max(100),
  customer_phone: z.string().min(9, 'Teléfono inválido').max(15),
  customer_email: z.string().email().optional().nullable(),
  customer_address: z.string().min(10, 'Dirección muy corta').max(200),
  payment_method: PaymentMethodSchema,
  items: z.array(z.object({
    product_id: z.number().int().positive(),
    quantity: z.number().positive(),
    presentation_id: z.number().int().positive().optional(), // For presentation products
  })).min(1, 'Agregar al menos un producto'),
  notes: z.string().max(300).optional().nullable(),
})

// Order update schema (for admin)
export const UpdateOrderSchema = z.object({
  id: z.string().min(1),
  status: OrderStatusSchema.optional(),
  payment_status: PaymentStatusSchema.optional(),
  delivery_date: z.string().datetime().optional().nullable(),
  delivery_notes: z.string().max(200).optional().nullable(),
  notes: z.string().max(300).optional().nullable(),
})

// Order status update schema
export const UpdateOrderStatusSchema = z.object({
  id: z.string().min(1),
  status: OrderStatusSchema,
  notes: z.string().max(200).optional(),
})

// Order query parameters
export const OrderQuerySchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(20),
  status: OrderStatusSchema.optional(),
  payment_status: PaymentStatusSchema.optional(),
  customer_phone: z.string().optional(),
  date_from: z.string().datetime().optional(),
  date_to: z.string().datetime().optional(),
  sort_by: z.enum(['date', 'total', 'status', 'customer_name']).default('date'),
  sort_order: z.enum(['asc', 'desc']).default('desc'),
})

// Customer order query (for customer portal)
export const CustomerOrderQuerySchema = z.object({
  customer_phone: z.string().min(9),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(50).default(10),
})

// Order calculations schema
export const OrderCalculationSchema = z.object({
  items: z.array(z.object({
    product_id: z.number().int().positive(),
    quantity: z.number().positive(),
    price: z.number().positive(),
    presentation_id: z.number().int().positive().optional(),
  })),
  tax_rate: z.number().min(0).max(1).default(0.18), // 18% IGV in Peru
})

// Order status flow validation - cambiado a MAYÚSCULAS
export const ORDER_STATUS_FLOW = {
  AWAITING_PAYMENT: ['PREPARING', 'CANCELLED'],
  PREPARING: ['READY_FOR_SHIPPING', 'CANCELLED'],
  READY_FOR_SHIPPING: ['SHIPPED', 'CANCELLED'],
  SHIPPED: ['DELIVERED', 'CANCELLED'],
  DELIVERED: [], // Final state
  CANCELLED: [], // Final state
}

// Status display configuration - cambiado a MAYÚSCULAS para coincidir con backend
export const ORDER_STATUS_CONFIG = {
  AWAITING_PAYMENT: {
    label: 'Esperando Pago',
    color: '#f59e0b',
    description: 'Pedido creado, esperando verificación de pago',
    icon: 'Clock'
  },
  PREPARING: {
    label: 'Preparando',
    color: '#3b82f6', 
    description: 'Pago verificado, preparando pedido',
    icon: 'Package'
  },
  READY_FOR_SHIPPING: {
    label: 'Listo para Envío',
    color: '#8b5cf6',
    description: 'Pedido alistado, listo para enviar',
    icon: 'Truck'
  },
  SHIPPED: {
    label: 'Enviado',
    color: '#06b6d4',
    description: 'Pedido en camino al cliente',
    icon: 'MapPin'
  },
  DELIVERED: {
    label: 'Entregado',
    color: '#10b981',
    description: 'Pedido entregado exitosamente',
    icon: 'CheckCircle'
  },
  CANCELLED: {
    label: 'Cancelado',
    color: '#ef4444',
    description: 'Pedido cancelado',
    icon: 'XCircle'
  }
}

// Type exports
export const OrderType = OrderSchema._type
export const CreateOrderType = CreateOrderSchema._type
export const UpdateOrderType = UpdateOrderSchema._type
export const OrderItemType = OrderItemSchema._type
export const CustomerInfoType = CustomerInfoSchema._type

// Validation helpers
export const validateOrder = (data) => {
  try {
    return { success: true, data: OrderSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateCreateOrder = (data) => {
  try {
    return { success: true, data: CreateOrderSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateOrderStatusTransition = (currentStatus, newStatus) => {
  // Convertir a MAYÚSCULAS para mantener consistencia con el backend
  const normalizedCurrent = typeof currentStatus === 'string' ? currentStatus.toUpperCase() : '';
  const normalizedNew = typeof newStatus === 'string' ? newStatus.toUpperCase() : '';
  
  console.log('🔄 VALIDACIÓN DE TRANSICIÓN DE ESTADO:', {
    estadoActual: currentStatus,
    estadoNormalizado: normalizedCurrent,
    nuevoEstado: newStatus,
    nuevoEstadoNormalizado: normalizedNew
  });
  
  // Si son el mismo estado, permitir
  if (normalizedCurrent === normalizedNew) {
    console.log('✅ Transición permitida: Mismo estado');
    return true;
  }
  
  // Buscar transiciones permitidas (usando estados en MAYÚSCULAS)
  const allowedTransitions = ORDER_STATUS_FLOW[normalizedCurrent] || [];
  
  // Verificar si la transición está permitida
  const isAllowed = allowedTransitions.includes(normalizedNew);
  
  console.log('🔍 Transiciones permitidas para', normalizedCurrent, ':', allowedTransitions);
  console.log('🔍 ¿Transición permitida?', isAllowed ? '✅ SÍ' : '❌ NO');
  
  return isAllowed;
}

// Calculation helpers
export const calculateOrderTotals = (items, taxRate = 0.18) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * taxRate
  const total = subtotal + tax
  
  return {
    subtotal: Number(subtotal.toFixed(2)),
    tax: Number(tax.toFixed(2)),
    total: Number(total.toFixed(2))
  }
}

export const generateOrderId = () => {
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `ORD-${timestamp}${random}`
}

export default {
  OrderSchema,
  CreateOrderSchema,
  UpdateOrderSchema,
  OrderItemSchema,
  CustomerInfoSchema,
  OrderQuerySchema,
  validateOrder,
  validateCreateOrder,
  validateOrderStatusTransition,
  calculateOrderTotals,
  generateOrderId,
  ORDER_STATUS_FLOW,
  ORDER_STATUS_CONFIG,
}