import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsListAvailableRestrictionsRequest = {
    /**
     * The account id.
     */
    accountId: string;
};
export type AccountsListAvailableRestrictionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listAvailableRestrictionsResponse?: components.ListAvailableRestrictionsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsListAvailableRestrictionsRequest$inboundSchema: z.ZodType<AccountsListAvailableRestrictionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAvailableRestrictionsRequest$Outbound = {
    account_id: string;
};
/** @internal */
export declare const AccountsListAvailableRestrictionsRequest$outboundSchema: z.ZodType<AccountsListAvailableRestrictionsRequest$Outbound, z.ZodTypeDef, AccountsListAvailableRestrictionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAvailableRestrictionsRequest$ {
    /** @deprecated use `AccountsListAvailableRestrictionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAvailableRestrictionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAvailableRestrictionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAvailableRestrictionsRequest$Outbound, z.ZodTypeDef, AccountsListAvailableRestrictionsRequest>;
    /** @deprecated use `AccountsListAvailableRestrictionsRequest$Outbound` instead. */
    type Outbound = AccountsListAvailableRestrictionsRequest$Outbound;
}
/** @internal */
export declare const AccountsListAvailableRestrictionsResponse$inboundSchema: z.ZodType<AccountsListAvailableRestrictionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAvailableRestrictionsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAvailableRestrictionsResponse?: components.ListAvailableRestrictionsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsListAvailableRestrictionsResponse$outboundSchema: z.ZodType<AccountsListAvailableRestrictionsResponse$Outbound, z.ZodTypeDef, AccountsListAvailableRestrictionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAvailableRestrictionsResponse$ {
    /** @deprecated use `AccountsListAvailableRestrictionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAvailableRestrictionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAvailableRestrictionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAvailableRestrictionsResponse$Outbound, z.ZodTypeDef, AccountsListAvailableRestrictionsResponse>;
    /** @deprecated use `AccountsListAvailableRestrictionsResponse$Outbound` instead. */
    type Outbound = AccountsListAvailableRestrictionsResponse$Outbound;
}
//# sourceMappingURL=accountslistavailablerestrictions.d.ts.map