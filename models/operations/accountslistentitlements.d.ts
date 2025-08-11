import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsListEntitlementsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The maximum number of entitlements to return.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListEntitlements` call. Provide this to retrieve the subsequent page.
     *
     * @remarks
     *
     *  When paginating, all other parameters provided to `ListEntitlements` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
};
export type AccountsListEntitlementsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listEntitlementsResponse?: components.ListEntitlementsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsListEntitlementsRequest$inboundSchema: z.ZodType<AccountsListEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListEntitlementsRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const AccountsListEntitlementsRequest$outboundSchema: z.ZodType<AccountsListEntitlementsRequest$Outbound, z.ZodTypeDef, AccountsListEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListEntitlementsRequest$ {
    /** @deprecated use `AccountsListEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListEntitlementsRequest$Outbound, z.ZodTypeDef, AccountsListEntitlementsRequest>;
    /** @deprecated use `AccountsListEntitlementsRequest$Outbound` instead. */
    type Outbound = AccountsListEntitlementsRequest$Outbound;
}
export declare function accountsListEntitlementsRequestToJSON(accountsListEntitlementsRequest: AccountsListEntitlementsRequest): string;
export declare function accountsListEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<AccountsListEntitlementsRequest, SDKValidationError>;
/** @internal */
export declare const AccountsListEntitlementsResponse$inboundSchema: z.ZodType<AccountsListEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListEntitlementsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListEntitlementsResponse?: components.ListEntitlementsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsListEntitlementsResponse$outboundSchema: z.ZodType<AccountsListEntitlementsResponse$Outbound, z.ZodTypeDef, AccountsListEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListEntitlementsResponse$ {
    /** @deprecated use `AccountsListEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListEntitlementsResponse$Outbound, z.ZodTypeDef, AccountsListEntitlementsResponse>;
    /** @deprecated use `AccountsListEntitlementsResponse$Outbound` instead. */
    type Outbound = AccountsListEntitlementsResponse$Outbound;
}
export declare function accountsListEntitlementsResponseToJSON(accountsListEntitlementsResponse: AccountsListEntitlementsResponse): string;
export declare function accountsListEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<AccountsListEntitlementsResponse, SDKValidationError>;
//# sourceMappingURL=accountslistentitlements.d.ts.map