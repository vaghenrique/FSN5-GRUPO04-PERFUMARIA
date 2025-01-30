import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Footer from "../components/Footer";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } =
    useContext(CartContext);

  const handleQuantityChange = (e, productId) => {
    const quantity = parseInt(e.target.value, 10);
    updateQuantity(productId, quantity); 
  };

  return (
    <div>
      <section className="cart">
        <h2>Carrinho de Compras</h2>
        {cart.length === 0 ? (
          <p className="empty-cart-message">Seu carrinho está vazio</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Preço: R${item.price}</p>
                <p>
                  Quantidade:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                  />
                </p>
                <p>Subtotal: R${item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            </div>
          ))
        )}
        <h3>Total: R${getTotalPrice()}</h3>
        <button className="checkout-button">Finalizar Compra</button>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
