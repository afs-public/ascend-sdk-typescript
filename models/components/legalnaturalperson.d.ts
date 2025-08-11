import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The legal day, month, and year of birth for a natural person.
 */
export type BirthDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * The day, month, and year of death of a legal natural person
 */
export type DeathDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * The data structure containing attributes describing the location of an investor's employer. If input, the required fields within the `employer_address` object include:
 *
 * @remarks
 *  - `administrative_area`
 *  - `region_code` - 2 character CLDR Code
 *  - `postal_code`
 *  - `locality`
 *  - `address_lines` - max 5 lines
 */
export type EmployerAddress = {
    /**
     * Unstructured address lines describing the lower levels of an address.
     *
     * @remarks
     *
     *  Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language.
     *
     *  The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved.
     *
     *  Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: Array<string> | undefined;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.
     */
    administrativeArea?: string | undefined;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations.
     *
     * @remarks
     *
     *  If this value is not known, it should be omitted (rather than specifying a possibly incorrect default).
     *
     *  Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | undefined;
    /**
     * Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.
     */
    locality?: string | undefined;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | undefined;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
     */
    postalCode?: string | undefined;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: Array<string> | undefined;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | undefined;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision.
     *
     * @remarks
     *
     *  All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | undefined;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
     */
    sortingCode?: string | undefined;
    /**
     * Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.
     */
    sublocality?: string | undefined;
};
/**
 * Classifies in what capacity (or if) the underlying natural person holds a job
 */
export declare enum LegalNaturalPersonEmploymentStatus {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Employed = "EMPLOYED",
    SelfEmployed = "SELF_EMPLOYED",
    Unemployed = "UNEMPLOYED",
    Retired = "RETIRED",
    Student = "STUDENT"
}
/**
 * Classifies in what capacity (or if) the underlying natural person holds a job
 */
export type LegalNaturalPersonEmploymentStatusOpen = OpenEnum<typeof LegalNaturalPersonEmploymentStatus>;
/**
 * Object containing information pertaining to a investor's current employer including the name, address, and duration of employment.
 */
export type Employment = {
    /**
     * The business name of an investor's employer.
     */
    employer?: string | undefined;
    /**
     * The data structure containing attributes describing the location of an investor's employer. If input, the required fields within the `employer_address` object include:
     *
     * @remarks
     *  - `administrative_area`
     *  - `region_code` - 2 character CLDR Code
     *  - `postal_code`
     *  - `locality`
     *  - `address_lines` - max 5 lines
     */
    employerAddress?: EmployerAddress | null | undefined;
    /**
     * System-generated GUID representing the employment record of a natural person
     */
    employmentId?: string | undefined;
    /**
     * Classifies in what capacity (or if) the underlying natural person holds a job
     */
    employmentStatus?: LegalNaturalPersonEmploymentStatusOpen | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * Required if `employment_status` is one of:
     *   - `EMPLOYED`
     *   - `SELF_EMPLOYED`
     */
    occupation?: string | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * Required if `employment_status` is one of:
     *   - `EMPLOYED`
     *   - `SELF_EMPLOYED`
     *
     * Otherwise, must be empty.
     */
    startYear?: number | undefined;
};
/**
 * Identification expiration date
 */
export type ExpirationDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Identification issue date
 */
export type IssueDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Identification type
 */
export declare enum LegalNaturalPersonType {
    IdentificationTypeUnspecified = "IDENTIFICATION_TYPE_UNSPECIFIED",
    Passport = "PASSPORT",
    NationalId = "NATIONAL_ID",
    DriversLicense = "DRIVERS_LICENSE"
}
/**
 * Identification type
 */
export type LegalNaturalPersonTypeOpen = OpenEnum<typeof LegalNaturalPersonType>;
/**
 * **Field Dependencies:**
 *
 * @remarks
 *
 * Required if `irs_form_type` is `W_8BEN`.
 *
 * Otherwise, must be empty.
 */
export type ForeignIdentification = {
    /**
     * Identification expiration date
     */
    expirationDate?: ExpirationDate | null | undefined;
    /**
     * Denotes if the identification is a tax id or other
     */
    ftin?: boolean | undefined;
    /**
     * Identification number
     */
    identificationNumber?: string | undefined;
    /**
     * Identification issue date
     */
    issueDate?: IssueDate | null | undefined;
    /**
     * Region of issuance must be provided as a two-character CLDR country code
     */
    issuingRegionCode?: string | undefined;
    /**
     * Identification type
     */
    type?: LegalNaturalPersonTypeOpen | undefined;
};
/**
 * The datetime external identity verification results were run on a natural person
 */
export type ExecutionDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Third-party data result used to verify the identity of an introduced investor. If the client identity_verification_model is PROVIDED_BY_CLIENT, this field is required
 */
export type LegalNaturalPersonIdentityVerificationResult = {
    /**
     * Attestation that external result and review have verified the supplied investor's address has been verified in conjunction with other PII
     */
    addressVerified?: boolean | undefined;
    /**
     * Attestation that external result and review have verified the supplied investor's date of birth has been verified in conjunction with other PII
     */
    birthDateVerified?: boolean | undefined;
    /**
     * The datetime external identity verification results were run on a natural person
     */
    executionDate?: ExecutionDate | null | undefined;
    /**
     * Client-generated identifier associated with the KYC results for the appropriate case
     */
    externalCaseId?: string | undefined;
    /**
     * System generated document IDs returned after uploading identity documents to the Documents API
     */
    identityVerificationDocumentIds?: Array<string> | undefined;
    /**
     * System-generated GUID used to uniquely identify the verification_result
     */
    identityVerificationResultId?: string | undefined;
    /**
     * Attestation that external result and review have verified the supplied investor's name has been verified in conjunction with other PII
     */
    nameVerified?: boolean | undefined;
    /**
     * A system-generated document ID assigned when raw vendor results are uploaded to the Documents API; This field is optional for person record creation, but required for account creation if the Correspondent provides IDV results
     */
    rawVendorDataDocumentId?: string | undefined;
    /**
     * Attestation that external result and review have verified the supplied investor's Tax ID has been verified in conjunction with other PII
     */
    taxIdVerified?: boolean | undefined;
    /**
     * The name(s) of the vendor(s) used to externally verify and screen a natural person; relates to the identity_verification_result
     */
    vendor?: string | undefined;
};
/**
 * The date on which the trader meets or exceeds the large trader reporting threshold, which is defined by the U.S. Securities and Exchange Commission (SEC) as trades of 2 million shares or $20 million in a single day or 20 million shares or $200 million during a calendar month
 */
export type LegalNaturalPersonEffectiveDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Indicates if the person is recognized as a "Large Trader" by the SEC.
 */
export type LegalNaturalPersonLargeTrader = {
    /**
     * The date on which the trader meets or exceeds the large trader reporting threshold, which is defined by the U.S. Securities and Exchange Commission (SEC) as trades of 2 million shares or $20 million in a single day or 20 million shares or $200 million during a calendar month
     */
    effectiveDate?: LegalNaturalPersonEffectiveDate | null | undefined;
    /**
     * SEC-issued ID signifying the person/entity as a large trader; Required for CAIS regulatory reporting.
     */
    largeTraderId?: string | undefined;
};
/**
 * The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.
 */
export declare enum LegalNaturalPersonMaritalStatus {
    MaritalStatusUnspecified = "MARITAL_STATUS_UNSPECIFIED",
    Single = "SINGLE",
    Married = "MARRIED",
    Divorced = "DIVORCED",
    Widowed = "WIDOWED"
}
/**
 * The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.
 */
export type LegalNaturalPersonMaritalStatusOpen = OpenEnum<typeof LegalNaturalPersonMaritalStatus>;
/**
 * The suffix of a natural person; A suffix in a name is any part of the name that comes after the last name
 */
export declare enum LegalNaturalPersonNameSuffix {
    NameSuffixUnspecified = "NAME_SUFFIX_UNSPECIFIED",
    Sr = "SR",
    Jr = "JR",
    Iii = "III",
    Iv = "IV",
    V = "V"
}
/**
 * The suffix of a natural person; A suffix in a name is any part of the name that comes after the last name
 */
export type LegalNaturalPersonNameSuffixOpen = OpenEnum<typeof LegalNaturalPersonNameSuffix>;
/**
 * Customer Referral Source
 */
export type CustomerReferralSource = {
    /**
     * The name of the referrer
     */
    name?: string | undefined;
    /**
     * The relationship of the referrer to the applicant
     */
    relationshipToApplicant?: string | undefined;
    /**
     * The years the referrer has known the applicant If the referrer has known the applicant for less than a year, they must specify 1
     */
    relationshipYearsWithApplicant?: number | undefined;
    /**
     * The years the referrer has known the broker If the referrer has known the broker for less than a year, they must specify 1
     */
    relationshipYearsWithBroker?: number | undefined;
};
/**
 * Information about any negative news against the client, or any immediate family members, close associates, or related entities
 */
export type NegativeNews = {
    /**
     * Indicates whether there is negative news against related parties
     */
    negativeNewsAgainstRelatedParties?: boolean | undefined;
    /**
     * Description of the negative news against related parties
     */
    negativeNewsAgainstRelatedPartiesDescription?: string | undefined;
};
/**
 * The applicant's other source of wealth
 */
export type OtherSourcesOfWealth = {
    /**
     * Indicates whether the applicant has other sources of wealth.
     */
    applicantHasOtherSourcesOfWealth?: boolean | undefined;
    /**
     * The applicant's other source of wealth description. If the applicant has no other sources of wealth, they must specify "N/A."
     */
    otherSourcesOfWealth?: string | undefined;
    /**
     * The applicant's other source of wealth verification. If the applicant has no other sources of wealth, they must specify "N/A."
     */
    otherSourcesOfWealthVerification?: string | undefined;
};
/**
 * Foreign Due Diligence (FDD) information for Legal Natural Person
 */
export type NaturalPersonFdd = {
    /**
     * Customer Non-referral Source
     */
    customerNonReferralSource?: string | undefined;
    /**
     * Customer Referral Source
     */
    customerReferralSource?: CustomerReferralSource | null | undefined;
    /**
     * The description of the applicant's source of wealth
     */
    employmentAndEmployerDescription?: string | undefined;
    /**
     * Information about any negative news against the client, or any immediate family members, close associates, or related entities
     */
    negativeNews?: NegativeNews | null | undefined;
    /**
     * The applicant's other source of wealth
     */
    otherSourcesOfWealth?: OtherSourcesOfWealth | null | undefined;
};
export declare enum LegalNaturalPersonResidencyStatus {
    ResidencyStatusUnspecified = "RESIDENCY_STATUS_UNSPECIFIED",
    UsPermanentResident = "US_PERMANENT_RESIDENT",
    UsTemporaryResident = "US_TEMPORARY_RESIDENT",
    UsNonResident = "US_NON_RESIDENT"
}
export type LegalNaturalPersonResidencyStatusOpen = OpenEnum<typeof LegalNaturalPersonResidencyStatus>;
/**
 * Facilitates non-citizen lawful US residents to open domestic accounts
 */
export type NonCitizenResidency = {
    residencyStatus?: LegalNaturalPersonResidencyStatusOpen | undefined;
};
/**
 * The legal street number and street name for an account Party. Required fields within the `personal_address` object include:
 *
 * @remarks
 *  - `administrative_area`
 *  - `region_code` - 2 character CLDR Code
 *  - `postal_code`
 *  - `locality`
 *  - `address_lines` - max 5 lines
 */
export type PersonalAddress = {
    /**
     * Unstructured address lines describing the lower levels of an address.
     *
     * @remarks
     *
     *  Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language.
     *
     *  The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved.
     *
     *  Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: Array<string> | undefined;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.
     */
    administrativeArea?: string | undefined;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations.
     *
     * @remarks
     *
     *  If this value is not known, it should be omitted (rather than specifying a possibly incorrect default).
     *
     *  Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | undefined;
    /**
     * Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.
     */
    locality?: string | undefined;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | undefined;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
     */
    postalCode?: string | undefined;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: Array<string> | undefined;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | undefined;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision.
     *
     * @remarks
     *
     *  All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | undefined;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
     */
    sortingCode?: string | undefined;
    /**
     * Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.
     */
    sublocality?: string | undefined;
};
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
 */
export declare enum LegalNaturalPersonTaxIdType {
    TaxIdTypeUnspecified = "TAX_ID_TYPE_UNSPECIFIED",
    TaxIdTypeSsn = "TAX_ID_TYPE_SSN",
    TaxIdTypeItin = "TAX_ID_TYPE_ITIN",
    TaxIdTypeEin = "TAX_ID_TYPE_EIN"
}
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
 */
export type LegalNaturalPersonTaxIdTypeOpen = OpenEnum<typeof LegalNaturalPersonTaxIdType>;
/**
 * C Notice date.
 */
export type CNoticeDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Federal tax classification.
 */
export declare enum LegalNaturalPersonFederalTaxClassification {
    FederalTaxClassificationUnspecified = "FEDERAL_TAX_CLASSIFICATION_UNSPECIFIED",
    IndivSolepropOrSinglememberllc = "INDIV_SOLEPROP_OR_SINGLEMEMBERLLC",
    Partnership = "PARTNERSHIP",
    CCorporation = "C_CORPORATION",
    SCorporation = "S_CORPORATION",
    TrustEstate = "TRUST_ESTATE",
    LlcTaxedAsCCorp = "LLC_TAXED_AS_C_CORP",
    LlcTaxedAsSCorp = "LLC_TAXED_AS_S_CORP",
    LlcTaxedAsPartnership = "LLC_TAXED_AS_PARTNERSHIP",
    Other = "OTHER"
}
/**
 * Federal tax classification.
 */
export type LegalNaturalPersonFederalTaxClassificationOpen = OpenEnum<typeof LegalNaturalPersonFederalTaxClassification>;
/**
 * Initial B Notice date.
 */
export type FirstBNoticeDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * IRS form type.
 */
export declare enum LegalNaturalPersonIrsFormType {
    IrsFormTypeUnspecified = "IRS_FORM_TYPE_UNSPECIFIED",
    W9 = "W_9",
    W8Ben = "W_8BEN"
}
/**
 * IRS form type.
 */
export type LegalNaturalPersonIrsFormTypeOpen = OpenEnum<typeof LegalNaturalPersonIrsFormType>;
/**
 * Tax reporting eligibility.
 */
export declare enum ReportingEligibility {
    TaxReportingEligibilityUnspecified = "TAX_REPORTING_ELIGIBILITY_UNSPECIFIED",
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
}
/**
 * Tax reporting eligibility.
 */
export type ReportingEligibilityOpen = OpenEnum<typeof ReportingEligibility>;
/**
 * Tax Certification date.
 */
export type TaxCertificationDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Taxpayer certification status.
 */
export declare enum TaxpayerCertificationState {
    TaxpayerCertificationStateUnspecified = "TAXPAYER_CERTIFICATION_STATE_UNSPECIFIED",
    Certified = "CERTIFIED",
    Uncertified = "UNCERTIFIED"
}
/**
 * Taxpayer certification status.
 */
export type TaxpayerCertificationStateOpen = OpenEnum<typeof TaxpayerCertificationState>;
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export declare enum LegalNaturalPersonUsTinStatus {
    UsTinStatusUnspecified = "US_TIN_STATUS_UNSPECIFIED",
    Passing = "PASSING",
    Failing = "FAILING"
}
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export type LegalNaturalPersonUsTinStatusOpen = OpenEnum<typeof LegalNaturalPersonUsTinStatus>;
/**
 * B/C Notice status.
 */
export declare enum LegalNaturalPersonWithholdingState {
    WithholdingStateUnspecified = "WITHHOLDING_STATE_UNSPECIFIED",
    FirstBNoticeReceived = "FIRST_B_NOTICE_RECEIVED",
    SecondBNoticeReceived = "SECOND_B_NOTICE_RECEIVED",
    CNoticeReceived = "C_NOTICE_RECEIVED",
    CNoticeIndicatedByCustomer = "C_NOTICE_INDICATED_BY_CUSTOMER"
}
/**
 * B/C Notice status.
 */
export type LegalNaturalPersonWithholdingStateOpen = OpenEnum<typeof LegalNaturalPersonWithholdingState>;
/**
 * Tax-related attributes at the for the account; A tax profile with taxpayer attributes is located on the legal_natural_person or legal_entity objects elsewhere on the account record.
 */
export type TaxProfile = {
    /**
     * C Notice date.
     */
    cNoticeDate?: CNoticeDate | null | undefined;
    /**
     * Federal tax classification.
     */
    federalTaxClassification?: LegalNaturalPersonFederalTaxClassificationOpen | undefined;
    /**
     * Initial B Notice date.
     */
    firstBNoticeDate?: FirstBNoticeDate | null | undefined;
    /**
     * IRS form type.
     */
    irsFormType?: LegalNaturalPersonIrsFormTypeOpen | undefined;
    /**
     * Legal tax region must be "US" if provided W-9, otherwise must be a non-US country.
     */
    legalTaxRegionCode?: string | undefined;
    /**
     * Tax reporting eligibility.
     */
    reportingEligibility?: ReportingEligibilityOpen | undefined;
    /**
     * Tax Certification date.
     */
    taxCertificationDate?: TaxCertificationDate | null | undefined;
    /**
     * Taxpayer certification status.
     */
    taxpayerCertificationState?: TaxpayerCertificationStateOpen | undefined;
    /**
     * United States Individual Taxpayer Identification Number (ITIN) status.
     */
    usTinStatus?: LegalNaturalPersonUsTinStatusOpen | undefined;
    /**
     * B/C Notice status.
     */
    withholdingState?: LegalNaturalPersonWithholdingStateOpen | undefined;
};
/**
 * A legal natural person. This represents the full set of data for an individual. A Customer Identification Program (CIP) may be run on legal natural persons.
 */
export type LegalNaturalPerson = {
    /**
     * Indicates whether the person is an accredited investor
     */
    accreditedInvestor?: boolean | undefined;
    /**
     * Indicates whether the person is an adviser
     */
    adviser?: boolean | undefined;
    /**
     * The legal day, month, and year of birth for a natural person.
     */
    birthDate?: BirthDate | null | undefined;
    /**
     * This is used for tax (treaty) and country block list considerations Maximum list of two 2-char CLDR Code citizenship countries, e.g. US, CA
     */
    citizenshipCountries?: Array<string> | undefined;
    /**
     * A list of ticker symbols in which the underlying person is a control person; control persons are defined as having significant influence over a company’s management and operations, typically through ownership of a large percentage of the company’s voting stock or through positions on the company’s board of directors or executive team
     */
    controlPersonCompanySymbols?: string | undefined;
    /**
     * Indicates the related owner record is an employee of the clearing broker's correspondent customer.
     */
    correspondentEmployee?: boolean | undefined;
    /**
     * A unique identifier referencing a Correspondent; A Client may have several operating Correspondents within its purview.
     */
    correspondentId?: string | undefined;
    /**
     * A flag to indicate whether this person is an employee of the correspondent.
     */
    custodianEmployee?: boolean | undefined;
    /**
     * Customer identification id returned by the customer identification service which represents a single instance of an identity verification outcome for the specified customer. This verification result will be used as part of the full investigation.
     */
    customerIdentificationId?: string | undefined;
    /**
     * The day, month, and year of death of a legal natural person
     */
    deathDate?: DeathDate | null | undefined;
    /**
     * DBA (Doing Business As) names. Can list up to 5 associated with the Legal Natural Person
     */
    doingBusinessAs?: Array<string> | undefined;
    /**
     * Object containing information pertaining to a investor's current employer including the name, address, and duration of employment.
     */
    employment?: Employment | null | undefined;
    /**
     * Family name of a natural person.
     */
    familyName?: string | undefined;
    /**
     * The name of the FINRA-associated entity the underlying natural person is affiliated with.
     */
    finraAssociatedEntity?: string | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * Required if `irs_form_type` is `W_8BEN`.
     *
     * Otherwise, must be empty.
     */
    foreignIdentification?: ForeignIdentification | null | undefined;
    /**
     * The given name of a natural person; Conventionally known as 'first name' in most English-speaking countries.
     */
    givenName?: string | undefined;
    /**
     * Globally Unique identifier for a legal natural person
     */
    globalPersonId?: string | undefined;
    /**
     * Third-party data result used to verify the identity of an introduced investor. If the client identity_verification_model is PROVIDED_BY_CLIENT, this field is required
     */
    identityVerificationResult?: LegalNaturalPersonIdentityVerificationResult | null | undefined;
    /**
     * Indicates whether the person is an institutional customer
     */
    institutionalCustomer?: boolean | undefined;
    /**
     * Investigation id relating a comprehensive investigation for a customer, encompassing the aggregation of identity verification results and watchlist screenings, conducted to support the Customer Identification Program (CIP) and Customer Due Diligence (CDD)
     */
    investigationId?: string | undefined;
    /**
     * Indicates if the person is recognized as a "Large Trader" by the SEC.
     */
    largeTrader?: LegalNaturalPersonLargeTrader | null | undefined;
    /**
     * A system-generated unique identifier referencing a single natural person; Used to access the record after creation.
     */
    legalNaturalPersonId?: string | undefined;
    /**
     * The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.
     */
    maritalStatus?: LegalNaturalPersonMaritalStatusOpen | undefined;
    /**
     * Non-primary names representing a natural person; Name attributed to a person other than "Given" and "Family" names.
     */
    middleNames?: string | undefined;
    /**
     * The name field Format: legalNaturalPersons/{legalNaturalPerson}
     */
    name?: string | undefined;
    /**
     * The suffix of a natural person; A suffix in a name is any part of the name that comes after the last name
     */
    nameSuffix?: LegalNaturalPersonNameSuffixOpen | undefined;
    /**
     * Foreign Due Diligence (FDD) information for Legal Natural Person
     */
    naturalPersonFdd?: NaturalPersonFdd | null | undefined;
    /**
     * Facilitates non-citizen lawful US residents to open domestic accounts
     */
    nonCitizenResidency?: NonCitizenResidency | null | undefined;
    /**
     * The legal street number and street name for an account Party. Required fields within the `personal_address` object include:
     *
     * @remarks
     *  - `administrative_area`
     *  - `region_code` - 2 character CLDR Code
     *  - `postal_code`
     *  - `locality`
     *  - `address_lines` - max 5 lines
     */
    personalAddress?: PersonalAddress | null | undefined;
    /**
     * A Party's self-disclosed list of names representing family members who are politically exposed.
     */
    politicallyExposedImmediateFamilyNames?: Array<string> | undefined;
    /**
     * A Party's self-disclosed list of named politically exposed organizations they are personally associated with.
     */
    politicallyExposedOrganization?: string | undefined;
    /**
     * The full U.S. tax ID for a related person; Must be provided with `ITIN` or `SSN` tax ID type
     */
    taxId?: string | undefined;
    /**
     * The last four characters of the related person's tax identifier; Masked/truncated to "last four" in most usage contexts to preserve data privacy.
     */
    taxIdLastFour?: string | undefined;
    /**
     * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
     */
    taxIdType?: LegalNaturalPersonTaxIdTypeOpen | undefined;
    /**
     * Tax-related attributes at the for the account; A tax profile with taxpayer attributes is located on the legal_natural_person or legal_entity objects elsewhere on the account record.
     */
    taxProfile?: TaxProfile | null | undefined;
};
/** @internal */
export declare const BirthDate$inboundSchema: z.ZodType<BirthDate, z.ZodTypeDef, unknown>;
/** @internal */
export type BirthDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const BirthDate$outboundSchema: z.ZodType<BirthDate$Outbound, z.ZodTypeDef, BirthDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BirthDate$ {
    /** @deprecated use `BirthDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BirthDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BirthDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BirthDate$Outbound, z.ZodTypeDef, BirthDate>;
    /** @deprecated use `BirthDate$Outbound` instead. */
    type Outbound = BirthDate$Outbound;
}
export declare function birthDateToJSON(birthDate: BirthDate): string;
export declare function birthDateFromJSON(jsonString: string): SafeParseResult<BirthDate, SDKValidationError>;
/** @internal */
export declare const DeathDate$inboundSchema: z.ZodType<DeathDate, z.ZodTypeDef, unknown>;
/** @internal */
export type DeathDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const DeathDate$outboundSchema: z.ZodType<DeathDate$Outbound, z.ZodTypeDef, DeathDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeathDate$ {
    /** @deprecated use `DeathDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeathDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeathDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeathDate$Outbound, z.ZodTypeDef, DeathDate>;
    /** @deprecated use `DeathDate$Outbound` instead. */
    type Outbound = DeathDate$Outbound;
}
export declare function deathDateToJSON(deathDate: DeathDate): string;
export declare function deathDateFromJSON(jsonString: string): SafeParseResult<DeathDate, SDKValidationError>;
/** @internal */
export declare const EmployerAddress$inboundSchema: z.ZodType<EmployerAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type EmployerAddress$Outbound = {
    address_lines?: Array<string> | undefined;
    administrative_area?: string | undefined;
    language_code?: string | undefined;
    locality?: string | undefined;
    organization?: string | undefined;
    postal_code?: string | undefined;
    recipients?: Array<string> | undefined;
    region_code?: string | undefined;
    revision?: number | undefined;
    sorting_code?: string | undefined;
    sublocality?: string | undefined;
};
/** @internal */
export declare const EmployerAddress$outboundSchema: z.ZodType<EmployerAddress$Outbound, z.ZodTypeDef, EmployerAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmployerAddress$ {
    /** @deprecated use `EmployerAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmployerAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmployerAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmployerAddress$Outbound, z.ZodTypeDef, EmployerAddress>;
    /** @deprecated use `EmployerAddress$Outbound` instead. */
    type Outbound = EmployerAddress$Outbound;
}
export declare function employerAddressToJSON(employerAddress: EmployerAddress): string;
export declare function employerAddressFromJSON(jsonString: string): SafeParseResult<EmployerAddress, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonEmploymentStatus$inboundSchema: z.ZodType<LegalNaturalPersonEmploymentStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonEmploymentStatus$outboundSchema: z.ZodType<LegalNaturalPersonEmploymentStatusOpen, z.ZodTypeDef, LegalNaturalPersonEmploymentStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonEmploymentStatus$ {
    /** @deprecated use `LegalNaturalPersonEmploymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonEmploymentStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonEmploymentStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonEmploymentStatusOpen, z.ZodTypeDef, LegalNaturalPersonEmploymentStatusOpen>;
}
/** @internal */
export declare const Employment$inboundSchema: z.ZodType<Employment, z.ZodTypeDef, unknown>;
/** @internal */
export type Employment$Outbound = {
    employer?: string | undefined;
    employer_address?: EmployerAddress$Outbound | null | undefined;
    employment_id?: string | undefined;
    employment_status?: string | undefined;
    occupation?: string | undefined;
    start_year?: number | undefined;
};
/** @internal */
export declare const Employment$outboundSchema: z.ZodType<Employment$Outbound, z.ZodTypeDef, Employment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Employment$ {
    /** @deprecated use `Employment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Employment, z.ZodTypeDef, unknown>;
    /** @deprecated use `Employment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Employment$Outbound, z.ZodTypeDef, Employment>;
    /** @deprecated use `Employment$Outbound` instead. */
    type Outbound = Employment$Outbound;
}
export declare function employmentToJSON(employment: Employment): string;
export declare function employmentFromJSON(jsonString: string): SafeParseResult<Employment, SDKValidationError>;
/** @internal */
export declare const ExpirationDate$inboundSchema: z.ZodType<ExpirationDate, z.ZodTypeDef, unknown>;
/** @internal */
export type ExpirationDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const ExpirationDate$outboundSchema: z.ZodType<ExpirationDate$Outbound, z.ZodTypeDef, ExpirationDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExpirationDate$ {
    /** @deprecated use `ExpirationDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExpirationDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExpirationDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExpirationDate$Outbound, z.ZodTypeDef, ExpirationDate>;
    /** @deprecated use `ExpirationDate$Outbound` instead. */
    type Outbound = ExpirationDate$Outbound;
}
export declare function expirationDateToJSON(expirationDate: ExpirationDate): string;
export declare function expirationDateFromJSON(jsonString: string): SafeParseResult<ExpirationDate, SDKValidationError>;
/** @internal */
export declare const IssueDate$inboundSchema: z.ZodType<IssueDate, z.ZodTypeDef, unknown>;
/** @internal */
export type IssueDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const IssueDate$outboundSchema: z.ZodType<IssueDate$Outbound, z.ZodTypeDef, IssueDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IssueDate$ {
    /** @deprecated use `IssueDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IssueDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IssueDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IssueDate$Outbound, z.ZodTypeDef, IssueDate>;
    /** @deprecated use `IssueDate$Outbound` instead. */
    type Outbound = IssueDate$Outbound;
}
export declare function issueDateToJSON(issueDate: IssueDate): string;
export declare function issueDateFromJSON(jsonString: string): SafeParseResult<IssueDate, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonType$inboundSchema: z.ZodType<LegalNaturalPersonTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonType$outboundSchema: z.ZodType<LegalNaturalPersonTypeOpen, z.ZodTypeDef, LegalNaturalPersonTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonType$ {
    /** @deprecated use `LegalNaturalPersonType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonTypeOpen, z.ZodTypeDef, LegalNaturalPersonTypeOpen>;
}
/** @internal */
export declare const ForeignIdentification$inboundSchema: z.ZodType<ForeignIdentification, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignIdentification$Outbound = {
    expiration_date?: ExpirationDate$Outbound | null | undefined;
    ftin?: boolean | undefined;
    identification_number?: string | undefined;
    issue_date?: IssueDate$Outbound | null | undefined;
    issuing_region_code?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const ForeignIdentification$outboundSchema: z.ZodType<ForeignIdentification$Outbound, z.ZodTypeDef, ForeignIdentification>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignIdentification$ {
    /** @deprecated use `ForeignIdentification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignIdentification, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignIdentification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignIdentification$Outbound, z.ZodTypeDef, ForeignIdentification>;
    /** @deprecated use `ForeignIdentification$Outbound` instead. */
    type Outbound = ForeignIdentification$Outbound;
}
export declare function foreignIdentificationToJSON(foreignIdentification: ForeignIdentification): string;
export declare function foreignIdentificationFromJSON(jsonString: string): SafeParseResult<ForeignIdentification, SDKValidationError>;
/** @internal */
export declare const ExecutionDate$inboundSchema: z.ZodType<ExecutionDate, z.ZodTypeDef, unknown>;
/** @internal */
export type ExecutionDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const ExecutionDate$outboundSchema: z.ZodType<ExecutionDate$Outbound, z.ZodTypeDef, ExecutionDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecutionDate$ {
    /** @deprecated use `ExecutionDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecutionDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecutionDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecutionDate$Outbound, z.ZodTypeDef, ExecutionDate>;
    /** @deprecated use `ExecutionDate$Outbound` instead. */
    type Outbound = ExecutionDate$Outbound;
}
export declare function executionDateToJSON(executionDate: ExecutionDate): string;
export declare function executionDateFromJSON(jsonString: string): SafeParseResult<ExecutionDate, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonIdentityVerificationResult$inboundSchema: z.ZodType<LegalNaturalPersonIdentityVerificationResult, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalNaturalPersonIdentityVerificationResult$Outbound = {
    address_verified?: boolean | undefined;
    birth_date_verified?: boolean | undefined;
    execution_date?: ExecutionDate$Outbound | null | undefined;
    external_case_id?: string | undefined;
    identity_verification_document_ids?: Array<string> | undefined;
    identity_verification_result_id?: string | undefined;
    name_verified?: boolean | undefined;
    raw_vendor_data_document_id?: string | undefined;
    tax_id_verified?: boolean | undefined;
    vendor?: string | undefined;
};
/** @internal */
export declare const LegalNaturalPersonIdentityVerificationResult$outboundSchema: z.ZodType<LegalNaturalPersonIdentityVerificationResult$Outbound, z.ZodTypeDef, LegalNaturalPersonIdentityVerificationResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonIdentityVerificationResult$ {
    /** @deprecated use `LegalNaturalPersonIdentityVerificationResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonIdentityVerificationResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonIdentityVerificationResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonIdentityVerificationResult$Outbound, z.ZodTypeDef, LegalNaturalPersonIdentityVerificationResult>;
    /** @deprecated use `LegalNaturalPersonIdentityVerificationResult$Outbound` instead. */
    type Outbound = LegalNaturalPersonIdentityVerificationResult$Outbound;
}
export declare function legalNaturalPersonIdentityVerificationResultToJSON(legalNaturalPersonIdentityVerificationResult: LegalNaturalPersonIdentityVerificationResult): string;
export declare function legalNaturalPersonIdentityVerificationResultFromJSON(jsonString: string): SafeParseResult<LegalNaturalPersonIdentityVerificationResult, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonEffectiveDate$inboundSchema: z.ZodType<LegalNaturalPersonEffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalNaturalPersonEffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const LegalNaturalPersonEffectiveDate$outboundSchema: z.ZodType<LegalNaturalPersonEffectiveDate$Outbound, z.ZodTypeDef, LegalNaturalPersonEffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonEffectiveDate$ {
    /** @deprecated use `LegalNaturalPersonEffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonEffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonEffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonEffectiveDate$Outbound, z.ZodTypeDef, LegalNaturalPersonEffectiveDate>;
    /** @deprecated use `LegalNaturalPersonEffectiveDate$Outbound` instead. */
    type Outbound = LegalNaturalPersonEffectiveDate$Outbound;
}
export declare function legalNaturalPersonEffectiveDateToJSON(legalNaturalPersonEffectiveDate: LegalNaturalPersonEffectiveDate): string;
export declare function legalNaturalPersonEffectiveDateFromJSON(jsonString: string): SafeParseResult<LegalNaturalPersonEffectiveDate, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonLargeTrader$inboundSchema: z.ZodType<LegalNaturalPersonLargeTrader, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalNaturalPersonLargeTrader$Outbound = {
    effective_date?: LegalNaturalPersonEffectiveDate$Outbound | null | undefined;
    large_trader_id?: string | undefined;
};
/** @internal */
export declare const LegalNaturalPersonLargeTrader$outboundSchema: z.ZodType<LegalNaturalPersonLargeTrader$Outbound, z.ZodTypeDef, LegalNaturalPersonLargeTrader>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonLargeTrader$ {
    /** @deprecated use `LegalNaturalPersonLargeTrader$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonLargeTrader, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonLargeTrader$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonLargeTrader$Outbound, z.ZodTypeDef, LegalNaturalPersonLargeTrader>;
    /** @deprecated use `LegalNaturalPersonLargeTrader$Outbound` instead. */
    type Outbound = LegalNaturalPersonLargeTrader$Outbound;
}
export declare function legalNaturalPersonLargeTraderToJSON(legalNaturalPersonLargeTrader: LegalNaturalPersonLargeTrader): string;
export declare function legalNaturalPersonLargeTraderFromJSON(jsonString: string): SafeParseResult<LegalNaturalPersonLargeTrader, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonMaritalStatus$inboundSchema: z.ZodType<LegalNaturalPersonMaritalStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonMaritalStatus$outboundSchema: z.ZodType<LegalNaturalPersonMaritalStatusOpen, z.ZodTypeDef, LegalNaturalPersonMaritalStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonMaritalStatus$ {
    /** @deprecated use `LegalNaturalPersonMaritalStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonMaritalStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonMaritalStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonMaritalStatusOpen, z.ZodTypeDef, LegalNaturalPersonMaritalStatusOpen>;
}
/** @internal */
export declare const LegalNaturalPersonNameSuffix$inboundSchema: z.ZodType<LegalNaturalPersonNameSuffixOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonNameSuffix$outboundSchema: z.ZodType<LegalNaturalPersonNameSuffixOpen, z.ZodTypeDef, LegalNaturalPersonNameSuffixOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonNameSuffix$ {
    /** @deprecated use `LegalNaturalPersonNameSuffix$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonNameSuffixOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonNameSuffix$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonNameSuffixOpen, z.ZodTypeDef, LegalNaturalPersonNameSuffixOpen>;
}
/** @internal */
export declare const CustomerReferralSource$inboundSchema: z.ZodType<CustomerReferralSource, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerReferralSource$Outbound = {
    name?: string | undefined;
    relationship_to_applicant?: string | undefined;
    relationship_years_with_applicant?: number | undefined;
    relationship_years_with_broker?: number | undefined;
};
/** @internal */
export declare const CustomerReferralSource$outboundSchema: z.ZodType<CustomerReferralSource$Outbound, z.ZodTypeDef, CustomerReferralSource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerReferralSource$ {
    /** @deprecated use `CustomerReferralSource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerReferralSource, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerReferralSource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerReferralSource$Outbound, z.ZodTypeDef, CustomerReferralSource>;
    /** @deprecated use `CustomerReferralSource$Outbound` instead. */
    type Outbound = CustomerReferralSource$Outbound;
}
export declare function customerReferralSourceToJSON(customerReferralSource: CustomerReferralSource): string;
export declare function customerReferralSourceFromJSON(jsonString: string): SafeParseResult<CustomerReferralSource, SDKValidationError>;
/** @internal */
export declare const NegativeNews$inboundSchema: z.ZodType<NegativeNews, z.ZodTypeDef, unknown>;
/** @internal */
export type NegativeNews$Outbound = {
    negative_news_against_related_parties?: boolean | undefined;
    negative_news_against_related_parties_description?: string | undefined;
};
/** @internal */
export declare const NegativeNews$outboundSchema: z.ZodType<NegativeNews$Outbound, z.ZodTypeDef, NegativeNews>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NegativeNews$ {
    /** @deprecated use `NegativeNews$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NegativeNews, z.ZodTypeDef, unknown>;
    /** @deprecated use `NegativeNews$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NegativeNews$Outbound, z.ZodTypeDef, NegativeNews>;
    /** @deprecated use `NegativeNews$Outbound` instead. */
    type Outbound = NegativeNews$Outbound;
}
export declare function negativeNewsToJSON(negativeNews: NegativeNews): string;
export declare function negativeNewsFromJSON(jsonString: string): SafeParseResult<NegativeNews, SDKValidationError>;
/** @internal */
export declare const OtherSourcesOfWealth$inboundSchema: z.ZodType<OtherSourcesOfWealth, z.ZodTypeDef, unknown>;
/** @internal */
export type OtherSourcesOfWealth$Outbound = {
    applicant_has_other_sources_of_wealth?: boolean | undefined;
    other_sources_of_wealth?: string | undefined;
    other_sources_of_wealth_verification?: string | undefined;
};
/** @internal */
export declare const OtherSourcesOfWealth$outboundSchema: z.ZodType<OtherSourcesOfWealth$Outbound, z.ZodTypeDef, OtherSourcesOfWealth>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OtherSourcesOfWealth$ {
    /** @deprecated use `OtherSourcesOfWealth$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OtherSourcesOfWealth, z.ZodTypeDef, unknown>;
    /** @deprecated use `OtherSourcesOfWealth$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OtherSourcesOfWealth$Outbound, z.ZodTypeDef, OtherSourcesOfWealth>;
    /** @deprecated use `OtherSourcesOfWealth$Outbound` instead. */
    type Outbound = OtherSourcesOfWealth$Outbound;
}
export declare function otherSourcesOfWealthToJSON(otherSourcesOfWealth: OtherSourcesOfWealth): string;
export declare function otherSourcesOfWealthFromJSON(jsonString: string): SafeParseResult<OtherSourcesOfWealth, SDKValidationError>;
/** @internal */
export declare const NaturalPersonFdd$inboundSchema: z.ZodType<NaturalPersonFdd, z.ZodTypeDef, unknown>;
/** @internal */
export type NaturalPersonFdd$Outbound = {
    customer_non_referral_source?: string | undefined;
    customer_referral_source?: CustomerReferralSource$Outbound | null | undefined;
    employment_and_employer_description?: string | undefined;
    negative_news?: NegativeNews$Outbound | null | undefined;
    other_sources_of_wealth?: OtherSourcesOfWealth$Outbound | null | undefined;
};
/** @internal */
export declare const NaturalPersonFdd$outboundSchema: z.ZodType<NaturalPersonFdd$Outbound, z.ZodTypeDef, NaturalPersonFdd>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NaturalPersonFdd$ {
    /** @deprecated use `NaturalPersonFdd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NaturalPersonFdd, z.ZodTypeDef, unknown>;
    /** @deprecated use `NaturalPersonFdd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NaturalPersonFdd$Outbound, z.ZodTypeDef, NaturalPersonFdd>;
    /** @deprecated use `NaturalPersonFdd$Outbound` instead. */
    type Outbound = NaturalPersonFdd$Outbound;
}
export declare function naturalPersonFddToJSON(naturalPersonFdd: NaturalPersonFdd): string;
export declare function naturalPersonFddFromJSON(jsonString: string): SafeParseResult<NaturalPersonFdd, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonResidencyStatus$inboundSchema: z.ZodType<LegalNaturalPersonResidencyStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonResidencyStatus$outboundSchema: z.ZodType<LegalNaturalPersonResidencyStatusOpen, z.ZodTypeDef, LegalNaturalPersonResidencyStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonResidencyStatus$ {
    /** @deprecated use `LegalNaturalPersonResidencyStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonResidencyStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonResidencyStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonResidencyStatusOpen, z.ZodTypeDef, LegalNaturalPersonResidencyStatusOpen>;
}
/** @internal */
export declare const NonCitizenResidency$inboundSchema: z.ZodType<NonCitizenResidency, z.ZodTypeDef, unknown>;
/** @internal */
export type NonCitizenResidency$Outbound = {
    residency_status?: string | undefined;
};
/** @internal */
export declare const NonCitizenResidency$outboundSchema: z.ZodType<NonCitizenResidency$Outbound, z.ZodTypeDef, NonCitizenResidency>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NonCitizenResidency$ {
    /** @deprecated use `NonCitizenResidency$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NonCitizenResidency, z.ZodTypeDef, unknown>;
    /** @deprecated use `NonCitizenResidency$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NonCitizenResidency$Outbound, z.ZodTypeDef, NonCitizenResidency>;
    /** @deprecated use `NonCitizenResidency$Outbound` instead. */
    type Outbound = NonCitizenResidency$Outbound;
}
export declare function nonCitizenResidencyToJSON(nonCitizenResidency: NonCitizenResidency): string;
export declare function nonCitizenResidencyFromJSON(jsonString: string): SafeParseResult<NonCitizenResidency, SDKValidationError>;
/** @internal */
export declare const PersonalAddress$inboundSchema: z.ZodType<PersonalAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalAddress$Outbound = {
    address_lines?: Array<string> | undefined;
    administrative_area?: string | undefined;
    language_code?: string | undefined;
    locality?: string | undefined;
    organization?: string | undefined;
    postal_code?: string | undefined;
    recipients?: Array<string> | undefined;
    region_code?: string | undefined;
    revision?: number | undefined;
    sorting_code?: string | undefined;
    sublocality?: string | undefined;
};
/** @internal */
export declare const PersonalAddress$outboundSchema: z.ZodType<PersonalAddress$Outbound, z.ZodTypeDef, PersonalAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalAddress$ {
    /** @deprecated use `PersonalAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalAddress$Outbound, z.ZodTypeDef, PersonalAddress>;
    /** @deprecated use `PersonalAddress$Outbound` instead. */
    type Outbound = PersonalAddress$Outbound;
}
export declare function personalAddressToJSON(personalAddress: PersonalAddress): string;
export declare function personalAddressFromJSON(jsonString: string): SafeParseResult<PersonalAddress, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonTaxIdType$inboundSchema: z.ZodType<LegalNaturalPersonTaxIdTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonTaxIdType$outboundSchema: z.ZodType<LegalNaturalPersonTaxIdTypeOpen, z.ZodTypeDef, LegalNaturalPersonTaxIdTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonTaxIdType$ {
    /** @deprecated use `LegalNaturalPersonTaxIdType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonTaxIdTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonTaxIdType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonTaxIdTypeOpen, z.ZodTypeDef, LegalNaturalPersonTaxIdTypeOpen>;
}
/** @internal */
export declare const CNoticeDate$inboundSchema: z.ZodType<CNoticeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type CNoticeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const CNoticeDate$outboundSchema: z.ZodType<CNoticeDate$Outbound, z.ZodTypeDef, CNoticeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CNoticeDate$ {
    /** @deprecated use `CNoticeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CNoticeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CNoticeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CNoticeDate$Outbound, z.ZodTypeDef, CNoticeDate>;
    /** @deprecated use `CNoticeDate$Outbound` instead. */
    type Outbound = CNoticeDate$Outbound;
}
export declare function cNoticeDateToJSON(cNoticeDate: CNoticeDate): string;
export declare function cNoticeDateFromJSON(jsonString: string): SafeParseResult<CNoticeDate, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonFederalTaxClassification$inboundSchema: z.ZodType<LegalNaturalPersonFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonFederalTaxClassification$outboundSchema: z.ZodType<LegalNaturalPersonFederalTaxClassificationOpen, z.ZodTypeDef, LegalNaturalPersonFederalTaxClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonFederalTaxClassification$ {
    /** @deprecated use `LegalNaturalPersonFederalTaxClassification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonFederalTaxClassification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonFederalTaxClassificationOpen, z.ZodTypeDef, LegalNaturalPersonFederalTaxClassificationOpen>;
}
/** @internal */
export declare const FirstBNoticeDate$inboundSchema: z.ZodType<FirstBNoticeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type FirstBNoticeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const FirstBNoticeDate$outboundSchema: z.ZodType<FirstBNoticeDate$Outbound, z.ZodTypeDef, FirstBNoticeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FirstBNoticeDate$ {
    /** @deprecated use `FirstBNoticeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FirstBNoticeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `FirstBNoticeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FirstBNoticeDate$Outbound, z.ZodTypeDef, FirstBNoticeDate>;
    /** @deprecated use `FirstBNoticeDate$Outbound` instead. */
    type Outbound = FirstBNoticeDate$Outbound;
}
export declare function firstBNoticeDateToJSON(firstBNoticeDate: FirstBNoticeDate): string;
export declare function firstBNoticeDateFromJSON(jsonString: string): SafeParseResult<FirstBNoticeDate, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPersonIrsFormType$inboundSchema: z.ZodType<LegalNaturalPersonIrsFormTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonIrsFormType$outboundSchema: z.ZodType<LegalNaturalPersonIrsFormTypeOpen, z.ZodTypeDef, LegalNaturalPersonIrsFormTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonIrsFormType$ {
    /** @deprecated use `LegalNaturalPersonIrsFormType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonIrsFormTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonIrsFormType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonIrsFormTypeOpen, z.ZodTypeDef, LegalNaturalPersonIrsFormTypeOpen>;
}
/** @internal */
export declare const ReportingEligibility$inboundSchema: z.ZodType<ReportingEligibilityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ReportingEligibility$outboundSchema: z.ZodType<ReportingEligibilityOpen, z.ZodTypeDef, ReportingEligibilityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReportingEligibility$ {
    /** @deprecated use `ReportingEligibility$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReportingEligibilityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReportingEligibility$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReportingEligibilityOpen, z.ZodTypeDef, ReportingEligibilityOpen>;
}
/** @internal */
export declare const TaxCertificationDate$inboundSchema: z.ZodType<TaxCertificationDate, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxCertificationDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const TaxCertificationDate$outboundSchema: z.ZodType<TaxCertificationDate$Outbound, z.ZodTypeDef, TaxCertificationDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxCertificationDate$ {
    /** @deprecated use `TaxCertificationDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxCertificationDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxCertificationDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxCertificationDate$Outbound, z.ZodTypeDef, TaxCertificationDate>;
    /** @deprecated use `TaxCertificationDate$Outbound` instead. */
    type Outbound = TaxCertificationDate$Outbound;
}
export declare function taxCertificationDateToJSON(taxCertificationDate: TaxCertificationDate): string;
export declare function taxCertificationDateFromJSON(jsonString: string): SafeParseResult<TaxCertificationDate, SDKValidationError>;
/** @internal */
export declare const TaxpayerCertificationState$inboundSchema: z.ZodType<TaxpayerCertificationStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaxpayerCertificationState$outboundSchema: z.ZodType<TaxpayerCertificationStateOpen, z.ZodTypeDef, TaxpayerCertificationStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxpayerCertificationState$ {
    /** @deprecated use `TaxpayerCertificationState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxpayerCertificationStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxpayerCertificationState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxpayerCertificationStateOpen, z.ZodTypeDef, TaxpayerCertificationStateOpen>;
}
/** @internal */
export declare const LegalNaturalPersonUsTinStatus$inboundSchema: z.ZodType<LegalNaturalPersonUsTinStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonUsTinStatus$outboundSchema: z.ZodType<LegalNaturalPersonUsTinStatusOpen, z.ZodTypeDef, LegalNaturalPersonUsTinStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonUsTinStatus$ {
    /** @deprecated use `LegalNaturalPersonUsTinStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonUsTinStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonUsTinStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonUsTinStatusOpen, z.ZodTypeDef, LegalNaturalPersonUsTinStatusOpen>;
}
/** @internal */
export declare const LegalNaturalPersonWithholdingState$inboundSchema: z.ZodType<LegalNaturalPersonWithholdingStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonWithholdingState$outboundSchema: z.ZodType<LegalNaturalPersonWithholdingStateOpen, z.ZodTypeDef, LegalNaturalPersonWithholdingStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonWithholdingState$ {
    /** @deprecated use `LegalNaturalPersonWithholdingState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonWithholdingStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonWithholdingState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonWithholdingStateOpen, z.ZodTypeDef, LegalNaturalPersonWithholdingStateOpen>;
}
/** @internal */
export declare const TaxProfile$inboundSchema: z.ZodType<TaxProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxProfile$Outbound = {
    c_notice_date?: CNoticeDate$Outbound | null | undefined;
    federal_tax_classification?: string | undefined;
    first_b_notice_date?: FirstBNoticeDate$Outbound | null | undefined;
    irs_form_type?: string | undefined;
    legal_tax_region_code?: string | undefined;
    reporting_eligibility?: string | undefined;
    tax_certification_date?: TaxCertificationDate$Outbound | null | undefined;
    taxpayer_certification_state?: string | undefined;
    us_tin_status?: string | undefined;
    withholding_state?: string | undefined;
};
/** @internal */
export declare const TaxProfile$outboundSchema: z.ZodType<TaxProfile$Outbound, z.ZodTypeDef, TaxProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxProfile$ {
    /** @deprecated use `TaxProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxProfile$Outbound, z.ZodTypeDef, TaxProfile>;
    /** @deprecated use `TaxProfile$Outbound` instead. */
    type Outbound = TaxProfile$Outbound;
}
export declare function taxProfileToJSON(taxProfile: TaxProfile): string;
export declare function taxProfileFromJSON(jsonString: string): SafeParseResult<TaxProfile, SDKValidationError>;
/** @internal */
export declare const LegalNaturalPerson$inboundSchema: z.ZodType<LegalNaturalPerson, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalNaturalPerson$Outbound = {
    accredited_investor?: boolean | undefined;
    adviser?: boolean | undefined;
    birth_date?: BirthDate$Outbound | null | undefined;
    citizenship_countries?: Array<string> | undefined;
    control_person_company_symbols?: string | undefined;
    correspondent_employee?: boolean | undefined;
    correspondent_id?: string | undefined;
    custodian_employee?: boolean | undefined;
    customer_identification_id?: string | undefined;
    death_date?: DeathDate$Outbound | null | undefined;
    doing_business_as?: Array<string> | undefined;
    employment?: Employment$Outbound | null | undefined;
    family_name?: string | undefined;
    finra_associated_entity?: string | undefined;
    foreign_identification?: ForeignIdentification$Outbound | null | undefined;
    given_name?: string | undefined;
    global_person_id?: string | undefined;
    identity_verification_result?: LegalNaturalPersonIdentityVerificationResult$Outbound | null | undefined;
    institutional_customer?: boolean | undefined;
    investigation_id?: string | undefined;
    large_trader?: LegalNaturalPersonLargeTrader$Outbound | null | undefined;
    legal_natural_person_id?: string | undefined;
    marital_status?: string | undefined;
    middle_names?: string | undefined;
    name?: string | undefined;
    name_suffix?: string | undefined;
    natural_person_fdd?: NaturalPersonFdd$Outbound | null | undefined;
    non_citizen_residency?: NonCitizenResidency$Outbound | null | undefined;
    personal_address?: PersonalAddress$Outbound | null | undefined;
    politically_exposed_immediate_family_names?: Array<string> | undefined;
    politically_exposed_organization?: string | undefined;
    tax_id?: string | undefined;
    tax_id_last_four?: string | undefined;
    tax_id_type?: string | undefined;
    tax_profile?: TaxProfile$Outbound | null | undefined;
};
/** @internal */
export declare const LegalNaturalPerson$outboundSchema: z.ZodType<LegalNaturalPerson$Outbound, z.ZodTypeDef, LegalNaturalPerson>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPerson$ {
    /** @deprecated use `LegalNaturalPerson$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPerson, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPerson$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPerson$Outbound, z.ZodTypeDef, LegalNaturalPerson>;
    /** @deprecated use `LegalNaturalPerson$Outbound` instead. */
    type Outbound = LegalNaturalPerson$Outbound;
}
export declare function legalNaturalPersonToJSON(legalNaturalPerson: LegalNaturalPerson): string;
export declare function legalNaturalPersonFromJSON(jsonString: string): SafeParseResult<LegalNaturalPerson, SDKValidationError>;
//# sourceMappingURL=legalnaturalperson.d.ts.map