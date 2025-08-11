import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TradingExecutedPrice, TradingExecutedPrice$Outbound } from "./tradingexecutedprice.js";
/**
 * The amount of accrued interest exchanged in this execution. Will only be present for orders of Fixed Income assets.
 */
export type AccruedInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The net currency amount exchanged in this transaction, in the order currency. Will only be present for orders of Fixed Income assets.
 */
export type GrossCreditAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The prevailing market price of the asset, without fees or commissions. Will only be present for orders of Fixed Income assets.
 */
export type PrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The quantity of the order. For Equities: measured in shares. For Fixed Income assets: measured in the face value of the currency of the order.
 */
export type Quantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Details of an individual execution within an order
 */
export type TradingExecutions = {
    /**
     * The amount of accrued interest exchanged in this execution. Will only be present for orders of Fixed Income assets.
     */
    accruedInterestAmount?: AccruedInterestAmount | null | undefined;
    /**
     * The prices at which the order was executed. For Equities: there will be one price measured in PRICE_PER_UNIT (using the order currency). For Fixed Income assets: there will always be an entry measured in the PERCENTAGE_OF_PAR (100 X cost / total par value), and there may be additional entries measured in yield.
     */
    executedPrices?: Array<TradingExecutedPrice> | undefined;
    /**
     * The timestamp that this fill was transacted at the market
     */
    executedTime?: Date | null | undefined;
    /**
     * The net currency amount exchanged in this transaction, in the order currency. Will only be present for orders of Fixed Income assets.
     */
    grossCreditAmount?: GrossCreditAmount | null | undefined;
    /**
     * The prevailing market price of the asset, without fees or commissions. Will only be present for orders of Fixed Income assets.
     */
    prevailingMarketPrice?: PrevailingMarketPrice | null | undefined;
    /**
     * The quantity of the order. For Equities: measured in shares. For Fixed Income assets: measured in the face value of the currency of the order.
     */
    quantity?: Quantity | null | undefined;
};
/** @internal */
export declare const AccruedInterestAmount$inboundSchema: z.ZodType<AccruedInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AccruedInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AccruedInterestAmount$outboundSchema: z.ZodType<AccruedInterestAmount$Outbound, z.ZodTypeDef, AccruedInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccruedInterestAmount$ {
    /** @deprecated use `AccruedInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccruedInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccruedInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccruedInterestAmount$Outbound, z.ZodTypeDef, AccruedInterestAmount>;
    /** @deprecated use `AccruedInterestAmount$Outbound` instead. */
    type Outbound = AccruedInterestAmount$Outbound;
}
export declare function accruedInterestAmountToJSON(accruedInterestAmount: AccruedInterestAmount): string;
export declare function accruedInterestAmountFromJSON(jsonString: string): SafeParseResult<AccruedInterestAmount, SDKValidationError>;
/** @internal */
export declare const GrossCreditAmount$inboundSchema: z.ZodType<GrossCreditAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type GrossCreditAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const GrossCreditAmount$outboundSchema: z.ZodType<GrossCreditAmount$Outbound, z.ZodTypeDef, GrossCreditAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrossCreditAmount$ {
    /** @deprecated use `GrossCreditAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrossCreditAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrossCreditAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrossCreditAmount$Outbound, z.ZodTypeDef, GrossCreditAmount>;
    /** @deprecated use `GrossCreditAmount$Outbound` instead. */
    type Outbound = GrossCreditAmount$Outbound;
}
export declare function grossCreditAmountToJSON(grossCreditAmount: GrossCreditAmount): string;
export declare function grossCreditAmountFromJSON(jsonString: string): SafeParseResult<GrossCreditAmount, SDKValidationError>;
/** @internal */
export declare const PrevailingMarketPrice$inboundSchema: z.ZodType<PrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type PrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PrevailingMarketPrice$outboundSchema: z.ZodType<PrevailingMarketPrice$Outbound, z.ZodTypeDef, PrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PrevailingMarketPrice$ {
    /** @deprecated use `PrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `PrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PrevailingMarketPrice$Outbound, z.ZodTypeDef, PrevailingMarketPrice>;
    /** @deprecated use `PrevailingMarketPrice$Outbound` instead. */
    type Outbound = PrevailingMarketPrice$Outbound;
}
export declare function prevailingMarketPriceToJSON(prevailingMarketPrice: PrevailingMarketPrice): string;
export declare function prevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<PrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const Quantity$inboundSchema: z.ZodType<Quantity, z.ZodTypeDef, unknown>;
/** @internal */
export type Quantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Quantity$outboundSchema: z.ZodType<Quantity$Outbound, z.ZodTypeDef, Quantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Quantity$ {
    /** @deprecated use `Quantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Quantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `Quantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Quantity$Outbound, z.ZodTypeDef, Quantity>;
    /** @deprecated use `Quantity$Outbound` instead. */
    type Outbound = Quantity$Outbound;
}
export declare function quantityToJSON(quantity: Quantity): string;
export declare function quantityFromJSON(jsonString: string): SafeParseResult<Quantity, SDKValidationError>;
/** @internal */
export declare const TradingExecutions$inboundSchema: z.ZodType<TradingExecutions, z.ZodTypeDef, unknown>;
/** @internal */
export type TradingExecutions$Outbound = {
    accrued_interest_amount?: AccruedInterestAmount$Outbound | null | undefined;
    executed_prices?: Array<TradingExecutedPrice$Outbound> | undefined;
    executed_time?: string | null | undefined;
    gross_credit_amount?: GrossCreditAmount$Outbound | null | undefined;
    prevailing_market_price?: PrevailingMarketPrice$Outbound | null | undefined;
    quantity?: Quantity$Outbound | null | undefined;
};
/** @internal */
export declare const TradingExecutions$outboundSchema: z.ZodType<TradingExecutions$Outbound, z.ZodTypeDef, TradingExecutions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradingExecutions$ {
    /** @deprecated use `TradingExecutions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradingExecutions, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradingExecutions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradingExecutions$Outbound, z.ZodTypeDef, TradingExecutions>;
    /** @deprecated use `TradingExecutions$Outbound` instead. */
    type Outbound = TradingExecutions$Outbound;
}
export declare function tradingExecutionsToJSON(tradingExecutions: TradingExecutions): string;
export declare function tradingExecutionsFromJSON(jsonString: string): SafeParseResult<TradingExecutions, SDKValidationError>;
//# sourceMappingURL=tradingexecutions.d.ts.map