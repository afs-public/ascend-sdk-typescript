import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsDeleteTrustedContactRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The trustedContact id.
     */
    trustedContactId: string;
};
export type AccountsDeleteTrustedContactResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsDeleteTrustedContactRequest$inboundSchema: z.ZodType<AccountsDeleteTrustedContactRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsDeleteTrustedContactRequest$Outbound = {
    account_id: string;
    trustedContact_id: string;
};
/** @internal */
export declare const AccountsDeleteTrustedContactRequest$outboundSchema: z.ZodType<AccountsDeleteTrustedContactRequest$Outbound, z.ZodTypeDef, AccountsDeleteTrustedContactRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsDeleteTrustedContactRequest$ {
    /** @deprecated use `AccountsDeleteTrustedContactRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsDeleteTrustedContactRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsDeleteTrustedContactRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsDeleteTrustedContactRequest$Outbound, z.ZodTypeDef, AccountsDeleteTrustedContactRequest>;
    /** @deprecated use `AccountsDeleteTrustedContactRequest$Outbound` instead. */
    type Outbound = AccountsDeleteTrustedContactRequest$Outbound;
}
/** @internal */
export declare const AccountsDeleteTrustedContactResponse$inboundSchema: z.ZodType<AccountsDeleteTrustedContactResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsDeleteTrustedContactResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsDeleteTrustedContactResponse$outboundSchema: z.ZodType<AccountsDeleteTrustedContactResponse$Outbound, z.ZodTypeDef, AccountsDeleteTrustedContactResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsDeleteTrustedContactResponse$ {
    /** @deprecated use `AccountsDeleteTrustedContactResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsDeleteTrustedContactResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsDeleteTrustedContactResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsDeleteTrustedContactResponse$Outbound, z.ZodTypeDef, AccountsDeleteTrustedContactResponse>;
    /** @deprecated use `AccountsDeleteTrustedContactResponse$Outbound` instead. */
    type Outbound = AccountsDeleteTrustedContactResponse$Outbound;
}
//# sourceMappingURL=accountsdeletetrustedcontact.d.ts.map