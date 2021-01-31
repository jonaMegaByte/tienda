import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/components/Header.css';

const Header = ({ cart }) => (
  <header>
    <Link to="/" className="Header-logo">
      <p>Rustiic</p>
    </Link>
    <Link to="/checkout" className="Header-link">
      <i className="icon-shopping Header-link-icon" />
      <p>{cart.length}</p>
    </Link>
  </header>
);

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(Header);
