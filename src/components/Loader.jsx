import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

const LoaderSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid var(--primary-light);
  border-bottom-color: var(--primary-color);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

function Loader() {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  )
}

export default Loader