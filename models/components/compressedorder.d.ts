import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BasketTradingExecutedPrice, BasketTradingExecutedPrice$Outbound } from "./baskettradingexecutedprice.js";
import { BasketTradingExecutions, BasketTradingExecutions$Outbound } from "./baskettradingexecutions.js";
/**
 * The type of the asset in this order
 */
export declare enum CompressedOrderAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    MutualFund = "MUTUAL_FUND"
}
/**
 * The type of the asset in this order
 */
export type CompressedOrderAssetTypeOpen = OpenEnum<typeof CompressedOrderAssetType>;
/**
 * The product of order quantity & price, summed across all fills, reported in the currency specified in the order. (This will be rounded to 2 decimal places for USD currencies). Will be absent if an order has no fill information.
 */
export type CompressedOrderCumulativeNotionalValue = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The summed quantity value across all fills in this order, up to a maximum of 5 decimal places. Will be absent if an order has no fill information.
 */
export type CompressedOrderFilledQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported
 */
export declare enum CompressedOrderIdentifierType {
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported
 */
export type CompressedOrderIdentifierTypeOpen = OpenEnum<typeof CompressedOrderIdentifierType>;
/**
 * Notional quantity of the order, measured in USD. Maximum 2 decimal place precision. Either a quantity or notional_value MUST be specified (but not both). For Equities: currently not supported yet For Mutual Funds: Only supported for BUY orders. The order will be transacted at the full notional amount specified.
 */
export type CompressedOrderNotionalValue = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * When an order has the REJECTED status, this will be populated with a system code describing the rejection.
 */
export declare enum CompressedOrderOrderRejectedReason {
    OrderRejectReasonUnspecified = "ORDER_REJECT_REASON_UNSPECIFIED",
    BrokerOption = "BROKER_OPTION",
    UnknownSecurity = "UNKNOWN_SECURITY",
    ExchangeClosed = "EXCHANGE_CLOSED",
    TooLateToEnter = "TOO_LATE_TO_ENTER",
    UnknownOrder = "UNKNOWN_ORDER",
    DuplicateOrder = "DUPLICATE_ORDER",
    StaleOrder = "STALE_ORDER",
    BelowNotionalMinimum = "BELOW_NOTIONAL_MINIMUM",
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
    MaxSellQuantityRequired = "MAX_SELL_QUANTITY_REQUIRED",
    MaxSellQuantityProhibited = "MAX_SELL_QUANTITY_PROHIBITED",
    StockTradesDisabled = "STOCK_TRADES_DISABLED",
    AssetNotSetUpToTrade = "ASSET_NOT_SET_UP_TO_TRADE",
    AnotherBasketOrderForAccountHasFailedRiskChecks = "ANOTHER_BASKET_ORDER_FOR_ACCOUNT_HAS_FAILED_RISK_CHECKS",
    InsufficientPosition = "INSUFFICIENT_POSITION",
    FailedBuyingPower = "FAILED_BUYING_POWER",
    RoundUpAmountTooSmall = "ROUND_UP_AMOUNT_TOO_SMALL",
    AssetNotSetUpForRoundUps = "ASSET_NOT_SET_UP_FOR_ROUND_UPS"
}
/**
 * When an order has the REJECTED status, this will be populated with a system code describing the rejection.
 */
export type CompressedOrderOrderRejectedReasonOpen = OpenEnum<typeof CompressedOrderOrderRejectedReason>;
/**
 * The processing status of the order
 */
export declare enum CompressedOrderOrderStatus {
    OrderStatusUnspecified = "ORDER_STATUS_UNSPECIFIED",
    PendingNew = "PENDING_NEW",
    New = "NEW",
    PartiallyFilled = "PARTIALLY_FILLED",
    Filled = "FILLED",
    Rejected = "REJECTED",
    RemovedBeforeSubmission = "REMOVED_BEFORE_SUBMISSION"
}
/**
 * The processing status of the order
 */
export type CompressedOrderOrderStatusOpen = OpenEnum<typeof CompressedOrderOrderStatus>;
/**
 * The execution type of this order. Only MARKET is supported.
 */
export declare enum CompressedOrderOrderType {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Market = "MARKET"
}
/**
 * The execution type of this order. Only MARKET is supported.
 */
export type CompressedOrderOrderTypeOpen = OpenEnum<typeof CompressedOrderOrderType>;
/**
 * Numeric quantity of the order. Either a quantity or notional_value MUST be specified (but not both). For Equities: Represents the number of shares, must be greater than zero and may not exceed 5 decimal places. For Mutual Funds: Only supported for SELL orders. Represents the number of shares, up to a maximum of 3 decimal places.
 */
export type CompressedOrderQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The side of this order.
 */
export declare enum CompressedOrderSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * The side of this order.
 */
export type CompressedOrderSideOpen = OpenEnum<typeof CompressedOrderSide>;
export declare enum CompressedOrderSpecialReportingInstructions {
    SpecialReportingInstructionsUnspecified = "SPECIAL_REPORTING_INSTRUCTIONS_UNSPECIFIED",
    Solicited = "SOLICITED",
    Unsolicited = "UNSOLICITED",
    RoundUp = "ROUND_UP"
}
export type CompressedOrderSpecialReportingInstructionsOpen = OpenEnum<typeof CompressedOrderSpecialReportingInstructions>;
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export declare enum CompressedOrderTimeInForce {
    TimeInForceUnspecified = "TIME_IN_FORCE_UNSPECIFIED",
    Day = "DAY"
}
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export type CompressedOrderTimeInForceOpen = OpenEnum<typeof CompressedOrderTimeInForce>;
/**
 * The message describing an orders that have been compressed into a single order
 */
export type CompressedOrder = {
    /**
     * Apex Asset ID for this asset. This will not be returned in the initial CreateOrder response and will be available after an order completes validation. If the provided identifier does not match any Apex asset available for trading, an OrderRejectReason of "UNKNOWN_SECURITY" will be returned and the asset_id will not be set.
     */
    assetId?: string | undefined;
    /**
     * The type of the asset in this order
     */
    assetType?: CompressedOrderAssetTypeOpen | undefined;
    /**
     * The identifier of the account transacting this order
     */
    averagePriceAccountId?: string | undefined;
    /**
     * The average prices, as weighted averages, across all executions in this order. Will be absent if an order has no executions.
     *
     * @remarks
     *
     *  When asset_type = EQUITY, there will be at most one value present, with a type of PRICE_PER_UNIT. This will have up to 4 decimal places for USD amounts less than $1, and a maximum of two for larger USD amounts.
     */
    averagePrices?: Array<BasketTradingExecutedPrice> | undefined;
    /**
     * System generated unique id for the compressed order.
     */
    compressedOrderId?: string | undefined;
    /**
     * Time of the order creation
     */
    createTime?: Date | null | undefined;
    /**
     * The product of order quantity & price, summed across all fills, reported in the currency specified in the order. (This will be rounded to 2 decimal places for USD currencies). Will be absent if an order has no fill information.
     */
    cumulativeNotionalValue?: CompressedOrderCumulativeNotionalValue | null | undefined;
    /**
     * Defaults to "USD". Only "USD" is supported. Full list of currency codes is defined at: https://en.wikipedia.org/wiki/ISO_4217
     */
    currencyCode?: string | undefined;
    /**
     * The execution-level details that compose this order
     */
    executions?: Array<BasketTradingExecutions> | undefined;
    /**
     * The summed quantity value across all fills in this order, up to a maximum of 5 decimal places. Will be absent if an order has no fill information.
     */
    filledQuantity?: CompressedOrderFilledQuantity | null | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier?: string | undefined;
    /**
     * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported
     */
    identifierType?: CompressedOrderIdentifierTypeOpen | undefined;
    /**
     * Time of the last order update
     */
    lastUpdateTime?: Date | null | undefined;
    /**
     * System generated name of the order.
     */
    name?: string | undefined;
    /**
     * Notional quantity of the order, measured in USD. Maximum 2 decimal place precision. Either a quantity or notional_value MUST be specified (but not both). For Equities: currently not supported yet For Mutual Funds: Only supported for BUY orders. The order will be transacted at the full notional amount specified.
     */
    notionalValue?: CompressedOrderNotionalValue | null | undefined;
    /**
     * When an order has the REJECTED status, this will be populated with a system code describing the rejection.
     */
    orderRejectedReason?: CompressedOrderOrderRejectedReasonOpen | undefined;
    /**
     * The processing status of the order
     */
    orderStatus?: CompressedOrderOrderStatusOpen | undefined;
    /**
     * The execution type of this order. Only MARKET is supported.
     */
    orderType?: CompressedOrderOrderTypeOpen | undefined;
    /**
     * Numeric quantity of the order. Either a quantity or notional_value MUST be specified (but not both). For Equities: Represents the number of shares, must be greater than zero and may not exceed 5 decimal places. For Mutual Funds: Only supported for SELL orders. Represents the number of shares, up to a maximum of 3 decimal places.
     */
    quantity?: CompressedOrderQuantity | null | undefined;
    /**
     * The side of this order.
     */
    side?: CompressedOrderSideOpen | undefined;
    /**
     * Special Reporting Instructions to be applied to this order. Can include multiple Instructions.
     */
    specialReportingInstructions?: Array<CompressedOrderSpecialReportingInstructionsOpen> | undefined;
    /**
     * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
     */
    timeInForce?: CompressedOrderTimeInForceOpen | undefined;
};
/** @internal */
export declare const CompressedOrderAssetType$inboundSchema: z.ZodType<CompressedOrderAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompressedOrderAssetType$outboundSchema: z.ZodType<CompressedOrderAssetTypeOpen, z.ZodTypeDef, CompressedOrderAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderAssetType$ {
    /** @deprecated use `CompressedOrderAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderAssetTypeOpen, z.ZodTypeDef, CompressedOrderAssetTypeOpen>;
}
/** @internal */
export declare const CompressedOrderCumulativeNotionalValue$inboundSchema: z.ZodType<CompressedOrderCumulativeNotionalValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CompressedOrderCumulativeNotionalValue$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CompressedOrderCumulativeNotionalValue$outboundSchema: z.ZodType<CompressedOrderCumulativeNotionalValue$Outbound, z.ZodTypeDef, CompressedOrderCumulativeNotionalValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderCumulativeNotionalValue$ {
    /** @deprecated use `CompressedOrderCumulativeNotionalValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderCumulativeNotionalValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderCumulativeNotionalValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderCumulativeNotionalValue$Outbound, z.ZodTypeDef, CompressedOrderCumulativeNotionalValue>;
    /** @deprecated use `CompressedOrderCumulativeNotionalValue$Outbound` instead. */
    type Outbound = CompressedOrderCumulativeNotionalValue$Outbound;
}
export declare function compressedOrderCumulativeNotionalValueToJSON(compressedOrderCumulativeNotionalValue: CompressedOrderCumulativeNotionalValue): string;
export declare function compressedOrderCumulativeNotionalValueFromJSON(jsonString: string): SafeParseResult<CompressedOrderCumulativeNotionalValue, SDKValidationError>;
/** @internal */
export declare const CompressedOrderFilledQuantity$inboundSchema: z.ZodType<CompressedOrderFilledQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type CompressedOrderFilledQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CompressedOrderFilledQuantity$outboundSchema: z.ZodType<CompressedOrderFilledQuantity$Outbound, z.ZodTypeDef, CompressedOrderFilledQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderFilledQuantity$ {
    /** @deprecated use `CompressedOrderFilledQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderFilledQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderFilledQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderFilledQuantity$Outbound, z.ZodTypeDef, CompressedOrderFilledQuantity>;
    /** @deprecated use `CompressedOrderFilledQuantity$Outbound` instead. */
    type Outbound = CompressedOrderFilledQuantity$Outbound;
}
export declare function compressedOrderFilledQuantityToJSON(compressedOrderFilledQuantity: CompressedOrderFilledQuantity): string;
export declare function compressedOrderFilledQuantityFromJSON(jsonString: string): SafeParseResult<CompressedOrderFilledQuantity, SDKValidationError>;
/** @internal */
export declare const CompressedOrderIdentifierType$inboundSchema: z.ZodType<CompressedOrderIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompressedOrderIdentifierType$outboundSchema: z.ZodType<CompressedOrderIdentifierTypeOpen, z.ZodTypeDef, CompressedOrderIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderIdentifierType$ {
    /** @deprecated use `CompressedOrderIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderIdentifierTypeOpen, z.ZodTypeDef, CompressedOrderIdentifierTypeOpen>;
}
/** @internal */
export declare const CompressedOrderNotionalValue$inboundSchema: z.ZodType<CompressedOrderNotionalValue, z.ZodTypeDef, unknown>;
/** @internal */
export type CompressedOrderNotionalValue$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CompressedOrderNotionalValue$outboundSchema: z.ZodType<CompressedOrderNotionalValue$Outbound, z.ZodTypeDef, CompressedOrderNotionalValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderNotionalValue$ {
    /** @deprecated use `CompressedOrderNotionalValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderNotionalValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderNotionalValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderNotionalValue$Outbound, z.ZodTypeDef, CompressedOrderNotionalValue>;
    /** @deprecated use `CompressedOrderNotionalValue$Outbound` instead. */
    type Outbound = CompressedOrderNotionalValue$Outbound;
}
export declare function compressedOrderNotionalValueToJSON(compressedOrderNotionalValue: CompressedOrderNotionalValue): string;
export declare function compressedOrderNotionalValueFromJSON(jsonString: string): SafeParseResult<CompressedOrderNotionalValue, SDKValidationError>;
/** @internal */
export declare const CompressedOrderOrderRejectedReason$inboundSchema: z.ZodType<CompressedOrderOrderRejectedReasonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompressedOrderOrderRejectedReason$outboundSchema: z.ZodType<CompressedOrderOrderRejectedReasonOpen, z.ZodTypeDef, CompressedOrderOrderRejectedReasonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderOrderRejectedReason$ {
    /** @deprecated use `CompressedOrderOrderRejectedReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderOrderRejectedReasonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderOrderRejectedReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderOrderRejectedReasonOpen, z.ZodTypeDef, CompressedOrderOrderRejectedReasonOpen>;
}
/** @internal */
export declare const CompressedOrderOrderStatus$inboundSchema: z.ZodType<CompressedOrderOrderStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompressedOrderOrderStatus$outboundSchema: z.ZodType<CompressedOrderOrderStatusOpen, z.ZodTypeDef, CompressedOrderOrderStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderOrderStatus$ {
    /** @deprecated use `CompressedOrderOrderStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderOrderStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderOrderStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderOrderStatusOpen, z.ZodTypeDef, CompressedOrderOrderStatusOpen>;
}
/** @internal */
export declare const CompressedOrderOrderType$inboundSchema: z.ZodType<CompressedOrderOrderTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompressedOrderOrderType$outboundSchema: z.ZodType<CompressedOrderOrderTypeOpen, z.ZodTypeDef, CompressedOrderOrderTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderOrderType$ {
    /** @deprecated use `CompressedOrderOrderType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderOrderTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderOrderType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderOrderTypeOpen, z.ZodTypeDef, CompressedOrderOrderTypeOpen>;
}
/** @internal */
export declare const CompressedOrderQuantity$inboundSchema: z.ZodType<CompressedOrderQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type CompressedOrderQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CompressedOrderQuantity$outboundSchema: z.ZodType<CompressedOrderQuantity$Outbound, z.ZodTypeDef, CompressedOrderQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderQuantity$ {
    /** @deprecated use `CompressedOrderQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderQuantity$Outbound, z.ZodTypeDef, CompressedOrderQuantity>;
    /** @deprecated use `CompressedOrderQuantity$Outbound` instead. */
    type Outbound = CompressedOrderQuantity$Outbound;
}
export declare function compressedOrderQuantityToJSON(compressedOrderQuantity: CompressedOrderQuantity): string;
export declare function compressedOrderQuantityFromJSON(jsonString: string): SafeParseResult<CompressedOrderQuantity, SDKValidationError>;
/** @internal */
export declare const CompressedOrderSide$inboundSchema: z.ZodType<CompressedOrderSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompressedOrderSide$outboundSchema: z.ZodType<CompressedOrderSideOpen, z.ZodTypeDef, CompressedOrderSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderSide$ {
    /** @deprecated use `CompressedOrderSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderSideOpen, z.ZodTypeDef, CompressedOrderSideOpen>;
}
/** @internal */
export declare const CompressedOrderSpecialReportingInstructions$inboundSchema: z.ZodType<CompressedOrderSpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompressedOrderSpecialReportingInstructions$outboundSchema: z.ZodType<CompressedOrderSpecialReportingInstructionsOpen, z.ZodTypeDef, CompressedOrderSpecialReportingInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderSpecialReportingInstructions$ {
    /** @deprecated use `CompressedOrderSpecialReportingInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderSpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderSpecialReportingInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderSpecialReportingInstructionsOpen, z.ZodTypeDef, CompressedOrderSpecialReportingInstructionsOpen>;
}
/** @internal */
export declare const CompressedOrderTimeInForce$inboundSchema: z.ZodType<CompressedOrderTimeInForceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompressedOrderTimeInForce$outboundSchema: z.ZodType<CompressedOrderTimeInForceOpen, z.ZodTypeDef, CompressedOrderTimeInForceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrderTimeInForce$ {
    /** @deprecated use `CompressedOrderTimeInForce$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrderTimeInForceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrderTimeInForce$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrderTimeInForceOpen, z.ZodTypeDef, CompressedOrderTimeInForceOpen>;
}
/** @internal */
export declare const CompressedOrder$inboundSchema: z.ZodType<CompressedOrder, z.ZodTypeDef, unknown>;
/** @internal */
export type CompressedOrder$Outbound = {
    asset_id?: string | undefined;
    asset_type?: string | undefined;
    average_price_account_id?: string | undefined;
    average_prices?: Array<BasketTradingExecutedPrice$Outbound> | undefined;
    compressed_order_id?: string | undefined;
    create_time?: string | null | undefined;
    cumulative_notional_value?: CompressedOrderCumulativeNotionalValue$Outbound | null | undefined;
    currency_code?: string | undefined;
    executions?: Array<BasketTradingExecutions$Outbound> | undefined;
    filled_quantity?: CompressedOrderFilledQuantity$Outbound | null | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    last_update_time?: string | null | undefined;
    name?: string | undefined;
    notional_value?: CompressedOrderNotionalValue$Outbound | null | undefined;
    order_rejected_reason?: string | undefined;
    order_status?: string | undefined;
    order_type?: string | undefined;
    quantity?: CompressedOrderQuantity$Outbound | null | undefined;
    side?: string | undefined;
    special_reporting_instructions?: Array<string> | undefined;
    time_in_force?: string | undefined;
};
/** @internal */
export declare const CompressedOrder$outboundSchema: z.ZodType<CompressedOrder$Outbound, z.ZodTypeDef, CompressedOrder>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompressedOrder$ {
    /** @deprecated use `CompressedOrder$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompressedOrder, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompressedOrder$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompressedOrder$Outbound, z.ZodTypeDef, CompressedOrder>;
    /** @deprecated use `CompressedOrder$Outbound` instead. */
    type Outbound = CompressedOrder$Outbound;
}
export declare function compressedOrderToJSON(compressedOrder: CompressedOrder): string;
export declare function compressedOrderFromJSON(jsonString: string): SafeParseResult<CompressedOrder, SDKValidationError>;
//# sourceMappingURL=compressedorder.d.ts.map