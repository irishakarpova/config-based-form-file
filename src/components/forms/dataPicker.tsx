import React from "react";
import { Field } from "formik";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "formik-material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useStyles } from "./createFormStyles";

interface ItemProps {
  name: string;
  label: string;
}

export default (props: ItemProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Field
        component={DatePicker}
        className={classes.formControl}
        label={props.label}
        name={props.name}
        invalidDateMessage=""
        inputVariant="outlined"
        format="MM/dd/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
};
