import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import carrinho from "../assets/carrinho.png";
import logo from "../assets/LOGOSEMFUNDO1.png";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo Casa dos Aromas" className="logo" />
        <h1 style={{ fontFamily: "'Krona One', sans-serif" }}>
          Casa dos Aromas
        </h1>
      </div>

      {}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/categoria/masculinos"
            className="nav-link"
            onClick={toggleMenu}
          >
            Perfumes Masculinos
          </Link>
        </li>
        <li>
          <Link
            to="/categoria/femininos"
            className="nav-link"
            onClick={toggleMenu}
          >
            Perfumes Femininos
          </Link>
        </li>
        <li>
          <Link
            to="/categoria/importados"
            className="nav-link"
            onClick={toggleMenu}
          >
            Perfumes Importados
          </Link>
        </li>
      </ul>

      {}
      <div className="cart-container">
        <Link to="/carrinho">
          <button className="cart-button">
            <img src={carrinho} alt="Carrinho" />
            {totalQuantity > 0 && (
              <span className="cart-quantity">{totalQuantity}</span>
            )}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
