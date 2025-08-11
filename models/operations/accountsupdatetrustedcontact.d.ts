import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsUpdateTrustedContactRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The trustedContact id.
     */
    trustedContactId: string;
    /**
     * The list of fields to update. Updatable Fields  `given_name`  `middle_names`  `family_name`  `phone_number`  `email_address`  `mailing_address.region_code`  `mailing_address.postal_code`  `mailing_address.administrative_area`  `mailing_address.locality`  `mailing_address.address_lines`
     */
    updateMask?: string | undefined;
    trustedContactUpdate: components.TrustedContactUpdate;
};
export type AccountsUpdateTrustedContactResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    trustedContact?: components.TrustedContact | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsUpdateTrustedContactRequest$inboundSchema: z.ZodType<AccountsUpdateTrustedContactRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateTrustedContactRequest$Outbound = {
    account_id: string;
    trustedContact_id: string;
    update_mask?: string | undefined;
    TrustedContactUpdate: components.TrustedContactUpdate$Outbound;
};
/** @internal */
export declare const AccountsUpdateTrustedContactRequest$outboundSchema: z.ZodType<AccountsUpdateTrustedContactRequest$Outbound, z.ZodTypeDef, AccountsUpdateTrustedContactRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateTrustedContactRequest$ {
    /** @deprecated use `AccountsUpdateTrustedContactRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateTrustedContactRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateTrustedContactRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateTrustedContactRequest$Outbound, z.ZodTypeDef, AccountsUpdateTrustedContactRequest>;
    /** @deprecated use `AccountsUpdateTrustedContactRequest$Outbound` instead. */
    type Outbound = AccountsUpdateTrustedContactRequest$Outbound;
}
export declare function accountsUpdateTrustedContactRequestToJSON(accountsUpdateTrustedContactRequest: AccountsUpdateTrustedContactRequest): string;
export declare function accountsUpdateTrustedContactRequestFromJSON(jsonString: string): SafeParseResult<AccountsUpdateTrustedContactRequest, SDKValidationError>;
/** @internal */
export declare const AccountsUpdateTrustedContactResponse$inboundSchema: z.ZodType<AccountsUpdateTrustedContactResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateTrustedContactResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TrustedContact?: components.TrustedContact$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsUpdateTrustedContactResponse$outboundSchema: z.ZodType<AccountsUpdateTrustedContactResponse$Outbound, z.ZodTypeDef, AccountsUpdateTrustedContactResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateTrustedContactResponse$ {
    /** @deprecated use `AccountsUpdateTrustedContactResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateTrustedContactResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateTrustedContactResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateTrustedContactResponse$Outbound, z.ZodTypeDef, AccountsUpdateTrustedContactResponse>;
    /** @deprecated use `AccountsUpdateTrustedContactResponse$Outbound` instead. */
    type Outbound = AccountsUpdateTrustedContactResponse$Outbound;
}
export declare function accountsUpdateTrustedContactResponseToJSON(accountsUpdateTrustedContactResponse: AccountsUpdateTrustedContactResponse): string;
export declare function accountsUpdateTrustedContactResponseFromJSON(jsonString: string): SafeParseResult<AccountsUpdateTrustedContactResponse, SDKValidationError>;
//# sourceMappingURL=accountsupdatetrustedcontact.d.ts.map