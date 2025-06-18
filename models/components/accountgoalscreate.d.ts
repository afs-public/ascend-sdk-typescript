import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The financial goal or purpose that an investor has in mind when making investment decisions; firms often ask investors to specify their investment objectives when opening an account, in order to provide appropriate investment recommendations and manage risk appropriately
 */
export declare enum InvestmentObjective {
    InvestmentObjectiveUnspecified = "INVESTMENT_OBJECTIVE_UNSPECIFIED",
    Balanced = "BALANCED",
    CapitalAppreciation = "CAPITAL_APPRECIATION",
    CapitalPreservation = "CAPITAL_PRESERVATION",
    Growth = "GROWTH",
    GrowthAndIncome = "GROWTH_AND_INCOME",
    GrowthIncome = "GROWTH_INCOME",
    Income = "INCOME",
    LongTermGrowthWithGreaterRisk = "LONG_TERM_GROWTH_WITH_GREATER_RISK",
    LongTermGrowthWithSafety = "LONG_TERM_GROWTH_WITH_SAFETY",
    MaximumGrowth = "MAXIMUM_GROWTH",
    ShortTermGrowthWithRisk = "SHORT_TERM_GROWTH_WITH_RISK",
    Speculation = "SPECULATION",
    Other = "OTHER"
}
/**
 * The financial goal or purpose that an investor has in mind when making investment decisions; firms often ask investors to specify their investment objectives when opening an account, in order to provide appropriate investment recommendations and manage risk appropriately
 */
export type InvestmentObjectiveOpen = OpenEnum<typeof InvestmentObjective>;
/**
 * An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents
 */
export declare enum LiquidityNeeds {
    LiquidityNeedsUnspecified = "LIQUIDITY_NEEDS_UNSPECIFIED",
    VeryImportant = "VERY_IMPORTANT",
    SomewhatImportant = "SOMEWHAT_IMPORTANT",
    NotImportant = "NOT_IMPORTANT"
}
/**
 * An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents
 */
export type LiquidityNeedsOpen = OpenEnum<typeof LiquidityNeeds>;
/**
 * An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses
 */
export declare enum RiskTolerance {
    RiskToleranceUnspecified = "RISK_TOLERANCE_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}
/**
 * An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses
 */
export type RiskToleranceOpen = OpenEnum<typeof RiskTolerance>;
/**
 * TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio
 */
export declare enum TimeHorizon {
    TimeHorizonUnspecified = "TIME_HORIZON_UNSPECIFIED",
    Short = "SHORT",
    Average = "AVERAGE",
    Long = "LONG"
}
/**
 * TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio
 */
export type TimeHorizonOpen = OpenEnum<typeof TimeHorizon>;
/**
 * The account goals on an investor profile.
 */
export type AccountGoalsCreate = {
    /**
     * The financial goal or purpose that an investor has in mind when making investment decisions; firms often ask investors to specify their investment objectives when opening an account, in order to provide appropriate investment recommendations and manage risk appropriately
     */
    investmentObjective?: InvestmentObjectiveOpen | undefined;
    /**
     * An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents
     */
    liquidityNeeds?: LiquidityNeedsOpen | undefined;
    /**
     * An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses
     */
    riskTolerance?: RiskToleranceOpen | undefined;
    /**
     * TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio
     */
    timeHorizon?: TimeHorizonOpen | undefined;
};
/** @internal */
export declare const InvestmentObjective$inboundSchema: z.ZodType<InvestmentObjectiveOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InvestmentObjective$outboundSchema: z.ZodType<InvestmentObjectiveOpen, z.ZodTypeDef, InvestmentObjectiveOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestmentObjective$ {
    /** @deprecated use `InvestmentObjective$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestmentObjectiveOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestmentObjective$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestmentObjectiveOpen, z.ZodTypeDef, InvestmentObjectiveOpen>;
}
/** @internal */
export declare const LiquidityNeeds$inboundSchema: z.ZodType<LiquidityNeedsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LiquidityNeeds$outboundSchema: z.ZodType<LiquidityNeedsOpen, z.ZodTypeDef, LiquidityNeedsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LiquidityNeeds$ {
    /** @deprecated use `LiquidityNeeds$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LiquidityNeedsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LiquidityNeeds$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LiquidityNeedsOpen, z.ZodTypeDef, LiquidityNeedsOpen>;
}
/** @internal */
export declare const RiskTolerance$inboundSchema: z.ZodType<RiskToleranceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RiskTolerance$outboundSchema: z.ZodType<RiskToleranceOpen, z.ZodTypeDef, RiskToleranceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RiskTolerance$ {
    /** @deprecated use `RiskTolerance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RiskToleranceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RiskTolerance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RiskToleranceOpen, z.ZodTypeDef, RiskToleranceOpen>;
}
/** @internal */
export declare const TimeHorizon$inboundSchema: z.ZodType<TimeHorizonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TimeHorizon$outboundSchema: z.ZodType<TimeHorizonOpen, z.ZodTypeDef, TimeHorizonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TimeHorizon$ {
    /** @deprecated use `TimeHorizon$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TimeHorizonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TimeHorizon$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TimeHorizonOpen, z.ZodTypeDef, TimeHorizonOpen>;
}
/** @internal */
export declare const AccountGoalsCreate$inboundSchema: z.ZodType<AccountGoalsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountGoalsCreate$Outbound = {
    investment_objective?: string | undefined;
    liquidity_needs?: string | undefined;
    risk_tolerance?: string | undefined;
    time_horizon?: string | undefined;
};
/** @internal */
export declare const AccountGoalsCreate$outboundSchema: z.ZodType<AccountGoalsCreate$Outbound, z.ZodTypeDef, AccountGoalsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountGoalsCreate$ {
    /** @deprecated use `AccountGoalsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountGoalsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountGoalsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountGoalsCreate$Outbound, z.ZodTypeDef, AccountGoalsCreate>;
    /** @deprecated use `AccountGoalsCreate$Outbound` instead. */
    type Outbound = AccountGoalsCreate$Outbound;
}
//# sourceMappingURL=accountgoalscreate.d.ts.map