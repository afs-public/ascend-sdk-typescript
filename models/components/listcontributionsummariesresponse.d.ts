import * as z from "zod";
import { ContributionSummary, ContributionSummary$Outbound } from "./contributionsummary.js";
/**
 * Response object for aggregated contribution retirement summaries
 */
export type ListContributionSummariesResponse = {
    /**
     * List of contribution amount(s) and rollover amount(s), with their corresponding tax year(s) Entries will be sorted in descending order by tax year  Starting with the current year
     */
    contributionSummaries?: Array<ContributionSummary> | undefined;
    /**
     * Can be sent as `page_token` in the request to retrieve the next page If this field is omitted, there are no subsequent pages
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListContributionSummariesResponse$inboundSchema: z.ZodType<ListContributionSummariesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListContributionSummariesResponse$Outbound = {
    contribution_summaries?: Array<ContributionSummary$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListContributionSummariesResponse$outboundSchema: z.ZodType<ListContributionSummariesResponse$Outbound, z.ZodTypeDef, ListContributionSummariesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListContributionSummariesResponse$ {
    /** @deprecated use `ListContributionSummariesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListContributionSummariesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListContributionSummariesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListContributionSummariesResponse$Outbound, z.ZodTypeDef, ListContributionSummariesResponse>;
    /** @deprecated use `ListContributionSummariesResponse$Outbound` instead. */
    type Outbound = ListContributionSummariesResponse$Outbound;
}
//# sourceMappingURL=listcontributionsummariesresponse.d.ts.map