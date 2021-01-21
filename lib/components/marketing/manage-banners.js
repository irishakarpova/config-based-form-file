import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CreateForm from '../forms/createForm';
import SnackbarInt from '../../utility/snackBar';
import { useStyles } from '../../utility/snackBarStyles';
export default function () {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sm: 10,
    md: 6,
    lg: 5,
    xl: 4
  }, /*#__PURE__*/React.createElement(Box, {
    p: 3
  }, /*#__PURE__*/React.createElement(SnackbarInt, {
    text: "Banner successfully created!"
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    color: "primary"
  }, "Create a new Banner"), /*#__PURE__*/React.createElement(CreateForm, null)))));
}