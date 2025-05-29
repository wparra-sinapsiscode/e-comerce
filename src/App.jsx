import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './components/AuthPage'
import AdminDashboard from './components/AdminDashboard'
import ClientStore from './components/ClientStore'
import Loader from './components/Loader'
import Toast from './components/Toast'
import { serviceManager, authService, categoryService, productService, orderService, paymentService } from './services'
import { paymentInfo } from './data/sampleData'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' })
  const [appCategories, setAppCategories] = useState([])
  const [appProducts, setAppProducts] = useState([])
  const [orders, setOrders] = useState([])
  const [payments, setPayments] = useState([])
  const [cart, setCart] = useState([])
  const [servicesInitialized, setServicesInitialized] = useState(false)

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' })
    }, 3000)
  }

  // Función para cargar datos de la aplicación (solo cuando está autenticado)
  const loadAppData = async (user = null) => {
    try {
      console.log('📦 APP: Iniciando carga de datos...')
      console.log('📦 APP: Called from:', new Error().stack.split('\n')[2].trim())
      const authenticatedUser = user || currentUser
      console.log('📦 APP: Usuario para cargar datos:', authenticatedUser)
      
      console.log('📦 APP: Cargando categorías...')
      const categoriesResponse = await categoryService.getAll()
      console.log('📦 APP: Respuesta completa categorías:', categoriesResponse)
      
      // Extraer correctamente los datos anidados
      const categoriesArray = categoriesResponse.data?.data || []
      console.log('📦 APP: Categorías array:', categoriesArray)
      console.log('📦 APP: Primera categoría:', JSON.stringify(categoriesArray[0], null, 2))
      
      console.log('📦 APP: Cargando productos...')
      const productsResponse = await productService.getAll()
      console.log('📦 APP: Respuesta completa productos:', productsResponse)
      
      // Extraer correctamente los datos anidados
      const productsArray = productsResponse.data?.data || []
      console.log('📦 APP: Productos array:', productsArray)
      
      // Configurar los datos en el estado
      setAppCategories(categoriesArray)
      setAppProducts(productsArray)
      
      console.log('🛒 APP: Disparando la carga de pedidos...');
      console.log('📦 APP: Usuario actual completo:', authenticatedUser)
      
      // Cargar pedidos según el rol del usuario
      let ordersResponse
      if (authenticatedUser?.role === 'ADMIN') {
        console.log('📦 APP: Usuario ADMIN - Cargando TODOS los pedidos')
        ordersResponse = await orderService.getOrders()
      } else {
        console.log('📦 APP: Usuario CLIENTE - Cargando mis pedidos para usuario ID:', authenticatedUser?.id)
        ordersResponse = await orderService.getMyOrders()
      }
      
      console.log('📦 APP: Respuesta pedidos:', ordersResponse)
      
      if (ordersResponse.success) {
        const ordersArray = ordersResponse.data?.data || []
        setOrders(ordersArray)
        console.log('📦 APP: Pedidos configurados:', ordersArray.length, 'pedidos para rol:', currentUser?.role)
      } else {
        console.log('📦 APP: Error cargando pedidos:', ordersResponse.error)
        setOrders([])
      }
      
      setPayments([]) // TODO: Implementar cuando esté listo
      
      console.log('📦 APP: Datos configurados exitosamente')
    } catch (error) {
      console.error('📦 APP: Error cargando datos:', error)
      // Usar datos vacíos como fallback
      setAppCategories([])
      setAppProducts([])
      showToast('Error cargando datos de la aplicación', 'error')
    }
  }

  // Initialize services and load initial data
  useEffect(() => {
    const initializeApp = async () => {
      try {
        setIsLoading(true)
        
        // Initialize service manager (this will initialize auth and restore session if valid)
        await serviceManager.initialize()
        
        // Get user after initialization (auth service handles token validation internally)
        const authenticatedUser = authService.getCurrentUser()
        
        if (authenticatedUser && authService.isAuthenticated()) {
          console.log('🔐 Session restored for user:', authenticatedUser.email)
          setCurrentUser(authenticatedUser)
          // Load app data for authenticated user
          await loadAppData(authenticatedUser)
        } else {
          console.log('🔐 No valid session found')
          // COMENTADO: Evitar logout automático durante inicialización
          // await authService.logout()
        }
        
        setServicesInitialized(true)
        
      } catch (error) {
        console.error('Failed to initialize app:', error)
        showToast('Error al cargar la aplicación', 'error')
        setServicesInitialized(true) // Continuar aunque falle
      } finally {
        setIsLoading(false)
      }
    }
    
    initializeApp()
  }, [])

  const login = async (email, password) => {
    try {
      setIsLoading(true)
      
      const response = await authService.login({ email, password })
      
      if (response.success) {
        // Si no viene el usuario en la respuesta, obtenerlo del localStorage
        const user = response.data.user || authService.getCurrentUser()
        
        setCurrentUser(user)
        // Cargar datos de la aplicación después del login exitoso
        await loadAppData(user)
        showToast('¡Bienvenido!', 'success')
        return user
      } else {
        showToast(response.error?.message || 'Credenciales incorrectas', 'error')
        return null
      }
    } catch (error) {
      console.error('Login error:', error)
      showToast('Error al iniciar sesión', 'error')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      setIsLoading(true)
      
      const response = await authService.register(userData)
      
      if (response.success) {
        setCurrentUser(response.data.user)
        showToast('Registro exitoso. ¡Bienvenido!', 'success')
        
        // Cargar datos de la aplicación después del registro exitoso
        await loadAppData(response.data.user)
        
        return response.data.user
      } else {
        showToast(response.error?.message || 'Error en el registro', 'error')
        return null
      }
    } catch (error) {
      console.error('Register error:', error)
      showToast('Error al registrarse', 'error')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
      setCurrentUser(null)
      setCart([])
      // Limpiar todos los datos al cerrar sesión
      setAppCategories([])
      setAppProducts([])
      setOrders([])
      setPayments([])
      showToast('Sesión cerrada correctamente', 'success')
    } catch (error) {
      console.error('Logout error:', error)
      // Still logout locally even if API call fails
      setCurrentUser(null)
      setCart([])
      // Limpiar todos los datos al cerrar sesión
      setAppCategories([])
      setAppProducts([])
      setOrders([])
      setPayments([])
      showToast('Sesión cerrada correctamente', 'success')
    }
  }

  const appData = {
    categories: appCategories,
    products: appProducts,
    orders,
    payments,
    cart,
    setCategories: setAppCategories,
    setProducts: setAppProducts,
    setOrders,
    setPayments,
    setCart,
    paymentInfo,
    showToast,
    // API services
    categoryService,
    productService,
    orderService,
    paymentService,
    servicesInitialized
  }

  // Don't render until services are initialized
  if (!servicesInitialized && isLoading) {
    return (
      <div className="App">
        <Loader />
      </div>
    )
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="App">
        {isLoading && <Loader />}
        {toast.show && <Toast message={toast.message} type={toast.type} />}
        
        <Routes>
          <Route 
            path="/auth" 
            element={
              currentUser ? 
                <Navigate to={currentUser.role === 'ADMIN' ? '/admin' : '/store'} replace /> :
                <AuthPage login={login} register={register} />
            } 
          />
          <Route 
            path="/admin/*" 
            element={
              currentUser && currentUser.role === 'ADMIN' ? 
                <AdminDashboard user={currentUser} logout={logout} {...appData} /> :
                <Navigate to="/auth" replace />
            } 
          />
          <Route 
            path="/store/*" 
            element={
              currentUser && currentUser.role === 'CUSTOMER' ? 
                <ClientStore user={currentUser} logout={logout} {...appData} /> :
                <Navigate to="/auth" replace />
            } 
          />
          <Route 
            path="/" 
            element={
              <Navigate to={
                currentUser ? 
                  (currentUser.role === 'ADMIN' ? '/admin' : '/store') : 
                  '/auth'
              } replace />
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App