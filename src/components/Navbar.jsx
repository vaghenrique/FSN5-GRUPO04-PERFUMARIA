import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "./Navbar.css";
import carrinho from "../assets/carrinho.png"

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <h1>Casa dos Aromas</h1>

      {/* Links de fontes */}
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#produtos">Produtos</a>
        </li>
      </ul>

      <div className="cart-container">
        {/* Carrinho com o ícone de imagem */}
        <Link to="/carrinho">
          <button className="cart-button">
            <img src={carrinho} alt="Carrinho" />
            {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;