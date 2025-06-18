import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DateUpdate, DateUpdate$Outbound } from "./dateupdate.js";
/**
 * Identification type
 */
export declare enum ForeignIdentificationUpdateType {
    IdentificationTypeUnspecified = "IDENTIFICATION_TYPE_UNSPECIFIED",
    Passport = "PASSPORT",
    NationalId = "NATIONAL_ID",
    DriversLicense = "DRIVERS_LICENSE"
}
/**
 * Identification type
 */
export type ForeignIdentificationUpdateTypeOpen = OpenEnum<typeof ForeignIdentificationUpdateType>;
/**
 * Foreign identification
 */
export type ForeignIdentificationUpdate = {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    expirationDate?: DateUpdate | undefined;
    /**
     * Denotes if the identification is a tax id or other
     */
    ftin?: boolean | undefined;
    /**
     * Identification number
     */
    identificationNumber?: string | undefined;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    issueDate?: DateUpdate | undefined;
    /**
     * Region of issuance must be provided as a two-character CLDR country code
     */
    issuingRegionCode?: string | undefined;
    /**
     * Identification type
     */
    type?: ForeignIdentificationUpdateTypeOpen | undefined;
};
/** @internal */
export declare const ForeignIdentificationUpdateType$inboundSchema: z.ZodType<ForeignIdentificationUpdateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ForeignIdentificationUpdateType$outboundSchema: z.ZodType<ForeignIdentificationUpdateTypeOpen, z.ZodTypeDef, ForeignIdentificationUpdateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignIdentificationUpdateType$ {
    /** @deprecated use `ForeignIdentificationUpdateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignIdentificationUpdateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignIdentificationUpdateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignIdentificationUpdateTypeOpen, z.ZodTypeDef, ForeignIdentificationUpdateTypeOpen>;
}
/** @internal */
export declare const ForeignIdentificationUpdate$inboundSchema: z.ZodType<ForeignIdentificationUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignIdentificationUpdate$Outbound = {
    expiration_date?: DateUpdate$Outbound | undefined;
    ftin?: boolean | undefined;
    identification_number?: string | undefined;
    issue_date?: DateUpdate$Outbound | undefined;
    issuing_region_code?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const ForeignIdentificationUpdate$outboundSchema: z.ZodType<ForeignIdentificationUpdate$Outbound, z.ZodTypeDef, ForeignIdentificationUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignIdentificationUpdate$ {
    /** @deprecated use `ForeignIdentificationUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignIdentificationUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignIdentificationUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignIdentificationUpdate$Outbound, z.ZodTypeDef, ForeignIdentificationUpdate>;
    /** @deprecated use `ForeignIdentificationUpdate$Outbound` instead. */
    type Outbound = ForeignIdentificationUpdate$Outbound;
}
//# sourceMappingURL=foreignidentificationupdate.d.ts.map