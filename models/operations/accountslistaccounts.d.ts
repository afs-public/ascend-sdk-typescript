import * as z from "zod";
import * as components from "../components/index.js";
/**
 * The view to return. Defaults to `BASIC`.
 */
export declare enum View {
    AccountViewUnspecified = "ACCOUNT_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export type AccountsListAccountsRequest = {
    /**
     * The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 25 accounts will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page.
     *
     * @remarks
     *
     *  When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
    /**
     * The order in which accounts are listed. Can order by:
     *
     * @remarks
     *  `account_id`
     *  `account_number`
     *  `title`
     *  `state`
     *  `account_group_id`
     */
    orderBy?: string | undefined;
    /**
     * A CEL string to filter results; Use `upperAscii()` for case-insensitive searches; E.g. `parties.exists(parties,parties.legal_natural_person.family_name.upperAscii()=="dOuGh".upperAscii())`; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
     *
     * @remarks
     *  `account_id`
     *  `account_number`
     *  `correspondent_id`
     *  `title`
     *  `state`
     *  `margin_group_id`
     *  `account_group_id`
     *  `registration_type`
     *  `reserve_class`
     *  `parties.legal_natural_person.legal_natural_person_id`
     *  `parties.legal_natural_person.given_name`
     *  `parties.legal_natural_person.family_name`
     *  `parties.legal_natural_person.tax_id_type`
     *  `parties.legal_natural_person.tax_id`
     *  `parties.legal_entity.legal_entity_id`
     *  `parties.legal_entity.entity_name`
     *  `parties.legal_entity.tax_id_type`
     *  `parties.legal_entity.tax_id`
     *  `parties.legal_natural_person.foreign_identification.identification_number`
     *  `parties.legal_natural_person.foreign_identification.type`
     *  `enrollments.enrollment_id`
     *  `enrollments.type`
     *  `enrollments.state`
     *  `identifiers.type`
     *  `identifiers.value`
     */
    filter?: string | undefined;
    /**
     * The view to return. Defaults to `BASIC`.
     */
    view?: View | undefined;
};
export type AccountsListAccountsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listAccountsResponse?: components.ListAccountsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const View$inboundSchema: z.ZodNativeEnum<typeof View>;
/** @internal */
export declare const View$outboundSchema: z.ZodNativeEnum<typeof View>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace View$ {
    /** @deprecated use `View$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<typeof View>;
    /** @deprecated use `View$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<typeof View>;
}
/** @internal */
export declare const AccountsListAccountsRequest$inboundSchema: z.ZodType<AccountsListAccountsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAccountsRequest$Outbound = {
    page_size?: number | undefined;
    page_token?: string | undefined;
    order_by?: string | undefined;
    filter?: string | undefined;
    view?: string | undefined;
};
/** @internal */
export declare const AccountsListAccountsRequest$outboundSchema: z.ZodType<AccountsListAccountsRequest$Outbound, z.ZodTypeDef, AccountsListAccountsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAccountsRequest$ {
    /** @deprecated use `AccountsListAccountsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAccountsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAccountsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAccountsRequest$Outbound, z.ZodTypeDef, AccountsListAccountsRequest>;
    /** @deprecated use `AccountsListAccountsRequest$Outbound` instead. */
    type Outbound = AccountsListAccountsRequest$Outbound;
}
/** @internal */
export declare const AccountsListAccountsResponse$inboundSchema: z.ZodType<AccountsListAccountsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAccountsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAccountsResponse?: components.ListAccountsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsListAccountsResponse$outboundSchema: z.ZodType<AccountsListAccountsResponse$Outbound, z.ZodTypeDef, AccountsListAccountsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAccountsResponse$ {
    /** @deprecated use `AccountsListAccountsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAccountsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAccountsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAccountsResponse$Outbound, z.ZodTypeDef, AccountsListAccountsResponse>;
    /** @deprecated use `AccountsListAccountsResponse$Outbound` instead. */
    type Outbound = AccountsListAccountsResponse$Outbound;
}
//# sourceMappingURL=accountslistaccounts.d.ts.map