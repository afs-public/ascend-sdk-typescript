import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsEnrollAccountRequest = {
    /**
     * The account id.
     */
    accountId: string;
    enrollAccountRequestCreate: components.EnrollAccountRequestCreate;
};
export type AccountsEnrollAccountResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    enrollAccountResponse?: components.EnrollAccountResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsEnrollAccountRequest$inboundSchema: z.ZodType<AccountsEnrollAccountRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsEnrollAccountRequest$Outbound = {
    account_id: string;
    EnrollAccountRequestCreate: components.EnrollAccountRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsEnrollAccountRequest$outboundSchema: z.ZodType<AccountsEnrollAccountRequest$Outbound, z.ZodTypeDef, AccountsEnrollAccountRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsEnrollAccountRequest$ {
    /** @deprecated use `AccountsEnrollAccountRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsEnrollAccountRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsEnrollAccountRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsEnrollAccountRequest$Outbound, z.ZodTypeDef, AccountsEnrollAccountRequest>;
    /** @deprecated use `AccountsEnrollAccountRequest$Outbound` instead. */
    type Outbound = AccountsEnrollAccountRequest$Outbound;
}
/** @internal */
export declare const AccountsEnrollAccountResponse$inboundSchema: z.ZodType<AccountsEnrollAccountResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsEnrollAccountResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    EnrollAccountResponse?: components.EnrollAccountResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsEnrollAccountResponse$outboundSchema: z.ZodType<AccountsEnrollAccountResponse$Outbound, z.ZodTypeDef, AccountsEnrollAccountResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsEnrollAccountResponse$ {
    /** @deprecated use `AccountsEnrollAccountResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsEnrollAccountResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsEnrollAccountResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsEnrollAccountResponse$Outbound, z.ZodTypeDef, AccountsEnrollAccountResponse>;
    /** @deprecated use `AccountsEnrollAccountResponse$Outbound` instead. */
    type Outbound = AccountsEnrollAccountResponse$Outbound;
}
//# sourceMappingURL=accountsenrollaccount.d.ts.map