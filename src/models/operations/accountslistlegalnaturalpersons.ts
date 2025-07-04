/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountsListLegalNaturalPersonsRequest = {
  /**
   * The maximum number of legal natural persons to return. The service may return fewer than this value. If unspecified, at most 25 legal natural persons will be returned. The maximum value is 100; values above 100 will be coerced to 100.
   */
  pageSize?: number | undefined;
  /**
   * A page token, received from a previous `ListLegalNaturalPersons` call. Provide this to retrieve the subsequent page.
   *
   * @remarks
   *
   *  When paginating, all other parameters provided to `ListLegalNaturalPersons` must match the call that provided the page token.
   */
  pageToken?: string | undefined;
  /**
   * The order in which legal natural persons are listed.
   */
  orderBy?: string | undefined;
  /**
   * A CEL string to filter results; Use `upperAscii()` for case-insensitive searches; E.g. `given_name.upperAscii()=="rUsTy".upperAscii()`; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
   *
   * @remarks
   *  `legal_natural_person_id`
   *  `correspondent_id`
   *  `given_name`
   *  `family_name`
   *  `tax_id`
   *  `tax_id_type`
   *  `investigation_id`
   */
  filter?: string | undefined;
};

export type AccountsListLegalNaturalPersonsResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  listLegalNaturalPersonsResponse?:
    | components.ListLegalNaturalPersonsResponse
    | undefined;
  /**
   * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AccountsListLegalNaturalPersonsRequest$inboundSchema: z.ZodType<
  AccountsListLegalNaturalPersonsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page_size: z.number().int().optional(),
  page_token: z.string().optional(),
  order_by: z.string().optional(),
  filter: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "page_size": "pageSize",
    "page_token": "pageToken",
    "order_by": "orderBy",
  });
});

/** @internal */
export type AccountsListLegalNaturalPersonsRequest$Outbound = {
  page_size?: number | undefined;
  page_token?: string | undefined;
  order_by?: string | undefined;
  filter?: string | undefined;
};

/** @internal */
export const AccountsListLegalNaturalPersonsRequest$outboundSchema: z.ZodType<
  AccountsListLegalNaturalPersonsRequest$Outbound,
  z.ZodTypeDef,
  AccountsListLegalNaturalPersonsRequest
> = z.object({
  pageSize: z.number().int().optional(),
  pageToken: z.string().optional(),
  orderBy: z.string().optional(),
  filter: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    pageSize: "page_size",
    pageToken: "page_token",
    orderBy: "order_by",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsListLegalNaturalPersonsRequest$ {
  /** @deprecated use `AccountsListLegalNaturalPersonsRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountsListLegalNaturalPersonsRequest$inboundSchema;
  /** @deprecated use `AccountsListLegalNaturalPersonsRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountsListLegalNaturalPersonsRequest$outboundSchema;
  /** @deprecated use `AccountsListLegalNaturalPersonsRequest$Outbound` instead. */
  export type Outbound = AccountsListLegalNaturalPersonsRequest$Outbound;
}

/** @internal */
export const AccountsListLegalNaturalPersonsResponse$inboundSchema: z.ZodType<
  AccountsListLegalNaturalPersonsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  ListLegalNaturalPersonsResponse: components
    .ListLegalNaturalPersonsResponse$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "ListLegalNaturalPersonsResponse": "listLegalNaturalPersonsResponse",
    "Status": "status",
  });
});

/** @internal */
export type AccountsListLegalNaturalPersonsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  ListLegalNaturalPersonsResponse?:
    | components.ListLegalNaturalPersonsResponse$Outbound
    | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const AccountsListLegalNaturalPersonsResponse$outboundSchema: z.ZodType<
  AccountsListLegalNaturalPersonsResponse$Outbound,
  z.ZodTypeDef,
  AccountsListLegalNaturalPersonsResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  listLegalNaturalPersonsResponse: components
    .ListLegalNaturalPersonsResponse$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    listLegalNaturalPersonsResponse: "ListLegalNaturalPersonsResponse",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsListLegalNaturalPersonsResponse$ {
  /** @deprecated use `AccountsListLegalNaturalPersonsResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountsListLegalNaturalPersonsResponse$inboundSchema;
  /** @deprecated use `AccountsListLegalNaturalPersonsResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountsListLegalNaturalPersonsResponse$outboundSchema;
  /** @deprecated use `AccountsListLegalNaturalPersonsResponse$Outbound` instead. */
  export type Outbound = AccountsListLegalNaturalPersonsResponse$Outbound;
}
