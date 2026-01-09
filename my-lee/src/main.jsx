import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Component/CartProvider.jsx'
import App from './App.jsx'
import './App.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <BrowserRouter>
       <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
