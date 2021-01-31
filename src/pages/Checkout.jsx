import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import getTotal from '../utils/getTotal';
import { RemoveFromCart } from '../actions';

import '../styles/components/Checkout.css';

const Checkout = ({ cart, RemoveFromCart }) => {
  const history = useHistory();

  const handleRemoveFromCart = (id) => {
    // Definimos que se elimine solo un elemento aunque compartan id
    const actualCart = cart;
    const deletedElement = actualCart.find((product) => product.id === id);
    const position = actualCart.indexOf(deletedElement);
    actualCart.splice(position, 1);
    RemoveFromCart(actualCart);
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="Checkout-container">
          <h1>Revisa y confirma tu orden</h1>
          <ul className="Checkout-productsList">
            {cart.map((product) => (
              <li key={cart.indexOf(product)} className="Checkout-productList-item">
                <span className="Checkout-productList-title">{`${product.title}: ${product.price}`}</span>
                <i
                  type="button"
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="icon-x Checkout-productList-delete"
                 />
              </li>
            ))}
          </ul>
          <h3 className="Checkout-total">
            {`Total a pagar: ₡${getTotal(cart.map((product) => product.price))}`}
          </h3>
          <button
            type="button"
            className="Checkout-confirm--button"
            onClick={() => {
              history.push('/checkout/register');
            }}
          >
            Proceder a comprar
          </button>
        </div>
      ) : (
        <div>
          <h1>
            Aun no has agregado ningun producto al carrito.
            <span>
              <Link to="/" className="Checkout-link">
                <h2>Regresar a comprar</h2>
              </Link>
            </span>
          </h1>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  RemoveFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
