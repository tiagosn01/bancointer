import React, { memo } from 'react';

import { BancoInter } from '../../assets/images';

import AccountDropdown from './AccountDropdown';
import Button from '../Button';

import { Container, Wrapper, LeftNav, RightNav } from './styles';

const Header = () => {
  const user = { name: 'Tiago Silva' };

  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropdown user={user} />
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default memo(Header);
