import * as z from "zod";
/**
 * The max retirement contribution that can be made for the tax year, inclusive of catch-up contributions. Value is dependent on the account's registration type and account holder's age
 */
export type ContributionLimit = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Summed contribution amounts throughout the year
 */
export type RegularAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The remaining regular contribution amount allowed for the tax year. Calculated as the difference between the contribution limit for the account and its regular contribution total to date. This will return zero if the account has no contribution limit.
 */
export type RemainingContributionAllowed = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Rollover contribution amount
 */
export type RolloverAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Regular and rollover contribution amounts for one tax year
 */
export type ContributionSummary = {
    /**
     * The max retirement contribution that can be made for the tax year, inclusive of catch-up contributions. Value is dependent on the account's registration type and account holder's age
     */
    contributionLimit?: ContributionLimit | null | undefined;
    /**
     * The resource name of the contribution summary
     */
    name?: string | undefined;
    /**
     * Summed contribution amounts throughout the year
     */
    regularAmount?: RegularAmount | null | undefined;
    /**
     * The remaining regular contribution amount allowed for the tax year. Calculated as the difference between the contribution limit for the account and its regular contribution total to date. This will return zero if the account has no contribution limit.
     */
    remainingContributionAllowed?: RemainingContributionAllowed | null | undefined;
    /**
     * Rollover contribution amount
     */
    rolloverAmount?: RolloverAmount | null | undefined;
    /**
     * Tax year these contribution amounts are for
     */
    taxYear?: number | undefined;
};
/** @internal */
export declare const ContributionLimit$inboundSchema: z.ZodType<ContributionLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type ContributionLimit$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const ContributionLimit$outboundSchema: z.ZodType<ContributionLimit$Outbound, z.ZodTypeDef, ContributionLimit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContributionLimit$ {
    /** @deprecated use `ContributionLimit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContributionLimit, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContributionLimit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContributionLimit$Outbound, z.ZodTypeDef, ContributionLimit>;
    /** @deprecated use `ContributionLimit$Outbound` instead. */
    type Outbound = ContributionLimit$Outbound;
}
/** @internal */
export declare const RegularAmount$inboundSchema: z.ZodType<RegularAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RegularAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RegularAmount$outboundSchema: z.ZodType<RegularAmount$Outbound, z.ZodTypeDef, RegularAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RegularAmount$ {
    /** @deprecated use `RegularAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RegularAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RegularAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RegularAmount$Outbound, z.ZodTypeDef, RegularAmount>;
    /** @deprecated use `RegularAmount$Outbound` instead. */
    type Outbound = RegularAmount$Outbound;
}
/** @internal */
export declare const RemainingContributionAllowed$inboundSchema: z.ZodType<RemainingContributionAllowed, z.ZodTypeDef, unknown>;
/** @internal */
export type RemainingContributionAllowed$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RemainingContributionAllowed$outboundSchema: z.ZodType<RemainingContributionAllowed$Outbound, z.ZodTypeDef, RemainingContributionAllowed>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemainingContributionAllowed$ {
    /** @deprecated use `RemainingContributionAllowed$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemainingContributionAllowed, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemainingContributionAllowed$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemainingContributionAllowed$Outbound, z.ZodTypeDef, RemainingContributionAllowed>;
    /** @deprecated use `RemainingContributionAllowed$Outbound` instead. */
    type Outbound = RemainingContributionAllowed$Outbound;
}
/** @internal */
export declare const RolloverAmount$inboundSchema: z.ZodType<RolloverAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RolloverAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RolloverAmount$outboundSchema: z.ZodType<RolloverAmount$Outbound, z.ZodTypeDef, RolloverAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RolloverAmount$ {
    /** @deprecated use `RolloverAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RolloverAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RolloverAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RolloverAmount$Outbound, z.ZodTypeDef, RolloverAmount>;
    /** @deprecated use `RolloverAmount$Outbound` instead. */
    type Outbound = RolloverAmount$Outbound;
}
/** @internal */
export declare const ContributionSummary$inboundSchema: z.ZodType<ContributionSummary, z.ZodTypeDef, unknown>;
/** @internal */
export type ContributionSummary$Outbound = {
    contribution_limit?: ContributionLimit$Outbound | null | undefined;
    name?: string | undefined;
    regular_amount?: RegularAmount$Outbound | null | undefined;
    remaining_contribution_allowed?: RemainingContributionAllowed$Outbound | null | undefined;
    rollover_amount?: RolloverAmount$Outbound | null | undefined;
    tax_year?: number | undefined;
};
/** @internal */
export declare const ContributionSummary$outboundSchema: z.ZodType<ContributionSummary$Outbound, z.ZodTypeDef, ContributionSummary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContributionSummary$ {
    /** @deprecated use `ContributionSummary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContributionSummary, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContributionSummary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContributionSummary$Outbound, z.ZodTypeDef, ContributionSummary>;
    /** @deprecated use `ContributionSummary$Outbound` instead. */
    type Outbound = ContributionSummary$Outbound;
}
//# sourceMappingURL=contributionsummary.d.ts.map