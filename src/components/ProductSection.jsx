import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import masculino1 from "../assets/masculino1.jpg"
import masculino22 from "../assets/masculino22.jpg"
import masculino23 from "../assets/masculino23.jpg"
import masculino24 from "../assets/masculino24.jpg"
import masculino3 from "../assets/masculino3.jpg"

const ProductSection = ({ title, category }) => {
  const { addToCart } = useContext(CartContext);

  const products = [
    // Simulação de dados de produtos
    { id: 1, name: "Essencial Ato", price: 200, category: "masculinos", image: masculino1 },
    { id: 2, name: "Kaiak", price: 150, category: "masculinos", image: masculino22 },
    { id: 3, name: "Club 6 Exclusive", price: 180, category: "masculinos", image: masculino23 },
    { id: 4, name: "Essencial Único", price: 220, category: "masculinos", image: masculino24 },
    { id: 5, name: "Arbo", price: 205, category: "masculinos", image: masculino3 },
    { id: 3, name: "Perfume Feminino 1", price: 300, category: "femininos" },
  ].filter((product) => product.category === category);

  return (
    <div>
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image}alt={product.name}className="product-image"/>
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
