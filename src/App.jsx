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

  // Initialize services and load initial data
  useEffect(() => {
    const initializeApp = async () => {
      try {
        setIsLoading(true)
        
        // Initialize service manager (auth verification)
        await serviceManager.initialize()
        
        // Verificar si hay un usuario autenticado y token válido
        if (authService.isAuthenticated()) {
          const currentUser = authService.getCurrentUser()
          if (currentUser) {
            setCurrentUser(currentUser)
          }
        } else {
          // Token inválido o expirado, limpiar sesión
          await authService.logout()
        }
        
        // TODO: Cargar datos cuando tengamos los endpoints en el backend
        // const [categoriesData, productsData, ordersData, paymentsData] = await Promise.all([
        //   categoryService.getAll(),
        //   productService.getAll(),
        //   orderService.getAll(),
        //   paymentService.getAll()
        // ])
        
        // Usar datos mock temporalmente
        setAppCategories([])
        setAppProducts([])
        setOrders([])
        setPayments([])
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
      showToast('Sesión cerrada correctamente', 'success')
    } catch (error) {
      console.error('Logout error:', error)
      // Still logout locally even if API call fails
      setCurrentUser(null)
      setCart([])
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