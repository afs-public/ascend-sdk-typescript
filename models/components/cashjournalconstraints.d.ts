import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ContributionConstraintsContributionTypeInfo, ContributionConstraintsContributionTypeInfo$Outbound } from "./contributionconstraintscontributiontypeinfo.js";
import { DistributionConstraintsDistributionTypeInfo, DistributionConstraintsDistributionTypeInfo$Outbound } from "./distributionconstraintsdistributiontypeinfo.js";
/**
 * Contribution constraints for the destination account
 */
export type CashJournalConstraintsContributionConstraints = {
    /**
     * Deprecated! This value is determined based on the current date relative to the tax deadline. It will be inaccurate in cases where the previous year contribution deadline is not the tax deadline (e.g. `RECHARACTERIZATION`). Please refer to the `valid_types.previous_year_deadline` field instead.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    onlyAllowCurrentYear?: boolean | undefined;
    /**
     * Valid contribution types
     */
    validTypes?: Array<ContributionConstraintsContributionTypeInfo> | undefined;
};
/**
 * Distribution constraints for the source account
 */
export type CashJournalConstraintsDistributionConstraints = {
    /**
     * Whether a full distribution withdrawal is allowed
     */
    fullDistributionAllowed?: boolean | undefined;
    /**
     * Valid distribution types
     */
    validTypes?: Array<DistributionConstraintsDistributionTypeInfo> | undefined;
};
/**
 * Retirement constraints for cash journal transfers
 */
export type CashJournalConstraints = {
    /**
     * Contribution constraints for the destination account
     */
    contributionConstraints?: CashJournalConstraintsContributionConstraints | null | undefined;
    /**
     * Distribution constraints for the source account
     */
    distributionConstraints?: CashJournalConstraintsDistributionConstraints | null | undefined;
};
/** @internal */
export declare const CashJournalConstraintsContributionConstraints$inboundSchema: z.ZodType<CashJournalConstraintsContributionConstraints, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalConstraintsContributionConstraints$Outbound = {
    only_allow_current_year?: boolean | undefined;
    valid_types?: Array<ContributionConstraintsContributionTypeInfo$Outbound> | undefined;
};
/** @internal */
export declare const CashJournalConstraintsContributionConstraints$outboundSchema: z.ZodType<CashJournalConstraintsContributionConstraints$Outbound, z.ZodTypeDef, CashJournalConstraintsContributionConstraints>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalConstraintsContributionConstraints$ {
    /** @deprecated use `CashJournalConstraintsContributionConstraints$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalConstraintsContributionConstraints, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalConstraintsContributionConstraints$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalConstraintsContributionConstraints$Outbound, z.ZodTypeDef, CashJournalConstraintsContributionConstraints>;
    /** @deprecated use `CashJournalConstraintsContributionConstraints$Outbound` instead. */
    type Outbound = CashJournalConstraintsContributionConstraints$Outbound;
}
export declare function cashJournalConstraintsContributionConstraintsToJSON(cashJournalConstraintsContributionConstraints: CashJournalConstraintsContributionConstraints): string;
export declare function cashJournalConstraintsContributionConstraintsFromJSON(jsonString: string): SafeParseResult<CashJournalConstraintsContributionConstraints, SDKValidationError>;
/** @internal */
export declare const CashJournalConstraintsDistributionConstraints$inboundSchema: z.ZodType<CashJournalConstraintsDistributionConstraints, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalConstraintsDistributionConstraints$Outbound = {
    full_distribution_allowed?: boolean | undefined;
    valid_types?: Array<DistributionConstraintsDistributionTypeInfo$Outbound> | undefined;
};
/** @internal */
export declare const CashJournalConstraintsDistributionConstraints$outboundSchema: z.ZodType<CashJournalConstraintsDistributionConstraints$Outbound, z.ZodTypeDef, CashJournalConstraintsDistributionConstraints>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalConstraintsDistributionConstraints$ {
    /** @deprecated use `CashJournalConstraintsDistributionConstraints$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalConstraintsDistributionConstraints, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalConstraintsDistributionConstraints$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalConstraintsDistributionConstraints$Outbound, z.ZodTypeDef, CashJournalConstraintsDistributionConstraints>;
    /** @deprecated use `CashJournalConstraintsDistributionConstraints$Outbound` instead. */
    type Outbound = CashJournalConstraintsDistributionConstraints$Outbound;
}
export declare function cashJournalConstraintsDistributionConstraintsToJSON(cashJournalConstraintsDistributionConstraints: CashJournalConstraintsDistributionConstraints): string;
export declare function cashJournalConstraintsDistributionConstraintsFromJSON(jsonString: string): SafeParseResult<CashJournalConstraintsDistributionConstraints, SDKValidationError>;
/** @internal */
export declare const CashJournalConstraints$inboundSchema: z.ZodType<CashJournalConstraints, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalConstraints$Outbound = {
    contribution_constraints?: CashJournalConstraintsContributionConstraints$Outbound | null | undefined;
    distribution_constraints?: CashJournalConstraintsDistributionConstraints$Outbound | null | undefined;
};
/** @internal */
export declare const CashJournalConstraints$outboundSchema: z.ZodType<CashJournalConstraints$Outbound, z.ZodTypeDef, CashJournalConstraints>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalConstraints$ {
    /** @deprecated use `CashJournalConstraints$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalConstraints, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalConstraints$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalConstraints$Outbound, z.ZodTypeDef, CashJournalConstraints>;
    /** @deprecated use `CashJournalConstraints$Outbound` instead. */
    type Outbound = CashJournalConstraints$Outbound;
}
export declare function cashJournalConstraintsToJSON(cashJournalConstraints: CashJournalConstraints): string;
export declare function cashJournalConstraintsFromJSON(jsonString: string): SafeParseResult<CashJournalConstraints, SDKValidationError>;
//# sourceMappingURL=cashjournalconstraints.d.ts.map