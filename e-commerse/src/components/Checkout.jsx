import React from 'react';
import { shopItemsData } from './data';

const Checkout = ({ basket }) => {
  const totalAmount = () => {
    return basket.reduce((total, item) => {
      const product = shopItemsData.find((p) => p.id === item.id);
      return total + product.price * item.item;
    }, 0);
  };

  return (
    <div>
      <h2>Checkout Summary</h2>
      <div>
        {basket.map((item) => {
          const product = shopItemsData.find((p) => p.id === item.id);
          return (
            <div key={item.id}>
              <p>{product.name} - Quantity: {item.item}</p>
              <p>Price: ${product.price}</p>
            </div>
          );
        })}
      </div>
      <h3>Total Amount: ${totalAmount()}</h3>
    </div>
  );
};

export default Checkout;
