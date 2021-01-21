import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { useStyles } from './createFormStyles';
export default (props => {
  const classes = useStyles();

  const onFileChange = files => {
    let reader = new FileReader();

    if (files[0]) {
      reader.onload = function (upload) {
        props.setFile(upload.target.result);
      };

      reader.readAsDataURL(files[0]);
    }
  };

  return /*#__PURE__*/React.createElement(DropzoneArea, {
    key: `index${props.name}`,
    filesLimit: 1,
    maxFileSize: 2000000,
    inputProps: {
      name: props.name
    },
    showAlerts: true,
    dropzoneParagraphClass: classes.dropzoneParagraph,
    alertSnackbarProps: {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    },
    onChange: onFileChange
  });
});