import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Beneficiary, Beneficiary$Outbound } from "./beneficiary.js";
import { ForeignBondTradingDetail, ForeignBondTradingDetail$Outbound } from "./foreignbondtradingdetail.js";
import { RelatedPep, RelatedPep$Outbound } from "./relatedpep.js";
/**
 * Metadata for the BENEFICIARY_DESIGNATION enrollment type.
 */
export type BeneficiaryEnrollmentMetadata = {
    /**
     * Contingent Beneficiary list is optional, with a maximum of five contingent beneficiaries.
     */
    contingentBeneficiaries?: Array<Beneficiary> | undefined;
    /**
     * At least one primary beneficiary must be provided, with a maximum of five primary beneficiaries.
     */
    primaryBeneficiaries?: Array<Beneficiary> | undefined;
};
/**
 * The consent method for the enrollment. Defaults to ESIGNATURE.
 */
export declare enum ConsentMethod {
    ConsentMethodUnspecified = "CONSENT_METHOD_UNSPECIFIED",
    Esignature = "ESIGNATURE",
    WetSignature = "WET_SIGNATURE",
    NegativeConsentConversion = "NEGATIVE_CONSENT_CONVERSION",
    InternalConversion = "INTERNAL_CONVERSION"
}
/**
 * The consent method for the enrollment. Defaults to ESIGNATURE.
 */
export type ConsentMethodOpen = OpenEnum<typeof ConsentMethod>;
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * The initial deposit amount in USD
 */
export type InitialDepositAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The initial amount of money placed into the account by the customer upon or after the account's establishment.
 */
export type DepositedFunds = {
    /**
     * The initial deposit amount in USD
     */
    initialDepositAmount?: InitialDepositAmount | null | undefined;
    /**
     * The source of the initial deposit
     */
    initialDepositSource?: string | undefined;
};
/**
 * The client determined account risk rating of the entity customer
 */
export declare enum EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRating {
    DeterminedAccountRiskRatingUnspecified = "DETERMINED_ACCOUNT_RISK_RATING_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}
/**
 * The client determined account risk rating of the entity customer
 */
export type EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRatingOpen = OpenEnum<typeof EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRating>;
/**
 * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
 */
export type OtherAccounts = {
    /**
     * Other account names held at Apex
     */
    accountNames?: Array<string> | undefined;
    /**
     * Other account numbers held at Apex
     */
    accountNumbers?: Array<string> | undefined;
    /**
     * The owner has other accounts at Apex
     */
    ownerHasOtherAccountsAtApex?: boolean | undefined;
};
/**
 * Disclosure of the account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
 */
export type FinancialProfile = {
    /**
     * Bank names with whom the entity maintains a relationship with (e.g., accounts held with the bank)
     */
    bankingRelationships?: Array<string> | undefined;
    /**
     * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
     */
    otherAccounts?: OtherAccounts | null | undefined;
    /**
     * The primary source of funds that will be deposited to this account
     */
    primarySourceOfDepositedFunds?: string | undefined;
};
/**
 * The foreign bond trading countries details
 */
export type ForeignBondTradingDetails = {
    /**
     * Does the account anticipate trading in foreign bonds
     */
    foreignBondTrading?: boolean | undefined;
    /**
     * The foreign bond trading countries details. If yes, than please provide details
     */
    foreignBondTradingDetail?: Array<ForeignBondTradingDetail> | undefined;
};
/**
 * The percentage, by volume, of the account's trades which will involve low priced securities
 */
export type LowPricedSecuritiesPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
 */
export type LowPricedSecurities = {
    /**
     * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
     */
    lowPricedSecurities?: boolean | undefined;
    /**
     * The percentage, by volume, of the account's trades which will involve low priced securities
     */
    lowPricedSecuritiesPercentage?: LowPricedSecuritiesPercentage | null | undefined;
};
/**
 * The primary account activity type
 */
export declare enum EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityType {
    PrimaryAccountActivityTypeUnspecified = "PRIMARY_ACCOUNT_ACTIVITY_TYPE_UNSPECIFIED",
    ActiveTrading = "ACTIVE_TRADING",
    ShortTermInvesting = "SHORT_TERM_INVESTING",
    LongTermInvesting = "LONG_TERM_INVESTING"
}
/**
 * The primary account activity type
 */
export type EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityTypeOpen = OpenEnum<typeof EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityType>;
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export declare enum EnrollmentCorporationEnrollmentMetadataWithdrawalFrequency {
    WithdrawalFrequencyUnspecified = "WITHDRAWAL_FREQUENCY_UNSPECIFIED",
    Frequent = "FREQUENT",
    Occasional = "OCCASIONAL",
    Rare = "RARE"
}
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export type EnrollmentCorporationEnrollmentMetadataWithdrawalFrequencyOpen = OpenEnum<typeof EnrollmentCorporationEnrollmentMetadataWithdrawalFrequency>;
/**
 * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
 */
export type PlannedActivity = {
    /**
     * The foreign bond trading countries details
     */
    foreignBondTradingDetails?: ForeignBondTradingDetails | null | undefined;
    /**
     * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
     */
    lowPricedSecurities?: LowPricedSecurities | null | undefined;
    /**
     * The primary account activity type
     */
    primaryAccountActivityType?: EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityTypeOpen | undefined;
    /**
     * The frequency by which cash is anticipated to be withdrawn from the account
     */
    withdrawalFrequency?: EnrollmentCorporationEnrollmentMetadataWithdrawalFrequencyOpen | undefined;
};
/**
 * Information about the related politically exposed persons
 */
export type RelatedPepDetails = {
    /**
     * Indication as to whether or not an account has direct or indirect related politically exposed persons
     */
    directOrIndirectRelatedPeps?: boolean | undefined;
    /**
     * Related Peps
     */
    relatedPeps?: Array<RelatedPep> | undefined;
};
/**
 * Enrollment metadata for entity accounts
 */
export type EddAccountEnrollmentMetadata = {
    /**
     * The initial amount of money placed into the account by the customer upon or after the account's establishment.
     */
    depositedFunds?: DepositedFunds | null | undefined;
    /**
     * The client determined account risk rating of the entity customer
     */
    determinedAccountRiskRating?: EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRatingOpen | undefined;
    /**
     * Disclosure of the account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
     */
    financialProfile?: FinancialProfile | null | undefined;
    /**
     * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
     */
    plannedActivity?: PlannedActivity | null | undefined;
    /**
     * Information about the related politically exposed persons
     */
    relatedPepDetails?: RelatedPepDetails | null | undefined;
    /**
     * The scope of the business for the entity customer
     */
    scopeOfBusiness?: string | undefined;
};
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentCorporationEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentCorporationEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentCorporationEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the REGISTRATION_CORPORATION type
 */
export type CorporationEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Enrollment metadata for entity accounts
     */
    eddAccountEnrollmentMetadata?: EddAccountEnrollmentMetadata | null | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentCorporationEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentFdicCashSweepOpen = OpenEnum<typeof EnrollmentFdicCashSweep>;
/**
 * Metadata for the REGISTRATION_CUSTODIAL type
 */
export type CustodialEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Metadata for the REGISTRATION_ESTATE enrollment type
 */
export type EstateEnrollmentMetadata = {
    /**
     * The document id for the certificate of appointment
     */
    certificateOfAppointmentDocumentId?: string | undefined;
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweep>;
/**
 * The initial deposit amount in USD
 */
export type EnrollmentInitialDepositAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The initial amount of money placed into the account by the entity upon or after the account's establishment.
 */
export type EnrollmentDepositedFunds = {
    /**
     * The initial deposit amount in USD
     */
    initialDepositAmount?: EnrollmentInitialDepositAmount | null | undefined;
    /**
     * The source of the initial deposit
     */
    initialDepositSource?: string | undefined;
};
/**
 * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
 */
export type EnrollmentOtherAccounts = {
    /**
     * Other account names held at Apex
     */
    accountNames?: Array<string> | undefined;
    /**
     * Other account numbers held at Apex
     */
    accountNumbers?: Array<string> | undefined;
    /**
     * The owner has other accounts at Apex
     */
    ownerHasOtherAccountsAtApex?: boolean | undefined;
};
/**
 * Disclosure of the entity account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
 */
export type EnrollmentFinancialProfile = {
    /**
     * Bank names with whom the entity maintains a relationship with (e.g., accounts held with the bank)
     */
    bankingRelationships?: Array<string> | undefined;
    /**
     * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
     */
    otherAccounts?: EnrollmentOtherAccounts | null | undefined;
    /**
     * The primary source of funds that will be deposited to this account
     */
    primarySourceOfDepositedFunds?: string | undefined;
};
/**
 * The foreign bond trading countries details
 */
export type EnrollmentForeignBondTradingDetails = {
    /**
     * Does the account anticipate trading in foreign bonds
     */
    foreignBondTrading?: boolean | undefined;
    /**
     * The foreign bond trading countries details. If yes, than please provide details
     */
    foreignBondTradingDetail?: Array<ForeignBondTradingDetail> | undefined;
};
/**
 * The percentage, by volume, of the account's trades which will involve low priced securities
 */
export type EnrollmentLowPricedSecuritiesPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
 */
export type EnrollmentLowPricedSecurities = {
    /**
     * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
     */
    lowPricedSecurities?: boolean | undefined;
    /**
     * The percentage, by volume, of the account's trades which will involve low priced securities
     */
    lowPricedSecuritiesPercentage?: EnrollmentLowPricedSecuritiesPercentage | null | undefined;
};
/**
 * The primary account activity type
 */
export declare enum EnrollmentPrimaryAccountActivityType {
    PrimaryAccountActivityTypeUnspecified = "PRIMARY_ACCOUNT_ACTIVITY_TYPE_UNSPECIFIED",
    ActiveTrading = "ACTIVE_TRADING",
    ShortTermInvesting = "SHORT_TERM_INVESTING",
    LongTermInvesting = "LONG_TERM_INVESTING"
}
/**
 * The primary account activity type
 */
export type EnrollmentPrimaryAccountActivityTypeOpen = OpenEnum<typeof EnrollmentPrimaryAccountActivityType>;
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export declare enum EnrollmentWithdrawalFrequency {
    WithdrawalFrequencyUnspecified = "WITHDRAWAL_FREQUENCY_UNSPECIFIED",
    Frequent = "FREQUENT",
    Occasional = "OCCASIONAL",
    Rare = "RARE"
}
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export type EnrollmentWithdrawalFrequencyOpen = OpenEnum<typeof EnrollmentWithdrawalFrequency>;
/**
 * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
 */
export type EnrollmentPlannedActivity = {
    /**
     * The foreign bond trading countries details
     */
    foreignBondTradingDetails?: EnrollmentForeignBondTradingDetails | null | undefined;
    /**
     * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
     */
    lowPricedSecurities?: EnrollmentLowPricedSecurities | null | undefined;
    /**
     * The primary account activity type
     */
    primaryAccountActivityType?: EnrollmentPrimaryAccountActivityTypeOpen | undefined;
    /**
     * The frequency by which cash is anticipated to be withdrawn from the account
     */
    withdrawalFrequency?: EnrollmentWithdrawalFrequencyOpen | undefined;
};
/**
 * Information about the related politically exposed persons
 */
export type EnrollmentRelatedPepDetails = {
    /**
     * Indication as to whether or not an account has direct or indirect related politically exposed persons
     */
    directOrIndirectRelatedPeps?: boolean | undefined;
    /**
     * Related Peps
     */
    relatedPeps?: Array<RelatedPep> | undefined;
};
/**
 * Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.
 */
export type ForeignNaturalPersonAccountEnrollmentMetadata = {
    /**
     * The initial amount of money placed into the account by the entity upon or after the account's establishment.
     */
    depositedFunds?: EnrollmentDepositedFunds | null | undefined;
    /**
     * Disclosure of the entity account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
     */
    financialProfile?: EnrollmentFinancialProfile | null | undefined;
    /**
     * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
     */
    plannedActivity?: EnrollmentPlannedActivity | null | undefined;
    /**
     * Information about the related politically exposed persons
     */
    relatedPepDetails?: EnrollmentRelatedPepDetails | null | undefined;
};
/**
 * Metadata for the REGISTRATION_INDIVIDUAL_FOREIGN type
 */
export type ForeignIndividualAccountEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweepOpen | undefined;
    /**
     * Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.
     */
    foreignNaturalPersonAccountEnrollmentMetadata?: ForeignNaturalPersonAccountEnrollmentMetadata | null | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweep>;
/**
 * The initial deposit amount in USD
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The initial amount of money placed into the account by the entity upon or after the account's establishment.
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds = {
    /**
     * The initial deposit amount in USD
     */
    initialDepositAmount?: EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount | null | undefined;
    /**
     * The source of the initial deposit
     */
    initialDepositSource?: string | undefined;
};
/**
 * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts = {
    /**
     * Other account names held at Apex
     */
    accountNames?: Array<string> | undefined;
    /**
     * Other account numbers held at Apex
     */
    accountNumbers?: Array<string> | undefined;
    /**
     * The owner has other accounts at Apex
     */
    ownerHasOtherAccountsAtApex?: boolean | undefined;
};
/**
 * Disclosure of the entity account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile = {
    /**
     * Bank names with whom the entity maintains a relationship with (e.g., accounts held with the bank)
     */
    bankingRelationships?: Array<string> | undefined;
    /**
     * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
     */
    otherAccounts?: EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts | null | undefined;
    /**
     * The primary source of funds that will be deposited to this account
     */
    primarySourceOfDepositedFunds?: string | undefined;
};
/**
 * The foreign bond trading countries details
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails = {
    /**
     * Does the account anticipate trading in foreign bonds
     */
    foreignBondTrading?: boolean | undefined;
    /**
     * The foreign bond trading countries details. If yes, than please provide details
     */
    foreignBondTradingDetail?: Array<ForeignBondTradingDetail> | undefined;
};
/**
 * The percentage, by volume, of the account's trades which will involve low priced securities
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities = {
    /**
     * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
     */
    lowPricedSecurities?: boolean | undefined;
    /**
     * The percentage, by volume, of the account's trades which will involve low priced securities
     */
    lowPricedSecuritiesPercentage?: EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage | null | undefined;
};
/**
 * The primary account activity type
 */
export declare enum EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityType {
    PrimaryAccountActivityTypeUnspecified = "PRIMARY_ACCOUNT_ACTIVITY_TYPE_UNSPECIFIED",
    ActiveTrading = "ACTIVE_TRADING",
    ShortTermInvesting = "SHORT_TERM_INVESTING",
    LongTermInvesting = "LONG_TERM_INVESTING"
}
/**
 * The primary account activity type
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityTypeOpen = OpenEnum<typeof EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityType>;
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export declare enum EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency {
    WithdrawalFrequencyUnspecified = "WITHDRAWAL_FREQUENCY_UNSPECIFIED",
    Frequent = "FREQUENT",
    Occasional = "OCCASIONAL",
    Rare = "RARE"
}
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequencyOpen = OpenEnum<typeof EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency>;
/**
 * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity = {
    /**
     * The foreign bond trading countries details
     */
    foreignBondTradingDetails?: EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails | null | undefined;
    /**
     * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
     */
    lowPricedSecurities?: EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities | null | undefined;
    /**
     * The primary account activity type
     */
    primaryAccountActivityType?: EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityTypeOpen | undefined;
    /**
     * The frequency by which cash is anticipated to be withdrawn from the account
     */
    withdrawalFrequency?: EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequencyOpen | undefined;
};
/**
 * Information about the related politically exposed persons
 */
export type EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails = {
    /**
     * Indication as to whether or not an account has direct or indirect related politically exposed persons
     */
    directOrIndirectRelatedPeps?: boolean | undefined;
    /**
     * Related Peps
     */
    relatedPeps?: Array<RelatedPep> | undefined;
};
/**
 * Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.
 */
export type EnrollmentForeignNaturalPersonAccountEnrollmentMetadata = {
    /**
     * The initial amount of money placed into the account by the entity upon or after the account's establishment.
     */
    depositedFunds?: EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds | null | undefined;
    /**
     * Disclosure of the entity account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
     */
    financialProfile?: EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile | null | undefined;
    /**
     * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
     */
    plannedActivity?: EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity | null | undefined;
    /**
     * Information about the related politically exposed persons
     */
    relatedPepDetails?: EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails | null | undefined;
};
/**
 * Metadata for the REGISTRATION_JOINT_FOREIGN_WROS type
 */
export type ForeignJointAccountEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweepOpen | undefined;
    /**
     * Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.
     */
    foreignNaturalPersonAccountEnrollmentMetadata?: EnrollmentForeignNaturalPersonAccountEnrollmentMetadata | null | undefined;
};
/**
 * Metadata for the FULLY_PAID_STOCK_LENDING enrollment type
 */
export type FpslEnrollmentMetadata = {
    /**
     * Customer Percentage for FPSL Enrollment.
     */
    customerPercentage?: number | undefined;
    /**
     * Firm Percentage for FPSL Enrollment.
     */
    firmPercentage?: number | undefined;
    /**
     * FPSL MSLA minimum rate determines which MSLA split agreement to display
     */
    fpslMslaMinimumRate?: number | undefined;
    /**
     * Introducing Broker Percentage for FPSL Enrollment.
     */
    introducingBrokerPercentage?: number | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentIndividualEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentIndividualEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentIndividualEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the INDIVIDUAL enrollment type
 */
export type IndividualEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentIndividualEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweep>;
/**
 * The birth date of the owner from whom the account is inherited
 */
export type InheritedFromOwnerBirthDate = {
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
 * The death date of the owner from whom the account is inherited
 */
export type InheritedFromOwnerDeathDate = {
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
 * Metadata for the REGISTRATION_IRA_BENEFICIARY_ROTH and REGISTRATION_IRA_BENEFICIARY_TRADITIONAL enrollment type
 */
export type IraBeneficiaryEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweepOpen | undefined;
    /**
     * The birth date of the owner from whom the account is inherited
     */
    inheritedFromOwnerBirthDate?: InheritedFromOwnerBirthDate | null | undefined;
    /**
     * The death date of the owner from whom the account is inherited
     */
    inheritedFromOwnerDeathDate?: InheritedFromOwnerDeathDate | null | undefined;
    /**
     * The name of the owner from whom the account is inherited
     */
    inheritedFromOwnerName?: string | undefined;
    /**
     * Indicates if the customer is the spouse of the decedent
     */
    inheritorIsDecedentsSpouse?: boolean | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentIraRolloverEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentIraRolloverEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentIraRolloverEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the ROLLOVER_IRA_REGISTRATION enrollment type
 */
export type IraRolloverEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentIraRolloverEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentIraRothEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentIraRothEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentIraRothEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the ROTH_IRA_REGISTRATION enrollment type
 */
export type IraRothEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentIraRothEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentIraSepEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentIraSepEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentIraSepEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the SEP_IRA_REGISTRATION enrollment type
 */
export type IraSepEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentIraSepEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentIraSimpleEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentIraSimpleEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentIraSimpleEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the SIMPLE_IRA_REGISTRATION enrollment type
 */
export type IraSimpleEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentIraSimpleEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the TRADITIONAL_IRA_REGISTRATION enrollment type
 */
export type IraTraditionalEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweep>;
/**
 * The legal residency state of a married couple
 */
export declare enum EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCouple {
    LegalResidencyStateOfMarriedCoupleUnspecified = "LEGAL_RESIDENCY_STATE_OF_MARRIED_COUPLE_UNSPECIFIED",
    Ak = "AK",
    Az = "AZ",
    Ar = "AR",
    Ca = "CA",
    De = "DE",
    Fl = "FL",
    Hi = "HI",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ky = "KY",
    La = "LA",
    Md = "MD",
    Ma = "MA",
    Mi = "MI",
    Ms = "MS",
    Mo = "MO",
    Nv = "NV",
    Nj = "NJ",
    Nm = "NM",
    Ny = "NY",
    Nc = "NC",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Ri = "RI",
    Tn = "TN",
    Tx = "TX",
    Vt = "VT",
    Va = "VA",
    Wa = "WA",
    Wi = "WI",
    Wy = "WY"
}
/**
 * The legal residency state of a married couple
 */
export type EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCoupleOpen = OpenEnum<typeof EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCouple>;
/**
 * Metadata for the JOINT_COMMUNITY_PROPERTY_REGISTRATION enrollment type
 */
export type JointCommunityPropertyEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweepOpen | undefined;
    /**
     * The legal residency state of a married couple
     */
    legalResidencyStateOfMarriedCouple?: EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCoupleOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep>;
/**
 * The legal residency state of a married couple
 */
export declare enum EnrollmentLegalResidencyStateOfMarriedCouple {
    LegalResidencyStateOfMarriedCoupleUnspecified = "LEGAL_RESIDENCY_STATE_OF_MARRIED_COUPLE_UNSPECIFIED",
    Ak = "AK",
    Az = "AZ",
    Ar = "AR",
    Ca = "CA",
    De = "DE",
    Fl = "FL",
    Hi = "HI",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ky = "KY",
    La = "LA",
    Md = "MD",
    Ma = "MA",
    Mi = "MI",
    Ms = "MS",
    Mo = "MO",
    Nv = "NV",
    Nj = "NJ",
    Nm = "NM",
    Ny = "NY",
    Nc = "NC",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Ri = "RI",
    Tn = "TN",
    Tx = "TX",
    Vt = "VT",
    Va = "VA",
    Wa = "WA",
    Wi = "WI",
    Wy = "WY"
}
/**
 * The legal residency state of a married couple
 */
export type EnrollmentLegalResidencyStateOfMarriedCoupleOpen = OpenEnum<typeof EnrollmentLegalResidencyStateOfMarriedCouple>;
/**
 * Metadata for the JOINT_TENANTS_BY_ENTIRETY_REGISTRATION enrollment type
 */
export type JointTenantsByEntiretyEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweepOpen | undefined;
    /**
     * The legal residency state of a married couple
     */
    legalResidencyStateOfMarriedCouple?: EnrollmentLegalResidencyStateOfMarriedCoupleOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the JOINT_TENANTS_IN_COMMON_REGISTRATION enrollment type
 */
export type JointTenantsInCommonEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the JOINT_WITH_RIGHTS_OF_SURVIVORSHIP_REGISTRATION enrollment type
 */
export type JointWithRightsOfSurvivorshipEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * The initial deposit amount in USD
 */
export type EnrollmentLlcEnrollmentMetadataInitialDepositAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The initial amount of money placed into the account by the customer upon or after the account's establishment.
 */
export type EnrollmentLlcEnrollmentMetadataDepositedFunds = {
    /**
     * The initial deposit amount in USD
     */
    initialDepositAmount?: EnrollmentLlcEnrollmentMetadataInitialDepositAmount | null | undefined;
    /**
     * The source of the initial deposit
     */
    initialDepositSource?: string | undefined;
};
/**
 * The client determined account risk rating of the entity customer
 */
export declare enum EnrollmentDeterminedAccountRiskRating {
    DeterminedAccountRiskRatingUnspecified = "DETERMINED_ACCOUNT_RISK_RATING_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}
/**
 * The client determined account risk rating of the entity customer
 */
export type EnrollmentDeterminedAccountRiskRatingOpen = OpenEnum<typeof EnrollmentDeterminedAccountRiskRating>;
/**
 * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
 */
export type EnrollmentLlcEnrollmentMetadataOtherAccounts = {
    /**
     * Other account names held at Apex
     */
    accountNames?: Array<string> | undefined;
    /**
     * Other account numbers held at Apex
     */
    accountNumbers?: Array<string> | undefined;
    /**
     * The owner has other accounts at Apex
     */
    ownerHasOtherAccountsAtApex?: boolean | undefined;
};
/**
 * Disclosure of the account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
 */
export type EnrollmentLlcEnrollmentMetadataFinancialProfile = {
    /**
     * Bank names with whom the entity maintains a relationship with (e.g., accounts held with the bank)
     */
    bankingRelationships?: Array<string> | undefined;
    /**
     * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
     */
    otherAccounts?: EnrollmentLlcEnrollmentMetadataOtherAccounts | null | undefined;
    /**
     * The primary source of funds that will be deposited to this account
     */
    primarySourceOfDepositedFunds?: string | undefined;
};
/**
 * The foreign bond trading countries details
 */
export type EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails = {
    /**
     * Does the account anticipate trading in foreign bonds
     */
    foreignBondTrading?: boolean | undefined;
    /**
     * The foreign bond trading countries details. If yes, than please provide details
     */
    foreignBondTradingDetail?: Array<ForeignBondTradingDetail> | undefined;
};
/**
 * The percentage, by volume, of the account's trades which will involve low priced securities
 */
export type EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
 */
export type EnrollmentLlcEnrollmentMetadataLowPricedSecurities = {
    /**
     * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
     */
    lowPricedSecurities?: boolean | undefined;
    /**
     * The percentage, by volume, of the account's trades which will involve low priced securities
     */
    lowPricedSecuritiesPercentage?: EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage | null | undefined;
};
/**
 * The primary account activity type
 */
export declare enum EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityType {
    PrimaryAccountActivityTypeUnspecified = "PRIMARY_ACCOUNT_ACTIVITY_TYPE_UNSPECIFIED",
    ActiveTrading = "ACTIVE_TRADING",
    ShortTermInvesting = "SHORT_TERM_INVESTING",
    LongTermInvesting = "LONG_TERM_INVESTING"
}
/**
 * The primary account activity type
 */
export type EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityTypeOpen = OpenEnum<typeof EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityType>;
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export declare enum EnrollmentLlcEnrollmentMetadataWithdrawalFrequency {
    WithdrawalFrequencyUnspecified = "WITHDRAWAL_FREQUENCY_UNSPECIFIED",
    Frequent = "FREQUENT",
    Occasional = "OCCASIONAL",
    Rare = "RARE"
}
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
export type EnrollmentLlcEnrollmentMetadataWithdrawalFrequencyOpen = OpenEnum<typeof EnrollmentLlcEnrollmentMetadataWithdrawalFrequency>;
/**
 * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
 */
export type EnrollmentLlcEnrollmentMetadataPlannedActivity = {
    /**
     * The foreign bond trading countries details
     */
    foreignBondTradingDetails?: EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails | null | undefined;
    /**
     * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
     */
    lowPricedSecurities?: EnrollmentLlcEnrollmentMetadataLowPricedSecurities | null | undefined;
    /**
     * The primary account activity type
     */
    primaryAccountActivityType?: EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityTypeOpen | undefined;
    /**
     * The frequency by which cash is anticipated to be withdrawn from the account
     */
    withdrawalFrequency?: EnrollmentLlcEnrollmentMetadataWithdrawalFrequencyOpen | undefined;
};
/**
 * Information about the related politically exposed persons
 */
export type EnrollmentLlcEnrollmentMetadataRelatedPepDetails = {
    /**
     * Indication as to whether or not an account has direct or indirect related politically exposed persons
     */
    directOrIndirectRelatedPeps?: boolean | undefined;
    /**
     * Related Peps
     */
    relatedPeps?: Array<RelatedPep> | undefined;
};
/**
 * Enrollment metadata for entity accounts
 */
export type EnrollmentEddAccountEnrollmentMetadata = {
    /**
     * The initial amount of money placed into the account by the customer upon or after the account's establishment.
     */
    depositedFunds?: EnrollmentLlcEnrollmentMetadataDepositedFunds | null | undefined;
    /**
     * The client determined account risk rating of the entity customer
     */
    determinedAccountRiskRating?: EnrollmentDeterminedAccountRiskRatingOpen | undefined;
    /**
     * Disclosure of the account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
     */
    financialProfile?: EnrollmentLlcEnrollmentMetadataFinancialProfile | null | undefined;
    /**
     * Details the customer's intended trading and banking-related activities at the time of account application; informs risk checks and forms a baseline for anomalous activity detection
     */
    plannedActivity?: EnrollmentLlcEnrollmentMetadataPlannedActivity | null | undefined;
    /**
     * Information about the related politically exposed persons
     */
    relatedPepDetails?: EnrollmentLlcEnrollmentMetadataRelatedPepDetails | null | undefined;
    /**
     * The scope of the business for the entity customer
     */
    scopeOfBusiness?: string | undefined;
};
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentLlcEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentLlcEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentLlcEnrollmentMetadataFdicCashSweep>;
/**
 * Metadata for the REGISTRATION_LLC type
 */
export type LlcEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Enrollment metadata for entity accounts
     */
    eddAccountEnrollmentMetadata?: EnrollmentEddAccountEnrollmentMetadata | null | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentLlcEnrollmentMetadataFdicCashSweepOpen | undefined;
};
/**
 * The purpose of the operating account.
 */
export declare enum EnrollmentOperatingPurpose {
    OperatingPurposeUnspecified = "OPERATING_PURPOSE_UNSPECIFIED",
    Custody = "CUSTODY",
    SecFee = "SEC_FEE",
    TafFee = "TAF_FEE",
    TefraWithholding = "TEFRA_WITHHOLDING",
    Suspense = "SUSPENSE",
    Allocation = "ALLOCATION",
    Error = "ERROR",
    Deposit = "DEPOSIT",
    WriteOff = "WRITE_OFF",
    UnsecuredReserve = "UNSECURED_RESERVE",
    Payable = "PAYABLE",
    Commission = "COMMISSION",
    Escheatment = "ESCHEATMENT",
    InterestRevenue = "INTEREST_REVENUE",
    StreetDepository = "STREET_DEPOSITORY",
    Inventory = "INVENTORY",
    TaxWithholding = "TAX_WITHHOLDING",
    Fee = "FEE",
    PrincipalTrading = "PRINCIPAL_TRADING",
    SafekeepingBookEntityDomestic = "SAFEKEEPING_BOOK_ENTITY_DOMESTIC",
    Fail = "FAIL"
}
/**
 * The purpose of the operating account.
 */
export type EnrollmentOperatingPurposeOpen = OpenEnum<typeof EnrollmentOperatingPurpose>;
/**
 * Tax Authority for Enrollment
 */
export declare enum EnrollmentTaxAuthority {
    TaxAuthorityUnspecified = "TAX_AUTHORITY_UNSPECIFIED",
    Al = "AL",
    Ak = "AK",
    Az = "AZ",
    Ar = "AR",
    Ca = "CA",
    Co = "CO",
    Ct = "CT",
    De = "DE",
    Fl = "FL",
    Ga = "GA",
    Hi = "HI",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ia = "IA",
    Ks = "KS",
    Ky = "KY",
    La = "LA",
    Me = "ME",
    Md = "MD",
    Ma = "MA",
    Mi = "MI",
    Mn = "MN",
    Ms = "MS",
    Mo = "MO",
    Mt = "MT",
    Ne = "NE",
    Nv = "NV",
    Nh = "NH",
    Nj = "NJ",
    Nm = "NM",
    Ny = "NY",
    Nc = "NC",
    Nd = "ND",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Ri = "RI",
    Sc = "SC",
    Sd = "SD",
    Tn = "TN",
    Tx = "TX",
    Ut = "UT",
    Vt = "VT",
    Va = "VA",
    Wa = "WA",
    Wv = "WV",
    Wi = "WI",
    Wy = "WY",
    Irs = "IRS"
}
/**
 * Tax Authority for Enrollment
 */
export type EnrollmentTaxAuthorityOpen = OpenEnum<typeof EnrollmentTaxAuthority>;
/**
 * A designation used by the custodian to determine how much federal income tax should be withheld from the proceeds of a sale
 */
export declare enum EnrollmentWithholdingType {
    WithholdingTypeUnspecified = "WITHHOLDING_TYPE_UNSPECIFIED",
    Backup = "BACKUP",
    BackupProceeds = "BACKUP_PROCEEDS",
    BackupDividendsAndInterest = "BACKUP_DIVIDENDS_AND_INTEREST",
    Ira = "IRA"
}
/**
 * A designation used by the custodian to determine how much federal income tax should be withheld from the proceeds of a sale
 */
export type EnrollmentWithholdingTypeOpen = OpenEnum<typeof EnrollmentWithholdingType>;
/**
 * Optional tax withholding metadata for TAX_WITHHOLDING operating purpose
 */
export type TaxWithholdingMetadata = {
    /**
     * Tax Authority for Enrollment
     */
    taxAuthority?: EnrollmentTaxAuthorityOpen | undefined;
    /**
     * A designation used by the custodian to determine how much federal income tax should be withheld from the proceeds of a sale
     */
    withholdingType?: EnrollmentWithholdingTypeOpen | undefined;
};
/**
 * Metadata for the REGISTRATION_OPERATING enrollment type.
 */
export type OperatingEnrollmentMetadata = {
    /**
     * The purpose of the operating account.
     */
    operatingPurpose?: EnrollmentOperatingPurposeOpen | undefined;
    /**
     * Optional subtitle for the operating purpose
     */
    subtitle?: string | undefined;
    /**
     * Optional tax withholding metadata for TAX_WITHHOLDING operating purpose
     */
    taxWithholdingMetadata?: TaxWithholdingMetadata | null | undefined;
};
/**
 * This captures a user's experience with investment vehicles. It includes details such as the user's average annual trade count for various investment vehicles
 */
export type InvestmentVehicleExperience = {
    /**
     * The number of average annual trades of commodities
     */
    commoditiesAverageAnnualTradeCount?: number | undefined;
    /**
     * The number of average annual trades of corporate bonds
     */
    corporateBondsAverageAnnualTradeCount?: number | undefined;
    /**
     * The number of average annual trades of funds
     */
    fundsAverageAnnualTradeCount?: number | undefined;
    /**
     * The number of average annual trades of government bonds
     */
    governmentBondsAverageAnnualTradeCount?: number | undefined;
    /**
     * The number of average annual trades in margin accounts
     */
    marginAverageAnnualTradeCount?: number | undefined;
    /**
     * The number of average annual trades of municipal bonds
     */
    municipalBondsAverageAnnualTradeCount?: number | undefined;
    /**
     * The number of average annual trades of options
     */
    optionsAverageAnnualTradeCount?: number | undefined;
    /**
     * The number of average annual trades of stocks
     */
    stocksAverageAnnualTradeCount?: number | undefined;
    /**
     * The number of average annual trades in tax sheltered accounts
     */
    taxSheltersAverageAnnualTradeCount?: number | undefined;
};
/**
 * Requested options level
 */
export declare enum EnrollmentOptionsLevel {
    OptionsLevelUnspecified = "OPTIONS_LEVEL_UNSPECIFIED",
    OptionsLevel2LongOptions = "OPTIONS_LEVEL_2_LONG_OPTIONS"
}
/**
 * Requested options level
 */
export type EnrollmentOptionsLevelOpen = OpenEnum<typeof EnrollmentOptionsLevel>;
/**
 * Metadata for the ORDERS_OPTIONS_TRADING enrollment type
 */
export type OrdersOptionsTradingEnrollmentMetadata = {
    /**
     * This captures a user's experience with investment vehicles. It includes details such as the user's average annual trade count for various investment vehicles
     */
    investmentVehicleExperience?: InvestmentVehicleExperience | null | undefined;
    /**
     * Requested options level
     */
    optionsLevel?: EnrollmentOptionsLevelOpen | undefined;
    /**
     * Total years of options trading experience
     */
    totalYearsOptionsTradingExperience?: number | undefined;
};
/**
 * Indicates where in the enrollment is in the process; May be `PENDING_AGREEMENT`, `ACTIVE`, `INACTIVE`, `PROCESSING`, or `EXPIRED`
 */
export declare enum EnrollmentState {
    EnrollmentStateUnspecified = "ENROLLMENT_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    PendingAgreement = "PENDING_AGREEMENT",
    Processing = "PROCESSING",
    Expired = "EXPIRED"
}
/**
 * Indicates where in the enrollment is in the process; May be `PENDING_AGREEMENT`, `ACTIVE`, `INACTIVE`, `PROCESSING`, or `EXPIRED`
 */
export type EnrollmentStateOpen = OpenEnum<typeof EnrollmentState>;
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlanOpen = OpenEnum<typeof EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum EnrollmentTrustEnrollmentMetadataFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type EnrollmentTrustEnrollmentMetadataFdicCashSweepOpen = OpenEnum<typeof EnrollmentTrustEnrollmentMetadataFdicCashSweep>;
/**
 * Trust account is opened on behalf of
 */
export declare enum EnrollmentOpenedOnBehalfOf {
    OpenedOnBehalfOfUnspecified = "OPENED_ON_BEHALF_OF_UNSPECIFIED",
    PersonalTrust = "PERSONAL_TRUST",
    BusinessTrust = "BUSINESS_TRUST",
    ThirdPartyAdministrator = "THIRD_PARTY_ADMINISTRATOR"
}
/**
 * Trust account is opened on behalf of
 */
export type EnrollmentOpenedOnBehalfOfOpen = OpenEnum<typeof EnrollmentOpenedOnBehalfOf>;
/**
 * Metadata for the REGISTRATION_TRUST type
 */
export type TrustEnrollmentMetadata = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: EnrollmentTrustEnrollmentMetadataFdicCashSweepOpen | undefined;
    /**
     * Trust account is opened on behalf of
     */
    openedOnBehalfOf?: EnrollmentOpenedOnBehalfOfOpen | undefined;
};
/**
 * Describes the name of the enrollment; Expressed as an enum
 */
export declare enum EnrollmentType1 {
    EnrollmentTypeUnspecified = "ENROLLMENT_TYPE_UNSPECIFIED",
    RegistrationIndividual = "REGISTRATION_INDIVIDUAL",
    LendingFullyPaidStockLoan = "LENDING_FULLY_PAID_STOCK_LOAN",
    BeneficiaryDesignation = "BENEFICIARY_DESIGNATION",
    RegistrationJointWros = "REGISTRATION_JOINT_WROS",
    RegistrationJointTic = "REGISTRATION_JOINT_TIC",
    RegistrationJointTbe = "REGISTRATION_JOINT_TBE",
    RegistrationJointCp = "REGISTRATION_JOINT_CP",
    RegistrationEstate = "REGISTRATION_ESTATE",
    RegistrationIraTraditional = "REGISTRATION_IRA_TRADITIONAL",
    RegistrationIraSimple = "REGISTRATION_IRA_SIMPLE",
    RegistrationIraSep = "REGISTRATION_IRA_SEP",
    RegistrationIraRoth = "REGISTRATION_IRA_ROTH",
    RegistrationIraRollover = "REGISTRATION_IRA_ROLLOVER",
    RegistrationTrust = "REGISTRATION_TRUST",
    RegistrationCorporation = "REGISTRATION_CORPORATION",
    RegistrationLlc = "REGISTRATION_LLC",
    CashFdicCashSweep = "CASH_FDIC_CASH_SWEEP",
    RetirementBeneficiaryDesignation = "RETIREMENT_BENEFICIARY_DESIGNATION",
    DividendReinvestmentPlan = "DIVIDEND_REINVESTMENT_PLAN",
    RegistrationIraBeneficiaryTraditional = "REGISTRATION_IRA_BENEFICIARY_TRADITIONAL",
    RegistrationIraBeneficiaryRoth = "REGISTRATION_IRA_BENEFICIARY_ROTH",
    RegistrationIndividualForeign = "REGISTRATION_INDIVIDUAL_FOREIGN",
    RegistrationCustodial = "REGISTRATION_CUSTODIAL",
    VirtualAccountNumber = "VIRTUAL_ACCOUNT_NUMBER"
}
/**
 * Describes the name of the enrollment; Expressed as an enum
 */
export type EnrollmentType1Open = OpenEnum<typeof EnrollmentType1>;
/**
 * Metadata for the VIRTUAL_ACCOUNT_NUMBER type
 */
export type VirtualAccountNumberEnrollmentMetadata = {
    /**
     * The routing number for the account. This value is system-generated
     */
    routingNumber?: string | undefined;
    /**
     * The virtual account number for the account. This value is system-generated
     */
    virtualAccountNumber?: string | undefined;
};
/**
 * An Enrollment represents programs the account may enroll in.
 */
export type Enrollment = {
    /**
     * Metadata for the BENEFICIARY_DESIGNATION enrollment type.
     */
    beneficiaryEnrollmentMetadata?: BeneficiaryEnrollmentMetadata | null | undefined;
    /**
     * The consent method for the enrollment. Defaults to ESIGNATURE.
     */
    consentMethod?: ConsentMethodOpen | undefined;
    /**
     * Metadata for the REGISTRATION_CORPORATION type
     */
    corporationEnrollmentMetadata?: CorporationEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the REGISTRATION_CUSTODIAL type
     */
    custodialEnrollmentMetadata?: CustodialEnrollmentMetadata | null | undefined;
    /**
     * A system-generated unique identifier referencing a single instance of an enrollment; Used to access the record after creation
     */
    enrollmentId?: string | undefined;
    /**
     * The time all enrollment requirements were satisfied and the enrollment transitioned to `ACTIVE`
     */
    enrollmentTime?: Date | null | undefined;
    /**
     * Metadata for the REGISTRATION_ESTATE enrollment type
     */
    estateEnrollmentMetadata?: EstateEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the REGISTRATION_INDIVIDUAL_FOREIGN type
     */
    foreignIndividualAccountEnrollmentMetadata?: ForeignIndividualAccountEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the REGISTRATION_JOINT_FOREIGN_WROS type
     */
    foreignJointAccountEnrollmentMetadata?: ForeignJointAccountEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the FULLY_PAID_STOCK_LENDING enrollment type
     */
    fpslEnrollmentMetadata?: FpslEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the INDIVIDUAL enrollment type
     */
    individualEnrollmentMetadata?: IndividualEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the REGISTRATION_IRA_BENEFICIARY_ROTH and REGISTRATION_IRA_BENEFICIARY_TRADITIONAL enrollment type
     */
    iraBeneficiaryEnrollmentMetadata?: IraBeneficiaryEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the ROLLOVER_IRA_REGISTRATION enrollment type
     */
    iraRolloverEnrollmentMetadata?: IraRolloverEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the ROTH_IRA_REGISTRATION enrollment type
     */
    iraRothEnrollmentMetadata?: IraRothEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the SEP_IRA_REGISTRATION enrollment type
     */
    iraSepEnrollmentMetadata?: IraSepEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the SIMPLE_IRA_REGISTRATION enrollment type
     */
    iraSimpleEnrollmentMetadata?: IraSimpleEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the TRADITIONAL_IRA_REGISTRATION enrollment type
     */
    iraTraditionalEnrollmentMetadata?: IraTraditionalEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the JOINT_COMMUNITY_PROPERTY_REGISTRATION enrollment type
     */
    jointCommunityPropertyEnrollmentMetadata?: JointCommunityPropertyEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the JOINT_TENANTS_BY_ENTIRETY_REGISTRATION enrollment type
     */
    jointTenantsByEntiretyEnrollmentMetadata?: JointTenantsByEntiretyEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the JOINT_TENANTS_IN_COMMON_REGISTRATION enrollment type
     */
    jointTenantsInCommonEnrollmentMetadata?: JointTenantsInCommonEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the JOINT_WITH_RIGHTS_OF_SURVIVORSHIP_REGISTRATION enrollment type
     */
    jointWithRightsOfSurvivorshipEnrollmentMetadata?: JointWithRightsOfSurvivorshipEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the REGISTRATION_LLC type
     */
    llcEnrollmentMetadata?: LlcEnrollmentMetadata | null | undefined;
    /**
     * The name field Format: accounts/{account}/enrollments/{enrollment}
     */
    name?: string | undefined;
    /**
     * Metadata for the REGISTRATION_OPERATING enrollment type.
     */
    operatingEnrollmentMetadata?: OperatingEnrollmentMetadata | null | undefined;
    /**
     * Metadata for the ORDERS_OPTIONS_TRADING enrollment type
     */
    ordersOptionsTradingEnrollmentMetadata?: OrdersOptionsTradingEnrollmentMetadata | null | undefined;
    /**
     * The ULID is associated with the approver of a given enrollment. The approver you create will contain the CRD Number issued to the person by FINRA. As an RIA, you should use the ULID associated with Apex's approver.
     */
    principalApproverId?: string | undefined;
    /**
     * Indicates where in the enrollment is in the process; May be `PENDING_AGREEMENT`, `ACTIVE`, `INACTIVE`, `PROCESSING`, or `EXPIRED`
     */
    state?: EnrollmentStateOpen | undefined;
    /**
     * Metadata for the REGISTRATION_TRUST type
     */
    trustEnrollmentMetadata?: TrustEnrollmentMetadata | null | undefined;
    /**
     * Describes the name of the enrollment; Expressed as an enum
     */
    type?: EnrollmentType1Open | undefined;
    /**
     * The time an unenrollment request was processed and the enrollment transitioned to `INACTIVE`
     */
    unenrollmentTime?: Date | null | undefined;
    /**
     * Metadata for the VIRTUAL_ACCOUNT_NUMBER type
     */
    virtualAccountNumberEnrollmentMetadata?: VirtualAccountNumberEnrollmentMetadata | null | undefined;
};
/** @internal */
export declare const BeneficiaryEnrollmentMetadata$inboundSchema: z.ZodType<BeneficiaryEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type BeneficiaryEnrollmentMetadata$Outbound = {
    contingent_beneficiaries?: Array<Beneficiary$Outbound> | undefined;
    primary_beneficiaries?: Array<Beneficiary$Outbound> | undefined;
};
/** @internal */
export declare const BeneficiaryEnrollmentMetadata$outboundSchema: z.ZodType<BeneficiaryEnrollmentMetadata$Outbound, z.ZodTypeDef, BeneficiaryEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BeneficiaryEnrollmentMetadata$ {
    /** @deprecated use `BeneficiaryEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BeneficiaryEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `BeneficiaryEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BeneficiaryEnrollmentMetadata$Outbound, z.ZodTypeDef, BeneficiaryEnrollmentMetadata>;
    /** @deprecated use `BeneficiaryEnrollmentMetadata$Outbound` instead. */
    type Outbound = BeneficiaryEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const ConsentMethod$inboundSchema: z.ZodType<ConsentMethodOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ConsentMethod$outboundSchema: z.ZodType<ConsentMethodOpen, z.ZodTypeDef, ConsentMethodOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConsentMethod$ {
    /** @deprecated use `ConsentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConsentMethodOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConsentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConsentMethodOpen, z.ZodTypeDef, ConsentMethodOpen>;
}
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const InitialDepositAmount$inboundSchema: z.ZodType<InitialDepositAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type InitialDepositAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const InitialDepositAmount$outboundSchema: z.ZodType<InitialDepositAmount$Outbound, z.ZodTypeDef, InitialDepositAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InitialDepositAmount$ {
    /** @deprecated use `InitialDepositAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InitialDepositAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `InitialDepositAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InitialDepositAmount$Outbound, z.ZodTypeDef, InitialDepositAmount>;
    /** @deprecated use `InitialDepositAmount$Outbound` instead. */
    type Outbound = InitialDepositAmount$Outbound;
}
/** @internal */
export declare const DepositedFunds$inboundSchema: z.ZodType<DepositedFunds, z.ZodTypeDef, unknown>;
/** @internal */
export type DepositedFunds$Outbound = {
    initial_deposit_amount?: InitialDepositAmount$Outbound | null | undefined;
    initial_deposit_source?: string | undefined;
};
/** @internal */
export declare const DepositedFunds$outboundSchema: z.ZodType<DepositedFunds$Outbound, z.ZodTypeDef, DepositedFunds>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DepositedFunds$ {
    /** @deprecated use `DepositedFunds$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DepositedFunds, z.ZodTypeDef, unknown>;
    /** @deprecated use `DepositedFunds$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DepositedFunds$Outbound, z.ZodTypeDef, DepositedFunds>;
    /** @deprecated use `DepositedFunds$Outbound` instead. */
    type Outbound = DepositedFunds$Outbound;
}
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRating$inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRatingOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRating$outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRatingOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRatingOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRating$ {
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRating$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRatingOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRating$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRatingOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataDeterminedAccountRiskRatingOpen>;
}
/** @internal */
export declare const OtherAccounts$inboundSchema: z.ZodType<OtherAccounts, z.ZodTypeDef, unknown>;
/** @internal */
export type OtherAccounts$Outbound = {
    account_names?: Array<string> | undefined;
    account_numbers?: Array<string> | undefined;
    owner_has_other_accounts_at_apex?: boolean | undefined;
};
/** @internal */
export declare const OtherAccounts$outboundSchema: z.ZodType<OtherAccounts$Outbound, z.ZodTypeDef, OtherAccounts>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OtherAccounts$ {
    /** @deprecated use `OtherAccounts$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OtherAccounts, z.ZodTypeDef, unknown>;
    /** @deprecated use `OtherAccounts$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OtherAccounts$Outbound, z.ZodTypeDef, OtherAccounts>;
    /** @deprecated use `OtherAccounts$Outbound` instead. */
    type Outbound = OtherAccounts$Outbound;
}
/** @internal */
export declare const FinancialProfile$inboundSchema: z.ZodType<FinancialProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type FinancialProfile$Outbound = {
    banking_relationships?: Array<string> | undefined;
    other_accounts?: OtherAccounts$Outbound | null | undefined;
    primary_source_of_deposited_funds?: string | undefined;
};
/** @internal */
export declare const FinancialProfile$outboundSchema: z.ZodType<FinancialProfile$Outbound, z.ZodTypeDef, FinancialProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FinancialProfile$ {
    /** @deprecated use `FinancialProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FinancialProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `FinancialProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FinancialProfile$Outbound, z.ZodTypeDef, FinancialProfile>;
    /** @deprecated use `FinancialProfile$Outbound` instead. */
    type Outbound = FinancialProfile$Outbound;
}
/** @internal */
export declare const ForeignBondTradingDetails$inboundSchema: z.ZodType<ForeignBondTradingDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignBondTradingDetails$Outbound = {
    foreign_bond_trading?: boolean | undefined;
    foreign_bond_trading_detail?: Array<ForeignBondTradingDetail$Outbound> | undefined;
};
/** @internal */
export declare const ForeignBondTradingDetails$outboundSchema: z.ZodType<ForeignBondTradingDetails$Outbound, z.ZodTypeDef, ForeignBondTradingDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignBondTradingDetails$ {
    /** @deprecated use `ForeignBondTradingDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignBondTradingDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignBondTradingDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignBondTradingDetails$Outbound, z.ZodTypeDef, ForeignBondTradingDetails>;
    /** @deprecated use `ForeignBondTradingDetails$Outbound` instead. */
    type Outbound = ForeignBondTradingDetails$Outbound;
}
/** @internal */
export declare const LowPricedSecuritiesPercentage$inboundSchema: z.ZodType<LowPricedSecuritiesPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type LowPricedSecuritiesPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const LowPricedSecuritiesPercentage$outboundSchema: z.ZodType<LowPricedSecuritiesPercentage$Outbound, z.ZodTypeDef, LowPricedSecuritiesPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LowPricedSecuritiesPercentage$ {
    /** @deprecated use `LowPricedSecuritiesPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LowPricedSecuritiesPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `LowPricedSecuritiesPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LowPricedSecuritiesPercentage$Outbound, z.ZodTypeDef, LowPricedSecuritiesPercentage>;
    /** @deprecated use `LowPricedSecuritiesPercentage$Outbound` instead. */
    type Outbound = LowPricedSecuritiesPercentage$Outbound;
}
/** @internal */
export declare const LowPricedSecurities$inboundSchema: z.ZodType<LowPricedSecurities, z.ZodTypeDef, unknown>;
/** @internal */
export type LowPricedSecurities$Outbound = {
    low_priced_securities?: boolean | undefined;
    low_priced_securities_percentage?: LowPricedSecuritiesPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const LowPricedSecurities$outboundSchema: z.ZodType<LowPricedSecurities$Outbound, z.ZodTypeDef, LowPricedSecurities>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LowPricedSecurities$ {
    /** @deprecated use `LowPricedSecurities$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LowPricedSecurities, z.ZodTypeDef, unknown>;
    /** @deprecated use `LowPricedSecurities$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LowPricedSecurities$Outbound, z.ZodTypeDef, LowPricedSecurities>;
    /** @deprecated use `LowPricedSecurities$Outbound` instead. */
    type Outbound = LowPricedSecurities$Outbound;
}
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityType$inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityType$outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityType$ {
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataPrimaryAccountActivityTypeOpen>;
}
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataWithdrawalFrequency$inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataWithdrawalFrequency$outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataWithdrawalFrequencyOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentCorporationEnrollmentMetadataWithdrawalFrequency$ {
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataWithdrawalFrequency$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataWithdrawalFrequency$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataWithdrawalFrequencyOpen>;
}
/** @internal */
export declare const PlannedActivity$inboundSchema: z.ZodType<PlannedActivity, z.ZodTypeDef, unknown>;
/** @internal */
export type PlannedActivity$Outbound = {
    foreign_bond_trading_details?: ForeignBondTradingDetails$Outbound | null | undefined;
    low_priced_securities?: LowPricedSecurities$Outbound | null | undefined;
    primary_account_activity_type?: string | undefined;
    withdrawal_frequency?: string | undefined;
};
/** @internal */
export declare const PlannedActivity$outboundSchema: z.ZodType<PlannedActivity$Outbound, z.ZodTypeDef, PlannedActivity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PlannedActivity$ {
    /** @deprecated use `PlannedActivity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PlannedActivity, z.ZodTypeDef, unknown>;
    /** @deprecated use `PlannedActivity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PlannedActivity$Outbound, z.ZodTypeDef, PlannedActivity>;
    /** @deprecated use `PlannedActivity$Outbound` instead. */
    type Outbound = PlannedActivity$Outbound;
}
/** @internal */
export declare const RelatedPepDetails$inboundSchema: z.ZodType<RelatedPepDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type RelatedPepDetails$Outbound = {
    direct_or_indirect_related_peps?: boolean | undefined;
    related_peps?: Array<RelatedPep$Outbound> | undefined;
};
/** @internal */
export declare const RelatedPepDetails$outboundSchema: z.ZodType<RelatedPepDetails$Outbound, z.ZodTypeDef, RelatedPepDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RelatedPepDetails$ {
    /** @deprecated use `RelatedPepDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RelatedPepDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `RelatedPepDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RelatedPepDetails$Outbound, z.ZodTypeDef, RelatedPepDetails>;
    /** @deprecated use `RelatedPepDetails$Outbound` instead. */
    type Outbound = RelatedPepDetails$Outbound;
}
/** @internal */
export declare const EddAccountEnrollmentMetadata$inboundSchema: z.ZodType<EddAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type EddAccountEnrollmentMetadata$Outbound = {
    deposited_funds?: DepositedFunds$Outbound | null | undefined;
    determined_account_risk_rating?: string | undefined;
    financial_profile?: FinancialProfile$Outbound | null | undefined;
    planned_activity?: PlannedActivity$Outbound | null | undefined;
    related_pep_details?: RelatedPepDetails$Outbound | null | undefined;
    scope_of_business?: string | undefined;
};
/** @internal */
export declare const EddAccountEnrollmentMetadata$outboundSchema: z.ZodType<EddAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, EddAccountEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EddAccountEnrollmentMetadata$ {
    /** @deprecated use `EddAccountEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EddAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `EddAccountEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EddAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, EddAccountEnrollmentMetadata>;
    /** @deprecated use `EddAccountEnrollmentMetadata$Outbound` instead. */
    type Outbound = EddAccountEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentCorporationEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentCorporationEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentCorporationEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentCorporationEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentCorporationEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const CorporationEnrollmentMetadata$inboundSchema: z.ZodType<CorporationEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type CorporationEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    edd_account_enrollment_metadata?: EddAccountEnrollmentMetadata$Outbound | null | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const CorporationEnrollmentMetadata$outboundSchema: z.ZodType<CorporationEnrollmentMetadata$Outbound, z.ZodTypeDef, CorporationEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CorporationEnrollmentMetadata$ {
    /** @deprecated use `CorporationEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CorporationEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `CorporationEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CorporationEnrollmentMetadata$Outbound, z.ZodTypeDef, CorporationEnrollmentMetadata>;
    /** @deprecated use `CorporationEnrollmentMetadata$Outbound` instead. */
    type Outbound = CorporationEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentFdicCashSweep$inboundSchema: z.ZodType<EnrollmentFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentFdicCashSweep$outboundSchema: z.ZodType<EnrollmentFdicCashSweepOpen, z.ZodTypeDef, EnrollmentFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentFdicCashSweep$ {
    /** @deprecated use `EnrollmentFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentFdicCashSweepOpen, z.ZodTypeDef, EnrollmentFdicCashSweepOpen>;
}
/** @internal */
export declare const CustodialEnrollmentMetadata$inboundSchema: z.ZodType<CustodialEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type CustodialEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const CustodialEnrollmentMetadata$outboundSchema: z.ZodType<CustodialEnrollmentMetadata$Outbound, z.ZodTypeDef, CustodialEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustodialEnrollmentMetadata$ {
    /** @deprecated use `CustodialEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustodialEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustodialEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustodialEnrollmentMetadata$Outbound, z.ZodTypeDef, CustodialEnrollmentMetadata>;
    /** @deprecated use `CustodialEnrollmentMetadata$Outbound` instead. */
    type Outbound = CustodialEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentEstateEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EstateEnrollmentMetadata$inboundSchema: z.ZodType<EstateEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type EstateEnrollmentMetadata$Outbound = {
    certificate_of_appointment_document_id?: string | undefined;
    dividend_reinvestment_plan?: string | undefined;
};
/** @internal */
export declare const EstateEnrollmentMetadata$outboundSchema: z.ZodType<EstateEnrollmentMetadata$Outbound, z.ZodTypeDef, EstateEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EstateEnrollmentMetadata$ {
    /** @deprecated use `EstateEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EstateEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `EstateEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EstateEnrollmentMetadata$Outbound, z.ZodTypeDef, EstateEnrollmentMetadata>;
    /** @deprecated use `EstateEnrollmentMetadata$Outbound` instead. */
    type Outbound = EstateEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentForeignIndividualAccountEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentForeignIndividualAccountEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const EnrollmentInitialDepositAmount$inboundSchema: z.ZodType<EnrollmentInitialDepositAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentInitialDepositAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EnrollmentInitialDepositAmount$outboundSchema: z.ZodType<EnrollmentInitialDepositAmount$Outbound, z.ZodTypeDef, EnrollmentInitialDepositAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentInitialDepositAmount$ {
    /** @deprecated use `EnrollmentInitialDepositAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentInitialDepositAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentInitialDepositAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentInitialDepositAmount$Outbound, z.ZodTypeDef, EnrollmentInitialDepositAmount>;
    /** @deprecated use `EnrollmentInitialDepositAmount$Outbound` instead. */
    type Outbound = EnrollmentInitialDepositAmount$Outbound;
}
/** @internal */
export declare const EnrollmentDepositedFunds$inboundSchema: z.ZodType<EnrollmentDepositedFunds, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentDepositedFunds$Outbound = {
    initial_deposit_amount?: EnrollmentInitialDepositAmount$Outbound | null | undefined;
    initial_deposit_source?: string | undefined;
};
/** @internal */
export declare const EnrollmentDepositedFunds$outboundSchema: z.ZodType<EnrollmentDepositedFunds$Outbound, z.ZodTypeDef, EnrollmentDepositedFunds>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentDepositedFunds$ {
    /** @deprecated use `EnrollmentDepositedFunds$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentDepositedFunds, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentDepositedFunds$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentDepositedFunds$Outbound, z.ZodTypeDef, EnrollmentDepositedFunds>;
    /** @deprecated use `EnrollmentDepositedFunds$Outbound` instead. */
    type Outbound = EnrollmentDepositedFunds$Outbound;
}
/** @internal */
export declare const EnrollmentOtherAccounts$inboundSchema: z.ZodType<EnrollmentOtherAccounts, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentOtherAccounts$Outbound = {
    account_names?: Array<string> | undefined;
    account_numbers?: Array<string> | undefined;
    owner_has_other_accounts_at_apex?: boolean | undefined;
};
/** @internal */
export declare const EnrollmentOtherAccounts$outboundSchema: z.ZodType<EnrollmentOtherAccounts$Outbound, z.ZodTypeDef, EnrollmentOtherAccounts>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentOtherAccounts$ {
    /** @deprecated use `EnrollmentOtherAccounts$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentOtherAccounts, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentOtherAccounts$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentOtherAccounts$Outbound, z.ZodTypeDef, EnrollmentOtherAccounts>;
    /** @deprecated use `EnrollmentOtherAccounts$Outbound` instead. */
    type Outbound = EnrollmentOtherAccounts$Outbound;
}
/** @internal */
export declare const EnrollmentFinancialProfile$inboundSchema: z.ZodType<EnrollmentFinancialProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentFinancialProfile$Outbound = {
    banking_relationships?: Array<string> | undefined;
    other_accounts?: EnrollmentOtherAccounts$Outbound | null | undefined;
    primary_source_of_deposited_funds?: string | undefined;
};
/** @internal */
export declare const EnrollmentFinancialProfile$outboundSchema: z.ZodType<EnrollmentFinancialProfile$Outbound, z.ZodTypeDef, EnrollmentFinancialProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentFinancialProfile$ {
    /** @deprecated use `EnrollmentFinancialProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentFinancialProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentFinancialProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentFinancialProfile$Outbound, z.ZodTypeDef, EnrollmentFinancialProfile>;
    /** @deprecated use `EnrollmentFinancialProfile$Outbound` instead. */
    type Outbound = EnrollmentFinancialProfile$Outbound;
}
/** @internal */
export declare const EnrollmentForeignBondTradingDetails$inboundSchema: z.ZodType<EnrollmentForeignBondTradingDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignBondTradingDetails$Outbound = {
    foreign_bond_trading?: boolean | undefined;
    foreign_bond_trading_detail?: Array<ForeignBondTradingDetail$Outbound> | undefined;
};
/** @internal */
export declare const EnrollmentForeignBondTradingDetails$outboundSchema: z.ZodType<EnrollmentForeignBondTradingDetails$Outbound, z.ZodTypeDef, EnrollmentForeignBondTradingDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignBondTradingDetails$ {
    /** @deprecated use `EnrollmentForeignBondTradingDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignBondTradingDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignBondTradingDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignBondTradingDetails$Outbound, z.ZodTypeDef, EnrollmentForeignBondTradingDetails>;
    /** @deprecated use `EnrollmentForeignBondTradingDetails$Outbound` instead. */
    type Outbound = EnrollmentForeignBondTradingDetails$Outbound;
}
/** @internal */
export declare const EnrollmentLowPricedSecuritiesPercentage$inboundSchema: z.ZodType<EnrollmentLowPricedSecuritiesPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLowPricedSecuritiesPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EnrollmentLowPricedSecuritiesPercentage$outboundSchema: z.ZodType<EnrollmentLowPricedSecuritiesPercentage$Outbound, z.ZodTypeDef, EnrollmentLowPricedSecuritiesPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLowPricedSecuritiesPercentage$ {
    /** @deprecated use `EnrollmentLowPricedSecuritiesPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLowPricedSecuritiesPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLowPricedSecuritiesPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLowPricedSecuritiesPercentage$Outbound, z.ZodTypeDef, EnrollmentLowPricedSecuritiesPercentage>;
    /** @deprecated use `EnrollmentLowPricedSecuritiesPercentage$Outbound` instead. */
    type Outbound = EnrollmentLowPricedSecuritiesPercentage$Outbound;
}
/** @internal */
export declare const EnrollmentLowPricedSecurities$inboundSchema: z.ZodType<EnrollmentLowPricedSecurities, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLowPricedSecurities$Outbound = {
    low_priced_securities?: boolean | undefined;
    low_priced_securities_percentage?: EnrollmentLowPricedSecuritiesPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const EnrollmentLowPricedSecurities$outboundSchema: z.ZodType<EnrollmentLowPricedSecurities$Outbound, z.ZodTypeDef, EnrollmentLowPricedSecurities>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLowPricedSecurities$ {
    /** @deprecated use `EnrollmentLowPricedSecurities$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLowPricedSecurities, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLowPricedSecurities$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLowPricedSecurities$Outbound, z.ZodTypeDef, EnrollmentLowPricedSecurities>;
    /** @deprecated use `EnrollmentLowPricedSecurities$Outbound` instead. */
    type Outbound = EnrollmentLowPricedSecurities$Outbound;
}
/** @internal */
export declare const EnrollmentPrimaryAccountActivityType$inboundSchema: z.ZodType<EnrollmentPrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentPrimaryAccountActivityType$outboundSchema: z.ZodType<EnrollmentPrimaryAccountActivityTypeOpen, z.ZodTypeDef, EnrollmentPrimaryAccountActivityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentPrimaryAccountActivityType$ {
    /** @deprecated use `EnrollmentPrimaryAccountActivityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentPrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentPrimaryAccountActivityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentPrimaryAccountActivityTypeOpen, z.ZodTypeDef, EnrollmentPrimaryAccountActivityTypeOpen>;
}
/** @internal */
export declare const EnrollmentWithdrawalFrequency$inboundSchema: z.ZodType<EnrollmentWithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentWithdrawalFrequency$outboundSchema: z.ZodType<EnrollmentWithdrawalFrequencyOpen, z.ZodTypeDef, EnrollmentWithdrawalFrequencyOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentWithdrawalFrequency$ {
    /** @deprecated use `EnrollmentWithdrawalFrequency$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentWithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentWithdrawalFrequency$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentWithdrawalFrequencyOpen, z.ZodTypeDef, EnrollmentWithdrawalFrequencyOpen>;
}
/** @internal */
export declare const EnrollmentPlannedActivity$inboundSchema: z.ZodType<EnrollmentPlannedActivity, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentPlannedActivity$Outbound = {
    foreign_bond_trading_details?: EnrollmentForeignBondTradingDetails$Outbound | null | undefined;
    low_priced_securities?: EnrollmentLowPricedSecurities$Outbound | null | undefined;
    primary_account_activity_type?: string | undefined;
    withdrawal_frequency?: string | undefined;
};
/** @internal */
export declare const EnrollmentPlannedActivity$outboundSchema: z.ZodType<EnrollmentPlannedActivity$Outbound, z.ZodTypeDef, EnrollmentPlannedActivity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentPlannedActivity$ {
    /** @deprecated use `EnrollmentPlannedActivity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentPlannedActivity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentPlannedActivity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentPlannedActivity$Outbound, z.ZodTypeDef, EnrollmentPlannedActivity>;
    /** @deprecated use `EnrollmentPlannedActivity$Outbound` instead. */
    type Outbound = EnrollmentPlannedActivity$Outbound;
}
/** @internal */
export declare const EnrollmentRelatedPepDetails$inboundSchema: z.ZodType<EnrollmentRelatedPepDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentRelatedPepDetails$Outbound = {
    direct_or_indirect_related_peps?: boolean | undefined;
    related_peps?: Array<RelatedPep$Outbound> | undefined;
};
/** @internal */
export declare const EnrollmentRelatedPepDetails$outboundSchema: z.ZodType<EnrollmentRelatedPepDetails$Outbound, z.ZodTypeDef, EnrollmentRelatedPepDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentRelatedPepDetails$ {
    /** @deprecated use `EnrollmentRelatedPepDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentRelatedPepDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentRelatedPepDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentRelatedPepDetails$Outbound, z.ZodTypeDef, EnrollmentRelatedPepDetails>;
    /** @deprecated use `EnrollmentRelatedPepDetails$Outbound` instead. */
    type Outbound = EnrollmentRelatedPepDetails$Outbound;
}
/** @internal */
export declare const ForeignNaturalPersonAccountEnrollmentMetadata$inboundSchema: z.ZodType<ForeignNaturalPersonAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignNaturalPersonAccountEnrollmentMetadata$Outbound = {
    deposited_funds?: EnrollmentDepositedFunds$Outbound | null | undefined;
    financial_profile?: EnrollmentFinancialProfile$Outbound | null | undefined;
    planned_activity?: EnrollmentPlannedActivity$Outbound | null | undefined;
    related_pep_details?: EnrollmentRelatedPepDetails$Outbound | null | undefined;
};
/** @internal */
export declare const ForeignNaturalPersonAccountEnrollmentMetadata$outboundSchema: z.ZodType<ForeignNaturalPersonAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, ForeignNaturalPersonAccountEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignNaturalPersonAccountEnrollmentMetadata$ {
    /** @deprecated use `ForeignNaturalPersonAccountEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignNaturalPersonAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignNaturalPersonAccountEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignNaturalPersonAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, ForeignNaturalPersonAccountEnrollmentMetadata>;
    /** @deprecated use `ForeignNaturalPersonAccountEnrollmentMetadata$Outbound` instead. */
    type Outbound = ForeignNaturalPersonAccountEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const ForeignIndividualAccountEnrollmentMetadata$inboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignIndividualAccountEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    foreign_natural_person_account_enrollment_metadata?: ForeignNaturalPersonAccountEnrollmentMetadata$Outbound | null | undefined;
};
/** @internal */
export declare const ForeignIndividualAccountEnrollmentMetadata$outboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, ForeignIndividualAccountEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignIndividualAccountEnrollmentMetadata$ {
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, ForeignIndividualAccountEnrollmentMetadata>;
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadata$Outbound` instead. */
    type Outbound = ForeignIndividualAccountEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$Outbound` instead. */
    type Outbound = EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$Outbound;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$Outbound = {
    initial_deposit_amount?: EnrollmentForeignJointAccountEnrollmentMetadataInitialDepositAmount$Outbound | null | undefined;
    initial_deposit_source?: string | undefined;
};
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$Outbound` instead. */
    type Outbound = EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$Outbound;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$Outbound = {
    account_names?: Array<string> | undefined;
    account_numbers?: Array<string> | undefined;
    owner_has_other_accounts_at_apex?: boolean | undefined;
};
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$Outbound` instead. */
    type Outbound = EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$Outbound;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$Outbound = {
    banking_relationships?: Array<string> | undefined;
    other_accounts?: EnrollmentForeignJointAccountEnrollmentMetadataOtherAccounts$Outbound | null | undefined;
    primary_source_of_deposited_funds?: string | undefined;
};
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$Outbound` instead. */
    type Outbound = EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$Outbound;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$Outbound = {
    foreign_bond_trading?: boolean | undefined;
    foreign_bond_trading_detail?: Array<ForeignBondTradingDetail$Outbound> | undefined;
};
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$Outbound` instead. */
    type Outbound = EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$Outbound;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound` instead. */
    type Outbound = EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$Outbound = {
    low_priced_securities?: boolean | undefined;
    low_priced_securities_percentage?: EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$Outbound` instead. */
    type Outbound = EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$Outbound;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityType$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityType$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityType$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataPrimaryAccountActivityTypeOpen>;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequencyOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequencyOpen>;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$Outbound = {
    foreign_bond_trading_details?: EnrollmentForeignJointAccountEnrollmentMetadataForeignBondTradingDetails$Outbound | null | undefined;
    low_priced_securities?: EnrollmentForeignJointAccountEnrollmentMetadataLowPricedSecurities$Outbound | null | undefined;
    primary_account_activity_type?: string | undefined;
    withdrawal_frequency?: string | undefined;
};
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$Outbound` instead. */
    type Outbound = EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$Outbound;
}
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$Outbound = {
    direct_or_indirect_related_peps?: boolean | undefined;
    related_peps?: Array<RelatedPep$Outbound> | undefined;
};
/** @internal */
export declare const EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$ {
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$Outbound, z.ZodTypeDef, EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails>;
    /** @deprecated use `EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$Outbound` instead. */
    type Outbound = EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$Outbound;
}
/** @internal */
export declare const EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$inboundSchema: z.ZodType<EnrollmentForeignNaturalPersonAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$Outbound = {
    deposited_funds?: EnrollmentForeignJointAccountEnrollmentMetadataDepositedFunds$Outbound | null | undefined;
    financial_profile?: EnrollmentForeignJointAccountEnrollmentMetadataFinancialProfile$Outbound | null | undefined;
    planned_activity?: EnrollmentForeignJointAccountEnrollmentMetadataPlannedActivity$Outbound | null | undefined;
    related_pep_details?: EnrollmentForeignJointAccountEnrollmentMetadataRelatedPepDetails$Outbound | null | undefined;
};
/** @internal */
export declare const EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$outboundSchema: z.ZodType<EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, EnrollmentForeignNaturalPersonAccountEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$ {
    /** @deprecated use `EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentForeignNaturalPersonAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, EnrollmentForeignNaturalPersonAccountEnrollmentMetadata>;
    /** @deprecated use `EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$Outbound` instead. */
    type Outbound = EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const ForeignJointAccountEnrollmentMetadata$inboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignJointAccountEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    foreign_natural_person_account_enrollment_metadata?: EnrollmentForeignNaturalPersonAccountEnrollmentMetadata$Outbound | null | undefined;
};
/** @internal */
export declare const ForeignJointAccountEnrollmentMetadata$outboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, ForeignJointAccountEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignJointAccountEnrollmentMetadata$ {
    /** @deprecated use `ForeignJointAccountEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignJointAccountEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, ForeignJointAccountEnrollmentMetadata>;
    /** @deprecated use `ForeignJointAccountEnrollmentMetadata$Outbound` instead. */
    type Outbound = ForeignJointAccountEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const FpslEnrollmentMetadata$inboundSchema: z.ZodType<FpslEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type FpslEnrollmentMetadata$Outbound = {
    customer_percentage?: number | undefined;
    firm_percentage?: number | undefined;
    fpsl_msla_minimum_rate?: number | undefined;
    introducing_broker_percentage?: number | undefined;
};
/** @internal */
export declare const FpslEnrollmentMetadata$outboundSchema: z.ZodType<FpslEnrollmentMetadata$Outbound, z.ZodTypeDef, FpslEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FpslEnrollmentMetadata$ {
    /** @deprecated use `FpslEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FpslEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `FpslEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FpslEnrollmentMetadata$Outbound, z.ZodTypeDef, FpslEnrollmentMetadata>;
    /** @deprecated use `FpslEnrollmentMetadata$Outbound` instead. */
    type Outbound = FpslEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIndividualEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentIndividualEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentIndividualEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIndividualEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentIndividualEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIndividualEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIndividualEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentIndividualEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIndividualEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIndividualEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIndividualEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIndividualEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const IndividualEnrollmentMetadata$inboundSchema: z.ZodType<IndividualEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type IndividualEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IndividualEnrollmentMetadata$outboundSchema: z.ZodType<IndividualEnrollmentMetadata$Outbound, z.ZodTypeDef, IndividualEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IndividualEnrollmentMetadata$ {
    /** @deprecated use `IndividualEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IndividualEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `IndividualEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IndividualEnrollmentMetadata$Outbound, z.ZodTypeDef, IndividualEnrollmentMetadata>;
    /** @deprecated use `IndividualEnrollmentMetadata$Outbound` instead. */
    type Outbound = IndividualEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraBeneficiaryEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraBeneficiaryEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const InheritedFromOwnerBirthDate$inboundSchema: z.ZodType<InheritedFromOwnerBirthDate, z.ZodTypeDef, unknown>;
/** @internal */
export type InheritedFromOwnerBirthDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const InheritedFromOwnerBirthDate$outboundSchema: z.ZodType<InheritedFromOwnerBirthDate$Outbound, z.ZodTypeDef, InheritedFromOwnerBirthDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InheritedFromOwnerBirthDate$ {
    /** @deprecated use `InheritedFromOwnerBirthDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InheritedFromOwnerBirthDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InheritedFromOwnerBirthDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InheritedFromOwnerBirthDate$Outbound, z.ZodTypeDef, InheritedFromOwnerBirthDate>;
    /** @deprecated use `InheritedFromOwnerBirthDate$Outbound` instead. */
    type Outbound = InheritedFromOwnerBirthDate$Outbound;
}
/** @internal */
export declare const InheritedFromOwnerDeathDate$inboundSchema: z.ZodType<InheritedFromOwnerDeathDate, z.ZodTypeDef, unknown>;
/** @internal */
export type InheritedFromOwnerDeathDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const InheritedFromOwnerDeathDate$outboundSchema: z.ZodType<InheritedFromOwnerDeathDate$Outbound, z.ZodTypeDef, InheritedFromOwnerDeathDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InheritedFromOwnerDeathDate$ {
    /** @deprecated use `InheritedFromOwnerDeathDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InheritedFromOwnerDeathDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InheritedFromOwnerDeathDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InheritedFromOwnerDeathDate$Outbound, z.ZodTypeDef, InheritedFromOwnerDeathDate>;
    /** @deprecated use `InheritedFromOwnerDeathDate$Outbound` instead. */
    type Outbound = InheritedFromOwnerDeathDate$Outbound;
}
/** @internal */
export declare const IraBeneficiaryEnrollmentMetadata$inboundSchema: z.ZodType<IraBeneficiaryEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type IraBeneficiaryEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    inherited_from_owner_birth_date?: InheritedFromOwnerBirthDate$Outbound | null | undefined;
    inherited_from_owner_death_date?: InheritedFromOwnerDeathDate$Outbound | null | undefined;
    inherited_from_owner_name?: string | undefined;
    inheritor_is_decedents_spouse?: boolean | undefined;
};
/** @internal */
export declare const IraBeneficiaryEnrollmentMetadata$outboundSchema: z.ZodType<IraBeneficiaryEnrollmentMetadata$Outbound, z.ZodTypeDef, IraBeneficiaryEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IraBeneficiaryEnrollmentMetadata$ {
    /** @deprecated use `IraBeneficiaryEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IraBeneficiaryEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `IraBeneficiaryEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IraBeneficiaryEnrollmentMetadata$Outbound, z.ZodTypeDef, IraBeneficiaryEnrollmentMetadata>;
    /** @deprecated use `IraBeneficiaryEnrollmentMetadata$Outbound` instead. */
    type Outbound = IraBeneficiaryEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraRolloverEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentIraRolloverEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentIraRolloverEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraRolloverEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentIraRolloverEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraRolloverEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraRolloverEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentIraRolloverEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraRolloverEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraRolloverEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraRolloverEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraRolloverEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const IraRolloverEnrollmentMetadata$inboundSchema: z.ZodType<IraRolloverEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type IraRolloverEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IraRolloverEnrollmentMetadata$outboundSchema: z.ZodType<IraRolloverEnrollmentMetadata$Outbound, z.ZodTypeDef, IraRolloverEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IraRolloverEnrollmentMetadata$ {
    /** @deprecated use `IraRolloverEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IraRolloverEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `IraRolloverEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IraRolloverEnrollmentMetadata$Outbound, z.ZodTypeDef, IraRolloverEnrollmentMetadata>;
    /** @deprecated use `IraRolloverEnrollmentMetadata$Outbound` instead. */
    type Outbound = IraRolloverEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraRothEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentIraRothEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentIraRothEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraRothEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentIraRothEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraRothEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraRothEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentIraRothEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraRothEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraRothEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraRothEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraRothEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const IraRothEnrollmentMetadata$inboundSchema: z.ZodType<IraRothEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type IraRothEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IraRothEnrollmentMetadata$outboundSchema: z.ZodType<IraRothEnrollmentMetadata$Outbound, z.ZodTypeDef, IraRothEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IraRothEnrollmentMetadata$ {
    /** @deprecated use `IraRothEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IraRothEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `IraRothEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IraRothEnrollmentMetadata$Outbound, z.ZodTypeDef, IraRothEnrollmentMetadata>;
    /** @deprecated use `IraRothEnrollmentMetadata$Outbound` instead. */
    type Outbound = IraRothEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraSepEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentIraSepEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentIraSepEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraSepEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentIraSepEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraSepEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraSepEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentIraSepEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraSepEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraSepEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraSepEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraSepEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const IraSepEnrollmentMetadata$inboundSchema: z.ZodType<IraSepEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type IraSepEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IraSepEnrollmentMetadata$outboundSchema: z.ZodType<IraSepEnrollmentMetadata$Outbound, z.ZodTypeDef, IraSepEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IraSepEnrollmentMetadata$ {
    /** @deprecated use `IraSepEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IraSepEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `IraSepEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IraSepEnrollmentMetadata$Outbound, z.ZodTypeDef, IraSepEnrollmentMetadata>;
    /** @deprecated use `IraSepEnrollmentMetadata$Outbound` instead. */
    type Outbound = IraSepEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraSimpleEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentIraSimpleEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentIraSimpleEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraSimpleEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentIraSimpleEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraSimpleEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraSimpleEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentIraSimpleEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraSimpleEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraSimpleEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraSimpleEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraSimpleEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const IraSimpleEnrollmentMetadata$inboundSchema: z.ZodType<IraSimpleEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type IraSimpleEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IraSimpleEnrollmentMetadata$outboundSchema: z.ZodType<IraSimpleEnrollmentMetadata$Outbound, z.ZodTypeDef, IraSimpleEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IraSimpleEnrollmentMetadata$ {
    /** @deprecated use `IraSimpleEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IraSimpleEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `IraSimpleEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IraSimpleEnrollmentMetadata$Outbound, z.ZodTypeDef, IraSimpleEnrollmentMetadata>;
    /** @deprecated use `IraSimpleEnrollmentMetadata$Outbound` instead. */
    type Outbound = IraSimpleEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentIraTraditionalEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentIraTraditionalEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const IraTraditionalEnrollmentMetadata$inboundSchema: z.ZodType<IraTraditionalEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type IraTraditionalEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IraTraditionalEnrollmentMetadata$outboundSchema: z.ZodType<IraTraditionalEnrollmentMetadata$Outbound, z.ZodTypeDef, IraTraditionalEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IraTraditionalEnrollmentMetadata$ {
    /** @deprecated use `IraTraditionalEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IraTraditionalEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `IraTraditionalEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IraTraditionalEnrollmentMetadata$Outbound, z.ZodTypeDef, IraTraditionalEnrollmentMetadata>;
    /** @deprecated use `IraTraditionalEnrollmentMetadata$Outbound` instead. */
    type Outbound = IraTraditionalEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentJointCommunityPropertyEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentJointCommunityPropertyEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCouple$inboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCouple$outboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCoupleOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCouple$ {
    /** @deprecated use `EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCouple$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCouple$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, EnrollmentJointCommunityPropertyEnrollmentMetadataLegalResidencyStateOfMarriedCoupleOpen>;
}
/** @internal */
export declare const JointCommunityPropertyEnrollmentMetadata$inboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type JointCommunityPropertyEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    legal_residency_state_of_married_couple?: string | undefined;
};
/** @internal */
export declare const JointCommunityPropertyEnrollmentMetadata$outboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadata$Outbound, z.ZodTypeDef, JointCommunityPropertyEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointCommunityPropertyEnrollmentMetadata$ {
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadata$Outbound, z.ZodTypeDef, JointCommunityPropertyEnrollmentMetadata>;
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadata$Outbound` instead. */
    type Outbound = JointCommunityPropertyEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentJointTenantsByEntiretyEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const EnrollmentLegalResidencyStateOfMarriedCouple$inboundSchema: z.ZodType<EnrollmentLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentLegalResidencyStateOfMarriedCouple$outboundSchema: z.ZodType<EnrollmentLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, EnrollmentLegalResidencyStateOfMarriedCoupleOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLegalResidencyStateOfMarriedCouple$ {
    /** @deprecated use `EnrollmentLegalResidencyStateOfMarriedCouple$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLegalResidencyStateOfMarriedCouple$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, EnrollmentLegalResidencyStateOfMarriedCoupleOpen>;
}
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadata$inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type JointTenantsByEntiretyEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    legal_residency_state_of_married_couple?: string | undefined;
};
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadata$outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadata$Outbound, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointTenantsByEntiretyEnrollmentMetadata$ {
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadata$Outbound, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadata>;
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadata$Outbound` instead. */
    type Outbound = JointTenantsByEntiretyEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentJointTenantsInCommonEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentJointTenantsInCommonEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const JointTenantsInCommonEnrollmentMetadata$inboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type JointTenantsInCommonEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const JointTenantsInCommonEnrollmentMetadata$outboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadata$Outbound, z.ZodTypeDef, JointTenantsInCommonEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointTenantsInCommonEnrollmentMetadata$ {
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadata$Outbound, z.ZodTypeDef, JointTenantsInCommonEnrollmentMetadata>;
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadata$Outbound` instead. */
    type Outbound = JointTenantsInCommonEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentJointWithRightsOfSurvivorshipEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const JointWithRightsOfSurvivorshipEnrollmentMetadata$inboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type JointWithRightsOfSurvivorshipEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const JointWithRightsOfSurvivorshipEnrollmentMetadata$outboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadata$Outbound, z.ZodTypeDef, JointWithRightsOfSurvivorshipEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointWithRightsOfSurvivorshipEnrollmentMetadata$ {
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadata$Outbound, z.ZodTypeDef, JointWithRightsOfSurvivorshipEnrollmentMetadata>;
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadata$Outbound` instead. */
    type Outbound = JointWithRightsOfSurvivorshipEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataInitialDepositAmount$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataInitialDepositAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLlcEnrollmentMetadataInitialDepositAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataInitialDepositAmount$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataInitialDepositAmount$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataInitialDepositAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataInitialDepositAmount$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataInitialDepositAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataInitialDepositAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataInitialDepositAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataInitialDepositAmount$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataInitialDepositAmount>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataInitialDepositAmount$Outbound` instead. */
    type Outbound = EnrollmentLlcEnrollmentMetadataInitialDepositAmount$Outbound;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataDepositedFunds$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataDepositedFunds, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLlcEnrollmentMetadataDepositedFunds$Outbound = {
    initial_deposit_amount?: EnrollmentLlcEnrollmentMetadataInitialDepositAmount$Outbound | null | undefined;
    initial_deposit_source?: string | undefined;
};
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataDepositedFunds$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataDepositedFunds$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataDepositedFunds>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataDepositedFunds$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataDepositedFunds$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataDepositedFunds, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataDepositedFunds$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataDepositedFunds$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataDepositedFunds>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataDepositedFunds$Outbound` instead. */
    type Outbound = EnrollmentLlcEnrollmentMetadataDepositedFunds$Outbound;
}
/** @internal */
export declare const EnrollmentDeterminedAccountRiskRating$inboundSchema: z.ZodType<EnrollmentDeterminedAccountRiskRatingOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentDeterminedAccountRiskRating$outboundSchema: z.ZodType<EnrollmentDeterminedAccountRiskRatingOpen, z.ZodTypeDef, EnrollmentDeterminedAccountRiskRatingOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentDeterminedAccountRiskRating$ {
    /** @deprecated use `EnrollmentDeterminedAccountRiskRating$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentDeterminedAccountRiskRatingOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentDeterminedAccountRiskRating$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentDeterminedAccountRiskRatingOpen, z.ZodTypeDef, EnrollmentDeterminedAccountRiskRatingOpen>;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataOtherAccounts$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataOtherAccounts, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLlcEnrollmentMetadataOtherAccounts$Outbound = {
    account_names?: Array<string> | undefined;
    account_numbers?: Array<string> | undefined;
    owner_has_other_accounts_at_apex?: boolean | undefined;
};
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataOtherAccounts$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataOtherAccounts$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataOtherAccounts>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataOtherAccounts$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataOtherAccounts$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataOtherAccounts, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataOtherAccounts$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataOtherAccounts$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataOtherAccounts>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataOtherAccounts$Outbound` instead. */
    type Outbound = EnrollmentLlcEnrollmentMetadataOtherAccounts$Outbound;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataFinancialProfile$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataFinancialProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLlcEnrollmentMetadataFinancialProfile$Outbound = {
    banking_relationships?: Array<string> | undefined;
    other_accounts?: EnrollmentLlcEnrollmentMetadataOtherAccounts$Outbound | null | undefined;
    primary_source_of_deposited_funds?: string | undefined;
};
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataFinancialProfile$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataFinancialProfile$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataFinancialProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataFinancialProfile$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataFinancialProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataFinancialProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataFinancialProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataFinancialProfile$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataFinancialProfile>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataFinancialProfile$Outbound` instead. */
    type Outbound = EnrollmentLlcEnrollmentMetadataFinancialProfile$Outbound;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$Outbound = {
    foreign_bond_trading?: boolean | undefined;
    foreign_bond_trading_detail?: Array<ForeignBondTradingDetail$Outbound> | undefined;
};
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$Outbound` instead. */
    type Outbound = EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$Outbound;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound` instead. */
    type Outbound = EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataLowPricedSecurities$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataLowPricedSecurities, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLlcEnrollmentMetadataLowPricedSecurities$Outbound = {
    low_priced_securities?: boolean | undefined;
    low_priced_securities_percentage?: EnrollmentLlcEnrollmentMetadataLowPricedSecuritiesPercentage$Outbound | null | undefined;
};
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataLowPricedSecurities$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataLowPricedSecurities$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataLowPricedSecurities>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataLowPricedSecurities$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataLowPricedSecurities$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataLowPricedSecurities, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataLowPricedSecurities$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataLowPricedSecurities$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataLowPricedSecurities>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataLowPricedSecurities$Outbound` instead. */
    type Outbound = EnrollmentLlcEnrollmentMetadataLowPricedSecurities$Outbound;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityType$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityType$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityType$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityTypeOpen, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataPrimaryAccountActivityTypeOpen>;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataWithdrawalFrequency$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataWithdrawalFrequency$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataWithdrawalFrequencyOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataWithdrawalFrequency$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataWithdrawalFrequency$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataWithdrawalFrequency$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataWithdrawalFrequencyOpen, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataWithdrawalFrequencyOpen>;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataPlannedActivity$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataPlannedActivity, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLlcEnrollmentMetadataPlannedActivity$Outbound = {
    foreign_bond_trading_details?: EnrollmentLlcEnrollmentMetadataForeignBondTradingDetails$Outbound | null | undefined;
    low_priced_securities?: EnrollmentLlcEnrollmentMetadataLowPricedSecurities$Outbound | null | undefined;
    primary_account_activity_type?: string | undefined;
    withdrawal_frequency?: string | undefined;
};
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataPlannedActivity$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataPlannedActivity$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataPlannedActivity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataPlannedActivity$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataPlannedActivity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataPlannedActivity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataPlannedActivity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataPlannedActivity$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataPlannedActivity>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataPlannedActivity$Outbound` instead. */
    type Outbound = EnrollmentLlcEnrollmentMetadataPlannedActivity$Outbound;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataRelatedPepDetails$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataRelatedPepDetails, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentLlcEnrollmentMetadataRelatedPepDetails$Outbound = {
    direct_or_indirect_related_peps?: boolean | undefined;
    related_peps?: Array<RelatedPep$Outbound> | undefined;
};
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataRelatedPepDetails$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataRelatedPepDetails$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataRelatedPepDetails>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataRelatedPepDetails$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataRelatedPepDetails$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataRelatedPepDetails, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataRelatedPepDetails$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataRelatedPepDetails$Outbound, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataRelatedPepDetails>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataRelatedPepDetails$Outbound` instead. */
    type Outbound = EnrollmentLlcEnrollmentMetadataRelatedPepDetails$Outbound;
}
/** @internal */
export declare const EnrollmentEddAccountEnrollmentMetadata$inboundSchema: z.ZodType<EnrollmentEddAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentEddAccountEnrollmentMetadata$Outbound = {
    deposited_funds?: EnrollmentLlcEnrollmentMetadataDepositedFunds$Outbound | null | undefined;
    determined_account_risk_rating?: string | undefined;
    financial_profile?: EnrollmentLlcEnrollmentMetadataFinancialProfile$Outbound | null | undefined;
    planned_activity?: EnrollmentLlcEnrollmentMetadataPlannedActivity$Outbound | null | undefined;
    related_pep_details?: EnrollmentLlcEnrollmentMetadataRelatedPepDetails$Outbound | null | undefined;
    scope_of_business?: string | undefined;
};
/** @internal */
export declare const EnrollmentEddAccountEnrollmentMetadata$outboundSchema: z.ZodType<EnrollmentEddAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, EnrollmentEddAccountEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentEddAccountEnrollmentMetadata$ {
    /** @deprecated use `EnrollmentEddAccountEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentEddAccountEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentEddAccountEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentEddAccountEnrollmentMetadata$Outbound, z.ZodTypeDef, EnrollmentEddAccountEnrollmentMetadata>;
    /** @deprecated use `EnrollmentEddAccountEnrollmentMetadata$Outbound` instead. */
    type Outbound = EnrollmentEddAccountEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentLlcEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentLlcEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentLlcEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentLlcEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentLlcEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const LlcEnrollmentMetadata$inboundSchema: z.ZodType<LlcEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type LlcEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    edd_account_enrollment_metadata?: EnrollmentEddAccountEnrollmentMetadata$Outbound | null | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const LlcEnrollmentMetadata$outboundSchema: z.ZodType<LlcEnrollmentMetadata$Outbound, z.ZodTypeDef, LlcEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LlcEnrollmentMetadata$ {
    /** @deprecated use `LlcEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LlcEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `LlcEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LlcEnrollmentMetadata$Outbound, z.ZodTypeDef, LlcEnrollmentMetadata>;
    /** @deprecated use `LlcEnrollmentMetadata$Outbound` instead. */
    type Outbound = LlcEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentOperatingPurpose$inboundSchema: z.ZodType<EnrollmentOperatingPurposeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentOperatingPurpose$outboundSchema: z.ZodType<EnrollmentOperatingPurposeOpen, z.ZodTypeDef, EnrollmentOperatingPurposeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentOperatingPurpose$ {
    /** @deprecated use `EnrollmentOperatingPurpose$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentOperatingPurposeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentOperatingPurpose$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentOperatingPurposeOpen, z.ZodTypeDef, EnrollmentOperatingPurposeOpen>;
}
/** @internal */
export declare const EnrollmentTaxAuthority$inboundSchema: z.ZodType<EnrollmentTaxAuthorityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentTaxAuthority$outboundSchema: z.ZodType<EnrollmentTaxAuthorityOpen, z.ZodTypeDef, EnrollmentTaxAuthorityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentTaxAuthority$ {
    /** @deprecated use `EnrollmentTaxAuthority$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentTaxAuthorityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentTaxAuthority$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentTaxAuthorityOpen, z.ZodTypeDef, EnrollmentTaxAuthorityOpen>;
}
/** @internal */
export declare const EnrollmentWithholdingType$inboundSchema: z.ZodType<EnrollmentWithholdingTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentWithholdingType$outboundSchema: z.ZodType<EnrollmentWithholdingTypeOpen, z.ZodTypeDef, EnrollmentWithholdingTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentWithholdingType$ {
    /** @deprecated use `EnrollmentWithholdingType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentWithholdingTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentWithholdingType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentWithholdingTypeOpen, z.ZodTypeDef, EnrollmentWithholdingTypeOpen>;
}
/** @internal */
export declare const TaxWithholdingMetadata$inboundSchema: z.ZodType<TaxWithholdingMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxWithholdingMetadata$Outbound = {
    tax_authority?: string | undefined;
    withholding_type?: string | undefined;
};
/** @internal */
export declare const TaxWithholdingMetadata$outboundSchema: z.ZodType<TaxWithholdingMetadata$Outbound, z.ZodTypeDef, TaxWithholdingMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxWithholdingMetadata$ {
    /** @deprecated use `TaxWithholdingMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxWithholdingMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxWithholdingMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxWithholdingMetadata$Outbound, z.ZodTypeDef, TaxWithholdingMetadata>;
    /** @deprecated use `TaxWithholdingMetadata$Outbound` instead. */
    type Outbound = TaxWithholdingMetadata$Outbound;
}
/** @internal */
export declare const OperatingEnrollmentMetadata$inboundSchema: z.ZodType<OperatingEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type OperatingEnrollmentMetadata$Outbound = {
    operating_purpose?: string | undefined;
    subtitle?: string | undefined;
    tax_withholding_metadata?: TaxWithholdingMetadata$Outbound | null | undefined;
};
/** @internal */
export declare const OperatingEnrollmentMetadata$outboundSchema: z.ZodType<OperatingEnrollmentMetadata$Outbound, z.ZodTypeDef, OperatingEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OperatingEnrollmentMetadata$ {
    /** @deprecated use `OperatingEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OperatingEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `OperatingEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OperatingEnrollmentMetadata$Outbound, z.ZodTypeDef, OperatingEnrollmentMetadata>;
    /** @deprecated use `OperatingEnrollmentMetadata$Outbound` instead. */
    type Outbound = OperatingEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const InvestmentVehicleExperience$inboundSchema: z.ZodType<InvestmentVehicleExperience, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestmentVehicleExperience$Outbound = {
    commodities_average_annual_trade_count?: number | undefined;
    corporate_bonds_average_annual_trade_count?: number | undefined;
    funds_average_annual_trade_count?: number | undefined;
    government_bonds_average_annual_trade_count?: number | undefined;
    margin_average_annual_trade_count?: number | undefined;
    municipal_bonds_average_annual_trade_count?: number | undefined;
    options_average_annual_trade_count?: number | undefined;
    stocks_average_annual_trade_count?: number | undefined;
    tax_shelters_average_annual_trade_count?: number | undefined;
};
/** @internal */
export declare const InvestmentVehicleExperience$outboundSchema: z.ZodType<InvestmentVehicleExperience$Outbound, z.ZodTypeDef, InvestmentVehicleExperience>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestmentVehicleExperience$ {
    /** @deprecated use `InvestmentVehicleExperience$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestmentVehicleExperience, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestmentVehicleExperience$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestmentVehicleExperience$Outbound, z.ZodTypeDef, InvestmentVehicleExperience>;
    /** @deprecated use `InvestmentVehicleExperience$Outbound` instead. */
    type Outbound = InvestmentVehicleExperience$Outbound;
}
/** @internal */
export declare const EnrollmentOptionsLevel$inboundSchema: z.ZodType<EnrollmentOptionsLevelOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentOptionsLevel$outboundSchema: z.ZodType<EnrollmentOptionsLevelOpen, z.ZodTypeDef, EnrollmentOptionsLevelOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentOptionsLevel$ {
    /** @deprecated use `EnrollmentOptionsLevel$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentOptionsLevelOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentOptionsLevel$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentOptionsLevelOpen, z.ZodTypeDef, EnrollmentOptionsLevelOpen>;
}
/** @internal */
export declare const OrdersOptionsTradingEnrollmentMetadata$inboundSchema: z.ZodType<OrdersOptionsTradingEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type OrdersOptionsTradingEnrollmentMetadata$Outbound = {
    investment_vehicle_experience?: InvestmentVehicleExperience$Outbound | null | undefined;
    options_level?: string | undefined;
    total_years_options_trading_experience?: number | undefined;
};
/** @internal */
export declare const OrdersOptionsTradingEnrollmentMetadata$outboundSchema: z.ZodType<OrdersOptionsTradingEnrollmentMetadata$Outbound, z.ZodTypeDef, OrdersOptionsTradingEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrdersOptionsTradingEnrollmentMetadata$ {
    /** @deprecated use `OrdersOptionsTradingEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrdersOptionsTradingEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrdersOptionsTradingEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrdersOptionsTradingEnrollmentMetadata$Outbound, z.ZodTypeDef, OrdersOptionsTradingEnrollmentMetadata>;
    /** @deprecated use `OrdersOptionsTradingEnrollmentMetadata$Outbound` instead. */
    type Outbound = OrdersOptionsTradingEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentState$inboundSchema: z.ZodType<EnrollmentStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentState$outboundSchema: z.ZodType<EnrollmentStateOpen, z.ZodTypeDef, EnrollmentStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentState$ {
    /** @deprecated use `EnrollmentState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentStateOpen, z.ZodTypeDef, EnrollmentStateOpen>;
}
/** @internal */
export declare const EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlan$inboundSchema: z.ZodType<EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlan$outboundSchema: z.ZodType<EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlan$ {
    /** @deprecated use `EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlanOpen, z.ZodTypeDef, EnrollmentTrustEnrollmentMetadataDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const EnrollmentTrustEnrollmentMetadataFdicCashSweep$inboundSchema: z.ZodType<EnrollmentTrustEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentTrustEnrollmentMetadataFdicCashSweep$outboundSchema: z.ZodType<EnrollmentTrustEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentTrustEnrollmentMetadataFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentTrustEnrollmentMetadataFdicCashSweep$ {
    /** @deprecated use `EnrollmentTrustEnrollmentMetadataFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentTrustEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentTrustEnrollmentMetadataFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentTrustEnrollmentMetadataFdicCashSweepOpen, z.ZodTypeDef, EnrollmentTrustEnrollmentMetadataFdicCashSweepOpen>;
}
/** @internal */
export declare const EnrollmentOpenedOnBehalfOf$inboundSchema: z.ZodType<EnrollmentOpenedOnBehalfOfOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentOpenedOnBehalfOf$outboundSchema: z.ZodType<EnrollmentOpenedOnBehalfOfOpen, z.ZodTypeDef, EnrollmentOpenedOnBehalfOfOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentOpenedOnBehalfOf$ {
    /** @deprecated use `EnrollmentOpenedOnBehalfOf$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentOpenedOnBehalfOfOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentOpenedOnBehalfOf$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentOpenedOnBehalfOfOpen, z.ZodTypeDef, EnrollmentOpenedOnBehalfOfOpen>;
}
/** @internal */
export declare const TrustEnrollmentMetadata$inboundSchema: z.ZodType<TrustEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type TrustEnrollmentMetadata$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    opened_on_behalf_of?: string | undefined;
};
/** @internal */
export declare const TrustEnrollmentMetadata$outboundSchema: z.ZodType<TrustEnrollmentMetadata$Outbound, z.ZodTypeDef, TrustEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TrustEnrollmentMetadata$ {
    /** @deprecated use `TrustEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TrustEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `TrustEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TrustEnrollmentMetadata$Outbound, z.ZodTypeDef, TrustEnrollmentMetadata>;
    /** @deprecated use `TrustEnrollmentMetadata$Outbound` instead. */
    type Outbound = TrustEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const EnrollmentType1$inboundSchema: z.ZodType<EnrollmentType1Open, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentType1$outboundSchema: z.ZodType<EnrollmentType1Open, z.ZodTypeDef, EnrollmentType1Open>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentType1$ {
    /** @deprecated use `EnrollmentType1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentType1Open, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentType1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentType1Open, z.ZodTypeDef, EnrollmentType1Open>;
}
/** @internal */
export declare const VirtualAccountNumberEnrollmentMetadata$inboundSchema: z.ZodType<VirtualAccountNumberEnrollmentMetadata, z.ZodTypeDef, unknown>;
/** @internal */
export type VirtualAccountNumberEnrollmentMetadata$Outbound = {
    routing_number?: string | undefined;
    virtual_account_number?: string | undefined;
};
/** @internal */
export declare const VirtualAccountNumberEnrollmentMetadata$outboundSchema: z.ZodType<VirtualAccountNumberEnrollmentMetadata$Outbound, z.ZodTypeDef, VirtualAccountNumberEnrollmentMetadata>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VirtualAccountNumberEnrollmentMetadata$ {
    /** @deprecated use `VirtualAccountNumberEnrollmentMetadata$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VirtualAccountNumberEnrollmentMetadata, z.ZodTypeDef, unknown>;
    /** @deprecated use `VirtualAccountNumberEnrollmentMetadata$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VirtualAccountNumberEnrollmentMetadata$Outbound, z.ZodTypeDef, VirtualAccountNumberEnrollmentMetadata>;
    /** @deprecated use `VirtualAccountNumberEnrollmentMetadata$Outbound` instead. */
    type Outbound = VirtualAccountNumberEnrollmentMetadata$Outbound;
}
/** @internal */
export declare const Enrollment$inboundSchema: z.ZodType<Enrollment, z.ZodTypeDef, unknown>;
/** @internal */
export type Enrollment$Outbound = {
    beneficiary_enrollment_metadata?: BeneficiaryEnrollmentMetadata$Outbound | null | undefined;
    consent_method?: string | undefined;
    corporation_enrollment_metadata?: CorporationEnrollmentMetadata$Outbound | null | undefined;
    custodial_enrollment_metadata?: CustodialEnrollmentMetadata$Outbound | null | undefined;
    enrollment_id?: string | undefined;
    enrollment_time?: string | null | undefined;
    estate_enrollment_metadata?: EstateEnrollmentMetadata$Outbound | null | undefined;
    foreign_individual_account_enrollment_metadata?: ForeignIndividualAccountEnrollmentMetadata$Outbound | null | undefined;
    foreign_joint_account_enrollment_metadata?: ForeignJointAccountEnrollmentMetadata$Outbound | null | undefined;
    fpsl_enrollment_metadata?: FpslEnrollmentMetadata$Outbound | null | undefined;
    individual_enrollment_metadata?: IndividualEnrollmentMetadata$Outbound | null | undefined;
    ira_beneficiary_enrollment_metadata?: IraBeneficiaryEnrollmentMetadata$Outbound | null | undefined;
    ira_rollover_enrollment_metadata?: IraRolloverEnrollmentMetadata$Outbound | null | undefined;
    ira_roth_enrollment_metadata?: IraRothEnrollmentMetadata$Outbound | null | undefined;
    ira_sep_enrollment_metadata?: IraSepEnrollmentMetadata$Outbound | null | undefined;
    ira_simple_enrollment_metadata?: IraSimpleEnrollmentMetadata$Outbound | null | undefined;
    ira_traditional_enrollment_metadata?: IraTraditionalEnrollmentMetadata$Outbound | null | undefined;
    joint_community_property_enrollment_metadata?: JointCommunityPropertyEnrollmentMetadata$Outbound | null | undefined;
    joint_tenants_by_entirety_enrollment_metadata?: JointTenantsByEntiretyEnrollmentMetadata$Outbound | null | undefined;
    joint_tenants_in_common_enrollment_metadata?: JointTenantsInCommonEnrollmentMetadata$Outbound | null | undefined;
    joint_with_rights_of_survivorship_enrollment_metadata?: JointWithRightsOfSurvivorshipEnrollmentMetadata$Outbound | null | undefined;
    llc_enrollment_metadata?: LlcEnrollmentMetadata$Outbound | null | undefined;
    name?: string | undefined;
    operating_enrollment_metadata?: OperatingEnrollmentMetadata$Outbound | null | undefined;
    orders_options_trading_enrollment_metadata?: OrdersOptionsTradingEnrollmentMetadata$Outbound | null | undefined;
    principal_approver_id?: string | undefined;
    state?: string | undefined;
    trust_enrollment_metadata?: TrustEnrollmentMetadata$Outbound | null | undefined;
    type?: string | undefined;
    unenrollment_time?: string | null | undefined;
    virtual_account_number_enrollment_metadata?: VirtualAccountNumberEnrollmentMetadata$Outbound | null | undefined;
};
/** @internal */
export declare const Enrollment$outboundSchema: z.ZodType<Enrollment$Outbound, z.ZodTypeDef, Enrollment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Enrollment$ {
    /** @deprecated use `Enrollment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Enrollment, z.ZodTypeDef, unknown>;
    /** @deprecated use `Enrollment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Enrollment$Outbound, z.ZodTypeDef, Enrollment>;
    /** @deprecated use `Enrollment$Outbound` instead. */
    type Outbound = Enrollment$Outbound;
}
//# sourceMappingURL=enrollment.d.ts.map