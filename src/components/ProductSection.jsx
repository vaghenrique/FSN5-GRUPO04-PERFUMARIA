import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import feminino1 from "../assets/feminino1.jpg"
import feminino2 from "../assets/feminino2.jpg"
import feminino3 from "../assets/feminino3.jpg"
import feminino04 from "../assets/feminino04.jpg"
import feminino05 from "../assets/feminino05.jpg"

const ProductSection = ({ title, category }) => {
  const { addToCart } = useContext(CartContext);

  const products = [
    // Simulação de dados de produtos
    { id: 1, name: "Perfume Masculino 1", price: 200, category: "masculinos",},
    { id: 2, name: "Perfume Masculino 2", price: 250, category: "masculinos", },
    { id: 6, name: "Lily", price: 300, category: "femininos", image: feminino1 },
    { id: 7, name: "Good Girl", price: 400, category: "femininos", image: feminino2  },
    { id: 8, name: "La Belle", price: 500, category: "femininos", image: feminino3 },
    { id: 9, name: " Lua XerJoff Eau", price: 100, category: "femininos", image: feminino04 },
    { id: 10, name: "Essencial Natura", price: 350, category: "femininos", image: feminino05 },
  ].filter((product) => product.category === category);

  return (
    <div>
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
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