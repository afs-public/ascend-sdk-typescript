import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The price value
 */
export type MarkPricePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The calculation type of this price
 */
export declare enum MarkPriceType {
    PercentageOfPar = "PERCENTAGE_OF_PAR",
    DirtyPercentageOfPar = "DIRTY_PERCENTAGE_OF_PAR",
    YieldToWorst = "YIELD_TO_WORST",
    YieldToMaturity = "YIELD_TO_MATURITY"
}
/**
 * The calculation type of this price
 */
export type MarkPriceTypeOpen = OpenEnum<typeof MarkPriceType>;
/**
 * The definition of a price value and its calculation method as returned in mark data
 */
export type MarkPrice = {
    /**
     * The price value
     */
    price?: MarkPricePrice | null | undefined;
    /**
     * The calculation type of this price
     */
    type?: MarkPriceTypeOpen | undefined;
};
/** @internal */
export declare const MarkPricePrice$inboundSchema: z.ZodType<MarkPricePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type MarkPricePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const MarkPricePrice$outboundSchema: z.ZodType<MarkPricePrice$Outbound, z.ZodTypeDef, MarkPricePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MarkPricePrice$ {
    /** @deprecated use `MarkPricePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MarkPricePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `MarkPricePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MarkPricePrice$Outbound, z.ZodTypeDef, MarkPricePrice>;
    /** @deprecated use `MarkPricePrice$Outbound` instead. */
    type Outbound = MarkPricePrice$Outbound;
}
/** @internal */
export declare const MarkPriceType$inboundSchema: z.ZodType<MarkPriceTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const MarkPriceType$outboundSchema: z.ZodType<MarkPriceTypeOpen, z.ZodTypeDef, MarkPriceTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MarkPriceType$ {
    /** @deprecated use `MarkPriceType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MarkPriceTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `MarkPriceType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MarkPriceTypeOpen, z.ZodTypeDef, MarkPriceTypeOpen>;
}
/** @internal */
export declare const MarkPrice$inboundSchema: z.ZodType<MarkPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type MarkPrice$Outbound = {
    price?: MarkPricePrice$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const MarkPrice$outboundSchema: z.ZodType<MarkPrice$Outbound, z.ZodTypeDef, MarkPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MarkPrice$ {
    /** @deprecated use `MarkPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MarkPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `MarkPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MarkPrice$Outbound, z.ZodTypeDef, MarkPrice>;
    /** @deprecated use `MarkPrice$Outbound` instead. */
    type Outbound = MarkPrice$Outbound;
}
//# sourceMappingURL=markprice.d.ts.map