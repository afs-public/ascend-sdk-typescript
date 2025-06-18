import * as z from "zod";
/**
 * Request to simulate the approval of an ICT deposit
 */
export type ForceApproveIctDepositRequestCreate = {
    /**
     * Full name of the ICT deposit resource to force an approval on. Contains account id and ICT deposit id.
     */
    name: string;
};
/** @internal */
export declare const ForceApproveIctDepositRequestCreate$inboundSchema: z.ZodType<ForceApproveIctDepositRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceApproveIctDepositRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const ForceApproveIctDepositRequestCreate$outboundSchema: z.ZodType<ForceApproveIctDepositRequestCreate$Outbound, z.ZodTypeDef, ForceApproveIctDepositRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceApproveIctDepositRequestCreate$ {
    /** @deprecated use `ForceApproveIctDepositRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceApproveIctDepositRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceApproveIctDepositRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceApproveIctDepositRequestCreate$Outbound, z.ZodTypeDef, ForceApproveIctDepositRequestCreate>;
    /** @deprecated use `ForceApproveIctDepositRequestCreate$Outbound` instead. */
    type Outbound = ForceApproveIctDepositRequestCreate$Outbound;
}
//# sourceMappingURL=forceapproveictdepositrequestcreate.d.ts.map