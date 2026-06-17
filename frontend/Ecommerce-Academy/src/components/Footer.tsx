// components/Footer.tsx

import React from "react";
import { FOOTER_LINKS } from "../data";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">

      {/* PARTE SUPERIOR */}
      <div className="footer__top">

        {/* LOGO */}
        <div className="footer__brand">

          <div className="footer__logo">
            <span className="logo-medaly">
              Medaly
            </span>

            <span className="logo-tech">
              Tech
            </span>
          </div>

          <p className="footer__tagline">
            Impulsando el aprendizaje y la innovación
            tecnológica para tu crecimiento profesional.
          </p>
        </div>

        {/* COLUMNAS */}
        {Object.entries(FOOTER_LINKS).map(
          ([section, links]) => (
            <div key={section} className="footer__col">

              <h5 className="footer__col-title">
                {section}
              </h5>

              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer__link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      {/* PARTE INFERIOR */}
      <div className="footer__bottom">

        <p>
          © 2026 MedalyTech. Todos los derechos
          reservados.
        </p>

        <div className="footer__socials">

          <a href="#" className="footer__social">
            𝕏
          </a>

          <a href="#" className="footer__social">
            in
          </a>

          <a href="#" className="footer__social">
            f
          </a>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;