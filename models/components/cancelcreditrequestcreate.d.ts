import * as z from "zod";
/**
 * Request to cancel an existing credit
 */
export type CancelCreditRequestCreate = {
    /**
     * The name of the credit to cancel
     */
    name: string;
    /**
     * The optional reason about why the credit is being canceled
     */
    reason?: string | undefined;
};
/** @internal */
export declare const CancelCreditRequestCreate$inboundSchema: z.ZodType<CancelCreditRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelCreditRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const CancelCreditRequestCreate$outboundSchema: z.ZodType<CancelCreditRequestCreate$Outbound, z.ZodTypeDef, CancelCreditRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelCreditRequestCreate$ {
    /** @deprecated use `CancelCreditRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelCreditRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelCreditRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelCreditRequestCreate$Outbound, z.ZodTypeDef, CancelCreditRequestCreate>;
    /** @deprecated use `CancelCreditRequestCreate$Outbound` instead. */
    type Outbound = CancelCreditRequestCreate$Outbound;
}
//# sourceMappingURL=cancelcreditrequestcreate.d.ts.map