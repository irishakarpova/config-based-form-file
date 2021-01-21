import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Congfigform from './components/marketing/manage-banners'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Congfigform />
    </ThemeProvider>
  );
}

export default App;