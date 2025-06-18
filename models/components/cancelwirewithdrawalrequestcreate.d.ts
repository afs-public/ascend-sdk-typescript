import * as z from "zod";
/**
 * Request to cancel an existing wire withdrawal. The cancel will only succeed if the wire has not made it to the SendingToBank state
 */
export type CancelWireWithdrawalRequestCreate = {
    /**
     * The name of the wire withdrawal to cancel
     */
    name: string;
    /**
     * The reason why the wire withdrawal is being canceled
     */
    reason?: string | undefined;
};
/** @internal */
export declare const CancelWireWithdrawalRequestCreate$inboundSchema: z.ZodType<CancelWireWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelWireWithdrawalRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const CancelWireWithdrawalRequestCreate$outboundSchema: z.ZodType<CancelWireWithdrawalRequestCreate$Outbound, z.ZodTypeDef, CancelWireWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelWireWithdrawalRequestCreate$ {
    /** @deprecated use `CancelWireWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelWireWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelWireWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelWireWithdrawalRequestCreate$Outbound, z.ZodTypeDef, CancelWireWithdrawalRequestCreate>;
    /** @deprecated use `CancelWireWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = CancelWireWithdrawalRequestCreate$Outbound;
}
//# sourceMappingURL=cancelwirewithdrawalrequestcreate.d.ts.map