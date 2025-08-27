import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TradingExecutedPrice, TradingExecutedPrice$Outbound } from "./tradingexecutedprice.js";
import { TradingExecutions, TradingExecutions$Outbound } from "./tradingexecutions.js";
import { TradingFee, TradingFee$Outbound } from "./tradingfee.js";
/**
 * The type of the asset in this order, which must be one of the following:
 *
 * @remarks
 *  EQUITY, MUTUAL_FUND, and FIXED_INCOME.
 */
export declare enum OrderAssetType {
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME",
    MutualFund = "MUTUAL_FUND"
}
/**
 * The type of the asset in this order, which must be one of the following:
 *
 * @remarks
 *  EQUITY, MUTUAL_FUND, and FIXED_INCOME.
 */
export type OrderAssetTypeOpen = OpenEnum<typeof OrderAssetType>;
/**
 * Defaults to "AGENCY" if not specified. For Equities: Only "AGENCY" is allowed. For Mutual Funds: Only "AGENCY" is allowed. For Fixed Income: Either "AGENCY" or "PRINCIPAL" are allowed.
 */
export declare enum OrderBrokerCapacity {
    BrokerCapacityUnspecified = "BROKER_CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL"
}
/**
 * Defaults to "AGENCY" if not specified. For Equities: Only "AGENCY" is allowed. For Mutual Funds: Only "AGENCY" is allowed. For Fixed Income: Either "AGENCY" or "PRINCIPAL" are allowed.
 */
export type OrderBrokerCapacityOpen = OpenEnum<typeof OrderBrokerCapacity>;
/**
 * Output only field that is required for Equity Orders for any client who is having Apex do CAT reporting on their behalf. This field denotes the initiator of the cancel request. This field will be present when provided on the CancelOrderRequest
 */
export declare enum CancelInitiator {
    InitiatorUnspecified = "INITIATOR_UNSPECIFIED",
    Firm = "FIRM",
    Client = "CLIENT"
}
/**
 * Output only field that is required for Equity Orders for any client who is having Apex do CAT reporting on their behalf. This field denotes the initiator of the cancel request. This field will be present when provided on the CancelOrderRequest
 */
export type CancelInitiatorOpen = OpenEnum<typeof CancelInitiator>;
/**
 * Used to denote when a cancel request has been rejected.
 */
export declare enum CancelRejectedReason {
    CancelRejectReasonUnspecified = "CANCEL_REJECT_REASON_UNSPECIFIED",
    TooLateToCancel = "TOO_LATE_TO_CANCEL",
    CancellationUnknownOrder = "CANCELLATION_UNKNOWN_ORDER",
    BrokerExchangeOption = "BROKER_EXCHANGE_OPTION",
    OrderAlreadyInPendingCancelOrPendingReplaceStatus = "ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS",
    Duplicate = "DUPLICATE",
    CancellationSystemError = "CANCELLATION_SYSTEM_ERROR",
    OrderAlreadyCanceled = "ORDER_ALREADY_CANCELED",
    CancellationMisconfiguredClient = "CANCELLATION_MISCONFIGURED_CLIENT"
}
/**
 * Used to denote when a cancel request has been rejected.
 */
export type CancelRejectedReasonOpen = OpenEnum<typeof CancelRejectedReason>;
/**
 * The type of commission value being specified. Only the type of "AMOUNT" is supported.
 */
export declare enum OrderCommissionType {
    CommissionTypeUnspecified = "COMMISSION_TYPE_UNSPECIFIED",
    Amount = "AMOUNT"
}
/**
 * The type of commission value being specified. Only the type of "AMOUNT" is supported.
 */
export type OrderCommissionTypeOpen = OpenEnum<typeof OrderCommissionType>;
/**
 * The value of this commission. If type = `AMOUNT`, then this expresses a monetary value in same currency denoted on the order itself.
 */
export type Value = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * A custom commission to be applied to this order. When specifying an AMOUNT type, the value represents a notional amount measured in the currency of the order.
 */
export type OrderCommission = {
    /**
     * The type of commission value being specified. Only the type of "AMOUNT" is supported.
     */
    type?: OrderCommissionTypeOpen | undefined;
    /**
     * The value of this commission. If type = `AMOUNT`, then this expresses a monetary value in same currency denoted on the order itself.
     */
    value?: Value | null | undefined;
};
/**
 * The sum of order quantity & price, across all fills, reported in the currency specified in the order. (This will be rounded to 2 decimal places for USD currencies). Will be absent if an order has no fill information.
 */
export type CumulativeNotionalValue = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Any reporting data provided by the SetExtraReportingData endpoint.
 */
export type ExtraReportingData = {
    cancelConfirmedTime?: Date | null | undefined;
};
/**
 * The summed quantity value across all fills in this order, up to a maximum of 5 decimal places. Will be absent if an order has no fill information.
 */
export type FilledQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported For Fixed Income: only CUSIP and ISIN are supported
 */
export declare enum OrderIdentifierType {
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported For Fixed Income: only CUSIP and ISIN are supported
 */
export type OrderIdentifierTypeOpen = OpenEnum<typeof OrderIdentifierType>;
/**
 * The amount of the LOI. This is a monetary value in the same currency as the order.
 */
export type OrderAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The period start date, specific to the US Eastern Time Zone, of the LOI. Date range: 90 days in the past and 13 months in the future from the order_date.
 */
export type PeriodStartDate = {
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
 * Letter of Intent (LOI). An LOI allows investors to receive sales charge discounts based on a commitment to buy a specified monetary amount of shares over a period of time, usually 13 months.
 */
export type LetterOfIntent = {
    /**
     * The amount of the LOI. This is a monetary value in the same currency as the order.
     */
    amount?: OrderAmount | null | undefined;
    /**
     * The period start date, specific to the US Eastern Time Zone, of the LOI. Date range: 90 days in the past and 13 months in the future from the order_date.
     */
    periodStartDate?: PeriodStartDate | null | undefined;
};
/**
 * The limit price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1. For fixed income orders this is expressed as a percentage of par, which allows up to 4 decimal places in the USD currency.
 */
export type OrderPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
 */
export declare enum OrderLimitPriceType {
    LimitPriceTypeUnspecified = "LIMIT_PRICE_TYPE_UNSPECIFIED",
    PricePerUnit = "PRICE_PER_UNIT",
    PercentageOfPar = "PERCENTAGE_OF_PAR"
}
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
 */
export type OrderLimitPriceTypeOpen = OpenEnum<typeof OrderLimitPriceType>;
/**
 * The limit price for this order.
 */
export type LimitPrice = {
    /**
     * The limit price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1. For fixed income orders this is expressed as a percentage of par, which allows up to 4 decimal places in the USD currency.
     */
    price?: OrderPrice | null | undefined;
    /**
     * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
     */
    type?: OrderLimitPriceTypeOpen | undefined;
};
/**
 * The maximum number of shares to be sold if this is a notional SELL order of an Equity asset type. (Prohibited for other side or asset_type inputs.)
 *
 * @remarks
 *
 *  This will only be recognized for clients configured not to use OMS checks. When specified, must be greater than 0 and can't exceed 5 decimal places.
 */
export type MaxSellQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Notional quantity of the order, measured in USD. Maximum 2 decimal place precision. For Equities: This represents the maximum amount to be spent. The final order may may have a smaller notional amount. For Mutual Funds: Only supported for BUY orders. The order will be transacted at the full notional amount specified. For Fixed Income: Not supported, you must specify a `quantity` value.
 */
export type NotionalValue = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The date on which the order will go to the market: must either be "today" or the next valid trading day. If the current day is not a valid trading day, then the next valid market day must be specified. If the current time is within 5 minutes prior to market close, the next valid market day may be specified. If the current time is after market close, and before midnight Eastern, then the next valid market day must be specified. In all other cases, the current day, Eastern must be specified.
 */
export type OrderDate = {
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
 * When an order has the REJECTED status, this will be populated with a system code describing the rejection.
 */
export declare enum OrderRejectedReason {
    OrderRejectReasonUnspecified = "ORDER_REJECT_REASON_UNSPECIFIED",
    BrokerOption = "BROKER_OPTION",
    UnknownSecurity = "UNKNOWN_SECURITY",
    ExchangeClosed = "EXCHANGE_CLOSED",
    OrderExceedsLimit = "ORDER_EXCEEDS_LIMIT",
    TooLateToEnter = "TOO_LATE_TO_ENTER",
    UnknownOrder = "UNKNOWN_ORDER",
    DuplicateOrder = "DUPLICATE_ORDER",
    StaleOrder = "STALE_ORDER",
    BelowNotionalMinimum = "BELOW_NOTIONAL_MINIMUM",
    OrderDateUnavailable = "ORDER_DATE_UNAVAILABLE",
    AggressiveLimitPrice = "AGGRESSIVE_LIMIT_PRICE",
    AccountNotEntitled = "ACCOUNT_NOT_ENTITLED",
    SystemError = "SYSTEM_ERROR",
    BlockingCorporateAction = "BLOCKING_CORPORATE_ACTION",
    UnavailablePriceQuote = "UNAVAILABLE_PRICE_QUOTE",
    ExecutionMisconfiguredClient = "EXECUTION_MISCONFIGURED_CLIENT",
    NotionalQuantityNotAllowedForSecurity = "NOTIONAL_QUANTITY_NOT_ALLOWED_FOR_SECURITY",
    FractionalQuantityNotAllowedForSecurity = "FRACTIONAL_QUANTITY_NOT_ALLOWED_FOR_SECURITY",
    OnlyFractionalSellOrWholeOrdersAllowedForSecurity = "ONLY_FRACTIONAL_SELL_OR_WHOLE_ORDERS_ALLOWED_FOR_SECURITY",
    SymbolNotTradeable = "SYMBOL_NOT_TRADEABLE",
    AboveNotionalMaximum = "ABOVE_NOTIONAL_MAXIMUM",
    AboveShareMaximum = "ABOVE_SHARE_MAXIMUM",
    FailedBuyingPower = "FAILED_BUYING_POWER",
    InsufficientPosition = "INSUFFICIENT_POSITION",
    MaxSellQuantityRequired = "MAX_SELL_QUANTITY_REQUIRED",
    MaxSellQuantityProhibited = "MAX_SELL_QUANTITY_PROHIBITED",
    StopPriceExceedsMarketPrice = "STOP_PRICE_EXCEEDS_MARKET_PRICE",
    TradesDisabledForAssetType = "TRADES_DISABLED_FOR_ASSET_TYPE",
    CommissionNotAllowedForNonBrokerDealer = "COMMISSION_NOT_ALLOWED_FOR_NON_BROKER_DEALER",
    AssetNotSetUpToTrade = "ASSET_NOT_SET_UP_TO_TRADE",
    InvalidOrderQuantity = "INVALID_ORDER_QUANTITY",
    ClientReceivedTimeRequired = "CLIENT_RECEIVED_TIME_REQUIRED",
    ClientNotPermittedToUseTradingSession = "CLIENT_NOT_PERMITTED_TO_USE_TRADING_SESSION",
    StopPriceBelowMarketPrice = "STOP_PRICE_BELOW_MARKET_PRICE"
}
/**
 * When an order has the REJECTED status, this will be populated with a system code describing the rejection.
 */
export type OrderRejectedReasonOpen = OpenEnum<typeof OrderRejectedReason>;
/**
 * The processing status of the order
 */
export declare enum OrderStatus {
    OrderStatusUnspecified = "ORDER_STATUS_UNSPECIFIED",
    PendingNew = "PENDING_NEW",
    New = "NEW",
    PendingQueued = "PENDING_QUEUED",
    Queued = "QUEUED",
    PartiallyFilled = "PARTIALLY_FILLED",
    Filled = "FILLED",
    PendingCancel = "PENDING_CANCEL",
    Canceled = "CANCELED",
    Rejected = "REJECTED"
}
/**
 * The processing status of the order
 */
export type OrderStatusOpen = OpenEnum<typeof OrderStatus>;
/**
 * The execution type of this order. For Equities: MARKET, and LIMIT are supported. For Mutual Funds: only MARKET is supported. For Fixed Income: only LIMIT is supported.
 */
export declare enum OrderOrderType {
    Limit = "LIMIT",
    Market = "MARKET"
}
/**
 * The execution type of this order. For Equities: MARKET, and LIMIT are supported. For Mutual Funds: only MARKET is supported. For Fixed Income: only LIMIT is supported.
 */
export type OrderOrderTypeOpen = OpenEnum<typeof OrderOrderType>;
/**
 * The prevailing market price, calculated as a weighted average of the fills in this order, up to a maximum of 5 decimal places. Will be absent if an order has no executions.
 */
export type OrderPrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Numeric quantity of the order. For Equities: Represents the number of shares, must be greater than zero and may not exceed 5 decimal places. For Mutual Funds: Only supported for SELL orders. Represents the number of shares, up to a maximum of 3 decimal places. For Fixed Income: Represents the par (face-value) amount being ordered, and may not exceed two decimal places for USD-based currencies. Either a quantity or notional_value MUST be specified (but not both).
 */
export type OrderQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The amount of the ROA. This is a monetary value in the same currency as the order. Only 9999999.99 is supported.
 */
export type OrderRightsOfAccumulationAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Rights of Accumulation (ROA). An ROA allows an investor to aggregate their own fund shares with the holdings of certain related parties toward achieving the investment thresholds at which sales charge discounts become available.
 */
export type RightsOfAccumulation = {
    /**
     * The amount of the ROA. This is a monetary value in the same currency as the order. Only 9999999.99 is supported.
     */
    amount?: OrderRightsOfAccumulationAmount | null | undefined;
};
/**
 * The side of this order.
 */
export declare enum OrderSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * The side of this order.
 */
export type OrderSideOpen = OpenEnum<typeof OrderSide>;
export declare enum OrderSpecialReportingInstructions {
    SpecialReportingInstructionsUnspecified = "SPECIAL_REPORTING_INSTRUCTIONS_UNSPECIFIED",
    CustomerDirected = "CUSTOMER_DIRECTED",
    WithDividend = "WITH_DIVIDEND",
    WithRights = "WITH_RIGHTS",
    DiscretionExercised = "DISCRETION_EXERCISED",
    DiscretionNotExercised = "DISCRETION_NOT_EXERCISED",
    BrokerDealerOrder = "BROKER_DEALER_ORDER",
    FullyRegistered = "FULLY_REGISTERED",
    OddlotDiffOnRequest = "ODDLOT_DIFF_ON_REQUEST",
    ProspectusEnclosed = "PROSPECTUS_ENCLOSED",
    ProspectusSeparateMail = "PROSPECTUS_SEPARATE_MAIL",
    Solicited = "SOLICITED",
    Unsolicited = "UNSOLICITED",
    XDividend = "X_DIVIDEND",
    ActingAsPrincipal = "ACTING_AS_PRINCIPAL",
    AveragePrice = "AVERAGE_PRICE",
    BrokerLiquidation = "BROKER_LIQUIDATION",
    InternetOrder = "INTERNET_ORDER",
    MarginSellout = "MARGIN_SELLOUT",
    NegativeNetProceed = "NEGATIVE_NET_PROCEED",
    RisklessPrincipal = "RISKLESS_PRINCIPAL",
    ThirdMarket = "THIRD_MARKET",
    SuppressTraceReporting = "SUPPRESS_TRACE_REPORTING",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
export type OrderSpecialReportingInstructionsOpen = OpenEnum<typeof OrderSpecialReportingInstructions>;
/**
 * The stop price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1.
 */
export type OrderStopPricePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of this price, which must PRICE_PER_UNIT for equity orders. (Fixed income and mutual fund assets do not support stop orders.)
 */
export declare enum OrderStopPriceType {
    StopPriceTypeUnspecified = "STOP_PRICE_TYPE_UNSPECIFIED",
    PricePerUnit = "PRICE_PER_UNIT"
}
/**
 * The type of this price, which must PRICE_PER_UNIT for equity orders. (Fixed income and mutual fund assets do not support stop orders.)
 */
export type OrderStopPriceTypeOpen = OpenEnum<typeof OrderStopPriceType>;
/**
 * The stop price for this order. Only allowed for equities, when the side is SELL.
 */
export type StopPrice = {
    /**
     * The stop price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1.
     */
    price?: OrderStopPricePrice | null | undefined;
    /**
     * The type of this price, which must PRICE_PER_UNIT for equity orders. (Fixed income and mutual fund assets do not support stop orders.)
     */
    type?: OrderStopPriceTypeOpen | undefined;
};
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export declare enum OrderTimeInForce {
    Day = "DAY"
}
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export type OrderTimeInForceOpen = OpenEnum<typeof OrderTimeInForce>;
/**
 * Which TradingSession to trade in, defaults to 'CORE'. Only available for Equity orders.
 */
export declare enum OrderTradingSession {
    TradingSessionUnspecified = "TRADING_SESSION_UNSPECIFIED",
    Core = "CORE",
    Pre = "PRE",
    Post = "POST",
    Overnight = "OVERNIGHT",
    Apex24 = "APEX24",
    Gtx = "GTX"
}
/**
 * Which TradingSession to trade in, defaults to 'CORE'. Only available for Equity orders.
 */
export type OrderTradingSessionOpen = OpenEnum<typeof OrderTradingSession>;
/**
 * The message describing an order
 */
export type Order = {
    /**
     * The identifier of the account transacting this order
     */
    accountId?: string | undefined;
    /**
     * Apex Asset ID for this asset. This will not be returned in the initial CreateOrder response and will be available after an order completes validation. If the provided identifier does not match any Apex asset available for trading, an OrderRejectReason of "UNKNOWN_SECURITY" will be returned and the asset_id will not be set.
     */
    assetId?: string | undefined;
    /**
     * The type of the asset in this order, which must be one of the following:
     *
     * @remarks
     *  EQUITY, MUTUAL_FUND, and FIXED_INCOME.
     */
    assetType?: OrderAssetTypeOpen | undefined;
    /**
     * The average prices, as weighted averages, across all executions in this order. Will be absent if an order has no executions.
     *
     * @remarks
     *
     *  When asset_type = EQUITY or MUTUAL_FUND, there will be at most one value present, with a type of PRICE_PER_UNIT. This will have up to 4 decimal places for USD amounts less than $1, and a maximum of two for larger USD amounts.
     *
     *  When asset_type = FIXED_INCOME, there may be more than one value present which would have a type other than PRICE_PER_UNIT. Price values in PERCENTAGE_OF_PAR will have up to 4 decimal places of precision, and price values measured in yields will support up to 5 decimal places.
     */
    averagePrices?: Array<TradingExecutedPrice> | undefined;
    /**
     * Defaults to "AGENCY" if not specified. For Equities: Only "AGENCY" is allowed. For Mutual Funds: Only "AGENCY" is allowed. For Fixed Income: Either "AGENCY" or "PRINCIPAL" are allowed.
     */
    brokerCapacity?: OrderBrokerCapacityOpen | undefined;
    /**
     * Output only field that is required for Equity Orders for any client who is having Apex do CAT reporting on their behalf. This field denotes the initiator of the cancel request. This field will be present when provided on the CancelOrderRequest
     */
    cancelInitiator?: CancelInitiatorOpen | undefined;
    /**
     * Used to explain why an order is canceled
     */
    cancelReason?: string | undefined;
    /**
     * Used to denote when a cancel request has been rejected.
     */
    cancelRejectedReason?: CancelRejectedReasonOpen | undefined;
    /**
     * Output only field for Equity Orders related to CAT reporting on behalf of clients. This field will be present when provided on the CancelOrderRequest
     */
    clientCancelReceivedTime?: Date | null | undefined;
    /**
     * User-supplied unique order ID. Cannot be more than 40 characters long.
     */
    clientOrderId?: string | undefined;
    /**
     * Required for Equity Orders for any client who is having Apex do CAT reporting on their behalf. A value may be provided for non-Equity orders, and will be remembered, but valid timestamps will have no impact on how they are processed.
     */
    clientReceivedTime?: Date | null | undefined;
    /**
     * A custom commission to be applied to this order. When specifying an AMOUNT type, the value represents a notional amount measured in the currency of the order.
     */
    commission?: OrderCommission | null | undefined;
    /**
     * Time of the order creation
     */
    createTime?: Date | null | undefined;
    /**
     * The sum of order quantity & price, across all fills, reported in the currency specified in the order. (This will be rounded to 2 decimal places for USD currencies). Will be absent if an order has no fill information.
     */
    cumulativeNotionalValue?: CumulativeNotionalValue | null | undefined;
    /**
     * Defaults to "USD". Only "USD" is supported. Full list of currency codes is defined at: https://en.wikipedia.org/wiki/ISO_4217
     */
    currencyCode?: string | undefined;
    /**
     * The execution-level details that compose this order
     */
    executions?: Array<TradingExecutions> | undefined;
    /**
     * Any reporting data provided by the SetExtraReportingData endpoint.
     */
    extraReportingData?: ExtraReportingData | null | undefined;
    /**
     * Fees that will be applied to this order. Only the BROKER_FEE type is supported.
     */
    fees?: Array<TradingFee> | undefined;
    /**
     * The summed quantity value across all fills in this order, up to a maximum of 5 decimal places. Will be absent if an order has no fill information.
     */
    filledQuantity?: FilledQuantity | null | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier?: string | undefined;
    /**
     * A string attribute denoting the country of issuance or where the asset is trading. Only available for Mutual Fund orders. Defaults to US, when trading non US mutual funds this field must be provided Complies with ISO-3166 Alpha-2 Codes
     */
    identifierIssuingRegionCode?: string | undefined;
    /**
     * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported For Fixed Income: only CUSIP and ISIN are supported
     */
    identifierType?: OrderIdentifierTypeOpen | undefined;
    /**
     * Time of the last order update
     */
    lastUpdateTime?: Date | null | undefined;
    /**
     * Letter of Intent (LOI). An LOI allows investors to receive sales charge discounts based on a commitment to buy a specified monetary amount of shares over a period of time, usually 13 months.
     */
    letterOfIntent?: LetterOfIntent | null | undefined;
    /**
     * The limit price for this order.
     */
    limitPrice?: LimitPrice | null | undefined;
    /**
     * The maximum number of shares to be sold if this is a notional SELL order of an Equity asset type. (Prohibited for other side or asset_type inputs.)
     *
     * @remarks
     *
     *  This will only be recognized for clients configured not to use OMS checks. When specified, must be greater than 0 and can't exceed 5 decimal places.
     */
    maxSellQuantity?: MaxSellQuantity | null | undefined;
    /**
     * System generated name of the order.
     */
    name?: string | undefined;
    /**
     * Notional quantity of the order, measured in USD. Maximum 2 decimal place precision. For Equities: This represents the maximum amount to be spent. The final order may may have a smaller notional amount. For Mutual Funds: Only supported for BUY orders. The order will be transacted at the full notional amount specified. For Fixed Income: Not supported, you must specify a `quantity` value.
     */
    notionalValue?: NotionalValue | null | undefined;
    /**
     * The date on which the order will go to the market: must either be "today" or the next valid trading day. If the current day is not a valid trading day, then the next valid market day must be specified. If the current time is within 5 minutes prior to market close, the next valid market day may be specified. If the current time is after market close, and before midnight Eastern, then the next valid market day must be specified. In all other cases, the current day, Eastern must be specified.
     */
    orderDate?: OrderDate | null | undefined;
    /**
     * System generated unique id for the order.
     */
    orderId?: string | undefined;
    /**
     * When an order has the REJECTED status, this will be populated with a system code describing the rejection.
     */
    orderRejectedReason?: OrderRejectedReasonOpen | undefined;
    /**
     * The processing status of the order
     */
    orderStatus?: OrderStatusOpen | undefined;
    /**
     * The execution type of this order. For Equities: MARKET, and LIMIT are supported. For Mutual Funds: only MARKET is supported. For Fixed Income: only LIMIT is supported.
     */
    orderType?: OrderOrderTypeOpen | undefined;
    /**
     * The prevailing market price, calculated as a weighted average of the fills in this order, up to a maximum of 5 decimal places. Will be absent if an order has no executions.
     */
    prevailingMarketPrice?: OrderPrevailingMarketPrice | null | undefined;
    /**
     * Numeric quantity of the order. For Equities: Represents the number of shares, must be greater than zero and may not exceed 5 decimal places. For Mutual Funds: Only supported for SELL orders. Represents the number of shares, up to a maximum of 3 decimal places. For Fixed Income: Represents the par (face-value) amount being ordered, and may not exceed two decimal places for USD-based currencies. Either a quantity or notional_value MUST be specified (but not both).
     */
    quantity?: OrderQuantity | null | undefined;
    /**
     * Rights of Accumulation (ROA). An ROA allows an investor to aggregate their own fund shares with the holdings of certain related parties toward achieving the investment thresholds at which sales charge discounts become available.
     */
    rightsOfAccumulation?: RightsOfAccumulation | null | undefined;
    /**
     * The side of this order.
     */
    side?: OrderSideOpen | undefined;
    /**
     * Special Reporting Instructions to be applied to this order. Can include multiple Instructions.
     */
    specialReportingInstructions?: Array<OrderSpecialReportingInstructionsOpen> | undefined;
    /**
     * The stop price for this order. Only allowed for equities, when the side is SELL.
     */
    stopPrice?: StopPrice | null | undefined;
    /**
     * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
     */
    timeInForce?: OrderTimeInForceOpen | undefined;
    /**
     * Which TradingSession to trade in, defaults to 'CORE'. Only available for Equity orders.
     */
    tradingSession?: OrderTradingSessionOpen | undefined;
};
/** @internal */
export declare const OrderAssetType$inboundSchema: z.ZodType<OrderAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderAssetType$outboundSchema: z.ZodType<OrderAssetTypeOpen, z.ZodTypeDef, OrderAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderAssetType$ {
    /** @deprecated use `OrderAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderAssetTypeOpen, z.ZodTypeDef, OrderAssetTypeOpen>;
}
/** @internal */
export declare const OrderBrokerCapacity$inboundSchema: z.ZodType<OrderBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderBrokerCapacity$outboundSchema: z.ZodType<OrderBrokerCapacityOpen, z.ZodTypeDef, OrderBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderBrokerCapacity$ {
    /** @deprecated use `OrderBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderBrokerCapacityOpen, z.ZodTypeDef, OrderBrokerCapacityOpen>;
}
/** @internal */
export declare const CancelInitiator$inboundSchema: z.ZodType<CancelInitiatorOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelInitiator$outboundSchema: z.ZodType<CancelInitiatorOpen, z.ZodTypeDef, CancelInitiatorOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelInitiator$ {
    /** @deprecated use `CancelInitiator$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelInitiatorOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelInitiator$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelInitiatorOpen, z.ZodTypeDef, CancelInitiatorOpen>;
}
/** @internal */
export declare const CancelRejectedReason$inboundSchema: z.ZodType<CancelRejectedReasonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelRejectedReason$outboundSchema: z.ZodType<CancelRejectedReasonOpen, z.ZodTypeDef, CancelRejectedReasonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelRejectedReason$ {
    /** @deprecated use `CancelRejectedReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelRejectedReasonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelRejectedReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelRejectedReasonOpen, z.ZodTypeDef, CancelRejectedReasonOpen>;
}
/** @internal */
export declare const OrderCommissionType$inboundSchema: z.ZodType<OrderCommissionTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderCommissionType$outboundSchema: z.ZodType<OrderCommissionTypeOpen, z.ZodTypeDef, OrderCommissionTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCommissionType$ {
    /** @deprecated use `OrderCommissionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCommissionTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCommissionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCommissionTypeOpen, z.ZodTypeDef, OrderCommissionTypeOpen>;
}
/** @internal */
export declare const Value$inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown>;
/** @internal */
export type Value$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Value$outboundSchema: z.ZodType<Value$Outbound, z.ZodTypeDef, Value>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Value$ {
    /** @deprecated use `Value$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown>;
    /** @deprecated use `Value$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Value$Outbound, z.ZodTypeDef, Value>;
    /** @deprecated use `Value$Outbound` instead. */
    type Outbound = Value$Outbound;
}
export declare function valueToJSON(value: Value): string;
export declare function valueFromJSON(jsonString: string): SafeParseResult<Value, SDKValidationError>;
/** @internal */
export declare const OrderCommission$inboundSchema: z.ZodType<OrderCommission, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderCommission$Outbound = {
    type?: string | undefined;
    value?: Value$Outbound | null | undefined;
};
/** @internal */
export declare const OrderCommission$outboundSchema: z.ZodType<OrderCommission$Outbound, z.ZodTypeDef, OrderCommission>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCommission$ {
    /** @deprecated use `OrderCommission$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCommission, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCommission$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCommission$Outbound, z.ZodTypeDef, OrderCommission>;
    /** @deprecated use `OrderCommission$Outbound` instead. */
    type Outbound = OrderCommission$Outbound;
}
export declare function orderCommissionToJSON(orderCommission: OrderCommission): string;
export declare function orderCommissionFromJSON(jsonString: string): SafeParseResult<OrderCommission, SDKValidationError>;
/** @internal */
export declare const CumulativeNotionalValue$inboundSchema: z.ZodType<CumulativeNotionalValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CumulativeNotionalValue$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CumulativeNotionalValue$outboundSchema: z.ZodType<CumulativeNotionalValue$Outbound, z.ZodTypeDef, CumulativeNotionalValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CumulativeNotionalValue$ {
    /** @deprecated use `CumulativeNotionalValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CumulativeNotionalValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `CumulativeNotionalValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CumulativeNotionalValue$Outbound, z.ZodTypeDef, CumulativeNotionalValue>;
    /** @deprecated use `CumulativeNotionalValue$Outbound` instead. */
    type Outbound = CumulativeNotionalValue$Outbound;
}
export declare function cumulativeNotionalValueToJSON(cumulativeNotionalValue: CumulativeNotionalValue): string;
export declare function cumulativeNotionalValueFromJSON(jsonString: string): SafeParseResult<CumulativeNotionalValue, SDKValidationError>;
/** @internal */
export declare const ExtraReportingData$inboundSchema: z.ZodType<ExtraReportingData, z.ZodTypeDef, unknown>;
/** @internal */
export type ExtraReportingData$Outbound = {
    cancel_confirmed_time?: string | null | undefined;
};
/** @internal */
export declare const ExtraReportingData$outboundSchema: z.ZodType<ExtraReportingData$Outbound, z.ZodTypeDef, ExtraReportingData>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExtraReportingData$ {
    /** @deprecated use `ExtraReportingData$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExtraReportingData, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExtraReportingData$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExtraReportingData$Outbound, z.ZodTypeDef, ExtraReportingData>;
    /** @deprecated use `ExtraReportingData$Outbound` instead. */
    type Outbound = ExtraReportingData$Outbound;
}
export declare function extraReportingDataToJSON(extraReportingData: ExtraReportingData): string;
export declare function extraReportingDataFromJSON(jsonString: string): SafeParseResult<ExtraReportingData, SDKValidationError>;
/** @internal */
export declare const FilledQuantity$inboundSchema: z.ZodType<FilledQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type FilledQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const FilledQuantity$outboundSchema: z.ZodType<FilledQuantity$Outbound, z.ZodTypeDef, FilledQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FilledQuantity$ {
    /** @deprecated use `FilledQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FilledQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `FilledQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FilledQuantity$Outbound, z.ZodTypeDef, FilledQuantity>;
    /** @deprecated use `FilledQuantity$Outbound` instead. */
    type Outbound = FilledQuantity$Outbound;
}
export declare function filledQuantityToJSON(filledQuantity: FilledQuantity): string;
export declare function filledQuantityFromJSON(jsonString: string): SafeParseResult<FilledQuantity, SDKValidationError>;
/** @internal */
export declare const OrderIdentifierType$inboundSchema: z.ZodType<OrderIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderIdentifierType$outboundSchema: z.ZodType<OrderIdentifierTypeOpen, z.ZodTypeDef, OrderIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderIdentifierType$ {
    /** @deprecated use `OrderIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderIdentifierTypeOpen, z.ZodTypeDef, OrderIdentifierTypeOpen>;
}
/** @internal */
export declare const OrderAmount$inboundSchema: z.ZodType<OrderAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OrderAmount$outboundSchema: z.ZodType<OrderAmount$Outbound, z.ZodTypeDef, OrderAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderAmount$ {
    /** @deprecated use `OrderAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderAmount$Outbound, z.ZodTypeDef, OrderAmount>;
    /** @deprecated use `OrderAmount$Outbound` instead. */
    type Outbound = OrderAmount$Outbound;
}
export declare function orderAmountToJSON(orderAmount: OrderAmount): string;
export declare function orderAmountFromJSON(jsonString: string): SafeParseResult<OrderAmount, SDKValidationError>;
/** @internal */
export declare const PeriodStartDate$inboundSchema: z.ZodType<PeriodStartDate, z.ZodTypeDef, unknown>;
/** @internal */
export type PeriodStartDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const PeriodStartDate$outboundSchema: z.ZodType<PeriodStartDate$Outbound, z.ZodTypeDef, PeriodStartDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PeriodStartDate$ {
    /** @deprecated use `PeriodStartDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PeriodStartDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PeriodStartDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PeriodStartDate$Outbound, z.ZodTypeDef, PeriodStartDate>;
    /** @deprecated use `PeriodStartDate$Outbound` instead. */
    type Outbound = PeriodStartDate$Outbound;
}
export declare function periodStartDateToJSON(periodStartDate: PeriodStartDate): string;
export declare function periodStartDateFromJSON(jsonString: string): SafeParseResult<PeriodStartDate, SDKValidationError>;
/** @internal */
export declare const LetterOfIntent$inboundSchema: z.ZodType<LetterOfIntent, z.ZodTypeDef, unknown>;
/** @internal */
export type LetterOfIntent$Outbound = {
    amount?: OrderAmount$Outbound | null | undefined;
    period_start_date?: PeriodStartDate$Outbound | null | undefined;
};
/** @internal */
export declare const LetterOfIntent$outboundSchema: z.ZodType<LetterOfIntent$Outbound, z.ZodTypeDef, LetterOfIntent>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LetterOfIntent$ {
    /** @deprecated use `LetterOfIntent$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LetterOfIntent, z.ZodTypeDef, unknown>;
    /** @deprecated use `LetterOfIntent$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LetterOfIntent$Outbound, z.ZodTypeDef, LetterOfIntent>;
    /** @deprecated use `LetterOfIntent$Outbound` instead. */
    type Outbound = LetterOfIntent$Outbound;
}
export declare function letterOfIntentToJSON(letterOfIntent: LetterOfIntent): string;
export declare function letterOfIntentFromJSON(jsonString: string): SafeParseResult<LetterOfIntent, SDKValidationError>;
/** @internal */
export declare const OrderPrice$inboundSchema: z.ZodType<OrderPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OrderPrice$outboundSchema: z.ZodType<OrderPrice$Outbound, z.ZodTypeDef, OrderPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderPrice$ {
    /** @deprecated use `OrderPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderPrice$Outbound, z.ZodTypeDef, OrderPrice>;
    /** @deprecated use `OrderPrice$Outbound` instead. */
    type Outbound = OrderPrice$Outbound;
}
export declare function orderPriceToJSON(orderPrice: OrderPrice): string;
export declare function orderPriceFromJSON(jsonString: string): SafeParseResult<OrderPrice, SDKValidationError>;
/** @internal */
export declare const OrderLimitPriceType$inboundSchema: z.ZodType<OrderLimitPriceTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderLimitPriceType$outboundSchema: z.ZodType<OrderLimitPriceTypeOpen, z.ZodTypeDef, OrderLimitPriceTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderLimitPriceType$ {
    /** @deprecated use `OrderLimitPriceType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderLimitPriceTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderLimitPriceType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderLimitPriceTypeOpen, z.ZodTypeDef, OrderLimitPriceTypeOpen>;
}
/** @internal */
export declare const LimitPrice$inboundSchema: z.ZodType<LimitPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type LimitPrice$Outbound = {
    price?: OrderPrice$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const LimitPrice$outboundSchema: z.ZodType<LimitPrice$Outbound, z.ZodTypeDef, LimitPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LimitPrice$ {
    /** @deprecated use `LimitPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LimitPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `LimitPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LimitPrice$Outbound, z.ZodTypeDef, LimitPrice>;
    /** @deprecated use `LimitPrice$Outbound` instead. */
    type Outbound = LimitPrice$Outbound;
}
export declare function limitPriceToJSON(limitPrice: LimitPrice): string;
export declare function limitPriceFromJSON(jsonString: string): SafeParseResult<LimitPrice, SDKValidationError>;
/** @internal */
export declare const MaxSellQuantity$inboundSchema: z.ZodType<MaxSellQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type MaxSellQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const MaxSellQuantity$outboundSchema: z.ZodType<MaxSellQuantity$Outbound, z.ZodTypeDef, MaxSellQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaxSellQuantity$ {
    /** @deprecated use `MaxSellQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MaxSellQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `MaxSellQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MaxSellQuantity$Outbound, z.ZodTypeDef, MaxSellQuantity>;
    /** @deprecated use `MaxSellQuantity$Outbound` instead. */
    type Outbound = MaxSellQuantity$Outbound;
}
export declare function maxSellQuantityToJSON(maxSellQuantity: MaxSellQuantity): string;
export declare function maxSellQuantityFromJSON(jsonString: string): SafeParseResult<MaxSellQuantity, SDKValidationError>;
/** @internal */
export declare const NotionalValue$inboundSchema: z.ZodType<NotionalValue, z.ZodTypeDef, unknown>;
/** @internal */
export type NotionalValue$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const NotionalValue$outboundSchema: z.ZodType<NotionalValue$Outbound, z.ZodTypeDef, NotionalValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NotionalValue$ {
    /** @deprecated use `NotionalValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NotionalValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `NotionalValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NotionalValue$Outbound, z.ZodTypeDef, NotionalValue>;
    /** @deprecated use `NotionalValue$Outbound` instead. */
    type Outbound = NotionalValue$Outbound;
}
export declare function notionalValueToJSON(notionalValue: NotionalValue): string;
export declare function notionalValueFromJSON(jsonString: string): SafeParseResult<NotionalValue, SDKValidationError>;
/** @internal */
export declare const OrderDate$inboundSchema: z.ZodType<OrderDate, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const OrderDate$outboundSchema: z.ZodType<OrderDate$Outbound, z.ZodTypeDef, OrderDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderDate$ {
    /** @deprecated use `OrderDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderDate$Outbound, z.ZodTypeDef, OrderDate>;
    /** @deprecated use `OrderDate$Outbound` instead. */
    type Outbound = OrderDate$Outbound;
}
export declare function orderDateToJSON(orderDate: OrderDate): string;
export declare function orderDateFromJSON(jsonString: string): SafeParseResult<OrderDate, SDKValidationError>;
/** @internal */
export declare const OrderRejectedReason$inboundSchema: z.ZodType<OrderRejectedReasonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderRejectedReason$outboundSchema: z.ZodType<OrderRejectedReasonOpen, z.ZodTypeDef, OrderRejectedReasonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderRejectedReason$ {
    /** @deprecated use `OrderRejectedReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderRejectedReasonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderRejectedReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderRejectedReasonOpen, z.ZodTypeDef, OrderRejectedReasonOpen>;
}
/** @internal */
export declare const OrderStatus$inboundSchema: z.ZodType<OrderStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderStatus$outboundSchema: z.ZodType<OrderStatusOpen, z.ZodTypeDef, OrderStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderStatus$ {
    /** @deprecated use `OrderStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderStatusOpen, z.ZodTypeDef, OrderStatusOpen>;
}
/** @internal */
export declare const OrderOrderType$inboundSchema: z.ZodType<OrderOrderTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderOrderType$outboundSchema: z.ZodType<OrderOrderTypeOpen, z.ZodTypeDef, OrderOrderTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderOrderType$ {
    /** @deprecated use `OrderOrderType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderOrderTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderOrderType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderOrderTypeOpen, z.ZodTypeDef, OrderOrderTypeOpen>;
}
/** @internal */
export declare const OrderPrevailingMarketPrice$inboundSchema: z.ZodType<OrderPrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderPrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OrderPrevailingMarketPrice$outboundSchema: z.ZodType<OrderPrevailingMarketPrice$Outbound, z.ZodTypeDef, OrderPrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderPrevailingMarketPrice$ {
    /** @deprecated use `OrderPrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderPrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderPrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderPrevailingMarketPrice$Outbound, z.ZodTypeDef, OrderPrevailingMarketPrice>;
    /** @deprecated use `OrderPrevailingMarketPrice$Outbound` instead. */
    type Outbound = OrderPrevailingMarketPrice$Outbound;
}
export declare function orderPrevailingMarketPriceToJSON(orderPrevailingMarketPrice: OrderPrevailingMarketPrice): string;
export declare function orderPrevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<OrderPrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const OrderQuantity$inboundSchema: z.ZodType<OrderQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OrderQuantity$outboundSchema: z.ZodType<OrderQuantity$Outbound, z.ZodTypeDef, OrderQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderQuantity$ {
    /** @deprecated use `OrderQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderQuantity$Outbound, z.ZodTypeDef, OrderQuantity>;
    /** @deprecated use `OrderQuantity$Outbound` instead. */
    type Outbound = OrderQuantity$Outbound;
}
export declare function orderQuantityToJSON(orderQuantity: OrderQuantity): string;
export declare function orderQuantityFromJSON(jsonString: string): SafeParseResult<OrderQuantity, SDKValidationError>;
/** @internal */
export declare const OrderRightsOfAccumulationAmount$inboundSchema: z.ZodType<OrderRightsOfAccumulationAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderRightsOfAccumulationAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OrderRightsOfAccumulationAmount$outboundSchema: z.ZodType<OrderRightsOfAccumulationAmount$Outbound, z.ZodTypeDef, OrderRightsOfAccumulationAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderRightsOfAccumulationAmount$ {
    /** @deprecated use `OrderRightsOfAccumulationAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderRightsOfAccumulationAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderRightsOfAccumulationAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderRightsOfAccumulationAmount$Outbound, z.ZodTypeDef, OrderRightsOfAccumulationAmount>;
    /** @deprecated use `OrderRightsOfAccumulationAmount$Outbound` instead. */
    type Outbound = OrderRightsOfAccumulationAmount$Outbound;
}
export declare function orderRightsOfAccumulationAmountToJSON(orderRightsOfAccumulationAmount: OrderRightsOfAccumulationAmount): string;
export declare function orderRightsOfAccumulationAmountFromJSON(jsonString: string): SafeParseResult<OrderRightsOfAccumulationAmount, SDKValidationError>;
/** @internal */
export declare const RightsOfAccumulation$inboundSchema: z.ZodType<RightsOfAccumulation, z.ZodTypeDef, unknown>;
/** @internal */
export type RightsOfAccumulation$Outbound = {
    amount?: OrderRightsOfAccumulationAmount$Outbound | null | undefined;
};
/** @internal */
export declare const RightsOfAccumulation$outboundSchema: z.ZodType<RightsOfAccumulation$Outbound, z.ZodTypeDef, RightsOfAccumulation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RightsOfAccumulation$ {
    /** @deprecated use `RightsOfAccumulation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RightsOfAccumulation, z.ZodTypeDef, unknown>;
    /** @deprecated use `RightsOfAccumulation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RightsOfAccumulation$Outbound, z.ZodTypeDef, RightsOfAccumulation>;
    /** @deprecated use `RightsOfAccumulation$Outbound` instead. */
    type Outbound = RightsOfAccumulation$Outbound;
}
export declare function rightsOfAccumulationToJSON(rightsOfAccumulation: RightsOfAccumulation): string;
export declare function rightsOfAccumulationFromJSON(jsonString: string): SafeParseResult<RightsOfAccumulation, SDKValidationError>;
/** @internal */
export declare const OrderSide$inboundSchema: z.ZodType<OrderSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderSide$outboundSchema: z.ZodType<OrderSideOpen, z.ZodTypeDef, OrderSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderSide$ {
    /** @deprecated use `OrderSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderSideOpen, z.ZodTypeDef, OrderSideOpen>;
}
/** @internal */
export declare const OrderSpecialReportingInstructions$inboundSchema: z.ZodType<OrderSpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderSpecialReportingInstructions$outboundSchema: z.ZodType<OrderSpecialReportingInstructionsOpen, z.ZodTypeDef, OrderSpecialReportingInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderSpecialReportingInstructions$ {
    /** @deprecated use `OrderSpecialReportingInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderSpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderSpecialReportingInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderSpecialReportingInstructionsOpen, z.ZodTypeDef, OrderSpecialReportingInstructionsOpen>;
}
/** @internal */
export declare const OrderStopPricePrice$inboundSchema: z.ZodType<OrderStopPricePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderStopPricePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OrderStopPricePrice$outboundSchema: z.ZodType<OrderStopPricePrice$Outbound, z.ZodTypeDef, OrderStopPricePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderStopPricePrice$ {
    /** @deprecated use `OrderStopPricePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderStopPricePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderStopPricePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderStopPricePrice$Outbound, z.ZodTypeDef, OrderStopPricePrice>;
    /** @deprecated use `OrderStopPricePrice$Outbound` instead. */
    type Outbound = OrderStopPricePrice$Outbound;
}
export declare function orderStopPricePriceToJSON(orderStopPricePrice: OrderStopPricePrice): string;
export declare function orderStopPricePriceFromJSON(jsonString: string): SafeParseResult<OrderStopPricePrice, SDKValidationError>;
/** @internal */
export declare const OrderStopPriceType$inboundSchema: z.ZodType<OrderStopPriceTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderStopPriceType$outboundSchema: z.ZodType<OrderStopPriceTypeOpen, z.ZodTypeDef, OrderStopPriceTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderStopPriceType$ {
    /** @deprecated use `OrderStopPriceType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderStopPriceTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderStopPriceType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderStopPriceTypeOpen, z.ZodTypeDef, OrderStopPriceTypeOpen>;
}
/** @internal */
export declare const StopPrice$inboundSchema: z.ZodType<StopPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type StopPrice$Outbound = {
    price?: OrderStopPricePrice$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const StopPrice$outboundSchema: z.ZodType<StopPrice$Outbound, z.ZodTypeDef, StopPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StopPrice$ {
    /** @deprecated use `StopPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StopPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `StopPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StopPrice$Outbound, z.ZodTypeDef, StopPrice>;
    /** @deprecated use `StopPrice$Outbound` instead. */
    type Outbound = StopPrice$Outbound;
}
export declare function stopPriceToJSON(stopPrice: StopPrice): string;
export declare function stopPriceFromJSON(jsonString: string): SafeParseResult<StopPrice, SDKValidationError>;
/** @internal */
export declare const OrderTimeInForce$inboundSchema: z.ZodType<OrderTimeInForceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderTimeInForce$outboundSchema: z.ZodType<OrderTimeInForceOpen, z.ZodTypeDef, OrderTimeInForceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderTimeInForce$ {
    /** @deprecated use `OrderTimeInForce$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderTimeInForceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderTimeInForce$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderTimeInForceOpen, z.ZodTypeDef, OrderTimeInForceOpen>;
}
/** @internal */
export declare const OrderTradingSession$inboundSchema: z.ZodType<OrderTradingSessionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderTradingSession$outboundSchema: z.ZodType<OrderTradingSessionOpen, z.ZodTypeDef, OrderTradingSessionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderTradingSession$ {
    /** @deprecated use `OrderTradingSession$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderTradingSessionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderTradingSession$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderTradingSessionOpen, z.ZodTypeDef, OrderTradingSessionOpen>;
}
/** @internal */
export declare const Order$inboundSchema: z.ZodType<Order, z.ZodTypeDef, unknown>;
/** @internal */
export type Order$Outbound = {
    account_id?: string | undefined;
    asset_id?: string | undefined;
    asset_type?: string | undefined;
    average_prices?: Array<TradingExecutedPrice$Outbound> | undefined;
    broker_capacity?: string | undefined;
    cancel_initiator?: string | undefined;
    cancel_reason?: string | undefined;
    cancel_rejected_reason?: string | undefined;
    client_cancel_received_time?: string | null | undefined;
    client_order_id?: string | undefined;
    client_received_time?: string | null | undefined;
    commission?: OrderCommission$Outbound | null | undefined;
    create_time?: string | null | undefined;
    cumulative_notional_value?: CumulativeNotionalValue$Outbound | null | undefined;
    currency_code?: string | undefined;
    executions?: Array<TradingExecutions$Outbound> | undefined;
    extra_reporting_data?: ExtraReportingData$Outbound | null | undefined;
    fees?: Array<TradingFee$Outbound> | undefined;
    filled_quantity?: FilledQuantity$Outbound | null | undefined;
    identifier?: string | undefined;
    identifier_issuing_region_code?: string | undefined;
    identifier_type?: string | undefined;
    last_update_time?: string | null | undefined;
    letter_of_intent?: LetterOfIntent$Outbound | null | undefined;
    limit_price?: LimitPrice$Outbound | null | undefined;
    max_sell_quantity?: MaxSellQuantity$Outbound | null | undefined;
    name?: string | undefined;
    notional_value?: NotionalValue$Outbound | null | undefined;
    order_date?: OrderDate$Outbound | null | undefined;
    order_id?: string | undefined;
    order_rejected_reason?: string | undefined;
    order_status?: string | undefined;
    order_type?: string | undefined;
    prevailing_market_price?: OrderPrevailingMarketPrice$Outbound | null | undefined;
    quantity?: OrderQuantity$Outbound | null | undefined;
    rights_of_accumulation?: RightsOfAccumulation$Outbound | null | undefined;
    side?: string | undefined;
    special_reporting_instructions?: Array<string> | undefined;
    stop_price?: StopPrice$Outbound | null | undefined;
    time_in_force?: string | undefined;
    trading_session?: string | undefined;
};
/** @internal */
export declare const Order$outboundSchema: z.ZodType<Order$Outbound, z.ZodTypeDef, Order>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Order$ {
    /** @deprecated use `Order$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Order, z.ZodTypeDef, unknown>;
    /** @deprecated use `Order$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Order$Outbound, z.ZodTypeDef, Order>;
    /** @deprecated use `Order$Outbound` instead. */
    type Outbound = Order$Outbound;
}
export declare function orderToJSON(order: Order): string;
export declare function orderFromJSON(jsonString: string): SafeParseResult<Order, SDKValidationError>;
//# sourceMappingURL=order.d.ts.map