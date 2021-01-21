import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Configform from './components/marketing/manage-banners';
import theme from './theme';

function App() {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Configform, null));
}

export default App;