import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CommissionCreate, CommissionCreate$Outbound } from "./commissioncreate.js";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { FeeCreate, FeeCreate$Outbound } from "./feecreate.js";
import { LetterOfIntentCreate, LetterOfIntentCreate$Outbound } from "./letterofintentcreate.js";
import { LimitPriceCreate, LimitPriceCreate$Outbound } from "./limitpricecreate.js";
import { RightsOfAccumulationCreate, RightsOfAccumulationCreate$Outbound } from "./rightsofaccumulationcreate.js";
import { StopPriceCreate, StopPriceCreate$Outbound } from "./stoppricecreate.js";
/**
 * The type of the asset in this order, which must be one of the following:
 *
 * @remarks
 *  EQUITY, MUTUAL_FUND, and FIXED_INCOME.
 */
export declare enum AssetType {
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
export type AssetTypeOpen = OpenEnum<typeof AssetType>;
/**
 * Defaults to "AGENCY" if not specified. For Equities: Only "AGENCY" is allowed. For Mutual Funds: Only "AGENCY" is allowed. For Fixed Income: Either "AGENCY" or "PRINCIPAL" are allowed.
 */
export declare enum BrokerCapacity {
    BrokerCapacityUnspecified = "BROKER_CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL"
}
/**
 * Defaults to "AGENCY" if not specified. For Equities: Only "AGENCY" is allowed. For Mutual Funds: Only "AGENCY" is allowed. For Fixed Income: Either "AGENCY" or "PRINCIPAL" are allowed.
 */
export type BrokerCapacityOpen = OpenEnum<typeof BrokerCapacity>;
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported For Fixed Income: only CUSIP and ISIN are supported
 */
export declare enum IdentifierType {
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported For Fixed Income: only CUSIP and ISIN are supported
 */
export type IdentifierTypeOpen = OpenEnum<typeof IdentifierType>;
/**
 * The execution type of this order. For Equities: MARKET, LIMIT, STOP and MARKET_IF_TOUCHED are supported. For Mutual Funds: only MARKET is supported. For Fixed Income: only LIMIT is supported.
 */
export declare enum OrderType {
    Limit = "LIMIT",
    Market = "MARKET",
    Stop = "STOP",
    MarketIfTouched = "MARKET_IF_TOUCHED"
}
/**
 * The execution type of this order. For Equities: MARKET, LIMIT, STOP and MARKET_IF_TOUCHED are supported. For Mutual Funds: only MARKET is supported. For Fixed Income: only LIMIT is supported.
 */
export type OrderTypeOpen = OpenEnum<typeof OrderType>;
/**
 * The side of this order.
 */
export declare enum Side {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * The side of this order.
 */
export type SideOpen = OpenEnum<typeof Side>;
export declare enum SpecialReportingInstructions {
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
export type SpecialReportingInstructionsOpen = OpenEnum<typeof SpecialReportingInstructions>;
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export declare enum TimeInForce {
    Day = "DAY",
    GoodTillDate = "GOOD_TILL_DATE"
}
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export type TimeInForceOpen = OpenEnum<typeof TimeInForce>;
/**
 * Which TradingSession to trade in, defaults to 'CORE'. Only available for Equity orders.
 */
export declare enum TradingSession {
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
export type TradingSessionOpen = OpenEnum<typeof TradingSession>;
/**
 * The message describing an order
 */
export type OrderCreate = {
    /**
     * The type of the asset in this order, which must be one of the following:
     *
     * @remarks
     *  EQUITY, MUTUAL_FUND, and FIXED_INCOME.
     */
    assetType: AssetTypeOpen;
    /**
     * Defaults to "AGENCY" if not specified. For Equities: Only "AGENCY" is allowed. For Mutual Funds: Only "AGENCY" is allowed. For Fixed Income: Either "AGENCY" or "PRINCIPAL" are allowed.
     */
    brokerCapacity?: BrokerCapacityOpen | undefined;
    /**
     * User-supplied unique order ID. Cannot be more than 40 characters long.
     */
    clientOrderId: string;
    /**
     * Required for Equity Orders for any client who is having Apex do CAT reporting on their behalf. A value may be provided for non-Equity orders, and will be remembered, but valid timestamps will have no impact on how they are processed.
     */
    clientReceivedTime?: Date | null | undefined;
    /**
     * Only relevant for CAT reporting when clients have Apex do CAT reporting on their behalf. Denotes the time the client sent the order to Apex. A value may be provided for non-Equity orders, and will be remembered, but valid timestamps will have no impact on how they are processed.
     */
    clientSentTime?: Date | null | undefined;
    /**
     * A custom commission applied to an order
     */
    commission?: CommissionCreate | undefined;
    /**
     * Defaults to "USD". Only "USD" is supported. Full list of currency codes is defined at: https://en.wikipedia.org/wiki/ISO_4217
     */
    currencyCode?: string | undefined;
    /**
     * Fees that will be applied to this order. Only the BROKER_FEE type is supported.
     */
    fees?: Array<FeeCreate> | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier: string;
    /**
     * A string attribute denoting the country of issuance or where the asset is trading. Only available for Mutual Fund orders. Defaults to US, when trading non US mutual funds this field must be provided Complies with ISO-3166 Alpha-2 Codes
     */
    identifierIssuingRegionCode?: string | undefined;
    /**
     * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported For Fixed Income: only CUSIP and ISIN are supported
     */
    identifierType: IdentifierTypeOpen;
    /**
     * Letter of Intent (LOI). An LOI allows investors to receive sales charge discounts based on a commitment to buy a specified monetary amount of shares over a period of time, usually 13 months.
     */
    letterOfIntent?: LetterOfIntentCreate | undefined;
    /**
     * A limit price definition
     */
    limitPrice?: LimitPriceCreate | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    maxSellQuantity?: DecimalCreate | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    notionalValue?: DecimalCreate | undefined;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    orderDate: DateCreate;
    /**
     * The execution type of this order. For Equities: MARKET, LIMIT, STOP and MARKET_IF_TOUCHED are supported. For Mutual Funds: only MARKET is supported. For Fixed Income: only LIMIT is supported.
     */
    orderType: OrderTypeOpen;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    quantity?: DecimalCreate | undefined;
    /**
     * Rights of Accumulation (ROA). An ROA allows an investor to aggregate their own fund shares with the holdings of certain related parties toward achieving the investment thresholds at which sales charge discounts become available.
     */
    rightsOfAccumulation?: RightsOfAccumulationCreate | undefined;
    /**
     * The side of this order.
     */
    side: SideOpen;
    /**
     * Special Reporting Instructions to be applied to this order. Can include multiple Instructions.
     */
    specialReportingInstructions?: Array<SpecialReportingInstructionsOpen> | undefined;
    /**
     * A stop price definition
     */
    stopPrice?: StopPriceCreate | undefined;
    /**
     * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
     */
    timeInForce: TimeInForceOpen;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    timeInForceExpirationDate?: DateCreate | undefined;
    /**
     * Which TradingSession to trade in, defaults to 'CORE'. Only available for Equity orders.
     */
    tradingSession?: TradingSessionOpen | undefined;
};
/** @internal */
export declare const AssetType$inboundSchema: z.ZodType<AssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AssetType$outboundSchema: z.ZodType<AssetTypeOpen, z.ZodTypeDef, AssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetType$ {
    /** @deprecated use `AssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTypeOpen, z.ZodTypeDef, AssetTypeOpen>;
}
/** @internal */
export declare const BrokerCapacity$inboundSchema: z.ZodType<BrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BrokerCapacity$outboundSchema: z.ZodType<BrokerCapacityOpen, z.ZodTypeDef, BrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BrokerCapacity$ {
    /** @deprecated use `BrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BrokerCapacityOpen, z.ZodTypeDef, BrokerCapacityOpen>;
}
/** @internal */
export declare const IdentifierType$inboundSchema: z.ZodType<IdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentifierType$outboundSchema: z.ZodType<IdentifierTypeOpen, z.ZodTypeDef, IdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentifierType$ {
    /** @deprecated use `IdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentifierTypeOpen, z.ZodTypeDef, IdentifierTypeOpen>;
}
/** @internal */
export declare const OrderType$inboundSchema: z.ZodType<OrderTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderType$outboundSchema: z.ZodType<OrderTypeOpen, z.ZodTypeDef, OrderTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderType$ {
    /** @deprecated use `OrderType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderTypeOpen, z.ZodTypeDef, OrderTypeOpen>;
}
/** @internal */
export declare const Side$inboundSchema: z.ZodType<SideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Side$outboundSchema: z.ZodType<SideOpen, z.ZodTypeDef, SideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Side$ {
    /** @deprecated use `Side$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Side$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SideOpen, z.ZodTypeDef, SideOpen>;
}
/** @internal */
export declare const SpecialReportingInstructions$inboundSchema: z.ZodType<SpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SpecialReportingInstructions$outboundSchema: z.ZodType<SpecialReportingInstructionsOpen, z.ZodTypeDef, SpecialReportingInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SpecialReportingInstructions$ {
    /** @deprecated use `SpecialReportingInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SpecialReportingInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SpecialReportingInstructionsOpen, z.ZodTypeDef, SpecialReportingInstructionsOpen>;
}
/** @internal */
export declare const TimeInForce$inboundSchema: z.ZodType<TimeInForceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TimeInForce$outboundSchema: z.ZodType<TimeInForceOpen, z.ZodTypeDef, TimeInForceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TimeInForce$ {
    /** @deprecated use `TimeInForce$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TimeInForceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TimeInForce$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TimeInForceOpen, z.ZodTypeDef, TimeInForceOpen>;
}
/** @internal */
export declare const TradingSession$inboundSchema: z.ZodType<TradingSessionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradingSession$outboundSchema: z.ZodType<TradingSessionOpen, z.ZodTypeDef, TradingSessionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradingSession$ {
    /** @deprecated use `TradingSession$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradingSessionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradingSession$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradingSessionOpen, z.ZodTypeDef, TradingSessionOpen>;
}
/** @internal */
export declare const OrderCreate$inboundSchema: z.ZodType<OrderCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderCreate$Outbound = {
    asset_type: string;
    broker_capacity?: string | undefined;
    client_order_id: string;
    client_received_time?: string | null | undefined;
    client_sent_time?: string | null | undefined;
    commission?: CommissionCreate$Outbound | undefined;
    currency_code?: string | undefined;
    fees?: Array<FeeCreate$Outbound> | undefined;
    identifier: string;
    identifier_issuing_region_code?: string | undefined;
    identifier_type: string;
    letter_of_intent?: LetterOfIntentCreate$Outbound | undefined;
    limit_price?: LimitPriceCreate$Outbound | undefined;
    max_sell_quantity?: DecimalCreate$Outbound | undefined;
    notional_value?: DecimalCreate$Outbound | undefined;
    order_date: DateCreate$Outbound;
    order_type: string;
    quantity?: DecimalCreate$Outbound | undefined;
    rights_of_accumulation?: RightsOfAccumulationCreate$Outbound | undefined;
    side: string;
    special_reporting_instructions?: Array<string> | undefined;
    stop_price?: StopPriceCreate$Outbound | undefined;
    time_in_force: string;
    time_in_force_expiration_date?: DateCreate$Outbound | undefined;
    trading_session?: string | undefined;
};
/** @internal */
export declare const OrderCreate$outboundSchema: z.ZodType<OrderCreate$Outbound, z.ZodTypeDef, OrderCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCreate$ {
    /** @deprecated use `OrderCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCreate$Outbound, z.ZodTypeDef, OrderCreate>;
    /** @deprecated use `OrderCreate$Outbound` instead. */
    type Outbound = OrderCreate$Outbound;
}
export declare function orderCreateToJSON(orderCreate: OrderCreate): string;
export declare function orderCreateFromJSON(jsonString: string): SafeParseResult<OrderCreate, SDKValidationError>;
//# sourceMappingURL=ordercreate.d.ts.map