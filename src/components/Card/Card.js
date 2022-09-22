import PropTypes from 'prop-types';
import './Card.css';

export default function Card({
  name = 'Невідомо',
  description,
  available,
  price,
}) {
  return (
    <div className="product-card">
      <h1>{name}</h1>
      <p>{description}</p>
      {available && <button>Купити</button>}
      <h3>{`${price}₴`}</h3>
      {!available && <p>Товару немає</p>}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string.isRequired,
  available: PropTypes.bool,
  price: PropTypes.number.isRequired,
};
