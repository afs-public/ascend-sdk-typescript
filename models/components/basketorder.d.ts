import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BasketTradingExecutedPrice, BasketTradingExecutedPrice$Outbound } from "./baskettradingexecutedprice.js";
import { BasketTradingExecutions, BasketTradingExecutions$Outbound } from "./baskettradingexecutions.js";
/**
 * The type of the asset in this order
 */
export declare enum BasketOrderAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    MutualFund = "MUTUAL_FUND"
}
/**
 * The type of the asset in this order
 */
export type BasketOrderAssetTypeOpen = OpenEnum<typeof BasketOrderAssetType>;
/**
 * The product of order quantity & price, summed across all fills, reported in the currency specified in the order. (This will be rounded to 2 decimal places for USD currencies). Will be absent if an order has no fill information.
 */
export type BasketOrderCumulativeNotionalValue = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The summed quantity value across all fills in this order, up to a maximum of 5 decimal places. Will be absent if an order has no fill information.
 */
export type BasketOrderFilledQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported
 */
export declare enum BasketOrderIdentifierType {
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported
 */
export type BasketOrderIdentifierTypeOpen = OpenEnum<typeof BasketOrderIdentifierType>;
/**
 * The maximum number of shares to be sold if this is a notional SELL order of an Equity asset type. (Prohibited for other side or asset_type inputs.)
 *
 * @remarks
 *
 *  This will only be recognized for clients configured to bypass the short sale risk check. When specified, must be greater than 0 and can't exceed 5 decimal places.
 */
export type BasketOrderMaxSellQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Notional quantity of the order, measured in USD. Maximum 2 decimal place precision. Either a quantity or notional_value MUST be specified (but not both). For Equities: currently not supported yet For Mutual Funds: Only supported for BUY orders. The order will be transacted at the full notional amount specified.
 */
export type BasketOrderNotionalValue = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * When an order has the REJECTED status, this will be populated with a system code describing the rejection.
 */
export declare enum BasketOrderOrderRejectedReason {
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
export type BasketOrderOrderRejectedReasonOpen = OpenEnum<typeof BasketOrderOrderRejectedReason>;
/**
 * The processing status of the order
 */
export declare enum BasketOrderOrderStatus {
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
export type BasketOrderOrderStatusOpen = OpenEnum<typeof BasketOrderOrderStatus>;
/**
 * The execution type of this order.
 */
export declare enum BasketOrderOrderType {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Market = "MARKET"
}
/**
 * The execution type of this order.
 */
export type BasketOrderOrderTypeOpen = OpenEnum<typeof BasketOrderOrderType>;
/**
 * Numeric quantity of the order. Either a quantity or notional_value MUST be specified (but not both). For Equities: Represents the number of shares, must be greater than zero and may not exceed 5 decimal places. For Mutual Funds: Only supported for SELL orders. Represents the number of shares, up to a maximum of 3 decimal places.
 */
export type BasketOrderQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The side of this order.
 */
export declare enum BasketOrderSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * The side of this order.
 */
export type BasketOrderSideOpen = OpenEnum<typeof BasketOrderSide>;
export declare enum BasketOrderSpecialReportingInstructions {
    SpecialReportingInstructionsUnspecified = "SPECIAL_REPORTING_INSTRUCTIONS_UNSPECIFIED",
    Solicited = "SOLICITED",
    Unsolicited = "UNSOLICITED",
    RoundUp = "ROUND_UP"
}
export type BasketOrderSpecialReportingInstructionsOpen = OpenEnum<typeof BasketOrderSpecialReportingInstructions>;
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export declare enum BasketOrderTimeInForce {
    TimeInForceUnspecified = "TIME_IN_FORCE_UNSPECIFIED",
    Day = "DAY"
}
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export type BasketOrderTimeInForceOpen = OpenEnum<typeof BasketOrderTimeInForce>;
/**
 * The message describing an order that has been added to a basket
 */
export type BasketOrder = {
    /**
     * The identifier of the account transacting this order
     */
    accountId?: string | undefined;
    /**
     * Apex Asset ID for this asset. This will not be returned in the initial CreateOrder response and will be available after an order completes validation. If the provided identifier does not match any Apex asset available for trading, an OrderRejectReason of "UNKNOWN_SECURITY" will be returned and the asset_id will not be set.
     */
    assetId?: string | undefined;
    /**
     * The type of the asset in this order
     */
    assetType?: BasketOrderAssetTypeOpen | undefined;
    /**
     * The average prices, as weighted averages, across all executions in this order. Will be absent if an order has no executions.
     *
     * @remarks
     *
     *  When asset_type = EQUITY, there will be at most one value present, with a type of PRICE_PER_UNIT. This will have up to 4 decimal places for USD amounts less than $1, and a maximum of two for larger USD amounts.
     */
    averagePrices?: Array<BasketTradingExecutedPrice> | undefined;
    /**
     * System generated unique id for the basket order.
     */
    basketOrderId?: string | undefined;
    /**
     * User-supplied unique order ID. Cannot be more than 40 characters long.
     */
    clientOrderId?: string | undefined;
    /**
     * Time the order request was received by the client. Must be in the past.
     */
    clientOrderReceivedTime?: Date | null | undefined;
    /**
     * Time of the order creation
     */
    createTime?: Date | null | undefined;
    /**
     * The product of order quantity & price, summed across all fills, reported in the currency specified in the order. (This will be rounded to 2 decimal places for USD currencies). Will be absent if an order has no fill information.
     */
    cumulativeNotionalValue?: BasketOrderCumulativeNotionalValue | null | undefined;
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
    filledQuantity?: BasketOrderFilledQuantity | null | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier?: string | undefined;
    /**
     * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported
     */
    identifierType?: BasketOrderIdentifierTypeOpen | undefined;
    /**
     * Time of the last order update
     */
    lastUpdateTime?: Date | null | undefined;
    /**
     * The maximum number of shares to be sold if this is a notional SELL order of an Equity asset type. (Prohibited for other side or asset_type inputs.)
     *
     * @remarks
     *
     *  This will only be recognized for clients configured to bypass the short sale risk check. When specified, must be greater than 0 and can't exceed 5 decimal places.
     */
    maxSellQuantity?: BasketOrderMaxSellQuantity | null | undefined;
    /**
     * System generated name of the basket order.
     */
    name?: string | undefined;
    /**
     * Notional quantity of the order, measured in USD. Maximum 2 decimal place precision. Either a quantity or notional_value MUST be specified (but not both). For Equities: currently not supported yet For Mutual Funds: Only supported for BUY orders. The order will be transacted at the full notional amount specified.
     */
    notionalValue?: BasketOrderNotionalValue | null | undefined;
    /**
     * When an order has the REJECTED status, this will be populated with a system code describing the rejection.
     */
    orderRejectedReason?: BasketOrderOrderRejectedReasonOpen | undefined;
    /**
     * The processing status of the order
     */
    orderStatus?: BasketOrderOrderStatusOpen | undefined;
    /**
     * The execution type of this order.
     */
    orderType?: BasketOrderOrderTypeOpen | undefined;
    /**
     * Numeric quantity of the order. Either a quantity or notional_value MUST be specified (but not both). For Equities: Represents the number of shares, must be greater than zero and may not exceed 5 decimal places. For Mutual Funds: Only supported for SELL orders. Represents the number of shares, up to a maximum of 3 decimal places.
     */
    quantity?: BasketOrderQuantity | null | undefined;
    /**
     * The side of this order.
     */
    side?: BasketOrderSideOpen | undefined;
    /**
     * Special Reporting Instructions to be applied to this order. Can include multiple Instructions.
     */
    specialReportingInstructions?: Array<BasketOrderSpecialReportingInstructionsOpen> | undefined;
    /**
     * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
     */
    timeInForce?: BasketOrderTimeInForceOpen | undefined;
};
/** @internal */
export declare const BasketOrderAssetType$inboundSchema: z.ZodType<BasketOrderAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderAssetType$outboundSchema: z.ZodType<BasketOrderAssetTypeOpen, z.ZodTypeDef, BasketOrderAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderAssetType$ {
    /** @deprecated use `BasketOrderAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderAssetTypeOpen, z.ZodTypeDef, BasketOrderAssetTypeOpen>;
}
/** @internal */
export declare const BasketOrderCumulativeNotionalValue$inboundSchema: z.ZodType<BasketOrderCumulativeNotionalValue, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrderCumulativeNotionalValue$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BasketOrderCumulativeNotionalValue$outboundSchema: z.ZodType<BasketOrderCumulativeNotionalValue$Outbound, z.ZodTypeDef, BasketOrderCumulativeNotionalValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderCumulativeNotionalValue$ {
    /** @deprecated use `BasketOrderCumulativeNotionalValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderCumulativeNotionalValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderCumulativeNotionalValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderCumulativeNotionalValue$Outbound, z.ZodTypeDef, BasketOrderCumulativeNotionalValue>;
    /** @deprecated use `BasketOrderCumulativeNotionalValue$Outbound` instead. */
    type Outbound = BasketOrderCumulativeNotionalValue$Outbound;
}
export declare function basketOrderCumulativeNotionalValueToJSON(basketOrderCumulativeNotionalValue: BasketOrderCumulativeNotionalValue): string;
export declare function basketOrderCumulativeNotionalValueFromJSON(jsonString: string): SafeParseResult<BasketOrderCumulativeNotionalValue, SDKValidationError>;
/** @internal */
export declare const BasketOrderFilledQuantity$inboundSchema: z.ZodType<BasketOrderFilledQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrderFilledQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BasketOrderFilledQuantity$outboundSchema: z.ZodType<BasketOrderFilledQuantity$Outbound, z.ZodTypeDef, BasketOrderFilledQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderFilledQuantity$ {
    /** @deprecated use `BasketOrderFilledQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderFilledQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderFilledQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderFilledQuantity$Outbound, z.ZodTypeDef, BasketOrderFilledQuantity>;
    /** @deprecated use `BasketOrderFilledQuantity$Outbound` instead. */
    type Outbound = BasketOrderFilledQuantity$Outbound;
}
export declare function basketOrderFilledQuantityToJSON(basketOrderFilledQuantity: BasketOrderFilledQuantity): string;
export declare function basketOrderFilledQuantityFromJSON(jsonString: string): SafeParseResult<BasketOrderFilledQuantity, SDKValidationError>;
/** @internal */
export declare const BasketOrderIdentifierType$inboundSchema: z.ZodType<BasketOrderIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderIdentifierType$outboundSchema: z.ZodType<BasketOrderIdentifierTypeOpen, z.ZodTypeDef, BasketOrderIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderIdentifierType$ {
    /** @deprecated use `BasketOrderIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderIdentifierTypeOpen, z.ZodTypeDef, BasketOrderIdentifierTypeOpen>;
}
/** @internal */
export declare const BasketOrderMaxSellQuantity$inboundSchema: z.ZodType<BasketOrderMaxSellQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrderMaxSellQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BasketOrderMaxSellQuantity$outboundSchema: z.ZodType<BasketOrderMaxSellQuantity$Outbound, z.ZodTypeDef, BasketOrderMaxSellQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderMaxSellQuantity$ {
    /** @deprecated use `BasketOrderMaxSellQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderMaxSellQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderMaxSellQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderMaxSellQuantity$Outbound, z.ZodTypeDef, BasketOrderMaxSellQuantity>;
    /** @deprecated use `BasketOrderMaxSellQuantity$Outbound` instead. */
    type Outbound = BasketOrderMaxSellQuantity$Outbound;
}
export declare function basketOrderMaxSellQuantityToJSON(basketOrderMaxSellQuantity: BasketOrderMaxSellQuantity): string;
export declare function basketOrderMaxSellQuantityFromJSON(jsonString: string): SafeParseResult<BasketOrderMaxSellQuantity, SDKValidationError>;
/** @internal */
export declare const BasketOrderNotionalValue$inboundSchema: z.ZodType<BasketOrderNotionalValue, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrderNotionalValue$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BasketOrderNotionalValue$outboundSchema: z.ZodType<BasketOrderNotionalValue$Outbound, z.ZodTypeDef, BasketOrderNotionalValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderNotionalValue$ {
    /** @deprecated use `BasketOrderNotionalValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderNotionalValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderNotionalValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderNotionalValue$Outbound, z.ZodTypeDef, BasketOrderNotionalValue>;
    /** @deprecated use `BasketOrderNotionalValue$Outbound` instead. */
    type Outbound = BasketOrderNotionalValue$Outbound;
}
export declare function basketOrderNotionalValueToJSON(basketOrderNotionalValue: BasketOrderNotionalValue): string;
export declare function basketOrderNotionalValueFromJSON(jsonString: string): SafeParseResult<BasketOrderNotionalValue, SDKValidationError>;
/** @internal */
export declare const BasketOrderOrderRejectedReason$inboundSchema: z.ZodType<BasketOrderOrderRejectedReasonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderOrderRejectedReason$outboundSchema: z.ZodType<BasketOrderOrderRejectedReasonOpen, z.ZodTypeDef, BasketOrderOrderRejectedReasonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderOrderRejectedReason$ {
    /** @deprecated use `BasketOrderOrderRejectedReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderOrderRejectedReasonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderOrderRejectedReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderOrderRejectedReasonOpen, z.ZodTypeDef, BasketOrderOrderRejectedReasonOpen>;
}
/** @internal */
export declare const BasketOrderOrderStatus$inboundSchema: z.ZodType<BasketOrderOrderStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderOrderStatus$outboundSchema: z.ZodType<BasketOrderOrderStatusOpen, z.ZodTypeDef, BasketOrderOrderStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderOrderStatus$ {
    /** @deprecated use `BasketOrderOrderStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderOrderStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderOrderStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderOrderStatusOpen, z.ZodTypeDef, BasketOrderOrderStatusOpen>;
}
/** @internal */
export declare const BasketOrderOrderType$inboundSchema: z.ZodType<BasketOrderOrderTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderOrderType$outboundSchema: z.ZodType<BasketOrderOrderTypeOpen, z.ZodTypeDef, BasketOrderOrderTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderOrderType$ {
    /** @deprecated use `BasketOrderOrderType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderOrderTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderOrderType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderOrderTypeOpen, z.ZodTypeDef, BasketOrderOrderTypeOpen>;
}
/** @internal */
export declare const BasketOrderQuantity$inboundSchema: z.ZodType<BasketOrderQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrderQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BasketOrderQuantity$outboundSchema: z.ZodType<BasketOrderQuantity$Outbound, z.ZodTypeDef, BasketOrderQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderQuantity$ {
    /** @deprecated use `BasketOrderQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderQuantity$Outbound, z.ZodTypeDef, BasketOrderQuantity>;
    /** @deprecated use `BasketOrderQuantity$Outbound` instead. */
    type Outbound = BasketOrderQuantity$Outbound;
}
export declare function basketOrderQuantityToJSON(basketOrderQuantity: BasketOrderQuantity): string;
export declare function basketOrderQuantityFromJSON(jsonString: string): SafeParseResult<BasketOrderQuantity, SDKValidationError>;
/** @internal */
export declare const BasketOrderSide$inboundSchema: z.ZodType<BasketOrderSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderSide$outboundSchema: z.ZodType<BasketOrderSideOpen, z.ZodTypeDef, BasketOrderSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderSide$ {
    /** @deprecated use `BasketOrderSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderSideOpen, z.ZodTypeDef, BasketOrderSideOpen>;
}
/** @internal */
export declare const BasketOrderSpecialReportingInstructions$inboundSchema: z.ZodType<BasketOrderSpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderSpecialReportingInstructions$outboundSchema: z.ZodType<BasketOrderSpecialReportingInstructionsOpen, z.ZodTypeDef, BasketOrderSpecialReportingInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderSpecialReportingInstructions$ {
    /** @deprecated use `BasketOrderSpecialReportingInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderSpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderSpecialReportingInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderSpecialReportingInstructionsOpen, z.ZodTypeDef, BasketOrderSpecialReportingInstructionsOpen>;
}
/** @internal */
export declare const BasketOrderTimeInForce$inboundSchema: z.ZodType<BasketOrderTimeInForceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderTimeInForce$outboundSchema: z.ZodType<BasketOrderTimeInForceOpen, z.ZodTypeDef, BasketOrderTimeInForceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderTimeInForce$ {
    /** @deprecated use `BasketOrderTimeInForce$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderTimeInForceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderTimeInForce$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderTimeInForceOpen, z.ZodTypeDef, BasketOrderTimeInForceOpen>;
}
/** @internal */
export declare const BasketOrder$inboundSchema: z.ZodType<BasketOrder, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrder$Outbound = {
    account_id?: string | undefined;
    asset_id?: string | undefined;
    asset_type?: string | undefined;
    average_prices?: Array<BasketTradingExecutedPrice$Outbound> | undefined;
    basket_order_id?: string | undefined;
    client_order_id?: string | undefined;
    client_order_received_time?: string | null | undefined;
    create_time?: string | null | undefined;
    cumulative_notional_value?: BasketOrderCumulativeNotionalValue$Outbound | null | undefined;
    currency_code?: string | undefined;
    executions?: Array<BasketTradingExecutions$Outbound> | undefined;
    filled_quantity?: BasketOrderFilledQuantity$Outbound | null | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    last_update_time?: string | null | undefined;
    max_sell_quantity?: BasketOrderMaxSellQuantity$Outbound | null | undefined;
    name?: string | undefined;
    notional_value?: BasketOrderNotionalValue$Outbound | null | undefined;
    order_rejected_reason?: string | undefined;
    order_status?: string | undefined;
    order_type?: string | undefined;
    quantity?: BasketOrderQuantity$Outbound | null | undefined;
    side?: string | undefined;
    special_reporting_instructions?: Array<string> | undefined;
    time_in_force?: string | undefined;
};
/** @internal */
export declare const BasketOrder$outboundSchema: z.ZodType<BasketOrder$Outbound, z.ZodTypeDef, BasketOrder>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrder$ {
    /** @deprecated use `BasketOrder$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrder, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrder$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrder$Outbound, z.ZodTypeDef, BasketOrder>;
    /** @deprecated use `BasketOrder$Outbound` instead. */
    type Outbound = BasketOrder$Outbound;
}
export declare function basketOrderToJSON(basketOrder: BasketOrder): string;
export declare function basketOrderFromJSON(jsonString: string): SafeParseResult<BasketOrder, SDKValidationError>;
//# sourceMappingURL=basketorder.d.ts.map