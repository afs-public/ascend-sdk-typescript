import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Tax id type (e.g. ssn)
 */
export declare enum PersonIdentificationType {
    IdTypeUnspecified = "ID_TYPE_UNSPECIFIED",
    Ssn = "SSN",
    Itin = "ITIN",
    Ftin = "FTIN",
    NationalId = "NATIONAL_ID",
    Passport = "PASSPORT",
    DrivingLicense = "DRIVING_LICENSE"
}
/**
 * Tax id type (e.g. ssn)
 */
export type PersonIdentificationTypeOpen = OpenEnum<typeof PersonIdentificationType>;
/**
 * stores various identification types
 */
export type PersonIdentification = {
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
     * Tax id type (e.g. ssn)
     */
    type?: PersonIdentificationTypeOpen | undefined;
    /**
     * Tax id value
     */
    value?: string | undefined;
};
/** @internal */
export declare const PersonIdentificationType$inboundSchema: z.ZodType<PersonIdentificationTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PersonIdentificationType$outboundSchema: z.ZodType<PersonIdentificationTypeOpen, z.ZodTypeDef, PersonIdentificationTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonIdentificationType$ {
    /** @deprecated use `PersonIdentificationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonIdentificationTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonIdentificationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonIdentificationTypeOpen, z.ZodTypeDef, PersonIdentificationTypeOpen>;
}
/** @internal */
export declare const PersonIdentification$inboundSchema: z.ZodType<PersonIdentification, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonIdentification$Outbound = {
    administrative_area?: string | undefined;
    document_reference_ids?: Array<string> | undefined;
    region_code?: string | undefined;
    type?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const PersonIdentification$outboundSchema: z.ZodType<PersonIdentification$Outbound, z.ZodTypeDef, PersonIdentification>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonIdentification$ {
    /** @deprecated use `PersonIdentification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonIdentification, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonIdentification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonIdentification$Outbound, z.ZodTypeDef, PersonIdentification>;
    /** @deprecated use `PersonIdentification$Outbound` instead. */
    type Outbound = PersonIdentification$Outbound;
}
//# sourceMappingURL=personidentification.d.ts.map