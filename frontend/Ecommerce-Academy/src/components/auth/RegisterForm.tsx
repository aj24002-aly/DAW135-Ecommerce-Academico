import InputField from './InputField'
import AuthTabs from './AuthTabs'

function RegisterForm() {
  return (
    <div className="form-container">

      <h2>Create Account</h2>

      <AuthTabs />

      <InputField
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <button className="auth-button">
        Register
      </button>

    </div>
  )
}

export default RegisterForm