import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsEndLargeTraderLegalNaturalPersonRequest = {
    /**
     * The legalNaturalPerson id.
     */
    legalNaturalPersonId: string;
    endLargeTraderRequestCreate: components.EndLargeTraderRequestCreate;
};
export type AccountsEndLargeTraderLegalNaturalPersonResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsEndLargeTraderLegalNaturalPersonRequest$inboundSchema: z.ZodType<AccountsEndLargeTraderLegalNaturalPersonRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsEndLargeTraderLegalNaturalPersonRequest$Outbound = {
    legalNaturalPerson_id: string;
    EndLargeTraderRequestCreate: components.EndLargeTraderRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsEndLargeTraderLegalNaturalPersonRequest$outboundSchema: z.ZodType<AccountsEndLargeTraderLegalNaturalPersonRequest$Outbound, z.ZodTypeDef, AccountsEndLargeTraderLegalNaturalPersonRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsEndLargeTraderLegalNaturalPersonRequest$ {
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsEndLargeTraderLegalNaturalPersonRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsEndLargeTraderLegalNaturalPersonRequest$Outbound, z.ZodTypeDef, AccountsEndLargeTraderLegalNaturalPersonRequest>;
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonRequest$Outbound` instead. */
    type Outbound = AccountsEndLargeTraderLegalNaturalPersonRequest$Outbound;
}
export declare function accountsEndLargeTraderLegalNaturalPersonRequestToJSON(accountsEndLargeTraderLegalNaturalPersonRequest: AccountsEndLargeTraderLegalNaturalPersonRequest): string;
export declare function accountsEndLargeTraderLegalNaturalPersonRequestFromJSON(jsonString: string): SafeParseResult<AccountsEndLargeTraderLegalNaturalPersonRequest, SDKValidationError>;
/** @internal */
export declare const AccountsEndLargeTraderLegalNaturalPersonResponse$inboundSchema: z.ZodType<AccountsEndLargeTraderLegalNaturalPersonResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsEndLargeTraderLegalNaturalPersonResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsEndLargeTraderLegalNaturalPersonResponse$outboundSchema: z.ZodType<AccountsEndLargeTraderLegalNaturalPersonResponse$Outbound, z.ZodTypeDef, AccountsEndLargeTraderLegalNaturalPersonResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsEndLargeTraderLegalNaturalPersonResponse$ {
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsEndLargeTraderLegalNaturalPersonResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsEndLargeTraderLegalNaturalPersonResponse$Outbound, z.ZodTypeDef, AccountsEndLargeTraderLegalNaturalPersonResponse>;
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonResponse$Outbound` instead. */
    type Outbound = AccountsEndLargeTraderLegalNaturalPersonResponse$Outbound;
}
export declare function accountsEndLargeTraderLegalNaturalPersonResponseToJSON(accountsEndLargeTraderLegalNaturalPersonResponse: AccountsEndLargeTraderLegalNaturalPersonResponse): string;
export declare function accountsEndLargeTraderLegalNaturalPersonResponseFromJSON(jsonString: string): SafeParseResult<AccountsEndLargeTraderLegalNaturalPersonResponse, SDKValidationError>;
//# sourceMappingURL=accountsendlargetraderlegalnaturalperson.d.ts.map