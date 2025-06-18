import * as z from "zod";
/**
 * Request to cancel an existing cash journal
 */
export type CancelCashJournalRequestCreate = {
    /**
     * The name of the cash journal to cancel
     */
    name: string;
    /**
     * The reason for canceling the cash journal Maximum of 100 characters are supported
     */
    reason?: string | undefined;
};
/** @internal */
export declare const CancelCashJournalRequestCreate$inboundSchema: z.ZodType<CancelCashJournalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelCashJournalRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const CancelCashJournalRequestCreate$outboundSchema: z.ZodType<CancelCashJournalRequestCreate$Outbound, z.ZodTypeDef, CancelCashJournalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelCashJournalRequestCreate$ {
    /** @deprecated use `CancelCashJournalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelCashJournalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelCashJournalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelCashJournalRequestCreate$Outbound, z.ZodTypeDef, CancelCashJournalRequestCreate>;
    /** @deprecated use `CancelCashJournalRequestCreate$Outbound` instead. */
    type Outbound = CancelCashJournalRequestCreate$Outbound;
}
//# sourceMappingURL=cancelcashjournalrequestcreate.d.ts.map