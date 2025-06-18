import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
export declare enum LegalEntityBusinessIndustrialClassification {
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
export type LegalEntityBusinessIndustrialClassificationOpen = OpenEnum<typeof LegalEntityBusinessIndustrialClassification>;
/**
 * Corporate structure of the entity.
 */
export declare enum LegalEntityCorporateStructure {
    EntityCorporateStructureUnspecified = "ENTITY_CORPORATE_STRUCTURE_UNSPECIFIED",
    CorporationCCorp = "CORPORATION_C_CORP",
    CorporationSCorp = "CORPORATION_S_CORP",
    CorporationBCorp = "CORPORATION_B_CORP",
    CorporationNonprofit = "CORPORATION_NONPROFIT"
}
/**
 * Corporate structure of the entity.
 */
export type LegalEntityCorporateStructureOpen = OpenEnum<typeof LegalEntityCorporateStructure>;
/**
 * Information about any negative news against related parties and entities
 */
export type LegalEntityNegativeNews = {
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
export type EntityDueDiligence = {
    /**
     * Indicates whether the entity issues bearer shares
     */
    entityIssuesBearerShares?: boolean | undefined;
    /**
     * Information about any negative news against related parties and entities
     */
    negativeNews?: LegalEntityNegativeNews | null | undefined;
};
/**
 * The entity type.
 */
export declare enum LegalEntityEntityType {
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
export type LegalEntityEntityTypeOpen = OpenEnum<typeof LegalEntityEntityType>;
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
export declare enum LegalEntityExemptCustomerReason {
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
export type LegalEntityExemptCustomerReasonOpen = OpenEnum<typeof LegalEntityExemptCustomerReason>;
/**
 * If the legal entity is a trust, the formation date is required.
 */
export type FormationDate = {
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
export type LegalEntityEffectiveDate = {
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
export type LegalEntityLargeTrader = {
    /**
     * The date on which the trader meets or exceeds the large trader reporting threshold, which is defined by the U.S. Securities and Exchange Commission (SEC) as trades of 2 million shares or $20 million in a single day or 20 million shares or $200 million during a calendar month
     */
    effectiveDate?: LegalEntityEffectiveDate | null | undefined;
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
export type LegalAddress = {
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
export declare enum LegalEntityTaxIdType {
    TaxIdTypeUnspecified = "TAX_ID_TYPE_UNSPECIFIED",
    TaxIdTypeSsn = "TAX_ID_TYPE_SSN",
    TaxIdTypeItin = "TAX_ID_TYPE_ITIN",
    TaxIdTypeEin = "TAX_ID_TYPE_EIN"
}
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
 */
export type LegalEntityTaxIdTypeOpen = OpenEnum<typeof LegalEntityTaxIdType>;
/**
 * C Notice date.
 */
export type LegalEntityCNoticeDate = {
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
export declare enum LegalEntityFederalTaxClassification {
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
export type LegalEntityFederalTaxClassificationOpen = OpenEnum<typeof LegalEntityFederalTaxClassification>;
/**
 * Initial B Notice date.
 */
export type LegalEntityFirstBNoticeDate = {
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
export declare enum LegalEntityIrsFormType {
    IrsFormTypeUnspecified = "IRS_FORM_TYPE_UNSPECIFIED",
    W9 = "W_9",
    W8Ben = "W_8BEN"
}
/**
 * IRS form type.
 */
export type LegalEntityIrsFormTypeOpen = OpenEnum<typeof LegalEntityIrsFormType>;
/**
 * Tax reporting eligibility.
 */
export declare enum LegalEntityReportingEligibility {
    TaxReportingEligibilityUnspecified = "TAX_REPORTING_ELIGIBILITY_UNSPECIFIED",
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
}
/**
 * Tax reporting eligibility.
 */
export type LegalEntityReportingEligibilityOpen = OpenEnum<typeof LegalEntityReportingEligibility>;
/**
 * Tax Certification date.
 */
export type LegalEntityTaxCertificationDate = {
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
export declare enum LegalEntityTaxpayerCertificationState {
    TaxpayerCertificationStateUnspecified = "TAXPAYER_CERTIFICATION_STATE_UNSPECIFIED",
    Certified = "CERTIFIED",
    Uncertified = "UNCERTIFIED"
}
/**
 * Taxpayer certification status.
 */
export type LegalEntityTaxpayerCertificationStateOpen = OpenEnum<typeof LegalEntityTaxpayerCertificationState>;
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export declare enum LegalEntityUsTinStatus {
    UsTinStatusUnspecified = "US_TIN_STATUS_UNSPECIFIED",
    Passing = "PASSING",
    Failing = "FAILING"
}
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export type LegalEntityUsTinStatusOpen = OpenEnum<typeof LegalEntityUsTinStatus>;
/**
 * B/C Notice status.
 */
export declare enum LegalEntityWithholdingState {
    WithholdingStateUnspecified = "WITHHOLDING_STATE_UNSPECIFIED",
    FirstBNoticeReceived = "FIRST_B_NOTICE_RECEIVED",
    SecondBNoticeReceived = "SECOND_B_NOTICE_RECEIVED",
    CNoticeReceived = "C_NOTICE_RECEIVED",
    CNoticeIndicatedByCustomer = "C_NOTICE_INDICATED_BY_CUSTOMER"
}
/**
 * B/C Notice status.
 */
export type LegalEntityWithholdingStateOpen = OpenEnum<typeof LegalEntityWithholdingState>;
/**
 * The tax profile for the legal entity.
 */
export type LegalEntityTaxProfile = {
    /**
     * C Notice date.
     */
    cNoticeDate?: LegalEntityCNoticeDate | null | undefined;
    /**
     * Federal tax classification.
     */
    federalTaxClassification?: LegalEntityFederalTaxClassificationOpen | undefined;
    /**
     * Initial B Notice date.
     */
    firstBNoticeDate?: LegalEntityFirstBNoticeDate | null | undefined;
    /**
     * IRS form type.
     */
    irsFormType?: LegalEntityIrsFormTypeOpen | undefined;
    /**
     * Legal tax region must be "US" if provided W-9, otherwise must be a non-US country.
     */
    legalTaxRegionCode?: string | undefined;
    /**
     * Tax reporting eligibility.
     */
    reportingEligibility?: LegalEntityReportingEligibilityOpen | undefined;
    /**
     * Tax Certification date.
     */
    taxCertificationDate?: LegalEntityTaxCertificationDate | null | undefined;
    /**
     * Taxpayer certification status.
     */
    taxpayerCertificationState?: LegalEntityTaxpayerCertificationStateOpen | undefined;
    /**
     * United States Individual Taxpayer Identification Number (ITIN) status.
     */
    usTinStatus?: LegalEntityUsTinStatusOpen | undefined;
    /**
     * B/C Notice status.
     */
    withholdingState?: LegalEntityWithholdingStateOpen | undefined;
};
/**
 * A legal entity. Legal entities are organizations, such as companies, that participate in financial transactions
 */
export type LegalEntity = {
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
    businessIndustrialClassification?: LegalEntityBusinessIndustrialClassificationOpen | undefined;
    /**
     * Corporate structure of the entity.
     */
    corporateStructure?: LegalEntityCorporateStructureOpen | undefined;
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
    entityDueDiligence?: EntityDueDiligence | null | undefined;
    /**
     * The legal entity name.
     */
    entityName?: string | undefined;
    /**
     * The entity type.
     */
    entityType?: LegalEntityEntityTypeOpen | undefined;
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
    exemptCustomerReason?: LegalEntityExemptCustomerReasonOpen | undefined;
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
    formationDate?: FormationDate | null | undefined;
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
    largeTrader?: LegalEntityLargeTrader | null | undefined;
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
    legalAddress?: LegalAddress | null | undefined;
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
    taxIdType?: LegalEntityTaxIdTypeOpen | undefined;
    /**
     * The tax profile for the legal entity.
     */
    taxProfile?: LegalEntityTaxProfile | null | undefined;
};
/** @internal */
export declare const LegalEntityBusinessIndustrialClassification$inboundSchema: z.ZodType<LegalEntityBusinessIndustrialClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityBusinessIndustrialClassification$outboundSchema: z.ZodType<LegalEntityBusinessIndustrialClassificationOpen, z.ZodTypeDef, LegalEntityBusinessIndustrialClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityBusinessIndustrialClassification$ {
    /** @deprecated use `LegalEntityBusinessIndustrialClassification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityBusinessIndustrialClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityBusinessIndustrialClassification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityBusinessIndustrialClassificationOpen, z.ZodTypeDef, LegalEntityBusinessIndustrialClassificationOpen>;
}
/** @internal */
export declare const LegalEntityCorporateStructure$inboundSchema: z.ZodType<LegalEntityCorporateStructureOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityCorporateStructure$outboundSchema: z.ZodType<LegalEntityCorporateStructureOpen, z.ZodTypeDef, LegalEntityCorporateStructureOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityCorporateStructure$ {
    /** @deprecated use `LegalEntityCorporateStructure$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityCorporateStructureOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityCorporateStructure$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityCorporateStructureOpen, z.ZodTypeDef, LegalEntityCorporateStructureOpen>;
}
/** @internal */
export declare const LegalEntityNegativeNews$inboundSchema: z.ZodType<LegalEntityNegativeNews, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalEntityNegativeNews$Outbound = {
    negative_news_against_related_parties?: boolean | undefined;
    negative_news_against_related_parties_description?: string | undefined;
};
/** @internal */
export declare const LegalEntityNegativeNews$outboundSchema: z.ZodType<LegalEntityNegativeNews$Outbound, z.ZodTypeDef, LegalEntityNegativeNews>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityNegativeNews$ {
    /** @deprecated use `LegalEntityNegativeNews$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityNegativeNews, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityNegativeNews$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityNegativeNews$Outbound, z.ZodTypeDef, LegalEntityNegativeNews>;
    /** @deprecated use `LegalEntityNegativeNews$Outbound` instead. */
    type Outbound = LegalEntityNegativeNews$Outbound;
}
/** @internal */
export declare const EntityDueDiligence$inboundSchema: z.ZodType<EntityDueDiligence, z.ZodTypeDef, unknown>;
/** @internal */
export type EntityDueDiligence$Outbound = {
    entity_issues_bearer_shares?: boolean | undefined;
    negative_news?: LegalEntityNegativeNews$Outbound | null | undefined;
};
/** @internal */
export declare const EntityDueDiligence$outboundSchema: z.ZodType<EntityDueDiligence$Outbound, z.ZodTypeDef, EntityDueDiligence>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntityDueDiligence$ {
    /** @deprecated use `EntityDueDiligence$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntityDueDiligence, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntityDueDiligence$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntityDueDiligence$Outbound, z.ZodTypeDef, EntityDueDiligence>;
    /** @deprecated use `EntityDueDiligence$Outbound` instead. */
    type Outbound = EntityDueDiligence$Outbound;
}
/** @internal */
export declare const LegalEntityEntityType$inboundSchema: z.ZodType<LegalEntityEntityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityEntityType$outboundSchema: z.ZodType<LegalEntityEntityTypeOpen, z.ZodTypeDef, LegalEntityEntityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityEntityType$ {
    /** @deprecated use `LegalEntityEntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityEntityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityEntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityEntityTypeOpen, z.ZodTypeDef, LegalEntityEntityTypeOpen>;
}
/** @internal */
export declare const LegalEntityExemptCustomerReason$inboundSchema: z.ZodType<LegalEntityExemptCustomerReasonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityExemptCustomerReason$outboundSchema: z.ZodType<LegalEntityExemptCustomerReasonOpen, z.ZodTypeDef, LegalEntityExemptCustomerReasonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityExemptCustomerReason$ {
    /** @deprecated use `LegalEntityExemptCustomerReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityExemptCustomerReasonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityExemptCustomerReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityExemptCustomerReasonOpen, z.ZodTypeDef, LegalEntityExemptCustomerReasonOpen>;
}
/** @internal */
export declare const FormationDate$inboundSchema: z.ZodType<FormationDate, z.ZodTypeDef, unknown>;
/** @internal */
export type FormationDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const FormationDate$outboundSchema: z.ZodType<FormationDate$Outbound, z.ZodTypeDef, FormationDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormationDate$ {
    /** @deprecated use `FormationDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormationDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormationDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormationDate$Outbound, z.ZodTypeDef, FormationDate>;
    /** @deprecated use `FormationDate$Outbound` instead. */
    type Outbound = FormationDate$Outbound;
}
/** @internal */
export declare const LegalEntityEffectiveDate$inboundSchema: z.ZodType<LegalEntityEffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalEntityEffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const LegalEntityEffectiveDate$outboundSchema: z.ZodType<LegalEntityEffectiveDate$Outbound, z.ZodTypeDef, LegalEntityEffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityEffectiveDate$ {
    /** @deprecated use `LegalEntityEffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityEffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityEffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityEffectiveDate$Outbound, z.ZodTypeDef, LegalEntityEffectiveDate>;
    /** @deprecated use `LegalEntityEffectiveDate$Outbound` instead. */
    type Outbound = LegalEntityEffectiveDate$Outbound;
}
/** @internal */
export declare const LegalEntityLargeTrader$inboundSchema: z.ZodType<LegalEntityLargeTrader, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalEntityLargeTrader$Outbound = {
    effective_date?: LegalEntityEffectiveDate$Outbound | null | undefined;
    large_trader_id?: string | undefined;
};
/** @internal */
export declare const LegalEntityLargeTrader$outboundSchema: z.ZodType<LegalEntityLargeTrader$Outbound, z.ZodTypeDef, LegalEntityLargeTrader>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityLargeTrader$ {
    /** @deprecated use `LegalEntityLargeTrader$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityLargeTrader, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityLargeTrader$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityLargeTrader$Outbound, z.ZodTypeDef, LegalEntityLargeTrader>;
    /** @deprecated use `LegalEntityLargeTrader$Outbound` instead. */
    type Outbound = LegalEntityLargeTrader$Outbound;
}
/** @internal */
export declare const LegalAddress$inboundSchema: z.ZodType<LegalAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalAddress$Outbound = {
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
export declare const LegalAddress$outboundSchema: z.ZodType<LegalAddress$Outbound, z.ZodTypeDef, LegalAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalAddress$ {
    /** @deprecated use `LegalAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalAddress$Outbound, z.ZodTypeDef, LegalAddress>;
    /** @deprecated use `LegalAddress$Outbound` instead. */
    type Outbound = LegalAddress$Outbound;
}
/** @internal */
export declare const LegalEntityTaxIdType$inboundSchema: z.ZodType<LegalEntityTaxIdTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityTaxIdType$outboundSchema: z.ZodType<LegalEntityTaxIdTypeOpen, z.ZodTypeDef, LegalEntityTaxIdTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityTaxIdType$ {
    /** @deprecated use `LegalEntityTaxIdType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityTaxIdTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityTaxIdType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityTaxIdTypeOpen, z.ZodTypeDef, LegalEntityTaxIdTypeOpen>;
}
/** @internal */
export declare const LegalEntityCNoticeDate$inboundSchema: z.ZodType<LegalEntityCNoticeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalEntityCNoticeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const LegalEntityCNoticeDate$outboundSchema: z.ZodType<LegalEntityCNoticeDate$Outbound, z.ZodTypeDef, LegalEntityCNoticeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityCNoticeDate$ {
    /** @deprecated use `LegalEntityCNoticeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityCNoticeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityCNoticeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityCNoticeDate$Outbound, z.ZodTypeDef, LegalEntityCNoticeDate>;
    /** @deprecated use `LegalEntityCNoticeDate$Outbound` instead. */
    type Outbound = LegalEntityCNoticeDate$Outbound;
}
/** @internal */
export declare const LegalEntityFederalTaxClassification$inboundSchema: z.ZodType<LegalEntityFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityFederalTaxClassification$outboundSchema: z.ZodType<LegalEntityFederalTaxClassificationOpen, z.ZodTypeDef, LegalEntityFederalTaxClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityFederalTaxClassification$ {
    /** @deprecated use `LegalEntityFederalTaxClassification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityFederalTaxClassification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityFederalTaxClassificationOpen, z.ZodTypeDef, LegalEntityFederalTaxClassificationOpen>;
}
/** @internal */
export declare const LegalEntityFirstBNoticeDate$inboundSchema: z.ZodType<LegalEntityFirstBNoticeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalEntityFirstBNoticeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const LegalEntityFirstBNoticeDate$outboundSchema: z.ZodType<LegalEntityFirstBNoticeDate$Outbound, z.ZodTypeDef, LegalEntityFirstBNoticeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityFirstBNoticeDate$ {
    /** @deprecated use `LegalEntityFirstBNoticeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityFirstBNoticeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityFirstBNoticeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityFirstBNoticeDate$Outbound, z.ZodTypeDef, LegalEntityFirstBNoticeDate>;
    /** @deprecated use `LegalEntityFirstBNoticeDate$Outbound` instead. */
    type Outbound = LegalEntityFirstBNoticeDate$Outbound;
}
/** @internal */
export declare const LegalEntityIrsFormType$inboundSchema: z.ZodType<LegalEntityIrsFormTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityIrsFormType$outboundSchema: z.ZodType<LegalEntityIrsFormTypeOpen, z.ZodTypeDef, LegalEntityIrsFormTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityIrsFormType$ {
    /** @deprecated use `LegalEntityIrsFormType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityIrsFormTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityIrsFormType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityIrsFormTypeOpen, z.ZodTypeDef, LegalEntityIrsFormTypeOpen>;
}
/** @internal */
export declare const LegalEntityReportingEligibility$inboundSchema: z.ZodType<LegalEntityReportingEligibilityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityReportingEligibility$outboundSchema: z.ZodType<LegalEntityReportingEligibilityOpen, z.ZodTypeDef, LegalEntityReportingEligibilityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityReportingEligibility$ {
    /** @deprecated use `LegalEntityReportingEligibility$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityReportingEligibilityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityReportingEligibility$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityReportingEligibilityOpen, z.ZodTypeDef, LegalEntityReportingEligibilityOpen>;
}
/** @internal */
export declare const LegalEntityTaxCertificationDate$inboundSchema: z.ZodType<LegalEntityTaxCertificationDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalEntityTaxCertificationDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const LegalEntityTaxCertificationDate$outboundSchema: z.ZodType<LegalEntityTaxCertificationDate$Outbound, z.ZodTypeDef, LegalEntityTaxCertificationDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityTaxCertificationDate$ {
    /** @deprecated use `LegalEntityTaxCertificationDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityTaxCertificationDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityTaxCertificationDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityTaxCertificationDate$Outbound, z.ZodTypeDef, LegalEntityTaxCertificationDate>;
    /** @deprecated use `LegalEntityTaxCertificationDate$Outbound` instead. */
    type Outbound = LegalEntityTaxCertificationDate$Outbound;
}
/** @internal */
export declare const LegalEntityTaxpayerCertificationState$inboundSchema: z.ZodType<LegalEntityTaxpayerCertificationStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityTaxpayerCertificationState$outboundSchema: z.ZodType<LegalEntityTaxpayerCertificationStateOpen, z.ZodTypeDef, LegalEntityTaxpayerCertificationStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityTaxpayerCertificationState$ {
    /** @deprecated use `LegalEntityTaxpayerCertificationState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityTaxpayerCertificationStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityTaxpayerCertificationState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityTaxpayerCertificationStateOpen, z.ZodTypeDef, LegalEntityTaxpayerCertificationStateOpen>;
}
/** @internal */
export declare const LegalEntityUsTinStatus$inboundSchema: z.ZodType<LegalEntityUsTinStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityUsTinStatus$outboundSchema: z.ZodType<LegalEntityUsTinStatusOpen, z.ZodTypeDef, LegalEntityUsTinStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityUsTinStatus$ {
    /** @deprecated use `LegalEntityUsTinStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityUsTinStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityUsTinStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityUsTinStatusOpen, z.ZodTypeDef, LegalEntityUsTinStatusOpen>;
}
/** @internal */
export declare const LegalEntityWithholdingState$inboundSchema: z.ZodType<LegalEntityWithholdingStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityWithholdingState$outboundSchema: z.ZodType<LegalEntityWithholdingStateOpen, z.ZodTypeDef, LegalEntityWithholdingStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityWithholdingState$ {
    /** @deprecated use `LegalEntityWithholdingState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityWithholdingStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityWithholdingState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityWithholdingStateOpen, z.ZodTypeDef, LegalEntityWithholdingStateOpen>;
}
/** @internal */
export declare const LegalEntityTaxProfile$inboundSchema: z.ZodType<LegalEntityTaxProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalEntityTaxProfile$Outbound = {
    c_notice_date?: LegalEntityCNoticeDate$Outbound | null | undefined;
    federal_tax_classification?: string | undefined;
    first_b_notice_date?: LegalEntityFirstBNoticeDate$Outbound | null | undefined;
    irs_form_type?: string | undefined;
    legal_tax_region_code?: string | undefined;
    reporting_eligibility?: string | undefined;
    tax_certification_date?: LegalEntityTaxCertificationDate$Outbound | null | undefined;
    taxpayer_certification_state?: string | undefined;
    us_tin_status?: string | undefined;
    withholding_state?: string | undefined;
};
/** @internal */
export declare const LegalEntityTaxProfile$outboundSchema: z.ZodType<LegalEntityTaxProfile$Outbound, z.ZodTypeDef, LegalEntityTaxProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityTaxProfile$ {
    /** @deprecated use `LegalEntityTaxProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityTaxProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityTaxProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityTaxProfile$Outbound, z.ZodTypeDef, LegalEntityTaxProfile>;
    /** @deprecated use `LegalEntityTaxProfile$Outbound` instead. */
    type Outbound = LegalEntityTaxProfile$Outbound;
}
/** @internal */
export declare const LegalEntity$inboundSchema: z.ZodType<LegalEntity, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalEntity$Outbound = {
    accredited_investor?: boolean | undefined;
    adviser?: boolean | undefined;
    broker_dealer?: boolean | undefined;
    business_industrial_classification?: string | undefined;
    corporate_structure?: string | undefined;
    correspondent_id?: string | undefined;
    doing_business_as?: Array<string> | undefined;
    entity_due_diligence?: EntityDueDiligence$Outbound | null | undefined;
    entity_name?: string | undefined;
    entity_type?: string | undefined;
    exempt_customer_reason?: string | undefined;
    exempt_verifying_beneficial_owners?: boolean | undefined;
    for_the_benefit_of?: string | undefined;
    foreign_entity?: boolean | undefined;
    foreign_financial_institution?: boolean | undefined;
    formation_date?: FormationDate$Outbound | null | undefined;
    global_person_id?: string | undefined;
    institutional_customer?: boolean | undefined;
    investigation_id?: string | undefined;
    large_trader?: LegalEntityLargeTrader$Outbound | null | undefined;
    legal_address?: LegalAddress$Outbound | null | undefined;
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
    tax_profile?: LegalEntityTaxProfile$Outbound | null | undefined;
};
/** @internal */
export declare const LegalEntity$outboundSchema: z.ZodType<LegalEntity$Outbound, z.ZodTypeDef, LegalEntity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntity$ {
    /** @deprecated use `LegalEntity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntity, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntity$Outbound, z.ZodTypeDef, LegalEntity>;
    /** @deprecated use `LegalEntity$Outbound` instead. */
    type Outbound = LegalEntity$Outbound;
}
//# sourceMappingURL=legalentity.d.ts.map