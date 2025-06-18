import * as z from "zod";
/**
 * Request to cancel an existing fee
 */
export type CancelFeeRequestCreate = {
    /**
     * The name of the fee to cancel
     */
    name: string;
    /**
     * The optional reason about why the fee is being canceled
     */
    reason?: string | undefined;
};
/** @internal */
export declare const CancelFeeRequestCreate$inboundSchema: z.ZodType<CancelFeeRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelFeeRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const CancelFeeRequestCreate$outboundSchema: z.ZodType<CancelFeeRequestCreate$Outbound, z.ZodTypeDef, CancelFeeRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelFeeRequestCreate$ {
    /** @deprecated use `CancelFeeRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelFeeRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelFeeRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelFeeRequestCreate$Outbound, z.ZodTypeDef, CancelFeeRequestCreate>;
    /** @deprecated use `CancelFeeRequestCreate$Outbound` instead. */
    type Outbound = CancelFeeRequestCreate$Outbound;
}
//# sourceMappingURL=cancelfeerequestcreate.d.ts.map