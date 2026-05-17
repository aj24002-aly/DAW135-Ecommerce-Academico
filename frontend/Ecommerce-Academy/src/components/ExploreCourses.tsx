// components/ExploreCourses.tsx

import React, { useState } from "react";
import { COURSE_CATEGORIES, COURSES } from "../data";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <span className="stars">
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={
          i < Math.round(rating)
            ? "star star--full"
            : "star star--empty"
        }
      >
        ★
      </span>
    ))}
  </span>
);

const ExploreCourses: React.FC = () => {

  // Curso seleccionado
  const [selectedCourse, setSelectedCourse] = useState(COURSES[0]);

  return (
    <section className="explore">
      <div className="container">

        {/* ENCABEZADO */}
        <div className="explore__header">
          <div>
            <p className="section-tag--sm">
              Explora Nuestros Cursos
            </p>

            <p className="explore__sub">
              Descubre contenido educativo moderno y aprende
              nuevas habilidades profesionales con nuestros
              cursos especializados.
            </p>
          </div>
        </div>

        {/* CATEGORÍAS */}
        <div className="explore__section">
          <div className="explore__row-header">
            <span className="explore__row-label">
              Categorías Disponibles
            </span>

            <a href="#" className="explore__see-all">
              Ver todas →
            </a>
          </div>

          <div className="explore__categories">
            {COURSE_CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className="explore__cat-pill"
                style={{
                  backgroundColor: cat.color + "22",
                  borderColor: cat.color,
                }}
              >
                <span
                  className="explore__cat-dot"
                  style={{
                    backgroundColor: cat.color,
                  }}
                />

                <span className="explore__cat-label">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CURSOS */}
        <div className="explore__courses-slider">

          {/* Mini cards */}
          <div className="explore__stack">
            {COURSES.map((course, index) => (
              <div
                key={course.id}
                className={`explore__mini-card ${
                  selectedCourse.id === course.id
                    ? "explore__mini-card--active"
                    : ""
                }`}
                onClick={() => setSelectedCourse(course)}
                style={{
                  transform: `rotate(${
                    index % 2 === 0 ? "-8deg" : "8deg"
                  })`,
                }}
              >
                <div
                  className="explore__mini-inner"
                  style={{
                    backgroundColor: course.categoryColor,
                  }}
                >
                  <span>{course.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CARD GRANDE */}
          <div className="explore__featured">

            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="explore__featured-img"
            />

            <div className="explore__featured-body">

              <h3>{selectedCourse.title}</h3>

              <p>
                Aprende con contenido actualizado, proyectos
                prácticos y metodologías profesionales
                diseñadas para impulsar tu crecimiento
                académico y laboral.
              </p>

              <div className="explore__featured-footer">

                <div>
                  <StarRating
                    rating={selectedCourse.rating}
                  />
                </div>

                <span>
                  ${selectedCourse.price}
                </span>
              </div>

              <button className="explore__btn">
                Explorar Curso
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourses;