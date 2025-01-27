import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ProductSection = ({ title, category }) => {
  const { addToCart } = useContext(CartContext);

  const products = [
    // Simulação de dados de produtos
    { id: 1, name: "Perfume Masculino 1", price: 200, category: "masculinos" },
    { id: 2, name: "Perfume Masculino 2", price: 250, category: "masculinos" },
    { id: 3, name: "Perfume Feminino 1", price: 300, category: "femininos" },
  ].filter((product) => product.category === category);

  return (
    <div>
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
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
