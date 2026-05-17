import InputField from './InputField'
import AuthTabs from './AuthTabs'

function RegisterForm() {
  return (
    <div className="form-container">

      <h2>Crea tu cuenta </h2>

      <AuthTabs />

      <p className="description">
        Hoy es un gran día para empezar algo increíble.
        Tu futuro se construye con cada paso que das.
      </p>

      <InputField
        label="Nombre completo"
        type="text"
        placeholder="Ingresa tu nombre completo"
      />

      <InputField
        label="Correo electrónico"
        type="email"
        placeholder="Ingresa tu correo"
      />

      <InputField
        label="Contraseña"
        type="password"
        placeholder="Ingresa tu contraseña"
      />

      <button className="auth-button">
        Registrarme
      </button>

    </div>
  )
}

export default RegisterForm