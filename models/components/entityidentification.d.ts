import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The entity tax id type, one of:
 *
 * @remarks
 * - `ID_ENTITY_TYPE_UNSPECIFIED` - Default/Null value.
 * - `EIN` - Employer Identification Number (US government issued, 9 digits, XX-XXXXXXX).
 * - `LEI` - Legal Entity Identifier (20 digit alphanumeric).
 * - `DUNS` - Dun and Bradstreet number.
 */
export declare enum EntityIdentificationType {
    IdEntityTypeUnspecified = "ID_ENTITY_TYPE_UNSPECIFIED",
    Ein = "EIN",
    Lei = "LEI",
    Duns = "DUNS"
}
/**
 * The entity tax id type, one of:
 *
 * @remarks
 * - `ID_ENTITY_TYPE_UNSPECIFIED` - Default/Null value.
 * - `EIN` - Employer Identification Number (US government issued, 9 digits, XX-XXXXXXX).
 * - `LEI` - Legal Entity Identifier (20 digit alphanumeric).
 * - `DUNS` - Dun and Bradstreet number.
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
     * The entity tax id type, one of:
     *
     * @remarks
     * - `ID_ENTITY_TYPE_UNSPECIFIED` - Default/Null value.
     * - `EIN` - Employer Identification Number (US government issued, 9 digits, XX-XXXXXXX).
     * - `LEI` - Legal Entity Identifier (20 digit alphanumeric).
     * - `DUNS` - Dun and Bradstreet number.
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
export declare function entityIdentificationToJSON(entityIdentification: EntityIdentification): string;
export declare function entityIdentificationFromJSON(jsonString: string): SafeParseResult<EntityIdentification, SDKValidationError>;
//# sourceMappingURL=entityidentification.d.ts.map