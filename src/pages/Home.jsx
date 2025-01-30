import React from "react";
import { useNavigate } from "react-router-dom";
import masculino1 from "../assets/masculino1.jpg";
import feminino1 from "../assets/feminino1.jpg";
import categoriamasculinos from "../assets/categoria-masculinos.jpg";
import categoriafemininos from "../assets/categoria-femininos.jpg";
import categoriaimportados from "../assets/categoria-importados.jpg";
import MusamanWhite from "../assets/importado2.jpg";
import Footer from "../components/Footer";
import "./Home.css";

// Perfumes mais vendidos
const bestSellers = [
  {
    id: 1,
    name: "Essencial Ato",
    image: masculino1,
    price: 200,
  },
  {
    id: 6,
    name: "Lily Eau de Parfum",
    image: feminino1,
    price: 250,
  },
  {
    id: 15,
    name: "Musamam White Intense",
    image: MusamanWhite,
    price: 500,
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Seção de perfumes mais vendidos */}
      <section className="best-sellers">
        <h2>Mais Vendidos</h2>
        <div className="product-grid">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/produto/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p className="price">R${product.price}</p>
              <button
                className="buy-button"
                onClick={(e) => {
                  e.stopPropagation(); // Impede que o clique no botão navegue para a página do produto
                  navigate(`/produto/${product.id}`); // Navega para a página de descrição do produto
                }}
              >
                QUERO O MEU
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Categorias de perfumes */}
      <section className="categories">
        <h2>Categorias</h2>
        <div className="category-grid">
          <div
            className="category-card"
            style={{ backgroundImage: `url(${categoriamasculinos})` }}
            onClick={() => navigate("/categoria/masculinos")}
          >
            <div className="category-overlay">
              <h3>Perfumes Masculinos</h3>
            </div>
          </div>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${categoriafemininos})` }}
            onClick={() => navigate("/categoria/femininos")}
          >
            <div className="category-overlay">
              <h3>Perfumes Femininos</h3>
            </div>
          </div>
          <div
            className="category-card"
            style={{ backgroundImage: `url(${categoriaimportados})` }}
            onClick={() => navigate("/categoria/importados")}
          >
            <div className="category-overlay">
              <h3>Perfumes Importados</h3>
            </div>
          </div>
        </div>
      </section>

      {}
      <Footer />
    </div>
  );
};

export default Home;
