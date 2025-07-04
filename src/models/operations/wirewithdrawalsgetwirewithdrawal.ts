/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type WireWithdrawalsGetWireWithdrawalRequest = {
  /**
   * The account id.
   */
  accountId: string;
  /**
   * The wireWithdrawal id.
   */
  wireWithdrawalId: string;
};

export type WireWithdrawalsGetWireWithdrawalResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  wireWithdrawal?: components.WireWithdrawal | undefined;
  /**
   * INVALID_ARGUMENT: The request has an invalid argument.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const WireWithdrawalsGetWireWithdrawalRequest$inboundSchema: z.ZodType<
  WireWithdrawalsGetWireWithdrawalRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string(),
  wireWithdrawal_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "wireWithdrawal_id": "wireWithdrawalId",
  });
});

/** @internal */
export type WireWithdrawalsGetWireWithdrawalRequest$Outbound = {
  account_id: string;
  wireWithdrawal_id: string;
};

/** @internal */
export const WireWithdrawalsGetWireWithdrawalRequest$outboundSchema: z.ZodType<
  WireWithdrawalsGetWireWithdrawalRequest$Outbound,
  z.ZodTypeDef,
  WireWithdrawalsGetWireWithdrawalRequest
> = z.object({
  accountId: z.string(),
  wireWithdrawalId: z.string(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    wireWithdrawalId: "wireWithdrawal_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WireWithdrawalsGetWireWithdrawalRequest$ {
  /** @deprecated use `WireWithdrawalsGetWireWithdrawalRequest$inboundSchema` instead. */
  export const inboundSchema =
    WireWithdrawalsGetWireWithdrawalRequest$inboundSchema;
  /** @deprecated use `WireWithdrawalsGetWireWithdrawalRequest$outboundSchema` instead. */
  export const outboundSchema =
    WireWithdrawalsGetWireWithdrawalRequest$outboundSchema;
  /** @deprecated use `WireWithdrawalsGetWireWithdrawalRequest$Outbound` instead. */
  export type Outbound = WireWithdrawalsGetWireWithdrawalRequest$Outbound;
}

/** @internal */
export const WireWithdrawalsGetWireWithdrawalResponse$inboundSchema: z.ZodType<
  WireWithdrawalsGetWireWithdrawalResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  WireWithdrawal: components.WireWithdrawal$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "WireWithdrawal": "wireWithdrawal",
    "Status": "status",
  });
});

/** @internal */
export type WireWithdrawalsGetWireWithdrawalResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  WireWithdrawal?: components.WireWithdrawal$Outbound | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const WireWithdrawalsGetWireWithdrawalResponse$outboundSchema: z.ZodType<
  WireWithdrawalsGetWireWithdrawalResponse$Outbound,
  z.ZodTypeDef,
  WireWithdrawalsGetWireWithdrawalResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  wireWithdrawal: components.WireWithdrawal$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    wireWithdrawal: "WireWithdrawal",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WireWithdrawalsGetWireWithdrawalResponse$ {
  /** @deprecated use `WireWithdrawalsGetWireWithdrawalResponse$inboundSchema` instead. */
  export const inboundSchema =
    WireWithdrawalsGetWireWithdrawalResponse$inboundSchema;
  /** @deprecated use `WireWithdrawalsGetWireWithdrawalResponse$outboundSchema` instead. */
  export const outboundSchema =
    WireWithdrawalsGetWireWithdrawalResponse$outboundSchema;
  /** @deprecated use `WireWithdrawalsGetWireWithdrawalResponse$Outbound` instead. */
  export type Outbound = WireWithdrawalsGetWireWithdrawalResponse$Outbound;
}
