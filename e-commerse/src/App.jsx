import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './index.css';

const App = () => {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('data')) || []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basket));
  }, [basket]);

  const increment = (id) => {
    const updatedBasket = [...basket];
    const itemIndex = updatedBasket.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      updatedBasket[itemIndex].item += 1;
    } else {
      updatedBasket.push({ id, item: 1 });
    }
    setBasket(updatedBasket);
  };

  const decrement = (id) => {
    const updatedBasket = [...basket];
    const itemIndex = updatedBasket.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      if (updatedBasket[itemIndex].item > 0) {
        updatedBasket[itemIndex].item -= 1;
        if (updatedBasket[itemIndex].item === 0) {
          updatedBasket.splice(itemIndex, 1);
        }
      }
    }
    setBasket(updatedBasket);
  };

  const removeItem = (id) => {
    const updatedBasket = basket.filter((item) => item.id !== id);
    setBasket(updatedBasket);
  };

  const clearCart = () => {
    setBasket([]);
  };

  const addToCart = (id) => {
    const itemIndex = basket.findIndex((item) => item.id === id);
    if (itemIndex >= 0) {
      increment(id);
    } else {
      setBasket([...basket, { id, item: 1 }]);
    }
  };

  return (
    <Router>
      <Navbar cartCount={basket.reduce((total, item) => total + item.item, 0)} />
      <Routes>
        <Route path="/" element={<Shop basket={basket} increment={increment} decrement={decrement} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart basket={basket} increment={increment} decrement={decrement} removeItem={removeItem} clearCart={clearCart} />} />
        <Route path="/checkout" element={<Checkout basket={basket} />} /> {/* Add a route for Checkout */}
      </Routes>
    </Router>
  );
};

export default App;
