// components/Navbar.tsx
import React, { useState } from "react";
import { NAV_LINKS } from "../data";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">

        {/* LOGO */}
        <a href="#" className="navbar__logo">
          <span className="logo-medaly">
            Medaly
          </span>

          <span className="logo-tech">
            Tech
          </span>
        </a>

        {/* LINKS */}
        <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>

          {NAV_LINKS
            .filter((l) => !l.isButton)
            .map((link) => (
              <li key={link.label}>

                <a
                  href={link.href}
                  className="navbar__link"
                >
                  {link.label}
                </a>

              </li>
            ))}

        </ul>

        {/* ACTIONS */}
        <div className="navbar__actions">

          <a href="#" className="btn btn--outline-sm">
            Registrarse
          </a>

          <a href="#" className="btn btn--primary-sm">
            Iniciar sesión
          </a>

        </div>

        {/* BURGER */}
        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;