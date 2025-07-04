/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountsEndLargeTrader1Request = {
  /**
   * The legalEntity id.
   */
  legalEntityId: string;
  endLargeTraderRequestCreate: components.EndLargeTraderRequestCreate;
};

export type AccountsEndLargeTrader1Response = {
  httpMeta: components.HTTPMetadata;
  /**
   * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AccountsEndLargeTrader1Request$inboundSchema: z.ZodType<
  AccountsEndLargeTrader1Request,
  z.ZodTypeDef,
  unknown
> = z.object({
  legalEntity_id: z.string(),
  EndLargeTraderRequestCreate:
    components.EndLargeTraderRequestCreate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "legalEntity_id": "legalEntityId",
    "EndLargeTraderRequestCreate": "endLargeTraderRequestCreate",
  });
});

/** @internal */
export type AccountsEndLargeTrader1Request$Outbound = {
  legalEntity_id: string;
  EndLargeTraderRequestCreate: components.EndLargeTraderRequestCreate$Outbound;
};

/** @internal */
export const AccountsEndLargeTrader1Request$outboundSchema: z.ZodType<
  AccountsEndLargeTrader1Request$Outbound,
  z.ZodTypeDef,
  AccountsEndLargeTrader1Request
> = z.object({
  legalEntityId: z.string(),
  endLargeTraderRequestCreate:
    components.EndLargeTraderRequestCreate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    legalEntityId: "legalEntity_id",
    endLargeTraderRequestCreate: "EndLargeTraderRequestCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsEndLargeTrader1Request$ {
  /** @deprecated use `AccountsEndLargeTrader1Request$inboundSchema` instead. */
  export const inboundSchema = AccountsEndLargeTrader1Request$inboundSchema;
  /** @deprecated use `AccountsEndLargeTrader1Request$outboundSchema` instead. */
  export const outboundSchema = AccountsEndLargeTrader1Request$outboundSchema;
  /** @deprecated use `AccountsEndLargeTrader1Request$Outbound` instead. */
  export type Outbound = AccountsEndLargeTrader1Request$Outbound;
}

/** @internal */
export const AccountsEndLargeTrader1Response$inboundSchema: z.ZodType<
  AccountsEndLargeTrader1Response,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Status": "status",
  });
});

/** @internal */
export type AccountsEndLargeTrader1Response$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const AccountsEndLargeTrader1Response$outboundSchema: z.ZodType<
  AccountsEndLargeTrader1Response$Outbound,
  z.ZodTypeDef,
  AccountsEndLargeTrader1Response
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsEndLargeTrader1Response$ {
  /** @deprecated use `AccountsEndLargeTrader1Response$inboundSchema` instead. */
  export const inboundSchema = AccountsEndLargeTrader1Response$inboundSchema;
  /** @deprecated use `AccountsEndLargeTrader1Response$outboundSchema` instead. */
  export const outboundSchema = AccountsEndLargeTrader1Response$outboundSchema;
  /** @deprecated use `AccountsEndLargeTrader1Response$Outbound` instead. */
  export type Outbound = AccountsEndLargeTrader1Response$Outbound;
}
