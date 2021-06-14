import React from 'react';
import { useSelector } from 'react-redux';
import './styles.sass';
import BasketItem from '../components/BasketItem';

function Basket() {
  const items = useSelector(state => state.basket.items);
  const totalPrice = useSelector(state => state.basket.totalPrice);

  return (
    <div className="container h-100 mt-3 pt-4 pb-3">
      <ul className="list-group list-group-flush">
        {items.map(item => (
          <BasketItem item={item} key={item.id} />
        ))}
      </ul>

      {totalPrice !== 0 && (
        <div className="d-flex flex-column align-items-end mt-4">
          <h6>Total Price: {totalPrice}</h6>
        </div>
      )}
      {items.length === 0 && (
        <div className="text-wrap">
          <h5>No items in the basket</h5>
        </div>
      )}
    </div>
  );
}

export default Basket;
