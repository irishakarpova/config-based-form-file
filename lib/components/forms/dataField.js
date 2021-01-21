import React from 'react';
import { TextField } from 'formik-material-ui';
import { Field } from 'formik';
import { useStyles } from './createFormStyles';
export default (props => {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(Field, {
    component: TextField,
    className: classes.formControl,
    variant: "outlined",
    key: `index${props.name}`,
    name: props.name,
    type: props.type,
    label: props.label,
    error: props.touched !== undefined && props.touched[props.name] && !!props.errors[props.name]
  });
});