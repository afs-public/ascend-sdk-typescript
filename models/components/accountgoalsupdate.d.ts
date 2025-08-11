import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The financial goal or purpose that an investor has in mind when making investment decisions; firms often ask investors to specify their investment objectives when opening an account, in order to provide appropriate investment recommendations and manage risk appropriately
 */
export declare enum AccountGoalsUpdateInvestmentObjective {
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
export type AccountGoalsUpdateInvestmentObjectiveOpen = OpenEnum<typeof AccountGoalsUpdateInvestmentObjective>;
/**
 * An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents
 */
export declare enum AccountGoalsUpdateLiquidityNeeds {
    LiquidityNeedsUnspecified = "LIQUIDITY_NEEDS_UNSPECIFIED",
    VeryImportant = "VERY_IMPORTANT",
    SomewhatImportant = "SOMEWHAT_IMPORTANT",
    NotImportant = "NOT_IMPORTANT"
}
/**
 * An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents
 */
export type AccountGoalsUpdateLiquidityNeedsOpen = OpenEnum<typeof AccountGoalsUpdateLiquidityNeeds>;
/**
 * An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses
 */
export declare enum AccountGoalsUpdateRiskTolerance {
    RiskToleranceUnspecified = "RISK_TOLERANCE_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}
/**
 * An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses
 */
export type AccountGoalsUpdateRiskToleranceOpen = OpenEnum<typeof AccountGoalsUpdateRiskTolerance>;
/**
 * TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio
 */
export declare enum AccountGoalsUpdateTimeHorizon {
    TimeHorizonUnspecified = "TIME_HORIZON_UNSPECIFIED",
    Short = "SHORT",
    Average = "AVERAGE",
    Long = "LONG"
}
/**
 * TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio
 */
export type AccountGoalsUpdateTimeHorizonOpen = OpenEnum<typeof AccountGoalsUpdateTimeHorizon>;
/**
 * The account goals on an investor profile.
 */
export type AccountGoalsUpdate = {
    /**
     * The financial goal or purpose that an investor has in mind when making investment decisions; firms often ask investors to specify their investment objectives when opening an account, in order to provide appropriate investment recommendations and manage risk appropriately
     */
    investmentObjective?: AccountGoalsUpdateInvestmentObjectiveOpen | undefined;
    /**
     * An investor’s short-term cash requirements or the need to access funds quickly; it is important to consider an investor’s liquidity needs to ensure that they have sufficient cash or easily liquidated assets available to meet their financial obligations - this may include holding cash or cash equivalents
     */
    liquidityNeeds?: AccountGoalsUpdateLiquidityNeedsOpen | undefined;
    /**
     * An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses
     */
    riskTolerance?: AccountGoalsUpdateRiskToleranceOpen | undefined;
    /**
     * TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio
     */
    timeHorizon?: AccountGoalsUpdateTimeHorizonOpen | undefined;
};
/** @internal */
export declare const AccountGoalsUpdateInvestmentObjective$inboundSchema: z.ZodType<AccountGoalsUpdateInvestmentObjectiveOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountGoalsUpdateInvestmentObjective$outboundSchema: z.ZodType<AccountGoalsUpdateInvestmentObjectiveOpen, z.ZodTypeDef, AccountGoalsUpdateInvestmentObjectiveOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountGoalsUpdateInvestmentObjective$ {
    /** @deprecated use `AccountGoalsUpdateInvestmentObjective$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountGoalsUpdateInvestmentObjectiveOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountGoalsUpdateInvestmentObjective$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountGoalsUpdateInvestmentObjectiveOpen, z.ZodTypeDef, AccountGoalsUpdateInvestmentObjectiveOpen>;
}
/** @internal */
export declare const AccountGoalsUpdateLiquidityNeeds$inboundSchema: z.ZodType<AccountGoalsUpdateLiquidityNeedsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountGoalsUpdateLiquidityNeeds$outboundSchema: z.ZodType<AccountGoalsUpdateLiquidityNeedsOpen, z.ZodTypeDef, AccountGoalsUpdateLiquidityNeedsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountGoalsUpdateLiquidityNeeds$ {
    /** @deprecated use `AccountGoalsUpdateLiquidityNeeds$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountGoalsUpdateLiquidityNeedsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountGoalsUpdateLiquidityNeeds$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountGoalsUpdateLiquidityNeedsOpen, z.ZodTypeDef, AccountGoalsUpdateLiquidityNeedsOpen>;
}
/** @internal */
export declare const AccountGoalsUpdateRiskTolerance$inboundSchema: z.ZodType<AccountGoalsUpdateRiskToleranceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountGoalsUpdateRiskTolerance$outboundSchema: z.ZodType<AccountGoalsUpdateRiskToleranceOpen, z.ZodTypeDef, AccountGoalsUpdateRiskToleranceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountGoalsUpdateRiskTolerance$ {
    /** @deprecated use `AccountGoalsUpdateRiskTolerance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountGoalsUpdateRiskToleranceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountGoalsUpdateRiskTolerance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountGoalsUpdateRiskToleranceOpen, z.ZodTypeDef, AccountGoalsUpdateRiskToleranceOpen>;
}
/** @internal */
export declare const AccountGoalsUpdateTimeHorizon$inboundSchema: z.ZodType<AccountGoalsUpdateTimeHorizonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountGoalsUpdateTimeHorizon$outboundSchema: z.ZodType<AccountGoalsUpdateTimeHorizonOpen, z.ZodTypeDef, AccountGoalsUpdateTimeHorizonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountGoalsUpdateTimeHorizon$ {
    /** @deprecated use `AccountGoalsUpdateTimeHorizon$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountGoalsUpdateTimeHorizonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountGoalsUpdateTimeHorizon$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountGoalsUpdateTimeHorizonOpen, z.ZodTypeDef, AccountGoalsUpdateTimeHorizonOpen>;
}
/** @internal */
export declare const AccountGoalsUpdate$inboundSchema: z.ZodType<AccountGoalsUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountGoalsUpdate$Outbound = {
    investment_objective?: string | undefined;
    liquidity_needs?: string | undefined;
    risk_tolerance?: string | undefined;
    time_horizon?: string | undefined;
};
/** @internal */
export declare const AccountGoalsUpdate$outboundSchema: z.ZodType<AccountGoalsUpdate$Outbound, z.ZodTypeDef, AccountGoalsUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountGoalsUpdate$ {
    /** @deprecated use `AccountGoalsUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountGoalsUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountGoalsUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountGoalsUpdate$Outbound, z.ZodTypeDef, AccountGoalsUpdate>;
    /** @deprecated use `AccountGoalsUpdate$Outbound` instead. */
    type Outbound = AccountGoalsUpdate$Outbound;
}
export declare function accountGoalsUpdateToJSON(accountGoalsUpdate: AccountGoalsUpdate): string;
export declare function accountGoalsUpdateFromJSON(jsonString: string): SafeParseResult<AccountGoalsUpdate, SDKValidationError>;
//# sourceMappingURL=accountgoalsupdate.d.ts.map