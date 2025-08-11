import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsListAgreementsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The maximum number of agreements to return.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListAgreements` call. Provide this to retrieve the subsequent page.
     *
     * @remarks
     *
     *  When paginating, all other parameters provided to `ListAgreements` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
};
export type AccountsListAgreementsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listAgreementsResponse?: components.ListAgreementsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsListAgreementsRequest$inboundSchema: z.ZodType<AccountsListAgreementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAgreementsRequest$Outbound = {
    account_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const AccountsListAgreementsRequest$outboundSchema: z.ZodType<AccountsListAgreementsRequest$Outbound, z.ZodTypeDef, AccountsListAgreementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAgreementsRequest$ {
    /** @deprecated use `AccountsListAgreementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAgreementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAgreementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAgreementsRequest$Outbound, z.ZodTypeDef, AccountsListAgreementsRequest>;
    /** @deprecated use `AccountsListAgreementsRequest$Outbound` instead. */
    type Outbound = AccountsListAgreementsRequest$Outbound;
}
export declare function accountsListAgreementsRequestToJSON(accountsListAgreementsRequest: AccountsListAgreementsRequest): string;
export declare function accountsListAgreementsRequestFromJSON(jsonString: string): SafeParseResult<AccountsListAgreementsRequest, SDKValidationError>;
/** @internal */
export declare const AccountsListAgreementsResponse$inboundSchema: z.ZodType<AccountsListAgreementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAgreementsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAgreementsResponse?: components.ListAgreementsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsListAgreementsResponse$outboundSchema: z.ZodType<AccountsListAgreementsResponse$Outbound, z.ZodTypeDef, AccountsListAgreementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAgreementsResponse$ {
    /** @deprecated use `AccountsListAgreementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAgreementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAgreementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAgreementsResponse$Outbound, z.ZodTypeDef, AccountsListAgreementsResponse>;
    /** @deprecated use `AccountsListAgreementsResponse$Outbound` instead. */
    type Outbound = AccountsListAgreementsResponse$Outbound;
}
export declare function accountsListAgreementsResponseToJSON(accountsListAgreementsResponse: AccountsListAgreementsResponse): string;
export declare function accountsListAgreementsResponseFromJSON(jsonString: string): SafeParseResult<AccountsListAgreementsResponse, SDKValidationError>;
//# sourceMappingURL=accountslistagreements.d.ts.map