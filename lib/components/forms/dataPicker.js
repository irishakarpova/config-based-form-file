import React from 'react';
import { Field } from 'formik';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from 'formik-material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useStyles } from './createFormStyles';
export default (props => {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(MuiPickersUtilsProvider, {
    utils: DateFnsUtils
  }, /*#__PURE__*/React.createElement(Field, {
    component: DatePicker,
    className: classes.formControl,
    label: props.label,
    name: props.name,
    invalidDateMessage: "",
    inputVariant: "outlined",
    format: "MM/dd/yyyy"
  }));
});