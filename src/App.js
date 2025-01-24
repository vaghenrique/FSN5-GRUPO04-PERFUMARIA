import './App.css';

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/js/Header';
import Footer from './components/js/Footer';
import ProductList from './components/js/ProductList';
import Cart from './components/js/Cart';


const App = () => {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
      </Router>
  );
};

export default App;


