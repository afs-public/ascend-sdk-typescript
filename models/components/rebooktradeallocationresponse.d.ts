import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BondYield, BondYield$Outbound } from "./bondyield.js";
import { BookingFee, BookingFee$Outbound } from "./bookingfee.js";
import { BookingLot, BookingLot$Outbound } from "./bookinglot.js";
/**
 * The amount of interest that has been accrued in the issuing currency for a single instrument.
 */
export type RebookTradeAllocationResponseAccruedInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Type of the asset being traded.
 */
export declare enum RebookTradeAllocationResponseAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded.
 */
export type RebookTradeAllocationResponseAssetTypeOpen = OpenEnum<typeof RebookTradeAllocationResponseAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum RebookTradeAllocationResponseBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type RebookTradeAllocationResponseBrokerCapacityOpen = OpenEnum<typeof RebookTradeAllocationResponseBrokerCapacity>;
/**
 * Commission amount of the trade allocation that will only be applied to the to_account_id.
 */
export type RebookTradeAllocationResponseCommissionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
 */
export type RebookTradeAllocationResponseGrossAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Identifier type for the asset being traded.
 */
export declare enum RebookTradeAllocationResponseIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type RebookTradeAllocationResponseIdentifierTypeOpen = OpenEnum<typeof RebookTradeAllocationResponseIdentifierType>;
/**
 * The price for the instrument that is prevailing in the market. Required for FIXED_INCOME trade allocations when the broker_capacity is PRINCIPAL.
 */
export type RebookTradeAllocationResponsePrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Price with requirement of 8 or less integral number and 8 or less fractional precision.
 */
export type RebookTradeAllocationResponsePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type RebookTradeAllocationResponsePriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export declare enum RebookTradeAllocationResponsePriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    GrossCredit = "GROSS_CREDIT"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export type RebookTradeAllocationResponsePriceAdjustmentTypeOpen = OpenEnum<typeof RebookTradeAllocationResponsePriceAdjustmentType>;
/**
 * Price adjustment that will be applied to the net price of the security.
 */
export type RebookTradeAllocationResponsePriceAdjustment = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: RebookTradeAllocationResponsePriceAdjustmentAmount | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security.
     */
    priceAdjustmentType?: RebookTradeAllocationResponsePriceAdjustmentTypeOpen | undefined;
};
/**
 * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
 */
export type RebookTradeAllocationResponseQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Defaults to T+1 for equities if this is not provided. Calculated using the execution_time field in Eastern Time.
 */
export type RebookTradeAllocationResponseSettlementDate = {
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
 * Side modifier for the trade allocation.
 */
export declare enum RebookTradeAllocationResponseSideModifier {
    SideModifierUnspecified = "SIDE_MODIFIER_UNSPECIFIED",
    Short = "SHORT",
    ShortExempt = "SHORT_EXEMPT",
    ShortCover = "SHORT_COVER",
    Open = "OPEN",
    Close = "CLOSE"
}
/**
 * Side modifier for the trade allocation.
 */
export type RebookTradeAllocationResponseSideModifierOpen = OpenEnum<typeof RebookTradeAllocationResponseSideModifier>;
export declare enum RebookTradeAllocationResponseSpecialInstructions {
    SpecialInstructionsUnspecified = "SPECIAL_INSTRUCTIONS_UNSPECIFIED",
    Rule144 = "RULE_144",
    WithDividend = "WITH_DIVIDEND",
    WithRights = "WITH_RIGHTS",
    CloseContract = "CLOSE_CONTRACT",
    CoverShort = "COVER_SHORT",
    CrossTrade = "CROSS_TRADE",
    OpenContractCovered = "OPEN_CONTRACT_COVERED",
    DiscretionExercised = "DISCRETION_EXERCISED",
    DiscretionNotExercised = "DISCRETION_NOT_EXERCISED",
    OptionAssignment = "OPTION_ASSIGNMENT",
    EmployeeStockOption = "EMPLOYEE_STOCK_OPTION",
    InvestmentBanking = "INVESTMENT_BANKING",
    BrokerDealerOrder = "BROKER_DEALER_ORDER",
    MakeMarketInSecurity = "MAKE_MARKET_IN_SECURITY",
    MakeMarketSolicited = "MAKE_MARKET_SOLICITED",
    MakeMarketUnsolicited = "MAKE_MARKET_UNSOLICITED",
    CustomerDirected = "CUSTOMER_DIRECTED",
    FullyRegistered = "FULLY_REGISTERED",
    OpenContract = "OPEN_CONTRACT",
    OddlotDiffOnRequest = "ODDLOT_DIFF_ON_REQUEST",
    ProspectusEnclosed = "PROSPECTUS_ENCLOSED",
    ProspectusSeparateMail = "PROSPECTUS_SEPARATE_MAIL",
    Solicited = "SOLICITED",
    Unsolicited = "UNSOLICITED",
    XDividend = "X_DIVIDEND",
    ActingAsPrincipal = "ACTING_AS_PRINCIPAL",
    AveragePrice = "AVERAGE_PRICE",
    BrokerLiquidation = "BROKER_LIQUIDATION",
    CouponBooks = "COUPON_BOOKS",
    HasPostageFee = "HAS_POSTAGE_FEE",
    InternetOrder = "INTERNET_ORDER",
    MarginSellout = "MARGIN_SELLOUT",
    MarketMakersAsPrincipal = "MARKET_MAKERS_AS_PRINCIPAL",
    NegativeNetProceed = "NEGATIVE_NET_PROCEED",
    PreFigIndicator = "PRE_FIG_INDICATOR",
    RisklessPrincipalInstruction = "RISKLESS_PRINCIPAL_INSTRUCTION",
    ShortInstruction = "SHORT_INSTRUCTION",
    ThirdMarket = "THIRD_MARKET",
    SuppressMsrbTransmission = "SUPPRESS_MSRB_TRANSMISSION",
    SuppressTraceReporting = "SUPPRESS_TRACE_REPORTING",
    SuppressEmailNotification = "SUPPRESS_EMAIL_NOTIFICATION",
    StockReward = "STOCK_REWARD",
    SuppressRegFees = "SUPPRESS_REG_FEES",
    SuppressSecFee = "SUPPRESS_SEC_FEE",
    SuppressTafFee = "SUPPRESS_TAF_FEE",
    DividendReinvestment = "DIVIDEND_REINVESTMENT"
}
export type RebookTradeAllocationResponseSpecialInstructionsOpen = OpenEnum<typeof RebookTradeAllocationResponseSpecialInstructions>;
/**
 * The state that the trade allocation is in.
 */
export declare enum RebookTradeAllocationResponseState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Rebooking = "REBOOKING",
    Canceling = "CANCELING",
    Booked = "BOOKED",
    Rebooked = "REBOOKED",
    Canceled = "CANCELED",
    Failed = "FAILED"
}
/**
 * The state that the trade allocation is in.
 */
export type RebookTradeAllocationResponseStateOpen = OpenEnum<typeof RebookTradeAllocationResponseState>;
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export declare enum RebookTradeAllocationResponseToSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export type RebookTradeAllocationResponseToSideOpen = OpenEnum<typeof RebookTradeAllocationResponseToSide>;
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export declare enum RebookTradeAllocationResponseWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export type RebookTradeAllocationResponseWhenIssuedOpen = OpenEnum<typeof RebookTradeAllocationResponseWhenIssued>;
/**
 * The new trade allocation that is booked.
 */
export type NewTradeAllocation = {
    /**
     * The amount of interest that has been accrued in the issuing currency for a single instrument.
     */
    accruedInterestAmount?: RebookTradeAllocationResponseAccruedInterestAmount | null | undefined;
    /**
     * Free form instructions that can be used to provide additional instructions (that are not captured by existing special instructions) and will be put on the trade confirm.
     */
    additionalInstructions?: string | undefined;
    /**
     * Type of the asset being traded.
     */
    assetType?: RebookTradeAllocationResponseAssetTypeOpen | undefined;
    /**
     * The yield associated with an individual fill of a fixed income trade. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    bondYield?: Array<BondYield> | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity?: RebookTradeAllocationResponseBrokerCapacityOpen | undefined;
    /**
     * The unique identifier that is associated with an order. This is useful for associating the trade allocation with the original trade. This will be assigned a unique UUID if not provided.
     */
    clientOrderId?: string | undefined;
    /**
     * Commission amount of the trade allocation that will only be applied to the to_account_id.
     */
    commissionAmount?: RebookTradeAllocationResponseCommissionAmount | null | undefined;
    /**
     * Timestamp of when the trade allocation took place. If settlement_date is not provided, this field will be converted into Eastern Time and used to calculate settlement_date.
     */
    executionTime?: Date | null | undefined;
    /**
     * Client calculated fees that will only be applied to the to_account_id. Regulatory fees will be calculated automatically if they are not explicitly overwritten or suppressed.
     */
    fees?: Array<BookingFee> | undefined;
    /**
     * The ULID formatted account_id that the positions will be moved from.
     */
    fromAccountId?: string | undefined;
    /**
     * The current activity_id of the trade allocation that positions will be moved from in the Ledger.
     */
    fromActivityId?: string | undefined;
    /**
     * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
     */
    grossAmount?: RebookTradeAllocationResponseGrossAmount | null | undefined;
    /**
     * Identifier (of the type specified in `identifier_type`). Responses will supply the originally requested identifier.
     */
    identifier?: string | undefined;
    /**
     * Identifier type for the asset being traded.
     */
    identifierType?: RebookTradeAllocationResponseIdentifierTypeOpen | undefined;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * One or many lot matching instructions for the trade allocation.
     */
    lotMatchingInstructions?: Array<BookingLot> | undefined;
    /**
     * Caller provided but can be used for booking-service to note original trade details when booking into the error account or using the error asset.
     */
    memo?: string | undefined;
    /**
     * The resource name of the trade allocation.
     */
    name?: string | undefined;
    /**
     * The price for the instrument that is prevailing in the market. Required for FIXED_INCOME trade allocations when the broker_capacity is PRINCIPAL.
     */
    prevailingMarketPrice?: RebookTradeAllocationResponsePrevailingMarketPrice | null | undefined;
    /**
     * Price with requirement of 8 or less integral number and 8 or less fractional precision.
     */
    price?: RebookTradeAllocationResponsePrice | null | undefined;
    /**
     * Price adjustment that will be applied to the net price of the security.
     */
    priceAdjustment?: RebookTradeAllocationResponsePriceAdjustment | null | undefined;
    /**
     * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
     */
    quantity?: RebookTradeAllocationResponseQuantity | null | undefined;
    /**
     * Defaults to T+1 for equities if this is not provided. Calculated using the execution_time field in Eastern Time.
     */
    settlementDate?: RebookTradeAllocationResponseSettlementDate | null | undefined;
    /**
     * Side modifier for the trade allocation.
     */
    sideModifier?: RebookTradeAllocationResponseSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication?: string | undefined;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade allocation (E.g. BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<RebookTradeAllocationResponseSpecialInstructionsOpen> | undefined;
    /**
     * The state that the trade allocation is in.
     */
    state?: RebookTradeAllocationResponseStateOpen | undefined;
    /**
     * The ULID formatted account_id that the positions will be moved to.
     */
    toAccountId?: string | undefined;
    /**
     * The current activity_id of the trade allocation that positions will be moved to in the Ledger.
     */
    toActivityId?: string | undefined;
    /**
     * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
     */
    toSide?: RebookTradeAllocationResponseToSideOpen | undefined;
    /**
     * A ULID to uniquely identify the trade allocation globally.
     */
    tradeAllocationId?: string | undefined;
    /**
     * Denotes that this trade allocation was either when_issued or when_distributed.
     */
    whenIssued?: RebookTradeAllocationResponseWhenIssuedOpen | undefined;
};
/**
 * The amount of interest that has been accrued in the issuing currency for a single instrument.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Type of the asset being traded.
 */
export declare enum RebookTradeAllocationResponseOriginalTradeAllocationAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationAssetTypeOpen = OpenEnum<typeof RebookTradeAllocationResponseOriginalTradeAllocationAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacityOpen = OpenEnum<typeof RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacity>;
/**
 * Commission amount of the trade allocation that will only be applied to the to_account_id.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Identifier type for the asset being traded.
 */
export declare enum RebookTradeAllocationResponseOriginalTradeAllocationIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationIdentifierTypeOpen = OpenEnum<typeof RebookTradeAllocationResponseOriginalTradeAllocationIdentifierType>;
/**
 * The price for the instrument that is prevailing in the market. Required for FIXED_INCOME trade allocations when the broker_capacity is PRINCIPAL.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Price with requirement of 8 or less integral number and 8 or less fractional precision.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export declare enum RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    GrossCredit = "GROSS_CREDIT"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentTypeOpen = OpenEnum<typeof RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentType>;
/**
 * Price adjustment that will be applied to the net price of the security.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security.
     */
    priceAdjustmentType?: RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentTypeOpen | undefined;
};
/**
 * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Defaults to T+1 for equities if this is not provided. Calculated using the execution_time field in Eastern Time.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate = {
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
 * Side modifier for the trade allocation.
 */
export declare enum RebookTradeAllocationResponseOriginalTradeAllocationSideModifier {
    SideModifierUnspecified = "SIDE_MODIFIER_UNSPECIFIED",
    Short = "SHORT",
    ShortExempt = "SHORT_EXEMPT",
    ShortCover = "SHORT_COVER",
    Open = "OPEN",
    Close = "CLOSE"
}
/**
 * Side modifier for the trade allocation.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationSideModifierOpen = OpenEnum<typeof RebookTradeAllocationResponseOriginalTradeAllocationSideModifier>;
export declare enum RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructions {
    SpecialInstructionsUnspecified = "SPECIAL_INSTRUCTIONS_UNSPECIFIED",
    Rule144 = "RULE_144",
    WithDividend = "WITH_DIVIDEND",
    WithRights = "WITH_RIGHTS",
    CloseContract = "CLOSE_CONTRACT",
    CoverShort = "COVER_SHORT",
    CrossTrade = "CROSS_TRADE",
    OpenContractCovered = "OPEN_CONTRACT_COVERED",
    DiscretionExercised = "DISCRETION_EXERCISED",
    DiscretionNotExercised = "DISCRETION_NOT_EXERCISED",
    OptionAssignment = "OPTION_ASSIGNMENT",
    EmployeeStockOption = "EMPLOYEE_STOCK_OPTION",
    InvestmentBanking = "INVESTMENT_BANKING",
    BrokerDealerOrder = "BROKER_DEALER_ORDER",
    MakeMarketInSecurity = "MAKE_MARKET_IN_SECURITY",
    MakeMarketSolicited = "MAKE_MARKET_SOLICITED",
    MakeMarketUnsolicited = "MAKE_MARKET_UNSOLICITED",
    CustomerDirected = "CUSTOMER_DIRECTED",
    FullyRegistered = "FULLY_REGISTERED",
    OpenContract = "OPEN_CONTRACT",
    OddlotDiffOnRequest = "ODDLOT_DIFF_ON_REQUEST",
    ProspectusEnclosed = "PROSPECTUS_ENCLOSED",
    ProspectusSeparateMail = "PROSPECTUS_SEPARATE_MAIL",
    Solicited = "SOLICITED",
    Unsolicited = "UNSOLICITED",
    XDividend = "X_DIVIDEND",
    ActingAsPrincipal = "ACTING_AS_PRINCIPAL",
    AveragePrice = "AVERAGE_PRICE",
    BrokerLiquidation = "BROKER_LIQUIDATION",
    CouponBooks = "COUPON_BOOKS",
    HasPostageFee = "HAS_POSTAGE_FEE",
    InternetOrder = "INTERNET_ORDER",
    MarginSellout = "MARGIN_SELLOUT",
    MarketMakersAsPrincipal = "MARKET_MAKERS_AS_PRINCIPAL",
    NegativeNetProceed = "NEGATIVE_NET_PROCEED",
    PreFigIndicator = "PRE_FIG_INDICATOR",
    RisklessPrincipalInstruction = "RISKLESS_PRINCIPAL_INSTRUCTION",
    ShortInstruction = "SHORT_INSTRUCTION",
    ThirdMarket = "THIRD_MARKET",
    SuppressMsrbTransmission = "SUPPRESS_MSRB_TRANSMISSION",
    SuppressTraceReporting = "SUPPRESS_TRACE_REPORTING",
    SuppressEmailNotification = "SUPPRESS_EMAIL_NOTIFICATION",
    StockReward = "STOCK_REWARD",
    SuppressRegFees = "SUPPRESS_REG_FEES",
    SuppressSecFee = "SUPPRESS_SEC_FEE",
    SuppressTafFee = "SUPPRESS_TAF_FEE",
    DividendReinvestment = "DIVIDEND_REINVESTMENT"
}
export type RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructionsOpen = OpenEnum<typeof RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructions>;
/**
 * The state that the trade allocation is in.
 */
export declare enum RebookTradeAllocationResponseOriginalTradeAllocationState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Rebooking = "REBOOKING",
    Canceling = "CANCELING",
    Booked = "BOOKED",
    Rebooked = "REBOOKED",
    Canceled = "CANCELED",
    Failed = "FAILED"
}
/**
 * The state that the trade allocation is in.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationStateOpen = OpenEnum<typeof RebookTradeAllocationResponseOriginalTradeAllocationState>;
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export declare enum RebookTradeAllocationResponseOriginalTradeAllocationToSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationToSideOpen = OpenEnum<typeof RebookTradeAllocationResponseOriginalTradeAllocationToSide>;
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export declare enum RebookTradeAllocationResponseOriginalTradeAllocationWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export type RebookTradeAllocationResponseOriginalTradeAllocationWhenIssuedOpen = OpenEnum<typeof RebookTradeAllocationResponseOriginalTradeAllocationWhenIssued>;
/**
 * The original trade allocation that was rebooked.
 */
export type OriginalTradeAllocation = {
    /**
     * The amount of interest that has been accrued in the issuing currency for a single instrument.
     */
    accruedInterestAmount?: RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount | null | undefined;
    /**
     * Free form instructions that can be used to provide additional instructions (that are not captured by existing special instructions) and will be put on the trade confirm.
     */
    additionalInstructions?: string | undefined;
    /**
     * Type of the asset being traded.
     */
    assetType?: RebookTradeAllocationResponseOriginalTradeAllocationAssetTypeOpen | undefined;
    /**
     * The yield associated with an individual fill of a fixed income trade. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    bondYield?: Array<BondYield> | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity?: RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacityOpen | undefined;
    /**
     * The unique identifier that is associated with an order. This is useful for associating the trade allocation with the original trade. This will be assigned a unique UUID if not provided.
     */
    clientOrderId?: string | undefined;
    /**
     * Commission amount of the trade allocation that will only be applied to the to_account_id.
     */
    commissionAmount?: RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount | null | undefined;
    /**
     * Timestamp of when the trade allocation took place. If settlement_date is not provided, this field will be converted into Eastern Time and used to calculate settlement_date.
     */
    executionTime?: Date | null | undefined;
    /**
     * Client calculated fees that will only be applied to the to_account_id. Regulatory fees will be calculated automatically if they are not explicitly overwritten or suppressed.
     */
    fees?: Array<BookingFee> | undefined;
    /**
     * The ULID formatted account_id that the positions will be moved from.
     */
    fromAccountId?: string | undefined;
    /**
     * The current activity_id of the trade allocation that positions will be moved from in the Ledger.
     */
    fromActivityId?: string | undefined;
    /**
     * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
     */
    grossAmount?: RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount | null | undefined;
    /**
     * Identifier (of the type specified in `identifier_type`). Responses will supply the originally requested identifier.
     */
    identifier?: string | undefined;
    /**
     * Identifier type for the asset being traded.
     */
    identifierType?: RebookTradeAllocationResponseOriginalTradeAllocationIdentifierTypeOpen | undefined;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * One or many lot matching instructions for the trade allocation.
     */
    lotMatchingInstructions?: Array<BookingLot> | undefined;
    /**
     * Caller provided but can be used for booking-service to note original trade details when booking into the error account or using the error asset.
     */
    memo?: string | undefined;
    /**
     * The resource name of the trade allocation.
     */
    name?: string | undefined;
    /**
     * The price for the instrument that is prevailing in the market. Required for FIXED_INCOME trade allocations when the broker_capacity is PRINCIPAL.
     */
    prevailingMarketPrice?: RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice | null | undefined;
    /**
     * Price with requirement of 8 or less integral number and 8 or less fractional precision.
     */
    price?: RebookTradeAllocationResponseOriginalTradeAllocationPrice | null | undefined;
    /**
     * Price adjustment that will be applied to the net price of the security.
     */
    priceAdjustment?: RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment | null | undefined;
    /**
     * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
     */
    quantity?: RebookTradeAllocationResponseOriginalTradeAllocationQuantity | null | undefined;
    /**
     * Defaults to T+1 for equities if this is not provided. Calculated using the execution_time field in Eastern Time.
     */
    settlementDate?: RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate | null | undefined;
    /**
     * Side modifier for the trade allocation.
     */
    sideModifier?: RebookTradeAllocationResponseOriginalTradeAllocationSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication?: string | undefined;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade allocation (E.g. BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructionsOpen> | undefined;
    /**
     * The state that the trade allocation is in.
     */
    state?: RebookTradeAllocationResponseOriginalTradeAllocationStateOpen | undefined;
    /**
     * The ULID formatted account_id that the positions will be moved to.
     */
    toAccountId?: string | undefined;
    /**
     * The current activity_id of the trade allocation that positions will be moved to in the Ledger.
     */
    toActivityId?: string | undefined;
    /**
     * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
     */
    toSide?: RebookTradeAllocationResponseOriginalTradeAllocationToSideOpen | undefined;
    /**
     * A ULID to uniquely identify the trade allocation globally.
     */
    tradeAllocationId?: string | undefined;
    /**
     * Denotes that this trade allocation was either when_issued or when_distributed.
     */
    whenIssued?: RebookTradeAllocationResponseOriginalTradeAllocationWhenIssuedOpen | undefined;
};
/**
 * Rebooking a trade allocation will always return a new resource that contains the rebooked trade allocation.
 */
export type RebookTradeAllocationResponse = {
    /**
     * The new trade allocation that is booked.
     */
    newTradeAllocation?: NewTradeAllocation | null | undefined;
    /**
     * The original trade allocation that was rebooked.
     */
    originalTradeAllocation?: OriginalTradeAllocation | null | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseAccruedInterestAmount$inboundSchema: z.ZodType<RebookTradeAllocationResponseAccruedInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseAccruedInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseAccruedInterestAmount$outboundSchema: z.ZodType<RebookTradeAllocationResponseAccruedInterestAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseAccruedInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseAccruedInterestAmount$ {
    /** @deprecated use `RebookTradeAllocationResponseAccruedInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseAccruedInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseAccruedInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseAccruedInterestAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseAccruedInterestAmount>;
    /** @deprecated use `RebookTradeAllocationResponseAccruedInterestAmount$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseAccruedInterestAmount$Outbound;
}
export declare function rebookTradeAllocationResponseAccruedInterestAmountToJSON(rebookTradeAllocationResponseAccruedInterestAmount: RebookTradeAllocationResponseAccruedInterestAmount): string;
export declare function rebookTradeAllocationResponseAccruedInterestAmountFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseAccruedInterestAmount, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseAssetType$inboundSchema: z.ZodType<RebookTradeAllocationResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseAssetType$outboundSchema: z.ZodType<RebookTradeAllocationResponseAssetTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseAssetType$ {
    /** @deprecated use `RebookTradeAllocationResponseAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseAssetTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseAssetTypeOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseBrokerCapacity$inboundSchema: z.ZodType<RebookTradeAllocationResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseBrokerCapacity$outboundSchema: z.ZodType<RebookTradeAllocationResponseBrokerCapacityOpen, z.ZodTypeDef, RebookTradeAllocationResponseBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseBrokerCapacity$ {
    /** @deprecated use `RebookTradeAllocationResponseBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseBrokerCapacityOpen, z.ZodTypeDef, RebookTradeAllocationResponseBrokerCapacityOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseCommissionAmount$inboundSchema: z.ZodType<RebookTradeAllocationResponseCommissionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseCommissionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseCommissionAmount$outboundSchema: z.ZodType<RebookTradeAllocationResponseCommissionAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseCommissionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseCommissionAmount$ {
    /** @deprecated use `RebookTradeAllocationResponseCommissionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseCommissionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseCommissionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseCommissionAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseCommissionAmount>;
    /** @deprecated use `RebookTradeAllocationResponseCommissionAmount$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseCommissionAmount$Outbound;
}
export declare function rebookTradeAllocationResponseCommissionAmountToJSON(rebookTradeAllocationResponseCommissionAmount: RebookTradeAllocationResponseCommissionAmount): string;
export declare function rebookTradeAllocationResponseCommissionAmountFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseCommissionAmount, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseGrossAmount$inboundSchema: z.ZodType<RebookTradeAllocationResponseGrossAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseGrossAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseGrossAmount$outboundSchema: z.ZodType<RebookTradeAllocationResponseGrossAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseGrossAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseGrossAmount$ {
    /** @deprecated use `RebookTradeAllocationResponseGrossAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseGrossAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseGrossAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseGrossAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseGrossAmount>;
    /** @deprecated use `RebookTradeAllocationResponseGrossAmount$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseGrossAmount$Outbound;
}
export declare function rebookTradeAllocationResponseGrossAmountToJSON(rebookTradeAllocationResponseGrossAmount: RebookTradeAllocationResponseGrossAmount): string;
export declare function rebookTradeAllocationResponseGrossAmountFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseGrossAmount, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseIdentifierType$inboundSchema: z.ZodType<RebookTradeAllocationResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseIdentifierType$outboundSchema: z.ZodType<RebookTradeAllocationResponseIdentifierTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseIdentifierType$ {
    /** @deprecated use `RebookTradeAllocationResponseIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseIdentifierTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseIdentifierTypeOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponsePrevailingMarketPrice$inboundSchema: z.ZodType<RebookTradeAllocationResponsePrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponsePrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponsePrevailingMarketPrice$outboundSchema: z.ZodType<RebookTradeAllocationResponsePrevailingMarketPrice$Outbound, z.ZodTypeDef, RebookTradeAllocationResponsePrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponsePrevailingMarketPrice$ {
    /** @deprecated use `RebookTradeAllocationResponsePrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponsePrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponsePrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponsePrevailingMarketPrice$Outbound, z.ZodTypeDef, RebookTradeAllocationResponsePrevailingMarketPrice>;
    /** @deprecated use `RebookTradeAllocationResponsePrevailingMarketPrice$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponsePrevailingMarketPrice$Outbound;
}
export declare function rebookTradeAllocationResponsePrevailingMarketPriceToJSON(rebookTradeAllocationResponsePrevailingMarketPrice: RebookTradeAllocationResponsePrevailingMarketPrice): string;
export declare function rebookTradeAllocationResponsePrevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponsePrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponsePrice$inboundSchema: z.ZodType<RebookTradeAllocationResponsePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponsePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponsePrice$outboundSchema: z.ZodType<RebookTradeAllocationResponsePrice$Outbound, z.ZodTypeDef, RebookTradeAllocationResponsePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponsePrice$ {
    /** @deprecated use `RebookTradeAllocationResponsePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponsePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponsePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponsePrice$Outbound, z.ZodTypeDef, RebookTradeAllocationResponsePrice>;
    /** @deprecated use `RebookTradeAllocationResponsePrice$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponsePrice$Outbound;
}
export declare function rebookTradeAllocationResponsePriceToJSON(rebookTradeAllocationResponsePrice: RebookTradeAllocationResponsePrice): string;
export declare function rebookTradeAllocationResponsePriceFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponsePrice, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponsePriceAdjustmentAmount$inboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponsePriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponsePriceAdjustmentAmount$outboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustmentAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponsePriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponsePriceAdjustmentAmount$ {
    /** @deprecated use `RebookTradeAllocationResponsePriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponsePriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustmentAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponsePriceAdjustmentAmount>;
    /** @deprecated use `RebookTradeAllocationResponsePriceAdjustmentAmount$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponsePriceAdjustmentAmount$Outbound;
}
export declare function rebookTradeAllocationResponsePriceAdjustmentAmountToJSON(rebookTradeAllocationResponsePriceAdjustmentAmount: RebookTradeAllocationResponsePriceAdjustmentAmount): string;
export declare function rebookTradeAllocationResponsePriceAdjustmentAmountFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponsePriceAdjustmentAmount, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponsePriceAdjustmentType$inboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponsePriceAdjustmentType$outboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponsePriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponsePriceAdjustmentType$ {
    /** @deprecated use `RebookTradeAllocationResponsePriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponsePriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponsePriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponsePriceAdjustment$inboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustment, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponsePriceAdjustment$Outbound = {
    price_adjustment_amount?: RebookTradeAllocationResponsePriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponsePriceAdjustment$outboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustment$Outbound, z.ZodTypeDef, RebookTradeAllocationResponsePriceAdjustment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponsePriceAdjustment$ {
    /** @deprecated use `RebookTradeAllocationResponsePriceAdjustment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustment, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponsePriceAdjustment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponsePriceAdjustment$Outbound, z.ZodTypeDef, RebookTradeAllocationResponsePriceAdjustment>;
    /** @deprecated use `RebookTradeAllocationResponsePriceAdjustment$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponsePriceAdjustment$Outbound;
}
export declare function rebookTradeAllocationResponsePriceAdjustmentToJSON(rebookTradeAllocationResponsePriceAdjustment: RebookTradeAllocationResponsePriceAdjustment): string;
export declare function rebookTradeAllocationResponsePriceAdjustmentFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponsePriceAdjustment, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseQuantity$inboundSchema: z.ZodType<RebookTradeAllocationResponseQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseQuantity$outboundSchema: z.ZodType<RebookTradeAllocationResponseQuantity$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseQuantity$ {
    /** @deprecated use `RebookTradeAllocationResponseQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseQuantity$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseQuantity>;
    /** @deprecated use `RebookTradeAllocationResponseQuantity$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseQuantity$Outbound;
}
export declare function rebookTradeAllocationResponseQuantityToJSON(rebookTradeAllocationResponseQuantity: RebookTradeAllocationResponseQuantity): string;
export declare function rebookTradeAllocationResponseQuantityFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseQuantity, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseSettlementDate$inboundSchema: z.ZodType<RebookTradeAllocationResponseSettlementDate, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseSettlementDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseSettlementDate$outboundSchema: z.ZodType<RebookTradeAllocationResponseSettlementDate$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseSettlementDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseSettlementDate$ {
    /** @deprecated use `RebookTradeAllocationResponseSettlementDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseSettlementDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseSettlementDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseSettlementDate$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseSettlementDate>;
    /** @deprecated use `RebookTradeAllocationResponseSettlementDate$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseSettlementDate$Outbound;
}
export declare function rebookTradeAllocationResponseSettlementDateToJSON(rebookTradeAllocationResponseSettlementDate: RebookTradeAllocationResponseSettlementDate): string;
export declare function rebookTradeAllocationResponseSettlementDateFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseSettlementDate, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseSideModifier$inboundSchema: z.ZodType<RebookTradeAllocationResponseSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseSideModifier$outboundSchema: z.ZodType<RebookTradeAllocationResponseSideModifierOpen, z.ZodTypeDef, RebookTradeAllocationResponseSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseSideModifier$ {
    /** @deprecated use `RebookTradeAllocationResponseSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseSideModifierOpen, z.ZodTypeDef, RebookTradeAllocationResponseSideModifierOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseSpecialInstructions$inboundSchema: z.ZodType<RebookTradeAllocationResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseSpecialInstructions$outboundSchema: z.ZodType<RebookTradeAllocationResponseSpecialInstructionsOpen, z.ZodTypeDef, RebookTradeAllocationResponseSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseSpecialInstructions$ {
    /** @deprecated use `RebookTradeAllocationResponseSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseSpecialInstructionsOpen, z.ZodTypeDef, RebookTradeAllocationResponseSpecialInstructionsOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseState$inboundSchema: z.ZodType<RebookTradeAllocationResponseStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseState$outboundSchema: z.ZodType<RebookTradeAllocationResponseStateOpen, z.ZodTypeDef, RebookTradeAllocationResponseStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseState$ {
    /** @deprecated use `RebookTradeAllocationResponseState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseStateOpen, z.ZodTypeDef, RebookTradeAllocationResponseStateOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseToSide$inboundSchema: z.ZodType<RebookTradeAllocationResponseToSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseToSide$outboundSchema: z.ZodType<RebookTradeAllocationResponseToSideOpen, z.ZodTypeDef, RebookTradeAllocationResponseToSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseToSide$ {
    /** @deprecated use `RebookTradeAllocationResponseToSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseToSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseToSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseToSideOpen, z.ZodTypeDef, RebookTradeAllocationResponseToSideOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseWhenIssued$inboundSchema: z.ZodType<RebookTradeAllocationResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseWhenIssued$outboundSchema: z.ZodType<RebookTradeAllocationResponseWhenIssuedOpen, z.ZodTypeDef, RebookTradeAllocationResponseWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseWhenIssued$ {
    /** @deprecated use `RebookTradeAllocationResponseWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseWhenIssuedOpen, z.ZodTypeDef, RebookTradeAllocationResponseWhenIssuedOpen>;
}
/** @internal */
export declare const NewTradeAllocation$inboundSchema: z.ZodType<NewTradeAllocation, z.ZodTypeDef, unknown>;
/** @internal */
export type NewTradeAllocation$Outbound = {
    accrued_interest_amount?: RebookTradeAllocationResponseAccruedInterestAmount$Outbound | null | undefined;
    additional_instructions?: string | undefined;
    asset_type?: string | undefined;
    bond_yield?: Array<BondYield$Outbound> | undefined;
    broker_capacity?: string | undefined;
    client_order_id?: string | undefined;
    commission_amount?: RebookTradeAllocationResponseCommissionAmount$Outbound | null | undefined;
    execution_time?: string | null | undefined;
    fees?: Array<BookingFee$Outbound> | undefined;
    from_account_id?: string | undefined;
    from_activity_id?: string | undefined;
    gross_amount?: RebookTradeAllocationResponseGrossAmount$Outbound | null | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    issuing_region_code?: string | undefined;
    lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
    memo?: string | undefined;
    name?: string | undefined;
    prevailing_market_price?: RebookTradeAllocationResponsePrevailingMarketPrice$Outbound | null | undefined;
    price?: RebookTradeAllocationResponsePrice$Outbound | null | undefined;
    price_adjustment?: RebookTradeAllocationResponsePriceAdjustment$Outbound | null | undefined;
    quantity?: RebookTradeAllocationResponseQuantity$Outbound | null | undefined;
    settlement_date?: RebookTradeAllocationResponseSettlementDate$Outbound | null | undefined;
    side_modifier?: string | undefined;
    source_application?: string | undefined;
    special_instructions?: Array<string> | undefined;
    state?: string | undefined;
    to_account_id?: string | undefined;
    to_activity_id?: string | undefined;
    to_side?: string | undefined;
    trade_allocation_id?: string | undefined;
    when_issued?: string | undefined;
};
/** @internal */
export declare const NewTradeAllocation$outboundSchema: z.ZodType<NewTradeAllocation$Outbound, z.ZodTypeDef, NewTradeAllocation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NewTradeAllocation$ {
    /** @deprecated use `NewTradeAllocation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NewTradeAllocation, z.ZodTypeDef, unknown>;
    /** @deprecated use `NewTradeAllocation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NewTradeAllocation$Outbound, z.ZodTypeDef, NewTradeAllocation>;
    /** @deprecated use `NewTradeAllocation$Outbound` instead. */
    type Outbound = NewTradeAllocation$Outbound;
}
export declare function newTradeAllocationToJSON(newTradeAllocation: NewTradeAllocation): string;
export declare function newTradeAllocationFromJSON(jsonString: string): SafeParseResult<NewTradeAllocation, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$Outbound;
}
export declare function rebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmountToJSON(rebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount: RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount): string;
export declare function rebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmountFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationAssetType$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationAssetType$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationAssetTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationAssetType$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationAssetTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationAssetTypeOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacity$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacity$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacityOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacity$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacityOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationBrokerCapacityOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$Outbound;
}
export declare function rebookTradeAllocationResponseOriginalTradeAllocationCommissionAmountToJSON(rebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount: RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount): string;
export declare function rebookTradeAllocationResponseOriginalTradeAllocationCommissionAmountFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$Outbound;
}
export declare function rebookTradeAllocationResponseOriginalTradeAllocationGrossAmountToJSON(rebookTradeAllocationResponseOriginalTradeAllocationGrossAmount: RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount): string;
export declare function rebookTradeAllocationResponseOriginalTradeAllocationGrossAmountFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationIdentifierType$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationIdentifierType$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationIdentifierTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationIdentifierType$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationIdentifierTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationIdentifierTypeOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$Outbound;
}
export declare function rebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPriceToJSON(rebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice: RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice): string;
export declare function rebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPrice$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseOriginalTradeAllocationPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPrice$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPrice$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationPrice$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPrice$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPrice>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPrice$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseOriginalTradeAllocationPrice$Outbound;
}
export declare function rebookTradeAllocationResponseOriginalTradeAllocationPriceToJSON(rebookTradeAllocationResponseOriginalTradeAllocationPrice: RebookTradeAllocationResponseOriginalTradeAllocationPrice): string;
export declare function rebookTradeAllocationResponseOriginalTradeAllocationPriceFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseOriginalTradeAllocationPrice, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$Outbound;
}
export declare function rebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmountToJSON(rebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount: RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount): string;
export declare function rebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmountFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentType$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentType$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentType$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentTypeOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$Outbound = {
    price_adjustment_amount?: RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$Outbound;
}
export declare function rebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentToJSON(rebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment: RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment): string;
export declare function rebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustmentFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationQuantity$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseOriginalTradeAllocationQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationQuantity$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationQuantity$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationQuantity$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationQuantity$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationQuantity>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationQuantity$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseOriginalTradeAllocationQuantity$Outbound;
}
export declare function rebookTradeAllocationResponseOriginalTradeAllocationQuantityToJSON(rebookTradeAllocationResponseOriginalTradeAllocationQuantity: RebookTradeAllocationResponseOriginalTradeAllocationQuantity): string;
export declare function rebookTradeAllocationResponseOriginalTradeAllocationQuantityFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseOriginalTradeAllocationQuantity, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$Outbound, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$Outbound;
}
export declare function rebookTradeAllocationResponseOriginalTradeAllocationSettlementDateToJSON(rebookTradeAllocationResponseOriginalTradeAllocationSettlementDate: RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate): string;
export declare function rebookTradeAllocationResponseOriginalTradeAllocationSettlementDateFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationSideModifier$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationSideModifier$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSideModifierOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationSideModifier$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSideModifierOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationSideModifierOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructions$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructions$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructionsOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructions$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructionsOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationSpecialInstructionsOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationState$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationState$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationStateOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationState$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationStateOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationStateOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationToSide$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationToSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationToSide$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationToSideOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationToSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationToSide$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationToSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationToSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationToSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationToSideOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationToSideOpen>;
}
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationWhenIssued$inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeAllocationResponseOriginalTradeAllocationWhenIssued$outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationWhenIssuedOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponseOriginalTradeAllocationWhenIssued$ {
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponseOriginalTradeAllocationWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponseOriginalTradeAllocationWhenIssuedOpen, z.ZodTypeDef, RebookTradeAllocationResponseOriginalTradeAllocationWhenIssuedOpen>;
}
/** @internal */
export declare const OriginalTradeAllocation$inboundSchema: z.ZodType<OriginalTradeAllocation, z.ZodTypeDef, unknown>;
/** @internal */
export type OriginalTradeAllocation$Outbound = {
    accrued_interest_amount?: RebookTradeAllocationResponseOriginalTradeAllocationAccruedInterestAmount$Outbound | null | undefined;
    additional_instructions?: string | undefined;
    asset_type?: string | undefined;
    bond_yield?: Array<BondYield$Outbound> | undefined;
    broker_capacity?: string | undefined;
    client_order_id?: string | undefined;
    commission_amount?: RebookTradeAllocationResponseOriginalTradeAllocationCommissionAmount$Outbound | null | undefined;
    execution_time?: string | null | undefined;
    fees?: Array<BookingFee$Outbound> | undefined;
    from_account_id?: string | undefined;
    from_activity_id?: string | undefined;
    gross_amount?: RebookTradeAllocationResponseOriginalTradeAllocationGrossAmount$Outbound | null | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    issuing_region_code?: string | undefined;
    lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
    memo?: string | undefined;
    name?: string | undefined;
    prevailing_market_price?: RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice$Outbound | null | undefined;
    price?: RebookTradeAllocationResponseOriginalTradeAllocationPrice$Outbound | null | undefined;
    price_adjustment?: RebookTradeAllocationResponseOriginalTradeAllocationPriceAdjustment$Outbound | null | undefined;
    quantity?: RebookTradeAllocationResponseOriginalTradeAllocationQuantity$Outbound | null | undefined;
    settlement_date?: RebookTradeAllocationResponseOriginalTradeAllocationSettlementDate$Outbound | null | undefined;
    side_modifier?: string | undefined;
    source_application?: string | undefined;
    special_instructions?: Array<string> | undefined;
    state?: string | undefined;
    to_account_id?: string | undefined;
    to_activity_id?: string | undefined;
    to_side?: string | undefined;
    trade_allocation_id?: string | undefined;
    when_issued?: string | undefined;
};
/** @internal */
export declare const OriginalTradeAllocation$outboundSchema: z.ZodType<OriginalTradeAllocation$Outbound, z.ZodTypeDef, OriginalTradeAllocation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OriginalTradeAllocation$ {
    /** @deprecated use `OriginalTradeAllocation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OriginalTradeAllocation, z.ZodTypeDef, unknown>;
    /** @deprecated use `OriginalTradeAllocation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OriginalTradeAllocation$Outbound, z.ZodTypeDef, OriginalTradeAllocation>;
    /** @deprecated use `OriginalTradeAllocation$Outbound` instead. */
    type Outbound = OriginalTradeAllocation$Outbound;
}
export declare function originalTradeAllocationToJSON(originalTradeAllocation: OriginalTradeAllocation): string;
export declare function originalTradeAllocationFromJSON(jsonString: string): SafeParseResult<OriginalTradeAllocation, SDKValidationError>;
/** @internal */
export declare const RebookTradeAllocationResponse$inboundSchema: z.ZodType<RebookTradeAllocationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationResponse$Outbound = {
    new_trade_allocation?: NewTradeAllocation$Outbound | null | undefined;
    original_trade_allocation?: OriginalTradeAllocation$Outbound | null | undefined;
};
/** @internal */
export declare const RebookTradeAllocationResponse$outboundSchema: z.ZodType<RebookTradeAllocationResponse$Outbound, z.ZodTypeDef, RebookTradeAllocationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationResponse$ {
    /** @deprecated use `RebookTradeAllocationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationResponse$Outbound, z.ZodTypeDef, RebookTradeAllocationResponse>;
    /** @deprecated use `RebookTradeAllocationResponse$Outbound` instead. */
    type Outbound = RebookTradeAllocationResponse$Outbound;
}
export declare function rebookTradeAllocationResponseToJSON(rebookTradeAllocationResponse: RebookTradeAllocationResponse): string;
export declare function rebookTradeAllocationResponseFromJSON(jsonString: string): SafeParseResult<RebookTradeAllocationResponse, SDKValidationError>;
//# sourceMappingURL=rebooktradeallocationresponse.d.ts.map