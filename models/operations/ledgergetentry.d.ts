import * as z from "zod";
import * as components from "../components/index.js";
export type LedgerGetEntryRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The entry id.
     */
    entryId: string;
};
export type LedgerGetEntryResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    entry?: components.Entry | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const LedgerGetEntryRequest$inboundSchema: z.ZodType<LedgerGetEntryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerGetEntryRequest$Outbound = {
    account_id: string;
    entry_id: string;
};
/** @internal */
export declare const LedgerGetEntryRequest$outboundSchema: z.ZodType<LedgerGetEntryRequest$Outbound, z.ZodTypeDef, LedgerGetEntryRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerGetEntryRequest$ {
    /** @deprecated use `LedgerGetEntryRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerGetEntryRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerGetEntryRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerGetEntryRequest$Outbound, z.ZodTypeDef, LedgerGetEntryRequest>;
    /** @deprecated use `LedgerGetEntryRequest$Outbound` instead. */
    type Outbound = LedgerGetEntryRequest$Outbound;
}
/** @internal */
export declare const LedgerGetEntryResponse$inboundSchema: z.ZodType<LedgerGetEntryResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerGetEntryResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Entry?: components.Entry$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const LedgerGetEntryResponse$outboundSchema: z.ZodType<LedgerGetEntryResponse$Outbound, z.ZodTypeDef, LedgerGetEntryResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerGetEntryResponse$ {
    /** @deprecated use `LedgerGetEntryResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerGetEntryResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerGetEntryResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerGetEntryResponse$Outbound, z.ZodTypeDef, LedgerGetEntryResponse>;
    /** @deprecated use `LedgerGetEntryResponse$Outbound` instead. */
    type Outbound = LedgerGetEntryResponse$Outbound;
}
//# sourceMappingURL=ledgergetentry.d.ts.map