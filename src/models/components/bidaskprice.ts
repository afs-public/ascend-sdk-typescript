/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

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
export enum BidAskPriceType {
  PercentageOfPar = "PERCENTAGE_OF_PAR",
  YieldToWorst = "YIELD_TO_WORST",
  YieldToMaturity = "YIELD_TO_MATURITY",
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
export const BidAskPricePrice$inboundSchema: z.ZodType<
  BidAskPricePrice,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type BidAskPricePrice$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const BidAskPricePrice$outboundSchema: z.ZodType<
  BidAskPricePrice$Outbound,
  z.ZodTypeDef,
  BidAskPricePrice
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BidAskPricePrice$ {
  /** @deprecated use `BidAskPricePrice$inboundSchema` instead. */
  export const inboundSchema = BidAskPricePrice$inboundSchema;
  /** @deprecated use `BidAskPricePrice$outboundSchema` instead. */
  export const outboundSchema = BidAskPricePrice$outboundSchema;
  /** @deprecated use `BidAskPricePrice$Outbound` instead. */
  export type Outbound = BidAskPricePrice$Outbound;
}

/** @internal */
export const BidAskPriceType$inboundSchema: z.ZodType<
  BidAskPriceTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(BidAskPriceType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const BidAskPriceType$outboundSchema: z.ZodType<
  BidAskPriceTypeOpen,
  z.ZodTypeDef,
  BidAskPriceTypeOpen
> = z.union([
  z.nativeEnum(BidAskPriceType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BidAskPriceType$ {
  /** @deprecated use `BidAskPriceType$inboundSchema` instead. */
  export const inboundSchema = BidAskPriceType$inboundSchema;
  /** @deprecated use `BidAskPriceType$outboundSchema` instead. */
  export const outboundSchema = BidAskPriceType$outboundSchema;
}

/** @internal */
export const BidAskPrice$inboundSchema: z.ZodType<
  BidAskPrice,
  z.ZodTypeDef,
  unknown
> = z.object({
  price: z.nullable(z.lazy(() => BidAskPricePrice$inboundSchema)).optional(),
  type: BidAskPriceType$inboundSchema.optional(),
});

/** @internal */
export type BidAskPrice$Outbound = {
  price?: BidAskPricePrice$Outbound | null | undefined;
  type?: string | undefined;
};

/** @internal */
export const BidAskPrice$outboundSchema: z.ZodType<
  BidAskPrice$Outbound,
  z.ZodTypeDef,
  BidAskPrice
> = z.object({
  price: z.nullable(z.lazy(() => BidAskPricePrice$outboundSchema)).optional(),
  type: BidAskPriceType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BidAskPrice$ {
  /** @deprecated use `BidAskPrice$inboundSchema` instead. */
  export const inboundSchema = BidAskPrice$inboundSchema;
  /** @deprecated use `BidAskPrice$outboundSchema` instead. */
  export const outboundSchema = BidAskPrice$outboundSchema;
  /** @deprecated use `BidAskPrice$Outbound` instead. */
  export type Outbound = BidAskPrice$Outbound;
}
