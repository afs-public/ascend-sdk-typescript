/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountsCreateLegalNaturalPersonResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  legalNaturalPerson?: components.LegalNaturalPerson | undefined;
  /**
   * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AccountsCreateLegalNaturalPersonResponse$inboundSchema: z.ZodType<
  AccountsCreateLegalNaturalPersonResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  LegalNaturalPerson: components.LegalNaturalPerson$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "LegalNaturalPerson": "legalNaturalPerson",
    "Status": "status",
  });
});

/** @internal */
export type AccountsCreateLegalNaturalPersonResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  LegalNaturalPerson?: components.LegalNaturalPerson$Outbound | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const AccountsCreateLegalNaturalPersonResponse$outboundSchema: z.ZodType<
  AccountsCreateLegalNaturalPersonResponse$Outbound,
  z.ZodTypeDef,
  AccountsCreateLegalNaturalPersonResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  legalNaturalPerson: components.LegalNaturalPerson$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    legalNaturalPerson: "LegalNaturalPerson",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsCreateLegalNaturalPersonResponse$ {
  /** @deprecated use `AccountsCreateLegalNaturalPersonResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountsCreateLegalNaturalPersonResponse$inboundSchema;
  /** @deprecated use `AccountsCreateLegalNaturalPersonResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountsCreateLegalNaturalPersonResponse$outboundSchema;
  /** @deprecated use `AccountsCreateLegalNaturalPersonResponse$Outbound` instead. */
  export type Outbound = AccountsCreateLegalNaturalPersonResponse$Outbound;
}
