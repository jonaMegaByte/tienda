import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {PayPalButton} from 'react-paypal-button';

import getTotal from '../utils/getTotal';
import { CleanCart, AddShopping } from '../actions';

import '../styles/components/Payment.css';

const Payment = ({ cart, buyer, CleanCart, AddShopping }) => {
  const history = useHistory();

  const options = {
    clientId: 'AaSKBAGW11bG8ylymOplDm-b1SNCao-LyefcTWVASe_8CSJi5AtuDzmERRkI6Lek0YXv4G2c_dnjEuMq',
    intent: 'capture',
    currency: 'USD',

  }

  const buttonStyles = {
      label: 'paypal',
      tagline: false
  }

  const handleSuccess = data => {
    if(data.status === 'COMPLETED'){
        AddShopping({
            buyer: buyer[0],
            shoppingData: data
        })
    }
    history.push('/checkout/success')
    CleanCart();
  }

  return (
    <>
      {cart.length > 0 ? (
        <div>
          <h1>Escoge un metodo de págo para realizar tu compra</h1>
          <div className="PayPalButton-container">
            <PayPalButton
              paypalOptions={options}
              buttonStyles={buttonStyles}
              amount={getTotal(cart.map((product) => product.price))}
              onPaymentStart={() => console.log('Estamos comenzando su transacción')}
              onPaymentSuccess={(data) => {handleSuccess(data)}}
              onPaymentError={() => console.log('Hubo un error durante la transacción, intentelo de nuevo')}
              onPaymentCancel={() => console.log('La transacción fue cancelada')}
            />
          </div>
        </div>
      ) : (
        <div>
          <h1>No agregaste ningun elemento al carrito</h1>
          <Link to="/">Agrega productos para poder comprar</Link>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  buyer: state.buyer

});

const mapDispatchToProps = {
    CleanCart,
    AddShopping
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
