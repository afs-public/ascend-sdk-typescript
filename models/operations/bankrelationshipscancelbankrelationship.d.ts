import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BankRelationshipsCancelBankRelationshipRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The bankRelationship id.
     */
    bankRelationshipId: string;
    cancelBankRelationshipRequestCreate: components.CancelBankRelationshipRequestCreate;
};
export type BankRelationshipsCancelBankRelationshipResponse = {
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
export declare const BankRelationshipsCancelBankRelationshipRequest$inboundSchema: z.ZodType<BankRelationshipsCancelBankRelationshipRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsCancelBankRelationshipRequest$Outbound = {
    account_id: string;
    bankRelationship_id: string;
    CancelBankRelationshipRequestCreate: components.CancelBankRelationshipRequestCreate$Outbound;
};
/** @internal */
export declare const BankRelationshipsCancelBankRelationshipRequest$outboundSchema: z.ZodType<BankRelationshipsCancelBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsCancelBankRelationshipRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsCancelBankRelationshipRequest$ {
    /** @deprecated use `BankRelationshipsCancelBankRelationshipRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsCancelBankRelationshipRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsCancelBankRelationshipRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsCancelBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsCancelBankRelationshipRequest>;
    /** @deprecated use `BankRelationshipsCancelBankRelationshipRequest$Outbound` instead. */
    type Outbound = BankRelationshipsCancelBankRelationshipRequest$Outbound;
}
export declare function bankRelationshipsCancelBankRelationshipRequestToJSON(bankRelationshipsCancelBankRelationshipRequest: BankRelationshipsCancelBankRelationshipRequest): string;
export declare function bankRelationshipsCancelBankRelationshipRequestFromJSON(jsonString: string): SafeParseResult<BankRelationshipsCancelBankRelationshipRequest, SDKValidationError>;
/** @internal */
export declare const BankRelationshipsCancelBankRelationshipResponse$inboundSchema: z.ZodType<BankRelationshipsCancelBankRelationshipResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsCancelBankRelationshipResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BankRelationship?: components.BankRelationship$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BankRelationshipsCancelBankRelationshipResponse$outboundSchema: z.ZodType<BankRelationshipsCancelBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsCancelBankRelationshipResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsCancelBankRelationshipResponse$ {
    /** @deprecated use `BankRelationshipsCancelBankRelationshipResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsCancelBankRelationshipResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsCancelBankRelationshipResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsCancelBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsCancelBankRelationshipResponse>;
    /** @deprecated use `BankRelationshipsCancelBankRelationshipResponse$Outbound` instead. */
    type Outbound = BankRelationshipsCancelBankRelationshipResponse$Outbound;
}
export declare function bankRelationshipsCancelBankRelationshipResponseToJSON(bankRelationshipsCancelBankRelationshipResponse: BankRelationshipsCancelBankRelationshipResponse): string;
export declare function bankRelationshipsCancelBankRelationshipResponseFromJSON(jsonString: string): SafeParseResult<BankRelationshipsCancelBankRelationshipResponse, SDKValidationError>;
//# sourceMappingURL=bankrelationshipscancelbankrelationship.d.ts.map