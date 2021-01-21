import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useStyles } from './snackBarStyles';
export default function (props) {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Snackbar, {
    classes: {
      root: classes.MuiSnackbar
    },
    autoHideDuration: 2000,
    onClose: props.handleCloseSnack,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: props.open
  }, /*#__PURE__*/React.createElement(Alert, {
    classes: {
      root: classes.MuiAlert
    },
    severity: "success",
    onClose: props.handleCloseSnack
  }, props.text));
}