import type { ReactNode } from 'react'
import '../styles/auth.css'

interface Props {
  children: ReactNode
}

function AuthLayout({ children }: Props) {
  return (
    <div className="auth-container">

      <div className="auth-left">

        <img
          src="/src/assets/images/register-images.png"
          alt="Students"
        />

      </div>

      <div className="auth-right">
        {children}
      </div>

    </div>
  )
}

export default AuthLayout