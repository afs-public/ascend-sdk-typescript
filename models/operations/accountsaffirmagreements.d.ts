import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsAffirmAgreementsRequest = {
    /**
     * The account id.
     */
    accountId: string;
    affirmAgreementsRequestCreate: components.AffirmAgreementsRequestCreate;
};
export type AccountsAffirmAgreementsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    affirmAgreementsResponse?: components.AffirmAgreementsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsAffirmAgreementsRequest$inboundSchema: z.ZodType<AccountsAffirmAgreementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAffirmAgreementsRequest$Outbound = {
    account_id: string;
    AffirmAgreementsRequestCreate: components.AffirmAgreementsRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsAffirmAgreementsRequest$outboundSchema: z.ZodType<AccountsAffirmAgreementsRequest$Outbound, z.ZodTypeDef, AccountsAffirmAgreementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAffirmAgreementsRequest$ {
    /** @deprecated use `AccountsAffirmAgreementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAffirmAgreementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAffirmAgreementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAffirmAgreementsRequest$Outbound, z.ZodTypeDef, AccountsAffirmAgreementsRequest>;
    /** @deprecated use `AccountsAffirmAgreementsRequest$Outbound` instead. */
    type Outbound = AccountsAffirmAgreementsRequest$Outbound;
}
export declare function accountsAffirmAgreementsRequestToJSON(accountsAffirmAgreementsRequest: AccountsAffirmAgreementsRequest): string;
export declare function accountsAffirmAgreementsRequestFromJSON(jsonString: string): SafeParseResult<AccountsAffirmAgreementsRequest, SDKValidationError>;
/** @internal */
export declare const AccountsAffirmAgreementsResponse$inboundSchema: z.ZodType<AccountsAffirmAgreementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsAffirmAgreementsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AffirmAgreementsResponse?: components.AffirmAgreementsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsAffirmAgreementsResponse$outboundSchema: z.ZodType<AccountsAffirmAgreementsResponse$Outbound, z.ZodTypeDef, AccountsAffirmAgreementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsAffirmAgreementsResponse$ {
    /** @deprecated use `AccountsAffirmAgreementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsAffirmAgreementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsAffirmAgreementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsAffirmAgreementsResponse$Outbound, z.ZodTypeDef, AccountsAffirmAgreementsResponse>;
    /** @deprecated use `AccountsAffirmAgreementsResponse$Outbound` instead. */
    type Outbound = AccountsAffirmAgreementsResponse$Outbound;
}
export declare function accountsAffirmAgreementsResponseToJSON(accountsAffirmAgreementsResponse: AccountsAffirmAgreementsResponse): string;
export declare function accountsAffirmAgreementsResponseFromJSON(jsonString: string): SafeParseResult<AccountsAffirmAgreementsResponse, SDKValidationError>;
//# sourceMappingURL=accountsaffirmagreements.d.ts.map