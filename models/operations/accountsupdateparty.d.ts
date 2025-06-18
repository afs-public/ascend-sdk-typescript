import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsUpdatePartyRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The party id.
     */
    partyId: string;
    /**
     * The list of fields to update. Updatable Fields  `phone_number`  `email_address`  `statement_delivery_preference`  `trade_confirmation_delivery_preference`  `tax_document_delivery_preference`  `proxy_delivery_preference`  `prospectus_delivery_preference`  `mailing_address.region_code`  `mailing_address.postal_code`  `mailing_address.administrative_area`  `mailing_address.locality`  `mailing_address.address_lines`
     */
    updateMask?: string | undefined;
    partyRequestUpdate: components.PartyRequestUpdate;
};
export type AccountsUpdatePartyResponse = {
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
export declare const AccountsUpdatePartyRequest$inboundSchema: z.ZodType<AccountsUpdatePartyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdatePartyRequest$Outbound = {
    account_id: string;
    party_id: string;
    update_mask?: string | undefined;
    PartyRequestUpdate: components.PartyRequestUpdate$Outbound;
};
/** @internal */
export declare const AccountsUpdatePartyRequest$outboundSchema: z.ZodType<AccountsUpdatePartyRequest$Outbound, z.ZodTypeDef, AccountsUpdatePartyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdatePartyRequest$ {
    /** @deprecated use `AccountsUpdatePartyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdatePartyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdatePartyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdatePartyRequest$Outbound, z.ZodTypeDef, AccountsUpdatePartyRequest>;
    /** @deprecated use `AccountsUpdatePartyRequest$Outbound` instead. */
    type Outbound = AccountsUpdatePartyRequest$Outbound;
}
/** @internal */
export declare const AccountsUpdatePartyResponse$inboundSchema: z.ZodType<AccountsUpdatePartyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdatePartyResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Party?: components.Party$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsUpdatePartyResponse$outboundSchema: z.ZodType<AccountsUpdatePartyResponse$Outbound, z.ZodTypeDef, AccountsUpdatePartyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdatePartyResponse$ {
    /** @deprecated use `AccountsUpdatePartyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdatePartyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdatePartyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdatePartyResponse$Outbound, z.ZodTypeDef, AccountsUpdatePartyResponse>;
    /** @deprecated use `AccountsUpdatePartyResponse$Outbound` instead. */
    type Outbound = AccountsUpdatePartyResponse$Outbound;
}
//# sourceMappingURL=accountsupdateparty.d.ts.map