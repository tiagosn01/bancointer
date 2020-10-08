import React from 'react';
import AccountSummary from './AccountSummary';
import BankProducts from './BankProducts';

import NavigationCards from './NavigationCards';

import { Container } from './styles';

const MainContent = () => {
  return (
    <Container>
      <NavigationCards />
      <AccountSummary />
      <BankProducts />
    </Container>
  );
};

export default MainContent;
