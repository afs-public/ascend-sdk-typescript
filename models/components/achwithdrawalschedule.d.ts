import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Fixed USD amount to withhold for taxes.
 */
export type AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type AchWithdrawalSchedulePercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The federal tax withholding.
 */
export type AchWithdrawalScheduleFederalTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: AchWithdrawalSchedulePercentage | null | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type AchWithdrawalScheduleIraDistributionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type AchWithdrawalScheduleIraDistributionPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state tax withholding.
 */
export type AchWithdrawalScheduleStateTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: AchWithdrawalScheduleIraDistributionAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: AchWithdrawalScheduleIraDistributionPercentage | null | undefined;
};
/**
 * The type of retirement distribution.
 */
export declare enum AchWithdrawalScheduleType {
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
export type AchWithdrawalScheduleTypeOpen = OpenEnum<typeof AchWithdrawalScheduleType>;
/**
 * The ira distribution info for an IRA account
 */
export type IraDistribution = {
    /**
     * The federal tax withholding.
     */
    federalTaxWithholding?: AchWithdrawalScheduleFederalTaxWithholding | null | undefined;
    /**
     * The institution receiving retirement funds when performing a transfer to an identical retirement account type at a different financial institution. This is required for check and wire withdrawals because we can't always identify the institution using the transfer instructions. For cash journals this value will default to "Apex Clearing", regardless of what is passed in here
     */
    receivingInstitution?: string | undefined;
    /**
     * The state tax withholding.
     */
    stateTaxWithholding?: AchWithdrawalScheduleStateTaxWithholding | null | undefined;
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
    type?: AchWithdrawalScheduleTypeOpen | undefined;
};
/**
 * A cash amount in the format of decimal value (mutually exclusive with 'full_disbursement')
 */
export type AchWithdrawalScheduleAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The schedule start date
 */
export type AchWithdrawalScheduleStartDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * The state of the represented schedule
 */
export declare enum AchWithdrawalScheduleState {
    Active = "ACTIVE",
    Canceled = "CANCELED",
    Completed = "COMPLETED"
}
/**
 * The state of the represented schedule
 */
export type AchWithdrawalScheduleStateOpen = OpenEnum<typeof AchWithdrawalScheduleState>;
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export declare enum AchWithdrawalScheduleTimeUnit {
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH"
}
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export type AchWithdrawalScheduleTimeUnitOpen = OpenEnum<typeof AchWithdrawalScheduleTimeUnit>;
/**
 * Common schedule properties
 */
export type AchWithdrawalScheduleScheduleProperties = {
    /**
     * The number of occurrences (empty or 0 indicates unlimited occurrences)
     */
    occurrences?: number | undefined;
    /**
     * The schedule start date
     */
    startDate?: AchWithdrawalScheduleStartDate | null | undefined;
    /**
     * The state of the represented schedule
     */
    state?: AchWithdrawalScheduleStateOpen | undefined;
    /**
     * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    timeUnit?: AchWithdrawalScheduleTimeUnitOpen | undefined;
    /**
     * The multiplier used to determine the length of the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    unitMultiplier?: number | undefined;
};
/**
 * The transfer schedule details
 */
export type AchWithdrawalScheduleScheduleDetails = {
    /**
     * A cash amount in the format of decimal value (mutually exclusive with 'full_disbursement')
     */
    amount?: AchWithdrawalScheduleAmount | null | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_schedule_id and account
     */
    clientScheduleId?: string | undefined;
    /**
     * Flag to indicate a full disbursement transfer (mutually exclusive with 'amount')
     */
    fullDisbursement?: boolean | undefined;
    /**
     * Common schedule properties
     */
    scheduleProperties?: AchWithdrawalScheduleScheduleProperties | null | undefined;
};
/**
 * A withdrawal transfer schedule using the ACH mechanism
 */
export type AchWithdrawalSchedule = {
    /**
     * The name of the bank relationship to be used in the ACH transaction
     */
    bankRelationship?: string | undefined;
    /**
     * The ira distribution info for an IRA account
     */
    iraDistribution?: IraDistribution | null | undefined;
    /**
     * The name of the ACH Withdrawal transfer schedule
     */
    name?: string | undefined;
    /**
     * The transfer schedule details
     */
    scheduleDetails?: AchWithdrawalScheduleScheduleDetails | null | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$inboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$outboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$Outbound, z.ZodTypeDef, AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$ {
    /** @deprecated use `AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$Outbound, z.ZodTypeDef, AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount>;
    /** @deprecated use `AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$Outbound;
}
/** @internal */
export declare const AchWithdrawalSchedulePercentage$inboundSchema: z.ZodType<AchWithdrawalSchedulePercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulePercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulePercentage$outboundSchema: z.ZodType<AchWithdrawalSchedulePercentage$Outbound, z.ZodTypeDef, AchWithdrawalSchedulePercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulePercentage$ {
    /** @deprecated use `AchWithdrawalSchedulePercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulePercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulePercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulePercentage$Outbound, z.ZodTypeDef, AchWithdrawalSchedulePercentage>;
    /** @deprecated use `AchWithdrawalSchedulePercentage$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulePercentage$Outbound;
}
/** @internal */
export declare const AchWithdrawalScheduleFederalTaxWithholding$inboundSchema: z.ZodType<AchWithdrawalScheduleFederalTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleFederalTaxWithholding$Outbound = {
    amount?: AchWithdrawalScheduleIraDistributionFederalTaxWithholdingAmount$Outbound | null | undefined;
    percentage?: AchWithdrawalSchedulePercentage$Outbound | null | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleFederalTaxWithholding$outboundSchema: z.ZodType<AchWithdrawalScheduleFederalTaxWithholding$Outbound, z.ZodTypeDef, AchWithdrawalScheduleFederalTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleFederalTaxWithholding$ {
    /** @deprecated use `AchWithdrawalScheduleFederalTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleFederalTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleFederalTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleFederalTaxWithholding$Outbound, z.ZodTypeDef, AchWithdrawalScheduleFederalTaxWithholding>;
    /** @deprecated use `AchWithdrawalScheduleFederalTaxWithholding$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleFederalTaxWithholding$Outbound;
}
/** @internal */
export declare const AchWithdrawalScheduleIraDistributionAmount$inboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleIraDistributionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleIraDistributionAmount$outboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionAmount$Outbound, z.ZodTypeDef, AchWithdrawalScheduleIraDistributionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleIraDistributionAmount$ {
    /** @deprecated use `AchWithdrawalScheduleIraDistributionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleIraDistributionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionAmount$Outbound, z.ZodTypeDef, AchWithdrawalScheduleIraDistributionAmount>;
    /** @deprecated use `AchWithdrawalScheduleIraDistributionAmount$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleIraDistributionAmount$Outbound;
}
/** @internal */
export declare const AchWithdrawalScheduleIraDistributionPercentage$inboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleIraDistributionPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleIraDistributionPercentage$outboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionPercentage$Outbound, z.ZodTypeDef, AchWithdrawalScheduleIraDistributionPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleIraDistributionPercentage$ {
    /** @deprecated use `AchWithdrawalScheduleIraDistributionPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleIraDistributionPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleIraDistributionPercentage$Outbound, z.ZodTypeDef, AchWithdrawalScheduleIraDistributionPercentage>;
    /** @deprecated use `AchWithdrawalScheduleIraDistributionPercentage$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleIraDistributionPercentage$Outbound;
}
/** @internal */
export declare const AchWithdrawalScheduleStateTaxWithholding$inboundSchema: z.ZodType<AchWithdrawalScheduleStateTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleStateTaxWithholding$Outbound = {
    amount?: AchWithdrawalScheduleIraDistributionAmount$Outbound | null | undefined;
    percentage?: AchWithdrawalScheduleIraDistributionPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleStateTaxWithholding$outboundSchema: z.ZodType<AchWithdrawalScheduleStateTaxWithholding$Outbound, z.ZodTypeDef, AchWithdrawalScheduleStateTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleStateTaxWithholding$ {
    /** @deprecated use `AchWithdrawalScheduleStateTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleStateTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleStateTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleStateTaxWithholding$Outbound, z.ZodTypeDef, AchWithdrawalScheduleStateTaxWithholding>;
    /** @deprecated use `AchWithdrawalScheduleStateTaxWithholding$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleStateTaxWithholding$Outbound;
}
/** @internal */
export declare const AchWithdrawalScheduleType$inboundSchema: z.ZodType<AchWithdrawalScheduleTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchWithdrawalScheduleType$outboundSchema: z.ZodType<AchWithdrawalScheduleTypeOpen, z.ZodTypeDef, AchWithdrawalScheduleTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleType$ {
    /** @deprecated use `AchWithdrawalScheduleType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleTypeOpen, z.ZodTypeDef, AchWithdrawalScheduleTypeOpen>;
}
/** @internal */
export declare const IraDistribution$inboundSchema: z.ZodType<IraDistribution, z.ZodTypeDef, unknown>;
/** @internal */
export type IraDistribution$Outbound = {
    federal_tax_withholding?: AchWithdrawalScheduleFederalTaxWithholding$Outbound | null | undefined;
    receiving_institution?: string | undefined;
    state_tax_withholding?: AchWithdrawalScheduleStateTaxWithholding$Outbound | null | undefined;
    state_withholding_waiver?: boolean | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const IraDistribution$outboundSchema: z.ZodType<IraDistribution$Outbound, z.ZodTypeDef, IraDistribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IraDistribution$ {
    /** @deprecated use `IraDistribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IraDistribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `IraDistribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IraDistribution$Outbound, z.ZodTypeDef, IraDistribution>;
    /** @deprecated use `IraDistribution$Outbound` instead. */
    type Outbound = IraDistribution$Outbound;
}
/** @internal */
export declare const AchWithdrawalScheduleAmount$inboundSchema: z.ZodType<AchWithdrawalScheduleAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleAmount$outboundSchema: z.ZodType<AchWithdrawalScheduleAmount$Outbound, z.ZodTypeDef, AchWithdrawalScheduleAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleAmount$ {
    /** @deprecated use `AchWithdrawalScheduleAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleAmount$Outbound, z.ZodTypeDef, AchWithdrawalScheduleAmount>;
    /** @deprecated use `AchWithdrawalScheduleAmount$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleAmount$Outbound;
}
/** @internal */
export declare const AchWithdrawalScheduleStartDate$inboundSchema: z.ZodType<AchWithdrawalScheduleStartDate, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleStartDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleStartDate$outboundSchema: z.ZodType<AchWithdrawalScheduleStartDate$Outbound, z.ZodTypeDef, AchWithdrawalScheduleStartDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleStartDate$ {
    /** @deprecated use `AchWithdrawalScheduleStartDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleStartDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleStartDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleStartDate$Outbound, z.ZodTypeDef, AchWithdrawalScheduleStartDate>;
    /** @deprecated use `AchWithdrawalScheduleStartDate$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleStartDate$Outbound;
}
/** @internal */
export declare const AchWithdrawalScheduleState$inboundSchema: z.ZodType<AchWithdrawalScheduleStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchWithdrawalScheduleState$outboundSchema: z.ZodType<AchWithdrawalScheduleStateOpen, z.ZodTypeDef, AchWithdrawalScheduleStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleState$ {
    /** @deprecated use `AchWithdrawalScheduleState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleStateOpen, z.ZodTypeDef, AchWithdrawalScheduleStateOpen>;
}
/** @internal */
export declare const AchWithdrawalScheduleTimeUnit$inboundSchema: z.ZodType<AchWithdrawalScheduleTimeUnitOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchWithdrawalScheduleTimeUnit$outboundSchema: z.ZodType<AchWithdrawalScheduleTimeUnitOpen, z.ZodTypeDef, AchWithdrawalScheduleTimeUnitOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleTimeUnit$ {
    /** @deprecated use `AchWithdrawalScheduleTimeUnit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleTimeUnitOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleTimeUnit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleTimeUnitOpen, z.ZodTypeDef, AchWithdrawalScheduleTimeUnitOpen>;
}
/** @internal */
export declare const AchWithdrawalScheduleScheduleProperties$inboundSchema: z.ZodType<AchWithdrawalScheduleScheduleProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleScheduleProperties$Outbound = {
    occurrences?: number | undefined;
    start_date?: AchWithdrawalScheduleStartDate$Outbound | null | undefined;
    state?: string | undefined;
    time_unit?: string | undefined;
    unit_multiplier?: number | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleScheduleProperties$outboundSchema: z.ZodType<AchWithdrawalScheduleScheduleProperties$Outbound, z.ZodTypeDef, AchWithdrawalScheduleScheduleProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleScheduleProperties$ {
    /** @deprecated use `AchWithdrawalScheduleScheduleProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleScheduleProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleScheduleProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleScheduleProperties$Outbound, z.ZodTypeDef, AchWithdrawalScheduleScheduleProperties>;
    /** @deprecated use `AchWithdrawalScheduleScheduleProperties$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleScheduleProperties$Outbound;
}
/** @internal */
export declare const AchWithdrawalScheduleScheduleDetails$inboundSchema: z.ZodType<AchWithdrawalScheduleScheduleDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleScheduleDetails$Outbound = {
    amount?: AchWithdrawalScheduleAmount$Outbound | null | undefined;
    client_schedule_id?: string | undefined;
    full_disbursement?: boolean | undefined;
    schedule_properties?: AchWithdrawalScheduleScheduleProperties$Outbound | null | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleScheduleDetails$outboundSchema: z.ZodType<AchWithdrawalScheduleScheduleDetails$Outbound, z.ZodTypeDef, AchWithdrawalScheduleScheduleDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleScheduleDetails$ {
    /** @deprecated use `AchWithdrawalScheduleScheduleDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleScheduleDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleScheduleDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleScheduleDetails$Outbound, z.ZodTypeDef, AchWithdrawalScheduleScheduleDetails>;
    /** @deprecated use `AchWithdrawalScheduleScheduleDetails$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleScheduleDetails$Outbound;
}
/** @internal */
export declare const AchWithdrawalSchedule$inboundSchema: z.ZodType<AchWithdrawalSchedule, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedule$Outbound = {
    bank_relationship?: string | undefined;
    ira_distribution?: IraDistribution$Outbound | null | undefined;
    name?: string | undefined;
    schedule_details?: AchWithdrawalScheduleScheduleDetails$Outbound | null | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedule$outboundSchema: z.ZodType<AchWithdrawalSchedule$Outbound, z.ZodTypeDef, AchWithdrawalSchedule>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedule$ {
    /** @deprecated use `AchWithdrawalSchedule$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedule, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedule$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedule$Outbound, z.ZodTypeDef, AchWithdrawalSchedule>;
    /** @deprecated use `AchWithdrawalSchedule$Outbound` instead. */
    type Outbound = AchWithdrawalSchedule$Outbound;
}
//# sourceMappingURL=achwithdrawalschedule.d.ts.map