import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
