/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type BookingRebookTradeAllocationRequest = {
  /**
   * The account id.
   */
  accountId: string;
  /**
   * The tradeAllocation id.
   */
  tradeAllocationId: string;
  rebookTradeAllocationRequestCreate:
    components.RebookTradeAllocationRequestCreate;
};

export type BookingRebookTradeAllocationResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  rebookTradeAllocationResponse?:
    | components.RebookTradeAllocationResponse
    | undefined;
  /**
   * INVALID_ARGUMENT: The request is not valid.
   *
   * @remarks
   * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const BookingRebookTradeAllocationRequest$inboundSchema: z.ZodType<
  BookingRebookTradeAllocationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string(),
  tradeAllocation_id: z.string(),
  RebookTradeAllocationRequestCreate:
    components.RebookTradeAllocationRequestCreate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "tradeAllocation_id": "tradeAllocationId",
    "RebookTradeAllocationRequestCreate": "rebookTradeAllocationRequestCreate",
  });
});

/** @internal */
export type BookingRebookTradeAllocationRequest$Outbound = {
  account_id: string;
  tradeAllocation_id: string;
  RebookTradeAllocationRequestCreate:
    components.RebookTradeAllocationRequestCreate$Outbound;
};

/** @internal */
export const BookingRebookTradeAllocationRequest$outboundSchema: z.ZodType<
  BookingRebookTradeAllocationRequest$Outbound,
  z.ZodTypeDef,
  BookingRebookTradeAllocationRequest
> = z.object({
  accountId: z.string(),
  tradeAllocationId: z.string(),
  rebookTradeAllocationRequestCreate:
    components.RebookTradeAllocationRequestCreate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    tradeAllocationId: "tradeAllocation_id",
    rebookTradeAllocationRequestCreate: "RebookTradeAllocationRequestCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BookingRebookTradeAllocationRequest$ {
  /** @deprecated use `BookingRebookTradeAllocationRequest$inboundSchema` instead. */
  export const inboundSchema =
    BookingRebookTradeAllocationRequest$inboundSchema;
  /** @deprecated use `BookingRebookTradeAllocationRequest$outboundSchema` instead. */
  export const outboundSchema =
    BookingRebookTradeAllocationRequest$outboundSchema;
  /** @deprecated use `BookingRebookTradeAllocationRequest$Outbound` instead. */
  export type Outbound = BookingRebookTradeAllocationRequest$Outbound;
}

/** @internal */
export const BookingRebookTradeAllocationResponse$inboundSchema: z.ZodType<
  BookingRebookTradeAllocationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  RebookTradeAllocationResponse: components
    .RebookTradeAllocationResponse$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "RebookTradeAllocationResponse": "rebookTradeAllocationResponse",
    "Status": "status",
  });
});

/** @internal */
export type BookingRebookTradeAllocationResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  RebookTradeAllocationResponse?:
    | components.RebookTradeAllocationResponse$Outbound
    | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const BookingRebookTradeAllocationResponse$outboundSchema: z.ZodType<
  BookingRebookTradeAllocationResponse$Outbound,
  z.ZodTypeDef,
  BookingRebookTradeAllocationResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  rebookTradeAllocationResponse: components
    .RebookTradeAllocationResponse$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    rebookTradeAllocationResponse: "RebookTradeAllocationResponse",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BookingRebookTradeAllocationResponse$ {
  /** @deprecated use `BookingRebookTradeAllocationResponse$inboundSchema` instead. */
  export const inboundSchema =
    BookingRebookTradeAllocationResponse$inboundSchema;
  /** @deprecated use `BookingRebookTradeAllocationResponse$outboundSchema` instead. */
  export const outboundSchema =
    BookingRebookTradeAllocationResponse$outboundSchema;
  /** @deprecated use `BookingRebookTradeAllocationResponse$Outbound` instead. */
  export type Outbound = BookingRebookTradeAllocationResponse$Outbound;
}
