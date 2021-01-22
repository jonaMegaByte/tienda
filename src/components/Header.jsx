import React from 'react';
import '../styles/components/Header.css';

const Header = () => {
  const handleIcon = event => {
    if(event.target.localName === 'i'){
      event.target.classList.toggle('icon-menu');
      event.target.classList.toggle('icon-x');
    }else if(event.target.localName === 'summary'){
      event.target.firstChild.classList.toggle('icon-menu');
      event.target.firstChild.classList.toggle('icon-x');
    }
  }
  return(
    <header>
      <p className="Header-logo">Rustiic</p>
      <details className="Header-details">
        <summary className="Header-summary" onClick={handleIcon}>
          <i className="icon-menu header-menu" />
        </summary>
        <ul className="Header-details-list">
          <li className="Header-details-list--item">Carrito de compras</li>
          <li className="Header-details-list--item">Iniciar sesión</li>
        </ul>
      </details>
    </header>
  )
}
export default Header;
