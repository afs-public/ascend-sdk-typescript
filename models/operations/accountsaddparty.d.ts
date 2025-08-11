import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsAddPartyRequest = {
    /**
     * The account id.
     */
    accountId: string;
    addPartyRequestCreate: components.AddPartyRequestCreate;
};
export type AccountsAddPartyResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    party?: components.Party | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsAddPartyRequest$inboundSchema: z.ZodType<AccountsAddPartyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAddPartyRequest$Outbound = {
    account_id: string;
    AddPartyRequestCreate: components.AddPartyRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsAddPartyRequest$outboundSchema: z.ZodType<AccountsAddPartyRequest$Outbound, z.ZodTypeDef, AccountsAddPartyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAddPartyRequest$ {
    /** @deprecated use `AccountsAddPartyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAddPartyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAddPartyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAddPartyRequest$Outbound, z.ZodTypeDef, AccountsAddPartyRequest>;
    /** @deprecated use `AccountsAddPartyRequest$Outbound` instead. */
    type Outbound = AccountsAddPartyRequest$Outbound;
}
export declare function accountsAddPartyRequestToJSON(accountsAddPartyRequest: AccountsAddPartyRequest): string;
export declare function accountsAddPartyRequestFromJSON(jsonString: string): SafeParseResult<AccountsAddPartyRequest, SDKValidationError>;
/** @internal */
export declare const AccountsAddPartyResponse$inboundSchema: z.ZodType<AccountsAddPartyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAddPartyResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Party?: components.Party$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsAddPartyResponse$outboundSchema: z.ZodType<AccountsAddPartyResponse$Outbound, z.ZodTypeDef, AccountsAddPartyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAddPartyResponse$ {
    /** @deprecated use `AccountsAddPartyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAddPartyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAddPartyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAddPartyResponse$Outbound, z.ZodTypeDef, AccountsAddPartyResponse>;
    /** @deprecated use `AccountsAddPartyResponse$Outbound` instead. */
    type Outbound = AccountsAddPartyResponse$Outbound;
}
export declare function accountsAddPartyResponseToJSON(accountsAddPartyResponse: AccountsAddPartyResponse): string;
export declare function accountsAddPartyResponseFromJSON(jsonString: string): SafeParseResult<AccountsAddPartyResponse, SDKValidationError>;
//# sourceMappingURL=accountsaddparty.d.ts.map