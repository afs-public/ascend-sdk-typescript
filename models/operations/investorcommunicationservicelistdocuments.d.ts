import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type InvestorCommunicationServiceListDocumentsRequest = {
    /**
     * The maximum number of items to return; The service may return fewer than this value
     */
    pageSize?: number | undefined;
    /**
     * Token used to get a specific page of results
     */
    pageToken?: string | undefined;
    /**
     * CEL filter to be applied against the documents; Providing a correspondent to search for is required; Only one correspondent can be searched at a time
     */
    filter?: string | undefined;
};
export type InvestorCommunicationServiceListDocumentsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listDocumentsResponse?: components.ListDocumentsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const InvestorCommunicationServiceListDocumentsRequest$inboundSchema: z.ZodType<InvestorCommunicationServiceListDocumentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestorCommunicationServiceListDocumentsRequest$Outbound = {
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const InvestorCommunicationServiceListDocumentsRequest$outboundSchema: z.ZodType<InvestorCommunicationServiceListDocumentsRequest$Outbound, z.ZodTypeDef, InvestorCommunicationServiceListDocumentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestorCommunicationServiceListDocumentsRequest$ {
    /** @deprecated use `InvestorCommunicationServiceListDocumentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestorCommunicationServiceListDocumentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestorCommunicationServiceListDocumentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestorCommunicationServiceListDocumentsRequest$Outbound, z.ZodTypeDef, InvestorCommunicationServiceListDocumentsRequest>;
    /** @deprecated use `InvestorCommunicationServiceListDocumentsRequest$Outbound` instead. */
    type Outbound = InvestorCommunicationServiceListDocumentsRequest$Outbound;
}
export declare function investorCommunicationServiceListDocumentsRequestToJSON(investorCommunicationServiceListDocumentsRequest: InvestorCommunicationServiceListDocumentsRequest): string;
export declare function investorCommunicationServiceListDocumentsRequestFromJSON(jsonString: string): SafeParseResult<InvestorCommunicationServiceListDocumentsRequest, SDKValidationError>;
/** @internal */
export declare const InvestorCommunicationServiceListDocumentsResponse$inboundSchema: z.ZodType<InvestorCommunicationServiceListDocumentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestorCommunicationServiceListDocumentsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListDocumentsResponse?: components.ListDocumentsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const InvestorCommunicationServiceListDocumentsResponse$outboundSchema: z.ZodType<InvestorCommunicationServiceListDocumentsResponse$Outbound, z.ZodTypeDef, InvestorCommunicationServiceListDocumentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestorCommunicationServiceListDocumentsResponse$ {
    /** @deprecated use `InvestorCommunicationServiceListDocumentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestorCommunicationServiceListDocumentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestorCommunicationServiceListDocumentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestorCommunicationServiceListDocumentsResponse$Outbound, z.ZodTypeDef, InvestorCommunicationServiceListDocumentsResponse>;
    /** @deprecated use `InvestorCommunicationServiceListDocumentsResponse$Outbound` instead. */
    type Outbound = InvestorCommunicationServiceListDocumentsResponse$Outbound;
}
export declare function investorCommunicationServiceListDocumentsResponseToJSON(investorCommunicationServiceListDocumentsResponse: InvestorCommunicationServiceListDocumentsResponse): string;
export declare function investorCommunicationServiceListDocumentsResponseFromJSON(jsonString: string): SafeParseResult<InvestorCommunicationServiceListDocumentsResponse, SDKValidationError>;
//# sourceMappingURL=investorcommunicationservicelistdocuments.d.ts.map