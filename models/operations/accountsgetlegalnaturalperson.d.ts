import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsGetLegalNaturalPersonRequest = {
    /**
     * The legalNaturalPerson id.
     */
    legalNaturalPersonId: string;
};
export type AccountsGetLegalNaturalPersonResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    legalNaturalPerson?: components.LegalNaturalPerson | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsGetLegalNaturalPersonRequest$inboundSchema: z.ZodType<AccountsGetLegalNaturalPersonRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsGetLegalNaturalPersonRequest$Outbound = {
    legalNaturalPerson_id: string;
};
/** @internal */
export declare const AccountsGetLegalNaturalPersonRequest$outboundSchema: z.ZodType<AccountsGetLegalNaturalPersonRequest$Outbound, z.ZodTypeDef, AccountsGetLegalNaturalPersonRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsGetLegalNaturalPersonRequest$ {
    /** @deprecated use `AccountsGetLegalNaturalPersonRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsGetLegalNaturalPersonRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsGetLegalNaturalPersonRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsGetLegalNaturalPersonRequest$Outbound, z.ZodTypeDef, AccountsGetLegalNaturalPersonRequest>;
    /** @deprecated use `AccountsGetLegalNaturalPersonRequest$Outbound` instead. */
    type Outbound = AccountsGetLegalNaturalPersonRequest$Outbound;
}
export declare function accountsGetLegalNaturalPersonRequestToJSON(accountsGetLegalNaturalPersonRequest: AccountsGetLegalNaturalPersonRequest): string;
export declare function accountsGetLegalNaturalPersonRequestFromJSON(jsonString: string): SafeParseResult<AccountsGetLegalNaturalPersonRequest, SDKValidationError>;
/** @internal */
export declare const AccountsGetLegalNaturalPersonResponse$inboundSchema: z.ZodType<AccountsGetLegalNaturalPersonResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsGetLegalNaturalPersonResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LegalNaturalPerson?: components.LegalNaturalPerson$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsGetLegalNaturalPersonResponse$outboundSchema: z.ZodType<AccountsGetLegalNaturalPersonResponse$Outbound, z.ZodTypeDef, AccountsGetLegalNaturalPersonResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsGetLegalNaturalPersonResponse$ {
    /** @deprecated use `AccountsGetLegalNaturalPersonResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsGetLegalNaturalPersonResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsGetLegalNaturalPersonResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsGetLegalNaturalPersonResponse$Outbound, z.ZodTypeDef, AccountsGetLegalNaturalPersonResponse>;
    /** @deprecated use `AccountsGetLegalNaturalPersonResponse$Outbound` instead. */
    type Outbound = AccountsGetLegalNaturalPersonResponse$Outbound;
}
export declare function accountsGetLegalNaturalPersonResponseToJSON(accountsGetLegalNaturalPersonResponse: AccountsGetLegalNaturalPersonResponse): string;
export declare function accountsGetLegalNaturalPersonResponseFromJSON(jsonString: string): SafeParseResult<AccountsGetLegalNaturalPersonResponse, SDKValidationError>;
//# sourceMappingURL=accountsgetlegalnaturalperson.d.ts.map