import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type LedgerListEntriesRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The maximum number of entries to return. The service may return fewer than this value Default is 100 (subject to change) The maximum is 1000, values exceeding this will be set to 1000 (subject to change)
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListEntries` call. Provide this to retrieve the subsequent page When paginating, all other parameters provided to `ListEntries` must match the call that provided the page token in order to maintain a stable result set
     */
    pageToken?: string | undefined;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information;
     */
    filter?: string | undefined;
};
export type LedgerListEntriesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listEntriesResponse?: components.ListEntriesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const LedgerListEntriesRequest$inboundSchema: z.ZodType<LedgerListEntriesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerListEntriesRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const LedgerListEntriesRequest$outboundSchema: z.ZodType<LedgerListEntriesRequest$Outbound, z.ZodTypeDef, LedgerListEntriesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerListEntriesRequest$ {
    /** @deprecated use `LedgerListEntriesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerListEntriesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerListEntriesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerListEntriesRequest$Outbound, z.ZodTypeDef, LedgerListEntriesRequest>;
    /** @deprecated use `LedgerListEntriesRequest$Outbound` instead. */
    type Outbound = LedgerListEntriesRequest$Outbound;
}
export declare function ledgerListEntriesRequestToJSON(ledgerListEntriesRequest: LedgerListEntriesRequest): string;
export declare function ledgerListEntriesRequestFromJSON(jsonString: string): SafeParseResult<LedgerListEntriesRequest, SDKValidationError>;
/** @internal */
export declare const LedgerListEntriesResponse$inboundSchema: z.ZodType<LedgerListEntriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerListEntriesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListEntriesResponse?: components.ListEntriesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const LedgerListEntriesResponse$outboundSchema: z.ZodType<LedgerListEntriesResponse$Outbound, z.ZodTypeDef, LedgerListEntriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerListEntriesResponse$ {
    /** @deprecated use `LedgerListEntriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerListEntriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerListEntriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerListEntriesResponse$Outbound, z.ZodTypeDef, LedgerListEntriesResponse>;
    /** @deprecated use `LedgerListEntriesResponse$Outbound` instead. */
    type Outbound = LedgerListEntriesResponse$Outbound;
}
export declare function ledgerListEntriesResponseToJSON(ledgerListEntriesResponse: LedgerListEntriesResponse): string;
export declare function ledgerListEntriesResponseFromJSON(jsonString: string): SafeParseResult<LedgerListEntriesResponse, SDKValidationError>;
//# sourceMappingURL=ledgerlistentries.d.ts.map