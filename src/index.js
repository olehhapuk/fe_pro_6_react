import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card/Card';
import './index.css';

const products = [
  {
    id: '1',
    name: 'Футболка',
    description: 'Чорна футболка',
    price: 10.99,
    available: true,
  },
  {
    id: '2',
    name: 'Штани',
    description: 'Білі штани',
    price: 15.99,
    available: false,
  },
  {
    id: '3',
    name: 'Куртка',
    description: 'Чорна джинсова куртка',
    price: 100.99,
    available: true,
  },
];

const container = (
  <React.Fragment>
    <h1>My first react title</h1>
    <p>Lorem ipsum</p>
    {products.map((product) => (
      <Card
        key={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        available={product.available}
      />
    ))}
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
