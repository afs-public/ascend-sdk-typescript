import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Optional. The view to return. Defaults to BASIC.
 */
export declare enum CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export type CustomerIdentificationResultServiceGetCustomerIdentificationRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The customerIdentification id.
     */
    customerIdentificationId: string;
    /**
     * Optional. The view to return. Defaults to BASIC.
     */
    view?: CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView | undefined;
};
export type CustomerIdentificationResultServiceGetCustomerIdentificationResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    customerIdentification?: components.CustomerIdentification | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView$inboundSchema: z.ZodNativeEnum<typeof CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView>;
/** @internal */
export declare const CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView$outboundSchema: z.ZodNativeEnum<typeof CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView$ {
    /** @deprecated use `CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<typeof CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView>;
    /** @deprecated use `CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<typeof CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView>;
}
/** @internal */
export declare const CustomerIdentificationResultServiceGetCustomerIdentificationRequest$inboundSchema: z.ZodType<CustomerIdentificationResultServiceGetCustomerIdentificationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerIdentificationResultServiceGetCustomerIdentificationRequest$Outbound = {
    correspondent_id: string;
    customerIdentification_id: string;
    view?: string | undefined;
};
/** @internal */
export declare const CustomerIdentificationResultServiceGetCustomerIdentificationRequest$outboundSchema: z.ZodType<CustomerIdentificationResultServiceGetCustomerIdentificationRequest$Outbound, z.ZodTypeDef, CustomerIdentificationResultServiceGetCustomerIdentificationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerIdentificationResultServiceGetCustomerIdentificationRequest$ {
    /** @deprecated use `CustomerIdentificationResultServiceGetCustomerIdentificationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerIdentificationResultServiceGetCustomerIdentificationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerIdentificationResultServiceGetCustomerIdentificationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerIdentificationResultServiceGetCustomerIdentificationRequest$Outbound, z.ZodTypeDef, CustomerIdentificationResultServiceGetCustomerIdentificationRequest>;
    /** @deprecated use `CustomerIdentificationResultServiceGetCustomerIdentificationRequest$Outbound` instead. */
    type Outbound = CustomerIdentificationResultServiceGetCustomerIdentificationRequest$Outbound;
}
export declare function customerIdentificationResultServiceGetCustomerIdentificationRequestToJSON(customerIdentificationResultServiceGetCustomerIdentificationRequest: CustomerIdentificationResultServiceGetCustomerIdentificationRequest): string;
export declare function customerIdentificationResultServiceGetCustomerIdentificationRequestFromJSON(jsonString: string): SafeParseResult<CustomerIdentificationResultServiceGetCustomerIdentificationRequest, SDKValidationError>;
/** @internal */
export declare const CustomerIdentificationResultServiceGetCustomerIdentificationResponse$inboundSchema: z.ZodType<CustomerIdentificationResultServiceGetCustomerIdentificationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerIdentificationResultServiceGetCustomerIdentificationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CustomerIdentification?: components.CustomerIdentification$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CustomerIdentificationResultServiceGetCustomerIdentificationResponse$outboundSchema: z.ZodType<CustomerIdentificationResultServiceGetCustomerIdentificationResponse$Outbound, z.ZodTypeDef, CustomerIdentificationResultServiceGetCustomerIdentificationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerIdentificationResultServiceGetCustomerIdentificationResponse$ {
    /** @deprecated use `CustomerIdentificationResultServiceGetCustomerIdentificationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerIdentificationResultServiceGetCustomerIdentificationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerIdentificationResultServiceGetCustomerIdentificationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerIdentificationResultServiceGetCustomerIdentificationResponse$Outbound, z.ZodTypeDef, CustomerIdentificationResultServiceGetCustomerIdentificationResponse>;
    /** @deprecated use `CustomerIdentificationResultServiceGetCustomerIdentificationResponse$Outbound` instead. */
    type Outbound = CustomerIdentificationResultServiceGetCustomerIdentificationResponse$Outbound;
}
export declare function customerIdentificationResultServiceGetCustomerIdentificationResponseToJSON(customerIdentificationResultServiceGetCustomerIdentificationResponse: CustomerIdentificationResultServiceGetCustomerIdentificationResponse): string;
export declare function customerIdentificationResultServiceGetCustomerIdentificationResponseFromJSON(jsonString: string): SafeParseResult<CustomerIdentificationResultServiceGetCustomerIdentificationResponse, SDKValidationError>;
//# sourceMappingURL=customeridentificationresultservicegetcustomeridentification.d.ts.map