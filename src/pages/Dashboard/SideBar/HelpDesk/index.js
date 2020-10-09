import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Container, HelpButton } from './styles';
import BabiHelpDesk from '../../../../assets/images/illustrations/babi.png';

const HelpDesk = () => {
  return (
    <Container>
      <img src={BabiHelpDesk} alt="Eu sou a Babi do Banco Inter" />
      <span>
        Olá Tiago, <br /> Posso Ajudar?
      </span>

      <HelpButton>
        <FiArrowRight />
      </HelpButton>
    </Container>
  );
};

export default HelpDesk;
