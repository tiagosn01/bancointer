import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const DropDown = ({ icon, sectionName }) => {
  return (
    <Container>
      <div>{icon}</div>
      {sectionName}

      <div>Arrow</div>
    </Container>
  );
};

export default DropDown;

DropDown.propTypes = {
  icon: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
};
