import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TransferScheduleSummary, TransferScheduleSummary$Outbound } from "./transferschedulesummary.js";
/**
 * Response to a search transfer schedules request
 */
export type ListScheduleSummariesResponse = {
    /**
     * The next page token
     */
    nextPageToken?: string | undefined;
    /**
     * The list of transfer schedule details
     */
    scheduleSummaries?: Array<TransferScheduleSummary> | undefined;
};
/** @internal */
export declare const ListScheduleSummariesResponse$inboundSchema: z.ZodType<ListScheduleSummariesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListScheduleSummariesResponse$Outbound = {
    next_page_token?: string | undefined;
    schedule_summaries?: Array<TransferScheduleSummary$Outbound> | undefined;
};
/** @internal */
export declare const ListScheduleSummariesResponse$outboundSchema: z.ZodType<ListScheduleSummariesResponse$Outbound, z.ZodTypeDef, ListScheduleSummariesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListScheduleSummariesResponse$ {
    /** @deprecated use `ListScheduleSummariesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListScheduleSummariesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListScheduleSummariesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListScheduleSummariesResponse$Outbound, z.ZodTypeDef, ListScheduleSummariesResponse>;
    /** @deprecated use `ListScheduleSummariesResponse$Outbound` instead. */
    type Outbound = ListScheduleSummariesResponse$Outbound;
}
export declare function listScheduleSummariesResponseToJSON(listScheduleSummariesResponse: ListScheduleSummariesResponse): string;
export declare function listScheduleSummariesResponseFromJSON(jsonString: string): SafeParseResult<ListScheduleSummariesResponse, SDKValidationError>;
//# sourceMappingURL=listschedulesummariesresponse.d.ts.map