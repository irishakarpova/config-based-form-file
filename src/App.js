import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Configform from './components/marketing/manage-banners'
import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Configform />
    </ThemeProvider>
  );
}

export default App;