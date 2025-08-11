import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsListLegalNaturalPersonsRequest = {
    /**
     * The maximum number of legal natural persons to return. The service may return fewer than this value. If unspecified, at most 25 legal natural persons will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListLegalNaturalPersons` call. Provide this to retrieve the subsequent page.
     *
     * @remarks
     *
     *  When paginating, all other parameters provided to `ListLegalNaturalPersons` must match the call that provided the page token.
     */
    pageToken?: string | undefined;
    /**
     * The order in which legal natural persons are listed.
     */
    orderBy?: string | undefined;
    /**
     * A CEL string to filter results; Use `upperAscii()` for case-insensitive searches; E.g. `given_name.upperAscii()=="rUsTy".upperAscii()`; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
     *
     * @remarks
     *  `legal_natural_person_id`
     *  `correspondent_id`
     *  `given_name`
     *  `family_name`
     *  `tax_id`
     *  `tax_id_type`
     *  `investigation_id`
     */
    filter?: string | undefined;
};
export type AccountsListLegalNaturalPersonsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listLegalNaturalPersonsResponse?: components.ListLegalNaturalPersonsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsListLegalNaturalPersonsRequest$inboundSchema: z.ZodType<AccountsListLegalNaturalPersonsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListLegalNaturalPersonsRequest$Outbound = {
    page_size?: number | undefined;
    page_token?: string | undefined;
    order_by?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const AccountsListLegalNaturalPersonsRequest$outboundSchema: z.ZodType<AccountsListLegalNaturalPersonsRequest$Outbound, z.ZodTypeDef, AccountsListLegalNaturalPersonsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListLegalNaturalPersonsRequest$ {
    /** @deprecated use `AccountsListLegalNaturalPersonsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListLegalNaturalPersonsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListLegalNaturalPersonsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListLegalNaturalPersonsRequest$Outbound, z.ZodTypeDef, AccountsListLegalNaturalPersonsRequest>;
    /** @deprecated use `AccountsListLegalNaturalPersonsRequest$Outbound` instead. */
    type Outbound = AccountsListLegalNaturalPersonsRequest$Outbound;
}
export declare function accountsListLegalNaturalPersonsRequestToJSON(accountsListLegalNaturalPersonsRequest: AccountsListLegalNaturalPersonsRequest): string;
export declare function accountsListLegalNaturalPersonsRequestFromJSON(jsonString: string): SafeParseResult<AccountsListLegalNaturalPersonsRequest, SDKValidationError>;
/** @internal */
export declare const AccountsListLegalNaturalPersonsResponse$inboundSchema: z.ZodType<AccountsListLegalNaturalPersonsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsListLegalNaturalPersonsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListLegalNaturalPersonsResponse?: components.ListLegalNaturalPersonsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsListLegalNaturalPersonsResponse$outboundSchema: z.ZodType<AccountsListLegalNaturalPersonsResponse$Outbound, z.ZodTypeDef, AccountsListLegalNaturalPersonsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsListLegalNaturalPersonsResponse$ {
    /** @deprecated use `AccountsListLegalNaturalPersonsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsListLegalNaturalPersonsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsListLegalNaturalPersonsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsListLegalNaturalPersonsResponse$Outbound, z.ZodTypeDef, AccountsListLegalNaturalPersonsResponse>;
    /** @deprecated use `AccountsListLegalNaturalPersonsResponse$Outbound` instead. */
    type Outbound = AccountsListLegalNaturalPersonsResponse$Outbound;
}
export declare function accountsListLegalNaturalPersonsResponseToJSON(accountsListLegalNaturalPersonsResponse: AccountsListLegalNaturalPersonsResponse): string;
export declare function accountsListLegalNaturalPersonsResponseFromJSON(jsonString: string): SafeParseResult<AccountsListLegalNaturalPersonsResponse, SDKValidationError>;
//# sourceMappingURL=accountslistlegalnaturalpersons.d.ts.map