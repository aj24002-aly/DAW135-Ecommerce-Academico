// components/Navbar.tsx
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        {/* LOGO */}
        <Link to="/" className="navbar__logo">
          <span className="logo-medaly">
            Medaly
          </span>

          <span className="logo-tech">
            Tech
          </span>
        </Link>

       

        {/* ACTIONS */}
        <div className="navbar__actions">

          <Link to="/register" className="btn btn--outline-sm">
            Registrarse
          </Link>

          <Link to="/login" className="btn btn--primary-sm">
            Iniciar sesión
          </Link>

        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
