import React from 'react';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import {Field} from 'formik';
import { Select } from 'formik-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import {useStyles} from './createFormStyles'
import {GetBannersConfig_getBannersConfig_fields as GetBannersConfig } from './__generated__/GetBannersConfig'


export default(props: GetBannersConfig ): JSX.Element => {
    const classes = useStyles();

    return(
    <FormControl 
        variant="outlined"
        key={`index${props.name}`}  
        className={classes.formControl}>
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
        <Field
          component={Select}
          name={props.name}
          inputProps={{
            id: props.name,
          }}
          key={`index${props.name}`}
        >
          {props.values!.map((textField: any) => {
            return(
              <MenuItem
                key={textField.value}
                value={textField.value || ''}>
                {textField.text}
              </MenuItem>
            ) 
          })}
        </Field>
    </FormControl>
    )
}

 