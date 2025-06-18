import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { RetirementDistributionTaxWithholdingCreate, RetirementDistributionTaxWithholdingCreate$Outbound } from "./retirementdistributiontaxwithholdingcreate.js";
/**
 * The type of retirement distribution.
 */
export declare enum RetirementDistributionCreateType {
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
 * The type of retirement distribution.
 */
export type RetirementDistributionCreateTypeOpen = OpenEnum<typeof RetirementDistributionCreateType>;
/**
 * A distribution from a retirement account.
 */
export type RetirementDistributionCreate = {
    /**
     * A representation of a tax withholding.
     */
    federalTaxWithholding?: RetirementDistributionTaxWithholdingCreate | undefined;
    /**
     * The institution receiving retirement funds when performing a transfer to an identical retirement account type at a different financial institution. This is required for check and wire withdrawals because we can't always identify the institution using the transfer instructions. For cash journals this value will default to "Apex Clearing", regardless of what is passed in here
     */
    receivingInstitution?: string | undefined;
    /**
     * A representation of a tax withholding.
     */
    stateTaxWithholding?: RetirementDistributionTaxWithholdingCreate | undefined;
    /**
     * Whether or not this distribution has a state withholding waiver.
     */
    stateWithholdingWaiver?: boolean | undefined;
    /**
     * The type of retirement distribution.
     */
    type: RetirementDistributionCreateTypeOpen;
};
/** @internal */
export declare const RetirementDistributionCreateType$inboundSchema: z.ZodType<RetirementDistributionCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetirementDistributionCreateType$outboundSchema: z.ZodType<RetirementDistributionCreateTypeOpen, z.ZodTypeDef, RetirementDistributionCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementDistributionCreateType$ {
    /** @deprecated use `RetirementDistributionCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementDistributionCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementDistributionCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementDistributionCreateTypeOpen, z.ZodTypeDef, RetirementDistributionCreateTypeOpen>;
}
/** @internal */
export declare const RetirementDistributionCreate$inboundSchema: z.ZodType<RetirementDistributionCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementDistributionCreate$Outbound = {
    federal_tax_withholding?: RetirementDistributionTaxWithholdingCreate$Outbound | undefined;
    receiving_institution?: string | undefined;
    state_tax_withholding?: RetirementDistributionTaxWithholdingCreate$Outbound | undefined;
    state_withholding_waiver?: boolean | undefined;
    type: string;
};
/** @internal */
export declare const RetirementDistributionCreate$outboundSchema: z.ZodType<RetirementDistributionCreate$Outbound, z.ZodTypeDef, RetirementDistributionCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementDistributionCreate$ {
    /** @deprecated use `RetirementDistributionCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementDistributionCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementDistributionCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementDistributionCreate$Outbound, z.ZodTypeDef, RetirementDistributionCreate>;
    /** @deprecated use `RetirementDistributionCreate$Outbound` instead. */
    type Outbound = RetirementDistributionCreate$Outbound;
}
//# sourceMappingURL=retirementdistributioncreate.d.ts.map