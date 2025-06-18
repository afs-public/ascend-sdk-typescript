import * as z from "zod";
/**
 * Request to force approve a pending cash journal
 */
export type ForceApproveCashJournalRequestCreate = {
    /**
     * The name of the cash journal to force approve
     */
    name: string;
};
/** @internal */
export declare const ForceApproveCashJournalRequestCreate$inboundSchema: z.ZodType<ForceApproveCashJournalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceApproveCashJournalRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const ForceApproveCashJournalRequestCreate$outboundSchema: z.ZodType<ForceApproveCashJournalRequestCreate$Outbound, z.ZodTypeDef, ForceApproveCashJournalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceApproveCashJournalRequestCreate$ {
    /** @deprecated use `ForceApproveCashJournalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceApproveCashJournalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceApproveCashJournalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceApproveCashJournalRequestCreate$Outbound, z.ZodTypeDef, ForceApproveCashJournalRequestCreate>;
    /** @deprecated use `ForceApproveCashJournalRequestCreate$Outbound` instead. */
    type Outbound = ForceApproveCashJournalRequestCreate$Outbound;
}
//# sourceMappingURL=forceapprovecashjournalrequestcreate.d.ts.map