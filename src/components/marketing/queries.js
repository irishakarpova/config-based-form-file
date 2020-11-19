import { gql } from '@apollo/client';

export const CREATE_NEW_BANNER = gql`
  mutation CreateNewBanner($fields: [FormFieldInput]!) { 
    createNewBanner(fields: $fields){
      name
      value
    }
  }
`;
