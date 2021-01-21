import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Congfigform from './components/marketing/manage-banners'
import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Congfigform />
    </ThemeProvider>
  );
}

export default App;