import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Gradient from './components/Header/Gradient';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gradient />
      <h1>Teste</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
