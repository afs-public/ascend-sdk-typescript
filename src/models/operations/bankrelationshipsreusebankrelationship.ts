/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type BankRelationshipsReuseBankRelationshipRequest = {
  /**
   * The account id.
   */
  accountId: string;
  reuseBankRelationshipRequestCreate:
    components.ReuseBankRelationshipRequestCreate;
};

export type BankRelationshipsReuseBankRelationshipResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  bankRelationship?: components.BankRelationship | undefined;
  /**
   * INVALID_ARGUMENT: The request has an invalid argument.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const BankRelationshipsReuseBankRelationshipRequest$inboundSchema:
  z.ZodType<
    BankRelationshipsReuseBankRelationshipRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    account_id: z.string(),
    ReuseBankRelationshipRequestCreate:
      components.ReuseBankRelationshipRequestCreate$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "account_id": "accountId",
      "ReuseBankRelationshipRequestCreate":
        "reuseBankRelationshipRequestCreate",
    });
  });

/** @internal */
export type BankRelationshipsReuseBankRelationshipRequest$Outbound = {
  account_id: string;
  ReuseBankRelationshipRequestCreate:
    components.ReuseBankRelationshipRequestCreate$Outbound;
};

/** @internal */
export const BankRelationshipsReuseBankRelationshipRequest$outboundSchema:
  z.ZodType<
    BankRelationshipsReuseBankRelationshipRequest$Outbound,
    z.ZodTypeDef,
    BankRelationshipsReuseBankRelationshipRequest
  > = z.object({
    accountId: z.string(),
    reuseBankRelationshipRequestCreate:
      components.ReuseBankRelationshipRequestCreate$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      accountId: "account_id",
      reuseBankRelationshipRequestCreate: "ReuseBankRelationshipRequestCreate",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankRelationshipsReuseBankRelationshipRequest$ {
  /** @deprecated use `BankRelationshipsReuseBankRelationshipRequest$inboundSchema` instead. */
  export const inboundSchema =
    BankRelationshipsReuseBankRelationshipRequest$inboundSchema;
  /** @deprecated use `BankRelationshipsReuseBankRelationshipRequest$outboundSchema` instead. */
  export const outboundSchema =
    BankRelationshipsReuseBankRelationshipRequest$outboundSchema;
  /** @deprecated use `BankRelationshipsReuseBankRelationshipRequest$Outbound` instead. */
  export type Outbound = BankRelationshipsReuseBankRelationshipRequest$Outbound;
}

/** @internal */
export const BankRelationshipsReuseBankRelationshipResponse$inboundSchema:
  z.ZodType<
    BankRelationshipsReuseBankRelationshipResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    BankRelationship: components.BankRelationship$inboundSchema.optional(),
    Status: components.Status$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "BankRelationship": "bankRelationship",
      "Status": "status",
    });
  });

/** @internal */
export type BankRelationshipsReuseBankRelationshipResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  BankRelationship?: components.BankRelationship$Outbound | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const BankRelationshipsReuseBankRelationshipResponse$outboundSchema:
  z.ZodType<
    BankRelationshipsReuseBankRelationshipResponse$Outbound,
    z.ZodTypeDef,
    BankRelationshipsReuseBankRelationshipResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    bankRelationship: components.BankRelationship$outboundSchema.optional(),
    status: components.Status$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      bankRelationship: "BankRelationship",
      status: "Status",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankRelationshipsReuseBankRelationshipResponse$ {
  /** @deprecated use `BankRelationshipsReuseBankRelationshipResponse$inboundSchema` instead. */
  export const inboundSchema =
    BankRelationshipsReuseBankRelationshipResponse$inboundSchema;
  /** @deprecated use `BankRelationshipsReuseBankRelationshipResponse$outboundSchema` instead. */
  export const outboundSchema =
    BankRelationshipsReuseBankRelationshipResponse$outboundSchema;
  /** @deprecated use `BankRelationshipsReuseBankRelationshipResponse$Outbound` instead. */
  export type Outbound =
    BankRelationshipsReuseBankRelationshipResponse$Outbound;
}
