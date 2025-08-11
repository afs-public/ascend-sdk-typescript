import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Summed distribution amounts throughout the year
 */
export type DistributionSummaryRegularAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The required annual distribution amount in USD. This value is calculated as `prior_year_end_account_balance / life_expectancy_factor`.
 */
export type DistributionSummaryAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The life expectancy factor in years based on the account owner(s) age(s). This value is used to calculate the RMD amount. Sourced from IRS Publication 590-B.
 */
export type LifeExpectancyFactor = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account balance at the end of the prior year in USD. This value is used to calculate the RMD amount.
 */
export type PriorYearEndAccountBalance = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The remaining amount required to be distributed for the tax year. Calculated as the difference between the RMD for the account and its regular distribution total to date. This will return zero if the account is not required to make a distribution during the tax year or has already met its distribution requirement.
 */
export type RemainingDistributionRequired = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The required minimum distribution (RMD). Will be unset if the account is not required to make a distribution during the tax year. Distributions are only required for some account registrations and when the account owner reaches a certain age.
 */
export type RequiredMinimumDistribution = {
    /**
     * The required annual distribution amount in USD. This value is calculated as `prior_year_end_account_balance / life_expectancy_factor`.
     */
    amount?: DistributionSummaryAmount | null | undefined;
    /**
     * The life expectancy factor in years based on the account owner(s) age(s). This value is used to calculate the RMD amount. Sourced from IRS Publication 590-B.
     */
    lifeExpectancyFactor?: LifeExpectancyFactor | null | undefined;
    /**
     * The account balance at the end of the prior year in USD. This value is used to calculate the RMD amount.
     */
    priorYearEndAccountBalance?: PriorYearEndAccountBalance | null | undefined;
    /**
     * The remaining amount required to be distributed for the tax year. Calculated as the difference between the RMD for the account and its regular distribution total to date. This will return zero if the account is not required to make a distribution during the tax year or has already met its distribution requirement.
     */
    remainingDistributionRequired?: RemainingDistributionRequired | null | undefined;
};
/**
 * Rollover distribution amount
 */
export type DistributionSummaryRolloverAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Regular and rollover distribution amounts for one tax year
 */
export type DistributionSummary = {
    /**
     * The resource name of the distribution summary
     */
    name?: string | undefined;
    /**
     * Summed distribution amounts throughout the year
     */
    regularAmount?: DistributionSummaryRegularAmount | null | undefined;
    /**
     * The required minimum distribution (RMD). Will be unset if the account is not required to make a distribution during the tax year. Distributions are only required for some account registrations and when the account owner reaches a certain age.
     */
    requiredMinimumDistribution?: RequiredMinimumDistribution | null | undefined;
    /**
     * Rollover distribution amount
     */
    rolloverAmount?: DistributionSummaryRolloverAmount | null | undefined;
    /**
     * Tax year these distribution amounts are for
     */
    taxYear?: number | undefined;
};
/** @internal */
export declare const DistributionSummaryRegularAmount$inboundSchema: z.ZodType<DistributionSummaryRegularAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type DistributionSummaryRegularAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const DistributionSummaryRegularAmount$outboundSchema: z.ZodType<DistributionSummaryRegularAmount$Outbound, z.ZodTypeDef, DistributionSummaryRegularAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DistributionSummaryRegularAmount$ {
    /** @deprecated use `DistributionSummaryRegularAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DistributionSummaryRegularAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `DistributionSummaryRegularAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DistributionSummaryRegularAmount$Outbound, z.ZodTypeDef, DistributionSummaryRegularAmount>;
    /** @deprecated use `DistributionSummaryRegularAmount$Outbound` instead. */
    type Outbound = DistributionSummaryRegularAmount$Outbound;
}
export declare function distributionSummaryRegularAmountToJSON(distributionSummaryRegularAmount: DistributionSummaryRegularAmount): string;
export declare function distributionSummaryRegularAmountFromJSON(jsonString: string): SafeParseResult<DistributionSummaryRegularAmount, SDKValidationError>;
/** @internal */
export declare const DistributionSummaryAmount$inboundSchema: z.ZodType<DistributionSummaryAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type DistributionSummaryAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const DistributionSummaryAmount$outboundSchema: z.ZodType<DistributionSummaryAmount$Outbound, z.ZodTypeDef, DistributionSummaryAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DistributionSummaryAmount$ {
    /** @deprecated use `DistributionSummaryAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DistributionSummaryAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `DistributionSummaryAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DistributionSummaryAmount$Outbound, z.ZodTypeDef, DistributionSummaryAmount>;
    /** @deprecated use `DistributionSummaryAmount$Outbound` instead. */
    type Outbound = DistributionSummaryAmount$Outbound;
}
export declare function distributionSummaryAmountToJSON(distributionSummaryAmount: DistributionSummaryAmount): string;
export declare function distributionSummaryAmountFromJSON(jsonString: string): SafeParseResult<DistributionSummaryAmount, SDKValidationError>;
/** @internal */
export declare const LifeExpectancyFactor$inboundSchema: z.ZodType<LifeExpectancyFactor, z.ZodTypeDef, unknown>;
/** @internal */
export type LifeExpectancyFactor$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const LifeExpectancyFactor$outboundSchema: z.ZodType<LifeExpectancyFactor$Outbound, z.ZodTypeDef, LifeExpectancyFactor>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LifeExpectancyFactor$ {
    /** @deprecated use `LifeExpectancyFactor$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LifeExpectancyFactor, z.ZodTypeDef, unknown>;
    /** @deprecated use `LifeExpectancyFactor$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LifeExpectancyFactor$Outbound, z.ZodTypeDef, LifeExpectancyFactor>;
    /** @deprecated use `LifeExpectancyFactor$Outbound` instead. */
    type Outbound = LifeExpectancyFactor$Outbound;
}
export declare function lifeExpectancyFactorToJSON(lifeExpectancyFactor: LifeExpectancyFactor): string;
export declare function lifeExpectancyFactorFromJSON(jsonString: string): SafeParseResult<LifeExpectancyFactor, SDKValidationError>;
/** @internal */
export declare const PriorYearEndAccountBalance$inboundSchema: z.ZodType<PriorYearEndAccountBalance, z.ZodTypeDef, unknown>;
/** @internal */
export type PriorYearEndAccountBalance$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PriorYearEndAccountBalance$outboundSchema: z.ZodType<PriorYearEndAccountBalance$Outbound, z.ZodTypeDef, PriorYearEndAccountBalance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PriorYearEndAccountBalance$ {
    /** @deprecated use `PriorYearEndAccountBalance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PriorYearEndAccountBalance, z.ZodTypeDef, unknown>;
    /** @deprecated use `PriorYearEndAccountBalance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PriorYearEndAccountBalance$Outbound, z.ZodTypeDef, PriorYearEndAccountBalance>;
    /** @deprecated use `PriorYearEndAccountBalance$Outbound` instead. */
    type Outbound = PriorYearEndAccountBalance$Outbound;
}
export declare function priorYearEndAccountBalanceToJSON(priorYearEndAccountBalance: PriorYearEndAccountBalance): string;
export declare function priorYearEndAccountBalanceFromJSON(jsonString: string): SafeParseResult<PriorYearEndAccountBalance, SDKValidationError>;
/** @internal */
export declare const RemainingDistributionRequired$inboundSchema: z.ZodType<RemainingDistributionRequired, z.ZodTypeDef, unknown>;
/** @internal */
export type RemainingDistributionRequired$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RemainingDistributionRequired$outboundSchema: z.ZodType<RemainingDistributionRequired$Outbound, z.ZodTypeDef, RemainingDistributionRequired>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemainingDistributionRequired$ {
    /** @deprecated use `RemainingDistributionRequired$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemainingDistributionRequired, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemainingDistributionRequired$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemainingDistributionRequired$Outbound, z.ZodTypeDef, RemainingDistributionRequired>;
    /** @deprecated use `RemainingDistributionRequired$Outbound` instead. */
    type Outbound = RemainingDistributionRequired$Outbound;
}
export declare function remainingDistributionRequiredToJSON(remainingDistributionRequired: RemainingDistributionRequired): string;
export declare function remainingDistributionRequiredFromJSON(jsonString: string): SafeParseResult<RemainingDistributionRequired, SDKValidationError>;
/** @internal */
export declare const RequiredMinimumDistribution$inboundSchema: z.ZodType<RequiredMinimumDistribution, z.ZodTypeDef, unknown>;
/** @internal */
export type RequiredMinimumDistribution$Outbound = {
    amount?: DistributionSummaryAmount$Outbound | null | undefined;
    life_expectancy_factor?: LifeExpectancyFactor$Outbound | null | undefined;
    prior_year_end_account_balance?: PriorYearEndAccountBalance$Outbound | null | undefined;
    remaining_distribution_required?: RemainingDistributionRequired$Outbound | null | undefined;
};
/** @internal */
export declare const RequiredMinimumDistribution$outboundSchema: z.ZodType<RequiredMinimumDistribution$Outbound, z.ZodTypeDef, RequiredMinimumDistribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequiredMinimumDistribution$ {
    /** @deprecated use `RequiredMinimumDistribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequiredMinimumDistribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequiredMinimumDistribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequiredMinimumDistribution$Outbound, z.ZodTypeDef, RequiredMinimumDistribution>;
    /** @deprecated use `RequiredMinimumDistribution$Outbound` instead. */
    type Outbound = RequiredMinimumDistribution$Outbound;
}
export declare function requiredMinimumDistributionToJSON(requiredMinimumDistribution: RequiredMinimumDistribution): string;
export declare function requiredMinimumDistributionFromJSON(jsonString: string): SafeParseResult<RequiredMinimumDistribution, SDKValidationError>;
/** @internal */
export declare const DistributionSummaryRolloverAmount$inboundSchema: z.ZodType<DistributionSummaryRolloverAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type DistributionSummaryRolloverAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const DistributionSummaryRolloverAmount$outboundSchema: z.ZodType<DistributionSummaryRolloverAmount$Outbound, z.ZodTypeDef, DistributionSummaryRolloverAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DistributionSummaryRolloverAmount$ {
    /** @deprecated use `DistributionSummaryRolloverAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DistributionSummaryRolloverAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `DistributionSummaryRolloverAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DistributionSummaryRolloverAmount$Outbound, z.ZodTypeDef, DistributionSummaryRolloverAmount>;
    /** @deprecated use `DistributionSummaryRolloverAmount$Outbound` instead. */
    type Outbound = DistributionSummaryRolloverAmount$Outbound;
}
export declare function distributionSummaryRolloverAmountToJSON(distributionSummaryRolloverAmount: DistributionSummaryRolloverAmount): string;
export declare function distributionSummaryRolloverAmountFromJSON(jsonString: string): SafeParseResult<DistributionSummaryRolloverAmount, SDKValidationError>;
/** @internal */
export declare const DistributionSummary$inboundSchema: z.ZodType<DistributionSummary, z.ZodTypeDef, unknown>;
/** @internal */
export type DistributionSummary$Outbound = {
    name?: string | undefined;
    regular_amount?: DistributionSummaryRegularAmount$Outbound | null | undefined;
    required_minimum_distribution?: RequiredMinimumDistribution$Outbound | null | undefined;
    rollover_amount?: DistributionSummaryRolloverAmount$Outbound | null | undefined;
    tax_year?: number | undefined;
};
/** @internal */
export declare const DistributionSummary$outboundSchema: z.ZodType<DistributionSummary$Outbound, z.ZodTypeDef, DistributionSummary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DistributionSummary$ {
    /** @deprecated use `DistributionSummary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DistributionSummary, z.ZodTypeDef, unknown>;
    /** @deprecated use `DistributionSummary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DistributionSummary$Outbound, z.ZodTypeDef, DistributionSummary>;
    /** @deprecated use `DistributionSummary$Outbound` instead. */
    type Outbound = DistributionSummary$Outbound;
}
export declare function distributionSummaryToJSON(distributionSummary: DistributionSummary): string;
export declare function distributionSummaryFromJSON(jsonString: string): SafeParseResult<DistributionSummary, SDKValidationError>;
//# sourceMappingURL=distributionsummary.d.ts.map