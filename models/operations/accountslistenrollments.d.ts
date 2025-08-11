import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsListEnrollmentsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The maximum number of enrollments to return.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListEnrollments` call. Provide this to retrieve the subsequent page.
     *
     * @remarks
     *
     *  When paginating, all other parameters provided to `ListEnrollments` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
};
export type AccountsListEnrollmentsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listEnrollmentsResponse?: components.ListEnrollmentsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsListEnrollmentsRequest$inboundSchema: z.ZodType<AccountsListEnrollmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListEnrollmentsRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const AccountsListEnrollmentsRequest$outboundSchema: z.ZodType<AccountsListEnrollmentsRequest$Outbound, z.ZodTypeDef, AccountsListEnrollmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListEnrollmentsRequest$ {
    /** @deprecated use `AccountsListEnrollmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListEnrollmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListEnrollmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListEnrollmentsRequest$Outbound, z.ZodTypeDef, AccountsListEnrollmentsRequest>;
    /** @deprecated use `AccountsListEnrollmentsRequest$Outbound` instead. */
    type Outbound = AccountsListEnrollmentsRequest$Outbound;
}
export declare function accountsListEnrollmentsRequestToJSON(accountsListEnrollmentsRequest: AccountsListEnrollmentsRequest): string;
export declare function accountsListEnrollmentsRequestFromJSON(jsonString: string): SafeParseResult<AccountsListEnrollmentsRequest, SDKValidationError>;
/** @internal */
export declare const AccountsListEnrollmentsResponse$inboundSchema: z.ZodType<AccountsListEnrollmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListEnrollmentsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListEnrollmentsResponse?: components.ListEnrollmentsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsListEnrollmentsResponse$outboundSchema: z.ZodType<AccountsListEnrollmentsResponse$Outbound, z.ZodTypeDef, AccountsListEnrollmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListEnrollmentsResponse$ {
    /** @deprecated use `AccountsListEnrollmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListEnrollmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListEnrollmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListEnrollmentsResponse$Outbound, z.ZodTypeDef, AccountsListEnrollmentsResponse>;
    /** @deprecated use `AccountsListEnrollmentsResponse$Outbound` instead. */
    type Outbound = AccountsListEnrollmentsResponse$Outbound;
}
export declare function accountsListEnrollmentsResponseToJSON(accountsListEnrollmentsResponse: AccountsListEnrollmentsResponse): string;
export declare function accountsListEnrollmentsResponseFromJSON(jsonString: string): SafeParseResult<AccountsListEnrollmentsResponse, SDKValidationError>;
//# sourceMappingURL=accountslistenrollments.d.ts.map