/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountsCreateTrustedContactRequest = {
  /**
   * The account id.
   */
  accountId: string;
  trustedContactCreate: components.TrustedContactCreate;
};

export type AccountsCreateTrustedContactResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  trustedContact?: components.TrustedContact | undefined;
  /**
   * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AccountsCreateTrustedContactRequest$inboundSchema: z.ZodType<
  AccountsCreateTrustedContactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string(),
  TrustedContactCreate: components.TrustedContactCreate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "TrustedContactCreate": "trustedContactCreate",
  });
});

/** @internal */
export type AccountsCreateTrustedContactRequest$Outbound = {
  account_id: string;
  TrustedContactCreate: components.TrustedContactCreate$Outbound;
};

/** @internal */
export const AccountsCreateTrustedContactRequest$outboundSchema: z.ZodType<
  AccountsCreateTrustedContactRequest$Outbound,
  z.ZodTypeDef,
  AccountsCreateTrustedContactRequest
> = z.object({
  accountId: z.string(),
  trustedContactCreate: components.TrustedContactCreate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    trustedContactCreate: "TrustedContactCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsCreateTrustedContactRequest$ {
  /** @deprecated use `AccountsCreateTrustedContactRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountsCreateTrustedContactRequest$inboundSchema;
  /** @deprecated use `AccountsCreateTrustedContactRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountsCreateTrustedContactRequest$outboundSchema;
  /** @deprecated use `AccountsCreateTrustedContactRequest$Outbound` instead. */
  export type Outbound = AccountsCreateTrustedContactRequest$Outbound;
}

/** @internal */
export const AccountsCreateTrustedContactResponse$inboundSchema: z.ZodType<
  AccountsCreateTrustedContactResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  TrustedContact: components.TrustedContact$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "TrustedContact": "trustedContact",
    "Status": "status",
  });
});

/** @internal */
export type AccountsCreateTrustedContactResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  TrustedContact?: components.TrustedContact$Outbound | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const AccountsCreateTrustedContactResponse$outboundSchema: z.ZodType<
  AccountsCreateTrustedContactResponse$Outbound,
  z.ZodTypeDef,
  AccountsCreateTrustedContactResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  trustedContact: components.TrustedContact$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    trustedContact: "TrustedContact",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsCreateTrustedContactResponse$ {
  /** @deprecated use `AccountsCreateTrustedContactResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountsCreateTrustedContactResponse$inboundSchema;
  /** @deprecated use `AccountsCreateTrustedContactResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountsCreateTrustedContactResponse$outboundSchema;
  /** @deprecated use `AccountsCreateTrustedContactResponse$Outbound` instead. */
  export type Outbound = AccountsCreateTrustedContactResponse$Outbound;
}
