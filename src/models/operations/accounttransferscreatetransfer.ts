/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountTransfersCreateTransferRequest = {
  /**
   * The correspondent id.
   */
  correspondentId: string;
  /**
   * The account id.
   */
  accountId: string;
  /**
   * A client-specified ID for the account transfer; no specific pattern is imposed. This field is used for idempotency to ensure that repeated requests with the same ID do not result in duplicate transfers.
   */
  requestId?: string | undefined;
  transferCreate: components.TransferCreate;
};

export type AccountTransfersCreateTransferResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  acatsTransfer?: components.AcatsTransfer | undefined;
  /**
   * INVALID_ARGUMENT: The request has an invalid argument.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AccountTransfersCreateTransferRequest$inboundSchema: z.ZodType<
  AccountTransfersCreateTransferRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  correspondent_id: z.string(),
  account_id: z.string(),
  request_id: z.string().optional(),
  TransferCreate: components.TransferCreate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "correspondent_id": "correspondentId",
    "account_id": "accountId",
    "request_id": "requestId",
    "TransferCreate": "transferCreate",
  });
});

/** @internal */
export type AccountTransfersCreateTransferRequest$Outbound = {
  correspondent_id: string;
  account_id: string;
  request_id?: string | undefined;
  TransferCreate: components.TransferCreate$Outbound;
};

/** @internal */
export const AccountTransfersCreateTransferRequest$outboundSchema: z.ZodType<
  AccountTransfersCreateTransferRequest$Outbound,
  z.ZodTypeDef,
  AccountTransfersCreateTransferRequest
> = z.object({
  correspondentId: z.string(),
  accountId: z.string(),
  requestId: z.string().optional(),
  transferCreate: components.TransferCreate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    correspondentId: "correspondent_id",
    accountId: "account_id",
    requestId: "request_id",
    transferCreate: "TransferCreate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountTransfersCreateTransferRequest$ {
  /** @deprecated use `AccountTransfersCreateTransferRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountTransfersCreateTransferRequest$inboundSchema;
  /** @deprecated use `AccountTransfersCreateTransferRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountTransfersCreateTransferRequest$outboundSchema;
  /** @deprecated use `AccountTransfersCreateTransferRequest$Outbound` instead. */
  export type Outbound = AccountTransfersCreateTransferRequest$Outbound;
}

/** @internal */
export const AccountTransfersCreateTransferResponse$inboundSchema: z.ZodType<
  AccountTransfersCreateTransferResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  AcatsTransfer: components.AcatsTransfer$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "AcatsTransfer": "acatsTransfer",
    "Status": "status",
  });
});

/** @internal */
export type AccountTransfersCreateTransferResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  AcatsTransfer?: components.AcatsTransfer$Outbound | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const AccountTransfersCreateTransferResponse$outboundSchema: z.ZodType<
  AccountTransfersCreateTransferResponse$Outbound,
  z.ZodTypeDef,
  AccountTransfersCreateTransferResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  acatsTransfer: components.AcatsTransfer$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    acatsTransfer: "AcatsTransfer",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountTransfersCreateTransferResponse$ {
  /** @deprecated use `AccountTransfersCreateTransferResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountTransfersCreateTransferResponse$inboundSchema;
  /** @deprecated use `AccountTransfersCreateTransferResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountTransfersCreateTransferResponse$outboundSchema;
  /** @deprecated use `AccountTransfersCreateTransferResponse$Outbound` instead. */
  export type Outbound = AccountTransfersCreateTransferResponse$Outbound;
}
