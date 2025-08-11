import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type RetirementConstraintsRetrieveDistributionConstraintsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    retrieveDistributionConstraintsRequestCreate: components.RetrieveDistributionConstraintsRequestCreate;
};
export type RetirementConstraintsRetrieveDistributionConstraintsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    distributionConstraints?: components.DistributionConstraints | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const RetirementConstraintsRetrieveDistributionConstraintsRequest$inboundSchema: z.ZodType<RetirementConstraintsRetrieveDistributionConstraintsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementConstraintsRetrieveDistributionConstraintsRequest$Outbound = {
    account_id: string;
    RetrieveDistributionConstraintsRequestCreate: components.RetrieveDistributionConstraintsRequestCreate$Outbound;
};
/** @internal */
export declare const RetirementConstraintsRetrieveDistributionConstraintsRequest$outboundSchema: z.ZodType<RetirementConstraintsRetrieveDistributionConstraintsRequest$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveDistributionConstraintsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementConstraintsRetrieveDistributionConstraintsRequest$ {
    /** @deprecated use `RetirementConstraintsRetrieveDistributionConstraintsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementConstraintsRetrieveDistributionConstraintsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementConstraintsRetrieveDistributionConstraintsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementConstraintsRetrieveDistributionConstraintsRequest$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveDistributionConstraintsRequest>;
    /** @deprecated use `RetirementConstraintsRetrieveDistributionConstraintsRequest$Outbound` instead. */
    type Outbound = RetirementConstraintsRetrieveDistributionConstraintsRequest$Outbound;
}
export declare function retirementConstraintsRetrieveDistributionConstraintsRequestToJSON(retirementConstraintsRetrieveDistributionConstraintsRequest: RetirementConstraintsRetrieveDistributionConstraintsRequest): string;
export declare function retirementConstraintsRetrieveDistributionConstraintsRequestFromJSON(jsonString: string): SafeParseResult<RetirementConstraintsRetrieveDistributionConstraintsRequest, SDKValidationError>;
/** @internal */
export declare const RetirementConstraintsRetrieveDistributionConstraintsResponse$inboundSchema: z.ZodType<RetirementConstraintsRetrieveDistributionConstraintsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementConstraintsRetrieveDistributionConstraintsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    DistributionConstraints?: components.DistributionConstraints$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const RetirementConstraintsRetrieveDistributionConstraintsResponse$outboundSchema: z.ZodType<RetirementConstraintsRetrieveDistributionConstraintsResponse$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveDistributionConstraintsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementConstraintsRetrieveDistributionConstraintsResponse$ {
    /** @deprecated use `RetirementConstraintsRetrieveDistributionConstraintsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementConstraintsRetrieveDistributionConstraintsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementConstraintsRetrieveDistributionConstraintsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementConstraintsRetrieveDistributionConstraintsResponse$Outbound, z.ZodTypeDef, RetirementConstraintsRetrieveDistributionConstraintsResponse>;
    /** @deprecated use `RetirementConstraintsRetrieveDistributionConstraintsResponse$Outbound` instead. */
    type Outbound = RetirementConstraintsRetrieveDistributionConstraintsResponse$Outbound;
}
export declare function retirementConstraintsRetrieveDistributionConstraintsResponseToJSON(retirementConstraintsRetrieveDistributionConstraintsResponse: RetirementConstraintsRetrieveDistributionConstraintsResponse): string;
export declare function retirementConstraintsRetrieveDistributionConstraintsResponseFromJSON(jsonString: string): SafeParseResult<RetirementConstraintsRetrieveDistributionConstraintsResponse, SDKValidationError>;
//# sourceMappingURL=retirementconstraintsretrievedistributionconstraints.d.ts.map