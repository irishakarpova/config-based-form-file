/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FormFieldInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateNewBanner
// ====================================================

export interface CreateNewBanner_createNewBanner {
  __typename: "DataField";
  name: string | null;
  value: string | null;
}

export interface CreateNewBanner {
  createNewBanner: (CreateNewBanner_createNewBanner | null)[] | null;
}

export interface CreateNewBannerVariables {
  fields: (FormFieldInput | null)[];
}
