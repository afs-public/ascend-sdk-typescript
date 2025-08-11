import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsListAvailableEnrollmentsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The maximum number of available enrollments to return. The service may return fewer than this value. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListAvailableEnrollments` call. Provide this to retrieve the subsequent page.
     *
     * @remarks
     *
     *  When paginating, all other parameters provided to `ListAvailableEnrollments` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
     *
     * @remarks
     *  `enrollment_type`
     */
    filter?: string | undefined;
};
export type AccountsListAvailableEnrollmentsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listAvailableEnrollmentsResponse?: components.ListAvailableEnrollmentsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsListAvailableEnrollmentsRequest$inboundSchema: z.ZodType<AccountsListAvailableEnrollmentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAvailableEnrollmentsRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const AccountsListAvailableEnrollmentsRequest$outboundSchema: z.ZodType<AccountsListAvailableEnrollmentsRequest$Outbound, z.ZodTypeDef, AccountsListAvailableEnrollmentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAvailableEnrollmentsRequest$ {
    /** @deprecated use `AccountsListAvailableEnrollmentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAvailableEnrollmentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAvailableEnrollmentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAvailableEnrollmentsRequest$Outbound, z.ZodTypeDef, AccountsListAvailableEnrollmentsRequest>;
    /** @deprecated use `AccountsListAvailableEnrollmentsRequest$Outbound` instead. */
    type Outbound = AccountsListAvailableEnrollmentsRequest$Outbound;
}
export declare function accountsListAvailableEnrollmentsRequestToJSON(accountsListAvailableEnrollmentsRequest: AccountsListAvailableEnrollmentsRequest): string;
export declare function accountsListAvailableEnrollmentsRequestFromJSON(jsonString: string): SafeParseResult<AccountsListAvailableEnrollmentsRequest, SDKValidationError>;
/** @internal */
export declare const AccountsListAvailableEnrollmentsResponse$inboundSchema: z.ZodType<AccountsListAvailableEnrollmentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAvailableEnrollmentsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAvailableEnrollmentsResponse?: components.ListAvailableEnrollmentsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsListAvailableEnrollmentsResponse$outboundSchema: z.ZodType<AccountsListAvailableEnrollmentsResponse$Outbound, z.ZodTypeDef, AccountsListAvailableEnrollmentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAvailableEnrollmentsResponse$ {
    /** @deprecated use `AccountsListAvailableEnrollmentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAvailableEnrollmentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAvailableEnrollmentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAvailableEnrollmentsResponse$Outbound, z.ZodTypeDef, AccountsListAvailableEnrollmentsResponse>;
    /** @deprecated use `AccountsListAvailableEnrollmentsResponse$Outbound` instead. */
    type Outbound = AccountsListAvailableEnrollmentsResponse$Outbound;
}
export declare function accountsListAvailableEnrollmentsResponseToJSON(accountsListAvailableEnrollmentsResponse: AccountsListAvailableEnrollmentsResponse): string;
export declare function accountsListAvailableEnrollmentsResponseFromJSON(jsonString: string): SafeParseResult<AccountsListAvailableEnrollmentsResponse, SDKValidationError>;
//# sourceMappingURL=accountslistavailableenrollments.d.ts.map