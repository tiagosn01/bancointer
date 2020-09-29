import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import PropTypes from 'prop-types';

import { Container } from './styles';

const DropDown = ({ icon, sectionName }) => {
  return (
    <Container variant="transparent">
      <div>{icon}</div>
      {sectionName}

      <FiChevronDown size="1.6rem" />
    </Container>
  );
};

export default DropDown;

DropDown.propTypes = {
  icon: PropTypes.object.isRequired,
  sectionName: PropTypes.string.isRequired,
};
