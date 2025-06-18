import * as z from "zod";
/**
 * Request to cancel an existing ACH deposit.
 */
export type CancelAchDepositRequestCreate = {
    /**
     * The name of the ACH deposit to cancel.
     */
    name: string;
    /**
     * Reason why the ACH deposit is being canceled.
     */
    reason?: string | undefined;
};
/** @internal */
export declare const CancelAchDepositRequestCreate$inboundSchema: z.ZodType<CancelAchDepositRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelAchDepositRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const CancelAchDepositRequestCreate$outboundSchema: z.ZodType<CancelAchDepositRequestCreate$Outbound, z.ZodTypeDef, CancelAchDepositRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelAchDepositRequestCreate$ {
    /** @deprecated use `CancelAchDepositRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelAchDepositRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelAchDepositRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelAchDepositRequestCreate$Outbound, z.ZodTypeDef, CancelAchDepositRequestCreate>;
    /** @deprecated use `CancelAchDepositRequestCreate$Outbound` instead. */
    type Outbound = CancelAchDepositRequestCreate$Outbound;
}
//# sourceMappingURL=cancelachdepositrequestcreate.d.ts.map