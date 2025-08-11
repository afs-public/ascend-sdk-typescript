import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CompressedOrder, CompressedOrder$Outbound } from "./compressedorder.js";
/**
 * The response message for listing compressed orders within a basket
 */
export type ListCompressedOrdersResponse = {
    /**
     * The compressed orders in the basket
     */
    compressedOrders?: Array<CompressedOrder> | undefined;
    /**
     * A token to retrieve the next page of results. Pass this value in the `page_token` field in the subsequent call to `ListCompressedOrders` method to retrieve the next page of results.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListCompressedOrdersResponse$inboundSchema: z.ZodType<ListCompressedOrdersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListCompressedOrdersResponse$Outbound = {
    compressed_orders?: Array<CompressedOrder$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListCompressedOrdersResponse$outboundSchema: z.ZodType<ListCompressedOrdersResponse$Outbound, z.ZodTypeDef, ListCompressedOrdersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListCompressedOrdersResponse$ {
    /** @deprecated use `ListCompressedOrdersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListCompressedOrdersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListCompressedOrdersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListCompressedOrdersResponse$Outbound, z.ZodTypeDef, ListCompressedOrdersResponse>;
    /** @deprecated use `ListCompressedOrdersResponse$Outbound` instead. */
    type Outbound = ListCompressedOrdersResponse$Outbound;
}
export declare function listCompressedOrdersResponseToJSON(listCompressedOrdersResponse: ListCompressedOrdersResponse): string;
export declare function listCompressedOrdersResponseFromJSON(jsonString: string): SafeParseResult<ListCompressedOrdersResponse, SDKValidationError>;
//# sourceMappingURL=listcompressedordersresponse.d.ts.map