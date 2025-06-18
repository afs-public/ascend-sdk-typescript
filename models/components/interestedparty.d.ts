import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
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
export type InterestedPartyMailingAddress = {
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
 * Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export declare enum InterestedPartyStatementDeliveryPreference {
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export type InterestedPartyStatementDeliveryPreferenceOpen = OpenEnum<typeof InterestedPartyStatementDeliveryPreference>;
/**
 * Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export declare enum InterestedPartyTradeConfirmationDeliveryPreference {
    Physical = "PHYSICAL",
    Suppress = "SUPPRESS"
}
/**
 * Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
 */
export type InterestedPartyTradeConfirmationDeliveryPreferenceOpen = OpenEnum<typeof InterestedPartyTradeConfirmationDeliveryPreference>;
/**
 * An interested party.
 */
export type InterestedParty = {
    /**
     * A system-generated unique identifier for an Interested Party on an account; Used to access the record after creation
     */
    interestedPartyId?: string | undefined;
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
    mailingAddress?: InterestedPartyMailingAddress | null | undefined;
    /**
     * The name field Format: accounts/[{account}/interestedParties/{interestedParty}
     */
    name?: string | undefined;
    /**
     * The sending address name for mailings to Interested Parties The name of an Interested Party; Used for envelope/communication addressing
     */
    recipient?: string | undefined;
    /**
     * Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
     */
    statementDeliveryPreference?: InterestedPartyStatementDeliveryPreferenceOpen | undefined;
    /**
     * Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation
     */
    tradeConfirmationDeliveryPreference?: InterestedPartyTradeConfirmationDeliveryPreferenceOpen | undefined;
};
/** @internal */
export declare const InterestedPartyMailingAddress$inboundSchema: z.ZodType<InterestedPartyMailingAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type InterestedPartyMailingAddress$Outbound = {
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
export declare const InterestedPartyMailingAddress$outboundSchema: z.ZodType<InterestedPartyMailingAddress$Outbound, z.ZodTypeDef, InterestedPartyMailingAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestedPartyMailingAddress$ {
    /** @deprecated use `InterestedPartyMailingAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestedPartyMailingAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestedPartyMailingAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestedPartyMailingAddress$Outbound, z.ZodTypeDef, InterestedPartyMailingAddress>;
    /** @deprecated use `InterestedPartyMailingAddress$Outbound` instead. */
    type Outbound = InterestedPartyMailingAddress$Outbound;
}
/** @internal */
export declare const InterestedPartyStatementDeliveryPreference$inboundSchema: z.ZodType<InterestedPartyStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InterestedPartyStatementDeliveryPreference$outboundSchema: z.ZodType<InterestedPartyStatementDeliveryPreferenceOpen, z.ZodTypeDef, InterestedPartyStatementDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestedPartyStatementDeliveryPreference$ {
    /** @deprecated use `InterestedPartyStatementDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestedPartyStatementDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestedPartyStatementDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestedPartyStatementDeliveryPreferenceOpen, z.ZodTypeDef, InterestedPartyStatementDeliveryPreferenceOpen>;
}
/** @internal */
export declare const InterestedPartyTradeConfirmationDeliveryPreference$inboundSchema: z.ZodType<InterestedPartyTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InterestedPartyTradeConfirmationDeliveryPreference$outboundSchema: z.ZodType<InterestedPartyTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, InterestedPartyTradeConfirmationDeliveryPreferenceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestedPartyTradeConfirmationDeliveryPreference$ {
    /** @deprecated use `InterestedPartyTradeConfirmationDeliveryPreference$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestedPartyTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestedPartyTradeConfirmationDeliveryPreference$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestedPartyTradeConfirmationDeliveryPreferenceOpen, z.ZodTypeDef, InterestedPartyTradeConfirmationDeliveryPreferenceOpen>;
}
/** @internal */
export declare const InterestedParty$inboundSchema: z.ZodType<InterestedParty, z.ZodTypeDef, unknown>;
/** @internal */
export type InterestedParty$Outbound = {
    interested_party_id?: string | undefined;
    mailing_address?: InterestedPartyMailingAddress$Outbound | null | undefined;
    name?: string | undefined;
    recipient?: string | undefined;
    statement_delivery_preference?: string | undefined;
    trade_confirmation_delivery_preference?: string | undefined;
};
/** @internal */
export declare const InterestedParty$outboundSchema: z.ZodType<InterestedParty$Outbound, z.ZodTypeDef, InterestedParty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestedParty$ {
    /** @deprecated use `InterestedParty$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestedParty, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestedParty$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestedParty$Outbound, z.ZodTypeDef, InterestedParty>;
    /** @deprecated use `InterestedParty$Outbound` instead. */
    type Outbound = InterestedParty$Outbound;
}
//# sourceMappingURL=interestedparty.d.ts.map