import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

const Button = ({
  children,
  onClick,
  variant = '',
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn btn-outline-${variant} ${className} button`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
