
# Building dynamic form based on configuration scheme.

- React
- Apollo GraphQL
- GraphQL Code Generator
- TypeScript
- Material UI
- FORMIK
- Yup

=======

Great way to organize any task divided into several subtasks.

Here, I would define three task steps:
1. Get graphQL configuration and TypeScript typings out of a GraphQL schema. 

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

Fetch data with the useQuery hook.

```
const { error: configError, data: configData } = useQuery<GetBannersConfig>(GET_CONFIG);

```


2. With Formik library create dynamically rendered form component and set initial values.

```
  const formFieldsConfig:{[index:string]:{
    [type:string]: string
  }} = {};

  const initialValues:{[index:string]:string} = {};

  config.fields.forEach((item: { name: string; type: string;  value: any; }) => {
    initialValues[item.name] = item.value ? item.value : '';
    return formFieldsConfig[item.name] = item;
  })
  
  ```


3. Update data with the useMutation hook.

```
  const [createNewItem, 
    {data, loading: createLoading}] = useMutation<CreateNewBanner>(CREATE_NEW_BANNER);
    
```    

