import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Casa dos Aromas</h1>
      <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <ul>
        <li><a href="#home">Home</a></li>
        <link href="https://fonts.googleapis.com/css2?family=Krona+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <li><a href="#produtos">Produtos</a></li>
        <link href="https://fonts.googleapis.com/css2?family=Krona+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </ul>
      <div className="cart-icon">🛒</div>
    </nav>
  );
};

export default Navbar;