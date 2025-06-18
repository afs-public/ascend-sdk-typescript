import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * A cash amount in the format of decimal value
 */
export type WireWithdrawalAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The address of the person or entity taking receipt of the wired funds. This will be populated automatically in the case of a valid first-party wire
 */
export type WireWithdrawalAddress = {
    /**
     * Required: Describes the city in which the entity is located.
     */
    city?: string | undefined;
    /**
     * Required: The country code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    country?: string | undefined;
    /**
     * Required: The postal code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    postalCode?: string | undefined;
    /**
     * Required: The state code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    state?: string | undefined;
    /**
     * The street name and number relating to a party's legal or mailing address.
     */
    streetAddress?: Array<string> | undefined;
};
/**
 * The beneficiary of the wire withdrawal
 */
export type WireWithdrawalBeneficiary = {
    /**
     * The bank account of the person or entity taking receipt of the wired funds. Limited to 25 characters if intermediaryDetails.account is set
     */
    account?: string | undefined;
    /**
     * The name of the person or entity taking receipt of the wired funds. This field defaults to the name of the account owner and should only be populated when performing a third party wire transfer
     */
    accountTitle?: string | undefined;
    /**
     * The address of the person or entity taking receipt of the wired funds. This will be populated automatically in the case of a valid first-party wire
     */
    address?: WireWithdrawalAddress | null | undefined;
    /**
     * Indicates if this beneficiary is a third party beneficiary. A wire transfer is considered third party if the beneficiary is not the exact same person and/or entity that the funds originated from. This includes wire transfers where the originator account is an individual account and the beneficiary account is a joint account
     */
    thirdParty?: boolean | undefined;
};
/**
 * The address of the intermediary party
 */
export type WireWithdrawalIntermediaryAddress = {
    /**
     * Required: Describes the city in which the entity is located.
     */
    city?: string | undefined;
    /**
     * Required: The country code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    country?: string | undefined;
    /**
     * Required: The postal code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    postalCode?: string | undefined;
    /**
     * Required: The state code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    state?: string | undefined;
    /**
     * The street name and number relating to a party's legal or mailing address.
     */
    streetAddress?: Array<string> | undefined;
};
/**
 * The intermediary party
 */
export type WireWithdrawalIntermediary = {
    /**
     * The account number of the intermediary party
     */
    account?: string | undefined;
    /**
     * The name of the intermediary party
     */
    accountTitle?: string | undefined;
    /**
     * The address of the intermediary party
     */
    address?: WireWithdrawalIntermediaryAddress | null | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type WireWithdrawalIraDistributionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type WireWithdrawalPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The federal tax withholding.
 */
export type WireWithdrawalFederalTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: WireWithdrawalIraDistributionAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: WireWithdrawalPercentage | null | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type WireWithdrawalIraDistributionStateTaxWithholdingAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type WireWithdrawalIraDistributionPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state tax withholding.
 */
export type WireWithdrawalStateTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: WireWithdrawalIraDistributionStateTaxWithholdingAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: WireWithdrawalIraDistributionPercentage | null | undefined;
};
/**
 * The type of retirement distribution.
 */
export declare enum WireWithdrawalType {
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
export type WireWithdrawalTypeOpen = OpenEnum<typeof WireWithdrawalType>;
/**
 * IRA distribution details for withdrawal from retirement account
 */
export type WireWithdrawalIraDistribution = {
    /**
     * The federal tax withholding.
     */
    federalTaxWithholding?: WireWithdrawalFederalTaxWithholding | null | undefined;
    /**
     * The institution receiving retirement funds when performing a transfer to an identical retirement account type at a different financial institution. This is required for check and wire withdrawals because we can't always identify the institution using the transfer instructions. For cash journals this value will default to "Apex Clearing", regardless of what is passed in here
     */
    receivingInstitution?: string | undefined;
    /**
     * The state tax withholding.
     */
    stateTaxWithholding?: WireWithdrawalStateTaxWithholding | null | undefined;
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
    type?: WireWithdrawalTypeOpen | undefined;
};
/**
 * The type of bank identifier specified
 */
export declare enum WireWithdrawalRecipientBankType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Aba = "ABA",
    Bic = "BIC"
}
/**
 * The type of bank identifier specified
 */
export type WireWithdrawalRecipientBankTypeOpen = OpenEnum<typeof WireWithdrawalRecipientBankType>;
/**
 * An identifier that represents ABA routing number for domestic wire or BIC for foreign wire
 */
export type WireWithdrawalBankId = {
    /**
     * The bank identifier
     */
    id?: string | undefined;
    /**
     * The type of bank identifier specified
     */
    type?: WireWithdrawalRecipientBankTypeOpen | undefined;
};
/**
 * The address of the recipient bank / financial institution
 */
export type WireWithdrawalRecipientBankAddress = {
    /**
     * Required: Describes the city in which the entity is located.
     */
    city?: string | undefined;
    /**
     * Required: The country code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    country?: string | undefined;
    /**
     * Required: The postal code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    postalCode?: string | undefined;
    /**
     * Required: The state code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    state?: string | undefined;
    /**
     * The street name and number relating to a party's legal or mailing address.
     */
    streetAddress?: Array<string> | undefined;
};
/**
 * Bank details required in the case of an international wire transfer
 */
export type WireWithdrawalInternationalBankDetails = {
    /**
     * Any additional information to be communicated to the recipient bank, such as intermediary banks to be used.
     */
    additionalInfo?: string | undefined;
    /**
     * The address of the recipient bank / financial institution
     */
    address?: WireWithdrawalRecipientBankAddress | null | undefined;
    /**
     * The name of the recipient bank / financial institution
     */
    bankName?: string | undefined;
};
/**
 * The recipient bank / financial institution
 */
export type WireWithdrawalRecipientBank = {
    /**
     * An identifier that represents ABA routing number for domestic wire or BIC for foreign wire
     */
    bankId?: WireWithdrawalBankId | null | undefined;
    /**
     * Bank details required in the case of an international wire transfer
     */
    internationalBankDetails?: WireWithdrawalInternationalBankDetails | null | undefined;
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
export declare enum WireWithdrawalStateState {
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
export type WireWithdrawalStateStateOpen = OpenEnum<typeof WireWithdrawalStateState>;
/**
 * The current state of the wire withdrawal
 */
export type WireWithdrawalState = {
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
    state?: WireWithdrawalStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * A withdrawal transfer using the wire mechanism
 */
export type WireWithdrawal = {
    /**
     * A cash amount in the format of decimal value
     */
    amount?: WireWithdrawalAmount | null | undefined;
    /**
     * The beneficiary of the wire withdrawal
     */
    beneficiary?: WireWithdrawalBeneficiary | null | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account
     */
    clientTransferId?: string | undefined;
    /**
     * The FedWire reference number for the withdrawal. Only set after the transfer is completed.
     */
    fedReferenceNumber?: string | undefined;
    /**
     * The intermediary party
     */
    intermediary?: WireWithdrawalIntermediary | null | undefined;
    /**
     * IRA distribution details for withdrawal from retirement account
     */
    iraDistribution?: WireWithdrawalIraDistribution | null | undefined;
    /**
     * The service generated name of the wire withdrawal
     */
    name?: string | undefined;
    /**
     * The recipient bank / financial institution
     */
    recipientBank?: WireWithdrawalRecipientBank | null | undefined;
    /**
     * The current state of the wire withdrawal
     */
    state?: WireWithdrawalState | null | undefined;
};
/** @internal */
export declare const WireWithdrawalAmount$inboundSchema: z.ZodType<WireWithdrawalAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalAmount$outboundSchema: z.ZodType<WireWithdrawalAmount$Outbound, z.ZodTypeDef, WireWithdrawalAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalAmount$ {
    /** @deprecated use `WireWithdrawalAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalAmount$Outbound, z.ZodTypeDef, WireWithdrawalAmount>;
    /** @deprecated use `WireWithdrawalAmount$Outbound` instead. */
    type Outbound = WireWithdrawalAmount$Outbound;
}
/** @internal */
export declare const WireWithdrawalAddress$inboundSchema: z.ZodType<WireWithdrawalAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalAddress$Outbound = {
    city?: string | undefined;
    country?: string | undefined;
    postal_code?: string | undefined;
    state?: string | undefined;
    streetAddress?: Array<string> | undefined;
};
/** @internal */
export declare const WireWithdrawalAddress$outboundSchema: z.ZodType<WireWithdrawalAddress$Outbound, z.ZodTypeDef, WireWithdrawalAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalAddress$ {
    /** @deprecated use `WireWithdrawalAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalAddress$Outbound, z.ZodTypeDef, WireWithdrawalAddress>;
    /** @deprecated use `WireWithdrawalAddress$Outbound` instead. */
    type Outbound = WireWithdrawalAddress$Outbound;
}
/** @internal */
export declare const WireWithdrawalBeneficiary$inboundSchema: z.ZodType<WireWithdrawalBeneficiary, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalBeneficiary$Outbound = {
    account?: string | undefined;
    account_title?: string | undefined;
    address?: WireWithdrawalAddress$Outbound | null | undefined;
    third_party?: boolean | undefined;
};
/** @internal */
export declare const WireWithdrawalBeneficiary$outboundSchema: z.ZodType<WireWithdrawalBeneficiary$Outbound, z.ZodTypeDef, WireWithdrawalBeneficiary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalBeneficiary$ {
    /** @deprecated use `WireWithdrawalBeneficiary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalBeneficiary, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalBeneficiary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalBeneficiary$Outbound, z.ZodTypeDef, WireWithdrawalBeneficiary>;
    /** @deprecated use `WireWithdrawalBeneficiary$Outbound` instead. */
    type Outbound = WireWithdrawalBeneficiary$Outbound;
}
/** @internal */
export declare const WireWithdrawalIntermediaryAddress$inboundSchema: z.ZodType<WireWithdrawalIntermediaryAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalIntermediaryAddress$Outbound = {
    city?: string | undefined;
    country?: string | undefined;
    postal_code?: string | undefined;
    state?: string | undefined;
    streetAddress?: Array<string> | undefined;
};
/** @internal */
export declare const WireWithdrawalIntermediaryAddress$outboundSchema: z.ZodType<WireWithdrawalIntermediaryAddress$Outbound, z.ZodTypeDef, WireWithdrawalIntermediaryAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalIntermediaryAddress$ {
    /** @deprecated use `WireWithdrawalIntermediaryAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalIntermediaryAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalIntermediaryAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalIntermediaryAddress$Outbound, z.ZodTypeDef, WireWithdrawalIntermediaryAddress>;
    /** @deprecated use `WireWithdrawalIntermediaryAddress$Outbound` instead. */
    type Outbound = WireWithdrawalIntermediaryAddress$Outbound;
}
/** @internal */
export declare const WireWithdrawalIntermediary$inboundSchema: z.ZodType<WireWithdrawalIntermediary, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalIntermediary$Outbound = {
    account?: string | undefined;
    account_title?: string | undefined;
    address?: WireWithdrawalIntermediaryAddress$Outbound | null | undefined;
};
/** @internal */
export declare const WireWithdrawalIntermediary$outboundSchema: z.ZodType<WireWithdrawalIntermediary$Outbound, z.ZodTypeDef, WireWithdrawalIntermediary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalIntermediary$ {
    /** @deprecated use `WireWithdrawalIntermediary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalIntermediary, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalIntermediary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalIntermediary$Outbound, z.ZodTypeDef, WireWithdrawalIntermediary>;
    /** @deprecated use `WireWithdrawalIntermediary$Outbound` instead. */
    type Outbound = WireWithdrawalIntermediary$Outbound;
}
/** @internal */
export declare const WireWithdrawalIraDistributionAmount$inboundSchema: z.ZodType<WireWithdrawalIraDistributionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalIraDistributionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalIraDistributionAmount$outboundSchema: z.ZodType<WireWithdrawalIraDistributionAmount$Outbound, z.ZodTypeDef, WireWithdrawalIraDistributionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalIraDistributionAmount$ {
    /** @deprecated use `WireWithdrawalIraDistributionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalIraDistributionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalIraDistributionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalIraDistributionAmount$Outbound, z.ZodTypeDef, WireWithdrawalIraDistributionAmount>;
    /** @deprecated use `WireWithdrawalIraDistributionAmount$Outbound` instead. */
    type Outbound = WireWithdrawalIraDistributionAmount$Outbound;
}
/** @internal */
export declare const WireWithdrawalPercentage$inboundSchema: z.ZodType<WireWithdrawalPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalPercentage$outboundSchema: z.ZodType<WireWithdrawalPercentage$Outbound, z.ZodTypeDef, WireWithdrawalPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalPercentage$ {
    /** @deprecated use `WireWithdrawalPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalPercentage$Outbound, z.ZodTypeDef, WireWithdrawalPercentage>;
    /** @deprecated use `WireWithdrawalPercentage$Outbound` instead. */
    type Outbound = WireWithdrawalPercentage$Outbound;
}
/** @internal */
export declare const WireWithdrawalFederalTaxWithholding$inboundSchema: z.ZodType<WireWithdrawalFederalTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalFederalTaxWithholding$Outbound = {
    amount?: WireWithdrawalIraDistributionAmount$Outbound | null | undefined;
    percentage?: WireWithdrawalPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const WireWithdrawalFederalTaxWithholding$outboundSchema: z.ZodType<WireWithdrawalFederalTaxWithholding$Outbound, z.ZodTypeDef, WireWithdrawalFederalTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalFederalTaxWithholding$ {
    /** @deprecated use `WireWithdrawalFederalTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalFederalTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalFederalTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalFederalTaxWithholding$Outbound, z.ZodTypeDef, WireWithdrawalFederalTaxWithholding>;
    /** @deprecated use `WireWithdrawalFederalTaxWithholding$Outbound` instead. */
    type Outbound = WireWithdrawalFederalTaxWithholding$Outbound;
}
/** @internal */
export declare const WireWithdrawalIraDistributionStateTaxWithholdingAmount$inboundSchema: z.ZodType<WireWithdrawalIraDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalIraDistributionStateTaxWithholdingAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalIraDistributionStateTaxWithholdingAmount$outboundSchema: z.ZodType<WireWithdrawalIraDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, WireWithdrawalIraDistributionStateTaxWithholdingAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalIraDistributionStateTaxWithholdingAmount$ {
    /** @deprecated use `WireWithdrawalIraDistributionStateTaxWithholdingAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalIraDistributionStateTaxWithholdingAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalIraDistributionStateTaxWithholdingAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalIraDistributionStateTaxWithholdingAmount$Outbound, z.ZodTypeDef, WireWithdrawalIraDistributionStateTaxWithholdingAmount>;
    /** @deprecated use `WireWithdrawalIraDistributionStateTaxWithholdingAmount$Outbound` instead. */
    type Outbound = WireWithdrawalIraDistributionStateTaxWithholdingAmount$Outbound;
}
/** @internal */
export declare const WireWithdrawalIraDistributionPercentage$inboundSchema: z.ZodType<WireWithdrawalIraDistributionPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalIraDistributionPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalIraDistributionPercentage$outboundSchema: z.ZodType<WireWithdrawalIraDistributionPercentage$Outbound, z.ZodTypeDef, WireWithdrawalIraDistributionPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalIraDistributionPercentage$ {
    /** @deprecated use `WireWithdrawalIraDistributionPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalIraDistributionPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalIraDistributionPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalIraDistributionPercentage$Outbound, z.ZodTypeDef, WireWithdrawalIraDistributionPercentage>;
    /** @deprecated use `WireWithdrawalIraDistributionPercentage$Outbound` instead. */
    type Outbound = WireWithdrawalIraDistributionPercentage$Outbound;
}
/** @internal */
export declare const WireWithdrawalStateTaxWithholding$inboundSchema: z.ZodType<WireWithdrawalStateTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalStateTaxWithholding$Outbound = {
    amount?: WireWithdrawalIraDistributionStateTaxWithholdingAmount$Outbound | null | undefined;
    percentage?: WireWithdrawalIraDistributionPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const WireWithdrawalStateTaxWithholding$outboundSchema: z.ZodType<WireWithdrawalStateTaxWithholding$Outbound, z.ZodTypeDef, WireWithdrawalStateTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalStateTaxWithholding$ {
    /** @deprecated use `WireWithdrawalStateTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalStateTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalStateTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalStateTaxWithholding$Outbound, z.ZodTypeDef, WireWithdrawalStateTaxWithholding>;
    /** @deprecated use `WireWithdrawalStateTaxWithholding$Outbound` instead. */
    type Outbound = WireWithdrawalStateTaxWithholding$Outbound;
}
/** @internal */
export declare const WireWithdrawalType$inboundSchema: z.ZodType<WireWithdrawalTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WireWithdrawalType$outboundSchema: z.ZodType<WireWithdrawalTypeOpen, z.ZodTypeDef, WireWithdrawalTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalType$ {
    /** @deprecated use `WireWithdrawalType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalTypeOpen, z.ZodTypeDef, WireWithdrawalTypeOpen>;
}
/** @internal */
export declare const WireWithdrawalIraDistribution$inboundSchema: z.ZodType<WireWithdrawalIraDistribution, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalIraDistribution$Outbound = {
    federal_tax_withholding?: WireWithdrawalFederalTaxWithholding$Outbound | null | undefined;
    receiving_institution?: string | undefined;
    state_tax_withholding?: WireWithdrawalStateTaxWithholding$Outbound | null | undefined;
    state_withholding_waiver?: boolean | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalIraDistribution$outboundSchema: z.ZodType<WireWithdrawalIraDistribution$Outbound, z.ZodTypeDef, WireWithdrawalIraDistribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalIraDistribution$ {
    /** @deprecated use `WireWithdrawalIraDistribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalIraDistribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalIraDistribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalIraDistribution$Outbound, z.ZodTypeDef, WireWithdrawalIraDistribution>;
    /** @deprecated use `WireWithdrawalIraDistribution$Outbound` instead. */
    type Outbound = WireWithdrawalIraDistribution$Outbound;
}
/** @internal */
export declare const WireWithdrawalRecipientBankType$inboundSchema: z.ZodType<WireWithdrawalRecipientBankTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WireWithdrawalRecipientBankType$outboundSchema: z.ZodType<WireWithdrawalRecipientBankTypeOpen, z.ZodTypeDef, WireWithdrawalRecipientBankTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalRecipientBankType$ {
    /** @deprecated use `WireWithdrawalRecipientBankType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalRecipientBankTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalRecipientBankType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalRecipientBankTypeOpen, z.ZodTypeDef, WireWithdrawalRecipientBankTypeOpen>;
}
/** @internal */
export declare const WireWithdrawalBankId$inboundSchema: z.ZodType<WireWithdrawalBankId, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalBankId$Outbound = {
    id?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalBankId$outboundSchema: z.ZodType<WireWithdrawalBankId$Outbound, z.ZodTypeDef, WireWithdrawalBankId>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalBankId$ {
    /** @deprecated use `WireWithdrawalBankId$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalBankId, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalBankId$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalBankId$Outbound, z.ZodTypeDef, WireWithdrawalBankId>;
    /** @deprecated use `WireWithdrawalBankId$Outbound` instead. */
    type Outbound = WireWithdrawalBankId$Outbound;
}
/** @internal */
export declare const WireWithdrawalRecipientBankAddress$inboundSchema: z.ZodType<WireWithdrawalRecipientBankAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalRecipientBankAddress$Outbound = {
    city?: string | undefined;
    country?: string | undefined;
    postal_code?: string | undefined;
    state?: string | undefined;
    streetAddress?: Array<string> | undefined;
};
/** @internal */
export declare const WireWithdrawalRecipientBankAddress$outboundSchema: z.ZodType<WireWithdrawalRecipientBankAddress$Outbound, z.ZodTypeDef, WireWithdrawalRecipientBankAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalRecipientBankAddress$ {
    /** @deprecated use `WireWithdrawalRecipientBankAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalRecipientBankAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalRecipientBankAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalRecipientBankAddress$Outbound, z.ZodTypeDef, WireWithdrawalRecipientBankAddress>;
    /** @deprecated use `WireWithdrawalRecipientBankAddress$Outbound` instead. */
    type Outbound = WireWithdrawalRecipientBankAddress$Outbound;
}
/** @internal */
export declare const WireWithdrawalInternationalBankDetails$inboundSchema: z.ZodType<WireWithdrawalInternationalBankDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalInternationalBankDetails$Outbound = {
    additional_info?: string | undefined;
    address?: WireWithdrawalRecipientBankAddress$Outbound | null | undefined;
    bank_name?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalInternationalBankDetails$outboundSchema: z.ZodType<WireWithdrawalInternationalBankDetails$Outbound, z.ZodTypeDef, WireWithdrawalInternationalBankDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalInternationalBankDetails$ {
    /** @deprecated use `WireWithdrawalInternationalBankDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalInternationalBankDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalInternationalBankDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalInternationalBankDetails$Outbound, z.ZodTypeDef, WireWithdrawalInternationalBankDetails>;
    /** @deprecated use `WireWithdrawalInternationalBankDetails$Outbound` instead. */
    type Outbound = WireWithdrawalInternationalBankDetails$Outbound;
}
/** @internal */
export declare const WireWithdrawalRecipientBank$inboundSchema: z.ZodType<WireWithdrawalRecipientBank, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalRecipientBank$Outbound = {
    bank_id?: WireWithdrawalBankId$Outbound | null | undefined;
    international_bank_details?: WireWithdrawalInternationalBankDetails$Outbound | null | undefined;
};
/** @internal */
export declare const WireWithdrawalRecipientBank$outboundSchema: z.ZodType<WireWithdrawalRecipientBank$Outbound, z.ZodTypeDef, WireWithdrawalRecipientBank>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalRecipientBank$ {
    /** @deprecated use `WireWithdrawalRecipientBank$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalRecipientBank, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalRecipientBank$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalRecipientBank$Outbound, z.ZodTypeDef, WireWithdrawalRecipientBank>;
    /** @deprecated use `WireWithdrawalRecipientBank$Outbound` instead. */
    type Outbound = WireWithdrawalRecipientBank$Outbound;
}
/** @internal */
export declare const WireWithdrawalStateState$inboundSchema: z.ZodType<WireWithdrawalStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WireWithdrawalStateState$outboundSchema: z.ZodType<WireWithdrawalStateStateOpen, z.ZodTypeDef, WireWithdrawalStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalStateState$ {
    /** @deprecated use `WireWithdrawalStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalStateStateOpen, z.ZodTypeDef, WireWithdrawalStateStateOpen>;
}
/** @internal */
export declare const WireWithdrawalState$inboundSchema: z.ZodType<WireWithdrawalState, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const WireWithdrawalState$outboundSchema: z.ZodType<WireWithdrawalState$Outbound, z.ZodTypeDef, WireWithdrawalState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalState$ {
    /** @deprecated use `WireWithdrawalState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalState, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalState$Outbound, z.ZodTypeDef, WireWithdrawalState>;
    /** @deprecated use `WireWithdrawalState$Outbound` instead. */
    type Outbound = WireWithdrawalState$Outbound;
}
/** @internal */
export declare const WireWithdrawal$inboundSchema: z.ZodType<WireWithdrawal, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawal$Outbound = {
    amount?: WireWithdrawalAmount$Outbound | null | undefined;
    beneficiary?: WireWithdrawalBeneficiary$Outbound | null | undefined;
    client_transfer_id?: string | undefined;
    fed_reference_number?: string | undefined;
    intermediary?: WireWithdrawalIntermediary$Outbound | null | undefined;
    ira_distribution?: WireWithdrawalIraDistribution$Outbound | null | undefined;
    name?: string | undefined;
    recipient_bank?: WireWithdrawalRecipientBank$Outbound | null | undefined;
    state?: WireWithdrawalState$Outbound | null | undefined;
};
/** @internal */
export declare const WireWithdrawal$outboundSchema: z.ZodType<WireWithdrawal$Outbound, z.ZodTypeDef, WireWithdrawal>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawal$ {
    /** @deprecated use `WireWithdrawal$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawal, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawal$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawal$Outbound, z.ZodTypeDef, WireWithdrawal>;
    /** @deprecated use `WireWithdrawal$Outbound` instead. */
    type Outbound = WireWithdrawal$Outbound;
}
//# sourceMappingURL=wirewithdrawal.d.ts.map