import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import "./FloatingCart.css";

const FloatingCart = () => {
  const { cart, setCart, addToCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <div className={floating-cart ${isOpen ? "open" : ""}}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Fechar Carrinho" : "Abrir Carrinho"}
      </button>

      {isOpen && (
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <h4>{item.name}</h4>
                <p>Preço unitário: R${item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <p>Subtotal: R${item.price * item.quantity}</p>
                <button
                  onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
                >
                  Remover
                </button>
              </div>
            ))
          )}
          <h3>Total: R${totalPrice}</h3>
          <button className="checkout-button">Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

export default FloatingCart;