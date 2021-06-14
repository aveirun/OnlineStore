import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function CardItem({
  car,
  onAdd,
  onDelete,
  disableDelete = false,
}) {
  return (
    <div className="col-4 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={car.img} className="card-img-top" alt={car.name} />
        <div className="card-body">
          <h5 className="card-title">{car.name}</h5>
          <p className="card-text">{car.price} $</p>
          <div className="d-flex justify-content-between">
            <Button onClick={onAdd} variant="primary">
              Add
            </Button>
            <Button
              onClick={onDelete}
              variant="danger"
              disabled={disableDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  car: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  disableDelete: PropTypes.bool,
};
