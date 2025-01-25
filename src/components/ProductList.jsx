import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Perfumes Importados ', brand: 'Marca Italiana', price: 500, },
  { id: 3, name: 'Perfumes Boticario', brand: 'Marca Brasileira', price: 100, },
  { id: 4, name: 'Perfumes Avon', brand: 'Marca Brasileira', price: 150 },
  { id: 5, name: 'Perfumes Natura', brand: 'Marca Brasileira', price: 200 },
  { id: 6, name: 'Perfumes Hinode', brand: 'Marca Brasileira', price: 250 },
  { id: 7, name: 'Perfumes Jequiti', brand: 'Marca Brasileira', price: 300 },
];

const ProductList = ({ setSelectedProduct }) => {
  return (
    <section className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-item"
          onClick={() => setSelectedProduct(product)}
        >
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.brand}</p>
          <p>R${product.price}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductList;