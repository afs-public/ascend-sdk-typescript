import * as z from "zod";
import * as components from "../components/index.js";
export type OrderPriceServicePreviewOrderCostRequest = {
    /**
     * The account id.
     */
    accountId: string;
    orderCostPreviewRequestCreate: components.OrderCostPreviewRequestCreate;
};
export type OrderPriceServicePreviewOrderCostResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    orderCostPreviewResponse?: components.OrderCostPreviewResponse | undefined;
    /**
     * INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const OrderPriceServicePreviewOrderCostRequest$inboundSchema: z.ZodType<OrderPriceServicePreviewOrderCostRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderPriceServicePreviewOrderCostRequest$Outbound = {
    account_id: string;
    OrderCostPreviewRequestCreate: components.OrderCostPreviewRequestCreate$Outbound;
};
/** @internal */
export declare const OrderPriceServicePreviewOrderCostRequest$outboundSchema: z.ZodType<OrderPriceServicePreviewOrderCostRequest$Outbound, z.ZodTypeDef, OrderPriceServicePreviewOrderCostRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderPriceServicePreviewOrderCostRequest$ {
    /** @deprecated use `OrderPriceServicePreviewOrderCostRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderPriceServicePreviewOrderCostRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderPriceServicePreviewOrderCostRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderPriceServicePreviewOrderCostRequest$Outbound, z.ZodTypeDef, OrderPriceServicePreviewOrderCostRequest>;
    /** @deprecated use `OrderPriceServicePreviewOrderCostRequest$Outbound` instead. */
    type Outbound = OrderPriceServicePreviewOrderCostRequest$Outbound;
}
/** @internal */
export declare const OrderPriceServicePreviewOrderCostResponse$inboundSchema: z.ZodType<OrderPriceServicePreviewOrderCostResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderPriceServicePreviewOrderCostResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    OrderCostPreviewResponse?: components.OrderCostPreviewResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const OrderPriceServicePreviewOrderCostResponse$outboundSchema: z.ZodType<OrderPriceServicePreviewOrderCostResponse$Outbound, z.ZodTypeDef, OrderPriceServicePreviewOrderCostResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderPriceServicePreviewOrderCostResponse$ {
    /** @deprecated use `OrderPriceServicePreviewOrderCostResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderPriceServicePreviewOrderCostResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderPriceServicePreviewOrderCostResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderPriceServicePreviewOrderCostResponse$Outbound, z.ZodTypeDef, OrderPriceServicePreviewOrderCostResponse>;
    /** @deprecated use `OrderPriceServicePreviewOrderCostResponse$Outbound` instead. */
    type Outbound = OrderPriceServicePreviewOrderCostResponse$Outbound;
}
//# sourceMappingURL=orderpriceservicepreviewordercost.d.ts.map