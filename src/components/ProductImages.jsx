import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AddToCart } from '../actions';

import '../styles/components/ProductImages.css';

const ProductImages = ({ products, AddToCart }) => {
  const handleAddToCart = (product) => {
    AddToCart(product);
  };

  return (
    <div className="ProductImages-container">
      {products.map((product) => (
        <div className="ProductImages-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img
              src={product.images[0]}
              alt={product.title}
              className="ProductImages-card-image"
            />
          </Link>
          <button
            type="button"
            className="ProductImages-card-button"
            onClick={() => handleAddToCart(product)}
          >
            Agregar al carrito
            <i className="icon-shopping ProductImages-cart" />
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {
  AddToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductImages);
