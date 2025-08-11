import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsRemovePartyRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The party id.
     */
    partyId: string;
    removePartyRequestCreate: components.RemovePartyRequestCreate;
};
export type AccountsRemovePartyResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsRemovePartyRequest$inboundSchema: z.ZodType<AccountsRemovePartyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsRemovePartyRequest$Outbound = {
    account_id: string;
    party_id: string;
    RemovePartyRequestCreate: components.RemovePartyRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsRemovePartyRequest$outboundSchema: z.ZodType<AccountsRemovePartyRequest$Outbound, z.ZodTypeDef, AccountsRemovePartyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsRemovePartyRequest$ {
    /** @deprecated use `AccountsRemovePartyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsRemovePartyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsRemovePartyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsRemovePartyRequest$Outbound, z.ZodTypeDef, AccountsRemovePartyRequest>;
    /** @deprecated use `AccountsRemovePartyRequest$Outbound` instead. */
    type Outbound = AccountsRemovePartyRequest$Outbound;
}
export declare function accountsRemovePartyRequestToJSON(accountsRemovePartyRequest: AccountsRemovePartyRequest): string;
export declare function accountsRemovePartyRequestFromJSON(jsonString: string): SafeParseResult<AccountsRemovePartyRequest, SDKValidationError>;
/** @internal */
export declare const AccountsRemovePartyResponse$inboundSchema: z.ZodType<AccountsRemovePartyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsRemovePartyResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsRemovePartyResponse$outboundSchema: z.ZodType<AccountsRemovePartyResponse$Outbound, z.ZodTypeDef, AccountsRemovePartyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsRemovePartyResponse$ {
    /** @deprecated use `AccountsRemovePartyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsRemovePartyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsRemovePartyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsRemovePartyResponse$Outbound, z.ZodTypeDef, AccountsRemovePartyResponse>;
    /** @deprecated use `AccountsRemovePartyResponse$Outbound` instead. */
    type Outbound = AccountsRemovePartyResponse$Outbound;
}
export declare function accountsRemovePartyResponseToJSON(accountsRemovePartyResponse: AccountsRemovePartyResponse): string;
export declare function accountsRemovePartyResponseFromJSON(jsonString: string): SafeParseResult<AccountsRemovePartyResponse, SDKValidationError>;
//# sourceMappingURL=accountsremoveparty.d.ts.map