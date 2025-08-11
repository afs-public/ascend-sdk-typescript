import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsEndRestrictionRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The restriction id.
     */
    restrictionId: string;
    endRestrictionRequestCreate: components.EndRestrictionRequestCreate;
};
export type AccountsEndRestrictionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsEndRestrictionRequest$inboundSchema: z.ZodType<AccountsEndRestrictionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsEndRestrictionRequest$Outbound = {
    account_id: string;
    restriction_id: string;
    EndRestrictionRequestCreate: components.EndRestrictionRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsEndRestrictionRequest$outboundSchema: z.ZodType<AccountsEndRestrictionRequest$Outbound, z.ZodTypeDef, AccountsEndRestrictionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsEndRestrictionRequest$ {
    /** @deprecated use `AccountsEndRestrictionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsEndRestrictionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsEndRestrictionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsEndRestrictionRequest$Outbound, z.ZodTypeDef, AccountsEndRestrictionRequest>;
    /** @deprecated use `AccountsEndRestrictionRequest$Outbound` instead. */
    type Outbound = AccountsEndRestrictionRequest$Outbound;
}
export declare function accountsEndRestrictionRequestToJSON(accountsEndRestrictionRequest: AccountsEndRestrictionRequest): string;
export declare function accountsEndRestrictionRequestFromJSON(jsonString: string): SafeParseResult<AccountsEndRestrictionRequest, SDKValidationError>;
/** @internal */
export declare const AccountsEndRestrictionResponse$inboundSchema: z.ZodType<AccountsEndRestrictionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsEndRestrictionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsEndRestrictionResponse$outboundSchema: z.ZodType<AccountsEndRestrictionResponse$Outbound, z.ZodTypeDef, AccountsEndRestrictionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsEndRestrictionResponse$ {
    /** @deprecated use `AccountsEndRestrictionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsEndRestrictionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsEndRestrictionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsEndRestrictionResponse$Outbound, z.ZodTypeDef, AccountsEndRestrictionResponse>;
    /** @deprecated use `AccountsEndRestrictionResponse$Outbound` instead. */
    type Outbound = AccountsEndRestrictionResponse$Outbound;
}
export declare function accountsEndRestrictionResponseToJSON(accountsEndRestrictionResponse: AccountsEndRestrictionResponse): string;
export declare function accountsEndRestrictionResponseFromJSON(jsonString: string): SafeParseResult<AccountsEndRestrictionResponse, SDKValidationError>;
//# sourceMappingURL=accountsendrestriction.d.ts.map