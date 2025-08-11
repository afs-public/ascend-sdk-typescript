import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BasketOrderCreate, BasketOrderCreate$Outbound } from "./basketordercreate.js";
/**
 * The message to add a list of basket orders to a basket
 */
export type AddOrdersRequestCreate = {
    /**
     * The orders to add to the basket. A maximum of 1000 orders can be added to a basket at a time.
     */
    basketOrders: Array<BasketOrderCreate>;
    /**
     * Format: correspondents/{correspondent}/baskets/{basket}
     */
    name: string;
};
/** @internal */
export declare const AddOrdersRequestCreate$inboundSchema: z.ZodType<AddOrdersRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AddOrdersRequestCreate$Outbound = {
    basket_orders: Array<BasketOrderCreate$Outbound>;
    name: string;
};
/** @internal */
export declare const AddOrdersRequestCreate$outboundSchema: z.ZodType<AddOrdersRequestCreate$Outbound, z.ZodTypeDef, AddOrdersRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddOrdersRequestCreate$ {
    /** @deprecated use `AddOrdersRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddOrdersRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddOrdersRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddOrdersRequestCreate$Outbound, z.ZodTypeDef, AddOrdersRequestCreate>;
    /** @deprecated use `AddOrdersRequestCreate$Outbound` instead. */
    type Outbound = AddOrdersRequestCreate$Outbound;
}
export declare function addOrdersRequestCreateToJSON(addOrdersRequestCreate: AddOrdersRequestCreate): string;
export declare function addOrdersRequestCreateFromJSON(jsonString: string): SafeParseResult<AddOrdersRequestCreate, SDKValidationError>;
//# sourceMappingURL=addordersrequestcreate.d.ts.map