import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Price of the trade lot
 */
export type LotPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Object containing currency/ price information for the trade lot
 */
export type LotMoney = {
    /**
     * Currency code of the price
     */
    currencyCode?: string | undefined;
    /**
     * Price of the trade lot
     */
    price?: LotPrice | null | undefined;
};
/**
 * Quantity of the trade lot
 */
export type LotQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Trade date of the trade lot
 */
export type LotTradeDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
export type Lot = {
    /**
     * Client supplied id
     */
    id?: string | undefined;
    /**
     * Object containing currency/ price information for the trade lot
     */
    money?: LotMoney | null | undefined;
    /**
     * Quantity of the trade lot
     */
    quantity?: LotQuantity | null | undefined;
    /**
     * Trade date of the trade lot
     */
    tradeDate?: LotTradeDate | null | undefined;
};
/** @internal */
export declare const LotPrice$inboundSchema: z.ZodType<LotPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type LotPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const LotPrice$outboundSchema: z.ZodType<LotPrice$Outbound, z.ZodTypeDef, LotPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LotPrice$ {
    /** @deprecated use `LotPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LotPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `LotPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LotPrice$Outbound, z.ZodTypeDef, LotPrice>;
    /** @deprecated use `LotPrice$Outbound` instead. */
    type Outbound = LotPrice$Outbound;
}
export declare function lotPriceToJSON(lotPrice: LotPrice): string;
export declare function lotPriceFromJSON(jsonString: string): SafeParseResult<LotPrice, SDKValidationError>;
/** @internal */
export declare const LotMoney$inboundSchema: z.ZodType<LotMoney, z.ZodTypeDef, unknown>;
/** @internal */
export type LotMoney$Outbound = {
    currency_code?: string | undefined;
    price?: LotPrice$Outbound | null | undefined;
};
/** @internal */
export declare const LotMoney$outboundSchema: z.ZodType<LotMoney$Outbound, z.ZodTypeDef, LotMoney>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LotMoney$ {
    /** @deprecated use `LotMoney$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LotMoney, z.ZodTypeDef, unknown>;
    /** @deprecated use `LotMoney$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LotMoney$Outbound, z.ZodTypeDef, LotMoney>;
    /** @deprecated use `LotMoney$Outbound` instead. */
    type Outbound = LotMoney$Outbound;
}
export declare function lotMoneyToJSON(lotMoney: LotMoney): string;
export declare function lotMoneyFromJSON(jsonString: string): SafeParseResult<LotMoney, SDKValidationError>;
/** @internal */
export declare const LotQuantity$inboundSchema: z.ZodType<LotQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type LotQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const LotQuantity$outboundSchema: z.ZodType<LotQuantity$Outbound, z.ZodTypeDef, LotQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LotQuantity$ {
    /** @deprecated use `LotQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LotQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `LotQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LotQuantity$Outbound, z.ZodTypeDef, LotQuantity>;
    /** @deprecated use `LotQuantity$Outbound` instead. */
    type Outbound = LotQuantity$Outbound;
}
export declare function lotQuantityToJSON(lotQuantity: LotQuantity): string;
export declare function lotQuantityFromJSON(jsonString: string): SafeParseResult<LotQuantity, SDKValidationError>;
/** @internal */
export declare const LotTradeDate$inboundSchema: z.ZodType<LotTradeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LotTradeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const LotTradeDate$outboundSchema: z.ZodType<LotTradeDate$Outbound, z.ZodTypeDef, LotTradeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LotTradeDate$ {
    /** @deprecated use `LotTradeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LotTradeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LotTradeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LotTradeDate$Outbound, z.ZodTypeDef, LotTradeDate>;
    /** @deprecated use `LotTradeDate$Outbound` instead. */
    type Outbound = LotTradeDate$Outbound;
}
export declare function lotTradeDateToJSON(lotTradeDate: LotTradeDate): string;
export declare function lotTradeDateFromJSON(jsonString: string): SafeParseResult<LotTradeDate, SDKValidationError>;
/** @internal */
export declare const Lot$inboundSchema: z.ZodType<Lot, z.ZodTypeDef, unknown>;
/** @internal */
export type Lot$Outbound = {
    id?: string | undefined;
    money?: LotMoney$Outbound | null | undefined;
    quantity?: LotQuantity$Outbound | null | undefined;
    trade_date?: LotTradeDate$Outbound | null | undefined;
};
/** @internal */
export declare const Lot$outboundSchema: z.ZodType<Lot$Outbound, z.ZodTypeDef, Lot>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Lot$ {
    /** @deprecated use `Lot$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Lot, z.ZodTypeDef, unknown>;
    /** @deprecated use `Lot$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Lot$Outbound, z.ZodTypeDef, Lot>;
    /** @deprecated use `Lot$Outbound` instead. */
    type Outbound = Lot$Outbound;
}
export declare function lotToJSON(lot: Lot): string;
export declare function lotFromJSON(jsonString: string): SafeParseResult<Lot, SDKValidationError>;
//# sourceMappingURL=lot.d.ts.map