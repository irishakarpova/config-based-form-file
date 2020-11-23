import React from 'react';
import { Formik, Form } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import getValidationSchema from './validation'
import { useQuery } from '@apollo/client';
import {useStyles} from './createFormStyles'
import {GetBannersConfig} from './__generated__/GetBannersConfig'
import {GET_CONFIG} from './queries'
import FormSceleton from '../../utility/formSceleton'
import DataPicker from './dataPicker'
import DataSelect from './dataSelect'
import DataDropZoneArea from './dataDropZoneArea';
import DataField from './dataField'

interface CreateBanner{
    setIsSnack: Function
    data: {} | null | undefined
    createLoading: Boolean
    createNewItem: Function
}
 
export default function(props: CreateBanner): JSX.Element  {
  const classes = useStyles();
  const [file, setFile] = React.useState();

  const { error: configError, data: configData } = useQuery<GetBannersConfig>(GET_CONFIG);

  if (configError){
    return <p>`Error! ${configError.message}`</p>
  }
  if(!configData){
      return <FormSceleton />
  }
  if(configData){
    console.log('configData', configData)
  }
  const config = Object.values(configData)[0]
  
  const formFieldsConfig:{[index:string]:{
    [type:string]: string
  }} = {};

  const initialValues:{[index:string]:string} = {};

  config.fields.forEach((item: { name: string; type: string;  value: any; }) => {
    initialValues[item.name] = item.value ? item.value : '';
    return formFieldsConfig[item.name] = item;
  })
  
  const handleOnSubmit = (values:{[index:string]:string }, setSubmitting:Function) => {
    const fields:Array<{name?:string, value?:string}> = [];
    for (let i in values) {
      if (values.hasOwnProperty(i)) {
        fields.push({
          name: i,
          value: formFieldsConfig[i].type === 'file' ?  file : values[i]
        });
      }
    }
    props.createNewItem({variables: {fields: fields}});
    if (setSubmitting){
      setSubmitting(false)
    }
    props.setIsSnack(true)
  };
  
  return(
    <Formik
        validationSchema={getValidationSchema(config)}
        initialValues={initialValues}
        onSubmit= {(values:{[index:string]:string}, {setSubmitting}) => { 
          handleOnSubmit(values, setSubmitting )}}
      >
        {({ submitForm, errors, touched  }) => (
          
          <Form className={classes.rootForm} 
                noValidate 
                autoComplete="off">
              
              {config.fields.map((item: { values: any[]; name: string; label: string; }) => {
                return item.values ?
                  <DataSelect {...item} key={`index${item.name}`}/>

                  : formFieldsConfig[item.name].type  === 'date' ? 
                    <DataPicker {...item} key={`index${item.name}`} />
                      
                  : formFieldsConfig[item.name].type  === 'file' ?
                    <DataDropZoneArea 
                      setFile={setFile}
                      {...item} key={`index${item.name}`}/>

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
        
              { props.createLoading ?
                <LinearProgress /> :
                <div style={{width: '100%', height: 4}}></div> }
            
          </Form>
        )}
        </Formik>

  ) 
  
}
