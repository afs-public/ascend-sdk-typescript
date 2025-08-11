import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BankRelationshipsGetMicroDepositAmountsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The bankRelationship id.
     */
    bankRelationshipId: string;
};
export type BankRelationshipsGetMicroDepositAmountsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    microDepositAmounts?: components.MicroDepositAmounts | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BankRelationshipsGetMicroDepositAmountsRequest$inboundSchema: z.ZodType<BankRelationshipsGetMicroDepositAmountsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsGetMicroDepositAmountsRequest$Outbound = {
    account_id: string;
    bankRelationship_id: string;
};
/** @internal */
export declare const BankRelationshipsGetMicroDepositAmountsRequest$outboundSchema: z.ZodType<BankRelationshipsGetMicroDepositAmountsRequest$Outbound, z.ZodTypeDef, BankRelationshipsGetMicroDepositAmountsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsGetMicroDepositAmountsRequest$ {
    /** @deprecated use `BankRelationshipsGetMicroDepositAmountsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsGetMicroDepositAmountsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsGetMicroDepositAmountsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsGetMicroDepositAmountsRequest$Outbound, z.ZodTypeDef, BankRelationshipsGetMicroDepositAmountsRequest>;
    /** @deprecated use `BankRelationshipsGetMicroDepositAmountsRequest$Outbound` instead. */
    type Outbound = BankRelationshipsGetMicroDepositAmountsRequest$Outbound;
}
export declare function bankRelationshipsGetMicroDepositAmountsRequestToJSON(bankRelationshipsGetMicroDepositAmountsRequest: BankRelationshipsGetMicroDepositAmountsRequest): string;
export declare function bankRelationshipsGetMicroDepositAmountsRequestFromJSON(jsonString: string): SafeParseResult<BankRelationshipsGetMicroDepositAmountsRequest, SDKValidationError>;
/** @internal */
export declare const BankRelationshipsGetMicroDepositAmountsResponse$inboundSchema: z.ZodType<BankRelationshipsGetMicroDepositAmountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsGetMicroDepositAmountsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    MicroDepositAmounts?: components.MicroDepositAmounts$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BankRelationshipsGetMicroDepositAmountsResponse$outboundSchema: z.ZodType<BankRelationshipsGetMicroDepositAmountsResponse$Outbound, z.ZodTypeDef, BankRelationshipsGetMicroDepositAmountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsGetMicroDepositAmountsResponse$ {
    /** @deprecated use `BankRelationshipsGetMicroDepositAmountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsGetMicroDepositAmountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsGetMicroDepositAmountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsGetMicroDepositAmountsResponse$Outbound, z.ZodTypeDef, BankRelationshipsGetMicroDepositAmountsResponse>;
    /** @deprecated use `BankRelationshipsGetMicroDepositAmountsResponse$Outbound` instead. */
    type Outbound = BankRelationshipsGetMicroDepositAmountsResponse$Outbound;
}
export declare function bankRelationshipsGetMicroDepositAmountsResponseToJSON(bankRelationshipsGetMicroDepositAmountsResponse: BankRelationshipsGetMicroDepositAmountsResponse): string;
export declare function bankRelationshipsGetMicroDepositAmountsResponseFromJSON(jsonString: string): SafeParseResult<BankRelationshipsGetMicroDepositAmountsResponse, SDKValidationError>;
//# sourceMappingURL=bankrelationshipsgetmicrodepositamounts.d.ts.map