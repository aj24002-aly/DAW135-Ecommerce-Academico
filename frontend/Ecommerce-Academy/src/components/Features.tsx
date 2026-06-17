// components/Features.tsx
import React from "react";
import { FEATURES_LIST, STUDENT_AVATARS } from "../data";

const Features: React.FC = () => (
  <section className="features">
    <div className="container">
      <p className="section-tag">Nuestras Características</p>
      <p className="section-desc">
        Un plan que podemos usar y compartir con el resto del mundo
      </p>

      {FEATURES_LIST.map((feature, i) => (
        <div
          key={feature.title}
          className={`features__row ${feature.align === "left" ? "features__row--reverse" : ""}`}
        >
          {/* Lado del texto */}
          <div className="features__text">
            <h2 className="features__title">{feature.title}</h2>
            <p className="features__desc">{feature.description}</p>
            <ul className="features__bullets">
              {feature.bullets.map((b) => (
                <li key={b} className="features__bullet">
                  <span className="features__bullet-icon">✓</span> {b}
                </li>
              ))}
            </ul>

            {/* Mostrar fila de avatares en la primera característica */}
            {i === 0 && (
              <div className="features__avatars">
                {STUDENT_AVATARS.map((av, idx) => (
                  <img
                    key={idx}
                    src={av}
                    alt="estudiante"
                    className="features__avatar"
                    style={{ zIndex: STUDENT_AVATARS.length - idx }}
                  />
                ))}
                <span className="features__avatar-label">+2K estudiantes</span>
              </div>
            )}

            {/* Tarjeta mini-quiz para la característica "Verdadero o falso" */}
            {i === 1 && (
              <div className="features__quiz-card">
                <p className="features__quiz-q">¿Verdadero o falso?</p>
                <p className="features__quiz-sub">Esta obra tiene lugar en Italia</p>
                <div className="features__quiz-btns">
                  <button className="quiz-btn quiz-btn--true">Verdadero</button>
                  <button className="quiz-btn quiz-btn--false">Falso</button>
                </div>
              </div>
            )}
          </div>

          {/* Lado de la imagen */}
          <div className="features__img-wrap">
            <img src={feature.image} alt={feature.title} className="features__img" />

            {/* Puntos decorativos */}
            <div className="features__dots features__dots--tl" />
            <div className="features__dots features__dots--br" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features;