import React from 'react';
import { shopItemsData } from './data';

const Shop = ({ basket, increment, decrement, addToCart }) => {
  return (
    <div className="shop">
      {shopItemsData.map((item) => {
        const { id, name, desc, img, price } = item;
        const basketItem = basket.find((x) => x.id === id) || {};
        return (
          <div key={id} id={`product-id-${id}`} className="item">
            <img width="220" src={img} alt={name} />
            <div className="details">
              <h3>{name}</h3>
              <p>{desc}</p>
              <div className="price-quantity">
                <h2>$ {price} </h2>
                <div className="buttons">
                  <button onClick={() => addToCart(id)}>Add to Cart</button>
                  <i onClick={() => decrement(id)} className="bi bi-dash-lg"></i>
                  <div id={id} className="quantity">
                    {basketItem.item === undefined ? 0 : basketItem.item}
                  </div>
                  <i onClick={() => increment(id)} className="bi bi-plus-lg"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
