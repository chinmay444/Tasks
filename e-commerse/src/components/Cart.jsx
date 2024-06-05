import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { shopItemsData } from './data';

const Cart = ({ basket, increment, decrement, removeItem, clearCart }) => {
  const generateCartItems = () => {
    if (basket.length === 0) {
      return (
        <div>
          <h2>Cart is Empty</h2>
          <a href="/">
            <button className="HomeBtn">Back to Home</button>
          </a>
        </div>
      );
    }
    return basket.map((x) => {
      const { id, item } = x;
      const search = shopItemsData.find((y) => y.id === id);
      const { img, price, name } = search;
      return (
        <div key={id} className="cart-item">
          <img width="100" src={img} alt={name} />
          <div className="details">
            <div className="title-price-x">
              <h4 className="title-price">
                <p>{name}</p>
                <p className="cart-item-price">$ {price}</p>
              </h4>
              <i onClick={() => removeItem(id)} className="bi bi-x-lg"></i>
            </div>
            <div className="cart-buttons">
              <div className="buttons">
                <i onClick={() => decrement(id)} className="bi bi-dash-lg"></i>
                <div id={id} className="quantity">{item}</div>
                <i onClick={() => increment(id)} className="bi bi-plus-lg"></i>
              </div>
            </div>
            <h3>$ {item * price}</h3>
          </div>
        </div>
      );
    });
  };

  const totalAmount = basket.reduce((total, item) => {
    const product = shopItemsData.find((p) => p.id === item.id);
    return total + product.price * item.item;
  }, 0);

  return (
    <div>
      {generateCartItems()}
      {basket.length !== 0 && (
        <div>
          <h2>Total Bill: $ {totalAmount}</h2>
          {/* Add Link to the Checkout page */}
          <Link to="/checkout" className="checkout">Checkout</Link>
          <button onClick={clearCart} className="removeAll">Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
