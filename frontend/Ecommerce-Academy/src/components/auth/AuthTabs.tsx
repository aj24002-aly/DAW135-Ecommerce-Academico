import {
  Link,
  useLocation
} from 'react-router-dom'

function AuthTabs() {

  const location = useLocation()

  return (
    <div className="auth-tabs">

      <Link
        to="/"
        className={
          location.pathname === '/'
            ? 'active-tab'
            : ''
        }
      >
        Login
      </Link>

      <Link
        to="/register"
        className={
          location.pathname === '/register'
            ? 'active-tab'
            : ''
        }
      >
        Register
      </Link>

    </div>
  )
}

export default AuthTabs