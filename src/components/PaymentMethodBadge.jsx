import React from 'react';
import { getPaymentMethodLabel, getPaymentMethodColor } from '../utils/stateTranslation';

/**
 * Componente para mostrar el método de pago en español
 * con el color correspondiente al método original
 */
const PaymentMethodBadge = ({ method, size = 'medium' }) => {
  // Obtener la etiqueta en español
  const label = getPaymentMethodLabel(method);
  
  // Obtener el color basado en el método original
  const color = getPaymentMethodColor(method);
  
  // Determinar tamaño de fuente según el parámetro size
  const fontSize = size === 'small' ? '11px' : 
                  size === 'large' ? '14px' : '12px';
  
  return (
    <div style={{ 
      backgroundColor: color,
      color: 'white',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: fontSize,
      fontWeight: 'bold',
      display: 'inline-block',
      textAlign: 'center'
    }}>
      {label}
    </div>
  );
};

export default PaymentMethodBadge;