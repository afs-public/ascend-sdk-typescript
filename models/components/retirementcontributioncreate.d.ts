import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The type of retirement contribution.
 */
export declare enum RetirementContributionCreateType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Regular = "REGULAR",
    Employee = "EMPLOYEE",
    Employer = "EMPLOYER",
    Recharacterization = "RECHARACTERIZATION",
    Rollover60Day = "ROLLOVER_60_DAY",
    RolloverDirect = "ROLLOVER_DIRECT",
    Transfer = "TRANSFER",
    TrusteeFee = "TRUSTEE_FEE",
    Conversion = "CONVERSION",
    Repayment = "REPAYMENT",
    ContributionNonReportable = "CONTRIBUTION_NON_REPORTABLE"
}
/**
 * The type of retirement contribution.
 */
export type RetirementContributionCreateTypeOpen = OpenEnum<typeof RetirementContributionCreateType>;
/**
 * A contribution to a retirement account.
 */
export type RetirementContributionCreate = {
    /**
     * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
     */
    taxYear: number;
    /**
     * The type of retirement contribution.
     */
    type: RetirementContributionCreateTypeOpen;
};
/** @internal */
export declare const RetirementContributionCreateType$inboundSchema: z.ZodType<RetirementContributionCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetirementContributionCreateType$outboundSchema: z.ZodType<RetirementContributionCreateTypeOpen, z.ZodTypeDef, RetirementContributionCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementContributionCreateType$ {
    /** @deprecated use `RetirementContributionCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementContributionCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementContributionCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementContributionCreateTypeOpen, z.ZodTypeDef, RetirementContributionCreateTypeOpen>;
}
/** @internal */
export declare const RetirementContributionCreate$inboundSchema: z.ZodType<RetirementContributionCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementContributionCreate$Outbound = {
    tax_year: number;
    type: string;
};
/** @internal */
export declare const RetirementContributionCreate$outboundSchema: z.ZodType<RetirementContributionCreate$Outbound, z.ZodTypeDef, RetirementContributionCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementContributionCreate$ {
    /** @deprecated use `RetirementContributionCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementContributionCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementContributionCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementContributionCreate$Outbound, z.ZodTypeDef, RetirementContributionCreate>;
    /** @deprecated use `RetirementContributionCreate$Outbound` instead. */
    type Outbound = RetirementContributionCreate$Outbound;
}
export declare function retirementContributionCreateToJSON(retirementContributionCreate: RetirementContributionCreate): string;
export declare function retirementContributionCreateFromJSON(jsonString: string): SafeParseResult<RetirementContributionCreate, SDKValidationError>;
//# sourceMappingURL=retirementcontributioncreate.d.ts.map