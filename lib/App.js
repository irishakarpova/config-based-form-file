import React from 'react';
import { CssBaseline } from '@material-ui/core';
import ManageBanners from './components/marketing/manage-banners';

function App() {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(ManageBanners, null));
}

export default App;