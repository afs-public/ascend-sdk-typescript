import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The amount of the transfer being deposited into the customer's account in USD
 */
export type IctDepositAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The name of the program the ICT deposit is associated with
 */
export declare enum IctDepositProgram {
    IctProgramUnspecified = "ICT_PROGRAM_UNSPECIFIED",
    BrokerPartner = "BROKER_PARTNER",
    DepositOnly = "DEPOSIT_ONLY",
    BankingPartner = "BANKING_PARTNER",
    MoneyTransmitter = "MONEY_TRANSMITTER",
    WithdrawalOnly = "WITHDRAWAL_ONLY",
    DigitalPartner = "DIGITAL_PARTNER"
}
/**
 * The name of the program the ICT deposit is associated with
 */
export type IctDepositProgramOpen = OpenEnum<typeof IctDepositProgram>;
/**
 * The type of retirement contribution.
 */
export declare enum IctDepositType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Regular = "REGULAR",
    Employee = "EMPLOYEE",
    Employer = "EMPLOYER",
    Recharacterization = "RECHARACTERIZATION",
    Rollover60Day = "ROLLOVER_60_DAY",
    RolloverDirect = "ROLLOVER_DIRECT",
    Transfer = "TRANSFER",
    TrusteeFee = "TRUSTEE_FEE",
    Conversion = "CONVERSION",
    Repayment = "REPAYMENT",
    ContributionNonReportable = "CONTRIBUTION_NON_REPORTABLE"
}
/**
 * The type of retirement contribution.
 */
export type IctDepositTypeOpen = OpenEnum<typeof IctDepositType>;
/**
 * Retirement contribution details for deposit to retirement account
 */
export type IctDepositRetirementContribution = {
    /**
     * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
     */
    taxYear?: number | undefined;
    /**
     * The type of retirement contribution.
     */
    type?: IctDepositTypeOpen | undefined;
};
/**
 * The high level state of a transfer, one of:
 *
 * @remarks
 * - `PROCESSING` - The transfer is being processed and will be posted if successful.
 * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
 * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
 * - `COMPLETED` - The transfer has been batched and completed.
 * - `REJECTED` - The transfer was rejected.
 * - `CANCELED` - The transfer was canceled.
 * - `RETURNED` - The transfer was returned.
 * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
 */
export declare enum IctDepositStateState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Processing = "PROCESSING",
    PendingReview = "PENDING_REVIEW",
    Posted = "POSTED",
    Completed = "COMPLETED",
    Rejected = "REJECTED",
    Canceled = "CANCELED",
    Returned = "RETURNED",
    Postponed = "POSTPONED"
}
/**
 * The high level state of a transfer, one of:
 *
 * @remarks
 * - `PROCESSING` - The transfer is being processed and will be posted if successful.
 * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
 * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
 * - `COMPLETED` - The transfer has been batched and completed.
 * - `REJECTED` - The transfer was rejected.
 * - `CANCELED` - The transfer was canceled.
 * - `RETURNED` - The transfer was returned.
 * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
 */
export type IctDepositStateStateOpen = OpenEnum<typeof IctDepositStateState>;
/**
 * The state of the ICT deposit
 */
export type IctDepositState = {
    /**
     * The user or service that triggered the state update.
     */
    actor?: string | undefined;
    /**
     * Additional description of the transfer state.
     */
    message?: string | undefined;
    /**
     * Additional metadata relating to the transfer state. Included data depends on the state, e.g.:
     *
     * @remarks
     *  - Rejection reasons are included when the `state` is `REJECTED`
     *  - Reason and comment are included when `state` is `CANCELED`
     */
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * The high level state of a transfer, one of:
     *
     * @remarks
     * - `PROCESSING` - The transfer is being processed and will be posted if successful.
     * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
     * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
     * - `COMPLETED` - The transfer has been batched and completed.
     * - `REJECTED` - The transfer was rejected.
     * - `CANCELED` - The transfer was canceled.
     * - `RETURNED` - The transfer was returned.
     * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
     */
    state?: IctDepositStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * The high level state of a transfer, one of:
 *
 * @remarks
 * - `PROCESSING` - The transfer is being processed and will be posted if successful.
 * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
 * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
 * - `COMPLETED` - The transfer has been batched and completed.
 * - `REJECTED` - The transfer was rejected.
 * - `CANCELED` - The transfer was canceled.
 * - `RETURNED` - The transfer was returned.
 * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
 */
export declare enum IctDepositTransferStateState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Processing = "PROCESSING",
    PendingReview = "PENDING_REVIEW",
    Posted = "POSTED",
    Completed = "COMPLETED",
    Rejected = "REJECTED",
    Canceled = "CANCELED",
    Returned = "RETURNED",
    Postponed = "POSTPONED"
}
/**
 * The high level state of a transfer, one of:
 *
 * @remarks
 * - `PROCESSING` - The transfer is being processed and will be posted if successful.
 * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
 * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
 * - `COMPLETED` - The transfer has been batched and completed.
 * - `REJECTED` - The transfer was rejected.
 * - `CANCELED` - The transfer was canceled.
 * - `RETURNED` - The transfer was returned.
 * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
 */
export type IctDepositTransferStateStateOpen = OpenEnum<typeof IctDepositTransferStateState>;
/**
 * Deprecated, use state instead
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type TransferState = {
    /**
     * The user or service that triggered the state update.
     */
    actor?: string | undefined;
    /**
     * Additional description of the transfer state.
     */
    message?: string | undefined;
    /**
     * Additional metadata relating to the transfer state. Included data depends on the state, e.g.:
     *
     * @remarks
     *  - Rejection reasons are included when the `state` is `REJECTED`
     *  - Reason and comment are included when `state` is `CANCELED`
     */
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * The high level state of a transfer, one of:
     *
     * @remarks
     * - `PROCESSING` - The transfer is being processed and will be posted if successful.
     * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
     * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
     * - `COMPLETED` - The transfer has been batched and completed.
     * - `REJECTED` - The transfer was rejected.
     * - `CANCELED` - The transfer was canceled.
     * - `RETURNED` - The transfer was returned.
     * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
     */
    state?: IctDepositTransferStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * The address of the entity
 */
export type IctDepositTravelRuleEntityOriginatingPartyAddress = {
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
 * An entity originating party
 */
export type EntityOriginatingParty = {
    /**
     * The address of the entity
     */
    address?: IctDepositTravelRuleEntityOriginatingPartyAddress | null | undefined;
    /**
     * The tax identification number of the entity
     */
    taxId?: string | undefined;
    /**
     * The name of the entity
     */
    title?: string | undefined;
};
/**
 * The address of the entity
 */
export type IctDepositAddress = {
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
 * An entity recipient party
 */
export type EntityRecipientParty = {
    /**
     * The address of the entity
     */
    address?: IctDepositAddress | null | undefined;
    /**
     * The tax identification number of the entity
     */
    taxId?: string | undefined;
    /**
     * The name of the entity
     */
    title?: string | undefined;
};
/**
 * The address of the party
 */
export type IctDepositTravelRuleAddress = {
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
 * An individual originating party
 */
export type IndividualOriginatingParty = {
    /**
     * The address of the party
     */
    address?: IctDepositTravelRuleAddress | null | undefined;
    /**
     * The last name of the party
     */
    familyName?: string | undefined;
    /**
     * The first name of the party as well as any non-primary given names (e.g. middle names)
     */
    givenNames?: Array<string> | undefined;
};
/**
 * The address of the party
 */
export type IctDepositTravelRuleIndividualRecipientPartyAddress = {
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
 * An individual recipient party
 */
export type IndividualRecipientParty = {
    /**
     * The address of the party
     */
    address?: IctDepositTravelRuleIndividualRecipientPartyAddress | null | undefined;
    /**
     * The last name of the party
     */
    familyName?: string | undefined;
    /**
     * The first name of the party as well as any non-primary given names (e.g. middle names)
     */
    givenNames?: Array<string> | undefined;
};
/**
 * The name of the external financial institution and account that is the source of the funds
 */
export type OriginatingInstitution = {
    /**
     * Account id at institution
     */
    accountId?: string | undefined;
    /**
     * Name of the institution
     */
    title?: string | undefined;
};
/**
 * The name and account id of institution receiving the funds. Always 'Apex Clearing' and investor account id for ICT deposits;
 */
export type RecipientInstitution = {
    /**
     * Account id at institution
     */
    accountId?: string | undefined;
    /**
     * Name of the institution
     */
    title?: string | undefined;
};
/**
 * The travel rule information for the ICT deposit
 */
export type TravelRule = {
    /**
     * An entity originating party
     */
    entityOriginatingParty?: EntityOriginatingParty | null | undefined;
    /**
     * An entity recipient party
     */
    entityRecipientParty?: EntityRecipientParty | null | undefined;
    /**
     * An individual originating party
     */
    individualOriginatingParty?: IndividualOriginatingParty | null | undefined;
    /**
     * An individual recipient party
     */
    individualRecipientParty?: IndividualRecipientParty | null | undefined;
    /**
     * The name of the external financial institution and account that is the source of the funds
     */
    originatingInstitution?: OriginatingInstitution | null | undefined;
    /**
     * The name and account id of institution receiving the funds. Always 'Apex Clearing' and investor account id for ICT deposits;
     */
    recipientInstitution?: RecipientInstitution | null | undefined;
};
/**
 * An Instant Cash Transfer. Funds are moved from a configured Firm account to a customer's brokerage account.
 */
export type IctDeposit = {
    /**
     * The amount of the transfer being deposited into the customer's account in USD
     */
    amount?: IctDepositAmount | null | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account.
     */
    clientTransferId?: string | undefined;
    /**
     * Full name of the ICT deposit resource, which contains account id and ICT deposit id
     */
    name?: string | undefined;
    /**
     * The name of the program the ICT deposit is associated with
     */
    program?: IctDepositProgramOpen | undefined;
    /**
     * Retirement contribution details for deposit to retirement account
     */
    retirementContribution?: IctDepositRetirementContribution | null | undefined;
    /**
     * The state of the ICT deposit
     */
    state?: IctDepositState | null | undefined;
    /**
     * Deprecated, use state instead
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    transferState?: TransferState | null | undefined;
    /**
     * The travel rule information for the ICT deposit
     */
    travelRule?: TravelRule | null | undefined;
};
/** @internal */
export declare const IctDepositAmount$inboundSchema: z.ZodType<IctDepositAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const IctDepositAmount$outboundSchema: z.ZodType<IctDepositAmount$Outbound, z.ZodTypeDef, IctDepositAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositAmount$ {
    /** @deprecated use `IctDepositAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositAmount$Outbound, z.ZodTypeDef, IctDepositAmount>;
    /** @deprecated use `IctDepositAmount$Outbound` instead. */
    type Outbound = IctDepositAmount$Outbound;
}
export declare function ictDepositAmountToJSON(ictDepositAmount: IctDepositAmount): string;
export declare function ictDepositAmountFromJSON(jsonString: string): SafeParseResult<IctDepositAmount, SDKValidationError>;
/** @internal */
export declare const IctDepositProgram$inboundSchema: z.ZodType<IctDepositProgramOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IctDepositProgram$outboundSchema: z.ZodType<IctDepositProgramOpen, z.ZodTypeDef, IctDepositProgramOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositProgram$ {
    /** @deprecated use `IctDepositProgram$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositProgramOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositProgram$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositProgramOpen, z.ZodTypeDef, IctDepositProgramOpen>;
}
/** @internal */
export declare const IctDepositType$inboundSchema: z.ZodType<IctDepositTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IctDepositType$outboundSchema: z.ZodType<IctDepositTypeOpen, z.ZodTypeDef, IctDepositTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositType$ {
    /** @deprecated use `IctDepositType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositTypeOpen, z.ZodTypeDef, IctDepositTypeOpen>;
}
/** @internal */
export declare const IctDepositRetirementContribution$inboundSchema: z.ZodType<IctDepositRetirementContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositRetirementContribution$Outbound = {
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const IctDepositRetirementContribution$outboundSchema: z.ZodType<IctDepositRetirementContribution$Outbound, z.ZodTypeDef, IctDepositRetirementContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositRetirementContribution$ {
    /** @deprecated use `IctDepositRetirementContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositRetirementContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositRetirementContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositRetirementContribution$Outbound, z.ZodTypeDef, IctDepositRetirementContribution>;
    /** @deprecated use `IctDepositRetirementContribution$Outbound` instead. */
    type Outbound = IctDepositRetirementContribution$Outbound;
}
export declare function ictDepositRetirementContributionToJSON(ictDepositRetirementContribution: IctDepositRetirementContribution): string;
export declare function ictDepositRetirementContributionFromJSON(jsonString: string): SafeParseResult<IctDepositRetirementContribution, SDKValidationError>;
/** @internal */
export declare const IctDepositStateState$inboundSchema: z.ZodType<IctDepositStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IctDepositStateState$outboundSchema: z.ZodType<IctDepositStateStateOpen, z.ZodTypeDef, IctDepositStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositStateState$ {
    /** @deprecated use `IctDepositStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositStateStateOpen, z.ZodTypeDef, IctDepositStateStateOpen>;
}
/** @internal */
export declare const IctDepositState$inboundSchema: z.ZodType<IctDepositState, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const IctDepositState$outboundSchema: z.ZodType<IctDepositState$Outbound, z.ZodTypeDef, IctDepositState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositState$ {
    /** @deprecated use `IctDepositState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositState, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositState$Outbound, z.ZodTypeDef, IctDepositState>;
    /** @deprecated use `IctDepositState$Outbound` instead. */
    type Outbound = IctDepositState$Outbound;
}
export declare function ictDepositStateToJSON(ictDepositState: IctDepositState): string;
export declare function ictDepositStateFromJSON(jsonString: string): SafeParseResult<IctDepositState, SDKValidationError>;
/** @internal */
export declare const IctDepositTransferStateState$inboundSchema: z.ZodType<IctDepositTransferStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IctDepositTransferStateState$outboundSchema: z.ZodType<IctDepositTransferStateStateOpen, z.ZodTypeDef, IctDepositTransferStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositTransferStateState$ {
    /** @deprecated use `IctDepositTransferStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositTransferStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositTransferStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositTransferStateStateOpen, z.ZodTypeDef, IctDepositTransferStateStateOpen>;
}
/** @internal */
export declare const TransferState$inboundSchema: z.ZodType<TransferState, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const TransferState$outboundSchema: z.ZodType<TransferState$Outbound, z.ZodTypeDef, TransferState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferState$ {
    /** @deprecated use `TransferState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferState, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferState$Outbound, z.ZodTypeDef, TransferState>;
    /** @deprecated use `TransferState$Outbound` instead. */
    type Outbound = TransferState$Outbound;
}
export declare function transferStateToJSON(transferState: TransferState): string;
export declare function transferStateFromJSON(jsonString: string): SafeParseResult<TransferState, SDKValidationError>;
/** @internal */
export declare const IctDepositTravelRuleEntityOriginatingPartyAddress$inboundSchema: z.ZodType<IctDepositTravelRuleEntityOriginatingPartyAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositTravelRuleEntityOriginatingPartyAddress$Outbound = {
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
export declare const IctDepositTravelRuleEntityOriginatingPartyAddress$outboundSchema: z.ZodType<IctDepositTravelRuleEntityOriginatingPartyAddress$Outbound, z.ZodTypeDef, IctDepositTravelRuleEntityOriginatingPartyAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositTravelRuleEntityOriginatingPartyAddress$ {
    /** @deprecated use `IctDepositTravelRuleEntityOriginatingPartyAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositTravelRuleEntityOriginatingPartyAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositTravelRuleEntityOriginatingPartyAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositTravelRuleEntityOriginatingPartyAddress$Outbound, z.ZodTypeDef, IctDepositTravelRuleEntityOriginatingPartyAddress>;
    /** @deprecated use `IctDepositTravelRuleEntityOriginatingPartyAddress$Outbound` instead. */
    type Outbound = IctDepositTravelRuleEntityOriginatingPartyAddress$Outbound;
}
export declare function ictDepositTravelRuleEntityOriginatingPartyAddressToJSON(ictDepositTravelRuleEntityOriginatingPartyAddress: IctDepositTravelRuleEntityOriginatingPartyAddress): string;
export declare function ictDepositTravelRuleEntityOriginatingPartyAddressFromJSON(jsonString: string): SafeParseResult<IctDepositTravelRuleEntityOriginatingPartyAddress, SDKValidationError>;
/** @internal */
export declare const EntityOriginatingParty$inboundSchema: z.ZodType<EntityOriginatingParty, z.ZodTypeDef, unknown>;
/** @internal */
export type EntityOriginatingParty$Outbound = {
    address?: IctDepositTravelRuleEntityOriginatingPartyAddress$Outbound | null | undefined;
    tax_id?: string | undefined;
    title?: string | undefined;
};
/** @internal */
export declare const EntityOriginatingParty$outboundSchema: z.ZodType<EntityOriginatingParty$Outbound, z.ZodTypeDef, EntityOriginatingParty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntityOriginatingParty$ {
    /** @deprecated use `EntityOriginatingParty$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntityOriginatingParty, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntityOriginatingParty$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntityOriginatingParty$Outbound, z.ZodTypeDef, EntityOriginatingParty>;
    /** @deprecated use `EntityOriginatingParty$Outbound` instead. */
    type Outbound = EntityOriginatingParty$Outbound;
}
export declare function entityOriginatingPartyToJSON(entityOriginatingParty: EntityOriginatingParty): string;
export declare function entityOriginatingPartyFromJSON(jsonString: string): SafeParseResult<EntityOriginatingParty, SDKValidationError>;
/** @internal */
export declare const IctDepositAddress$inboundSchema: z.ZodType<IctDepositAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositAddress$Outbound = {
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
export declare const IctDepositAddress$outboundSchema: z.ZodType<IctDepositAddress$Outbound, z.ZodTypeDef, IctDepositAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositAddress$ {
    /** @deprecated use `IctDepositAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositAddress$Outbound, z.ZodTypeDef, IctDepositAddress>;
    /** @deprecated use `IctDepositAddress$Outbound` instead. */
    type Outbound = IctDepositAddress$Outbound;
}
export declare function ictDepositAddressToJSON(ictDepositAddress: IctDepositAddress): string;
export declare function ictDepositAddressFromJSON(jsonString: string): SafeParseResult<IctDepositAddress, SDKValidationError>;
/** @internal */
export declare const EntityRecipientParty$inboundSchema: z.ZodType<EntityRecipientParty, z.ZodTypeDef, unknown>;
/** @internal */
export type EntityRecipientParty$Outbound = {
    address?: IctDepositAddress$Outbound | null | undefined;
    tax_id?: string | undefined;
    title?: string | undefined;
};
/** @internal */
export declare const EntityRecipientParty$outboundSchema: z.ZodType<EntityRecipientParty$Outbound, z.ZodTypeDef, EntityRecipientParty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntityRecipientParty$ {
    /** @deprecated use `EntityRecipientParty$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntityRecipientParty, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntityRecipientParty$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntityRecipientParty$Outbound, z.ZodTypeDef, EntityRecipientParty>;
    /** @deprecated use `EntityRecipientParty$Outbound` instead. */
    type Outbound = EntityRecipientParty$Outbound;
}
export declare function entityRecipientPartyToJSON(entityRecipientParty: EntityRecipientParty): string;
export declare function entityRecipientPartyFromJSON(jsonString: string): SafeParseResult<EntityRecipientParty, SDKValidationError>;
/** @internal */
export declare const IctDepositTravelRuleAddress$inboundSchema: z.ZodType<IctDepositTravelRuleAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositTravelRuleAddress$Outbound = {
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
export declare const IctDepositTravelRuleAddress$outboundSchema: z.ZodType<IctDepositTravelRuleAddress$Outbound, z.ZodTypeDef, IctDepositTravelRuleAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositTravelRuleAddress$ {
    /** @deprecated use `IctDepositTravelRuleAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositTravelRuleAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositTravelRuleAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositTravelRuleAddress$Outbound, z.ZodTypeDef, IctDepositTravelRuleAddress>;
    /** @deprecated use `IctDepositTravelRuleAddress$Outbound` instead. */
    type Outbound = IctDepositTravelRuleAddress$Outbound;
}
export declare function ictDepositTravelRuleAddressToJSON(ictDepositTravelRuleAddress: IctDepositTravelRuleAddress): string;
export declare function ictDepositTravelRuleAddressFromJSON(jsonString: string): SafeParseResult<IctDepositTravelRuleAddress, SDKValidationError>;
/** @internal */
export declare const IndividualOriginatingParty$inboundSchema: z.ZodType<IndividualOriginatingParty, z.ZodTypeDef, unknown>;
/** @internal */
export type IndividualOriginatingParty$Outbound = {
    address?: IctDepositTravelRuleAddress$Outbound | null | undefined;
    family_name?: string | undefined;
    given_names?: Array<string> | undefined;
};
/** @internal */
export declare const IndividualOriginatingParty$outboundSchema: z.ZodType<IndividualOriginatingParty$Outbound, z.ZodTypeDef, IndividualOriginatingParty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IndividualOriginatingParty$ {
    /** @deprecated use `IndividualOriginatingParty$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IndividualOriginatingParty, z.ZodTypeDef, unknown>;
    /** @deprecated use `IndividualOriginatingParty$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IndividualOriginatingParty$Outbound, z.ZodTypeDef, IndividualOriginatingParty>;
    /** @deprecated use `IndividualOriginatingParty$Outbound` instead. */
    type Outbound = IndividualOriginatingParty$Outbound;
}
export declare function individualOriginatingPartyToJSON(individualOriginatingParty: IndividualOriginatingParty): string;
export declare function individualOriginatingPartyFromJSON(jsonString: string): SafeParseResult<IndividualOriginatingParty, SDKValidationError>;
/** @internal */
export declare const IctDepositTravelRuleIndividualRecipientPartyAddress$inboundSchema: z.ZodType<IctDepositTravelRuleIndividualRecipientPartyAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDepositTravelRuleIndividualRecipientPartyAddress$Outbound = {
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
export declare const IctDepositTravelRuleIndividualRecipientPartyAddress$outboundSchema: z.ZodType<IctDepositTravelRuleIndividualRecipientPartyAddress$Outbound, z.ZodTypeDef, IctDepositTravelRuleIndividualRecipientPartyAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDepositTravelRuleIndividualRecipientPartyAddress$ {
    /** @deprecated use `IctDepositTravelRuleIndividualRecipientPartyAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDepositTravelRuleIndividualRecipientPartyAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDepositTravelRuleIndividualRecipientPartyAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDepositTravelRuleIndividualRecipientPartyAddress$Outbound, z.ZodTypeDef, IctDepositTravelRuleIndividualRecipientPartyAddress>;
    /** @deprecated use `IctDepositTravelRuleIndividualRecipientPartyAddress$Outbound` instead. */
    type Outbound = IctDepositTravelRuleIndividualRecipientPartyAddress$Outbound;
}
export declare function ictDepositTravelRuleIndividualRecipientPartyAddressToJSON(ictDepositTravelRuleIndividualRecipientPartyAddress: IctDepositTravelRuleIndividualRecipientPartyAddress): string;
export declare function ictDepositTravelRuleIndividualRecipientPartyAddressFromJSON(jsonString: string): SafeParseResult<IctDepositTravelRuleIndividualRecipientPartyAddress, SDKValidationError>;
/** @internal */
export declare const IndividualRecipientParty$inboundSchema: z.ZodType<IndividualRecipientParty, z.ZodTypeDef, unknown>;
/** @internal */
export type IndividualRecipientParty$Outbound = {
    address?: IctDepositTravelRuleIndividualRecipientPartyAddress$Outbound | null | undefined;
    family_name?: string | undefined;
    given_names?: Array<string> | undefined;
};
/** @internal */
export declare const IndividualRecipientParty$outboundSchema: z.ZodType<IndividualRecipientParty$Outbound, z.ZodTypeDef, IndividualRecipientParty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IndividualRecipientParty$ {
    /** @deprecated use `IndividualRecipientParty$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IndividualRecipientParty, z.ZodTypeDef, unknown>;
    /** @deprecated use `IndividualRecipientParty$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IndividualRecipientParty$Outbound, z.ZodTypeDef, IndividualRecipientParty>;
    /** @deprecated use `IndividualRecipientParty$Outbound` instead. */
    type Outbound = IndividualRecipientParty$Outbound;
}
export declare function individualRecipientPartyToJSON(individualRecipientParty: IndividualRecipientParty): string;
export declare function individualRecipientPartyFromJSON(jsonString: string): SafeParseResult<IndividualRecipientParty, SDKValidationError>;
/** @internal */
export declare const OriginatingInstitution$inboundSchema: z.ZodType<OriginatingInstitution, z.ZodTypeDef, unknown>;
/** @internal */
export type OriginatingInstitution$Outbound = {
    account_id?: string | undefined;
    title?: string | undefined;
};
/** @internal */
export declare const OriginatingInstitution$outboundSchema: z.ZodType<OriginatingInstitution$Outbound, z.ZodTypeDef, OriginatingInstitution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OriginatingInstitution$ {
    /** @deprecated use `OriginatingInstitution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OriginatingInstitution, z.ZodTypeDef, unknown>;
    /** @deprecated use `OriginatingInstitution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OriginatingInstitution$Outbound, z.ZodTypeDef, OriginatingInstitution>;
    /** @deprecated use `OriginatingInstitution$Outbound` instead. */
    type Outbound = OriginatingInstitution$Outbound;
}
export declare function originatingInstitutionToJSON(originatingInstitution: OriginatingInstitution): string;
export declare function originatingInstitutionFromJSON(jsonString: string): SafeParseResult<OriginatingInstitution, SDKValidationError>;
/** @internal */
export declare const RecipientInstitution$inboundSchema: z.ZodType<RecipientInstitution, z.ZodTypeDef, unknown>;
/** @internal */
export type RecipientInstitution$Outbound = {
    account_id?: string | undefined;
    title?: string | undefined;
};
/** @internal */
export declare const RecipientInstitution$outboundSchema: z.ZodType<RecipientInstitution$Outbound, z.ZodTypeDef, RecipientInstitution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RecipientInstitution$ {
    /** @deprecated use `RecipientInstitution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RecipientInstitution, z.ZodTypeDef, unknown>;
    /** @deprecated use `RecipientInstitution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RecipientInstitution$Outbound, z.ZodTypeDef, RecipientInstitution>;
    /** @deprecated use `RecipientInstitution$Outbound` instead. */
    type Outbound = RecipientInstitution$Outbound;
}
export declare function recipientInstitutionToJSON(recipientInstitution: RecipientInstitution): string;
export declare function recipientInstitutionFromJSON(jsonString: string): SafeParseResult<RecipientInstitution, SDKValidationError>;
/** @internal */
export declare const TravelRule$inboundSchema: z.ZodType<TravelRule, z.ZodTypeDef, unknown>;
/** @internal */
export type TravelRule$Outbound = {
    entity_originating_party?: EntityOriginatingParty$Outbound | null | undefined;
    entity_recipient_party?: EntityRecipientParty$Outbound | null | undefined;
    individual_originating_party?: IndividualOriginatingParty$Outbound | null | undefined;
    individual_recipient_party?: IndividualRecipientParty$Outbound | null | undefined;
    originating_institution?: OriginatingInstitution$Outbound | null | undefined;
    recipient_institution?: RecipientInstitution$Outbound | null | undefined;
};
/** @internal */
export declare const TravelRule$outboundSchema: z.ZodType<TravelRule$Outbound, z.ZodTypeDef, TravelRule>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TravelRule$ {
    /** @deprecated use `TravelRule$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TravelRule, z.ZodTypeDef, unknown>;
    /** @deprecated use `TravelRule$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TravelRule$Outbound, z.ZodTypeDef, TravelRule>;
    /** @deprecated use `TravelRule$Outbound` instead. */
    type Outbound = TravelRule$Outbound;
}
export declare function travelRuleToJSON(travelRule: TravelRule): string;
export declare function travelRuleFromJSON(jsonString: string): SafeParseResult<TravelRule, SDKValidationError>;
/** @internal */
export declare const IctDeposit$inboundSchema: z.ZodType<IctDeposit, z.ZodTypeDef, unknown>;
/** @internal */
export type IctDeposit$Outbound = {
    amount?: IctDepositAmount$Outbound | null | undefined;
    client_transfer_id?: string | undefined;
    name?: string | undefined;
    program?: string | undefined;
    retirement_contribution?: IctDepositRetirementContribution$Outbound | null | undefined;
    state?: IctDepositState$Outbound | null | undefined;
    transfer_state?: TransferState$Outbound | null | undefined;
    travel_rule?: TravelRule$Outbound | null | undefined;
};
/** @internal */
export declare const IctDeposit$outboundSchema: z.ZodType<IctDeposit$Outbound, z.ZodTypeDef, IctDeposit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctDeposit$ {
    /** @deprecated use `IctDeposit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctDeposit, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctDeposit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctDeposit$Outbound, z.ZodTypeDef, IctDeposit>;
    /** @deprecated use `IctDeposit$Outbound` instead. */
    type Outbound = IctDeposit$Outbound;
}
export declare function ictDepositToJSON(ictDeposit: IctDeposit): string;
export declare function ictDepositFromJSON(jsonString: string): SafeParseResult<IctDeposit, SDKValidationError>;
//# sourceMappingURL=ictdeposit.d.ts.map