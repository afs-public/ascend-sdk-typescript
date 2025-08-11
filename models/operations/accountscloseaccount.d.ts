import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsCloseAccountRequest = {
    /**
     * The account id.
     */
    accountId: string;
    closeAccountRequestCreate: components.CloseAccountRequestCreate;
};
export type AccountsCloseAccountResponse = {
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
export declare const AccountsCloseAccountRequest$inboundSchema: z.ZodType<AccountsCloseAccountRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCloseAccountRequest$Outbound = {
    account_id: string;
    CloseAccountRequestCreate: components.CloseAccountRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsCloseAccountRequest$outboundSchema: z.ZodType<AccountsCloseAccountRequest$Outbound, z.ZodTypeDef, AccountsCloseAccountRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCloseAccountRequest$ {
    /** @deprecated use `AccountsCloseAccountRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCloseAccountRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCloseAccountRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCloseAccountRequest$Outbound, z.ZodTypeDef, AccountsCloseAccountRequest>;
    /** @deprecated use `AccountsCloseAccountRequest$Outbound` instead. */
    type Outbound = AccountsCloseAccountRequest$Outbound;
}
export declare function accountsCloseAccountRequestToJSON(accountsCloseAccountRequest: AccountsCloseAccountRequest): string;
export declare function accountsCloseAccountRequestFromJSON(jsonString: string): SafeParseResult<AccountsCloseAccountRequest, SDKValidationError>;
/** @internal */
export declare const AccountsCloseAccountResponse$inboundSchema: z.ZodType<AccountsCloseAccountResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCloseAccountResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Account?: components.Account$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsCloseAccountResponse$outboundSchema: z.ZodType<AccountsCloseAccountResponse$Outbound, z.ZodTypeDef, AccountsCloseAccountResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCloseAccountResponse$ {
    /** @deprecated use `AccountsCloseAccountResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCloseAccountResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCloseAccountResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCloseAccountResponse$Outbound, z.ZodTypeDef, AccountsCloseAccountResponse>;
    /** @deprecated use `AccountsCloseAccountResponse$Outbound` instead. */
    type Outbound = AccountsCloseAccountResponse$Outbound;
}
export declare function accountsCloseAccountResponseToJSON(accountsCloseAccountResponse: AccountsCloseAccountResponse): string;
export declare function accountsCloseAccountResponseFromJSON(jsonString: string): SafeParseResult<AccountsCloseAccountResponse, SDKValidationError>;
//# sourceMappingURL=accountscloseaccount.d.ts.map