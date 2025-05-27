import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Store, Mail, Lock, User, Phone } from 'lucide-react'

const AuthSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  padding: 20px;
`

const AuthContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
`

const FormContainer = styled.div`
  padding: 30px;
`

const FormHeader = styled.div`
  margin-bottom: 30px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  svg {
    font-size: 28px;
    color: var(--primary-color);
    margin-right: 10px;
  }
  
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: var(--gray-dark);
  }
`

const ToggleContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`

const Toggle = styled.div`
  flex: 1;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  color: var(--gray);
  font-weight: 500;
  position: relative;
  
  &.active {
    color: var(--primary-color);
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
`

const FormWrapper = styled.form`
  display: ${props => props.$active ? 'block' : 'none'};
`

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray-light);
  }
  
  input {
    padding-left: 40px;
  }
`

const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
  
  label {
    display: flex;
    align-items: center;
    color: var(--gray);
    
    input[type="checkbox"] {
      width: auto;
      margin-right: 5px;
    }
  }
  
  a {
    color: var(--primary-color);
  }
`

const AuthBtn = styled.button`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  padding: 12px;
  border-radius: var(--radius);
  font-weight: 500;
  margin-bottom: 20px;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`

const DemoAccounts = styled.div`
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  
  p {
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 10px;
  }
`

const DemoBtn = styled.button`
  color: white;
  padding: 8px 15px;
  border-radius: var(--radius);
  margin: 0 5px;
  font-size: 13px;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  
  &.admin {
    background-color: var(--secondary-color);
  }
  
  &.client {
    background-color: var(--success-color);
  }
  
  &:hover {
    opacity: 0.9;
  }
`

function AuthPage({ login, register }) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('login')
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    if (loginData.email && loginData.password) {
      const user = await login(loginData.email, loginData.password)
      if (user) {
        // Navegar al dashboard correspondiente después del login exitoso
        navigate(user.role === 'ADMIN' ? '/admin' : '/store')
      }
    }
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    if (registerData.name && registerData.email && registerData.phone && registerData.password) {
      if (registerData.password !== registerData.confirmPassword) {
        // Handle password mismatch
        return
      }
      const user = await register(registerData)
      if (user) {
        // Navegar al dashboard correspondiente después del registro exitoso
        navigate(user.role === 'ADMIN' ? '/admin' : '/store')
      }
    }
  }

  const handleDemoLogin = async (email, password) => {
    setLoginData({ email, password })
    const user = await login(email, password)
    if (user) {
      // Navegar al dashboard correspondiente después del login demo exitoso
      navigate(user.role === 'ADMIN' ? '/admin' : '/store')
    }
  }

  return (
    <AuthSection>
      <AuthContainer>
        <FormContainer>
          <FormHeader>
            <Logo>
              <Store size={28} />
              <h1>Mercado Express</h1>
            </Logo>
            <ToggleContainer>
              <Toggle 
                className={activeTab === 'login' ? 'active' : ''}
                onClick={() => setActiveTab('login')}
              >
                Iniciar sesión
              </Toggle>
              <Toggle 
                className={activeTab === 'register' ? 'active' : ''}
                onClick={() => setActiveTab('register')}
              >
                Registrarse
              </Toggle>
            </ToggleContainer>
          </FormHeader>

          {/* Login Form */}
          <FormWrapper 
            $active={activeTab === 'login'} 
            onSubmit={handleLoginSubmit}
          >
            <InputGroup>
              <Mail size={16} />
              <input
                type="email"
                placeholder="Correo electrónico"
                autoComplete="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                required
              />
            </InputGroup>
            <InputGroup>
              <Lock size={16} />
              <input
                type="password"
                placeholder="Contraseña"
                autoComplete="current-password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                required
              />
            </InputGroup>
            <RememberForgot>
              <label>
                <input type="checkbox" /> Recordarme
              </label>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </RememberForgot>
            <AuthBtn type="submit">Iniciar sesión</AuthBtn>
            
            <DemoAccounts>
              <p>Cuentas demo (asegúrate de que el backend esté ejecutándose):</p>
              <DemoBtn 
                type="button" 
                className="admin"
                onClick={() => handleDemoLogin('admin@ecommerce.com', 'admin123')}
              >
                Administrador
              </DemoBtn>
              <DemoBtn 
                type="button" 
                className="client"
                onClick={() => handleDemoLogin('customer@test.com', 'customer123')}
              >
                Cliente
              </DemoBtn>
            </DemoAccounts>
          </FormWrapper>

          {/* Register Form */}
          <FormWrapper 
            $active={activeTab === 'register'} 
            onSubmit={handleRegisterSubmit}
          >
            <InputGroup>
              <User size={16} />
              <input
                type="text"
                placeholder="Nombre completo"
                autoComplete="name"
                value={registerData.name}
                onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                required
              />
            </InputGroup>
            <InputGroup>
              <Mail size={16} />
              <input
                type="email"
                placeholder="Correo electrónico"
                autoComplete="email"
                value={registerData.email}
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                required
              />
            </InputGroup>
            <InputGroup>
              <Phone size={16} />
              <input
                type="tel"
                placeholder="Teléfono (WhatsApp)"
                autoComplete="tel"
                value={registerData.phone}
                onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                required
              />
            </InputGroup>
            <InputGroup>
              <Lock size={16} />
              <input
                type="password"
                placeholder="Contraseña"
                autoComplete="new-password"
                value={registerData.password}
                onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                required
              />
            </InputGroup>
            <InputGroup>
              <Lock size={16} />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                autoComplete="new-password"
                value={registerData.confirmPassword}
                onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                required
              />
            </InputGroup>
            <AuthBtn type="submit">Registrarse</AuthBtn>
          </FormWrapper>
        </FormContainer>
      </AuthContainer>
    </AuthSection>
  )
}

export default AuthPage