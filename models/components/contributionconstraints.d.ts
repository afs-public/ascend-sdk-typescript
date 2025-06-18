import * as z from "zod";
import { ContributionConstraintsContributionTypeInfo, ContributionConstraintsContributionTypeInfo$Outbound } from "./contributionconstraintscontributiontypeinfo.js";
/**
 * Retirement contribution constraints when depositing money into an Apex account
 */
export type ContributionConstraints = {
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
/** @internal */
export declare const ContributionConstraints$inboundSchema: z.ZodType<ContributionConstraints, z.ZodTypeDef, unknown>;
/** @internal */
export type ContributionConstraints$Outbound = {
    only_allow_current_year?: boolean | undefined;
    valid_types?: Array<ContributionConstraintsContributionTypeInfo$Outbound> | undefined;
};
/** @internal */
export declare const ContributionConstraints$outboundSchema: z.ZodType<ContributionConstraints$Outbound, z.ZodTypeDef, ContributionConstraints>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContributionConstraints$ {
    /** @deprecated use `ContributionConstraints$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContributionConstraints, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContributionConstraints$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContributionConstraints$Outbound, z.ZodTypeDef, ContributionConstraints>;
    /** @deprecated use `ContributionConstraints$Outbound` instead. */
    type Outbound = ContributionConstraints$Outbound;
}
//# sourceMappingURL=contributionconstraints.d.ts.map