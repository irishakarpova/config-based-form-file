import * as Yup from 'yup';
import {StringSchema} from 'yup';

export default function(config: {fields: Array<{
  [type:string]: string
}>}) {

  const validation:{[index:string]: StringSchema<string, object>} = {};

  config.fields.forEach((item: { [type: string]: string}) => {

    if (item.type === 'email') {
      validation[item.name] = Yup.string()
        .max(50, 'Must be shorter than 50')
        .email('Enter a valid email address')
        .required('Enter an email address')
    }
  })

  const validationSchema = Yup.object().shape(validation);

  return validationSchema;
}

