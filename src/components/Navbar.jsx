import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; // Certifique-se de que o caminho está correto
import './Navbar.css';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <h1>Casa dos Aromas</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#produtos">Produtos</a></li>
      </ul>
      <div className="cart-icon">
        🛒 {cartQuantity > 0 && <span>({cartQuantity})</span>}
      </div>
    </nav>
  );
};

export default Navbar;