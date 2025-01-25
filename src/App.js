import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { CartProvider } from './CartContext';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <CartProvider>
      <div>
        <Navbar />
        <Banner />
        {selectedProduct ? (
          <ProductDetails product={selectedProduct} />
        ) : (
          <ProductList setSelectedProduct={setSelectedProduct} />
        )}
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;


