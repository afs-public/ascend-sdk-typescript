/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

/**
 * Tax id type for entities (e.g. ein, lei, etc.))
 */
export enum EntityIdentificationType {
  IdEntityTypeUnspecified = "ID_ENTITY_TYPE_UNSPECIFIED",
  Ein = "EIN",
  Lei = "LEI",
  Duns = "DUNS",
}
/**
 * Tax id type for entities (e.g. ein, lei, etc.))
 */
export type EntityIdentificationTypeOpen = OpenEnum<
  typeof EntityIdentificationType
>;

/**
 * stores various Entity identification types
 */
export type EntityIdentification = {
  /**
   * Administrative area that issued the identification For example, this can be a state, a province, an oblast, or a prefecture.
   */
  administrativeArea?: string | undefined;
  /**
   * One or more UUIDs from the documents api of the image(s) of the document that relates to the identification for the person investigation.
   */
  documentReferenceIds?: Array<string> | undefined;
  /**
   * Country that issued identification Two character region code, complies with https://cldr.unicode.org/index
   */
  regionCode?: string | undefined;
  /**
   * Tax id type for entities (e.g. ein, lei, etc.))
   */
  type?: EntityIdentificationTypeOpen | undefined;
  /**
   * Tax id value
   */
  value?: string | undefined;
};

/** @internal */
export const EntityIdentificationType$inboundSchema: z.ZodType<
  EntityIdentificationTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(EntityIdentificationType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const EntityIdentificationType$outboundSchema: z.ZodType<
  EntityIdentificationTypeOpen,
  z.ZodTypeDef,
  EntityIdentificationTypeOpen
> = z.union([
  z.nativeEnum(EntityIdentificationType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityIdentificationType$ {
  /** @deprecated use `EntityIdentificationType$inboundSchema` instead. */
  export const inboundSchema = EntityIdentificationType$inboundSchema;
  /** @deprecated use `EntityIdentificationType$outboundSchema` instead. */
  export const outboundSchema = EntityIdentificationType$outboundSchema;
}

/** @internal */
export const EntityIdentification$inboundSchema: z.ZodType<
  EntityIdentification,
  z.ZodTypeDef,
  unknown
> = z.object({
  administrative_area: z.string().optional(),
  document_reference_ids: z.array(z.string()).optional(),
  region_code: z.string().optional(),
  type: EntityIdentificationType$inboundSchema.optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "administrative_area": "administrativeArea",
    "document_reference_ids": "documentReferenceIds",
    "region_code": "regionCode",
  });
});

/** @internal */
export type EntityIdentification$Outbound = {
  administrative_area?: string | undefined;
  document_reference_ids?: Array<string> | undefined;
  region_code?: string | undefined;
  type?: string | undefined;
  value?: string | undefined;
};

/** @internal */
export const EntityIdentification$outboundSchema: z.ZodType<
  EntityIdentification$Outbound,
  z.ZodTypeDef,
  EntityIdentification
> = z.object({
  administrativeArea: z.string().optional(),
  documentReferenceIds: z.array(z.string()).optional(),
  regionCode: z.string().optional(),
  type: EntityIdentificationType$outboundSchema.optional(),
  value: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    administrativeArea: "administrative_area",
    documentReferenceIds: "document_reference_ids",
    regionCode: "region_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EntityIdentification$ {
  /** @deprecated use `EntityIdentification$inboundSchema` instead. */
  export const inboundSchema = EntityIdentification$inboundSchema;
  /** @deprecated use `EntityIdentification$outboundSchema` instead. */
  export const outboundSchema = EntityIdentification$outboundSchema;
  /** @deprecated use `EntityIdentification$Outbound` instead. */
  export type Outbound = EntityIdentification$Outbound;
}
