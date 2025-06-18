import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * A cash amount in the format of decimal value. An unset or empty value represents a full disbursement
 */
export type TransferScheduleSummaryAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Flag indicating whether this is a deposit or withdrawal transfer
 */
export declare enum Direction {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Deposit = "DEPOSIT",
    Withdrawal = "WITHDRAWAL"
}
/**
 * Flag indicating whether this is a deposit or withdrawal transfer
 */
export type DirectionOpen = OpenEnum<typeof Direction>;
/**
 * The mechanism used for this transfer schedule
 */
export declare enum TransferScheduleSummaryMechanism {
    Ach = "ACH",
    Wire = "WIRE"
}
/**
 * The mechanism used for this transfer schedule
 */
export type TransferScheduleSummaryMechanismOpen = OpenEnum<typeof TransferScheduleSummaryMechanism>;
/**
 * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
 */
export declare enum TransferScheduleSummaryTemporalTaxYear {
    TemporalTaxYearUnspecified = "TEMPORAL_TAX_YEAR_UNSPECIFIED",
    CurrentCalendarYear = "CURRENT_CALENDAR_YEAR",
    MinimumTaxYear = "MINIMUM_TAX_YEAR"
}
/**
 * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
 */
export type TransferScheduleSummaryTemporalTaxYearOpen = OpenEnum<typeof TransferScheduleSummaryTemporalTaxYear>;
/**
 * The type of retirement contribution.
 */
export declare enum TransferScheduleSummaryType {
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
export type TransferScheduleSummaryTypeOpen = OpenEnum<typeof TransferScheduleSummaryType>;
/**
 * The contribution info for a retirement account
 */
export type TransferScheduleSummaryRetirementContribution = {
    /**
     * An explicit tax year value. The current year is always valid; and the prior year is valid only before the tax deadline. Must be in "YYYY" format.
     */
    taxYear?: number | undefined;
    /**
     * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
     */
    temporalTaxYear?: TransferScheduleSummaryTemporalTaxYearOpen | undefined;
    /**
     * The type of retirement contribution.
     */
    type?: TransferScheduleSummaryTypeOpen | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type TransferScheduleSummaryRetirementDistributionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type TransferScheduleSummaryPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The federal tax withholding.
 */
export type TransferScheduleSummaryFederalTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: TransferScheduleSummaryRetirementDistributionAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: TransferScheduleSummaryPercentage | null | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type TransferScheduleSummaryRetirementDistributionPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state tax withholding.
 */
export type TransferScheduleSummaryStateTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: TransferScheduleSummaryRetirementDistributionPercentage | null | undefined;
};
/**
 * The type of retirement distribution.
 */
export declare enum TransferScheduleSummaryRetirementDistributionType {
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
export type TransferScheduleSummaryRetirementDistributionTypeOpen = OpenEnum<typeof TransferScheduleSummaryRetirementDistributionType>;
/**
 * The distribution info for a retirement account
 */
export type TransferScheduleSummaryRetirementDistribution = {
    /**
     * The federal tax withholding.
     */
    federalTaxWithholding?: TransferScheduleSummaryFederalTaxWithholding | null | undefined;
    /**
     * The institution receiving retirement funds when performing a transfer to an identical retirement account type at a different financial institution. This is required for check and wire withdrawals because we can't always identify the institution using the transfer instructions. For cash journals this value will default to "Apex Clearing", regardless of what is passed in here
     */
    receivingInstitution?: string | undefined;
    /**
     * The state tax withholding.
     */
    stateTaxWithholding?: TransferScheduleSummaryStateTaxWithholding | null | undefined;
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
    type?: TransferScheduleSummaryRetirementDistributionTypeOpen | undefined;
};
/**
 * The schedule start date
 */
export type StartDate = {
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
export declare enum TransferScheduleSummaryState {
    Active = "ACTIVE",
    Canceled = "CANCELED",
    Completed = "COMPLETED"
}
/**
 * The state of the represented schedule
 */
export type TransferScheduleSummaryStateOpen = OpenEnum<typeof TransferScheduleSummaryState>;
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export declare enum TransferScheduleSummaryTimeUnit {
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH"
}
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export type TransferScheduleSummaryTimeUnitOpen = OpenEnum<typeof TransferScheduleSummaryTimeUnit>;
/**
 * Common schedule properties
 */
export type ScheduleProperties = {
    /**
     * The number of occurrences (empty or 0 indicates unlimited occurrences)
     */
    occurrences?: number | undefined;
    /**
     * The schedule start date
     */
    startDate?: StartDate | null | undefined;
    /**
     * The state of the represented schedule
     */
    state?: TransferScheduleSummaryStateOpen | undefined;
    /**
     * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    timeUnit?: TransferScheduleSummaryTimeUnitOpen | undefined;
    /**
     * The multiplier used to determine the length of the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    unitMultiplier?: number | undefined;
};
/**
 * A transfer schedule summary that contains all of the common properties a schedules across rails
 */
export type TransferScheduleSummary = {
    /**
     * A cash amount in the format of decimal value. An unset or empty value represents a full disbursement
     */
    amount?: TransferScheduleSummaryAmount | null | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_schedule_id and account
     */
    clientScheduleId?: string | undefined;
    /**
     * Flag indicating whether this is a deposit or withdrawal transfer
     */
    direction?: DirectionOpen | undefined;
    /**
     * The mechanism used for this transfer schedule
     */
    mechanism?: TransferScheduleSummaryMechanismOpen | undefined;
    /**
     * The contribution info for a retirement account
     */
    retirementContribution?: TransferScheduleSummaryRetirementContribution | null | undefined;
    /**
     * The distribution info for a retirement account
     */
    retirementDistribution?: TransferScheduleSummaryRetirementDistribution | null | undefined;
    /**
     * Common schedule properties
     */
    scheduleProperties?: ScheduleProperties | null | undefined;
    /**
     * The name of the schedule resource this detail represents
     */
    transferSchedule?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryAmount$inboundSchema: z.ZodType<TransferScheduleSummaryAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummaryAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryAmount$outboundSchema: z.ZodType<TransferScheduleSummaryAmount$Outbound, z.ZodTypeDef, TransferScheduleSummaryAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryAmount$ {
    /** @deprecated use `TransferScheduleSummaryAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryAmount$Outbound, z.ZodTypeDef, TransferScheduleSummaryAmount>;
    /** @deprecated use `TransferScheduleSummaryAmount$Outbound` instead. */
    type Outbound = TransferScheduleSummaryAmount$Outbound;
}
/** @internal */
export declare const Direction$inboundSchema: z.ZodType<DirectionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Direction$outboundSchema: z.ZodType<DirectionOpen, z.ZodTypeDef, DirectionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Direction$ {
    /** @deprecated use `Direction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Direction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectionOpen, z.ZodTypeDef, DirectionOpen>;
}
/** @internal */
export declare const TransferScheduleSummaryMechanism$inboundSchema: z.ZodType<TransferScheduleSummaryMechanismOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransferScheduleSummaryMechanism$outboundSchema: z.ZodType<TransferScheduleSummaryMechanismOpen, z.ZodTypeDef, TransferScheduleSummaryMechanismOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryMechanism$ {
    /** @deprecated use `TransferScheduleSummaryMechanism$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryMechanismOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryMechanism$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryMechanismOpen, z.ZodTypeDef, TransferScheduleSummaryMechanismOpen>;
}
/** @internal */
export declare const TransferScheduleSummaryTemporalTaxYear$inboundSchema: z.ZodType<TransferScheduleSummaryTemporalTaxYearOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransferScheduleSummaryTemporalTaxYear$outboundSchema: z.ZodType<TransferScheduleSummaryTemporalTaxYearOpen, z.ZodTypeDef, TransferScheduleSummaryTemporalTaxYearOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryTemporalTaxYear$ {
    /** @deprecated use `TransferScheduleSummaryTemporalTaxYear$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryTemporalTaxYearOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryTemporalTaxYear$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryTemporalTaxYearOpen, z.ZodTypeDef, TransferScheduleSummaryTemporalTaxYearOpen>;
}
/** @internal */
export declare const TransferScheduleSummaryType$inboundSchema: z.ZodType<TransferScheduleSummaryTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransferScheduleSummaryType$outboundSchema: z.ZodType<TransferScheduleSummaryTypeOpen, z.ZodTypeDef, TransferScheduleSummaryTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryType$ {
    /** @deprecated use `TransferScheduleSummaryType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryTypeOpen, z.ZodTypeDef, TransferScheduleSummaryTypeOpen>;
}
/** @internal */
export declare const TransferScheduleSummaryRetirementContribution$inboundSchema: z.ZodType<TransferScheduleSummaryRetirementContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummaryRetirementContribution$Outbound = {
    tax_year?: number | undefined;
    temporal_tax_year?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryRetirementContribution$outboundSchema: z.ZodType<TransferScheduleSummaryRetirementContribution$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryRetirementContribution$ {
    /** @deprecated use `TransferScheduleSummaryRetirementContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryRetirementContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryRetirementContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryRetirementContribution$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementContribution>;
    /** @deprecated use `TransferScheduleSummaryRetirementContribution$Outbound` instead. */
    type Outbound = TransferScheduleSummaryRetirementContribution$Outbound;
}
/** @internal */
export declare const TransferScheduleSummaryRetirementDistributionAmount$inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummaryRetirementDistributionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryRetirementDistributionAmount$outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionAmount$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementDistributionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryRetirementDistributionAmount$ {
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionAmount$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementDistributionAmount>;
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionAmount$Outbound` instead. */
    type Outbound = TransferScheduleSummaryRetirementDistributionAmount$Outbound;
}
/** @internal */
export declare const TransferScheduleSummaryPercentage$inboundSchema: z.ZodType<TransferScheduleSummaryPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummaryPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryPercentage$outboundSchema: z.ZodType<TransferScheduleSummaryPercentage$Outbound, z.ZodTypeDef, TransferScheduleSummaryPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryPercentage$ {
    /** @deprecated use `TransferScheduleSummaryPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryPercentage$Outbound, z.ZodTypeDef, TransferScheduleSummaryPercentage>;
    /** @deprecated use `TransferScheduleSummaryPercentage$Outbound` instead. */
    type Outbound = TransferScheduleSummaryPercentage$Outbound;
}
/** @internal */
export declare const TransferScheduleSummaryFederalTaxWithholding$inboundSchema: z.ZodType<TransferScheduleSummaryFederalTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummaryFederalTaxWithholding$Outbound = {
    amount?: TransferScheduleSummaryRetirementDistributionAmount$Outbound | null | undefined;
    percentage?: TransferScheduleSummaryPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryFederalTaxWithholding$outboundSchema: z.ZodType<TransferScheduleSummaryFederalTaxWithholding$Outbound, z.ZodTypeDef, TransferScheduleSummaryFederalTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryFederalTaxWithholding$ {
    /** @deprecated use `TransferScheduleSummaryFederalTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryFederalTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryFederalTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryFederalTaxWithholding$Outbound, z.ZodTypeDef, TransferScheduleSummaryFederalTaxWithholding>;
    /** @deprecated use `TransferScheduleSummaryFederalTaxWithholding$Outbound` instead. */
    type Outbound = TransferScheduleSummaryFederalTaxWithholding$Outbound;
}
/** @internal */
export declare const TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$ {
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount>;
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$Outbound` instead. */
    type Outbound = TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$Outbound;
}
/** @internal */
export declare const TransferScheduleSummaryRetirementDistributionPercentage$inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummaryRetirementDistributionPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryRetirementDistributionPercentage$outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionPercentage$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementDistributionPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryRetirementDistributionPercentage$ {
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionPercentage$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementDistributionPercentage>;
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionPercentage$Outbound` instead. */
    type Outbound = TransferScheduleSummaryRetirementDistributionPercentage$Outbound;
}
/** @internal */
export declare const TransferScheduleSummaryStateTaxWithholding$inboundSchema: z.ZodType<TransferScheduleSummaryStateTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummaryStateTaxWithholding$Outbound = {
    amount?: TransferScheduleSummaryRetirementDistributionStateTaxWithholdingAmount$Outbound | null | undefined;
    percentage?: TransferScheduleSummaryRetirementDistributionPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryStateTaxWithholding$outboundSchema: z.ZodType<TransferScheduleSummaryStateTaxWithholding$Outbound, z.ZodTypeDef, TransferScheduleSummaryStateTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryStateTaxWithholding$ {
    /** @deprecated use `TransferScheduleSummaryStateTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryStateTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryStateTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryStateTaxWithholding$Outbound, z.ZodTypeDef, TransferScheduleSummaryStateTaxWithholding>;
    /** @deprecated use `TransferScheduleSummaryStateTaxWithholding$Outbound` instead. */
    type Outbound = TransferScheduleSummaryStateTaxWithholding$Outbound;
}
/** @internal */
export declare const TransferScheduleSummaryRetirementDistributionType$inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransferScheduleSummaryRetirementDistributionType$outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionTypeOpen, z.ZodTypeDef, TransferScheduleSummaryRetirementDistributionTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryRetirementDistributionType$ {
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryRetirementDistributionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistributionTypeOpen, z.ZodTypeDef, TransferScheduleSummaryRetirementDistributionTypeOpen>;
}
/** @internal */
export declare const TransferScheduleSummaryRetirementDistribution$inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistribution, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummaryRetirementDistribution$Outbound = {
    federal_tax_withholding?: TransferScheduleSummaryFederalTaxWithholding$Outbound | null | undefined;
    receiving_institution?: string | undefined;
    state_tax_withholding?: TransferScheduleSummaryStateTaxWithholding$Outbound | null | undefined;
    state_withholding_waiver?: boolean | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummaryRetirementDistribution$outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistribution$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementDistribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryRetirementDistribution$ {
    /** @deprecated use `TransferScheduleSummaryRetirementDistribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryRetirementDistribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryRetirementDistribution$Outbound, z.ZodTypeDef, TransferScheduleSummaryRetirementDistribution>;
    /** @deprecated use `TransferScheduleSummaryRetirementDistribution$Outbound` instead. */
    type Outbound = TransferScheduleSummaryRetirementDistribution$Outbound;
}
/** @internal */
export declare const StartDate$inboundSchema: z.ZodType<StartDate, z.ZodTypeDef, unknown>;
/** @internal */
export type StartDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const StartDate$outboundSchema: z.ZodType<StartDate$Outbound, z.ZodTypeDef, StartDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StartDate$ {
    /** @deprecated use `StartDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StartDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `StartDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StartDate$Outbound, z.ZodTypeDef, StartDate>;
    /** @deprecated use `StartDate$Outbound` instead. */
    type Outbound = StartDate$Outbound;
}
/** @internal */
export declare const TransferScheduleSummaryState$inboundSchema: z.ZodType<TransferScheduleSummaryStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransferScheduleSummaryState$outboundSchema: z.ZodType<TransferScheduleSummaryStateOpen, z.ZodTypeDef, TransferScheduleSummaryStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryState$ {
    /** @deprecated use `TransferScheduleSummaryState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryStateOpen, z.ZodTypeDef, TransferScheduleSummaryStateOpen>;
}
/** @internal */
export declare const TransferScheduleSummaryTimeUnit$inboundSchema: z.ZodType<TransferScheduleSummaryTimeUnitOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransferScheduleSummaryTimeUnit$outboundSchema: z.ZodType<TransferScheduleSummaryTimeUnitOpen, z.ZodTypeDef, TransferScheduleSummaryTimeUnitOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummaryTimeUnit$ {
    /** @deprecated use `TransferScheduleSummaryTimeUnit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummaryTimeUnitOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummaryTimeUnit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummaryTimeUnitOpen, z.ZodTypeDef, TransferScheduleSummaryTimeUnitOpen>;
}
/** @internal */
export declare const ScheduleProperties$inboundSchema: z.ZodType<ScheduleProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type ScheduleProperties$Outbound = {
    occurrences?: number | undefined;
    start_date?: StartDate$Outbound | null | undefined;
    state?: string | undefined;
    time_unit?: string | undefined;
    unit_multiplier?: number | undefined;
};
/** @internal */
export declare const ScheduleProperties$outboundSchema: z.ZodType<ScheduleProperties$Outbound, z.ZodTypeDef, ScheduleProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ScheduleProperties$ {
    /** @deprecated use `ScheduleProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ScheduleProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `ScheduleProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ScheduleProperties$Outbound, z.ZodTypeDef, ScheduleProperties>;
    /** @deprecated use `ScheduleProperties$Outbound` instead. */
    type Outbound = ScheduleProperties$Outbound;
}
/** @internal */
export declare const TransferScheduleSummary$inboundSchema: z.ZodType<TransferScheduleSummary, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummary$Outbound = {
    amount?: TransferScheduleSummaryAmount$Outbound | null | undefined;
    client_schedule_id?: string | undefined;
    direction?: string | undefined;
    mechanism?: string | undefined;
    retirement_contribution?: TransferScheduleSummaryRetirementContribution$Outbound | null | undefined;
    retirement_distribution?: TransferScheduleSummaryRetirementDistribution$Outbound | null | undefined;
    schedule_properties?: ScheduleProperties$Outbound | null | undefined;
    transfer_schedule?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummary$outboundSchema: z.ZodType<TransferScheduleSummary$Outbound, z.ZodTypeDef, TransferScheduleSummary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummary$ {
    /** @deprecated use `TransferScheduleSummary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummary, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummary$Outbound, z.ZodTypeDef, TransferScheduleSummary>;
    /** @deprecated use `TransferScheduleSummary$Outbound` instead. */
    type Outbound = TransferScheduleSummary$Outbound;
}
//# sourceMappingURL=transferschedulesummary.d.ts.map