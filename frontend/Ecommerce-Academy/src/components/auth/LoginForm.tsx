import InputField from './InputField'
import AuthTabs from './AuthTabs'

function LoginForm() {
  return (
    <div className="form-container">

      <h2>Bienvenido de nuevo </h2>

      <AuthTabs />

      <p className="description">
        Cada línea de código que escribes te acerca más
        a la vida que sueñas. Inicia sesión y sigue construyendo tu futuro.
      </p>

      <InputField
        label="Correo o usuario"
        type="text"
        placeholder="Ingresa tu usuario"
      />

      <InputField
        label="Contraseña"
        type="password"
        placeholder="Ingresa tu contraseña"
      />

      <div className="remember-row">

        <div>
          <input type="checkbox" />
          <span>Recordarme</span>
        </div>

        <a href="#">
          ¿Olvidaste tu contraseña?
        </a>

      </div>

      <button className="auth-button">
        Iniciar sesión
      </button>

    </div>
  )
}

export default LoginForm