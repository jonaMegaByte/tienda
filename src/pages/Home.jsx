import React from 'react';
import { connect } from 'react-redux';

import ProductImages from '../components/ProductImages';

import '../styles/components/Home.css'

const Home = ({ products }) => {
  return (
    <>
      <h1>Bienvenido a la mejor tienda en linea de artesanía</h1>
      <ProductImages />
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(Home);
