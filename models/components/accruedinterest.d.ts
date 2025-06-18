import * as z from "zod";
/**
 * The amount of accrued interest associated with this activity
 */
export type AccruedInterestAmount1 = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
export type AccruedInterest = {
    /**
     * The amount of accrued interest associated with this activity
     */
    amount?: AccruedInterestAmount1 | null | undefined;
};
/** @internal */
export declare const AccruedInterestAmount1$inboundSchema: z.ZodType<AccruedInterestAmount1, z.ZodTypeDef, unknown>;
/** @internal */
export type AccruedInterestAmount1$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AccruedInterestAmount1$outboundSchema: z.ZodType<AccruedInterestAmount1$Outbound, z.ZodTypeDef, AccruedInterestAmount1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccruedInterestAmount1$ {
    /** @deprecated use `AccruedInterestAmount1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccruedInterestAmount1, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccruedInterestAmount1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccruedInterestAmount1$Outbound, z.ZodTypeDef, AccruedInterestAmount1>;
    /** @deprecated use `AccruedInterestAmount1$Outbound` instead. */
    type Outbound = AccruedInterestAmount1$Outbound;
}
/** @internal */
export declare const AccruedInterest$inboundSchema: z.ZodType<AccruedInterest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccruedInterest$Outbound = {
    amount?: AccruedInterestAmount1$Outbound | null | undefined;
};
/** @internal */
export declare const AccruedInterest$outboundSchema: z.ZodType<AccruedInterest$Outbound, z.ZodTypeDef, AccruedInterest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccruedInterest$ {
    /** @deprecated use `AccruedInterest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccruedInterest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccruedInterest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccruedInterest$Outbound, z.ZodTypeDef, AccruedInterest>;
    /** @deprecated use `AccruedInterest$Outbound` instead. */
    type Outbound = AccruedInterest$Outbound;
}
//# sourceMappingURL=accruedinterest.d.ts.map