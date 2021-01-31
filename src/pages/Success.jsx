import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Success.css'

const Success = () => (
    <>
        <h1 className="Success-title">
            <p className="Success-title-item">Gracias por tu compra</p>
            <p className="Success-title-item">La entrega se realizará en un maximo de 4 días</p>
            <p className="Success-title-item">Sí desea detalles de su entrega, puede contactar al número 71317211</p>
        </h1>
        <Link to="/" className="Success-link">Regresa a comprar</Link>
    </>
)

export default Success