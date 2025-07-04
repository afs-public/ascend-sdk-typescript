/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

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
  remainingDistributionRequired?:
    | RemainingDistributionRequired
    | null
    | undefined;
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
export const DistributionSummaryRegularAmount$inboundSchema: z.ZodType<
  DistributionSummaryRegularAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type DistributionSummaryRegularAmount$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const DistributionSummaryRegularAmount$outboundSchema: z.ZodType<
  DistributionSummaryRegularAmount$Outbound,
  z.ZodTypeDef,
  DistributionSummaryRegularAmount
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DistributionSummaryRegularAmount$ {
  /** @deprecated use `DistributionSummaryRegularAmount$inboundSchema` instead. */
  export const inboundSchema = DistributionSummaryRegularAmount$inboundSchema;
  /** @deprecated use `DistributionSummaryRegularAmount$outboundSchema` instead. */
  export const outboundSchema = DistributionSummaryRegularAmount$outboundSchema;
  /** @deprecated use `DistributionSummaryRegularAmount$Outbound` instead. */
  export type Outbound = DistributionSummaryRegularAmount$Outbound;
}

/** @internal */
export const DistributionSummaryAmount$inboundSchema: z.ZodType<
  DistributionSummaryAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type DistributionSummaryAmount$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const DistributionSummaryAmount$outboundSchema: z.ZodType<
  DistributionSummaryAmount$Outbound,
  z.ZodTypeDef,
  DistributionSummaryAmount
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DistributionSummaryAmount$ {
  /** @deprecated use `DistributionSummaryAmount$inboundSchema` instead. */
  export const inboundSchema = DistributionSummaryAmount$inboundSchema;
  /** @deprecated use `DistributionSummaryAmount$outboundSchema` instead. */
  export const outboundSchema = DistributionSummaryAmount$outboundSchema;
  /** @deprecated use `DistributionSummaryAmount$Outbound` instead. */
  export type Outbound = DistributionSummaryAmount$Outbound;
}

/** @internal */
export const LifeExpectancyFactor$inboundSchema: z.ZodType<
  LifeExpectancyFactor,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type LifeExpectancyFactor$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const LifeExpectancyFactor$outboundSchema: z.ZodType<
  LifeExpectancyFactor$Outbound,
  z.ZodTypeDef,
  LifeExpectancyFactor
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LifeExpectancyFactor$ {
  /** @deprecated use `LifeExpectancyFactor$inboundSchema` instead. */
  export const inboundSchema = LifeExpectancyFactor$inboundSchema;
  /** @deprecated use `LifeExpectancyFactor$outboundSchema` instead. */
  export const outboundSchema = LifeExpectancyFactor$outboundSchema;
  /** @deprecated use `LifeExpectancyFactor$Outbound` instead. */
  export type Outbound = LifeExpectancyFactor$Outbound;
}

/** @internal */
export const PriorYearEndAccountBalance$inboundSchema: z.ZodType<
  PriorYearEndAccountBalance,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type PriorYearEndAccountBalance$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const PriorYearEndAccountBalance$outboundSchema: z.ZodType<
  PriorYearEndAccountBalance$Outbound,
  z.ZodTypeDef,
  PriorYearEndAccountBalance
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PriorYearEndAccountBalance$ {
  /** @deprecated use `PriorYearEndAccountBalance$inboundSchema` instead. */
  export const inboundSchema = PriorYearEndAccountBalance$inboundSchema;
  /** @deprecated use `PriorYearEndAccountBalance$outboundSchema` instead. */
  export const outboundSchema = PriorYearEndAccountBalance$outboundSchema;
  /** @deprecated use `PriorYearEndAccountBalance$Outbound` instead. */
  export type Outbound = PriorYearEndAccountBalance$Outbound;
}

/** @internal */
export const RemainingDistributionRequired$inboundSchema: z.ZodType<
  RemainingDistributionRequired,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type RemainingDistributionRequired$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const RemainingDistributionRequired$outboundSchema: z.ZodType<
  RemainingDistributionRequired$Outbound,
  z.ZodTypeDef,
  RemainingDistributionRequired
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RemainingDistributionRequired$ {
  /** @deprecated use `RemainingDistributionRequired$inboundSchema` instead. */
  export const inboundSchema = RemainingDistributionRequired$inboundSchema;
  /** @deprecated use `RemainingDistributionRequired$outboundSchema` instead. */
  export const outboundSchema = RemainingDistributionRequired$outboundSchema;
  /** @deprecated use `RemainingDistributionRequired$Outbound` instead. */
  export type Outbound = RemainingDistributionRequired$Outbound;
}

/** @internal */
export const RequiredMinimumDistribution$inboundSchema: z.ZodType<
  RequiredMinimumDistribution,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.nullable(z.lazy(() => DistributionSummaryAmount$inboundSchema))
    .optional(),
  life_expectancy_factor: z.nullable(
    z.lazy(() => LifeExpectancyFactor$inboundSchema),
  ).optional(),
  prior_year_end_account_balance: z.nullable(
    z.lazy(() => PriorYearEndAccountBalance$inboundSchema),
  ).optional(),
  remaining_distribution_required: z.nullable(
    z.lazy(() => RemainingDistributionRequired$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "life_expectancy_factor": "lifeExpectancyFactor",
    "prior_year_end_account_balance": "priorYearEndAccountBalance",
    "remaining_distribution_required": "remainingDistributionRequired",
  });
});

/** @internal */
export type RequiredMinimumDistribution$Outbound = {
  amount?: DistributionSummaryAmount$Outbound | null | undefined;
  life_expectancy_factor?: LifeExpectancyFactor$Outbound | null | undefined;
  prior_year_end_account_balance?:
    | PriorYearEndAccountBalance$Outbound
    | null
    | undefined;
  remaining_distribution_required?:
    | RemainingDistributionRequired$Outbound
    | null
    | undefined;
};

/** @internal */
export const RequiredMinimumDistribution$outboundSchema: z.ZodType<
  RequiredMinimumDistribution$Outbound,
  z.ZodTypeDef,
  RequiredMinimumDistribution
> = z.object({
  amount: z.nullable(z.lazy(() => DistributionSummaryAmount$outboundSchema))
    .optional(),
  lifeExpectancyFactor: z.nullable(
    z.lazy(() => LifeExpectancyFactor$outboundSchema),
  ).optional(),
  priorYearEndAccountBalance: z.nullable(
    z.lazy(() => PriorYearEndAccountBalance$outboundSchema),
  ).optional(),
  remainingDistributionRequired: z.nullable(
    z.lazy(() => RemainingDistributionRequired$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    lifeExpectancyFactor: "life_expectancy_factor",
    priorYearEndAccountBalance: "prior_year_end_account_balance",
    remainingDistributionRequired: "remaining_distribution_required",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequiredMinimumDistribution$ {
  /** @deprecated use `RequiredMinimumDistribution$inboundSchema` instead. */
  export const inboundSchema = RequiredMinimumDistribution$inboundSchema;
  /** @deprecated use `RequiredMinimumDistribution$outboundSchema` instead. */
  export const outboundSchema = RequiredMinimumDistribution$outboundSchema;
  /** @deprecated use `RequiredMinimumDistribution$Outbound` instead. */
  export type Outbound = RequiredMinimumDistribution$Outbound;
}

/** @internal */
export const DistributionSummaryRolloverAmount$inboundSchema: z.ZodType<
  DistributionSummaryRolloverAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type DistributionSummaryRolloverAmount$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const DistributionSummaryRolloverAmount$outboundSchema: z.ZodType<
  DistributionSummaryRolloverAmount$Outbound,
  z.ZodTypeDef,
  DistributionSummaryRolloverAmount
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DistributionSummaryRolloverAmount$ {
  /** @deprecated use `DistributionSummaryRolloverAmount$inboundSchema` instead. */
  export const inboundSchema = DistributionSummaryRolloverAmount$inboundSchema;
  /** @deprecated use `DistributionSummaryRolloverAmount$outboundSchema` instead. */
  export const outboundSchema =
    DistributionSummaryRolloverAmount$outboundSchema;
  /** @deprecated use `DistributionSummaryRolloverAmount$Outbound` instead. */
  export type Outbound = DistributionSummaryRolloverAmount$Outbound;
}

/** @internal */
export const DistributionSummary$inboundSchema: z.ZodType<
  DistributionSummary,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  regular_amount: z.nullable(
    z.lazy(() => DistributionSummaryRegularAmount$inboundSchema),
  ).optional(),
  required_minimum_distribution: z.nullable(
    z.lazy(() => RequiredMinimumDistribution$inboundSchema),
  ).optional(),
  rollover_amount: z.nullable(
    z.lazy(() => DistributionSummaryRolloverAmount$inboundSchema),
  ).optional(),
  tax_year: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "regular_amount": "regularAmount",
    "required_minimum_distribution": "requiredMinimumDistribution",
    "rollover_amount": "rolloverAmount",
    "tax_year": "taxYear",
  });
});

/** @internal */
export type DistributionSummary$Outbound = {
  name?: string | undefined;
  regular_amount?: DistributionSummaryRegularAmount$Outbound | null | undefined;
  required_minimum_distribution?:
    | RequiredMinimumDistribution$Outbound
    | null
    | undefined;
  rollover_amount?:
    | DistributionSummaryRolloverAmount$Outbound
    | null
    | undefined;
  tax_year?: number | undefined;
};

/** @internal */
export const DistributionSummary$outboundSchema: z.ZodType<
  DistributionSummary$Outbound,
  z.ZodTypeDef,
  DistributionSummary
> = z.object({
  name: z.string().optional(),
  regularAmount: z.nullable(
    z.lazy(() => DistributionSummaryRegularAmount$outboundSchema),
  ).optional(),
  requiredMinimumDistribution: z.nullable(
    z.lazy(() => RequiredMinimumDistribution$outboundSchema),
  ).optional(),
  rolloverAmount: z.nullable(
    z.lazy(() => DistributionSummaryRolloverAmount$outboundSchema),
  ).optional(),
  taxYear: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    regularAmount: "regular_amount",
    requiredMinimumDistribution: "required_minimum_distribution",
    rolloverAmount: "rollover_amount",
    taxYear: "tax_year",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DistributionSummary$ {
  /** @deprecated use `DistributionSummary$inboundSchema` instead. */
  export const inboundSchema = DistributionSummary$inboundSchema;
  /** @deprecated use `DistributionSummary$outboundSchema` instead. */
  export const outboundSchema = DistributionSummary$outboundSchema;
  /** @deprecated use `DistributionSummary$Outbound` instead. */
  export type Outbound = DistributionSummary$Outbound;
}
