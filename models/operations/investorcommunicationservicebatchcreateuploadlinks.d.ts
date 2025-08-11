import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type InvestorCommunicationServiceBatchCreateUploadLinksResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    batchCreateUploadLinksResponse?: components.BatchCreateUploadLinksResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const InvestorCommunicationServiceBatchCreateUploadLinksResponse$inboundSchema: z.ZodType<InvestorCommunicationServiceBatchCreateUploadLinksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestorCommunicationServiceBatchCreateUploadLinksResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BatchCreateUploadLinksResponse?: components.BatchCreateUploadLinksResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const InvestorCommunicationServiceBatchCreateUploadLinksResponse$outboundSchema: z.ZodType<InvestorCommunicationServiceBatchCreateUploadLinksResponse$Outbound, z.ZodTypeDef, InvestorCommunicationServiceBatchCreateUploadLinksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestorCommunicationServiceBatchCreateUploadLinksResponse$ {
    /** @deprecated use `InvestorCommunicationServiceBatchCreateUploadLinksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestorCommunicationServiceBatchCreateUploadLinksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestorCommunicationServiceBatchCreateUploadLinksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestorCommunicationServiceBatchCreateUploadLinksResponse$Outbound, z.ZodTypeDef, InvestorCommunicationServiceBatchCreateUploadLinksResponse>;
    /** @deprecated use `InvestorCommunicationServiceBatchCreateUploadLinksResponse$Outbound` instead. */
    type Outbound = InvestorCommunicationServiceBatchCreateUploadLinksResponse$Outbound;
}
export declare function investorCommunicationServiceBatchCreateUploadLinksResponseToJSON(investorCommunicationServiceBatchCreateUploadLinksResponse: InvestorCommunicationServiceBatchCreateUploadLinksResponse): string;
export declare function investorCommunicationServiceBatchCreateUploadLinksResponseFromJSON(jsonString: string): SafeParseResult<InvestorCommunicationServiceBatchCreateUploadLinksResponse, SDKValidationError>;
//# sourceMappingURL=investorcommunicationservicebatchcreateuploadlinks.d.ts.map