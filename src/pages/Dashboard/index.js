import React from 'react';

import Header from '../../components/Header';
import SideBar from './SideBar';

import { Container, Wrapper } from './styles';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SideBar />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
