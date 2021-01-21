import * as Yup from 'yup';
import {StringSchema} from 'yup';
import {GetBannersConfig_getBannersConfig_fields as GetBannersConfig } from './__generated__/GetBannersConfig'


export default function(config: {fields: Array<GetBannersConfig>}) {

  const validation:{[index:string]: StringSchema<string | undefined, object>} = {};

  config.fields.forEach((item: GetBannersConfig) => {

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

