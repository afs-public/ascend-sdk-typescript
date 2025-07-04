/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountTransfersRejectTransferRequest = {
  /**
   * The correspondent id.
   */
  correspondentId: string;
  /**
   * The account id.
   */
  accountId: string;
  /**
   * The transfer id.
   */
  transferId: string;
  rejectTransferRequestCreate: components.RejectTransferRequestCreate;
};

export type AccountTransfersRejectTransferResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  rejectTransferResponse?: components.RejectTransferResponse | undefined;
  /**
   * INVALID_ARGUMENT: The request has an invalid argument.
   *
   * @remarks
   * FAILED_PRECONDITION: The transfer resource is not in the correct state for this operation.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AccountTransfersRejectTransferRequest$inboundSchema: z.ZodType<
  AccountTransfersRejectTransferRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  correspondent_id: z.string(),
  account_id: z.string(),
  transfer_id: z.string(),
  RejectTransferRequestCreate:
    components.RejectTransferRequestCreate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "correspondent_id": "correspondentId",
    "account_id": "accountId",
    "transfer_id": "transferId",
    "RejectTransferRequestCreate": "rejectTransferRequestCreate",
  });
});

/** @internal */
export type AccountTransfersRejectTransferRequest$Outbound = {
  correspondent_id: string;
  account_id: string;
  transfer_id: string;
  RejectTransferRequestCreate: components.RejectTransferRequestCreate$Outbound;
};

/** @internal */
export const AccountTransfersRejectTransferRequest$outboundSchema: z.ZodType<
  AccountTransfersRejectTransferRequest$Outbound,
  z.ZodTypeDef,
  AccountTransfersRejectTransferRequest
> = z.object({
  correspondentId: z.string(),
  accountId: z.string(),
  transferId: z.string(),
  rejectTransferRequestCreate:
    components.RejectTransferRequestCreate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    correspondentId: "correspondent_id",
    accountId: "account_id",
    transferId: "transfer_id",
    rejectTransferRequestCreate: "RejectTransferRequestCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountTransfersRejectTransferRequest$ {
  /** @deprecated use `AccountTransfersRejectTransferRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountTransfersRejectTransferRequest$inboundSchema;
  /** @deprecated use `AccountTransfersRejectTransferRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountTransfersRejectTransferRequest$outboundSchema;
  /** @deprecated use `AccountTransfersRejectTransferRequest$Outbound` instead. */
  export type Outbound = AccountTransfersRejectTransferRequest$Outbound;
}

/** @internal */
export const AccountTransfersRejectTransferResponse$inboundSchema: z.ZodType<
  AccountTransfersRejectTransferResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  RejectTransferResponse: components.RejectTransferResponse$inboundSchema
    .optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "RejectTransferResponse": "rejectTransferResponse",
    "Status": "status",
  });
});

/** @internal */
export type AccountTransfersRejectTransferResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  RejectTransferResponse?:
    | components.RejectTransferResponse$Outbound
    | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const AccountTransfersRejectTransferResponse$outboundSchema: z.ZodType<
  AccountTransfersRejectTransferResponse$Outbound,
  z.ZodTypeDef,
  AccountTransfersRejectTransferResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  rejectTransferResponse: components.RejectTransferResponse$outboundSchema
    .optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    rejectTransferResponse: "RejectTransferResponse",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountTransfersRejectTransferResponse$ {
  /** @deprecated use `AccountTransfersRejectTransferResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountTransfersRejectTransferResponse$inboundSchema;
  /** @deprecated use `AccountTransfersRejectTransferResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountTransfersRejectTransferResponse$outboundSchema;
  /** @deprecated use `AccountTransfersRejectTransferResponse$Outbound` instead. */
  export type Outbound = AccountTransfersRejectTransferResponse$Outbound;
}
