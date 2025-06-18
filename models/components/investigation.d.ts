import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { AuditTrail, AuditTrail$Outbound } from "./audittrail.js";
import { EntityIdentification, EntityIdentification$Outbound } from "./entityidentification.js";
import { IdentityVerificationResult, IdentityVerificationResult$Outbound } from "./identityverificationresult.js";
import { PersonIdentification, PersonIdentification$Outbound } from "./personidentification.js";
import { PostalAddress, PostalAddress$Outbound } from "./postaladdress.js";
import { WatchlistMatch, WatchlistMatch$Outbound } from "./watchlistmatch.js";
/**
 * legal address
 */
export type InvestigationLegalAddress = {
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
 * investigation details on an entity
 */
export type Entity = {
    /**
     * Other names the entity is known by (Doing Business As)
     */
    dbaNames?: Array<string> | undefined;
    /**
     * Email addresses
     */
    emailAddresses?: Array<string> | undefined;
    /**
     * Identification details including id value, and type (e.g. ein, lei)
     */
    identifications?: Array<EntityIdentification> | undefined;
    /**
     * legal address
     */
    legalAddress?: InvestigationLegalAddress | null | undefined;
    /**
     * The legal name of the entity
     */
    legalName?: string | undefined;
    /**
     * mailing address
     */
    mailingAddresses?: Array<PostalAddress> | undefined;
    /**
     * The countries where an entity does business Two character region code, complies with https://cldr.unicode.org/index Example values: "US", "CA"
     */
    operatingRegionCodes?: Array<string> | undefined;
    /**
     * phone numbers
     */
    phoneNumbers?: Array<string> | undefined;
    /**
     * Region of registration Two character region code, complies with https://cldr.unicode.org/index Example values: "US", "CA"
     */
    registrationRegion?: string | undefined;
};
/**
 * Indicates the current state of identity verification
 */
export declare enum IdentityVerification {
    ScreenStateUnspecified = "SCREEN_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Passed = "PASSED",
    Failed = "FAILED",
    NeedsReview = "NEEDS_REVIEW",
    DeferredReview = "DEFERRED_REVIEW",
    OutOfScope = "OUT_OF_SCOPE"
}
/**
 * Indicates the current state of identity verification
 */
export type IdentityVerificationOpen = OpenEnum<typeof IdentityVerification>;
/**
 * Used to determine who is responsible for running identity verification checks
 */
export declare enum IdentityVerificationScope {
    IdentityVerificationScopeUnspecified = "IDENTITY_VERIFICATION_SCOPE_UNSPECIFIED",
    PerformedByApex = "PERFORMED_BY_APEX",
    ProvidedByClient = "PROVIDED_BY_CLIENT"
}
/**
 * Used to determine who is responsible for running identity verification checks
 */
export type IdentityVerificationScopeOpen = OpenEnum<typeof IdentityVerificationScope>;
/**
 * Current state of investigation request
 */
export declare enum InvestigationRequestState {
    InvestigationRequestStateUnspecified = "INVESTIGATION_REQUEST_STATE_UNSPECIFIED",
    Open = "OPEN",
    Closed = "CLOSED"
}
/**
 * Current state of investigation request
 */
export type InvestigationRequestStateOpen = OpenEnum<typeof InvestigationRequestState>;
/**
 * The legal day, month, and year of birth for a natural person Must be formatted as an ISO-8601 YYYY-MM-DD
 */
export type InvestigationBirthDate = {
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
 * legal address
 */
export type InvestigationPersonLegalAddress = {
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
 * Suffix of the person's name
 */
export declare enum InvestigationNameSuffix {
    NameSuffixUnspecified = "NAME_SUFFIX_UNSPECIFIED",
    Sr = "SR",
    Jr = "JR",
    Iii = "III",
    Iv = "IV",
    V = "V"
}
/**
 * Suffix of the person's name
 */
export type InvestigationNameSuffixOpen = OpenEnum<typeof InvestigationNameSuffix>;
/**
 * The date identity verification was performed. Must be formatted as an ISO-8601 YYYY-MM-DD
 */
export type InvestigationExecutionDate = {
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
 * Conditional: Identity Verification results must be provided by the correspondent if InvestigationRequestScope = PROVIDED_BY_CLIENT
 */
export type ProvidedIdentityVerification = {
    /**
     * Indicates whether the identity's address was verified
     */
    addressVerified?: boolean | undefined;
    /**
     * Indicates whether the identity's date of birth was verified
     */
    birthDateVerified?: boolean | undefined;
    /**
     * The date identity verification was performed. Must be formatted as an ISO-8601 YYYY-MM-DD
     */
    executionDate?: InvestigationExecutionDate | null | undefined;
    /**
     * Client-generated identifier associated with the KYC results for the appropriate case
     */
    externalCaseId?: string | undefined;
    /**
     * A collection of unique identifiers provided by the documents api that correspond to any number of identity verification documents used in support of the external vendor to verify the identity, such as a driver's license, passport, etc
     */
    identityVerificationDocumentIds?: Array<string> | undefined;
    /**
     * Indicates whether the identity's name was verified
     */
    nameVerified?: boolean | undefined;
    /**
     * Id of this identity verification record
     */
    providedIdentityVerificationId?: string | undefined;
    /**
     * A unique identifier provided from the documents api that corresponds to an identity verification result
     */
    rawVendorDataDocumentId?: string | undefined;
    /**
     * Indicates whether the identity's tax id was verified
     */
    taxIdVerified?: boolean | undefined;
    /**
     * Name of the vendor that performed identity verification
     */
    vendor?: string | undefined;
};
/**
 * investigation details on a person
 */
export type Person = {
    /**
     * The legal day, month, and year of birth for a natural person Must be formatted as an ISO-8601 YYYY-MM-DD
     */
    birthDate?: InvestigationBirthDate | null | undefined;
    /**
     * Two character region code, complies with https://cldr.unicode.org/index Example values: "US", "CA"
     */
    birthRegionCode?: string | undefined;
    /**
     * The countries where a natural person retains citizenship; This is used for tax (treaty) and country block list considerations Two character region code, complies with https://cldr.unicode.org/index Example values: "US", "CA"
     */
    citizenshipRegionCodes?: Array<string> | undefined;
    /**
     * Conditional: document_ids must be provided by the correspondent if InvestigationRequestScope = PERFORMED_BY_APEX and citizenship_country is not USA
     */
    documentIds?: Array<string> | undefined;
    /**
     * Email addresses indicated for account communications
     */
    emailAddresses?: Array<string> | undefined;
    /**
     * Family name of a natural person
     */
    familyName?: string | undefined;
    /**
     * The given name of a natural person; Conventionally known as 'first name' in most English-speaking countries
     */
    givenName?: string | undefined;
    /**
     * Identification details including id value, and type (e.g. ssn)
     */
    identifications?: Array<PersonIdentification> | undefined;
    /**
     * legal address
     */
    legalAddress?: InvestigationPersonLegalAddress | null | undefined;
    /**
     * mailing address
     */
    mailingAddresses?: Array<PostalAddress> | undefined;
    /**
     * Middle names
     */
    middleNames?: string | undefined;
    /**
     * Suffix of the person's name
     */
    nameSuffix?: InvestigationNameSuffixOpen | undefined;
    /**
     * phone numbers related to this person
     */
    phoneNumbers?: Array<string> | undefined;
    /**
     * Conditional: Identity Verification results must be provided by the correspondent if InvestigationRequestScope = PROVIDED_BY_CLIENT
     */
    providedIdentityVerification?: ProvidedIdentityVerification | null | undefined;
};
/**
 * Indicates the current state of the watchlist screen
 */
export declare enum WatchlistScreen {
    ScreenStateUnspecified = "SCREEN_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Passed = "PASSED",
    Failed = "FAILED",
    NeedsReview = "NEEDS_REVIEW",
    DeferredReview = "DEFERRED_REVIEW",
    OutOfScope = "OUT_OF_SCOPE"
}
/**
 * Indicates the current state of the watchlist screen
 */
export type WatchlistScreenOpen = OpenEnum<typeof WatchlistScreen>;
/**
 * Contains investigation details of corresponding investigation
 */
export type Investigation = {
    /**
     * Audit trail of an investigation
     */
    auditTrail?: Array<AuditTrail> | undefined;
    /**
     * A unique identifier referencing a Correspondent
     */
    correspondentId?: string | undefined;
    /**
     * The time the investigation state was created
     */
    createTime?: Date | null | undefined;
    /**
     * investigation details on an entity
     */
    entity?: Entity | null | undefined;
    /**
     * Indicates the current state of identity verification
     */
    identityVerification?: IdentityVerificationOpen | undefined;
    /**
     * The results of the identity verification check
     */
    identityVerificationResults?: Array<IdentityVerificationResult> | undefined;
    /**
     * Used to determine who is responsible for running identity verification checks
     */
    identityVerificationScope?: IdentityVerificationScopeOpen | undefined;
    /**
     * Current state of investigation request
     */
    investigationRequestState?: InvestigationRequestStateOpen | undefined;
    /**
     * Required: The ID for an open investigation The format is "investigations/{investigation}"
     */
    name?: string | undefined;
    /**
     * investigation details on a person
     */
    person?: Person | null | undefined;
    /**
     * The time the investigation state was last updated
     */
    updateTime?: Date | null | undefined;
    /**
     * A list of watchlist entries matched against the investigation
     */
    watchlistMatches?: Array<WatchlistMatch> | undefined;
    /**
     * Indicates the current state of the watchlist screen
     */
    watchlistScreen?: WatchlistScreenOpen | undefined;
};
/** @internal */
export declare const InvestigationLegalAddress$inboundSchema: z.ZodType<InvestigationLegalAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationLegalAddress$Outbound = {
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
export declare const InvestigationLegalAddress$outboundSchema: z.ZodType<InvestigationLegalAddress$Outbound, z.ZodTypeDef, InvestigationLegalAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationLegalAddress$ {
    /** @deprecated use `InvestigationLegalAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationLegalAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationLegalAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationLegalAddress$Outbound, z.ZodTypeDef, InvestigationLegalAddress>;
    /** @deprecated use `InvestigationLegalAddress$Outbound` instead. */
    type Outbound = InvestigationLegalAddress$Outbound;
}
/** @internal */
export declare const Entity$inboundSchema: z.ZodType<Entity, z.ZodTypeDef, unknown>;
/** @internal */
export type Entity$Outbound = {
    dba_names?: Array<string> | undefined;
    email_addresses?: Array<string> | undefined;
    identifications?: Array<EntityIdentification$Outbound> | undefined;
    legal_address?: InvestigationLegalAddress$Outbound | null | undefined;
    legal_name?: string | undefined;
    mailing_addresses?: Array<PostalAddress$Outbound> | undefined;
    operating_region_codes?: Array<string> | undefined;
    phone_numbers?: Array<string> | undefined;
    registration_region?: string | undefined;
};
/** @internal */
export declare const Entity$outboundSchema: z.ZodType<Entity$Outbound, z.ZodTypeDef, Entity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Entity$ {
    /** @deprecated use `Entity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Entity, z.ZodTypeDef, unknown>;
    /** @deprecated use `Entity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Entity$Outbound, z.ZodTypeDef, Entity>;
    /** @deprecated use `Entity$Outbound` instead. */
    type Outbound = Entity$Outbound;
}
/** @internal */
export declare const IdentityVerification$inboundSchema: z.ZodType<IdentityVerificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentityVerification$outboundSchema: z.ZodType<IdentityVerificationOpen, z.ZodTypeDef, IdentityVerificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentityVerification$ {
    /** @deprecated use `IdentityVerification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentityVerificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentityVerification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentityVerificationOpen, z.ZodTypeDef, IdentityVerificationOpen>;
}
/** @internal */
export declare const IdentityVerificationScope$inboundSchema: z.ZodType<IdentityVerificationScopeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentityVerificationScope$outboundSchema: z.ZodType<IdentityVerificationScopeOpen, z.ZodTypeDef, IdentityVerificationScopeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentityVerificationScope$ {
    /** @deprecated use `IdentityVerificationScope$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentityVerificationScopeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentityVerificationScope$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentityVerificationScopeOpen, z.ZodTypeDef, IdentityVerificationScopeOpen>;
}
/** @internal */
export declare const InvestigationRequestState$inboundSchema: z.ZodType<InvestigationRequestStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InvestigationRequestState$outboundSchema: z.ZodType<InvestigationRequestStateOpen, z.ZodTypeDef, InvestigationRequestStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationRequestState$ {
    /** @deprecated use `InvestigationRequestState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationRequestStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationRequestState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationRequestStateOpen, z.ZodTypeDef, InvestigationRequestStateOpen>;
}
/** @internal */
export declare const InvestigationBirthDate$inboundSchema: z.ZodType<InvestigationBirthDate, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationBirthDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const InvestigationBirthDate$outboundSchema: z.ZodType<InvestigationBirthDate$Outbound, z.ZodTypeDef, InvestigationBirthDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationBirthDate$ {
    /** @deprecated use `InvestigationBirthDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationBirthDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationBirthDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationBirthDate$Outbound, z.ZodTypeDef, InvestigationBirthDate>;
    /** @deprecated use `InvestigationBirthDate$Outbound` instead. */
    type Outbound = InvestigationBirthDate$Outbound;
}
/** @internal */
export declare const InvestigationPersonLegalAddress$inboundSchema: z.ZodType<InvestigationPersonLegalAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationPersonLegalAddress$Outbound = {
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
export declare const InvestigationPersonLegalAddress$outboundSchema: z.ZodType<InvestigationPersonLegalAddress$Outbound, z.ZodTypeDef, InvestigationPersonLegalAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationPersonLegalAddress$ {
    /** @deprecated use `InvestigationPersonLegalAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationPersonLegalAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationPersonLegalAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationPersonLegalAddress$Outbound, z.ZodTypeDef, InvestigationPersonLegalAddress>;
    /** @deprecated use `InvestigationPersonLegalAddress$Outbound` instead. */
    type Outbound = InvestigationPersonLegalAddress$Outbound;
}
/** @internal */
export declare const InvestigationNameSuffix$inboundSchema: z.ZodType<InvestigationNameSuffixOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InvestigationNameSuffix$outboundSchema: z.ZodType<InvestigationNameSuffixOpen, z.ZodTypeDef, InvestigationNameSuffixOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationNameSuffix$ {
    /** @deprecated use `InvestigationNameSuffix$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationNameSuffixOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationNameSuffix$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationNameSuffixOpen, z.ZodTypeDef, InvestigationNameSuffixOpen>;
}
/** @internal */
export declare const InvestigationExecutionDate$inboundSchema: z.ZodType<InvestigationExecutionDate, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationExecutionDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const InvestigationExecutionDate$outboundSchema: z.ZodType<InvestigationExecutionDate$Outbound, z.ZodTypeDef, InvestigationExecutionDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationExecutionDate$ {
    /** @deprecated use `InvestigationExecutionDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationExecutionDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationExecutionDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationExecutionDate$Outbound, z.ZodTypeDef, InvestigationExecutionDate>;
    /** @deprecated use `InvestigationExecutionDate$Outbound` instead. */
    type Outbound = InvestigationExecutionDate$Outbound;
}
/** @internal */
export declare const ProvidedIdentityVerification$inboundSchema: z.ZodType<ProvidedIdentityVerification, z.ZodTypeDef, unknown>;
/** @internal */
export type ProvidedIdentityVerification$Outbound = {
    address_verified?: boolean | undefined;
    birth_date_verified?: boolean | undefined;
    execution_date?: InvestigationExecutionDate$Outbound | null | undefined;
    external_case_id?: string | undefined;
    identity_verification_document_ids?: Array<string> | undefined;
    name_verified?: boolean | undefined;
    provided_identity_verification_id?: string | undefined;
    raw_vendor_data_document_id?: string | undefined;
    tax_id_verified?: boolean | undefined;
    vendor?: string | undefined;
};
/** @internal */
export declare const ProvidedIdentityVerification$outboundSchema: z.ZodType<ProvidedIdentityVerification$Outbound, z.ZodTypeDef, ProvidedIdentityVerification>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProvidedIdentityVerification$ {
    /** @deprecated use `ProvidedIdentityVerification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProvidedIdentityVerification, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProvidedIdentityVerification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProvidedIdentityVerification$Outbound, z.ZodTypeDef, ProvidedIdentityVerification>;
    /** @deprecated use `ProvidedIdentityVerification$Outbound` instead. */
    type Outbound = ProvidedIdentityVerification$Outbound;
}
/** @internal */
export declare const Person$inboundSchema: z.ZodType<Person, z.ZodTypeDef, unknown>;
/** @internal */
export type Person$Outbound = {
    birth_date?: InvestigationBirthDate$Outbound | null | undefined;
    birth_region_code?: string | undefined;
    citizenship_region_codes?: Array<string> | undefined;
    document_ids?: Array<string> | undefined;
    email_addresses?: Array<string> | undefined;
    family_name?: string | undefined;
    given_name?: string | undefined;
    identifications?: Array<PersonIdentification$Outbound> | undefined;
    legal_address?: InvestigationPersonLegalAddress$Outbound | null | undefined;
    mailing_addresses?: Array<PostalAddress$Outbound> | undefined;
    middle_names?: string | undefined;
    name_suffix?: string | undefined;
    phone_numbers?: Array<string> | undefined;
    provided_identity_verification?: ProvidedIdentityVerification$Outbound | null | undefined;
};
/** @internal */
export declare const Person$outboundSchema: z.ZodType<Person$Outbound, z.ZodTypeDef, Person>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Person$ {
    /** @deprecated use `Person$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Person, z.ZodTypeDef, unknown>;
    /** @deprecated use `Person$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Person$Outbound, z.ZodTypeDef, Person>;
    /** @deprecated use `Person$Outbound` instead. */
    type Outbound = Person$Outbound;
}
/** @internal */
export declare const WatchlistScreen$inboundSchema: z.ZodType<WatchlistScreenOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WatchlistScreen$outboundSchema: z.ZodType<WatchlistScreenOpen, z.ZodTypeDef, WatchlistScreenOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WatchlistScreen$ {
    /** @deprecated use `WatchlistScreen$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WatchlistScreenOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WatchlistScreen$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WatchlistScreenOpen, z.ZodTypeDef, WatchlistScreenOpen>;
}
/** @internal */
export declare const Investigation$inboundSchema: z.ZodType<Investigation, z.ZodTypeDef, unknown>;
/** @internal */
export type Investigation$Outbound = {
    audit_trail?: Array<AuditTrail$Outbound> | undefined;
    correspondent_id?: string | undefined;
    create_time?: string | null | undefined;
    entity?: Entity$Outbound | null | undefined;
    identity_verification?: string | undefined;
    identity_verification_results?: Array<IdentityVerificationResult$Outbound> | undefined;
    identity_verification_scope?: string | undefined;
    investigation_request_state?: string | undefined;
    name?: string | undefined;
    person?: Person$Outbound | null | undefined;
    update_time?: string | null | undefined;
    watchlist_matches?: Array<WatchlistMatch$Outbound> | undefined;
    watchlist_screen?: string | undefined;
};
/** @internal */
export declare const Investigation$outboundSchema: z.ZodType<Investigation$Outbound, z.ZodTypeDef, Investigation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Investigation$ {
    /** @deprecated use `Investigation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Investigation, z.ZodTypeDef, unknown>;
    /** @deprecated use `Investigation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Investigation$Outbound, z.ZodTypeDef, Investigation>;
    /** @deprecated use `Investigation$Outbound` instead. */
    type Outbound = Investigation$Outbound;
}
//# sourceMappingURL=investigation.d.ts.map