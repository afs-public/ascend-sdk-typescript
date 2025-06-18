import * as z from "zod";
/**
 * Request to reject internal Ascend transfers.
 */
export type RejectTransferRequestCreate = {
    /**
     * Comment to add to the transfer resource's audit trail
     */
    comment?: string | undefined;
    /**
     * The name of the transfer to reject Format: correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}
     */
    name: string;
    /**
     * The reason for the rejection to add to the the transfer resource's audit trail
     */
    stateReason?: string | undefined;
};
/** @internal */
export declare const RejectTransferRequestCreate$inboundSchema: z.ZodType<RejectTransferRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RejectTransferRequestCreate$Outbound = {
    comment?: string | undefined;
    name: string;
    state_reason?: string | undefined;
};
/** @internal */
export declare const RejectTransferRequestCreate$outboundSchema: z.ZodType<RejectTransferRequestCreate$Outbound, z.ZodTypeDef, RejectTransferRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferRequestCreate$ {
    /** @deprecated use `RejectTransferRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferRequestCreate$Outbound, z.ZodTypeDef, RejectTransferRequestCreate>;
    /** @deprecated use `RejectTransferRequestCreate$Outbound` instead. */
    type Outbound = RejectTransferRequestCreate$Outbound;
}
//# sourceMappingURL=rejecttransferrequestcreate.d.ts.map