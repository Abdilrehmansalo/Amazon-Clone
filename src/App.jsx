import React from 'react';
import './App.css'
import Header from './components/header/Header'
import CarouselEffects from './components/carousel/CarouselEffects'
import Catagory from './components/catagory/Catagory';
import Product from './components/product/Product';

function App() {

  return (
    <>
      <Header />
      <CarouselEffects />
      <Catagory />
      <Product/>
    </>
  );
}

export default App
