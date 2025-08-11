import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare enum ResidencyStatus {
    ResidencyStatusUnspecified = "RESIDENCY_STATUS_UNSPECIFIED",
    UsPermanentResident = "US_PERMANENT_RESIDENT",
    UsTemporaryResident = "US_TEMPORARY_RESIDENT",
    UsNonResident = "US_NON_RESIDENT"
}
export type ResidencyStatusOpen = OpenEnum<typeof ResidencyStatus>;
/**
 * Non Citizenship Residency to facilitate non-Citizen lawful US residents to open domestic accounts.
 */
export type NonCitizenResidencyCreate = {
    residencyStatus: ResidencyStatusOpen;
};
/** @internal */
export declare const ResidencyStatus$inboundSchema: z.ZodType<ResidencyStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ResidencyStatus$outboundSchema: z.ZodType<ResidencyStatusOpen, z.ZodTypeDef, ResidencyStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResidencyStatus$ {
    /** @deprecated use `ResidencyStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResidencyStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResidencyStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResidencyStatusOpen, z.ZodTypeDef, ResidencyStatusOpen>;
}
/** @internal */
export declare const NonCitizenResidencyCreate$inboundSchema: z.ZodType<NonCitizenResidencyCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type NonCitizenResidencyCreate$Outbound = {
    residency_status: string;
};
/** @internal */
export declare const NonCitizenResidencyCreate$outboundSchema: z.ZodType<NonCitizenResidencyCreate$Outbound, z.ZodTypeDef, NonCitizenResidencyCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NonCitizenResidencyCreate$ {
    /** @deprecated use `NonCitizenResidencyCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NonCitizenResidencyCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NonCitizenResidencyCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NonCitizenResidencyCreate$Outbound, z.ZodTypeDef, NonCitizenResidencyCreate>;
    /** @deprecated use `NonCitizenResidencyCreate$Outbound` instead. */
    type Outbound = NonCitizenResidencyCreate$Outbound;
}
export declare function nonCitizenResidencyCreateToJSON(nonCitizenResidencyCreate: NonCitizenResidencyCreate): string;
export declare function nonCitizenResidencyCreateFromJSON(jsonString: string): SafeParseResult<NonCitizenResidencyCreate, SDKValidationError>;
//# sourceMappingURL=noncitizenresidencycreate.d.ts.map