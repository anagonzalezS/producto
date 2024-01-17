import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Producto = ({ title, description, price, image }) => (
  <div className="card w-100">
    <img
      src={image}
      className="card-img-top img-fluid"
      alt={title}
      style={{ width: '100%', height: 'auto' }}
    />
    <div className="card-body text-center">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text">${price.toFixed(2)}</p>
      <a
        href={`https://wa.me/1136545084?text=¡Hola! Estoy interesado en comprar ${title}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success"
      >
        Contactar por WhatsApp
      </a>
    </div>
  </div>
);

export default Producto;
