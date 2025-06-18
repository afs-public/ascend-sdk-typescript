import * as z from "zod";
import * as components from "../components/index.js";
export type OrderServiceCancelOrderRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The order id.
     */
    orderId: string;
    cancelOrderRequestCreate: components.CancelOrderRequestCreate;
};
export type OrderServiceCancelOrderResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    order?: components.Order | undefined;
    /**
     * INVALID_ARGUMENT: The account_id or the order_id could not be determined for the request.
     *
     * @remarks
     * FAILED_PRECONDITION: The order is not in a cancelable state
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const OrderServiceCancelOrderRequest$inboundSchema: z.ZodType<OrderServiceCancelOrderRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceCancelOrderRequest$Outbound = {
    account_id: string;
    order_id: string;
    CancelOrderRequestCreate: components.CancelOrderRequestCreate$Outbound;
};
/** @internal */
export declare const OrderServiceCancelOrderRequest$outboundSchema: z.ZodType<OrderServiceCancelOrderRequest$Outbound, z.ZodTypeDef, OrderServiceCancelOrderRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceCancelOrderRequest$ {
    /** @deprecated use `OrderServiceCancelOrderRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceCancelOrderRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceCancelOrderRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceCancelOrderRequest$Outbound, z.ZodTypeDef, OrderServiceCancelOrderRequest>;
    /** @deprecated use `OrderServiceCancelOrderRequest$Outbound` instead. */
    type Outbound = OrderServiceCancelOrderRequest$Outbound;
}
/** @internal */
export declare const OrderServiceCancelOrderResponse$inboundSchema: z.ZodType<OrderServiceCancelOrderResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceCancelOrderResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Order?: components.Order$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const OrderServiceCancelOrderResponse$outboundSchema: z.ZodType<OrderServiceCancelOrderResponse$Outbound, z.ZodTypeDef, OrderServiceCancelOrderResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceCancelOrderResponse$ {
    /** @deprecated use `OrderServiceCancelOrderResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceCancelOrderResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceCancelOrderResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceCancelOrderResponse$Outbound, z.ZodTypeDef, OrderServiceCancelOrderResponse>;
    /** @deprecated use `OrderServiceCancelOrderResponse$Outbound` instead. */
    type Outbound = OrderServiceCancelOrderResponse$Outbound;
}
//# sourceMappingURL=orderservicecancelorder.d.ts.map