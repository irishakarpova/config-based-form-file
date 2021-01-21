import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CreateForm from '../forms/createForm';
import SnackbarInt from '../../utility/snackBar';

const Configform = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(SnackbarInt, {
    text: "Banner successfully created!"
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    color: "primary"
  }, "Create a new Banner"), /*#__PURE__*/React.createElement(CreateForm, null)));
};

export default Configform;