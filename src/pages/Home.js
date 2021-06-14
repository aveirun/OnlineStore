import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../components/CardItem';
import { addItemToBasket, removeBasketItem } from '../store/actions/basket';

function Home() {
  const cars = useSelector(state => state.car.cars);
  const dispatch = useDispatch();
  const basketCars = useSelector(state => state.basket.items);

  return (
    <div className="container">
      <div className="row mt-5">
        {cars.map(car => (
          <CardItem
            car={car}
            key={car.id}
            onAdd={() => dispatch(addItemToBasket(car))}
            onDelete={() => dispatch(removeBasketItem(car.id))}
            disableDelete={!basketCars.some(c => c.id === car.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
