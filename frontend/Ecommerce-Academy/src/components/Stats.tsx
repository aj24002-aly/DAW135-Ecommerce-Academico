// components/Stats.tsx
import React from "react";
import { STATS } from "../data";

const Stats: React.FC = () => {
  return (
    <section className="stats">

      <div className="container">

        <div className="stats__header">

          <span className="section-tag">
            RESULTADOS
          </span>

          <h2 className="stats__title">
            Transformando la educación digital
          </h2>

          <p className="stats__desc">
            Miles de estudiantes y docentes ya utilizan nuestra plataforma
            para aprender, enseñar y crecer profesionalmente de una forma
            más moderna, dinámica e interactiva.
          </p>

        </div>

        <div className="stats__grid">

          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="stats__card"
            >
              <h3 className="stats__value">
                {stat.value}
              </h3>

              <p className="stats__label">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;