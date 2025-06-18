import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsListLegalEntitiesRequest = {
    /**
     * The maximum number of legal entities to return. The service may return fewer than this value. If unspecified, at most 25 legal entities will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListLegalEntities` call. Provide this to retrieve the subsequent page.
     *
     * @remarks
     *
     *  When paginating, all other parameters provided to `ListLegalEntities` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
    /**
     * The order in which legal entities are listed.
     */
    orderBy?: string | undefined;
    /**
     * A CEL string to filter results; Use `upperAscii()` for case-insensitive searches; E.g. `entity_name.upperAscii()=="AcMe,InC".upperAscii()`; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
     *
     * @remarks
     *  `legal_entity_id`
     *  `investigation_id`
     *  `exempt_customer_reason`
     *  `exempt_verifying_beneficial_owners`
     */
    filter?: string | undefined;
};
export type AccountsListLegalEntitiesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listLegalEntitiesResponse?: components.ListLegalEntitiesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsListLegalEntitiesRequest$inboundSchema: z.ZodType<AccountsListLegalEntitiesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListLegalEntitiesRequest$Outbound = {
    page_size?: number | undefined;
    page_token?: string | undefined;
    order_by?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const AccountsListLegalEntitiesRequest$outboundSchema: z.ZodType<AccountsListLegalEntitiesRequest$Outbound, z.ZodTypeDef, AccountsListLegalEntitiesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListLegalEntitiesRequest$ {
    /** @deprecated use `AccountsListLegalEntitiesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListLegalEntitiesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListLegalEntitiesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListLegalEntitiesRequest$Outbound, z.ZodTypeDef, AccountsListLegalEntitiesRequest>;
    /** @deprecated use `AccountsListLegalEntitiesRequest$Outbound` instead. */
    type Outbound = AccountsListLegalEntitiesRequest$Outbound;
}
/** @internal */
export declare const AccountsListLegalEntitiesResponse$inboundSchema: z.ZodType<AccountsListLegalEntitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListLegalEntitiesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListLegalEntitiesResponse?: components.ListLegalEntitiesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsListLegalEntitiesResponse$outboundSchema: z.ZodType<AccountsListLegalEntitiesResponse$Outbound, z.ZodTypeDef, AccountsListLegalEntitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListLegalEntitiesResponse$ {
    /** @deprecated use `AccountsListLegalEntitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListLegalEntitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListLegalEntitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListLegalEntitiesResponse$Outbound, z.ZodTypeDef, AccountsListLegalEntitiesResponse>;
    /** @deprecated use `AccountsListLegalEntitiesResponse$Outbound` instead. */
    type Outbound = AccountsListLegalEntitiesResponse$Outbound;
}
//# sourceMappingURL=accountslistlegalentities.d.ts.map