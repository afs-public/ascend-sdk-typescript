/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountsAssignLargeTraderRequest = {
  /**
   * The legalNaturalPerson id.
   */
  legalNaturalPersonId: string;
  assignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate;
};

export type AccountsAssignLargeTraderResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  largeTrader?: components.LargeTrader | undefined;
  /**
   * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AccountsAssignLargeTraderRequest$inboundSchema: z.ZodType<
  AccountsAssignLargeTraderRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  legalNaturalPerson_id: z.string(),
  AssignLargeTraderRequestCreate:
    components.AssignLargeTraderRequestCreate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "legalNaturalPerson_id": "legalNaturalPersonId",
    "AssignLargeTraderRequestCreate": "assignLargeTraderRequestCreate",
  });
});

/** @internal */
export type AccountsAssignLargeTraderRequest$Outbound = {
  legalNaturalPerson_id: string;
  AssignLargeTraderRequestCreate:
    components.AssignLargeTraderRequestCreate$Outbound;
};

/** @internal */
export const AccountsAssignLargeTraderRequest$outboundSchema: z.ZodType<
  AccountsAssignLargeTraderRequest$Outbound,
  z.ZodTypeDef,
  AccountsAssignLargeTraderRequest
> = z.object({
  legalNaturalPersonId: z.string(),
  assignLargeTraderRequestCreate:
    components.AssignLargeTraderRequestCreate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    legalNaturalPersonId: "legalNaturalPerson_id",
    assignLargeTraderRequestCreate: "AssignLargeTraderRequestCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsAssignLargeTraderRequest$ {
  /** @deprecated use `AccountsAssignLargeTraderRequest$inboundSchema` instead. */
  export const inboundSchema = AccountsAssignLargeTraderRequest$inboundSchema;
  /** @deprecated use `AccountsAssignLargeTraderRequest$outboundSchema` instead. */
  export const outboundSchema = AccountsAssignLargeTraderRequest$outboundSchema;
  /** @deprecated use `AccountsAssignLargeTraderRequest$Outbound` instead. */
  export type Outbound = AccountsAssignLargeTraderRequest$Outbound;
}

/** @internal */
export const AccountsAssignLargeTraderResponse$inboundSchema: z.ZodType<
  AccountsAssignLargeTraderResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  LargeTrader: components.LargeTrader$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "LargeTrader": "largeTrader",
    "Status": "status",
  });
});

/** @internal */
export type AccountsAssignLargeTraderResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  LargeTrader?: components.LargeTrader$Outbound | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const AccountsAssignLargeTraderResponse$outboundSchema: z.ZodType<
  AccountsAssignLargeTraderResponse$Outbound,
  z.ZodTypeDef,
  AccountsAssignLargeTraderResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  largeTrader: components.LargeTrader$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    largeTrader: "LargeTrader",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsAssignLargeTraderResponse$ {
  /** @deprecated use `AccountsAssignLargeTraderResponse$inboundSchema` instead. */
  export const inboundSchema = AccountsAssignLargeTraderResponse$inboundSchema;
  /** @deprecated use `AccountsAssignLargeTraderResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountsAssignLargeTraderResponse$outboundSchema;
  /** @deprecated use `AccountsAssignLargeTraderResponse$Outbound` instead. */
  export type Outbound = AccountsAssignLargeTraderResponse$Outbound;
}
