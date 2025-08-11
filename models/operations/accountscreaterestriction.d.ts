import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsCreateRestrictionRequest = {
    /**
     * The account id.
     */
    accountId: string;
    restrictionCreate: components.RestrictionCreate;
};
export type AccountsCreateRestrictionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    restriction?: components.Restriction | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsCreateRestrictionRequest$inboundSchema: z.ZodType<AccountsCreateRestrictionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCreateRestrictionRequest$Outbound = {
    account_id: string;
    RestrictionCreate: components.RestrictionCreate$Outbound;
};
/** @internal */
export declare const AccountsCreateRestrictionRequest$outboundSchema: z.ZodType<AccountsCreateRestrictionRequest$Outbound, z.ZodTypeDef, AccountsCreateRestrictionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCreateRestrictionRequest$ {
    /** @deprecated use `AccountsCreateRestrictionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCreateRestrictionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCreateRestrictionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCreateRestrictionRequest$Outbound, z.ZodTypeDef, AccountsCreateRestrictionRequest>;
    /** @deprecated use `AccountsCreateRestrictionRequest$Outbound` instead. */
    type Outbound = AccountsCreateRestrictionRequest$Outbound;
}
export declare function accountsCreateRestrictionRequestToJSON(accountsCreateRestrictionRequest: AccountsCreateRestrictionRequest): string;
export declare function accountsCreateRestrictionRequestFromJSON(jsonString: string): SafeParseResult<AccountsCreateRestrictionRequest, SDKValidationError>;
/** @internal */
export declare const AccountsCreateRestrictionResponse$inboundSchema: z.ZodType<AccountsCreateRestrictionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCreateRestrictionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Restriction?: components.Restriction$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsCreateRestrictionResponse$outboundSchema: z.ZodType<AccountsCreateRestrictionResponse$Outbound, z.ZodTypeDef, AccountsCreateRestrictionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCreateRestrictionResponse$ {
    /** @deprecated use `AccountsCreateRestrictionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCreateRestrictionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCreateRestrictionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCreateRestrictionResponse$Outbound, z.ZodTypeDef, AccountsCreateRestrictionResponse>;
    /** @deprecated use `AccountsCreateRestrictionResponse$Outbound` instead. */
    type Outbound = AccountsCreateRestrictionResponse$Outbound;
}
export declare function accountsCreateRestrictionResponseToJSON(accountsCreateRestrictionResponse: AccountsCreateRestrictionResponse): string;
export declare function accountsCreateRestrictionResponseFromJSON(jsonString: string): SafeParseResult<AccountsCreateRestrictionResponse, SDKValidationError>;
//# sourceMappingURL=accountscreaterestriction.d.ts.map