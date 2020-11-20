
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

Here, I prefer to use GraphQL Code Generator to get TypeScript typings out of a GraphQL schema. 

```

export interface GetBannersConfig_getBannersConfig_fields {
  __typename: "FormField";
  name: string;
  label: string | null;
  type: string | null;
  values: (GetBannersConfig_getBannersConfig_fields_values | null)[] | null;
  defaultEmpty: boolean | null;
  value: string | null;
}

export interface GetBannersConfig_getBannersConfig {
  __typename: "FormConfigResult";
  fields: (GetBannersConfig_getBannersConfig_fields | null)[] | null;
}

export interface GetBannersConfig {
  getBannersConfig: GetBannersConfig_getBannersConfig | null;
}

```





2. Rendering form fields according to the schema.
3. Sending new data from client to server.
