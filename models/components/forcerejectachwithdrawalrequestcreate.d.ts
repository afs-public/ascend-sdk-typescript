import * as z from "zod";
/**
 * Request to force rejection of an existing ACH withdrawal that is pending review. FOR TESTING ONLY!
 */
export type ForceRejectAchWithdrawalRequestCreate = {
    /**
     * The name of the ACH withdrawal to force reject.
     */
    name: string;
    /**
     * Reason why the ACH withdrawal is being rejected.
     */
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectAchWithdrawalRequestCreate$inboundSchema: z.ZodType<ForceRejectAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceRejectAchWithdrawalRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectAchWithdrawalRequestCreate$outboundSchema: z.ZodType<ForceRejectAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectAchWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceRejectAchWithdrawalRequestCreate$ {
    /** @deprecated use `ForceRejectAchWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceRejectAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceRejectAchWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceRejectAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectAchWithdrawalRequestCreate>;
    /** @deprecated use `ForceRejectAchWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = ForceRejectAchWithdrawalRequestCreate$Outbound;
}
//# sourceMappingURL=forcerejectachwithdrawalrequestcreate.d.ts.map