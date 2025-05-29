import { z } from 'zod'
import { PaymentMethodSchema, PaymentStatusSchema } from './order.schema.js'

// Payment schema
export const PaymentSchema = z.object({
  id: z.string().min(1, 'ID de pago requerido'),
  order_id: z.string().min(1, 'ID de pedido requerido'),
  customer_name: z.string().min(1, 'Nombre del cliente requerido').max(100),
  customer_phone: z.string().min(9).max(15),
  date: z.string().datetime(),
  amount: z.number().positive('El monto debe ser mayor a 0'),
  method: PaymentMethodSchema,
  status: PaymentStatusSchema,
  voucher: z.string().url().optional().nullable(),
  voucher_file_name: z.string().optional().nullable(),
  reference_number: z.string().max(50).optional().nullable(),
  verification_notes: z.string().max(300).optional().nullable(),
  verified_by: z.string().max(100).optional().nullable(),
  verified_at: z.string().datetime().optional().nullable(),
  rejected_reason: z.string().max(200).optional().nullable(),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
})

// Payment creation schema
export const CreatePaymentSchema = z.object({
  order_id: z.string().min(1, 'ID de pedido requerido'),
  amount: z.number().positive('Monto debe ser mayor a 0'),
  method: PaymentMethodSchema,
  reference_number: z.string().max(50).optional().nullable(),
  voucher: z.string().optional().nullable(), // Base64 image data
})

// Payment verification schema
export const VerifyPaymentSchema = z.object({
  id: z.string().min(1),
  status: z.enum(['VERIFIED', 'REJECTED']),
  verification_notes: z.string().max(300).optional(),
  rejected_reason: z.string().max(200).optional(),
})

// Voucher upload schema
export const VoucherUploadSchema = z.object({
  payment_id: z.string().min(1),
  voucher_file: z.any(), // File object from FormData
  voucher_url: z.string().url().optional(), // Alternative: direct URL
})

// Payment query schema
export const PaymentQuerySchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(20),
  status: PaymentStatusSchema.optional(),
  method: PaymentMethodSchema.optional(),
  order_id: z.string().optional(),
  customer_phone: z.string().optional(),
  date_from: z.string().datetime().optional(),
  date_to: z.string().datetime().optional(),
  amount_min: z.number().positive().optional(),
  amount_max: z.number().positive().optional(),
  sort_by: z.enum(['date', 'amount', 'status', 'method']).default('date'),
  sort_order: z.enum(['asc', 'desc']).default('desc'),
})

// Payment method information schemas
export const BankTransferInfoSchema = z.object({
  bank_name: z.string(),
  account_number: z.string(),
  account_type: z.string(),
  account_holder: z.string(),
  cci: z.string().optional(),
})

export const DigitalWalletInfoSchema = z.object({
  phone_number: z.string(),
  qr_code: z.string().url().optional(),
  instructions: z.string(),
})

export const PaymentInfoSchema = z.object({
  TRANSFER: BankTransferInfoSchema,
  YAPE: DigitalWalletInfoSchema,
  PLIN: DigitalWalletInfoSchema,
  CASH: z.object({
    instructions: z.string(),
    notes: z.string().optional(),
  }),
})

// Payment statistics schema
export const PaymentStatsSchema = z.object({
  total_payments: z.number().int().min(0),
  pending_payments: z.number().int().min(0),
  verified_payments: z.number().int().min(0),
  rejected_payments: z.number().int().min(0),
  total_amount: z.number().min(0),
  verified_amount: z.number().min(0),
  pending_amount: z.number().min(0),
  by_method: z.object({
    TRANSFER: z.number().min(0),
    YAPE: z.number().min(0),
    PLIN: z.number().min(0),
    CASH: z.number().min(0),
  }),
})

// Payment method configuration
export const PAYMENT_METHOD_CONFIG = {
  TRANSFER: {
    label: 'Transferencia Bancaria',
    icon: 'CreditCard',
    color: '#2563eb',
    description: 'Transferencia directa a cuenta bancaria',
    requires_voucher: true,
    processing_time: '2-4 horas',
  },
  YAPE: {
    label: 'Yape',
    icon: 'Smartphone', 
    color: '#722f9e',
    description: 'Pago móvil con Yape',
    requires_voucher: true,
    processing_time: '1-2 horas',
  },
  PLIN: {
    label: 'Plin',
    icon: 'Smartphone',
    color: '#00a651',
    description: 'Pago móvil con Plin',
    requires_voucher: true,
    processing_time: '1-2 horas',
  },
  CASH: {
    label: 'Efectivo',
    icon: 'DollarSign',
    color: '#16a34a',
    description: 'Pago en efectivo al delivery',
    requires_voucher: false,
    processing_time: 'Al entregar',
  },
}

// Payment status configuration
export const PAYMENT_STATUS_CONFIG = {
  pending: {
    label: 'Pendiente',
    color: '#f59e0b',
    description: 'Esperando verificación',
    icon: 'Clock'
  },
  verified: {
    label: 'Verificado',
    color: '#10b981',
    description: 'Pago confirmado',
    icon: 'CheckCircle'
  },
  rejected: {
    label: 'Rechazado',
    color: '#ef4444',
    description: 'Pago rechazado',
    icon: 'XCircle'
  }
}

// Supported file types for vouchers
export const VOUCHER_FILE_TYPES = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'application/pdf': '.pdf',
}

export const VOUCHER_MAX_SIZE = 5 * 1024 * 1024 // 5MB

// Type exports
export const PaymentType = PaymentSchema._type
export const CreatePaymentType = CreatePaymentSchema._type
export const VerifyPaymentType = VerifyPaymentSchema._type
export const PaymentQueryType = PaymentQuerySchema._type
export const PaymentStatsType = PaymentStatsSchema._type

// Validation helpers
export const validatePayment = (data) => {
  try {
    return { success: true, data: PaymentSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateCreatePayment = (data) => {
  try {
    return { success: true, data: CreatePaymentSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateVerifyPayment = (data) => {
  try {
    return { success: true, data: VerifyPaymentSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

// Helper functions
export const isVoucherRequired = (method) => {
  return PAYMENT_METHOD_CONFIG[method]?.requires_voucher || false
}

export const isValidVoucherFile = (file) => {
  if (!file) return false
  
  const isValidType = Object.keys(VOUCHER_FILE_TYPES).includes(file.type)
  const isValidSize = file.size <= VOUCHER_MAX_SIZE
  
  return isValidType && isValidSize
}

export const getFileExtension = (fileType) => {
  return VOUCHER_FILE_TYPES[fileType] || ''
}

export const generatePaymentId = () => {
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `PAY-${timestamp}${random}`
}

export const formatAmount = (amount, currency = 'S/') => {
  return `${currency} ${Number(amount).toFixed(2)}`
}

export default {
  PaymentSchema,
  CreatePaymentSchema,
  VerifyPaymentSchema,
  VoucherUploadSchema,
  PaymentQuerySchema,
  PaymentInfoSchema,
  PaymentStatsSchema,
  validatePayment,
  validateCreatePayment,
  validateVerifyPayment,
  isVoucherRequired,
  isValidVoucherFile,
  generatePaymentId,
  formatAmount,
  PAYMENT_METHOD_CONFIG,
  PAYMENT_STATUS_CONFIG,
  VOUCHER_FILE_TYPES,
  VOUCHER_MAX_SIZE,
}