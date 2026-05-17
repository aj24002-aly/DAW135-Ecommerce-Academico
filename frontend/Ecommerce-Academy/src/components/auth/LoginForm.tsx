import InputField from './InputField'
import AuthTabs from './AuthTabs'

function LoginForm() {
  return (
    <div className="form-container">

      <h2>Welcome to lorem..!</h2>

      <AuthTabs />

      <p className="description">
        Lorem Ipsum is simply dummy text
        of the printing and typesetting industry.
      </p>

      <InputField
        label="User name"
        type="text"
        placeholder="Enter your User name"
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter your Password"
      />

      <div className="remember-row">

        <div>
          <input type="checkbox" />
          <span>Remember me</span>
        </div>

        <a href="#">
          Forgot Password?
        </a>

      </div>

      <button className="auth-button">
        Login
      </button>

    </div>
  )
}

export default LoginForm