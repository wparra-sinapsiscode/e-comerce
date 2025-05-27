import { z } from 'zod'

// User role enum (matching backend format)
export const UserRoleSchema = z.enum(['ADMIN', 'CUSTOMER', 'DELIVERY'])

// User schema
export const UserSchema = z.object({
  id: z.number().int().positive(),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Teléfono debe tener al menos 9 dígitos').max(15),
  name: z.string().min(1, 'Nombre requerido').max(100),
  role: UserRoleSchema,
  active: z.boolean().default(true),
  email_verified: z.boolean().default(false),
  phone_verified: z.boolean().default(false),
  created_at: z.string().datetime().optional(),
  updated_at: z.string().datetime().optional(),
  last_login: z.string().datetime().optional().nullable(),
  
  // Profile fields
  avatar: z.string().url().optional().nullable(),
  address: z.string().max(200).optional().nullable(),
  preferences: z.object({
    notifications: z.boolean().default(true),
    marketing_emails: z.boolean().default(false),
    language: z.enum(['es', 'en']).default('es'),
  }).optional(),
})

// Login schemas
export const LoginSchema = z.object({
  email: z.string().email('Email inválido').optional(),
  phone: z.string().min(9, 'Teléfono inválido').optional(),
  password: z.string().min(6, 'Contraseña debe tener al menos 6 caracteres'),
}).refine(data => data.email || data.phone, {
  message: 'Email o teléfono requerido',
  path: ['email'],
})

export const AdminLoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Contraseña debe tener al menos 6 caracteres'),
})

// Registration schemas
export const RegisterSchema = z.object({
  name: z.string().min(1, 'Nombre requerido').max(100),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Teléfono inválido').max(15),
  password: z.string().min(6, 'Contraseña debe tener al menos 6 caracteres'),
  confirm_password: z.string(),
  address: z.string().min(10, 'Dirección debe tener al menos 10 caracteres').max(200).optional(),
  accept_terms: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
}).refine(data => data.password === data.confirm_password, {
  message: 'Las contraseñas no coinciden',
  path: ['confirm_password'],
})

// Guest checkout schema (no registration required)
export const GuestCheckoutSchema = z.object({
  name: z.string().min(1, 'Nombre requerido').max(100),
  phone: z.string().min(9, 'Teléfono inválido').max(15),
  email: z.string().email('Email inválido').optional(),
  address: z.string().min(10, 'Dirección requerida').max(200),
})

// Password schemas
export const ChangePasswordSchema = z.object({
  current_password: z.string().min(1, 'Contraseña actual requerida'),
  new_password: z.string().min(6, 'Nueva contraseña debe tener al menos 6 caracteres'),
  confirm_password: z.string(),
}).refine(data => data.new_password === data.confirm_password, {
  message: 'Las contraseñas no coinciden',
  path: ['confirm_password'],
})

export const ResetPasswordSchema = z.object({
  email: z.string().email('Email inválido'),
})

export const ConfirmResetPasswordSchema = z.object({
  token: z.string().min(1, 'Token requerido'),
  password: z.string().min(6, 'Contraseña debe tener al menos 6 caracteres'),
  confirm_password: z.string(),
}).refine(data => data.password === data.confirm_password, {
  message: 'Las contraseñas no coinciden',
  path: ['confirm_password'],
})

// Profile update schema
export const UpdateProfileSchema = z.object({
  name: z.string().min(1, 'Nombre requerido').max(100).optional(),
  email: z.string().email('Email inválido').optional(),
  phone: z.string().min(9, 'Teléfono inválido').max(15).optional(),
  address: z.string().max(200).optional(),
  avatar: z.string().url().optional().nullable(),
  preferences: z.object({
    notifications: z.boolean().optional(),
    marketing_emails: z.boolean().optional(),
    language: z.enum(['es', 'en']).optional(),
  }).optional(),
})

// Token schemas
export const TokenResponseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string().optional(),
  token_type: z.string().default('Bearer'),
  expires_in: z.number().int().positive(),
  user: UserSchema,
})

export const RefreshTokenSchema = z.object({
  refresh_token: z.string().min(1, 'Refresh token requerido'),
})

// Email verification
export const VerifyEmailSchema = z.object({
  email: z.string().email('Email inválido'),
  token: z.string().min(1, 'Token requerido'),
})

export const ResendVerificationSchema = z.object({
  email: z.string().email('Email inválido'),
})

// Phone verification
export const VerifyPhoneSchema = z.object({
  phone: z.string().min(9, 'Teléfono inválido'),
  code: z.string().length(6, 'Código debe tener 6 dígitos'),
})

export const SendPhoneCodeSchema = z.object({
  phone: z.string().min(9, 'Teléfono inválido'),
})

// Session schema
export const SessionSchema = z.object({
  user: UserSchema,
  expires_at: z.string().datetime(),
  permissions: z.array(z.string()),
  last_activity: z.string().datetime(),
})

// User role permissions (matching backend uppercase roles)
export const USER_PERMISSIONS = {
  ADMIN: [
    'products:read',
    'products:write', 
    'products:delete',
    'categories:read',
    'categories:write',
    'categories:delete',
    'orders:read',
    'orders:write',
    'orders:update_status',
    'payments:read',
    'payments:verify',
    'dashboard:access',
    'users:read',
    'users:write',
  ],
  CUSTOMER: [
    'products:read',
    'categories:read',
    'orders:read_own',
    'orders:create',
    'profile:read',
    'profile:write',
  ],
  DELIVERY: [
    'orders:read_assigned',
    'orders:update_delivery_status',
    'profile:read',
    'profile:write',
  ],
}

// Type exports
export const UserType = UserSchema._type
export const LoginType = LoginSchema._type
export const RegisterType = RegisterSchema._type
export const TokenResponseType = TokenResponseSchema._type
export const SessionType = SessionSchema._type

// Validation helpers
export const validateLogin = (data) => {
  try {
    return { success: true, data: LoginSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateRegister = (data) => {
  try {
    return { success: true, data: RegisterSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

export const validateGuestCheckout = (data) => {
  try {
    return { success: true, data: GuestCheckoutSchema.parse(data), error: null }
  } catch (error) {
    return { success: false, data: null, error: error.errors }
  }
}

// Helper functions
export const hasPermission = (userRole, permission) => {
  const permissions = USER_PERMISSIONS[userRole] || []
  return permissions.includes(permission)
}

export const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return Date.now() >= payload.exp * 1000
  } catch {
    return true
  }
}

export const getUserFromToken = (token) => {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    return payload.user || null
  } catch {
    return null
  }
}

export const isValidPhone = (phone) => {
  // Peruvian phone validation
  const phoneRegex = /^(\+51|51)?[9]\d{8}$/
  return phoneRegex.test(phone.replace(/\s+/g, ''))
}

export const formatPhone = (phone) => {
  // Format to standard Peruvian format
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('51')) {
    return '+' + cleaned
  }
  if (cleaned.startsWith('9') && cleaned.length === 9) {
    return '+51' + cleaned
  }
  return phone
}

export default {
  UserSchema,
  LoginSchema,
  AdminLoginSchema,
  RegisterSchema,
  GuestCheckoutSchema,
  ChangePasswordSchema,
  UpdateProfileSchema,
  TokenResponseSchema,
  SessionSchema,
  validateLogin,
  validateRegister,
  validateGuestCheckout,
  hasPermission,
  isTokenExpired,
  getUserFromToken,
  isValidPhone,
  formatPhone,
  USER_PERMISSIONS,
}