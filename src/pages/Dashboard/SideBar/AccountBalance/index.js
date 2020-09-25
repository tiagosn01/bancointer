import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import Button from '../../../../components/Button';
import { Container, Balance } from './styles';

const AccountBalance = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Balance>
        <span>Saldo em Conta:</span>
        {isVisible ? (
          <>
            R$<strong>250,00</strong>
          </>
        ) : (
          <span />
        )}
      </Balance>

      <Button
        variant="transparent"
        onClick={() => setIsVisible(prevState => !prevState)}
      >
        {isVisible ? <FiEye /> : <FiEyeOff />}
      </Button>
    </Container>
  );
};

export default AccountBalance;
