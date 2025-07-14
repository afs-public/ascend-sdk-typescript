import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DateUpdate, DateUpdate$Outbound } from "./dateupdate.js";
import { EmploymentUpdate, EmploymentUpdate$Outbound } from "./employmentupdate.js";
import { ForeignIdentificationUpdate, ForeignIdentificationUpdate$Outbound } from "./foreignidentificationupdate.js";
import { IdentityVerificationResultUpdate, IdentityVerificationResultUpdate$Outbound } from "./identityverificationresultupdate.js";
import { LargeTraderUpdate, LargeTraderUpdate$Outbound } from "./largetraderupdate.js";
import { NaturalPersonFddUpdate, NaturalPersonFddUpdate$Outbound } from "./naturalpersonfddupdate.js";
import { NonCitizenResidencyUpdate, NonCitizenResidencyUpdate$Outbound } from "./noncitizenresidencyupdate.js";
import { PostalAddressUpdate, PostalAddressUpdate$Outbound } from "./postaladdressupdate.js";
import { TaxProfileUpdate, TaxProfileUpdate$Outbound } from "./taxprofileupdate.js";
/**
 * The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.
 */
export declare enum LegalNaturalPersonUpdateMaritalStatus {
    MaritalStatusUnspecified = "MARITAL_STATUS_UNSPECIFIED",
    Single = "SINGLE",
    Married = "MARRIED",
    Divorced = "DIVORCED",
    Widowed = "WIDOWED"
}
/**
 * The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.
 */
export type LegalNaturalPersonUpdateMaritalStatusOpen = OpenEnum<typeof LegalNaturalPersonUpdateMaritalStatus>;
/**
 * The suffix of a natural person; A suffix in a name is any part of the name that comes after the last name
 */
export declare enum LegalNaturalPersonUpdateNameSuffix {
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
export type LegalNaturalPersonUpdateNameSuffixOpen = OpenEnum<typeof LegalNaturalPersonUpdateNameSuffix>;
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
 */
export declare enum LegalNaturalPersonUpdateTaxIdType {
    TaxIdTypeUnspecified = "TAX_ID_TYPE_UNSPECIFIED",
    TaxIdTypeSsn = "TAX_ID_TYPE_SSN",
    TaxIdTypeItin = "TAX_ID_TYPE_ITIN",
    TaxIdTypeEin = "TAX_ID_TYPE_EIN"
}
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
 */
export type LegalNaturalPersonUpdateTaxIdTypeOpen = OpenEnum<typeof LegalNaturalPersonUpdateTaxIdType>;
/**
 * A legal natural person. This represents the full set of data for an individual. A Customer Identification Program (CIP) may be run on legal natural persons.
 */
export type LegalNaturalPersonUpdate = {
    /**
     * Indicates whether the person is an accredited investor
     */
    accreditedInvestor?: boolean | undefined;
    /**
     * Indicates whether the person is an adviser
     */
    adviser?: boolean | undefined;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    birthDate?: DateUpdate | undefined;
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
     * Customer identification id returned by the customer identification service which represents a single instance of an identity verification outcome for the specified customer. This verification result will be used as part of the full investigation.
     */
    customerIdentificationId?: string | undefined;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    deathDate?: DateUpdate | undefined;
    /**
     * DBA (Doing Business As) names. Can list up to 5 associated with the Legal Natural Person
     */
    doingBusinessAs?: Array<string> | undefined;
    /**
     * Object containing information pertaining to a investor's current employer including the name, address, and duration of employment.
     */
    employment?: EmploymentUpdate | undefined;
    /**
     * Family name of a natural person.
     */
    familyName?: string | undefined;
    /**
     * The name of the FINRA-associated entity the underlying natural person is affiliated with.
     */
    finraAssociatedEntity?: string | undefined;
    /**
     * Foreign identification
     */
    foreignIdentification?: ForeignIdentificationUpdate | undefined;
    /**
     * The given name of a natural person; Conventionally known as 'first name' in most English-speaking countries.
     */
    givenName?: string | undefined;
    /**
     * An identity verification result that clients may supply. This result represents data and confirmation attesting to identity verification.
     */
    identityVerificationResult?: IdentityVerificationResultUpdate | undefined;
    /**
     * Indicates whether the person is an institutional customer
     */
    institutionalCustomer?: boolean | undefined;
    /**
     * A large trader.
     */
    largeTrader?: LargeTraderUpdate | undefined;
    /**
     * The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.
     */
    maritalStatus?: LegalNaturalPersonUpdateMaritalStatusOpen | undefined;
    /**
     * Non-primary names representing a natural person; Name attributed to a person other than "Given" and "Family" names.
     */
    middleNames?: string | undefined;
    /**
     * The suffix of a natural person; A suffix in a name is any part of the name that comes after the last name
     */
    nameSuffix?: LegalNaturalPersonUpdateNameSuffixOpen | undefined;
    /**
     * Foreign Due Diligence for Legal Natural Persons required when a Legal Natural Person is the Primary Owner on a non-resident/non-citizen Account.
     */
    naturalPersonFdd?: NaturalPersonFddUpdate | undefined;
    /**
     * Non Citizenship Residency to facilitate non-Citizen lawful US residents to open domestic accounts.
     */
    nonCitizenResidency?: NonCitizenResidencyUpdate | undefined;
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
    personalAddress?: PostalAddressUpdate | undefined;
    /**
     * A Party's self-disclosed list of names representing family members who are politically exposed.
     */
    politicallyExposedImmediateFamilyNames?: Array<string> | undefined;
    /**
     * A Party's self-disclosed list of named politically exposed organizations they are personally associated with.
     */
    politicallyExposedOrganization?: string | undefined;
    /**
     * Boolean indicator whether the LNP is subject to backup withholding
     */
    subjectToBackupWithholding?: boolean | undefined;
    /**
     * The full U.S. tax ID for a related person; Must be provided with `ITIN` or `SSN` tax ID type
     */
    taxId?: string | undefined;
    /**
     * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.
     */
    taxIdType?: LegalNaturalPersonUpdateTaxIdTypeOpen | undefined;
    /**
     * Tax Profile pertaining to the Legal Entity or Natural Person.
     */
    taxProfile?: TaxProfileUpdate | undefined;
};
/** @internal */
export declare const LegalNaturalPersonUpdateMaritalStatus$inboundSchema: z.ZodType<LegalNaturalPersonUpdateMaritalStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonUpdateMaritalStatus$outboundSchema: z.ZodType<LegalNaturalPersonUpdateMaritalStatusOpen, z.ZodTypeDef, LegalNaturalPersonUpdateMaritalStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonUpdateMaritalStatus$ {
    /** @deprecated use `LegalNaturalPersonUpdateMaritalStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonUpdateMaritalStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonUpdateMaritalStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonUpdateMaritalStatusOpen, z.ZodTypeDef, LegalNaturalPersonUpdateMaritalStatusOpen>;
}
/** @internal */
export declare const LegalNaturalPersonUpdateNameSuffix$inboundSchema: z.ZodType<LegalNaturalPersonUpdateNameSuffixOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonUpdateNameSuffix$outboundSchema: z.ZodType<LegalNaturalPersonUpdateNameSuffixOpen, z.ZodTypeDef, LegalNaturalPersonUpdateNameSuffixOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonUpdateNameSuffix$ {
    /** @deprecated use `LegalNaturalPersonUpdateNameSuffix$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonUpdateNameSuffixOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonUpdateNameSuffix$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonUpdateNameSuffixOpen, z.ZodTypeDef, LegalNaturalPersonUpdateNameSuffixOpen>;
}
/** @internal */
export declare const LegalNaturalPersonUpdateTaxIdType$inboundSchema: z.ZodType<LegalNaturalPersonUpdateTaxIdTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalNaturalPersonUpdateTaxIdType$outboundSchema: z.ZodType<LegalNaturalPersonUpdateTaxIdTypeOpen, z.ZodTypeDef, LegalNaturalPersonUpdateTaxIdTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonUpdateTaxIdType$ {
    /** @deprecated use `LegalNaturalPersonUpdateTaxIdType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonUpdateTaxIdTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonUpdateTaxIdType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonUpdateTaxIdTypeOpen, z.ZodTypeDef, LegalNaturalPersonUpdateTaxIdTypeOpen>;
}
/** @internal */
export declare const LegalNaturalPersonUpdate$inboundSchema: z.ZodType<LegalNaturalPersonUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type LegalNaturalPersonUpdate$Outbound = {
    accredited_investor?: boolean | undefined;
    adviser?: boolean | undefined;
    birth_date?: DateUpdate$Outbound | undefined;
    citizenship_countries?: Array<string> | undefined;
    control_person_company_symbols?: string | undefined;
    correspondent_employee?: boolean | undefined;
    correspondent_id?: string | undefined;
    customer_identification_id?: string | undefined;
    death_date?: DateUpdate$Outbound | undefined;
    doing_business_as?: Array<string> | undefined;
    employment?: EmploymentUpdate$Outbound | undefined;
    family_name?: string | undefined;
    finra_associated_entity?: string | undefined;
    foreign_identification?: ForeignIdentificationUpdate$Outbound | undefined;
    given_name?: string | undefined;
    identity_verification_result?: IdentityVerificationResultUpdate$Outbound | undefined;
    institutional_customer?: boolean | undefined;
    large_trader?: LargeTraderUpdate$Outbound | undefined;
    marital_status?: string | undefined;
    middle_names?: string | undefined;
    name_suffix?: string | undefined;
    natural_person_fdd?: NaturalPersonFddUpdate$Outbound | undefined;
    non_citizen_residency?: NonCitizenResidencyUpdate$Outbound | undefined;
    personal_address?: PostalAddressUpdate$Outbound | undefined;
    politically_exposed_immediate_family_names?: Array<string> | undefined;
    politically_exposed_organization?: string | undefined;
    subject_to_backup_withholding?: boolean | undefined;
    tax_id?: string | undefined;
    tax_id_type?: string | undefined;
    tax_profile?: TaxProfileUpdate$Outbound | undefined;
};
/** @internal */
export declare const LegalNaturalPersonUpdate$outboundSchema: z.ZodType<LegalNaturalPersonUpdate$Outbound, z.ZodTypeDef, LegalNaturalPersonUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalNaturalPersonUpdate$ {
    /** @deprecated use `LegalNaturalPersonUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalNaturalPersonUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalNaturalPersonUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalNaturalPersonUpdate$Outbound, z.ZodTypeDef, LegalNaturalPersonUpdate>;
    /** @deprecated use `LegalNaturalPersonUpdate$Outbound` instead. */
    type Outbound = LegalNaturalPersonUpdate$Outbound;
}
//# sourceMappingURL=legalnaturalpersonupdate.d.ts.map