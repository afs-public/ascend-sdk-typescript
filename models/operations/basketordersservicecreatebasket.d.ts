import * as z from "zod";
import * as components from "../components/index.js";
export type BasketOrdersServiceCreateBasketRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    basketCreate: components.BasketCreate;
};
export type BasketOrdersServiceCreateBasketResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    basket?: components.Basket | undefined;
    /**
     * INVALID_ARGUMENT: Either the correspondent doesn't have a valid average price account, or there was an issue with one or more fields in the request.  In the latter case, the message field will contain details about which field failed validation and why.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BasketOrdersServiceCreateBasketRequest$inboundSchema: z.ZodType<BasketOrdersServiceCreateBasketRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceCreateBasketRequest$Outbound = {
    correspondent_id: string;
    BasketCreate: components.BasketCreate$Outbound;
};
/** @internal */
export declare const BasketOrdersServiceCreateBasketRequest$outboundSchema: z.ZodType<BasketOrdersServiceCreateBasketRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceCreateBasketRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceCreateBasketRequest$ {
    /** @deprecated use `BasketOrdersServiceCreateBasketRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceCreateBasketRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceCreateBasketRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceCreateBasketRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceCreateBasketRequest>;
    /** @deprecated use `BasketOrdersServiceCreateBasketRequest$Outbound` instead. */
    type Outbound = BasketOrdersServiceCreateBasketRequest$Outbound;
}
/** @internal */
export declare const BasketOrdersServiceCreateBasketResponse$inboundSchema: z.ZodType<BasketOrdersServiceCreateBasketResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceCreateBasketResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Basket?: components.Basket$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BasketOrdersServiceCreateBasketResponse$outboundSchema: z.ZodType<BasketOrdersServiceCreateBasketResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceCreateBasketResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceCreateBasketResponse$ {
    /** @deprecated use `BasketOrdersServiceCreateBasketResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceCreateBasketResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceCreateBasketResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceCreateBasketResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceCreateBasketResponse>;
    /** @deprecated use `BasketOrdersServiceCreateBasketResponse$Outbound` instead. */
    type Outbound = BasketOrdersServiceCreateBasketResponse$Outbound;
}
//# sourceMappingURL=basketordersservicecreatebasket.d.ts.map