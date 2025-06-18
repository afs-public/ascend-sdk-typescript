import * as z from "zod";
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
};
/** @internal */
export declare const ListInvestigationsResponse$inboundSchema: z.ZodType<ListInvestigationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListInvestigationsResponse$Outbound = {
    investigations?: Array<Investigation$Outbound> | undefined;
    next_page_token?: string | undefined;
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
//# sourceMappingURL=listinvestigationsresponse.d.ts.map