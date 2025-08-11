import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DateUpdate, DateUpdate$Outbound } from "./dateupdate.js";
import { EntityDueDiligenceUpdate, EntityDueDiligenceUpdate$Outbound } from "./entityduediligenceupdate.js";
import { LargeTraderUpdate, LargeTraderUpdate$Outbound } from "./largetraderupdate.js";
import { PostalAddressUpdate, PostalAddressUpdate$Outbound } from "./postaladdressupdate.js";
import { TaxProfileUpdate, TaxProfileUpdate$Outbound } from "./taxprofileupdate.js";
export declare enum LegalEntityUpdateBusinessIndustrialClassification {
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
export type LegalEntityUpdateBusinessIndustrialClassificationOpen = OpenEnum<typeof LegalEntityUpdateBusinessIndustrialClassification>;
/**
 * Corporate structure of the entity.
 */
export declare enum LegalEntityUpdateCorporateStructure {
    EntityCorporateStructureUnspecified = "ENTITY_CORPORATE_STRUCTURE_UNSPECIFIED",
    CorporationCCorp = "CORPORATION_C_CORP",
    CorporationSCorp = "CORPORATION_S_CORP",
    CorporationBCorp = "CORPORATION_B_CORP",
    CorporationNonprofit = "CORPORATION_NONPROFIT"
}
/**
 * Corporate structure of the entity.
 */
export type LegalEntityUpdateCorporateStructureOpen = OpenEnum<typeof LegalEntityUpdateCorporateStructure>;
/**
 * The entity type.
 */
export declare enum LegalEntityUpdateEntityType {
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
export type LegalEntityUpdateEntityTypeOpen = OpenEnum<typeof LegalEntityUpdateEntityType>;
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
export declare enum LegalEntityUpdateExemptCustomerReason {
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
export type LegalEntityUpdateExemptCustomerReasonOpen = OpenEnum<typeof LegalEntityUpdateExemptCustomerReason>;
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
 */
export declare enum LegalEntityUpdateTaxIdType {
    TaxIdTypeUnspecified = "TAX_ID_TYPE_UNSPECIFIED",
    TaxIdTypeSsn = "TAX_ID_TYPE_SSN",
    TaxIdTypeItin = "TAX_ID_TYPE_ITIN",
    TaxIdTypeEin = "TAX_ID_TYPE_EIN"
}
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
 */
export type LegalEntityUpdateTaxIdTypeOpen = OpenEnum<typeof LegalEntityUpdateTaxIdType>;
/**
 * A legal entity. Legal entities are organizations, such as companies, that participate in financial transactions
 */
export type LegalEntityUpdate = {
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
    businessIndustrialClassification?: LegalEntityUpdateBusinessIndustrialClassificationOpen | undefined;
    /**
     * Corporate structure of the entity.
     */
    corporateStructure?: LegalEntityUpdateCorporateStructureOpen | undefined;
    /**
     * The correspondent id associated with the legal entity.
     */
    correspondentId?: string | undefined;
    /**
     * DBA (Doing Business As) names. Can list up to 5 associated with the Legal Entity
     */
    doingBusinessAs?: Array<string> | undefined;
    /**
     * Due Diligence for Legal Entities required when a Legal Entity is the Primary Owner on an Account.
     */
    entityDueDiligence?: EntityDueDiligenceUpdate | undefined;
    /**
     * The legal entity name.
     */
    entityName?: string | undefined;
    /**
     * The entity type.
     */
    entityType?: LegalEntityUpdateEntityTypeOpen | undefined;
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
    exemptCustomerReason?: LegalEntityUpdateExemptCustomerReasonOpen | undefined;
    /**
     * Indicates whether the entity is exempt from verifying beneficial owners and Enhanced Due Diligence. By default, this is set to `false`
     */
    exemptVerifyingBeneficialOwners?: boolean | undefined;
    /**
     * If the legal entity is a trust, they may set this field to convey ownership and value to a trustee.
     */
    forTheBenefitOf?: string | undefined;
    /**
     * Indicates whether the entity is a foreign financial institution. By default, this is set to `false`.
     */
    foreignFinancialInstitution?: boolean | undefined;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    formationDate?: DateUpdate | undefined;
    /**
     * Indicates whether the entity is an institutional customer
     */
    institutionalCustomer?: boolean | undefined;
    /**
     * A large trader.
     */
    largeTrader?: LargeTraderUpdate | undefined;
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains).
     *
     * @remarks
     *
     *  In typical usage an address would be created via user input or from importing existing data, depending on the type of process.
     *
     *  Advice on address input / editing: - Use an i18n-ready address widget such as  https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of  fields outside countries where that field is used.
     *
     *  For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    legalAddress?: PostalAddressUpdate | undefined;
    /**
     * The Legal Entity Identifier (LEI) is the financial industry term for a unique global identifier for legal entities participating in financial transactions
     */
    leiCode?: string | undefined;
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
     * Boolean indicator whether the LE is subject to backup withholding
     */
    subjectToBackupWithholding?: boolean | undefined;
    /**
     * The full U.S. tax ID for a related entity; Must be provided with `EIN` tax ID type
     */
    taxId?: string | undefined;
    /**
     * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
     */
    taxIdType?: LegalEntityUpdateTaxIdTypeOpen | undefined;
    /**
     * Tax Profile pertaining to the Legal Entity or Natural Person.
     */
    taxProfile?: TaxProfileUpdate | undefined;
};
/** @internal */
export declare const LegalEntityUpdateBusinessIndustrialClassification$inboundSchema: z.ZodType<LegalEntityUpdateBusinessIndustrialClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityUpdateBusinessIndustrialClassification$outboundSchema: z.ZodType<LegalEntityUpdateBusinessIndustrialClassificationOpen, z.ZodTypeDef, LegalEntityUpdateBusinessIndustrialClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityUpdateBusinessIndustrialClassification$ {
    /** @deprecated use `LegalEntityUpdateBusinessIndustrialClassification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityUpdateBusinessIndustrialClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityUpdateBusinessIndustrialClassification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityUpdateBusinessIndustrialClassificationOpen, z.ZodTypeDef, LegalEntityUpdateBusinessIndustrialClassificationOpen>;
}
/** @internal */
export declare const LegalEntityUpdateCorporateStructure$inboundSchema: z.ZodType<LegalEntityUpdateCorporateStructureOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityUpdateCorporateStructure$outboundSchema: z.ZodType<LegalEntityUpdateCorporateStructureOpen, z.ZodTypeDef, LegalEntityUpdateCorporateStructureOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityUpdateCorporateStructure$ {
    /** @deprecated use `LegalEntityUpdateCorporateStructure$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityUpdateCorporateStructureOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityUpdateCorporateStructure$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityUpdateCorporateStructureOpen, z.ZodTypeDef, LegalEntityUpdateCorporateStructureOpen>;
}
/** @internal */
export declare const LegalEntityUpdateEntityType$inboundSchema: z.ZodType<LegalEntityUpdateEntityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityUpdateEntityType$outboundSchema: z.ZodType<LegalEntityUpdateEntityTypeOpen, z.ZodTypeDef, LegalEntityUpdateEntityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityUpdateEntityType$ {
    /** @deprecated use `LegalEntityUpdateEntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityUpdateEntityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityUpdateEntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityUpdateEntityTypeOpen, z.ZodTypeDef, LegalEntityUpdateEntityTypeOpen>;
}
/** @internal */
export declare const LegalEntityUpdateExemptCustomerReason$inboundSchema: z.ZodType<LegalEntityUpdateExemptCustomerReasonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityUpdateExemptCustomerReason$outboundSchema: z.ZodType<LegalEntityUpdateExemptCustomerReasonOpen, z.ZodTypeDef, LegalEntityUpdateExemptCustomerReasonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityUpdateExemptCustomerReason$ {
    /** @deprecated use `LegalEntityUpdateExemptCustomerReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityUpdateExemptCustomerReasonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityUpdateExemptCustomerReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityUpdateExemptCustomerReasonOpen, z.ZodTypeDef, LegalEntityUpdateExemptCustomerReasonOpen>;
}
/** @internal */
export declare const LegalEntityUpdateTaxIdType$inboundSchema: z.ZodType<LegalEntityUpdateTaxIdTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalEntityUpdateTaxIdType$outboundSchema: z.ZodType<LegalEntityUpdateTaxIdTypeOpen, z.ZodTypeDef, LegalEntityUpdateTaxIdTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityUpdateTaxIdType$ {
    /** @deprecated use `LegalEntityUpdateTaxIdType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityUpdateTaxIdTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityUpdateTaxIdType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityUpdateTaxIdTypeOpen, z.ZodTypeDef, LegalEntityUpdateTaxIdTypeOpen>;
}
/** @internal */
export declare const LegalEntityUpdate$inboundSchema: z.ZodType<LegalEntityUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalEntityUpdate$Outbound = {
    accredited_investor?: boolean | undefined;
    adviser?: boolean | undefined;
    broker_dealer?: boolean | undefined;
    business_industrial_classification?: string | undefined;
    corporate_structure?: string | undefined;
    correspondent_id?: string | undefined;
    doing_business_as?: Array<string> | undefined;
    entity_due_diligence?: EntityDueDiligenceUpdate$Outbound | undefined;
    entity_name?: string | undefined;
    entity_type?: string | undefined;
    exempt_customer_reason?: string | undefined;
    exempt_verifying_beneficial_owners?: boolean | undefined;
    for_the_benefit_of?: string | undefined;
    foreign_financial_institution?: boolean | undefined;
    formation_date?: DateUpdate$Outbound | undefined;
    institutional_customer?: boolean | undefined;
    large_trader?: LargeTraderUpdate$Outbound | undefined;
    legal_address?: PostalAddressUpdate$Outbound | undefined;
    lei_code?: string | undefined;
    operating_regions?: Array<string> | undefined;
    registration_region?: string | undefined;
    regulated_investment_company?: boolean | undefined;
    related_document_ids?: Array<string> | undefined;
    revocable_trust?: boolean | undefined;
    subject_to_backup_withholding?: boolean | undefined;
    tax_id?: string | undefined;
    tax_id_type?: string | undefined;
    tax_profile?: TaxProfileUpdate$Outbound | undefined;
};
/** @internal */
export declare const LegalEntityUpdate$outboundSchema: z.ZodType<LegalEntityUpdate$Outbound, z.ZodTypeDef, LegalEntityUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalEntityUpdate$ {
    /** @deprecated use `LegalEntityUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalEntityUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalEntityUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalEntityUpdate$Outbound, z.ZodTypeDef, LegalEntityUpdate>;
    /** @deprecated use `LegalEntityUpdate$Outbound` instead. */
    type Outbound = LegalEntityUpdate$Outbound;
}
export declare function legalEntityUpdateToJSON(legalEntityUpdate: LegalEntityUpdate): string;
export declare function legalEntityUpdateFromJSON(jsonString: string): SafeParseResult<LegalEntityUpdate, SDKValidationError>;
//# sourceMappingURL=legalentityupdate.d.ts.map