import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsAssignLargeTraderLegalEntityRequest = {
    /**
     * The legalEntity id.
     */
    legalEntityId: string;
    assignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate;
};
export type AccountsAssignLargeTraderLegalEntityResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    largeTrader?: components.LargeTrader | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsAssignLargeTraderLegalEntityRequest$inboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAssignLargeTraderLegalEntityRequest$Outbound = {
    legalEntity_id: string;
    AssignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsAssignLargeTraderLegalEntityRequest$outboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityRequest$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderLegalEntityRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAssignLargeTraderLegalEntityRequest$ {
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityRequest$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderLegalEntityRequest>;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityRequest$Outbound` instead. */
    type Outbound = AccountsAssignLargeTraderLegalEntityRequest$Outbound;
}
export declare function accountsAssignLargeTraderLegalEntityRequestToJSON(accountsAssignLargeTraderLegalEntityRequest: AccountsAssignLargeTraderLegalEntityRequest): string;
export declare function accountsAssignLargeTraderLegalEntityRequestFromJSON(jsonString: string): SafeParseResult<AccountsAssignLargeTraderLegalEntityRequest, SDKValidationError>;
/** @internal */
export declare const AccountsAssignLargeTraderLegalEntityResponse$inboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAssignLargeTraderLegalEntityResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LargeTrader?: components.LargeTrader$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsAssignLargeTraderLegalEntityResponse$outboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderLegalEntityResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAssignLargeTraderLegalEntityResponse$ {
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAssignLargeTraderLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderLegalEntityResponse>;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityResponse$Outbound` instead. */
    type Outbound = AccountsAssignLargeTraderLegalEntityResponse$Outbound;
}
export declare function accountsAssignLargeTraderLegalEntityResponseToJSON(accountsAssignLargeTraderLegalEntityResponse: AccountsAssignLargeTraderLegalEntityResponse): string;
export declare function accountsAssignLargeTraderLegalEntityResponseFromJSON(jsonString: string): SafeParseResult<AccountsAssignLargeTraderLegalEntityResponse, SDKValidationError>;
//# sourceMappingURL=accountsassignlargetraderlegalentity.d.ts.map