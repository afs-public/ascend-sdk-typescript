import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The type of retirement contribution.
 */
export declare enum AchDepositScheduleType {
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
export type AchDepositScheduleTypeOpen = OpenEnum<typeof AchDepositScheduleType>;
/**
 * The ira contribution info for an IRA account. Deprecated, see retirement_contribution_details
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AchDepositScheduleIraContribution = {
    /**
     * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
     */
    taxYear?: number | undefined;
    /**
     * The type of retirement contribution.
     */
    type?: AchDepositScheduleTypeOpen | undefined;
};
/**
 * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
 */
export declare enum AchDepositScheduleTemporalTaxYear {
    TemporalTaxYearUnspecified = "TEMPORAL_TAX_YEAR_UNSPECIFIED",
    CurrentCalendarYear = "CURRENT_CALENDAR_YEAR",
    MinimumTaxYear = "MINIMUM_TAX_YEAR"
}
/**
 * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
 */
export type AchDepositScheduleTemporalTaxYearOpen = OpenEnum<typeof AchDepositScheduleTemporalTaxYear>;
/**
 * The type of retirement contribution.
 */
export declare enum AchDepositScheduleRetirementContributionType {
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
export type AchDepositScheduleRetirementContributionTypeOpen = OpenEnum<typeof AchDepositScheduleRetirementContributionType>;
/**
 * The contribution info for a retirement account
 */
export type AchDepositScheduleRetirementContribution = {
    /**
     * An explicit tax year value. The current year is always valid; and the prior year is valid only before the tax deadline. Must be in "YYYY" format.
     */
    taxYear?: number | undefined;
    /**
     * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
     */
    temporalTaxYear?: AchDepositScheduleTemporalTaxYearOpen | undefined;
    /**
     * The type of retirement contribution.
     */
    type?: AchDepositScheduleRetirementContributionTypeOpen | undefined;
};
/**
 * A cash amount in the format of decimal value
 */
export type AchDepositScheduleAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The schedule end date if there is a finite number of occurrences
 */
export type AchDepositScheduleEndDate = {
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
 * The schedule start date
 */
export type AchDepositScheduleStartDate = {
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
export declare enum AchDepositScheduleState {
    Active = "ACTIVE",
    Canceled = "CANCELED",
    Completed = "COMPLETED"
}
/**
 * The state of the represented schedule
 */
export type AchDepositScheduleStateOpen = OpenEnum<typeof AchDepositScheduleState>;
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export declare enum AchDepositScheduleTimeUnit {
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH"
}
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export type AchDepositScheduleTimeUnitOpen = OpenEnum<typeof AchDepositScheduleTimeUnit>;
/**
 * Common schedule properties
 */
export type AchDepositScheduleScheduleProperties = {
    /**
     * The schedule end date if there is a finite number of occurrences
     */
    endDate?: AchDepositScheduleEndDate | null | undefined;
    /**
     * The number of occurrences (empty or 0 indicates unlimited occurrences)
     */
    occurrences?: number | undefined;
    /**
     * The schedule start date
     */
    startDate?: AchDepositScheduleStartDate | null | undefined;
    /**
     * The state of the represented schedule
     */
    state?: AchDepositScheduleStateOpen | undefined;
    /**
     * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    timeUnit?: AchDepositScheduleTimeUnitOpen | undefined;
    /**
     * The multiplier used to determine the length of the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    unitMultiplier?: number | undefined;
};
/**
 * The transfer schedule details
 */
export type ScheduleDetails = {
    /**
     * A cash amount in the format of decimal value
     */
    amount?: AchDepositScheduleAmount | null | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_schedule_id and account
     */
    clientScheduleId?: string | undefined;
    /**
     * Common schedule properties
     */
    scheduleProperties?: AchDepositScheduleScheduleProperties | null | undefined;
};
/**
 * A deposit transfer schedule using the ACH mechanism
 */
export type AchDepositSchedule = {
    /**
     * The name of the bank relationship to be used in the ACH transaction
     */
    bankRelationship?: string | undefined;
    /**
     * The ira contribution info for an IRA account. Deprecated, see retirement_contribution_details
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    iraContribution?: AchDepositScheduleIraContribution | null | undefined;
    /**
     * The name of the ACH Deposit transfer schedule
     */
    name?: string | undefined;
    /**
     * The contribution info for a retirement account
     */
    retirementContribution?: AchDepositScheduleRetirementContribution | null | undefined;
    /**
     * The transfer schedule details
     */
    scheduleDetails?: ScheduleDetails | null | undefined;
};
/** @internal */
export declare const AchDepositScheduleType$inboundSchema: z.ZodType<AchDepositScheduleTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchDepositScheduleType$outboundSchema: z.ZodType<AchDepositScheduleTypeOpen, z.ZodTypeDef, AchDepositScheduleTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleType$ {
    /** @deprecated use `AchDepositScheduleType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleTypeOpen, z.ZodTypeDef, AchDepositScheduleTypeOpen>;
}
/** @internal */
export declare const AchDepositScheduleIraContribution$inboundSchema: z.ZodType<AchDepositScheduleIraContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositScheduleIraContribution$Outbound = {
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const AchDepositScheduleIraContribution$outboundSchema: z.ZodType<AchDepositScheduleIraContribution$Outbound, z.ZodTypeDef, AchDepositScheduleIraContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleIraContribution$ {
    /** @deprecated use `AchDepositScheduleIraContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleIraContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleIraContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleIraContribution$Outbound, z.ZodTypeDef, AchDepositScheduleIraContribution>;
    /** @deprecated use `AchDepositScheduleIraContribution$Outbound` instead. */
    type Outbound = AchDepositScheduleIraContribution$Outbound;
}
export declare function achDepositScheduleIraContributionToJSON(achDepositScheduleIraContribution: AchDepositScheduleIraContribution): string;
export declare function achDepositScheduleIraContributionFromJSON(jsonString: string): SafeParseResult<AchDepositScheduleIraContribution, SDKValidationError>;
/** @internal */
export declare const AchDepositScheduleTemporalTaxYear$inboundSchema: z.ZodType<AchDepositScheduleTemporalTaxYearOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchDepositScheduleTemporalTaxYear$outboundSchema: z.ZodType<AchDepositScheduleTemporalTaxYearOpen, z.ZodTypeDef, AchDepositScheduleTemporalTaxYearOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleTemporalTaxYear$ {
    /** @deprecated use `AchDepositScheduleTemporalTaxYear$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleTemporalTaxYearOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleTemporalTaxYear$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleTemporalTaxYearOpen, z.ZodTypeDef, AchDepositScheduleTemporalTaxYearOpen>;
}
/** @internal */
export declare const AchDepositScheduleRetirementContributionType$inboundSchema: z.ZodType<AchDepositScheduleRetirementContributionTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchDepositScheduleRetirementContributionType$outboundSchema: z.ZodType<AchDepositScheduleRetirementContributionTypeOpen, z.ZodTypeDef, AchDepositScheduleRetirementContributionTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleRetirementContributionType$ {
    /** @deprecated use `AchDepositScheduleRetirementContributionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleRetirementContributionTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleRetirementContributionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleRetirementContributionTypeOpen, z.ZodTypeDef, AchDepositScheduleRetirementContributionTypeOpen>;
}
/** @internal */
export declare const AchDepositScheduleRetirementContribution$inboundSchema: z.ZodType<AchDepositScheduleRetirementContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositScheduleRetirementContribution$Outbound = {
    tax_year?: number | undefined;
    temporal_tax_year?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const AchDepositScheduleRetirementContribution$outboundSchema: z.ZodType<AchDepositScheduleRetirementContribution$Outbound, z.ZodTypeDef, AchDepositScheduleRetirementContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleRetirementContribution$ {
    /** @deprecated use `AchDepositScheduleRetirementContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleRetirementContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleRetirementContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleRetirementContribution$Outbound, z.ZodTypeDef, AchDepositScheduleRetirementContribution>;
    /** @deprecated use `AchDepositScheduleRetirementContribution$Outbound` instead. */
    type Outbound = AchDepositScheduleRetirementContribution$Outbound;
}
export declare function achDepositScheduleRetirementContributionToJSON(achDepositScheduleRetirementContribution: AchDepositScheduleRetirementContribution): string;
export declare function achDepositScheduleRetirementContributionFromJSON(jsonString: string): SafeParseResult<AchDepositScheduleRetirementContribution, SDKValidationError>;
/** @internal */
export declare const AchDepositScheduleAmount$inboundSchema: z.ZodType<AchDepositScheduleAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositScheduleAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AchDepositScheduleAmount$outboundSchema: z.ZodType<AchDepositScheduleAmount$Outbound, z.ZodTypeDef, AchDepositScheduleAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleAmount$ {
    /** @deprecated use `AchDepositScheduleAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleAmount$Outbound, z.ZodTypeDef, AchDepositScheduleAmount>;
    /** @deprecated use `AchDepositScheduleAmount$Outbound` instead. */
    type Outbound = AchDepositScheduleAmount$Outbound;
}
export declare function achDepositScheduleAmountToJSON(achDepositScheduleAmount: AchDepositScheduleAmount): string;
export declare function achDepositScheduleAmountFromJSON(jsonString: string): SafeParseResult<AchDepositScheduleAmount, SDKValidationError>;
/** @internal */
export declare const AchDepositScheduleEndDate$inboundSchema: z.ZodType<AchDepositScheduleEndDate, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositScheduleEndDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const AchDepositScheduleEndDate$outboundSchema: z.ZodType<AchDepositScheduleEndDate$Outbound, z.ZodTypeDef, AchDepositScheduleEndDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleEndDate$ {
    /** @deprecated use `AchDepositScheduleEndDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleEndDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleEndDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleEndDate$Outbound, z.ZodTypeDef, AchDepositScheduleEndDate>;
    /** @deprecated use `AchDepositScheduleEndDate$Outbound` instead. */
    type Outbound = AchDepositScheduleEndDate$Outbound;
}
export declare function achDepositScheduleEndDateToJSON(achDepositScheduleEndDate: AchDepositScheduleEndDate): string;
export declare function achDepositScheduleEndDateFromJSON(jsonString: string): SafeParseResult<AchDepositScheduleEndDate, SDKValidationError>;
/** @internal */
export declare const AchDepositScheduleStartDate$inboundSchema: z.ZodType<AchDepositScheduleStartDate, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositScheduleStartDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const AchDepositScheduleStartDate$outboundSchema: z.ZodType<AchDepositScheduleStartDate$Outbound, z.ZodTypeDef, AchDepositScheduleStartDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleStartDate$ {
    /** @deprecated use `AchDepositScheduleStartDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleStartDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleStartDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleStartDate$Outbound, z.ZodTypeDef, AchDepositScheduleStartDate>;
    /** @deprecated use `AchDepositScheduleStartDate$Outbound` instead. */
    type Outbound = AchDepositScheduleStartDate$Outbound;
}
export declare function achDepositScheduleStartDateToJSON(achDepositScheduleStartDate: AchDepositScheduleStartDate): string;
export declare function achDepositScheduleStartDateFromJSON(jsonString: string): SafeParseResult<AchDepositScheduleStartDate, SDKValidationError>;
/** @internal */
export declare const AchDepositScheduleState$inboundSchema: z.ZodType<AchDepositScheduleStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchDepositScheduleState$outboundSchema: z.ZodType<AchDepositScheduleStateOpen, z.ZodTypeDef, AchDepositScheduleStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleState$ {
    /** @deprecated use `AchDepositScheduleState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleStateOpen, z.ZodTypeDef, AchDepositScheduleStateOpen>;
}
/** @internal */
export declare const AchDepositScheduleTimeUnit$inboundSchema: z.ZodType<AchDepositScheduleTimeUnitOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchDepositScheduleTimeUnit$outboundSchema: z.ZodType<AchDepositScheduleTimeUnitOpen, z.ZodTypeDef, AchDepositScheduleTimeUnitOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleTimeUnit$ {
    /** @deprecated use `AchDepositScheduleTimeUnit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleTimeUnitOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleTimeUnit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleTimeUnitOpen, z.ZodTypeDef, AchDepositScheduleTimeUnitOpen>;
}
/** @internal */
export declare const AchDepositScheduleScheduleProperties$inboundSchema: z.ZodType<AchDepositScheduleScheduleProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositScheduleScheduleProperties$Outbound = {
    end_date?: AchDepositScheduleEndDate$Outbound | null | undefined;
    occurrences?: number | undefined;
    start_date?: AchDepositScheduleStartDate$Outbound | null | undefined;
    state?: string | undefined;
    time_unit?: string | undefined;
    unit_multiplier?: number | undefined;
};
/** @internal */
export declare const AchDepositScheduleScheduleProperties$outboundSchema: z.ZodType<AchDepositScheduleScheduleProperties$Outbound, z.ZodTypeDef, AchDepositScheduleScheduleProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleScheduleProperties$ {
    /** @deprecated use `AchDepositScheduleScheduleProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleScheduleProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleScheduleProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleScheduleProperties$Outbound, z.ZodTypeDef, AchDepositScheduleScheduleProperties>;
    /** @deprecated use `AchDepositScheduleScheduleProperties$Outbound` instead. */
    type Outbound = AchDepositScheduleScheduleProperties$Outbound;
}
export declare function achDepositScheduleSchedulePropertiesToJSON(achDepositScheduleScheduleProperties: AchDepositScheduleScheduleProperties): string;
export declare function achDepositScheduleSchedulePropertiesFromJSON(jsonString: string): SafeParseResult<AchDepositScheduleScheduleProperties, SDKValidationError>;
/** @internal */
export declare const ScheduleDetails$inboundSchema: z.ZodType<ScheduleDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type ScheduleDetails$Outbound = {
    amount?: AchDepositScheduleAmount$Outbound | null | undefined;
    client_schedule_id?: string | undefined;
    schedule_properties?: AchDepositScheduleScheduleProperties$Outbound | null | undefined;
};
/** @internal */
export declare const ScheduleDetails$outboundSchema: z.ZodType<ScheduleDetails$Outbound, z.ZodTypeDef, ScheduleDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ScheduleDetails$ {
    /** @deprecated use `ScheduleDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ScheduleDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `ScheduleDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ScheduleDetails$Outbound, z.ZodTypeDef, ScheduleDetails>;
    /** @deprecated use `ScheduleDetails$Outbound` instead. */
    type Outbound = ScheduleDetails$Outbound;
}
export declare function scheduleDetailsToJSON(scheduleDetails: ScheduleDetails): string;
export declare function scheduleDetailsFromJSON(jsonString: string): SafeParseResult<ScheduleDetails, SDKValidationError>;
/** @internal */
export declare const AchDepositSchedule$inboundSchema: z.ZodType<AchDepositSchedule, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedule$Outbound = {
    bank_relationship?: string | undefined;
    ira_contribution?: AchDepositScheduleIraContribution$Outbound | null | undefined;
    name?: string | undefined;
    retirement_contribution?: AchDepositScheduleRetirementContribution$Outbound | null | undefined;
    schedule_details?: ScheduleDetails$Outbound | null | undefined;
};
/** @internal */
export declare const AchDepositSchedule$outboundSchema: z.ZodType<AchDepositSchedule$Outbound, z.ZodTypeDef, AchDepositSchedule>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedule$ {
    /** @deprecated use `AchDepositSchedule$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedule, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedule$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedule$Outbound, z.ZodTypeDef, AchDepositSchedule>;
    /** @deprecated use `AchDepositSchedule$Outbound` instead. */
    type Outbound = AchDepositSchedule$Outbound;
}
export declare function achDepositScheduleToJSON(achDepositSchedule: AchDepositSchedule): string;
export declare function achDepositScheduleFromJSON(jsonString: string): SafeParseResult<AchDepositSchedule, SDKValidationError>;
//# sourceMappingURL=achdepositschedule.d.ts.map