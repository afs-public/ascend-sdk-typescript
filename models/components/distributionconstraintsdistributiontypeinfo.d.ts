import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Retirement distribution type
 */
export declare enum DistributionConstraintsDistributionTypeInfoType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Normal = "NORMAL",
    Disability = "DISABILITY",
    Sosepp = "SOSEPP",
    Premature = "PREMATURE",
    Death = "DEATH",
    ExcessContributionRemovalBeforeTaxDeadline = "EXCESS_CONTRIBUTION_REMOVAL_BEFORE_TAX_DEADLINE",
    ExcessContributionRemovalAfterTaxDeadline = "EXCESS_CONTRIBUTION_REMOVAL_AFTER_TAX_DEADLINE",
    RolloverToQualifiedPlan = "ROLLOVER_TO_QUALIFIED_PLAN",
    RolloverToIra = "ROLLOVER_TO_IRA",
    DistributionTransfer = "DISTRIBUTION_TRANSFER",
    RecharacterizationPriorYear = "RECHARACTERIZATION_PRIOR_YEAR",
    RecharacterizationCurrentYear = "RECHARACTERIZATION_CURRENT_YEAR",
    DistributionConversion = "DISTRIBUTION_CONVERSION",
    ManagementFee = "MANAGEMENT_FEE",
    PlanLoan401K = "PLAN_LOAN_401K",
    PrematureSimpleIraLessThan2Years = "PREMATURE_SIMPLE_IRA_LESS_THAN_2_YEARS",
    NormalRothIraGreaterThan5Years = "NORMAL_ROTH_IRA_GREATER_THAN_5_YEARS",
    NetIncomeAttributable = "NET_INCOME_ATTRIBUTABLE",
    Revocation = "REVOCATION",
    NonReportable = "NON_REPORTABLE"
}
/**
 * Retirement distribution type
 */
export type DistributionConstraintsDistributionTypeInfoTypeOpen = OpenEnum<typeof DistributionConstraintsDistributionTypeInfoType>;
/**
 * Retirement distribution type info
 */
export type DistributionConstraintsDistributionTypeInfo = {
    /**
     * Whether federal withholding is enabled
     */
    federalWithholdingEnabled?: boolean | undefined;
    /**
     * Whether state withholding is enabled
     */
    stateWithholdingEnabled?: boolean | undefined;
    /**
     * Retirement distribution type
     */
    type?: DistributionConstraintsDistributionTypeInfoTypeOpen | undefined;
};
/** @internal */
export declare const DistributionConstraintsDistributionTypeInfoType$inboundSchema: z.ZodType<DistributionConstraintsDistributionTypeInfoTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DistributionConstraintsDistributionTypeInfoType$outboundSchema: z.ZodType<DistributionConstraintsDistributionTypeInfoTypeOpen, z.ZodTypeDef, DistributionConstraintsDistributionTypeInfoTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DistributionConstraintsDistributionTypeInfoType$ {
    /** @deprecated use `DistributionConstraintsDistributionTypeInfoType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DistributionConstraintsDistributionTypeInfoTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DistributionConstraintsDistributionTypeInfoType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DistributionConstraintsDistributionTypeInfoTypeOpen, z.ZodTypeDef, DistributionConstraintsDistributionTypeInfoTypeOpen>;
}
/** @internal */
export declare const DistributionConstraintsDistributionTypeInfo$inboundSchema: z.ZodType<DistributionConstraintsDistributionTypeInfo, z.ZodTypeDef, unknown>;
/** @internal */
export type DistributionConstraintsDistributionTypeInfo$Outbound = {
    federal_withholding_enabled?: boolean | undefined;
    state_withholding_enabled?: boolean | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const DistributionConstraintsDistributionTypeInfo$outboundSchema: z.ZodType<DistributionConstraintsDistributionTypeInfo$Outbound, z.ZodTypeDef, DistributionConstraintsDistributionTypeInfo>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DistributionConstraintsDistributionTypeInfo$ {
    /** @deprecated use `DistributionConstraintsDistributionTypeInfo$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DistributionConstraintsDistributionTypeInfo, z.ZodTypeDef, unknown>;
    /** @deprecated use `DistributionConstraintsDistributionTypeInfo$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DistributionConstraintsDistributionTypeInfo$Outbound, z.ZodTypeDef, DistributionConstraintsDistributionTypeInfo>;
    /** @deprecated use `DistributionConstraintsDistributionTypeInfo$Outbound` instead. */
    type Outbound = DistributionConstraintsDistributionTypeInfo$Outbound;
}
export declare function distributionConstraintsDistributionTypeInfoToJSON(distributionConstraintsDistributionTypeInfo: DistributionConstraintsDistributionTypeInfo): string;
export declare function distributionConstraintsDistributionTypeInfoFromJSON(jsonString: string): SafeParseResult<DistributionConstraintsDistributionTypeInfo, SDKValidationError>;
//# sourceMappingURL=distributionconstraintsdistributiontypeinfo.d.ts.map