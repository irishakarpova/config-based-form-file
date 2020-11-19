import * as Yup from 'yup';
import {StringSchema} from 'yup';

export default function(config: {fields: Array<{
  [type:string]: string
}>}) {

  const validation:{[index:string]: StringSchema<string | undefined, object>} = {};

  config.fields.forEach((item: { [type: string]: string}) => {

    if (item.type === 'email') {
      validation[item.name] = Yup.string()
        .email('Enter a valid email address')
        .required('Enter an email address')
        .max(50, 'Must be shorter than 50')
    }
    if (item.type === 'text') {
      validation[item.name] = Yup.string()
        .max(50, 'Must be shorter than 50')
    }
  })

  const validationSchema = Yup.object().shape(validation);

  return validationSchema;
}

