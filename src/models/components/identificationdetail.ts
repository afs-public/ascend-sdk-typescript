/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Identification details used for Dow Jones Profile details
 */
export type IdentificationDetail = {
  /**
   * Notes relating to identification
   */
  idNotes?: string | undefined;
  /**
   * Identification type
   */
  idType?: string | undefined;
  /**
   * Identification value
   */
  idValue?: string | undefined;
};

/** @internal */
export const IdentificationDetail$inboundSchema: z.ZodType<
  IdentificationDetail,
  z.ZodTypeDef,
  unknown
> = z.object({
  id_notes: z.string().optional(),
  id_type: z.string().optional(),
  id_value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "id_notes": "idNotes",
    "id_type": "idType",
    "id_value": "idValue",
  });
});

/** @internal */
export type IdentificationDetail$Outbound = {
  id_notes?: string | undefined;
  id_type?: string | undefined;
  id_value?: string | undefined;
};

/** @internal */
export const IdentificationDetail$outboundSchema: z.ZodType<
  IdentificationDetail$Outbound,
  z.ZodTypeDef,
  IdentificationDetail
> = z.object({
  idNotes: z.string().optional(),
  idType: z.string().optional(),
  idValue: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    idNotes: "id_notes",
    idType: "id_type",
    idValue: "id_value",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IdentificationDetail$ {
  /** @deprecated use `IdentificationDetail$inboundSchema` instead. */
  export const inboundSchema = IdentificationDetail$inboundSchema;
  /** @deprecated use `IdentificationDetail$outboundSchema` instead. */
  export const outboundSchema = IdentificationDetail$outboundSchema;
  /** @deprecated use `IdentificationDetail$Outbound` instead. */
  export type Outbound = IdentificationDetail$Outbound;
}
