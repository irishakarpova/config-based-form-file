/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBannersConfig
// ====================================================

export interface GetBannersConfig_getBannersConfig_fields_values {
  __typename: "FormFieldValue";
  value: string | null;
  text: string | null;
}

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
