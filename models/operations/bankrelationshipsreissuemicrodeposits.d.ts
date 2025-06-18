import * as z from "zod";
import * as components from "../components/index.js";
export type BankRelationshipsReissueMicroDepositsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The bankRelationship id.
     */
    bankRelationshipId: string;
    reissueMicroDepositsRequestCreate: components.ReissueMicroDepositsRequestCreate;
};
export type BankRelationshipsReissueMicroDepositsResponse = {
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
export declare const BankRelationshipsReissueMicroDepositsRequest$inboundSchema: z.ZodType<BankRelationshipsReissueMicroDepositsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsReissueMicroDepositsRequest$Outbound = {
    account_id: string;
    bankRelationship_id: string;
    ReissueMicroDepositsRequestCreate: components.ReissueMicroDepositsRequestCreate$Outbound;
};
/** @internal */
export declare const BankRelationshipsReissueMicroDepositsRequest$outboundSchema: z.ZodType<BankRelationshipsReissueMicroDepositsRequest$Outbound, z.ZodTypeDef, BankRelationshipsReissueMicroDepositsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsReissueMicroDepositsRequest$ {
    /** @deprecated use `BankRelationshipsReissueMicroDepositsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsReissueMicroDepositsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsReissueMicroDepositsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsReissueMicroDepositsRequest$Outbound, z.ZodTypeDef, BankRelationshipsReissueMicroDepositsRequest>;
    /** @deprecated use `BankRelationshipsReissueMicroDepositsRequest$Outbound` instead. */
    type Outbound = BankRelationshipsReissueMicroDepositsRequest$Outbound;
}
/** @internal */
export declare const BankRelationshipsReissueMicroDepositsResponse$inboundSchema: z.ZodType<BankRelationshipsReissueMicroDepositsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsReissueMicroDepositsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BankRelationship?: components.BankRelationship$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BankRelationshipsReissueMicroDepositsResponse$outboundSchema: z.ZodType<BankRelationshipsReissueMicroDepositsResponse$Outbound, z.ZodTypeDef, BankRelationshipsReissueMicroDepositsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsReissueMicroDepositsResponse$ {
    /** @deprecated use `BankRelationshipsReissueMicroDepositsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsReissueMicroDepositsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsReissueMicroDepositsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsReissueMicroDepositsResponse$Outbound, z.ZodTypeDef, BankRelationshipsReissueMicroDepositsResponse>;
    /** @deprecated use `BankRelationshipsReissueMicroDepositsResponse$Outbound` instead. */
    type Outbound = BankRelationshipsReissueMicroDepositsResponse$Outbound;
}
//# sourceMappingURL=bankrelationshipsreissuemicrodeposits.d.ts.map