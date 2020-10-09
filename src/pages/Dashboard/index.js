import React from 'react';

import Header from '../../components/Header';
import SideBar from './SideBar';
import MainContent from './MainContent';

import { Container, Wrapper } from './styles';
import Footer from '../../components/Footer';

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
      <Footer />
    </>
  );
};

export default Dashboard;
