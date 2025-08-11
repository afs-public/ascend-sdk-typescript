import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BankRelationshipsVerifyMicroDepositsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The bankRelationship id.
     */
    bankRelationshipId: string;
    verifyMicroDepositsRequestCreate: components.VerifyMicroDepositsRequestCreate;
};
export type BankRelationshipsVerifyMicroDepositsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    bankRelationship?: components.BankRelationship | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BankRelationshipsVerifyMicroDepositsRequest$inboundSchema: z.ZodType<BankRelationshipsVerifyMicroDepositsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsVerifyMicroDepositsRequest$Outbound = {
    account_id: string;
    bankRelationship_id: string;
    VerifyMicroDepositsRequestCreate: components.VerifyMicroDepositsRequestCreate$Outbound;
};
/** @internal */
export declare const BankRelationshipsVerifyMicroDepositsRequest$outboundSchema: z.ZodType<BankRelationshipsVerifyMicroDepositsRequest$Outbound, z.ZodTypeDef, BankRelationshipsVerifyMicroDepositsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsVerifyMicroDepositsRequest$ {
    /** @deprecated use `BankRelationshipsVerifyMicroDepositsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsVerifyMicroDepositsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsVerifyMicroDepositsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsVerifyMicroDepositsRequest$Outbound, z.ZodTypeDef, BankRelationshipsVerifyMicroDepositsRequest>;
    /** @deprecated use `BankRelationshipsVerifyMicroDepositsRequest$Outbound` instead. */
    type Outbound = BankRelationshipsVerifyMicroDepositsRequest$Outbound;
}
export declare function bankRelationshipsVerifyMicroDepositsRequestToJSON(bankRelationshipsVerifyMicroDepositsRequest: BankRelationshipsVerifyMicroDepositsRequest): string;
export declare function bankRelationshipsVerifyMicroDepositsRequestFromJSON(jsonString: string): SafeParseResult<BankRelationshipsVerifyMicroDepositsRequest, SDKValidationError>;
/** @internal */
export declare const BankRelationshipsVerifyMicroDepositsResponse$inboundSchema: z.ZodType<BankRelationshipsVerifyMicroDepositsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsVerifyMicroDepositsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BankRelationship?: components.BankRelationship$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BankRelationshipsVerifyMicroDepositsResponse$outboundSchema: z.ZodType<BankRelationshipsVerifyMicroDepositsResponse$Outbound, z.ZodTypeDef, BankRelationshipsVerifyMicroDepositsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsVerifyMicroDepositsResponse$ {
    /** @deprecated use `BankRelationshipsVerifyMicroDepositsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsVerifyMicroDepositsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsVerifyMicroDepositsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsVerifyMicroDepositsResponse$Outbound, z.ZodTypeDef, BankRelationshipsVerifyMicroDepositsResponse>;
    /** @deprecated use `BankRelationshipsVerifyMicroDepositsResponse$Outbound` instead. */
    type Outbound = BankRelationshipsVerifyMicroDepositsResponse$Outbound;
}
export declare function bankRelationshipsVerifyMicroDepositsResponseToJSON(bankRelationshipsVerifyMicroDepositsResponse: BankRelationshipsVerifyMicroDepositsResponse): string;
export declare function bankRelationshipsVerifyMicroDepositsResponseFromJSON(jsonString: string): SafeParseResult<BankRelationshipsVerifyMicroDepositsResponse, SDKValidationError>;
//# sourceMappingURL=bankrelationshipsverifymicrodeposits.d.ts.map