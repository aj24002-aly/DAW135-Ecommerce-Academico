// components/LatestNews.tsx
import React from "react";
import { NEWS } from "../data";

const LatestNews: React.FC = () => (
  <section className="news">
    <div className="container">
      <p className="section-tag--sm">Blog de MedalyTech</p>
      <p className="section-desc">Descubre todas las noticias y recursos que tenemos para ti</p>

      <div className="news__grid">
        {NEWS.map((article) => (
          <div key={article.id} className="news__card">
            <div className="news__img-wrap">
              <img src={article.image} alt={article.title} className="news__img" />
              <span className="news__cat">{article.category}</span>
            </div>
            <div className="news__body">
              <p className="news__date">{article.date}</p>
              <h4 className="news__headline">{article.title}</h4>
              <a href="#" className="news__read-more">Leer más &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LatestNews;