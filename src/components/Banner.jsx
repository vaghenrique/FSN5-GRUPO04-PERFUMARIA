import React from 'react';
import './Banner.css';
import bleudechanel from '../assets/bleudechanel.png';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h2>Encontre o seu melhor Aroma</h2>
        <div className="stats">
          <div><strong>20+</strong> Produtos</div>
          <div><strong>5+</strong> Marcas</div>
        </div>
      </div>
      <div className="banner-image">
        <img src={bleudechanel} alt="Banner" />
      </div>
    </section>
  );
};

export default Banner;
