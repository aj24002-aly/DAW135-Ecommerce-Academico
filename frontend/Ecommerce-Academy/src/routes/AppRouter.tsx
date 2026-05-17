import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import LandingPage from '../pages/LandingPage'   
import AdminPanel from '../admin/AdminPanel' 
import ProtectedRoute from './ProtectedRoute'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ahora la Landing es la raíz, lo primero que carga al abrir la web */}
        <Route path="/" element={<LandingPage />} />  
        
        {/* Las demás rutas quedan con sus nombres propios */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter