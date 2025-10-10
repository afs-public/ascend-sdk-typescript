import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type OrderServiceSetExtraReportingDataRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The order id.
     */
    orderId: string;
    setExtraReportingDataRequestCreate: components.SetExtraReportingDataRequestCreate;
};
export type OrderServiceSetExtraReportingDataResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    order?: components.Order | undefined;
    /**
     * INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why.
     *
     * @remarks
     * FAILED_PRECONDITION: The order is not in a state that allows extra reporting data to be set.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const OrderServiceSetExtraReportingDataRequest$inboundSchema: z.ZodType<OrderServiceSetExtraReportingDataRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceSetExtraReportingDataRequest$Outbound = {
    account_id: string;
    order_id: string;
    SetExtraReportingDataRequestCreate: components.SetExtraReportingDataRequestCreate$Outbound;
};
/** @internal */
export declare const OrderServiceSetExtraReportingDataRequest$outboundSchema: z.ZodType<OrderServiceSetExtraReportingDataRequest$Outbound, z.ZodTypeDef, OrderServiceSetExtraReportingDataRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceSetExtraReportingDataRequest$ {
    /** @deprecated use `OrderServiceSetExtraReportingDataRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceSetExtraReportingDataRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceSetExtraReportingDataRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceSetExtraReportingDataRequest$Outbound, z.ZodTypeDef, OrderServiceSetExtraReportingDataRequest>;
    /** @deprecated use `OrderServiceSetExtraReportingDataRequest$Outbound` instead. */
    type Outbound = OrderServiceSetExtraReportingDataRequest$Outbound;
}
export declare function orderServiceSetExtraReportingDataRequestToJSON(orderServiceSetExtraReportingDataRequest: OrderServiceSetExtraReportingDataRequest): string;
export declare function orderServiceSetExtraReportingDataRequestFromJSON(jsonString: string): SafeParseResult<OrderServiceSetExtraReportingDataRequest, SDKValidationError>;
/** @internal */
export declare const OrderServiceSetExtraReportingDataResponse$inboundSchema: z.ZodType<OrderServiceSetExtraReportingDataResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderServiceSetExtraReportingDataResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Order?: components.Order$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const OrderServiceSetExtraReportingDataResponse$outboundSchema: z.ZodType<OrderServiceSetExtraReportingDataResponse$Outbound, z.ZodTypeDef, OrderServiceSetExtraReportingDataResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderServiceSetExtraReportingDataResponse$ {
    /** @deprecated use `OrderServiceSetExtraReportingDataResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderServiceSetExtraReportingDataResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderServiceSetExtraReportingDataResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderServiceSetExtraReportingDataResponse$Outbound, z.ZodTypeDef, OrderServiceSetExtraReportingDataResponse>;
    /** @deprecated use `OrderServiceSetExtraReportingDataResponse$Outbound` instead. */
    type Outbound = OrderServiceSetExtraReportingDataResponse$Outbound;
}
export declare function orderServiceSetExtraReportingDataResponseToJSON(orderServiceSetExtraReportingDataResponse: OrderServiceSetExtraReportingDataResponse): string;
export declare function orderServiceSetExtraReportingDataResponseFromJSON(jsonString: string): SafeParseResult<OrderServiceSetExtraReportingDataResponse, SDKValidationError>;
//# sourceMappingURL=orderservicesetextrareportingdata.d.ts.map