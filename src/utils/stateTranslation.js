/**
 * Utilidad para traducción de estados entre inglés y español
 * Esta capa permite mantener la compatibilidad con la lógica existente
 * mientras se muestra la interfaz en español
 */

// Mapeo de estados en inglés a español
export const stateLabels = {
  // Estados originales en MAYÚSCULAS (como están en el backend)
  'AWAITING_PAYMENT': 'Esperando Pago',
  'PREPARING': 'Preparando',
  'READY_FOR_SHIPPING': 'Listo para Envío',
  'SHIPPED': 'Enviado',
  'DELIVERED': 'Entregado',
  'CANCELLED': 'Cancelado',
  
  // Versiones en minúsculas (para compatibilidad)
  'awaiting_payment': 'Esperando Pago',
  'preparing': 'Preparando',
  'ready_for_shipping': 'Listo para Envío',
  'shipped': 'Enviado',
  'delivered': 'Entregado',
  'cancelled': 'Cancelado'
};

// Colores para cada estado (mantiene los mismos colores originales)
export const stateColors = {
  // Estados en MAYÚSCULAS
  'AWAITING_PAYMENT': '#f59e0b', // Amarillo/naranja
  'PREPARING': '#3b82f6',        // Azul
  'READY_FOR_SHIPPING': '#8b5cf6', // Púrpura
  'SHIPPED': '#06b6d4',          // Cyan
  'DELIVERED': '#10b981',        // Verde
  'CANCELLED': '#ef4444',        // Rojo
  
  // Estados en minúsculas (para compatibilidad)
  'awaiting_payment': '#f59e0b',
  'preparing': '#3b82f6',
  'ready_for_shipping': '#8b5cf6',
  'shipped': '#06b6d4',
  'delivered': '#10b981',
  'cancelled': '#ef4444'
};

/**
 * Obtiene la etiqueta en español para un estado
 * @param {string} state - Estado en inglés
 * @returns {string} Etiqueta en español
 */
export function getStateLabel(state) {
  return stateLabels[state] || state;
}

/**
 * Obtiene el color correspondiente al estado
 * @param {string} state - Estado (en inglés)
 * @returns {string} Código de color
 */
export function getStateColor(state) {
  return stateColors[state] || '#6b7280'; // Gris por defecto
}