import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The legal day, month, and year of birth for a beneficiary; Birth date is required if tax id and tax id type is not provided.
 */
export type BeneficiaryBirthDate = {
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
 * The entity type of the beneficiary; Required if the beneficiary is a legal entity.
 */
export declare enum BeneficiaryEntityType {
    EntityTypeUnspecified = "ENTITY_TYPE_UNSPECIFIED",
    Corporation = "CORPORATION",
    LimitedLiabilityCompany = "LIMITED_LIABILITY_COMPANY",
    Partnership = "PARTNERSHIP",
    Trust = "TRUST",
    Estate = "ESTATE"
}
/**
 * The entity type of the beneficiary; Required if the beneficiary is a legal entity.
 */
export type BeneficiaryEntityTypeOpen = OpenEnum<typeof BeneficiaryEntityType>;
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
export type MailingAddress = {
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
export type ShortCode = {
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
 * The phone number for a party; Lives on the party record in the context of the account and does not commute to other accounts held by/for the person
 */
export type PhoneNumber = {
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
    shortCode?: ShortCode | null | undefined;
};
/**
 * The relationship of the beneficiary to the account owner
 */
export declare enum BeneficiaryRelationType {
    RelationTypeUnspecified = "RELATION_TYPE_UNSPECIFIED",
    Spouse = "SPOUSE",
    Trust = "TRUST",
    Other = "OTHER"
}
/**
 * The relationship of the beneficiary to the account owner
 */
export type BeneficiaryRelationTypeOpen = OpenEnum<typeof BeneficiaryRelationType>;
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN. Tax id type is required if birth date is not provided.
 */
export declare enum BeneficiaryTaxIdType {
    TaxIdTypeUnspecified = "TAX_ID_TYPE_UNSPECIFIED",
    TaxIdTypeSsn = "TAX_ID_TYPE_SSN",
    TaxIdTypeItin = "TAX_ID_TYPE_ITIN",
    TaxIdTypeEin = "TAX_ID_TYPE_EIN"
}
/**
 * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN. Tax id type is required if birth date is not provided.
 */
export type BeneficiaryTaxIdTypeOpen = OpenEnum<typeof BeneficiaryTaxIdType>;
/**
 * The beneficiary for transfer on death.
 */
export type Beneficiary = {
    /**
     * An integer conveying the percentage of interest the related Beneficiary has in the account if the owner(s) become deceased; The sum of all beneficiary percentages must equal "100"
     */
    beneficiaryPercentage?: number | undefined;
    /**
     * The legal day, month, and year of birth for a beneficiary; Birth date is required if tax id and tax id type is not provided.
     */
    birthDate?: BeneficiaryBirthDate | null | undefined;
    /**
     * Beneficiaries may provide an email, a mailing_address, or both An email address indicated for account communications
     */
    email?: string | undefined;
    /**
     * The legal entity name; Required if the beneficiary is a legal entity.
     */
    entityName?: string | undefined;
    /**
     * The entity type of the beneficiary; Required if the beneficiary is a legal entity.
     */
    entityType?: BeneficiaryEntityTypeOpen | undefined;
    /**
     * Family name of a natural person; Required if the beneficiary is a natural person.
     */
    familyName?: string | undefined;
    /**
     * The given name of a natural person; Conventionally known as 'first name' in most English-speaking countries.Required if the beneficiary is a natural person.
     */
    givenName?: string | undefined;
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
    mailingAddress?: MailingAddress | null | undefined;
    /**
     * Non-primary names representing a natural person; Name attributed to a person other than "Given" and "Family" names.
     */
    middleNames?: string | undefined;
    /**
     * The phone number for a party; Lives on the party record in the context of the account and does not commute to other accounts held by/for the person
     */
    phoneNumber?: PhoneNumber | null | undefined;
    /**
     * The relationship of the beneficiary to the account owner
     */
    relationType?: BeneficiaryRelationTypeOpen | undefined;
    /**
     * The full U.S. tax ID for a related person; Tax ID is required if birth date is not provided.
     */
    taxId?: string | undefined;
    /**
     * The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN. Tax id type is required if birth date is not provided.
     */
    taxIdType?: BeneficiaryTaxIdTypeOpen | undefined;
};
/** @internal */
export declare const BeneficiaryBirthDate$inboundSchema: z.ZodType<BeneficiaryBirthDate, z.ZodTypeDef, unknown>;
/** @internal */
export type BeneficiaryBirthDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const BeneficiaryBirthDate$outboundSchema: z.ZodType<BeneficiaryBirthDate$Outbound, z.ZodTypeDef, BeneficiaryBirthDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryBirthDate$ {
    /** @deprecated use `BeneficiaryBirthDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryBirthDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryBirthDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryBirthDate$Outbound, z.ZodTypeDef, BeneficiaryBirthDate>;
    /** @deprecated use `BeneficiaryBirthDate$Outbound` instead. */
    type Outbound = BeneficiaryBirthDate$Outbound;
}
export declare function beneficiaryBirthDateToJSON(beneficiaryBirthDate: BeneficiaryBirthDate): string;
export declare function beneficiaryBirthDateFromJSON(jsonString: string): SafeParseResult<BeneficiaryBirthDate, SDKValidationError>;
/** @internal */
export declare const BeneficiaryEntityType$inboundSchema: z.ZodType<BeneficiaryEntityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BeneficiaryEntityType$outboundSchema: z.ZodType<BeneficiaryEntityTypeOpen, z.ZodTypeDef, BeneficiaryEntityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryEntityType$ {
    /** @deprecated use `BeneficiaryEntityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryEntityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryEntityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryEntityTypeOpen, z.ZodTypeDef, BeneficiaryEntityTypeOpen>;
}
/** @internal */
export declare const MailingAddress$inboundSchema: z.ZodType<MailingAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type MailingAddress$Outbound = {
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
export declare const MailingAddress$outboundSchema: z.ZodType<MailingAddress$Outbound, z.ZodTypeDef, MailingAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MailingAddress$ {
    /** @deprecated use `MailingAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MailingAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `MailingAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MailingAddress$Outbound, z.ZodTypeDef, MailingAddress>;
    /** @deprecated use `MailingAddress$Outbound` instead. */
    type Outbound = MailingAddress$Outbound;
}
export declare function mailingAddressToJSON(mailingAddress: MailingAddress): string;
export declare function mailingAddressFromJSON(jsonString: string): SafeParseResult<MailingAddress, SDKValidationError>;
/** @internal */
export declare const ShortCode$inboundSchema: z.ZodType<ShortCode, z.ZodTypeDef, unknown>;
/** @internal */
export type ShortCode$Outbound = {
    number?: string | undefined;
    region_code?: string | undefined;
};
/** @internal */
export declare const ShortCode$outboundSchema: z.ZodType<ShortCode$Outbound, z.ZodTypeDef, ShortCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ShortCode$ {
    /** @deprecated use `ShortCode$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ShortCode, z.ZodTypeDef, unknown>;
    /** @deprecated use `ShortCode$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ShortCode$Outbound, z.ZodTypeDef, ShortCode>;
    /** @deprecated use `ShortCode$Outbound` instead. */
    type Outbound = ShortCode$Outbound;
}
export declare function shortCodeToJSON(shortCode: ShortCode): string;
export declare function shortCodeFromJSON(jsonString: string): SafeParseResult<ShortCode, SDKValidationError>;
/** @internal */
export declare const PhoneNumber$inboundSchema: z.ZodType<PhoneNumber, z.ZodTypeDef, unknown>;
/** @internal */
export type PhoneNumber$Outbound = {
    e164_number?: string | undefined;
    extension?: string | undefined;
    short_code?: ShortCode$Outbound | null | undefined;
};
/** @internal */
export declare const PhoneNumber$outboundSchema: z.ZodType<PhoneNumber$Outbound, z.ZodTypeDef, PhoneNumber>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PhoneNumber$ {
    /** @deprecated use `PhoneNumber$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PhoneNumber, z.ZodTypeDef, unknown>;
    /** @deprecated use `PhoneNumber$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PhoneNumber$Outbound, z.ZodTypeDef, PhoneNumber>;
    /** @deprecated use `PhoneNumber$Outbound` instead. */
    type Outbound = PhoneNumber$Outbound;
}
export declare function phoneNumberToJSON(phoneNumber: PhoneNumber): string;
export declare function phoneNumberFromJSON(jsonString: string): SafeParseResult<PhoneNumber, SDKValidationError>;
/** @internal */
export declare const BeneficiaryRelationType$inboundSchema: z.ZodType<BeneficiaryRelationTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BeneficiaryRelationType$outboundSchema: z.ZodType<BeneficiaryRelationTypeOpen, z.ZodTypeDef, BeneficiaryRelationTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryRelationType$ {
    /** @deprecated use `BeneficiaryRelationType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryRelationTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryRelationType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryRelationTypeOpen, z.ZodTypeDef, BeneficiaryRelationTypeOpen>;
}
/** @internal */
export declare const BeneficiaryTaxIdType$inboundSchema: z.ZodType<BeneficiaryTaxIdTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BeneficiaryTaxIdType$outboundSchema: z.ZodType<BeneficiaryTaxIdTypeOpen, z.ZodTypeDef, BeneficiaryTaxIdTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryTaxIdType$ {
    /** @deprecated use `BeneficiaryTaxIdType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryTaxIdTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryTaxIdType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryTaxIdTypeOpen, z.ZodTypeDef, BeneficiaryTaxIdTypeOpen>;
}
/** @internal */
export declare const Beneficiary$inboundSchema: z.ZodType<Beneficiary, z.ZodTypeDef, unknown>;
/** @internal */
export type Beneficiary$Outbound = {
    beneficiary_percentage?: number | undefined;
    birth_date?: BeneficiaryBirthDate$Outbound | null | undefined;
    email?: string | undefined;
    entity_name?: string | undefined;
    entity_type?: string | undefined;
    family_name?: string | undefined;
    given_name?: string | undefined;
    mailing_address?: MailingAddress$Outbound | null | undefined;
    middle_names?: string | undefined;
    phone_number?: PhoneNumber$Outbound | null | undefined;
    relation_type?: string | undefined;
    tax_id?: string | undefined;
    tax_id_type?: string | undefined;
};
/** @internal */
export declare const Beneficiary$outboundSchema: z.ZodType<Beneficiary$Outbound, z.ZodTypeDef, Beneficiary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Beneficiary$ {
    /** @deprecated use `Beneficiary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Beneficiary, z.ZodTypeDef, unknown>;
    /** @deprecated use `Beneficiary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Beneficiary$Outbound, z.ZodTypeDef, Beneficiary>;
    /** @deprecated use `Beneficiary$Outbound` instead. */
    type Outbound = Beneficiary$Outbound;
}
export declare function beneficiaryToJSON(beneficiary: Beneficiary): string;
export declare function beneficiaryFromJSON(jsonString: string): SafeParseResult<Beneficiary, SDKValidationError>;
//# sourceMappingURL=beneficiary.d.ts.map