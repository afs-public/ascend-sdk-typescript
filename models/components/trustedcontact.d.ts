import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The object containing data for the purpose of delivery physical mailings to a party; Typically used for statements, account updates, tax documents, and other postal mailings; May also be used as an alternative identity verification address to personalAddress. If input, the required fields within the `mailing_address` object include:
 *
 * @remarks
 *  - `administrative_area`
 *  - `region_code` - 2 character CLDR Code
 *  - `postal_code`
 *  - `locality`
 *  - `address_lines` - max 5 lines
 */
export type TrustedContactMailingAddress = {
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
export type TrustedContactShortCode = {
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
 * The phone number for a party; this value exists on the party record in the context of the account and does not commute to other accounts held by/for the person
 */
export type TrustedContactPhoneNumber = {
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
    shortCode?: TrustedContactShortCode | null | undefined;
};
/**
 * A Trusted Contact is a person designated to verify the well being of the account holder. Only one form of contact information is required; An account may contain zero, one, or many.
 */
export type TrustedContact = {
    /**
     * An email address indicated for account communications.
     */
    emailAddress?: string | undefined;
    /**
     * Family name of a natural person.
     */
    familyName?: string | undefined;
    /**
     * The given name of a natural person; Conventionally known as 'first name' in most English-speaking countries.
     */
    givenName?: string | undefined;
    /**
     * The object containing data for the purpose of delivery physical mailings to a party; Typically used for statements, account updates, tax documents, and other postal mailings; May also be used as an alternative identity verification address to personalAddress. If input, the required fields within the `mailing_address` object include:
     *
     * @remarks
     *  - `administrative_area`
     *  - `region_code` - 2 character CLDR Code
     *  - `postal_code`
     *  - `locality`
     *  - `address_lines` - max 5 lines
     */
    mailingAddress?: TrustedContactMailingAddress | null | undefined;
    /**
     * Non-primary names representing a natural person; Name attributed to a person other than "Given" and "Family" names.
     */
    middleNames?: string | undefined;
    /**
     * The name field Format: {parent=account/*}/{name=trustedContacts/*}
     */
    name?: string | undefined;
    /**
     * The phone number for a party; this value exists on the party record in the context of the account and does not commute to other accounts held by/for the person
     */
    phoneNumber?: TrustedContactPhoneNumber | null | undefined;
    /**
     * A system-generated unique identifier referencing a Trusted Contact person on an account; Used to access the record after creation
     */
    trustedContactId?: string | undefined;
};
/** @internal */
export declare const TrustedContactMailingAddress$inboundSchema: z.ZodType<TrustedContactMailingAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type TrustedContactMailingAddress$Outbound = {
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
export declare const TrustedContactMailingAddress$outboundSchema: z.ZodType<TrustedContactMailingAddress$Outbound, z.ZodTypeDef, TrustedContactMailingAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TrustedContactMailingAddress$ {
    /** @deprecated use `TrustedContactMailingAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TrustedContactMailingAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `TrustedContactMailingAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TrustedContactMailingAddress$Outbound, z.ZodTypeDef, TrustedContactMailingAddress>;
    /** @deprecated use `TrustedContactMailingAddress$Outbound` instead. */
    type Outbound = TrustedContactMailingAddress$Outbound;
}
export declare function trustedContactMailingAddressToJSON(trustedContactMailingAddress: TrustedContactMailingAddress): string;
export declare function trustedContactMailingAddressFromJSON(jsonString: string): SafeParseResult<TrustedContactMailingAddress, SDKValidationError>;
/** @internal */
export declare const TrustedContactShortCode$inboundSchema: z.ZodType<TrustedContactShortCode, z.ZodTypeDef, unknown>;
/** @internal */
export type TrustedContactShortCode$Outbound = {
    number?: string | undefined;
    region_code?: string | undefined;
};
/** @internal */
export declare const TrustedContactShortCode$outboundSchema: z.ZodType<TrustedContactShortCode$Outbound, z.ZodTypeDef, TrustedContactShortCode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TrustedContactShortCode$ {
    /** @deprecated use `TrustedContactShortCode$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TrustedContactShortCode, z.ZodTypeDef, unknown>;
    /** @deprecated use `TrustedContactShortCode$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TrustedContactShortCode$Outbound, z.ZodTypeDef, TrustedContactShortCode>;
    /** @deprecated use `TrustedContactShortCode$Outbound` instead. */
    type Outbound = TrustedContactShortCode$Outbound;
}
export declare function trustedContactShortCodeToJSON(trustedContactShortCode: TrustedContactShortCode): string;
export declare function trustedContactShortCodeFromJSON(jsonString: string): SafeParseResult<TrustedContactShortCode, SDKValidationError>;
/** @internal */
export declare const TrustedContactPhoneNumber$inboundSchema: z.ZodType<TrustedContactPhoneNumber, z.ZodTypeDef, unknown>;
/** @internal */
export type TrustedContactPhoneNumber$Outbound = {
    e164_number?: string | undefined;
    extension?: string | undefined;
    short_code?: TrustedContactShortCode$Outbound | null | undefined;
};
/** @internal */
export declare const TrustedContactPhoneNumber$outboundSchema: z.ZodType<TrustedContactPhoneNumber$Outbound, z.ZodTypeDef, TrustedContactPhoneNumber>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TrustedContactPhoneNumber$ {
    /** @deprecated use `TrustedContactPhoneNumber$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TrustedContactPhoneNumber, z.ZodTypeDef, unknown>;
    /** @deprecated use `TrustedContactPhoneNumber$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TrustedContactPhoneNumber$Outbound, z.ZodTypeDef, TrustedContactPhoneNumber>;
    /** @deprecated use `TrustedContactPhoneNumber$Outbound` instead. */
    type Outbound = TrustedContactPhoneNumber$Outbound;
}
export declare function trustedContactPhoneNumberToJSON(trustedContactPhoneNumber: TrustedContactPhoneNumber): string;
export declare function trustedContactPhoneNumberFromJSON(jsonString: string): SafeParseResult<TrustedContactPhoneNumber, SDKValidationError>;
/** @internal */
export declare const TrustedContact$inboundSchema: z.ZodType<TrustedContact, z.ZodTypeDef, unknown>;
/** @internal */
export type TrustedContact$Outbound = {
    email_address?: string | undefined;
    family_name?: string | undefined;
    given_name?: string | undefined;
    mailing_address?: TrustedContactMailingAddress$Outbound | null | undefined;
    middle_names?: string | undefined;
    name?: string | undefined;
    phone_number?: TrustedContactPhoneNumber$Outbound | null | undefined;
    trusted_contact_id?: string | undefined;
};
/** @internal */
export declare const TrustedContact$outboundSchema: z.ZodType<TrustedContact$Outbound, z.ZodTypeDef, TrustedContact>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TrustedContact$ {
    /** @deprecated use `TrustedContact$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TrustedContact, z.ZodTypeDef, unknown>;
    /** @deprecated use `TrustedContact$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TrustedContact$Outbound, z.ZodTypeDef, TrustedContact>;
    /** @deprecated use `TrustedContact$Outbound` instead. */
    type Outbound = TrustedContact$Outbound;
}
export declare function trustedContactToJSON(trustedContact: TrustedContact): string;
export declare function trustedContactFromJSON(jsonString: string): SafeParseResult<TrustedContact, SDKValidationError>;
//# sourceMappingURL=trustedcontact.d.ts.map