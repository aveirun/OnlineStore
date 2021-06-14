import Button from '../Button';
import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

export default function CountInput({ onAdd, onDelete, quantity }) {
  return (
    <div className="d-flex align-items-center">
      <Button
        className="btn-width"
        onClick={onDelete}
        disabled={quantity === 1}
        variant="primary"
      >
        -
      </Button>
      <div className="mx-2">{quantity}</div>
      <Button className="btn-width" onClick={onAdd} variant="primary">
        +
      </Button>
    </div>
  );
}

CountInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
