import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
export declare enum PartyBusinessIndustrialClassification {
    BusinessIndustrialClassificationUnspecified = "BUSINESS_INDUSTRIAL_CLASSIFICATION_UNSPECIFIED",
    AgricultureForestryAndFishing = "AGRICULTURE_FORESTRY_AND_FISHING",
    Mining = "MINING",
    Construction = "CONSTRUCTION",
    Manufacturing = "MANUFACTURING",
    TransportationCommunicationsElectricGasAndSanitaryServices = "TRANSPORTATION_COMMUNICATIONS_ELECTRIC_GAS_AND_SANITARY_SERVICES",
    WholesaleTrade = "WHOLESALE_TRADE",
    RetailTrade = "RETAIL_TRADE",
    FinanceInsuranceAndRealEstate = "FINANCE_INSURANCE_AND_REAL_ESTATE",
    Services = "SERVICES",
    PublicAdministration = "PUBLIC_ADMINISTRATION"
}
export type PartyBusinessIndustrialClassificationOpen = OpenEnum<typeof PartyBusinessIndustrialClassification>;
/**
 * Corporate structure of the entity.
 */
export declare enum PartyCorporateStructure {
    EntityCorporateStructureUnspecified = "ENTITY_CORPORATE_STRUCTURE_UNSPECIFIED",
    CorporationCCorp = "CORPORATION_C_CORP",
    CorporationSCorp = "CORPORATION_S_CORP",
    CorporationBCorp = "CORPORATION_B_CORP",
    CorporationNonprofit = "CORPORATION_NONPROFIT"
}
/**
 * Corporate structure of the entity.
 */
export type PartyCorporateStructureOpen = OpenEnum<typeof PartyCorporateStructure>;
/**
 * Information about any negative news against related parties and entities
 */
export type PartyNegativeNews = {
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
 * Due Diligence for Legal Entities
 */
export type PartyEntityDueDiligence = {
    /**
     * Indicates whether the entity issues bearer shares
     */
    entityIssuesBearerShares?: boolean | undefined;
    /**
     * Information about any negative news against related parties and entities
     */
    negativeNews?: PartyNegativeNews | null | undefined;
};
/**
 * The entity type.
 */
export declare enum PartyEntityType {
    EntityTypeUnspecified = "ENTITY_TYPE_UNSPECIFIED",
    Corporation = "CORPORATION",
    LimitedLiabilityCompany = "LIMITED_LIABILITY_COMPANY",
    Partnership = "PARTNERSHIP",
    Trust = "TRUST",
    Estate = "ESTATE"
}
/**
 * The entity type.
 */
export type PartyEntityTypeOpen = OpenEnum<typeof PartyEntityType>;
/**
 * **Field Dependencies:**
 *
 * @remarks
 *
 * Exempt entities must set `exempt_verifying_beneficial_owners` to `true` and provide an `exempt_customer_reason` on the owner record.
 *
 * Required if `exempt_verifying_beneficial_owners` is `true`.
 *
 * Otherwise, must be empty.
 */
export declare enum PartyExemptCustomerReason {
    ExemptReasonUnspecified = "EXEMPT_REASON_UNSPECIFIED",
    RegulatedFinancialInstitution = "REGULATED_FINANCIAL_INSTITUTION",
    DepartmentOrAgencyOfFederalStateOrSubdivision = "DEPARTMENT_OR_AGENCY_OF_FEDERAL_STATE_OR_SUBDIVISION",
    NonBankListedEntity = "NON_BANK_LISTED_ENTITY",
    Section12SecuritiesExchangeAct1934Or15D = "SECTION_12_SECURITIES_EXCHANGE_ACT_1934_OR_15D",
    Section3InvestmentCompanyAct1940 = "SECTION_3_INVESTMENT_COMPANY_ACT_1940",
    Section202AInvestmentAdvisorsAct1940 = "SECTION_202A_INVESTMENT_ADVISORS_ACT_1940",
    Section3SecuritiesExchangeAct1934Section6Or17A = "SECTION_3_SECURITIES_EXCHANGE_ACT_1934_SECTION_6_OR_17A",
    AnyOtherSecuritiesExchangeAct1934 = "ANY_OTHER_SECURITIES_EXCHANGE_ACT_1934",
    CommodityFuturesTradingCommissionRegistered = "COMMODITY_FUTURES_TRADING_COMMISSION_REGISTERED",
    PublicAccountingFirmSection102SarbanesOxley = "PUBLIC_ACCOUNTING_FIRM_SECTION_102_SARBANES_OXLEY",
    StateRegulatedInsuranceCompany = "STATE_REGULATED_INSURANCE_COMPANY"
}
/**
 * **Field Dependencies:**
 *
 * @remarks
 *
 * Exempt entities must set `exempt_verifying_beneficial_owners` to `true` and provide an `exempt_customer_reason` on the owner record.
 *
 * Required if `exempt_verifying_beneficial_owners` is `true`.
 *
 * Otherwise, must be empty.
 */
export type PartyExemptCustomerReasonOpen = OpenEnum<typeof PartyExemptCustomerReason>;
/**
 * If the legal entity is a trust, the formation date is required.
 */
export type PartyFormationDate = {
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
 * The date on which the trader meets or exceeds the large trader reporting threshold, which is defined by the U.S. Securities and Exchange Commission (SEC) as trades of 2 million shares or $20 million in a single day or 20 million shares or $200 million during a calendar month
 */
export type PartyEffectiveDate = {
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
 * Large trader for the legal entity.
 */
export type PartyLargeTrader = {
    /**
     * The date on which the trader meets or exceeds the large trader reporting threshold, which is defined by the U.S. Securities and Exchange Commission (SEC) as trades of 2 million shares or $20 million in a single day or 20 million shares or $200 million during a calendar month
     */
    effectiveDate?: PartyEffectiveDate | null | undefined;
    /**
     * SEC-issued ID signifying the person/entity as a large trader; Required for CAIS regulatory reporting.
     */
    largeTraderId?: string | undefined;
};
/**
 * The mailing address of the legal entity. Required fields within the `legal_address` object include:
 *
 * @remarks
 *  - `administrative_area`
 *  - `region_code` - 2 character CLDR Code
 *  - `postal_code`
 *  - `locality`
 *  - `address_lines` - max 5 lines
 */
export type PartyLegalAddress = {
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
export declare enum PartyTaxIdType {
    TaxIdTypeUnspecified = "TAX_ID_TYPE_UNSPECIFIED",
    TaxIdTypeSsn = "TAX_ID_TYPE_SSN",
    TaxIdTypeItin = "TAX_ID_TYPE_ITIN",
    TaxIdTypeEin = "TAX_ID_TYPE_EIN"
}
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
 */
export type PartyTaxIdTypeOpen = OpenEnum<typeof PartyTaxIdType>;
/**
 * C Notice date.
 */
export type PartyCNoticeDate = {
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
export declare enum PartyFederalTaxClassification {
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
export type PartyFederalTaxClassificationOpen = OpenEnum<typeof PartyFederalTaxClassification>;
/**
 * Initial B Notice date.
 */
export type PartyFirstBNoticeDate = {
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
export declare enum PartyIrsFormType {
    IrsFormTypeUnspecified = "IRS_FORM_TYPE_UNSPECIFIED",
    W9 = "W_9",
    W8Ben = "W_8BEN"
}
/**
 * IRS form type.
 */
export type PartyIrsFormTypeOpen = OpenEnum<typeof PartyIrsFormType>;
/**
 * Tax reporting eligibility.
 */
export declare enum PartyReportingEligibility {
    TaxReportingEligibilityUnspecified = "TAX_REPORTING_ELIGIBILITY_UNSPECIFIED",
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
}
/**
 * Tax reporting eligibility.
 */
export type PartyReportingEligibilityOpen = OpenEnum<typeof PartyReportingEligibility>;
/**
 * Tax Certification date.
 */
export type PartyTaxCertificationDate = {
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
export declare enum PartyTaxpayerCertificationState {
    TaxpayerCertificationStateUnspecified = "TAXPAYER_CERTIFICATION_STATE_UNSPECIFIED",
    Certified = "CERTIFIED",
    Uncertified = "UNCERTIFIED"
}
/**
 * Taxpayer certification status.
 */
export type PartyTaxpayerCertificationStateOpen = OpenEnum<typeof PartyTaxpayerCertificationState>;
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export declare enum PartyUsTinStatus {
    UsTinStatusUnspecified = "US_TIN_STATUS_UNSPECIFIED",
    Passing = "PASSING",
    Failing = "FAILING"
}
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export type PartyUsTinStatusOpen = OpenEnum<typeof PartyUsTinStatus>;
/**
 * B/C Notice status.
 */
export declare enum PartyWithholdingState {
    WithholdingStateUnspecified = "WITHHOLDING_STATE_UNSPECIFIED",
    FirstBNoticeReceived = "FIRST_B_NOTICE_RECEIVED",
    SecondBNoticeReceived = "SECOND_B_NOTICE_RECEIVED",
    CNoticeReceived = "C_NOTICE_RECEIVED",
    CNoticeIndicatedByCustomer = "C_NOTICE_INDICATED_BY_CUSTOMER"
}
/**
 * B/C Notice status.
 */
export type PartyWithholdingStateOpen = OpenEnum<typeof PartyWithholdingState>;
/**
 * The tax profile for the legal entity.
 */
export type PartyTaxProfile = {
    /**
     * C Notice date.
     */
    cNoticeDate?: PartyCNoticeDate | null | undefined;
    /**
     * Federal tax classification.
     */
    federalTaxClassification?: PartyFederalTaxClassificationOpen | undefined;
    /**
     * Initial B Notice date.
     */
    firstBNoticeDate?: PartyFirstBNoticeDate | null | undefined;
    /**
     * IRS form type.
     */
    irsFormType?: PartyIrsFormTypeOpen | undefined;
    /**
     * Legal tax region must be "US" if provided W-9, otherwise must be a non-US country.
     */
    legalTaxRegionCode?: string | undefined;
    /**
     * Tax reporting eligibility.
     */
    reportingEligibility?: PartyReportingEligibilityOpen | undefined;
    /**
     * Tax Certification date.
     */
    taxCertificationDate?: PartyTaxCertificationDate | null | undefined;
    /**
     * Taxpayer certification status.
     */
    taxpayerCertificationState?: PartyTaxpayerCertificationStateOpen | undefined;
    /**
     * United States Individual Taxpayer Identification Number (ITIN) status.
     */
    usTinStatus?: PartyUsTinStatusOpen | undefined;
    /**
     * B/C Notice status.
     */
    withholdingState?: PartyWithholdingStateOpen | undefined;
};
/**
 * Legal entity.
 */
export type PartyLegalEntity = {
    /**
     * Indicates whether the entity is an accredited investor. By default, this is set to `false`.
     */
    accreditedInvestor?: boolean | undefined;
    /**
     * Indicates whether the entity is an adviser. By default, this is set to `false`.
     */
    adviser?: boolean | undefined;
    /**
     * Indicates whether the entity is a broker dealer. By default, this is set to `false`.
     */
    brokerDealer?: boolean | undefined;
    businessIndustrialClassification?: PartyBusinessIndustrialClassificationOpen | undefined;
    /**
     * Corporate structure of the entity.
     */
    corporateStructure?: PartyCorporateStructureOpen | undefined;
    /**
     * The correspondent id associated with the legal entity.
     */
    correspondentId?: string | undefined;
    /**
     * DBA (Doing Business As) names. Can list up to 5 associated with the Legal Entity
     */
    doingBusinessAs?: Array<string> | undefined;
    /**
     * Due Diligence for Legal Entities
     */
    entityDueDiligence?: PartyEntityDueDiligence | null | undefined;
    /**
     * The legal entity name.
     */
    entityName?: string | undefined;
    /**
     * The entity type.
     */
    entityType?: PartyEntityTypeOpen | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * Exempt entities must set `exempt_verifying_beneficial_owners` to `true` and provide an `exempt_customer_reason` on the owner record.
     *
     * Required if `exempt_verifying_beneficial_owners` is `true`.
     *
     * Otherwise, must be empty.
     */
    exemptCustomerReason?: PartyExemptCustomerReasonOpen | undefined;
    /**
     * Indicates whether the entity is exempt from verifying beneficial owners and Enhanced Due Diligence. By default, this is set to `false`
     */
    exemptVerifyingBeneficialOwners?: boolean | undefined;
    /**
     * If the legal entity is a trust, they may set this field to convey ownership and value to a trustee.
     */
    forTheBenefitOf?: string | undefined;
    /**
     * Indicates whether the entity is a foreign entity. By default, this is set to `false`.
     */
    foreignEntity?: boolean | undefined;
    /**
     * Indicates whether the entity is a foreign financial institution. By default, this is set to `false`.
     */
    foreignFinancialInstitution?: boolean | undefined;
    /**
     * If the legal entity is a trust, the formation date is required.
     */
    formationDate?: PartyFormationDate | null | undefined;
    /**
     * Globally Unique identifier for a legal natural person
     */
    globalPersonId?: string | undefined;
    /**
     * Indicates whether the entity is an institutional customer
     */
    institutionalCustomer?: boolean | undefined;
    /**
     * Investigation id relating to the Customer Identification Program (CIP) and Customer Due Diligence (CDD).
     */
    investigationId?: string | undefined;
    /**
     * Large trader for the legal entity.
     */
    largeTrader?: PartyLargeTrader | null | undefined;
    /**
     * The mailing address of the legal entity. Required fields within the `legal_address` object include:
     *
     * @remarks
     *  - `administrative_area`
     *  - `region_code` - 2 character CLDR Code
     *  - `postal_code`
     *  - `locality`
     *  - `address_lines` - max 5 lines
     */
    legalAddress?: PartyLegalAddress | null | undefined;
    /**
     * A system-generated unique identifier referencing a single juridical (non-natural) person (e.g., a corporation); Used to access the record after creation
     */
    legalEntityId?: string | undefined;
    /**
     * The Legal Entity Identifier (LEI) is the financial industry term for a unique global identifier for legal entities participating in financial transactions
     */
    leiCode?: string | undefined;
    /**
     * The name field Format: legalEntities/{legalEntity}
     */
    name?: string | undefined;
    /**
     * The operational footprint of an entity. Operating regions encompass all countries and regions where a company has a significant business presence This includes locations with physical offices, manufacturing plants, service centers, and sales and marketing activities Regions must be provided as two-character CLDR country codes
     */
    operatingRegions?: Array<string> | undefined;
    /**
     * The legal home of an entity. A region of registration, in the context of a corporation, refers to the specific geographic area where the corporation is legally registered and incorporated Defines the legal jurisdiction and framework under which the corporation operates, including legal regulations, tax obligations, and compliance requirements Region must be provided as a two-character CLDR country code
     */
    registrationRegion?: string | undefined;
    /**
     * Indicates whether the entity is a regulated investment company. By default, this is set to `false`.
     */
    regulatedInvestmentCompany?: boolean | undefined;
    /**
     * Document ids related to the legal entity. At least one is required for RIA correspondents when creating Estate or Trust accounts.
     */
    relatedDocumentIds?: Array<string> | undefined;
    /**
     * Indicates whether the trust is a revocable trust. By default, this is set to `false`.
     */
    revocableTrust?: boolean | undefined;
    /**
     * The full U.S. tax ID for a related entity; Must be provided with `EIN` tax ID type
     */
    taxId?: string | undefined;
    /**
     * The last four characters of the related person's tax identifier; Masked/truncated to "last four" in most usage contexts to preserve data privacy.
     */
    taxIdLastFour?: string | undefined;
    /**
     * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
     */
    taxIdType?: PartyTaxIdTypeOpen | undefined;
    /**
     * The tax profile for the legal entity.
     */
    taxProfile?: PartyTaxProfile | null | undefined;
};
/**
 * The legal day, month, and year of birth for a natural person.
 */
export type PartyBirthDate = {
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
export type PartyDeathDate = {
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
export type PartyEmployerAddress = {
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
export declare enum PartyEmploymentStatus {
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
export type PartyEmploymentStatusOpen = OpenEnum<typeof PartyEmploymentStatus>;
/**
 * Object containing information pertaining to a investor's current employer including the name, address, and duration of employment.
 */
export type PartyEmployment = {
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
    employerAddress?: PartyEmployerAddress | null | undefined;
    /**
     * System-generated GUID representing the employment record of a natural person
     */
    employmentId?: string | undefined;
    /**
     * Classifies in what capacity (or if) the underlying natural person holds a job
     */
    employmentStatus?: PartyEmploymentStatusOpen | undefined;
    /**
     * The nature of work performed at an investor's place of employment. Required if the employment_status is `EMPLOYED` or `SELF_EMPLOYED`.
     */
    occupation?: string | undefined;
    /**
     * The start year of employment related to a person's stated employer Must be from birth year to current year, or 0 to clear start year value
     */
    startYear?: number | undefined;
};
/**
 * Identification expiration date
 */
export type PartyExpirationDate = {
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
export type PartyIssueDate = {
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
export declare enum PartyLegalNaturalPersonType {
    IdentificationTypeUnspecified = "IDENTIFICATION_TYPE_UNSPECIFIED",
    Passport = "PASSPORT",
    NationalId = "NATIONAL_ID",
    DriversLicense = "DRIVERS_LICENSE"
}
/**
 * Identification type
 */
export type PartyLegalNaturalPersonTypeOpen = OpenEnum<typeof PartyLegalNaturalPersonType>;
/**
 * Foreign identification. Must be provided if the person does not have a U.S. tax ID
 */
export type PartyForeignIdentification = {
    /**
     * Identification expiration date
     */
    expirationDate?: PartyExpirationDate | null | undefined;
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
    issueDate?: PartyIssueDate | null | undefined;
    /**
     * Region of issuance must be provided as a two-character CLDR country code
     */
    issuingRegionCode?: string | undefined;
    /**
     * Identification type
     */
    type?: PartyLegalNaturalPersonTypeOpen | undefined;
};
/**
 * The datetime external identity verification results were run on a natural person
 */
export type PartyExecutionDate = {
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
export type PartyIdentityVerificationResult = {
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
    executionDate?: PartyExecutionDate | null | undefined;
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
export type PartyLegalNaturalPersonEffectiveDate = {
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
export type PartyLegalNaturalPersonLargeTrader = {
    /**
     * The date on which the trader meets or exceeds the large trader reporting threshold, which is defined by the U.S. Securities and Exchange Commission (SEC) as trades of 2 million shares or $20 million in a single day or 20 million shares or $200 million during a calendar month
     */
    effectiveDate?: PartyLegalNaturalPersonEffectiveDate | null | undefined;
    /**
     * SEC-issued ID signifying the person/entity as a large trader; Required for CAIS regulatory reporting.
     */
    largeTraderId?: string | undefined;
};
/**
 * The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.
 */
export declare enum PartyMaritalStatus {
    MaritalStatusUnspecified = "MARITAL_STATUS_UNSPECIFIED",
    Single = "SINGLE",
    Married = "MARRIED",
    Divorced = "DIVORCED",
    Widowed = "WIDOWED"
}
/**
 * The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.
 */
export type PartyMaritalStatusOpen = OpenEnum<typeof PartyMaritalStatus>;
/**
 * The suffix of a natural person; A suffix in a name is any part of the name that comes after the last name
 */
export declare enum PartyNameSuffix {
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
export type PartyNameSuffixOpen = OpenEnum<typeof PartyNameSuffix>;
/**
 * Customer Referral Source
 */
export type PartyCustomerReferralSource = {
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
export type PartyLegalNaturalPersonNegativeNews = {
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
export type PartyOtherSourcesOfWealth = {
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
export type PartyNaturalPersonFdd = {
    /**
     * Customer Non-referral Source
     */
    customerNonReferralSource?: string | undefined;
    /**
     * Customer Referral Source
     */
    customerReferralSource?: PartyCustomerReferralSource | null | undefined;
    /**
     * The description of the applicant's source of wealth
     */
    employmentAndEmployerDescription?: string | undefined;
    /**
     * Information about any negative news against the client, or any immediate family members, close associates, or related entities
     */
    negativeNews?: PartyLegalNaturalPersonNegativeNews | null | undefined;
    /**
     * The applicant's other source of wealth
     */
    otherSourcesOfWealth?: PartyOtherSourcesOfWealth | null | undefined;
};
export declare enum PartyResidencyStatus {
    ResidencyStatusUnspecified = "RESIDENCY_STATUS_UNSPECIFIED",
    UsPermanentResident = "US_PERMANENT_RESIDENT",
    UsTemporaryResident = "US_TEMPORARY_RESIDENT",
    UsNonResident = "US_NON_RESIDENT"
}
export type PartyResidencyStatusOpen = OpenEnum<typeof PartyResidencyStatus>;
/**
 * Facilitates non-citizen lawful US residents to open domestic accounts
 */
export type PartyNonCitizenResidency = {
    residencyStatus?: PartyResidencyStatusOpen | undefined;
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
export type PartyPersonalAddress = {
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
export declare enum PartyLegalNaturalPersonTaxIdType {
    TaxIdTypeUnspecified = "TAX_ID_TYPE_UNSPECIFIED",
    TaxIdTypeSsn = "TAX_ID_TYPE_SSN",
    TaxIdTypeItin = "TAX_ID_TYPE_ITIN",
    TaxIdTypeEin = "TAX_ID_TYPE_EIN"
}
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
 */
export type PartyLegalNaturalPersonTaxIdTypeOpen = OpenEnum<typeof PartyLegalNaturalPersonTaxIdType>;
/**
 * C Notice date.
 */
export type PartyLegalNaturalPersonCNoticeDate = {
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
export declare enum PartyLegalNaturalPersonFederalTaxClassification {
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
export type PartyLegalNaturalPersonFederalTaxClassificationOpen = OpenEnum<typeof PartyLegalNaturalPersonFederalTaxClassification>;
/**
 * Initial B Notice date.
 */
export type PartyLegalNaturalPersonFirstBNoticeDate = {
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
export declare enum PartyLegalNaturalPersonIrsFormType {
    IrsFormTypeUnspecified = "IRS_FORM_TYPE_UNSPECIFIED",
    W9 = "W_9",
    W8Ben = "W_8BEN"
}
/**
 * IRS form type.
 */
export type PartyLegalNaturalPersonIrsFormTypeOpen = OpenEnum<typeof PartyLegalNaturalPersonIrsFormType>;
/**
 * Tax reporting eligibility.
 */
export declare enum PartyLegalNaturalPersonReportingEligibility {
    TaxReportingEligibilityUnspecified = "TAX_REPORTING_ELIGIBILITY_UNSPECIFIED",
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
}
/**
 * Tax reporting eligibility.
 */
export type PartyLegalNaturalPersonReportingEligibilityOpen = OpenEnum<typeof PartyLegalNaturalPersonReportingEligibility>;
/**
 * Tax Certification date.
 */
export type PartyLegalNaturalPersonTaxCertificationDate = {
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
export declare enum PartyLegalNaturalPersonTaxpayerCertificationState {
    TaxpayerCertificationStateUnspecified = "TAXPAYER_CERTIFICATION_STATE_UNSPECIFIED",
    Certified = "CERTIFIED",
    Uncertified = "UNCERTIFIED"
}
/**
 * Taxpayer certification status.
 */
export type PartyLegalNaturalPersonTaxpayerCertificationStateOpen = OpenEnum<typeof PartyLegalNaturalPersonTaxpayerCertificationState>;
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export declare enum PartyLegalNaturalPersonUsTinStatus {
    UsTinStatusUnspecified = "US_TIN_STATUS_UNSPECIFIED",
    Passing = "PASSING",
    Failing = "FAILING"
}
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export type PartyLegalNaturalPersonUsTinStatusOpen = OpenEnum<typeof PartyLegalNaturalPersonUsTinStatus>;
/**
 * B/C Notice status.
 */
export declare enum PartyLegalNaturalPersonWithholdingState {
    WithholdingStateUnspecified = "WITHHOLDING_STATE_UNSPECIFIED",
    FirstBNoticeReceived = "FIRST_B_NOTICE_RECEIVED",
    SecondBNoticeReceived = "SECOND_B_NOTICE_RECEIVED",
    CNoticeReceived = "C_NOTICE_RECEIVED",
    CNoticeIndicatedByCustomer = "C_NOTICE_INDICATED_BY_CUSTOMER"
}
/**
 * B/C Notice status.
 */
export type PartyLegalNaturalPersonWithholdingStateOpen = OpenEnum<typeof PartyLegalNaturalPersonWithholdingState>;
/**
 * Tax-related attributes at the for the account; A tax profile with taxpayer attributes is located on the legal_natural_person or legal_entity objects elsewhere on the account record.
 */
export type PartyLegalNaturalPersonTaxProfile = {
    /**
     * C Notice date.
     */
    cNoticeDate?: PartyLegalNaturalPersonCNoticeDate | null | undefined;
    /**
     * Federal tax classification.
     */
    federalTaxClassification?: PartyLegalNaturalPersonFederalTaxClassificationOpen | undefined;
    /**
     * Initial B Notice date.
     */
    firstBNoticeDate?: PartyLegalNaturalPersonFirstBNoticeDate | null | undefined;
    /**
     * IRS form type.
     */
    irsFormType?: PartyLegalNaturalPersonIrsFormTypeOpen | undefined;
    /**
     * Legal tax region must be "US" if provided W-9, otherwise must be a non-US country.
     */
    legalTaxRegionCode?: string | undefined;
    /**
     * Tax reporting eligibility.
     */
    reportingEligibility?: PartyLegalNaturalPersonReportingEligibilityOpen | undefined;
    /**
     * Tax Certification date.
     */
    taxCertificationDate?: PartyLegalNaturalPersonTaxCertificationDate | null | undefined;
    /**
     * Taxpayer certification status.
     */
    taxpayerCertificationState?: PartyLegalNaturalPersonTaxpayerCertificationStateOpen | undefined;
    /**
     * United States Individual Taxpayer Identification Number (ITIN) status.
     */
    usTinStatus?: PartyLegalNaturalPersonUsTinStatusOpen | undefined;
    /**
     * B/C Notice status.
     */
    withholdingState?: PartyLegalNaturalPersonWithholdingStateOpen | undefined;
};
/**
 * Legal natural person.
 */
export type PartyLegalNaturalPerson = {
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
    birthDate?: PartyBirthDate | null | undefined;
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
     * The day, month, and year of death of a legal natural person
     */
    deathDate?: PartyDeathDate | null | undefined;
    /**
     * DBA (Doing Business As) names. Can list up to 5 associated with the Legal Natural Person
     */
    doingBusinessAs?: Array<string> | undefined;
    /**
     * Object containing information pertaining to a investor's current employer including the name, address, and duration of employment.
     */
    employment?: PartyEmployment | null | undefined;
    /**
     * Family name of a natural person.
     */
    familyName?: string | undefined;
    /**
     * The name of the FINRA-associated entity the underlying natural person is affiliated with.
     */
    finraAssociatedEntity?: string | undefined;
    /**
     * Foreign identification. Must be provided if the person does not have a U.S. tax ID
     */
    foreignIdentification?: PartyForeignIdentification | null | undefined;
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
    identityVerificationResult?: PartyIdentityVerificationResult | null | undefined;
    /**
     * Indicates whether the person is an institutional customer
     */
    institutionalCustomer?: boolean | undefined;
    /**
     * Investigation id relating to the Customer Identification Program (CIP) and Customer Due Diligence (CDD).
     */
    investigationId?: string | undefined;
    /**
     * Indicates if the person is recognized as a "Large Trader" by the SEC.
     */
    largeTrader?: PartyLegalNaturalPersonLargeTrader | null | undefined;
    /**
     * A system-generated unique identifier referencing a single natural person; Used to access the record after creation.
     */
    legalNaturalPersonId?: string | undefined;
    /**
     * The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.
     */
    maritalStatus?: PartyMaritalStatusOpen | undefined;
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
    nameSuffix?: PartyNameSuffixOpen | undefined;
    /**
     * Foreign Due Diligence (FDD) information for Legal Natural Person
     */
    naturalPersonFdd?: PartyNaturalPersonFdd | null | undefined;
    /**
     * Facilitates non-citizen lawful US residents to open domestic accounts
     */
    nonCitizenResidency?: PartyNonCitizenResidency | null | undefined;
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
    personalAddress?: PartyPersonalAddress | null | undefined;
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
    taxIdType?: PartyLegalNaturalPersonTaxIdTypeOpen | undefined;
    /**
     * Tax-related attributes at the for the account; A tax profile with taxpayer attributes is located on the legal_natural_person or legal_entity objects elsewhere on the account record.
     */
    taxProfile?: PartyLegalNaturalPersonTaxProfile | null | undefined;
};
/**
 * The object containing data for the purpose of delivery physical mailings to a party; Typically used for statements, account updates, tax documents, and other postal mailings; May also be used as an alternative identity verification address to personalAddress. Required fields within the `mailing_address` object include:
 *
 * @remarks
 *  - `administrative_area`
 *  - `region_code` - 2 character CLDR Code
 *  - `postal_code`
 *  - `locality`
 *  - `address_lines` - max 5 lines
 */
export type PartyMailingAddress = {
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
 * A short code.
 *
 * @remarks
 *
 *  Reference(s):
 *  - https://en.wikipedia.org/wiki/Short_code
 */
export type PartyShortCode = {
    /**
     * Required. The short code digits, without a leading plus ('+') or country calling code, e.g. "611".
     */
    number?: string | undefined;
    /**
     * Required. The BCP-47 region code of the location where calls to this short code can be made, such as "US" and "BB".
     *
     * @remarks
     *
     *  Reference(s):
     *  - http://www.unicode.org/reports/tr35/#unicode_region_subtag
     */
    regionCode?: string | undefined;
};
/**
 * The phone number for a party. Lives on the party record in the context of the account and does not commute to other accounts held by/for the person.
 */
export type PartyPhoneNumber = {
    /**
     * The phone number, represented as a leading plus sign ('+'), followed by a phone number that uses a relaxed ITU E.164 format consisting of the country calling code (1 to 3 digits) and the subscriber number, with no additional spaces or formatting, e.g.: - correct: "+15552220123" - incorrect: "+1 (555) 222-01234 x123".
     *
     * @remarks
     *
     *  The ITU E.164 format limits the latter to 12 digits, but in practice not all countries respect that, so we relax that restriction here. National-only numbers are not allowed.
     *
     *  References: - https://www.itu.int/rec/T-REC-E.164-201011-I - https://en.wikipedia.org/wiki/E.164. - https://en.wikipedia.org/wiki/List_of_country_calling_codes
     */
    e164Number?: string | undefined;
    /**
     * The phone number's extension. The extension is not standardized in ITU recommendations, except for being defined as a series of numbers with a maximum length of 40 digits. Other than digits, some other dialing characters such as ',' (indicating a wait) or '#' may be stored here.
     *
     * @remarks
     *
     *  Note that no regions currently use extensions with short codes, so this field is normally only set in conjunction with an E.164 number. It is held separately from the E.164 number to allow for short code extensions in the future.
     */
    extension?: string | undefined;
    /**
     * A short code.
     *
     * @remarks
     *
     *  Reference(s):
     *  - https://en.wikipedia.org/wiki/Short_code
     */
    shortCode?: PartyShortCode | null | undefined;
};
/**
 * Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyProspectusDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyProspectusDeliveryPreferenceOpen = OpenEnum<typeof PartyProspectusDeliveryPreference>;
/**
 * Delivery method instruction for proxy voting for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyProxyDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for proxy voting for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyProxyDeliveryPreferenceOpen = OpenEnum<typeof PartyProxyDeliveryPreference>;
/**
 * Conveys how a person is related to account; Located on each account Party record; Examples are `PRIMARY_OWNER`, `JOINT_OWNER`, `EXECUTOR`, etc.
 */
export declare enum PartyRelationType {
    PartyRelationTypeUnspecified = "PARTY_RELATION_TYPE_UNSPECIFIED",
    PrimaryOwner = "PRIMARY_OWNER",
    JointOwner = "JOINT_OWNER",
    Custodian = "CUSTODIAN",
    Executor = "EXECUTOR",
    AuthorizedSigner = "AUTHORIZED_SIGNER",
    BeneficialOwner = "BENEFICIAL_OWNER",
    ControlPerson = "CONTROL_PERSON",
    AuthorizedRepresentative = "AUTHORIZED_REPRESENTATIVE",
    Trustee = "TRUSTEE",
    AuthTrusteeRep = "AUTH_TRUSTEE_REP"
}
/**
 * Conveys how a person is related to account; Located on each account Party record; Examples are `PRIMARY_OWNER`, `JOINT_OWNER`, `EXECUTOR`, etc.
 */
export type PartyRelationTypeOpen = OpenEnum<typeof PartyRelationType>;
/**
 * Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyStatementDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyStatementDeliveryPreferenceOpen = OpenEnum<typeof PartyStatementDeliveryPreference>;
/**
 * Delivery method instruction for tax documents for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated; Per regulation, selected tax forms will be mailed by regulation regardless of this setting
 */
export declare enum PartyTaxDocumentDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for tax documents for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated; Per regulation, selected tax forms will be mailed by regulation regardless of this setting
 */
export type PartyTaxDocumentDeliveryPreferenceOpen = OpenEnum<typeof PartyTaxDocumentDeliveryPreference>;
/**
 * Delivery method instruction for trade confirmations for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export declare enum PartyTradeConfirmationDeliveryPreference {
    DeliveryPreferenceUnspecified = "DELIVERY_PREFERENCE_UNSPECIFIED",
    Digital = "DIGITAL",
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for trade confirmations for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
 */
export type PartyTradeConfirmationDeliveryPreferenceOpen = OpenEnum<typeof PartyTradeConfirmationDeliveryPreference>;
/**
 * A single record representing an owner or manager of an Account. Contains fully populated Party Identity object.
 */
export type Party = {
    /**
     * An email address indicated for account communications.
     */
    emailAddress?: string | undefined;
    /**
     * Legal entity.
     */
    legalEntity?: PartyLegalEntity | null | undefined;
    /**
     * Legal natural person.
     */
    legalNaturalPerson?: PartyLegalNaturalPerson | null | undefined;
    /**
     * The object containing data for the purpose of delivery physical mailings to a party; Typically used for statements, account updates, tax documents, and other postal mailings; May also be used as an alternative identity verification address to personalAddress. Required fields within the `mailing_address` object include:
     *
     * @remarks
     *  - `administrative_area`
     *  - `region_code` - 2 character CLDR Code
     *  - `postal_code`
     *  - `locality`
     *  - `address_lines` - max 5 lines
     */
    mailingAddress?: PartyMailingAddress | null | undefined;
    /**
     * The name field Format: {parent=account/*}/{name=party/*}
     */
    name?: string | undefined;
    /**
     * A system-generated unique identifier referencing a single owner or control person on an account; A Party contains account-specific information about a person whereas inside the Party is a reference to a reusable instance of a Person `legal_natural_person` or `legal_entity` which contains non-changing information about these persons; Used to access the record after creation
     */
    partyId?: string | undefined;
    /**
     * The phone number for a party. Lives on the party record in the context of the account and does not commute to other accounts held by/for the person.
     */
    phoneNumber?: PartyPhoneNumber | null | undefined;
    /**
     * Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    prospectusDeliveryPreference?: PartyProspectusDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for proxy voting for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    proxyDeliveryPreference?: PartyProxyDeliveryPreferenceOpen | undefined;
    /**
     * Conveys how a person is related to account; Located on each account Party record; Examples are `PRIMARY_OWNER`, `JOINT_OWNER`, `EXECUTOR`, etc.
     */
    relationType?: PartyRelationTypeOpen | undefined;
    /**
     * Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    statementDeliveryPreference?: PartyStatementDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for tax documents for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated; Per regulation, selected tax forms will be mailed by regulation regardless of this setting
     */
    taxDocumentDeliveryPreference?: PartyTaxDocumentDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for trade confirmations for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated
     */
    tradeConfirmationDeliveryPreference?: PartyTradeConfirmationDeliveryPreferenceOpen | undefined;
};
/** @internal */
export declare const PartyBusinessIndustrialClassification$inboundSchema: z.ZodType<PartyBusinessIndustrialClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyBusinessIndustrialClassification$outboundSchema: z.ZodType<PartyBusinessIndustrialClassificationOpen, z.ZodTypeDef, PartyBusinessIndustrialClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyBusinessIndustrialClassification$ {
    /** @deprecated use `PartyBusinessIndustrialClassification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyBusinessIndustrialClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyBusinessIndustrialClassification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyBusinessIndustrialClassificationOpen, z.ZodTypeDef, PartyBusinessIndustrialClassificationOpen>;
}
/** @internal */
export declare const PartyCorporateStructure$inboundSchema: z.ZodType<PartyCorporateStructureOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyCorporateStructure$outboundSchema: z.ZodType<PartyCorporateStructureOpen, z.ZodTypeDef, PartyCorporateStructureOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyCorporateStructure$ {
    /** @deprecated use `PartyCorporateStructure$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyCorporateStructureOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyCorporateStructure$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyCorporateStructureOpen, z.ZodTypeDef, PartyCorporateStructureOpen>;
}
/** @internal */
export declare const PartyNegativeNews$inboundSchema: z.ZodType<PartyNegativeNews, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyNegativeNews$Outbound = {
    negative_news_against_related_parties?: boolean | undefined;
    negative_news_against_related_parties_description?: string | undefined;
};
/** @internal */
export declare const PartyNegativeNews$outboundSchema: z.ZodType<PartyNegativeNews$Outbound, z.ZodTypeDef, PartyNegativeNews>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyNegativeNews$ {
    /** @deprecated use `PartyNegativeNews$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyNegativeNews, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyNegativeNews$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyNegativeNews$Outbound, z.ZodTypeDef, PartyNegativeNews>;
    /** @deprecated use `PartyNegativeNews$Outbound` instead. */
    type Outbound = PartyNegativeNews$Outbound;
}
/** @internal */
export declare const PartyEntityDueDiligence$inboundSchema: z.ZodType<PartyEntityDueDiligence, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyEntityDueDiligence$Outbound = {
    entity_issues_bearer_shares?: boolean | undefined;
    negative_news?: PartyNegativeNews$Outbound | null | undefined;
};
/** @internal */
export declare const PartyEntityDueDiligence$outboundSchema: z.ZodType<PartyEntityDueDiligence$Outbound, z.ZodTypeDef, PartyEntityDueDiligence>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyEntityDueDiligence$ {
    /** @deprecated use `PartyEntityDueDiligence$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyEntityDueDiligence, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyEntityDueDiligence$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyEntityDueDiligence$Outbound, z.ZodTypeDef, PartyEntityDueDiligence>;
    /** @deprecated use `PartyEntityDueDiligence$Outbound` instead. */
    type Outbound = PartyEntityDueDiligence$Outbound;
}
/** @internal */
export declare const PartyEntityType$inboundSchema: z.ZodType<PartyEntityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyEntityType$outboundSchema: z.ZodType<PartyEntityTypeOpen, z.ZodTypeDef, PartyEntityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyEntityType$ {
    /** @deprecated use `PartyEntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyEntityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyEntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyEntityTypeOpen, z.ZodTypeDef, PartyEntityTypeOpen>;
}
/** @internal */
export declare const PartyExemptCustomerReason$inboundSchema: z.ZodType<PartyExemptCustomerReasonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyExemptCustomerReason$outboundSchema: z.ZodType<PartyExemptCustomerReasonOpen, z.ZodTypeDef, PartyExemptCustomerReasonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyExemptCustomerReason$ {
    /** @deprecated use `PartyExemptCustomerReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyExemptCustomerReasonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyExemptCustomerReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyExemptCustomerReasonOpen, z.ZodTypeDef, PartyExemptCustomerReasonOpen>;
}
/** @internal */
export declare const PartyFormationDate$inboundSchema: z.ZodType<PartyFormationDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyFormationDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyFormationDate$outboundSchema: z.ZodType<PartyFormationDate$Outbound, z.ZodTypeDef, PartyFormationDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyFormationDate$ {
    /** @deprecated use `PartyFormationDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyFormationDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyFormationDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyFormationDate$Outbound, z.ZodTypeDef, PartyFormationDate>;
    /** @deprecated use `PartyFormationDate$Outbound` instead. */
    type Outbound = PartyFormationDate$Outbound;
}
/** @internal */
export declare const PartyEffectiveDate$inboundSchema: z.ZodType<PartyEffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyEffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyEffectiveDate$outboundSchema: z.ZodType<PartyEffectiveDate$Outbound, z.ZodTypeDef, PartyEffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyEffectiveDate$ {
    /** @deprecated use `PartyEffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyEffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyEffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyEffectiveDate$Outbound, z.ZodTypeDef, PartyEffectiveDate>;
    /** @deprecated use `PartyEffectiveDate$Outbound` instead. */
    type Outbound = PartyEffectiveDate$Outbound;
}
/** @internal */
export declare const PartyLargeTrader$inboundSchema: z.ZodType<PartyLargeTrader, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLargeTrader$Outbound = {
    effective_date?: PartyEffectiveDate$Outbound | null | undefined;
    large_trader_id?: string | undefined;
};
/** @internal */
export declare const PartyLargeTrader$outboundSchema: z.ZodType<PartyLargeTrader$Outbound, z.ZodTypeDef, PartyLargeTrader>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLargeTrader$ {
    /** @deprecated use `PartyLargeTrader$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLargeTrader, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLargeTrader$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLargeTrader$Outbound, z.ZodTypeDef, PartyLargeTrader>;
    /** @deprecated use `PartyLargeTrader$Outbound` instead. */
    type Outbound = PartyLargeTrader$Outbound;
}
/** @internal */
export declare const PartyLegalAddress$inboundSchema: z.ZodType<PartyLegalAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalAddress$Outbound = {
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
export declare const PartyLegalAddress$outboundSchema: z.ZodType<PartyLegalAddress$Outbound, z.ZodTypeDef, PartyLegalAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalAddress$ {
    /** @deprecated use `PartyLegalAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalAddress$Outbound, z.ZodTypeDef, PartyLegalAddress>;
    /** @deprecated use `PartyLegalAddress$Outbound` instead. */
    type Outbound = PartyLegalAddress$Outbound;
}
/** @internal */
export declare const PartyTaxIdType$inboundSchema: z.ZodType<PartyTaxIdTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyTaxIdType$outboundSchema: z.ZodType<PartyTaxIdTypeOpen, z.ZodTypeDef, PartyTaxIdTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyTaxIdType$ {
    /** @deprecated use `PartyTaxIdType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyTaxIdTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyTaxIdType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyTaxIdTypeOpen, z.ZodTypeDef, PartyTaxIdTypeOpen>;
}
/** @internal */
export declare const PartyCNoticeDate$inboundSchema: z.ZodType<PartyCNoticeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyCNoticeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyCNoticeDate$outboundSchema: z.ZodType<PartyCNoticeDate$Outbound, z.ZodTypeDef, PartyCNoticeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyCNoticeDate$ {
    /** @deprecated use `PartyCNoticeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyCNoticeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyCNoticeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyCNoticeDate$Outbound, z.ZodTypeDef, PartyCNoticeDate>;
    /** @deprecated use `PartyCNoticeDate$Outbound` instead. */
    type Outbound = PartyCNoticeDate$Outbound;
}
/** @internal */
export declare const PartyFederalTaxClassification$inboundSchema: z.ZodType<PartyFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyFederalTaxClassification$outboundSchema: z.ZodType<PartyFederalTaxClassificationOpen, z.ZodTypeDef, PartyFederalTaxClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyFederalTaxClassification$ {
    /** @deprecated use `PartyFederalTaxClassification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyFederalTaxClassification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyFederalTaxClassificationOpen, z.ZodTypeDef, PartyFederalTaxClassificationOpen>;
}
/** @internal */
export declare const PartyFirstBNoticeDate$inboundSchema: z.ZodType<PartyFirstBNoticeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyFirstBNoticeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyFirstBNoticeDate$outboundSchema: z.ZodType<PartyFirstBNoticeDate$Outbound, z.ZodTypeDef, PartyFirstBNoticeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyFirstBNoticeDate$ {
    /** @deprecated use `PartyFirstBNoticeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyFirstBNoticeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyFirstBNoticeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyFirstBNoticeDate$Outbound, z.ZodTypeDef, PartyFirstBNoticeDate>;
    /** @deprecated use `PartyFirstBNoticeDate$Outbound` instead. */
    type Outbound = PartyFirstBNoticeDate$Outbound;
}
/** @internal */
export declare const PartyIrsFormType$inboundSchema: z.ZodType<PartyIrsFormTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyIrsFormType$outboundSchema: z.ZodType<PartyIrsFormTypeOpen, z.ZodTypeDef, PartyIrsFormTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyIrsFormType$ {
    /** @deprecated use `PartyIrsFormType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyIrsFormTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyIrsFormType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyIrsFormTypeOpen, z.ZodTypeDef, PartyIrsFormTypeOpen>;
}
/** @internal */
export declare const PartyReportingEligibility$inboundSchema: z.ZodType<PartyReportingEligibilityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyReportingEligibility$outboundSchema: z.ZodType<PartyReportingEligibilityOpen, z.ZodTypeDef, PartyReportingEligibilityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyReportingEligibility$ {
    /** @deprecated use `PartyReportingEligibility$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyReportingEligibilityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyReportingEligibility$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyReportingEligibilityOpen, z.ZodTypeDef, PartyReportingEligibilityOpen>;
}
/** @internal */
export declare const PartyTaxCertificationDate$inboundSchema: z.ZodType<PartyTaxCertificationDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyTaxCertificationDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyTaxCertificationDate$outboundSchema: z.ZodType<PartyTaxCertificationDate$Outbound, z.ZodTypeDef, PartyTaxCertificationDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyTaxCertificationDate$ {
    /** @deprecated use `PartyTaxCertificationDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyTaxCertificationDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyTaxCertificationDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyTaxCertificationDate$Outbound, z.ZodTypeDef, PartyTaxCertificationDate>;
    /** @deprecated use `PartyTaxCertificationDate$Outbound` instead. */
    type Outbound = PartyTaxCertificationDate$Outbound;
}
/** @internal */
export declare const PartyTaxpayerCertificationState$inboundSchema: z.ZodType<PartyTaxpayerCertificationStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyTaxpayerCertificationState$outboundSchema: z.ZodType<PartyTaxpayerCertificationStateOpen, z.ZodTypeDef, PartyTaxpayerCertificationStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyTaxpayerCertificationState$ {
    /** @deprecated use `PartyTaxpayerCertificationState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyTaxpayerCertificationStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyTaxpayerCertificationState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyTaxpayerCertificationStateOpen, z.ZodTypeDef, PartyTaxpayerCertificationStateOpen>;
}
/** @internal */
export declare const PartyUsTinStatus$inboundSchema: z.ZodType<PartyUsTinStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyUsTinStatus$outboundSchema: z.ZodType<PartyUsTinStatusOpen, z.ZodTypeDef, PartyUsTinStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyUsTinStatus$ {
    /** @deprecated use `PartyUsTinStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyUsTinStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyUsTinStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyUsTinStatusOpen, z.ZodTypeDef, PartyUsTinStatusOpen>;
}
/** @internal */
export declare const PartyWithholdingState$inboundSchema: z.ZodType<PartyWithholdingStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyWithholdingState$outboundSchema: z.ZodType<PartyWithholdingStateOpen, z.ZodTypeDef, PartyWithholdingStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyWithholdingState$ {
    /** @deprecated use `PartyWithholdingState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyWithholdingStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyWithholdingState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyWithholdingStateOpen, z.ZodTypeDef, PartyWithholdingStateOpen>;
}
/** @internal */
export declare const PartyTaxProfile$inboundSchema: z.ZodType<PartyTaxProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyTaxProfile$Outbound = {
    c_notice_date?: PartyCNoticeDate$Outbound | null | undefined;
    federal_tax_classification?: string | undefined;
    first_b_notice_date?: PartyFirstBNoticeDate$Outbound | null | undefined;
    irs_form_type?: string | undefined;
    legal_tax_region_code?: string | undefined;
    reporting_eligibility?: string | undefined;
    tax_certification_date?: PartyTaxCertificationDate$Outbound | null | undefined;
    taxpayer_certification_state?: string | undefined;
    us_tin_status?: string | undefined;
    withholding_state?: string | undefined;
};
/** @internal */
export declare const PartyTaxProfile$outboundSchema: z.ZodType<PartyTaxProfile$Outbound, z.ZodTypeDef, PartyTaxProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyTaxProfile$ {
    /** @deprecated use `PartyTaxProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyTaxProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyTaxProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyTaxProfile$Outbound, z.ZodTypeDef, PartyTaxProfile>;
    /** @deprecated use `PartyTaxProfile$Outbound` instead. */
    type Outbound = PartyTaxProfile$Outbound;
}
/** @internal */
export declare const PartyLegalEntity$inboundSchema: z.ZodType<PartyLegalEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalEntity$Outbound = {
    accredited_investor?: boolean | undefined;
    adviser?: boolean | undefined;
    broker_dealer?: boolean | undefined;
    business_industrial_classification?: string | undefined;
    corporate_structure?: string | undefined;
    correspondent_id?: string | undefined;
    doing_business_as?: Array<string> | undefined;
    entity_due_diligence?: PartyEntityDueDiligence$Outbound | null | undefined;
    entity_name?: string | undefined;
    entity_type?: string | undefined;
    exempt_customer_reason?: string | undefined;
    exempt_verifying_beneficial_owners?: boolean | undefined;
    for_the_benefit_of?: string | undefined;
    foreign_entity?: boolean | undefined;
    foreign_financial_institution?: boolean | undefined;
    formation_date?: PartyFormationDate$Outbound | null | undefined;
    global_person_id?: string | undefined;
    institutional_customer?: boolean | undefined;
    investigation_id?: string | undefined;
    large_trader?: PartyLargeTrader$Outbound | null | undefined;
    legal_address?: PartyLegalAddress$Outbound | null | undefined;
    legal_entity_id?: string | undefined;
    lei_code?: string | undefined;
    name?: string | undefined;
    operating_regions?: Array<string> | undefined;
    registration_region?: string | undefined;
    regulated_investment_company?: boolean | undefined;
    related_document_ids?: Array<string> | undefined;
    revocable_trust?: boolean | undefined;
    tax_id?: string | undefined;
    tax_id_last_four?: string | undefined;
    tax_id_type?: string | undefined;
    tax_profile?: PartyTaxProfile$Outbound | null | undefined;
};
/** @internal */
export declare const PartyLegalEntity$outboundSchema: z.ZodType<PartyLegalEntity$Outbound, z.ZodTypeDef, PartyLegalEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalEntity$ {
    /** @deprecated use `PartyLegalEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalEntity$Outbound, z.ZodTypeDef, PartyLegalEntity>;
    /** @deprecated use `PartyLegalEntity$Outbound` instead. */
    type Outbound = PartyLegalEntity$Outbound;
}
/** @internal */
export declare const PartyBirthDate$inboundSchema: z.ZodType<PartyBirthDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyBirthDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyBirthDate$outboundSchema: z.ZodType<PartyBirthDate$Outbound, z.ZodTypeDef, PartyBirthDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyBirthDate$ {
    /** @deprecated use `PartyBirthDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyBirthDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyBirthDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyBirthDate$Outbound, z.ZodTypeDef, PartyBirthDate>;
    /** @deprecated use `PartyBirthDate$Outbound` instead. */
    type Outbound = PartyBirthDate$Outbound;
}
/** @internal */
export declare const PartyDeathDate$inboundSchema: z.ZodType<PartyDeathDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyDeathDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyDeathDate$outboundSchema: z.ZodType<PartyDeathDate$Outbound, z.ZodTypeDef, PartyDeathDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyDeathDate$ {
    /** @deprecated use `PartyDeathDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyDeathDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyDeathDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyDeathDate$Outbound, z.ZodTypeDef, PartyDeathDate>;
    /** @deprecated use `PartyDeathDate$Outbound` instead. */
    type Outbound = PartyDeathDate$Outbound;
}
/** @internal */
export declare const PartyEmployerAddress$inboundSchema: z.ZodType<PartyEmployerAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyEmployerAddress$Outbound = {
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
export declare const PartyEmployerAddress$outboundSchema: z.ZodType<PartyEmployerAddress$Outbound, z.ZodTypeDef, PartyEmployerAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyEmployerAddress$ {
    /** @deprecated use `PartyEmployerAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyEmployerAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyEmployerAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyEmployerAddress$Outbound, z.ZodTypeDef, PartyEmployerAddress>;
    /** @deprecated use `PartyEmployerAddress$Outbound` instead. */
    type Outbound = PartyEmployerAddress$Outbound;
}
/** @internal */
export declare const PartyEmploymentStatus$inboundSchema: z.ZodType<PartyEmploymentStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyEmploymentStatus$outboundSchema: z.ZodType<PartyEmploymentStatusOpen, z.ZodTypeDef, PartyEmploymentStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyEmploymentStatus$ {
    /** @deprecated use `PartyEmploymentStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyEmploymentStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyEmploymentStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyEmploymentStatusOpen, z.ZodTypeDef, PartyEmploymentStatusOpen>;
}
/** @internal */
export declare const PartyEmployment$inboundSchema: z.ZodType<PartyEmployment, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyEmployment$Outbound = {
    employer?: string | undefined;
    employer_address?: PartyEmployerAddress$Outbound | null | undefined;
    employment_id?: string | undefined;
    employment_status?: string | undefined;
    occupation?: string | undefined;
    start_year?: number | undefined;
};
/** @internal */
export declare const PartyEmployment$outboundSchema: z.ZodType<PartyEmployment$Outbound, z.ZodTypeDef, PartyEmployment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyEmployment$ {
    /** @deprecated use `PartyEmployment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyEmployment, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyEmployment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyEmployment$Outbound, z.ZodTypeDef, PartyEmployment>;
    /** @deprecated use `PartyEmployment$Outbound` instead. */
    type Outbound = PartyEmployment$Outbound;
}
/** @internal */
export declare const PartyExpirationDate$inboundSchema: z.ZodType<PartyExpirationDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyExpirationDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyExpirationDate$outboundSchema: z.ZodType<PartyExpirationDate$Outbound, z.ZodTypeDef, PartyExpirationDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyExpirationDate$ {
    /** @deprecated use `PartyExpirationDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyExpirationDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyExpirationDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyExpirationDate$Outbound, z.ZodTypeDef, PartyExpirationDate>;
    /** @deprecated use `PartyExpirationDate$Outbound` instead. */
    type Outbound = PartyExpirationDate$Outbound;
}
/** @internal */
export declare const PartyIssueDate$inboundSchema: z.ZodType<PartyIssueDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyIssueDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyIssueDate$outboundSchema: z.ZodType<PartyIssueDate$Outbound, z.ZodTypeDef, PartyIssueDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyIssueDate$ {
    /** @deprecated use `PartyIssueDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyIssueDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyIssueDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyIssueDate$Outbound, z.ZodTypeDef, PartyIssueDate>;
    /** @deprecated use `PartyIssueDate$Outbound` instead. */
    type Outbound = PartyIssueDate$Outbound;
}
/** @internal */
export declare const PartyLegalNaturalPersonType$inboundSchema: z.ZodType<PartyLegalNaturalPersonTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyLegalNaturalPersonType$outboundSchema: z.ZodType<PartyLegalNaturalPersonTypeOpen, z.ZodTypeDef, PartyLegalNaturalPersonTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonType$ {
    /** @deprecated use `PartyLegalNaturalPersonType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonTypeOpen, z.ZodTypeDef, PartyLegalNaturalPersonTypeOpen>;
}
/** @internal */
export declare const PartyForeignIdentification$inboundSchema: z.ZodType<PartyForeignIdentification, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyForeignIdentification$Outbound = {
    expiration_date?: PartyExpirationDate$Outbound | null | undefined;
    ftin?: boolean | undefined;
    identification_number?: string | undefined;
    issue_date?: PartyIssueDate$Outbound | null | undefined;
    issuing_region_code?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const PartyForeignIdentification$outboundSchema: z.ZodType<PartyForeignIdentification$Outbound, z.ZodTypeDef, PartyForeignIdentification>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyForeignIdentification$ {
    /** @deprecated use `PartyForeignIdentification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyForeignIdentification, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyForeignIdentification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyForeignIdentification$Outbound, z.ZodTypeDef, PartyForeignIdentification>;
    /** @deprecated use `PartyForeignIdentification$Outbound` instead. */
    type Outbound = PartyForeignIdentification$Outbound;
}
/** @internal */
export declare const PartyExecutionDate$inboundSchema: z.ZodType<PartyExecutionDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyExecutionDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyExecutionDate$outboundSchema: z.ZodType<PartyExecutionDate$Outbound, z.ZodTypeDef, PartyExecutionDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyExecutionDate$ {
    /** @deprecated use `PartyExecutionDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyExecutionDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyExecutionDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyExecutionDate$Outbound, z.ZodTypeDef, PartyExecutionDate>;
    /** @deprecated use `PartyExecutionDate$Outbound` instead. */
    type Outbound = PartyExecutionDate$Outbound;
}
/** @internal */
export declare const PartyIdentityVerificationResult$inboundSchema: z.ZodType<PartyIdentityVerificationResult, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyIdentityVerificationResult$Outbound = {
    address_verified?: boolean | undefined;
    birth_date_verified?: boolean | undefined;
    execution_date?: PartyExecutionDate$Outbound | null | undefined;
    external_case_id?: string | undefined;
    identity_verification_document_ids?: Array<string> | undefined;
    identity_verification_result_id?: string | undefined;
    name_verified?: boolean | undefined;
    raw_vendor_data_document_id?: string | undefined;
    tax_id_verified?: boolean | undefined;
    vendor?: string | undefined;
};
/** @internal */
export declare const PartyIdentityVerificationResult$outboundSchema: z.ZodType<PartyIdentityVerificationResult$Outbound, z.ZodTypeDef, PartyIdentityVerificationResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyIdentityVerificationResult$ {
    /** @deprecated use `PartyIdentityVerificationResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyIdentityVerificationResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyIdentityVerificationResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyIdentityVerificationResult$Outbound, z.ZodTypeDef, PartyIdentityVerificationResult>;
    /** @deprecated use `PartyIdentityVerificationResult$Outbound` instead. */
    type Outbound = PartyIdentityVerificationResult$Outbound;
}
/** @internal */
export declare const PartyLegalNaturalPersonEffectiveDate$inboundSchema: z.ZodType<PartyLegalNaturalPersonEffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalNaturalPersonEffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyLegalNaturalPersonEffectiveDate$outboundSchema: z.ZodType<PartyLegalNaturalPersonEffectiveDate$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonEffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonEffectiveDate$ {
    /** @deprecated use `PartyLegalNaturalPersonEffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonEffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonEffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonEffectiveDate$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonEffectiveDate>;
    /** @deprecated use `PartyLegalNaturalPersonEffectiveDate$Outbound` instead. */
    type Outbound = PartyLegalNaturalPersonEffectiveDate$Outbound;
}
/** @internal */
export declare const PartyLegalNaturalPersonLargeTrader$inboundSchema: z.ZodType<PartyLegalNaturalPersonLargeTrader, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalNaturalPersonLargeTrader$Outbound = {
    effective_date?: PartyLegalNaturalPersonEffectiveDate$Outbound | null | undefined;
    large_trader_id?: string | undefined;
};
/** @internal */
export declare const PartyLegalNaturalPersonLargeTrader$outboundSchema: z.ZodType<PartyLegalNaturalPersonLargeTrader$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonLargeTrader>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonLargeTrader$ {
    /** @deprecated use `PartyLegalNaturalPersonLargeTrader$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonLargeTrader, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonLargeTrader$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonLargeTrader$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonLargeTrader>;
    /** @deprecated use `PartyLegalNaturalPersonLargeTrader$Outbound` instead. */
    type Outbound = PartyLegalNaturalPersonLargeTrader$Outbound;
}
/** @internal */
export declare const PartyMaritalStatus$inboundSchema: z.ZodType<PartyMaritalStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyMaritalStatus$outboundSchema: z.ZodType<PartyMaritalStatusOpen, z.ZodTypeDef, PartyMaritalStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyMaritalStatus$ {
    /** @deprecated use `PartyMaritalStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyMaritalStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyMaritalStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyMaritalStatusOpen, z.ZodTypeDef, PartyMaritalStatusOpen>;
}
/** @internal */
export declare const PartyNameSuffix$inboundSchema: z.ZodType<PartyNameSuffixOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyNameSuffix$outboundSchema: z.ZodType<PartyNameSuffixOpen, z.ZodTypeDef, PartyNameSuffixOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyNameSuffix$ {
    /** @deprecated use `PartyNameSuffix$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyNameSuffixOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyNameSuffix$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyNameSuffixOpen, z.ZodTypeDef, PartyNameSuffixOpen>;
}
/** @internal */
export declare const PartyCustomerReferralSource$inboundSchema: z.ZodType<PartyCustomerReferralSource, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyCustomerReferralSource$Outbound = {
    name?: string | undefined;
    relationship_to_applicant?: string | undefined;
    relationship_years_with_applicant?: number | undefined;
    relationship_years_with_broker?: number | undefined;
};
/** @internal */
export declare const PartyCustomerReferralSource$outboundSchema: z.ZodType<PartyCustomerReferralSource$Outbound, z.ZodTypeDef, PartyCustomerReferralSource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyCustomerReferralSource$ {
    /** @deprecated use `PartyCustomerReferralSource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyCustomerReferralSource, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyCustomerReferralSource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyCustomerReferralSource$Outbound, z.ZodTypeDef, PartyCustomerReferralSource>;
    /** @deprecated use `PartyCustomerReferralSource$Outbound` instead. */
    type Outbound = PartyCustomerReferralSource$Outbound;
}
/** @internal */
export declare const PartyLegalNaturalPersonNegativeNews$inboundSchema: z.ZodType<PartyLegalNaturalPersonNegativeNews, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalNaturalPersonNegativeNews$Outbound = {
    negative_news_against_related_parties?: boolean | undefined;
    negative_news_against_related_parties_description?: string | undefined;
};
/** @internal */
export declare const PartyLegalNaturalPersonNegativeNews$outboundSchema: z.ZodType<PartyLegalNaturalPersonNegativeNews$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonNegativeNews>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonNegativeNews$ {
    /** @deprecated use `PartyLegalNaturalPersonNegativeNews$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonNegativeNews, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonNegativeNews$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonNegativeNews$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonNegativeNews>;
    /** @deprecated use `PartyLegalNaturalPersonNegativeNews$Outbound` instead. */
    type Outbound = PartyLegalNaturalPersonNegativeNews$Outbound;
}
/** @internal */
export declare const PartyOtherSourcesOfWealth$inboundSchema: z.ZodType<PartyOtherSourcesOfWealth, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyOtherSourcesOfWealth$Outbound = {
    applicant_has_other_sources_of_wealth?: boolean | undefined;
    other_sources_of_wealth?: string | undefined;
    other_sources_of_wealth_verification?: string | undefined;
};
/** @internal */
export declare const PartyOtherSourcesOfWealth$outboundSchema: z.ZodType<PartyOtherSourcesOfWealth$Outbound, z.ZodTypeDef, PartyOtherSourcesOfWealth>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyOtherSourcesOfWealth$ {
    /** @deprecated use `PartyOtherSourcesOfWealth$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyOtherSourcesOfWealth, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyOtherSourcesOfWealth$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyOtherSourcesOfWealth$Outbound, z.ZodTypeDef, PartyOtherSourcesOfWealth>;
    /** @deprecated use `PartyOtherSourcesOfWealth$Outbound` instead. */
    type Outbound = PartyOtherSourcesOfWealth$Outbound;
}
/** @internal */
export declare const PartyNaturalPersonFdd$inboundSchema: z.ZodType<PartyNaturalPersonFdd, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyNaturalPersonFdd$Outbound = {
    customer_non_referral_source?: string | undefined;
    customer_referral_source?: PartyCustomerReferralSource$Outbound | null | undefined;
    employment_and_employer_description?: string | undefined;
    negative_news?: PartyLegalNaturalPersonNegativeNews$Outbound | null | undefined;
    other_sources_of_wealth?: PartyOtherSourcesOfWealth$Outbound | null | undefined;
};
/** @internal */
export declare const PartyNaturalPersonFdd$outboundSchema: z.ZodType<PartyNaturalPersonFdd$Outbound, z.ZodTypeDef, PartyNaturalPersonFdd>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyNaturalPersonFdd$ {
    /** @deprecated use `PartyNaturalPersonFdd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyNaturalPersonFdd, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyNaturalPersonFdd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyNaturalPersonFdd$Outbound, z.ZodTypeDef, PartyNaturalPersonFdd>;
    /** @deprecated use `PartyNaturalPersonFdd$Outbound` instead. */
    type Outbound = PartyNaturalPersonFdd$Outbound;
}
/** @internal */
export declare const PartyResidencyStatus$inboundSchema: z.ZodType<PartyResidencyStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyResidencyStatus$outboundSchema: z.ZodType<PartyResidencyStatusOpen, z.ZodTypeDef, PartyResidencyStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyResidencyStatus$ {
    /** @deprecated use `PartyResidencyStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyResidencyStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyResidencyStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyResidencyStatusOpen, z.ZodTypeDef, PartyResidencyStatusOpen>;
}
/** @internal */
export declare const PartyNonCitizenResidency$inboundSchema: z.ZodType<PartyNonCitizenResidency, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyNonCitizenResidency$Outbound = {
    residency_status?: string | undefined;
};
/** @internal */
export declare const PartyNonCitizenResidency$outboundSchema: z.ZodType<PartyNonCitizenResidency$Outbound, z.ZodTypeDef, PartyNonCitizenResidency>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyNonCitizenResidency$ {
    /** @deprecated use `PartyNonCitizenResidency$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyNonCitizenResidency, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyNonCitizenResidency$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyNonCitizenResidency$Outbound, z.ZodTypeDef, PartyNonCitizenResidency>;
    /** @deprecated use `PartyNonCitizenResidency$Outbound` instead. */
    type Outbound = PartyNonCitizenResidency$Outbound;
}
/** @internal */
export declare const PartyPersonalAddress$inboundSchema: z.ZodType<PartyPersonalAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyPersonalAddress$Outbound = {
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
export declare const PartyPersonalAddress$outboundSchema: z.ZodType<PartyPersonalAddress$Outbound, z.ZodTypeDef, PartyPersonalAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyPersonalAddress$ {
    /** @deprecated use `PartyPersonalAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyPersonalAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyPersonalAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyPersonalAddress$Outbound, z.ZodTypeDef, PartyPersonalAddress>;
    /** @deprecated use `PartyPersonalAddress$Outbound` instead. */
    type Outbound = PartyPersonalAddress$Outbound;
}
/** @internal */
export declare const PartyLegalNaturalPersonTaxIdType$inboundSchema: z.ZodType<PartyLegalNaturalPersonTaxIdTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyLegalNaturalPersonTaxIdType$outboundSchema: z.ZodType<PartyLegalNaturalPersonTaxIdTypeOpen, z.ZodTypeDef, PartyLegalNaturalPersonTaxIdTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonTaxIdType$ {
    /** @deprecated use `PartyLegalNaturalPersonTaxIdType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonTaxIdTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonTaxIdType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonTaxIdTypeOpen, z.ZodTypeDef, PartyLegalNaturalPersonTaxIdTypeOpen>;
}
/** @internal */
export declare const PartyLegalNaturalPersonCNoticeDate$inboundSchema: z.ZodType<PartyLegalNaturalPersonCNoticeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalNaturalPersonCNoticeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyLegalNaturalPersonCNoticeDate$outboundSchema: z.ZodType<PartyLegalNaturalPersonCNoticeDate$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonCNoticeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonCNoticeDate$ {
    /** @deprecated use `PartyLegalNaturalPersonCNoticeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonCNoticeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonCNoticeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonCNoticeDate$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonCNoticeDate>;
    /** @deprecated use `PartyLegalNaturalPersonCNoticeDate$Outbound` instead. */
    type Outbound = PartyLegalNaturalPersonCNoticeDate$Outbound;
}
/** @internal */
export declare const PartyLegalNaturalPersonFederalTaxClassification$inboundSchema: z.ZodType<PartyLegalNaturalPersonFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyLegalNaturalPersonFederalTaxClassification$outboundSchema: z.ZodType<PartyLegalNaturalPersonFederalTaxClassificationOpen, z.ZodTypeDef, PartyLegalNaturalPersonFederalTaxClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonFederalTaxClassification$ {
    /** @deprecated use `PartyLegalNaturalPersonFederalTaxClassification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonFederalTaxClassification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonFederalTaxClassificationOpen, z.ZodTypeDef, PartyLegalNaturalPersonFederalTaxClassificationOpen>;
}
/** @internal */
export declare const PartyLegalNaturalPersonFirstBNoticeDate$inboundSchema: z.ZodType<PartyLegalNaturalPersonFirstBNoticeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalNaturalPersonFirstBNoticeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyLegalNaturalPersonFirstBNoticeDate$outboundSchema: z.ZodType<PartyLegalNaturalPersonFirstBNoticeDate$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonFirstBNoticeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonFirstBNoticeDate$ {
    /** @deprecated use `PartyLegalNaturalPersonFirstBNoticeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonFirstBNoticeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonFirstBNoticeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonFirstBNoticeDate$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonFirstBNoticeDate>;
    /** @deprecated use `PartyLegalNaturalPersonFirstBNoticeDate$Outbound` instead. */
    type Outbound = PartyLegalNaturalPersonFirstBNoticeDate$Outbound;
}
/** @internal */
export declare const PartyLegalNaturalPersonIrsFormType$inboundSchema: z.ZodType<PartyLegalNaturalPersonIrsFormTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyLegalNaturalPersonIrsFormType$outboundSchema: z.ZodType<PartyLegalNaturalPersonIrsFormTypeOpen, z.ZodTypeDef, PartyLegalNaturalPersonIrsFormTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonIrsFormType$ {
    /** @deprecated use `PartyLegalNaturalPersonIrsFormType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonIrsFormTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonIrsFormType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonIrsFormTypeOpen, z.ZodTypeDef, PartyLegalNaturalPersonIrsFormTypeOpen>;
}
/** @internal */
export declare const PartyLegalNaturalPersonReportingEligibility$inboundSchema: z.ZodType<PartyLegalNaturalPersonReportingEligibilityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyLegalNaturalPersonReportingEligibility$outboundSchema: z.ZodType<PartyLegalNaturalPersonReportingEligibilityOpen, z.ZodTypeDef, PartyLegalNaturalPersonReportingEligibilityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonReportingEligibility$ {
    /** @deprecated use `PartyLegalNaturalPersonReportingEligibility$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonReportingEligibilityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonReportingEligibility$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonReportingEligibilityOpen, z.ZodTypeDef, PartyLegalNaturalPersonReportingEligibilityOpen>;
}
/** @internal */
export declare const PartyLegalNaturalPersonTaxCertificationDate$inboundSchema: z.ZodType<PartyLegalNaturalPersonTaxCertificationDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalNaturalPersonTaxCertificationDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PartyLegalNaturalPersonTaxCertificationDate$outboundSchema: z.ZodType<PartyLegalNaturalPersonTaxCertificationDate$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonTaxCertificationDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonTaxCertificationDate$ {
    /** @deprecated use `PartyLegalNaturalPersonTaxCertificationDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonTaxCertificationDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonTaxCertificationDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonTaxCertificationDate$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonTaxCertificationDate>;
    /** @deprecated use `PartyLegalNaturalPersonTaxCertificationDate$Outbound` instead. */
    type Outbound = PartyLegalNaturalPersonTaxCertificationDate$Outbound;
}
/** @internal */
export declare const PartyLegalNaturalPersonTaxpayerCertificationState$inboundSchema: z.ZodType<PartyLegalNaturalPersonTaxpayerCertificationStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyLegalNaturalPersonTaxpayerCertificationState$outboundSchema: z.ZodType<PartyLegalNaturalPersonTaxpayerCertificationStateOpen, z.ZodTypeDef, PartyLegalNaturalPersonTaxpayerCertificationStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonTaxpayerCertificationState$ {
    /** @deprecated use `PartyLegalNaturalPersonTaxpayerCertificationState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonTaxpayerCertificationStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonTaxpayerCertificationState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonTaxpayerCertificationStateOpen, z.ZodTypeDef, PartyLegalNaturalPersonTaxpayerCertificationStateOpen>;
}
/** @internal */
export declare const PartyLegalNaturalPersonUsTinStatus$inboundSchema: z.ZodType<PartyLegalNaturalPersonUsTinStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyLegalNaturalPersonUsTinStatus$outboundSchema: z.ZodType<PartyLegalNaturalPersonUsTinStatusOpen, z.ZodTypeDef, PartyLegalNaturalPersonUsTinStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonUsTinStatus$ {
    /** @deprecated use `PartyLegalNaturalPersonUsTinStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonUsTinStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonUsTinStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonUsTinStatusOpen, z.ZodTypeDef, PartyLegalNaturalPersonUsTinStatusOpen>;
}
/** @internal */
export declare const PartyLegalNaturalPersonWithholdingState$inboundSchema: z.ZodType<PartyLegalNaturalPersonWithholdingStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyLegalNaturalPersonWithholdingState$outboundSchema: z.ZodType<PartyLegalNaturalPersonWithholdingStateOpen, z.ZodTypeDef, PartyLegalNaturalPersonWithholdingStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonWithholdingState$ {
    /** @deprecated use `PartyLegalNaturalPersonWithholdingState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonWithholdingStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonWithholdingState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonWithholdingStateOpen, z.ZodTypeDef, PartyLegalNaturalPersonWithholdingStateOpen>;
}
/** @internal */
export declare const PartyLegalNaturalPersonTaxProfile$inboundSchema: z.ZodType<PartyLegalNaturalPersonTaxProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalNaturalPersonTaxProfile$Outbound = {
    c_notice_date?: PartyLegalNaturalPersonCNoticeDate$Outbound | null | undefined;
    federal_tax_classification?: string | undefined;
    first_b_notice_date?: PartyLegalNaturalPersonFirstBNoticeDate$Outbound | null | undefined;
    irs_form_type?: string | undefined;
    legal_tax_region_code?: string | undefined;
    reporting_eligibility?: string | undefined;
    tax_certification_date?: PartyLegalNaturalPersonTaxCertificationDate$Outbound | null | undefined;
    taxpayer_certification_state?: string | undefined;
    us_tin_status?: string | undefined;
    withholding_state?: string | undefined;
};
/** @internal */
export declare const PartyLegalNaturalPersonTaxProfile$outboundSchema: z.ZodType<PartyLegalNaturalPersonTaxProfile$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonTaxProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPersonTaxProfile$ {
    /** @deprecated use `PartyLegalNaturalPersonTaxProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPersonTaxProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPersonTaxProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPersonTaxProfile$Outbound, z.ZodTypeDef, PartyLegalNaturalPersonTaxProfile>;
    /** @deprecated use `PartyLegalNaturalPersonTaxProfile$Outbound` instead. */
    type Outbound = PartyLegalNaturalPersonTaxProfile$Outbound;
}
/** @internal */
export declare const PartyLegalNaturalPerson$inboundSchema: z.ZodType<PartyLegalNaturalPerson, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyLegalNaturalPerson$Outbound = {
    accredited_investor?: boolean | undefined;
    adviser?: boolean | undefined;
    birth_date?: PartyBirthDate$Outbound | null | undefined;
    citizenship_countries?: Array<string> | undefined;
    control_person_company_symbols?: string | undefined;
    correspondent_employee?: boolean | undefined;
    correspondent_id?: string | undefined;
    custodian_employee?: boolean | undefined;
    death_date?: PartyDeathDate$Outbound | null | undefined;
    doing_business_as?: Array<string> | undefined;
    employment?: PartyEmployment$Outbound | null | undefined;
    family_name?: string | undefined;
    finra_associated_entity?: string | undefined;
    foreign_identification?: PartyForeignIdentification$Outbound | null | undefined;
    given_name?: string | undefined;
    global_person_id?: string | undefined;
    identity_verification_result?: PartyIdentityVerificationResult$Outbound | null | undefined;
    institutional_customer?: boolean | undefined;
    investigation_id?: string | undefined;
    large_trader?: PartyLegalNaturalPersonLargeTrader$Outbound | null | undefined;
    legal_natural_person_id?: string | undefined;
    marital_status?: string | undefined;
    middle_names?: string | undefined;
    name?: string | undefined;
    name_suffix?: string | undefined;
    natural_person_fdd?: PartyNaturalPersonFdd$Outbound | null | undefined;
    non_citizen_residency?: PartyNonCitizenResidency$Outbound | null | undefined;
    personal_address?: PartyPersonalAddress$Outbound | null | undefined;
    politically_exposed_immediate_family_names?: Array<string> | undefined;
    politically_exposed_organization?: string | undefined;
    tax_id?: string | undefined;
    tax_id_last_four?: string | undefined;
    tax_id_type?: string | undefined;
    tax_profile?: PartyLegalNaturalPersonTaxProfile$Outbound | null | undefined;
};
/** @internal */
export declare const PartyLegalNaturalPerson$outboundSchema: z.ZodType<PartyLegalNaturalPerson$Outbound, z.ZodTypeDef, PartyLegalNaturalPerson>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyLegalNaturalPerson$ {
    /** @deprecated use `PartyLegalNaturalPerson$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyLegalNaturalPerson, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyLegalNaturalPerson$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyLegalNaturalPerson$Outbound, z.ZodTypeDef, PartyLegalNaturalPerson>;
    /** @deprecated use `PartyLegalNaturalPerson$Outbound` instead. */
    type Outbound = PartyLegalNaturalPerson$Outbound;
}
/** @internal */
export declare const PartyMailingAddress$inboundSchema: z.ZodType<PartyMailingAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyMailingAddress$Outbound = {
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
export declare const PartyMailingAddress$outboundSchema: z.ZodType<PartyMailingAddress$Outbound, z.ZodTypeDef, PartyMailingAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyMailingAddress$ {
    /** @deprecated use `PartyMailingAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyMailingAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyMailingAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyMailingAddress$Outbound, z.ZodTypeDef, PartyMailingAddress>;
    /** @deprecated use `PartyMailingAddress$Outbound` instead. */
    type Outbound = PartyMailingAddress$Outbound;
}
/** @internal */
export declare const PartyShortCode$inboundSchema: z.ZodType<PartyShortCode, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyShortCode$Outbound = {
    number?: string | undefined;
    region_code?: string | undefined;
};
/** @internal */
export declare const PartyShortCode$outboundSchema: z.ZodType<PartyShortCode$Outbound, z.ZodTypeDef, PartyShortCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyShortCode$ {
    /** @deprecated use `PartyShortCode$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyShortCode, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyShortCode$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyShortCode$Outbound, z.ZodTypeDef, PartyShortCode>;
    /** @deprecated use `PartyShortCode$Outbound` instead. */
    type Outbound = PartyShortCode$Outbound;
}
/** @internal */
export declare const PartyPhoneNumber$inboundSchema: z.ZodType<PartyPhoneNumber, z.ZodTypeDef, unknown>;
/** @internal */
export type PartyPhoneNumber$Outbound = {
    e164_number?: string | undefined;
    extension?: string | undefined;
    short_code?: PartyShortCode$Outbound | null | undefined;
};
/** @internal */
export declare const PartyPhoneNumber$outboundSchema: z.ZodType<PartyPhoneNumber$Outbound, z.ZodTypeDef, PartyPhoneNumber>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyPhoneNumber$ {
    /** @deprecated use `PartyPhoneNumber$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyPhoneNumber, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyPhoneNumber$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyPhoneNumber$Outbound, z.ZodTypeDef, PartyPhoneNumber>;
    /** @deprecated use `PartyPhoneNumber$Outbound` instead. */
    type Outbound = PartyPhoneNumber$Outbound;
}
/** @internal */
export declare const PartyProspectusDeliveryPreference$inboundSchema: z.ZodType<PartyProspectusDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyProspectusDeliveryPreference$outboundSchema: z.ZodType<PartyProspectusDeliveryPreferenceOpen, z.ZodTypeDef, PartyProspectusDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyProspectusDeliveryPreference$ {
    /** @deprecated use `PartyProspectusDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyProspectusDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyProspectusDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyProspectusDeliveryPreferenceOpen, z.ZodTypeDef, PartyProspectusDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyProxyDeliveryPreference$inboundSchema: z.ZodType<PartyProxyDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyProxyDeliveryPreference$outboundSchema: z.ZodType<PartyProxyDeliveryPreferenceOpen, z.ZodTypeDef, PartyProxyDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyProxyDeliveryPreference$ {
    /** @deprecated use `PartyProxyDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyProxyDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyProxyDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyProxyDeliveryPreferenceOpen, z.ZodTypeDef, PartyProxyDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyRelationType$inboundSchema: z.ZodType<PartyRelationTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyRelationType$outboundSchema: z.ZodType<PartyRelationTypeOpen, z.ZodTypeDef, PartyRelationTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyRelationType$ {
    /** @deprecated use `PartyRelationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyRelationTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyRelationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyRelationTypeOpen, z.ZodTypeDef, PartyRelationTypeOpen>;
}
/** @internal */
export declare const PartyStatementDeliveryPreference$inboundSchema: z.ZodType<PartyStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyStatementDeliveryPreference$outboundSchema: z.ZodType<PartyStatementDeliveryPreferenceOpen, z.ZodTypeDef, PartyStatementDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyStatementDeliveryPreference$ {
    /** @deprecated use `PartyStatementDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyStatementDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyStatementDeliveryPreferenceOpen, z.ZodTypeDef, PartyStatementDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyTaxDocumentDeliveryPreference$inboundSchema: z.ZodType<PartyTaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyTaxDocumentDeliveryPreference$outboundSchema: z.ZodType<PartyTaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, PartyTaxDocumentDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyTaxDocumentDeliveryPreference$ {
    /** @deprecated use `PartyTaxDocumentDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyTaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyTaxDocumentDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyTaxDocumentDeliveryPreferenceOpen, z.ZodTypeDef, PartyTaxDocumentDeliveryPreferenceOpen>;
}
/** @internal */
export declare const PartyTradeConfirmationDeliveryPreference$inboundSchema: z.ZodType<PartyTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PartyTradeConfirmationDeliveryPreference$outboundSchema: z.ZodType<PartyTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, PartyTradeConfirmationDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PartyTradeConfirmationDeliveryPreference$ {
    /** @deprecated use `PartyTradeConfirmationDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PartyTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PartyTradeConfirmationDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PartyTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, PartyTradeConfirmationDeliveryPreferenceOpen>;
}
/** @internal */
export declare const Party$inboundSchema: z.ZodType<Party, z.ZodTypeDef, unknown>;
/** @internal */
export type Party$Outbound = {
    email_address?: string | undefined;
    legal_entity?: PartyLegalEntity$Outbound | null | undefined;
    legal_natural_person?: PartyLegalNaturalPerson$Outbound | null | undefined;
    mailing_address?: PartyMailingAddress$Outbound | null | undefined;
    name?: string | undefined;
    party_id?: string | undefined;
    phone_number?: PartyPhoneNumber$Outbound | null | undefined;
    prospectus_delivery_preference?: string | undefined;
    proxy_delivery_preference?: string | undefined;
    relation_type?: string | undefined;
    statement_delivery_preference?: string | undefined;
    tax_document_delivery_preference?: string | undefined;
    trade_confirmation_delivery_preference?: string | undefined;
};
/** @internal */
export declare const Party$outboundSchema: z.ZodType<Party$Outbound, z.ZodTypeDef, Party>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Party$ {
    /** @deprecated use `Party$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Party, z.ZodTypeDef, unknown>;
    /** @deprecated use `Party$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Party$Outbound, z.ZodTypeDef, Party>;
    /** @deprecated use `Party$Outbound` instead. */
    type Outbound = Party$Outbound;
}
//# sourceMappingURL=party.d.ts.map