import React from 'react';

import PropTypes from 'prop-types';

import { useTheme } from 'styled-components';
import { Container } from './styles';

const removeHashFromColor = color => color.slice(1);

const AccountDropdown = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;

  console.log(lightGrey, secondary);

  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${user.name}`}
        alt="user"
      />
    </Container>
  );
};

export default AccountDropdown;

AccountDropdown.propTypes = {
  color: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
