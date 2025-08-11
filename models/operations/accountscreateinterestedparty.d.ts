import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsCreateInterestedPartyRequest = {
    /**
     * The account id.
     */
    accountId: string;
    interestedPartyCreate: components.InterestedPartyCreate;
};
export type AccountsCreateInterestedPartyResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    interestedParty?: components.InterestedParty | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsCreateInterestedPartyRequest$inboundSchema: z.ZodType<AccountsCreateInterestedPartyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCreateInterestedPartyRequest$Outbound = {
    account_id: string;
    InterestedPartyCreate: components.InterestedPartyCreate$Outbound;
};
/** @internal */
export declare const AccountsCreateInterestedPartyRequest$outboundSchema: z.ZodType<AccountsCreateInterestedPartyRequest$Outbound, z.ZodTypeDef, AccountsCreateInterestedPartyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCreateInterestedPartyRequest$ {
    /** @deprecated use `AccountsCreateInterestedPartyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCreateInterestedPartyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCreateInterestedPartyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCreateInterestedPartyRequest$Outbound, z.ZodTypeDef, AccountsCreateInterestedPartyRequest>;
    /** @deprecated use `AccountsCreateInterestedPartyRequest$Outbound` instead. */
    type Outbound = AccountsCreateInterestedPartyRequest$Outbound;
}
export declare function accountsCreateInterestedPartyRequestToJSON(accountsCreateInterestedPartyRequest: AccountsCreateInterestedPartyRequest): string;
export declare function accountsCreateInterestedPartyRequestFromJSON(jsonString: string): SafeParseResult<AccountsCreateInterestedPartyRequest, SDKValidationError>;
/** @internal */
export declare const AccountsCreateInterestedPartyResponse$inboundSchema: z.ZodType<AccountsCreateInterestedPartyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsCreateInterestedPartyResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    InterestedParty?: components.InterestedParty$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsCreateInterestedPartyResponse$outboundSchema: z.ZodType<AccountsCreateInterestedPartyResponse$Outbound, z.ZodTypeDef, AccountsCreateInterestedPartyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsCreateInterestedPartyResponse$ {
    /** @deprecated use `AccountsCreateInterestedPartyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsCreateInterestedPartyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsCreateInterestedPartyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsCreateInterestedPartyResponse$Outbound, z.ZodTypeDef, AccountsCreateInterestedPartyResponse>;
    /** @deprecated use `AccountsCreateInterestedPartyResponse$Outbound` instead. */
    type Outbound = AccountsCreateInterestedPartyResponse$Outbound;
}
export declare function accountsCreateInterestedPartyResponseToJSON(accountsCreateInterestedPartyResponse: AccountsCreateInterestedPartyResponse): string;
export declare function accountsCreateInterestedPartyResponseFromJSON(jsonString: string): SafeParseResult<AccountsCreateInterestedPartyResponse, SDKValidationError>;
//# sourceMappingURL=accountscreateinterestedparty.d.ts.map