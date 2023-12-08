import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer.js';
import NavbarHome from './components/NavbarHome.js';
import NavBarCards from './components/NavBarCards.js';
import Footer from './components/Footer.js';

import { CartProvider } from './components/';

import Cart from './components/Cart.js';
import CheckOut from './src/components/CheckOut.js';
import Register from './components/Register.js';
import CartWishList from './components/CartWishList.js';


function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarHome />
        <NavBarCards />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productDetail" element={<ItemDetailContainer />} />
          <Route path="/productDetail/:pId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartwishlist" element={<CartWishList />} />
          <Route path="/cart/CheckOut" element={<CheckOut />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;