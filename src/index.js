import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

// const Card = function (props) {
//   return (
//     <div>
//       <img src={props.image} alt="Футболка чорна" width={70} />
//       <h1>{props.name}</h1>
//       <p>{props.description}</p>
//       <h3>{`${props.price}₴`}</h3>
//     </div>
//   );
// };

// const Card = (props) => (
//   <div>
//     <img src={props.image} alt="Футболка чорна" width={70} />
//     <h1>{props.name}</h1>
//     <p>{props.description}</p>
//     <h3>{`${props.price}₴`}</h3>
//   </div>
// );

// const Card = (props) => {
//   return (
//     <div>
//       <img src={props.image} alt="Футболка чорна" width={70} />
//       <h1>{props.name}</h1>
//       <p>{props.description}</p>
//       <h3>{`${props.price}₴`}</h3>
//     </div>
//   );
// };

const productImage =
  'https://media2.vsisvoi.ua/uploads/catalog/products/2022/04/01/403983/gallery/4a5ea5bc589bb313eb44c55d6bed7cd1.jpg';
const productName = 'Футболка';
const productDescription = 'Темна футболка';
const productPrice = 10.99;

function Card({ image, name = 'Невідомо', description, available, price }) {
  return (
    <div>
      <img src={image} alt="Футболка чорна" width={70} />
      <h1>{name}</h1>
      <p>{description}</p>
      {available && <button>Купити</button>}
      <h3>{`${price}₴`}</h3>
      {!available && <p>Товару немає</p>}
    </div>
  );
}

// Card.defaultProps = {
//   name: 'Невідомо',
// };

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string.isRequired,
  available: PropTypes.bool,
  price: PropTypes.number.isRequired,
};

const container = (
  <React.Fragment>
    <h1>My first react title</h1>
    <p>Lorem ipsum</p>
    <Card
      image={productImage}
      name={productName}
      description={productDescription}
      price={productPrice}
      available={true}
    />
    <Card
      image={productImage}
      description={productDescription}
      price={productPrice}
    />
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
