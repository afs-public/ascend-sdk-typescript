import * as z from "zod";
/**
 * The notional value the order is not reasonably expected to exceed in USD. This value is always positive.
 */
export type ExpectedNotionalCeilingAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * A summary of an open order.
 */
export type CalculateCashBalanceResponseOpenOrderSummary = {
    /**
     * The asset for the open order.
     */
    asset?: string | undefined;
    /**
     * The notional value the order is not reasonably expected to exceed in USD. This value is always positive.
     */
    expectedNotionalCeilingAmount?: ExpectedNotionalCeilingAmount | null | undefined;
};
/** @internal */
export declare const ExpectedNotionalCeilingAmount$inboundSchema: z.ZodType<ExpectedNotionalCeilingAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type ExpectedNotionalCeilingAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const ExpectedNotionalCeilingAmount$outboundSchema: z.ZodType<ExpectedNotionalCeilingAmount$Outbound, z.ZodTypeDef, ExpectedNotionalCeilingAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExpectedNotionalCeilingAmount$ {
    /** @deprecated use `ExpectedNotionalCeilingAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExpectedNotionalCeilingAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExpectedNotionalCeilingAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExpectedNotionalCeilingAmount$Outbound, z.ZodTypeDef, ExpectedNotionalCeilingAmount>;
    /** @deprecated use `ExpectedNotionalCeilingAmount$Outbound` instead. */
    type Outbound = ExpectedNotionalCeilingAmount$Outbound;
}
/** @internal */
export declare const CalculateCashBalanceResponseOpenOrderSummary$inboundSchema: z.ZodType<CalculateCashBalanceResponseOpenOrderSummary, z.ZodTypeDef, unknown>;
/** @internal */
export type CalculateCashBalanceResponseOpenOrderSummary$Outbound = {
    asset?: string | undefined;
    expected_notional_ceiling_amount?: ExpectedNotionalCeilingAmount$Outbound | null | undefined;
};
/** @internal */
export declare const CalculateCashBalanceResponseOpenOrderSummary$outboundSchema: z.ZodType<CalculateCashBalanceResponseOpenOrderSummary$Outbound, z.ZodTypeDef, CalculateCashBalanceResponseOpenOrderSummary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CalculateCashBalanceResponseOpenOrderSummary$ {
    /** @deprecated use `CalculateCashBalanceResponseOpenOrderSummary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CalculateCashBalanceResponseOpenOrderSummary, z.ZodTypeDef, unknown>;
    /** @deprecated use `CalculateCashBalanceResponseOpenOrderSummary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CalculateCashBalanceResponseOpenOrderSummary$Outbound, z.ZodTypeDef, CalculateCashBalanceResponseOpenOrderSummary>;
    /** @deprecated use `CalculateCashBalanceResponseOpenOrderSummary$Outbound` instead. */
    type Outbound = CalculateCashBalanceResponseOpenOrderSummary$Outbound;
}
//# sourceMappingURL=calculatecashbalanceresponseopenordersummary.d.ts.map