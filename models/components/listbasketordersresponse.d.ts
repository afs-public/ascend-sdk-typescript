import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BasketOrder, BasketOrder$Outbound } from "./basketorder.js";
/**
 * The response message for listing basket orders within a basket
 */
export type ListBasketOrdersResponse = {
    /**
     * The basket orders in the basket
     */
    basketOrders?: Array<BasketOrder> | undefined;
    /**
     * A token to retrieve the next page of results. Pass this value in the `page_token` field in the subsequent call to `ListBasketOrders` method to retrieve the next page of results.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListBasketOrdersResponse$inboundSchema: z.ZodType<ListBasketOrdersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListBasketOrdersResponse$Outbound = {
    basket_orders?: Array<BasketOrder$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListBasketOrdersResponse$outboundSchema: z.ZodType<ListBasketOrdersResponse$Outbound, z.ZodTypeDef, ListBasketOrdersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListBasketOrdersResponse$ {
    /** @deprecated use `ListBasketOrdersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListBasketOrdersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListBasketOrdersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListBasketOrdersResponse$Outbound, z.ZodTypeDef, ListBasketOrdersResponse>;
    /** @deprecated use `ListBasketOrdersResponse$Outbound` instead. */
    type Outbound = ListBasketOrdersResponse$Outbound;
}
export declare function listBasketOrdersResponseToJSON(listBasketOrdersResponse: ListBasketOrdersResponse): string;
export declare function listBasketOrdersResponseFromJSON(jsonString: string): SafeParseResult<ListBasketOrdersResponse, SDKValidationError>;
//# sourceMappingURL=listbasketordersresponse.d.ts.map