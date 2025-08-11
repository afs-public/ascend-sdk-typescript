import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The deadline for a previous year contribution. Previous year contributions are allowed when requested on or before this deadline. This field will be unset when previous year contributions are not allowed.
 */
export type PreviousYearDeadline = {
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
 * Retirement contribution type
 */
export declare enum ContributionConstraintsContributionTypeInfoType {
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
 * Retirement contribution type
 */
export type ContributionConstraintsContributionTypeInfoTypeOpen = OpenEnum<typeof ContributionConstraintsContributionTypeInfoType>;
/**
 * Retirement contribution type info
 */
export type ContributionConstraintsContributionTypeInfo = {
    /**
     * Whether this specific retirement contribution may be allowed for the previous year, without consideration of the tax deadline
     */
    previousYearAllowed?: boolean | undefined;
    /**
     * The deadline for a previous year contribution. Previous year contributions are allowed when requested on or before this deadline. This field will be unset when previous year contributions are not allowed.
     */
    previousYearDeadline?: PreviousYearDeadline | null | undefined;
    /**
     * Retirement contribution type
     */
    type?: ContributionConstraintsContributionTypeInfoTypeOpen | undefined;
};
/** @internal */
export declare const PreviousYearDeadline$inboundSchema: z.ZodType<PreviousYearDeadline, z.ZodTypeDef, unknown>;
/** @internal */
export type PreviousYearDeadline$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PreviousYearDeadline$outboundSchema: z.ZodType<PreviousYearDeadline$Outbound, z.ZodTypeDef, PreviousYearDeadline>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PreviousYearDeadline$ {
    /** @deprecated use `PreviousYearDeadline$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PreviousYearDeadline, z.ZodTypeDef, unknown>;
    /** @deprecated use `PreviousYearDeadline$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PreviousYearDeadline$Outbound, z.ZodTypeDef, PreviousYearDeadline>;
    /** @deprecated use `PreviousYearDeadline$Outbound` instead. */
    type Outbound = PreviousYearDeadline$Outbound;
}
export declare function previousYearDeadlineToJSON(previousYearDeadline: PreviousYearDeadline): string;
export declare function previousYearDeadlineFromJSON(jsonString: string): SafeParseResult<PreviousYearDeadline, SDKValidationError>;
/** @internal */
export declare const ContributionConstraintsContributionTypeInfoType$inboundSchema: z.ZodType<ContributionConstraintsContributionTypeInfoTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ContributionConstraintsContributionTypeInfoType$outboundSchema: z.ZodType<ContributionConstraintsContributionTypeInfoTypeOpen, z.ZodTypeDef, ContributionConstraintsContributionTypeInfoTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContributionConstraintsContributionTypeInfoType$ {
    /** @deprecated use `ContributionConstraintsContributionTypeInfoType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContributionConstraintsContributionTypeInfoTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContributionConstraintsContributionTypeInfoType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContributionConstraintsContributionTypeInfoTypeOpen, z.ZodTypeDef, ContributionConstraintsContributionTypeInfoTypeOpen>;
}
/** @internal */
export declare const ContributionConstraintsContributionTypeInfo$inboundSchema: z.ZodType<ContributionConstraintsContributionTypeInfo, z.ZodTypeDef, unknown>;
/** @internal */
export type ContributionConstraintsContributionTypeInfo$Outbound = {
    previous_year_allowed?: boolean | undefined;
    previous_year_deadline?: PreviousYearDeadline$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const ContributionConstraintsContributionTypeInfo$outboundSchema: z.ZodType<ContributionConstraintsContributionTypeInfo$Outbound, z.ZodTypeDef, ContributionConstraintsContributionTypeInfo>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContributionConstraintsContributionTypeInfo$ {
    /** @deprecated use `ContributionConstraintsContributionTypeInfo$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContributionConstraintsContributionTypeInfo, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContributionConstraintsContributionTypeInfo$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContributionConstraintsContributionTypeInfo$Outbound, z.ZodTypeDef, ContributionConstraintsContributionTypeInfo>;
    /** @deprecated use `ContributionConstraintsContributionTypeInfo$Outbound` instead. */
    type Outbound = ContributionConstraintsContributionTypeInfo$Outbound;
}
export declare function contributionConstraintsContributionTypeInfoToJSON(contributionConstraintsContributionTypeInfo: ContributionConstraintsContributionTypeInfo): string;
export declare function contributionConstraintsContributionTypeInfoFromJSON(jsonString: string): SafeParseResult<ContributionConstraintsContributionTypeInfo, SDKValidationError>;
//# sourceMappingURL=contributionconstraintscontributiontypeinfo.d.ts.map