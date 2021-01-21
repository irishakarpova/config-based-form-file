import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Field } from 'formik';
import { Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from './createFormStyles';
export default (props => {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(FormControl, {
    variant: "outlined",
    key: `index${props.name}`,
    className: classes.formControl
  }, /*#__PURE__*/React.createElement(InputLabel, {
    htmlFor: props.name
  }, props.label), /*#__PURE__*/React.createElement(Field, {
    component: Select,
    name: props.name,
    inputProps: {
      id: props.name
    },
    key: `index${props.name}`
  }, props.values.map(textField => {
    return /*#__PURE__*/React.createElement(MenuItem, {
      key: textField.value,
      value: textField.value || ''
    }, textField.text);
  })));
});