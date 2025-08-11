import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BasketOrdersServiceSubmitBasketRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The basket id.
     */
    basketId: string;
    submitBasketRequestCreate: components.SubmitBasketRequestCreate;
};
export type BasketOrdersServiceSubmitBasketResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    basket?: components.Basket | undefined;
    /**
     * INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BasketOrdersServiceSubmitBasketRequest$inboundSchema: z.ZodType<BasketOrdersServiceSubmitBasketRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceSubmitBasketRequest$Outbound = {
    correspondent_id: string;
    basket_id: string;
    SubmitBasketRequestCreate: components.SubmitBasketRequestCreate$Outbound;
};
/** @internal */
export declare const BasketOrdersServiceSubmitBasketRequest$outboundSchema: z.ZodType<BasketOrdersServiceSubmitBasketRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceSubmitBasketRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceSubmitBasketRequest$ {
    /** @deprecated use `BasketOrdersServiceSubmitBasketRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceSubmitBasketRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceSubmitBasketRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceSubmitBasketRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceSubmitBasketRequest>;
    /** @deprecated use `BasketOrdersServiceSubmitBasketRequest$Outbound` instead. */
    type Outbound = BasketOrdersServiceSubmitBasketRequest$Outbound;
}
export declare function basketOrdersServiceSubmitBasketRequestToJSON(basketOrdersServiceSubmitBasketRequest: BasketOrdersServiceSubmitBasketRequest): string;
export declare function basketOrdersServiceSubmitBasketRequestFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceSubmitBasketRequest, SDKValidationError>;
/** @internal */
export declare const BasketOrdersServiceSubmitBasketResponse$inboundSchema: z.ZodType<BasketOrdersServiceSubmitBasketResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceSubmitBasketResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Basket?: components.Basket$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BasketOrdersServiceSubmitBasketResponse$outboundSchema: z.ZodType<BasketOrdersServiceSubmitBasketResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceSubmitBasketResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceSubmitBasketResponse$ {
    /** @deprecated use `BasketOrdersServiceSubmitBasketResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceSubmitBasketResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceSubmitBasketResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceSubmitBasketResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceSubmitBasketResponse>;
    /** @deprecated use `BasketOrdersServiceSubmitBasketResponse$Outbound` instead. */
    type Outbound = BasketOrdersServiceSubmitBasketResponse$Outbound;
}
export declare function basketOrdersServiceSubmitBasketResponseToJSON(basketOrdersServiceSubmitBasketResponse: BasketOrdersServiceSubmitBasketResponse): string;
export declare function basketOrdersServiceSubmitBasketResponseFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceSubmitBasketResponse, SDKValidationError>;
//# sourceMappingURL=basketordersservicesubmitbasket.d.ts.map