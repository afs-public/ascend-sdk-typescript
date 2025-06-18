import * as z from "zod";
import * as components from "../components/index.js";
export type OrderPriceServiceRetrieveFixedIncomeMarksRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    retrieveFixedIncomeMarksRequestCreate: components.RetrieveFixedIncomeMarksRequestCreate;
};
export type OrderPriceServiceRetrieveFixedIncomeMarksResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    retrieveFixedIncomeMarksResponse?: components.RetrieveFixedIncomeMarksResponse | undefined;
    /**
     * INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const OrderPriceServiceRetrieveFixedIncomeMarksRequest$inboundSchema: z.ZodType<OrderPriceServiceRetrieveFixedIncomeMarksRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderPriceServiceRetrieveFixedIncomeMarksRequest$Outbound = {
    correspondent_id: string;
    RetrieveFixedIncomeMarksRequestCreate: components.RetrieveFixedIncomeMarksRequestCreate$Outbound;
};
/** @internal */
export declare const OrderPriceServiceRetrieveFixedIncomeMarksRequest$outboundSchema: z.ZodType<OrderPriceServiceRetrieveFixedIncomeMarksRequest$Outbound, z.ZodTypeDef, OrderPriceServiceRetrieveFixedIncomeMarksRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderPriceServiceRetrieveFixedIncomeMarksRequest$ {
    /** @deprecated use `OrderPriceServiceRetrieveFixedIncomeMarksRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderPriceServiceRetrieveFixedIncomeMarksRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderPriceServiceRetrieveFixedIncomeMarksRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderPriceServiceRetrieveFixedIncomeMarksRequest$Outbound, z.ZodTypeDef, OrderPriceServiceRetrieveFixedIncomeMarksRequest>;
    /** @deprecated use `OrderPriceServiceRetrieveFixedIncomeMarksRequest$Outbound` instead. */
    type Outbound = OrderPriceServiceRetrieveFixedIncomeMarksRequest$Outbound;
}
/** @internal */
export declare const OrderPriceServiceRetrieveFixedIncomeMarksResponse$inboundSchema: z.ZodType<OrderPriceServiceRetrieveFixedIncomeMarksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderPriceServiceRetrieveFixedIncomeMarksResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    RetrieveFixedIncomeMarksResponse?: components.RetrieveFixedIncomeMarksResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const OrderPriceServiceRetrieveFixedIncomeMarksResponse$outboundSchema: z.ZodType<OrderPriceServiceRetrieveFixedIncomeMarksResponse$Outbound, z.ZodTypeDef, OrderPriceServiceRetrieveFixedIncomeMarksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderPriceServiceRetrieveFixedIncomeMarksResponse$ {
    /** @deprecated use `OrderPriceServiceRetrieveFixedIncomeMarksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderPriceServiceRetrieveFixedIncomeMarksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderPriceServiceRetrieveFixedIncomeMarksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderPriceServiceRetrieveFixedIncomeMarksResponse$Outbound, z.ZodTypeDef, OrderPriceServiceRetrieveFixedIncomeMarksResponse>;
    /** @deprecated use `OrderPriceServiceRetrieveFixedIncomeMarksResponse$Outbound` instead. */
    type Outbound = OrderPriceServiceRetrieveFixedIncomeMarksResponse$Outbound;
}
//# sourceMappingURL=orderpriceserviceretrievefixedincomemarks.d.ts.map