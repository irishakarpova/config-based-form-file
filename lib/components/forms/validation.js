import * as Yup from 'yup';
export default function (config) {
  const validation = {};
  config.fields.forEach(item => {
    if (item.type === 'email') {
      validation[item.name] = Yup.string().email('Enter a valid email address').required('Enter an email address').max(50, 'Must be shorter than 50');
    }

    if (item.type === 'text') {
      validation[item.name] = Yup.string().max(50, 'Must be shorter than 50');
    }
  });
  const validationSchema = Yup.object().shape(validation);
  return validationSchema;
}