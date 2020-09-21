import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Teste</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
