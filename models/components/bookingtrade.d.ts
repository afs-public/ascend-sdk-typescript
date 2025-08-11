import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BookingFee, BookingFee$Outbound } from "./bookingfee.js";
import { BookingLot, BookingLot$Outbound } from "./bookinglot.js";
import { Execution, Execution$Outbound } from "./execution.js";
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
export declare enum BookingTradeAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
export type BookingTradeAssetTypeOpen = OpenEnum<typeof BookingTradeAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum BookingTradeBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type BookingTradeBrokerCapacityOpen = OpenEnum<typeof BookingTradeBrokerCapacity>;
/**
 * Identifier type for the asset being traded.
 */
export declare enum BookingTradeIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type BookingTradeIdentifierTypeOpen = OpenEnum<typeof BookingTradeIdentifierType>;
/**
 * Date field to support extended trading hours.
 */
export type LocalMarketTradeDate = {
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
 * Route type for the trade.
 */
export declare enum BookingTradeRouteType {
    RouteTypeUnspecified = "ROUTE_TYPE_UNSPECIFIED",
    Dma = "DMA",
    Mngd = "MNGD",
    Quik = "QUIK",
    Algo = "ALGO",
    Away = "AWAY",
    Corr = "CORR",
    Boats = "BOATS"
}
/**
 * Route type for the trade.
 */
export type BookingTradeRouteTypeOpen = OpenEnum<typeof BookingTradeRouteType>;
/**
 * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
 */
export type SettlementDate = {
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
 * Denotes if the trade is a SELL or a BUY.
 */
export declare enum BookingTradeSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes if the trade is a SELL or a BUY.
 */
export type BookingTradeSideOpen = OpenEnum<typeof BookingTradeSide>;
/**
 * Side modifier for the trade.
 */
export declare enum BookingTradeSideModifier {
    SideModifierUnspecified = "SIDE_MODIFIER_UNSPECIFIED",
    Short = "SHORT",
    ShortExempt = "SHORT_EXEMPT",
    ShortCover = "SHORT_COVER",
    Open = "OPEN",
    Close = "CLOSE"
}
/**
 * Side modifier for the trade.
 */
export type BookingTradeSideModifierOpen = OpenEnum<typeof BookingTradeSideModifier>;
export declare enum BookingTradeSpecialInstructions {
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
export type BookingTradeSpecialInstructionsOpen = OpenEnum<typeof BookingTradeSpecialInstructions>;
/**
 * Exchange venue
 */
export declare enum BookingTradeVenue {
    ExchangeVenueUnspecified = "EXCHANGE_VENUE_UNSPECIFIED",
    Amex = "AMEX",
    Arca = "ARCA",
    Bats = "BATS",
    BatsByx = "BATS_BYX",
    Boston = "BOSTON",
    Box = "BOX",
    Bzx = "BZX",
    C2 = "C2",
    Cboe = "CBOE",
    Chicago = "CHICAGO",
    Cincinnati = "CINCINNATI",
    Edga = "EDGA",
    Edgx = "EDGX",
    Exclearing = "EXCLEARING",
    Iex = "IEX",
    Ise = "ISE",
    IseGemini = "ISE_GEMINI",
    Miax = "MIAX",
    Nasdaq = "NASDAQ",
    NasdaqOmxBx = "NASDAQ_OMX_BX",
    Nyse = "NYSE",
    Phlx = "PHLX",
    Otc = "OTC",
    Qsr = "QSR"
}
/**
 * Exchange venue
 */
export type BookingTradeVenueOpen = OpenEnum<typeof BookingTradeVenue>;
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export declare enum BookingTradeWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export type BookingTradeWhenIssuedOpen = OpenEnum<typeof BookingTradeWhenIssued>;
/**
 * A Trade represents an entire order made by a client. Trades can hold one or many executions representing partial fills that aggregate into a whole order.
 */
export type BookingTrade = {
    /**
     * A globally unique identifier referencing a single account.
     */
    accountId?: string | undefined;
    /**
     * The current activity_id of this trade in the Ledger.
     */
    activityId?: string | undefined;
    /**
     * Free form instructions that can be used to provide additional instructions (that are not captured by existing special instructions) and will be put on the trade confirm.
     */
    additionalInstructions?: string | undefined;
    /**
     * Fractional support for market-makers' internal order ids.
     */
    alternateOrderId?: string | undefined;
    /**
     * Type of the asset being traded. Required for SYMBOL and CUSIP.
     */
    assetType?: BookingTradeAssetTypeOpen | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity?: BookingTradeBrokerCapacityOpen | undefined;
    /**
     * The unique identifier that is associated with an order. Must be unique by date per trade per client.
     */
    clientOrderId?: string | undefined;
    /**
     * Executing broker of the trade.
     */
    executingBroker?: string | undefined;
    /**
     * The executions (sometimes referred to as partial-fills) that comprise the trade.
     */
    executions?: Array<Execution> | undefined;
    /**
     * Any client calculated fees associated with the trade. Only allowed if trade.open = false. Regulatory fees will be calculated automatically if they are not explicitly overwritten or suppressed.
     */
    fees?: Array<BookingFee> | undefined;
    /**
     * Identifier (of the type specified in `identifier_type`). Responses will supply the originally requested identifier.
     */
    identifier?: string | undefined;
    /**
     * Identifier type for the asset being traded.
     */
    identifierType?: BookingTradeIdentifierTypeOpen | undefined;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * Date field to support extended trading hours.
     */
    localMarketTradeDate?: LocalMarketTradeDate | null | undefined;
    /**
     * One or many lot matching instructions for the trade.
     */
    lotMatchingInstructions?: Array<BookingLot> | undefined;
    /**
     * Market Identifier Code
     */
    micCode?: string | undefined;
    /**
     * The resource name of the trade.
     */
    name?: string | undefined;
    /**
     * State of this trade's completeness in filling. True: trade is not done filling and can append more executions onto the trade False: trade is done filling and cannot append more executions onto the trade By default, trades are closed when they are created. An open trade can later be closed by calling the CompleteTrade endpoint. Additional executions can be appended to an open trade by calling the CreateExecution endpoint. Trades that are left open will be automatically closed nightly before Ledger's EOD.
     */
    open?: boolean | undefined;
    /**
     * Street-level order id, unique by day per broker.
     */
    orderId?: string | undefined;
    /**
     * Route type for the trade.
     */
    routeType?: BookingTradeRouteTypeOpen | undefined;
    /**
     * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
     */
    settlementDate?: SettlementDate | null | undefined;
    /**
     * Denotes if the trade is a SELL or a BUY.
     */
    side?: BookingTradeSideOpen | undefined;
    /**
     * Side modifier for the trade.
     */
    sideModifier?: BookingTradeSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication?: string | undefined;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade (E.g. DISCRETION_EXERCISED, BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<BookingTradeSpecialInstructionsOpen> | undefined;
    /**
     * A ULID to uniquely identify the trade globally.
     */
    tradeId?: string | undefined;
    /**
     * Exchange venue
     */
    venue?: BookingTradeVenueOpen | undefined;
    /**
     * Denotes that this trade was either when_issued or when_distributed.
     */
    whenIssued?: BookingTradeWhenIssuedOpen | undefined;
};
/** @internal */
export declare const BookingTradeAssetType$inboundSchema: z.ZodType<BookingTradeAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingTradeAssetType$outboundSchema: z.ZodType<BookingTradeAssetTypeOpen, z.ZodTypeDef, BookingTradeAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTradeAssetType$ {
    /** @deprecated use `BookingTradeAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTradeAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTradeAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTradeAssetTypeOpen, z.ZodTypeDef, BookingTradeAssetTypeOpen>;
}
/** @internal */
export declare const BookingTradeBrokerCapacity$inboundSchema: z.ZodType<BookingTradeBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingTradeBrokerCapacity$outboundSchema: z.ZodType<BookingTradeBrokerCapacityOpen, z.ZodTypeDef, BookingTradeBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTradeBrokerCapacity$ {
    /** @deprecated use `BookingTradeBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTradeBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTradeBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTradeBrokerCapacityOpen, z.ZodTypeDef, BookingTradeBrokerCapacityOpen>;
}
/** @internal */
export declare const BookingTradeIdentifierType$inboundSchema: z.ZodType<BookingTradeIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingTradeIdentifierType$outboundSchema: z.ZodType<BookingTradeIdentifierTypeOpen, z.ZodTypeDef, BookingTradeIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTradeIdentifierType$ {
    /** @deprecated use `BookingTradeIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTradeIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTradeIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTradeIdentifierTypeOpen, z.ZodTypeDef, BookingTradeIdentifierTypeOpen>;
}
/** @internal */
export declare const LocalMarketTradeDate$inboundSchema: z.ZodType<LocalMarketTradeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LocalMarketTradeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const LocalMarketTradeDate$outboundSchema: z.ZodType<LocalMarketTradeDate$Outbound, z.ZodTypeDef, LocalMarketTradeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LocalMarketTradeDate$ {
    /** @deprecated use `LocalMarketTradeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LocalMarketTradeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LocalMarketTradeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LocalMarketTradeDate$Outbound, z.ZodTypeDef, LocalMarketTradeDate>;
    /** @deprecated use `LocalMarketTradeDate$Outbound` instead. */
    type Outbound = LocalMarketTradeDate$Outbound;
}
export declare function localMarketTradeDateToJSON(localMarketTradeDate: LocalMarketTradeDate): string;
export declare function localMarketTradeDateFromJSON(jsonString: string): SafeParseResult<LocalMarketTradeDate, SDKValidationError>;
/** @internal */
export declare const BookingTradeRouteType$inboundSchema: z.ZodType<BookingTradeRouteTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingTradeRouteType$outboundSchema: z.ZodType<BookingTradeRouteTypeOpen, z.ZodTypeDef, BookingTradeRouteTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTradeRouteType$ {
    /** @deprecated use `BookingTradeRouteType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTradeRouteTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTradeRouteType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTradeRouteTypeOpen, z.ZodTypeDef, BookingTradeRouteTypeOpen>;
}
/** @internal */
export declare const SettlementDate$inboundSchema: z.ZodType<SettlementDate, z.ZodTypeDef, unknown>;
/** @internal */
export type SettlementDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const SettlementDate$outboundSchema: z.ZodType<SettlementDate$Outbound, z.ZodTypeDef, SettlementDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SettlementDate$ {
    /** @deprecated use `SettlementDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SettlementDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SettlementDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SettlementDate$Outbound, z.ZodTypeDef, SettlementDate>;
    /** @deprecated use `SettlementDate$Outbound` instead. */
    type Outbound = SettlementDate$Outbound;
}
export declare function settlementDateToJSON(settlementDate: SettlementDate): string;
export declare function settlementDateFromJSON(jsonString: string): SafeParseResult<SettlementDate, SDKValidationError>;
/** @internal */
export declare const BookingTradeSide$inboundSchema: z.ZodType<BookingTradeSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingTradeSide$outboundSchema: z.ZodType<BookingTradeSideOpen, z.ZodTypeDef, BookingTradeSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTradeSide$ {
    /** @deprecated use `BookingTradeSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTradeSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTradeSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTradeSideOpen, z.ZodTypeDef, BookingTradeSideOpen>;
}
/** @internal */
export declare const BookingTradeSideModifier$inboundSchema: z.ZodType<BookingTradeSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingTradeSideModifier$outboundSchema: z.ZodType<BookingTradeSideModifierOpen, z.ZodTypeDef, BookingTradeSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTradeSideModifier$ {
    /** @deprecated use `BookingTradeSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTradeSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTradeSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTradeSideModifierOpen, z.ZodTypeDef, BookingTradeSideModifierOpen>;
}
/** @internal */
export declare const BookingTradeSpecialInstructions$inboundSchema: z.ZodType<BookingTradeSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingTradeSpecialInstructions$outboundSchema: z.ZodType<BookingTradeSpecialInstructionsOpen, z.ZodTypeDef, BookingTradeSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTradeSpecialInstructions$ {
    /** @deprecated use `BookingTradeSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTradeSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTradeSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTradeSpecialInstructionsOpen, z.ZodTypeDef, BookingTradeSpecialInstructionsOpen>;
}
/** @internal */
export declare const BookingTradeVenue$inboundSchema: z.ZodType<BookingTradeVenueOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingTradeVenue$outboundSchema: z.ZodType<BookingTradeVenueOpen, z.ZodTypeDef, BookingTradeVenueOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTradeVenue$ {
    /** @deprecated use `BookingTradeVenue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTradeVenueOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTradeVenue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTradeVenueOpen, z.ZodTypeDef, BookingTradeVenueOpen>;
}
/** @internal */
export declare const BookingTradeWhenIssued$inboundSchema: z.ZodType<BookingTradeWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingTradeWhenIssued$outboundSchema: z.ZodType<BookingTradeWhenIssuedOpen, z.ZodTypeDef, BookingTradeWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTradeWhenIssued$ {
    /** @deprecated use `BookingTradeWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTradeWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTradeWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTradeWhenIssuedOpen, z.ZodTypeDef, BookingTradeWhenIssuedOpen>;
}
/** @internal */
export declare const BookingTrade$inboundSchema: z.ZodType<BookingTrade, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingTrade$Outbound = {
    account_id?: string | undefined;
    activity_id?: string | undefined;
    additional_instructions?: string | undefined;
    alternate_order_id?: string | undefined;
    asset_type?: string | undefined;
    broker_capacity?: string | undefined;
    client_order_id?: string | undefined;
    executing_broker?: string | undefined;
    executions?: Array<Execution$Outbound> | undefined;
    fees?: Array<BookingFee$Outbound> | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    issuing_region_code?: string | undefined;
    local_market_trade_date?: LocalMarketTradeDate$Outbound | null | undefined;
    lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
    mic_code?: string | undefined;
    name?: string | undefined;
    open?: boolean | undefined;
    order_id?: string | undefined;
    route_type?: string | undefined;
    settlement_date?: SettlementDate$Outbound | null | undefined;
    side?: string | undefined;
    side_modifier?: string | undefined;
    source_application?: string | undefined;
    special_instructions?: Array<string> | undefined;
    trade_id?: string | undefined;
    venue?: string | undefined;
    when_issued?: string | undefined;
};
/** @internal */
export declare const BookingTrade$outboundSchema: z.ZodType<BookingTrade$Outbound, z.ZodTypeDef, BookingTrade>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingTrade$ {
    /** @deprecated use `BookingTrade$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingTrade, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingTrade$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingTrade$Outbound, z.ZodTypeDef, BookingTrade>;
    /** @deprecated use `BookingTrade$Outbound` instead. */
    type Outbound = BookingTrade$Outbound;
}
export declare function bookingTradeToJSON(bookingTrade: BookingTrade): string;
export declare function bookingTradeFromJSON(jsonString: string): SafeParseResult<BookingTrade, SDKValidationError>;
//# sourceMappingURL=bookingtrade.d.ts.map