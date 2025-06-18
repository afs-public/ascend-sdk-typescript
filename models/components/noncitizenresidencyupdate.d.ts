import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
export declare enum NonCitizenResidencyUpdateResidencyStatus {
    ResidencyStatusUnspecified = "RESIDENCY_STATUS_UNSPECIFIED",
    UsPermanentResident = "US_PERMANENT_RESIDENT",
    UsTemporaryResident = "US_TEMPORARY_RESIDENT",
    UsNonResident = "US_NON_RESIDENT"
}
export type NonCitizenResidencyUpdateResidencyStatusOpen = OpenEnum<typeof NonCitizenResidencyUpdateResidencyStatus>;
/**
 * Non Citizenship Residency to facilitate non-Citizen lawful US residents to open domestic accounts.
 */
export type NonCitizenResidencyUpdate = {
    residencyStatus?: NonCitizenResidencyUpdateResidencyStatusOpen | undefined;
};
/** @internal */
export declare const NonCitizenResidencyUpdateResidencyStatus$inboundSchema: z.ZodType<NonCitizenResidencyUpdateResidencyStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const NonCitizenResidencyUpdateResidencyStatus$outboundSchema: z.ZodType<NonCitizenResidencyUpdateResidencyStatusOpen, z.ZodTypeDef, NonCitizenResidencyUpdateResidencyStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NonCitizenResidencyUpdateResidencyStatus$ {
    /** @deprecated use `NonCitizenResidencyUpdateResidencyStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NonCitizenResidencyUpdateResidencyStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `NonCitizenResidencyUpdateResidencyStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NonCitizenResidencyUpdateResidencyStatusOpen, z.ZodTypeDef, NonCitizenResidencyUpdateResidencyStatusOpen>;
}
/** @internal */
export declare const NonCitizenResidencyUpdate$inboundSchema: z.ZodType<NonCitizenResidencyUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type NonCitizenResidencyUpdate$Outbound = {
    residency_status?: string | undefined;
};
/** @internal */
export declare const NonCitizenResidencyUpdate$outboundSchema: z.ZodType<NonCitizenResidencyUpdate$Outbound, z.ZodTypeDef, NonCitizenResidencyUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NonCitizenResidencyUpdate$ {
    /** @deprecated use `NonCitizenResidencyUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NonCitizenResidencyUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NonCitizenResidencyUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NonCitizenResidencyUpdate$Outbound, z.ZodTypeDef, NonCitizenResidencyUpdate>;
    /** @deprecated use `NonCitizenResidencyUpdate$Outbound` instead. */
    type Outbound = NonCitizenResidencyUpdate$Outbound;
}
//# sourceMappingURL=noncitizenresidencyupdate.d.ts.map