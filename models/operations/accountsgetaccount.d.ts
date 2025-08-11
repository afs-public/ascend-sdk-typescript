import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The view to return. Defaults to `FULL`.
 */
export declare enum QueryParamView {
    AccountViewUnspecified = "ACCOUNT_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export type AccountsGetAccountRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The view to return. Defaults to `FULL`.
     */
    view?: QueryParamView | undefined;
};
export type AccountsGetAccountResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    account?: components.Account | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const QueryParamView$inboundSchema: z.ZodNativeEnum<typeof QueryParamView>;
/** @internal */
export declare const QueryParamView$outboundSchema: z.ZodNativeEnum<typeof QueryParamView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace QueryParamView$ {
    /** @deprecated use `QueryParamView$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<typeof QueryParamView>;
    /** @deprecated use `QueryParamView$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<typeof QueryParamView>;
}
/** @internal */
export declare const AccountsGetAccountRequest$inboundSchema: z.ZodType<AccountsGetAccountRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsGetAccountRequest$Outbound = {
    account_id: string;
    view?: string | undefined;
};
/** @internal */
export declare const AccountsGetAccountRequest$outboundSchema: z.ZodType<AccountsGetAccountRequest$Outbound, z.ZodTypeDef, AccountsGetAccountRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsGetAccountRequest$ {
    /** @deprecated use `AccountsGetAccountRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsGetAccountRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsGetAccountRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsGetAccountRequest$Outbound, z.ZodTypeDef, AccountsGetAccountRequest>;
    /** @deprecated use `AccountsGetAccountRequest$Outbound` instead. */
    type Outbound = AccountsGetAccountRequest$Outbound;
}
export declare function accountsGetAccountRequestToJSON(accountsGetAccountRequest: AccountsGetAccountRequest): string;
export declare function accountsGetAccountRequestFromJSON(jsonString: string): SafeParseResult<AccountsGetAccountRequest, SDKValidationError>;
/** @internal */
export declare const AccountsGetAccountResponse$inboundSchema: z.ZodType<AccountsGetAccountResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsGetAccountResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Account?: components.Account$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsGetAccountResponse$outboundSchema: z.ZodType<AccountsGetAccountResponse$Outbound, z.ZodTypeDef, AccountsGetAccountResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsGetAccountResponse$ {
    /** @deprecated use `AccountsGetAccountResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsGetAccountResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsGetAccountResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsGetAccountResponse$Outbound, z.ZodTypeDef, AccountsGetAccountResponse>;
    /** @deprecated use `AccountsGetAccountResponse$Outbound` instead. */
    type Outbound = AccountsGetAccountResponse$Outbound;
}
export declare function accountsGetAccountResponseToJSON(accountsGetAccountResponse: AccountsGetAccountResponse): string;
export declare function accountsGetAccountResponseFromJSON(jsonString: string): SafeParseResult<AccountsGetAccountResponse, SDKValidationError>;
//# sourceMappingURL=accountsgetaccount.d.ts.map