import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsAssignLargeTraderRequest = {
    /**
     * The legalNaturalPerson id.
     */
    legalNaturalPersonId: string;
    assignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate;
};
export type AccountsAssignLargeTraderResponse = {
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
export declare const AccountsAssignLargeTraderRequest$inboundSchema: z.ZodType<AccountsAssignLargeTraderRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAssignLargeTraderRequest$Outbound = {
    legalNaturalPerson_id: string;
    AssignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsAssignLargeTraderRequest$outboundSchema: z.ZodType<AccountsAssignLargeTraderRequest$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAssignLargeTraderRequest$ {
    /** @deprecated use `AccountsAssignLargeTraderRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAssignLargeTraderRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAssignLargeTraderRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAssignLargeTraderRequest$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderRequest>;
    /** @deprecated use `AccountsAssignLargeTraderRequest$Outbound` instead. */
    type Outbound = AccountsAssignLargeTraderRequest$Outbound;
}
export declare function accountsAssignLargeTraderRequestToJSON(accountsAssignLargeTraderRequest: AccountsAssignLargeTraderRequest): string;
export declare function accountsAssignLargeTraderRequestFromJSON(jsonString: string): SafeParseResult<AccountsAssignLargeTraderRequest, SDKValidationError>;
/** @internal */
export declare const AccountsAssignLargeTraderResponse$inboundSchema: z.ZodType<AccountsAssignLargeTraderResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAssignLargeTraderResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LargeTrader?: components.LargeTrader$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsAssignLargeTraderResponse$outboundSchema: z.ZodType<AccountsAssignLargeTraderResponse$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAssignLargeTraderResponse$ {
    /** @deprecated use `AccountsAssignLargeTraderResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAssignLargeTraderResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAssignLargeTraderResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAssignLargeTraderResponse$Outbound, z.ZodTypeDef, AccountsAssignLargeTraderResponse>;
    /** @deprecated use `AccountsAssignLargeTraderResponse$Outbound` instead. */
    type Outbound = AccountsAssignLargeTraderResponse$Outbound;
}
export declare function accountsAssignLargeTraderResponseToJSON(accountsAssignLargeTraderResponse: AccountsAssignLargeTraderResponse): string;
export declare function accountsAssignLargeTraderResponseFromJSON(jsonString: string): SafeParseResult<AccountsAssignLargeTraderResponse, SDKValidationError>;
//# sourceMappingURL=accountsassignlargetrader.d.ts.map