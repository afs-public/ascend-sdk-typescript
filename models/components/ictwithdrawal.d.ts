import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The amount of the transfer being withdrawn from the customer's account in USD. A value should not be provided if the withdrawal is a full disbursement.
 */
export type IctWithdrawalAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The name of the program that the ICT withdrawal is associated with.
 */
export declare enum IctWithdrawalProgram {
    IctProgramUnspecified = "ICT_PROGRAM_UNSPECIFIED",
    BrokerPartner = "BROKER_PARTNER",
    DepositOnly = "DEPOSIT_ONLY",
    BankingPartner = "BANKING_PARTNER",
    WithdrawalOnly = "WITHDRAWAL_ONLY",
    DigitalPartner = "DIGITAL_PARTNER"
}
/**
 * The name of the program that the ICT withdrawal is associated with.
 */
export type IctWithdrawalProgramOpen = OpenEnum<typeof IctWithdrawalProgram>;
/**
 * Fixed USD amount to withhold for taxes.
 */
export type IctWithdrawalRetirementDistributionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type IctWithdrawalPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The federal tax withholding.
 */
export type IctWithdrawalFederalTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: IctWithdrawalRetirementDistributionAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: IctWithdrawalPercentage | null | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type IctWithdrawalRetirementDistributionStateTaxWithholdingAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type IctWithdrawalRetirementDistributionPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state tax withholding.
 */
export type IctWithdrawalStateTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: IctWithdrawalRetirementDistributionStateTaxWithholdingAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: IctWithdrawalRetirementDistributionPercentage | null | undefined;
};
/**
 * The type of retirement distribution.
 */
export declare enum IctWithdrawalType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Normal = "NORMAL",
    Disability = "DISABILITY",
    Sosepp = "SOSEPP",
    Premature = "PREMATURE",
    Death = "DEATH",
    ExcessContributionRemovalBeforeTaxDeadline = "EXCESS_CONTRIBUTION_REMOVAL_BEFORE_TAX_DEADLINE",
    ExcessContributionRemovalAfterTaxDeadline = "EXCESS_CONTRIBUTION_REMOVAL_AFTER_TAX_DEADLINE",
    RolloverToQualifiedPlan = "ROLLOVER_TO_QUALIFIED_PLAN",
    RolloverToIra = "ROLLOVER_TO_IRA",
    DistributionTransfer = "DISTRIBUTION_TRANSFER",
    RecharacterizationPriorYear = "RECHARACTERIZATION_PRIOR_YEAR",
    RecharacterizationCurrentYear = "RECHARACTERIZATION_CURRENT_YEAR",
    DistributionConversion = "DISTRIBUTION_CONVERSION",
    ManagementFee = "MANAGEMENT_FEE",
    PlanLoan401K = "PLAN_LOAN_401K",
    PrematureSimpleIraLessThan2Years = "PREMATURE_SIMPLE_IRA_LESS_THAN_2_YEARS",
    NormalRothIraGreaterThan5Years = "NORMAL_ROTH_IRA_GREATER_THAN_5_YEARS",
    NetIncomeAttributable = "NET_INCOME_ATTRIBUTABLE",
    Revocation = "REVOCATION",
    NonReportable = "NON_REPORTABLE"
}
/**
 * The type of retirement distribution.
 */
export type IctWithdrawalTypeOpen = OpenEnum<typeof IctWithdrawalType>;
/**
 * Retirement distribution details for withdrawal from retirement account
 */
export type IctWithdrawalRetirementDistribution = {
    /**
     * The federal tax withholding.
     */
    federalTaxWithholding?: IctWithdrawalFederalTaxWithholding | null | undefined;
    /**
     * The institution receiving retirement funds when performing a transfer to an identical retirement account type at a different financial institution. This is required for check and wire withdrawals because we can't always identify the institution using the transfer instructions. For cash journals this value will default to "Apex Clearing", regardless of what is passed in here
     */
    receivingInstitution?: string | undefined;
    /**
     * The state tax withholding.
     */
    stateTaxWithholding?: IctWithdrawalStateTaxWithholding | null | undefined;
    /**
     * Whether or not this distribution has a state withholding waiver.
     */
    stateWithholdingWaiver?: boolean | undefined;
    /**
     * Tax year for which the distribution is applied.
     */
    taxYear?: number | undefined;
    /**
     * The type of retirement distribution.
     */
    type?: IctWithdrawalTypeOpen | undefined;
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
export declare enum IctWithdrawalStateState {
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
export type IctWithdrawalStateStateOpen = OpenEnum<typeof IctWithdrawalStateState>;
/**
 * The state of the ICT withdrawal
 */
export type IctWithdrawalState = {
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
    state?: IctWithdrawalStateStateOpen | undefined;
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
export declare enum IctWithdrawalTransferStateState {
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
export type IctWithdrawalTransferStateStateOpen = OpenEnum<typeof IctWithdrawalTransferStateState>;
/**
 * Deprecated, use state instead
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type IctWithdrawalTransferState = {
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
    state?: IctWithdrawalTransferStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * The address of the entity
 */
export type IctWithdrawalAddress = {
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
export type IctWithdrawalEntityOriginatingParty = {
    /**
     * The address of the entity
     */
    address?: IctWithdrawalAddress | null | undefined;
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
export type IctWithdrawalTravelRuleAddress = {
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
export type IctWithdrawalEntityRecipientParty = {
    /**
     * The address of the entity
     */
    address?: IctWithdrawalTravelRuleAddress | null | undefined;
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
export type IctWithdrawalTravelRuleIndividualOriginatingPartyAddress = {
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
export type IctWithdrawalIndividualOriginatingParty = {
    /**
     * The address of the party
     */
    address?: IctWithdrawalTravelRuleIndividualOriginatingPartyAddress | null | undefined;
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
export type IctWithdrawalTravelRuleIndividualRecipientPartyAddress = {
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
export type IctWithdrawalIndividualRecipientParty = {
    /**
     * The address of the party
     */
    address?: IctWithdrawalTravelRuleIndividualRecipientPartyAddress | null | undefined;
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
 * The name and account id of institution sourcing the funds. Always 'Apex Clearing' and investor account id for ICT withdrawals;
 */
export type IctWithdrawalOriginatingInstitution = {
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
 * The name and account id of the external financial institution that will take receipt of the funds.
 */
export type IctWithdrawalRecipientInstitution = {
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
 * The travel rule information for the ICT withdrawal
 */
export type IctWithdrawalTravelRule = {
    /**
     * An entity originating party
     */
    entityOriginatingParty?: IctWithdrawalEntityOriginatingParty | null | undefined;
    /**
     * An entity originating party
     */
    entityRecipientParty?: IctWithdrawalEntityRecipientParty | null | undefined;
    /**
     * An individual originating party
     */
    individualOriginatingParty?: IctWithdrawalIndividualOriginatingParty | null | undefined;
    /**
     * An individual recipient party
     */
    individualRecipientParty?: IctWithdrawalIndividualRecipientParty | null | undefined;
    /**
     * The name and account id of institution sourcing the funds. Always 'Apex Clearing' and investor account id for ICT withdrawals;
     */
    originatingInstitution?: IctWithdrawalOriginatingInstitution | null | undefined;
    /**
     * The name and account id of the external financial institution that will take receipt of the funds.
     */
    recipientInstitution?: IctWithdrawalRecipientInstitution | null | undefined;
};
/**
 * An Instant Cash Transfer. Funds are moved from a customer's brokerage account to a configured Firm account.
 */
export type IctWithdrawal = {
    /**
     * The amount of the transfer being withdrawn from the customer's account in USD. A value should not be provided if the withdrawal is a full disbursement.
     */
    amount?: IctWithdrawalAmount | null | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account.
     */
    clientTransferId?: string | undefined;
    /**
     * Full name of the ICT withdrawal resource, which contains account id and ICT withdrawal id
     */
    name?: string | undefined;
    /**
     * The name of the program that the ICT withdrawal is associated with.
     */
    program?: IctWithdrawalProgramOpen | undefined;
    /**
     * Retirement distribution details for withdrawal from retirement account
     */
    retirementDistribution?: IctWithdrawalRetirementDistribution | null | undefined;
    /**
     * The state of the ICT withdrawal
     */
    state?: IctWithdrawalState | null | undefined;
    /**
     * Deprecated, use state instead
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    transferState?: IctWithdrawalTransferState | null | undefined;
    /**
     * The travel rule information for the ICT withdrawal
     */
    travelRule?: IctWithdrawalTravelRule | null | undefined;
};
/** @internal */
export declare const IctWithdrawalAmount$inboundSchema: z.ZodType<IctWithdrawalAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalAmount$outboundSchema: z.ZodType<IctWithdrawalAmount$Outbound, z.ZodTypeDef, IctWithdrawalAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalAmount$ {
    /** @deprecated use `IctWithdrawalAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalAmount$Outbound, z.ZodTypeDef, IctWithdrawalAmount>;
    /** @deprecated use `IctWithdrawalAmount$Outbound` instead. */
    type Outbound = IctWithdrawalAmount$Outbound;
}
/** @internal */
export declare const IctWithdrawalProgram$inboundSchema: z.ZodType<IctWithdrawalProgramOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IctWithdrawalProgram$outboundSchema: z.ZodType<IctWithdrawalProgramOpen, z.ZodTypeDef, IctWithdrawalProgramOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalProgram$ {
    /** @deprecated use `IctWithdrawalProgram$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalProgramOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalProgram$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalProgramOpen, z.ZodTypeDef, IctWithdrawalProgramOpen>;
}
/** @internal */
export declare const IctWithdrawalRetirementDistributionAmount$inboundSchema: z.ZodType<IctWithdrawalRetirementDistributionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalRetirementDistributionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalRetirementDistributionAmount$outboundSchema: z.ZodType<IctWithdrawalRetirementDistributionAmount$Outbound, z.ZodTypeDef, IctWithdrawalRetirementDistributionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalRetirementDistributionAmount$ {
    /** @deprecated use `IctWithdrawalRetirementDistributionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalRetirementDistributionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalRetirementDistributionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalRetirementDistributionAmount$Outbound, z.ZodTypeDef, IctWithdrawalRetirementDistributionAmount>;
    /** @deprecated use `IctWithdrawalRetirementDistributionAmount$Outbound` instead. */
    type Outbound = IctWithdrawalRetirementDistributionAmount$Outbound;
}
/** @internal */
export declare const IctWithdrawalPercentage$inboundSchema: z.ZodType<IctWithdrawalPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalPercentage$outboundSchema: z.ZodType<IctWithdrawalPercentage$Outbound, z.ZodTypeDef, IctWithdrawalPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalPercentage$ {
    /** @deprecated use `IctWithdrawalPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalPercentage$Outbound, z.ZodTypeDef, IctWithdrawalPercentage>;
    /** @deprecated use `IctWithdrawalPercentage$Outbound` instead. */
    type Outbound = IctWithdrawalPercentage$Outbound;
}
/** @internal */
export declare const IctWithdrawalFederalTaxWithholding$inboundSchema: z.ZodType<IctWithdrawalFederalTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalFederalTaxWithholding$Outbound = {
    amount?: IctWithdrawalRetirementDistributionAmount$Outbound | null | undefined;
    percentage?: IctWithdrawalPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const IctWithdrawalFederalTaxWithholding$outboundSchema: z.ZodType<IctWithdrawalFederalTaxWithholding$Outbound, z.ZodTypeDef, IctWithdrawalFederalTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalFederalTaxWithholding$ {
    /** @deprecated use `IctWithdrawalFederalTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalFederalTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalFederalTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalFederalTaxWithholding$Outbound, z.ZodTypeDef, IctWithdrawalFederalTaxWithholding>;
    /** @deprecated use `IctWithdrawalFederalTaxWithholding$Outbound` instead. */
    type Outbound = IctWithdrawalFederalTaxWithholding$Outbound;
}
/** @internal */
export declare const IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$inboundSchema: z.ZodType<IctWithdrawalRetirementDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$outboundSchema: z.ZodType<IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, IctWithdrawalRetirementDistributionStateTaxWithholdingAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$ {
    /** @deprecated use `IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalRetirementDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, IctWithdrawalRetirementDistributionStateTaxWithholdingAmount>;
    /** @deprecated use `IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound` instead. */
    type Outbound = IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound;
}
/** @internal */
export declare const IctWithdrawalRetirementDistributionPercentage$inboundSchema: z.ZodType<IctWithdrawalRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalRetirementDistributionPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalRetirementDistributionPercentage$outboundSchema: z.ZodType<IctWithdrawalRetirementDistributionPercentage$Outbound, z.ZodTypeDef, IctWithdrawalRetirementDistributionPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalRetirementDistributionPercentage$ {
    /** @deprecated use `IctWithdrawalRetirementDistributionPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalRetirementDistributionPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalRetirementDistributionPercentage$Outbound, z.ZodTypeDef, IctWithdrawalRetirementDistributionPercentage>;
    /** @deprecated use `IctWithdrawalRetirementDistributionPercentage$Outbound` instead. */
    type Outbound = IctWithdrawalRetirementDistributionPercentage$Outbound;
}
/** @internal */
export declare const IctWithdrawalStateTaxWithholding$inboundSchema: z.ZodType<IctWithdrawalStateTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalStateTaxWithholding$Outbound = {
    amount?: IctWithdrawalRetirementDistributionStateTaxWithholdingAmount$Outbound | null | undefined;
    percentage?: IctWithdrawalRetirementDistributionPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const IctWithdrawalStateTaxWithholding$outboundSchema: z.ZodType<IctWithdrawalStateTaxWithholding$Outbound, z.ZodTypeDef, IctWithdrawalStateTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalStateTaxWithholding$ {
    /** @deprecated use `IctWithdrawalStateTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalStateTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalStateTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalStateTaxWithholding$Outbound, z.ZodTypeDef, IctWithdrawalStateTaxWithholding>;
    /** @deprecated use `IctWithdrawalStateTaxWithholding$Outbound` instead. */
    type Outbound = IctWithdrawalStateTaxWithholding$Outbound;
}
/** @internal */
export declare const IctWithdrawalType$inboundSchema: z.ZodType<IctWithdrawalTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IctWithdrawalType$outboundSchema: z.ZodType<IctWithdrawalTypeOpen, z.ZodTypeDef, IctWithdrawalTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalType$ {
    /** @deprecated use `IctWithdrawalType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalTypeOpen, z.ZodTypeDef, IctWithdrawalTypeOpen>;
}
/** @internal */
export declare const IctWithdrawalRetirementDistribution$inboundSchema: z.ZodType<IctWithdrawalRetirementDistribution, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalRetirementDistribution$Outbound = {
    federal_tax_withholding?: IctWithdrawalFederalTaxWithholding$Outbound | null | undefined;
    receiving_institution?: string | undefined;
    state_tax_withholding?: IctWithdrawalStateTaxWithholding$Outbound | null | undefined;
    state_withholding_waiver?: boolean | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalRetirementDistribution$outboundSchema: z.ZodType<IctWithdrawalRetirementDistribution$Outbound, z.ZodTypeDef, IctWithdrawalRetirementDistribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalRetirementDistribution$ {
    /** @deprecated use `IctWithdrawalRetirementDistribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalRetirementDistribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalRetirementDistribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalRetirementDistribution$Outbound, z.ZodTypeDef, IctWithdrawalRetirementDistribution>;
    /** @deprecated use `IctWithdrawalRetirementDistribution$Outbound` instead. */
    type Outbound = IctWithdrawalRetirementDistribution$Outbound;
}
/** @internal */
export declare const IctWithdrawalStateState$inboundSchema: z.ZodType<IctWithdrawalStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IctWithdrawalStateState$outboundSchema: z.ZodType<IctWithdrawalStateStateOpen, z.ZodTypeDef, IctWithdrawalStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalStateState$ {
    /** @deprecated use `IctWithdrawalStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalStateStateOpen, z.ZodTypeDef, IctWithdrawalStateStateOpen>;
}
/** @internal */
export declare const IctWithdrawalState$inboundSchema: z.ZodType<IctWithdrawalState, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const IctWithdrawalState$outboundSchema: z.ZodType<IctWithdrawalState$Outbound, z.ZodTypeDef, IctWithdrawalState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalState$ {
    /** @deprecated use `IctWithdrawalState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalState, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalState$Outbound, z.ZodTypeDef, IctWithdrawalState>;
    /** @deprecated use `IctWithdrawalState$Outbound` instead. */
    type Outbound = IctWithdrawalState$Outbound;
}
/** @internal */
export declare const IctWithdrawalTransferStateState$inboundSchema: z.ZodType<IctWithdrawalTransferStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IctWithdrawalTransferStateState$outboundSchema: z.ZodType<IctWithdrawalTransferStateStateOpen, z.ZodTypeDef, IctWithdrawalTransferStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalTransferStateState$ {
    /** @deprecated use `IctWithdrawalTransferStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalTransferStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalTransferStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalTransferStateStateOpen, z.ZodTypeDef, IctWithdrawalTransferStateStateOpen>;
}
/** @internal */
export declare const IctWithdrawalTransferState$inboundSchema: z.ZodType<IctWithdrawalTransferState, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalTransferState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const IctWithdrawalTransferState$outboundSchema: z.ZodType<IctWithdrawalTransferState$Outbound, z.ZodTypeDef, IctWithdrawalTransferState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalTransferState$ {
    /** @deprecated use `IctWithdrawalTransferState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalTransferState, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalTransferState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalTransferState$Outbound, z.ZodTypeDef, IctWithdrawalTransferState>;
    /** @deprecated use `IctWithdrawalTransferState$Outbound` instead. */
    type Outbound = IctWithdrawalTransferState$Outbound;
}
/** @internal */
export declare const IctWithdrawalAddress$inboundSchema: z.ZodType<IctWithdrawalAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalAddress$Outbound = {
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
export declare const IctWithdrawalAddress$outboundSchema: z.ZodType<IctWithdrawalAddress$Outbound, z.ZodTypeDef, IctWithdrawalAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalAddress$ {
    /** @deprecated use `IctWithdrawalAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalAddress$Outbound, z.ZodTypeDef, IctWithdrawalAddress>;
    /** @deprecated use `IctWithdrawalAddress$Outbound` instead. */
    type Outbound = IctWithdrawalAddress$Outbound;
}
/** @internal */
export declare const IctWithdrawalEntityOriginatingParty$inboundSchema: z.ZodType<IctWithdrawalEntityOriginatingParty, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalEntityOriginatingParty$Outbound = {
    address?: IctWithdrawalAddress$Outbound | null | undefined;
    tax_id?: string | undefined;
    title?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalEntityOriginatingParty$outboundSchema: z.ZodType<IctWithdrawalEntityOriginatingParty$Outbound, z.ZodTypeDef, IctWithdrawalEntityOriginatingParty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalEntityOriginatingParty$ {
    /** @deprecated use `IctWithdrawalEntityOriginatingParty$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalEntityOriginatingParty, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalEntityOriginatingParty$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalEntityOriginatingParty$Outbound, z.ZodTypeDef, IctWithdrawalEntityOriginatingParty>;
    /** @deprecated use `IctWithdrawalEntityOriginatingParty$Outbound` instead. */
    type Outbound = IctWithdrawalEntityOriginatingParty$Outbound;
}
/** @internal */
export declare const IctWithdrawalTravelRuleAddress$inboundSchema: z.ZodType<IctWithdrawalTravelRuleAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalTravelRuleAddress$Outbound = {
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
export declare const IctWithdrawalTravelRuleAddress$outboundSchema: z.ZodType<IctWithdrawalTravelRuleAddress$Outbound, z.ZodTypeDef, IctWithdrawalTravelRuleAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalTravelRuleAddress$ {
    /** @deprecated use `IctWithdrawalTravelRuleAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalTravelRuleAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalTravelRuleAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalTravelRuleAddress$Outbound, z.ZodTypeDef, IctWithdrawalTravelRuleAddress>;
    /** @deprecated use `IctWithdrawalTravelRuleAddress$Outbound` instead. */
    type Outbound = IctWithdrawalTravelRuleAddress$Outbound;
}
/** @internal */
export declare const IctWithdrawalEntityRecipientParty$inboundSchema: z.ZodType<IctWithdrawalEntityRecipientParty, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalEntityRecipientParty$Outbound = {
    address?: IctWithdrawalTravelRuleAddress$Outbound | null | undefined;
    tax_id?: string | undefined;
    title?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalEntityRecipientParty$outboundSchema: z.ZodType<IctWithdrawalEntityRecipientParty$Outbound, z.ZodTypeDef, IctWithdrawalEntityRecipientParty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalEntityRecipientParty$ {
    /** @deprecated use `IctWithdrawalEntityRecipientParty$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalEntityRecipientParty, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalEntityRecipientParty$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalEntityRecipientParty$Outbound, z.ZodTypeDef, IctWithdrawalEntityRecipientParty>;
    /** @deprecated use `IctWithdrawalEntityRecipientParty$Outbound` instead. */
    type Outbound = IctWithdrawalEntityRecipientParty$Outbound;
}
/** @internal */
export declare const IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$inboundSchema: z.ZodType<IctWithdrawalTravelRuleIndividualOriginatingPartyAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$Outbound = {
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
export declare const IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$outboundSchema: z.ZodType<IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$Outbound, z.ZodTypeDef, IctWithdrawalTravelRuleIndividualOriginatingPartyAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$ {
    /** @deprecated use `IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalTravelRuleIndividualOriginatingPartyAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$Outbound, z.ZodTypeDef, IctWithdrawalTravelRuleIndividualOriginatingPartyAddress>;
    /** @deprecated use `IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$Outbound` instead. */
    type Outbound = IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$Outbound;
}
/** @internal */
export declare const IctWithdrawalIndividualOriginatingParty$inboundSchema: z.ZodType<IctWithdrawalIndividualOriginatingParty, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalIndividualOriginatingParty$Outbound = {
    address?: IctWithdrawalTravelRuleIndividualOriginatingPartyAddress$Outbound | null | undefined;
    family_name?: string | undefined;
    given_names?: Array<string> | undefined;
};
/** @internal */
export declare const IctWithdrawalIndividualOriginatingParty$outboundSchema: z.ZodType<IctWithdrawalIndividualOriginatingParty$Outbound, z.ZodTypeDef, IctWithdrawalIndividualOriginatingParty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalIndividualOriginatingParty$ {
    /** @deprecated use `IctWithdrawalIndividualOriginatingParty$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalIndividualOriginatingParty, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalIndividualOriginatingParty$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalIndividualOriginatingParty$Outbound, z.ZodTypeDef, IctWithdrawalIndividualOriginatingParty>;
    /** @deprecated use `IctWithdrawalIndividualOriginatingParty$Outbound` instead. */
    type Outbound = IctWithdrawalIndividualOriginatingParty$Outbound;
}
/** @internal */
export declare const IctWithdrawalTravelRuleIndividualRecipientPartyAddress$inboundSchema: z.ZodType<IctWithdrawalTravelRuleIndividualRecipientPartyAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalTravelRuleIndividualRecipientPartyAddress$Outbound = {
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
export declare const IctWithdrawalTravelRuleIndividualRecipientPartyAddress$outboundSchema: z.ZodType<IctWithdrawalTravelRuleIndividualRecipientPartyAddress$Outbound, z.ZodTypeDef, IctWithdrawalTravelRuleIndividualRecipientPartyAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalTravelRuleIndividualRecipientPartyAddress$ {
    /** @deprecated use `IctWithdrawalTravelRuleIndividualRecipientPartyAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalTravelRuleIndividualRecipientPartyAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalTravelRuleIndividualRecipientPartyAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalTravelRuleIndividualRecipientPartyAddress$Outbound, z.ZodTypeDef, IctWithdrawalTravelRuleIndividualRecipientPartyAddress>;
    /** @deprecated use `IctWithdrawalTravelRuleIndividualRecipientPartyAddress$Outbound` instead. */
    type Outbound = IctWithdrawalTravelRuleIndividualRecipientPartyAddress$Outbound;
}
/** @internal */
export declare const IctWithdrawalIndividualRecipientParty$inboundSchema: z.ZodType<IctWithdrawalIndividualRecipientParty, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalIndividualRecipientParty$Outbound = {
    address?: IctWithdrawalTravelRuleIndividualRecipientPartyAddress$Outbound | null | undefined;
    family_name?: string | undefined;
    given_names?: Array<string> | undefined;
};
/** @internal */
export declare const IctWithdrawalIndividualRecipientParty$outboundSchema: z.ZodType<IctWithdrawalIndividualRecipientParty$Outbound, z.ZodTypeDef, IctWithdrawalIndividualRecipientParty>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalIndividualRecipientParty$ {
    /** @deprecated use `IctWithdrawalIndividualRecipientParty$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalIndividualRecipientParty, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalIndividualRecipientParty$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalIndividualRecipientParty$Outbound, z.ZodTypeDef, IctWithdrawalIndividualRecipientParty>;
    /** @deprecated use `IctWithdrawalIndividualRecipientParty$Outbound` instead. */
    type Outbound = IctWithdrawalIndividualRecipientParty$Outbound;
}
/** @internal */
export declare const IctWithdrawalOriginatingInstitution$inboundSchema: z.ZodType<IctWithdrawalOriginatingInstitution, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalOriginatingInstitution$Outbound = {
    account_id?: string | undefined;
    title?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalOriginatingInstitution$outboundSchema: z.ZodType<IctWithdrawalOriginatingInstitution$Outbound, z.ZodTypeDef, IctWithdrawalOriginatingInstitution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalOriginatingInstitution$ {
    /** @deprecated use `IctWithdrawalOriginatingInstitution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalOriginatingInstitution, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalOriginatingInstitution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalOriginatingInstitution$Outbound, z.ZodTypeDef, IctWithdrawalOriginatingInstitution>;
    /** @deprecated use `IctWithdrawalOriginatingInstitution$Outbound` instead. */
    type Outbound = IctWithdrawalOriginatingInstitution$Outbound;
}
/** @internal */
export declare const IctWithdrawalRecipientInstitution$inboundSchema: z.ZodType<IctWithdrawalRecipientInstitution, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalRecipientInstitution$Outbound = {
    account_id?: string | undefined;
    title?: string | undefined;
};
/** @internal */
export declare const IctWithdrawalRecipientInstitution$outboundSchema: z.ZodType<IctWithdrawalRecipientInstitution$Outbound, z.ZodTypeDef, IctWithdrawalRecipientInstitution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalRecipientInstitution$ {
    /** @deprecated use `IctWithdrawalRecipientInstitution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalRecipientInstitution, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalRecipientInstitution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalRecipientInstitution$Outbound, z.ZodTypeDef, IctWithdrawalRecipientInstitution>;
    /** @deprecated use `IctWithdrawalRecipientInstitution$Outbound` instead. */
    type Outbound = IctWithdrawalRecipientInstitution$Outbound;
}
/** @internal */
export declare const IctWithdrawalTravelRule$inboundSchema: z.ZodType<IctWithdrawalTravelRule, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawalTravelRule$Outbound = {
    entity_originating_party?: IctWithdrawalEntityOriginatingParty$Outbound | null | undefined;
    entity_recipient_party?: IctWithdrawalEntityRecipientParty$Outbound | null | undefined;
    individual_originating_party?: IctWithdrawalIndividualOriginatingParty$Outbound | null | undefined;
    individual_recipient_party?: IctWithdrawalIndividualRecipientParty$Outbound | null | undefined;
    originating_institution?: IctWithdrawalOriginatingInstitution$Outbound | null | undefined;
    recipient_institution?: IctWithdrawalRecipientInstitution$Outbound | null | undefined;
};
/** @internal */
export declare const IctWithdrawalTravelRule$outboundSchema: z.ZodType<IctWithdrawalTravelRule$Outbound, z.ZodTypeDef, IctWithdrawalTravelRule>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawalTravelRule$ {
    /** @deprecated use `IctWithdrawalTravelRule$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawalTravelRule, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawalTravelRule$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawalTravelRule$Outbound, z.ZodTypeDef, IctWithdrawalTravelRule>;
    /** @deprecated use `IctWithdrawalTravelRule$Outbound` instead. */
    type Outbound = IctWithdrawalTravelRule$Outbound;
}
/** @internal */
export declare const IctWithdrawal$inboundSchema: z.ZodType<IctWithdrawal, z.ZodTypeDef, unknown>;
/** @internal */
export type IctWithdrawal$Outbound = {
    amount?: IctWithdrawalAmount$Outbound | null | undefined;
    client_transfer_id?: string | undefined;
    name?: string | undefined;
    program?: string | undefined;
    retirement_distribution?: IctWithdrawalRetirementDistribution$Outbound | null | undefined;
    state?: IctWithdrawalState$Outbound | null | undefined;
    transfer_state?: IctWithdrawalTransferState$Outbound | null | undefined;
    travel_rule?: IctWithdrawalTravelRule$Outbound | null | undefined;
};
/** @internal */
export declare const IctWithdrawal$outboundSchema: z.ZodType<IctWithdrawal$Outbound, z.ZodTypeDef, IctWithdrawal>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctWithdrawal$ {
    /** @deprecated use `IctWithdrawal$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctWithdrawal, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctWithdrawal$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctWithdrawal$Outbound, z.ZodTypeDef, IctWithdrawal>;
    /** @deprecated use `IctWithdrawal$Outbound` instead. */
    type Outbound = IctWithdrawal$Outbound;
}
//# sourceMappingURL=ictwithdrawal.d.ts.map