import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DepositScheduleDetailsCreate, DepositScheduleDetailsCreate$Outbound } from "./depositscheduledetailscreate.js";
import { ScheduledRetirementContributionCreate, ScheduledRetirementContributionCreate$Outbound } from "./scheduledretirementcontributioncreate.js";
/**
 * The type of retirement contribution.
 */
export declare enum AchDepositScheduleCreateType {
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
export type AchDepositScheduleCreateTypeOpen = OpenEnum<typeof AchDepositScheduleCreateType>;
/**
 * The ira contribution info for an IRA account. Deprecated, see retirement_contribution_details
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type IraContribution = {
    /**
     * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
     */
    taxYear: number;
    /**
     * The type of retirement contribution.
     */
    type: AchDepositScheduleCreateTypeOpen;
};
/**
 * A deposit transfer schedule using the ACH mechanism
 */
export type AchDepositScheduleCreate = {
    /**
     * The name of the bank relationship to be used in the ACH transaction
     */
    bankRelationship: string;
    /**
     * The ira contribution info for an IRA account. Deprecated, see retirement_contribution_details
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    iraContribution?: IraContribution | undefined;
    /**
     * The retirement contribution details for a scheduled deposit
     */
    retirementContribution?: ScheduledRetirementContributionCreate | undefined;
    /**
     * Details of deposit schedule transfers
     */
    scheduleDetails: DepositScheduleDetailsCreate;
};
/** @internal */
export declare const AchDepositScheduleCreateType$inboundSchema: z.ZodType<AchDepositScheduleCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchDepositScheduleCreateType$outboundSchema: z.ZodType<AchDepositScheduleCreateTypeOpen, z.ZodTypeDef, AchDepositScheduleCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleCreateType$ {
    /** @deprecated use `AchDepositScheduleCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleCreateTypeOpen, z.ZodTypeDef, AchDepositScheduleCreateTypeOpen>;
}
/** @internal */
export declare const IraContribution$inboundSchema: z.ZodType<IraContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type IraContribution$Outbound = {
    tax_year: number;
    type: string;
};
/** @internal */
export declare const IraContribution$outboundSchema: z.ZodType<IraContribution$Outbound, z.ZodTypeDef, IraContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IraContribution$ {
    /** @deprecated use `IraContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IraContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `IraContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IraContribution$Outbound, z.ZodTypeDef, IraContribution>;
    /** @deprecated use `IraContribution$Outbound` instead. */
    type Outbound = IraContribution$Outbound;
}
/** @internal */
export declare const AchDepositScheduleCreate$inboundSchema: z.ZodType<AchDepositScheduleCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositScheduleCreate$Outbound = {
    bank_relationship: string;
    ira_contribution?: IraContribution$Outbound | undefined;
    retirement_contribution?: ScheduledRetirementContributionCreate$Outbound | undefined;
    schedule_details: DepositScheduleDetailsCreate$Outbound;
};
/** @internal */
export declare const AchDepositScheduleCreate$outboundSchema: z.ZodType<AchDepositScheduleCreate$Outbound, z.ZodTypeDef, AchDepositScheduleCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleCreate$ {
    /** @deprecated use `AchDepositScheduleCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleCreate$Outbound, z.ZodTypeDef, AchDepositScheduleCreate>;
    /** @deprecated use `AchDepositScheduleCreate$Outbound` instead. */
    type Outbound = AchDepositScheduleCreate$Outbound;
}
//# sourceMappingURL=achdepositschedulecreate.d.ts.map