import * as z from "zod";
import * as components from "../components/index.js";
export type OrderPriceServiceRetrieveQuoteRequest = {
    /**
     * The account id.
     */
    accountId: string;
    retrieveQuoteRequestCreate: components.RetrieveQuoteRequestCreate;
};
export type OrderPriceServiceRetrieveQuoteResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    retrieveQuoteResponse?: components.RetrieveQuoteResponse | undefined;
    /**
     * INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const OrderPriceServiceRetrieveQuoteRequest$inboundSchema: z.ZodType<OrderPriceServiceRetrieveQuoteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderPriceServiceRetrieveQuoteRequest$Outbound = {
    account_id: string;
    RetrieveQuoteRequestCreate: components.RetrieveQuoteRequestCreate$Outbound;
};
/** @internal */
export declare const OrderPriceServiceRetrieveQuoteRequest$outboundSchema: z.ZodType<OrderPriceServiceRetrieveQuoteRequest$Outbound, z.ZodTypeDef, OrderPriceServiceRetrieveQuoteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderPriceServiceRetrieveQuoteRequest$ {
    /** @deprecated use `OrderPriceServiceRetrieveQuoteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderPriceServiceRetrieveQuoteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderPriceServiceRetrieveQuoteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderPriceServiceRetrieveQuoteRequest$Outbound, z.ZodTypeDef, OrderPriceServiceRetrieveQuoteRequest>;
    /** @deprecated use `OrderPriceServiceRetrieveQuoteRequest$Outbound` instead. */
    type Outbound = OrderPriceServiceRetrieveQuoteRequest$Outbound;
}
/** @internal */
export declare const OrderPriceServiceRetrieveQuoteResponse$inboundSchema: z.ZodType<OrderPriceServiceRetrieveQuoteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderPriceServiceRetrieveQuoteResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    RetrieveQuoteResponse?: components.RetrieveQuoteResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const OrderPriceServiceRetrieveQuoteResponse$outboundSchema: z.ZodType<OrderPriceServiceRetrieveQuoteResponse$Outbound, z.ZodTypeDef, OrderPriceServiceRetrieveQuoteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderPriceServiceRetrieveQuoteResponse$ {
    /** @deprecated use `OrderPriceServiceRetrieveQuoteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderPriceServiceRetrieveQuoteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderPriceServiceRetrieveQuoteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderPriceServiceRetrieveQuoteResponse$Outbound, z.ZodTypeDef, OrderPriceServiceRetrieveQuoteResponse>;
    /** @deprecated use `OrderPriceServiceRetrieveQuoteResponse$Outbound` instead. */
    type Outbound = OrderPriceServiceRetrieveQuoteResponse$Outbound;
}
//# sourceMappingURL=orderpriceserviceretrievequote.d.ts.map