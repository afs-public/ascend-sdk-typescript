import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RetirementConstraintsRetrieveContributionConstraintsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    retrieveContributionConstraintsRequestCreate: components.RetrieveContributionConstraintsRequestCreate;
};
export type RetirementConstraintsRetrieveContributionConstraintsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    contributionConstraints?: components.ContributionConstraints | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const RetirementConstraintsRetrieveContributionConstraintsRequest$inboundSchema: z.ZodType<RetirementConstraintsRetrieveContributionConstraintsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementConstraintsRetrieveContributionConstraintsRequest$Outbound = {
    account_id: string;
    RetrieveContributionConstraintsRequestCreate: components.RetrieveContributionConstraintsRequestCreate$Outbound;
};
/** @internal */
export declare const RetirementConstraintsRetrieveContributionConstraintsRequest$outboundSchema: z.ZodType<RetirementConstraintsRetrieveContributionConstraintsRequest$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveContributionConstraintsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementConstraintsRetrieveContributionConstraintsRequest$ {
    /** @deprecated use `RetirementConstraintsRetrieveContributionConstraintsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementConstraintsRetrieveContributionConstraintsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementConstraintsRetrieveContributionConstraintsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementConstraintsRetrieveContributionConstraintsRequest$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveContributionConstraintsRequest>;
    /** @deprecated use `RetirementConstraintsRetrieveContributionConstraintsRequest$Outbound` instead. */
    type Outbound = RetirementConstraintsRetrieveContributionConstraintsRequest$Outbound;
}
export declare function retirementConstraintsRetrieveContributionConstraintsRequestToJSON(retirementConstraintsRetrieveContributionConstraintsRequest: RetirementConstraintsRetrieveContributionConstraintsRequest): string;
export declare function retirementConstraintsRetrieveContributionConstraintsRequestFromJSON(jsonString: string): SafeParseResult<RetirementConstraintsRetrieveContributionConstraintsRequest, SDKValidationError>;
/** @internal */
export declare const RetirementConstraintsRetrieveContributionConstraintsResponse$inboundSchema: z.ZodType<RetirementConstraintsRetrieveContributionConstraintsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementConstraintsRetrieveContributionConstraintsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ContributionConstraints?: components.ContributionConstraints$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const RetirementConstraintsRetrieveContributionConstraintsResponse$outboundSchema: z.ZodType<RetirementConstraintsRetrieveContributionConstraintsResponse$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveContributionConstraintsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementConstraintsRetrieveContributionConstraintsResponse$ {
    /** @deprecated use `RetirementConstraintsRetrieveContributionConstraintsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementConstraintsRetrieveContributionConstraintsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementConstraintsRetrieveContributionConstraintsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementConstraintsRetrieveContributionConstraintsResponse$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveContributionConstraintsResponse>;
    /** @deprecated use `RetirementConstraintsRetrieveContributionConstraintsResponse$Outbound` instead. */
    type Outbound = RetirementConstraintsRetrieveContributionConstraintsResponse$Outbound;
}
export declare function retirementConstraintsRetrieveContributionConstraintsResponseToJSON(retirementConstraintsRetrieveContributionConstraintsResponse: RetirementConstraintsRetrieveContributionConstraintsResponse): string;
export declare function retirementConstraintsRetrieveContributionConstraintsResponseFromJSON(jsonString: string): SafeParseResult<RetirementConstraintsRetrieveContributionConstraintsResponse, SDKValidationError>;
//# sourceMappingURL=retirementconstraintsretrievecontributionconstraints.d.ts.map