import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "./ProductSection.css";
import feminino1 from "../assets/feminino1.jpg";
import feminino2 from "../assets/feminino2.jpg";
import feminino3 from "../assets/feminino3.jpg";
import feminino04 from "../assets/feminino04.jpg";
import feminino05 from "../assets/feminino05.jpeg";
import masculino1 from "../assets/masculino1.jpg";
import masculino22 from "../assets/masculino22.jpg";
import masculino23 from "../assets/masculino23.jpg";
import masculino24 from "../assets/masculino24.jpg";
import masculino3 from "../assets/masculino3.jpg";
import Invictus from "../assets/Invictus.jpeg";
import ArmaniCode from "../assets/Armani Code.png";
import BossBottled from "../assets/Boss Bottled.jpeg";
import YEaudeParfum from "../assets/Y Eau de Parfum.jpeg";
import MusamanWhite from "../assets/importado2.jpg";
import million from "../assets/1million.jpg";
import naturahomem from "../assets/naturahomem.jpg";
import beyondthemoon from "../assets/beyondthemoon.jpg";

const ProductSection = ({ title, category }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Essencial Ato",
      price: 200,
      category: "masculinos",
      image: masculino1,
    },
    {
      id: 2,
      name: "Kaiak",
      price: 150,
      category: "masculinos",
      image: masculino22,
    },
    {
      id: 3,
      name: "Club 6 Exclusive",
      price: 180,
      category: "masculinos",
      image: masculino23,
    },
    {
      id: 4,
      name: "Essencial Único",
      price: 220,
      category: "masculinos",
      image: masculino24,
    },
    {
      id: 5,
      name: "Arbo",
      price: 205,
      category: "masculinos",
      image: masculino3,
    },
    {
      id: 6,
      name: "Lily",
      price: 300,
      category: "femininos",
      image: feminino1,
    },
    {
      id: 7,
      name: "Good Girl",
      price: 400,
      category: "femininos",
      image: feminino2,
    },
    {
      id: 8,
      name: "La Belle",
      price: 500,
      category: "femininos",
      image: feminino3,
    },
    {
      id: 9,
      name: " Lua XerJoff Eau",
      price: 100,
      category: "femininos",
      image: feminino04,
    },
    {
      id: 10,
      name: "Essencial Natura",
      price: 350,
      category: "femininos",
      image: feminino05,
    },
    {
      id: 11,
      name: "Invictus",
      price: 200,
      category: "importados",
      image: Invictus,
    },
    {
      id: 12,
      name: "Armani Code",
      price: 250,
      category: "importados",
      image: ArmaniCode,
    },
    {
      id: 13,
      name: "Boss Bottled",
      price: 250,
      category: "importados",
      image: BossBottled,
    },
    {
      id: 14,
      name: "Y Eau de Parfum",
      price: 200,
      category: "importados",
      image: YEaudeParfum,
    },
    {
      id: 15,
      name: "Musaman White Intense",
      price: 200,
      category: "importados",
      image: MusamanWhite,
    },
    {
      id: 16,
      name: "Natura Homem",
      price: 200,
      category: "masculinos",
      image: naturahomem,
    },
    {
      id: 17,
      name: "Beyond The Moon",
      price: 200,
      category: "femininos",
      image: beyondthemoon,
    },
    {
      id: 18,
      name: "1 Million",
      price: 200,
      category: "importados",
      image: million,
    },
  ].filter((product) => product.category === category);

  const handleProductClick = (productId) => {
    navigate(`/produto/${productId}`);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onClick={() => handleProductClick(product.id)}
            />
            <h3>{product.name}</h3>
            <p>R${product.price}</p>
            <button onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
