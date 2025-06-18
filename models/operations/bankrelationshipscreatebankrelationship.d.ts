import * as z from "zod";
import * as components from "../components/index.js";
export type BankRelationshipsCreateBankRelationshipRequest = {
    /**
     * The account id.
     */
    accountId: string;
    bankRelationshipCreate: components.BankRelationshipCreate;
};
export type BankRelationshipsCreateBankRelationshipResponse = {
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
export declare const BankRelationshipsCreateBankRelationshipRequest$inboundSchema: z.ZodType<BankRelationshipsCreateBankRelationshipRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsCreateBankRelationshipRequest$Outbound = {
    account_id: string;
    BankRelationshipCreate: components.BankRelationshipCreate$Outbound;
};
/** @internal */
export declare const BankRelationshipsCreateBankRelationshipRequest$outboundSchema: z.ZodType<BankRelationshipsCreateBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsCreateBankRelationshipRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsCreateBankRelationshipRequest$ {
    /** @deprecated use `BankRelationshipsCreateBankRelationshipRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsCreateBankRelationshipRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsCreateBankRelationshipRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsCreateBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsCreateBankRelationshipRequest>;
    /** @deprecated use `BankRelationshipsCreateBankRelationshipRequest$Outbound` instead. */
    type Outbound = BankRelationshipsCreateBankRelationshipRequest$Outbound;
}
/** @internal */
export declare const BankRelationshipsCreateBankRelationshipResponse$inboundSchema: z.ZodType<BankRelationshipsCreateBankRelationshipResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsCreateBankRelationshipResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BankRelationship?: components.BankRelationship$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BankRelationshipsCreateBankRelationshipResponse$outboundSchema: z.ZodType<BankRelationshipsCreateBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsCreateBankRelationshipResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsCreateBankRelationshipResponse$ {
    /** @deprecated use `BankRelationshipsCreateBankRelationshipResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsCreateBankRelationshipResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsCreateBankRelationshipResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsCreateBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsCreateBankRelationshipResponse>;
    /** @deprecated use `BankRelationshipsCreateBankRelationshipResponse$Outbound` instead. */
    type Outbound = BankRelationshipsCreateBankRelationshipResponse$Outbound;
}
//# sourceMappingURL=bankrelationshipscreatebankrelationship.d.ts.map