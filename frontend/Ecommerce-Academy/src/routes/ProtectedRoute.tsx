import type { ReactNode } from 'react'; 
interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  // lógica de autenticación aquí (ej. const isAuthenticated = ... )
  const isAuthenticated = true; 

  if (!isAuthenticated) {
    // Redirigir al login si no está autenticado
    // return <Navigate to="/login" />
  }

  return children;
}

export default ProtectedRoute;