import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Activity, Activity$Outbound } from "./activity.js";
/**
 * A response to the list activity method
 */
export type ListActivitiesResponse = {
    /**
     * an array of activities Returns empty array if no results are found
     */
    activities?: Array<Activity> | undefined;
    /**
     * The next page token returned by this call. Can be provided in another request to retrieve the subsequent page
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListActivitiesResponse$inboundSchema: z.ZodType<ListActivitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListActivitiesResponse$Outbound = {
    activities?: Array<Activity$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListActivitiesResponse$outboundSchema: z.ZodType<ListActivitiesResponse$Outbound, z.ZodTypeDef, ListActivitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListActivitiesResponse$ {
    /** @deprecated use `ListActivitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListActivitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListActivitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListActivitiesResponse$Outbound, z.ZodTypeDef, ListActivitiesResponse>;
    /** @deprecated use `ListActivitiesResponse$Outbound` instead. */
    type Outbound = ListActivitiesResponse$Outbound;
}
export declare function listActivitiesResponseToJSON(listActivitiesResponse: ListActivitiesResponse): string;
export declare function listActivitiesResponseFromJSON(jsonString: string): SafeParseResult<ListActivitiesResponse, SDKValidationError>;
//# sourceMappingURL=listactivitiesresponse.d.ts.map