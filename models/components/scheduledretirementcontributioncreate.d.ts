import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
 */
export declare enum TemporalTaxYear {
    TemporalTaxYearUnspecified = "TEMPORAL_TAX_YEAR_UNSPECIFIED",
    CurrentCalendarYear = "CURRENT_CALENDAR_YEAR",
    MinimumTaxYear = "MINIMUM_TAX_YEAR"
}
/**
 * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
 */
export type TemporalTaxYearOpen = OpenEnum<typeof TemporalTaxYear>;
/**
 * The type of retirement contribution.
 */
export declare enum ScheduledRetirementContributionCreateType {
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
export type ScheduledRetirementContributionCreateTypeOpen = OpenEnum<typeof ScheduledRetirementContributionCreateType>;
/**
 * The retirement contribution details for a scheduled deposit
 */
export type ScheduledRetirementContributionCreate = {
    /**
     * An explicit tax year value. The current year is always valid; and the prior year is valid only before the tax deadline. Must be in "YYYY" format.
     */
    taxYear?: number | undefined;
    /**
     * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
     */
    temporalTaxYear?: TemporalTaxYearOpen | undefined;
    /**
     * The type of retirement contribution.
     */
    type: ScheduledRetirementContributionCreateTypeOpen;
};
/** @internal */
export declare const TemporalTaxYear$inboundSchema: z.ZodType<TemporalTaxYearOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TemporalTaxYear$outboundSchema: z.ZodType<TemporalTaxYearOpen, z.ZodTypeDef, TemporalTaxYearOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TemporalTaxYear$ {
    /** @deprecated use `TemporalTaxYear$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TemporalTaxYearOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TemporalTaxYear$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TemporalTaxYearOpen, z.ZodTypeDef, TemporalTaxYearOpen>;
}
/** @internal */
export declare const ScheduledRetirementContributionCreateType$inboundSchema: z.ZodType<ScheduledRetirementContributionCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ScheduledRetirementContributionCreateType$outboundSchema: z.ZodType<ScheduledRetirementContributionCreateTypeOpen, z.ZodTypeDef, ScheduledRetirementContributionCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ScheduledRetirementContributionCreateType$ {
    /** @deprecated use `ScheduledRetirementContributionCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ScheduledRetirementContributionCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ScheduledRetirementContributionCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ScheduledRetirementContributionCreateTypeOpen, z.ZodTypeDef, ScheduledRetirementContributionCreateTypeOpen>;
}
/** @internal */
export declare const ScheduledRetirementContributionCreate$inboundSchema: z.ZodType<ScheduledRetirementContributionCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ScheduledRetirementContributionCreate$Outbound = {
    tax_year?: number | undefined;
    temporal_tax_year?: string | undefined;
    type: string;
};
/** @internal */
export declare const ScheduledRetirementContributionCreate$outboundSchema: z.ZodType<ScheduledRetirementContributionCreate$Outbound, z.ZodTypeDef, ScheduledRetirementContributionCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ScheduledRetirementContributionCreate$ {
    /** @deprecated use `ScheduledRetirementContributionCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ScheduledRetirementContributionCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ScheduledRetirementContributionCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ScheduledRetirementContributionCreate$Outbound, z.ZodTypeDef, ScheduledRetirementContributionCreate>;
    /** @deprecated use `ScheduledRetirementContributionCreate$Outbound` instead. */
    type Outbound = ScheduledRetirementContributionCreate$Outbound;
}
//# sourceMappingURL=scheduledretirementcontributioncreate.d.ts.map