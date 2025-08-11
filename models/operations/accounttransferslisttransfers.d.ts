import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountTransfersListTransfersRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The maximum number of transfers to return. The service may return fewer than this value. If unspecified, at most 100 transfers will be returned. The maximum value is 200; values above 200 will be coerced to 200.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListTransfers` call. Provide this to retrieve the subsequent page.
     *
     * @remarks
     *
     *  When paginating, all other parameters provided to `ListTransfers` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information;
     *
     * @remarks
     *
     *  Currently supported CEL filters: -------------------------------- * acat_control_number        (add to queries for better performance) * state     == State.* * nscc_status  == NsccStatus.* * direction   == Direction.* * transfer_type == TransferType.* * reject_code  == RejectCode.* * create_time * last_nscc_status_updated_time * receiver.account_id * receiver.account_number * receiver.participant_number * receiver.correspondent_code * receiver.correspondent_id * deliverer.account_id * deliverer.account_number * deliverer.participant_number * deliverer.correspondent_code * deliverer.correspondent_id
     *
     *  - Empty filters are allowed, which return the most recent page_size worth of transfers, in practice this is not performant  and should be avoided if possible
     *
     *  - Macros are NOT allowed, using them will result in an INVALID_ARGUMENT being returned
     *
     *  - The following CEL operators are NOT allowed, using them will result in an INVALID_ARGUMENT being returned:    string.matches(substr)    +    -    /    *
     *
     *  - Queries using acat_control_number will result in increased performance
     */
    filter?: string | undefined;
};
export type AccountTransfersListTransfersResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listTransfersResponse?: components.ListTransfersResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountTransfersListTransfersRequest$inboundSchema: z.ZodType<AccountTransfersListTransfersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersListTransfersRequest$Outbound = {
    correspondent_id: string;
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const AccountTransfersListTransfersRequest$outboundSchema: z.ZodType<AccountTransfersListTransfersRequest$Outbound, z.ZodTypeDef, AccountTransfersListTransfersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersListTransfersRequest$ {
    /** @deprecated use `AccountTransfersListTransfersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersListTransfersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersListTransfersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersListTransfersRequest$Outbound, z.ZodTypeDef, AccountTransfersListTransfersRequest>;
    /** @deprecated use `AccountTransfersListTransfersRequest$Outbound` instead. */
    type Outbound = AccountTransfersListTransfersRequest$Outbound;
}
export declare function accountTransfersListTransfersRequestToJSON(accountTransfersListTransfersRequest: AccountTransfersListTransfersRequest): string;
export declare function accountTransfersListTransfersRequestFromJSON(jsonString: string): SafeParseResult<AccountTransfersListTransfersRequest, SDKValidationError>;
/** @internal */
export declare const AccountTransfersListTransfersResponse$inboundSchema: z.ZodType<AccountTransfersListTransfersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersListTransfersResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListTransfersResponse?: components.ListTransfersResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountTransfersListTransfersResponse$outboundSchema: z.ZodType<AccountTransfersListTransfersResponse$Outbound, z.ZodTypeDef, AccountTransfersListTransfersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersListTransfersResponse$ {
    /** @deprecated use `AccountTransfersListTransfersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersListTransfersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersListTransfersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersListTransfersResponse$Outbound, z.ZodTypeDef, AccountTransfersListTransfersResponse>;
    /** @deprecated use `AccountTransfersListTransfersResponse$Outbound` instead. */
    type Outbound = AccountTransfersListTransfersResponse$Outbound;
}
export declare function accountTransfersListTransfersResponseToJSON(accountTransfersListTransfersResponse: AccountTransfersListTransfersResponse): string;
export declare function accountTransfersListTransfersResponseFromJSON(jsonString: string): SafeParseResult<AccountTransfersListTransfersResponse, SDKValidationError>;
//# sourceMappingURL=accounttransferslisttransfers.d.ts.map