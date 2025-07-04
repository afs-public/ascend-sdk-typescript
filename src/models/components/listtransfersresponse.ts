/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AcatsTransfer,
  AcatsTransfer$inboundSchema,
  AcatsTransfer$Outbound,
  AcatsTransfer$outboundSchema,
} from "./acatstransfer.js";

/**
 * Response to list existing transfers.
 */
export type ListTransfersResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
   */
  nextPageToken?: string | undefined;
  /**
   * transfers resulting from filter query
   */
  transfers?: Array<AcatsTransfer> | undefined;
};

/** @internal */
export const ListTransfersResponse$inboundSchema: z.ZodType<
  ListTransfersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  next_page_token: z.string().optional(),
  transfers: z.array(AcatsTransfer$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page_token": "nextPageToken",
  });
});

/** @internal */
export type ListTransfersResponse$Outbound = {
  next_page_token?: string | undefined;
  transfers?: Array<AcatsTransfer$Outbound> | undefined;
};

/** @internal */
export const ListTransfersResponse$outboundSchema: z.ZodType<
  ListTransfersResponse$Outbound,
  z.ZodTypeDef,
  ListTransfersResponse
> = z.object({
  nextPageToken: z.string().optional(),
  transfers: z.array(AcatsTransfer$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    nextPageToken: "next_page_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListTransfersResponse$ {
  /** @deprecated use `ListTransfersResponse$inboundSchema` instead. */
  export const inboundSchema = ListTransfersResponse$inboundSchema;
  /** @deprecated use `ListTransfersResponse$outboundSchema` instead. */
  export const outboundSchema = ListTransfersResponse$outboundSchema;
  /** @deprecated use `ListTransfersResponse$Outbound` instead. */
  export type Outbound = ListTransfersResponse$Outbound;
}
