import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsCreateLegalEntityResponse = {
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
export declare const AccountsCreateLegalEntityResponse$inboundSchema: z.ZodType<AccountsCreateLegalEntityResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCreateLegalEntityResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LegalEntity?: components.LegalEntity$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsCreateLegalEntityResponse$outboundSchema: z.ZodType<AccountsCreateLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsCreateLegalEntityResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCreateLegalEntityResponse$ {
    /** @deprecated use `AccountsCreateLegalEntityResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCreateLegalEntityResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCreateLegalEntityResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCreateLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsCreateLegalEntityResponse>;
    /** @deprecated use `AccountsCreateLegalEntityResponse$Outbound` instead. */
    type Outbound = AccountsCreateLegalEntityResponse$Outbound;
}
export declare function accountsCreateLegalEntityResponseToJSON(accountsCreateLegalEntityResponse: AccountsCreateLegalEntityResponse): string;
export declare function accountsCreateLegalEntityResponseFromJSON(jsonString: string): SafeParseResult<AccountsCreateLegalEntityResponse, SDKValidationError>;
//# sourceMappingURL=accountscreatelegalentity.d.ts.map