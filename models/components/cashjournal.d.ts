import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The amount to transfer in USD
 */
export type CashJournalAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Whether a cash journal is first party or third party Determined asynchronously when the transfer is processing, and will be set by the time the transfer is posted
 */
export declare enum PartyType {
    PartyTypeUnspecified = "PARTY_TYPE_UNSPECIFIED",
    FirstParty = "FIRST_PARTY",
    ThirdParty = "THIRD_PARTY"
}
/**
 * Whether a cash journal is first party or third party Determined asynchronously when the transfer is processing, and will be set by the time the transfer is posted
 */
export type PartyTypeOpen = OpenEnum<typeof PartyType>;
/**
 * The type of retirement contribution.
 */
export declare enum CashJournalType {
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
export type CashJournalTypeOpen = OpenEnum<typeof CashJournalType>;
/**
 * The retirement contribution details Must be provided when the destination account is a retirement account
 */
export type CashJournalRetirementContribution = {
    /**
     * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
     */
    taxYear?: number | undefined;
    /**
     * The type of retirement contribution.
     */
    type?: CashJournalTypeOpen | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type CashJournalRetirementDistributionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type CashJournalPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The federal tax withholding.
 */
export type CashJournalFederalTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: CashJournalRetirementDistributionAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: CashJournalPercentage | null | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type CashJournalRetirementDistributionStateTaxWithholdingAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type CashJournalRetirementDistributionPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state tax withholding.
 */
export type CashJournalStateTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: CashJournalRetirementDistributionStateTaxWithholdingAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: CashJournalRetirementDistributionPercentage | null | undefined;
};
/**
 * The type of retirement distribution.
 */
export declare enum CashJournalRetirementDistributionType {
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
export type CashJournalRetirementDistributionTypeOpen = OpenEnum<typeof CashJournalRetirementDistributionType>;
/**
 * The retirement distribution details Must be provided when the source account is a retirement account
 */
export type CashJournalRetirementDistribution = {
    /**
     * The federal tax withholding.
     */
    federalTaxWithholding?: CashJournalFederalTaxWithholding | null | undefined;
    /**
     * The institution receiving retirement funds when performing a transfer to an identical retirement account type at a different financial institution. This is required for check and wire withdrawals because we can't always identify the institution using the transfer instructions. For cash journals this value will default to "Apex Clearing", regardless of what is passed in here
     */
    receivingInstitution?: string | undefined;
    /**
     * The state tax withholding.
     */
    stateTaxWithholding?: CashJournalStateTaxWithholding | null | undefined;
    /**
     * Whether or not this distribution has a state withholding waiver.
     */
    stateWithholdingWaiver?: boolean | undefined;
    /**
     * Tax year for which the distribution is applied.
     */
    taxYear?: number | undefined;
    /**
     * The type of retirement distribution.
     */
    type?: CashJournalRetirementDistributionTypeOpen | undefined;
};
/**
 * The high level state of a transfer, one of:
 *
 * @remarks
 * - `PROCESSING` - The transfer is being processed and will be posted if successful.
 * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
 * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
 * - `COMPLETED` - The transfer has been batched and completed.
 * - `REJECTED` - The transfer was rejected.
 * - `CANCELED` - The transfer was canceled.
 * - `RETURNED` - The transfer was returned.
 * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
 */
export declare enum CashJournalStateState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Processing = "PROCESSING",
    PendingReview = "PENDING_REVIEW",
    Posted = "POSTED",
    Completed = "COMPLETED",
    Rejected = "REJECTED",
    Canceled = "CANCELED",
    Returned = "RETURNED",
    Postponed = "POSTPONED"
}
/**
 * The high level state of a transfer, one of:
 *
 * @remarks
 * - `PROCESSING` - The transfer is being processed and will be posted if successful.
 * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
 * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
 * - `COMPLETED` - The transfer has been batched and completed.
 * - `REJECTED` - The transfer was rejected.
 * - `CANCELED` - The transfer was canceled.
 * - `RETURNED` - The transfer was returned.
 * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
 */
export type CashJournalStateStateOpen = OpenEnum<typeof CashJournalStateState>;
/**
 * The current state of the cash journal
 */
export type CashJournalState = {
    /**
     * The user or service that triggered the state update.
     */
    actor?: string | undefined;
    /**
     * Additional description of the transfer state.
     */
    message?: string | undefined;
    /**
     * Additional metadata relating to the transfer state. Included data depends on the state, e.g.:
     *
     * @remarks
     *  - Rejection reasons are included when the `state` is `REJECTED`
     *  - Reason and comment are included when `state` is `CANCELED`
     */
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * The high level state of a transfer, one of:
     *
     * @remarks
     * - `PROCESSING` - The transfer is being processed and will be posted if successful.
     * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
     * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
     * - `COMPLETED` - The transfer has been batched and completed.
     * - `REJECTED` - The transfer was rejected.
     * - `CANCELED` - The transfer was canceled.
     * - `RETURNED` - The transfer was returned.
     * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
     */
    state?: CashJournalStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * A cash journal transfer. Funds are moved from a source account to a destination account
 */
export type CashJournal = {
    /**
     * The amount to transfer in USD
     */
    amount?: CashJournalAmount | null | undefined;
    /**
     * The external identifier supplied by the API caller Each request must have a unique pairing of `client_transfer_id` and `source_account`
     */
    clientTransferId?: string | undefined;
    /**
     * The account that funds will be moved to
     */
    destinationAccount?: string | undefined;
    /**
     * The resource name of the cash journal
     */
    name?: string | undefined;
    /**
     * Whether a cash journal is first party or third party Determined asynchronously when the transfer is processing, and will be set by the time the transfer is posted
     */
    partyType?: PartyTypeOpen | undefined;
    /**
     * The retirement contribution details Must be provided when the destination account is a retirement account
     */
    retirementContribution?: CashJournalRetirementContribution | null | undefined;
    /**
     * The retirement distribution details Must be provided when the source account is a retirement account
     */
    retirementDistribution?: CashJournalRetirementDistribution | null | undefined;
    /**
     * The account that funds will be moved from
     */
    sourceAccount?: string | undefined;
    /**
     * The current state of the cash journal
     */
    state?: CashJournalState | null | undefined;
};
/** @internal */
export declare const CashJournalAmount$inboundSchema: z.ZodType<CashJournalAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CashJournalAmount$outboundSchema: z.ZodType<CashJournalAmount$Outbound, z.ZodTypeDef, CashJournalAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalAmount$ {
    /** @deprecated use `CashJournalAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalAmount$Outbound, z.ZodTypeDef, CashJournalAmount>;
    /** @deprecated use `CashJournalAmount$Outbound` instead. */
    type Outbound = CashJournalAmount$Outbound;
}
export declare function cashJournalAmountToJSON(cashJournalAmount: CashJournalAmount): string;
export declare function cashJournalAmountFromJSON(jsonString: string): SafeParseResult<CashJournalAmount, SDKValidationError>;
/** @internal */
export declare const PartyType$inboundSchema: z.ZodType<PartyTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyType$outboundSchema: z.ZodType<PartyTypeOpen, z.ZodTypeDef, PartyTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyType$ {
    /** @deprecated use `PartyType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyTypeOpen, z.ZodTypeDef, PartyTypeOpen>;
}
/** @internal */
export declare const CashJournalType$inboundSchema: z.ZodType<CashJournalTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CashJournalType$outboundSchema: z.ZodType<CashJournalTypeOpen, z.ZodTypeDef, CashJournalTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalType$ {
    /** @deprecated use `CashJournalType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalTypeOpen, z.ZodTypeDef, CashJournalTypeOpen>;
}
/** @internal */
export declare const CashJournalRetirementContribution$inboundSchema: z.ZodType<CashJournalRetirementContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalRetirementContribution$Outbound = {
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const CashJournalRetirementContribution$outboundSchema: z.ZodType<CashJournalRetirementContribution$Outbound, z.ZodTypeDef, CashJournalRetirementContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalRetirementContribution$ {
    /** @deprecated use `CashJournalRetirementContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalRetirementContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalRetirementContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalRetirementContribution$Outbound, z.ZodTypeDef, CashJournalRetirementContribution>;
    /** @deprecated use `CashJournalRetirementContribution$Outbound` instead. */
    type Outbound = CashJournalRetirementContribution$Outbound;
}
export declare function cashJournalRetirementContributionToJSON(cashJournalRetirementContribution: CashJournalRetirementContribution): string;
export declare function cashJournalRetirementContributionFromJSON(jsonString: string): SafeParseResult<CashJournalRetirementContribution, SDKValidationError>;
/** @internal */
export declare const CashJournalRetirementDistributionAmount$inboundSchema: z.ZodType<CashJournalRetirementDistributionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalRetirementDistributionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CashJournalRetirementDistributionAmount$outboundSchema: z.ZodType<CashJournalRetirementDistributionAmount$Outbound, z.ZodTypeDef, CashJournalRetirementDistributionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalRetirementDistributionAmount$ {
    /** @deprecated use `CashJournalRetirementDistributionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalRetirementDistributionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalRetirementDistributionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalRetirementDistributionAmount$Outbound, z.ZodTypeDef, CashJournalRetirementDistributionAmount>;
    /** @deprecated use `CashJournalRetirementDistributionAmount$Outbound` instead. */
    type Outbound = CashJournalRetirementDistributionAmount$Outbound;
}
export declare function cashJournalRetirementDistributionAmountToJSON(cashJournalRetirementDistributionAmount: CashJournalRetirementDistributionAmount): string;
export declare function cashJournalRetirementDistributionAmountFromJSON(jsonString: string): SafeParseResult<CashJournalRetirementDistributionAmount, SDKValidationError>;
/** @internal */
export declare const CashJournalPercentage$inboundSchema: z.ZodType<CashJournalPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CashJournalPercentage$outboundSchema: z.ZodType<CashJournalPercentage$Outbound, z.ZodTypeDef, CashJournalPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalPercentage$ {
    /** @deprecated use `CashJournalPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalPercentage$Outbound, z.ZodTypeDef, CashJournalPercentage>;
    /** @deprecated use `CashJournalPercentage$Outbound` instead. */
    type Outbound = CashJournalPercentage$Outbound;
}
export declare function cashJournalPercentageToJSON(cashJournalPercentage: CashJournalPercentage): string;
export declare function cashJournalPercentageFromJSON(jsonString: string): SafeParseResult<CashJournalPercentage, SDKValidationError>;
/** @internal */
export declare const CashJournalFederalTaxWithholding$inboundSchema: z.ZodType<CashJournalFederalTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalFederalTaxWithholding$Outbound = {
    amount?: CashJournalRetirementDistributionAmount$Outbound | null | undefined;
    percentage?: CashJournalPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const CashJournalFederalTaxWithholding$outboundSchema: z.ZodType<CashJournalFederalTaxWithholding$Outbound, z.ZodTypeDef, CashJournalFederalTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalFederalTaxWithholding$ {
    /** @deprecated use `CashJournalFederalTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalFederalTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalFederalTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalFederalTaxWithholding$Outbound, z.ZodTypeDef, CashJournalFederalTaxWithholding>;
    /** @deprecated use `CashJournalFederalTaxWithholding$Outbound` instead. */
    type Outbound = CashJournalFederalTaxWithholding$Outbound;
}
export declare function cashJournalFederalTaxWithholdingToJSON(cashJournalFederalTaxWithholding: CashJournalFederalTaxWithholding): string;
export declare function cashJournalFederalTaxWithholdingFromJSON(jsonString: string): SafeParseResult<CashJournalFederalTaxWithholding, SDKValidationError>;
/** @internal */
export declare const CashJournalRetirementDistributionStateTaxWithholdingAmount$inboundSchema: z.ZodType<CashJournalRetirementDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CashJournalRetirementDistributionStateTaxWithholdingAmount$outboundSchema: z.ZodType<CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, CashJournalRetirementDistributionStateTaxWithholdingAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalRetirementDistributionStateTaxWithholdingAmount$ {
    /** @deprecated use `CashJournalRetirementDistributionStateTaxWithholdingAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalRetirementDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalRetirementDistributionStateTaxWithholdingAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, CashJournalRetirementDistributionStateTaxWithholdingAmount>;
    /** @deprecated use `CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound` instead. */
    type Outbound = CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound;
}
export declare function cashJournalRetirementDistributionStateTaxWithholdingAmountToJSON(cashJournalRetirementDistributionStateTaxWithholdingAmount: CashJournalRetirementDistributionStateTaxWithholdingAmount): string;
export declare function cashJournalRetirementDistributionStateTaxWithholdingAmountFromJSON(jsonString: string): SafeParseResult<CashJournalRetirementDistributionStateTaxWithholdingAmount, SDKValidationError>;
/** @internal */
export declare const CashJournalRetirementDistributionPercentage$inboundSchema: z.ZodType<CashJournalRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalRetirementDistributionPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CashJournalRetirementDistributionPercentage$outboundSchema: z.ZodType<CashJournalRetirementDistributionPercentage$Outbound, z.ZodTypeDef, CashJournalRetirementDistributionPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalRetirementDistributionPercentage$ {
    /** @deprecated use `CashJournalRetirementDistributionPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalRetirementDistributionPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalRetirementDistributionPercentage$Outbound, z.ZodTypeDef, CashJournalRetirementDistributionPercentage>;
    /** @deprecated use `CashJournalRetirementDistributionPercentage$Outbound` instead. */
    type Outbound = CashJournalRetirementDistributionPercentage$Outbound;
}
export declare function cashJournalRetirementDistributionPercentageToJSON(cashJournalRetirementDistributionPercentage: CashJournalRetirementDistributionPercentage): string;
export declare function cashJournalRetirementDistributionPercentageFromJSON(jsonString: string): SafeParseResult<CashJournalRetirementDistributionPercentage, SDKValidationError>;
/** @internal */
export declare const CashJournalStateTaxWithholding$inboundSchema: z.ZodType<CashJournalStateTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalStateTaxWithholding$Outbound = {
    amount?: CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound | null | undefined;
    percentage?: CashJournalRetirementDistributionPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const CashJournalStateTaxWithholding$outboundSchema: z.ZodType<CashJournalStateTaxWithholding$Outbound, z.ZodTypeDef, CashJournalStateTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalStateTaxWithholding$ {
    /** @deprecated use `CashJournalStateTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalStateTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalStateTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalStateTaxWithholding$Outbound, z.ZodTypeDef, CashJournalStateTaxWithholding>;
    /** @deprecated use `CashJournalStateTaxWithholding$Outbound` instead. */
    type Outbound = CashJournalStateTaxWithholding$Outbound;
}
export declare function cashJournalStateTaxWithholdingToJSON(cashJournalStateTaxWithholding: CashJournalStateTaxWithholding): string;
export declare function cashJournalStateTaxWithholdingFromJSON(jsonString: string): SafeParseResult<CashJournalStateTaxWithholding, SDKValidationError>;
/** @internal */
export declare const CashJournalRetirementDistributionType$inboundSchema: z.ZodType<CashJournalRetirementDistributionTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CashJournalRetirementDistributionType$outboundSchema: z.ZodType<CashJournalRetirementDistributionTypeOpen, z.ZodTypeDef, CashJournalRetirementDistributionTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalRetirementDistributionType$ {
    /** @deprecated use `CashJournalRetirementDistributionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalRetirementDistributionTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalRetirementDistributionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalRetirementDistributionTypeOpen, z.ZodTypeDef, CashJournalRetirementDistributionTypeOpen>;
}
/** @internal */
export declare const CashJournalRetirementDistribution$inboundSchema: z.ZodType<CashJournalRetirementDistribution, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalRetirementDistribution$Outbound = {
    federal_tax_withholding?: CashJournalFederalTaxWithholding$Outbound | null | undefined;
    receiving_institution?: string | undefined;
    state_tax_withholding?: CashJournalStateTaxWithholding$Outbound | null | undefined;
    state_withholding_waiver?: boolean | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const CashJournalRetirementDistribution$outboundSchema: z.ZodType<CashJournalRetirementDistribution$Outbound, z.ZodTypeDef, CashJournalRetirementDistribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalRetirementDistribution$ {
    /** @deprecated use `CashJournalRetirementDistribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalRetirementDistribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalRetirementDistribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalRetirementDistribution$Outbound, z.ZodTypeDef, CashJournalRetirementDistribution>;
    /** @deprecated use `CashJournalRetirementDistribution$Outbound` instead. */
    type Outbound = CashJournalRetirementDistribution$Outbound;
}
export declare function cashJournalRetirementDistributionToJSON(cashJournalRetirementDistribution: CashJournalRetirementDistribution): string;
export declare function cashJournalRetirementDistributionFromJSON(jsonString: string): SafeParseResult<CashJournalRetirementDistribution, SDKValidationError>;
/** @internal */
export declare const CashJournalStateState$inboundSchema: z.ZodType<CashJournalStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CashJournalStateState$outboundSchema: z.ZodType<CashJournalStateStateOpen, z.ZodTypeDef, CashJournalStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalStateState$ {
    /** @deprecated use `CashJournalStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalStateStateOpen, z.ZodTypeDef, CashJournalStateStateOpen>;
}
/** @internal */
export declare const CashJournalState$inboundSchema: z.ZodType<CashJournalState, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const CashJournalState$outboundSchema: z.ZodType<CashJournalState$Outbound, z.ZodTypeDef, CashJournalState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalState$ {
    /** @deprecated use `CashJournalState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalState, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalState$Outbound, z.ZodTypeDef, CashJournalState>;
    /** @deprecated use `CashJournalState$Outbound` instead. */
    type Outbound = CashJournalState$Outbound;
}
export declare function cashJournalStateToJSON(cashJournalState: CashJournalState): string;
export declare function cashJournalStateFromJSON(jsonString: string): SafeParseResult<CashJournalState, SDKValidationError>;
/** @internal */
export declare const CashJournal$inboundSchema: z.ZodType<CashJournal, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournal$Outbound = {
    amount?: CashJournalAmount$Outbound | null | undefined;
    client_transfer_id?: string | undefined;
    destination_account?: string | undefined;
    name?: string | undefined;
    party_type?: string | undefined;
    retirement_contribution?: CashJournalRetirementContribution$Outbound | null | undefined;
    retirement_distribution?: CashJournalRetirementDistribution$Outbound | null | undefined;
    source_account?: string | undefined;
    state?: CashJournalState$Outbound | null | undefined;
};
/** @internal */
export declare const CashJournal$outboundSchema: z.ZodType<CashJournal$Outbound, z.ZodTypeDef, CashJournal>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournal$ {
    /** @deprecated use `CashJournal$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournal, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournal$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournal$Outbound, z.ZodTypeDef, CashJournal>;
    /** @deprecated use `CashJournal$Outbound` instead. */
    type Outbound = CashJournal$Outbound;
}
export declare function cashJournalToJSON(cashJournal: CashJournal): string;
export declare function cashJournalFromJSON(jsonString: string): SafeParseResult<CashJournal, SDKValidationError>;
//# sourceMappingURL=cashjournal.d.ts.map