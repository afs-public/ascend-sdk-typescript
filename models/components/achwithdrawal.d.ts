import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The amount to withdraw in USD. The value should not be set if the withdrawal is `full_disbursement`.
 */
export type AchWithdrawalAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type AchWithdrawalRetirementDistributionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type AchWithdrawalPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The federal tax withholding.
 */
export type FederalTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: AchWithdrawalRetirementDistributionAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: AchWithdrawalPercentage | null | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type AchWithdrawalRetirementDistributionStateTaxWithholdingAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type AchWithdrawalRetirementDistributionPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state tax withholding.
 */
export type StateTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: AchWithdrawalRetirementDistributionStateTaxWithholdingAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: AchWithdrawalRetirementDistributionPercentage | null | undefined;
};
/**
 * The type of retirement distribution.
 */
export declare enum AchWithdrawalType {
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
export type AchWithdrawalTypeOpen = OpenEnum<typeof AchWithdrawalType>;
/**
 * The retirement distribution details.
 */
export type RetirementDistribution = {
    /**
     * The federal tax withholding.
     */
    federalTaxWithholding?: FederalTaxWithholding | null | undefined;
    /**
     * The institution receiving retirement funds when performing a transfer to an identical retirement account type at a different financial institution. This is required for check and wire withdrawals because we can't always identify the institution using the transfer instructions. For cash journals this value will default to "Apex Clearing", regardless of what is passed in here
     */
    receivingInstitution?: string | undefined;
    /**
     * The state tax withholding.
     */
    stateTaxWithholding?: StateTaxWithholding | null | undefined;
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
    type?: AchWithdrawalTypeOpen | undefined;
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
export declare enum AchWithdrawalStateState {
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
export type AchWithdrawalStateStateOpen = OpenEnum<typeof AchWithdrawalStateState>;
/**
 * The current state of the ACH withdrawal.
 */
export type AchWithdrawalState = {
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
    state?: AchWithdrawalStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * A withdrawal transfer using the ACH mechanism.
 */
export type AchWithdrawal = {
    /**
     * The amount to withdraw in USD. The value should not be set if the withdrawal is `full_disbursement`.
     */
    amount?: AchWithdrawalAmount | null | undefined;
    /**
     * The bank relationship to be used for the ACH withdrawal.
     */
    bankRelationship?: string | undefined;
    /**
     * The external identifier supplied by the API caller. Each request must have a unique pairing of `client_transfer_id` and `account`.
     */
    clientTransferId?: string | undefined;
    /**
     * The memo that will appear on the customer's bank statement.
     */
    memo?: string | undefined;
    /**
     * The resource name of the ACH withdrawal.
     */
    name?: string | undefined;
    /**
     * The retirement distribution details.
     */
    retirementDistribution?: RetirementDistribution | null | undefined;
    /**
     * The current state of the ACH withdrawal.
     */
    state?: AchWithdrawalState | null | undefined;
};
/** @internal */
export declare const AchWithdrawalAmount$inboundSchema: z.ZodType<AchWithdrawalAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalAmount$outboundSchema: z.ZodType<AchWithdrawalAmount$Outbound, z.ZodTypeDef, AchWithdrawalAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalAmount$ {
    /** @deprecated use `AchWithdrawalAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalAmount$Outbound, z.ZodTypeDef, AchWithdrawalAmount>;
    /** @deprecated use `AchWithdrawalAmount$Outbound` instead. */
    type Outbound = AchWithdrawalAmount$Outbound;
}
export declare function achWithdrawalAmountToJSON(achWithdrawalAmount: AchWithdrawalAmount): string;
export declare function achWithdrawalAmountFromJSON(jsonString: string): SafeParseResult<AchWithdrawalAmount, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalRetirementDistributionAmount$inboundSchema: z.ZodType<AchWithdrawalRetirementDistributionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalRetirementDistributionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalRetirementDistributionAmount$outboundSchema: z.ZodType<AchWithdrawalRetirementDistributionAmount$Outbound, z.ZodTypeDef, AchWithdrawalRetirementDistributionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalRetirementDistributionAmount$ {
    /** @deprecated use `AchWithdrawalRetirementDistributionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalRetirementDistributionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalRetirementDistributionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalRetirementDistributionAmount$Outbound, z.ZodTypeDef, AchWithdrawalRetirementDistributionAmount>;
    /** @deprecated use `AchWithdrawalRetirementDistributionAmount$Outbound` instead. */
    type Outbound = AchWithdrawalRetirementDistributionAmount$Outbound;
}
export declare function achWithdrawalRetirementDistributionAmountToJSON(achWithdrawalRetirementDistributionAmount: AchWithdrawalRetirementDistributionAmount): string;
export declare function achWithdrawalRetirementDistributionAmountFromJSON(jsonString: string): SafeParseResult<AchWithdrawalRetirementDistributionAmount, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalPercentage$inboundSchema: z.ZodType<AchWithdrawalPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalPercentage$outboundSchema: z.ZodType<AchWithdrawalPercentage$Outbound, z.ZodTypeDef, AchWithdrawalPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalPercentage$ {
    /** @deprecated use `AchWithdrawalPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalPercentage$Outbound, z.ZodTypeDef, AchWithdrawalPercentage>;
    /** @deprecated use `AchWithdrawalPercentage$Outbound` instead. */
    type Outbound = AchWithdrawalPercentage$Outbound;
}
export declare function achWithdrawalPercentageToJSON(achWithdrawalPercentage: AchWithdrawalPercentage): string;
export declare function achWithdrawalPercentageFromJSON(jsonString: string): SafeParseResult<AchWithdrawalPercentage, SDKValidationError>;
/** @internal */
export declare const FederalTaxWithholding$inboundSchema: z.ZodType<FederalTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type FederalTaxWithholding$Outbound = {
    amount?: AchWithdrawalRetirementDistributionAmount$Outbound | null | undefined;
    percentage?: AchWithdrawalPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const FederalTaxWithholding$outboundSchema: z.ZodType<FederalTaxWithholding$Outbound, z.ZodTypeDef, FederalTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FederalTaxWithholding$ {
    /** @deprecated use `FederalTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FederalTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `FederalTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FederalTaxWithholding$Outbound, z.ZodTypeDef, FederalTaxWithholding>;
    /** @deprecated use `FederalTaxWithholding$Outbound` instead. */
    type Outbound = FederalTaxWithholding$Outbound;
}
export declare function federalTaxWithholdingToJSON(federalTaxWithholding: FederalTaxWithholding): string;
export declare function federalTaxWithholdingFromJSON(jsonString: string): SafeParseResult<FederalTaxWithholding, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$inboundSchema: z.ZodType<AchWithdrawalRetirementDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$outboundSchema: z.ZodType<AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, AchWithdrawalRetirementDistributionStateTaxWithholdingAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$ {
    /** @deprecated use `AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalRetirementDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, AchWithdrawalRetirementDistributionStateTaxWithholdingAmount>;
    /** @deprecated use `AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound` instead. */
    type Outbound = AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound;
}
export declare function achWithdrawalRetirementDistributionStateTaxWithholdingAmountToJSON(achWithdrawalRetirementDistributionStateTaxWithholdingAmount: AchWithdrawalRetirementDistributionStateTaxWithholdingAmount): string;
export declare function achWithdrawalRetirementDistributionStateTaxWithholdingAmountFromJSON(jsonString: string): SafeParseResult<AchWithdrawalRetirementDistributionStateTaxWithholdingAmount, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalRetirementDistributionPercentage$inboundSchema: z.ZodType<AchWithdrawalRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalRetirementDistributionPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalRetirementDistributionPercentage$outboundSchema: z.ZodType<AchWithdrawalRetirementDistributionPercentage$Outbound, z.ZodTypeDef, AchWithdrawalRetirementDistributionPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalRetirementDistributionPercentage$ {
    /** @deprecated use `AchWithdrawalRetirementDistributionPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalRetirementDistributionPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalRetirementDistributionPercentage$Outbound, z.ZodTypeDef, AchWithdrawalRetirementDistributionPercentage>;
    /** @deprecated use `AchWithdrawalRetirementDistributionPercentage$Outbound` instead. */
    type Outbound = AchWithdrawalRetirementDistributionPercentage$Outbound;
}
export declare function achWithdrawalRetirementDistributionPercentageToJSON(achWithdrawalRetirementDistributionPercentage: AchWithdrawalRetirementDistributionPercentage): string;
export declare function achWithdrawalRetirementDistributionPercentageFromJSON(jsonString: string): SafeParseResult<AchWithdrawalRetirementDistributionPercentage, SDKValidationError>;
/** @internal */
export declare const StateTaxWithholding$inboundSchema: z.ZodType<StateTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type StateTaxWithholding$Outbound = {
    amount?: AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound | null | undefined;
    percentage?: AchWithdrawalRetirementDistributionPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const StateTaxWithholding$outboundSchema: z.ZodType<StateTaxWithholding$Outbound, z.ZodTypeDef, StateTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StateTaxWithholding$ {
    /** @deprecated use `StateTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StateTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `StateTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StateTaxWithholding$Outbound, z.ZodTypeDef, StateTaxWithholding>;
    /** @deprecated use `StateTaxWithholding$Outbound` instead. */
    type Outbound = StateTaxWithholding$Outbound;
}
export declare function stateTaxWithholdingToJSON(stateTaxWithholding: StateTaxWithholding): string;
export declare function stateTaxWithholdingFromJSON(jsonString: string): SafeParseResult<StateTaxWithholding, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalType$inboundSchema: z.ZodType<AchWithdrawalTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchWithdrawalType$outboundSchema: z.ZodType<AchWithdrawalTypeOpen, z.ZodTypeDef, AchWithdrawalTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalType$ {
    /** @deprecated use `AchWithdrawalType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalTypeOpen, z.ZodTypeDef, AchWithdrawalTypeOpen>;
}
/** @internal */
export declare const RetirementDistribution$inboundSchema: z.ZodType<RetirementDistribution, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementDistribution$Outbound = {
    federal_tax_withholding?: FederalTaxWithholding$Outbound | null | undefined;
    receiving_institution?: string | undefined;
    state_tax_withholding?: StateTaxWithholding$Outbound | null | undefined;
    state_withholding_waiver?: boolean | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const RetirementDistribution$outboundSchema: z.ZodType<RetirementDistribution$Outbound, z.ZodTypeDef, RetirementDistribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementDistribution$ {
    /** @deprecated use `RetirementDistribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementDistribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementDistribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementDistribution$Outbound, z.ZodTypeDef, RetirementDistribution>;
    /** @deprecated use `RetirementDistribution$Outbound` instead. */
    type Outbound = RetirementDistribution$Outbound;
}
export declare function retirementDistributionToJSON(retirementDistribution: RetirementDistribution): string;
export declare function retirementDistributionFromJSON(jsonString: string): SafeParseResult<RetirementDistribution, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalStateState$inboundSchema: z.ZodType<AchWithdrawalStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchWithdrawalStateState$outboundSchema: z.ZodType<AchWithdrawalStateStateOpen, z.ZodTypeDef, AchWithdrawalStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalStateState$ {
    /** @deprecated use `AchWithdrawalStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalStateStateOpen, z.ZodTypeDef, AchWithdrawalStateStateOpen>;
}
/** @internal */
export declare const AchWithdrawalState$inboundSchema: z.ZodType<AchWithdrawalState, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const AchWithdrawalState$outboundSchema: z.ZodType<AchWithdrawalState$Outbound, z.ZodTypeDef, AchWithdrawalState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalState$ {
    /** @deprecated use `AchWithdrawalState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalState, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalState$Outbound, z.ZodTypeDef, AchWithdrawalState>;
    /** @deprecated use `AchWithdrawalState$Outbound` instead. */
    type Outbound = AchWithdrawalState$Outbound;
}
export declare function achWithdrawalStateToJSON(achWithdrawalState: AchWithdrawalState): string;
export declare function achWithdrawalStateFromJSON(jsonString: string): SafeParseResult<AchWithdrawalState, SDKValidationError>;
/** @internal */
export declare const AchWithdrawal$inboundSchema: z.ZodType<AchWithdrawal, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawal$Outbound = {
    amount?: AchWithdrawalAmount$Outbound | null | undefined;
    bank_relationship?: string | undefined;
    client_transfer_id?: string | undefined;
    memo?: string | undefined;
    name?: string | undefined;
    retirement_distribution?: RetirementDistribution$Outbound | null | undefined;
    state?: AchWithdrawalState$Outbound | null | undefined;
};
/** @internal */
export declare const AchWithdrawal$outboundSchema: z.ZodType<AchWithdrawal$Outbound, z.ZodTypeDef, AchWithdrawal>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawal$ {
    /** @deprecated use `AchWithdrawal$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawal, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawal$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawal$Outbound, z.ZodTypeDef, AchWithdrawal>;
    /** @deprecated use `AchWithdrawal$Outbound` instead. */
    type Outbound = AchWithdrawal$Outbound;
}
export declare function achWithdrawalToJSON(achWithdrawal: AchWithdrawal): string;
export declare function achWithdrawalFromJSON(jsonString: string): SafeParseResult<AchWithdrawal, SDKValidationError>;
//# sourceMappingURL=achwithdrawal.d.ts.map