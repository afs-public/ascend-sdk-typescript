import * as z from "zod";
import * as components from "../components/index.js";
export type BankRelationshipsUpdateBankRelationshipRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The bankRelationship id.
     */
    bankRelationshipId: string;
    /**
     * The field of the bank relationship to update. Only `nickname` is supported.
     */
    updateMask?: string | undefined;
    bankRelationshipUpdate: components.BankRelationshipUpdate;
};
export type BankRelationshipsUpdateBankRelationshipResponse = {
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
export declare const BankRelationshipsUpdateBankRelationshipRequest$inboundSchema: z.ZodType<BankRelationshipsUpdateBankRelationshipRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsUpdateBankRelationshipRequest$Outbound = {
    account_id: string;
    bankRelationship_id: string;
    update_mask?: string | undefined;
    BankRelationshipUpdate: components.BankRelationshipUpdate$Outbound;
};
/** @internal */
export declare const BankRelationshipsUpdateBankRelationshipRequest$outboundSchema: z.ZodType<BankRelationshipsUpdateBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsUpdateBankRelationshipRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsUpdateBankRelationshipRequest$ {
    /** @deprecated use `BankRelationshipsUpdateBankRelationshipRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsUpdateBankRelationshipRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsUpdateBankRelationshipRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsUpdateBankRelationshipRequest$Outbound, z.ZodTypeDef, BankRelationshipsUpdateBankRelationshipRequest>;
    /** @deprecated use `BankRelationshipsUpdateBankRelationshipRequest$Outbound` instead. */
    type Outbound = BankRelationshipsUpdateBankRelationshipRequest$Outbound;
}
/** @internal */
export declare const BankRelationshipsUpdateBankRelationshipResponse$inboundSchema: z.ZodType<BankRelationshipsUpdateBankRelationshipResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsUpdateBankRelationshipResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BankRelationship?: components.BankRelationship$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BankRelationshipsUpdateBankRelationshipResponse$outboundSchema: z.ZodType<BankRelationshipsUpdateBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsUpdateBankRelationshipResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsUpdateBankRelationshipResponse$ {
    /** @deprecated use `BankRelationshipsUpdateBankRelationshipResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsUpdateBankRelationshipResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsUpdateBankRelationshipResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsUpdateBankRelationshipResponse$Outbound, z.ZodTypeDef, BankRelationshipsUpdateBankRelationshipResponse>;
    /** @deprecated use `BankRelationshipsUpdateBankRelationshipResponse$Outbound` instead. */
    type Outbound = BankRelationshipsUpdateBankRelationshipResponse$Outbound;
}
//# sourceMappingURL=bankrelationshipsupdatebankrelationship.d.ts.map