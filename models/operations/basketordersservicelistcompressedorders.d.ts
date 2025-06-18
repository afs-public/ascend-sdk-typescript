import * as z from "zod";
import * as components from "../components/index.js";
export type BasketOrdersServiceListCompressedOrdersRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The basket id.
     */
    basketId: string;
    /**
     * The maximum number of compressed orders to return. The service may return fewer than this value. If unspecified, at most 1000 compressed orders will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListCompressedOrders` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompressedOrders` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
};
export type BasketOrdersServiceListCompressedOrdersResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listCompressedOrdersResponse?: components.ListCompressedOrdersResponse | undefined;
    /**
     * INVALID_ARGUMENT: The correspondent_id or the basket_id could not be determined for the request.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BasketOrdersServiceListCompressedOrdersRequest$inboundSchema: z.ZodType<BasketOrdersServiceListCompressedOrdersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceListCompressedOrdersRequest$Outbound = {
    correspondent_id: string;
    basket_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const BasketOrdersServiceListCompressedOrdersRequest$outboundSchema: z.ZodType<BasketOrdersServiceListCompressedOrdersRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceListCompressedOrdersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceListCompressedOrdersRequest$ {
    /** @deprecated use `BasketOrdersServiceListCompressedOrdersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceListCompressedOrdersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceListCompressedOrdersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceListCompressedOrdersRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceListCompressedOrdersRequest>;
    /** @deprecated use `BasketOrdersServiceListCompressedOrdersRequest$Outbound` instead. */
    type Outbound = BasketOrdersServiceListCompressedOrdersRequest$Outbound;
}
/** @internal */
export declare const BasketOrdersServiceListCompressedOrdersResponse$inboundSchema: z.ZodType<BasketOrdersServiceListCompressedOrdersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceListCompressedOrdersResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListCompressedOrdersResponse?: components.ListCompressedOrdersResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BasketOrdersServiceListCompressedOrdersResponse$outboundSchema: z.ZodType<BasketOrdersServiceListCompressedOrdersResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceListCompressedOrdersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceListCompressedOrdersResponse$ {
    /** @deprecated use `BasketOrdersServiceListCompressedOrdersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceListCompressedOrdersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceListCompressedOrdersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceListCompressedOrdersResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceListCompressedOrdersResponse>;
    /** @deprecated use `BasketOrdersServiceListCompressedOrdersResponse$Outbound` instead. */
    type Outbound = BasketOrdersServiceListCompressedOrdersResponse$Outbound;
}
//# sourceMappingURL=basketordersservicelistcompressedorders.d.ts.map