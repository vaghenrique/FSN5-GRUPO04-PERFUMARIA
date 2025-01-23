import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Casa dos Aromas</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#produtos">Produtos</a></li>
      </ul>
      <div className="cart-icon">🛒</div>
    </nav>
  );
};

export default Navbar;