import React from 'react';

import Header from '../../components/Header';
import SideBar from './SideBar';
import MainContent from './MainContent';

import { Container, Wrapper } from './styles';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SideBar />
          <MainContent />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
