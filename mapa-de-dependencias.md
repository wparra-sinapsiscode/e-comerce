# MAPA DE DEPENDENCIAS - E-COMMERCE APLICACIÓN

## ANÁLISIS COMPLETO DE ARQUITECTURA Y DEPENDENCIAS DEL NEGOCIO

---

## PARTE 1: DESCRIPCIÓN DEL NEGOCIO

### DESCRIPCIÓN INICIAL

**Nombre del Negocio:** E-Commerce de Productos Alimentarios Frescos  
**Modelo de Negocio:** Plataforma digital B2C para venta y entrega de productos frescos y envasados

**Propuesta de Valor:**
- 🥩 **Productos Frescos de Calidad:** Carnes, frutas, verduras, lácteos y pescados frescos
- 📦 **Productos Envasados Flexibles:** Múltiples presentaciones (500ml, 1L, 2.5L, etc.)
- 🚚 **Entrega a Domicilio:** Servicio de delivery directo al hogar
- 💻 **Experiencia Digital Completa:** Plataforma web intuitiva con gestión administrativa

**Mercado Objetivo:**
- Familias urbanas que buscan conveniencia en compras alimentarias
- Consumidores que valoran productos frescos sin salir de casa
- Clientes que prefieren visualizar productos y precios antes de comprar

**Diferenciadores Clave:**
- Sistema inteligente de cantidades (decimales vs enteros según tipo de producto)
- Gestión avanzada de presentaciones para productos envasados
- Workflow completo de gestión de pedidos con verificación de pagos
- Interface administrativa robusta para control total del negocio

---

## PARTE 2: LISTA DE FUNCIONALIDADES

### MÓDULO CLIENTE (Frontend Cliente)

#### F001 - Catálogo de Productos Inteligente
- **Descripción:** Sistema de visualización de productos organizados por categorías con capacidades avanzadas de filtrado, búsqueda y navegación
- **Categoría:** Esencial
- **Complejidad:** Media-Alta
- **Dependencias:** F008 (Gestión de Productos), F009 (Gestión de Categorías)
- **Usuarios:** Cliente final
- **Criterios de Aceptación:**
  1. Mostrar productos agrupados por categorías con iconos distintivos
  2. Implementar filtros funcionales: precio, categoría, favoritos, ofertas
  3. Búsqueda por nombre y descripción con resultados en tiempo real
  4. Paginación optimizada con 12 productos por página
  5. Carga lazy de imágenes para mejor performance
  6. Responsive design para dispositivos móviles y desktop

#### F002 - Sistema de Cantidades Contextual
- **Descripción:** Manejo inteligente de cantidades basado en el tipo de unidad del producto
- **Categoría:** Esencial
- **Complejidad:** Alta
- **Dependencias:** F001 (Catálogo), F004 (Presentaciones)
- **Usuarios:** Cliente final
- **Criterios de Aceptación:**
  1. Cantidades decimales para productos por peso (kg) con incrementos de 0.1
  2. Cantidades enteras para productos unitarios con incrementos de 1
  3. Cantidades apropiadas para líquidos (0.25L incrementos)
  4. Validación automática según tipo de unidad
  5. Controles visuales deshabilitados cuando se alcanza el mínimo
  6. Formato de display apropiado (decimales solo cuando necesario)

#### F003 - Gestión Avanzada de Carrito
- **Descripción:** Sistema de carrito de compras con funcionalidades completas de gestión
- **Categoría:** Esencial
- **Complejidad:** Media
- **Dependencias:** F001 (Catálogo), F002 (Cantidades), F004 (Presentaciones)
- **Usuarios:** Cliente final
- **Criterios de Aceptación:**
  1. Agregar productos con cantidades específicas y presentaciones seleccionadas
  2. Modificar cantidades directamente desde el carrito
  3. Eliminar productos individuales del carrito
  4. Cálculo automático de subtotales, impuestos (18% IGV) y total
  5. Persistencia del carrito durante la sesión del navegador
  6. Animaciones visuales para feedback de acciones

#### F004 - Selector de Presentaciones
- **Descripción:** Interface para seleccionar entre diferentes presentaciones de productos envasados
- **Categoría:** Importante
- **Complejidad:** Media
- **Dependencias:** F001 (Catálogo), F008 (Gestión de Productos)
- **Usuarios:** Cliente final
- **Criterios de Aceptación:**
  1. Mostrar todas las presentaciones disponibles con precios individuales
  2. Actualización dinámica de precio al seleccionar presentación
  3. Selección visual clara de la presentación activa
  4. Información de unidad específica por presentación
  5. Reset a presentación por defecto después de agregar al carrito

#### F005 - Sistema de Favoritos
- **Descripción:** Funcionalidad para marcar y gestionar productos favoritos
- **Categoría:** Deseable
- **Complejidad:** Baja
- **Dependencias:** F001 (Catálogo)
- **Usuarios:** Cliente final
- **Criterios de Aceptación:**
  1. Marcar/desmarcar productos como favoritos con icono de corazón
  2. Filtro específico para mostrar solo productos favoritos
  3. Persistencia de favoritos en localStorage
  4. Contador visual de productos en favoritos
  5. Feedback visual inmediato al agregar/quitar favoritos

#### F006 - Proceso de Checkout Completo
- **Descripción:** Flujo completo de finalización de compra con información de entrega y pago
- **Categoría:** Esencial
- **Complejidad:** Alta
- **Dependencias:** F003 (Carrito), F011 (Estados de Pedidos)
- **Usuarios:** Cliente final
- **Criterios de Aceptación:**
  1. Captura completa de datos del cliente (nombre, teléfono, dirección)
  2. Selección de método de pago (transferencia, Yape, Plin, efectivo)
  3. Visualización de información de pago específica (cuentas, QR)
  4. Subida de comprobante de pago con preview
  5. Confirmación de pedido con número único
  6. Transición automática a estado "Esperando Pago"

#### F007 - Historial de Pedidos Cliente
- **Descripción:** Visualización del historial y seguimiento de pedidos del cliente
- **Categoría:** Importante
- **Complejidad:** Media
- **Dependencias:** F006 (Checkout), F011 (Estados de Pedidos)
- **Usuarios:** Cliente final
- **Criterios de Aceptación:**
  1. Lista cronológica de todos los pedidos realizados
  2. Estado visual actual de cada pedido con colores distintivos
  3. Detalles expandibles de productos en cada pedido
  4. Información de entrega y métodos de pago utilizados
  5. Seguimiento en tiempo real del estado del pedido

### MÓDULO ADMINISTRADOR (Backend/Admin)

#### F008 - Gestión Completa de Productos
- **Descripción:** Sistema CRUD para administración de productos con soporte para presentaciones
- **Categoría:** Esencial
- **Complejidad:** Alta
- **Dependencias:** F009 (Gestión de Categorías)
- **Usuarios:** Administrador
- **Criterios de Aceptación:**
  1. Crear productos con todos los campos requeridos (nombre, categoría, precio, unidad)
  2. Gestión específica de presentaciones para productos envasados
  3. Subida de imágenes por URL o archivo con preview
  4. Edición completa de productos existentes manteniendo presentaciones
  5. Eliminación de productos con validaciones de seguridad
  6. Paginación y búsqueda en listado de productos
  7. Validación de integridad de datos antes del guardado

#### F009 - Administración de Categorías
- **Descripción:** Gestión de categorías de productos con iconos y colores personalizados
- **Categoría:** Esencial
- **Complejidad:** Media
- **Dependencias:** Ninguna (módulo base)
- **Usuarios:** Administrador
- **Criterios de Aceptación:**
  1. Crear nuevas categorías con nombre único
  2. Asignar iconos específicos de biblioteca predefinida
  3. Seleccionar colores de paleta para identificación visual
  4. Editar categorías existentes manteniendo relaciones
  5. Eliminar categorías solo si no tienen productos asociados
  6. Validación de nombres únicos y datos requeridos

#### F010 - Gestión Avanzada de Pedidos
- **Descripción:** Sistema completo de administración de pedidos con workflow de estados
- **Categoría:** Esencial
- **Complejidad:** Alta
- **Dependencias:** F011 (Estados de Pedidos), F012 (Verificación de Pagos)
- **Usuarios:** Administrador
- **Criterios de Aceptación:**
  1. Visualización de todos los pedidos con filtros por estado y fecha
  2. Actualización manual de estados siguiendo workflow secuencial
  3. Vista detallada de productos, cantidades y totales por pedido
  4. Información completa del cliente y dirección de entrega
  5. Historial de cambios de estado con timestamps
  6. Exportación de datos de pedidos para reportes

#### F011 - Sistema de Estados de Pedidos
- **Descripción:** Workflow definido para seguimiento de pedidos desde creación hasta entrega
- **Categoría:** Esencial
- **Complejidad:** Media
- **Dependencias:** F010 (Gestión de Pedidos), F012 (Verificación de Pagos)
- **Usuarios:** Administrador, Cliente (visualización)
- **Criterios de Aceptación:**
  1. Estados definidos: Esperando Pago → Preparando → Listo para Envío → Enviado → Entregado
  2. Transiciones secuenciales sin posibilidad de retroceso
  3. Estado especial "Cancelado" accesible desde cualquier punto
  4. Validaciones de transición (ej: solo con pago verificado se puede preparar)
  5. Colores e iconos distintivos para cada estado
  6. Notificaciones automáticas en cambios de estado

#### F012 - Verificación de Pagos
- **Descripción:** Sistema para validar comprobantes de pago subidos por clientes
- **Categoría:** Esencial
- **Complejidad:** Media
- **Dependencias:** F010 (Gestión de Pedidos), F011 (Estados de Pedidos)
- **Usuarios:** Administrador
- **Criterios de Aceptación:**
  1. Cola de pagos pendientes de verificación con comprobantes
  2. Visualización ampliada de comprobantes con zoom
  3. Opciones de aprobar/rechazar con notas explicativas
  4. Actualización automática de estado del pedido al verificar pago
  5. Historial completo de verificaciones con usuario y timestamp
  6. Alertas visuales para pagos pendientes de larga duración

#### F013 - Dashboard Administrativo
- **Descripción:** Panel de control central con métricas de negocio y accesos rápidos
- **Categoría:** Importante
- **Complejidad:** Media
- **Dependencias:** Todas las entidades principales
- **Usuarios:** Administrador
- **Criterios de Aceptación:**
  1. Resumen de pedidos del día actual con totales
  2. Métricas de productos más vendidos del período
  3. Estados de pedidos pendientes con contadores
  4. Alertas importantes (pagos por verificar, pedidos atrasados)
  5. Navegación rápida a módulos principales
  6. Actualización en tiempo real de métricas críticas

---

## PARTE 3: FLUJOS DE TRABAJO

### FLUJO A: PROCESO COMPLETO DE COMPRA (Cliente)

**Duración Estimada:** 5-15 minutos  
**Actores:** Cliente, Sistema de Pagos Externos, Administrador (verificación)

#### Pasos Detallados:

1. **Exploración de Catálogo**
   - **Actor:** Cliente
   - **Acción:** Navega por categorías, aplica filtros, busca productos
   - **Estados:** Navegando → Filtrando → Seleccionando
   - **Decisiones:** ¿Producto encontrado? → Continuar / Seguir buscando
   - **Errores:** Productos no disponibles, imágenes no cargan

2. **Configuración de Producto**
   - **Actor:** Cliente
   - **Acción:** Selecciona presentación (si aplica), ajusta cantidad
   - **Estados:** Configurando → Validando → Agregando
   - **Decisiones:** ¿Cantidad válida? → Agregar / Ajustar
   - **Validaciones:** Cantidad mínima, formato según tipo de unidad

3. **Gestión de Carrito**
   - **Actor:** Cliente
   - **Acción:** Revisa productos, modifica cantidades, procede al checkout
   - **Estados:** Revisando → Modificando → Confirmando
   - **Decisiones:** ¿Carrito satisfactorio? → Proceder / Continuar comprando
   - **Cálculos:** Subtotal, IGV (18%), Total final

4. **Información de Entrega**
   - **Actor:** Cliente
   - **Acción:** Completa datos personales y dirección
   - **Estados:** Completando datos → Validando → Confirmando
   - **Validaciones:** Campos obligatorios, formato de teléfono/dirección
   - **Errores:** Datos incompletos, formato inválido

5. **Proceso de Pago**
   - **Actor:** Cliente, Sistema Externo
   - **Acción:** Selecciona método, ve info de pago, realiza transferencia/pago
   - **Estados:** Seleccionando método → Realizando pago → Subiendo comprobante
   - **Decisiones:** ¿Método seleccionado? → Mostrar info específica
   - **Integraciones:** Bancos, Yape, Plin (externos)

6. **Confirmación y Seguimiento**
   - **Actor:** Sistema
   - **Acción:** Genera pedido, asigna número, notifica
   - **Estados:** Generando → Esperando Pago → Notificando
   - **Notificaciones:** Email/SMS confirmación, instrucciones de seguimiento
   - **Errores:** Fallo en generación, problemas de notificación

#### Puntos Críticos:
- Validación de datos de entrega
- Subida exitosa de comprobante
- Generación correcta del pedido

### FLUJO B: GESTIÓN ADMINISTRATIVA DE PEDIDOS

**Duración Estimada:** 4-8 horas (total del proceso)  
**Actores:** Administrador, Personal de Preparación, Delivery, Cliente

#### Pasos Detallados:

1. **Recepción de Pedido**
   - **Actor:** Sistema → Administrador
   - **Acción:** Notifica nuevo pedido en estado "Esperando Pago"
   - **Estados:** Nuevo → Notificado → Pendiente verificación
   - **Tiempo:** Inmediato
   - **Alertas:** Dashboard actualizado, notificación visual

2. **Verificación de Pago**
   - **Actor:** Administrador
   - **Acción:** Revisa comprobante, valida monto, aprueba/rechaza
   - **Estados:** Revisando → Validando → Aprobado/Rechazado
   - **Tiempo:** 2-4 horas en horario comercial
   - **Decisiones:** ¿Comprobante válido? → Aprobar / Rechazar con motivo
   - **Errores:** Comprobante ilegible, monto incorrecto

3. **Preparación de Pedido**
   - **Actor:** Personal de Preparación
   - **Acción:** Alista productos según lista, empaca pedido
   - **Estados:** Preparando → Alistando → Empacado → Listo
   - **Tiempo:** 1-2 horas dependiendo del tamaño
   - **Validaciones:** Verificar cantidades, calidad de productos frescos
   - **Errores:** Producto agotado, calidad no aceptable

4. **Coordinación de Entrega**
   - **Actor:** Administrador → Delivery
   - **Acción:** Asigna delivery, coordina ruta, actualiza estado
   - **Estados:** Asignando → Coordinando → En ruta
   - **Tiempo:** 30 minutos de coordinación
   - **Decisiones:** ¿Delivery disponible? → Asignar / Buscar alternativo

5. **Proceso de Entrega**
   - **Actor:** Delivery → Cliente
   - **Acción:** Transporta pedido, entrega, confirma recepción
   - **Estados:** En camino → En dirección → Entregado
   - **Tiempo:** 2-4 horas según ubicación
   - **Validaciones:** Confirmación de dirección, recepción del cliente
   - **Errores:** Dirección incorrecta, cliente no disponible

6. **Confirmación Final**
   - **Actor:** Administrador
   - **Acción:** Actualiza estado final, cierra proceso
   - **Estados:** Confirmando → Entregado → Proceso cerrado
   - **Notificaciones:** Cliente informado de entrega exitosa
   - **Métricas:** Tiempo total, satisfacción del cliente

#### Puntos Críticos:
- Verificación oportuna de pagos
- Disponibilidad de productos al preparar
- Coordinación efectiva de delivery
- Confirmación de entrega

### FLUJO C: GESTIÓN DE PRODUCTOS CON PRESENTACIONES

**Duración Estimada:** 10-30 minutos por producto  
**Actores:** Administrador, Sistema de Gestión

#### Pasos Detallados:

1. **Creación de Producto Base**
   - **Actor:** Administrador
   - **Acción:** Define nombre, categoría, descripción, imagen
   - **Estados:** Creando → Validando → Base creada
   - **Validaciones:** Nombre único, categoría válida, imagen accesible

2. **Selección de Tipo de Unidad**
   - **Actor:** Administrador
   - **Acción:** Selecciona entre kg, u, l, g, paq, presentation
   - **Estados:** Seleccionando → Tipo definido
   - **Decisiones:** ¿Tipo = "presentation"? → Habilitar gestión de presentaciones

3. **Gestión de Presentaciones** (si aplica)
   - **Actor:** Administrador
   - **Acción:** Agrega múltiples presentaciones con precios específicos
   - **Estados:** Agregando → Validando → Presentación guardada
   - **Validaciones:** Nombre único por producto, precio válido, unidad específica
   - **Iteraciones:** Repetir hasta completar todas las presentaciones

4. **Configuración de Precios**
   - **Actor:** Administrador
   - **Acción:** Define precio base o precios por presentación
   - **Estados:** Configurando → Calculando → Precios definidos
   - **Validaciones:** Precios positivos, coherencia entre presentaciones

5. **Validación Final y Activación**
   - **Actor:** Sistema
   - **Acción:** Valida integridad, activa producto en catálogo
   - **Estados:** Validando → Activando → Disponible
   - **Verificaciones:** Datos completos, presentaciones válidas, imágenes cargadas

#### Puntos Críticos:
- Consistencia en precios de presentaciones
- Validación de datos antes de activar
- Correcta configuración de unidades

---

## PARTE 4: LÓGICA DE NEGOCIO Y REGLAS

### REGLAS DE VALIDACIÓN

#### Productos y Presentaciones
```
REGLA P001: Nombre de producto único
- Condición: Dos productos no pueden tener el mismo nombre
- Validación: Verificar unicidad al crear/editar
- Error: "Ya existe un producto con este nombre"

REGLA P002: Precio válido
- Condición: Precio > 0 y máximo 2 decimales
- Validación: Regex pattern y rango numérico
- Error: "El precio debe ser mayor a 0 con máximo 2 decimales"

REGLA P003: Presentaciones obligatorias
- Condición: Si unit = "presentation", mínimo 1 presentación
- Validación: Verificar longitud de array presentations
- Error: "Debes agregar al menos una presentación para productos envasados"

REGLA P004: Categoría válida
- Condición: category_id debe existir en tabla categorías
- Validación: Foreign key constraint
- Error: "La categoría seleccionada no existe"
```

#### Cantidades y Unidades
```
REGLA Q001: Cantidades por tipo de unidad
- kg: Decimales permitidos, mínimo 0.1, incremento 0.1
- u: Solo enteros, mínimo 1, incremento 1
- l: Decimales permitidos, mínimo 0.25, incremento 0.25
- presentation: Solo enteros, mínimo 1, incremento 1

REGLA Q002: Validación de cantidad mínima
- Condición: Cantidad >= mínimo según tipo de unidad
- Acción: Bloquear decremento si se alcanza mínimo
- UI: Deshabilitar botón de decremento

REGLA Q003: Formato de visualización
- Decimales: Mostrar según precision de unidad
- Enteros: Sin decimales para u y presentation
- Validación: Formatear antes de mostrar en UI
```

#### Pedidos y Estados
```
REGLA O001: Estados secuenciales obligatorios
- Secuencia: Esperando Pago → Preparando → Listo para Envío → Enviado → Entregado
- Excepción: Cancelado accesible desde cualquier estado
- Validación: Verificar estado actual antes de cambio

REGLA O002: Pago verificado para preparación
- Condición: Solo si payment_status = "verified" se puede cambiar a "Preparando"
- Validación: Verificar estado de pago antes de transición
- Error: "No se puede preparar pedido sin pago verificado"

REGLA O003: Carrito mínimo
- Condición: Mínimo 1 producto en carrito para proceder al checkout
- Validación: Verificar longitud de array items
- Error: "Agrega al menos un producto al carrito"
```

### REGLAS DE CÁLCULO

#### Precios y Totales
```
CALC001: Cálculo de subtotal
Subtotal = Σ(precio_producto × cantidad)

CALC002: Cálculo de impuestos (IGV Perú)
IGV = Subtotal × 0.18

CALC003: Cálculo de total
Total = Subtotal + IGV

CALC004: Precio por presentación
- Si unit = "presentation": precio = precio_presentacion_seleccionada
- Si unit ≠ "presentation": precio = precio_base_producto
```

#### Métricas de Negocio
```
METRIC001: Productos más vendidos
- Cálculo: Σ(cantidad) GROUP BY producto_id ORDER BY total DESC
- Período: Configurable (día/semana/mes)

METRIC002: Valor promedio de pedido (AOV)
- Cálculo: Σ(total_pedidos) / COUNT(pedidos)
- Filtro: Solo pedidos entregados

METRIC003: Tasa de conversión
- Cálculo: Pedidos completados / Visitas únicas
- Período: Diario/semanal
```

### REGLAS DE AUTORIZACIÓN

#### Roles y Permisos
```
ROLE001: Cliente
- Permisos: Ver catálogo, gestionar carrito, crear pedidos, ver sus pedidos
- Restricciones: No puede ver pedidos de otros, no puede cambiar estados

ROLE002: Administrador
- Permisos: CRUD completo en productos/categorías, gestión de pedidos, verificación de pagos
- Restricciones: Responsabilidad de verificar pagos correctamente

ROLE003: Sistema
- Permisos: Crear pedidos, calcular totales, generar notificaciones
- Restricciones: No puede omitir validaciones de negocio
```

### REGLAS TEMPORALES

#### Horarios de Operación
```
TIME001: Horario de verificación de pagos
- Lunes a Viernes: 8:00 AM - 6:00 PM
- Sábados: 8:00 AM - 2:00 PM
- Domingos: No hay verificación

TIME002: SLA de verificación
- Pagos recibidos en horario laboral: Máximo 4 horas
- Pagos recibidos fuera de horario: Siguiente día laboral

TIME003: Tiempo de preparación
- Pedidos pequeños (≤5 productos): 1-2 horas
- Pedidos grandes (>5 productos): 2-4 horas
- Productos frescos requieren +30 minutos de selección
```

### REGLAS DE INTEGRIDAD

#### Relaciones de Datos
```
INTEGRITY001: Producto-Categoría
- Un producto debe tener exactamente una categoría
- No se puede eliminar categoría con productos asociados
- Cambio de categoría actualiza índices

INTEGRITY002: Pedido-Items
- Un pedido debe tener mínimo 1 item
- Items deben referenciar productos existentes
- Eliminación de producto requiere verificar pedidos activos

INTEGRITY003: Presentación-Producto
- Presentaciones solo pueden existir si producto.unit = "presentation"
- Eliminación de producto elimina presentaciones en cascada
- Presentación debe tener precio independiente
```

---

## PARTE 5: PLANIFICACIÓN DE DATOS

### A. REQUISITOS DE DATOS

#### ENTIDAD: PRODUCTOS
```javascript
{
  id: Number (PK, Auto-increment),
  name: String (Required, Unique, Max: 100 chars),
  category_id: Number (FK → categories.id, Required),
  price: Decimal(10,2) (Required, Min: 0.01),
  unit: Enum['kg','u','l','g','paq','presentation'] (Required),
  description: Text (Optional, Max: 500 chars),
  image: String (URL, Optional),
  presentations: Array<Presentation> (Conditional: Required if unit = 'presentation'),
  created_at: Timestamp (Auto),
  updated_at: Timestamp (Auto)
}

// Volumen Estimado: 50-200 productos
// Frecuencia de Actualización: Diaria (precios), Semanal (productos nuevos)
// Relaciones: 1:N con Categories, 1:N con Presentations, N:M con OrderItems
```

#### ENTIDAD: PRESENTACIONES
```javascript
{
  id: Number (PK, Auto-increment),
  product_id: Number (FK → products.id, Required),
  name: String (Required, Max: 50 chars),
  price: Decimal(10,2) (Required, Min: 0.01),
  unit: String (Required, Max: 20 chars),
  sort_order: Number (Default: 0)
}

// Volumen Estimado: 1-5 presentaciones por producto envasado
// Frecuencia de Actualización: Semanal
// Relaciones: N:1 con Products
```

#### ENTIDAD: CATEGORÍAS
```javascript
{
  id: Number (PK, Auto-increment),
  name: String (Required, Unique, Max: 50 chars),
  icon: String (Required, Icon name),
  color: String (Required, Hex color),
  sort_order: Number (Default: 0),
  active: Boolean (Default: true)
}

// Volumen Estimado: 8-15 categorías
// Frecuencia de Actualización: Mensual
// Relaciones: 1:N con Products
```

#### ENTIDAD: PEDIDOS
```javascript
{
  id: String (PK, Format: 'ORD-XXX'),
  customer_name: String (Required, Max: 100 chars),
  customer_phone: String (Required, Format: phone),
  customer_address: Text (Required, Max: 200 chars),
  date: Date (Required, Auto),
  status: Enum['awaiting_payment','preparing','ready_for_shipping','shipped','delivered','cancelled'],
  payment_method: Enum['transfer','yape','plin','cash'] (Required),
  payment_status: Enum['pending','verified','rejected'] (Default: 'pending'),
  items: Array<OrderItem> (Required, Min: 1),
  subtotal: Decimal(10,2) (Calculated),
  tax: Decimal(10,2) (Calculated, 18%),
  total: Decimal(10,2) (Calculated),
  notes: Text (Optional, Max: 300 chars),
  created_at: Timestamp (Auto),
  updated_at: Timestamp (Auto)
}

// Volumen Estimado: 10-50 pedidos diarios
// Frecuencia de Actualización: Constante durante horarios comerciales
// Relaciones: 1:N con OrderItems, 1:1 with Payments
```

#### ENTIDAD: ITEMS DE PEDIDO
```javascript
{
  id: Number (PK, Auto-increment),
  order_id: String (FK → orders.id, Required),
  product_id: Number (FK → products.id, Required),
  product_name: String (Snapshot, Required),
  quantity: Decimal(8,3) (Required, Min: 0.001),
  price: Decimal(10,2) (Snapshot, Required),
  total: Decimal(10,2) (Calculated),
  presentation_info: JSON (Optional, for presentation products)
}

// Volumen Estimado: 3-8 items por pedido
// Frecuencia de Actualización: Solo al crear/modificar pedido
// Relaciones: N:1 with Orders, N:1 with Products
```

#### ENTIDAD: PAGOS
```javascript
{
  id: String (PK, Format: 'PAY-XXX'),
  order_id: String (FK → orders.id, Required),
  customer_name: String (Snapshot, Required),
  date: Date (Required),
  amount: Decimal(10,2) (Required),
  method: Enum['transfer','yape','plin','cash'] (Required),
  status: Enum['pending','verified','rejected'] (Default: 'pending'),
  voucher: String (URL, Optional),
  verification_notes: Text (Optional),
  verified_by: String (Optional, Admin user),
  verified_at: Timestamp (Optional)
}

// Volumen Estimado: 1:1 con pedidos
// Frecuencia de Actualización: Al verificar pagos
// Relaciones: 1:1 with Orders
```

### B. DATOS SIMULADOS VS. REALES

#### DATOS ACTUALMENTE SIMULADOS

**Productos con Presentaciones:**
```javascript
// Ejemplo de datos simulados actuales
export const products = [
  {
    id: 11,
    name: 'Leche Fresca',
    category_id: 3,
    price: 4.20, // Precio base (será reemplazado por presentaciones)
    unit: 'presentation',
    presentations: [
      { id: 1, name: '1 Litro', price: 4.20, unit: 'L' },
      { id: 2, name: '500ml', price: 2.30, unit: 'ml' },
      { id: 3, name: '250ml', price: 1.50, unit: 'ml' }
    ]
  }
]
```

**Pedidos y Estados:**
```javascript
// Datos simulados de pedidos
export const initialOrders = [
  {
    id: 'ORD-001',
    customer: 'Juan Pérez',
    status: 'delivered',
    payment_status: 'verified',
    items: [
      { product_id: 1, quantity: 2, price: 5.90 },
      { product_id: 9, quantity: 0.5, price: 15.90 } // Cantidad decimal
    ]
  }
]
```

#### FUENTES DE DATOS REALES

**Sistema de Inventario:**
- **Fuente:** Archivo Excel actual del negocio o sistema POS
- **Frecuencia:** Sincronización diaria de productos y precios
- **Formato:** CSV/JSON para importación automática

**Base de Datos de Clientes:**
- **Fuente:** Generada por la aplicación (registro de usuarios)
- **Almacenamiento:** LocalStorage → SQLite → PostgreSQL/MySQL
- **Migración:** Exportar datos existentes a BD real

**Información de Pagos:**
- **Fuente:** Comprobantes reales subidos por clientes
- **Almacenamiento:** Servidor de archivos + metadata en BD
- **Validación:** Verificación manual por administrador

### C. PLAN DE TRANSICIÓN

#### FASE 1: PREPARACIÓN DE INFRAESTRUCTURA (Semana 1-2)

**Objetivos:**
- Configurar base de datos de producción
- Establecer esquemas y relaciones
- Configurar backups automáticos

**Actividades:**
1. **Setup de Base de Datos**
   ```sql
   -- Ejemplo de migración
   CREATE TABLE products (
     id SERIAL PRIMARY KEY,
     name VARCHAR(100) UNIQUE NOT NULL,
     category_id INTEGER REFERENCES categories(id),
     price DECIMAL(10,2) NOT NULL CHECK (price > 0),
     unit VARCHAR(20) NOT NULL,
     description TEXT,
     image_url VARCHAR(500),
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   ```

2. **Migración de Datos Maestros**
   - Exportar categorías actuales
   - Importar productos base sin presentaciones
   - Validar integridad referencial

**Criterios de Validación:**
- ✅ Todas las tablas creadas correctamente
- ✅ Constraints y índices funcionando
- ✅ Backup automático configurado
- ✅ Conexión desde aplicación exitosa

#### FASE 2: MIGRACIÓN DE DATOS CRÍTICOS (Semana 3)

**Objetivos:**
- Transferir productos y presentaciones
- Configurar sistema de imágenes
- Validar precios y cantidades

**Script de Migración:**
```javascript
// Ejemplo de migración de productos
const migrateProducts = async () => {
  for (const product of simulatedProducts) {
    const newProduct = await createProduct({
      name: product.name,
      category_id: product.category_id,
      price: product.price,
      unit: product.unit,
      description: product.description,
      image_url: product.image
    });
    
    // Migrar presentaciones si existen
    if (product.presentations) {
      for (const presentation of product.presentations) {
        await createPresentation({
          product_id: newProduct.id,
          name: presentation.name,
          price: presentation.price,
          unit: presentation.unit
        });
      }
    }
  }
};
```

**Criterios de Validación:**
- ✅ Todos los productos migrados con presentaciones
- ✅ Precios correctos por presentación
- ✅ Imágenes accesibles y optimizadas
- ✅ Categorías con productos correctos

#### FASE 3: OPERACIÓN HÍBRIDA (Semana 4-5)

**Objetivos:**
- Pedidos en base de datos real
- Mantener datos simulados como respaldo
- Pruebas de carga y rendimiento

**Configuración Dual:**
```javascript
// Sistema híbrido de datos
const dataSource = process.env.NODE_ENV === 'production' ? 'database' : 'simulated';

const getProducts = () => {
  if (dataSource === 'database') {
    return fetchProductsFromDB();
  }
  return simulatedProducts;
};
```

**Monitoreo:**
- Tiempo de respuesta de consultas
- Integridad de datos en tiempo real
- Rendimiento bajo carga de usuarios

#### FASE 4: PRODUCCIÓN COMPLETA (Semana 6+)

**Objetivos:**
- Migración completa a datos reales
- Eliminación de dependencias simuladas
- Monitoreo continuo de sistema

**Plan de Contingencia:**
```javascript
// Backup automático antes de migración final
const createBackup = async () => {
  await backupDatabase();
  await exportSimulatedData();
  await validateDataIntegrity();
};

// Rollback en caso de emergencia
const rollbackPlan = async () => {
  await restoreFromBackup();
  await switchToSimulatedData();
  await notifyAdministrators();
};
```

**Criterios de Éxito:**
- ✅ 0% dependencia de datos simulados
- ✅ Performance < 2 segundos por consulta
- ✅ 99.9% uptime durante migración
- ✅ Datos íntegros y consistentes

---

## ENTREGABLES FINALES

### 1. MATRIZ DE DEPENDENCIAS CRÍTICAS

| Funcionalidad | Dependencias Técnicas | Dependencias de Negocio | Riesgo | Prioridad |
|---------------|----------------------|-------------------------|---------|-----------|
| Catálogo Productos | Gestión Productos, Categorías | Datos de inventario actualizados | Medio | Alta |
| Sistema Cantidades | Catálogo, Validaciones | Definición de unidades de negocio | Alto | Alta |
| Presentaciones | Gestión Productos, Cantidades | Configuración de productos envasados | Medio | Alta |
| Checkout | Carrito, Estados, Pagos | Cuentas bancarias, métodos de pago | Alto | Crítica |
| Verificación Pagos | Estados, Dashboard | Proceso manual de verificación | Alto | Crítica |

### 2. CRONOGRAMA DE IMPLEMENTACIÓN

#### SPRINT 1-2: FOUNDATIONS (COMPLETADO ✅)
- ✅ Catálogo de productos con presentaciones
- ✅ Sistema de cantidades inteligente
- ✅ Gestión administrativa de productos
- ✅ Estados de pedidos y workflow

#### SPRINT 3-4: COMPLETION (EN PROGRESO 🔄)
- 🔄 Checkout completo con todos los métodos de pago
- 🔄 Sistema de autenticación de usuarios
- 🔄 Historial de pedidos para clientes
- 🔄 Optimización de rendimiento

#### SPRINT 5-6: PRODUCTION READY (PLANIFICADO 📋)
- 📋 Base de datos PostgreSQL/MySQL
- 📋 API RESTful separada
- 📋 Sistema de notificaciones
- 📋 Reportes y analytics

#### SPRINT 7+: SCALE & GROWTH (FUTURO 🚀)
- 🚀 Sistema de inventario automático
- 🚀 Integración con sistemas de pago
- 🚀 App móvil nativa
- 🚀 Sistema de delivery automático

### 3. PUNTOS CRÍTICOS Y RECOMENDACIONES

#### 🚨 CRÍTICOS (Acción Inmediata)
1. **Implementar Checkout Completo**
   - Sin esto, no hay conversión de ventas
   - Requiere validación de todos los métodos de pago
   - Impacto directo en revenue

2. **Sistema de Autenticación**
   - Necesario para historial de clientes
   - Base para futuras funcionalidades personalizadas
   - Seguridad de datos del cliente

3. **Base de Datos Real**
   - Los datos simulados no escalan
   - Necesario para operación real del negocio
   - Backup y recovery críticos

#### ⚠️ IMPORTANTES (Próximas 2-4 semanas)
1. **Optimización de Performance**
   - Lazy loading implementado, continuar optimizando
   - Caché de productos frecuentes
   - Compresión de imágenes

2. **Sistema de Notificaciones**
   - Email/SMS para confirmaciones
   - Alertas de cambio de estado
   - Notificaciones push para admin

#### 💡 RECOMENDACIONES ESTRATÉGICAS

1. **Implementar Testing Automatizado**
   ```javascript
   // Ejemplo de tests críticos
   describe('Checkout Flow', () => {
     test('Should complete purchase with valid data', async () => {
       // Test completo del flujo de compra
     });
     
     test('Should validate quantity constraints', () => {
       // Test de validaciones de cantidad
     });
   });
   ```

2. **Métricas de Negocio**
   - Tasa de conversión por producto
   - Valor promedio de pedido (AOV)
   - Tiempo promedio de checkout
   - Abandono de carrito

3. **Plan de Escalabilidad**
   - Arquitectura de microservicios
   - CDN para imágenes
   - Cache distribuido (Redis)
   - Load balancing

### 4. MATRIZ DE RIESGOS

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Fallo en checkout | Alto | Crítico | Tests exhaustivos, rollback plan |
| Pérdida de datos | Bajo | Crítico | Backups automáticos, redundancia |
| Performance pobre | Medio | Alto | Monitoring, optimización continua |
| Problemas de pago | Alto | Alto | Múltiples métodos, validación manual |

---

## CONCLUSIONES

La aplicación de e-commerce presenta una arquitectura sólida con funcionalidades core bien implementadas. El sistema de cantidades inteligente y gestión de presentaciones son diferenciadores importantes en el mercado.

**Fortalezas Actuales:**
- Sistema de presentaciones único y funcional
- Workflow de pedidos bien definido
- Interface administrativa completa
- UX optimizada para productos frescos

**Siguiente Fase Crítica:**
- Completar checkout con integración de pagos
- Migrar a base de datos de producción
- Implementar autenticación y persistencia de usuarios

**Proyección a 6 meses:**
- Plataforma completamente funcional
- 100+ productos con presentaciones múltiples
- 50+ pedidos diarios procesados automáticamente
- Sistema escalable para crecimiento del negocio

La inversión en arquitectura de datos y workflow de estados posiciona la aplicación para crecimiento sostenible y operación profesional del e-commerce.