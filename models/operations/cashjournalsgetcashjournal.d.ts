import * as z from "zod";
import * as components from "../components/index.js";
export type CashJournalsGetCashJournalRequest = {
    /**
     * The cashJournal id.
     */
    cashJournalId: string;
};
export type CashJournalsGetCashJournalResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    cashJournal?: components.CashJournal | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const CashJournalsGetCashJournalRequest$inboundSchema: z.ZodType<CashJournalsGetCashJournalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsGetCashJournalRequest$Outbound = {
    cashJournal_id: string;
};
/** @internal */
export declare const CashJournalsGetCashJournalRequest$outboundSchema: z.ZodType<CashJournalsGetCashJournalRequest$Outbound, z.ZodTypeDef, CashJournalsGetCashJournalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsGetCashJournalRequest$ {
    /** @deprecated use `CashJournalsGetCashJournalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsGetCashJournalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsGetCashJournalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsGetCashJournalRequest$Outbound, z.ZodTypeDef, CashJournalsGetCashJournalRequest>;
    /** @deprecated use `CashJournalsGetCashJournalRequest$Outbound` instead. */
    type Outbound = CashJournalsGetCashJournalRequest$Outbound;
}
/** @internal */
export declare const CashJournalsGetCashJournalResponse$inboundSchema: z.ZodType<CashJournalsGetCashJournalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsGetCashJournalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CashJournal?: components.CashJournal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CashJournalsGetCashJournalResponse$outboundSchema: z.ZodType<CashJournalsGetCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsGetCashJournalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsGetCashJournalResponse$ {
    /** @deprecated use `CashJournalsGetCashJournalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsGetCashJournalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsGetCashJournalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsGetCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsGetCashJournalResponse>;
    /** @deprecated use `CashJournalsGetCashJournalResponse$Outbound` instead. */
    type Outbound = CashJournalsGetCashJournalResponse$Outbound;
}
//# sourceMappingURL=cashjournalsgetcashjournal.d.ts.map