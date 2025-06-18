import * as z from "zod";
import * as components from "../components/index.js";
export type CashJournalsForceApproveCashJournalRequest = {
    /**
     * The cashJournal id.
     */
    cashJournalId: string;
    forceApproveCashJournalRequestCreate: components.ForceApproveCashJournalRequestCreate;
};
export type CashJournalsForceApproveCashJournalResponse = {
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
export declare const CashJournalsForceApproveCashJournalRequest$inboundSchema: z.ZodType<CashJournalsForceApproveCashJournalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsForceApproveCashJournalRequest$Outbound = {
    cashJournal_id: string;
    ForceApproveCashJournalRequestCreate: components.ForceApproveCashJournalRequestCreate$Outbound;
};
/** @internal */
export declare const CashJournalsForceApproveCashJournalRequest$outboundSchema: z.ZodType<CashJournalsForceApproveCashJournalRequest$Outbound, z.ZodTypeDef, CashJournalsForceApproveCashJournalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsForceApproveCashJournalRequest$ {
    /** @deprecated use `CashJournalsForceApproveCashJournalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsForceApproveCashJournalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsForceApproveCashJournalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsForceApproveCashJournalRequest$Outbound, z.ZodTypeDef, CashJournalsForceApproveCashJournalRequest>;
    /** @deprecated use `CashJournalsForceApproveCashJournalRequest$Outbound` instead. */
    type Outbound = CashJournalsForceApproveCashJournalRequest$Outbound;
}
/** @internal */
export declare const CashJournalsForceApproveCashJournalResponse$inboundSchema: z.ZodType<CashJournalsForceApproveCashJournalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsForceApproveCashJournalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CashJournal?: components.CashJournal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CashJournalsForceApproveCashJournalResponse$outboundSchema: z.ZodType<CashJournalsForceApproveCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsForceApproveCashJournalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsForceApproveCashJournalResponse$ {
    /** @deprecated use `CashJournalsForceApproveCashJournalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsForceApproveCashJournalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsForceApproveCashJournalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsForceApproveCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsForceApproveCashJournalResponse>;
    /** @deprecated use `CashJournalsForceApproveCashJournalResponse$Outbound` instead. */
    type Outbound = CashJournalsForceApproveCashJournalResponse$Outbound;
}
//# sourceMappingURL=cashjournalsforceapprovecashjournal.d.ts.map