import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BasketOrdersServiceListBasketOrdersRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The basket id.
     */
    basketId: string;
    /**
     * The maximum number of basket orders to return. The service may return fewer than this value. If unspecified, at most 1000 basket orders will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListBasketOrders` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBasketOrders` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
    /**
     * Indicates whether basket orders with a status of REMOVED_BEFORE_SUBMISSION will be included in the response. By default, removed orders are not returned.
     */
    showRemoved?: boolean | undefined;
};
export type BasketOrdersServiceListBasketOrdersResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listBasketOrdersResponse?: components.ListBasketOrdersResponse | undefined;
    /**
     * INVALID_ARGUMENT: The correspondent_id or the basket_id could not be determined for the request.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BasketOrdersServiceListBasketOrdersRequest$inboundSchema: z.ZodType<BasketOrdersServiceListBasketOrdersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceListBasketOrdersRequest$Outbound = {
    correspondent_id: string;
    basket_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    show_removed?: boolean | undefined;
};
/** @internal */
export declare const BasketOrdersServiceListBasketOrdersRequest$outboundSchema: z.ZodType<BasketOrdersServiceListBasketOrdersRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceListBasketOrdersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceListBasketOrdersRequest$ {
    /** @deprecated use `BasketOrdersServiceListBasketOrdersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceListBasketOrdersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceListBasketOrdersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceListBasketOrdersRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceListBasketOrdersRequest>;
    /** @deprecated use `BasketOrdersServiceListBasketOrdersRequest$Outbound` instead. */
    type Outbound = BasketOrdersServiceListBasketOrdersRequest$Outbound;
}
export declare function basketOrdersServiceListBasketOrdersRequestToJSON(basketOrdersServiceListBasketOrdersRequest: BasketOrdersServiceListBasketOrdersRequest): string;
export declare function basketOrdersServiceListBasketOrdersRequestFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceListBasketOrdersRequest, SDKValidationError>;
/** @internal */
export declare const BasketOrdersServiceListBasketOrdersResponse$inboundSchema: z.ZodType<BasketOrdersServiceListBasketOrdersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceListBasketOrdersResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListBasketOrdersResponse?: components.ListBasketOrdersResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BasketOrdersServiceListBasketOrdersResponse$outboundSchema: z.ZodType<BasketOrdersServiceListBasketOrdersResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceListBasketOrdersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceListBasketOrdersResponse$ {
    /** @deprecated use `BasketOrdersServiceListBasketOrdersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceListBasketOrdersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceListBasketOrdersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceListBasketOrdersResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceListBasketOrdersResponse>;
    /** @deprecated use `BasketOrdersServiceListBasketOrdersResponse$Outbound` instead. */
    type Outbound = BasketOrdersServiceListBasketOrdersResponse$Outbound;
}
export declare function basketOrdersServiceListBasketOrdersResponseToJSON(basketOrdersServiceListBasketOrdersResponse: BasketOrdersServiceListBasketOrdersResponse): string;
export declare function basketOrdersServiceListBasketOrdersResponseFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceListBasketOrdersResponse, SDKValidationError>;
//# sourceMappingURL=basketordersservicelistbasketorders.d.ts.map