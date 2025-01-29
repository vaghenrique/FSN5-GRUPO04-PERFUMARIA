import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Invictus from "../assets/Invictus.jpeg"
import ArmaniCode from "../assets/Armani Code.png"
import BossBottled from "../assets/Boss Bottled.jpeg"
import YEaudeParfum from "../assets/Y Eau de Parfum.jpeg"
import MusamanWhite from "../assets/importado2.jpg"

const ProductSection = ({ title, category }) => {
  const { addToCart } = useContext(CartContext);

  const products = [
    // Simulação de dados de produtos
    { id: 11, name: "Invictus", price: 200, category: "importados", image: Invictus,},
    { id: 12, name: "Armani Code", price: 250, category: "importados",  image: ArmaniCode},
    { id: 13, name: "Boss Bottled", price: 250, category: "importados",  image: BossBottled},
    { id: 14, name: "Y Eau de Parfum", price: 200, category: "importados", image: YEaudeParfum,},
    { id: 15, name: "Musaman White Intense", price: 200, category: "importados", image: MusamanWhite,},
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
