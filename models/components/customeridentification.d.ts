import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { CustomerIdentificationResult, CustomerIdentificationResult$Outbound } from "./customeridentificationresult.js";
import { IdentityIdentification, IdentityIdentification$Outbound } from "./identityidentification.js";
export declare enum CheckTypes {
    CheckTypeUnspecified = "CHECK_TYPE_UNSPECIFIED",
    Database = "DATABASE",
    Documentary = "DOCUMENTARY"
}
export type CheckTypesOpen = OpenEnum<typeof CheckTypes>;
/**
 * **Field Dependencies:**
 *
 * @remarks
 *
 * A `birth_date` is required when the `check_types` is DATABASE
 *
 * Required if `check_types` is `DATABASE`.
 *
 * Otherwise, must be empty.
 */
export type CustomerIdentificationBirthDate = {
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
 * **Field Dependencies:**
 *
 * @remarks
 *
 * A US `legal_address` is required when the `check_types` is `DATABASE`
 *
 * Required if `check_types` is `DATABASE`.
 *
 * Otherwise, must be empty.
 */
export type CustomerIdentificationLegalAddress = {
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
 * **Field Dependencies:**
 *
 * @remarks
 *
 * An identity is required when the `check_types` is DATABASE
 *
 * Required if `check_types` is `DATABASE`.
 *
 * Otherwise, must be empty.
 */
export type Identity = {
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * A `birth_date` is required when the `check_types` is DATABASE
     *
     * Required if `check_types` is `DATABASE`.
     *
     * Otherwise, must be empty.
     */
    birthDate?: CustomerIdentificationBirthDate | null | undefined;
    /**
     * The countries where a natural person retains citizenship; This is used for tax (treaty) and country block list considerations Two character region code, complies with https://cldr.unicode.org/index Example values: "US", "CA"
     */
    citizenshipRegionCodes?: Array<string> | undefined;
    /**
     * Email addresses
     */
    emailAddresses?: Array<string> | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * A `family_name` is required when the `check_types` is DATABASE
     *
     * Required if `check_types` is `DATABASE`.
     *
     * Otherwise, must be empty.
     */
    familyName?: string | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * A `given_name` is required when the `check_types` is DATABASE
     *
     * Required if `check_types` is `DATABASE`.
     *
     * Otherwise, must be empty.
     */
    givenName?: string | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * A identification is required with a US `region_code` when the `check_types` is DATABASE
     *
     * Required if `check_types` is `DATABASE`.
     *
     * Otherwise, must be empty.
     */
    identifications?: Array<IdentityIdentification> | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * A US `legal_address` is required when the `check_types` is `DATABASE`
     *
     * Required if `check_types` is `DATABASE`.
     *
     * Otherwise, must be empty.
     */
    legalAddress?: CustomerIdentificationLegalAddress | null | undefined;
    /**
     * Middle names
     */
    middleNames?: Array<string> | undefined;
    /**
     * Phone numbers
     */
    phoneNumbers?: Array<string> | undefined;
};
/**
 * CustomerIdentification includes the details of a customer identification check
 */
export type CustomerIdentification = {
    /**
     * The types of checks being requested Must either be DATABASE or DOCUMENTARY else will return INVALID_ARGUMENT
     */
    checkTypes?: Array<CheckTypesOpen> | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * An identity is required when the `check_types` is DATABASE
     *
     * Required if `check_types` is `DATABASE`.
     *
     * Otherwise, must be empty.
     */
    identity?: Identity | null | undefined;
    /**
     * required format: correspondents/{correspondent_id}/customerIdentifications/{customer_identification_id}
     */
    name?: string | undefined;
    /**
     * The results of the identity verification check(s)
     */
    results?: Array<CustomerIdentificationResult> | undefined;
};
/** @internal */
export declare const CheckTypes$inboundSchema: z.ZodType<CheckTypesOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CheckTypes$outboundSchema: z.ZodType<CheckTypesOpen, z.ZodTypeDef, CheckTypesOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckTypes$ {
    /** @deprecated use `CheckTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckTypesOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckTypesOpen, z.ZodTypeDef, CheckTypesOpen>;
}
/** @internal */
export declare const CustomerIdentificationBirthDate$inboundSchema: z.ZodType<CustomerIdentificationBirthDate, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerIdentificationBirthDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const CustomerIdentificationBirthDate$outboundSchema: z.ZodType<CustomerIdentificationBirthDate$Outbound, z.ZodTypeDef, CustomerIdentificationBirthDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerIdentificationBirthDate$ {
    /** @deprecated use `CustomerIdentificationBirthDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerIdentificationBirthDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerIdentificationBirthDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerIdentificationBirthDate$Outbound, z.ZodTypeDef, CustomerIdentificationBirthDate>;
    /** @deprecated use `CustomerIdentificationBirthDate$Outbound` instead. */
    type Outbound = CustomerIdentificationBirthDate$Outbound;
}
/** @internal */
export declare const CustomerIdentificationLegalAddress$inboundSchema: z.ZodType<CustomerIdentificationLegalAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerIdentificationLegalAddress$Outbound = {
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
export declare const CustomerIdentificationLegalAddress$outboundSchema: z.ZodType<CustomerIdentificationLegalAddress$Outbound, z.ZodTypeDef, CustomerIdentificationLegalAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerIdentificationLegalAddress$ {
    /** @deprecated use `CustomerIdentificationLegalAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerIdentificationLegalAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerIdentificationLegalAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerIdentificationLegalAddress$Outbound, z.ZodTypeDef, CustomerIdentificationLegalAddress>;
    /** @deprecated use `CustomerIdentificationLegalAddress$Outbound` instead. */
    type Outbound = CustomerIdentificationLegalAddress$Outbound;
}
/** @internal */
export declare const Identity$inboundSchema: z.ZodType<Identity, z.ZodTypeDef, unknown>;
/** @internal */
export type Identity$Outbound = {
    birth_date?: CustomerIdentificationBirthDate$Outbound | null | undefined;
    citizenship_region_codes?: Array<string> | undefined;
    email_addresses?: Array<string> | undefined;
    family_name?: string | undefined;
    given_name?: string | undefined;
    identifications?: Array<IdentityIdentification$Outbound> | undefined;
    legal_address?: CustomerIdentificationLegalAddress$Outbound | null | undefined;
    middle_names?: Array<string> | undefined;
    phone_numbers?: Array<string> | undefined;
};
/** @internal */
export declare const Identity$outboundSchema: z.ZodType<Identity$Outbound, z.ZodTypeDef, Identity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Identity$ {
    /** @deprecated use `Identity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Identity, z.ZodTypeDef, unknown>;
    /** @deprecated use `Identity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Identity$Outbound, z.ZodTypeDef, Identity>;
    /** @deprecated use `Identity$Outbound` instead. */
    type Outbound = Identity$Outbound;
}
/** @internal */
export declare const CustomerIdentification$inboundSchema: z.ZodType<CustomerIdentification, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerIdentification$Outbound = {
    check_types?: Array<string> | undefined;
    identity?: Identity$Outbound | null | undefined;
    name?: string | undefined;
    results?: Array<CustomerIdentificationResult$Outbound> | undefined;
};
/** @internal */
export declare const CustomerIdentification$outboundSchema: z.ZodType<CustomerIdentification$Outbound, z.ZodTypeDef, CustomerIdentification>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerIdentification$ {
    /** @deprecated use `CustomerIdentification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerIdentification, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerIdentification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerIdentification$Outbound, z.ZodTypeDef, CustomerIdentification>;
    /** @deprecated use `CustomerIdentification$Outbound` instead. */
    type Outbound = CustomerIdentification$Outbound;
}
//# sourceMappingURL=customeridentification.d.ts.map