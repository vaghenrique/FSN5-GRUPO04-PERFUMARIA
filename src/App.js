import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Categories from "./components/Categories";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
    </div>
  );
}

export default App;