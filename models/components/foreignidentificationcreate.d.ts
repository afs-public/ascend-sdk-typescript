import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
/**
 * Identification type
 */
export declare enum Type {
    IdentificationTypeUnspecified = "IDENTIFICATION_TYPE_UNSPECIFIED",
    Passport = "PASSPORT",
    NationalId = "NATIONAL_ID",
    DriversLicense = "DRIVERS_LICENSE"
}
/**
 * Identification type
 */
export type TypeOpen = OpenEnum<typeof Type>;
/**
 * Foreign identification
 */
export type ForeignIdentificationCreate = {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    expirationDate?: DateCreate | undefined;
    /**
     * Denotes if the identification is a tax id or other
     */
    ftin: boolean;
    /**
     * Identification number
     */
    identificationNumber: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    issueDate?: DateCreate | undefined;
    /**
     * Region of issuance must be provided as a two-character CLDR country code
     */
    issuingRegionCode: string;
    /**
     * Identification type
     */
    type?: TypeOpen | undefined;
};
/** @internal */
export declare const Type$inboundSchema: z.ZodType<TypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Type$outboundSchema: z.ZodType<TypeOpen, z.ZodTypeDef, TypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Type$ {
    /** @deprecated use `Type$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Type$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TypeOpen, z.ZodTypeDef, TypeOpen>;
}
/** @internal */
export declare const ForeignIdentificationCreate$inboundSchema: z.ZodType<ForeignIdentificationCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignIdentificationCreate$Outbound = {
    expiration_date?: DateCreate$Outbound | undefined;
    ftin: boolean;
    identification_number: string;
    issue_date?: DateCreate$Outbound | undefined;
    issuing_region_code: string;
    type?: string | undefined;
};
/** @internal */
export declare const ForeignIdentificationCreate$outboundSchema: z.ZodType<ForeignIdentificationCreate$Outbound, z.ZodTypeDef, ForeignIdentificationCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignIdentificationCreate$ {
    /** @deprecated use `ForeignIdentificationCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignIdentificationCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignIdentificationCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignIdentificationCreate$Outbound, z.ZodTypeDef, ForeignIdentificationCreate>;
    /** @deprecated use `ForeignIdentificationCreate$Outbound` instead. */
    type Outbound = ForeignIdentificationCreate$Outbound;
}
export declare function foreignIdentificationCreateToJSON(foreignIdentificationCreate: ForeignIdentificationCreate): string;
export declare function foreignIdentificationCreateFromJSON(jsonString: string): SafeParseResult<ForeignIdentificationCreate, SDKValidationError>;
//# sourceMappingURL=foreignidentificationcreate.d.ts.map