/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreditsGetCreditRequest = {
  /**
   * The account id.
   */
  accountId: string;
  /**
   * The credit id.
   */
  creditId: string;
};

export type CreditsGetCreditResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  transfersCredit?: components.TransfersCredit | undefined;
  /**
   * INVALID_ARGUMENT: The request has an invalid argument.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const CreditsGetCreditRequest$inboundSchema: z.ZodType<
  CreditsGetCreditRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string(),
  credit_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "credit_id": "creditId",
  });
});

/** @internal */
export type CreditsGetCreditRequest$Outbound = {
  account_id: string;
  credit_id: string;
};

/** @internal */
export const CreditsGetCreditRequest$outboundSchema: z.ZodType<
  CreditsGetCreditRequest$Outbound,
  z.ZodTypeDef,
  CreditsGetCreditRequest
> = z.object({
  accountId: z.string(),
  creditId: z.string(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    creditId: "credit_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreditsGetCreditRequest$ {
  /** @deprecated use `CreditsGetCreditRequest$inboundSchema` instead. */
  export const inboundSchema = CreditsGetCreditRequest$inboundSchema;
  /** @deprecated use `CreditsGetCreditRequest$outboundSchema` instead. */
  export const outboundSchema = CreditsGetCreditRequest$outboundSchema;
  /** @deprecated use `CreditsGetCreditRequest$Outbound` instead. */
  export type Outbound = CreditsGetCreditRequest$Outbound;
}

/** @internal */
export const CreditsGetCreditResponse$inboundSchema: z.ZodType<
  CreditsGetCreditResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  TransfersCredit: components.TransfersCredit$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "TransfersCredit": "transfersCredit",
    "Status": "status",
  });
});

/** @internal */
export type CreditsGetCreditResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  TransfersCredit?: components.TransfersCredit$Outbound | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const CreditsGetCreditResponse$outboundSchema: z.ZodType<
  CreditsGetCreditResponse$Outbound,
  z.ZodTypeDef,
  CreditsGetCreditResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  transfersCredit: components.TransfersCredit$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    transfersCredit: "TransfersCredit",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreditsGetCreditResponse$ {
  /** @deprecated use `CreditsGetCreditResponse$inboundSchema` instead. */
  export const inboundSchema = CreditsGetCreditResponse$inboundSchema;
  /** @deprecated use `CreditsGetCreditResponse$outboundSchema` instead. */
  export const outboundSchema = CreditsGetCreditResponse$outboundSchema;
  /** @deprecated use `CreditsGetCreditResponse$Outbound` instead. */
  export type Outbound = CreditsGetCreditResponse$Outbound;
}
