import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartSize }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartSize})</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;
