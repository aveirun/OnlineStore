import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addItemToBasket,
  removeAllBasketItem,
  removeBasketItem,
} from '../../store/actions/basket';
import CountInput from '../CountInput';
import Button from '../Button';
import './styles.sass';

export default function BasketItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item basket-item">
      <img src={item.img} className="card-img-top" alt={item.name} />

      <div className="row flex-grow p-3">
        <div className="col-4">
          <h5 className="card-title">{item.name}</h5>
        </div>
        <div className="col-4">
          <CountInput
            onDelete={() => dispatch(removeBasketItem(item.id))}
            onAdd={() => dispatch(addItemToBasket(item))}
            quantity={item.quantity}
          />
        </div>
        <div className="col-4 d-flex flex-column align-items-end">
          <p className="card-text mb-auto">{item.price * item.quantity} $</p>

          <Button
            onClick={() => dispatch(removeAllBasketItem(item.id))}
            variant="danger"
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

BasketItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
