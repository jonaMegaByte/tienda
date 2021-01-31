import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { AddBuyer } from '../actions';

import '../styles/components/Register.css';

const Register = ({ AddBuyer }) => {
  const inputRef = useRef();
  const history = useHistory();

  const handleSubmit = ({ buyer }) => {
    const formData = new FormData(inputRef.current);
    const values = {
      name: formData.get('name'),
      lastVame: formData.get('lastName'),
      phoneNumber: formData.get('phoneNumber'),
      address: formData.get('address'),
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirmation: formData.get('passwordConfirmation'),
    };
    AddBuyer(values);
    history.push('/checkout/payment');
  };

  return (
    <>
      <h1>Ingresa tus datos para poder realizar tu compra</h1>
      <div className="Register-container">
        <form ref={inputRef} onSubmit={handleSubmit}>
          <label>
            <p className="form-label-description">Nombre:</p>
            <input type="text" placeholder="Nombre..." name="name" required />
          </label>
          <label>
            <p className="form-label-description">Apellidos:</p>
            <input
              type="text"
              placeholder="Apellidos..."
              name="lastName"
              required
            />
          </label>
          <label>
            <p className="form-label-description">Teléfono:</p>
            <input
              type="number"
              placeholder="Teléfono..."
              name="phoneNumber"
              required
            />
          </label>
          <label>
            <p className="form-label-description">Dirección:</p>
            <input
              type="text"
              placeholder="Dirección..."
              name="address"
              required
            />
          </label>
          <label>
            <p className="form-label-description">Correo electronico:</p>
            <input
              type="email"
              placeholder="Correo electronico..."
              name="email"
              required
            />
          </label>
          <button type="submit" className="form-button">Proceder con el pago</button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  AddBuyer,
};

const mapStateToProps = (state) => ({
  buyer: state.buyer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
