import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The message to submit a basket for execution in the market
 */
export type SubmitBasketRequestCreate = {
    /**
     * Time the basket submission request was sent by the client. This is a required field for clients that we report on behalf of, and it will be validated accordingly.
     */
    clientBasketSubmitTime?: Date | null | undefined;
    /**
     * Format: correspondents/{correspondent}/baskets/{basket}
     */
    name: string;
};
/** @internal */
export declare const SubmitBasketRequestCreate$inboundSchema: z.ZodType<SubmitBasketRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type SubmitBasketRequestCreate$Outbound = {
    client_basket_submit_time?: string | null | undefined;
    name: string;
};
/** @internal */
export declare const SubmitBasketRequestCreate$outboundSchema: z.ZodType<SubmitBasketRequestCreate$Outbound, z.ZodTypeDef, SubmitBasketRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubmitBasketRequestCreate$ {
    /** @deprecated use `SubmitBasketRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubmitBasketRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubmitBasketRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubmitBasketRequestCreate$Outbound, z.ZodTypeDef, SubmitBasketRequestCreate>;
    /** @deprecated use `SubmitBasketRequestCreate$Outbound` instead. */
    type Outbound = SubmitBasketRequestCreate$Outbound;
}
export declare function submitBasketRequestCreateToJSON(submitBasketRequestCreate: SubmitBasketRequestCreate): string;
export declare function submitBasketRequestCreateFromJSON(jsonString: string): SafeParseResult<SubmitBasketRequestCreate, SDKValidationError>;
//# sourceMappingURL=submitbasketrequestcreate.d.ts.map