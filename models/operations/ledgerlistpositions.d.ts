import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type LedgerListPositionsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The maximum number of positions to return. The service may return fewer than this value Default is 100 (subject to change) The maximum is 1000, values exceeding this will be set to 1000 (subject to change)
     */
    pageSize?: number | undefined;
    /**
     * This page token comes from a previous `ListPositions` call; provide this token to retrieve the subsequent page When paginating, all other parameters you include in `ListPositions` must match the call that includes the page token to maintain a stable result set
     */
    pageToken?: string | undefined;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information;
     */
    filter?: string | undefined;
};
export type LedgerListPositionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listPositionsResponse?: components.ListPositionsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const LedgerListPositionsRequest$inboundSchema: z.ZodType<LedgerListPositionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerListPositionsRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const LedgerListPositionsRequest$outboundSchema: z.ZodType<LedgerListPositionsRequest$Outbound, z.ZodTypeDef, LedgerListPositionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerListPositionsRequest$ {
    /** @deprecated use `LedgerListPositionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerListPositionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerListPositionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerListPositionsRequest$Outbound, z.ZodTypeDef, LedgerListPositionsRequest>;
    /** @deprecated use `LedgerListPositionsRequest$Outbound` instead. */
    type Outbound = LedgerListPositionsRequest$Outbound;
}
export declare function ledgerListPositionsRequestToJSON(ledgerListPositionsRequest: LedgerListPositionsRequest): string;
export declare function ledgerListPositionsRequestFromJSON(jsonString: string): SafeParseResult<LedgerListPositionsRequest, SDKValidationError>;
/** @internal */
export declare const LedgerListPositionsResponse$inboundSchema: z.ZodType<LedgerListPositionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerListPositionsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListPositionsResponse?: components.ListPositionsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const LedgerListPositionsResponse$outboundSchema: z.ZodType<LedgerListPositionsResponse$Outbound, z.ZodTypeDef, LedgerListPositionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerListPositionsResponse$ {
    /** @deprecated use `LedgerListPositionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerListPositionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerListPositionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerListPositionsResponse$Outbound, z.ZodTypeDef, LedgerListPositionsResponse>;
    /** @deprecated use `LedgerListPositionsResponse$Outbound` instead. */
    type Outbound = LedgerListPositionsResponse$Outbound;
}
export declare function ledgerListPositionsResponseToJSON(ledgerListPositionsResponse: LedgerListPositionsResponse): string;
export declare function ledgerListPositionsResponseFromJSON(jsonString: string): SafeParseResult<LedgerListPositionsResponse, SDKValidationError>;
//# sourceMappingURL=ledgerlistpositions.d.ts.map