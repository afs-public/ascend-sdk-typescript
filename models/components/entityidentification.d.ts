import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Tax id type for entities (e.g. ein, lei, etc.))
 */
export declare enum EntityIdentificationType {
    IdEntityTypeUnspecified = "ID_ENTITY_TYPE_UNSPECIFIED",
    Ein = "EIN",
    Lei = "LEI",
    Duns = "DUNS"
}
/**
 * Tax id type for entities (e.g. ein, lei, etc.))
 */
export type EntityIdentificationTypeOpen = OpenEnum<typeof EntityIdentificationType>;
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
export declare const EntityIdentificationType$inboundSchema: z.ZodType<EntityIdentificationTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntityIdentificationType$outboundSchema: z.ZodType<EntityIdentificationTypeOpen, z.ZodTypeDef, EntityIdentificationTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntityIdentificationType$ {
    /** @deprecated use `EntityIdentificationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntityIdentificationTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntityIdentificationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntityIdentificationTypeOpen, z.ZodTypeDef, EntityIdentificationTypeOpen>;
}
/** @internal */
export declare const EntityIdentification$inboundSchema: z.ZodType<EntityIdentification, z.ZodTypeDef, unknown>;
/** @internal */
export type EntityIdentification$Outbound = {
    administrative_area?: string | undefined;
    document_reference_ids?: Array<string> | undefined;
    region_code?: string | undefined;
    type?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const EntityIdentification$outboundSchema: z.ZodType<EntityIdentification$Outbound, z.ZodTypeDef, EntityIdentification>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntityIdentification$ {
    /** @deprecated use `EntityIdentification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntityIdentification, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntityIdentification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntityIdentification$Outbound, z.ZodTypeDef, EntityIdentification>;
    /** @deprecated use `EntityIdentification$Outbound` instead. */
    type Outbound = EntityIdentification$Outbound;
}
//# sourceMappingURL=entityidentification.d.ts.map