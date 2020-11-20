<<<<<<< HEAD
Building dynamic form based on configuration scheme.

- React
- Apollo GraphQL
- GraphQL Code Generator
- TypeScript
- Material UI
- FORMIK
- Yup

=======

Generally, this typical task divided into several subtasks: 
1. Getting graphQL configuration.

```
schema {
  query: Query
}
type Query {
  getBannersConfig: FormConfigResult
}

type FormConfigResult {
  fields: [FormField]
}
type FormField {
  name: String!
  label: String
  type: String
  values: [FormFieldValue]
  defaultEmpty: Boolean
  value: String
}

```




2. Rendering form fields according to the schema.
3. Sending new data from client to server.
