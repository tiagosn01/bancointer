import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ children, variant, ...rest }) => {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
