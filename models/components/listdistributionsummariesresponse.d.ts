import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DistributionSummary, DistributionSummary$Outbound } from "./distributionsummary.js";
/**
 * Response object for aggregated distribution retirement summaries
 */
export type ListDistributionSummariesResponse = {
    /**
     * List of distribution amount(s) and rollover amount(s), with their corresponding tax year(s)
     */
    distributionSummaries?: Array<DistributionSummary> | undefined;
    /**
     * Can be sent as `page_token` in the request to retrieve the next page If this field is omitted, there are no subsequent pages
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListDistributionSummariesResponse$inboundSchema: z.ZodType<ListDistributionSummariesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDistributionSummariesResponse$Outbound = {
    distribution_summaries?: Array<DistributionSummary$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListDistributionSummariesResponse$outboundSchema: z.ZodType<ListDistributionSummariesResponse$Outbound, z.ZodTypeDef, ListDistributionSummariesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDistributionSummariesResponse$ {
    /** @deprecated use `ListDistributionSummariesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDistributionSummariesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDistributionSummariesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDistributionSummariesResponse$Outbound, z.ZodTypeDef, ListDistributionSummariesResponse>;
    /** @deprecated use `ListDistributionSummariesResponse$Outbound` instead. */
    type Outbound = ListDistributionSummariesResponse$Outbound;
}
export declare function listDistributionSummariesResponseToJSON(listDistributionSummariesResponse: ListDistributionSummariesResponse): string;
export declare function listDistributionSummariesResponseFromJSON(jsonString: string): SafeParseResult<ListDistributionSummariesResponse, SDKValidationError>;
//# sourceMappingURL=listdistributionsummariesresponse.d.ts.map