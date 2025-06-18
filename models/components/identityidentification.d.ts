import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * **Field Dependencies:**
 *
 * @remarks
 *
 * An SSN or ITIN is required when `check_types` is `DATABASE`
 *
 * Required if `check_types` is `DATABASE`.
 *
 * Otherwise, must be empty.
 */
export declare enum IdentityIdentificationType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Ssn = "SSN",
    Passport = "PASSPORT",
    DriversLicense = "DRIVERS_LICENSE",
    Itin = "ITIN"
}
/**
 * **Field Dependencies:**
 *
 * @remarks
 *
 * An SSN or ITIN is required when `check_types` is `DATABASE`
 *
 * Required if `check_types` is `DATABASE`.
 *
 * Otherwise, must be empty.
 */
export type IdentityIdentificationTypeOpen = OpenEnum<typeof IdentityIdentificationType>;
/**
 * stores various identification types
 */
export type IdentityIdentification = {
    /**
     * Administrative area that issued the identification
     */
    administrativeArea?: string | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * A US identification `region_code` is required when the `check_types` is `DATABASE`
     *
     * Required if `check_types` is `DATABASE`.
     *
     * Otherwise, must be empty.
     */
    regionCode?: string | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * An SSN or ITIN is required when `check_types` is `DATABASE`
     *
     * Required if `check_types` is `DATABASE`.
     *
     * Otherwise, must be empty.
     */
    type?: IdentityIdentificationTypeOpen | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * An identification value is required when the `check_types` is `DATABASE`
     *
     * Required if `check_types` is `DATABASE`.
     *
     * Otherwise, must be empty.
     */
    value?: string | undefined;
};
/** @internal */
export declare const IdentityIdentificationType$inboundSchema: z.ZodType<IdentityIdentificationTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentityIdentificationType$outboundSchema: z.ZodType<IdentityIdentificationTypeOpen, z.ZodTypeDef, IdentityIdentificationTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentityIdentificationType$ {
    /** @deprecated use `IdentityIdentificationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentityIdentificationTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentityIdentificationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentityIdentificationTypeOpen, z.ZodTypeDef, IdentityIdentificationTypeOpen>;
}
/** @internal */
export declare const IdentityIdentification$inboundSchema: z.ZodType<IdentityIdentification, z.ZodTypeDef, unknown>;
/** @internal */
export type IdentityIdentification$Outbound = {
    administrative_area?: string | undefined;
    region_code?: string | undefined;
    type?: string | undefined;
    value?: string | undefined;
};
/** @internal */
export declare const IdentityIdentification$outboundSchema: z.ZodType<IdentityIdentification$Outbound, z.ZodTypeDef, IdentityIdentification>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentityIdentification$ {
    /** @deprecated use `IdentityIdentification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentityIdentification, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentityIdentification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentityIdentification$Outbound, z.ZodTypeDef, IdentityIdentification>;
    /** @deprecated use `IdentityIdentification$Outbound` instead. */
    type Outbound = IdentityIdentification$Outbound;
}
//# sourceMappingURL=identityidentification.d.ts.map