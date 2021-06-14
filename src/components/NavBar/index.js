import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import logoSvg from '';
import Button from '../Button';

function Header() {
  const { totalPrice, totalQuantity } = useSelector(state => {
    return {
      totalPrice: state.basket.totalPrice,
      totalQuantity: state.basket.totalQuantity,
    };
  });

  return (
    <nav className="navbar navbar bg-dark fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link className="text-decoration-none" to="/">
            <h2 className="text-light">Cars Market</h2>
          </Link>
        </div>

        <Link to="/cart">
          <Button variant="light">
            <span>{totalPrice} ₽</span>/<span>{totalQuantity}</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
