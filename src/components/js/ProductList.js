//Lista de Produtos: src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', price: 'R$ 100' },
    // outros produtos
];

const ProductList = ({ onAddToCart }) => {
    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ProductList;
