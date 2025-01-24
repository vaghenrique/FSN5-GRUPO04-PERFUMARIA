import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Perfumes Importados ', brand: 'Marca Italiana/ ID único 10', price: 500, image: require('../assets/imageA.jpg') },
  //{ id: 2, name: 'Perfumes Nacionais', brand: 'Marca Brasileira', price: 100 },
  { id: 3, name: 'Perfumes Boticario', brand: 'Marca Brasileira/ ID único 12', price: 300, image: require('../assets/imageB.jpg')  },
  { id: 4, name: 'Perfumes Avon', brand: 'Marca Brasileira/ ID único 15', price: 500 },
  { id: 5, name: 'Perfumes Avon', brand: 'Marca Brasileira/ ID único 12', price: 600 },
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