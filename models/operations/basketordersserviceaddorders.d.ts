import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BasketOrdersServiceAddOrdersRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The basket id.
     */
    basketId: string;
    addOrdersRequestCreate: components.AddOrdersRequestCreate;
};
export type BasketOrdersServiceAddOrdersResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    basket?: components.Basket | undefined;
    /**
     * INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why.
     *
     * @remarks
     * FAILED_PRECONDITION: The requested basket has already been submitted.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BasketOrdersServiceAddOrdersRequest$inboundSchema: z.ZodType<BasketOrdersServiceAddOrdersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceAddOrdersRequest$Outbound = {
    correspondent_id: string;
    basket_id: string;
    AddOrdersRequestCreate: components.AddOrdersRequestCreate$Outbound;
};
/** @internal */
export declare const BasketOrdersServiceAddOrdersRequest$outboundSchema: z.ZodType<BasketOrdersServiceAddOrdersRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceAddOrdersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceAddOrdersRequest$ {
    /** @deprecated use `BasketOrdersServiceAddOrdersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceAddOrdersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceAddOrdersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceAddOrdersRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceAddOrdersRequest>;
    /** @deprecated use `BasketOrdersServiceAddOrdersRequest$Outbound` instead. */
    type Outbound = BasketOrdersServiceAddOrdersRequest$Outbound;
}
export declare function basketOrdersServiceAddOrdersRequestToJSON(basketOrdersServiceAddOrdersRequest: BasketOrdersServiceAddOrdersRequest): string;
export declare function basketOrdersServiceAddOrdersRequestFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceAddOrdersRequest, SDKValidationError>;
/** @internal */
export declare const BasketOrdersServiceAddOrdersResponse$inboundSchema: z.ZodType<BasketOrdersServiceAddOrdersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceAddOrdersResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Basket?: components.Basket$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BasketOrdersServiceAddOrdersResponse$outboundSchema: z.ZodType<BasketOrdersServiceAddOrdersResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceAddOrdersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceAddOrdersResponse$ {
    /** @deprecated use `BasketOrdersServiceAddOrdersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceAddOrdersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceAddOrdersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceAddOrdersResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceAddOrdersResponse>;
    /** @deprecated use `BasketOrdersServiceAddOrdersResponse$Outbound` instead. */
    type Outbound = BasketOrdersServiceAddOrdersResponse$Outbound;
}
export declare function basketOrdersServiceAddOrdersResponseToJSON(basketOrdersServiceAddOrdersResponse: BasketOrdersServiceAddOrdersResponse): string;
export declare function basketOrdersServiceAddOrdersResponseFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceAddOrdersResponse, SDKValidationError>;
//# sourceMappingURL=basketordersserviceaddorders.d.ts.map