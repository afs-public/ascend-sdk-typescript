/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Agreement,
  Agreement$inboundSchema,
  Agreement$Outbound,
  Agreement$outboundSchema,
} from "./agreement.js";

/**
 * The response to list Agreements on an Account.
 */
export type ListAgreementsResponse = {
  /**
   * The list of Agreements on an Account
   */
  agreements?: Array<Agreement> | undefined;
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
};

/** @internal */
export const ListAgreementsResponse$inboundSchema: z.ZodType<
  ListAgreementsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  agreements: z.array(Agreement$inboundSchema).optional(),
  next_page_token: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page_token": "nextPageToken",
  });
});

/** @internal */
export type ListAgreementsResponse$Outbound = {
  agreements?: Array<Agreement$Outbound> | undefined;
  next_page_token?: string | undefined;
};

/** @internal */
export const ListAgreementsResponse$outboundSchema: z.ZodType<
  ListAgreementsResponse$Outbound,
  z.ZodTypeDef,
  ListAgreementsResponse
> = z.object({
  agreements: z.array(Agreement$outboundSchema).optional(),
  nextPageToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    nextPageToken: "next_page_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAgreementsResponse$ {
  /** @deprecated use `ListAgreementsResponse$inboundSchema` instead. */
  export const inboundSchema = ListAgreementsResponse$inboundSchema;
  /** @deprecated use `ListAgreementsResponse$outboundSchema` instead. */
  export const outboundSchema = ListAgreementsResponse$outboundSchema;
  /** @deprecated use `ListAgreementsResponse$Outbound` instead. */
  export type Outbound = ListAgreementsResponse$Outbound;
}
