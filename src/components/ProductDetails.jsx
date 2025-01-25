import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; 
import './ProductDetails.css';

const products = [
  { id: 1, name: 'Perfumes Importados ', brand: 'Marca Italiana/ ID único 10', price: 500, image: require('../assets/imageA.jpg') },
  //{ id: 2, name: 'Perfumes Nacionais', brand: 'Marca Brasileira', price: 100 },
  { id: 3, name: 'Perfumes Boticario', brand: 'Marca Brasileira/ ID único 12', price: 300, image: require('../assets/imageB.jpg')  },
  { id: 4, name: 'Perfumes Avon', brand: 'Marca Brasileira/ ID único 15', price: 500 },
  { id: 5, name: 'Perfumes Avon', brand: 'Marca Brasileira/ ID único 12', price: 600 },
];

const ProductDetails = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <section className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.brand}</p>
      <p>R${product.price}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </section>
  );
};

export default ProductDetails;