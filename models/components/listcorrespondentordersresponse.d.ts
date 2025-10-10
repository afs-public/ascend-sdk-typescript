import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Order, Order$Outbound } from "./order.js";
/**
 * The response message containing a list of orders
 */
export type ListCorrespondentOrdersResponse = {
    /**
     * The token that must be provided on the next List request to retrieve the next page of data. This field will be empty if there are no more pages.
     */
    nextPageToken?: string | undefined;
    /**
     * The orders belonging to the requested parent resource, and which match the filter criteria.
     */
    orders?: Array<Order> | undefined;
};
/** @internal */
export declare const ListCorrespondentOrdersResponse$inboundSchema: z.ZodType<ListCorrespondentOrdersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCorrespondentOrdersResponse$Outbound = {
    next_page_token?: string | undefined;
    orders?: Array<Order$Outbound> | undefined;
};
/** @internal */
export declare const ListCorrespondentOrdersResponse$outboundSchema: z.ZodType<ListCorrespondentOrdersResponse$Outbound, z.ZodTypeDef, ListCorrespondentOrdersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListCorrespondentOrdersResponse$ {
    /** @deprecated use `ListCorrespondentOrdersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListCorrespondentOrdersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListCorrespondentOrdersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListCorrespondentOrdersResponse$Outbound, z.ZodTypeDef, ListCorrespondentOrdersResponse>;
    /** @deprecated use `ListCorrespondentOrdersResponse$Outbound` instead. */
    type Outbound = ListCorrespondentOrdersResponse$Outbound;
}
export declare function listCorrespondentOrdersResponseToJSON(listCorrespondentOrdersResponse: ListCorrespondentOrdersResponse): string;
export declare function listCorrespondentOrdersResponseFromJSON(jsonString: string): SafeParseResult<ListCorrespondentOrdersResponse, SDKValidationError>;
//# sourceMappingURL=listcorrespondentordersresponse.d.ts.map