import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BankRelationshipsReuseBankRelationshipRequest = {
    /**
     * The account id.
     */
    accountId: string;
    reuseBankRelationshipRequestCreate: components.ReuseBankRelationshipRequestCreate;
};
export type BankRelationshipsReuseBankRelationshipResponse = {
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
export declare const BankRelationshipsReuseBankRelationshipRequest$inboundSchema: z.ZodType<BankRelationshipsReuseBankRelationshipRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsReuseBankRelationshipRequest$Outbound = {
    account_id: string;
    ReuseBankRelationshipRequestCreate: components.ReuseBankRelationshipRequestCreate$Outbound;
};
/** @internal */
export declare const BankRelationshipsReuseBankRelationshipRequest$outboundSchema: z.ZodType<BankRelationshipsReuseBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsReuseBankRelationshipRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsReuseBankRelationshipRequest$ {
    /** @deprecated use `BankRelationshipsReuseBankRelationshipRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsReuseBankRelationshipRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsReuseBankRelationshipRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsReuseBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsReuseBankRelationshipRequest>;
    /** @deprecated use `BankRelationshipsReuseBankRelationshipRequest$Outbound` instead. */
    type Outbound = BankRelationshipsReuseBankRelationshipRequest$Outbound;
}
export declare function bankRelationshipsReuseBankRelationshipRequestToJSON(bankRelationshipsReuseBankRelationshipRequest: BankRelationshipsReuseBankRelationshipRequest): string;
export declare function bankRelationshipsReuseBankRelationshipRequestFromJSON(jsonString: string): SafeParseResult<BankRelationshipsReuseBankRelationshipRequest, SDKValidationError>;
/** @internal */
export declare const BankRelationshipsReuseBankRelationshipResponse$inboundSchema: z.ZodType<BankRelationshipsReuseBankRelationshipResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsReuseBankRelationshipResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BankRelationship?: components.BankRelationship$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BankRelationshipsReuseBankRelationshipResponse$outboundSchema: z.ZodType<BankRelationshipsReuseBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsReuseBankRelationshipResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsReuseBankRelationshipResponse$ {
    /** @deprecated use `BankRelationshipsReuseBankRelationshipResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsReuseBankRelationshipResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsReuseBankRelationshipResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsReuseBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsReuseBankRelationshipResponse>;
    /** @deprecated use `BankRelationshipsReuseBankRelationshipResponse$Outbound` instead. */
    type Outbound = BankRelationshipsReuseBankRelationshipResponse$Outbound;
}
export declare function bankRelationshipsReuseBankRelationshipResponseToJSON(bankRelationshipsReuseBankRelationshipResponse: BankRelationshipsReuseBankRelationshipResponse): string;
export declare function bankRelationshipsReuseBankRelationshipResponseFromJSON(jsonString: string): SafeParseResult<BankRelationshipsReuseBankRelationshipResponse, SDKValidationError>;
//# sourceMappingURL=bankrelationshipsreusebankrelationship.d.ts.map