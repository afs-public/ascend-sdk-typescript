import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Enrollment, Enrollment$Outbound } from "./enrollment.js";
/**
 * The response to list Enrollments on an Account.
 */
export type ListEnrollmentsResponse = {
    /**
     * The list of available enrollments
     */
    enrollments?: Array<Enrollment> | undefined;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListEnrollmentsResponse$inboundSchema: z.ZodType<ListEnrollmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListEnrollmentsResponse$Outbound = {
    enrollments?: Array<Enrollment$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListEnrollmentsResponse$outboundSchema: z.ZodType<ListEnrollmentsResponse$Outbound, z.ZodTypeDef, ListEnrollmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListEnrollmentsResponse$ {
    /** @deprecated use `ListEnrollmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListEnrollmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListEnrollmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListEnrollmentsResponse$Outbound, z.ZodTypeDef, ListEnrollmentsResponse>;
    /** @deprecated use `ListEnrollmentsResponse$Outbound` instead. */
    type Outbound = ListEnrollmentsResponse$Outbound;
}
export declare function listEnrollmentsResponseToJSON(listEnrollmentsResponse: ListEnrollmentsResponse): string;
export declare function listEnrollmentsResponseFromJSON(jsonString: string): SafeParseResult<ListEnrollmentsResponse, SDKValidationError>;
//# sourceMappingURL=listenrollmentsresponse.d.ts.map