import React from 'react';

const Checkout = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Checkout;
