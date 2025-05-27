import styled from 'styled-components'
import { CheckCircle, AlertCircle, XCircle, X } from 'lucide-react'

const ToastContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: white;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  padding: 15px;
  display: flex;
  align-items: center;
  min-width: 300px;
  max-width: 400px;
  z-index: 9999;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 576px) {
    bottom: 20px;
    right: 20px;
    left: 20px;
    min-width: auto;
  }
`

const ToastIcon = styled.div`
  margin-right: 15px;
  font-size: 20px;
  color: ${props => {
    if (props.type === 'success') return 'var(--success-color)'
    if (props.type === 'warning') return 'var(--warning-color)'
    if (props.type === 'error') return 'var(--danger-color)'
    return 'var(--success-color)'
  }};
`

const ToastContent = styled.div`
  flex: 1;
  font-size: 14px;
`

const ToastClose = styled.div`
  cursor: pointer;
  color: var(--gray);
  font-size: 16px;
  margin-left: 10px;
`

function Toast({ message, type = 'success', onClose }) {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} />
      case 'warning':
        return <AlertCircle size={20} />
      case 'error':
        return <XCircle size={20} />
      default:
        return <CheckCircle size={20} />
    }
  }

  return (
    <ToastContainer>
      <ToastIcon type={type}>
        {getIcon()}
      </ToastIcon>
      <ToastContent>
        {message}
      </ToastContent>
      <ToastClose onClick={onClose}>
        <X size={16} />
      </ToastClose>
    </ToastContainer>
  )
}

export default Toast