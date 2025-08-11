import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsCreateTrustedContactRequest = {
    /**
     * The account id.
     */
    accountId: string;
    trustedContactCreate: components.TrustedContactCreate;
};
export type AccountsCreateTrustedContactResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    trustedContact?: components.TrustedContact | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsCreateTrustedContactRequest$inboundSchema: z.ZodType<AccountsCreateTrustedContactRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCreateTrustedContactRequest$Outbound = {
    account_id: string;
    TrustedContactCreate: components.TrustedContactCreate$Outbound;
};
/** @internal */
export declare const AccountsCreateTrustedContactRequest$outboundSchema: z.ZodType<AccountsCreateTrustedContactRequest$Outbound, z.ZodTypeDef, AccountsCreateTrustedContactRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCreateTrustedContactRequest$ {
    /** @deprecated use `AccountsCreateTrustedContactRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCreateTrustedContactRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCreateTrustedContactRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCreateTrustedContactRequest$Outbound, z.ZodTypeDef, AccountsCreateTrustedContactRequest>;
    /** @deprecated use `AccountsCreateTrustedContactRequest$Outbound` instead. */
    type Outbound = AccountsCreateTrustedContactRequest$Outbound;
}
export declare function accountsCreateTrustedContactRequestToJSON(accountsCreateTrustedContactRequest: AccountsCreateTrustedContactRequest): string;
export declare function accountsCreateTrustedContactRequestFromJSON(jsonString: string): SafeParseResult<AccountsCreateTrustedContactRequest, SDKValidationError>;
/** @internal */
export declare const AccountsCreateTrustedContactResponse$inboundSchema: z.ZodType<AccountsCreateTrustedContactResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCreateTrustedContactResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TrustedContact?: components.TrustedContact$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsCreateTrustedContactResponse$outboundSchema: z.ZodType<AccountsCreateTrustedContactResponse$Outbound, z.ZodTypeDef, AccountsCreateTrustedContactResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCreateTrustedContactResponse$ {
    /** @deprecated use `AccountsCreateTrustedContactResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCreateTrustedContactResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCreateTrustedContactResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCreateTrustedContactResponse$Outbound, z.ZodTypeDef, AccountsCreateTrustedContactResponse>;
    /** @deprecated use `AccountsCreateTrustedContactResponse$Outbound` instead. */
    type Outbound = AccountsCreateTrustedContactResponse$Outbound;
}
export declare function accountsCreateTrustedContactResponseToJSON(accountsCreateTrustedContactResponse: AccountsCreateTrustedContactResponse): string;
export declare function accountsCreateTrustedContactResponseFromJSON(jsonString: string): SafeParseResult<AccountsCreateTrustedContactResponse, SDKValidationError>;
//# sourceMappingURL=accountscreatetrustedcontact.d.ts.map