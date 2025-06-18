import * as z from "zod";
import * as components from "../components/index.js";
export type LedgerListActivitiesRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The maximum number of activities to return. The service may return fewer than this value Default is 100 (subject to change) The maximum is 1000, values exceeding this will be set to 1000 (subject to change)
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListActivity` call. Provide this to retrieve the subsequent page When paginating, all other parameters provided to `ListActivity` must match the call that provided the page token in order to maintain a stable result set
     */
    pageToken?: string | undefined;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information;
     */
    filter?: string | undefined;
};
export type LedgerListActivitiesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listActivitiesResponse?: components.ListActivitiesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const LedgerListActivitiesRequest$inboundSchema: z.ZodType<LedgerListActivitiesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerListActivitiesRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const LedgerListActivitiesRequest$outboundSchema: z.ZodType<LedgerListActivitiesRequest$Outbound, z.ZodTypeDef, LedgerListActivitiesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerListActivitiesRequest$ {
    /** @deprecated use `LedgerListActivitiesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerListActivitiesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerListActivitiesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerListActivitiesRequest$Outbound, z.ZodTypeDef, LedgerListActivitiesRequest>;
    /** @deprecated use `LedgerListActivitiesRequest$Outbound` instead. */
    type Outbound = LedgerListActivitiesRequest$Outbound;
}
/** @internal */
export declare const LedgerListActivitiesResponse$inboundSchema: z.ZodType<LedgerListActivitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerListActivitiesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListActivitiesResponse?: components.ListActivitiesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const LedgerListActivitiesResponse$outboundSchema: z.ZodType<LedgerListActivitiesResponse$Outbound, z.ZodTypeDef, LedgerListActivitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerListActivitiesResponse$ {
    /** @deprecated use `LedgerListActivitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerListActivitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerListActivitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerListActivitiesResponse$Outbound, z.ZodTypeDef, LedgerListActivitiesResponse>;
    /** @deprecated use `LedgerListActivitiesResponse$Outbound` instead. */
    type Outbound = LedgerListActivitiesResponse$Outbound;
}
//# sourceMappingURL=ledgerlistactivities.d.ts.map