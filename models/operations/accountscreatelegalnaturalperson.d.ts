import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsCreateLegalNaturalPersonResponse = {
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
export declare const AccountsCreateLegalNaturalPersonResponse$inboundSchema: z.ZodType<AccountsCreateLegalNaturalPersonResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCreateLegalNaturalPersonResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LegalNaturalPerson?: components.LegalNaturalPerson$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsCreateLegalNaturalPersonResponse$outboundSchema: z.ZodType<AccountsCreateLegalNaturalPersonResponse$Outbound, z.ZodTypeDef, AccountsCreateLegalNaturalPersonResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCreateLegalNaturalPersonResponse$ {
    /** @deprecated use `AccountsCreateLegalNaturalPersonResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCreateLegalNaturalPersonResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCreateLegalNaturalPersonResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCreateLegalNaturalPersonResponse$Outbound, z.ZodTypeDef, AccountsCreateLegalNaturalPersonResponse>;
    /** @deprecated use `AccountsCreateLegalNaturalPersonResponse$Outbound` instead. */
    type Outbound = AccountsCreateLegalNaturalPersonResponse$Outbound;
}
export declare function accountsCreateLegalNaturalPersonResponseToJSON(accountsCreateLegalNaturalPersonResponse: AccountsCreateLegalNaturalPersonResponse): string;
export declare function accountsCreateLegalNaturalPersonResponseFromJSON(jsonString: string): SafeParseResult<AccountsCreateLegalNaturalPersonResponse, SDKValidationError>;
//# sourceMappingURL=accountscreatelegalnaturalperson.d.ts.map