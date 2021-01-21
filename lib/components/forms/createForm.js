function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import getValidationSchema from './validation';
import { useStyles } from './createFormStyles';
import DataPicker from './dataPicker';
import DataSelect from './dataSelect';
import DataDropZoneArea from './dataDropZoneArea';
import DataField from './dataField';
import { formBannerConfig as config } from './config';

const CreateForm = () => {
  const classes = useStyles();
  const [file, setFile] = React.useState();
  const formFieldsConfig = {};
  const initialValues = {};
  config.fields.forEach(item => {
    initialValues[item.name] = item.value ? item.value : '';
    return formFieldsConfig[item.name] = item;
  });
  return /*#__PURE__*/React.createElement(Formik, {
    validationSchema: getValidationSchema(config),
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }
  }, ({
    submitForm,
    errors,
    touched
  }) => /*#__PURE__*/React.createElement(Form, {
    className: classes.rootForm,
    noValidate: true,
    autoComplete: "off"
  }, config.fields.map(item => {
    return item.values ? /*#__PURE__*/React.createElement(DataSelect, _extends({}, item, {
      key: `index${item.name}`
    })) : formFieldsConfig[item.name].type === 'date' ? /*#__PURE__*/React.createElement(DataPicker, _extends({}, item, {
      key: `index${item.name}`
    })) : formFieldsConfig[item.name].type === 'file' ? /*#__PURE__*/React.createElement(DataDropZoneArea, _extends({
      setFile: setFile
    }, item, {
      key: `index${item.name}`,
      file: file
    })) : formFieldsConfig[item.name].type === 'email' ? /*#__PURE__*/React.createElement(DataField, _extends({
      type: "email",
      errors: errors,
      touched: touched
    }, item, {
      key: `index${item.name}`
    })) : /*#__PURE__*/React.createElement(DataField, _extends({
      errors: errors,
      touched: touched
    }, item, {
      key: `index${item.name}`
    }));
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    onClick: submitForm,
    classes: {
      root: classes.rootBtn
    }
  }, "Create")));
};

export default CreateForm;