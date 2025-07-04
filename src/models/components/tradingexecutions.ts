/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  TradingExecutedPrice,
  TradingExecutedPrice$inboundSchema,
  TradingExecutedPrice$Outbound,
  TradingExecutedPrice$outboundSchema,
} from "./tradingexecutedprice.js";

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
export const AccruedInterestAmount$inboundSchema: z.ZodType<
  AccruedInterestAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type AccruedInterestAmount$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const AccruedInterestAmount$outboundSchema: z.ZodType<
  AccruedInterestAmount$Outbound,
  z.ZodTypeDef,
  AccruedInterestAmount
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccruedInterestAmount$ {
  /** @deprecated use `AccruedInterestAmount$inboundSchema` instead. */
  export const inboundSchema = AccruedInterestAmount$inboundSchema;
  /** @deprecated use `AccruedInterestAmount$outboundSchema` instead. */
  export const outboundSchema = AccruedInterestAmount$outboundSchema;
  /** @deprecated use `AccruedInterestAmount$Outbound` instead. */
  export type Outbound = AccruedInterestAmount$Outbound;
}

/** @internal */
export const GrossCreditAmount$inboundSchema: z.ZodType<
  GrossCreditAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type GrossCreditAmount$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const GrossCreditAmount$outboundSchema: z.ZodType<
  GrossCreditAmount$Outbound,
  z.ZodTypeDef,
  GrossCreditAmount
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GrossCreditAmount$ {
  /** @deprecated use `GrossCreditAmount$inboundSchema` instead. */
  export const inboundSchema = GrossCreditAmount$inboundSchema;
  /** @deprecated use `GrossCreditAmount$outboundSchema` instead. */
  export const outboundSchema = GrossCreditAmount$outboundSchema;
  /** @deprecated use `GrossCreditAmount$Outbound` instead. */
  export type Outbound = GrossCreditAmount$Outbound;
}

/** @internal */
export const PrevailingMarketPrice$inboundSchema: z.ZodType<
  PrevailingMarketPrice,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type PrevailingMarketPrice$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const PrevailingMarketPrice$outboundSchema: z.ZodType<
  PrevailingMarketPrice$Outbound,
  z.ZodTypeDef,
  PrevailingMarketPrice
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrevailingMarketPrice$ {
  /** @deprecated use `PrevailingMarketPrice$inboundSchema` instead. */
  export const inboundSchema = PrevailingMarketPrice$inboundSchema;
  /** @deprecated use `PrevailingMarketPrice$outboundSchema` instead. */
  export const outboundSchema = PrevailingMarketPrice$outboundSchema;
  /** @deprecated use `PrevailingMarketPrice$Outbound` instead. */
  export type Outbound = PrevailingMarketPrice$Outbound;
}

/** @internal */
export const Quantity$inboundSchema: z.ZodType<
  Quantity,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type Quantity$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const Quantity$outboundSchema: z.ZodType<
  Quantity$Outbound,
  z.ZodTypeDef,
  Quantity
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Quantity$ {
  /** @deprecated use `Quantity$inboundSchema` instead. */
  export const inboundSchema = Quantity$inboundSchema;
  /** @deprecated use `Quantity$outboundSchema` instead. */
  export const outboundSchema = Quantity$outboundSchema;
  /** @deprecated use `Quantity$Outbound` instead. */
  export type Outbound = Quantity$Outbound;
}

/** @internal */
export const TradingExecutions$inboundSchema: z.ZodType<
  TradingExecutions,
  z.ZodTypeDef,
  unknown
> = z.object({
  accrued_interest_amount: z.nullable(
    z.lazy(() => AccruedInterestAmount$inboundSchema),
  ).optional(),
  executed_prices: z.array(TradingExecutedPrice$inboundSchema).optional(),
  executed_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  gross_credit_amount: z.nullable(z.lazy(() => GrossCreditAmount$inboundSchema))
    .optional(),
  prevailing_market_price: z.nullable(
    z.lazy(() => PrevailingMarketPrice$inboundSchema),
  ).optional(),
  quantity: z.nullable(z.lazy(() => Quantity$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "accrued_interest_amount": "accruedInterestAmount",
    "executed_prices": "executedPrices",
    "executed_time": "executedTime",
    "gross_credit_amount": "grossCreditAmount",
    "prevailing_market_price": "prevailingMarketPrice",
  });
});

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
export const TradingExecutions$outboundSchema: z.ZodType<
  TradingExecutions$Outbound,
  z.ZodTypeDef,
  TradingExecutions
> = z.object({
  accruedInterestAmount: z.nullable(
    z.lazy(() => AccruedInterestAmount$outboundSchema),
  ).optional(),
  executedPrices: z.array(TradingExecutedPrice$outboundSchema).optional(),
  executedTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  grossCreditAmount: z.nullable(z.lazy(() => GrossCreditAmount$outboundSchema))
    .optional(),
  prevailingMarketPrice: z.nullable(
    z.lazy(() => PrevailingMarketPrice$outboundSchema),
  ).optional(),
  quantity: z.nullable(z.lazy(() => Quantity$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    accruedInterestAmount: "accrued_interest_amount",
    executedPrices: "executed_prices",
    executedTime: "executed_time",
    grossCreditAmount: "gross_credit_amount",
    prevailingMarketPrice: "prevailing_market_price",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TradingExecutions$ {
  /** @deprecated use `TradingExecutions$inboundSchema` instead. */
  export const inboundSchema = TradingExecutions$inboundSchema;
  /** @deprecated use `TradingExecutions$outboundSchema` instead. */
  export const outboundSchema = TradingExecutions$outboundSchema;
  /** @deprecated use `TradingExecutions$Outbound` instead. */
  export type Outbound = TradingExecutions$Outbound;
}
