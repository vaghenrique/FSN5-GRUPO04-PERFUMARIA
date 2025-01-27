import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "./ProductDetails.css";

// Importando as imagens
import masculino1 from "../assets/masculino1.jpg";
import masculino2 from "../assets/masculino2.jpg";
import feminino1 from "../assets/feminino1.jpg";
import feminino2 from "../assets/feminino2.jpg";
import importado1 from "../assets/importado1.jpg";
import importado2 from "../assets/importado2.jpg";

// Lista de produtos com imagens importadas
const products = [
  {
    id: 1,
    name: "Perfume Masculino 1",
    description: "Detalhes do perfume masculino 1.",
    image: masculino1, // Usando a imagem importada
    price: 200,
  },
  {
    id: 2,
    name: "Perfume Masculino 2",
    description: "Detalhes do perfume masculino 2.",
    image: masculino2,
    price: 220,
  },
  {
    id: 3,
    name: "Perfume Feminino 1",
    description: "Detalhes do perfume feminino 1.",
    image: feminino1,
    price: 250,
  },
  {
    id: 4,
    name: "Perfume Feminino 2",
    description: "Detalhes do perfume feminino 2.",
    image: feminino2,
    price: 270,
  },
  {
    id: 5,
    name: "Perfume Importado 1",
    description: "Detalhes do perfume importado 1.",
    image: importado2,
    price: 500,
  },
  {
    id: 6,
    name: "Perfume Importado 2",
    description: "Detalhes do perfume importado 2.",
    image: importado1,
    price: 800,
  },
];

const ProductDetails = () => {
  const { id } = useParams(); // Pegando o id do produto na URL
  const { addToCart } = useContext(CartContext); // Contexto para adicionar ao carrinho
  const navigate = useNavigate(); // Hook para navegação

  // Encontrando o produto pelo id
  const product = products.find((p) => p.id === parseInt(id));

  // Caso o produto não seja encontrado
  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <section className="product-details">
      <img
        src={product.image}
        alt={product.name}
        className="product-image-large"
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R${product.price}</p>

      {/* Botão para adicionar ao carrinho */}
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>

      {/* Botão para voltar à página anterior */}
      <button onClick={() => navigate(-1)}>Voltar</button>
    </section>
  );
};

export default ProductDetails;
