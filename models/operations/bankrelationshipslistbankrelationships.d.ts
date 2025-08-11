import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The state of bank relationships to filter by. Unspecified returns relationships of all states.
 */
export declare enum State {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Approved = "APPROVED",
    Canceled = "CANCELED",
    Rejected = "REJECTED"
}
export type BankRelationshipsListBankRelationshipsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The maximum number of bank relationships to return. The service may return fewer than this value. If unspecified, at most 50 bank relationships will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListBankRelationships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBankRelationships` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
    /**
     * The state of bank relationships to filter by. Unspecified returns relationships of all states.
     */
    state?: State | undefined;
};
export type BankRelationshipsListBankRelationshipsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listBankRelationshipsResponse?: components.ListBankRelationshipsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const State$inboundSchema: z.ZodNativeEnum<typeof State>;
/** @internal */
export declare const State$outboundSchema: z.ZodNativeEnum<typeof State>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace State$ {
    /** @deprecated use `State$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<typeof State>;
    /** @deprecated use `State$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<typeof State>;
}
/** @internal */
export declare const BankRelationshipsListBankRelationshipsRequest$inboundSchema: z.ZodType<BankRelationshipsListBankRelationshipsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsListBankRelationshipsRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    state?: string | undefined;
};
/** @internal */
export declare const BankRelationshipsListBankRelationshipsRequest$outboundSchema: z.ZodType<BankRelationshipsListBankRelationshipsRequest$Outbound, z.ZodTypeDef, BankRelationshipsListBankRelationshipsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsListBankRelationshipsRequest$ {
    /** @deprecated use `BankRelationshipsListBankRelationshipsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsListBankRelationshipsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsListBankRelationshipsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsListBankRelationshipsRequest$Outbound, z.ZodTypeDef, BankRelationshipsListBankRelationshipsRequest>;
    /** @deprecated use `BankRelationshipsListBankRelationshipsRequest$Outbound` instead. */
    type Outbound = BankRelationshipsListBankRelationshipsRequest$Outbound;
}
export declare function bankRelationshipsListBankRelationshipsRequestToJSON(bankRelationshipsListBankRelationshipsRequest: BankRelationshipsListBankRelationshipsRequest): string;
export declare function bankRelationshipsListBankRelationshipsRequestFromJSON(jsonString: string): SafeParseResult<BankRelationshipsListBankRelationshipsRequest, SDKValidationError>;
/** @internal */
export declare const BankRelationshipsListBankRelationshipsResponse$inboundSchema: z.ZodType<BankRelationshipsListBankRelationshipsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipsListBankRelationshipsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListBankRelationshipsResponse?: components.ListBankRelationshipsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BankRelationshipsListBankRelationshipsResponse$outboundSchema: z.ZodType<BankRelationshipsListBankRelationshipsResponse$Outbound, z.ZodTypeDef, BankRelationshipsListBankRelationshipsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipsListBankRelationshipsResponse$ {
    /** @deprecated use `BankRelationshipsListBankRelationshipsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipsListBankRelationshipsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipsListBankRelationshipsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipsListBankRelationshipsResponse$Outbound, z.ZodTypeDef, BankRelationshipsListBankRelationshipsResponse>;
    /** @deprecated use `BankRelationshipsListBankRelationshipsResponse$Outbound` instead. */
    type Outbound = BankRelationshipsListBankRelationshipsResponse$Outbound;
}
export declare function bankRelationshipsListBankRelationshipsResponseToJSON(bankRelationshipsListBankRelationshipsResponse: BankRelationshipsListBankRelationshipsResponse): string;
export declare function bankRelationshipsListBankRelationshipsResponseFromJSON(jsonString: string): SafeParseResult<BankRelationshipsListBankRelationshipsResponse, SDKValidationError>;
//# sourceMappingURL=bankrelationshipslistbankrelationships.d.ts.map