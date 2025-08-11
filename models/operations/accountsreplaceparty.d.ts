import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsReplacePartyRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The party id.
     */
    partyId: string;
    replacePartyRequestCreate: components.ReplacePartyRequestCreate;
};
export type AccountsReplacePartyResponse = {
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
export declare const AccountsReplacePartyRequest$inboundSchema: z.ZodType<AccountsReplacePartyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsReplacePartyRequest$Outbound = {
    account_id: string;
    party_id: string;
    ReplacePartyRequestCreate: components.ReplacePartyRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsReplacePartyRequest$outboundSchema: z.ZodType<AccountsReplacePartyRequest$Outbound, z.ZodTypeDef, AccountsReplacePartyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsReplacePartyRequest$ {
    /** @deprecated use `AccountsReplacePartyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsReplacePartyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsReplacePartyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsReplacePartyRequest$Outbound, z.ZodTypeDef, AccountsReplacePartyRequest>;
    /** @deprecated use `AccountsReplacePartyRequest$Outbound` instead. */
    type Outbound = AccountsReplacePartyRequest$Outbound;
}
export declare function accountsReplacePartyRequestToJSON(accountsReplacePartyRequest: AccountsReplacePartyRequest): string;
export declare function accountsReplacePartyRequestFromJSON(jsonString: string): SafeParseResult<AccountsReplacePartyRequest, SDKValidationError>;
/** @internal */
export declare const AccountsReplacePartyResponse$inboundSchema: z.ZodType<AccountsReplacePartyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsReplacePartyResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Party?: components.Party$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsReplacePartyResponse$outboundSchema: z.ZodType<AccountsReplacePartyResponse$Outbound, z.ZodTypeDef, AccountsReplacePartyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsReplacePartyResponse$ {
    /** @deprecated use `AccountsReplacePartyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsReplacePartyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsReplacePartyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsReplacePartyResponse$Outbound, z.ZodTypeDef, AccountsReplacePartyResponse>;
    /** @deprecated use `AccountsReplacePartyResponse$Outbound` instead. */
    type Outbound = AccountsReplacePartyResponse$Outbound;
}
export declare function accountsReplacePartyResponseToJSON(accountsReplacePartyResponse: AccountsReplacePartyResponse): string;
export declare function accountsReplacePartyResponseFromJSON(jsonString: string): SafeParseResult<AccountsReplacePartyResponse, SDKValidationError>;
//# sourceMappingURL=accountsreplaceparty.d.ts.map