import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  const handlePlus = (event) => {
    if (event.target.localName === 'summary') {
      event.target.classList.toggle('summaryClosed');
      event.target.classList.toggle('summaryOpened');
    }
  };
  return (
    <footer>
      <div className="Footer-contact">
        <h2>¿Necesitas ayuda?</h2>
        <p className="Footer-description">
          Estamos para ayudarte todos los días de 8am a 5pm
        </p>
      </div>
      <div>
        <details className="Footer-info">
          <summary className="summaryClosed" onClick={handlePlus}>
            Servicio al cliente
          </summary>
          <ul className="Footer-info--list">
            <li className="Footer-info--list-item">Preguntas frecuentes</li>
            <li className="Footer-info--list-item">Cómo comprar en Rustiic</li>
            <li className="Footer-info--list-item">Envíos</li>
            <li className="Footer-info--list-item">Devoluciones</li>
            <li className="Footer-info--list-item">Terminos de uso</li>
            <li className="Footer-info--list-item">Privacidad</li>
          </ul>
        </details>
        <details className="Footer-info">
          <summary className="summaryClosed" onClick={handlePlus}>
            Sobre nosotros
          </summary>
          <ul className="Footer-info--list">
            <li className="Footer-info--list-item">¿Quíenes somos?</li>
            <li className="Footer-info--list-item">Nuestros productos</li>
            <li className="Footer-info--list-item">Nuestros valores</li>
          </ul>
        </details>
        <details className="Footer-info">
          <summary className="summaryClosed" onClick={handlePlus}>
            Contacto
          </summary>
          <ul className="Footer-info--list">
            <li className="Footer-info--list-item">Whatsapp: 71317211</li>
            <li className="Footer-info--list-item">Teléfono: 7131-7211/</li>
            <li className="Footer-info--list-item">
              Correo: megabyte9703@gmail.com
            </li>
          </ul>
        </details>
      </div>
      <div className="Footer-media">
        <a
          href="https://www.facebook.com/M-y-M-R%C3%BAsticos-106893704540172"
          className="Footer-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-facebook-square Footer-facebook-icon" />
        </a>
        <a
          href="https://www.facebook.com/M-y-M-R%C3%BAsticos-106893704540172"
          className="Footer-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon-instagram Footer-instagram-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
