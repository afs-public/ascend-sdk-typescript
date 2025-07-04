/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountsListAvailableEnrollmentsRequest = {
  /**
   * The account id.
   */
  accountId: string;
  /**
   * The maximum number of available enrollments to return. The service may return fewer than this value. The maximum value is 100; values above 100 will be coerced to 100.
   */
  pageSize?: number | undefined;
  /**
   * A page token, received from a previous `ListAvailableEnrollments` call. Provide this to retrieve the subsequent page.
   *
   * @remarks
   *
   *  When paginating, all other parameters provided to `ListAvailableEnrollments` must match the call that provided the page token.
   */
  pageToken?: string | undefined;
  /**
   * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
   *
   * @remarks
   *  `enrollment_type`
   */
  filter?: string | undefined;
};

export type AccountsListAvailableEnrollmentsResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  listAvailableEnrollmentsResponse?:
    | components.ListAvailableEnrollmentsResponse
    | undefined;
  /**
   * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AccountsListAvailableEnrollmentsRequest$inboundSchema: z.ZodType<
  AccountsListAvailableEnrollmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string(),
  page_size: z.number().int().optional(),
  page_token: z.string().optional(),
  filter: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "page_size": "pageSize",
    "page_token": "pageToken",
  });
});

/** @internal */
export type AccountsListAvailableEnrollmentsRequest$Outbound = {
  account_id: string;
  page_size?: number | undefined;
  page_token?: string | undefined;
  filter?: string | undefined;
};

/** @internal */
export const AccountsListAvailableEnrollmentsRequest$outboundSchema: z.ZodType<
  AccountsListAvailableEnrollmentsRequest$Outbound,
  z.ZodTypeDef,
  AccountsListAvailableEnrollmentsRequest
> = z.object({
  accountId: z.string(),
  pageSize: z.number().int().optional(),
  pageToken: z.string().optional(),
  filter: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    pageSize: "page_size",
    pageToken: "page_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsListAvailableEnrollmentsRequest$ {
  /** @deprecated use `AccountsListAvailableEnrollmentsRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountsListAvailableEnrollmentsRequest$inboundSchema;
  /** @deprecated use `AccountsListAvailableEnrollmentsRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountsListAvailableEnrollmentsRequest$outboundSchema;
  /** @deprecated use `AccountsListAvailableEnrollmentsRequest$Outbound` instead. */
  export type Outbound = AccountsListAvailableEnrollmentsRequest$Outbound;
}

/** @internal */
export const AccountsListAvailableEnrollmentsResponse$inboundSchema: z.ZodType<
  AccountsListAvailableEnrollmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  ListAvailableEnrollmentsResponse: components
    .ListAvailableEnrollmentsResponse$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "ListAvailableEnrollmentsResponse": "listAvailableEnrollmentsResponse",
    "Status": "status",
  });
});

/** @internal */
export type AccountsListAvailableEnrollmentsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  ListAvailableEnrollmentsResponse?:
    | components.ListAvailableEnrollmentsResponse$Outbound
    | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const AccountsListAvailableEnrollmentsResponse$outboundSchema: z.ZodType<
  AccountsListAvailableEnrollmentsResponse$Outbound,
  z.ZodTypeDef,
  AccountsListAvailableEnrollmentsResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  listAvailableEnrollmentsResponse: components
    .ListAvailableEnrollmentsResponse$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    listAvailableEnrollmentsResponse: "ListAvailableEnrollmentsResponse",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsListAvailableEnrollmentsResponse$ {
  /** @deprecated use `AccountsListAvailableEnrollmentsResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountsListAvailableEnrollmentsResponse$inboundSchema;
  /** @deprecated use `AccountsListAvailableEnrollmentsResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountsListAvailableEnrollmentsResponse$outboundSchema;
  /** @deprecated use `AccountsListAvailableEnrollmentsResponse$Outbound` instead. */
  export type Outbound = AccountsListAvailableEnrollmentsResponse$Outbound;
}
