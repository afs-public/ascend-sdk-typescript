import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Annual income range; the low number is exclusive, the high number is inclusive
 */
export declare enum AnnualIncomeRangeUsd {
    UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
    Under25K = "UNDER_25K",
    From25KTo50K = "FROM_25K_TO_50K",
    From50KTo100K = "FROM_50K_TO_100K",
    From100KTo200K = "FROM_100K_TO_200K",
    From200KTo300K = "FROM_200K_TO_300K",
    From300KTo500K = "FROM_300K_TO_500K",
    From500KTo1M = "FROM_500K_TO_1M",
    From1MTo5M = "FROM_1M_TO_5M",
    Over5M = "OVER_5M"
}
/**
 * Annual income range; the low number is exclusive, the high number is inclusive
 */
export type AnnualIncomeRangeUsdOpen = OpenEnum<typeof AnnualIncomeRangeUsd>;
/**
 * Investment experience.
 */
export declare enum InvestmentExperience {
    InvestmentExperienceUnspecified = "INVESTMENT_EXPERIENCE_UNSPECIFIED",
    None = "NONE",
    Limited = "LIMITED",
    Good = "GOOD",
    Extensive = "EXTENSIVE"
}
/**
 * Investment experience.
 */
export type InvestmentExperienceOpen = OpenEnum<typeof InvestmentExperience>;
/**
 * Liquid net worth range; the low number is exclusive, the high number is inclusive
 */
export declare enum LiquidNetWorthRangeUsd {
    UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
    Under25K = "UNDER_25K",
    From25KTo50K = "FROM_25K_TO_50K",
    From50KTo100K = "FROM_50K_TO_100K",
    From100KTo200K = "FROM_100K_TO_200K",
    From200KTo300K = "FROM_200K_TO_300K",
    From300KTo500K = "FROM_300K_TO_500K",
    From500KTo1M = "FROM_500K_TO_1M",
    From1MTo5M = "FROM_1M_TO_5M",
    Over5M = "OVER_5M"
}
/**
 * Liquid net worth range; the low number is exclusive, the high number is inclusive
 */
export type LiquidNetWorthRangeUsdOpen = OpenEnum<typeof LiquidNetWorthRangeUsd>;
/**
 * Total net worth range; the low number is exclusive, the high number is inclusive
 */
export declare enum TotalNetWorthRangeUsd {
    UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
    Under25K = "UNDER_25K",
    From25KTo50K = "FROM_25K_TO_50K",
    From50KTo100K = "FROM_50K_TO_100K",
    From100KTo200K = "FROM_100K_TO_200K",
    From200KTo300K = "FROM_200K_TO_300K",
    From300KTo500K = "FROM_300K_TO_500K",
    From500KTo1M = "FROM_500K_TO_1M",
    From1MTo5M = "FROM_1M_TO_5M",
    Over5M = "OVER_5M"
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
export declare const AnnualIncomeRangeUsd$inboundSchema: z.ZodType<AnnualIncomeRangeUsdOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AnnualIncomeRangeUsd$outboundSchema: z.ZodType<AnnualIncomeRangeUsdOpen, z.ZodTypeDef, AnnualIncomeRangeUsdOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AnnualIncomeRangeUsd$ {
    /** @deprecated use `AnnualIncomeRangeUsd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AnnualIncomeRangeUsdOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AnnualIncomeRangeUsd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AnnualIncomeRangeUsdOpen, z.ZodTypeDef, AnnualIncomeRangeUsdOpen>;
}
/** @internal */
export declare const InvestmentExperience$inboundSchema: z.ZodType<InvestmentExperienceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InvestmentExperience$outboundSchema: z.ZodType<InvestmentExperienceOpen, z.ZodTypeDef, InvestmentExperienceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestmentExperience$ {
    /** @deprecated use `InvestmentExperience$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestmentExperienceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestmentExperience$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestmentExperienceOpen, z.ZodTypeDef, InvestmentExperienceOpen>;
}
/** @internal */
export declare const LiquidNetWorthRangeUsd$inboundSchema: z.ZodType<LiquidNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LiquidNetWorthRangeUsd$outboundSchema: z.ZodType<LiquidNetWorthRangeUsdOpen, z.ZodTypeDef, LiquidNetWorthRangeUsdOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LiquidNetWorthRangeUsd$ {
    /** @deprecated use `LiquidNetWorthRangeUsd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LiquidNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LiquidNetWorthRangeUsd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LiquidNetWorthRangeUsdOpen, z.ZodTypeDef, LiquidNetWorthRangeUsdOpen>;
}
/** @internal */
export declare const TotalNetWorthRangeUsd$inboundSchema: z.ZodType<TotalNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TotalNetWorthRangeUsd$outboundSchema: z.ZodType<TotalNetWorthRangeUsdOpen, z.ZodTypeDef, TotalNetWorthRangeUsdOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TotalNetWorthRangeUsd$ {
    /** @deprecated use `TotalNetWorthRangeUsd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TotalNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TotalNetWorthRangeUsd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TotalNetWorthRangeUsdOpen, z.ZodTypeDef, TotalNetWorthRangeUsdOpen>;
}
/** @internal */
export declare const CustomerProfileCreate$inboundSchema: z.ZodType<CustomerProfileCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerProfileCreate$Outbound = {
    annual_income_range_usd?: string | undefined;
    federal_tax_bracket?: number | undefined;
    investment_experience?: string | undefined;
    liquid_net_worth_range_usd?: string | undefined;
    total_net_worth_range_usd?: string | undefined;
};
/** @internal */
export declare const CustomerProfileCreate$outboundSchema: z.ZodType<CustomerProfileCreate$Outbound, z.ZodTypeDef, CustomerProfileCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerProfileCreate$ {
    /** @deprecated use `CustomerProfileCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerProfileCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerProfileCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerProfileCreate$Outbound, z.ZodTypeDef, CustomerProfileCreate>;
    /** @deprecated use `CustomerProfileCreate$Outbound` instead. */
    type Outbound = CustomerProfileCreate$Outbound;
}
//# sourceMappingURL=customerprofilecreate.d.ts.map