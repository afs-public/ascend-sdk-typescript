import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Entry, Entry$Outbound } from "./entry.js";
/**
 * ListEntriesResponse
 */
export type ListEntriesResponse = {
    /**
     * An array of entries, empty if no results are found
     */
    entries?: Array<Entry> | undefined;
    /**
     * The next page token returned by this call. Can be provided in another request to retrieve the subsequent page
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListEntriesResponse$inboundSchema: z.ZodType<ListEntriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListEntriesResponse$Outbound = {
    entries?: Array<Entry$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListEntriesResponse$outboundSchema: z.ZodType<ListEntriesResponse$Outbound, z.ZodTypeDef, ListEntriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListEntriesResponse$ {
    /** @deprecated use `ListEntriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListEntriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListEntriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListEntriesResponse$Outbound, z.ZodTypeDef, ListEntriesResponse>;
    /** @deprecated use `ListEntriesResponse$Outbound` instead. */
    type Outbound = ListEntriesResponse$Outbound;
}
export declare function listEntriesResponseToJSON(listEntriesResponse: ListEntriesResponse): string;
export declare function listEntriesResponseFromJSON(jsonString: string): SafeParseResult<ListEntriesResponse, SDKValidationError>;
//# sourceMappingURL=listentriesresponse.d.ts.map