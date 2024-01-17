import React from 'react';
import Producto from '../components/Producto';

const ProductosList = () => {
  const productos = [
    {
      id: 1,
      title: 'Producto 1',
      description: 'Descripción del Producto ',
      price: 19.99,
      image: 'Producto1.png',
    },
    {
      id: 2,
      title: 'Producto 2',
      description: 'Descripción del Producto ',
      price: 29.99,
      image: 'Producto2.png',
      
    },
    {
        id: 3,
        title: 'Casco',
        description: 'Descripción del Producto ',
        price: 29.99,
        image: 'Producto3.png',
      },
      {
        id: 4,
        title: 'Producto 3',
        description: 'Descripción del Producto ',
        price: 29.99,
        image: 'Producto4.png',
      },{
        id: 5,
        title: 'Casco',
        description: 'Descripción del Producto ',
        price: 29.99,
        image: 'Producto5.png',
      },{
        id: 6,
        title: 'Producto 3',
        description: 'Descripción del Producto ',
        price: 29.99,
        image: 'Producto6.png',
      },{
        id: 7,
        title: 'Producto 3',
        description: 'Descripción del Producto ',
        price: 29.99,
        image: 'Producto7.png',
      },{
        id: 8,
        title: 'Producto 3',
        description: 'Descripción del Producto ',
        price: 29.99,
        image: 'Producto8.png',
      },{
        id: 9,
        title: 'Producto 3',
        description: 'Descripción del Producto 2',
        price: 29.99,
        image: 'Producto9.png',
      },{
        id: 10,
        title: 'Producto 3',
        description: 'Descripción del Producto 2',
        price: 29.99,
        image: 'Producto10.png',
      },{
        id: 11,
        title: 'Producto 3',
        description: 'Descripción del Producto 2',
        price: 29.99,
        image: 'Producto11.png',
      },
      {
        id: 12,
        title: 'Producto 3',
        description: 'Descripción del Producto 2',
        price: 29.99,
        image: 'Producto12.png',
      },{
        id: 13,
        title: 'Producto 3',
        description: 'Descripción del Producto 2',
        price: 29.99,
        image: 'Producto13.png',
      },
      {
        id: 14,
        title: 'Mochila ',
        description: '44x33x15CM',
        price: 29.99,
        image: 'Producto15.png',
      },
      
  ];

  return (
    <div className="productos-list row">
    {productos.map((producto) => (
    <div key={producto.id} className="col-12 col-md-4 mb-4">

        <Producto {...producto} />
      </div>
    ))}
  </div>
  );
};

export default ProductosList;
