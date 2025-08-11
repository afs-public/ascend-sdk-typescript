import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsCreateAccountResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    account?: components.Account | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsCreateAccountResponse$inboundSchema: z.ZodType<AccountsCreateAccountResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCreateAccountResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Account?: components.Account$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsCreateAccountResponse$outboundSchema: z.ZodType<AccountsCreateAccountResponse$Outbound, z.ZodTypeDef, AccountsCreateAccountResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCreateAccountResponse$ {
    /** @deprecated use `AccountsCreateAccountResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCreateAccountResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCreateAccountResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCreateAccountResponse$Outbound, z.ZodTypeDef, AccountsCreateAccountResponse>;
    /** @deprecated use `AccountsCreateAccountResponse$Outbound` instead. */
    type Outbound = AccountsCreateAccountResponse$Outbound;
}
export declare function accountsCreateAccountResponseToJSON(accountsCreateAccountResponse: AccountsCreateAccountResponse): string;
export declare function accountsCreateAccountResponseFromJSON(jsonString: string): SafeParseResult<AccountsCreateAccountResponse, SDKValidationError>;
//# sourceMappingURL=accountscreateaccount.d.ts.map