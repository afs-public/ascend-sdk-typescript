/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

/**
 * Annual income range; the low number is exclusive, the high number is inclusive
 */
export enum AnnualIncomeRangeUsd {
  UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
  Under25K = "UNDER_25K",
  From25KTo50K = "FROM_25K_TO_50K",
  From50KTo100K = "FROM_50K_TO_100K",
  From100KTo200K = "FROM_100K_TO_200K",
  From200KTo300K = "FROM_200K_TO_300K",
  From300KTo500K = "FROM_300K_TO_500K",
  From500KTo1M = "FROM_500K_TO_1M",
  From1MTo5M = "FROM_1M_TO_5M",
  Over5M = "OVER_5M",
}
/**
 * Annual income range; the low number is exclusive, the high number is inclusive
 */
export type AnnualIncomeRangeUsdOpen = OpenEnum<typeof AnnualIncomeRangeUsd>;

/**
 * Investment experience.
 */
export enum InvestmentExperience {
  InvestmentExperienceUnspecified = "INVESTMENT_EXPERIENCE_UNSPECIFIED",
  None = "NONE",
  Limited = "LIMITED",
  Good = "GOOD",
  Extensive = "EXTENSIVE",
}
/**
 * Investment experience.
 */
export type InvestmentExperienceOpen = OpenEnum<typeof InvestmentExperience>;

/**
 * Liquid net worth range; the low number is exclusive, the high number is inclusive
 */
export enum LiquidNetWorthRangeUsd {
  UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
  Under25K = "UNDER_25K",
  From25KTo50K = "FROM_25K_TO_50K",
  From50KTo100K = "FROM_50K_TO_100K",
  From100KTo200K = "FROM_100K_TO_200K",
  From200KTo300K = "FROM_200K_TO_300K",
  From300KTo500K = "FROM_300K_TO_500K",
  From500KTo1M = "FROM_500K_TO_1M",
  From1MTo5M = "FROM_1M_TO_5M",
  Over5M = "OVER_5M",
}
/**
 * Liquid net worth range; the low number is exclusive, the high number is inclusive
 */
export type LiquidNetWorthRangeUsdOpen = OpenEnum<
  typeof LiquidNetWorthRangeUsd
>;

/**
 * Total net worth range; the low number is exclusive, the high number is inclusive
 */
export enum TotalNetWorthRangeUsd {
  UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
  Under25K = "UNDER_25K",
  From25KTo50K = "FROM_25K_TO_50K",
  From50KTo100K = "FROM_50K_TO_100K",
  From100KTo200K = "FROM_100K_TO_200K",
  From200KTo300K = "FROM_200K_TO_300K",
  From300KTo500K = "FROM_300K_TO_500K",
  From500KTo1M = "FROM_500K_TO_1M",
  From1MTo5M = "FROM_1M_TO_5M",
  Over5M = "OVER_5M",
}
/**
 * Total net worth range; the low number is exclusive, the high number is inclusive
 */
export type TotalNetWorthRangeUsdOpen = OpenEnum<typeof TotalNetWorthRangeUsd>;

/**
 * A detailed summary of financial and personal details of an investor, to help understand the investor's financial standing, investment experience and risk tolerance.
 */
export type CustomerProfileCreate = {
  /**
   * Annual income range; the low number is exclusive, the high number is inclusive
   */
  annualIncomeRangeUsd?: AnnualIncomeRangeUsdOpen | undefined;
  /**
   * Federal tax bracket percent.
   */
  federalTaxBracket?: number | undefined;
  /**
   * Investment experience.
   */
  investmentExperience?: InvestmentExperienceOpen | undefined;
  /**
   * Liquid net worth range; the low number is exclusive, the high number is inclusive
   */
  liquidNetWorthRangeUsd?: LiquidNetWorthRangeUsdOpen | undefined;
  /**
   * Total net worth range; the low number is exclusive, the high number is inclusive
   */
  totalNetWorthRangeUsd?: TotalNetWorthRangeUsdOpen | undefined;
};

/** @internal */
export const AnnualIncomeRangeUsd$inboundSchema: z.ZodType<
  AnnualIncomeRangeUsdOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AnnualIncomeRangeUsd),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AnnualIncomeRangeUsd$outboundSchema: z.ZodType<
  AnnualIncomeRangeUsdOpen,
  z.ZodTypeDef,
  AnnualIncomeRangeUsdOpen
> = z.union([
  z.nativeEnum(AnnualIncomeRangeUsd),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnnualIncomeRangeUsd$ {
  /** @deprecated use `AnnualIncomeRangeUsd$inboundSchema` instead. */
  export const inboundSchema = AnnualIncomeRangeUsd$inboundSchema;
  /** @deprecated use `AnnualIncomeRangeUsd$outboundSchema` instead. */
  export const outboundSchema = AnnualIncomeRangeUsd$outboundSchema;
}

/** @internal */
export const InvestmentExperience$inboundSchema: z.ZodType<
  InvestmentExperienceOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(InvestmentExperience),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const InvestmentExperience$outboundSchema: z.ZodType<
  InvestmentExperienceOpen,
  z.ZodTypeDef,
  InvestmentExperienceOpen
> = z.union([
  z.nativeEnum(InvestmentExperience),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvestmentExperience$ {
  /** @deprecated use `InvestmentExperience$inboundSchema` instead. */
  export const inboundSchema = InvestmentExperience$inboundSchema;
  /** @deprecated use `InvestmentExperience$outboundSchema` instead. */
  export const outboundSchema = InvestmentExperience$outboundSchema;
}

/** @internal */
export const LiquidNetWorthRangeUsd$inboundSchema: z.ZodType<
  LiquidNetWorthRangeUsdOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(LiquidNetWorthRangeUsd),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const LiquidNetWorthRangeUsd$outboundSchema: z.ZodType<
  LiquidNetWorthRangeUsdOpen,
  z.ZodTypeDef,
  LiquidNetWorthRangeUsdOpen
> = z.union([
  z.nativeEnum(LiquidNetWorthRangeUsd),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiquidNetWorthRangeUsd$ {
  /** @deprecated use `LiquidNetWorthRangeUsd$inboundSchema` instead. */
  export const inboundSchema = LiquidNetWorthRangeUsd$inboundSchema;
  /** @deprecated use `LiquidNetWorthRangeUsd$outboundSchema` instead. */
  export const outboundSchema = LiquidNetWorthRangeUsd$outboundSchema;
}

/** @internal */
export const TotalNetWorthRangeUsd$inboundSchema: z.ZodType<
  TotalNetWorthRangeUsdOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(TotalNetWorthRangeUsd),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const TotalNetWorthRangeUsd$outboundSchema: z.ZodType<
  TotalNetWorthRangeUsdOpen,
  z.ZodTypeDef,
  TotalNetWorthRangeUsdOpen
> = z.union([
  z.nativeEnum(TotalNetWorthRangeUsd),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TotalNetWorthRangeUsd$ {
  /** @deprecated use `TotalNetWorthRangeUsd$inboundSchema` instead. */
  export const inboundSchema = TotalNetWorthRangeUsd$inboundSchema;
  /** @deprecated use `TotalNetWorthRangeUsd$outboundSchema` instead. */
  export const outboundSchema = TotalNetWorthRangeUsd$outboundSchema;
}

/** @internal */
export const CustomerProfileCreate$inboundSchema: z.ZodType<
  CustomerProfileCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  annual_income_range_usd: AnnualIncomeRangeUsd$inboundSchema.optional(),
  federal_tax_bracket: z.number().optional(),
  investment_experience: InvestmentExperience$inboundSchema.optional(),
  liquid_net_worth_range_usd: LiquidNetWorthRangeUsd$inboundSchema.optional(),
  total_net_worth_range_usd: TotalNetWorthRangeUsd$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "annual_income_range_usd": "annualIncomeRangeUsd",
    "federal_tax_bracket": "federalTaxBracket",
    "investment_experience": "investmentExperience",
    "liquid_net_worth_range_usd": "liquidNetWorthRangeUsd",
    "total_net_worth_range_usd": "totalNetWorthRangeUsd",
  });
});

/** @internal */
export type CustomerProfileCreate$Outbound = {
  annual_income_range_usd?: string | undefined;
  federal_tax_bracket?: number | undefined;
  investment_experience?: string | undefined;
  liquid_net_worth_range_usd?: string | undefined;
  total_net_worth_range_usd?: string | undefined;
};

/** @internal */
export const CustomerProfileCreate$outboundSchema: z.ZodType<
  CustomerProfileCreate$Outbound,
  z.ZodTypeDef,
  CustomerProfileCreate
> = z.object({
  annualIncomeRangeUsd: AnnualIncomeRangeUsd$outboundSchema.optional(),
  federalTaxBracket: z.number().optional(),
  investmentExperience: InvestmentExperience$outboundSchema.optional(),
  liquidNetWorthRangeUsd: LiquidNetWorthRangeUsd$outboundSchema.optional(),
  totalNetWorthRangeUsd: TotalNetWorthRangeUsd$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    annualIncomeRangeUsd: "annual_income_range_usd",
    federalTaxBracket: "federal_tax_bracket",
    investmentExperience: "investment_experience",
    liquidNetWorthRangeUsd: "liquid_net_worth_range_usd",
    totalNetWorthRangeUsd: "total_net_worth_range_usd",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerProfileCreate$ {
  /** @deprecated use `CustomerProfileCreate$inboundSchema` instead. */
  export const inboundSchema = CustomerProfileCreate$inboundSchema;
  /** @deprecated use `CustomerProfileCreate$outboundSchema` instead. */
  export const outboundSchema = CustomerProfileCreate$outboundSchema;
  /** @deprecated use `CustomerProfileCreate$Outbound` instead. */
  export type Outbound = CustomerProfileCreate$Outbound;
}
