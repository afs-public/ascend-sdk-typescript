import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Investigation, Investigation$Outbound } from "./investigation.js";
/**
 * ListInvestigationStatesResponse
 */
export type ListInvestigationsResponse = {
    /**
     * List of investigations matching request search criteria
     */
    investigations?: Array<Investigation> | undefined;
    /**
     * The next pagination token in the Search response; an empty value means no more results
     */
    nextPageToken?: string | undefined;
    /**
     * The total number of investigations matching the search criteria. This is the total number of results available across all pages of the query, not the number of investigations returned in the current page. For example, if the search query matches 1,000 investigations but only 50 results are returned per page, `total_size` will be 1,000.
     */
    totalSize?: number | undefined;
};
/** @internal */
export declare const ListInvestigationsResponse$inboundSchema: z.ZodType<ListInvestigationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListInvestigationsResponse$Outbound = {
    investigations?: Array<Investigation$Outbound> | undefined;
    next_page_token?: string | undefined;
    total_size?: number | undefined;
};
/** @internal */
export declare const ListInvestigationsResponse$outboundSchema: z.ZodType<ListInvestigationsResponse$Outbound, z.ZodTypeDef, ListInvestigationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListInvestigationsResponse$ {
    /** @deprecated use `ListInvestigationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListInvestigationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListInvestigationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListInvestigationsResponse$Outbound, z.ZodTypeDef, ListInvestigationsResponse>;
    /** @deprecated use `ListInvestigationsResponse$Outbound` instead. */
    type Outbound = ListInvestigationsResponse$Outbound;
}
export declare function listInvestigationsResponseToJSON(listInvestigationsResponse: ListInvestigationsResponse): string;
export declare function listInvestigationsResponseFromJSON(jsonString: string): SafeParseResult<ListInvestigationsResponse, SDKValidationError>;
//# sourceMappingURL=listinvestigationsresponse.d.ts.map