// components/WhatIs/ClassroomSection.tsx
import React from "react";

interface ClassroomSectionProps {
  imageUrl?: string;
  imageAlt?: string;
}

export const ClassroomSection: React.FC<ClassroomSectionProps> = ({ 
  imageUrl = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=380&fit=crop",
  imageAlt = "Aula virtual con estudiantes en computadoras"
}) => {
  return (
    <div className="whatis__classroom">
      <div className="whatis__classroom-text">
        <h2 className="whatis__classroom-title">
          Todo lo que puedes hacer en un{" "}
          <span className="highlight-teal" aria-label="énfasis en físico">
            salón de clases físico
          </span>,
          <br />
          también puedes hacerlo con MedalyTech
        </h2>

        <div className="whatis__classroom-desc">
          <p>
            Nuestra plataforma permite crear experiencias educativas modernas,
            dinámicas e interactivas para estudiantes y docentes.
          </p>
          <p>
            Gestiona clases, tareas, asistencia, evaluaciones y comunicación
            académica desde cualquier dispositivo y en cualquier momento.
          </p>
        </div>
      </div>

      <figure className="whatis__classroom-img">
        <img
          src={imageUrl}
          alt={imageAlt}
          loading="lazy"
        />
        <figcaption className="visually-hidden">
          Ejemplo de aula virtual con estudiantes interactuando
        </figcaption>
      </figure>
    </div>
  );
};