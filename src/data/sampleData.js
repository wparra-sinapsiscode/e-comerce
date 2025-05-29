// Sample categories data
export const categories = [
  { id: 1, name: 'Frutas', icon: 'Apple', color: '#e74c3c' },
  { id: 2, name: 'Verduras', icon: 'Carrot', color: '#2ecc71' },
  { id: 3, name: 'Lácteos', icon: 'Milk', color: '#f1c40f' },
  { id: 4, name: 'Carnes', icon: 'Drumstick', color: '#e67e22' },
  { id: 5, name: 'Pescados', icon: 'Fish', color: '#3498db' },
  { id: 6, name: 'Panadería', icon: 'Bread', color: '#d35400' },
  { id: 7, name: 'Bebidas', icon: 'Wine', color: '#9b59b6' },
  { id: 8, name: 'Abarrotes', icon: 'ShoppingBasket', color: '#34495e' }
];

// Sample products data
export const products = [
  { 
    id: 1, 
    name: 'Manzana Deliciosa', 
    category_id: 1, 
    price: 5.90, 
    unit: 'kg', 
    description: 'Manzanas rojas y jugosas, ideales para comer directamente o para postres.', 
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6' 
  },
  { 
    id: 2, 
    name: 'Plátano Orgánico', 
    category_id: 1, 
    price: 4.50, 
    unit: 'kg', 
    description: 'Plátanos orgánicos cultivados sin pesticidas, perfectos para batidos y postres.', 
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e' 
  },
  { 
    id: 3, 
    name: 'Naranja Valenciana', 
    category_id: 1, 
    price: 3.80, 
    unit: 'kg', 
    description: 'Naranjas dulces y jugosas, excelentes para jugo fresco.', 
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12' 
  },
  { 
    id: 4, 
    name: 'Fresa Premium', 
    category_id: 1, 
    price: 12.90, 
    unit: 'kg', 
    description: 'Fresas frescas y dulces, perfectas para postres o consumir directamente.', 
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6' 
  },
  { 
    id: 5, 
    name: 'Lechuga Hidropónica', 
    category_id: 2, 
    price: 3.50, 
    unit: 'u', 
    description: 'Lechuga fresca cultivada sin tierra, con hojas crujientes y frescas.', 
    image: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9' 
  },
  { 
    id: 6, 
    name: 'Tomate Italiano', 
    category_id: 2, 
    price: 4.90, 
    unit: 'kg', 
    description: 'Tomates jugosos y carnosos, perfectos para salsas y ensaladas.', 
    image: 'https://images.unsplash.com/photo-1592924357229-87ba6f72ba82' 
  },
  { 
    id: 7, 
    name: 'Cebolla Roja', 
    category_id: 2, 
    price: 2.80, 
    unit: 'kg', 
    description: 'Cebollas rojas de sabor suave, ideales para ensaladas y guisos.', 
    image: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1' 
  },
  { 
    id: 8, 
    name: 'Zanahoria Orgánica', 
    category_id: 2, 
    price: 3.20, 
    unit: 'kg', 
    description: 'Zanahorias orgánicas, dulces y crujientes, excelentes para jugos y ensaladas.', 
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37' 
  },
  { 
    id: 9, 
    name: 'Queso Fresco', 
    category_id: 3, 
    price: 15.90, 
    unit: 'kg', 
    description: 'Queso fresco artesanal, suave y cremoso, ideal para ensaladas y sándwiches.', 
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d' 
  },
  { 
    id: 10, 
    name: 'Yogurt Natural', 
    category_id: 3, 
    price: 6.50, 
    unit: 'l', 
    description: 'Yogurt natural sin azúcar, perfecto para desayunos y postres saludables.', 
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777' 
  },
  { 
    id: 11, 
    name: 'Leche Fresca', 
    category_id: 3, 
    price: 4.20, 
    unit: 'presentation', 
    description: 'Leche fresca pasteurizada de vacas alimentadas con pasto.', 
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
    presentations: [
      { id: 1, name: '1 Litro', price: 4.20, unit: 'L' },
      { id: 2, name: '500ml', price: 2.30, unit: 'ml' },
      { id: 3, name: '250ml', price: 1.50, unit: 'ml' }
    ]
  },
  { 
    id: 12, 
    name: 'Mantequilla sin Sal', 
    category_id: 3, 
    price: 8.90, 
    unit: 'kg', 
    description: 'Mantequilla cremosa sin sal, perfecta para hornear y cocinar.', 
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d' 
  },
  { 
    id: 13, 
    name: 'Lomo Fino', 
    category_id: 4, 
    price: 35.90, 
    unit: 'kg', 
    description: 'Corte premium de res, tierno y jugoso, ideal para preparaciones a la parrilla.', 
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659' 
  },
  { 
    id: 14, 
    name: 'Pechuga de Pollo', 
    category_id: 4, 
    price: 16.90, 
    unit: 'kg', 
    description: 'Pechuga de pollo fresca sin piel, versátil para múltiples preparaciones.', 
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791' 
  },
  { 
    id: 15, 
    name: 'Chuleta de Cerdo', 
    category_id: 4, 
    price: 19.50, 
    unit: 'kg', 
    description: 'Chuletas de cerdo jugosas, ideales para asar o freír.', 
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697' 
  },
  { 
    id: 16, 
    name: 'Carne Molida', 
    category_id: 4, 
    price: 18.90, 
    unit: 'kg', 
    description: 'Carne molida de res fresca, perfecta para hamburguesas y salsas.', 
    image: 'https://images.unsplash.com/photo-1606728035253-49e8f7e3d96c' 
  },
  // Pescados (category_id: 5)
  { 
    id: 17, 
    name: 'Salmón Fresco', 
    category_id: 5, 
    price: 45.90, 
    unit: 'kg', 
    description: 'Salmón fresco del Atlántico, rico en omega-3 y perfecto para preparaciones gourmet.', 
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2' 
  },
  { 
    id: 18, 
    name: 'Corvina', 
    category_id: 5, 
    price: 28.50, 
    unit: 'kg', 
    description: 'Corvina fresca del mar peruano, carne blanca y suave ideal para ceviches.', 
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44' 
  },
  { 
    id: 19, 
    name: 'Lenguado', 
    category_id: 5, 
    price: 35.90, 
    unit: 'kg', 
    description: 'Lenguado fresco, pescado plano de carne delicada y sabor suave.', 
    image: 'https://images.unsplash.com/photo-1563336797-f5e174fc3bd8' 
  },
  { 
    id: 20, 
    name: 'Atún', 
    category_id: 5, 
    price: 32.90, 
    unit: 'kg', 
    description: 'Atún fresco de carne roja, perfecto para preparaciones al grill o sashimi.', 
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44' 
  },
  { 
    id: 21, 
    name: 'Camarones', 
    category_id: 5, 
    price: 42.90, 
    unit: 'kg', 
    description: 'Camarones frescos de tamaño mediano, ideales para arroces y pastas.', 
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47' 
  },
  { 
    id: 22, 
    name: 'Pulpo', 
    category_id: 5, 
    price: 38.50, 
    unit: 'kg', 
    description: 'Pulpo fresco tierno, perfecto para ensaladas y preparaciones mediterráneas.', 
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47' 
  },
  // Panadería (category_id: 6)
  { 
    id: 23, 
    name: 'Pan Francés', 
    category_id: 6, 
    price: 0.30, 
    unit: 'u', 
    description: 'Pan francés tradicional, crujiente por fuera y suave por dentro.', 
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73' 
  },
  { 
    id: 24, 
    name: 'Pan Integral', 
    category_id: 6, 
    price: 4.50, 
    unit: 'u', 
    description: 'Pan integral artesanal con semillas, rico en fibra y nutrientes.', 
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff' 
  },
  { 
    id: 25, 
    name: 'Croissant', 
    category_id: 6, 
    price: 2.50, 
    unit: 'u', 
    description: 'Croissant de mantequilla recién horneado, perfecto para el desayuno.', 
    image: 'https://images.unsplash.com/photo-1555507036-ab794f4afe8c' 
  },
  { 
    id: 26, 
    name: 'Pan de Molde', 
    category_id: 6, 
    price: 5.90, 
    unit: 'u', 
    description: 'Pan de molde suave y esponjoso, ideal para sándwiches y tostadas.', 
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df' 
  },
  { 
    id: 27, 
    name: 'Empanadas', 
    category_id: 6, 
    price: 3.50, 
    unit: 'u', 
    description: 'Empanadas horneadas con relleno de pollo, carne o queso.', 
    image: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5' 
  },
  { 
    id: 28, 
    name: 'Torta de Chocolate', 
    category_id: 6, 
    price: 25.90, 
    unit: 'u', 
    description: 'Torta de chocolate casera con cobertura de chocolate, perfecta para ocasiones especiales.', 
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587' 
  },
  // Bebidas (category_id: 7)
  { 
    id: 29, 
    name: 'Agua Mineral', 
    category_id: 7, 
    price: 2.50, 
    unit: 'l', 
    description: 'Agua mineral natural sin gas, pureza y frescura en cada sorbo.', 
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504' 
  },
  { 
    id: 30, 
    name: 'Jugo de Naranja', 
    category_id: 7, 
    price: 6.90, 
    unit: 'l', 
    description: 'Jugo de naranja natural recién exprimido, sin azúcar añadida.', 
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e' 
  },
  { 
    id: 31, 
    name: 'Gaseosa Cola', 
    category_id: 7, 
    price: 3.50, 
    unit: 'l', 
    description: 'Bebida gaseosa de cola refrescante, perfecta para acompañar comidas.', 
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca' 
  },
  { 
    id: 32, 
    name: 'Cerveza', 
    category_id: 7, 
    price: 4.90, 
    unit: 'presentation', 
    description: 'Cerveza rubia artesanal, refrescante y con sabor único.', 
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9',
    presentations: [
      { id: 1, name: 'Lata 355ml', price: 4.90, unit: 'lata' },
      { id: 2, name: 'Botella 330ml', price: 5.20, unit: 'botella' },
      { id: 3, name: 'Six Pack (6x355ml)', price: 27.50, unit: 'pack' }
    ]
  },
  { 
    id: 33, 
    name: 'Agua con Gas', 
    category_id: 7, 
    price: 3.20, 
    unit: 'l', 
    description: 'Agua mineral con gas natural, refrescante y digestiva.', 
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504' 
  },
  { 
    id: 34, 
    name: 'Té Helado', 
    category_id: 7, 
    price: 4.50, 
    unit: 'l', 
    description: 'Té helado de durazno, bebida refrescante y natural con sabor a frutas.', 
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e' 
  },
  // Abarrotes (category_id: 8)
  { 
    id: 35, 
    name: 'Arroz Extra', 
    category_id: 8, 
    price: 4.20, 
    unit: 'kg', 
    description: 'Arroz extra de grano largo, ideal para todo tipo de preparaciones.', 
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c' 
  },
  { 
    id: 36, 
    name: 'Fideos Espagueti', 
    category_id: 8, 
    price: 2.90, 
    unit: 'presentation', 
    description: 'Fideos espagueti de trigo, perfectos para pastas y sopas.', 
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5',
    presentations: [
      { id: 1, name: 'Paquete 500g', price: 2.90, unit: 'pqt' },
      { id: 2, name: 'Paquete 1kg', price: 5.50, unit: 'pqt' },
      { id: 3, name: 'Bolsa 250g', price: 1.80, unit: 'bolsa' }
    ]
  },
  { 
    id: 37, 
    name: 'Aceite Vegetal', 
    category_id: 8, 
    price: 8.90, 
    unit: 'l', 
    description: 'Aceite vegetal puro para cocinar, freír y aderezar ensaladas.', 
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5' 
  },
  { 
    id: 38, 
    name: 'Azúcar Blanca', 
    category_id: 8, 
    price: 3.50, 
    unit: 'kg', 
    description: 'Azúcar blanca refinada, endulzante natural para bebidas y postres.', 
    image: 'https://images.unsplash.com/photo-1572888195207-49e220c28460' 
  },
  { 
    id: 39, 
    name: 'Sal de Mesa', 
    category_id: 8, 
    price: 1.50, 
    unit: 'kg', 
    description: 'Sal de mesa yodada, condimento esencial para todas las comidas.', 
    image: 'https://images.unsplash.com/photo-1622569064658-52ba6fe7b9b6' 
  },
  { 
    id: 40, 
    name: 'Conserva de Atún', 
    category_id: 8, 
    price: 4.50, 
    unit: 'u', 
    description: 'Conserva de atún en aceite vegetal, práctica y nutritiva.', 
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35' 
  },
  { 
    id: 41, 
    name: 'Lentejas', 
    category_id: 8, 
    price: 6.90, 
    unit: 'kg', 
    description: 'Lentejas secas de alta calidad, ricas en proteínas y fibra.', 
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b' 
  },
  { 
    id: 42, 
    name: 'Quinua', 
    category_id: 8, 
    price: 12.90, 
    unit: 'kg', 
    description: 'Quinua peruana orgánica, superalimento rico en proteínas completas.', 
    image: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1' 
  },
];

// Sample orders data
export const initialOrders = [
  {
    id: 'ORD-001',
    customer: 'Juan Pérez',
    customer_phone: '987654321',
    address: 'Av. Principal 123, Lima',
    date: '2023-10-15',
    status: 'delivered',
    payment_method: 'TRANSFER',
    payment_status: 'VERIFIED',
    items: [
      { product_id: 1, name: 'Manzana Deliciosa', quantity: 2, price: 5.90, total: 11.80 },
      { product_id: 5, name: 'Lechuga Hidropónica', quantity: 1, price: 3.50, total: 3.50 },
      { product_id: 9, name: 'Queso Fresco', quantity: 0.5, price: 15.90, total: 7.95 }
    ],
    subtotal: 23.25,
    tax: 4.19,
    total: 27.44,
    notes: 'Entregar en la tarde.'
  },
  {
    id: 'ORD-002',
    customer: 'María López',
    customer_phone: '987654322',
    address: 'Jr. Los Pinos 456, Lima',
    date: '2023-10-16',
    status: 'preparing',
    payment_method: 'YAPE',
    payment_status: 'VERIFIED',
    items: [
      { product_id: 2, name: 'Plátano Orgánico', quantity: 3, price: 4.50, total: 13.50 },
      { product_id: 10, name: 'Yogurt Natural', quantity: 2, price: 6.50, total: 13.00 },
      { product_id: 14, name: 'Pechuga de Pollo', quantity: 1.5, price: 16.90, total: 25.35 }
    ],
    subtotal: 51.85,
    tax: 9.33,
    total: 61.18,
    notes: ''
  },
  {
    id: 'ORD-003',
    customer: 'Pedro Sánchez',
    customer_phone: '987654323',
    address: 'Calle Las Flores 789, Lima',
    date: '2023-10-17',
    status: 'awaiting_payment',
    payment_method: 'TRANSFER',
    payment_status: 'PENDING',
    items: [
      { product_id: 3, name: 'Naranja Valenciana', quantity: 2, price: 3.80, total: 7.60 },
      { product_id: 7, name: 'Cebolla Roja', quantity: 1, price: 2.80, total: 2.80 },
      { product_id: 16, name: 'Carne Molida', quantity: 1, price: 18.90, total: 18.90 }
    ],
    subtotal: 29.30,
    tax: 5.27,
    total: 34.57,
    notes: 'Llamar antes de entregar.'
  }
];

// Sample payments data
export const initialPayments = [
  {
    id: 'PAY-001',
    order_id: 'ORD-001',
    customer: 'Juan Pérez',
    date: '2023-10-15',
    amount: 27.44,
    method: 'TRANSFER',
    status: 'VERIFIED',
    voucher: 'https://images.unsplash.com/photo-1622186477895-f2af6a0f5522'
  },
  {
    id: 'PAY-002',
    order_id: 'ORD-002',
    customer: 'María López',
    date: '2023-10-16',
    amount: 61.18,
    method: 'YAPE',
    status: 'VERIFIED',
    voucher: 'https://images.unsplash.com/photo-1622186477895-f2af6a0f5522'
  },
  {
    id: 'PAY-003',
    order_id: 'ORD-003',
    customer: 'Pedro Sánchez',
    date: '2023-10-17',
    amount: 34.57,
    method: 'TRANSFER',
    status: 'PENDING',
    voucher: 'https://images.unsplash.com/photo-1622186477895-f2af6a0f5522'
  }
];

// Order workflow status definitions
export const orderStatuses = {
  awaiting_payment: {
    label: 'Esperando Pago',
    color: '#f59e0b',
    description: 'Pedido creado, esperando verificación de pago',
    nextSteps: ['Verificar pago para continuar']
  },
  preparing: {
    label: 'Preparando',
    color: '#3b82f6',
    description: 'Pago verificado, preparando pedido',
    nextSteps: ['Alistar productos', 'Empacar pedido']
  },
  ready_for_shipping: {
    label: 'Listo para Envío',
    color: '#8b5cf6',
    description: 'Pedido alistado, listo para enviar',
    nextSteps: ['Asignar delivery', 'Enviar pedido']
  },
  shipped: {
    label: 'Enviado',
    color: '#06b6d4',
    description: 'Pedido en camino al cliente',
    nextSteps: ['Confirmar entrega']
  },
  delivered: {
    label: 'Entregado',
    color: '#10b981',
    description: 'Pedido entregado exitosamente',
    nextSteps: []
  },
  cancelled: {
    label: 'Cancelado',
    color: '#ef4444',
    description: 'Pedido cancelado',
    nextSteps: []
  }
};

// Unit types configuration
export const unitTypes = {
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
  pqt: { 
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
};

// Helper functions for quantity management
export const getUnitConfig = (unit) => unitTypes[unit] || unitTypes.u;

export const formatQuantity = (quantity, unit) => {
  const config = getUnitConfig(unit);
  return config.allowDecimals 
    ? parseFloat(quantity).toFixed(config.displayDecimals)
    : Math.floor(quantity);
};

export const validateQuantity = (quantity, unit) => {
  const config = getUnitConfig(unit);
  const numQuantity = parseFloat(quantity);
  
  if (isNaN(numQuantity) || numQuantity < config.minQuantity) {
    return config.minQuantity;
  }
  
  if (!config.allowDecimals) {
    return Math.floor(numQuantity);
  }
  
  return numQuantity;
};

// Payment information for customers
export const paymentInfo = {
  transfer: {
    bankName: 'Banco de Crédito del Perú (BCP)',
    accountNumber: '194-123456789-0-12',
    accountType: 'Cuenta Corriente',
    accountHolder: 'Mercado Express SAC',
    cci: '002-194-123456789012-34'
  },
  yape: {
    phoneNumber: '987-654-321',
    qrCode: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop&crop=center'
  },
  plin: {
    phoneNumber: '987-654-321',
    qrCode: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop&crop=center'
  },
  instructions: {
    transfer: 'Realiza la transferencia por el monto total y envía el comprobante por WhatsApp.',
    yape: 'Envía el pago por Yape al número indicado y captura la pantalla de confirmación.',
    plin: 'Envía el pago por Plin al número indicado y captura la pantalla de confirmación.',
    cash: 'Tendrás que pagar en efectivo al momento de la entrega.'
  }
};