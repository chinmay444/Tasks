import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>Clothing Store</h2>
      </Link>

      <Link to="/cart">
        <div className="cart">
          <i className="bi bi-cart2"></i>
          <div id="cartAmount" className="cartAmount">{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
