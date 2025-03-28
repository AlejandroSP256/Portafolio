import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from './App'
import { StrictMode } from 'react'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
