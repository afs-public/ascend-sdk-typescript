import * as z from "zod";
/**
 * The message to request cancellation of an existing order
 */
export type CancelOrderRequestCreate = {
    /**
     * Format: accounts/{account_id}/orders/{order_id}
     */
    name: string;
};
/** @internal */
export declare const CancelOrderRequestCreate$inboundSchema: z.ZodType<CancelOrderRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelOrderRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const CancelOrderRequestCreate$outboundSchema: z.ZodType<CancelOrderRequestCreate$Outbound, z.ZodTypeDef, CancelOrderRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelOrderRequestCreate$ {
    /** @deprecated use `CancelOrderRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelOrderRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelOrderRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelOrderRequestCreate$Outbound, z.ZodTypeDef, CancelOrderRequestCreate>;
    /** @deprecated use `CancelOrderRequestCreate$Outbound` instead. */
    type Outbound = CancelOrderRequestCreate$Outbound;
}
//# sourceMappingURL=cancelorderrequestcreate.d.ts.map