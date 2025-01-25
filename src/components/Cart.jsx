import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  if (!cart) {
    return <div>Carrinho vazio</div>;
  }

  const handleQuantityChange = (productId, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <section className="cart">
      <h2>Carrinho de Compras</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Quantidade: 
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
          </p>
          <p>Preço Total: R${item.price * item.quantity}</p>
        </div>
      ))}
      <button>Comprar Agora</button>
    </section>
  );
};

export default Cart;
