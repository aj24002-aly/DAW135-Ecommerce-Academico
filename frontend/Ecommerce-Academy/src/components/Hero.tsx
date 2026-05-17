import React from "react";
import { useNavigate } from "react-router-dom";   
import heroStudent from "../assets/images/hero-student.png";
import avatarImg from "../assets/images/avatar.png";

const Hero: React.FC = () => {
  const navigate = useNavigate();                  

  // Función guardiana para controlar a dónde van los botones
  const handleNavigation = (targetPath: string) => {
    const isAuthenticated = localStorage.getItem('token'); // Checa si hay sesión

    if (isAuthenticated) {
      // Si está logueado, va directo a donde dio clic (ej: /admin)
      navigate(targetPath);
    } else {
      // Si NO está logueado, lo mandamos al Login obligatoriamente
      navigate("/");
    }
  };

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">

          <h1 className="hero__title">
            <span className="hero__title--highlight">Estudiar</span>{" "}
            en línea ahora<br />es mucho más fácil
          </h1>

          <p className="hero__subtitle">
            TOTC es una plataforma interactiva diseñada
            para ayudarte a aprender de una manera
            más dinámica y moderna.
          </p>

          <div className="hero__actions">

            {/* Botón Admin protegido por función */}
            <button
              className="btn btn--admin"
              onClick={() => handleNavigation("/admin")}
            >
              Panel Admin
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__visual">
          <div className="hero__img-wrap">
            <img src={heroStudent} alt="Estudiante" className="hero__img" />

            {/* TOP CARD */}
            <div className="hero__card hero__card--top">
              <div className="hero__card-icon">📅</div>
              <div>
                <p className="hero__card-name">250k</p>
                <p className="hero__card-sub">Estudiantes asistidos</p>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="hero__card hero__card--right">
              <div className="hero__card-icon">✉️</div>
              <div>
                <p className="hero__card-name">¡Felicidades!</p>
                <p className="hero__card-sub">Tu admisión fue completada</p>
              </div>
            </div>

            {/* BOTTOM CARD */}
            <div className="hero__card hero__card--bottom">
              <div className="hero__card-avatar">
                <img src={avatarImg} alt="Usuario" />
              </div>
              <div>
                <p className="hero__card-name">Clase UX/UI</p>
                <p className="hero__card-sub">Hoy a las 12:00 PM</p>
              </div>
              <span className="hero__card-badge">✓</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__wave"></div>
    </section>
  );
};

export default Hero;