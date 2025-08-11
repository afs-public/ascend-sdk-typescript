import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsDeleteInterestedPartyRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The interestedParty id.
     */
    interestedPartyId: string;
};
export type AccountsDeleteInterestedPartyResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsDeleteInterestedPartyRequest$inboundSchema: z.ZodType<AccountsDeleteInterestedPartyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsDeleteInterestedPartyRequest$Outbound = {
    account_id: string;
    interestedParty_id: string;
};
/** @internal */
export declare const AccountsDeleteInterestedPartyRequest$outboundSchema: z.ZodType<AccountsDeleteInterestedPartyRequest$Outbound, z.ZodTypeDef, AccountsDeleteInterestedPartyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsDeleteInterestedPartyRequest$ {
    /** @deprecated use `AccountsDeleteInterestedPartyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsDeleteInterestedPartyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsDeleteInterestedPartyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsDeleteInterestedPartyRequest$Outbound, z.ZodTypeDef, AccountsDeleteInterestedPartyRequest>;
    /** @deprecated use `AccountsDeleteInterestedPartyRequest$Outbound` instead. */
    type Outbound = AccountsDeleteInterestedPartyRequest$Outbound;
}
export declare function accountsDeleteInterestedPartyRequestToJSON(accountsDeleteInterestedPartyRequest: AccountsDeleteInterestedPartyRequest): string;
export declare function accountsDeleteInterestedPartyRequestFromJSON(jsonString: string): SafeParseResult<AccountsDeleteInterestedPartyRequest, SDKValidationError>;
/** @internal */
export declare const AccountsDeleteInterestedPartyResponse$inboundSchema: z.ZodType<AccountsDeleteInterestedPartyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsDeleteInterestedPartyResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsDeleteInterestedPartyResponse$outboundSchema: z.ZodType<AccountsDeleteInterestedPartyResponse$Outbound, z.ZodTypeDef, AccountsDeleteInterestedPartyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsDeleteInterestedPartyResponse$ {
    /** @deprecated use `AccountsDeleteInterestedPartyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsDeleteInterestedPartyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsDeleteInterestedPartyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsDeleteInterestedPartyResponse$Outbound, z.ZodTypeDef, AccountsDeleteInterestedPartyResponse>;
    /** @deprecated use `AccountsDeleteInterestedPartyResponse$Outbound` instead. */
    type Outbound = AccountsDeleteInterestedPartyResponse$Outbound;
}
export declare function accountsDeleteInterestedPartyResponseToJSON(accountsDeleteInterestedPartyResponse: AccountsDeleteInterestedPartyResponse): string;
export declare function accountsDeleteInterestedPartyResponseFromJSON(jsonString: string): SafeParseResult<AccountsDeleteInterestedPartyResponse, SDKValidationError>;
//# sourceMappingURL=accountsdeleteinterestedparty.d.ts.map