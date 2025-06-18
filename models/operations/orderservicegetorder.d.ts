import * as z from "zod";
import * as components from "../components/index.js";
export type OrderServiceGetOrderRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The order id.
     */
    orderId: string;
};
export type OrderServiceGetOrderResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    order?: components.Order | undefined;
    /**
     * INVALID_ARGUMENT: The account_id or the order_id could not be determined for the request.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const OrderServiceGetOrderRequest$inboundSchema: z.ZodType<OrderServiceGetOrderRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceGetOrderRequest$Outbound = {
    account_id: string;
    order_id: string;
};
/** @internal */
export declare const OrderServiceGetOrderRequest$outboundSchema: z.ZodType<OrderServiceGetOrderRequest$Outbound, z.ZodTypeDef, OrderServiceGetOrderRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceGetOrderRequest$ {
    /** @deprecated use `OrderServiceGetOrderRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceGetOrderRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceGetOrderRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceGetOrderRequest$Outbound, z.ZodTypeDef, OrderServiceGetOrderRequest>;
    /** @deprecated use `OrderServiceGetOrderRequest$Outbound` instead. */
    type Outbound = OrderServiceGetOrderRequest$Outbound;
}
/** @internal */
export declare const OrderServiceGetOrderResponse$inboundSchema: z.ZodType<OrderServiceGetOrderResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceGetOrderResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Order?: components.Order$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const OrderServiceGetOrderResponse$outboundSchema: z.ZodType<OrderServiceGetOrderResponse$Outbound, z.ZodTypeDef, OrderServiceGetOrderResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceGetOrderResponse$ {
    /** @deprecated use `OrderServiceGetOrderResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceGetOrderResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceGetOrderResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceGetOrderResponse$Outbound, z.ZodTypeDef, OrderServiceGetOrderResponse>;
    /** @deprecated use `OrderServiceGetOrderResponse$Outbound` instead. */
    type Outbound = OrderServiceGetOrderResponse$Outbound;
}
//# sourceMappingURL=orderservicegetorder.d.ts.map