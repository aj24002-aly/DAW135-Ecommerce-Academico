// components/WhatIs/WhatIs.tsx
import React from "react";
import { WHAT_IS_ITEMS } from "../data";
import { WhatIsCard } from "./WhatIs/WhatIsCard";
import { ClassroomSection } from "./WhatIs/ClassroomSection";
import "./WhatIs/WhatIs.scss";

interface WhatIsProps {
  className?: string;
}

export const WhatIs: React.FC<WhatIsProps> = ({ className = "" }) => {
  const sectionClassName = `whatis ${className}`.trim();

  return (
    <section className={sectionClassName} aria-labelledby="whatis-title">
      <div className="container">
        <header className="whatis__header">
          <p className="section-tag" id="whatis-title">
            ¿Qué es MedalyTech?
          </p>
          
          <p className="section-desc">
            MedalyTech es una plataforma educativa diseñada para ayudar a instituciones,
            academias y estudiantes a gestionar el aprendizaje de manera moderna,
            rápida y eficiente.
          </p>
          
          <p className="section-desc">
            Con MedalyTech puedes administrar cursos, estudiantes, profesores,
            clases virtuales y mucho más desde un solo lugar.
          </p>
        </header>

        <div className="whatis__cards">
          {WHAT_IS_ITEMS.map((item) => (
            <WhatIsCard 
              key={item.id}
              id={String(item.id)}  // Convertir number a string
              image={item.image}
              title={item.title}
              tag={item.tag}
            />
          ))}
        </div>

        <ClassroomSection />
      </div>
    </section>
  );
};

export default WhatIs;