import React from 'react';
import './Banner.css';
import essencial from '../assets/essencial.jpg';
import lavie from '../assets/lavie.jpg'
import natural from '../assets/natural.jpg'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h2>Encontre o seu <br />melhor Aroma</h2>
        <div className="stats">
          <div className="stat-item">
            <div className="number"><strong>20+</strong></div>
            <div className="label">Produtos</div>
          </div>
          <div className="stat-item">
            <div className="number"><strong>5+</strong></div>
            <div className="label">Marcas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <section className="header">
      <h1>Perfumes Mais Procurados</h1>
      <p>Escolha entre os Aromas mais procurados do momento!</p>
      <button className="btn-saiba-mais">Saiba mais &rarr;</button>
    </section>
  );
};

const Products = () => {
  return (
    <section className="products">
      <div className="product-card">
      <img src={essencial}  alt="Essencial Exclusivo - Natura" />
        <h2>Essencial Exclusivo - Natura</h2>
        <p className="price">₱ 1,400.00</p>
      </div>

      <div className="product-card">
        <img src={lavie} alt="La Vie est Belle - Lancome" />
        <h2>La Vie est Belle - Lancome</h2>
        <p className="price">₱ 900.00</p>
      </div>

      <div className="product-card">
        <img src={natural} alt="Ekos Ryo Chuva - Natura" />
        <h2>Ekos Ryo Chuva - Natura</h2>
        <p className="price">₱ 3,500.00</p>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="container">
      <Banner />
      <Header />
      <Products />
    </div>
  );
};

export default App;