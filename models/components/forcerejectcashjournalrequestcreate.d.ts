import * as z from "zod";
/**
 * Request to force reject a pending cash journal
 */
export type ForceRejectCashJournalRequestCreate = {
    /**
     * The name of the cash journal to force reject
     */
    name: string;
    /**
     * The optional reason for force rejecting a cash journal
     */
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectCashJournalRequestCreate$inboundSchema: z.ZodType<ForceRejectCashJournalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceRejectCashJournalRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectCashJournalRequestCreate$outboundSchema: z.ZodType<ForceRejectCashJournalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectCashJournalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceRejectCashJournalRequestCreate$ {
    /** @deprecated use `ForceRejectCashJournalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceRejectCashJournalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceRejectCashJournalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceRejectCashJournalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectCashJournalRequestCreate>;
    /** @deprecated use `ForceRejectCashJournalRequestCreate$Outbound` instead. */
    type Outbound = ForceRejectCashJournalRequestCreate$Outbound;
}
//# sourceMappingURL=forcerejectcashjournalrequestcreate.d.ts.map