import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BankRelationshipsGetBankRelationshipRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The bankRelationship id.
     */
    bankRelationshipId: string;
};
export type BankRelationshipsGetBankRelationshipResponse = {
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
export declare const BankRelationshipsGetBankRelationshipRequest$inboundSchema: z.ZodType<BankRelationshipsGetBankRelationshipRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsGetBankRelationshipRequest$Outbound = {
    account_id: string;
    bankRelationship_id: string;
};
/** @internal */
export declare const BankRelationshipsGetBankRelationshipRequest$outboundSchema: z.ZodType<BankRelationshipsGetBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsGetBankRelationshipRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsGetBankRelationshipRequest$ {
    /** @deprecated use `BankRelationshipsGetBankRelationshipRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsGetBankRelationshipRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsGetBankRelationshipRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsGetBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsGetBankRelationshipRequest>;
    /** @deprecated use `BankRelationshipsGetBankRelationshipRequest$Outbound` instead. */
    type Outbound = BankRelationshipsGetBankRelationshipRequest$Outbound;
}
export declare function bankRelationshipsGetBankRelationshipRequestToJSON(bankRelationshipsGetBankRelationshipRequest: BankRelationshipsGetBankRelationshipRequest): string;
export declare function bankRelationshipsGetBankRelationshipRequestFromJSON(jsonString: string): SafeParseResult<BankRelationshipsGetBankRelationshipRequest, SDKValidationError>;
/** @internal */
export declare const BankRelationshipsGetBankRelationshipResponse$inboundSchema: z.ZodType<BankRelationshipsGetBankRelationshipResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsGetBankRelationshipResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BankRelationship?: components.BankRelationship$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BankRelationshipsGetBankRelationshipResponse$outboundSchema: z.ZodType<BankRelationshipsGetBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsGetBankRelationshipResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsGetBankRelationshipResponse$ {
    /** @deprecated use `BankRelationshipsGetBankRelationshipResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsGetBankRelationshipResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsGetBankRelationshipResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsGetBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsGetBankRelationshipResponse>;
    /** @deprecated use `BankRelationshipsGetBankRelationshipResponse$Outbound` instead. */
    type Outbound = BankRelationshipsGetBankRelationshipResponse$Outbound;
}
export declare function bankRelationshipsGetBankRelationshipResponseToJSON(bankRelationshipsGetBankRelationshipResponse: BankRelationshipsGetBankRelationshipResponse): string;
export declare function bankRelationshipsGetBankRelationshipResponseFromJSON(jsonString: string): SafeParseResult<BankRelationshipsGetBankRelationshipResponse, SDKValidationError>;
//# sourceMappingURL=bankrelationshipsgetbankrelationship.d.ts.map