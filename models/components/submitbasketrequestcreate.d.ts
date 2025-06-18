import * as z from "zod";
/**
 * The message to submit a basket for execution in the market
 */
export type SubmitBasketRequestCreate = {
    /**
     * Format: correspondents/{correspondent}/baskets/{basket}
     */
    name: string;
};
/** @internal */
export declare const SubmitBasketRequestCreate$inboundSchema: z.ZodType<SubmitBasketRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type SubmitBasketRequestCreate$Outbound = {
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
//# sourceMappingURL=submitbasketrequestcreate.d.ts.map