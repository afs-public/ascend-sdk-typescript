import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsGetLegalEntityRequest = {
    /**
     * The legalEntity id.
     */
    legalEntityId: string;
};
export type AccountsGetLegalEntityResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    legalEntity?: components.LegalEntity | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsGetLegalEntityRequest$inboundSchema: z.ZodType<AccountsGetLegalEntityRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsGetLegalEntityRequest$Outbound = {
    legalEntity_id: string;
};
/** @internal */
export declare const AccountsGetLegalEntityRequest$outboundSchema: z.ZodType<AccountsGetLegalEntityRequest$Outbound, z.ZodTypeDef, AccountsGetLegalEntityRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsGetLegalEntityRequest$ {
    /** @deprecated use `AccountsGetLegalEntityRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsGetLegalEntityRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsGetLegalEntityRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsGetLegalEntityRequest$Outbound, z.ZodTypeDef, AccountsGetLegalEntityRequest>;
    /** @deprecated use `AccountsGetLegalEntityRequest$Outbound` instead. */
    type Outbound = AccountsGetLegalEntityRequest$Outbound;
}
/** @internal */
export declare const AccountsGetLegalEntityResponse$inboundSchema: z.ZodType<AccountsGetLegalEntityResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsGetLegalEntityResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LegalEntity?: components.LegalEntity$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsGetLegalEntityResponse$outboundSchema: z.ZodType<AccountsGetLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsGetLegalEntityResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsGetLegalEntityResponse$ {
    /** @deprecated use `AccountsGetLegalEntityResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsGetLegalEntityResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsGetLegalEntityResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsGetLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsGetLegalEntityResponse>;
    /** @deprecated use `AccountsGetLegalEntityResponse$Outbound` instead. */
    type Outbound = AccountsGetLegalEntityResponse$Outbound;
}
//# sourceMappingURL=accountsgetlegalentity.d.ts.map