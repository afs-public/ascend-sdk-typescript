/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Document,
  Document$inboundSchema,
  Document$Outbound,
  Document$outboundSchema,
} from "./document.js";

/**
 * List of documents that match a set of search parameters.
 */
export type ListDocumentsResponse = {
  /**
   * List of documents matching the request's search parameters
   */
  document?: Array<Document> | undefined;
  /**
   * Only returned if there are more results than currently listed on the page; Use as page_token with subsequent requests
   */
  nextPageToken?: string | undefined;
};

/** @internal */
export const ListDocumentsResponse$inboundSchema: z.ZodType<
  ListDocumentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  document: z.array(Document$inboundSchema).optional(),
  next_page_token: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "next_page_token": "nextPageToken",
  });
});

/** @internal */
export type ListDocumentsResponse$Outbound = {
  document?: Array<Document$Outbound> | undefined;
  next_page_token?: string | undefined;
};

/** @internal */
export const ListDocumentsResponse$outboundSchema: z.ZodType<
  ListDocumentsResponse$Outbound,
  z.ZodTypeDef,
  ListDocumentsResponse
> = z.object({
  document: z.array(Document$outboundSchema).optional(),
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
export namespace ListDocumentsResponse$ {
  /** @deprecated use `ListDocumentsResponse$inboundSchema` instead. */
  export const inboundSchema = ListDocumentsResponse$inboundSchema;
  /** @deprecated use `ListDocumentsResponse$outboundSchema` instead. */
  export const outboundSchema = ListDocumentsResponse$outboundSchema;
  /** @deprecated use `ListDocumentsResponse$Outbound` instead. */
  export type Outbound = ListDocumentsResponse$Outbound;
}
