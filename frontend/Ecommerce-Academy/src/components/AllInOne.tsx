// components/AllInOne.tsx
import React from "react";
import { FEATURES_CARDS } from "../data";

const AllInOne: React.FC = () => {
  return (
    <section className="allinone">

      <div className="container">

        <div className="allinone__header">

          <span className="section-tag">
            TODO EN UNO
          </span>

          <h2 className="allinone__heading">
            Una plataforma diseñada para la educación moderna
          </h2>

          <p className="allinone__subtitle">
            MedalyTech reúne herramientas inteligentes para estudiantes,
            docentes e instituciones educativas en una sola experiencia
            moderna, rápida e intuitiva.
          </p>

        </div>

        <div className="allinone__grid">

          {FEATURES_CARDS.map((card) => (
            <div
              key={card.title}
              className="allinone__card"
            >

  
              <h3 className="allinone__title">
                {card.title}
              </h3>

              <p className="allinone__desc">
                {card.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default AllInOne;