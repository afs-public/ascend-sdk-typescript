import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Lot, Lot$Outbound } from "./lot.js";
import { YieldRecord, YieldRecord$Outbound } from "./yieldrecord.js";
/**
 * Used to record the movement of funds or shares to/ from the pending_acats memo location
 */
export type AcatsPendingOut = {
    /**
     * the unique transfer Identifier assigned by NSCC
     */
    acatsControlNumber?: string | undefined;
    /**
     * Free form text field
     */
    additionalInstructions?: string | undefined;
};
/**
 * Indicates the memo location impacted by an entry
 */
export declare enum AccountMemo {
    MemoTypeUnspecified = "MEMO_TYPE_UNSPECIFIED",
    FullyPaidStockLoan = "FULLY_PAID_STOCK_LOAN",
    Free = "FREE",
    PendingOutgoingAcat = "PENDING_OUTGOING_ACAT",
    PendingDrip = "PENDING_DRIP",
    PendingWithdrawal = "PENDING_WITHDRAWAL"
}
/**
 * Indicates the memo location impacted by an entry
 */
export type AccountMemoOpen = OpenEnum<typeof AccountMemo>;
/**
 * The type of asset movement being performed within the lifecycle of an account transfer process
 */
export declare enum AccountTransferType {
    AccountTransferTypeUnspecified = "ACCOUNT_TRANSFER_TYPE_UNSPECIFIED",
    PartialTransferReceiver = "PARTIAL_TRANSFER_RECEIVER",
    PartialTransferDeliverer = "PARTIAL_TRANSFER_DELIVERER",
    FullAccountTransfer = "FULL_ACCOUNT_TRANSFER",
    ResidualCredit = "RESIDUAL_CREDIT",
    MutualFundCleanup = "MUTUAL_FUND_CLEANUP",
    FailReversal = "FAIL_REVERSAL",
    Reclaim = "RECLAIM",
    PositionTransferFund = "POSITION_TRANSFER_FUND"
}
/**
 * The type of asset movement being performed within the lifecycle of an account transfer process
 */
export type AccountTransferTypeOpen = OpenEnum<typeof AccountTransferType>;
/**
 * Indicates whether the account transfer is incoming or outgoing
 */
export declare enum Action {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    CashInLieu = "CASH_IN_LIEU"
}
/**
 * Indicates whether the account transfer is incoming or outgoing
 */
export type ActionOpen = OpenEnum<typeof Action>;
/**
 * the method used for the account transfer
 */
export declare enum Method {
    AccountTransferMethodUnspecified = "ACCOUNT_TRANSFER_METHOD_UNSPECIFIED",
    Acats = "ACATS",
    Internal = "INTERNAL",
    Manual = "MANUAL"
}
/**
 * the method used for the account transfer
 */
export type MethodOpen = OpenEnum<typeof Method>;
/**
 * Used to record the movement of funds or shares during the bookkeeping phase of an account transfer and details related to the account transfer
 */
export type AccountTransfer = {
    /**
     * sequence number assigned by the DTCC ACATS transfer system for each asset transferred
     */
    acatsAssetSequenceNumber?: string | undefined;
    /**
     * the unique transfer Identifier assigned by NSCC
     */
    acatsControlNumber?: string | undefined;
    /**
     * The type of asset movement being performed within the lifecycle of an account transfer process
     */
    accountTransferType?: AccountTransferTypeOpen | undefined;
    /**
     * Indicates whether the account transfer is incoming or outgoing
     */
    action?: ActionOpen | undefined;
    /**
     * Free form text field
     */
    additionalInstructions?: string | undefined;
    /**
     * account number at the contra firm
     */
    contraPartyAccountNumber?: string | undefined;
    /**
     * contra party identifier
     */
    contraPartyId?: string | undefined;
    /**
     * Contra party institution for the account transfer
     */
    institution?: string | undefined;
    /**
     * the method used for the account transfer
     */
    method?: MethodOpen | undefined;
};
/**
 * Indicates that the entry references accrued interest that has been earned but not yet paid between the last interest payment and the date of the trade
 */
export type EntryAccruedInterest = {};
/**
 * Common fields for corporate actions
 */
export type CorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Object containing metadata for acquisition events
 */
export type Acquisition = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: CorporateActionGeneralInformation | null | undefined;
};
/**
 * The activity date refers to the specific calendar day on which a financial transaction, such as a trade at an exchange or a deposit at a bank, was executed. This date is specific to the institution where the transaction took place, capturing the exact day on which the institution formally records and effects the transaction
 */
export type ActivityDate = {
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
 * The execution route Apex used for this trade
 */
export declare enum EntryBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * The execution route Apex used for this trade
 */
export type EntryBrokerCapacityOpen = OpenEnum<typeof EntryBrokerCapacity>;
/**
 * The price for the instrument that is prevailing in the market
 */
export type EntryPrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type EntryPriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The percent at which the price was adjusted. Expressed as a number from 0.00-100 (rounded to 2 decimals)
 */
export type PriceAdjustmentPercent = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security
 */
export declare enum EntryPriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    SalesLoad = "SALES_LOAD"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security
 */
export type EntryPriceAdjustmentTypeOpen = OpenEnum<typeof EntryPriceAdjustmentType>;
/**
 * Information about any price adjustments applied to the security
 */
export type PriceAdjustmentRecord = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: EntryPriceAdjustmentAmount | null | undefined;
    /**
     * The percent at which the price was adjusted. Expressed as a number from 0.00-100 (rounded to 2 decimals)
     */
    priceAdjustmentPercent?: PriceAdjustmentPercent | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security
     */
    priceAdjustmentType?: EntryPriceAdjustmentTypeOpen | undefined;
};
/**
 * Object containing metadata for trade allocation
 */
export type Allocation = {
    /**
     * To be populated by the submitter of the trade detail
     */
    additionalInstructions?: Array<string> | undefined;
    /**
     * ULID assigned by the Booking API if a trade belongs to an allocation
     */
    bookingApiTradeAllocationId?: string | undefined;
    /**
     * The execution route Apex used for this trade
     */
    brokerCapacity?: EntryBrokerCapacityOpen | undefined;
    /**
     * Client usage area (intact)
     */
    clientMemo?: string | undefined;
    /**
     * Client-provided order ID present in execution reports
     */
    clientOrderId?: string | undefined;
    /**
     * External system ID provided by a client
     */
    externalId?: string | undefined;
    /**
     * Order ID generated by the trading-gateway
     */
    gatewayClientOrderId?: string | undefined;
    /**
     * Indicates the trade should be omitted from client billing
     */
    internalError?: boolean | undefined;
    /**
     * Trade lots
     */
    lots?: Array<Lot> | undefined;
    /**
     * The price for the instrument that is prevailing in the market
     */
    prevailingMarketPrice?: EntryPrevailingMarketPrice | null | undefined;
    /**
     * Information about any price adjustments applied to the security
     */
    priceAdjustmentRecord?: PriceAdjustmentRecord | null | undefined;
    /**
     * Special instructions for the trade
     */
    specialInstructions?: Array<string> | undefined;
    /**
     * The yields associated with a fixed income trade
     */
    yieldRecords?: Array<YieldRecord> | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type CashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type PaymentDate = {
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
 * Corresponds to the position's trade quantity
 */
export type EntryBondDefaultQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Object containing metadata for bond defaults
 */
export type BondDefault = {
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: CashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: PaymentDate | null | undefined;
    /**
     * Corresponds to the position's trade quantity
     */
    quantity?: EntryBondDefaultQuantity | null | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryCapitalGainsCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryPaymentDate = {
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
 * Corresponds to the position's trade quantity
 */
export type EntryCapitalGainsQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date on which positions are recorded in order to calculate entitlement
 */
export type RecordDate = {
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
 * Used to record a distribution of cash that an issuer has determined will be declared as income financed from capital gains and not ordinary income and details related to the capital gain
 */
export type CapitalGains = {
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryCapitalGainsCorporateActionGeneralInformation | null | undefined;
    /**
     * Corresponds to corporateactions.announcement.capital_gains
     */
    longTermGain?: boolean | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryPaymentDate | null | undefined;
    /**
     * Identifies whether dividend income is potentially qualified for the lower maximum individual federal tax rate under the Jobs and Growth Tax Relief Reconciliation Act of 2003
     */
    qualified?: boolean | undefined;
    /**
     * Corresponds to the position's trade quantity
     */
    quantity?: EntryCapitalGainsQuantity | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: RecordDate | null | undefined;
    /**
     * Indicates whether the cash dividend was reinvested
     */
    reinvested?: boolean | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryCashDividendCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryCashDividendCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Corresponds to the raw bucket value that denotes a position is allocated to the "fpsl" memo location
 */
export type EntryFpsl = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Corresponds to the raw bucket value that denotes a position is allocated to the "free" memo location
 */
export type EntryFree = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryCashDividendPaymentDate = {
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
 * When ex-date occurs before the record date, quantity will equal the settled date position balance on the position date of the event When ex-date occurs after the record date, quantity will equal the trade date position balance on the position date of the event
 */
export type EntryCashDividendQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date on which positions are recorded in order to calculate entitlement
 */
export type EntryRecordDate = {
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
 * Corresponds to the position's settled quantity
 */
export type EntryCashDividendSettled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Corresponds to the subtype of corporaction type
 */
export declare enum Subtype {
    CorporateactionsubtypeUnspecified = "CORPORATEACTIONSUBTYPE_UNSPECIFIED",
    AdditionalDividend = "ADDITIONAL_DIVIDEND",
    ApproximateRate = "APPROXIMATE_RATE",
    DividendArrears = "DIVIDEND_ARREARS",
    DividendCancelled = "DIVIDEND_CANCELLED",
    DividendPaymentTaxClassifications = "DIVIDEND_PAYMENT_TAX_CLASSIFICATIONS",
    DividendRescinded = "DIVIDEND_RESCINDED",
    EstimatedReturnOfCapital = "ESTIMATED_RETURN_OF_CAPITAL",
    EstimatedReturnOfCapitalPlusIncome = "ESTIMATED_RETURN_OF_CAPITAL_PLUS_INCOME",
    ExtraDividend = "EXTRA_DIVIDEND",
    ExtraDividendPlusIncome = "EXTRA_DIVIDEND_PLUS_INCOME",
    FinalPaymentTransferBooksAreClosed = "FINAL_PAYMENT_TRANSFER_BOOKS_ARE_CLOSED",
    GrossRate = "GROSS_RATE",
    InitialDividend = "INITIAL_DIVIDEND",
    InitialDividendLongPeriod = "INITIAL_DIVIDEND_LONG_PERIOD",
    InitialDividendShortPeriod = "INITIAL_DIVIDEND_SHORT_PERIOD",
    LimitedPartnershipDistribution = "LIMITED_PARTNERSHIP_DISTRIBUTION",
    Liquidation = "LIQUIDATION",
    NetRate = "NET_RATE",
    Other = "OTHER",
    ProceedsFromSaleOfRights = "PROCEEDS_FROM_SALE_OF_RIGHTS",
    RegularDividend = "REGULAR_DIVIDEND",
    ReturnOfCapital = "RETURN_OF_CAPITAL",
    ReturnOfCapitalPlusIncome = "RETURN_OF_CAPITAL_PLUS_INCOME",
    SpecialDividend = "SPECIAL_DIVIDEND",
    SpecialDividendPlusIncome = "SPECIAL_DIVIDEND_PLUS_INCOME",
    YearEndDividend = "YEAR_END_DIVIDEND",
    YearEndDividendPlusIncome = "YEAR_END_DIVIDEND_PLUS_INCOME",
    Partial = "PARTIAL",
    Full = "FULL",
    Maturity = "MATURITY",
    Termination = "TERMINATION",
    RedemptionOfWarrants = "REDEMPTION_OF_WARRANTS"
}
/**
 * Corresponds to the subtype of corporaction type
 */
export type SubtypeOpen = OpenEnum<typeof Subtype>;
/**
 * Used to record the distribution of cash to shareholders, paid by the issuer, usually based upon current earnings and/or accumulated profits as declared by the board of directors and details related to the cash dividend
 */
export type CashDividend = {
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryCashDividendCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryCashDividendCorporateActionGeneralInformation | null | undefined;
    /**
     * Corresponds to the raw bucket value that denotes a position is allocated to the "fpsl" memo location
     */
    fpsl?: EntryFpsl | null | undefined;
    /**
     * Corresponds to the raw bucket value that denotes a position is allocated to the "free" memo location
     */
    free?: EntryFree | null | undefined;
    /**
     * Corresponds to corporateactions.announcement.capital_gains
     */
    longTermGain?: boolean | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryCashDividendPaymentDate | null | undefined;
    /**
     * Identifies whether dividend income is potentially qualified for the lower maximum individual federal tax rate under the Jobs and Growth Tax Relief Reconciliation Act of 2003
     */
    qualified?: boolean | undefined;
    /**
     * When ex-date occurs before the record date, quantity will equal the settled date position balance on the position date of the event When ex-date occurs after the record date, quantity will equal the trade date position balance on the position date of the event
     */
    quantity?: EntryCashDividendQuantity | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: EntryRecordDate | null | undefined;
    /**
     * Indicates whether the cash dividend was reinvested
     */
    reinvested?: boolean | undefined;
    /**
     * Corresponds to the position's settled quantity
     */
    settled?: EntryCashDividendSettled | null | undefined;
    /**
     * Indicates whether the corporate action event is a substitute payment
     */
    substitutePayment?: boolean | undefined;
    /**
     * Corresponds to the subtype of corporaction type
     */
    subtype?: SubtypeOpen | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryCashInLieuCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Object containing metadata for cash in lieu
 */
export type CashInLieu = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryCashInLieuCorporateActionGeneralInformation | null | undefined;
};
/**
 * Indicates that the entry references commission charged by brokers or financial intermediaries for executing financial transactions on behalf of clients
 */
export type EntryCommission = {};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryConversionCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryConversionCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
 */
export type StockRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK
 */
export declare enum EntryConversionType {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    Cash = "CASH",
    Stock = "STOCK",
    CashAndStock = "CASH_AND_STOCK"
}
/**
 * Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK
 */
export type EntryConversionTypeOpen = OpenEnum<typeof EntryConversionType>;
/**
 * Used to record the conversion of securities (generally convertible bonds or preferred shares) into another form of securities (usually common shares) at a pre-stated price or rate and details related to the conversion
 */
export type Conversion = {
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryConversionCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryConversionCorporateActionGeneralInformation | null | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
     */
    stockRate?: StockRate | null | undefined;
    /**
     * Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK
     */
    type?: EntryConversionTypeOpen | undefined;
};
/**
 * Object containing metadata for memo locations that have been adjusted due to a corporate action
 */
export type CorporateActionMemoAdjustment = {
    /**
     * This field serves as a unique identifier for the specific corporate action linked to the memo adjustment
     */
    corporateActionId?: string | undefined;
    /**
     * Used to capture the specific type of corporate action related to the memo adjustment
     */
    corporateActionType?: string | undefined;
};
/**
 * Provides more details on the type of credit
 */
export declare enum CreditType {
    CreditTypeUnspecified = "CREDIT_TYPE_UNSPECIFIED",
    FullyPaidStockLoan = "FULLY_PAID_STOCK_LOAN",
    WriteOff = "WRITE_OFF",
    Reimbursement = "REIMBURSEMENT",
    Promotional = "PROMOTIONAL",
    FdicInsuredDepositProgram = "FDIC_INSURED_DEPOSIT_PROGRAM",
    AccountTransferAdjustment = "ACCOUNT_TRANSFER_ADJUSTMENT"
}
/**
 * Provides more details on the type of credit
 */
export type CreditTypeOpen = OpenEnum<typeof CreditType>;
/**
 * Used to disburse funds into a customer's account, typically for purposes such as refunds, interest payments, or rewards from enrolled programs and details related to the credit
 */
export type Credit = {
    /**
     * Free form text field providing additional information about a transaction
     */
    additionalInstructions?: string | undefined;
    /**
     * Provides more details on the type of credit
     */
    creditType?: CreditTypeOpen | undefined;
    /**
     * Indicates whether the credit is taxable
     */
    taxable?: boolean | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryDeliveryCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Object containing metadata for delivery events
 */
export type Delivery = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryDeliveryCorporateActionGeneralInformation | null | undefined;
};
/**
 * Provides detail on the contribution reason if the deposit is made to a retirement account
 */
export declare enum ContributionType {
    ContributionTypeUnspecified = "CONTRIBUTION_TYPE_UNSPECIFIED",
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
 * Provides detail on the contribution reason if the deposit is made to a retirement account
 */
export type ContributionTypeOpen = OpenEnum<typeof ContributionType>;
/**
 * The mechanism by which funds were deposited
 */
export declare enum EntryDepositType {
    ExternalMovementTypeUnspecified = "EXTERNAL_MOVEMENT_TYPE_UNSPECIFIED",
    Ach = "ACH",
    Check = "CHECK",
    Wire = "WIRE",
    Paypal = "PAYPAL",
    Rtp = "RTP",
    Ict = "ICT",
    Journal = "JOURNAL",
    ExternalAch = "EXTERNAL_ACH"
}
/**
 * The mechanism by which funds were deposited
 */
export type EntryDepositTypeOpen = OpenEnum<typeof EntryDepositType>;
/**
 * Used to record deposits of funds into an account and capture details related to the deposit
 */
export type Deposit = {
    /**
     * Free form text field providing additional information about a transaction
     */
    additionalInstructions?: string | undefined;
    /**
     * Provides detail on the contribution reason if the deposit is made to a retirement account
     */
    contributionType?: ContributionTypeOpen | undefined;
    /**
     * Integer representing the tax year the contribution should be applied to
     */
    contributionYear?: number | undefined;
    /**
     * Unique tracking number provided to allow tracking a wire transfer from the initiating bank to the receiving bank
     */
    fedReferenceNumber?: string | undefined;
    /**
     * Human readable account identifier for the account the assets were journaled from. To be populated when the Deposit type is Journal
     */
    originatingAccountNumber?: string | undefined;
    /**
     * The mechanism by which funds were deposited
     */
    type?: EntryDepositTypeOpen | undefined;
};
/**
 * Indicates whether the drip memo activity is reserving cash (DRIP_PENDING) or removing the reservation after a successful reinvestment trade
 */
export declare enum EntryAction {
    DripActionUnspecified = "DRIP_ACTION_UNSPECIFIED",
    DripPending = "DRIP_PENDING",
    DripComplete = "DRIP_COMPLETE"
}
/**
 * Indicates whether the drip memo activity is reserving cash (DRIP_PENDING) or removing the reservation after a successful reinvestment trade
 */
export type EntryActionOpen = OpenEnum<typeof EntryAction>;
/**
 * Used to record the movement of funds to/ from the pending_drip memo location
 */
export type Drip = {
    /**
     * Indicates whether the drip memo activity is reserving cash (DRIP_PENDING) or removing the reservation after a successful reinvestment trade
     */
    action?: EntryActionOpen | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryExchangeCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryExchangeCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
 */
export type EntryStockRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK
 */
export declare enum EntryExchangeType {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    Cash = "CASH",
    Stock = "STOCK",
    CashAndStock = "CASH_AND_STOCK"
}
/**
 * Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK
 */
export type EntryExchangeTypeOpen = OpenEnum<typeof EntryExchangeType>;
/**
 * Used to record the exchange of certificates for a new security or cash and details related to the exchange
 */
export type Exchange = {
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryExchangeCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryExchangeCorporateActionGeneralInformation | null | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
     */
    stockRate?: EntryStockRate | null | undefined;
    /**
     * Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK
     */
    type?: EntryExchangeTypeOpen | undefined;
};
/**
 * Enum providing additional information about the type of fee being charged
 */
export declare enum EntryFeeType {
    FeeTypeUnspecified = "FEE_TYPE_UNSPECIFIED",
    ClientClearing = "CLIENT_CLEARING",
    Liquidity = "LIQUIDITY",
    GeneralPurpose = "GENERAL_PURPOSE",
    Commission = "COMMISSION",
    Taf = "TAF",
    Sec = "SEC",
    AccountClosing = "ACCOUNT_CLOSING",
    AccountIra = "ACCOUNT_IRA",
    AchReturn = "ACH_RETURN",
    Advisory = "ADVISORY",
    CheckFee = "CHECK_FEE",
    Exchange = "EXCHANGE",
    Management = "MANAGEMENT",
    Overnight = "OVERNIGHT",
    Platform = "PLATFORM",
    Statement = "STATEMENT",
    StopPayment = "STOP_PAYMENT",
    WireFee = "WIRE_FEE",
    Inactivity = "INACTIVITY",
    AmaService = "AMA_SERVICE",
    NoticeOfChange = "NOTICE_OF_CHANGE",
    AccountTransfer = "ACCOUNT_TRANSFER",
    AgencyProcessing = "AGENCY_PROCESSING",
    RtpFee = "RTP_FEE",
    DomesticWireDepositFee = "DOMESTIC_WIRE_DEPOSIT_FEE",
    DomesticWireWithdrawalFee = "DOMESTIC_WIRE_WITHDRAWAL_FEE",
    InternationalWireDepositFee = "INTERNATIONAL_WIRE_DEPOSIT_FEE",
    InternationalWireWithdrawalFee = "INTERNATIONAL_WIRE_WITHDRAWAL_FEE",
    BrokerFee = "BROKER_FEE",
    OccFee = "OCC_FEE",
    ContractFee = "CONTRACT_FEE",
    OptionsRegulatory = "OPTIONS_REGULATORY",
    FinancialTransactionTax = "FINANCIAL_TRANSACTION_TAX"
}
/**
 * Enum providing additional information about the type of fee being charged
 */
export type EntryFeeTypeOpen = OpenEnum<typeof EntryFeeType>;
/**
 * Used to record Fees that have been assessed to account and capture details related to the fee
 */
export type EntryFee = {
    /**
     * Free form text field providing additional information about a transaction
     */
    additionalInstructions?: string | undefined;
    /**
     * Enum providing additional information about the type of fee being charged
     */
    type?: EntryFeeTypeOpen | undefined;
};
/**
 * Used to calculate broadridge blotter code
 */
export declare enum EntryFlipBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Used to calculate broadridge blotter code
 */
export type EntryFlipBrokerCapacityOpen = OpenEnum<typeof EntryFlipBrokerCapacity>;
/**
 * The price for the instrument that is prevailing in the market
 */
export type EntryFlipPrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type EntryFlipPriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The percent at which the price was adjusted. Expressed as a number from 0.00-100 (rounded to 2 decimals)
 */
export type EntryFlipPriceAdjustmentPercent = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security
 */
export declare enum EntryFlipPriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    SalesLoad = "SALES_LOAD"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security
 */
export type EntryFlipPriceAdjustmentTypeOpen = OpenEnum<typeof EntryFlipPriceAdjustmentType>;
/**
 * Information about any price adjustments applied to the security
 */
export type EntryFlipPriceAdjustmentRecord = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: EntryFlipPriceAdjustmentAmount | null | undefined;
    /**
     * The percent at which the price was adjusted. Expressed as a number from 0.00-100 (rounded to 2 decimals)
     */
    priceAdjustmentPercent?: EntryFlipPriceAdjustmentPercent | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security
     */
    priceAdjustmentType?: EntryFlipPriceAdjustmentTypeOpen | undefined;
};
/**
 * Provides additional details for trades
 */
export type Detail = {
    /**
     * To be populated by the submitter of the trade detail
     */
    additionalInstructions?: Array<string> | undefined;
    /**
     * Max Length 50 characters. Alternate order id from the street used for FRAC trades
     */
    alternateOrderId?: string | undefined;
    /**
     * base64 encoded value assigned by the Booking API to all executions
     */
    bookingApiBookingExecutionId?: string | undefined;
    /**
     * base64 encoded value assigned by the Booking API if a trade belongs to an allocation
     */
    bookingApiTradeAllocationId?: string | undefined;
    /**
     * base64 encoded value assigned by the Booking API to all trades
     */
    bookingApiTradeId?: string | undefined;
    /**
     * Executing broker of the trade
     */
    broker?: string | undefined;
    /**
     * Used to calculate broadridge blotter code
     */
    brokerCapacity?: EntryFlipBrokerCapacityOpen | undefined;
    /**
     * client usage area (intact). len 20
     */
    clientMemo?: string | undefined;
    /**
     * Max Length 50 characters. Client provided order id present in exec reports
     */
    clientOrderId?: string | undefined;
    /**
     * MIC code for the exchange
     */
    exchange?: string | undefined;
    /**
     * Max Length 50 characters. Execution id from the street
     */
    executionId?: string | undefined;
    /**
     * Indicates whether Apex is the clearing broker for this trade
     */
    executionOnly?: boolean | undefined;
    /**
     * Max Length 50 characters. External system id provided by a client
     */
    externalId?: string | undefined;
    /**
     * The confirmation number associated with a mutual fund trade
     */
    fundConfirmationNumber?: string | undefined;
    /**
     * Order id generated by trading-gateway (Trade-Ex) to uniquely identify all orders in their system Used as the client_order_id on new order singles sent downstream of the trading-gateway
     */
    gatewayClientOrderId?: string | undefined;
    /**
     * If set to true, indicates the trade should be omitted from client billing
     */
    internalError?: boolean | undefined;
    /**
     * set on penny-for-the-lot trades
     */
    isWriteoff?: boolean | undefined;
    /**
     * Trade lots
     */
    lots?: Array<Lot> | undefined;
    /**
     * "MMAP" for multi market average price, "UNKN" for unknown
     */
    market?: string | undefined;
    /**
     * Max Length 50 characters. Internally generated order id that is returned to client on exec reports
     */
    orderId?: string | undefined;
    /**
     * The price for the instrument that is prevailing in the market
     */
    prevailingMarketPrice?: EntryFlipPrevailingMarketPrice | null | undefined;
    /**
     * Information about any price adjustments applied to the security
     */
    priceAdjustmentRecord?: EntryFlipPriceAdjustmentRecord | null | undefined;
    /**
     * The execution route Apex used for this trade
     */
    route?: string | undefined;
    /**
     * Special instructions for the trade
     */
    specialInstructions?: Array<string> | undefined;
    /**
     * Indicates the trade was executed in a security that is not currently listed. When-issued securities are bought and sold before they are officially issued, allowing investors to speculate on their future value
     */
    whenIssued?: boolean | undefined;
    /**
     * The yields associated with a fixed income trade Only valid if the SecurityType is FIXED_INCOME
     */
    yieldRecords?: Array<YieldRecord> | undefined;
};
/**
 * Object containing metadata for a Flip
 */
export type Flip = {
    /**
     * Provides additional details for trades
     */
    detail?: Detail | null | undefined;
};
/**
 * Indicates whether shares are being allocated or deallocated
 */
export declare enum EntryFpslAction {
    FpslActionUnspecified = "FPSL_ACTION_UNSPECIFIED",
    Allocate = "ALLOCATE",
    Deallocate = "DEALLOCATE"
}
/**
 * Indicates whether shares are being allocated or deallocated
 */
export type EntryFpslActionOpen = OpenEnum<typeof EntryFpslAction>;
/**
 * Used to record the movements of shares to/ from the fpsl memo location and details related to the fpsl memo
 */
export type Fpsl = {
    /**
     * Indicates whether shares are being allocated or deallocated
     */
    action?: EntryFpslActionOpen | undefined;
};
/**
 * The monetary value of an activity, exclusive of any fees (First money)
 */
export type EntryGrossAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Date on which interest accrues before the calculation is made for payment or charge
 */
export type InterestAccrualEndDate = {
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
 * Date on which interest begins to accrue on a cash balance or borrowed funds
 */
export type InterestAccrualStartDate = {
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
export declare enum InterestType {
    InterestTypeUnspecified = "INTEREST_TYPE_UNSPECIFIED",
    Credit = "CREDIT",
    Debit = "DEBIT"
}
export type InterestTypeOpen = OpenEnum<typeof InterestType>;
/**
 * Used to record the payment of interest to accounts that have maintained a cash balance or the charging of interest to accounts that have used margin and details related to the interest
 */
export type Interest = {
    /**
     * Date on which interest accrues before the calculation is made for payment or charge
     */
    interestAccrualEndDate?: InterestAccrualEndDate | null | undefined;
    /**
     * Date on which interest begins to accrue on a cash balance or borrowed funds
     */
    interestAccrualStartDate?: InterestAccrualStartDate | null | undefined;
    interestType?: InterestTypeOpen | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryInterestPaymentCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryInterestPaymentCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryInterestPaymentPaymentDate = {
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
 * The date on which positions are recorded in order to calculate entitlement
 */
export type EntryInterestPaymentRecordDate = {
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
 * Corresponds to the position's settled quantity
 */
export type EntrySettled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Used to record the The payment of an obligation an issuer has agreed to make to holders of an interest-bearing security and details related to the interest payment. Usually, the payment is made in cash and on a scheduled basis
 */
export type InterestPayment = {
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryInterestPaymentCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryInterestPaymentCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryInterestPaymentPaymentDate | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: EntryInterestPaymentRecordDate | null | undefined;
    /**
     * Corresponds to the position's settled quantity
     */
    settled?: EntrySettled | null | undefined;
};
/**
 * Corresponds to whether the entry is incoming outgoing
 */
export declare enum EntryLiquidationAction {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    CashInLieu = "CASH_IN_LIEU"
}
/**
 * Corresponds to whether the entry is incoming outgoing
 */
export type EntryLiquidationActionOpen = OpenEnum<typeof EntryLiquidationAction>;
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryLiquidationCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryLiquidationCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
 */
export type EntryEffectiveDate = {
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
 * The anticipated payment date at the depository
 */
export type EntryLiquidationPaymentDate = {
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
 * Corresponds to the position's trade quantity
 */
export type EntryLiquidationQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date on which positions are recorded in order to calculate entitlement
 */
export type EntryLiquidationRecordDate = {
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
 * Corresponds to the position's settled quantity
 */
export type EntryLiquidationSettled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Corresponds to the subtype of corporaction type
 */
export declare enum EntrySubtype {
    CorporateactionsubtypeUnspecified = "CORPORATEACTIONSUBTYPE_UNSPECIFIED",
    AdditionalDividend = "ADDITIONAL_DIVIDEND",
    ApproximateRate = "APPROXIMATE_RATE",
    DividendArrears = "DIVIDEND_ARREARS",
    DividendCancelled = "DIVIDEND_CANCELLED",
    DividendPaymentTaxClassifications = "DIVIDEND_PAYMENT_TAX_CLASSIFICATIONS",
    DividendRescinded = "DIVIDEND_RESCINDED",
    EstimatedReturnOfCapital = "ESTIMATED_RETURN_OF_CAPITAL",
    EstimatedReturnOfCapitalPlusIncome = "ESTIMATED_RETURN_OF_CAPITAL_PLUS_INCOME",
    ExtraDividend = "EXTRA_DIVIDEND",
    ExtraDividendPlusIncome = "EXTRA_DIVIDEND_PLUS_INCOME",
    FinalPaymentTransferBooksAreClosed = "FINAL_PAYMENT_TRANSFER_BOOKS_ARE_CLOSED",
    GrossRate = "GROSS_RATE",
    InitialDividend = "INITIAL_DIVIDEND",
    InitialDividendLongPeriod = "INITIAL_DIVIDEND_LONG_PERIOD",
    InitialDividendShortPeriod = "INITIAL_DIVIDEND_SHORT_PERIOD",
    LimitedPartnershipDistribution = "LIMITED_PARTNERSHIP_DISTRIBUTION",
    Liquidation = "LIQUIDATION",
    NetRate = "NET_RATE",
    Other = "OTHER",
    ProceedsFromSaleOfRights = "PROCEEDS_FROM_SALE_OF_RIGHTS",
    RegularDividend = "REGULAR_DIVIDEND",
    ReturnOfCapital = "RETURN_OF_CAPITAL",
    ReturnOfCapitalPlusIncome = "RETURN_OF_CAPITAL_PLUS_INCOME",
    SpecialDividend = "SPECIAL_DIVIDEND",
    SpecialDividendPlusIncome = "SPECIAL_DIVIDEND_PLUS_INCOME",
    YearEndDividend = "YEAR_END_DIVIDEND",
    YearEndDividendPlusIncome = "YEAR_END_DIVIDEND_PLUS_INCOME",
    Partial = "PARTIAL",
    Full = "FULL",
    Maturity = "MATURITY",
    Termination = "TERMINATION",
    RedemptionOfWarrants = "REDEMPTION_OF_WARRANTS"
}
/**
 * Corresponds to the subtype of corporaction type
 */
export type EntrySubtypeOpen = OpenEnum<typeof EntrySubtype>;
/**
 * Used to record the dismantling of a business by an issuer, paying off debts in order of priority and distributing the remaining assets in cash and/or securities to the owners of the securities and details related to the liquidation
 */
export type Liquidation = {
    /**
     * Corresponds to whether the entry is incoming outgoing
     */
    action?: EntryLiquidationActionOpen | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryLiquidationCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryLiquidationCorporateActionGeneralInformation | null | undefined;
    /**
     * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
     */
    effectiveDate?: EntryEffectiveDate | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryLiquidationPaymentDate | null | undefined;
    /**
     * Corresponds to the position's trade quantity
     */
    quantity?: EntryLiquidationQuantity | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: EntryLiquidationRecordDate | null | undefined;
    /**
     * Corresponds to the position's settled quantity
     */
    settled?: EntryLiquidationSettled | null | undefined;
    /**
     * Corresponds to the subtype of corporaction type
     */
    subtype?: EntrySubtypeOpen | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryMaturityCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryMaturityCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryMaturityPaymentDate = {
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
 * The trade position quantity used to calculate the disbursed amount
 */
export type EntryMaturityQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Used to record he final repayment, usually in cash, by an issuer for the entire issue, or remaining outstanding securities of a specific security on a specified date and details related to the maturity
 */
export type Maturity = {
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryMaturityCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryMaturityCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryMaturityPaymentDate | null | undefined;
    /**
     * The trade position quantity used to calculate the disbursed amount
     */
    quantity?: EntryMaturityQuantity | null | undefined;
};
/**
 * Corresponds to whether the entry is incoming outgoing
 */
export declare enum EntryMergerAction {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    CashInLieu = "CASH_IN_LIEU"
}
/**
 * Corresponds to whether the entry is incoming outgoing
 */
export type EntryMergerActionOpen = OpenEnum<typeof EntryMergerAction>;
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryMergerCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryMergerCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
 */
export type EntryMergerEffectiveDate = {
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
 * Corresponds to the position's trade quantity
 */
export type EntryMergerQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
 */
export type EntryMergerStockRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK
 */
export declare enum EntryMergerType {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    Cash = "CASH",
    Stock = "STOCK",
    CashAndStock = "CASH_AND_STOCK"
}
/**
 * Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK
 */
export type EntryMergerTypeOpen = OpenEnum<typeof EntryMergerType>;
/**
 * Used to record the exchange of one company's security for another company's security, cash, or a combination of cash and securities and details related to the merger
 */
export type Merger = {
    /**
     * Corresponds to whether the entry is incoming outgoing
     */
    action?: EntryMergerActionOpen | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryMergerCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryMergerCorporateActionGeneralInformation | null | undefined;
    /**
     * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
     */
    effectiveDate?: EntryMergerEffectiveDate | null | undefined;
    /**
     * Corresponds to the position's trade quantity
     */
    quantity?: EntryMergerQuantity | null | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
     */
    stockRate?: EntryMergerStockRate | null | undefined;
    /**
     * Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK
     */
    type?: EntryMergerTypeOpen | undefined;
};
/**
 * Corresponds to whether the entry is incoming outgoing
 */
export declare enum EntryNameChangeAction {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    CashInLieu = "CASH_IN_LIEU"
}
/**
 * Corresponds to whether the entry is incoming outgoing
 */
export type EntryNameChangeActionOpen = OpenEnum<typeof EntryNameChangeAction>;
/**
 * Common fields for corporate actions
 */
export type EntryNameChangeCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
 */
export type EntryNameChangeEffectiveDate = {
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
 * Corresponds to the position's settled quantity
 */
export type EntryNameChangeQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Used to record changes in the name of a security/securities by the issuer which result in surrendering physical securities or the assigning of a new security identifier which result in new securities being issued and details related to the name changes
 */
export type NameChange = {
    /**
     * Corresponds to whether the entry is incoming outgoing
     */
    action?: EntryNameChangeActionOpen | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryNameChangeCorporateActionGeneralInformation | null | undefined;
    /**
     * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
     */
    effectiveDate?: EntryNameChangeEffectiveDate | null | undefined;
    /**
     * Corresponds to the position's settled quantity
     */
    quantity?: EntryNameChangeQuantity | null | undefined;
};
/**
 * The original entry process date; stable across reversals and corrections; use for maintaining lineage of entries through multiple corrections/reversals
 */
export type OriginalProcessDate = {
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
 * Common fields for corporate actions
 */
export type EntryPaymentInKindCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryPaymentInKindPaymentDate = {
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
 * The date on which positions are recorded in order to calculate entitlement
 */
export type EntryPaymentInKindRecordDate = {
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
 * Corresponds to the position's settled quantity
 */
export type EntryPaymentInKindSettled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
 */
export type EntryPaymentInKindStockRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Used to record payments on interest-bearing securities where the payment is made in additional securities rather than cash and details related to the payment
 */
export type PaymentInKind = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryPaymentInKindCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryPaymentInKindPaymentDate | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: EntryPaymentInKindRecordDate | null | undefined;
    /**
     * Corresponds to the position's settled quantity
     */
    settled?: EntryPaymentInKindSettled | null | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
     */
    stockRate?: EntryPaymentInKindStockRate | null | undefined;
};
/**
 * The monetary value paid for a given security in a trade Required, except for currency movements
 */
export type EntryPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date that the entry was booked on
 */
export type EntryProcessDate = {
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
 * The quantity of shares bought, sold, or moved. For entries/ activities involving Fixed Income assets, quantity is expressed as par value Required for trades and memos, optional for movements.
 */
export type EntryQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Object containing metadata for receive events
 */
export type Receive = {};
/**
 * Corresponds to whether the entry is incoming outgoing
 */
export declare enum EntryRedemptionFullAction {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    CashInLieu = "CASH_IN_LIEU"
}
/**
 * Corresponds to whether the entry is incoming outgoing
 */
export type EntryRedemptionFullActionOpen = OpenEnum<typeof EntryRedemptionFullAction>;
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryRedemptionFullCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryRedemptionFullCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryRedemptionFullPaymentDate = {
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
 * Corresponds to the position's trade quantity
 */
export type EntryRedemptionFullQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Corresponds to the subtype of corporaction type
 */
export declare enum EntryRedemptionFullSubtype {
    CorporateactionsubtypeUnspecified = "CORPORATEACTIONSUBTYPE_UNSPECIFIED",
    AdditionalDividend = "ADDITIONAL_DIVIDEND",
    ApproximateRate = "APPROXIMATE_RATE",
    DividendArrears = "DIVIDEND_ARREARS",
    DividendCancelled = "DIVIDEND_CANCELLED",
    DividendPaymentTaxClassifications = "DIVIDEND_PAYMENT_TAX_CLASSIFICATIONS",
    DividendRescinded = "DIVIDEND_RESCINDED",
    EstimatedReturnOfCapital = "ESTIMATED_RETURN_OF_CAPITAL",
    EstimatedReturnOfCapitalPlusIncome = "ESTIMATED_RETURN_OF_CAPITAL_PLUS_INCOME",
    ExtraDividend = "EXTRA_DIVIDEND",
    ExtraDividendPlusIncome = "EXTRA_DIVIDEND_PLUS_INCOME",
    FinalPaymentTransferBooksAreClosed = "FINAL_PAYMENT_TRANSFER_BOOKS_ARE_CLOSED",
    GrossRate = "GROSS_RATE",
    InitialDividend = "INITIAL_DIVIDEND",
    InitialDividendLongPeriod = "INITIAL_DIVIDEND_LONG_PERIOD",
    InitialDividendShortPeriod = "INITIAL_DIVIDEND_SHORT_PERIOD",
    LimitedPartnershipDistribution = "LIMITED_PARTNERSHIP_DISTRIBUTION",
    Liquidation = "LIQUIDATION",
    NetRate = "NET_RATE",
    Other = "OTHER",
    ProceedsFromSaleOfRights = "PROCEEDS_FROM_SALE_OF_RIGHTS",
    RegularDividend = "REGULAR_DIVIDEND",
    ReturnOfCapital = "RETURN_OF_CAPITAL",
    ReturnOfCapitalPlusIncome = "RETURN_OF_CAPITAL_PLUS_INCOME",
    SpecialDividend = "SPECIAL_DIVIDEND",
    SpecialDividendPlusIncome = "SPECIAL_DIVIDEND_PLUS_INCOME",
    YearEndDividend = "YEAR_END_DIVIDEND",
    YearEndDividendPlusIncome = "YEAR_END_DIVIDEND_PLUS_INCOME",
    Partial = "PARTIAL",
    Full = "FULL",
    Maturity = "MATURITY",
    Termination = "TERMINATION",
    RedemptionOfWarrants = "REDEMPTION_OF_WARRANTS"
}
/**
 * Corresponds to the subtype of corporaction type
 */
export type EntryRedemptionFullSubtypeOpen = OpenEnum<typeof EntryRedemptionFullSubtype>;
/**
 * Used to record the redemption of a security for cash in its entirety for which the holders receive the principal amount of the security and details related to the redemption
 */
export type RedemptionFull = {
    /**
     * Corresponds to whether the entry is incoming outgoing
     */
    action?: EntryRedemptionFullActionOpen | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryRedemptionFullCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryRedemptionFullCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryRedemptionFullPaymentDate | null | undefined;
    /**
     * Corresponds to the position's trade quantity
     */
    quantity?: EntryRedemptionFullQuantity | null | undefined;
    /**
     * Corresponds to the subtype of corporaction type
     */
    subtype?: EntryRedemptionFullSubtypeOpen | undefined;
};
/**
 * Corresponds to whether the entry is incoming or outgoing
 */
export declare enum EntryRedemptionPartialAction {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    CashInLieu = "CASH_IN_LIEU"
}
/**
 * Corresponds to whether the entry is incoming or outgoing
 */
export type EntryRedemptionPartialActionOpen = OpenEnum<typeof EntryRedemptionPartialAction>;
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryRedemptionPartialCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryRedemptionPartialCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryRedemptionPartialPaymentDate = {
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
 * Corresponds to the position's trade quantity
 */
export type EntryRedemptionPartialQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Used when securities are redeemed by the issuer for cash, in part, before their scheduled maturity date and details related to the redemption. The outstanding amount of securities will be proportionally reduced based on a specific percentage of holding
 */
export type RedemptionPartial = {
    /**
     * Corresponds to whether the entry is incoming or outgoing
     */
    action?: EntryRedemptionPartialActionOpen | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryRedemptionPartialCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryRedemptionPartialCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryRedemptionPartialPaymentDate | null | undefined;
    /**
     * Corresponds to the position's trade quantity
     */
    quantity?: EntryRedemptionPartialQuantity | null | undefined;
};
/**
 * Corresponds to whether the entry is incoming or outgoing
 */
export declare enum EntryReverseStockSplitAction {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    Incoming = "INCOMING",
    Outgoing = "OUTGOING",
    CashInLieu = "CASH_IN_LIEU"
}
/**
 * Corresponds to whether the entry is incoming or outgoing
 */
export type EntryReverseStockSplitActionOpen = OpenEnum<typeof EntryReverseStockSplitAction>;
/**
 * Common fields for corporate actions
 */
export type EntryReverseStockSplitCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
 */
export type EntryReverseStockSplitEffectiveDate = {
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
 * The previous rate of the security before the distribution
 */
export type FactorDenominator = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The rate of the security distribution
 */
export type FactorNumerator = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Corresponds to the position's trade quantity
 */
export type EntryReverseStockSplitQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
 */
export type EntryReverseStockSplitStockRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Used to record the exchange of a company's security for the same company's new security at a preset rate and details related to the reverse stock split
 */
export type ReverseStockSplit = {
    /**
     * Corresponds to whether the entry is incoming or outgoing
     */
    action?: EntryReverseStockSplitActionOpen | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryReverseStockSplitCorporateActionGeneralInformation | null | undefined;
    /**
     * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
     */
    effectiveDate?: EntryReverseStockSplitEffectiveDate | null | undefined;
    /**
     * The previous rate of the security before the distribution
     */
    factorDenominator?: FactorDenominator | null | undefined;
    /**
     * The rate of the security distribution
     */
    factorNumerator?: FactorNumerator | null | undefined;
    /**
     * Corresponds to the position's trade quantity
     */
    quantity?: EntryReverseStockSplitQuantity | null | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
     */
    stockRate?: EntryReverseStockSplitStockRate | null | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryRightsDistributionCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryRightsDistributionPaymentDate = {
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
 * The date on which positions are recorded in order to calculate entitlement
 */
export type EntryRightsDistributionRecordDate = {
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
 * Corresponds to the position's settled quantity
 */
export type EntryRightsDistributionSettled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Used to record distributions to common stock holders of a company that grant the option to purchase new or additional securities of the same company during a predetermined time period at a predetermined price and details related to the rights distribution
 */
export type RightsDistribution = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryRightsDistributionCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryRightsDistributionPaymentDate | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: EntryRightsDistributionRecordDate | null | undefined;
    /**
     * Corresponds to the position's settled quantity
     */
    settled?: EntryRightsDistributionSettled | null | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryRightsSubscriptionCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Used to record the purchase of new or additional securities and details related to the subscription. Rights are often tradable in a secondary market
 */
export type RightsSubscription = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryRightsSubscriptionCorporateActionGeneralInformation | null | undefined;
};
/**
 * Used to record rounding adjustments when the sum(price x quantity) of all entries for a given activity do not equal the price x quantity of the fully formed activity record
 */
export type RoundingAdjustment = {
    /**
     * Free form text field providing reason for rounding
     */
    roundingReason?: string | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntrySaleOfRightsCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntrySaleOfRightsCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntrySaleOfRightsPaymentDate = {
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
 * The date on which positions are recorded in order to calculate entitlement
 */
export type EntrySaleOfRightsRecordDate = {
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
 * Corresponds to the position's settled quantity
 */
export type EntrySaleOfRightsSettled = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Used to record payments made by the issuer to security holders when the security is subject to redemptions other than full and partial calls (e.g., early CD redemptions) and details related to the sale of rights
 */
export type SaleOfRights = {
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntrySaleOfRightsCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntrySaleOfRightsCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntrySaleOfRightsPaymentDate | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: EntrySaleOfRightsRecordDate | null | undefined;
    /**
     * Corresponds to the position's settled quantity
     */
    settled?: EntrySaleOfRightsSettled | null | undefined;
};
/**
 * The date a given entry/ activity will officially settle
 */
export type SettleDate = {
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
 * Denotes whether the trade is a buy or sell
 */
export declare enum EntrySide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes whether the trade is a buy or sell
 */
export type EntrySideOpen = OpenEnum<typeof EntrySide>;
/**
 * Indicates whether the trade is opening a new position or closing an existing position Should be populated if possible for trades; the side modifier for the trade
 */
export declare enum EntrySideModifier {
    SideModifierUnspecified = "SIDE_MODIFIER_UNSPECIFIED",
    Short = "SHORT",
    ShortExempt = "SHORT_EXEMPT",
    ShortCover = "SHORT_COVER",
    Open = "OPEN",
    Close = "CLOSE"
}
/**
 * Indicates whether the trade is opening a new position or closing an existing position Should be populated if possible for trades; the side modifier for the trade
 */
export type EntrySideModifierOpen = OpenEnum<typeof EntrySideModifier>;
/**
 * Common fields for corporate actions
 */
export type EntrySpinOffCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type PayDate = {
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
 * Corresponds to the position's settled quantity
 */
export type EntrySpinOffQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The rate at which shares will be disbursed to the shareholder
 */
export type EntrySpinOffRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date on which positions are recorded in order to calculate entitlement
 */
export type EntrySpinOffRecordDate = {
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
 * Used to record a distribution of subsidiary securities to the shareholders of the parent company without a surrender of securities or payment and details related to the spinoff. A spin-off represents a form of divestiture resulting in an independent company
 */
export type SpinOff = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntrySpinOffCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    payDate?: PayDate | null | undefined;
    /**
     * Corresponds to the position's settled quantity
     */
    quantity?: EntrySpinOffQuantity | null | undefined;
    /**
     * The rate at which shares will be disbursed to the shareholder
     */
    rate?: EntrySpinOffRate | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: EntrySpinOffRecordDate | null | undefined;
};
/**
 * Set to be NEW for BookEntries, other statuses will be assigned via ModifyActivities; the state of the entry
 */
export declare enum EntryState {
    EntryStateUnspecified = "ENTRY_STATE_UNSPECIFIED",
    New = "NEW",
    Reversal = "REVERSAL",
    Correction = "CORRECTION"
}
/**
 * Set to be NEW for BookEntries, other statuses will be assigned via ModifyActivities; the state of the entry
 */
export type EntryStateOpen = OpenEnum<typeof EntryState>;
/**
 * Common fields for corporate actions
 */
export type EntryStockDividendCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryPayDate = {
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
 * Corresponds to the position's settled quantity
 */
export type EntryStockDividendQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The rate at which shares will be disbursed to the shareholder
 */
export type EntryRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date on which positions are recorded in order to calculate entitlement
 */
export type EntryStockDividendRecordDate = {
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
 * Used to record a dividend paid to shareholders in the form of shares of stock in either the issuing company or in another company and details related to the stock dividend
 */
export type StockDividend = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryStockDividendCorporateActionGeneralInformation | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    payDate?: EntryPayDate | null | undefined;
    /**
     * Corresponds to the position's settled quantity
     */
    quantity?: EntryStockDividendQuantity | null | undefined;
    /**
     * The rate at which shares will be disbursed to the shareholder
     */
    rate?: EntryRate | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: EntryStockDividendRecordDate | null | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryStockSplitCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The previous rate of the security before the distribution
 */
export type EntryFactorDenominator = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The rate of the security distribution
 */
export type EntryFactorNumerator = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The anticipated payment date at the depository
 */
export type EntryStockSplitPayDate = {
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
 * Corresponds to the position's trade quantity
 */
export type EntryStockSplitQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date on which positions are recorded in order to calculate entitlement
 */
export type EntryStockSplitRecordDate = {
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
 * Used to record the increase in a company's number of outstanding shares of stock without any change in the shareholder's equity or the aggregate market value at the time of the split and details related to the stock split
 */
export type StockSplit = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryStockSplitCorporateActionGeneralInformation | null | undefined;
    /**
     * The previous rate of the security before the distribution
     */
    factorDenominator?: EntryFactorDenominator | null | undefined;
    /**
     * The rate of the security distribution
     */
    factorNumerator?: EntryFactorNumerator | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    payDate?: EntryStockSplitPayDate | null | undefined;
    /**
     * Corresponds to the position's trade quantity
     */
    quantity?: EntryStockSplitQuantity | null | undefined;
    /**
     * The date on which positions are recorded in order to calculate entitlement
     */
    recordDate?: EntryStockSplitRecordDate | null | undefined;
};
/**
 * Indicates purchase or redemption of the sweep asset
 */
export declare enum EntrySweepAction {
    SweepActionUnspecified = "SWEEP_ACTION_UNSPECIFIED",
    Purchase = "PURCHASE",
    Redemption = "REDEMPTION"
}
/**
 * Indicates purchase or redemption of the sweep asset
 */
export type EntrySweepActionOpen = OpenEnum<typeof EntrySweepAction>;
/**
 * Sweep program that cash is being swept to/ from
 */
export declare enum EntrySweepType {
    SweepTypeUnspecified = "SWEEP_TYPE_UNSPECIFIED",
    Fdic = "FDIC",
    MoneyMarket = "MONEY_MARKET"
}
/**
 * Sweep program that cash is being swept to/ from
 */
export type EntrySweepTypeOpen = OpenEnum<typeof EntrySweepType>;
/**
 * Used to record sweeps from a cash balance to an alternative asset or vice versa and details related to the sweep
 */
export type Sweep = {
    /**
     * Indicates purchase or redemption of the sweep asset
     */
    action?: EntrySweepActionOpen | undefined;
    /**
     * Indicates the sweep was performed books were closed to prevent an investor account from carrying a negative cash balance overnight
     */
    eodRedemption?: boolean | undefined;
    /**
     * Sweep program that cash is being swept to/ from
     */
    type?: EntrySweepTypeOpen | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
 */
export type EntryTenderOfferCashRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryTenderOfferCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * the type of tender offer
 */
export declare enum TenderOfferType {
    TenderOfferTypeUnspecified = "TENDER_OFFER_TYPE_UNSPECIFIED",
    OddLotTender = "ODD_LOT_TENDER",
    DutchAuction = "DUTCH_AUCTION"
}
/**
 * the type of tender offer
 */
export type TenderOfferTypeOpen = OpenEnum<typeof TenderOfferType>;
/**
 * Used to record the sale of securities for a specified price due to an offer from the issuer or a third party and details related to the tender offer
 */
export type TenderOffer = {
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which cash will be disbursed to the shareholder
     */
    cashRate?: EntryTenderOfferCashRate | null | undefined;
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryTenderOfferCorporateActionGeneralInformation | null | undefined;
    /**
     * the type of tender offer
     */
    tenderOfferType?: TenderOfferTypeOpen | undefined;
};
/**
 * Used to calculate broadridge blotter code
 */
export declare enum EntryTradeBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Used to calculate broadridge blotter code
 */
export type EntryTradeBrokerCapacityOpen = OpenEnum<typeof EntryTradeBrokerCapacity>;
/**
 * The price for the instrument that is prevailing in the market
 */
export type EntryTradePrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type EntryTradePriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The percent at which the price was adjusted. Expressed as a number from 0.00-100 (rounded to 2 decimals)
 */
export type EntryPriceAdjustmentPercent = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security
 */
export declare enum EntryTradePriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    SalesLoad = "SALES_LOAD"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security
 */
export type EntryTradePriceAdjustmentTypeOpen = OpenEnum<typeof EntryTradePriceAdjustmentType>;
/**
 * Information about any price adjustments applied to the security
 */
export type EntryPriceAdjustmentRecord = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: EntryTradePriceAdjustmentAmount | null | undefined;
    /**
     * The percent at which the price was adjusted. Expressed as a number from 0.00-100 (rounded to 2 decimals)
     */
    priceAdjustmentPercent?: EntryPriceAdjustmentPercent | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security
     */
    priceAdjustmentType?: EntryTradePriceAdjustmentTypeOpen | undefined;
};
/**
 * Used to record the the execution of a buy or sell transaction resulting in the transfer of securities and corresponding payment and details related to the trade
 */
export type EntryTrade = {
    /**
     * To be populated by the submitter of the trade detail
     */
    additionalInstructions?: Array<string> | undefined;
    /**
     * Max Length 50 characters. Alternate order id from the street used for FRAC trades
     */
    alternateOrderId?: string | undefined;
    /**
     * base64 encoded value assigned by the Booking API to all executions
     */
    bookingApiBookingExecutionId?: string | undefined;
    /**
     * base64 encoded value assigned by the Booking API if a trade belongs to an allocation
     */
    bookingApiTradeAllocationId?: string | undefined;
    /**
     * base64 encoded value assigned by the Booking API to all trades
     */
    bookingApiTradeId?: string | undefined;
    /**
     * Executing broker of the trade
     */
    broker?: string | undefined;
    /**
     * Used to calculate broadridge blotter code
     */
    brokerCapacity?: EntryTradeBrokerCapacityOpen | undefined;
    /**
     * client usage area (intact). len 20
     */
    clientMemo?: string | undefined;
    /**
     * Max Length 50 characters. Client provided order id present in exec reports
     */
    clientOrderId?: string | undefined;
    /**
     * MIC code for the exchange
     */
    exchange?: string | undefined;
    /**
     * Max Length 50 characters. Execution id from the street
     */
    executionId?: string | undefined;
    /**
     * Indicates whether Apex is the clearing broker for this trade
     */
    executionOnly?: boolean | undefined;
    /**
     * Max Length 50 characters. External system id provided by a client
     */
    externalId?: string | undefined;
    /**
     * The confirmation number associated with a mutual fund trade
     */
    fundConfirmationNumber?: string | undefined;
    /**
     * Order id generated by trading-gateway (Trade-Ex) to uniquely identify all orders in their system Used as the client_order_id on new order singles sent downstream of the trading-gateway
     */
    gatewayClientOrderId?: string | undefined;
    /**
     * If set to true, indicates the trade should be omitted from client billing
     */
    internalError?: boolean | undefined;
    /**
     * set on penny-for-the-lot trades
     */
    isWriteoff?: boolean | undefined;
    /**
     * Trade lots
     */
    lots?: Array<Lot> | undefined;
    /**
     * "MMAP" for multi market average price, "UNKN" for unknown
     */
    market?: string | undefined;
    /**
     * Max Length 50 characters. Internally generated order id that is returned to client on exec reports
     */
    orderId?: string | undefined;
    /**
     * The price for the instrument that is prevailing in the market
     */
    prevailingMarketPrice?: EntryTradePrevailingMarketPrice | null | undefined;
    /**
     * Information about any price adjustments applied to the security
     */
    priceAdjustmentRecord?: EntryPriceAdjustmentRecord | null | undefined;
    /**
     * The execution route Apex used for this trade
     */
    route?: string | undefined;
    /**
     * Special instructions for the trade
     */
    specialInstructions?: Array<string> | undefined;
    /**
     * Indicates the trade was executed in a security that is not currently listed. When-issued securities are bought and sold before they are officially issued, allowing investors to speculate on their future value
     */
    whenIssued?: boolean | undefined;
    /**
     * The yields associated with a fixed income trade Only valid if the SecurityType is FIXED_INCOME
     */
    yieldRecords?: Array<YieldRecord> | undefined;
};
/**
 * Provides more detail on the type of transfer
 */
export declare enum EntryTransferType {
    TransferTypeUnspecified = "TRANSFER_TYPE_UNSPECIFIED",
    TransferConversion = "TRANSFER_CONVERSION",
    Deconversion = "DECONVERSION",
    Migration = "MIGRATION",
    ManualAdjustment = "MANUAL_ADJUSTMENT",
    InternalConversion = "INTERNAL_CONVERSION"
}
/**
 * Provides more detail on the type of transfer
 */
export type EntryTransferTypeOpen = OpenEnum<typeof EntryTransferType>;
/**
 * Used to record more generic transfers of funds or securities and details related to the transfer. The transfer type and activity_description can be used to provide more specific context
 */
export type EntryTransfer = {
    /**
     * Free form text field
     */
    additionalInstructions?: string | undefined;
    /**
     * String field that can be populated with the broker dealer undergoing a clearing platform conversion. Used for activity description purposes
     */
    clientBrokerage?: string | undefined;
    /**
     * Provides more detail on the type of transfer
     */
    transferType?: EntryTransferTypeOpen | undefined;
};
/**
 * The Type of the entry; determines the set of mandatory fields as well as informing downstream processes how to handle this record
 */
export declare enum EntryType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Trade = "TRADE",
    Movement = "MOVEMENT",
    Memo = "MEMO",
    CorporateAction = "CORPORATE_ACTION"
}
/**
 * The Type of the entry; determines the set of mandatory fields as well as informing downstream processes how to handle this record
 */
export type EntryTypeOpen = OpenEnum<typeof EntryType>;
/**
 * Common fields for corporate actions
 */
export type EntryUnitSplitCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
 */
export type EntryUnitSplitStockRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Used to record increases in the number of units outstanding through the issuing of more units to current shareholders and details related to the unit split
 */
export type UnitSplit = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryUnitSplitCorporateActionGeneralInformation | null | undefined;
    /**
     * The rate (raw value, not a percentage, example: 50% will be .5 in this field) at which shares will be disbursed to the shareholder
     */
    stockRate?: EntryUnitSplitStockRate | null | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryWarrantExerciseCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Used to record the exchange of warrants for shares and details related to the warrant exercise. The exercise will commonly require a payment based upon a pre-determined value and time and details related to the warrant exercise
 */
export type WarrantExercise = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryWarrantExerciseCorporateActionGeneralInformation | null | undefined;
};
/**
 * Provides information on the reason for the distribution from a retirement account
 */
export declare enum DistributionType {
    DistributionTypeUnspecified = "DISTRIBUTION_TYPE_UNSPECIFIED",
    Premature = "PREMATURE",
    Disability = "DISABILITY",
    Death = "DEATH",
    Normal = "NORMAL",
    Sosepp = "SOSEPP",
    RolloverToQualifiedPlan = "ROLLOVER_TO_QUALIFIED_PLAN",
    RolloverToIra = "ROLLOVER_TO_IRA",
    DistTransfer = "DIST_TRANSFER",
    ExcessContributionRemovalBeforeTaxDeadline = "EXCESS_CONTRIBUTION_REMOVAL_BEFORE_TAX_DEADLINE",
    ExcessContributionRemovalAfterTaxDeadline = "EXCESS_CONTRIBUTION_REMOVAL_AFTER_TAX_DEADLINE",
    RecharacterizationPriorYear = "RECHARACTERIZATION_PRIOR_YEAR",
    RecharacterizationCurrentYear = "RECHARACTERIZATION_CURRENT_YEAR",
    DistConversion = "DIST_CONVERSION",
    ManagementFee = "MANAGEMENT_FEE",
    PrematureSimpleIraLessThan2Years = "PREMATURE_SIMPLE_IRA_LESS_THAN_2_YEARS",
    NormalRothIraGreaterThan5Years = "NORMAL_ROTH_IRA_GREATER_THAN_5_YEARS",
    PlanLoan401K = "PLAN_LOAN_401K",
    NetIncomeAttributable = "NET_INCOME_ATTRIBUTABLE",
    Revocation = "REVOCATION",
    NonReportable = "NON_REPORTABLE"
}
/**
 * Provides information on the reason for the distribution from a retirement account
 */
export type DistributionTypeOpen = OpenEnum<typeof DistributionType>;
/**
 * Used for descriptive purposes only. Indicates the type of retirement account
 */
export declare enum RetirementType {
    RetirementTypeUnspecified = "RETIREMENT_TYPE_UNSPECIFIED",
    Ira = "IRA",
    Sep = "SEP",
    Simple = "SIMPLE",
    Keogh = "KEOGH",
    Roth = "ROTH",
    Qp = "QP",
    RolloverIra = "ROLLOVER_IRA"
}
/**
 * Used for descriptive purposes only. Indicates the type of retirement account
 */
export type RetirementTypeOpen = OpenEnum<typeof RetirementType>;
/**
 * Provides information on the method through which a deposit/ withdrawal was initiated
 */
export declare enum EntryWithdrawalType {
    ExternalMovementTypeUnspecified = "EXTERNAL_MOVEMENT_TYPE_UNSPECIFIED",
    Ach = "ACH",
    Check = "CHECK",
    Wire = "WIRE",
    Paypal = "PAYPAL",
    Rtp = "RTP",
    Ict = "ICT",
    Journal = "JOURNAL",
    ExternalAch = "EXTERNAL_ACH"
}
/**
 * Provides information on the method through which a deposit/ withdrawal was initiated
 */
export type EntryWithdrawalTypeOpen = OpenEnum<typeof EntryWithdrawalType>;
/**
 * Used to record withdrawals of funds from an account and capture details related to the withdrawal
 */
export type Withdrawal = {
    /**
     * Free form text field
     */
    additionalInstructions?: string | undefined;
    /**
     * Indicates the withdrawal was part of an account closure
     */
    closingAccount?: boolean | undefined;
    /**
     * Human readable account identifier for the account the assets were journaled. To be populated when the Withdrawal type is Journal
     */
    destinationAccountNumber?: string | undefined;
    /**
     * If populated, provides information on the institution the funds have been sent to
     */
    destinationInstitution?: string | undefined;
    /**
     * Provides information on the reason for the distribution from a retirement account
     */
    distributionType?: DistributionTypeOpen | undefined;
    /**
     * tax year associated with the distribution
     */
    distributionYear?: number | undefined;
    /**
     * Unique tracking number provided to allow tracking a wire transfer from the initiating bank to the receiving bank
     */
    fedReferenceNumber?: string | undefined;
    /**
     * If populated, provides information on the institution where the funds originated
     */
    originatingInstitution?: string | undefined;
    periodic?: boolean | undefined;
    /**
     * Used for descriptive purposes only. Indicates the type of retirement account
     */
    retirementType?: RetirementTypeOpen | undefined;
    /**
     * Indicates whether or a not a distribution is a full liquidation of a tax-advantaged account
     */
    totalDistribution?: boolean | undefined;
    /**
     * Provides information on the method through which a deposit/ withdrawal was initiated
     */
    type?: EntryWithdrawalTypeOpen | undefined;
};
/**
 * Indicates the state of the withdrawal review
 */
export declare enum Review {
    ReviewStateUnspecified = "REVIEW_STATE_UNSPECIFIED",
    ReviewStatePending = "REVIEW_STATE_PENDING",
    ReviewStateComplete = "REVIEW_STATE_COMPLETE"
}
/**
 * Indicates the state of the withdrawal review
 */
export type ReviewOpen = OpenEnum<typeof Review>;
/**
 * Used to record the movement of funds to/ from the pending_withdrawal memo location
 */
export type WithdrawalPendingReview = {
    /**
     * Indicates the state of the withdrawal review
     */
    review?: ReviewOpen | undefined;
};
/**
 * the rate will be converted to a percentage in the activity description
 */
export type EntryWithholdingRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
export declare enum EntryWithholdingState {
    WithholdingStateUnspecified = "WITHHOLDING_STATE_UNSPECIFIED",
    Ca = "CA",
    Me = "ME",
    Vt = "VT",
    Al = "AL",
    Ak = "AK",
    Az = "AZ",
    Ar = "AR",
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
    Va = "VA",
    Wa = "WA",
    Wv = "WV",
    Wi = "WI",
    Wy = "WY"
}
export type EntryWithholdingStateOpen = OpenEnum<typeof EntryWithholdingState>;
/**
 * The type of withholding
 */
export declare enum EntryWithholdingType {
    WithholdingTypeUnspecified = "WITHHOLDING_TYPE_UNSPECIFIED",
    Federal = "FEDERAL",
    State = "STATE",
    ForeignSecurity = "FOREIGN_SECURITY",
    FederalIra = "FEDERAL_IRA",
    StateIra = "STATE_IRA",
    NonResidentAlien = "NON_RESIDENT_ALIEN"
}
/**
 * The type of withholding
 */
export type EntryWithholdingTypeOpen = OpenEnum<typeof EntryWithholdingType>;
/**
 * Used to record tax withholdings and details related to the withholding
 */
export type EntryWithholding = {
    /**
     * the rate will be converted to a percentage in the activity description
     */
    rate?: EntryWithholdingRate | null | undefined;
    /**
     * Two character region code, complies with https://cldr.unicode.org/index
     */
    regionCode?: string | undefined;
    state?: EntryWithholdingStateOpen | undefined;
    /**
     * The tax year associated with the withholding
     */
    taxYear?: number | undefined;
    /**
     * The type of withholding
     */
    type?: EntryWithholdingTypeOpen | undefined;
};
/**
 * Common fields for corporate actions
 */
export type EntryWorthlessCorporateActionGeneralInformation = {
    /**
     * A unique alphanumeric value that is assigned to uniquely identify each corporate action event
     */
    corporateActionId?: string | undefined;
    /**
     * Asset Id of the new security after the corporate action event is processed
     */
    disbursedAssetId?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedCusip?: string | undefined;
    /**
     * When populated, the name of the issuer of a security and additional descriptive information about the new security after the corporate action event is processed
     */
    disbursedSymbolDescription?: string | undefined;
    /**
     * Asset Id of the existing security before the corporate action event is processed
     */
    targetAssetId?: string | undefined;
    /**
     * External Identifier of the existing security before the corporate action event is processed
     */
    targetCusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the existing security before the corporate action event is processed
     */
    targetSymbolDescription?: string | undefined;
};
/**
 * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
 */
export type EntryWorthlessEffectiveDate = {
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
 * The anticipated payment date at the depository
 */
export type EntryWorthlessPaymentDate = {
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
 * Used to record the removal of positions in a given security when the DTC has received formal notice that the security is worthless and details related to the worthless event
 */
export type Worthless = {
    /**
     * Common fields for corporate actions
     */
    corporateActionGeneralInformation?: EntryWorthlessCorporateActionGeneralInformation | null | undefined;
    /**
     * Effective date as declared by the primary exchange that generally coincides with cessation of trading in the old security and commencement of trading in the new security
     */
    effectiveDate?: EntryWorthlessEffectiveDate | null | undefined;
    /**
     * The anticipated payment date at the depository
     */
    paymentDate?: EntryWorthlessPaymentDate | null | undefined;
};
/**
 * Entry is a single sided ledger booking that serves as the core ledger component; it is sparsely populated based on the entry type and the goal of the entry
 */
export type Entry = {
    /**
     * Used to record the movement of funds or shares to/ from the pending_acats memo location
     */
    acatsPendingOut?: AcatsPendingOut | null | undefined;
    /**
     * A globally unique identifier referencing a single account; this is the main identifier for an account used for machine-to-machine interactions
     */
    accountId?: string | undefined;
    /**
     * Indicates the memo location impacted by an entry
     */
    accountMemo?: AccountMemoOpen | undefined;
    /**
     * Used to record the movement of funds or shares during the bookkeeping phase of an account transfer and details related to the account transfer
     */
    accountTransfer?: AccountTransfer | null | undefined;
    /**
     * Indicates that the entry references accrued interest that has been earned but not yet paid between the last interest payment and the date of the trade
     */
    accruedInterest?: EntryAccruedInterest | null | undefined;
    /**
     * Object containing metadata for acquisition events
     */
    acquisition?: Acquisition | null | undefined;
    /**
     * The activity date refers to the specific calendar day on which a financial transaction, such as a trade at an exchange or a deposit at a bank, was executed. This date is specific to the institution where the transaction took place, capturing the exact day on which the institution formally records and effects the transaction
     */
    activityDate?: ActivityDate | null | undefined;
    /**
     * Apex-generated unique activity identifier
     */
    activityId?: string | undefined;
    /**
     * Activity time refers to the precise moment, recorded in Coordinated Universal Time (UTC), when a financial transaction is executed as reported to Apex
     */
    activityTime?: Date | null | undefined;
    /**
     * Object containing metadata for trade allocation
     */
    allocation?: Allocation | null | undefined;
    /**
     * An Apex-provided, global identifier created on a per asset bases which provides connectivity across all areas Required, except for currency movements which should instead have a currency_asset_id
     */
    assetId?: string | undefined;
    /**
     * Object containing metadata for bond defaults
     */
    bondDefault?: BondDefault | null | undefined;
    /**
     * Used to record a distribution of cash that an issuer has determined will be declared as income financed from capital gains and not ordinary income and details related to the capital gain
     */
    capitalGains?: CapitalGains | null | undefined;
    /**
     * Used to record the distribution of cash to shareholders, paid by the issuer, usually based upon current earnings and/or accumulated profits as declared by the board of directors and details related to the cash dividend
     */
    cashDividend?: CashDividend | null | undefined;
    /**
     * Object containing metadata for cash in lieu
     */
    cashInLieu?: CashInLieu | null | undefined;
    /**
     * Indicates that the entry references commission charged by brokers or financial intermediaries for executing financial transactions on behalf of clients
     */
    commission?: EntryCommission | null | undefined;
    /**
     * Used to record the conversion of securities (generally convertible bonds or preferred shares) into another form of securities (usually common shares) at a pre-stated price or rate and details related to the conversion
     */
    conversion?: Conversion | null | undefined;
    /**
     * Object containing metadata for memo locations that have been adjusted due to a corporate action
     */
    corporateActionMemoAdjustment?: CorporateActionMemoAdjustment | null | undefined;
    /**
     * Used to disburse funds into a customer's account, typically for purposes such as refunds, interest payments, or rewards from enrolled programs and details related to the credit
     */
    credit?: Credit | null | undefined;
    /**
     * The asset_id of the currency that all monetary values relate to Required for currency movements
     */
    currencyAssetId?: string | undefined;
    /**
     * Object containing metadata for delivery events
     */
    delivery?: Delivery | null | undefined;
    /**
     * Used to record deposits of funds into an account and capture details related to the deposit
     */
    deposit?: Deposit | null | undefined;
    /**
     * A plain text description of the entry; will not be available to search on or build other features off of
     */
    description?: string | undefined;
    /**
     * Used to record the movement of funds to/ from the pending_drip memo location
     */
    drip?: Drip | null | undefined;
    /**
     * The unique id of the entry
     */
    entryId?: string | undefined;
    /**
     * Used to record the exchange of certificates for a new security or cash and details related to the exchange
     */
    exchange?: Exchange | null | undefined;
    /**
     * Used to record Fees that have been assessed to account and capture details related to the fee
     */
    fee?: EntryFee | null | undefined;
    /**
     * Object containing metadata for a Flip
     */
    flip?: Flip | null | undefined;
    /**
     * Used to record the movements of shares to/ from the fpsl memo location and details related to the fpsl memo
     */
    fpsl?: Fpsl | null | undefined;
    /**
     * The monetary value of an activity, exclusive of any fees (First money)
     */
    grossAmount?: EntryGrossAmount | null | undefined;
    /**
     * Used to record the payment of interest to accounts that have maintained a cash balance or the charging of interest to accounts that have used margin and details related to the interest
     */
    interest?: Interest | null | undefined;
    /**
     * Used to record the The payment of an obligation an issuer has agreed to make to holders of an interest-bearing security and details related to the interest payment. Usually, the payment is made in cash and on a scheduled basis
     */
    interestPayment?: InterestPayment | null | undefined;
    /**
     * Used to record the dismantling of a business by an issuer, paying off debts in order of priority and distributing the remaining assets in cash and/or securities to the owners of the securities and details related to the liquidation
     */
    liquidation?: Liquidation | null | undefined;
    /**
     * Used to record he final repayment, usually in cash, by an issuer for the entire issue, or remaining outstanding securities of a specific security on a specified date and details related to the maturity
     */
    maturity?: Maturity | null | undefined;
    /**
     * Used to record the exchange of one company's security for another company's security, cash, or a combination of cash and securities and details related to the merger
     */
    merger?: Merger | null | undefined;
    /**
     * accounts/{account_id}/entries/{entry_id}
     */
    name?: string | undefined;
    /**
     * Used to record changes in the name of a security/securities by the issuer which result in surrendering physical securities or the assigning of a new security identifier which result in new securities being issued and details related to the name changes
     */
    nameChange?: NameChange | null | undefined;
    /**
     * The original entry id; stable across reversals and corrections; use for maintaining lineage of entries through multiple corrections/reversals
     */
    originalId?: string | undefined;
    /**
     * The original entry process date; stable across reversals and corrections; use for maintaining lineage of entries through multiple corrections/reversals
     */
    originalProcessDate?: OriginalProcessDate | null | undefined;
    /**
     * Used to record payments on interest-bearing securities where the payment is made in additional securities rather than cash and details related to the payment
     */
    paymentInKind?: PaymentInKind | null | undefined;
    /**
     * The monetary value paid for a given security in a trade Required, except for currency movements
     */
    price?: EntryPrice | null | undefined;
    /**
     * The date that the entry was booked on
     */
    processDate?: EntryProcessDate | null | undefined;
    /**
     * The quantity of shares bought, sold, or moved. For entries/ activities involving Fixed Income assets, quantity is expressed as par value Required for trades and memos, optional for movements.
     */
    quantity?: EntryQuantity | null | undefined;
    /**
     * Object containing metadata for receive events
     */
    receive?: Receive | null | undefined;
    /**
     * Used to record the redemption of a security for cash in its entirety for which the holders receive the principal amount of the security and details related to the redemption
     */
    redemptionFull?: RedemptionFull | null | undefined;
    /**
     * Used when securities are redeemed by the issuer for cash, in part, before their scheduled maturity date and details related to the redemption. The outstanding amount of securities will be proportionally reduced based on a specific percentage of holding
     */
    redemptionPartial?: RedemptionPartial | null | undefined;
    /**
     * Used to record the exchange of a company's security for the same company's new security at a preset rate and details related to the reverse stock split
     */
    reverseStockSplit?: ReverseStockSplit | null | undefined;
    /**
     * The entry_id of the original entry; only populated on entries with a status of "Reversal"
     */
    reversedEntryId?: string | undefined;
    /**
     * Used to record distributions to common stock holders of a company that grant the option to purchase new or additional securities of the same company during a predetermined time period at a predetermined price and details related to the rights distribution
     */
    rightsDistribution?: RightsDistribution | null | undefined;
    /**
     * Used to record the purchase of new or additional securities and details related to the subscription. Rights are often tradable in a secondary market
     */
    rightsSubscription?: RightsSubscription | null | undefined;
    /**
     * Used to record rounding adjustments when the sum(price x quantity) of all entries for a given activity do not equal the price x quantity of the fully formed activity record
     */
    roundingAdjustment?: RoundingAdjustment | null | undefined;
    /**
     * Used to record payments made by the issuer to security holders when the security is subject to redemptions other than full and partial calls (e.g., early CD redemptions) and details related to the sale of rights
     */
    saleOfRights?: SaleOfRights | null | undefined;
    /**
     * The date a given entry/ activity will officially settle
     */
    settleDate?: SettleDate | null | undefined;
    /**
     * Denotes whether the trade is a buy or sell
     */
    side?: EntrySideOpen | undefined;
    /**
     * Indicates whether the trade is opening a new position or closing an existing position Should be populated if possible for trades; the side modifier for the trade
     */
    sideModifier?: EntrySideModifierOpen | undefined;
    /**
     * Used to record a distribution of subsidiary securities to the shareholders of the parent company without a surrender of securities or payment and details related to the spinoff. A spin-off represents a form of divestiture resulting in an independent company
     */
    spinOff?: SpinOff | null | undefined;
    /**
     * Set to be NEW for BookEntries, other statuses will be assigned via ModifyActivities; the state of the entry
     */
    state?: EntryStateOpen | undefined;
    /**
     * Used to record a dividend paid to shareholders in the form of shares of stock in either the issuing company or in another company and details related to the stock dividend
     */
    stockDividend?: StockDividend | null | undefined;
    /**
     * Used to record the increase in a company's number of outstanding shares of stock without any change in the shareholder's equity or the aggregate market value at the time of the split and details related to the stock split
     */
    stockSplit?: StockSplit | null | undefined;
    /**
     * String representation of the metadata object containing more information about an entry/activity
     */
    subtypeCategory?: string | undefined;
    /**
     * Used to record sweeps from a cash balance to an alternative asset or vice versa and details related to the sweep
     */
    sweep?: Sweep | null | undefined;
    /**
     * Used to record the sale of securities for a specified price due to an offer from the issuer or a third party and details related to the tender offer
     */
    tenderOffer?: TenderOffer | null | undefined;
    /**
     * Used to record the the execution of a buy or sell transaction resulting in the transfer of securities and corresponding payment and details related to the trade
     */
    trade?: EntryTrade | null | undefined;
    /**
     * Used to record more generic transfers of funds or securities and details related to the transfer. The transfer type and activity_description can be used to provide more specific context
     */
    transfer?: EntryTransfer | null | undefined;
    /**
     * The Type of the entry; determines the set of mandatory fields as well as informing downstream processes how to handle this record
     */
    type?: EntryTypeOpen | undefined;
    /**
     * Used to record increases in the number of units outstanding through the issuing of more units to current shareholders and details related to the unit split
     */
    unitSplit?: UnitSplit | null | undefined;
    /**
     * Used to record the exchange of warrants for shares and details related to the warrant exercise. The exercise will commonly require a payment based upon a pre-determined value and time and details related to the warrant exercise
     */
    warrantExercise?: WarrantExercise | null | undefined;
    /**
     * Used to record withdrawals of funds from an account and capture details related to the withdrawal
     */
    withdrawal?: Withdrawal | null | undefined;
    /**
     * Used to record the movement of funds to/ from the pending_withdrawal memo location
     */
    withdrawalPendingReview?: WithdrawalPendingReview | null | undefined;
    /**
     * Used to record tax withholdings and details related to the withholding
     */
    withholding?: EntryWithholding | null | undefined;
    /**
     * Used to record the removal of positions in a given security when the DTC has received formal notice that the security is worthless and details related to the worthless event
     */
    worthless?: Worthless | null | undefined;
};
/** @internal */
export declare const AcatsPendingOut$inboundSchema: z.ZodType<AcatsPendingOut, z.ZodTypeDef, unknown>;
/** @internal */
export type AcatsPendingOut$Outbound = {
    acats_control_number?: string | undefined;
    additional_instructions?: string | undefined;
};
/** @internal */
export declare const AcatsPendingOut$outboundSchema: z.ZodType<AcatsPendingOut$Outbound, z.ZodTypeDef, AcatsPendingOut>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcatsPendingOut$ {
    /** @deprecated use `AcatsPendingOut$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcatsPendingOut, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcatsPendingOut$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcatsPendingOut$Outbound, z.ZodTypeDef, AcatsPendingOut>;
    /** @deprecated use `AcatsPendingOut$Outbound` instead. */
    type Outbound = AcatsPendingOut$Outbound;
}
export declare function acatsPendingOutToJSON(acatsPendingOut: AcatsPendingOut): string;
export declare function acatsPendingOutFromJSON(jsonString: string): SafeParseResult<AcatsPendingOut, SDKValidationError>;
/** @internal */
export declare const AccountMemo$inboundSchema: z.ZodType<AccountMemoOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountMemo$outboundSchema: z.ZodType<AccountMemoOpen, z.ZodTypeDef, AccountMemoOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountMemo$ {
    /** @deprecated use `AccountMemo$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountMemoOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountMemo$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountMemoOpen, z.ZodTypeDef, AccountMemoOpen>;
}
/** @internal */
export declare const AccountTransferType$inboundSchema: z.ZodType<AccountTransferTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountTransferType$outboundSchema: z.ZodType<AccountTransferTypeOpen, z.ZodTypeDef, AccountTransferTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransferType$ {
    /** @deprecated use `AccountTransferType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransferTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransferType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransferTypeOpen, z.ZodTypeDef, AccountTransferTypeOpen>;
}
/** @internal */
export declare const Action$inboundSchema: z.ZodType<ActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Action$outboundSchema: z.ZodType<ActionOpen, z.ZodTypeDef, ActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Action$ {
    /** @deprecated use `Action$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Action$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ActionOpen, z.ZodTypeDef, ActionOpen>;
}
/** @internal */
export declare const Method$inboundSchema: z.ZodType<MethodOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Method$outboundSchema: z.ZodType<MethodOpen, z.ZodTypeDef, MethodOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Method$ {
    /** @deprecated use `Method$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MethodOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Method$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MethodOpen, z.ZodTypeDef, MethodOpen>;
}
/** @internal */
export declare const AccountTransfer$inboundSchema: z.ZodType<AccountTransfer, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfer$Outbound = {
    acats_asset_sequence_number?: string | undefined;
    acats_control_number?: string | undefined;
    account_transfer_type?: string | undefined;
    action?: string | undefined;
    additional_instructions?: string | undefined;
    contra_party_account_number?: string | undefined;
    contra_party_id?: string | undefined;
    institution?: string | undefined;
    method?: string | undefined;
};
/** @internal */
export declare const AccountTransfer$outboundSchema: z.ZodType<AccountTransfer$Outbound, z.ZodTypeDef, AccountTransfer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfer$ {
    /** @deprecated use `AccountTransfer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfer, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfer$Outbound, z.ZodTypeDef, AccountTransfer>;
    /** @deprecated use `AccountTransfer$Outbound` instead. */
    type Outbound = AccountTransfer$Outbound;
}
export declare function accountTransferToJSON(accountTransfer: AccountTransfer): string;
export declare function accountTransferFromJSON(jsonString: string): SafeParseResult<AccountTransfer, SDKValidationError>;
/** @internal */
export declare const EntryAccruedInterest$inboundSchema: z.ZodType<EntryAccruedInterest, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryAccruedInterest$Outbound = {};
/** @internal */
export declare const EntryAccruedInterest$outboundSchema: z.ZodType<EntryAccruedInterest$Outbound, z.ZodTypeDef, EntryAccruedInterest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryAccruedInterest$ {
    /** @deprecated use `EntryAccruedInterest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryAccruedInterest, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryAccruedInterest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryAccruedInterest$Outbound, z.ZodTypeDef, EntryAccruedInterest>;
    /** @deprecated use `EntryAccruedInterest$Outbound` instead. */
    type Outbound = EntryAccruedInterest$Outbound;
}
export declare function entryAccruedInterestToJSON(entryAccruedInterest: EntryAccruedInterest): string;
export declare function entryAccruedInterestFromJSON(jsonString: string): SafeParseResult<EntryAccruedInterest, SDKValidationError>;
/** @internal */
export declare const CorporateActionGeneralInformation$inboundSchema: z.ZodType<CorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type CorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const CorporateActionGeneralInformation$outboundSchema: z.ZodType<CorporateActionGeneralInformation$Outbound, z.ZodTypeDef, CorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CorporateActionGeneralInformation$ {
    /** @deprecated use `CorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `CorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CorporateActionGeneralInformation$Outbound, z.ZodTypeDef, CorporateActionGeneralInformation>;
    /** @deprecated use `CorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = CorporateActionGeneralInformation$Outbound;
}
export declare function corporateActionGeneralInformationToJSON(corporateActionGeneralInformation: CorporateActionGeneralInformation): string;
export declare function corporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<CorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const Acquisition$inboundSchema: z.ZodType<Acquisition, z.ZodTypeDef, unknown>;
/** @internal */
export type Acquisition$Outbound = {
    corporate_action_general_information?: CorporateActionGeneralInformation$Outbound | null | undefined;
};
/** @internal */
export declare const Acquisition$outboundSchema: z.ZodType<Acquisition$Outbound, z.ZodTypeDef, Acquisition>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Acquisition$ {
    /** @deprecated use `Acquisition$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Acquisition, z.ZodTypeDef, unknown>;
    /** @deprecated use `Acquisition$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Acquisition$Outbound, z.ZodTypeDef, Acquisition>;
    /** @deprecated use `Acquisition$Outbound` instead. */
    type Outbound = Acquisition$Outbound;
}
export declare function acquisitionToJSON(acquisition: Acquisition): string;
export declare function acquisitionFromJSON(jsonString: string): SafeParseResult<Acquisition, SDKValidationError>;
/** @internal */
export declare const ActivityDate$inboundSchema: z.ZodType<ActivityDate, z.ZodTypeDef, unknown>;
/** @internal */
export type ActivityDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const ActivityDate$outboundSchema: z.ZodType<ActivityDate$Outbound, z.ZodTypeDef, ActivityDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ActivityDate$ {
    /** @deprecated use `ActivityDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ActivityDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ActivityDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ActivityDate$Outbound, z.ZodTypeDef, ActivityDate>;
    /** @deprecated use `ActivityDate$Outbound` instead. */
    type Outbound = ActivityDate$Outbound;
}
export declare function activityDateToJSON(activityDate: ActivityDate): string;
export declare function activityDateFromJSON(jsonString: string): SafeParseResult<ActivityDate, SDKValidationError>;
/** @internal */
export declare const EntryBrokerCapacity$inboundSchema: z.ZodType<EntryBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryBrokerCapacity$outboundSchema: z.ZodType<EntryBrokerCapacityOpen, z.ZodTypeDef, EntryBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryBrokerCapacity$ {
    /** @deprecated use `EntryBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryBrokerCapacityOpen, z.ZodTypeDef, EntryBrokerCapacityOpen>;
}
/** @internal */
export declare const EntryPrevailingMarketPrice$inboundSchema: z.ZodType<EntryPrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryPrevailingMarketPrice$outboundSchema: z.ZodType<EntryPrevailingMarketPrice$Outbound, z.ZodTypeDef, EntryPrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPrevailingMarketPrice$ {
    /** @deprecated use `EntryPrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPrevailingMarketPrice$Outbound, z.ZodTypeDef, EntryPrevailingMarketPrice>;
    /** @deprecated use `EntryPrevailingMarketPrice$Outbound` instead. */
    type Outbound = EntryPrevailingMarketPrice$Outbound;
}
export declare function entryPrevailingMarketPriceToJSON(entryPrevailingMarketPrice: EntryPrevailingMarketPrice): string;
export declare function entryPrevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<EntryPrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const EntryPriceAdjustmentAmount$inboundSchema: z.ZodType<EntryPriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryPriceAdjustmentAmount$outboundSchema: z.ZodType<EntryPriceAdjustmentAmount$Outbound, z.ZodTypeDef, EntryPriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPriceAdjustmentAmount$ {
    /** @deprecated use `EntryPriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPriceAdjustmentAmount$Outbound, z.ZodTypeDef, EntryPriceAdjustmentAmount>;
    /** @deprecated use `EntryPriceAdjustmentAmount$Outbound` instead. */
    type Outbound = EntryPriceAdjustmentAmount$Outbound;
}
export declare function entryPriceAdjustmentAmountToJSON(entryPriceAdjustmentAmount: EntryPriceAdjustmentAmount): string;
export declare function entryPriceAdjustmentAmountFromJSON(jsonString: string): SafeParseResult<EntryPriceAdjustmentAmount, SDKValidationError>;
/** @internal */
export declare const PriceAdjustmentPercent$inboundSchema: z.ZodType<PriceAdjustmentPercent, z.ZodTypeDef, unknown>;
/** @internal */
export type PriceAdjustmentPercent$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PriceAdjustmentPercent$outboundSchema: z.ZodType<PriceAdjustmentPercent$Outbound, z.ZodTypeDef, PriceAdjustmentPercent>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PriceAdjustmentPercent$ {
    /** @deprecated use `PriceAdjustmentPercent$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PriceAdjustmentPercent, z.ZodTypeDef, unknown>;
    /** @deprecated use `PriceAdjustmentPercent$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PriceAdjustmentPercent$Outbound, z.ZodTypeDef, PriceAdjustmentPercent>;
    /** @deprecated use `PriceAdjustmentPercent$Outbound` instead. */
    type Outbound = PriceAdjustmentPercent$Outbound;
}
export declare function priceAdjustmentPercentToJSON(priceAdjustmentPercent: PriceAdjustmentPercent): string;
export declare function priceAdjustmentPercentFromJSON(jsonString: string): SafeParseResult<PriceAdjustmentPercent, SDKValidationError>;
/** @internal */
export declare const EntryPriceAdjustmentType$inboundSchema: z.ZodType<EntryPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryPriceAdjustmentType$outboundSchema: z.ZodType<EntryPriceAdjustmentTypeOpen, z.ZodTypeDef, EntryPriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPriceAdjustmentType$ {
    /** @deprecated use `EntryPriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPriceAdjustmentTypeOpen, z.ZodTypeDef, EntryPriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const PriceAdjustmentRecord$inboundSchema: z.ZodType<PriceAdjustmentRecord, z.ZodTypeDef, unknown>;
/** @internal */
export type PriceAdjustmentRecord$Outbound = {
    price_adjustment_amount?: EntryPriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_percent?: PriceAdjustmentPercent$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const PriceAdjustmentRecord$outboundSchema: z.ZodType<PriceAdjustmentRecord$Outbound, z.ZodTypeDef, PriceAdjustmentRecord>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PriceAdjustmentRecord$ {
    /** @deprecated use `PriceAdjustmentRecord$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PriceAdjustmentRecord, z.ZodTypeDef, unknown>;
    /** @deprecated use `PriceAdjustmentRecord$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PriceAdjustmentRecord$Outbound, z.ZodTypeDef, PriceAdjustmentRecord>;
    /** @deprecated use `PriceAdjustmentRecord$Outbound` instead. */
    type Outbound = PriceAdjustmentRecord$Outbound;
}
export declare function priceAdjustmentRecordToJSON(priceAdjustmentRecord: PriceAdjustmentRecord): string;
export declare function priceAdjustmentRecordFromJSON(jsonString: string): SafeParseResult<PriceAdjustmentRecord, SDKValidationError>;
/** @internal */
export declare const Allocation$inboundSchema: z.ZodType<Allocation, z.ZodTypeDef, unknown>;
/** @internal */
export type Allocation$Outbound = {
    additional_instructions?: Array<string> | undefined;
    booking_api_trade_allocation_id?: string | undefined;
    broker_capacity?: string | undefined;
    client_memo?: string | undefined;
    client_order_id?: string | undefined;
    external_id?: string | undefined;
    gateway_client_order_id?: string | undefined;
    internal_error?: boolean | undefined;
    lots?: Array<Lot$Outbound> | undefined;
    prevailing_market_price?: EntryPrevailingMarketPrice$Outbound | null | undefined;
    price_adjustment_record?: PriceAdjustmentRecord$Outbound | null | undefined;
    special_instructions?: Array<string> | undefined;
    yield_records?: Array<YieldRecord$Outbound> | undefined;
};
/** @internal */
export declare const Allocation$outboundSchema: z.ZodType<Allocation$Outbound, z.ZodTypeDef, Allocation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Allocation$ {
    /** @deprecated use `Allocation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Allocation, z.ZodTypeDef, unknown>;
    /** @deprecated use `Allocation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Allocation$Outbound, z.ZodTypeDef, Allocation>;
    /** @deprecated use `Allocation$Outbound` instead. */
    type Outbound = Allocation$Outbound;
}
export declare function allocationToJSON(allocation: Allocation): string;
export declare function allocationFromJSON(jsonString: string): SafeParseResult<Allocation, SDKValidationError>;
/** @internal */
export declare const CashRate$inboundSchema: z.ZodType<CashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type CashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CashRate$outboundSchema: z.ZodType<CashRate$Outbound, z.ZodTypeDef, CashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashRate$ {
    /** @deprecated use `CashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashRate$Outbound, z.ZodTypeDef, CashRate>;
    /** @deprecated use `CashRate$Outbound` instead. */
    type Outbound = CashRate$Outbound;
}
export declare function cashRateToJSON(cashRate: CashRate): string;
export declare function cashRateFromJSON(jsonString: string): SafeParseResult<CashRate, SDKValidationError>;
/** @internal */
export declare const EntryCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryCorporateActionGeneralInformation>;
    /** @deprecated use `EntryCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryCorporateActionGeneralInformation$Outbound;
}
export declare function entryCorporateActionGeneralInformationToJSON(entryCorporateActionGeneralInformation: EntryCorporateActionGeneralInformation): string;
export declare function entryCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const PaymentDate$inboundSchema: z.ZodType<PaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PaymentDate$outboundSchema: z.ZodType<PaymentDate$Outbound, z.ZodTypeDef, PaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentDate$ {
    /** @deprecated use `PaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PaymentDate$Outbound, z.ZodTypeDef, PaymentDate>;
    /** @deprecated use `PaymentDate$Outbound` instead. */
    type Outbound = PaymentDate$Outbound;
}
export declare function paymentDateToJSON(paymentDate: PaymentDate): string;
export declare function paymentDateFromJSON(jsonString: string): SafeParseResult<PaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryBondDefaultQuantity$inboundSchema: z.ZodType<EntryBondDefaultQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryBondDefaultQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryBondDefaultQuantity$outboundSchema: z.ZodType<EntryBondDefaultQuantity$Outbound, z.ZodTypeDef, EntryBondDefaultQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryBondDefaultQuantity$ {
    /** @deprecated use `EntryBondDefaultQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryBondDefaultQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryBondDefaultQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryBondDefaultQuantity$Outbound, z.ZodTypeDef, EntryBondDefaultQuantity>;
    /** @deprecated use `EntryBondDefaultQuantity$Outbound` instead. */
    type Outbound = EntryBondDefaultQuantity$Outbound;
}
export declare function entryBondDefaultQuantityToJSON(entryBondDefaultQuantity: EntryBondDefaultQuantity): string;
export declare function entryBondDefaultQuantityFromJSON(jsonString: string): SafeParseResult<EntryBondDefaultQuantity, SDKValidationError>;
/** @internal */
export declare const BondDefault$inboundSchema: z.ZodType<BondDefault, z.ZodTypeDef, unknown>;
/** @internal */
export type BondDefault$Outbound = {
    cash_rate?: CashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryCorporateActionGeneralInformation$Outbound | null | undefined;
    payment_date?: PaymentDate$Outbound | null | undefined;
    quantity?: EntryBondDefaultQuantity$Outbound | null | undefined;
};
/** @internal */
export declare const BondDefault$outboundSchema: z.ZodType<BondDefault$Outbound, z.ZodTypeDef, BondDefault>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BondDefault$ {
    /** @deprecated use `BondDefault$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BondDefault, z.ZodTypeDef, unknown>;
    /** @deprecated use `BondDefault$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BondDefault$Outbound, z.ZodTypeDef, BondDefault>;
    /** @deprecated use `BondDefault$Outbound` instead. */
    type Outbound = BondDefault$Outbound;
}
export declare function bondDefaultToJSON(bondDefault: BondDefault): string;
export declare function bondDefaultFromJSON(jsonString: string): SafeParseResult<BondDefault, SDKValidationError>;
/** @internal */
export declare const EntryCashRate$inboundSchema: z.ZodType<EntryCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryCashRate$outboundSchema: z.ZodType<EntryCashRate$Outbound, z.ZodTypeDef, EntryCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCashRate$ {
    /** @deprecated use `EntryCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCashRate$Outbound, z.ZodTypeDef, EntryCashRate>;
    /** @deprecated use `EntryCashRate$Outbound` instead. */
    type Outbound = EntryCashRate$Outbound;
}
export declare function entryCashRateToJSON(entryCashRate: EntryCashRate): string;
export declare function entryCashRateFromJSON(jsonString: string): SafeParseResult<EntryCashRate, SDKValidationError>;
/** @internal */
export declare const EntryCapitalGainsCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryCapitalGainsCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCapitalGainsCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryCapitalGainsCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryCapitalGainsCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryCapitalGainsCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCapitalGainsCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryCapitalGainsCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCapitalGainsCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCapitalGainsCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCapitalGainsCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryCapitalGainsCorporateActionGeneralInformation>;
    /** @deprecated use `EntryCapitalGainsCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryCapitalGainsCorporateActionGeneralInformation$Outbound;
}
export declare function entryCapitalGainsCorporateActionGeneralInformationToJSON(entryCapitalGainsCorporateActionGeneralInformation: EntryCapitalGainsCorporateActionGeneralInformation): string;
export declare function entryCapitalGainsCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryCapitalGainsCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryPaymentDate$inboundSchema: z.ZodType<EntryPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryPaymentDate$outboundSchema: z.ZodType<EntryPaymentDate$Outbound, z.ZodTypeDef, EntryPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPaymentDate$ {
    /** @deprecated use `EntryPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPaymentDate$Outbound, z.ZodTypeDef, EntryPaymentDate>;
    /** @deprecated use `EntryPaymentDate$Outbound` instead. */
    type Outbound = EntryPaymentDate$Outbound;
}
export declare function entryPaymentDateToJSON(entryPaymentDate: EntryPaymentDate): string;
export declare function entryPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryCapitalGainsQuantity$inboundSchema: z.ZodType<EntryCapitalGainsQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCapitalGainsQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryCapitalGainsQuantity$outboundSchema: z.ZodType<EntryCapitalGainsQuantity$Outbound, z.ZodTypeDef, EntryCapitalGainsQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCapitalGainsQuantity$ {
    /** @deprecated use `EntryCapitalGainsQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCapitalGainsQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCapitalGainsQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCapitalGainsQuantity$Outbound, z.ZodTypeDef, EntryCapitalGainsQuantity>;
    /** @deprecated use `EntryCapitalGainsQuantity$Outbound` instead. */
    type Outbound = EntryCapitalGainsQuantity$Outbound;
}
export declare function entryCapitalGainsQuantityToJSON(entryCapitalGainsQuantity: EntryCapitalGainsQuantity): string;
export declare function entryCapitalGainsQuantityFromJSON(jsonString: string): SafeParseResult<EntryCapitalGainsQuantity, SDKValidationError>;
/** @internal */
export declare const RecordDate$inboundSchema: z.ZodType<RecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type RecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const RecordDate$outboundSchema: z.ZodType<RecordDate$Outbound, z.ZodTypeDef, RecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RecordDate$ {
    /** @deprecated use `RecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RecordDate$Outbound, z.ZodTypeDef, RecordDate>;
    /** @deprecated use `RecordDate$Outbound` instead. */
    type Outbound = RecordDate$Outbound;
}
export declare function recordDateToJSON(recordDate: RecordDate): string;
export declare function recordDateFromJSON(jsonString: string): SafeParseResult<RecordDate, SDKValidationError>;
/** @internal */
export declare const CapitalGains$inboundSchema: z.ZodType<CapitalGains, z.ZodTypeDef, unknown>;
/** @internal */
export type CapitalGains$Outbound = {
    cash_rate?: EntryCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryCapitalGainsCorporateActionGeneralInformation$Outbound | null | undefined;
    long_term_gain?: boolean | undefined;
    payment_date?: EntryPaymentDate$Outbound | null | undefined;
    qualified?: boolean | undefined;
    quantity?: EntryCapitalGainsQuantity$Outbound | null | undefined;
    record_date?: RecordDate$Outbound | null | undefined;
    reinvested?: boolean | undefined;
};
/** @internal */
export declare const CapitalGains$outboundSchema: z.ZodType<CapitalGains$Outbound, z.ZodTypeDef, CapitalGains>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CapitalGains$ {
    /** @deprecated use `CapitalGains$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CapitalGains, z.ZodTypeDef, unknown>;
    /** @deprecated use `CapitalGains$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CapitalGains$Outbound, z.ZodTypeDef, CapitalGains>;
    /** @deprecated use `CapitalGains$Outbound` instead. */
    type Outbound = CapitalGains$Outbound;
}
export declare function capitalGainsToJSON(capitalGains: CapitalGains): string;
export declare function capitalGainsFromJSON(jsonString: string): SafeParseResult<CapitalGains, SDKValidationError>;
/** @internal */
export declare const EntryCashDividendCashRate$inboundSchema: z.ZodType<EntryCashDividendCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCashDividendCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryCashDividendCashRate$outboundSchema: z.ZodType<EntryCashDividendCashRate$Outbound, z.ZodTypeDef, EntryCashDividendCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCashDividendCashRate$ {
    /** @deprecated use `EntryCashDividendCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCashDividendCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCashDividendCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCashDividendCashRate$Outbound, z.ZodTypeDef, EntryCashDividendCashRate>;
    /** @deprecated use `EntryCashDividendCashRate$Outbound` instead. */
    type Outbound = EntryCashDividendCashRate$Outbound;
}
export declare function entryCashDividendCashRateToJSON(entryCashDividendCashRate: EntryCashDividendCashRate): string;
export declare function entryCashDividendCashRateFromJSON(jsonString: string): SafeParseResult<EntryCashDividendCashRate, SDKValidationError>;
/** @internal */
export declare const EntryCashDividendCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryCashDividendCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCashDividendCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryCashDividendCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryCashDividendCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryCashDividendCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCashDividendCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryCashDividendCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCashDividendCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCashDividendCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCashDividendCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryCashDividendCorporateActionGeneralInformation>;
    /** @deprecated use `EntryCashDividendCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryCashDividendCorporateActionGeneralInformation$Outbound;
}
export declare function entryCashDividendCorporateActionGeneralInformationToJSON(entryCashDividendCorporateActionGeneralInformation: EntryCashDividendCorporateActionGeneralInformation): string;
export declare function entryCashDividendCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryCashDividendCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryFpsl$inboundSchema: z.ZodType<EntryFpsl, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryFpsl$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryFpsl$outboundSchema: z.ZodType<EntryFpsl$Outbound, z.ZodTypeDef, EntryFpsl>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFpsl$ {
    /** @deprecated use `EntryFpsl$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFpsl, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFpsl$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFpsl$Outbound, z.ZodTypeDef, EntryFpsl>;
    /** @deprecated use `EntryFpsl$Outbound` instead. */
    type Outbound = EntryFpsl$Outbound;
}
export declare function entryFpslToJSON(entryFpsl: EntryFpsl): string;
export declare function entryFpslFromJSON(jsonString: string): SafeParseResult<EntryFpsl, SDKValidationError>;
/** @internal */
export declare const EntryFree$inboundSchema: z.ZodType<EntryFree, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryFree$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryFree$outboundSchema: z.ZodType<EntryFree$Outbound, z.ZodTypeDef, EntryFree>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFree$ {
    /** @deprecated use `EntryFree$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFree, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFree$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFree$Outbound, z.ZodTypeDef, EntryFree>;
    /** @deprecated use `EntryFree$Outbound` instead. */
    type Outbound = EntryFree$Outbound;
}
export declare function entryFreeToJSON(entryFree: EntryFree): string;
export declare function entryFreeFromJSON(jsonString: string): SafeParseResult<EntryFree, SDKValidationError>;
/** @internal */
export declare const EntryCashDividendPaymentDate$inboundSchema: z.ZodType<EntryCashDividendPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCashDividendPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryCashDividendPaymentDate$outboundSchema: z.ZodType<EntryCashDividendPaymentDate$Outbound, z.ZodTypeDef, EntryCashDividendPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCashDividendPaymentDate$ {
    /** @deprecated use `EntryCashDividendPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCashDividendPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCashDividendPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCashDividendPaymentDate$Outbound, z.ZodTypeDef, EntryCashDividendPaymentDate>;
    /** @deprecated use `EntryCashDividendPaymentDate$Outbound` instead. */
    type Outbound = EntryCashDividendPaymentDate$Outbound;
}
export declare function entryCashDividendPaymentDateToJSON(entryCashDividendPaymentDate: EntryCashDividendPaymentDate): string;
export declare function entryCashDividendPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryCashDividendPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryCashDividendQuantity$inboundSchema: z.ZodType<EntryCashDividendQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCashDividendQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryCashDividendQuantity$outboundSchema: z.ZodType<EntryCashDividendQuantity$Outbound, z.ZodTypeDef, EntryCashDividendQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCashDividendQuantity$ {
    /** @deprecated use `EntryCashDividendQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCashDividendQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCashDividendQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCashDividendQuantity$Outbound, z.ZodTypeDef, EntryCashDividendQuantity>;
    /** @deprecated use `EntryCashDividendQuantity$Outbound` instead. */
    type Outbound = EntryCashDividendQuantity$Outbound;
}
export declare function entryCashDividendQuantityToJSON(entryCashDividendQuantity: EntryCashDividendQuantity): string;
export declare function entryCashDividendQuantityFromJSON(jsonString: string): SafeParseResult<EntryCashDividendQuantity, SDKValidationError>;
/** @internal */
export declare const EntryRecordDate$inboundSchema: z.ZodType<EntryRecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryRecordDate$outboundSchema: z.ZodType<EntryRecordDate$Outbound, z.ZodTypeDef, EntryRecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRecordDate$ {
    /** @deprecated use `EntryRecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRecordDate$Outbound, z.ZodTypeDef, EntryRecordDate>;
    /** @deprecated use `EntryRecordDate$Outbound` instead. */
    type Outbound = EntryRecordDate$Outbound;
}
export declare function entryRecordDateToJSON(entryRecordDate: EntryRecordDate): string;
export declare function entryRecordDateFromJSON(jsonString: string): SafeParseResult<EntryRecordDate, SDKValidationError>;
/** @internal */
export declare const EntryCashDividendSettled$inboundSchema: z.ZodType<EntryCashDividendSettled, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCashDividendSettled$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryCashDividendSettled$outboundSchema: z.ZodType<EntryCashDividendSettled$Outbound, z.ZodTypeDef, EntryCashDividendSettled>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCashDividendSettled$ {
    /** @deprecated use `EntryCashDividendSettled$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCashDividendSettled, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCashDividendSettled$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCashDividendSettled$Outbound, z.ZodTypeDef, EntryCashDividendSettled>;
    /** @deprecated use `EntryCashDividendSettled$Outbound` instead. */
    type Outbound = EntryCashDividendSettled$Outbound;
}
export declare function entryCashDividendSettledToJSON(entryCashDividendSettled: EntryCashDividendSettled): string;
export declare function entryCashDividendSettledFromJSON(jsonString: string): SafeParseResult<EntryCashDividendSettled, SDKValidationError>;
/** @internal */
export declare const Subtype$inboundSchema: z.ZodType<SubtypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Subtype$outboundSchema: z.ZodType<SubtypeOpen, z.ZodTypeDef, SubtypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Subtype$ {
    /** @deprecated use `Subtype$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubtypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Subtype$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubtypeOpen, z.ZodTypeDef, SubtypeOpen>;
}
/** @internal */
export declare const CashDividend$inboundSchema: z.ZodType<CashDividend, z.ZodTypeDef, unknown>;
/** @internal */
export type CashDividend$Outbound = {
    cash_rate?: EntryCashDividendCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryCashDividendCorporateActionGeneralInformation$Outbound | null | undefined;
    fpsl?: EntryFpsl$Outbound | null | undefined;
    free?: EntryFree$Outbound | null | undefined;
    long_term_gain?: boolean | undefined;
    payment_date?: EntryCashDividendPaymentDate$Outbound | null | undefined;
    qualified?: boolean | undefined;
    quantity?: EntryCashDividendQuantity$Outbound | null | undefined;
    record_date?: EntryRecordDate$Outbound | null | undefined;
    reinvested?: boolean | undefined;
    settled?: EntryCashDividendSettled$Outbound | null | undefined;
    substitute_payment?: boolean | undefined;
    subtype?: string | undefined;
};
/** @internal */
export declare const CashDividend$outboundSchema: z.ZodType<CashDividend$Outbound, z.ZodTypeDef, CashDividend>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashDividend$ {
    /** @deprecated use `CashDividend$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashDividend, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashDividend$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashDividend$Outbound, z.ZodTypeDef, CashDividend>;
    /** @deprecated use `CashDividend$Outbound` instead. */
    type Outbound = CashDividend$Outbound;
}
export declare function cashDividendToJSON(cashDividend: CashDividend): string;
export declare function cashDividendFromJSON(jsonString: string): SafeParseResult<CashDividend, SDKValidationError>;
/** @internal */
export declare const EntryCashInLieuCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryCashInLieuCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCashInLieuCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryCashInLieuCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryCashInLieuCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryCashInLieuCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCashInLieuCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryCashInLieuCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCashInLieuCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCashInLieuCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCashInLieuCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryCashInLieuCorporateActionGeneralInformation>;
    /** @deprecated use `EntryCashInLieuCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryCashInLieuCorporateActionGeneralInformation$Outbound;
}
export declare function entryCashInLieuCorporateActionGeneralInformationToJSON(entryCashInLieuCorporateActionGeneralInformation: EntryCashInLieuCorporateActionGeneralInformation): string;
export declare function entryCashInLieuCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryCashInLieuCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const CashInLieu$inboundSchema: z.ZodType<CashInLieu, z.ZodTypeDef, unknown>;
/** @internal */
export type CashInLieu$Outbound = {
    corporate_action_general_information?: EntryCashInLieuCorporateActionGeneralInformation$Outbound | null | undefined;
};
/** @internal */
export declare const CashInLieu$outboundSchema: z.ZodType<CashInLieu$Outbound, z.ZodTypeDef, CashInLieu>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashInLieu$ {
    /** @deprecated use `CashInLieu$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashInLieu, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashInLieu$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashInLieu$Outbound, z.ZodTypeDef, CashInLieu>;
    /** @deprecated use `CashInLieu$Outbound` instead. */
    type Outbound = CashInLieu$Outbound;
}
export declare function cashInLieuToJSON(cashInLieu: CashInLieu): string;
export declare function cashInLieuFromJSON(jsonString: string): SafeParseResult<CashInLieu, SDKValidationError>;
/** @internal */
export declare const EntryCommission$inboundSchema: z.ZodType<EntryCommission, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryCommission$Outbound = {};
/** @internal */
export declare const EntryCommission$outboundSchema: z.ZodType<EntryCommission$Outbound, z.ZodTypeDef, EntryCommission>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryCommission$ {
    /** @deprecated use `EntryCommission$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryCommission, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryCommission$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryCommission$Outbound, z.ZodTypeDef, EntryCommission>;
    /** @deprecated use `EntryCommission$Outbound` instead. */
    type Outbound = EntryCommission$Outbound;
}
export declare function entryCommissionToJSON(entryCommission: EntryCommission): string;
export declare function entryCommissionFromJSON(jsonString: string): SafeParseResult<EntryCommission, SDKValidationError>;
/** @internal */
export declare const EntryConversionCashRate$inboundSchema: z.ZodType<EntryConversionCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryConversionCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryConversionCashRate$outboundSchema: z.ZodType<EntryConversionCashRate$Outbound, z.ZodTypeDef, EntryConversionCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryConversionCashRate$ {
    /** @deprecated use `EntryConversionCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryConversionCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryConversionCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryConversionCashRate$Outbound, z.ZodTypeDef, EntryConversionCashRate>;
    /** @deprecated use `EntryConversionCashRate$Outbound` instead. */
    type Outbound = EntryConversionCashRate$Outbound;
}
export declare function entryConversionCashRateToJSON(entryConversionCashRate: EntryConversionCashRate): string;
export declare function entryConversionCashRateFromJSON(jsonString: string): SafeParseResult<EntryConversionCashRate, SDKValidationError>;
/** @internal */
export declare const EntryConversionCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryConversionCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryConversionCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryConversionCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryConversionCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryConversionCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryConversionCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryConversionCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryConversionCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryConversionCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryConversionCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryConversionCorporateActionGeneralInformation>;
    /** @deprecated use `EntryConversionCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryConversionCorporateActionGeneralInformation$Outbound;
}
export declare function entryConversionCorporateActionGeneralInformationToJSON(entryConversionCorporateActionGeneralInformation: EntryConversionCorporateActionGeneralInformation): string;
export declare function entryConversionCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryConversionCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const StockRate$inboundSchema: z.ZodType<StockRate, z.ZodTypeDef, unknown>;
/** @internal */
export type StockRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const StockRate$outboundSchema: z.ZodType<StockRate$Outbound, z.ZodTypeDef, StockRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StockRate$ {
    /** @deprecated use `StockRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StockRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `StockRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StockRate$Outbound, z.ZodTypeDef, StockRate>;
    /** @deprecated use `StockRate$Outbound` instead. */
    type Outbound = StockRate$Outbound;
}
export declare function stockRateToJSON(stockRate: StockRate): string;
export declare function stockRateFromJSON(jsonString: string): SafeParseResult<StockRate, SDKValidationError>;
/** @internal */
export declare const EntryConversionType$inboundSchema: z.ZodType<EntryConversionTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryConversionType$outboundSchema: z.ZodType<EntryConversionTypeOpen, z.ZodTypeDef, EntryConversionTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryConversionType$ {
    /** @deprecated use `EntryConversionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryConversionTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryConversionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryConversionTypeOpen, z.ZodTypeDef, EntryConversionTypeOpen>;
}
/** @internal */
export declare const Conversion$inboundSchema: z.ZodType<Conversion, z.ZodTypeDef, unknown>;
/** @internal */
export type Conversion$Outbound = {
    cash_rate?: EntryConversionCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryConversionCorporateActionGeneralInformation$Outbound | null | undefined;
    stock_rate?: StockRate$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const Conversion$outboundSchema: z.ZodType<Conversion$Outbound, z.ZodTypeDef, Conversion>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Conversion$ {
    /** @deprecated use `Conversion$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Conversion, z.ZodTypeDef, unknown>;
    /** @deprecated use `Conversion$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Conversion$Outbound, z.ZodTypeDef, Conversion>;
    /** @deprecated use `Conversion$Outbound` instead. */
    type Outbound = Conversion$Outbound;
}
export declare function conversionToJSON(conversion: Conversion): string;
export declare function conversionFromJSON(jsonString: string): SafeParseResult<Conversion, SDKValidationError>;
/** @internal */
export declare const CorporateActionMemoAdjustment$inboundSchema: z.ZodType<CorporateActionMemoAdjustment, z.ZodTypeDef, unknown>;
/** @internal */
export type CorporateActionMemoAdjustment$Outbound = {
    corporate_action_id?: string | undefined;
    corporate_action_type?: string | undefined;
};
/** @internal */
export declare const CorporateActionMemoAdjustment$outboundSchema: z.ZodType<CorporateActionMemoAdjustment$Outbound, z.ZodTypeDef, CorporateActionMemoAdjustment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CorporateActionMemoAdjustment$ {
    /** @deprecated use `CorporateActionMemoAdjustment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CorporateActionMemoAdjustment, z.ZodTypeDef, unknown>;
    /** @deprecated use `CorporateActionMemoAdjustment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CorporateActionMemoAdjustment$Outbound, z.ZodTypeDef, CorporateActionMemoAdjustment>;
    /** @deprecated use `CorporateActionMemoAdjustment$Outbound` instead. */
    type Outbound = CorporateActionMemoAdjustment$Outbound;
}
export declare function corporateActionMemoAdjustmentToJSON(corporateActionMemoAdjustment: CorporateActionMemoAdjustment): string;
export declare function corporateActionMemoAdjustmentFromJSON(jsonString: string): SafeParseResult<CorporateActionMemoAdjustment, SDKValidationError>;
/** @internal */
export declare const CreditType$inboundSchema: z.ZodType<CreditTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CreditType$outboundSchema: z.ZodType<CreditTypeOpen, z.ZodTypeDef, CreditTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreditType$ {
    /** @deprecated use `CreditType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreditTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreditType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreditTypeOpen, z.ZodTypeDef, CreditTypeOpen>;
}
/** @internal */
export declare const Credit$inboundSchema: z.ZodType<Credit, z.ZodTypeDef, unknown>;
/** @internal */
export type Credit$Outbound = {
    additional_instructions?: string | undefined;
    credit_type?: string | undefined;
    taxable?: boolean | undefined;
};
/** @internal */
export declare const Credit$outboundSchema: z.ZodType<Credit$Outbound, z.ZodTypeDef, Credit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Credit$ {
    /** @deprecated use `Credit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Credit, z.ZodTypeDef, unknown>;
    /** @deprecated use `Credit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Credit$Outbound, z.ZodTypeDef, Credit>;
    /** @deprecated use `Credit$Outbound` instead. */
    type Outbound = Credit$Outbound;
}
export declare function creditToJSON(credit: Credit): string;
export declare function creditFromJSON(jsonString: string): SafeParseResult<Credit, SDKValidationError>;
/** @internal */
export declare const EntryDeliveryCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryDeliveryCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryDeliveryCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryDeliveryCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryDeliveryCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryDeliveryCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryDeliveryCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryDeliveryCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryDeliveryCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryDeliveryCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryDeliveryCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryDeliveryCorporateActionGeneralInformation>;
    /** @deprecated use `EntryDeliveryCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryDeliveryCorporateActionGeneralInformation$Outbound;
}
export declare function entryDeliveryCorporateActionGeneralInformationToJSON(entryDeliveryCorporateActionGeneralInformation: EntryDeliveryCorporateActionGeneralInformation): string;
export declare function entryDeliveryCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryDeliveryCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const Delivery$inboundSchema: z.ZodType<Delivery, z.ZodTypeDef, unknown>;
/** @internal */
export type Delivery$Outbound = {
    corporate_action_general_information?: EntryDeliveryCorporateActionGeneralInformation$Outbound | null | undefined;
};
/** @internal */
export declare const Delivery$outboundSchema: z.ZodType<Delivery$Outbound, z.ZodTypeDef, Delivery>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Delivery$ {
    /** @deprecated use `Delivery$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Delivery, z.ZodTypeDef, unknown>;
    /** @deprecated use `Delivery$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Delivery$Outbound, z.ZodTypeDef, Delivery>;
    /** @deprecated use `Delivery$Outbound` instead. */
    type Outbound = Delivery$Outbound;
}
export declare function deliveryToJSON(delivery: Delivery): string;
export declare function deliveryFromJSON(jsonString: string): SafeParseResult<Delivery, SDKValidationError>;
/** @internal */
export declare const ContributionType$inboundSchema: z.ZodType<ContributionTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ContributionType$outboundSchema: z.ZodType<ContributionTypeOpen, z.ZodTypeDef, ContributionTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ContributionType$ {
    /** @deprecated use `ContributionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ContributionTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ContributionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ContributionTypeOpen, z.ZodTypeDef, ContributionTypeOpen>;
}
/** @internal */
export declare const EntryDepositType$inboundSchema: z.ZodType<EntryDepositTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryDepositType$outboundSchema: z.ZodType<EntryDepositTypeOpen, z.ZodTypeDef, EntryDepositTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryDepositType$ {
    /** @deprecated use `EntryDepositType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryDepositTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryDepositType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryDepositTypeOpen, z.ZodTypeDef, EntryDepositTypeOpen>;
}
/** @internal */
export declare const Deposit$inboundSchema: z.ZodType<Deposit, z.ZodTypeDef, unknown>;
/** @internal */
export type Deposit$Outbound = {
    additional_instructions?: string | undefined;
    contribution_type?: string | undefined;
    contribution_year?: number | undefined;
    fed_reference_number?: string | undefined;
    originating_account_number?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const Deposit$outboundSchema: z.ZodType<Deposit$Outbound, z.ZodTypeDef, Deposit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Deposit$ {
    /** @deprecated use `Deposit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Deposit, z.ZodTypeDef, unknown>;
    /** @deprecated use `Deposit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Deposit$Outbound, z.ZodTypeDef, Deposit>;
    /** @deprecated use `Deposit$Outbound` instead. */
    type Outbound = Deposit$Outbound;
}
export declare function depositToJSON(deposit: Deposit): string;
export declare function depositFromJSON(jsonString: string): SafeParseResult<Deposit, SDKValidationError>;
/** @internal */
export declare const EntryAction$inboundSchema: z.ZodType<EntryActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryAction$outboundSchema: z.ZodType<EntryActionOpen, z.ZodTypeDef, EntryActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryAction$ {
    /** @deprecated use `EntryAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryActionOpen, z.ZodTypeDef, EntryActionOpen>;
}
/** @internal */
export declare const Drip$inboundSchema: z.ZodType<Drip, z.ZodTypeDef, unknown>;
/** @internal */
export type Drip$Outbound = {
    action?: string | undefined;
};
/** @internal */
export declare const Drip$outboundSchema: z.ZodType<Drip$Outbound, z.ZodTypeDef, Drip>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Drip$ {
    /** @deprecated use `Drip$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Drip, z.ZodTypeDef, unknown>;
    /** @deprecated use `Drip$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Drip$Outbound, z.ZodTypeDef, Drip>;
    /** @deprecated use `Drip$Outbound` instead. */
    type Outbound = Drip$Outbound;
}
export declare function dripToJSON(drip: Drip): string;
export declare function dripFromJSON(jsonString: string): SafeParseResult<Drip, SDKValidationError>;
/** @internal */
export declare const EntryExchangeCashRate$inboundSchema: z.ZodType<EntryExchangeCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryExchangeCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryExchangeCashRate$outboundSchema: z.ZodType<EntryExchangeCashRate$Outbound, z.ZodTypeDef, EntryExchangeCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryExchangeCashRate$ {
    /** @deprecated use `EntryExchangeCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryExchangeCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryExchangeCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryExchangeCashRate$Outbound, z.ZodTypeDef, EntryExchangeCashRate>;
    /** @deprecated use `EntryExchangeCashRate$Outbound` instead. */
    type Outbound = EntryExchangeCashRate$Outbound;
}
export declare function entryExchangeCashRateToJSON(entryExchangeCashRate: EntryExchangeCashRate): string;
export declare function entryExchangeCashRateFromJSON(jsonString: string): SafeParseResult<EntryExchangeCashRate, SDKValidationError>;
/** @internal */
export declare const EntryExchangeCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryExchangeCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryExchangeCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryExchangeCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryExchangeCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryExchangeCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryExchangeCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryExchangeCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryExchangeCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryExchangeCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryExchangeCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryExchangeCorporateActionGeneralInformation>;
    /** @deprecated use `EntryExchangeCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryExchangeCorporateActionGeneralInformation$Outbound;
}
export declare function entryExchangeCorporateActionGeneralInformationToJSON(entryExchangeCorporateActionGeneralInformation: EntryExchangeCorporateActionGeneralInformation): string;
export declare function entryExchangeCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryExchangeCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryStockRate$inboundSchema: z.ZodType<EntryStockRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryStockRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryStockRate$outboundSchema: z.ZodType<EntryStockRate$Outbound, z.ZodTypeDef, EntryStockRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryStockRate$ {
    /** @deprecated use `EntryStockRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryStockRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryStockRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryStockRate$Outbound, z.ZodTypeDef, EntryStockRate>;
    /** @deprecated use `EntryStockRate$Outbound` instead. */
    type Outbound = EntryStockRate$Outbound;
}
export declare function entryStockRateToJSON(entryStockRate: EntryStockRate): string;
export declare function entryStockRateFromJSON(jsonString: string): SafeParseResult<EntryStockRate, SDKValidationError>;
/** @internal */
export declare const EntryExchangeType$inboundSchema: z.ZodType<EntryExchangeTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryExchangeType$outboundSchema: z.ZodType<EntryExchangeTypeOpen, z.ZodTypeDef, EntryExchangeTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryExchangeType$ {
    /** @deprecated use `EntryExchangeType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryExchangeTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryExchangeType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryExchangeTypeOpen, z.ZodTypeDef, EntryExchangeTypeOpen>;
}
/** @internal */
export declare const Exchange$inboundSchema: z.ZodType<Exchange, z.ZodTypeDef, unknown>;
/** @internal */
export type Exchange$Outbound = {
    cash_rate?: EntryExchangeCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryExchangeCorporateActionGeneralInformation$Outbound | null | undefined;
    stock_rate?: EntryStockRate$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const Exchange$outboundSchema: z.ZodType<Exchange$Outbound, z.ZodTypeDef, Exchange>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Exchange$ {
    /** @deprecated use `Exchange$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Exchange, z.ZodTypeDef, unknown>;
    /** @deprecated use `Exchange$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Exchange$Outbound, z.ZodTypeDef, Exchange>;
    /** @deprecated use `Exchange$Outbound` instead. */
    type Outbound = Exchange$Outbound;
}
export declare function exchangeToJSON(exchange: Exchange): string;
export declare function exchangeFromJSON(jsonString: string): SafeParseResult<Exchange, SDKValidationError>;
/** @internal */
export declare const EntryFeeType$inboundSchema: z.ZodType<EntryFeeTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryFeeType$outboundSchema: z.ZodType<EntryFeeTypeOpen, z.ZodTypeDef, EntryFeeTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFeeType$ {
    /** @deprecated use `EntryFeeType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFeeTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFeeType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFeeTypeOpen, z.ZodTypeDef, EntryFeeTypeOpen>;
}
/** @internal */
export declare const EntryFee$inboundSchema: z.ZodType<EntryFee, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryFee$Outbound = {
    additional_instructions?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const EntryFee$outboundSchema: z.ZodType<EntryFee$Outbound, z.ZodTypeDef, EntryFee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFee$ {
    /** @deprecated use `EntryFee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFee, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFee$Outbound, z.ZodTypeDef, EntryFee>;
    /** @deprecated use `EntryFee$Outbound` instead. */
    type Outbound = EntryFee$Outbound;
}
export declare function entryFeeToJSON(entryFee: EntryFee): string;
export declare function entryFeeFromJSON(jsonString: string): SafeParseResult<EntryFee, SDKValidationError>;
/** @internal */
export declare const EntryFlipBrokerCapacity$inboundSchema: z.ZodType<EntryFlipBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryFlipBrokerCapacity$outboundSchema: z.ZodType<EntryFlipBrokerCapacityOpen, z.ZodTypeDef, EntryFlipBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFlipBrokerCapacity$ {
    /** @deprecated use `EntryFlipBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFlipBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFlipBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFlipBrokerCapacityOpen, z.ZodTypeDef, EntryFlipBrokerCapacityOpen>;
}
/** @internal */
export declare const EntryFlipPrevailingMarketPrice$inboundSchema: z.ZodType<EntryFlipPrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryFlipPrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryFlipPrevailingMarketPrice$outboundSchema: z.ZodType<EntryFlipPrevailingMarketPrice$Outbound, z.ZodTypeDef, EntryFlipPrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFlipPrevailingMarketPrice$ {
    /** @deprecated use `EntryFlipPrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFlipPrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFlipPrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFlipPrevailingMarketPrice$Outbound, z.ZodTypeDef, EntryFlipPrevailingMarketPrice>;
    /** @deprecated use `EntryFlipPrevailingMarketPrice$Outbound` instead. */
    type Outbound = EntryFlipPrevailingMarketPrice$Outbound;
}
export declare function entryFlipPrevailingMarketPriceToJSON(entryFlipPrevailingMarketPrice: EntryFlipPrevailingMarketPrice): string;
export declare function entryFlipPrevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<EntryFlipPrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const EntryFlipPriceAdjustmentAmount$inboundSchema: z.ZodType<EntryFlipPriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryFlipPriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryFlipPriceAdjustmentAmount$outboundSchema: z.ZodType<EntryFlipPriceAdjustmentAmount$Outbound, z.ZodTypeDef, EntryFlipPriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFlipPriceAdjustmentAmount$ {
    /** @deprecated use `EntryFlipPriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFlipPriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFlipPriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFlipPriceAdjustmentAmount$Outbound, z.ZodTypeDef, EntryFlipPriceAdjustmentAmount>;
    /** @deprecated use `EntryFlipPriceAdjustmentAmount$Outbound` instead. */
    type Outbound = EntryFlipPriceAdjustmentAmount$Outbound;
}
export declare function entryFlipPriceAdjustmentAmountToJSON(entryFlipPriceAdjustmentAmount: EntryFlipPriceAdjustmentAmount): string;
export declare function entryFlipPriceAdjustmentAmountFromJSON(jsonString: string): SafeParseResult<EntryFlipPriceAdjustmentAmount, SDKValidationError>;
/** @internal */
export declare const EntryFlipPriceAdjustmentPercent$inboundSchema: z.ZodType<EntryFlipPriceAdjustmentPercent, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryFlipPriceAdjustmentPercent$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryFlipPriceAdjustmentPercent$outboundSchema: z.ZodType<EntryFlipPriceAdjustmentPercent$Outbound, z.ZodTypeDef, EntryFlipPriceAdjustmentPercent>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFlipPriceAdjustmentPercent$ {
    /** @deprecated use `EntryFlipPriceAdjustmentPercent$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFlipPriceAdjustmentPercent, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFlipPriceAdjustmentPercent$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFlipPriceAdjustmentPercent$Outbound, z.ZodTypeDef, EntryFlipPriceAdjustmentPercent>;
    /** @deprecated use `EntryFlipPriceAdjustmentPercent$Outbound` instead. */
    type Outbound = EntryFlipPriceAdjustmentPercent$Outbound;
}
export declare function entryFlipPriceAdjustmentPercentToJSON(entryFlipPriceAdjustmentPercent: EntryFlipPriceAdjustmentPercent): string;
export declare function entryFlipPriceAdjustmentPercentFromJSON(jsonString: string): SafeParseResult<EntryFlipPriceAdjustmentPercent, SDKValidationError>;
/** @internal */
export declare const EntryFlipPriceAdjustmentType$inboundSchema: z.ZodType<EntryFlipPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryFlipPriceAdjustmentType$outboundSchema: z.ZodType<EntryFlipPriceAdjustmentTypeOpen, z.ZodTypeDef, EntryFlipPriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFlipPriceAdjustmentType$ {
    /** @deprecated use `EntryFlipPriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFlipPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFlipPriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFlipPriceAdjustmentTypeOpen, z.ZodTypeDef, EntryFlipPriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const EntryFlipPriceAdjustmentRecord$inboundSchema: z.ZodType<EntryFlipPriceAdjustmentRecord, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryFlipPriceAdjustmentRecord$Outbound = {
    price_adjustment_amount?: EntryFlipPriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_percent?: EntryFlipPriceAdjustmentPercent$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const EntryFlipPriceAdjustmentRecord$outboundSchema: z.ZodType<EntryFlipPriceAdjustmentRecord$Outbound, z.ZodTypeDef, EntryFlipPriceAdjustmentRecord>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFlipPriceAdjustmentRecord$ {
    /** @deprecated use `EntryFlipPriceAdjustmentRecord$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFlipPriceAdjustmentRecord, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFlipPriceAdjustmentRecord$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFlipPriceAdjustmentRecord$Outbound, z.ZodTypeDef, EntryFlipPriceAdjustmentRecord>;
    /** @deprecated use `EntryFlipPriceAdjustmentRecord$Outbound` instead. */
    type Outbound = EntryFlipPriceAdjustmentRecord$Outbound;
}
export declare function entryFlipPriceAdjustmentRecordToJSON(entryFlipPriceAdjustmentRecord: EntryFlipPriceAdjustmentRecord): string;
export declare function entryFlipPriceAdjustmentRecordFromJSON(jsonString: string): SafeParseResult<EntryFlipPriceAdjustmentRecord, SDKValidationError>;
/** @internal */
export declare const Detail$inboundSchema: z.ZodType<Detail, z.ZodTypeDef, unknown>;
/** @internal */
export type Detail$Outbound = {
    additional_instructions?: Array<string> | undefined;
    alternate_order_id?: string | undefined;
    booking_api_booking_execution_id?: string | undefined;
    booking_api_trade_allocation_id?: string | undefined;
    booking_api_trade_id?: string | undefined;
    broker?: string | undefined;
    broker_capacity?: string | undefined;
    client_memo?: string | undefined;
    client_order_id?: string | undefined;
    exchange?: string | undefined;
    execution_id?: string | undefined;
    execution_only?: boolean | undefined;
    external_id?: string | undefined;
    fund_confirmation_number?: string | undefined;
    gateway_client_order_id?: string | undefined;
    internal_error?: boolean | undefined;
    is_writeoff?: boolean | undefined;
    lots?: Array<Lot$Outbound> | undefined;
    market?: string | undefined;
    order_id?: string | undefined;
    prevailing_market_price?: EntryFlipPrevailingMarketPrice$Outbound | null | undefined;
    price_adjustment_record?: EntryFlipPriceAdjustmentRecord$Outbound | null | undefined;
    route?: string | undefined;
    special_instructions?: Array<string> | undefined;
    when_issued?: boolean | undefined;
    yield_records?: Array<YieldRecord$Outbound> | undefined;
};
/** @internal */
export declare const Detail$outboundSchema: z.ZodType<Detail$Outbound, z.ZodTypeDef, Detail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Detail$ {
    /** @deprecated use `Detail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Detail, z.ZodTypeDef, unknown>;
    /** @deprecated use `Detail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Detail$Outbound, z.ZodTypeDef, Detail>;
    /** @deprecated use `Detail$Outbound` instead. */
    type Outbound = Detail$Outbound;
}
export declare function detailToJSON(detail: Detail): string;
export declare function detailFromJSON(jsonString: string): SafeParseResult<Detail, SDKValidationError>;
/** @internal */
export declare const Flip$inboundSchema: z.ZodType<Flip, z.ZodTypeDef, unknown>;
/** @internal */
export type Flip$Outbound = {
    detail?: Detail$Outbound | null | undefined;
};
/** @internal */
export declare const Flip$outboundSchema: z.ZodType<Flip$Outbound, z.ZodTypeDef, Flip>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Flip$ {
    /** @deprecated use `Flip$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Flip, z.ZodTypeDef, unknown>;
    /** @deprecated use `Flip$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Flip$Outbound, z.ZodTypeDef, Flip>;
    /** @deprecated use `Flip$Outbound` instead. */
    type Outbound = Flip$Outbound;
}
export declare function flipToJSON(flip: Flip): string;
export declare function flipFromJSON(jsonString: string): SafeParseResult<Flip, SDKValidationError>;
/** @internal */
export declare const EntryFpslAction$inboundSchema: z.ZodType<EntryFpslActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryFpslAction$outboundSchema: z.ZodType<EntryFpslActionOpen, z.ZodTypeDef, EntryFpslActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFpslAction$ {
    /** @deprecated use `EntryFpslAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFpslActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFpslAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFpslActionOpen, z.ZodTypeDef, EntryFpslActionOpen>;
}
/** @internal */
export declare const Fpsl$inboundSchema: z.ZodType<Fpsl, z.ZodTypeDef, unknown>;
/** @internal */
export type Fpsl$Outbound = {
    action?: string | undefined;
};
/** @internal */
export declare const Fpsl$outboundSchema: z.ZodType<Fpsl$Outbound, z.ZodTypeDef, Fpsl>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Fpsl$ {
    /** @deprecated use `Fpsl$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Fpsl, z.ZodTypeDef, unknown>;
    /** @deprecated use `Fpsl$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Fpsl$Outbound, z.ZodTypeDef, Fpsl>;
    /** @deprecated use `Fpsl$Outbound` instead. */
    type Outbound = Fpsl$Outbound;
}
export declare function fpslToJSON(fpsl: Fpsl): string;
export declare function fpslFromJSON(jsonString: string): SafeParseResult<Fpsl, SDKValidationError>;
/** @internal */
export declare const EntryGrossAmount$inboundSchema: z.ZodType<EntryGrossAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryGrossAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryGrossAmount$outboundSchema: z.ZodType<EntryGrossAmount$Outbound, z.ZodTypeDef, EntryGrossAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryGrossAmount$ {
    /** @deprecated use `EntryGrossAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryGrossAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryGrossAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryGrossAmount$Outbound, z.ZodTypeDef, EntryGrossAmount>;
    /** @deprecated use `EntryGrossAmount$Outbound` instead. */
    type Outbound = EntryGrossAmount$Outbound;
}
export declare function entryGrossAmountToJSON(entryGrossAmount: EntryGrossAmount): string;
export declare function entryGrossAmountFromJSON(jsonString: string): SafeParseResult<EntryGrossAmount, SDKValidationError>;
/** @internal */
export declare const InterestAccrualEndDate$inboundSchema: z.ZodType<InterestAccrualEndDate, z.ZodTypeDef, unknown>;
/** @internal */
export type InterestAccrualEndDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const InterestAccrualEndDate$outboundSchema: z.ZodType<InterestAccrualEndDate$Outbound, z.ZodTypeDef, InterestAccrualEndDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestAccrualEndDate$ {
    /** @deprecated use `InterestAccrualEndDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestAccrualEndDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestAccrualEndDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestAccrualEndDate$Outbound, z.ZodTypeDef, InterestAccrualEndDate>;
    /** @deprecated use `InterestAccrualEndDate$Outbound` instead. */
    type Outbound = InterestAccrualEndDate$Outbound;
}
export declare function interestAccrualEndDateToJSON(interestAccrualEndDate: InterestAccrualEndDate): string;
export declare function interestAccrualEndDateFromJSON(jsonString: string): SafeParseResult<InterestAccrualEndDate, SDKValidationError>;
/** @internal */
export declare const InterestAccrualStartDate$inboundSchema: z.ZodType<InterestAccrualStartDate, z.ZodTypeDef, unknown>;
/** @internal */
export type InterestAccrualStartDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const InterestAccrualStartDate$outboundSchema: z.ZodType<InterestAccrualStartDate$Outbound, z.ZodTypeDef, InterestAccrualStartDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestAccrualStartDate$ {
    /** @deprecated use `InterestAccrualStartDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestAccrualStartDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestAccrualStartDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestAccrualStartDate$Outbound, z.ZodTypeDef, InterestAccrualStartDate>;
    /** @deprecated use `InterestAccrualStartDate$Outbound` instead. */
    type Outbound = InterestAccrualStartDate$Outbound;
}
export declare function interestAccrualStartDateToJSON(interestAccrualStartDate: InterestAccrualStartDate): string;
export declare function interestAccrualStartDateFromJSON(jsonString: string): SafeParseResult<InterestAccrualStartDate, SDKValidationError>;
/** @internal */
export declare const InterestType$inboundSchema: z.ZodType<InterestTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const InterestType$outboundSchema: z.ZodType<InterestTypeOpen, z.ZodTypeDef, InterestTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestType$ {
    /** @deprecated use `InterestType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestTypeOpen, z.ZodTypeDef, InterestTypeOpen>;
}
/** @internal */
export declare const Interest$inboundSchema: z.ZodType<Interest, z.ZodTypeDef, unknown>;
/** @internal */
export type Interest$Outbound = {
    interest_accrual_end_date?: InterestAccrualEndDate$Outbound | null | undefined;
    interest_accrual_start_date?: InterestAccrualStartDate$Outbound | null | undefined;
    interest_type?: string | undefined;
};
/** @internal */
export declare const Interest$outboundSchema: z.ZodType<Interest$Outbound, z.ZodTypeDef, Interest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Interest$ {
    /** @deprecated use `Interest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Interest, z.ZodTypeDef, unknown>;
    /** @deprecated use `Interest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Interest$Outbound, z.ZodTypeDef, Interest>;
    /** @deprecated use `Interest$Outbound` instead. */
    type Outbound = Interest$Outbound;
}
export declare function interestToJSON(interest: Interest): string;
export declare function interestFromJSON(jsonString: string): SafeParseResult<Interest, SDKValidationError>;
/** @internal */
export declare const EntryInterestPaymentCashRate$inboundSchema: z.ZodType<EntryInterestPaymentCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryInterestPaymentCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryInterestPaymentCashRate$outboundSchema: z.ZodType<EntryInterestPaymentCashRate$Outbound, z.ZodTypeDef, EntryInterestPaymentCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryInterestPaymentCashRate$ {
    /** @deprecated use `EntryInterestPaymentCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryInterestPaymentCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryInterestPaymentCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryInterestPaymentCashRate$Outbound, z.ZodTypeDef, EntryInterestPaymentCashRate>;
    /** @deprecated use `EntryInterestPaymentCashRate$Outbound` instead. */
    type Outbound = EntryInterestPaymentCashRate$Outbound;
}
export declare function entryInterestPaymentCashRateToJSON(entryInterestPaymentCashRate: EntryInterestPaymentCashRate): string;
export declare function entryInterestPaymentCashRateFromJSON(jsonString: string): SafeParseResult<EntryInterestPaymentCashRate, SDKValidationError>;
/** @internal */
export declare const EntryInterestPaymentCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryInterestPaymentCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryInterestPaymentCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryInterestPaymentCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryInterestPaymentCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryInterestPaymentCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryInterestPaymentCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryInterestPaymentCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryInterestPaymentCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryInterestPaymentCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryInterestPaymentCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryInterestPaymentCorporateActionGeneralInformation>;
    /** @deprecated use `EntryInterestPaymentCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryInterestPaymentCorporateActionGeneralInformation$Outbound;
}
export declare function entryInterestPaymentCorporateActionGeneralInformationToJSON(entryInterestPaymentCorporateActionGeneralInformation: EntryInterestPaymentCorporateActionGeneralInformation): string;
export declare function entryInterestPaymentCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryInterestPaymentCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryInterestPaymentPaymentDate$inboundSchema: z.ZodType<EntryInterestPaymentPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryInterestPaymentPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryInterestPaymentPaymentDate$outboundSchema: z.ZodType<EntryInterestPaymentPaymentDate$Outbound, z.ZodTypeDef, EntryInterestPaymentPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryInterestPaymentPaymentDate$ {
    /** @deprecated use `EntryInterestPaymentPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryInterestPaymentPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryInterestPaymentPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryInterestPaymentPaymentDate$Outbound, z.ZodTypeDef, EntryInterestPaymentPaymentDate>;
    /** @deprecated use `EntryInterestPaymentPaymentDate$Outbound` instead. */
    type Outbound = EntryInterestPaymentPaymentDate$Outbound;
}
export declare function entryInterestPaymentPaymentDateToJSON(entryInterestPaymentPaymentDate: EntryInterestPaymentPaymentDate): string;
export declare function entryInterestPaymentPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryInterestPaymentPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryInterestPaymentRecordDate$inboundSchema: z.ZodType<EntryInterestPaymentRecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryInterestPaymentRecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryInterestPaymentRecordDate$outboundSchema: z.ZodType<EntryInterestPaymentRecordDate$Outbound, z.ZodTypeDef, EntryInterestPaymentRecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryInterestPaymentRecordDate$ {
    /** @deprecated use `EntryInterestPaymentRecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryInterestPaymentRecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryInterestPaymentRecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryInterestPaymentRecordDate$Outbound, z.ZodTypeDef, EntryInterestPaymentRecordDate>;
    /** @deprecated use `EntryInterestPaymentRecordDate$Outbound` instead. */
    type Outbound = EntryInterestPaymentRecordDate$Outbound;
}
export declare function entryInterestPaymentRecordDateToJSON(entryInterestPaymentRecordDate: EntryInterestPaymentRecordDate): string;
export declare function entryInterestPaymentRecordDateFromJSON(jsonString: string): SafeParseResult<EntryInterestPaymentRecordDate, SDKValidationError>;
/** @internal */
export declare const EntrySettled$inboundSchema: z.ZodType<EntrySettled, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySettled$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntrySettled$outboundSchema: z.ZodType<EntrySettled$Outbound, z.ZodTypeDef, EntrySettled>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySettled$ {
    /** @deprecated use `EntrySettled$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySettled, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySettled$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySettled$Outbound, z.ZodTypeDef, EntrySettled>;
    /** @deprecated use `EntrySettled$Outbound` instead. */
    type Outbound = EntrySettled$Outbound;
}
export declare function entrySettledToJSON(entrySettled: EntrySettled): string;
export declare function entrySettledFromJSON(jsonString: string): SafeParseResult<EntrySettled, SDKValidationError>;
/** @internal */
export declare const InterestPayment$inboundSchema: z.ZodType<InterestPayment, z.ZodTypeDef, unknown>;
/** @internal */
export type InterestPayment$Outbound = {
    cash_rate?: EntryInterestPaymentCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryInterestPaymentCorporateActionGeneralInformation$Outbound | null | undefined;
    payment_date?: EntryInterestPaymentPaymentDate$Outbound | null | undefined;
    record_date?: EntryInterestPaymentRecordDate$Outbound | null | undefined;
    settled?: EntrySettled$Outbound | null | undefined;
};
/** @internal */
export declare const InterestPayment$outboundSchema: z.ZodType<InterestPayment$Outbound, z.ZodTypeDef, InterestPayment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InterestPayment$ {
    /** @deprecated use `InterestPayment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InterestPayment, z.ZodTypeDef, unknown>;
    /** @deprecated use `InterestPayment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InterestPayment$Outbound, z.ZodTypeDef, InterestPayment>;
    /** @deprecated use `InterestPayment$Outbound` instead. */
    type Outbound = InterestPayment$Outbound;
}
export declare function interestPaymentToJSON(interestPayment: InterestPayment): string;
export declare function interestPaymentFromJSON(jsonString: string): SafeParseResult<InterestPayment, SDKValidationError>;
/** @internal */
export declare const EntryLiquidationAction$inboundSchema: z.ZodType<EntryLiquidationActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryLiquidationAction$outboundSchema: z.ZodType<EntryLiquidationActionOpen, z.ZodTypeDef, EntryLiquidationActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryLiquidationAction$ {
    /** @deprecated use `EntryLiquidationAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryLiquidationActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryLiquidationAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryLiquidationActionOpen, z.ZodTypeDef, EntryLiquidationActionOpen>;
}
/** @internal */
export declare const EntryLiquidationCashRate$inboundSchema: z.ZodType<EntryLiquidationCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryLiquidationCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryLiquidationCashRate$outboundSchema: z.ZodType<EntryLiquidationCashRate$Outbound, z.ZodTypeDef, EntryLiquidationCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryLiquidationCashRate$ {
    /** @deprecated use `EntryLiquidationCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryLiquidationCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryLiquidationCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryLiquidationCashRate$Outbound, z.ZodTypeDef, EntryLiquidationCashRate>;
    /** @deprecated use `EntryLiquidationCashRate$Outbound` instead. */
    type Outbound = EntryLiquidationCashRate$Outbound;
}
export declare function entryLiquidationCashRateToJSON(entryLiquidationCashRate: EntryLiquidationCashRate): string;
export declare function entryLiquidationCashRateFromJSON(jsonString: string): SafeParseResult<EntryLiquidationCashRate, SDKValidationError>;
/** @internal */
export declare const EntryLiquidationCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryLiquidationCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryLiquidationCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryLiquidationCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryLiquidationCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryLiquidationCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryLiquidationCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryLiquidationCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryLiquidationCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryLiquidationCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryLiquidationCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryLiquidationCorporateActionGeneralInformation>;
    /** @deprecated use `EntryLiquidationCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryLiquidationCorporateActionGeneralInformation$Outbound;
}
export declare function entryLiquidationCorporateActionGeneralInformationToJSON(entryLiquidationCorporateActionGeneralInformation: EntryLiquidationCorporateActionGeneralInformation): string;
export declare function entryLiquidationCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryLiquidationCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryEffectiveDate$inboundSchema: z.ZodType<EntryEffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryEffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryEffectiveDate$outboundSchema: z.ZodType<EntryEffectiveDate$Outbound, z.ZodTypeDef, EntryEffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryEffectiveDate$ {
    /** @deprecated use `EntryEffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryEffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryEffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryEffectiveDate$Outbound, z.ZodTypeDef, EntryEffectiveDate>;
    /** @deprecated use `EntryEffectiveDate$Outbound` instead. */
    type Outbound = EntryEffectiveDate$Outbound;
}
export declare function entryEffectiveDateToJSON(entryEffectiveDate: EntryEffectiveDate): string;
export declare function entryEffectiveDateFromJSON(jsonString: string): SafeParseResult<EntryEffectiveDate, SDKValidationError>;
/** @internal */
export declare const EntryLiquidationPaymentDate$inboundSchema: z.ZodType<EntryLiquidationPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryLiquidationPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryLiquidationPaymentDate$outboundSchema: z.ZodType<EntryLiquidationPaymentDate$Outbound, z.ZodTypeDef, EntryLiquidationPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryLiquidationPaymentDate$ {
    /** @deprecated use `EntryLiquidationPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryLiquidationPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryLiquidationPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryLiquidationPaymentDate$Outbound, z.ZodTypeDef, EntryLiquidationPaymentDate>;
    /** @deprecated use `EntryLiquidationPaymentDate$Outbound` instead. */
    type Outbound = EntryLiquidationPaymentDate$Outbound;
}
export declare function entryLiquidationPaymentDateToJSON(entryLiquidationPaymentDate: EntryLiquidationPaymentDate): string;
export declare function entryLiquidationPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryLiquidationPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryLiquidationQuantity$inboundSchema: z.ZodType<EntryLiquidationQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryLiquidationQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryLiquidationQuantity$outboundSchema: z.ZodType<EntryLiquidationQuantity$Outbound, z.ZodTypeDef, EntryLiquidationQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryLiquidationQuantity$ {
    /** @deprecated use `EntryLiquidationQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryLiquidationQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryLiquidationQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryLiquidationQuantity$Outbound, z.ZodTypeDef, EntryLiquidationQuantity>;
    /** @deprecated use `EntryLiquidationQuantity$Outbound` instead. */
    type Outbound = EntryLiquidationQuantity$Outbound;
}
export declare function entryLiquidationQuantityToJSON(entryLiquidationQuantity: EntryLiquidationQuantity): string;
export declare function entryLiquidationQuantityFromJSON(jsonString: string): SafeParseResult<EntryLiquidationQuantity, SDKValidationError>;
/** @internal */
export declare const EntryLiquidationRecordDate$inboundSchema: z.ZodType<EntryLiquidationRecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryLiquidationRecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryLiquidationRecordDate$outboundSchema: z.ZodType<EntryLiquidationRecordDate$Outbound, z.ZodTypeDef, EntryLiquidationRecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryLiquidationRecordDate$ {
    /** @deprecated use `EntryLiquidationRecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryLiquidationRecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryLiquidationRecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryLiquidationRecordDate$Outbound, z.ZodTypeDef, EntryLiquidationRecordDate>;
    /** @deprecated use `EntryLiquidationRecordDate$Outbound` instead. */
    type Outbound = EntryLiquidationRecordDate$Outbound;
}
export declare function entryLiquidationRecordDateToJSON(entryLiquidationRecordDate: EntryLiquidationRecordDate): string;
export declare function entryLiquidationRecordDateFromJSON(jsonString: string): SafeParseResult<EntryLiquidationRecordDate, SDKValidationError>;
/** @internal */
export declare const EntryLiquidationSettled$inboundSchema: z.ZodType<EntryLiquidationSettled, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryLiquidationSettled$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryLiquidationSettled$outboundSchema: z.ZodType<EntryLiquidationSettled$Outbound, z.ZodTypeDef, EntryLiquidationSettled>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryLiquidationSettled$ {
    /** @deprecated use `EntryLiquidationSettled$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryLiquidationSettled, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryLiquidationSettled$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryLiquidationSettled$Outbound, z.ZodTypeDef, EntryLiquidationSettled>;
    /** @deprecated use `EntryLiquidationSettled$Outbound` instead. */
    type Outbound = EntryLiquidationSettled$Outbound;
}
export declare function entryLiquidationSettledToJSON(entryLiquidationSettled: EntryLiquidationSettled): string;
export declare function entryLiquidationSettledFromJSON(jsonString: string): SafeParseResult<EntryLiquidationSettled, SDKValidationError>;
/** @internal */
export declare const EntrySubtype$inboundSchema: z.ZodType<EntrySubtypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntrySubtype$outboundSchema: z.ZodType<EntrySubtypeOpen, z.ZodTypeDef, EntrySubtypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySubtype$ {
    /** @deprecated use `EntrySubtype$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySubtypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySubtype$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySubtypeOpen, z.ZodTypeDef, EntrySubtypeOpen>;
}
/** @internal */
export declare const Liquidation$inboundSchema: z.ZodType<Liquidation, z.ZodTypeDef, unknown>;
/** @internal */
export type Liquidation$Outbound = {
    action?: string | undefined;
    cash_rate?: EntryLiquidationCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryLiquidationCorporateActionGeneralInformation$Outbound | null | undefined;
    effective_date?: EntryEffectiveDate$Outbound | null | undefined;
    payment_date?: EntryLiquidationPaymentDate$Outbound | null | undefined;
    quantity?: EntryLiquidationQuantity$Outbound | null | undefined;
    record_date?: EntryLiquidationRecordDate$Outbound | null | undefined;
    settled?: EntryLiquidationSettled$Outbound | null | undefined;
    subtype?: string | undefined;
};
/** @internal */
export declare const Liquidation$outboundSchema: z.ZodType<Liquidation$Outbound, z.ZodTypeDef, Liquidation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Liquidation$ {
    /** @deprecated use `Liquidation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Liquidation, z.ZodTypeDef, unknown>;
    /** @deprecated use `Liquidation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Liquidation$Outbound, z.ZodTypeDef, Liquidation>;
    /** @deprecated use `Liquidation$Outbound` instead. */
    type Outbound = Liquidation$Outbound;
}
export declare function liquidationToJSON(liquidation: Liquidation): string;
export declare function liquidationFromJSON(jsonString: string): SafeParseResult<Liquidation, SDKValidationError>;
/** @internal */
export declare const EntryMaturityCashRate$inboundSchema: z.ZodType<EntryMaturityCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryMaturityCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryMaturityCashRate$outboundSchema: z.ZodType<EntryMaturityCashRate$Outbound, z.ZodTypeDef, EntryMaturityCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMaturityCashRate$ {
    /** @deprecated use `EntryMaturityCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMaturityCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMaturityCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMaturityCashRate$Outbound, z.ZodTypeDef, EntryMaturityCashRate>;
    /** @deprecated use `EntryMaturityCashRate$Outbound` instead. */
    type Outbound = EntryMaturityCashRate$Outbound;
}
export declare function entryMaturityCashRateToJSON(entryMaturityCashRate: EntryMaturityCashRate): string;
export declare function entryMaturityCashRateFromJSON(jsonString: string): SafeParseResult<EntryMaturityCashRate, SDKValidationError>;
/** @internal */
export declare const EntryMaturityCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryMaturityCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryMaturityCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryMaturityCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryMaturityCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryMaturityCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMaturityCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryMaturityCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMaturityCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMaturityCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMaturityCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryMaturityCorporateActionGeneralInformation>;
    /** @deprecated use `EntryMaturityCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryMaturityCorporateActionGeneralInformation$Outbound;
}
export declare function entryMaturityCorporateActionGeneralInformationToJSON(entryMaturityCorporateActionGeneralInformation: EntryMaturityCorporateActionGeneralInformation): string;
export declare function entryMaturityCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryMaturityCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryMaturityPaymentDate$inboundSchema: z.ZodType<EntryMaturityPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryMaturityPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryMaturityPaymentDate$outboundSchema: z.ZodType<EntryMaturityPaymentDate$Outbound, z.ZodTypeDef, EntryMaturityPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMaturityPaymentDate$ {
    /** @deprecated use `EntryMaturityPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMaturityPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMaturityPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMaturityPaymentDate$Outbound, z.ZodTypeDef, EntryMaturityPaymentDate>;
    /** @deprecated use `EntryMaturityPaymentDate$Outbound` instead. */
    type Outbound = EntryMaturityPaymentDate$Outbound;
}
export declare function entryMaturityPaymentDateToJSON(entryMaturityPaymentDate: EntryMaturityPaymentDate): string;
export declare function entryMaturityPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryMaturityPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryMaturityQuantity$inboundSchema: z.ZodType<EntryMaturityQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryMaturityQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryMaturityQuantity$outboundSchema: z.ZodType<EntryMaturityQuantity$Outbound, z.ZodTypeDef, EntryMaturityQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMaturityQuantity$ {
    /** @deprecated use `EntryMaturityQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMaturityQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMaturityQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMaturityQuantity$Outbound, z.ZodTypeDef, EntryMaturityQuantity>;
    /** @deprecated use `EntryMaturityQuantity$Outbound` instead. */
    type Outbound = EntryMaturityQuantity$Outbound;
}
export declare function entryMaturityQuantityToJSON(entryMaturityQuantity: EntryMaturityQuantity): string;
export declare function entryMaturityQuantityFromJSON(jsonString: string): SafeParseResult<EntryMaturityQuantity, SDKValidationError>;
/** @internal */
export declare const Maturity$inboundSchema: z.ZodType<Maturity, z.ZodTypeDef, unknown>;
/** @internal */
export type Maturity$Outbound = {
    cash_rate?: EntryMaturityCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryMaturityCorporateActionGeneralInformation$Outbound | null | undefined;
    payment_date?: EntryMaturityPaymentDate$Outbound | null | undefined;
    quantity?: EntryMaturityQuantity$Outbound | null | undefined;
};
/** @internal */
export declare const Maturity$outboundSchema: z.ZodType<Maturity$Outbound, z.ZodTypeDef, Maturity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Maturity$ {
    /** @deprecated use `Maturity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Maturity, z.ZodTypeDef, unknown>;
    /** @deprecated use `Maturity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Maturity$Outbound, z.ZodTypeDef, Maturity>;
    /** @deprecated use `Maturity$Outbound` instead. */
    type Outbound = Maturity$Outbound;
}
export declare function maturityToJSON(maturity: Maturity): string;
export declare function maturityFromJSON(jsonString: string): SafeParseResult<Maturity, SDKValidationError>;
/** @internal */
export declare const EntryMergerAction$inboundSchema: z.ZodType<EntryMergerActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryMergerAction$outboundSchema: z.ZodType<EntryMergerActionOpen, z.ZodTypeDef, EntryMergerActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMergerAction$ {
    /** @deprecated use `EntryMergerAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMergerActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMergerAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMergerActionOpen, z.ZodTypeDef, EntryMergerActionOpen>;
}
/** @internal */
export declare const EntryMergerCashRate$inboundSchema: z.ZodType<EntryMergerCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryMergerCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryMergerCashRate$outboundSchema: z.ZodType<EntryMergerCashRate$Outbound, z.ZodTypeDef, EntryMergerCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMergerCashRate$ {
    /** @deprecated use `EntryMergerCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMergerCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMergerCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMergerCashRate$Outbound, z.ZodTypeDef, EntryMergerCashRate>;
    /** @deprecated use `EntryMergerCashRate$Outbound` instead. */
    type Outbound = EntryMergerCashRate$Outbound;
}
export declare function entryMergerCashRateToJSON(entryMergerCashRate: EntryMergerCashRate): string;
export declare function entryMergerCashRateFromJSON(jsonString: string): SafeParseResult<EntryMergerCashRate, SDKValidationError>;
/** @internal */
export declare const EntryMergerCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryMergerCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryMergerCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryMergerCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryMergerCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryMergerCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMergerCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryMergerCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMergerCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMergerCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMergerCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryMergerCorporateActionGeneralInformation>;
    /** @deprecated use `EntryMergerCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryMergerCorporateActionGeneralInformation$Outbound;
}
export declare function entryMergerCorporateActionGeneralInformationToJSON(entryMergerCorporateActionGeneralInformation: EntryMergerCorporateActionGeneralInformation): string;
export declare function entryMergerCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryMergerCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryMergerEffectiveDate$inboundSchema: z.ZodType<EntryMergerEffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryMergerEffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryMergerEffectiveDate$outboundSchema: z.ZodType<EntryMergerEffectiveDate$Outbound, z.ZodTypeDef, EntryMergerEffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMergerEffectiveDate$ {
    /** @deprecated use `EntryMergerEffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMergerEffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMergerEffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMergerEffectiveDate$Outbound, z.ZodTypeDef, EntryMergerEffectiveDate>;
    /** @deprecated use `EntryMergerEffectiveDate$Outbound` instead. */
    type Outbound = EntryMergerEffectiveDate$Outbound;
}
export declare function entryMergerEffectiveDateToJSON(entryMergerEffectiveDate: EntryMergerEffectiveDate): string;
export declare function entryMergerEffectiveDateFromJSON(jsonString: string): SafeParseResult<EntryMergerEffectiveDate, SDKValidationError>;
/** @internal */
export declare const EntryMergerQuantity$inboundSchema: z.ZodType<EntryMergerQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryMergerQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryMergerQuantity$outboundSchema: z.ZodType<EntryMergerQuantity$Outbound, z.ZodTypeDef, EntryMergerQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMergerQuantity$ {
    /** @deprecated use `EntryMergerQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMergerQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMergerQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMergerQuantity$Outbound, z.ZodTypeDef, EntryMergerQuantity>;
    /** @deprecated use `EntryMergerQuantity$Outbound` instead. */
    type Outbound = EntryMergerQuantity$Outbound;
}
export declare function entryMergerQuantityToJSON(entryMergerQuantity: EntryMergerQuantity): string;
export declare function entryMergerQuantityFromJSON(jsonString: string): SafeParseResult<EntryMergerQuantity, SDKValidationError>;
/** @internal */
export declare const EntryMergerStockRate$inboundSchema: z.ZodType<EntryMergerStockRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryMergerStockRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryMergerStockRate$outboundSchema: z.ZodType<EntryMergerStockRate$Outbound, z.ZodTypeDef, EntryMergerStockRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMergerStockRate$ {
    /** @deprecated use `EntryMergerStockRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMergerStockRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMergerStockRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMergerStockRate$Outbound, z.ZodTypeDef, EntryMergerStockRate>;
    /** @deprecated use `EntryMergerStockRate$Outbound` instead. */
    type Outbound = EntryMergerStockRate$Outbound;
}
export declare function entryMergerStockRateToJSON(entryMergerStockRate: EntryMergerStockRate): string;
export declare function entryMergerStockRateFromJSON(jsonString: string): SafeParseResult<EntryMergerStockRate, SDKValidationError>;
/** @internal */
export declare const EntryMergerType$inboundSchema: z.ZodType<EntryMergerTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryMergerType$outboundSchema: z.ZodType<EntryMergerTypeOpen, z.ZodTypeDef, EntryMergerTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryMergerType$ {
    /** @deprecated use `EntryMergerType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryMergerTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryMergerType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryMergerTypeOpen, z.ZodTypeDef, EntryMergerTypeOpen>;
}
/** @internal */
export declare const Merger$inboundSchema: z.ZodType<Merger, z.ZodTypeDef, unknown>;
/** @internal */
export type Merger$Outbound = {
    action?: string | undefined;
    cash_rate?: EntryMergerCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryMergerCorporateActionGeneralInformation$Outbound | null | undefined;
    effective_date?: EntryMergerEffectiveDate$Outbound | null | undefined;
    quantity?: EntryMergerQuantity$Outbound | null | undefined;
    stock_rate?: EntryMergerStockRate$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const Merger$outboundSchema: z.ZodType<Merger$Outbound, z.ZodTypeDef, Merger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Merger$ {
    /** @deprecated use `Merger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Merger, z.ZodTypeDef, unknown>;
    /** @deprecated use `Merger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Merger$Outbound, z.ZodTypeDef, Merger>;
    /** @deprecated use `Merger$Outbound` instead. */
    type Outbound = Merger$Outbound;
}
export declare function mergerToJSON(merger: Merger): string;
export declare function mergerFromJSON(jsonString: string): SafeParseResult<Merger, SDKValidationError>;
/** @internal */
export declare const EntryNameChangeAction$inboundSchema: z.ZodType<EntryNameChangeActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryNameChangeAction$outboundSchema: z.ZodType<EntryNameChangeActionOpen, z.ZodTypeDef, EntryNameChangeActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryNameChangeAction$ {
    /** @deprecated use `EntryNameChangeAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryNameChangeActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryNameChangeAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryNameChangeActionOpen, z.ZodTypeDef, EntryNameChangeActionOpen>;
}
/** @internal */
export declare const EntryNameChangeCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryNameChangeCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryNameChangeCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryNameChangeCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryNameChangeCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryNameChangeCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryNameChangeCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryNameChangeCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryNameChangeCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryNameChangeCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryNameChangeCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryNameChangeCorporateActionGeneralInformation>;
    /** @deprecated use `EntryNameChangeCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryNameChangeCorporateActionGeneralInformation$Outbound;
}
export declare function entryNameChangeCorporateActionGeneralInformationToJSON(entryNameChangeCorporateActionGeneralInformation: EntryNameChangeCorporateActionGeneralInformation): string;
export declare function entryNameChangeCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryNameChangeCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryNameChangeEffectiveDate$inboundSchema: z.ZodType<EntryNameChangeEffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryNameChangeEffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryNameChangeEffectiveDate$outboundSchema: z.ZodType<EntryNameChangeEffectiveDate$Outbound, z.ZodTypeDef, EntryNameChangeEffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryNameChangeEffectiveDate$ {
    /** @deprecated use `EntryNameChangeEffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryNameChangeEffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryNameChangeEffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryNameChangeEffectiveDate$Outbound, z.ZodTypeDef, EntryNameChangeEffectiveDate>;
    /** @deprecated use `EntryNameChangeEffectiveDate$Outbound` instead. */
    type Outbound = EntryNameChangeEffectiveDate$Outbound;
}
export declare function entryNameChangeEffectiveDateToJSON(entryNameChangeEffectiveDate: EntryNameChangeEffectiveDate): string;
export declare function entryNameChangeEffectiveDateFromJSON(jsonString: string): SafeParseResult<EntryNameChangeEffectiveDate, SDKValidationError>;
/** @internal */
export declare const EntryNameChangeQuantity$inboundSchema: z.ZodType<EntryNameChangeQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryNameChangeQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryNameChangeQuantity$outboundSchema: z.ZodType<EntryNameChangeQuantity$Outbound, z.ZodTypeDef, EntryNameChangeQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryNameChangeQuantity$ {
    /** @deprecated use `EntryNameChangeQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryNameChangeQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryNameChangeQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryNameChangeQuantity$Outbound, z.ZodTypeDef, EntryNameChangeQuantity>;
    /** @deprecated use `EntryNameChangeQuantity$Outbound` instead. */
    type Outbound = EntryNameChangeQuantity$Outbound;
}
export declare function entryNameChangeQuantityToJSON(entryNameChangeQuantity: EntryNameChangeQuantity): string;
export declare function entryNameChangeQuantityFromJSON(jsonString: string): SafeParseResult<EntryNameChangeQuantity, SDKValidationError>;
/** @internal */
export declare const NameChange$inboundSchema: z.ZodType<NameChange, z.ZodTypeDef, unknown>;
/** @internal */
export type NameChange$Outbound = {
    action?: string | undefined;
    corporate_action_general_information?: EntryNameChangeCorporateActionGeneralInformation$Outbound | null | undefined;
    effective_date?: EntryNameChangeEffectiveDate$Outbound | null | undefined;
    quantity?: EntryNameChangeQuantity$Outbound | null | undefined;
};
/** @internal */
export declare const NameChange$outboundSchema: z.ZodType<NameChange$Outbound, z.ZodTypeDef, NameChange>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NameChange$ {
    /** @deprecated use `NameChange$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NameChange, z.ZodTypeDef, unknown>;
    /** @deprecated use `NameChange$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NameChange$Outbound, z.ZodTypeDef, NameChange>;
    /** @deprecated use `NameChange$Outbound` instead. */
    type Outbound = NameChange$Outbound;
}
export declare function nameChangeToJSON(nameChange: NameChange): string;
export declare function nameChangeFromJSON(jsonString: string): SafeParseResult<NameChange, SDKValidationError>;
/** @internal */
export declare const OriginalProcessDate$inboundSchema: z.ZodType<OriginalProcessDate, z.ZodTypeDef, unknown>;
/** @internal */
export type OriginalProcessDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const OriginalProcessDate$outboundSchema: z.ZodType<OriginalProcessDate$Outbound, z.ZodTypeDef, OriginalProcessDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OriginalProcessDate$ {
    /** @deprecated use `OriginalProcessDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OriginalProcessDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `OriginalProcessDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OriginalProcessDate$Outbound, z.ZodTypeDef, OriginalProcessDate>;
    /** @deprecated use `OriginalProcessDate$Outbound` instead. */
    type Outbound = OriginalProcessDate$Outbound;
}
export declare function originalProcessDateToJSON(originalProcessDate: OriginalProcessDate): string;
export declare function originalProcessDateFromJSON(jsonString: string): SafeParseResult<OriginalProcessDate, SDKValidationError>;
/** @internal */
export declare const EntryPaymentInKindCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryPaymentInKindCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPaymentInKindCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryPaymentInKindCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryPaymentInKindCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryPaymentInKindCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPaymentInKindCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryPaymentInKindCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPaymentInKindCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPaymentInKindCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPaymentInKindCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryPaymentInKindCorporateActionGeneralInformation>;
    /** @deprecated use `EntryPaymentInKindCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryPaymentInKindCorporateActionGeneralInformation$Outbound;
}
export declare function entryPaymentInKindCorporateActionGeneralInformationToJSON(entryPaymentInKindCorporateActionGeneralInformation: EntryPaymentInKindCorporateActionGeneralInformation): string;
export declare function entryPaymentInKindCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryPaymentInKindCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryPaymentInKindPaymentDate$inboundSchema: z.ZodType<EntryPaymentInKindPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPaymentInKindPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryPaymentInKindPaymentDate$outboundSchema: z.ZodType<EntryPaymentInKindPaymentDate$Outbound, z.ZodTypeDef, EntryPaymentInKindPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPaymentInKindPaymentDate$ {
    /** @deprecated use `EntryPaymentInKindPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPaymentInKindPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPaymentInKindPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPaymentInKindPaymentDate$Outbound, z.ZodTypeDef, EntryPaymentInKindPaymentDate>;
    /** @deprecated use `EntryPaymentInKindPaymentDate$Outbound` instead. */
    type Outbound = EntryPaymentInKindPaymentDate$Outbound;
}
export declare function entryPaymentInKindPaymentDateToJSON(entryPaymentInKindPaymentDate: EntryPaymentInKindPaymentDate): string;
export declare function entryPaymentInKindPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryPaymentInKindPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryPaymentInKindRecordDate$inboundSchema: z.ZodType<EntryPaymentInKindRecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPaymentInKindRecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryPaymentInKindRecordDate$outboundSchema: z.ZodType<EntryPaymentInKindRecordDate$Outbound, z.ZodTypeDef, EntryPaymentInKindRecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPaymentInKindRecordDate$ {
    /** @deprecated use `EntryPaymentInKindRecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPaymentInKindRecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPaymentInKindRecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPaymentInKindRecordDate$Outbound, z.ZodTypeDef, EntryPaymentInKindRecordDate>;
    /** @deprecated use `EntryPaymentInKindRecordDate$Outbound` instead. */
    type Outbound = EntryPaymentInKindRecordDate$Outbound;
}
export declare function entryPaymentInKindRecordDateToJSON(entryPaymentInKindRecordDate: EntryPaymentInKindRecordDate): string;
export declare function entryPaymentInKindRecordDateFromJSON(jsonString: string): SafeParseResult<EntryPaymentInKindRecordDate, SDKValidationError>;
/** @internal */
export declare const EntryPaymentInKindSettled$inboundSchema: z.ZodType<EntryPaymentInKindSettled, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPaymentInKindSettled$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryPaymentInKindSettled$outboundSchema: z.ZodType<EntryPaymentInKindSettled$Outbound, z.ZodTypeDef, EntryPaymentInKindSettled>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPaymentInKindSettled$ {
    /** @deprecated use `EntryPaymentInKindSettled$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPaymentInKindSettled, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPaymentInKindSettled$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPaymentInKindSettled$Outbound, z.ZodTypeDef, EntryPaymentInKindSettled>;
    /** @deprecated use `EntryPaymentInKindSettled$Outbound` instead. */
    type Outbound = EntryPaymentInKindSettled$Outbound;
}
export declare function entryPaymentInKindSettledToJSON(entryPaymentInKindSettled: EntryPaymentInKindSettled): string;
export declare function entryPaymentInKindSettledFromJSON(jsonString: string): SafeParseResult<EntryPaymentInKindSettled, SDKValidationError>;
/** @internal */
export declare const EntryPaymentInKindStockRate$inboundSchema: z.ZodType<EntryPaymentInKindStockRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPaymentInKindStockRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryPaymentInKindStockRate$outboundSchema: z.ZodType<EntryPaymentInKindStockRate$Outbound, z.ZodTypeDef, EntryPaymentInKindStockRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPaymentInKindStockRate$ {
    /** @deprecated use `EntryPaymentInKindStockRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPaymentInKindStockRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPaymentInKindStockRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPaymentInKindStockRate$Outbound, z.ZodTypeDef, EntryPaymentInKindStockRate>;
    /** @deprecated use `EntryPaymentInKindStockRate$Outbound` instead. */
    type Outbound = EntryPaymentInKindStockRate$Outbound;
}
export declare function entryPaymentInKindStockRateToJSON(entryPaymentInKindStockRate: EntryPaymentInKindStockRate): string;
export declare function entryPaymentInKindStockRateFromJSON(jsonString: string): SafeParseResult<EntryPaymentInKindStockRate, SDKValidationError>;
/** @internal */
export declare const PaymentInKind$inboundSchema: z.ZodType<PaymentInKind, z.ZodTypeDef, unknown>;
/** @internal */
export type PaymentInKind$Outbound = {
    corporate_action_general_information?: EntryPaymentInKindCorporateActionGeneralInformation$Outbound | null | undefined;
    payment_date?: EntryPaymentInKindPaymentDate$Outbound | null | undefined;
    record_date?: EntryPaymentInKindRecordDate$Outbound | null | undefined;
    settled?: EntryPaymentInKindSettled$Outbound | null | undefined;
    stock_rate?: EntryPaymentInKindStockRate$Outbound | null | undefined;
};
/** @internal */
export declare const PaymentInKind$outboundSchema: z.ZodType<PaymentInKind$Outbound, z.ZodTypeDef, PaymentInKind>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PaymentInKind$ {
    /** @deprecated use `PaymentInKind$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PaymentInKind, z.ZodTypeDef, unknown>;
    /** @deprecated use `PaymentInKind$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PaymentInKind$Outbound, z.ZodTypeDef, PaymentInKind>;
    /** @deprecated use `PaymentInKind$Outbound` instead. */
    type Outbound = PaymentInKind$Outbound;
}
export declare function paymentInKindToJSON(paymentInKind: PaymentInKind): string;
export declare function paymentInKindFromJSON(jsonString: string): SafeParseResult<PaymentInKind, SDKValidationError>;
/** @internal */
export declare const EntryPrice$inboundSchema: z.ZodType<EntryPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryPrice$outboundSchema: z.ZodType<EntryPrice$Outbound, z.ZodTypeDef, EntryPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPrice$ {
    /** @deprecated use `EntryPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPrice$Outbound, z.ZodTypeDef, EntryPrice>;
    /** @deprecated use `EntryPrice$Outbound` instead. */
    type Outbound = EntryPrice$Outbound;
}
export declare function entryPriceToJSON(entryPrice: EntryPrice): string;
export declare function entryPriceFromJSON(jsonString: string): SafeParseResult<EntryPrice, SDKValidationError>;
/** @internal */
export declare const EntryProcessDate$inboundSchema: z.ZodType<EntryProcessDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryProcessDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryProcessDate$outboundSchema: z.ZodType<EntryProcessDate$Outbound, z.ZodTypeDef, EntryProcessDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryProcessDate$ {
    /** @deprecated use `EntryProcessDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryProcessDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryProcessDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryProcessDate$Outbound, z.ZodTypeDef, EntryProcessDate>;
    /** @deprecated use `EntryProcessDate$Outbound` instead. */
    type Outbound = EntryProcessDate$Outbound;
}
export declare function entryProcessDateToJSON(entryProcessDate: EntryProcessDate): string;
export declare function entryProcessDateFromJSON(jsonString: string): SafeParseResult<EntryProcessDate, SDKValidationError>;
/** @internal */
export declare const EntryQuantity$inboundSchema: z.ZodType<EntryQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryQuantity$outboundSchema: z.ZodType<EntryQuantity$Outbound, z.ZodTypeDef, EntryQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryQuantity$ {
    /** @deprecated use `EntryQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryQuantity$Outbound, z.ZodTypeDef, EntryQuantity>;
    /** @deprecated use `EntryQuantity$Outbound` instead. */
    type Outbound = EntryQuantity$Outbound;
}
export declare function entryQuantityToJSON(entryQuantity: EntryQuantity): string;
export declare function entryQuantityFromJSON(jsonString: string): SafeParseResult<EntryQuantity, SDKValidationError>;
/** @internal */
export declare const Receive$inboundSchema: z.ZodType<Receive, z.ZodTypeDef, unknown>;
/** @internal */
export type Receive$Outbound = {};
/** @internal */
export declare const Receive$outboundSchema: z.ZodType<Receive$Outbound, z.ZodTypeDef, Receive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Receive$ {
    /** @deprecated use `Receive$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Receive, z.ZodTypeDef, unknown>;
    /** @deprecated use `Receive$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Receive$Outbound, z.ZodTypeDef, Receive>;
    /** @deprecated use `Receive$Outbound` instead. */
    type Outbound = Receive$Outbound;
}
export declare function receiveToJSON(receive: Receive): string;
export declare function receiveFromJSON(jsonString: string): SafeParseResult<Receive, SDKValidationError>;
/** @internal */
export declare const EntryRedemptionFullAction$inboundSchema: z.ZodType<EntryRedemptionFullActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryRedemptionFullAction$outboundSchema: z.ZodType<EntryRedemptionFullActionOpen, z.ZodTypeDef, EntryRedemptionFullActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionFullAction$ {
    /** @deprecated use `EntryRedemptionFullAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionFullActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionFullAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionFullActionOpen, z.ZodTypeDef, EntryRedemptionFullActionOpen>;
}
/** @internal */
export declare const EntryRedemptionFullCashRate$inboundSchema: z.ZodType<EntryRedemptionFullCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRedemptionFullCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryRedemptionFullCashRate$outboundSchema: z.ZodType<EntryRedemptionFullCashRate$Outbound, z.ZodTypeDef, EntryRedemptionFullCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionFullCashRate$ {
    /** @deprecated use `EntryRedemptionFullCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionFullCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionFullCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionFullCashRate$Outbound, z.ZodTypeDef, EntryRedemptionFullCashRate>;
    /** @deprecated use `EntryRedemptionFullCashRate$Outbound` instead. */
    type Outbound = EntryRedemptionFullCashRate$Outbound;
}
export declare function entryRedemptionFullCashRateToJSON(entryRedemptionFullCashRate: EntryRedemptionFullCashRate): string;
export declare function entryRedemptionFullCashRateFromJSON(jsonString: string): SafeParseResult<EntryRedemptionFullCashRate, SDKValidationError>;
/** @internal */
export declare const EntryRedemptionFullCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryRedemptionFullCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRedemptionFullCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryRedemptionFullCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryRedemptionFullCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryRedemptionFullCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionFullCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryRedemptionFullCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionFullCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionFullCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionFullCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryRedemptionFullCorporateActionGeneralInformation>;
    /** @deprecated use `EntryRedemptionFullCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryRedemptionFullCorporateActionGeneralInformation$Outbound;
}
export declare function entryRedemptionFullCorporateActionGeneralInformationToJSON(entryRedemptionFullCorporateActionGeneralInformation: EntryRedemptionFullCorporateActionGeneralInformation): string;
export declare function entryRedemptionFullCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryRedemptionFullCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryRedemptionFullPaymentDate$inboundSchema: z.ZodType<EntryRedemptionFullPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRedemptionFullPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryRedemptionFullPaymentDate$outboundSchema: z.ZodType<EntryRedemptionFullPaymentDate$Outbound, z.ZodTypeDef, EntryRedemptionFullPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionFullPaymentDate$ {
    /** @deprecated use `EntryRedemptionFullPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionFullPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionFullPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionFullPaymentDate$Outbound, z.ZodTypeDef, EntryRedemptionFullPaymentDate>;
    /** @deprecated use `EntryRedemptionFullPaymentDate$Outbound` instead. */
    type Outbound = EntryRedemptionFullPaymentDate$Outbound;
}
export declare function entryRedemptionFullPaymentDateToJSON(entryRedemptionFullPaymentDate: EntryRedemptionFullPaymentDate): string;
export declare function entryRedemptionFullPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryRedemptionFullPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryRedemptionFullQuantity$inboundSchema: z.ZodType<EntryRedemptionFullQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRedemptionFullQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryRedemptionFullQuantity$outboundSchema: z.ZodType<EntryRedemptionFullQuantity$Outbound, z.ZodTypeDef, EntryRedemptionFullQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionFullQuantity$ {
    /** @deprecated use `EntryRedemptionFullQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionFullQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionFullQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionFullQuantity$Outbound, z.ZodTypeDef, EntryRedemptionFullQuantity>;
    /** @deprecated use `EntryRedemptionFullQuantity$Outbound` instead. */
    type Outbound = EntryRedemptionFullQuantity$Outbound;
}
export declare function entryRedemptionFullQuantityToJSON(entryRedemptionFullQuantity: EntryRedemptionFullQuantity): string;
export declare function entryRedemptionFullQuantityFromJSON(jsonString: string): SafeParseResult<EntryRedemptionFullQuantity, SDKValidationError>;
/** @internal */
export declare const EntryRedemptionFullSubtype$inboundSchema: z.ZodType<EntryRedemptionFullSubtypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryRedemptionFullSubtype$outboundSchema: z.ZodType<EntryRedemptionFullSubtypeOpen, z.ZodTypeDef, EntryRedemptionFullSubtypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionFullSubtype$ {
    /** @deprecated use `EntryRedemptionFullSubtype$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionFullSubtypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionFullSubtype$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionFullSubtypeOpen, z.ZodTypeDef, EntryRedemptionFullSubtypeOpen>;
}
/** @internal */
export declare const RedemptionFull$inboundSchema: z.ZodType<RedemptionFull, z.ZodTypeDef, unknown>;
/** @internal */
export type RedemptionFull$Outbound = {
    action?: string | undefined;
    cash_rate?: EntryRedemptionFullCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryRedemptionFullCorporateActionGeneralInformation$Outbound | null | undefined;
    payment_date?: EntryRedemptionFullPaymentDate$Outbound | null | undefined;
    quantity?: EntryRedemptionFullQuantity$Outbound | null | undefined;
    subtype?: string | undefined;
};
/** @internal */
export declare const RedemptionFull$outboundSchema: z.ZodType<RedemptionFull$Outbound, z.ZodTypeDef, RedemptionFull>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RedemptionFull$ {
    /** @deprecated use `RedemptionFull$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RedemptionFull, z.ZodTypeDef, unknown>;
    /** @deprecated use `RedemptionFull$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RedemptionFull$Outbound, z.ZodTypeDef, RedemptionFull>;
    /** @deprecated use `RedemptionFull$Outbound` instead. */
    type Outbound = RedemptionFull$Outbound;
}
export declare function redemptionFullToJSON(redemptionFull: RedemptionFull): string;
export declare function redemptionFullFromJSON(jsonString: string): SafeParseResult<RedemptionFull, SDKValidationError>;
/** @internal */
export declare const EntryRedemptionPartialAction$inboundSchema: z.ZodType<EntryRedemptionPartialActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryRedemptionPartialAction$outboundSchema: z.ZodType<EntryRedemptionPartialActionOpen, z.ZodTypeDef, EntryRedemptionPartialActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionPartialAction$ {
    /** @deprecated use `EntryRedemptionPartialAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionPartialActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionPartialAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionPartialActionOpen, z.ZodTypeDef, EntryRedemptionPartialActionOpen>;
}
/** @internal */
export declare const EntryRedemptionPartialCashRate$inboundSchema: z.ZodType<EntryRedemptionPartialCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRedemptionPartialCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryRedemptionPartialCashRate$outboundSchema: z.ZodType<EntryRedemptionPartialCashRate$Outbound, z.ZodTypeDef, EntryRedemptionPartialCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionPartialCashRate$ {
    /** @deprecated use `EntryRedemptionPartialCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionPartialCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionPartialCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionPartialCashRate$Outbound, z.ZodTypeDef, EntryRedemptionPartialCashRate>;
    /** @deprecated use `EntryRedemptionPartialCashRate$Outbound` instead. */
    type Outbound = EntryRedemptionPartialCashRate$Outbound;
}
export declare function entryRedemptionPartialCashRateToJSON(entryRedemptionPartialCashRate: EntryRedemptionPartialCashRate): string;
export declare function entryRedemptionPartialCashRateFromJSON(jsonString: string): SafeParseResult<EntryRedemptionPartialCashRate, SDKValidationError>;
/** @internal */
export declare const EntryRedemptionPartialCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryRedemptionPartialCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRedemptionPartialCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryRedemptionPartialCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryRedemptionPartialCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryRedemptionPartialCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionPartialCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryRedemptionPartialCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionPartialCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionPartialCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionPartialCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryRedemptionPartialCorporateActionGeneralInformation>;
    /** @deprecated use `EntryRedemptionPartialCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryRedemptionPartialCorporateActionGeneralInformation$Outbound;
}
export declare function entryRedemptionPartialCorporateActionGeneralInformationToJSON(entryRedemptionPartialCorporateActionGeneralInformation: EntryRedemptionPartialCorporateActionGeneralInformation): string;
export declare function entryRedemptionPartialCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryRedemptionPartialCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryRedemptionPartialPaymentDate$inboundSchema: z.ZodType<EntryRedemptionPartialPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRedemptionPartialPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryRedemptionPartialPaymentDate$outboundSchema: z.ZodType<EntryRedemptionPartialPaymentDate$Outbound, z.ZodTypeDef, EntryRedemptionPartialPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionPartialPaymentDate$ {
    /** @deprecated use `EntryRedemptionPartialPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionPartialPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionPartialPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionPartialPaymentDate$Outbound, z.ZodTypeDef, EntryRedemptionPartialPaymentDate>;
    /** @deprecated use `EntryRedemptionPartialPaymentDate$Outbound` instead. */
    type Outbound = EntryRedemptionPartialPaymentDate$Outbound;
}
export declare function entryRedemptionPartialPaymentDateToJSON(entryRedemptionPartialPaymentDate: EntryRedemptionPartialPaymentDate): string;
export declare function entryRedemptionPartialPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryRedemptionPartialPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryRedemptionPartialQuantity$inboundSchema: z.ZodType<EntryRedemptionPartialQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRedemptionPartialQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryRedemptionPartialQuantity$outboundSchema: z.ZodType<EntryRedemptionPartialQuantity$Outbound, z.ZodTypeDef, EntryRedemptionPartialQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRedemptionPartialQuantity$ {
    /** @deprecated use `EntryRedemptionPartialQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRedemptionPartialQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRedemptionPartialQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRedemptionPartialQuantity$Outbound, z.ZodTypeDef, EntryRedemptionPartialQuantity>;
    /** @deprecated use `EntryRedemptionPartialQuantity$Outbound` instead. */
    type Outbound = EntryRedemptionPartialQuantity$Outbound;
}
export declare function entryRedemptionPartialQuantityToJSON(entryRedemptionPartialQuantity: EntryRedemptionPartialQuantity): string;
export declare function entryRedemptionPartialQuantityFromJSON(jsonString: string): SafeParseResult<EntryRedemptionPartialQuantity, SDKValidationError>;
/** @internal */
export declare const RedemptionPartial$inboundSchema: z.ZodType<RedemptionPartial, z.ZodTypeDef, unknown>;
/** @internal */
export type RedemptionPartial$Outbound = {
    action?: string | undefined;
    cash_rate?: EntryRedemptionPartialCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryRedemptionPartialCorporateActionGeneralInformation$Outbound | null | undefined;
    payment_date?: EntryRedemptionPartialPaymentDate$Outbound | null | undefined;
    quantity?: EntryRedemptionPartialQuantity$Outbound | null | undefined;
};
/** @internal */
export declare const RedemptionPartial$outboundSchema: z.ZodType<RedemptionPartial$Outbound, z.ZodTypeDef, RedemptionPartial>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RedemptionPartial$ {
    /** @deprecated use `RedemptionPartial$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RedemptionPartial, z.ZodTypeDef, unknown>;
    /** @deprecated use `RedemptionPartial$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RedemptionPartial$Outbound, z.ZodTypeDef, RedemptionPartial>;
    /** @deprecated use `RedemptionPartial$Outbound` instead. */
    type Outbound = RedemptionPartial$Outbound;
}
export declare function redemptionPartialToJSON(redemptionPartial: RedemptionPartial): string;
export declare function redemptionPartialFromJSON(jsonString: string): SafeParseResult<RedemptionPartial, SDKValidationError>;
/** @internal */
export declare const EntryReverseStockSplitAction$inboundSchema: z.ZodType<EntryReverseStockSplitActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryReverseStockSplitAction$outboundSchema: z.ZodType<EntryReverseStockSplitActionOpen, z.ZodTypeDef, EntryReverseStockSplitActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryReverseStockSplitAction$ {
    /** @deprecated use `EntryReverseStockSplitAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryReverseStockSplitActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryReverseStockSplitAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryReverseStockSplitActionOpen, z.ZodTypeDef, EntryReverseStockSplitActionOpen>;
}
/** @internal */
export declare const EntryReverseStockSplitCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryReverseStockSplitCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryReverseStockSplitCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryReverseStockSplitCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryReverseStockSplitCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryReverseStockSplitCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryReverseStockSplitCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryReverseStockSplitCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryReverseStockSplitCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryReverseStockSplitCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryReverseStockSplitCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryReverseStockSplitCorporateActionGeneralInformation>;
    /** @deprecated use `EntryReverseStockSplitCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryReverseStockSplitCorporateActionGeneralInformation$Outbound;
}
export declare function entryReverseStockSplitCorporateActionGeneralInformationToJSON(entryReverseStockSplitCorporateActionGeneralInformation: EntryReverseStockSplitCorporateActionGeneralInformation): string;
export declare function entryReverseStockSplitCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryReverseStockSplitCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryReverseStockSplitEffectiveDate$inboundSchema: z.ZodType<EntryReverseStockSplitEffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryReverseStockSplitEffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryReverseStockSplitEffectiveDate$outboundSchema: z.ZodType<EntryReverseStockSplitEffectiveDate$Outbound, z.ZodTypeDef, EntryReverseStockSplitEffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryReverseStockSplitEffectiveDate$ {
    /** @deprecated use `EntryReverseStockSplitEffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryReverseStockSplitEffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryReverseStockSplitEffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryReverseStockSplitEffectiveDate$Outbound, z.ZodTypeDef, EntryReverseStockSplitEffectiveDate>;
    /** @deprecated use `EntryReverseStockSplitEffectiveDate$Outbound` instead. */
    type Outbound = EntryReverseStockSplitEffectiveDate$Outbound;
}
export declare function entryReverseStockSplitEffectiveDateToJSON(entryReverseStockSplitEffectiveDate: EntryReverseStockSplitEffectiveDate): string;
export declare function entryReverseStockSplitEffectiveDateFromJSON(jsonString: string): SafeParseResult<EntryReverseStockSplitEffectiveDate, SDKValidationError>;
/** @internal */
export declare const FactorDenominator$inboundSchema: z.ZodType<FactorDenominator, z.ZodTypeDef, unknown>;
/** @internal */
export type FactorDenominator$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const FactorDenominator$outboundSchema: z.ZodType<FactorDenominator$Outbound, z.ZodTypeDef, FactorDenominator>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FactorDenominator$ {
    /** @deprecated use `FactorDenominator$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FactorDenominator, z.ZodTypeDef, unknown>;
    /** @deprecated use `FactorDenominator$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FactorDenominator$Outbound, z.ZodTypeDef, FactorDenominator>;
    /** @deprecated use `FactorDenominator$Outbound` instead. */
    type Outbound = FactorDenominator$Outbound;
}
export declare function factorDenominatorToJSON(factorDenominator: FactorDenominator): string;
export declare function factorDenominatorFromJSON(jsonString: string): SafeParseResult<FactorDenominator, SDKValidationError>;
/** @internal */
export declare const FactorNumerator$inboundSchema: z.ZodType<FactorNumerator, z.ZodTypeDef, unknown>;
/** @internal */
export type FactorNumerator$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const FactorNumerator$outboundSchema: z.ZodType<FactorNumerator$Outbound, z.ZodTypeDef, FactorNumerator>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FactorNumerator$ {
    /** @deprecated use `FactorNumerator$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FactorNumerator, z.ZodTypeDef, unknown>;
    /** @deprecated use `FactorNumerator$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FactorNumerator$Outbound, z.ZodTypeDef, FactorNumerator>;
    /** @deprecated use `FactorNumerator$Outbound` instead. */
    type Outbound = FactorNumerator$Outbound;
}
export declare function factorNumeratorToJSON(factorNumerator: FactorNumerator): string;
export declare function factorNumeratorFromJSON(jsonString: string): SafeParseResult<FactorNumerator, SDKValidationError>;
/** @internal */
export declare const EntryReverseStockSplitQuantity$inboundSchema: z.ZodType<EntryReverseStockSplitQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryReverseStockSplitQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryReverseStockSplitQuantity$outboundSchema: z.ZodType<EntryReverseStockSplitQuantity$Outbound, z.ZodTypeDef, EntryReverseStockSplitQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryReverseStockSplitQuantity$ {
    /** @deprecated use `EntryReverseStockSplitQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryReverseStockSplitQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryReverseStockSplitQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryReverseStockSplitQuantity$Outbound, z.ZodTypeDef, EntryReverseStockSplitQuantity>;
    /** @deprecated use `EntryReverseStockSplitQuantity$Outbound` instead. */
    type Outbound = EntryReverseStockSplitQuantity$Outbound;
}
export declare function entryReverseStockSplitQuantityToJSON(entryReverseStockSplitQuantity: EntryReverseStockSplitQuantity): string;
export declare function entryReverseStockSplitQuantityFromJSON(jsonString: string): SafeParseResult<EntryReverseStockSplitQuantity, SDKValidationError>;
/** @internal */
export declare const EntryReverseStockSplitStockRate$inboundSchema: z.ZodType<EntryReverseStockSplitStockRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryReverseStockSplitStockRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryReverseStockSplitStockRate$outboundSchema: z.ZodType<EntryReverseStockSplitStockRate$Outbound, z.ZodTypeDef, EntryReverseStockSplitStockRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryReverseStockSplitStockRate$ {
    /** @deprecated use `EntryReverseStockSplitStockRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryReverseStockSplitStockRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryReverseStockSplitStockRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryReverseStockSplitStockRate$Outbound, z.ZodTypeDef, EntryReverseStockSplitStockRate>;
    /** @deprecated use `EntryReverseStockSplitStockRate$Outbound` instead. */
    type Outbound = EntryReverseStockSplitStockRate$Outbound;
}
export declare function entryReverseStockSplitStockRateToJSON(entryReverseStockSplitStockRate: EntryReverseStockSplitStockRate): string;
export declare function entryReverseStockSplitStockRateFromJSON(jsonString: string): SafeParseResult<EntryReverseStockSplitStockRate, SDKValidationError>;
/** @internal */
export declare const ReverseStockSplit$inboundSchema: z.ZodType<ReverseStockSplit, z.ZodTypeDef, unknown>;
/** @internal */
export type ReverseStockSplit$Outbound = {
    action?: string | undefined;
    corporate_action_general_information?: EntryReverseStockSplitCorporateActionGeneralInformation$Outbound | null | undefined;
    effective_date?: EntryReverseStockSplitEffectiveDate$Outbound | null | undefined;
    factor_denominator?: FactorDenominator$Outbound | null | undefined;
    factor_numerator?: FactorNumerator$Outbound | null | undefined;
    quantity?: EntryReverseStockSplitQuantity$Outbound | null | undefined;
    stock_rate?: EntryReverseStockSplitStockRate$Outbound | null | undefined;
};
/** @internal */
export declare const ReverseStockSplit$outboundSchema: z.ZodType<ReverseStockSplit$Outbound, z.ZodTypeDef, ReverseStockSplit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReverseStockSplit$ {
    /** @deprecated use `ReverseStockSplit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReverseStockSplit, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReverseStockSplit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReverseStockSplit$Outbound, z.ZodTypeDef, ReverseStockSplit>;
    /** @deprecated use `ReverseStockSplit$Outbound` instead. */
    type Outbound = ReverseStockSplit$Outbound;
}
export declare function reverseStockSplitToJSON(reverseStockSplit: ReverseStockSplit): string;
export declare function reverseStockSplitFromJSON(jsonString: string): SafeParseResult<ReverseStockSplit, SDKValidationError>;
/** @internal */
export declare const EntryRightsDistributionCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryRightsDistributionCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRightsDistributionCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryRightsDistributionCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryRightsDistributionCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryRightsDistributionCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRightsDistributionCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryRightsDistributionCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRightsDistributionCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRightsDistributionCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRightsDistributionCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryRightsDistributionCorporateActionGeneralInformation>;
    /** @deprecated use `EntryRightsDistributionCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryRightsDistributionCorporateActionGeneralInformation$Outbound;
}
export declare function entryRightsDistributionCorporateActionGeneralInformationToJSON(entryRightsDistributionCorporateActionGeneralInformation: EntryRightsDistributionCorporateActionGeneralInformation): string;
export declare function entryRightsDistributionCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryRightsDistributionCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryRightsDistributionPaymentDate$inboundSchema: z.ZodType<EntryRightsDistributionPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRightsDistributionPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryRightsDistributionPaymentDate$outboundSchema: z.ZodType<EntryRightsDistributionPaymentDate$Outbound, z.ZodTypeDef, EntryRightsDistributionPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRightsDistributionPaymentDate$ {
    /** @deprecated use `EntryRightsDistributionPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRightsDistributionPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRightsDistributionPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRightsDistributionPaymentDate$Outbound, z.ZodTypeDef, EntryRightsDistributionPaymentDate>;
    /** @deprecated use `EntryRightsDistributionPaymentDate$Outbound` instead. */
    type Outbound = EntryRightsDistributionPaymentDate$Outbound;
}
export declare function entryRightsDistributionPaymentDateToJSON(entryRightsDistributionPaymentDate: EntryRightsDistributionPaymentDate): string;
export declare function entryRightsDistributionPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryRightsDistributionPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntryRightsDistributionRecordDate$inboundSchema: z.ZodType<EntryRightsDistributionRecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRightsDistributionRecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryRightsDistributionRecordDate$outboundSchema: z.ZodType<EntryRightsDistributionRecordDate$Outbound, z.ZodTypeDef, EntryRightsDistributionRecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRightsDistributionRecordDate$ {
    /** @deprecated use `EntryRightsDistributionRecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRightsDistributionRecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRightsDistributionRecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRightsDistributionRecordDate$Outbound, z.ZodTypeDef, EntryRightsDistributionRecordDate>;
    /** @deprecated use `EntryRightsDistributionRecordDate$Outbound` instead. */
    type Outbound = EntryRightsDistributionRecordDate$Outbound;
}
export declare function entryRightsDistributionRecordDateToJSON(entryRightsDistributionRecordDate: EntryRightsDistributionRecordDate): string;
export declare function entryRightsDistributionRecordDateFromJSON(jsonString: string): SafeParseResult<EntryRightsDistributionRecordDate, SDKValidationError>;
/** @internal */
export declare const EntryRightsDistributionSettled$inboundSchema: z.ZodType<EntryRightsDistributionSettled, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRightsDistributionSettled$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryRightsDistributionSettled$outboundSchema: z.ZodType<EntryRightsDistributionSettled$Outbound, z.ZodTypeDef, EntryRightsDistributionSettled>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRightsDistributionSettled$ {
    /** @deprecated use `EntryRightsDistributionSettled$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRightsDistributionSettled, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRightsDistributionSettled$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRightsDistributionSettled$Outbound, z.ZodTypeDef, EntryRightsDistributionSettled>;
    /** @deprecated use `EntryRightsDistributionSettled$Outbound` instead. */
    type Outbound = EntryRightsDistributionSettled$Outbound;
}
export declare function entryRightsDistributionSettledToJSON(entryRightsDistributionSettled: EntryRightsDistributionSettled): string;
export declare function entryRightsDistributionSettledFromJSON(jsonString: string): SafeParseResult<EntryRightsDistributionSettled, SDKValidationError>;
/** @internal */
export declare const RightsDistribution$inboundSchema: z.ZodType<RightsDistribution, z.ZodTypeDef, unknown>;
/** @internal */
export type RightsDistribution$Outbound = {
    corporate_action_general_information?: EntryRightsDistributionCorporateActionGeneralInformation$Outbound | null | undefined;
    payment_date?: EntryRightsDistributionPaymentDate$Outbound | null | undefined;
    record_date?: EntryRightsDistributionRecordDate$Outbound | null | undefined;
    settled?: EntryRightsDistributionSettled$Outbound | null | undefined;
};
/** @internal */
export declare const RightsDistribution$outboundSchema: z.ZodType<RightsDistribution$Outbound, z.ZodTypeDef, RightsDistribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RightsDistribution$ {
    /** @deprecated use `RightsDistribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RightsDistribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `RightsDistribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RightsDistribution$Outbound, z.ZodTypeDef, RightsDistribution>;
    /** @deprecated use `RightsDistribution$Outbound` instead. */
    type Outbound = RightsDistribution$Outbound;
}
export declare function rightsDistributionToJSON(rightsDistribution: RightsDistribution): string;
export declare function rightsDistributionFromJSON(jsonString: string): SafeParseResult<RightsDistribution, SDKValidationError>;
/** @internal */
export declare const EntryRightsSubscriptionCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryRightsSubscriptionCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRightsSubscriptionCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryRightsSubscriptionCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryRightsSubscriptionCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryRightsSubscriptionCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRightsSubscriptionCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryRightsSubscriptionCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRightsSubscriptionCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRightsSubscriptionCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRightsSubscriptionCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryRightsSubscriptionCorporateActionGeneralInformation>;
    /** @deprecated use `EntryRightsSubscriptionCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryRightsSubscriptionCorporateActionGeneralInformation$Outbound;
}
export declare function entryRightsSubscriptionCorporateActionGeneralInformationToJSON(entryRightsSubscriptionCorporateActionGeneralInformation: EntryRightsSubscriptionCorporateActionGeneralInformation): string;
export declare function entryRightsSubscriptionCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryRightsSubscriptionCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const RightsSubscription$inboundSchema: z.ZodType<RightsSubscription, z.ZodTypeDef, unknown>;
/** @internal */
export type RightsSubscription$Outbound = {
    corporate_action_general_information?: EntryRightsSubscriptionCorporateActionGeneralInformation$Outbound | null | undefined;
};
/** @internal */
export declare const RightsSubscription$outboundSchema: z.ZodType<RightsSubscription$Outbound, z.ZodTypeDef, RightsSubscription>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RightsSubscription$ {
    /** @deprecated use `RightsSubscription$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RightsSubscription, z.ZodTypeDef, unknown>;
    /** @deprecated use `RightsSubscription$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RightsSubscription$Outbound, z.ZodTypeDef, RightsSubscription>;
    /** @deprecated use `RightsSubscription$Outbound` instead. */
    type Outbound = RightsSubscription$Outbound;
}
export declare function rightsSubscriptionToJSON(rightsSubscription: RightsSubscription): string;
export declare function rightsSubscriptionFromJSON(jsonString: string): SafeParseResult<RightsSubscription, SDKValidationError>;
/** @internal */
export declare const RoundingAdjustment$inboundSchema: z.ZodType<RoundingAdjustment, z.ZodTypeDef, unknown>;
/** @internal */
export type RoundingAdjustment$Outbound = {
    rounding_reason?: string | undefined;
};
/** @internal */
export declare const RoundingAdjustment$outboundSchema: z.ZodType<RoundingAdjustment$Outbound, z.ZodTypeDef, RoundingAdjustment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RoundingAdjustment$ {
    /** @deprecated use `RoundingAdjustment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RoundingAdjustment, z.ZodTypeDef, unknown>;
    /** @deprecated use `RoundingAdjustment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RoundingAdjustment$Outbound, z.ZodTypeDef, RoundingAdjustment>;
    /** @deprecated use `RoundingAdjustment$Outbound` instead. */
    type Outbound = RoundingAdjustment$Outbound;
}
export declare function roundingAdjustmentToJSON(roundingAdjustment: RoundingAdjustment): string;
export declare function roundingAdjustmentFromJSON(jsonString: string): SafeParseResult<RoundingAdjustment, SDKValidationError>;
/** @internal */
export declare const EntrySaleOfRightsCashRate$inboundSchema: z.ZodType<EntrySaleOfRightsCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySaleOfRightsCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntrySaleOfRightsCashRate$outboundSchema: z.ZodType<EntrySaleOfRightsCashRate$Outbound, z.ZodTypeDef, EntrySaleOfRightsCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySaleOfRightsCashRate$ {
    /** @deprecated use `EntrySaleOfRightsCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySaleOfRightsCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySaleOfRightsCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySaleOfRightsCashRate$Outbound, z.ZodTypeDef, EntrySaleOfRightsCashRate>;
    /** @deprecated use `EntrySaleOfRightsCashRate$Outbound` instead. */
    type Outbound = EntrySaleOfRightsCashRate$Outbound;
}
export declare function entrySaleOfRightsCashRateToJSON(entrySaleOfRightsCashRate: EntrySaleOfRightsCashRate): string;
export declare function entrySaleOfRightsCashRateFromJSON(jsonString: string): SafeParseResult<EntrySaleOfRightsCashRate, SDKValidationError>;
/** @internal */
export declare const EntrySaleOfRightsCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntrySaleOfRightsCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySaleOfRightsCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntrySaleOfRightsCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntrySaleOfRightsCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntrySaleOfRightsCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySaleOfRightsCorporateActionGeneralInformation$ {
    /** @deprecated use `EntrySaleOfRightsCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySaleOfRightsCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySaleOfRightsCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySaleOfRightsCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntrySaleOfRightsCorporateActionGeneralInformation>;
    /** @deprecated use `EntrySaleOfRightsCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntrySaleOfRightsCorporateActionGeneralInformation$Outbound;
}
export declare function entrySaleOfRightsCorporateActionGeneralInformationToJSON(entrySaleOfRightsCorporateActionGeneralInformation: EntrySaleOfRightsCorporateActionGeneralInformation): string;
export declare function entrySaleOfRightsCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntrySaleOfRightsCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntrySaleOfRightsPaymentDate$inboundSchema: z.ZodType<EntrySaleOfRightsPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySaleOfRightsPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntrySaleOfRightsPaymentDate$outboundSchema: z.ZodType<EntrySaleOfRightsPaymentDate$Outbound, z.ZodTypeDef, EntrySaleOfRightsPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySaleOfRightsPaymentDate$ {
    /** @deprecated use `EntrySaleOfRightsPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySaleOfRightsPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySaleOfRightsPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySaleOfRightsPaymentDate$Outbound, z.ZodTypeDef, EntrySaleOfRightsPaymentDate>;
    /** @deprecated use `EntrySaleOfRightsPaymentDate$Outbound` instead. */
    type Outbound = EntrySaleOfRightsPaymentDate$Outbound;
}
export declare function entrySaleOfRightsPaymentDateToJSON(entrySaleOfRightsPaymentDate: EntrySaleOfRightsPaymentDate): string;
export declare function entrySaleOfRightsPaymentDateFromJSON(jsonString: string): SafeParseResult<EntrySaleOfRightsPaymentDate, SDKValidationError>;
/** @internal */
export declare const EntrySaleOfRightsRecordDate$inboundSchema: z.ZodType<EntrySaleOfRightsRecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySaleOfRightsRecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntrySaleOfRightsRecordDate$outboundSchema: z.ZodType<EntrySaleOfRightsRecordDate$Outbound, z.ZodTypeDef, EntrySaleOfRightsRecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySaleOfRightsRecordDate$ {
    /** @deprecated use `EntrySaleOfRightsRecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySaleOfRightsRecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySaleOfRightsRecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySaleOfRightsRecordDate$Outbound, z.ZodTypeDef, EntrySaleOfRightsRecordDate>;
    /** @deprecated use `EntrySaleOfRightsRecordDate$Outbound` instead. */
    type Outbound = EntrySaleOfRightsRecordDate$Outbound;
}
export declare function entrySaleOfRightsRecordDateToJSON(entrySaleOfRightsRecordDate: EntrySaleOfRightsRecordDate): string;
export declare function entrySaleOfRightsRecordDateFromJSON(jsonString: string): SafeParseResult<EntrySaleOfRightsRecordDate, SDKValidationError>;
/** @internal */
export declare const EntrySaleOfRightsSettled$inboundSchema: z.ZodType<EntrySaleOfRightsSettled, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySaleOfRightsSettled$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntrySaleOfRightsSettled$outboundSchema: z.ZodType<EntrySaleOfRightsSettled$Outbound, z.ZodTypeDef, EntrySaleOfRightsSettled>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySaleOfRightsSettled$ {
    /** @deprecated use `EntrySaleOfRightsSettled$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySaleOfRightsSettled, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySaleOfRightsSettled$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySaleOfRightsSettled$Outbound, z.ZodTypeDef, EntrySaleOfRightsSettled>;
    /** @deprecated use `EntrySaleOfRightsSettled$Outbound` instead. */
    type Outbound = EntrySaleOfRightsSettled$Outbound;
}
export declare function entrySaleOfRightsSettledToJSON(entrySaleOfRightsSettled: EntrySaleOfRightsSettled): string;
export declare function entrySaleOfRightsSettledFromJSON(jsonString: string): SafeParseResult<EntrySaleOfRightsSettled, SDKValidationError>;
/** @internal */
export declare const SaleOfRights$inboundSchema: z.ZodType<SaleOfRights, z.ZodTypeDef, unknown>;
/** @internal */
export type SaleOfRights$Outbound = {
    cash_rate?: EntrySaleOfRightsCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntrySaleOfRightsCorporateActionGeneralInformation$Outbound | null | undefined;
    payment_date?: EntrySaleOfRightsPaymentDate$Outbound | null | undefined;
    record_date?: EntrySaleOfRightsRecordDate$Outbound | null | undefined;
    settled?: EntrySaleOfRightsSettled$Outbound | null | undefined;
};
/** @internal */
export declare const SaleOfRights$outboundSchema: z.ZodType<SaleOfRights$Outbound, z.ZodTypeDef, SaleOfRights>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SaleOfRights$ {
    /** @deprecated use `SaleOfRights$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SaleOfRights, z.ZodTypeDef, unknown>;
    /** @deprecated use `SaleOfRights$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SaleOfRights$Outbound, z.ZodTypeDef, SaleOfRights>;
    /** @deprecated use `SaleOfRights$Outbound` instead. */
    type Outbound = SaleOfRights$Outbound;
}
export declare function saleOfRightsToJSON(saleOfRights: SaleOfRights): string;
export declare function saleOfRightsFromJSON(jsonString: string): SafeParseResult<SaleOfRights, SDKValidationError>;
/** @internal */
export declare const SettleDate$inboundSchema: z.ZodType<SettleDate, z.ZodTypeDef, unknown>;
/** @internal */
export type SettleDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const SettleDate$outboundSchema: z.ZodType<SettleDate$Outbound, z.ZodTypeDef, SettleDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SettleDate$ {
    /** @deprecated use `SettleDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SettleDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SettleDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SettleDate$Outbound, z.ZodTypeDef, SettleDate>;
    /** @deprecated use `SettleDate$Outbound` instead. */
    type Outbound = SettleDate$Outbound;
}
export declare function settleDateToJSON(settleDate: SettleDate): string;
export declare function settleDateFromJSON(jsonString: string): SafeParseResult<SettleDate, SDKValidationError>;
/** @internal */
export declare const EntrySide$inboundSchema: z.ZodType<EntrySideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntrySide$outboundSchema: z.ZodType<EntrySideOpen, z.ZodTypeDef, EntrySideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySide$ {
    /** @deprecated use `EntrySide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySideOpen, z.ZodTypeDef, EntrySideOpen>;
}
/** @internal */
export declare const EntrySideModifier$inboundSchema: z.ZodType<EntrySideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntrySideModifier$outboundSchema: z.ZodType<EntrySideModifierOpen, z.ZodTypeDef, EntrySideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySideModifier$ {
    /** @deprecated use `EntrySideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySideModifierOpen, z.ZodTypeDef, EntrySideModifierOpen>;
}
/** @internal */
export declare const EntrySpinOffCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntrySpinOffCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySpinOffCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntrySpinOffCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntrySpinOffCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntrySpinOffCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySpinOffCorporateActionGeneralInformation$ {
    /** @deprecated use `EntrySpinOffCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySpinOffCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySpinOffCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySpinOffCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntrySpinOffCorporateActionGeneralInformation>;
    /** @deprecated use `EntrySpinOffCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntrySpinOffCorporateActionGeneralInformation$Outbound;
}
export declare function entrySpinOffCorporateActionGeneralInformationToJSON(entrySpinOffCorporateActionGeneralInformation: EntrySpinOffCorporateActionGeneralInformation): string;
export declare function entrySpinOffCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntrySpinOffCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const PayDate$inboundSchema: z.ZodType<PayDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PayDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PayDate$outboundSchema: z.ZodType<PayDate$Outbound, z.ZodTypeDef, PayDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayDate$ {
    /** @deprecated use `PayDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayDate$Outbound, z.ZodTypeDef, PayDate>;
    /** @deprecated use `PayDate$Outbound` instead. */
    type Outbound = PayDate$Outbound;
}
export declare function payDateToJSON(payDate: PayDate): string;
export declare function payDateFromJSON(jsonString: string): SafeParseResult<PayDate, SDKValidationError>;
/** @internal */
export declare const EntrySpinOffQuantity$inboundSchema: z.ZodType<EntrySpinOffQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySpinOffQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntrySpinOffQuantity$outboundSchema: z.ZodType<EntrySpinOffQuantity$Outbound, z.ZodTypeDef, EntrySpinOffQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySpinOffQuantity$ {
    /** @deprecated use `EntrySpinOffQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySpinOffQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySpinOffQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySpinOffQuantity$Outbound, z.ZodTypeDef, EntrySpinOffQuantity>;
    /** @deprecated use `EntrySpinOffQuantity$Outbound` instead. */
    type Outbound = EntrySpinOffQuantity$Outbound;
}
export declare function entrySpinOffQuantityToJSON(entrySpinOffQuantity: EntrySpinOffQuantity): string;
export declare function entrySpinOffQuantityFromJSON(jsonString: string): SafeParseResult<EntrySpinOffQuantity, SDKValidationError>;
/** @internal */
export declare const EntrySpinOffRate$inboundSchema: z.ZodType<EntrySpinOffRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySpinOffRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntrySpinOffRate$outboundSchema: z.ZodType<EntrySpinOffRate$Outbound, z.ZodTypeDef, EntrySpinOffRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySpinOffRate$ {
    /** @deprecated use `EntrySpinOffRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySpinOffRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySpinOffRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySpinOffRate$Outbound, z.ZodTypeDef, EntrySpinOffRate>;
    /** @deprecated use `EntrySpinOffRate$Outbound` instead. */
    type Outbound = EntrySpinOffRate$Outbound;
}
export declare function entrySpinOffRateToJSON(entrySpinOffRate: EntrySpinOffRate): string;
export declare function entrySpinOffRateFromJSON(jsonString: string): SafeParseResult<EntrySpinOffRate, SDKValidationError>;
/** @internal */
export declare const EntrySpinOffRecordDate$inboundSchema: z.ZodType<EntrySpinOffRecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntrySpinOffRecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntrySpinOffRecordDate$outboundSchema: z.ZodType<EntrySpinOffRecordDate$Outbound, z.ZodTypeDef, EntrySpinOffRecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySpinOffRecordDate$ {
    /** @deprecated use `EntrySpinOffRecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySpinOffRecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySpinOffRecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySpinOffRecordDate$Outbound, z.ZodTypeDef, EntrySpinOffRecordDate>;
    /** @deprecated use `EntrySpinOffRecordDate$Outbound` instead. */
    type Outbound = EntrySpinOffRecordDate$Outbound;
}
export declare function entrySpinOffRecordDateToJSON(entrySpinOffRecordDate: EntrySpinOffRecordDate): string;
export declare function entrySpinOffRecordDateFromJSON(jsonString: string): SafeParseResult<EntrySpinOffRecordDate, SDKValidationError>;
/** @internal */
export declare const SpinOff$inboundSchema: z.ZodType<SpinOff, z.ZodTypeDef, unknown>;
/** @internal */
export type SpinOff$Outbound = {
    corporate_action_general_information?: EntrySpinOffCorporateActionGeneralInformation$Outbound | null | undefined;
    pay_date?: PayDate$Outbound | null | undefined;
    quantity?: EntrySpinOffQuantity$Outbound | null | undefined;
    rate?: EntrySpinOffRate$Outbound | null | undefined;
    record_date?: EntrySpinOffRecordDate$Outbound | null | undefined;
};
/** @internal */
export declare const SpinOff$outboundSchema: z.ZodType<SpinOff$Outbound, z.ZodTypeDef, SpinOff>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SpinOff$ {
    /** @deprecated use `SpinOff$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SpinOff, z.ZodTypeDef, unknown>;
    /** @deprecated use `SpinOff$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SpinOff$Outbound, z.ZodTypeDef, SpinOff>;
    /** @deprecated use `SpinOff$Outbound` instead. */
    type Outbound = SpinOff$Outbound;
}
export declare function spinOffToJSON(spinOff: SpinOff): string;
export declare function spinOffFromJSON(jsonString: string): SafeParseResult<SpinOff, SDKValidationError>;
/** @internal */
export declare const EntryState$inboundSchema: z.ZodType<EntryStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryState$outboundSchema: z.ZodType<EntryStateOpen, z.ZodTypeDef, EntryStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryState$ {
    /** @deprecated use `EntryState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryStateOpen, z.ZodTypeDef, EntryStateOpen>;
}
/** @internal */
export declare const EntryStockDividendCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryStockDividendCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryStockDividendCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryStockDividendCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryStockDividendCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryStockDividendCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryStockDividendCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryStockDividendCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryStockDividendCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryStockDividendCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryStockDividendCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryStockDividendCorporateActionGeneralInformation>;
    /** @deprecated use `EntryStockDividendCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryStockDividendCorporateActionGeneralInformation$Outbound;
}
export declare function entryStockDividendCorporateActionGeneralInformationToJSON(entryStockDividendCorporateActionGeneralInformation: EntryStockDividendCorporateActionGeneralInformation): string;
export declare function entryStockDividendCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryStockDividendCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryPayDate$inboundSchema: z.ZodType<EntryPayDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPayDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryPayDate$outboundSchema: z.ZodType<EntryPayDate$Outbound, z.ZodTypeDef, EntryPayDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPayDate$ {
    /** @deprecated use `EntryPayDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPayDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPayDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPayDate$Outbound, z.ZodTypeDef, EntryPayDate>;
    /** @deprecated use `EntryPayDate$Outbound` instead. */
    type Outbound = EntryPayDate$Outbound;
}
export declare function entryPayDateToJSON(entryPayDate: EntryPayDate): string;
export declare function entryPayDateFromJSON(jsonString: string): SafeParseResult<EntryPayDate, SDKValidationError>;
/** @internal */
export declare const EntryStockDividendQuantity$inboundSchema: z.ZodType<EntryStockDividendQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryStockDividendQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryStockDividendQuantity$outboundSchema: z.ZodType<EntryStockDividendQuantity$Outbound, z.ZodTypeDef, EntryStockDividendQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryStockDividendQuantity$ {
    /** @deprecated use `EntryStockDividendQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryStockDividendQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryStockDividendQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryStockDividendQuantity$Outbound, z.ZodTypeDef, EntryStockDividendQuantity>;
    /** @deprecated use `EntryStockDividendQuantity$Outbound` instead. */
    type Outbound = EntryStockDividendQuantity$Outbound;
}
export declare function entryStockDividendQuantityToJSON(entryStockDividendQuantity: EntryStockDividendQuantity): string;
export declare function entryStockDividendQuantityFromJSON(jsonString: string): SafeParseResult<EntryStockDividendQuantity, SDKValidationError>;
/** @internal */
export declare const EntryRate$inboundSchema: z.ZodType<EntryRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryRate$outboundSchema: z.ZodType<EntryRate$Outbound, z.ZodTypeDef, EntryRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryRate$ {
    /** @deprecated use `EntryRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryRate$Outbound, z.ZodTypeDef, EntryRate>;
    /** @deprecated use `EntryRate$Outbound` instead. */
    type Outbound = EntryRate$Outbound;
}
export declare function entryRateToJSON(entryRate: EntryRate): string;
export declare function entryRateFromJSON(jsonString: string): SafeParseResult<EntryRate, SDKValidationError>;
/** @internal */
export declare const EntryStockDividendRecordDate$inboundSchema: z.ZodType<EntryStockDividendRecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryStockDividendRecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryStockDividendRecordDate$outboundSchema: z.ZodType<EntryStockDividendRecordDate$Outbound, z.ZodTypeDef, EntryStockDividendRecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryStockDividendRecordDate$ {
    /** @deprecated use `EntryStockDividendRecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryStockDividendRecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryStockDividendRecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryStockDividendRecordDate$Outbound, z.ZodTypeDef, EntryStockDividendRecordDate>;
    /** @deprecated use `EntryStockDividendRecordDate$Outbound` instead. */
    type Outbound = EntryStockDividendRecordDate$Outbound;
}
export declare function entryStockDividendRecordDateToJSON(entryStockDividendRecordDate: EntryStockDividendRecordDate): string;
export declare function entryStockDividendRecordDateFromJSON(jsonString: string): SafeParseResult<EntryStockDividendRecordDate, SDKValidationError>;
/** @internal */
export declare const StockDividend$inboundSchema: z.ZodType<StockDividend, z.ZodTypeDef, unknown>;
/** @internal */
export type StockDividend$Outbound = {
    corporate_action_general_information?: EntryStockDividendCorporateActionGeneralInformation$Outbound | null | undefined;
    pay_date?: EntryPayDate$Outbound | null | undefined;
    quantity?: EntryStockDividendQuantity$Outbound | null | undefined;
    rate?: EntryRate$Outbound | null | undefined;
    record_date?: EntryStockDividendRecordDate$Outbound | null | undefined;
};
/** @internal */
export declare const StockDividend$outboundSchema: z.ZodType<StockDividend$Outbound, z.ZodTypeDef, StockDividend>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StockDividend$ {
    /** @deprecated use `StockDividend$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StockDividend, z.ZodTypeDef, unknown>;
    /** @deprecated use `StockDividend$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StockDividend$Outbound, z.ZodTypeDef, StockDividend>;
    /** @deprecated use `StockDividend$Outbound` instead. */
    type Outbound = StockDividend$Outbound;
}
export declare function stockDividendToJSON(stockDividend: StockDividend): string;
export declare function stockDividendFromJSON(jsonString: string): SafeParseResult<StockDividend, SDKValidationError>;
/** @internal */
export declare const EntryStockSplitCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryStockSplitCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryStockSplitCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryStockSplitCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryStockSplitCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryStockSplitCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryStockSplitCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryStockSplitCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryStockSplitCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryStockSplitCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryStockSplitCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryStockSplitCorporateActionGeneralInformation>;
    /** @deprecated use `EntryStockSplitCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryStockSplitCorporateActionGeneralInformation$Outbound;
}
export declare function entryStockSplitCorporateActionGeneralInformationToJSON(entryStockSplitCorporateActionGeneralInformation: EntryStockSplitCorporateActionGeneralInformation): string;
export declare function entryStockSplitCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryStockSplitCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryFactorDenominator$inboundSchema: z.ZodType<EntryFactorDenominator, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryFactorDenominator$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryFactorDenominator$outboundSchema: z.ZodType<EntryFactorDenominator$Outbound, z.ZodTypeDef, EntryFactorDenominator>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFactorDenominator$ {
    /** @deprecated use `EntryFactorDenominator$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFactorDenominator, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFactorDenominator$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFactorDenominator$Outbound, z.ZodTypeDef, EntryFactorDenominator>;
    /** @deprecated use `EntryFactorDenominator$Outbound` instead. */
    type Outbound = EntryFactorDenominator$Outbound;
}
export declare function entryFactorDenominatorToJSON(entryFactorDenominator: EntryFactorDenominator): string;
export declare function entryFactorDenominatorFromJSON(jsonString: string): SafeParseResult<EntryFactorDenominator, SDKValidationError>;
/** @internal */
export declare const EntryFactorNumerator$inboundSchema: z.ZodType<EntryFactorNumerator, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryFactorNumerator$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryFactorNumerator$outboundSchema: z.ZodType<EntryFactorNumerator$Outbound, z.ZodTypeDef, EntryFactorNumerator>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryFactorNumerator$ {
    /** @deprecated use `EntryFactorNumerator$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryFactorNumerator, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryFactorNumerator$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryFactorNumerator$Outbound, z.ZodTypeDef, EntryFactorNumerator>;
    /** @deprecated use `EntryFactorNumerator$Outbound` instead. */
    type Outbound = EntryFactorNumerator$Outbound;
}
export declare function entryFactorNumeratorToJSON(entryFactorNumerator: EntryFactorNumerator): string;
export declare function entryFactorNumeratorFromJSON(jsonString: string): SafeParseResult<EntryFactorNumerator, SDKValidationError>;
/** @internal */
export declare const EntryStockSplitPayDate$inboundSchema: z.ZodType<EntryStockSplitPayDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryStockSplitPayDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryStockSplitPayDate$outboundSchema: z.ZodType<EntryStockSplitPayDate$Outbound, z.ZodTypeDef, EntryStockSplitPayDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryStockSplitPayDate$ {
    /** @deprecated use `EntryStockSplitPayDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryStockSplitPayDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryStockSplitPayDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryStockSplitPayDate$Outbound, z.ZodTypeDef, EntryStockSplitPayDate>;
    /** @deprecated use `EntryStockSplitPayDate$Outbound` instead. */
    type Outbound = EntryStockSplitPayDate$Outbound;
}
export declare function entryStockSplitPayDateToJSON(entryStockSplitPayDate: EntryStockSplitPayDate): string;
export declare function entryStockSplitPayDateFromJSON(jsonString: string): SafeParseResult<EntryStockSplitPayDate, SDKValidationError>;
/** @internal */
export declare const EntryStockSplitQuantity$inboundSchema: z.ZodType<EntryStockSplitQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryStockSplitQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryStockSplitQuantity$outboundSchema: z.ZodType<EntryStockSplitQuantity$Outbound, z.ZodTypeDef, EntryStockSplitQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryStockSplitQuantity$ {
    /** @deprecated use `EntryStockSplitQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryStockSplitQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryStockSplitQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryStockSplitQuantity$Outbound, z.ZodTypeDef, EntryStockSplitQuantity>;
    /** @deprecated use `EntryStockSplitQuantity$Outbound` instead. */
    type Outbound = EntryStockSplitQuantity$Outbound;
}
export declare function entryStockSplitQuantityToJSON(entryStockSplitQuantity: EntryStockSplitQuantity): string;
export declare function entryStockSplitQuantityFromJSON(jsonString: string): SafeParseResult<EntryStockSplitQuantity, SDKValidationError>;
/** @internal */
export declare const EntryStockSplitRecordDate$inboundSchema: z.ZodType<EntryStockSplitRecordDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryStockSplitRecordDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryStockSplitRecordDate$outboundSchema: z.ZodType<EntryStockSplitRecordDate$Outbound, z.ZodTypeDef, EntryStockSplitRecordDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryStockSplitRecordDate$ {
    /** @deprecated use `EntryStockSplitRecordDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryStockSplitRecordDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryStockSplitRecordDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryStockSplitRecordDate$Outbound, z.ZodTypeDef, EntryStockSplitRecordDate>;
    /** @deprecated use `EntryStockSplitRecordDate$Outbound` instead. */
    type Outbound = EntryStockSplitRecordDate$Outbound;
}
export declare function entryStockSplitRecordDateToJSON(entryStockSplitRecordDate: EntryStockSplitRecordDate): string;
export declare function entryStockSplitRecordDateFromJSON(jsonString: string): SafeParseResult<EntryStockSplitRecordDate, SDKValidationError>;
/** @internal */
export declare const StockSplit$inboundSchema: z.ZodType<StockSplit, z.ZodTypeDef, unknown>;
/** @internal */
export type StockSplit$Outbound = {
    corporate_action_general_information?: EntryStockSplitCorporateActionGeneralInformation$Outbound | null | undefined;
    factor_denominator?: EntryFactorDenominator$Outbound | null | undefined;
    factor_numerator?: EntryFactorNumerator$Outbound | null | undefined;
    pay_date?: EntryStockSplitPayDate$Outbound | null | undefined;
    quantity?: EntryStockSplitQuantity$Outbound | null | undefined;
    record_date?: EntryStockSplitRecordDate$Outbound | null | undefined;
};
/** @internal */
export declare const StockSplit$outboundSchema: z.ZodType<StockSplit$Outbound, z.ZodTypeDef, StockSplit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StockSplit$ {
    /** @deprecated use `StockSplit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StockSplit, z.ZodTypeDef, unknown>;
    /** @deprecated use `StockSplit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StockSplit$Outbound, z.ZodTypeDef, StockSplit>;
    /** @deprecated use `StockSplit$Outbound` instead. */
    type Outbound = StockSplit$Outbound;
}
export declare function stockSplitToJSON(stockSplit: StockSplit): string;
export declare function stockSplitFromJSON(jsonString: string): SafeParseResult<StockSplit, SDKValidationError>;
/** @internal */
export declare const EntrySweepAction$inboundSchema: z.ZodType<EntrySweepActionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntrySweepAction$outboundSchema: z.ZodType<EntrySweepActionOpen, z.ZodTypeDef, EntrySweepActionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySweepAction$ {
    /** @deprecated use `EntrySweepAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySweepActionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySweepAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySweepActionOpen, z.ZodTypeDef, EntrySweepActionOpen>;
}
/** @internal */
export declare const EntrySweepType$inboundSchema: z.ZodType<EntrySweepTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntrySweepType$outboundSchema: z.ZodType<EntrySweepTypeOpen, z.ZodTypeDef, EntrySweepTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntrySweepType$ {
    /** @deprecated use `EntrySweepType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntrySweepTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntrySweepType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntrySweepTypeOpen, z.ZodTypeDef, EntrySweepTypeOpen>;
}
/** @internal */
export declare const Sweep$inboundSchema: z.ZodType<Sweep, z.ZodTypeDef, unknown>;
/** @internal */
export type Sweep$Outbound = {
    action?: string | undefined;
    eod_redemption?: boolean | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const Sweep$outboundSchema: z.ZodType<Sweep$Outbound, z.ZodTypeDef, Sweep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Sweep$ {
    /** @deprecated use `Sweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Sweep, z.ZodTypeDef, unknown>;
    /** @deprecated use `Sweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Sweep$Outbound, z.ZodTypeDef, Sweep>;
    /** @deprecated use `Sweep$Outbound` instead. */
    type Outbound = Sweep$Outbound;
}
export declare function sweepToJSON(sweep: Sweep): string;
export declare function sweepFromJSON(jsonString: string): SafeParseResult<Sweep, SDKValidationError>;
/** @internal */
export declare const EntryTenderOfferCashRate$inboundSchema: z.ZodType<EntryTenderOfferCashRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryTenderOfferCashRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryTenderOfferCashRate$outboundSchema: z.ZodType<EntryTenderOfferCashRate$Outbound, z.ZodTypeDef, EntryTenderOfferCashRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryTenderOfferCashRate$ {
    /** @deprecated use `EntryTenderOfferCashRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTenderOfferCashRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryTenderOfferCashRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTenderOfferCashRate$Outbound, z.ZodTypeDef, EntryTenderOfferCashRate>;
    /** @deprecated use `EntryTenderOfferCashRate$Outbound` instead. */
    type Outbound = EntryTenderOfferCashRate$Outbound;
}
export declare function entryTenderOfferCashRateToJSON(entryTenderOfferCashRate: EntryTenderOfferCashRate): string;
export declare function entryTenderOfferCashRateFromJSON(jsonString: string): SafeParseResult<EntryTenderOfferCashRate, SDKValidationError>;
/** @internal */
export declare const EntryTenderOfferCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryTenderOfferCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryTenderOfferCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryTenderOfferCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryTenderOfferCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryTenderOfferCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryTenderOfferCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryTenderOfferCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTenderOfferCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryTenderOfferCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTenderOfferCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryTenderOfferCorporateActionGeneralInformation>;
    /** @deprecated use `EntryTenderOfferCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryTenderOfferCorporateActionGeneralInformation$Outbound;
}
export declare function entryTenderOfferCorporateActionGeneralInformationToJSON(entryTenderOfferCorporateActionGeneralInformation: EntryTenderOfferCorporateActionGeneralInformation): string;
export declare function entryTenderOfferCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryTenderOfferCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const TenderOfferType$inboundSchema: z.ZodType<TenderOfferTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TenderOfferType$outboundSchema: z.ZodType<TenderOfferTypeOpen, z.ZodTypeDef, TenderOfferTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TenderOfferType$ {
    /** @deprecated use `TenderOfferType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TenderOfferTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TenderOfferType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TenderOfferTypeOpen, z.ZodTypeDef, TenderOfferTypeOpen>;
}
/** @internal */
export declare const TenderOffer$inboundSchema: z.ZodType<TenderOffer, z.ZodTypeDef, unknown>;
/** @internal */
export type TenderOffer$Outbound = {
    cash_rate?: EntryTenderOfferCashRate$Outbound | null | undefined;
    corporate_action_general_information?: EntryTenderOfferCorporateActionGeneralInformation$Outbound | null | undefined;
    tender_offer_type?: string | undefined;
};
/** @internal */
export declare const TenderOffer$outboundSchema: z.ZodType<TenderOffer$Outbound, z.ZodTypeDef, TenderOffer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TenderOffer$ {
    /** @deprecated use `TenderOffer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TenderOffer, z.ZodTypeDef, unknown>;
    /** @deprecated use `TenderOffer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TenderOffer$Outbound, z.ZodTypeDef, TenderOffer>;
    /** @deprecated use `TenderOffer$Outbound` instead. */
    type Outbound = TenderOffer$Outbound;
}
export declare function tenderOfferToJSON(tenderOffer: TenderOffer): string;
export declare function tenderOfferFromJSON(jsonString: string): SafeParseResult<TenderOffer, SDKValidationError>;
/** @internal */
export declare const EntryTradeBrokerCapacity$inboundSchema: z.ZodType<EntryTradeBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryTradeBrokerCapacity$outboundSchema: z.ZodType<EntryTradeBrokerCapacityOpen, z.ZodTypeDef, EntryTradeBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryTradeBrokerCapacity$ {
    /** @deprecated use `EntryTradeBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTradeBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryTradeBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTradeBrokerCapacityOpen, z.ZodTypeDef, EntryTradeBrokerCapacityOpen>;
}
/** @internal */
export declare const EntryTradePrevailingMarketPrice$inboundSchema: z.ZodType<EntryTradePrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryTradePrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryTradePrevailingMarketPrice$outboundSchema: z.ZodType<EntryTradePrevailingMarketPrice$Outbound, z.ZodTypeDef, EntryTradePrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryTradePrevailingMarketPrice$ {
    /** @deprecated use `EntryTradePrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTradePrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryTradePrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTradePrevailingMarketPrice$Outbound, z.ZodTypeDef, EntryTradePrevailingMarketPrice>;
    /** @deprecated use `EntryTradePrevailingMarketPrice$Outbound` instead. */
    type Outbound = EntryTradePrevailingMarketPrice$Outbound;
}
export declare function entryTradePrevailingMarketPriceToJSON(entryTradePrevailingMarketPrice: EntryTradePrevailingMarketPrice): string;
export declare function entryTradePrevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<EntryTradePrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const EntryTradePriceAdjustmentAmount$inboundSchema: z.ZodType<EntryTradePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryTradePriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryTradePriceAdjustmentAmount$outboundSchema: z.ZodType<EntryTradePriceAdjustmentAmount$Outbound, z.ZodTypeDef, EntryTradePriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryTradePriceAdjustmentAmount$ {
    /** @deprecated use `EntryTradePriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTradePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryTradePriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTradePriceAdjustmentAmount$Outbound, z.ZodTypeDef, EntryTradePriceAdjustmentAmount>;
    /** @deprecated use `EntryTradePriceAdjustmentAmount$Outbound` instead. */
    type Outbound = EntryTradePriceAdjustmentAmount$Outbound;
}
export declare function entryTradePriceAdjustmentAmountToJSON(entryTradePriceAdjustmentAmount: EntryTradePriceAdjustmentAmount): string;
export declare function entryTradePriceAdjustmentAmountFromJSON(jsonString: string): SafeParseResult<EntryTradePriceAdjustmentAmount, SDKValidationError>;
/** @internal */
export declare const EntryPriceAdjustmentPercent$inboundSchema: z.ZodType<EntryPriceAdjustmentPercent, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPriceAdjustmentPercent$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryPriceAdjustmentPercent$outboundSchema: z.ZodType<EntryPriceAdjustmentPercent$Outbound, z.ZodTypeDef, EntryPriceAdjustmentPercent>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPriceAdjustmentPercent$ {
    /** @deprecated use `EntryPriceAdjustmentPercent$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPriceAdjustmentPercent, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPriceAdjustmentPercent$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPriceAdjustmentPercent$Outbound, z.ZodTypeDef, EntryPriceAdjustmentPercent>;
    /** @deprecated use `EntryPriceAdjustmentPercent$Outbound` instead. */
    type Outbound = EntryPriceAdjustmentPercent$Outbound;
}
export declare function entryPriceAdjustmentPercentToJSON(entryPriceAdjustmentPercent: EntryPriceAdjustmentPercent): string;
export declare function entryPriceAdjustmentPercentFromJSON(jsonString: string): SafeParseResult<EntryPriceAdjustmentPercent, SDKValidationError>;
/** @internal */
export declare const EntryTradePriceAdjustmentType$inboundSchema: z.ZodType<EntryTradePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryTradePriceAdjustmentType$outboundSchema: z.ZodType<EntryTradePriceAdjustmentTypeOpen, z.ZodTypeDef, EntryTradePriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryTradePriceAdjustmentType$ {
    /** @deprecated use `EntryTradePriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTradePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryTradePriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTradePriceAdjustmentTypeOpen, z.ZodTypeDef, EntryTradePriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const EntryPriceAdjustmentRecord$inboundSchema: z.ZodType<EntryPriceAdjustmentRecord, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryPriceAdjustmentRecord$Outbound = {
    price_adjustment_amount?: EntryTradePriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_percent?: EntryPriceAdjustmentPercent$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const EntryPriceAdjustmentRecord$outboundSchema: z.ZodType<EntryPriceAdjustmentRecord$Outbound, z.ZodTypeDef, EntryPriceAdjustmentRecord>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryPriceAdjustmentRecord$ {
    /** @deprecated use `EntryPriceAdjustmentRecord$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryPriceAdjustmentRecord, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryPriceAdjustmentRecord$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryPriceAdjustmentRecord$Outbound, z.ZodTypeDef, EntryPriceAdjustmentRecord>;
    /** @deprecated use `EntryPriceAdjustmentRecord$Outbound` instead. */
    type Outbound = EntryPriceAdjustmentRecord$Outbound;
}
export declare function entryPriceAdjustmentRecordToJSON(entryPriceAdjustmentRecord: EntryPriceAdjustmentRecord): string;
export declare function entryPriceAdjustmentRecordFromJSON(jsonString: string): SafeParseResult<EntryPriceAdjustmentRecord, SDKValidationError>;
/** @internal */
export declare const EntryTrade$inboundSchema: z.ZodType<EntryTrade, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryTrade$Outbound = {
    additional_instructions?: Array<string> | undefined;
    alternate_order_id?: string | undefined;
    booking_api_booking_execution_id?: string | undefined;
    booking_api_trade_allocation_id?: string | undefined;
    booking_api_trade_id?: string | undefined;
    broker?: string | undefined;
    broker_capacity?: string | undefined;
    client_memo?: string | undefined;
    client_order_id?: string | undefined;
    exchange?: string | undefined;
    execution_id?: string | undefined;
    execution_only?: boolean | undefined;
    external_id?: string | undefined;
    fund_confirmation_number?: string | undefined;
    gateway_client_order_id?: string | undefined;
    internal_error?: boolean | undefined;
    is_writeoff?: boolean | undefined;
    lots?: Array<Lot$Outbound> | undefined;
    market?: string | undefined;
    order_id?: string | undefined;
    prevailing_market_price?: EntryTradePrevailingMarketPrice$Outbound | null | undefined;
    price_adjustment_record?: EntryPriceAdjustmentRecord$Outbound | null | undefined;
    route?: string | undefined;
    special_instructions?: Array<string> | undefined;
    when_issued?: boolean | undefined;
    yield_records?: Array<YieldRecord$Outbound> | undefined;
};
/** @internal */
export declare const EntryTrade$outboundSchema: z.ZodType<EntryTrade$Outbound, z.ZodTypeDef, EntryTrade>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryTrade$ {
    /** @deprecated use `EntryTrade$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTrade, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryTrade$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTrade$Outbound, z.ZodTypeDef, EntryTrade>;
    /** @deprecated use `EntryTrade$Outbound` instead. */
    type Outbound = EntryTrade$Outbound;
}
export declare function entryTradeToJSON(entryTrade: EntryTrade): string;
export declare function entryTradeFromJSON(jsonString: string): SafeParseResult<EntryTrade, SDKValidationError>;
/** @internal */
export declare const EntryTransferType$inboundSchema: z.ZodType<EntryTransferTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryTransferType$outboundSchema: z.ZodType<EntryTransferTypeOpen, z.ZodTypeDef, EntryTransferTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryTransferType$ {
    /** @deprecated use `EntryTransferType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTransferTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryTransferType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTransferTypeOpen, z.ZodTypeDef, EntryTransferTypeOpen>;
}
/** @internal */
export declare const EntryTransfer$inboundSchema: z.ZodType<EntryTransfer, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryTransfer$Outbound = {
    additional_instructions?: string | undefined;
    client_brokerage?: string | undefined;
    transfer_type?: string | undefined;
};
/** @internal */
export declare const EntryTransfer$outboundSchema: z.ZodType<EntryTransfer$Outbound, z.ZodTypeDef, EntryTransfer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryTransfer$ {
    /** @deprecated use `EntryTransfer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTransfer, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryTransfer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTransfer$Outbound, z.ZodTypeDef, EntryTransfer>;
    /** @deprecated use `EntryTransfer$Outbound` instead. */
    type Outbound = EntryTransfer$Outbound;
}
export declare function entryTransferToJSON(entryTransfer: EntryTransfer): string;
export declare function entryTransferFromJSON(jsonString: string): SafeParseResult<EntryTransfer, SDKValidationError>;
/** @internal */
export declare const EntryType$inboundSchema: z.ZodType<EntryTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryType$outboundSchema: z.ZodType<EntryTypeOpen, z.ZodTypeDef, EntryTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryType$ {
    /** @deprecated use `EntryType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryTypeOpen, z.ZodTypeDef, EntryTypeOpen>;
}
/** @internal */
export declare const EntryUnitSplitCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryUnitSplitCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryUnitSplitCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryUnitSplitCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryUnitSplitCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryUnitSplitCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryUnitSplitCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryUnitSplitCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryUnitSplitCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryUnitSplitCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryUnitSplitCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryUnitSplitCorporateActionGeneralInformation>;
    /** @deprecated use `EntryUnitSplitCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryUnitSplitCorporateActionGeneralInformation$Outbound;
}
export declare function entryUnitSplitCorporateActionGeneralInformationToJSON(entryUnitSplitCorporateActionGeneralInformation: EntryUnitSplitCorporateActionGeneralInformation): string;
export declare function entryUnitSplitCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryUnitSplitCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryUnitSplitStockRate$inboundSchema: z.ZodType<EntryUnitSplitStockRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryUnitSplitStockRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryUnitSplitStockRate$outboundSchema: z.ZodType<EntryUnitSplitStockRate$Outbound, z.ZodTypeDef, EntryUnitSplitStockRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryUnitSplitStockRate$ {
    /** @deprecated use `EntryUnitSplitStockRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryUnitSplitStockRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryUnitSplitStockRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryUnitSplitStockRate$Outbound, z.ZodTypeDef, EntryUnitSplitStockRate>;
    /** @deprecated use `EntryUnitSplitStockRate$Outbound` instead. */
    type Outbound = EntryUnitSplitStockRate$Outbound;
}
export declare function entryUnitSplitStockRateToJSON(entryUnitSplitStockRate: EntryUnitSplitStockRate): string;
export declare function entryUnitSplitStockRateFromJSON(jsonString: string): SafeParseResult<EntryUnitSplitStockRate, SDKValidationError>;
/** @internal */
export declare const UnitSplit$inboundSchema: z.ZodType<UnitSplit, z.ZodTypeDef, unknown>;
/** @internal */
export type UnitSplit$Outbound = {
    corporate_action_general_information?: EntryUnitSplitCorporateActionGeneralInformation$Outbound | null | undefined;
    stock_rate?: EntryUnitSplitStockRate$Outbound | null | undefined;
};
/** @internal */
export declare const UnitSplit$outboundSchema: z.ZodType<UnitSplit$Outbound, z.ZodTypeDef, UnitSplit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnitSplit$ {
    /** @deprecated use `UnitSplit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnitSplit, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnitSplit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnitSplit$Outbound, z.ZodTypeDef, UnitSplit>;
    /** @deprecated use `UnitSplit$Outbound` instead. */
    type Outbound = UnitSplit$Outbound;
}
export declare function unitSplitToJSON(unitSplit: UnitSplit): string;
export declare function unitSplitFromJSON(jsonString: string): SafeParseResult<UnitSplit, SDKValidationError>;
/** @internal */
export declare const EntryWarrantExerciseCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryWarrantExerciseCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryWarrantExerciseCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryWarrantExerciseCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryWarrantExerciseCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryWarrantExerciseCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryWarrantExerciseCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryWarrantExerciseCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryWarrantExerciseCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryWarrantExerciseCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryWarrantExerciseCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryWarrantExerciseCorporateActionGeneralInformation>;
    /** @deprecated use `EntryWarrantExerciseCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryWarrantExerciseCorporateActionGeneralInformation$Outbound;
}
export declare function entryWarrantExerciseCorporateActionGeneralInformationToJSON(entryWarrantExerciseCorporateActionGeneralInformation: EntryWarrantExerciseCorporateActionGeneralInformation): string;
export declare function entryWarrantExerciseCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryWarrantExerciseCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const WarrantExercise$inboundSchema: z.ZodType<WarrantExercise, z.ZodTypeDef, unknown>;
/** @internal */
export type WarrantExercise$Outbound = {
    corporate_action_general_information?: EntryWarrantExerciseCorporateActionGeneralInformation$Outbound | null | undefined;
};
/** @internal */
export declare const WarrantExercise$outboundSchema: z.ZodType<WarrantExercise$Outbound, z.ZodTypeDef, WarrantExercise>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WarrantExercise$ {
    /** @deprecated use `WarrantExercise$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WarrantExercise, z.ZodTypeDef, unknown>;
    /** @deprecated use `WarrantExercise$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WarrantExercise$Outbound, z.ZodTypeDef, WarrantExercise>;
    /** @deprecated use `WarrantExercise$Outbound` instead. */
    type Outbound = WarrantExercise$Outbound;
}
export declare function warrantExerciseToJSON(warrantExercise: WarrantExercise): string;
export declare function warrantExerciseFromJSON(jsonString: string): SafeParseResult<WarrantExercise, SDKValidationError>;
/** @internal */
export declare const DistributionType$inboundSchema: z.ZodType<DistributionTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DistributionType$outboundSchema: z.ZodType<DistributionTypeOpen, z.ZodTypeDef, DistributionTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DistributionType$ {
    /** @deprecated use `DistributionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DistributionTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DistributionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DistributionTypeOpen, z.ZodTypeDef, DistributionTypeOpen>;
}
/** @internal */
export declare const RetirementType$inboundSchema: z.ZodType<RetirementTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetirementType$outboundSchema: z.ZodType<RetirementTypeOpen, z.ZodTypeDef, RetirementTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementType$ {
    /** @deprecated use `RetirementType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementTypeOpen, z.ZodTypeDef, RetirementTypeOpen>;
}
/** @internal */
export declare const EntryWithdrawalType$inboundSchema: z.ZodType<EntryWithdrawalTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryWithdrawalType$outboundSchema: z.ZodType<EntryWithdrawalTypeOpen, z.ZodTypeDef, EntryWithdrawalTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryWithdrawalType$ {
    /** @deprecated use `EntryWithdrawalType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryWithdrawalTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryWithdrawalType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryWithdrawalTypeOpen, z.ZodTypeDef, EntryWithdrawalTypeOpen>;
}
/** @internal */
export declare const Withdrawal$inboundSchema: z.ZodType<Withdrawal, z.ZodTypeDef, unknown>;
/** @internal */
export type Withdrawal$Outbound = {
    additional_instructions?: string | undefined;
    closing_account?: boolean | undefined;
    destination_account_number?: string | undefined;
    destination_institution?: string | undefined;
    distribution_type?: string | undefined;
    distribution_year?: number | undefined;
    fed_reference_number?: string | undefined;
    originating_institution?: string | undefined;
    periodic?: boolean | undefined;
    retirement_type?: string | undefined;
    total_distribution?: boolean | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const Withdrawal$outboundSchema: z.ZodType<Withdrawal$Outbound, z.ZodTypeDef, Withdrawal>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Withdrawal$ {
    /** @deprecated use `Withdrawal$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Withdrawal, z.ZodTypeDef, unknown>;
    /** @deprecated use `Withdrawal$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Withdrawal$Outbound, z.ZodTypeDef, Withdrawal>;
    /** @deprecated use `Withdrawal$Outbound` instead. */
    type Outbound = Withdrawal$Outbound;
}
export declare function withdrawalToJSON(withdrawal: Withdrawal): string;
export declare function withdrawalFromJSON(jsonString: string): SafeParseResult<Withdrawal, SDKValidationError>;
/** @internal */
export declare const Review$inboundSchema: z.ZodType<ReviewOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Review$outboundSchema: z.ZodType<ReviewOpen, z.ZodTypeDef, ReviewOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Review$ {
    /** @deprecated use `Review$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReviewOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Review$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReviewOpen, z.ZodTypeDef, ReviewOpen>;
}
/** @internal */
export declare const WithdrawalPendingReview$inboundSchema: z.ZodType<WithdrawalPendingReview, z.ZodTypeDef, unknown>;
/** @internal */
export type WithdrawalPendingReview$Outbound = {
    review?: string | undefined;
};
/** @internal */
export declare const WithdrawalPendingReview$outboundSchema: z.ZodType<WithdrawalPendingReview$Outbound, z.ZodTypeDef, WithdrawalPendingReview>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithdrawalPendingReview$ {
    /** @deprecated use `WithdrawalPendingReview$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithdrawalPendingReview, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithdrawalPendingReview$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithdrawalPendingReview$Outbound, z.ZodTypeDef, WithdrawalPendingReview>;
    /** @deprecated use `WithdrawalPendingReview$Outbound` instead. */
    type Outbound = WithdrawalPendingReview$Outbound;
}
export declare function withdrawalPendingReviewToJSON(withdrawalPendingReview: WithdrawalPendingReview): string;
export declare function withdrawalPendingReviewFromJSON(jsonString: string): SafeParseResult<WithdrawalPendingReview, SDKValidationError>;
/** @internal */
export declare const EntryWithholdingRate$inboundSchema: z.ZodType<EntryWithholdingRate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryWithholdingRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EntryWithholdingRate$outboundSchema: z.ZodType<EntryWithholdingRate$Outbound, z.ZodTypeDef, EntryWithholdingRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryWithholdingRate$ {
    /** @deprecated use `EntryWithholdingRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryWithholdingRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryWithholdingRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryWithholdingRate$Outbound, z.ZodTypeDef, EntryWithholdingRate>;
    /** @deprecated use `EntryWithholdingRate$Outbound` instead. */
    type Outbound = EntryWithholdingRate$Outbound;
}
export declare function entryWithholdingRateToJSON(entryWithholdingRate: EntryWithholdingRate): string;
export declare function entryWithholdingRateFromJSON(jsonString: string): SafeParseResult<EntryWithholdingRate, SDKValidationError>;
/** @internal */
export declare const EntryWithholdingState$inboundSchema: z.ZodType<EntryWithholdingStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryWithholdingState$outboundSchema: z.ZodType<EntryWithholdingStateOpen, z.ZodTypeDef, EntryWithholdingStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryWithholdingState$ {
    /** @deprecated use `EntryWithholdingState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryWithholdingStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryWithholdingState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryWithholdingStateOpen, z.ZodTypeDef, EntryWithholdingStateOpen>;
}
/** @internal */
export declare const EntryWithholdingType$inboundSchema: z.ZodType<EntryWithholdingTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntryWithholdingType$outboundSchema: z.ZodType<EntryWithholdingTypeOpen, z.ZodTypeDef, EntryWithholdingTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryWithholdingType$ {
    /** @deprecated use `EntryWithholdingType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryWithholdingTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryWithholdingType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryWithholdingTypeOpen, z.ZodTypeDef, EntryWithholdingTypeOpen>;
}
/** @internal */
export declare const EntryWithholding$inboundSchema: z.ZodType<EntryWithholding, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryWithholding$Outbound = {
    rate?: EntryWithholdingRate$Outbound | null | undefined;
    region_code?: string | undefined;
    state?: string | undefined;
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const EntryWithholding$outboundSchema: z.ZodType<EntryWithholding$Outbound, z.ZodTypeDef, EntryWithholding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryWithholding$ {
    /** @deprecated use `EntryWithholding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryWithholding, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryWithholding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryWithholding$Outbound, z.ZodTypeDef, EntryWithholding>;
    /** @deprecated use `EntryWithholding$Outbound` instead. */
    type Outbound = EntryWithholding$Outbound;
}
export declare function entryWithholdingToJSON(entryWithholding: EntryWithholding): string;
export declare function entryWithholdingFromJSON(jsonString: string): SafeParseResult<EntryWithholding, SDKValidationError>;
/** @internal */
export declare const EntryWorthlessCorporateActionGeneralInformation$inboundSchema: z.ZodType<EntryWorthlessCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryWorthlessCorporateActionGeneralInformation$Outbound = {
    corporate_action_id?: string | undefined;
    disbursed_asset_id?: string | undefined;
    disbursed_cusip?: string | undefined;
    disbursed_symbol_description?: string | undefined;
    target_asset_id?: string | undefined;
    target_cusip?: string | undefined;
    target_symbol_description?: string | undefined;
};
/** @internal */
export declare const EntryWorthlessCorporateActionGeneralInformation$outboundSchema: z.ZodType<EntryWorthlessCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryWorthlessCorporateActionGeneralInformation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryWorthlessCorporateActionGeneralInformation$ {
    /** @deprecated use `EntryWorthlessCorporateActionGeneralInformation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryWorthlessCorporateActionGeneralInformation, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryWorthlessCorporateActionGeneralInformation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryWorthlessCorporateActionGeneralInformation$Outbound, z.ZodTypeDef, EntryWorthlessCorporateActionGeneralInformation>;
    /** @deprecated use `EntryWorthlessCorporateActionGeneralInformation$Outbound` instead. */
    type Outbound = EntryWorthlessCorporateActionGeneralInformation$Outbound;
}
export declare function entryWorthlessCorporateActionGeneralInformationToJSON(entryWorthlessCorporateActionGeneralInformation: EntryWorthlessCorporateActionGeneralInformation): string;
export declare function entryWorthlessCorporateActionGeneralInformationFromJSON(jsonString: string): SafeParseResult<EntryWorthlessCorporateActionGeneralInformation, SDKValidationError>;
/** @internal */
export declare const EntryWorthlessEffectiveDate$inboundSchema: z.ZodType<EntryWorthlessEffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryWorthlessEffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryWorthlessEffectiveDate$outboundSchema: z.ZodType<EntryWorthlessEffectiveDate$Outbound, z.ZodTypeDef, EntryWorthlessEffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryWorthlessEffectiveDate$ {
    /** @deprecated use `EntryWorthlessEffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryWorthlessEffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryWorthlessEffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryWorthlessEffectiveDate$Outbound, z.ZodTypeDef, EntryWorthlessEffectiveDate>;
    /** @deprecated use `EntryWorthlessEffectiveDate$Outbound` instead. */
    type Outbound = EntryWorthlessEffectiveDate$Outbound;
}
export declare function entryWorthlessEffectiveDateToJSON(entryWorthlessEffectiveDate: EntryWorthlessEffectiveDate): string;
export declare function entryWorthlessEffectiveDateFromJSON(jsonString: string): SafeParseResult<EntryWorthlessEffectiveDate, SDKValidationError>;
/** @internal */
export declare const EntryWorthlessPaymentDate$inboundSchema: z.ZodType<EntryWorthlessPaymentDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EntryWorthlessPaymentDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EntryWorthlessPaymentDate$outboundSchema: z.ZodType<EntryWorthlessPaymentDate$Outbound, z.ZodTypeDef, EntryWorthlessPaymentDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntryWorthlessPaymentDate$ {
    /** @deprecated use `EntryWorthlessPaymentDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntryWorthlessPaymentDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntryWorthlessPaymentDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntryWorthlessPaymentDate$Outbound, z.ZodTypeDef, EntryWorthlessPaymentDate>;
    /** @deprecated use `EntryWorthlessPaymentDate$Outbound` instead. */
    type Outbound = EntryWorthlessPaymentDate$Outbound;
}
export declare function entryWorthlessPaymentDateToJSON(entryWorthlessPaymentDate: EntryWorthlessPaymentDate): string;
export declare function entryWorthlessPaymentDateFromJSON(jsonString: string): SafeParseResult<EntryWorthlessPaymentDate, SDKValidationError>;
/** @internal */
export declare const Worthless$inboundSchema: z.ZodType<Worthless, z.ZodTypeDef, unknown>;
/** @internal */
export type Worthless$Outbound = {
    corporate_action_general_information?: EntryWorthlessCorporateActionGeneralInformation$Outbound | null | undefined;
    effective_date?: EntryWorthlessEffectiveDate$Outbound | null | undefined;
    payment_date?: EntryWorthlessPaymentDate$Outbound | null | undefined;
};
/** @internal */
export declare const Worthless$outboundSchema: z.ZodType<Worthless$Outbound, z.ZodTypeDef, Worthless>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Worthless$ {
    /** @deprecated use `Worthless$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Worthless, z.ZodTypeDef, unknown>;
    /** @deprecated use `Worthless$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Worthless$Outbound, z.ZodTypeDef, Worthless>;
    /** @deprecated use `Worthless$Outbound` instead. */
    type Outbound = Worthless$Outbound;
}
export declare function worthlessToJSON(worthless: Worthless): string;
export declare function worthlessFromJSON(jsonString: string): SafeParseResult<Worthless, SDKValidationError>;
/** @internal */
export declare const Entry$inboundSchema: z.ZodType<Entry, z.ZodTypeDef, unknown>;
/** @internal */
export type Entry$Outbound = {
    acats_pending_out?: AcatsPendingOut$Outbound | null | undefined;
    account_id?: string | undefined;
    account_memo?: string | undefined;
    account_transfer?: AccountTransfer$Outbound | null | undefined;
    accrued_interest?: EntryAccruedInterest$Outbound | null | undefined;
    acquisition?: Acquisition$Outbound | null | undefined;
    activity_date?: ActivityDate$Outbound | null | undefined;
    activity_id?: string | undefined;
    activity_time?: string | null | undefined;
    allocation?: Allocation$Outbound | null | undefined;
    asset_id?: string | undefined;
    bond_default?: BondDefault$Outbound | null | undefined;
    capital_gains?: CapitalGains$Outbound | null | undefined;
    cash_dividend?: CashDividend$Outbound | null | undefined;
    cash_in_lieu?: CashInLieu$Outbound | null | undefined;
    commission?: EntryCommission$Outbound | null | undefined;
    conversion?: Conversion$Outbound | null | undefined;
    corporate_action_memo_adjustment?: CorporateActionMemoAdjustment$Outbound | null | undefined;
    credit?: Credit$Outbound | null | undefined;
    currency_asset_id?: string | undefined;
    delivery?: Delivery$Outbound | null | undefined;
    deposit?: Deposit$Outbound | null | undefined;
    description?: string | undefined;
    drip?: Drip$Outbound | null | undefined;
    entry_id?: string | undefined;
    exchange?: Exchange$Outbound | null | undefined;
    fee?: EntryFee$Outbound | null | undefined;
    flip?: Flip$Outbound | null | undefined;
    fpsl?: Fpsl$Outbound | null | undefined;
    gross_amount?: EntryGrossAmount$Outbound | null | undefined;
    interest?: Interest$Outbound | null | undefined;
    interest_payment?: InterestPayment$Outbound | null | undefined;
    liquidation?: Liquidation$Outbound | null | undefined;
    maturity?: Maturity$Outbound | null | undefined;
    merger?: Merger$Outbound | null | undefined;
    name?: string | undefined;
    name_change?: NameChange$Outbound | null | undefined;
    original_id?: string | undefined;
    original_process_date?: OriginalProcessDate$Outbound | null | undefined;
    payment_in_kind?: PaymentInKind$Outbound | null | undefined;
    price?: EntryPrice$Outbound | null | undefined;
    process_date?: EntryProcessDate$Outbound | null | undefined;
    quantity?: EntryQuantity$Outbound | null | undefined;
    receive?: Receive$Outbound | null | undefined;
    redemption_full?: RedemptionFull$Outbound | null | undefined;
    redemption_partial?: RedemptionPartial$Outbound | null | undefined;
    reverse_stock_split?: ReverseStockSplit$Outbound | null | undefined;
    reversed_entry_id?: string | undefined;
    rights_distribution?: RightsDistribution$Outbound | null | undefined;
    rights_subscription?: RightsSubscription$Outbound | null | undefined;
    rounding_adjustment?: RoundingAdjustment$Outbound | null | undefined;
    sale_of_rights?: SaleOfRights$Outbound | null | undefined;
    settle_date?: SettleDate$Outbound | null | undefined;
    side?: string | undefined;
    side_modifier?: string | undefined;
    spin_off?: SpinOff$Outbound | null | undefined;
    state?: string | undefined;
    stock_dividend?: StockDividend$Outbound | null | undefined;
    stock_split?: StockSplit$Outbound | null | undefined;
    subtype_category?: string | undefined;
    sweep?: Sweep$Outbound | null | undefined;
    tender_offer?: TenderOffer$Outbound | null | undefined;
    trade?: EntryTrade$Outbound | null | undefined;
    transfer?: EntryTransfer$Outbound | null | undefined;
    type?: string | undefined;
    unit_split?: UnitSplit$Outbound | null | undefined;
    warrant_exercise?: WarrantExercise$Outbound | null | undefined;
    withdrawal?: Withdrawal$Outbound | null | undefined;
    withdrawal_pending_review?: WithdrawalPendingReview$Outbound | null | undefined;
    withholding?: EntryWithholding$Outbound | null | undefined;
    worthless?: Worthless$Outbound | null | undefined;
};
/** @internal */
export declare const Entry$outboundSchema: z.ZodType<Entry$Outbound, z.ZodTypeDef, Entry>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Entry$ {
    /** @deprecated use `Entry$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Entry, z.ZodTypeDef, unknown>;
    /** @deprecated use `Entry$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Entry$Outbound, z.ZodTypeDef, Entry>;
    /** @deprecated use `Entry$Outbound` instead. */
    type Outbound = Entry$Outbound;
}
export declare function entryToJSON(entry: Entry): string;
export declare function entryFromJSON(jsonString: string): SafeParseResult<Entry, SDKValidationError>;
//# sourceMappingURL=entry.d.ts.map