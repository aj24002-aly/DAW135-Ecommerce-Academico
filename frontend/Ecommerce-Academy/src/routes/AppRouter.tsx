import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import LandingPage from '../pages/LandingPage'   
import AdminPanel from '../../src/admin/AdminPanel' 

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/landing" element={<LandingPage />} />  
<Route path="/admin"   element={<AdminPanel />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter