import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsUpdateInterestedPartyRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The interestedParty id.
     */
    interestedPartyId: string;
    /**
     * The list of fields to update. Updatable Fields  `recipient`  `statement_delivery_preference`  `trade_confirmation_delivery_preference`  `mailing_address.region_code`  `mailing_address.postal_code`  `mailing_address.administrative_area`  `mailing_address.locality`  `mailing_address.address_lines`
     */
    updateMask?: string | undefined;
    interestedPartyUpdate: components.InterestedPartyUpdate;
};
export type AccountsUpdateInterestedPartyResponse = {
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
export declare const AccountsUpdateInterestedPartyRequest$inboundSchema: z.ZodType<AccountsUpdateInterestedPartyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateInterestedPartyRequest$Outbound = {
    account_id: string;
    interestedParty_id: string;
    update_mask?: string | undefined;
    InterestedPartyUpdate: components.InterestedPartyUpdate$Outbound;
};
/** @internal */
export declare const AccountsUpdateInterestedPartyRequest$outboundSchema: z.ZodType<AccountsUpdateInterestedPartyRequest$Outbound, z.ZodTypeDef, AccountsUpdateInterestedPartyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateInterestedPartyRequest$ {
    /** @deprecated use `AccountsUpdateInterestedPartyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateInterestedPartyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateInterestedPartyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateInterestedPartyRequest$Outbound, z.ZodTypeDef, AccountsUpdateInterestedPartyRequest>;
    /** @deprecated use `AccountsUpdateInterestedPartyRequest$Outbound` instead. */
    type Outbound = AccountsUpdateInterestedPartyRequest$Outbound;
}
export declare function accountsUpdateInterestedPartyRequestToJSON(accountsUpdateInterestedPartyRequest: AccountsUpdateInterestedPartyRequest): string;
export declare function accountsUpdateInterestedPartyRequestFromJSON(jsonString: string): SafeParseResult<AccountsUpdateInterestedPartyRequest, SDKValidationError>;
/** @internal */
export declare const AccountsUpdateInterestedPartyResponse$inboundSchema: z.ZodType<AccountsUpdateInterestedPartyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateInterestedPartyResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    InterestedParty?: components.InterestedParty$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsUpdateInterestedPartyResponse$outboundSchema: z.ZodType<AccountsUpdateInterestedPartyResponse$Outbound, z.ZodTypeDef, AccountsUpdateInterestedPartyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateInterestedPartyResponse$ {
    /** @deprecated use `AccountsUpdateInterestedPartyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateInterestedPartyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateInterestedPartyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateInterestedPartyResponse$Outbound, z.ZodTypeDef, AccountsUpdateInterestedPartyResponse>;
    /** @deprecated use `AccountsUpdateInterestedPartyResponse$Outbound` instead. */
    type Outbound = AccountsUpdateInterestedPartyResponse$Outbound;
}
export declare function accountsUpdateInterestedPartyResponseToJSON(accountsUpdateInterestedPartyResponse: AccountsUpdateInterestedPartyResponse): string;
export declare function accountsUpdateInterestedPartyResponseFromJSON(jsonString: string): SafeParseResult<AccountsUpdateInterestedPartyResponse, SDKValidationError>;
//# sourceMappingURL=accountsupdateinterestedparty.d.ts.map