import React from 'react';
import { getStateLabel, getStateColor } from '../utils/stateTranslation';

/**
 * Componente para mostrar el estado de un pedido en español
 * con el color correspondiente al estado original
 */
const OrderStatusBadge = ({ status, size = 'medium' }) => {
  // Obtener la etiqueta en español
  const label = getStateLabel(status);
  
  // Obtener el color basado en el estado original
  const color = getStateColor(status);
  
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

export default OrderStatusBadge;