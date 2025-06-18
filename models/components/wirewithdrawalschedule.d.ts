import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The address of the person or entity taking receipt of the wired funds. This will be populated automatically in the case of a valid first-party wire
 */
export type Address = {
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
export type WireWithdrawalScheduleBeneficiary = {
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
    address?: Address | null | undefined;
    /**
     * Indicates if this beneficiary is a third party beneficiary. A wire transfer is considered third party if the beneficiary is not the exact same person and/or entity that the funds originated from. This includes wire transfers where the originator account is an individual account and the beneficiary account is a joint account
     */
    thirdParty?: boolean | undefined;
};
/**
 * The address of the intermediary party
 */
export type WireWithdrawalScheduleAddress = {
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
export type Intermediary = {
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
    address?: WireWithdrawalScheduleAddress | null | undefined;
};
/**
 * The type of bank identifier specified
 */
export declare enum WireWithdrawalScheduleRecipientBankType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Aba = "ABA",
    Bic = "BIC"
}
/**
 * The type of bank identifier specified
 */
export type WireWithdrawalScheduleRecipientBankTypeOpen = OpenEnum<typeof WireWithdrawalScheduleRecipientBankType>;
/**
 * An identifier that represents ABA routing number for domestic wire or BIC for foreign wire
 */
export type BankId = {
    /**
     * The bank identifier
     */
    id?: string | undefined;
    /**
     * The type of bank identifier specified
     */
    type?: WireWithdrawalScheduleRecipientBankTypeOpen | undefined;
};
/**
 * The address of the recipient bank / financial institution
 */
export type WireWithdrawalScheduleRecipientBankAddress = {
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
export type InternationalBankDetails = {
    /**
     * Any additional information to be communicated to the recipient bank, such as intermediary banks to be used.
     */
    additionalInfo?: string | undefined;
    /**
     * The address of the recipient bank / financial institution
     */
    address?: WireWithdrawalScheduleRecipientBankAddress | null | undefined;
    /**
     * The name of the recipient bank / financial institution
     */
    bankName?: string | undefined;
};
/**
 * The recipient bank / financial institution
 */
export type RecipientBank = {
    /**
     * An identifier that represents ABA routing number for domestic wire or BIC for foreign wire
     */
    bankId?: BankId | null | undefined;
    /**
     * Bank details required in the case of an international wire transfer
     */
    internationalBankDetails?: InternationalBankDetails | null | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type WireWithdrawalSchedulePercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The federal tax withholding.
 */
export type WireWithdrawalScheduleFederalTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: WireWithdrawalSchedulePercentage | null | undefined;
};
/**
 * Fixed USD amount to withhold for taxes.
 */
export type WireWithdrawalScheduleRetirementDistributionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type WireWithdrawalScheduleRetirementDistributionPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state tax withholding.
 */
export type WireWithdrawalScheduleStateTaxWithholding = {
    /**
     * Fixed USD amount to withhold for taxes.
     */
    amount?: WireWithdrawalScheduleRetirementDistributionAmount | null | undefined;
    /**
     * Percentage of total disbursement amount to withhold for taxes.
     */
    percentage?: WireWithdrawalScheduleRetirementDistributionPercentage | null | undefined;
};
/**
 * The type of retirement distribution.
 */
export declare enum WireWithdrawalScheduleType {
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
export type WireWithdrawalScheduleTypeOpen = OpenEnum<typeof WireWithdrawalScheduleType>;
/**
 * The distribution info for a retirement account
 */
export type WireWithdrawalScheduleRetirementDistribution = {
    /**
     * The federal tax withholding.
     */
    federalTaxWithholding?: WireWithdrawalScheduleFederalTaxWithholding | null | undefined;
    /**
     * The institution receiving retirement funds when performing a transfer to an identical retirement account type at a different financial institution. This is required for check and wire withdrawals because we can't always identify the institution using the transfer instructions. For cash journals this value will default to "Apex Clearing", regardless of what is passed in here
     */
    receivingInstitution?: string | undefined;
    /**
     * The state tax withholding.
     */
    stateTaxWithholding?: WireWithdrawalScheduleStateTaxWithholding | null | undefined;
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
    type?: WireWithdrawalScheduleTypeOpen | undefined;
};
/**
 * A cash amount in the format of decimal value (mutually exclusive with 'full_disbursement')
 */
export type WireWithdrawalScheduleAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The schedule start date
 */
export type WireWithdrawalScheduleStartDate = {
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
 * The state of the represented schedule
 */
export declare enum WireWithdrawalScheduleState {
    Active = "ACTIVE",
    Canceled = "CANCELED",
    Completed = "COMPLETED"
}
/**
 * The state of the represented schedule
 */
export type WireWithdrawalScheduleStateOpen = OpenEnum<typeof WireWithdrawalScheduleState>;
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export declare enum WireWithdrawalScheduleTimeUnit {
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH"
}
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export type WireWithdrawalScheduleTimeUnitOpen = OpenEnum<typeof WireWithdrawalScheduleTimeUnit>;
/**
 * Common schedule properties
 */
export type WireWithdrawalScheduleScheduleProperties = {
    /**
     * The number of occurrences (empty or 0 indicates unlimited occurrences)
     */
    occurrences?: number | undefined;
    /**
     * The schedule start date
     */
    startDate?: WireWithdrawalScheduleStartDate | null | undefined;
    /**
     * The state of the represented schedule
     */
    state?: WireWithdrawalScheduleStateOpen | undefined;
    /**
     * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    timeUnit?: WireWithdrawalScheduleTimeUnitOpen | undefined;
    /**
     * The multiplier used to determine the length of the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    unitMultiplier?: number | undefined;
};
/**
 * The transfer schedule details
 */
export type WireWithdrawalScheduleScheduleDetails = {
    /**
     * A cash amount in the format of decimal value (mutually exclusive with 'full_disbursement')
     */
    amount?: WireWithdrawalScheduleAmount | null | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_schedule_id and account
     */
    clientScheduleId?: string | undefined;
    /**
     * Flag to indicate a full disbursement transfer (mutually exclusive with 'amount')
     */
    fullDisbursement?: boolean | undefined;
    /**
     * Common schedule properties
     */
    scheduleProperties?: WireWithdrawalScheduleScheduleProperties | null | undefined;
};
/**
 * A withdrawal transfer schedule using the Wire mechanism
 */
export type WireWithdrawalSchedule = {
    /**
     * The beneficiary of the wire withdrawal
     */
    beneficiary?: WireWithdrawalScheduleBeneficiary | null | undefined;
    /**
     * The intermediary party
     */
    intermediary?: Intermediary | null | undefined;
    /**
     * The name of the Wire Withdrawal transfer schedule
     */
    name?: string | undefined;
    /**
     * The recipient bank / financial institution
     */
    recipientBank?: RecipientBank | null | undefined;
    /**
     * The distribution info for a retirement account
     */
    retirementDistribution?: WireWithdrawalScheduleRetirementDistribution | null | undefined;
    /**
     * The transfer schedule details
     */
    scheduleDetails?: WireWithdrawalScheduleScheduleDetails | null | undefined;
};
/** @internal */
export declare const Address$inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown>;
/** @internal */
export type Address$Outbound = {
    city?: string | undefined;
    country?: string | undefined;
    postal_code?: string | undefined;
    state?: string | undefined;
    streetAddress?: Array<string> | undefined;
};
/** @internal */
export declare const Address$outboundSchema: z.ZodType<Address$Outbound, z.ZodTypeDef, Address>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Address$ {
    /** @deprecated use `Address$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown>;
    /** @deprecated use `Address$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Address$Outbound, z.ZodTypeDef, Address>;
    /** @deprecated use `Address$Outbound` instead. */
    type Outbound = Address$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleBeneficiary$inboundSchema: z.ZodType<WireWithdrawalScheduleBeneficiary, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleBeneficiary$Outbound = {
    account?: string | undefined;
    account_title?: string | undefined;
    address?: Address$Outbound | null | undefined;
    third_party?: boolean | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleBeneficiary$outboundSchema: z.ZodType<WireWithdrawalScheduleBeneficiary$Outbound, z.ZodTypeDef, WireWithdrawalScheduleBeneficiary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleBeneficiary$ {
    /** @deprecated use `WireWithdrawalScheduleBeneficiary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleBeneficiary, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleBeneficiary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleBeneficiary$Outbound, z.ZodTypeDef, WireWithdrawalScheduleBeneficiary>;
    /** @deprecated use `WireWithdrawalScheduleBeneficiary$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleBeneficiary$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleAddress$inboundSchema: z.ZodType<WireWithdrawalScheduleAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleAddress$Outbound = {
    city?: string | undefined;
    country?: string | undefined;
    postal_code?: string | undefined;
    state?: string | undefined;
    streetAddress?: Array<string> | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleAddress$outboundSchema: z.ZodType<WireWithdrawalScheduleAddress$Outbound, z.ZodTypeDef, WireWithdrawalScheduleAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleAddress$ {
    /** @deprecated use `WireWithdrawalScheduleAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleAddress$Outbound, z.ZodTypeDef, WireWithdrawalScheduleAddress>;
    /** @deprecated use `WireWithdrawalScheduleAddress$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleAddress$Outbound;
}
/** @internal */
export declare const Intermediary$inboundSchema: z.ZodType<Intermediary, z.ZodTypeDef, unknown>;
/** @internal */
export type Intermediary$Outbound = {
    account?: string | undefined;
    account_title?: string | undefined;
    address?: WireWithdrawalScheduleAddress$Outbound | null | undefined;
};
/** @internal */
export declare const Intermediary$outboundSchema: z.ZodType<Intermediary$Outbound, z.ZodTypeDef, Intermediary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Intermediary$ {
    /** @deprecated use `Intermediary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Intermediary, z.ZodTypeDef, unknown>;
    /** @deprecated use `Intermediary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Intermediary$Outbound, z.ZodTypeDef, Intermediary>;
    /** @deprecated use `Intermediary$Outbound` instead. */
    type Outbound = Intermediary$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleRecipientBankType$inboundSchema: z.ZodType<WireWithdrawalScheduleRecipientBankTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WireWithdrawalScheduleRecipientBankType$outboundSchema: z.ZodType<WireWithdrawalScheduleRecipientBankTypeOpen, z.ZodTypeDef, WireWithdrawalScheduleRecipientBankTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleRecipientBankType$ {
    /** @deprecated use `WireWithdrawalScheduleRecipientBankType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleRecipientBankTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleRecipientBankType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleRecipientBankTypeOpen, z.ZodTypeDef, WireWithdrawalScheduleRecipientBankTypeOpen>;
}
/** @internal */
export declare const BankId$inboundSchema: z.ZodType<BankId, z.ZodTypeDef, unknown>;
/** @internal */
export type BankId$Outbound = {
    id?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BankId$outboundSchema: z.ZodType<BankId$Outbound, z.ZodTypeDef, BankId>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankId$ {
    /** @deprecated use `BankId$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankId, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankId$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankId$Outbound, z.ZodTypeDef, BankId>;
    /** @deprecated use `BankId$Outbound` instead. */
    type Outbound = BankId$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleRecipientBankAddress$inboundSchema: z.ZodType<WireWithdrawalScheduleRecipientBankAddress, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleRecipientBankAddress$Outbound = {
    city?: string | undefined;
    country?: string | undefined;
    postal_code?: string | undefined;
    state?: string | undefined;
    streetAddress?: Array<string> | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleRecipientBankAddress$outboundSchema: z.ZodType<WireWithdrawalScheduleRecipientBankAddress$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRecipientBankAddress>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleRecipientBankAddress$ {
    /** @deprecated use `WireWithdrawalScheduleRecipientBankAddress$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleRecipientBankAddress, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleRecipientBankAddress$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleRecipientBankAddress$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRecipientBankAddress>;
    /** @deprecated use `WireWithdrawalScheduleRecipientBankAddress$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleRecipientBankAddress$Outbound;
}
/** @internal */
export declare const InternationalBankDetails$inboundSchema: z.ZodType<InternationalBankDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type InternationalBankDetails$Outbound = {
    additional_info?: string | undefined;
    address?: WireWithdrawalScheduleRecipientBankAddress$Outbound | null | undefined;
    bank_name?: string | undefined;
};
/** @internal */
export declare const InternationalBankDetails$outboundSchema: z.ZodType<InternationalBankDetails$Outbound, z.ZodTypeDef, InternationalBankDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InternationalBankDetails$ {
    /** @deprecated use `InternationalBankDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InternationalBankDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `InternationalBankDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InternationalBankDetails$Outbound, z.ZodTypeDef, InternationalBankDetails>;
    /** @deprecated use `InternationalBankDetails$Outbound` instead. */
    type Outbound = InternationalBankDetails$Outbound;
}
/** @internal */
export declare const RecipientBank$inboundSchema: z.ZodType<RecipientBank, z.ZodTypeDef, unknown>;
/** @internal */
export type RecipientBank$Outbound = {
    bank_id?: BankId$Outbound | null | undefined;
    international_bank_details?: InternationalBankDetails$Outbound | null | undefined;
};
/** @internal */
export declare const RecipientBank$outboundSchema: z.ZodType<RecipientBank$Outbound, z.ZodTypeDef, RecipientBank>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RecipientBank$ {
    /** @deprecated use `RecipientBank$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RecipientBank, z.ZodTypeDef, unknown>;
    /** @deprecated use `RecipientBank$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RecipientBank$Outbound, z.ZodTypeDef, RecipientBank>;
    /** @deprecated use `RecipientBank$Outbound` instead. */
    type Outbound = RecipientBank$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$inboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$outboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$ {
    /** @deprecated use `WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount>;
    /** @deprecated use `WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$Outbound;
}
/** @internal */
export declare const WireWithdrawalSchedulePercentage$inboundSchema: z.ZodType<WireWithdrawalSchedulePercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulePercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedulePercentage$outboundSchema: z.ZodType<WireWithdrawalSchedulePercentage$Outbound, z.ZodTypeDef, WireWithdrawalSchedulePercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulePercentage$ {
    /** @deprecated use `WireWithdrawalSchedulePercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulePercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulePercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulePercentage$Outbound, z.ZodTypeDef, WireWithdrawalSchedulePercentage>;
    /** @deprecated use `WireWithdrawalSchedulePercentage$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulePercentage$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleFederalTaxWithholding$inboundSchema: z.ZodType<WireWithdrawalScheduleFederalTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleFederalTaxWithholding$Outbound = {
    amount?: WireWithdrawalScheduleRetirementDistributionFederalTaxWithholdingAmount$Outbound | null | undefined;
    percentage?: WireWithdrawalSchedulePercentage$Outbound | null | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleFederalTaxWithholding$outboundSchema: z.ZodType<WireWithdrawalScheduleFederalTaxWithholding$Outbound, z.ZodTypeDef, WireWithdrawalScheduleFederalTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleFederalTaxWithholding$ {
    /** @deprecated use `WireWithdrawalScheduleFederalTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleFederalTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleFederalTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleFederalTaxWithholding$Outbound, z.ZodTypeDef, WireWithdrawalScheduleFederalTaxWithholding>;
    /** @deprecated use `WireWithdrawalScheduleFederalTaxWithholding$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleFederalTaxWithholding$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleRetirementDistributionAmount$inboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleRetirementDistributionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleRetirementDistributionAmount$outboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionAmount$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRetirementDistributionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleRetirementDistributionAmount$ {
    /** @deprecated use `WireWithdrawalScheduleRetirementDistributionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleRetirementDistributionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionAmount$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRetirementDistributionAmount>;
    /** @deprecated use `WireWithdrawalScheduleRetirementDistributionAmount$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleRetirementDistributionAmount$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleRetirementDistributionPercentage$inboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleRetirementDistributionPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleRetirementDistributionPercentage$outboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionPercentage$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRetirementDistributionPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleRetirementDistributionPercentage$ {
    /** @deprecated use `WireWithdrawalScheduleRetirementDistributionPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleRetirementDistributionPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistributionPercentage$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRetirementDistributionPercentage>;
    /** @deprecated use `WireWithdrawalScheduleRetirementDistributionPercentage$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleRetirementDistributionPercentage$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleStateTaxWithholding$inboundSchema: z.ZodType<WireWithdrawalScheduleStateTaxWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleStateTaxWithholding$Outbound = {
    amount?: WireWithdrawalScheduleRetirementDistributionAmount$Outbound | null | undefined;
    percentage?: WireWithdrawalScheduleRetirementDistributionPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleStateTaxWithholding$outboundSchema: z.ZodType<WireWithdrawalScheduleStateTaxWithholding$Outbound, z.ZodTypeDef, WireWithdrawalScheduleStateTaxWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleStateTaxWithholding$ {
    /** @deprecated use `WireWithdrawalScheduleStateTaxWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleStateTaxWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleStateTaxWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleStateTaxWithholding$Outbound, z.ZodTypeDef, WireWithdrawalScheduleStateTaxWithholding>;
    /** @deprecated use `WireWithdrawalScheduleStateTaxWithholding$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleStateTaxWithholding$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleType$inboundSchema: z.ZodType<WireWithdrawalScheduleTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WireWithdrawalScheduleType$outboundSchema: z.ZodType<WireWithdrawalScheduleTypeOpen, z.ZodTypeDef, WireWithdrawalScheduleTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleType$ {
    /** @deprecated use `WireWithdrawalScheduleType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleTypeOpen, z.ZodTypeDef, WireWithdrawalScheduleTypeOpen>;
}
/** @internal */
export declare const WireWithdrawalScheduleRetirementDistribution$inboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistribution, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleRetirementDistribution$Outbound = {
    federal_tax_withholding?: WireWithdrawalScheduleFederalTaxWithholding$Outbound | null | undefined;
    receiving_institution?: string | undefined;
    state_tax_withholding?: WireWithdrawalScheduleStateTaxWithholding$Outbound | null | undefined;
    state_withholding_waiver?: boolean | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleRetirementDistribution$outboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistribution$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRetirementDistribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleRetirementDistribution$ {
    /** @deprecated use `WireWithdrawalScheduleRetirementDistribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleRetirementDistribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleRetirementDistribution$Outbound, z.ZodTypeDef, WireWithdrawalScheduleRetirementDistribution>;
    /** @deprecated use `WireWithdrawalScheduleRetirementDistribution$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleRetirementDistribution$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleAmount$inboundSchema: z.ZodType<WireWithdrawalScheduleAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleAmount$outboundSchema: z.ZodType<WireWithdrawalScheduleAmount$Outbound, z.ZodTypeDef, WireWithdrawalScheduleAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleAmount$ {
    /** @deprecated use `WireWithdrawalScheduleAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleAmount$Outbound, z.ZodTypeDef, WireWithdrawalScheduleAmount>;
    /** @deprecated use `WireWithdrawalScheduleAmount$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleAmount$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleStartDate$inboundSchema: z.ZodType<WireWithdrawalScheduleStartDate, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleStartDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleStartDate$outboundSchema: z.ZodType<WireWithdrawalScheduleStartDate$Outbound, z.ZodTypeDef, WireWithdrawalScheduleStartDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleStartDate$ {
    /** @deprecated use `WireWithdrawalScheduleStartDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleStartDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleStartDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleStartDate$Outbound, z.ZodTypeDef, WireWithdrawalScheduleStartDate>;
    /** @deprecated use `WireWithdrawalScheduleStartDate$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleStartDate$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleState$inboundSchema: z.ZodType<WireWithdrawalScheduleStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WireWithdrawalScheduleState$outboundSchema: z.ZodType<WireWithdrawalScheduleStateOpen, z.ZodTypeDef, WireWithdrawalScheduleStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleState$ {
    /** @deprecated use `WireWithdrawalScheduleState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleStateOpen, z.ZodTypeDef, WireWithdrawalScheduleStateOpen>;
}
/** @internal */
export declare const WireWithdrawalScheduleTimeUnit$inboundSchema: z.ZodType<WireWithdrawalScheduleTimeUnitOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WireWithdrawalScheduleTimeUnit$outboundSchema: z.ZodType<WireWithdrawalScheduleTimeUnitOpen, z.ZodTypeDef, WireWithdrawalScheduleTimeUnitOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleTimeUnit$ {
    /** @deprecated use `WireWithdrawalScheduleTimeUnit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleTimeUnitOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleTimeUnit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleTimeUnitOpen, z.ZodTypeDef, WireWithdrawalScheduleTimeUnitOpen>;
}
/** @internal */
export declare const WireWithdrawalScheduleScheduleProperties$inboundSchema: z.ZodType<WireWithdrawalScheduleScheduleProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleScheduleProperties$Outbound = {
    occurrences?: number | undefined;
    start_date?: WireWithdrawalScheduleStartDate$Outbound | null | undefined;
    state?: string | undefined;
    time_unit?: string | undefined;
    unit_multiplier?: number | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleScheduleProperties$outboundSchema: z.ZodType<WireWithdrawalScheduleScheduleProperties$Outbound, z.ZodTypeDef, WireWithdrawalScheduleScheduleProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleScheduleProperties$ {
    /** @deprecated use `WireWithdrawalScheduleScheduleProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleScheduleProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleScheduleProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleScheduleProperties$Outbound, z.ZodTypeDef, WireWithdrawalScheduleScheduleProperties>;
    /** @deprecated use `WireWithdrawalScheduleScheduleProperties$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleScheduleProperties$Outbound;
}
/** @internal */
export declare const WireWithdrawalScheduleScheduleDetails$inboundSchema: z.ZodType<WireWithdrawalScheduleScheduleDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleScheduleDetails$Outbound = {
    amount?: WireWithdrawalScheduleAmount$Outbound | null | undefined;
    client_schedule_id?: string | undefined;
    full_disbursement?: boolean | undefined;
    schedule_properties?: WireWithdrawalScheduleScheduleProperties$Outbound | null | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleScheduleDetails$outboundSchema: z.ZodType<WireWithdrawalScheduleScheduleDetails$Outbound, z.ZodTypeDef, WireWithdrawalScheduleScheduleDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleScheduleDetails$ {
    /** @deprecated use `WireWithdrawalScheduleScheduleDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleScheduleDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleScheduleDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleScheduleDetails$Outbound, z.ZodTypeDef, WireWithdrawalScheduleScheduleDetails>;
    /** @deprecated use `WireWithdrawalScheduleScheduleDetails$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleScheduleDetails$Outbound;
}
/** @internal */
export declare const WireWithdrawalSchedule$inboundSchema: z.ZodType<WireWithdrawalSchedule, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedule$Outbound = {
    beneficiary?: WireWithdrawalScheduleBeneficiary$Outbound | null | undefined;
    intermediary?: Intermediary$Outbound | null | undefined;
    name?: string | undefined;
    recipient_bank?: RecipientBank$Outbound | null | undefined;
    retirement_distribution?: WireWithdrawalScheduleRetirementDistribution$Outbound | null | undefined;
    schedule_details?: WireWithdrawalScheduleScheduleDetails$Outbound | null | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedule$outboundSchema: z.ZodType<WireWithdrawalSchedule$Outbound, z.ZodTypeDef, WireWithdrawalSchedule>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedule$ {
    /** @deprecated use `WireWithdrawalSchedule$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedule, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedule$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedule$Outbound, z.ZodTypeDef, WireWithdrawalSchedule>;
    /** @deprecated use `WireWithdrawalSchedule$Outbound` instead. */
    type Outbound = WireWithdrawalSchedule$Outbound;
}
//# sourceMappingURL=wirewithdrawalschedule.d.ts.map