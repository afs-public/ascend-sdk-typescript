import * as z from "zod";
/**
 * Request to force approval of an existing ACH deposit that is pending review. FOR TESTING ONLY!
 */
export type ForceApproveAchDepositRequestCreate = {
    /**
     * The name of the ACH deposit to force approve.
     */
    name: string;
};
/** @internal */
export declare const ForceApproveAchDepositRequestCreate$inboundSchema: z.ZodType<ForceApproveAchDepositRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceApproveAchDepositRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const ForceApproveAchDepositRequestCreate$outboundSchema: z.ZodType<ForceApproveAchDepositRequestCreate$Outbound, z.ZodTypeDef, ForceApproveAchDepositRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceApproveAchDepositRequestCreate$ {
    /** @deprecated use `ForceApproveAchDepositRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceApproveAchDepositRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceApproveAchDepositRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceApproveAchDepositRequestCreate$Outbound, z.ZodTypeDef, ForceApproveAchDepositRequestCreate>;
    /** @deprecated use `ForceApproveAchDepositRequestCreate$Outbound` instead. */
    type Outbound = ForceApproveAchDepositRequestCreate$Outbound;
}
//# sourceMappingURL=forceapproveachdepositrequestcreate.d.ts.map