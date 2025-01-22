//Cartão de Produto:
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: {product.price}</p>
            <button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</button>
        </div>
    );
};

export default ProductCard;
