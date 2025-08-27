import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BasketOrdersServiceRemoveOrdersRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The basket id.
     */
    basketId: string;
    removeOrdersRequestCreate: components.RemoveOrdersRequestCreate;
};
export type BasketOrdersServiceRemoveOrdersResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    removeOrdersResponse?: components.RemoveOrdersResponse | undefined;
    /**
     * INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why.
     *
     * @remarks
     * FAILED_PRECONDITION: The requested basket has already been submitted.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BasketOrdersServiceRemoveOrdersRequest$inboundSchema: z.ZodType<BasketOrdersServiceRemoveOrdersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceRemoveOrdersRequest$Outbound = {
    correspondent_id: string;
    basket_id: string;
    RemoveOrdersRequestCreate: components.RemoveOrdersRequestCreate$Outbound;
};
/** @internal */
export declare const BasketOrdersServiceRemoveOrdersRequest$outboundSchema: z.ZodType<BasketOrdersServiceRemoveOrdersRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceRemoveOrdersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceRemoveOrdersRequest$ {
    /** @deprecated use `BasketOrdersServiceRemoveOrdersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceRemoveOrdersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceRemoveOrdersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceRemoveOrdersRequest$Outbound, z.ZodTypeDef, BasketOrdersServiceRemoveOrdersRequest>;
    /** @deprecated use `BasketOrdersServiceRemoveOrdersRequest$Outbound` instead. */
    type Outbound = BasketOrdersServiceRemoveOrdersRequest$Outbound;
}
export declare function basketOrdersServiceRemoveOrdersRequestToJSON(basketOrdersServiceRemoveOrdersRequest: BasketOrdersServiceRemoveOrdersRequest): string;
export declare function basketOrdersServiceRemoveOrdersRequestFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceRemoveOrdersRequest, SDKValidationError>;
/** @internal */
export declare const BasketOrdersServiceRemoveOrdersResponse$inboundSchema: z.ZodType<BasketOrdersServiceRemoveOrdersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrdersServiceRemoveOrdersResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    RemoveOrdersResponse?: components.RemoveOrdersResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BasketOrdersServiceRemoveOrdersResponse$outboundSchema: z.ZodType<BasketOrdersServiceRemoveOrdersResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceRemoveOrdersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrdersServiceRemoveOrdersResponse$ {
    /** @deprecated use `BasketOrdersServiceRemoveOrdersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrdersServiceRemoveOrdersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrdersServiceRemoveOrdersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrdersServiceRemoveOrdersResponse$Outbound, z.ZodTypeDef, BasketOrdersServiceRemoveOrdersResponse>;
    /** @deprecated use `BasketOrdersServiceRemoveOrdersResponse$Outbound` instead. */
    type Outbound = BasketOrdersServiceRemoveOrdersResponse$Outbound;
}
export declare function basketOrdersServiceRemoveOrdersResponseToJSON(basketOrdersServiceRemoveOrdersResponse: BasketOrdersServiceRemoveOrdersResponse): string;
export declare function basketOrdersServiceRemoveOrdersResponseFromJSON(jsonString: string): SafeParseResult<BasketOrdersServiceRemoveOrdersResponse, SDKValidationError>;
//# sourceMappingURL=basketordersserviceremoveorders.d.ts.map