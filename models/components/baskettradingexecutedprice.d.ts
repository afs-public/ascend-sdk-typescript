import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The limit price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1. For fixed income orders this is expressed as a percentage of par, which allows up to 5 decimal places in the USD currency.
 */
export type BasketTradingExecutedPricePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders
 */
export declare enum BasketTradingExecutedPriceType {
    PricePerUnit = "PRICE_PER_UNIT"
}
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders
 */
export type BasketTradingExecutedPriceTypeOpen = OpenEnum<typeof BasketTradingExecutedPriceType>;
/**
 * An average price definition
 */
export type BasketTradingExecutedPrice = {
    /**
     * The limit price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1. For fixed income orders this is expressed as a percentage of par, which allows up to 5 decimal places in the USD currency.
     */
    price?: BasketTradingExecutedPricePrice | null | undefined;
    /**
     * The type of this price, which must be PRICE_PER_UNIT for equity orders
     */
    type?: BasketTradingExecutedPriceTypeOpen | undefined;
};
/** @internal */
export declare const BasketTradingExecutedPricePrice$inboundSchema: z.ZodType<BasketTradingExecutedPricePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketTradingExecutedPricePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BasketTradingExecutedPricePrice$outboundSchema: z.ZodType<BasketTradingExecutedPricePrice$Outbound, z.ZodTypeDef, BasketTradingExecutedPricePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketTradingExecutedPricePrice$ {
    /** @deprecated use `BasketTradingExecutedPricePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketTradingExecutedPricePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketTradingExecutedPricePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketTradingExecutedPricePrice$Outbound, z.ZodTypeDef, BasketTradingExecutedPricePrice>;
    /** @deprecated use `BasketTradingExecutedPricePrice$Outbound` instead. */
    type Outbound = BasketTradingExecutedPricePrice$Outbound;
}
export declare function basketTradingExecutedPricePriceToJSON(basketTradingExecutedPricePrice: BasketTradingExecutedPricePrice): string;
export declare function basketTradingExecutedPricePriceFromJSON(jsonString: string): SafeParseResult<BasketTradingExecutedPricePrice, SDKValidationError>;
/** @internal */
export declare const BasketTradingExecutedPriceType$inboundSchema: z.ZodType<BasketTradingExecutedPriceTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketTradingExecutedPriceType$outboundSchema: z.ZodType<BasketTradingExecutedPriceTypeOpen, z.ZodTypeDef, BasketTradingExecutedPriceTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketTradingExecutedPriceType$ {
    /** @deprecated use `BasketTradingExecutedPriceType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketTradingExecutedPriceTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketTradingExecutedPriceType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketTradingExecutedPriceTypeOpen, z.ZodTypeDef, BasketTradingExecutedPriceTypeOpen>;
}
/** @internal */
export declare const BasketTradingExecutedPrice$inboundSchema: z.ZodType<BasketTradingExecutedPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketTradingExecutedPrice$Outbound = {
    price?: BasketTradingExecutedPricePrice$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BasketTradingExecutedPrice$outboundSchema: z.ZodType<BasketTradingExecutedPrice$Outbound, z.ZodTypeDef, BasketTradingExecutedPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketTradingExecutedPrice$ {
    /** @deprecated use `BasketTradingExecutedPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketTradingExecutedPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketTradingExecutedPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketTradingExecutedPrice$Outbound, z.ZodTypeDef, BasketTradingExecutedPrice>;
    /** @deprecated use `BasketTradingExecutedPrice$Outbound` instead. */
    type Outbound = BasketTradingExecutedPrice$Outbound;
}
export declare function basketTradingExecutedPriceToJSON(basketTradingExecutedPrice: BasketTradingExecutedPrice): string;
export declare function basketTradingExecutedPriceFromJSON(jsonString: string): SafeParseResult<BasketTradingExecutedPrice, SDKValidationError>;
//# sourceMappingURL=baskettradingexecutedprice.d.ts.map