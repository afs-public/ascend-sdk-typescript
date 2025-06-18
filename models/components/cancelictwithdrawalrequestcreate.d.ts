import * as z from "zod";
/**
 * Request to cancel an existing ICT withdrawal
 */
export type CancelIctWithdrawalRequestCreate = {
    /**
     * Full name of the ICT withdrawal resource, which contains account id and ICT withdrawal id
     */
    name: string;
    /**
     * Reason why the ICT withdrawal is being canceled
     */
    reason?: string | undefined;
};
/** @internal */
export declare const CancelIctWithdrawalRequestCreate$inboundSchema: z.ZodType<CancelIctWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelIctWithdrawalRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const CancelIctWithdrawalRequestCreate$outboundSchema: z.ZodType<CancelIctWithdrawalRequestCreate$Outbound, z.ZodTypeDef, CancelIctWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelIctWithdrawalRequestCreate$ {
    /** @deprecated use `CancelIctWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelIctWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelIctWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelIctWithdrawalRequestCreate$Outbound, z.ZodTypeDef, CancelIctWithdrawalRequestCreate>;
    /** @deprecated use `CancelIctWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = CancelIctWithdrawalRequestCreate$Outbound;
}
//# sourceMappingURL=cancelictwithdrawalrequestcreate.d.ts.map