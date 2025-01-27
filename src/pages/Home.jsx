import React from "react";
import { useNavigate } from "react-router-dom";
import masculino1 from "../assets/masculino1.jpg";
import feminino1 from "../assets/feminino1.jpg";
import importado2 from "../assets/importado2.jpg";
import categoriamasculinos from "../assets/categoria-masculinos.jpg";
import categoriafemininos from "../assets/categoria-femininos.jpg";
import categoriaimportados from "../assets/categoria-importados.jpg";
import Footer from "../components/Footer"; // Importando o componente Footer
import "./Home.css";

// Perfumes mais vendidos (definidos manualmente)
const bestSellers = [
  {
    id: 1,
    name: "Essencial Ato",
    image: masculino1,
    shortDescription:
      "Natura, deixe sua marca com uma fragrância inesquecível.",
    price: 200,
  },
  {
    id: 3,
    name: "Lily Eau de Parfum",
    image: feminino1,
    shortDescription: "O Boticário, a delicadeza de um jardim em flor. 🌸",
    price: 250,
  },
  {
    id: 5,
    name: "Musamam White Intense",
    image: importado2,
    shortDescription:
      "Lattafa Perfumes, É um perfume oriental floral compartilhável 🐍, lançado em 2023",
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
              onClick={() => navigate(`/produto/${product.id}`)} // Redireciona para a página individual
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.shortDescription}</p>
              <p>R${product.price}</p>
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

      {/* Footer importado */}
      <Footer />
    </div>
  );
};

export default Home;