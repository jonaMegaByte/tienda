import React from 'react';

import { connect } from 'react-redux';

import '../styles/components/ProductImages.css';

const ProductImages = ({ products }) => (
  <div className="ProductImages-container">
    {products.map((product) => (
      <div className="ProductImages-card" key={product.id}>
        <img src={product.images[0]} alt={product.title} className="ProductImages-card-image" />
        <button type="button" className="ProductImages-card-button">
          Agregar al carrito
          <i className="icon-shopping ProductImages-cart" />
        </button>
      </div>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  products: state.products
})


export default connect(mapStateToProps, null)(ProductImages);
