import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OrderServiceListCorrespondentOrdersRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * CEL filter string expressing what orders should be listed. The only properties available for filtering are the boolean `open` and `order_date`. Each of these represent fields on the Orders object, and more details about each can be found attached to the properties.
     *
     * @remarks
     *
     *  If `open` is not provided, both "open" and "not open" orders will be returned. All `order_date` searches are limited to orders within the most recent 365 days. If no `order_date` is specified, the default will search between now and 365 days ago.
     */
    filter?: string | undefined;
    /**
     * The number of records to return in a single page. The maximum page size is 100. If a value is not provided, the default of 100 will be used. If a value less than one, or greater than the maximum, is provided, the default value will be used.
     */
    pageSize?: number | undefined;
    /**
     * The token for the next page of content to fetch. When paginating, all other parameters provided to `ListOrders` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
};
export type OrderServiceListCorrespondentOrdersResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listCorrespondentOrdersResponse?: components.ListCorrespondentOrdersResponse | undefined;
    /**
     * INVALID_ARGUMENT: There was an issue with one or more fields in the request. The message field will contain details about which field failed validation and why.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const OrderServiceListCorrespondentOrdersRequest$inboundSchema: z.ZodType<OrderServiceListCorrespondentOrdersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceListCorrespondentOrdersRequest$Outbound = {
    correspondent_id: string;
    filter?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const OrderServiceListCorrespondentOrdersRequest$outboundSchema: z.ZodType<OrderServiceListCorrespondentOrdersRequest$Outbound, z.ZodTypeDef, OrderServiceListCorrespondentOrdersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceListCorrespondentOrdersRequest$ {
    /** @deprecated use `OrderServiceListCorrespondentOrdersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceListCorrespondentOrdersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceListCorrespondentOrdersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceListCorrespondentOrdersRequest$Outbound, z.ZodTypeDef, OrderServiceListCorrespondentOrdersRequest>;
    /** @deprecated use `OrderServiceListCorrespondentOrdersRequest$Outbound` instead. */
    type Outbound = OrderServiceListCorrespondentOrdersRequest$Outbound;
}
export declare function orderServiceListCorrespondentOrdersRequestToJSON(orderServiceListCorrespondentOrdersRequest: OrderServiceListCorrespondentOrdersRequest): string;
export declare function orderServiceListCorrespondentOrdersRequestFromJSON(jsonString: string): SafeParseResult<OrderServiceListCorrespondentOrdersRequest, SDKValidationError>;
/** @internal */
export declare const OrderServiceListCorrespondentOrdersResponse$inboundSchema: z.ZodType<OrderServiceListCorrespondentOrdersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceListCorrespondentOrdersResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListCorrespondentOrdersResponse?: components.ListCorrespondentOrdersResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const OrderServiceListCorrespondentOrdersResponse$outboundSchema: z.ZodType<OrderServiceListCorrespondentOrdersResponse$Outbound, z.ZodTypeDef, OrderServiceListCorrespondentOrdersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceListCorrespondentOrdersResponse$ {
    /** @deprecated use `OrderServiceListCorrespondentOrdersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceListCorrespondentOrdersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceListCorrespondentOrdersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceListCorrespondentOrdersResponse$Outbound, z.ZodTypeDef, OrderServiceListCorrespondentOrdersResponse>;
    /** @deprecated use `OrderServiceListCorrespondentOrdersResponse$Outbound` instead. */
    type Outbound = OrderServiceListCorrespondentOrdersResponse$Outbound;
}
export declare function orderServiceListCorrespondentOrdersResponseToJSON(orderServiceListCorrespondentOrdersResponse: OrderServiceListCorrespondentOrdersResponse): string;
export declare function orderServiceListCorrespondentOrdersResponseFromJSON(jsonString: string): SafeParseResult<OrderServiceListCorrespondentOrdersResponse, SDKValidationError>;
//# sourceMappingURL=orderservicelistcorrespondentorders.d.ts.map