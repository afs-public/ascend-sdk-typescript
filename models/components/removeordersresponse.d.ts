import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BasketOrder, BasketOrder$Outbound } from "./basketorder.js";
/**
 * The response message for removing a list of basket orders by client order ID.
 */
export type RemoveOrdersResponse = {
    /**
     * The removed basket orders.
     */
    basketOrders?: Array<BasketOrder> | undefined;
    /**
     * Format: correspondents/{correspondent}/baskets/{basket}
     */
    name?: string | undefined;
};
/** @internal */
export declare const RemoveOrdersResponse$inboundSchema: z.ZodType<RemoveOrdersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveOrdersResponse$Outbound = {
    basket_orders?: Array<BasketOrder$Outbound> | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const RemoveOrdersResponse$outboundSchema: z.ZodType<RemoveOrdersResponse$Outbound, z.ZodTypeDef, RemoveOrdersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveOrdersResponse$ {
    /** @deprecated use `RemoveOrdersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveOrdersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveOrdersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveOrdersResponse$Outbound, z.ZodTypeDef, RemoveOrdersResponse>;
    /** @deprecated use `RemoveOrdersResponse$Outbound` instead. */
    type Outbound = RemoveOrdersResponse$Outbound;
}
export declare function removeOrdersResponseToJSON(removeOrdersResponse: RemoveOrdersResponse): string;
export declare function removeOrdersResponseFromJSON(jsonString: string): SafeParseResult<RemoveOrdersResponse, SDKValidationError>;
//# sourceMappingURL=removeordersresponse.d.ts.map