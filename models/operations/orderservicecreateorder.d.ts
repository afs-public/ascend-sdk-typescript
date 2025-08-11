import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OrderServiceCreateOrderRequest = {
    /**
     * The account id.
     */
    accountId: string;
    orderCreate: components.OrderCreate;
};
export type OrderServiceCreateOrderResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    order?: components.Order | undefined;
    /**
     * INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const OrderServiceCreateOrderRequest$inboundSchema: z.ZodType<OrderServiceCreateOrderRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceCreateOrderRequest$Outbound = {
    account_id: string;
    OrderCreate: components.OrderCreate$Outbound;
};
/** @internal */
export declare const OrderServiceCreateOrderRequest$outboundSchema: z.ZodType<OrderServiceCreateOrderRequest$Outbound, z.ZodTypeDef, OrderServiceCreateOrderRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceCreateOrderRequest$ {
    /** @deprecated use `OrderServiceCreateOrderRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceCreateOrderRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceCreateOrderRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceCreateOrderRequest$Outbound, z.ZodTypeDef, OrderServiceCreateOrderRequest>;
    /** @deprecated use `OrderServiceCreateOrderRequest$Outbound` instead. */
    type Outbound = OrderServiceCreateOrderRequest$Outbound;
}
export declare function orderServiceCreateOrderRequestToJSON(orderServiceCreateOrderRequest: OrderServiceCreateOrderRequest): string;
export declare function orderServiceCreateOrderRequestFromJSON(jsonString: string): SafeParseResult<OrderServiceCreateOrderRequest, SDKValidationError>;
/** @internal */
export declare const OrderServiceCreateOrderResponse$inboundSchema: z.ZodType<OrderServiceCreateOrderResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceCreateOrderResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Order?: components.Order$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const OrderServiceCreateOrderResponse$outboundSchema: z.ZodType<OrderServiceCreateOrderResponse$Outbound, z.ZodTypeDef, OrderServiceCreateOrderResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceCreateOrderResponse$ {
    /** @deprecated use `OrderServiceCreateOrderResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceCreateOrderResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceCreateOrderResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceCreateOrderResponse$Outbound, z.ZodTypeDef, OrderServiceCreateOrderResponse>;
    /** @deprecated use `OrderServiceCreateOrderResponse$Outbound` instead. */
    type Outbound = OrderServiceCreateOrderResponse$Outbound;
}
export declare function orderServiceCreateOrderResponseToJSON(orderServiceCreateOrderResponse: OrderServiceCreateOrderResponse): string;
export declare function orderServiceCreateOrderResponseFromJSON(jsonString: string): SafeParseResult<OrderServiceCreateOrderResponse, SDKValidationError>;
//# sourceMappingURL=orderservicecreateorder.d.ts.map