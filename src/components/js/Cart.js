//Carrinho: src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/actions/cartActions';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity(id, quantity));
    };

    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Preço: {item.price}</p>
                    <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e.target.value)} />
                    <button onClick={() => handleRemove(item.id)}>Remover</button>
                </div>
            ))}
            <button>Finalizar Compra</button>
        </div>
    );
};

export default Cart;
