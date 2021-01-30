import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import getTotal from '../utils/getTotal';
import { RemoveFromCart } from '../actions';

const Checkout = ({ cart, RemoveFromCart }) => {
    const history = useHistory();

    const handleRemoveFromCart = id => { // Definimos que se elimine solo un elemento aunque compartan id
        const actualCart = cart;
        const deletedElement = actualCart.find(product => product.id === id);
        const position = actualCart.indexOf(deletedElement);
        actualCart.splice(position, 1);
        RemoveFromCart(actualCart)
    };

    return(
        <>
            {cart.length > 0 ? (
            <div>
                <h1>Revisa y confirma tu orden</h1>
                <ul className="Checkout-productsList">
                {cart.map((product) => (
                    <li key={cart.indexOf(product)}>
                        <span>{product.title}</span>
                        <span>{product.price}</span>
                        <button type="button" onClick={() => handleRemoveFromCart(product.id)}>Borrar</button>
                    </li>
                ))}
                </ul>
                <h3 className="Checkout-total">
                {getTotal(cart.map((product) => product.price))}
                </h3>
                <button className="Checkout-confirm" onClick={() => {history.push('/register')}}>Proceder a comprar</button>
            </div>
            ) : (
            <div>
                <h1>Aun no has agregado ningun producto al carrito</h1>
                <Link to="/">
                <h2>Regresar a comprar</h2>
                </Link>
            </div>
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
    RemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

