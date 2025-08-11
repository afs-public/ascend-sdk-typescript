import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RetirementConstraintsListDistributionSummariesRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * Number of distribution summaries to get (partitioned by tax year) Default = 2 (current year and prior year), maximum = 10
     */
    pageSize?: number | undefined;
    /**
     * When paginating, this is used to retrieve a specific page from the overall response
     */
    pageToken?: string | undefined;
};
export type RetirementConstraintsListDistributionSummariesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listDistributionSummariesResponse?: components.ListDistributionSummariesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const RetirementConstraintsListDistributionSummariesRequest$inboundSchema: z.ZodType<RetirementConstraintsListDistributionSummariesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementConstraintsListDistributionSummariesRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const RetirementConstraintsListDistributionSummariesRequest$outboundSchema: z.ZodType<RetirementConstraintsListDistributionSummariesRequest$Outbound, z.ZodTypeDef, RetirementConstraintsListDistributionSummariesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementConstraintsListDistributionSummariesRequest$ {
    /** @deprecated use `RetirementConstraintsListDistributionSummariesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementConstraintsListDistributionSummariesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementConstraintsListDistributionSummariesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementConstraintsListDistributionSummariesRequest$Outbound, z.ZodTypeDef, RetirementConstraintsListDistributionSummariesRequest>;
    /** @deprecated use `RetirementConstraintsListDistributionSummariesRequest$Outbound` instead. */
    type Outbound = RetirementConstraintsListDistributionSummariesRequest$Outbound;
}
export declare function retirementConstraintsListDistributionSummariesRequestToJSON(retirementConstraintsListDistributionSummariesRequest: RetirementConstraintsListDistributionSummariesRequest): string;
export declare function retirementConstraintsListDistributionSummariesRequestFromJSON(jsonString: string): SafeParseResult<RetirementConstraintsListDistributionSummariesRequest, SDKValidationError>;
/** @internal */
export declare const RetirementConstraintsListDistributionSummariesResponse$inboundSchema: z.ZodType<RetirementConstraintsListDistributionSummariesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementConstraintsListDistributionSummariesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListDistributionSummariesResponse?: components.ListDistributionSummariesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const RetirementConstraintsListDistributionSummariesResponse$outboundSchema: z.ZodType<RetirementConstraintsListDistributionSummariesResponse$Outbound, z.ZodTypeDef, RetirementConstraintsListDistributionSummariesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementConstraintsListDistributionSummariesResponse$ {
    /** @deprecated use `RetirementConstraintsListDistributionSummariesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementConstraintsListDistributionSummariesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementConstraintsListDistributionSummariesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementConstraintsListDistributionSummariesResponse$Outbound, z.ZodTypeDef, RetirementConstraintsListDistributionSummariesResponse>;
    /** @deprecated use `RetirementConstraintsListDistributionSummariesResponse$Outbound` instead. */
    type Outbound = RetirementConstraintsListDistributionSummariesResponse$Outbound;
}
export declare function retirementConstraintsListDistributionSummariesResponseToJSON(retirementConstraintsListDistributionSummariesResponse: RetirementConstraintsListDistributionSummariesResponse): string;
export declare function retirementConstraintsListDistributionSummariesResponseFromJSON(jsonString: string): SafeParseResult<RetirementConstraintsListDistributionSummariesResponse, SDKValidationError>;
//# sourceMappingURL=retirementconstraintslistdistributionsummaries.d.ts.map