import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import getValidationSchema from './validation'
import {useStyles} from './createFormStyles'
import {GetBannersConfig_getBannersConfig_fields as 
        GetBannersConfig } from './__generated__/GetBannersConfig'
import DataPicker from './dataPicker'
import DataSelect from './dataSelect'
import DataDropZoneArea from './dataDropZoneArea';
import DataField from './dataField'
import { formBannerConfig as config} from './config'

const CreateForm: React.FC  = (): JSX.Element => {

  const classes = useStyles();
  const [file, setFile] = React.useState();
  
  const formFieldsConfig:{[index:string]: GetBannersConfig} = {};

  const initialValues:{[index:string]:string} = {};

  config.fields.forEach((item: GetBannersConfig) => {
    initialValues[item.name] = item.value ? item.value : '';
    return formFieldsConfig[item.name] = item;
  })
  
  return(
    <Formik
        validationSchema={getValidationSchema(config)}
        initialValues={initialValues}
        onSubmit= {(values:{[index:string]:string}, actions) => { 
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        >
        {({ submitForm, errors, touched  }) => (
          <Form 
            className={classes.rootForm} 
            noValidate 
            autoComplete="off">
              
            {config.fields.map((item: GetBannersConfig) => {
              return item.values ?
                <DataSelect {...item} key={`index${item.name}`}/>

                : formFieldsConfig[item.name].type  === 'date' ? 
                  <DataPicker {...item} key={`index${item.name}`} />
                    
                : formFieldsConfig[item.name].type  === 'file' ?
                  <DataDropZoneArea 
                    setFile={setFile}
                    {...item} key={`index${item.name}`}
                    file={file}/>

                : formFieldsConfig[item.name].type  === 'email' ? 
                  <DataField 
                    type='email'
                    errors={errors}
                    touched={touched}
                    {...item} key={`index${item.name}`} />
                    
                : <DataField 
                    errors={errors}
                    touched={touched}
                    {...item} key={`index${item.name}`} />
                
            })}
        
            <Button 
              variant="contained"
              onClick={submitForm}
              classes= {{root: classes.rootBtn}}>
                Create
            </Button>
          </Form>
        )}
    </Formik>
  ) 
}

export default CreateForm;
