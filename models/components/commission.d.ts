import * as z from "zod";
/**
 * Monetary amount associated with the commission
 */
export type CommissionAmount1 = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
export type Commission = {
    /**
     * Monetary amount associated with the commission
     */
    amount?: CommissionAmount1 | null | undefined;
};
/** @internal */
export declare const CommissionAmount1$inboundSchema: z.ZodType<CommissionAmount1, z.ZodTypeDef, unknown>;
/** @internal */
export type CommissionAmount1$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CommissionAmount1$outboundSchema: z.ZodType<CommissionAmount1$Outbound, z.ZodTypeDef, CommissionAmount1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CommissionAmount1$ {
    /** @deprecated use `CommissionAmount1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CommissionAmount1, z.ZodTypeDef, unknown>;
    /** @deprecated use `CommissionAmount1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CommissionAmount1$Outbound, z.ZodTypeDef, CommissionAmount1>;
    /** @deprecated use `CommissionAmount1$Outbound` instead. */
    type Outbound = CommissionAmount1$Outbound;
}
/** @internal */
export declare const Commission$inboundSchema: z.ZodType<Commission, z.ZodTypeDef, unknown>;
/** @internal */
export type Commission$Outbound = {
    amount?: CommissionAmount1$Outbound | null | undefined;
};
/** @internal */
export declare const Commission$outboundSchema: z.ZodType<Commission$Outbound, z.ZodTypeDef, Commission>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Commission$ {
    /** @deprecated use `Commission$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Commission, z.ZodTypeDef, unknown>;
    /** @deprecated use `Commission$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Commission$Outbound, z.ZodTypeDef, Commission>;
    /** @deprecated use `Commission$Outbound` instead. */
    type Outbound = Commission$Outbound;
}
//# sourceMappingURL=commission.d.ts.map