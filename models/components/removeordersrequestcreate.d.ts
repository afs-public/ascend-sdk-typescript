import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The message to remove a list of basket orders by client order ID.
 */
export type RemoveOrdersRequestCreate = {
    /**
     * The client order IDs of the basket orders to remove. A maximum of 500 orders can be removed from a basket at a time.
     */
    clientOrderIds: Array<string>;
    /**
     * Format: correspondents/{correspondent}/baskets/{basket}
     */
    name: string;
};
/** @internal */
export declare const RemoveOrdersRequestCreate$inboundSchema: z.ZodType<RemoveOrdersRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveOrdersRequestCreate$Outbound = {
    client_order_ids: Array<string>;
    name: string;
};
/** @internal */
export declare const RemoveOrdersRequestCreate$outboundSchema: z.ZodType<RemoveOrdersRequestCreate$Outbound, z.ZodTypeDef, RemoveOrdersRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveOrdersRequestCreate$ {
    /** @deprecated use `RemoveOrdersRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveOrdersRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveOrdersRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveOrdersRequestCreate$Outbound, z.ZodTypeDef, RemoveOrdersRequestCreate>;
    /** @deprecated use `RemoveOrdersRequestCreate$Outbound` instead. */
    type Outbound = RemoveOrdersRequestCreate$Outbound;
}
export declare function removeOrdersRequestCreateToJSON(removeOrdersRequestCreate: RemoveOrdersRequestCreate): string;
export declare function removeOrdersRequestCreateFromJSON(jsonString: string): SafeParseResult<RemoveOrdersRequestCreate, SDKValidationError>;
//# sourceMappingURL=removeordersrequestcreate.d.ts.map