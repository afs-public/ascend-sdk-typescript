import * as z from "zod";
/**
 * Request to simulate the rejection of an ICT withdrawal
 */
export type ForceRejectIctWithdrawalRequestCreate = {
    /**
     * Full name of the ICT withdrawal resource to force a rejection on. Contains account id and ICT withdrawal id.
     */
    name: string;
    /**
     * Reason why the ICT withdrawal is being rejected
     */
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectIctWithdrawalRequestCreate$inboundSchema: z.ZodType<ForceRejectIctWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceRejectIctWithdrawalRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectIctWithdrawalRequestCreate$outboundSchema: z.ZodType<ForceRejectIctWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectIctWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceRejectIctWithdrawalRequestCreate$ {
    /** @deprecated use `ForceRejectIctWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceRejectIctWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceRejectIctWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceRejectIctWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectIctWithdrawalRequestCreate>;
    /** @deprecated use `ForceRejectIctWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = ForceRejectIctWithdrawalRequestCreate$Outbound;
}
//# sourceMappingURL=forcerejectictwithdrawalrequestcreate.d.ts.map