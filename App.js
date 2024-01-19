import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <>
      <div>
        <Header cartSize={cart.length} />
        <div>
          <div path="/" exact>
            <ProductList addToCart={addToCart} />
          </div>
          <div path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </div>
          <div path="/checkout">
            <Checkout cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
