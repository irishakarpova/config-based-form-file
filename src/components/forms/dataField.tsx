import React from "react";
import { TextField } from "formik-material-ui";
import { Field, FormikTouched, FormikErrors } from "formik";
import { useStyles } from "./createFormStyles";

interface ItemProps {
  name: string;
  label: string;
  type?: string;
  touched?: FormikTouched<{ [index: string]: string }>;
  errors?: FormikErrors<{ [index: string]: string }>;
}

export default (props: ItemProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Field
      component={TextField}
      className={classes.formControl}
      variant="outlined"
      key={`index${props.name}`}
      name={props.name}
      type={props.type}
      label={props.label}
      error={
        props.touched !== undefined &&
        props.touched![props.name] &&
        !!props.errors![props.name]
      }
    />
  );
};
