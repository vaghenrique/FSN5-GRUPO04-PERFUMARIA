import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, setCart, addToCart } = useContext(CartContext);

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

  const handleQuantityChange = (e, itemId) => {
    const quantity = parseInt(e.target.value, 10);
    updateQuantity(itemId, quantity);
  };

  return (
    <section className="cart">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
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
    </section>
  );
};

export default Cart;
