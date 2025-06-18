import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsListAvailableEnrollments1Request = {
    /**
     * The accountGroup id.
     */
    accountGroupId: string;
    /**
     * The maximum number of available enrollments to return. The service may return fewer than this value. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListAvailableEnrollments` call. Provide this to retrieve the subsequent page.
     *
     * @remarks
     *
     *  When paginating, all other parameters provided to `ListAvailableEnrollments` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
     *
     * @remarks
     *  `enrollment_type`
     */
    filter?: string | undefined;
};
export type AccountsListAvailableEnrollments1Response = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listAvailableEnrollmentsResponse?: components.ListAvailableEnrollmentsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsListAvailableEnrollments1Request$inboundSchema: z.ZodType<AccountsListAvailableEnrollments1Request, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAvailableEnrollments1Request$Outbound = {
    accountGroup_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const AccountsListAvailableEnrollments1Request$outboundSchema: z.ZodType<AccountsListAvailableEnrollments1Request$Outbound, z.ZodTypeDef, AccountsListAvailableEnrollments1Request>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAvailableEnrollments1Request$ {
    /** @deprecated use `AccountsListAvailableEnrollments1Request$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAvailableEnrollments1Request, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAvailableEnrollments1Request$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAvailableEnrollments1Request$Outbound, z.ZodTypeDef, AccountsListAvailableEnrollments1Request>;
    /** @deprecated use `AccountsListAvailableEnrollments1Request$Outbound` instead. */
    type Outbound = AccountsListAvailableEnrollments1Request$Outbound;
}
/** @internal */
export declare const AccountsListAvailableEnrollments1Response$inboundSchema: z.ZodType<AccountsListAvailableEnrollments1Response, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListAvailableEnrollments1Response$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAvailableEnrollmentsResponse?: components.ListAvailableEnrollmentsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsListAvailableEnrollments1Response$outboundSchema: z.ZodType<AccountsListAvailableEnrollments1Response$Outbound, z.ZodTypeDef, AccountsListAvailableEnrollments1Response>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListAvailableEnrollments1Response$ {
    /** @deprecated use `AccountsListAvailableEnrollments1Response$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListAvailableEnrollments1Response, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListAvailableEnrollments1Response$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListAvailableEnrollments1Response$Outbound, z.ZodTypeDef, AccountsListAvailableEnrollments1Response>;
    /** @deprecated use `AccountsListAvailableEnrollments1Response$Outbound` instead. */
    type Outbound = AccountsListAvailableEnrollments1Response$Outbound;
}
//# sourceMappingURL=accountslistavailableenrollments1.d.ts.map