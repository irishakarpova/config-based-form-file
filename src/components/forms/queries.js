import { gql } from '@apollo/client';

export const GET_CONFIG = gql`
  query GetBannersConfig {
    getBannersConfig{
      fields {
        name
        label
        type
        values {
          value
          text
        }
        defaultEmpty
        value
      }
    }
  }
`;