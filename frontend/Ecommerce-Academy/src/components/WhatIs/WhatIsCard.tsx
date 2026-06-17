// components/WhatIs/WhatIsCard.tsx
import React, { useState } from "react";

interface WhatIsCardProps {
  id: string;
  image: string;
  title: string;
  tag: string;
  alt?: string;
}

export const WhatIsCard: React.FC<WhatIsCardProps> = ({ 
  image, 
  title, 
  tag, 
  alt 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageAlt = alt || `${title} - ilustración`;

  return (
    <article className="whatis__card">
      <div className="whatis__card-image-wrapper">
        <img
          src={image}
          alt={imageAlt}
          className={`whatis__img ${isLoaded ? "loaded" : "loading"}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        {!isLoaded && <div className="whatis__skeleton" />}
      </div>

      <div className="whatis__overlay" aria-hidden="true">
        <span className="whatis__tag">{tag}</span>
        <h4 className="whatis__card-title">{title}</h4>
      </div>
    </article>
  );
};