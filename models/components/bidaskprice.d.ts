import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The price value
 */
export type BidAskPricePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The calculation type of this price
 */
export declare enum BidAskPriceType {
    PercentageOfPar = "PERCENTAGE_OF_PAR",
    YieldToWorst = "YIELD_TO_WORST",
    YieldToMaturity = "YIELD_TO_MATURITY"
}
/**
 * The calculation type of this price
 */
export type BidAskPriceTypeOpen = OpenEnum<typeof BidAskPriceType>;
/**
 * The definition of a price value and its calculation method as returned in quote data
 */
export type BidAskPrice = {
    /**
     * The price value
     */
    price?: BidAskPricePrice | null | undefined;
    /**
     * The calculation type of this price
     */
    type?: BidAskPriceTypeOpen | undefined;
};
/** @internal */
export declare const BidAskPricePrice$inboundSchema: z.ZodType<BidAskPricePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type BidAskPricePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BidAskPricePrice$outboundSchema: z.ZodType<BidAskPricePrice$Outbound, z.ZodTypeDef, BidAskPricePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BidAskPricePrice$ {
    /** @deprecated use `BidAskPricePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BidAskPricePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `BidAskPricePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BidAskPricePrice$Outbound, z.ZodTypeDef, BidAskPricePrice>;
    /** @deprecated use `BidAskPricePrice$Outbound` instead. */
    type Outbound = BidAskPricePrice$Outbound;
}
export declare function bidAskPricePriceToJSON(bidAskPricePrice: BidAskPricePrice): string;
export declare function bidAskPricePriceFromJSON(jsonString: string): SafeParseResult<BidAskPricePrice, SDKValidationError>;
/** @internal */
export declare const BidAskPriceType$inboundSchema: z.ZodType<BidAskPriceTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BidAskPriceType$outboundSchema: z.ZodType<BidAskPriceTypeOpen, z.ZodTypeDef, BidAskPriceTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BidAskPriceType$ {
    /** @deprecated use `BidAskPriceType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BidAskPriceTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BidAskPriceType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BidAskPriceTypeOpen, z.ZodTypeDef, BidAskPriceTypeOpen>;
}
/** @internal */
export declare const BidAskPrice$inboundSchema: z.ZodType<BidAskPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type BidAskPrice$Outbound = {
    price?: BidAskPricePrice$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BidAskPrice$outboundSchema: z.ZodType<BidAskPrice$Outbound, z.ZodTypeDef, BidAskPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BidAskPrice$ {
    /** @deprecated use `BidAskPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BidAskPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `BidAskPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BidAskPrice$Outbound, z.ZodTypeDef, BidAskPrice>;
    /** @deprecated use `BidAskPrice$Outbound` instead. */
    type Outbound = BidAskPrice$Outbound;
}
export declare function bidAskPriceToJSON(bidAskPrice: BidAskPrice): string;
export declare function bidAskPriceFromJSON(jsonString: string): SafeParseResult<BidAskPrice, SDKValidationError>;
//# sourceMappingURL=bidaskprice.d.ts.map