import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RetirementConstraintsListContributionSummariesRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * Number of contribution summaries to get (partitioned by tax year) Default = 2 (current year and prior year), maximum = 10
     */
    pageSize?: number | undefined;
    /**
     * When paginating, this is used to retrieve a specific page from the overall response
     */
    pageToken?: string | undefined;
};
export type RetirementConstraintsListContributionSummariesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listContributionSummariesResponse?: components.ListContributionSummariesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const RetirementConstraintsListContributionSummariesRequest$inboundSchema: z.ZodType<RetirementConstraintsListContributionSummariesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementConstraintsListContributionSummariesRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const RetirementConstraintsListContributionSummariesRequest$outboundSchema: z.ZodType<RetirementConstraintsListContributionSummariesRequest$Outbound, z.ZodTypeDef, RetirementConstraintsListContributionSummariesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementConstraintsListContributionSummariesRequest$ {
    /** @deprecated use `RetirementConstraintsListContributionSummariesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementConstraintsListContributionSummariesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementConstraintsListContributionSummariesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementConstraintsListContributionSummariesRequest$Outbound, z.ZodTypeDef, RetirementConstraintsListContributionSummariesRequest>;
    /** @deprecated use `RetirementConstraintsListContributionSummariesRequest$Outbound` instead. */
    type Outbound = RetirementConstraintsListContributionSummariesRequest$Outbound;
}
export declare function retirementConstraintsListContributionSummariesRequestToJSON(retirementConstraintsListContributionSummariesRequest: RetirementConstraintsListContributionSummariesRequest): string;
export declare function retirementConstraintsListContributionSummariesRequestFromJSON(jsonString: string): SafeParseResult<RetirementConstraintsListContributionSummariesRequest, SDKValidationError>;
/** @internal */
export declare const RetirementConstraintsListContributionSummariesResponse$inboundSchema: z.ZodType<RetirementConstraintsListContributionSummariesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementConstraintsListContributionSummariesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListContributionSummariesResponse?: components.ListContributionSummariesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const RetirementConstraintsListContributionSummariesResponse$outboundSchema: z.ZodType<RetirementConstraintsListContributionSummariesResponse$Outbound, z.ZodTypeDef, RetirementConstraintsListContributionSummariesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementConstraintsListContributionSummariesResponse$ {
    /** @deprecated use `RetirementConstraintsListContributionSummariesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementConstraintsListContributionSummariesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementConstraintsListContributionSummariesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementConstraintsListContributionSummariesResponse$Outbound, z.ZodTypeDef, RetirementConstraintsListContributionSummariesResponse>;
    /** @deprecated use `RetirementConstraintsListContributionSummariesResponse$Outbound` instead. */
    type Outbound = RetirementConstraintsListContributionSummariesResponse$Outbound;
}
export declare function retirementConstraintsListContributionSummariesResponseToJSON(retirementConstraintsListContributionSummariesResponse: RetirementConstraintsListContributionSummariesResponse): string;
export declare function retirementConstraintsListContributionSummariesResponseFromJSON(jsonString: string): SafeParseResult<RetirementConstraintsListContributionSummariesResponse, SDKValidationError>;
//# sourceMappingURL=retirementconstraintslistcontributionsummaries.d.ts.map