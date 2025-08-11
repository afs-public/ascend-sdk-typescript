import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BasketOrdersServiceGetBasketRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The basket id.
     */
    basketId: string;
};
export type BasketOrdersServiceGetBasketResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    basket?: components.Basket | undefined;
    /**
     * INVALID_ARGUMENT: The correspondent_id or the basket_id could not be determined for the request.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BasketOrdersServiceGetBasketRequest$inboundSchema: z.ZodType<BasketOrdersServiceGetBasketRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceGetBasketRequest$Outbound = {
    correspondent_id: string;
    basket_id: string;
};
/** @internal */
export declare const BasketOrdersServiceGetBasketRequest$outboundSchema: z.ZodType<BasketOrdersServiceGetBasketRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceGetBasketRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceGetBasketRequest$ {
    /** @deprecated use `BasketOrdersServiceGetBasketRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceGetBasketRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceGetBasketRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceGetBasketRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceGetBasketRequest>;
    /** @deprecated use `BasketOrdersServiceGetBasketRequest$Outbound` instead. */
    type Outbound = BasketOrdersServiceGetBasketRequest$Outbound;
}
export declare function basketOrdersServiceGetBasketRequestToJSON(basketOrdersServiceGetBasketRequest: BasketOrdersServiceGetBasketRequest): string;
export declare function basketOrdersServiceGetBasketRequestFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceGetBasketRequest, SDKValidationError>;
/** @internal */
export declare const BasketOrdersServiceGetBasketResponse$inboundSchema: z.ZodType<BasketOrdersServiceGetBasketResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceGetBasketResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Basket?: components.Basket$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BasketOrdersServiceGetBasketResponse$outboundSchema: z.ZodType<BasketOrdersServiceGetBasketResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceGetBasketResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceGetBasketResponse$ {
    /** @deprecated use `BasketOrdersServiceGetBasketResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceGetBasketResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceGetBasketResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceGetBasketResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceGetBasketResponse>;
    /** @deprecated use `BasketOrdersServiceGetBasketResponse$Outbound` instead. */
    type Outbound = BasketOrdersServiceGetBasketResponse$Outbound;
}
export declare function basketOrdersServiceGetBasketResponseToJSON(basketOrdersServiceGetBasketResponse: BasketOrdersServiceGetBasketResponse): string;
export declare function basketOrdersServiceGetBasketResponseFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceGetBasketResponse, SDKValidationError>;
//# sourceMappingURL=basketordersservicegetbasket.d.ts.map