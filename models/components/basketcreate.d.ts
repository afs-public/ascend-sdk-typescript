import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The message describing a basket
 */
export type BasketCreate = {
    /**
     * User-supplied unique basket ID. Cannot be more than 40 characters long.
     */
    clientBasketId: string;
    /**
     * The unique id for the correspondent for the basket
     */
    correspondentId: string;
};
/** @internal */
export declare const BasketCreate$inboundSchema: z.ZodType<BasketCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketCreate$Outbound = {
    client_basket_id: string;
    correspondent_id: string;
};
/** @internal */
export declare const BasketCreate$outboundSchema: z.ZodType<BasketCreate$Outbound, z.ZodTypeDef, BasketCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketCreate$ {
    /** @deprecated use `BasketCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketCreate$Outbound, z.ZodTypeDef, BasketCreate>;
    /** @deprecated use `BasketCreate$Outbound` instead. */
    type Outbound = BasketCreate$Outbound;
}
export declare function basketCreateToJSON(basketCreate: BasketCreate): string;
export declare function basketCreateFromJSON(jsonString: string): SafeParseResult<BasketCreate, SDKValidationError>;
//# sourceMappingURL=basketcreate.d.ts.map