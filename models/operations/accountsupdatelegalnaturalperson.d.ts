import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountsUpdateLegalNaturalPersonRequest = {
    /**
     * The legalNaturalPerson id.
     */
    legalNaturalPersonId: string;
    /**
     * The list of fields to update. Updatable Fields  `marital_status`  `citizenship_countries`  `personal_address.address_lines`  `personal_address.locality`  `personal_address.administrative_area`  `personal_address.region_code`  `personal_address.postal_code`  `control_person_company_symbols`  `finra_associated_entity`  `politically_exposed_organization`  `politically_exposed_immediate_family_names`  `is_correspondent_employee`  `employment.employer`  `employment.occupation`  `employment.start_year`  `employment.employment_status`  `employment.employer_address.address_lines`  `employment.employer_address.locality`  `employment.employer_address.administrative_area`  `employment.employer_address.region_code`  `employment.employer_address.postal_code`  `given_name`  `middle_names`  `family_name`  `tax_id`  `birth_date.year`  `birth_date.month`  `birth_date.day`  `death_date.day`  `death_date.month`  `death_date.year`  `identity_verification_result.raw_vendor_data_document_id`  `identity_verification_result.identity_verification_document_ids`  `accredited_investor`  `adviser`  `institutional_customer`  `foreign_identification.ftin`  `foreign_identification.identification_number`  `foreign_identification.issuing_region_code`  `foreign_identification.type`  `foreign_identification.issue_date.year`  `foreign_identification.issue_date.month`  `foreign_identification.issue_date.day`  `foreign_identification.expiration_date.year`  `foreign_identification.expiration_date.month`  `foreign_identification.expiration_date.day`  `tax_profile.withholding_state`  `tax_profile.legal_tax_region_code`  `natural_person_fdd.customer_referral_source.name`  `natural_person_fdd.customer_referral_source.relationship_to_applicant`  `natural_person_fdd.customer_referral_source.relationship_years_with_applicant`  `natural_person_fdd.customer_referral_source.relationship_years_with_broker`  `natural_person_fdd.customer_non_referral_source`  `natural_person_fdd.employment_and_employer_description`  `natural_person_fdd.negative_news.owner_has_negative_news_against_related_parties`  `natural_person_fdd.negative_news.negative_news_against_related_parties_description`  `natural_person_fdd.other_sources_of_wealth.applicant_has_other_sources_of_wealth`  `natural_person_fdd.other_sources_of_wealth.other_sources_of_wealth`  `natural_person_fdd.other_sources_of_wealth.other_source_of_wealth_verification`  `doing_business_as`
     */
    updateMask?: string | undefined;
    legalNaturalPersonUpdate: components.LegalNaturalPersonUpdate;
};
export type AccountsUpdateLegalNaturalPersonResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    legalNaturalPerson?: components.LegalNaturalPerson | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsUpdateLegalNaturalPersonRequest$inboundSchema: z.ZodType<AccountsUpdateLegalNaturalPersonRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateLegalNaturalPersonRequest$Outbound = {
    legalNaturalPerson_id: string;
    update_mask?: string | undefined;
    LegalNaturalPersonUpdate: components.LegalNaturalPersonUpdate$Outbound;
};
/** @internal */
export declare const AccountsUpdateLegalNaturalPersonRequest$outboundSchema: z.ZodType<AccountsUpdateLegalNaturalPersonRequest$Outbound, z.ZodTypeDef, AccountsUpdateLegalNaturalPersonRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateLegalNaturalPersonRequest$ {
    /** @deprecated use `AccountsUpdateLegalNaturalPersonRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateLegalNaturalPersonRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateLegalNaturalPersonRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateLegalNaturalPersonRequest$Outbound, z.ZodTypeDef, AccountsUpdateLegalNaturalPersonRequest>;
    /** @deprecated use `AccountsUpdateLegalNaturalPersonRequest$Outbound` instead. */
    type Outbound = AccountsUpdateLegalNaturalPersonRequest$Outbound;
}
export declare function accountsUpdateLegalNaturalPersonRequestToJSON(accountsUpdateLegalNaturalPersonRequest: AccountsUpdateLegalNaturalPersonRequest): string;
export declare function accountsUpdateLegalNaturalPersonRequestFromJSON(jsonString: string): SafeParseResult<AccountsUpdateLegalNaturalPersonRequest, SDKValidationError>;
/** @internal */
export declare const AccountsUpdateLegalNaturalPersonResponse$inboundSchema: z.ZodType<AccountsUpdateLegalNaturalPersonResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateLegalNaturalPersonResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LegalNaturalPerson?: components.LegalNaturalPerson$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsUpdateLegalNaturalPersonResponse$outboundSchema: z.ZodType<AccountsUpdateLegalNaturalPersonResponse$Outbound, z.ZodTypeDef, AccountsUpdateLegalNaturalPersonResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateLegalNaturalPersonResponse$ {
    /** @deprecated use `AccountsUpdateLegalNaturalPersonResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateLegalNaturalPersonResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateLegalNaturalPersonResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateLegalNaturalPersonResponse$Outbound, z.ZodTypeDef, AccountsUpdateLegalNaturalPersonResponse>;
    /** @deprecated use `AccountsUpdateLegalNaturalPersonResponse$Outbound` instead. */
    type Outbound = AccountsUpdateLegalNaturalPersonResponse$Outbound;
}
export declare function accountsUpdateLegalNaturalPersonResponseToJSON(accountsUpdateLegalNaturalPersonResponse: AccountsUpdateLegalNaturalPersonResponse): string;
export declare function accountsUpdateLegalNaturalPersonResponseFromJSON(jsonString: string): SafeParseResult<AccountsUpdateLegalNaturalPersonResponse, SDKValidationError>;
//# sourceMappingURL=accountsupdatelegalnaturalperson.d.ts.map