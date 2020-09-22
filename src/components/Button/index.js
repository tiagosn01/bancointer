import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ children, variant, type, ...rest }) => {
  return (
    <Container type={type || 'button'} variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
