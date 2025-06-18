import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsUpdateLegalEntityRequest = {
    /**
     * The legalEntity id.
     */
    legalEntityId: string;
    /**
     * The list of fields to update. Updatable Fields `for_the_benefit_of` `tax_profile.withholding_state` `formation_date` `broker_dealer` `legal_address.address_lines` `legal_address.locality` `legal_address.administrative_area` `legal_address.region_code` `legal_address.postal_code` `exempt_verifying_beneficial_owners` `exempt_customer_reason` `foreign_financial_institution` `accredited_investor` `adviser` `regulated_investment_company` `lei_code` `entity_name` `tax_id` `tax_id_type` `institutional_customer` `operating_regions` `doing_business_as`
     */
    updateMask?: string | undefined;
    legalEntityUpdate: components.LegalEntityUpdate;
};
export type AccountsUpdateLegalEntityResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    legalEntity?: components.LegalEntity | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsUpdateLegalEntityRequest$inboundSchema: z.ZodType<AccountsUpdateLegalEntityRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateLegalEntityRequest$Outbound = {
    legalEntity_id: string;
    update_mask?: string | undefined;
    LegalEntityUpdate: components.LegalEntityUpdate$Outbound;
};
/** @internal */
export declare const AccountsUpdateLegalEntityRequest$outboundSchema: z.ZodType<AccountsUpdateLegalEntityRequest$Outbound, z.ZodTypeDef, AccountsUpdateLegalEntityRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateLegalEntityRequest$ {
    /** @deprecated use `AccountsUpdateLegalEntityRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateLegalEntityRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateLegalEntityRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateLegalEntityRequest$Outbound, z.ZodTypeDef, AccountsUpdateLegalEntityRequest>;
    /** @deprecated use `AccountsUpdateLegalEntityRequest$Outbound` instead. */
    type Outbound = AccountsUpdateLegalEntityRequest$Outbound;
}
/** @internal */
export declare const AccountsUpdateLegalEntityResponse$inboundSchema: z.ZodType<AccountsUpdateLegalEntityResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateLegalEntityResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LegalEntity?: components.LegalEntity$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsUpdateLegalEntityResponse$outboundSchema: z.ZodType<AccountsUpdateLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsUpdateLegalEntityResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateLegalEntityResponse$ {
    /** @deprecated use `AccountsUpdateLegalEntityResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateLegalEntityResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateLegalEntityResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateLegalEntityResponse$Outbound, z.ZodTypeDef, AccountsUpdateLegalEntityResponse>;
    /** @deprecated use `AccountsUpdateLegalEntityResponse$Outbound` instead. */
    type Outbound = AccountsUpdateLegalEntityResponse$Outbound;
}
//# sourceMappingURL=accountsupdatelegalentity.d.ts.map