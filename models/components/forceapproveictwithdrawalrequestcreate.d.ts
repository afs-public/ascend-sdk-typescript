import * as z from "zod";
/**
 * Request to simulate the approval of an ICT withdrawal
 */
export type ForceApproveIctWithdrawalRequestCreate = {
    /**
     * Full name of the ICT withdrawal resource to force a rejection on. Contains account id and ICT withdrawal id.
     */
    name: string;
};
/** @internal */
export declare const ForceApproveIctWithdrawalRequestCreate$inboundSchema: z.ZodType<ForceApproveIctWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceApproveIctWithdrawalRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const ForceApproveIctWithdrawalRequestCreate$outboundSchema: z.ZodType<ForceApproveIctWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceApproveIctWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceApproveIctWithdrawalRequestCreate$ {
    /** @deprecated use `ForceApproveIctWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceApproveIctWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceApproveIctWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceApproveIctWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceApproveIctWithdrawalRequestCreate>;
    /** @deprecated use `ForceApproveIctWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = ForceApproveIctWithdrawalRequestCreate$Outbound;
}
//# sourceMappingURL=forceapproveictwithdrawalrequestcreate.d.ts.map