import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The limit price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1. For fixed income orders this is expressed as a percentage of par, which allows up to 5 decimal places in the USD currency.
 */
export type Price = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
 */
export declare enum TradingExecutedPriceType {
    PricePerUnit = "PRICE_PER_UNIT",
    PercentageOfPar = "PERCENTAGE_OF_PAR",
    YieldToWorst = "YIELD_TO_WORST",
    YieldToMaturity = "YIELD_TO_MATURITY"
}
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
 */
export type TradingExecutedPriceTypeOpen = OpenEnum<typeof TradingExecutedPriceType>;
/**
 * An average price definition
 */
export type TradingExecutedPrice = {
    /**
     * The limit price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1. For fixed income orders this is expressed as a percentage of par, which allows up to 5 decimal places in the USD currency.
     */
    price?: Price | null | undefined;
    /**
     * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
     */
    type?: TradingExecutedPriceTypeOpen | undefined;
};
/** @internal */
export declare const Price$inboundSchema: z.ZodType<Price, z.ZodTypeDef, unknown>;
/** @internal */
export type Price$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Price$outboundSchema: z.ZodType<Price$Outbound, z.ZodTypeDef, Price>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Price$ {
    /** @deprecated use `Price$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Price, z.ZodTypeDef, unknown>;
    /** @deprecated use `Price$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Price$Outbound, z.ZodTypeDef, Price>;
    /** @deprecated use `Price$Outbound` instead. */
    type Outbound = Price$Outbound;
}
/** @internal */
export declare const TradingExecutedPriceType$inboundSchema: z.ZodType<TradingExecutedPriceTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradingExecutedPriceType$outboundSchema: z.ZodType<TradingExecutedPriceTypeOpen, z.ZodTypeDef, TradingExecutedPriceTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradingExecutedPriceType$ {
    /** @deprecated use `TradingExecutedPriceType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradingExecutedPriceTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradingExecutedPriceType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradingExecutedPriceTypeOpen, z.ZodTypeDef, TradingExecutedPriceTypeOpen>;
}
/** @internal */
export declare const TradingExecutedPrice$inboundSchema: z.ZodType<TradingExecutedPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type TradingExecutedPrice$Outbound = {
    price?: Price$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const TradingExecutedPrice$outboundSchema: z.ZodType<TradingExecutedPrice$Outbound, z.ZodTypeDef, TradingExecutedPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradingExecutedPrice$ {
    /** @deprecated use `TradingExecutedPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradingExecutedPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradingExecutedPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradingExecutedPrice$Outbound, z.ZodTypeDef, TradingExecutedPrice>;
    /** @deprecated use `TradingExecutedPrice$Outbound` instead. */
    type Outbound = TradingExecutedPrice$Outbound;
}
//# sourceMappingURL=tradingexecutedprice.d.ts.map