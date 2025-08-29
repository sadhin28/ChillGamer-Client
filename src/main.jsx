import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './route/Router.jsx'
import { ToastContainer } from 'react-toastify'
import ThemeProvider from './provider/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
      <AuthProvider>
       <RouterProvider router={router}/>
     </AuthProvider>
     </ThemeProvider>
     <ToastContainer />
  </StrictMode>,
)
