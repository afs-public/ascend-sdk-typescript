import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { BookingFee, BookingFee$Outbound } from "./bookingfee.js";
import { BookingLot, BookingLot$Outbound } from "./bookinglot.js";
import { Execution, Execution$Outbound } from "./execution.js";
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
export declare enum CancelTradeResponseAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
export type CancelTradeResponseAssetTypeOpen = OpenEnum<typeof CancelTradeResponseAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum CancelTradeResponseBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type CancelTradeResponseBrokerCapacityOpen = OpenEnum<typeof CancelTradeResponseBrokerCapacity>;
/**
 * Identifier type for the asset being traded.
 */
export declare enum CancelTradeResponseIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type CancelTradeResponseIdentifierTypeOpen = OpenEnum<typeof CancelTradeResponseIdentifierType>;
/**
 * Date field to support extended trading hours.
 */
export type CancelTradeResponseLocalMarketTradeDate = {
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
export declare enum CancelTradeResponseRouteType {
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
export type CancelTradeResponseRouteTypeOpen = OpenEnum<typeof CancelTradeResponseRouteType>;
/**
 * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
 */
export type CancelTradeResponseSettlementDate = {
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
export declare enum CancelTradeResponseSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes if the trade is a SELL or a BUY.
 */
export type CancelTradeResponseSideOpen = OpenEnum<typeof CancelTradeResponseSide>;
/**
 * Side modifier for the trade.
 */
export declare enum CancelTradeResponseSideModifier {
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
export type CancelTradeResponseSideModifierOpen = OpenEnum<typeof CancelTradeResponseSideModifier>;
export declare enum CancelTradeResponseSpecialInstructions {
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
export type CancelTradeResponseSpecialInstructionsOpen = OpenEnum<typeof CancelTradeResponseSpecialInstructions>;
/**
 * Exchange venue
 */
export declare enum CancelTradeResponseVenue {
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
export type CancelTradeResponseVenueOpen = OpenEnum<typeof CancelTradeResponseVenue>;
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export declare enum CancelTradeResponseWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export type CancelTradeResponseWhenIssuedOpen = OpenEnum<typeof CancelTradeResponseWhenIssued>;
/**
 * The trade that was canceled.
 */
export type CancelTradeResponseTrade = {
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
    assetType?: CancelTradeResponseAssetTypeOpen | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity?: CancelTradeResponseBrokerCapacityOpen | undefined;
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
    identifierType?: CancelTradeResponseIdentifierTypeOpen | undefined;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * Date field to support extended trading hours.
     */
    localMarketTradeDate?: CancelTradeResponseLocalMarketTradeDate | null | undefined;
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
    routeType?: CancelTradeResponseRouteTypeOpen | undefined;
    /**
     * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
     */
    settlementDate?: CancelTradeResponseSettlementDate | null | undefined;
    /**
     * Denotes if the trade is a SELL or a BUY.
     */
    side?: CancelTradeResponseSideOpen | undefined;
    /**
     * Side modifier for the trade.
     */
    sideModifier?: CancelTradeResponseSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication?: string | undefined;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade (E.g. DISCRETION_EXERCISED, BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<CancelTradeResponseSpecialInstructionsOpen> | undefined;
    /**
     * A ULID to uniquely identify the trade globally.
     */
    tradeId?: string | undefined;
    /**
     * Exchange venue
     */
    venue?: CancelTradeResponseVenueOpen | undefined;
    /**
     * Denotes that this trade was either when_issued or when_distributed.
     */
    whenIssued?: CancelTradeResponseWhenIssuedOpen | undefined;
};
/**
 * A response for the cancel trade method.
 */
export type CancelTradeResponse = {
    /**
     * The trade that was canceled.
     */
    trade?: CancelTradeResponseTrade | null | undefined;
};
/** @internal */
export declare const CancelTradeResponseAssetType$inboundSchema: z.ZodType<CancelTradeResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeResponseAssetType$outboundSchema: z.ZodType<CancelTradeResponseAssetTypeOpen, z.ZodTypeDef, CancelTradeResponseAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseAssetType$ {
    /** @deprecated use `CancelTradeResponseAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseAssetTypeOpen, z.ZodTypeDef, CancelTradeResponseAssetTypeOpen>;
}
/** @internal */
export declare const CancelTradeResponseBrokerCapacity$inboundSchema: z.ZodType<CancelTradeResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeResponseBrokerCapacity$outboundSchema: z.ZodType<CancelTradeResponseBrokerCapacityOpen, z.ZodTypeDef, CancelTradeResponseBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseBrokerCapacity$ {
    /** @deprecated use `CancelTradeResponseBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseBrokerCapacityOpen, z.ZodTypeDef, CancelTradeResponseBrokerCapacityOpen>;
}
/** @internal */
export declare const CancelTradeResponseIdentifierType$inboundSchema: z.ZodType<CancelTradeResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeResponseIdentifierType$outboundSchema: z.ZodType<CancelTradeResponseIdentifierTypeOpen, z.ZodTypeDef, CancelTradeResponseIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseIdentifierType$ {
    /** @deprecated use `CancelTradeResponseIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseIdentifierTypeOpen, z.ZodTypeDef, CancelTradeResponseIdentifierTypeOpen>;
}
/** @internal */
export declare const CancelTradeResponseLocalMarketTradeDate$inboundSchema: z.ZodType<CancelTradeResponseLocalMarketTradeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeResponseLocalMarketTradeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const CancelTradeResponseLocalMarketTradeDate$outboundSchema: z.ZodType<CancelTradeResponseLocalMarketTradeDate$Outbound, z.ZodTypeDef, CancelTradeResponseLocalMarketTradeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseLocalMarketTradeDate$ {
    /** @deprecated use `CancelTradeResponseLocalMarketTradeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseLocalMarketTradeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseLocalMarketTradeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseLocalMarketTradeDate$Outbound, z.ZodTypeDef, CancelTradeResponseLocalMarketTradeDate>;
    /** @deprecated use `CancelTradeResponseLocalMarketTradeDate$Outbound` instead. */
    type Outbound = CancelTradeResponseLocalMarketTradeDate$Outbound;
}
/** @internal */
export declare const CancelTradeResponseRouteType$inboundSchema: z.ZodType<CancelTradeResponseRouteTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeResponseRouteType$outboundSchema: z.ZodType<CancelTradeResponseRouteTypeOpen, z.ZodTypeDef, CancelTradeResponseRouteTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseRouteType$ {
    /** @deprecated use `CancelTradeResponseRouteType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseRouteTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseRouteType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseRouteTypeOpen, z.ZodTypeDef, CancelTradeResponseRouteTypeOpen>;
}
/** @internal */
export declare const CancelTradeResponseSettlementDate$inboundSchema: z.ZodType<CancelTradeResponseSettlementDate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeResponseSettlementDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const CancelTradeResponseSettlementDate$outboundSchema: z.ZodType<CancelTradeResponseSettlementDate$Outbound, z.ZodTypeDef, CancelTradeResponseSettlementDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseSettlementDate$ {
    /** @deprecated use `CancelTradeResponseSettlementDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseSettlementDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseSettlementDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseSettlementDate$Outbound, z.ZodTypeDef, CancelTradeResponseSettlementDate>;
    /** @deprecated use `CancelTradeResponseSettlementDate$Outbound` instead. */
    type Outbound = CancelTradeResponseSettlementDate$Outbound;
}
/** @internal */
export declare const CancelTradeResponseSide$inboundSchema: z.ZodType<CancelTradeResponseSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeResponseSide$outboundSchema: z.ZodType<CancelTradeResponseSideOpen, z.ZodTypeDef, CancelTradeResponseSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseSide$ {
    /** @deprecated use `CancelTradeResponseSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseSideOpen, z.ZodTypeDef, CancelTradeResponseSideOpen>;
}
/** @internal */
export declare const CancelTradeResponseSideModifier$inboundSchema: z.ZodType<CancelTradeResponseSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeResponseSideModifier$outboundSchema: z.ZodType<CancelTradeResponseSideModifierOpen, z.ZodTypeDef, CancelTradeResponseSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseSideModifier$ {
    /** @deprecated use `CancelTradeResponseSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseSideModifierOpen, z.ZodTypeDef, CancelTradeResponseSideModifierOpen>;
}
/** @internal */
export declare const CancelTradeResponseSpecialInstructions$inboundSchema: z.ZodType<CancelTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeResponseSpecialInstructions$outboundSchema: z.ZodType<CancelTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, CancelTradeResponseSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseSpecialInstructions$ {
    /** @deprecated use `CancelTradeResponseSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, CancelTradeResponseSpecialInstructionsOpen>;
}
/** @internal */
export declare const CancelTradeResponseVenue$inboundSchema: z.ZodType<CancelTradeResponseVenueOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeResponseVenue$outboundSchema: z.ZodType<CancelTradeResponseVenueOpen, z.ZodTypeDef, CancelTradeResponseVenueOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseVenue$ {
    /** @deprecated use `CancelTradeResponseVenue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseVenueOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseVenue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseVenueOpen, z.ZodTypeDef, CancelTradeResponseVenueOpen>;
}
/** @internal */
export declare const CancelTradeResponseWhenIssued$inboundSchema: z.ZodType<CancelTradeResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeResponseWhenIssued$outboundSchema: z.ZodType<CancelTradeResponseWhenIssuedOpen, z.ZodTypeDef, CancelTradeResponseWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseWhenIssued$ {
    /** @deprecated use `CancelTradeResponseWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseWhenIssuedOpen, z.ZodTypeDef, CancelTradeResponseWhenIssuedOpen>;
}
/** @internal */
export declare const CancelTradeResponseTrade$inboundSchema: z.ZodType<CancelTradeResponseTrade, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeResponseTrade$Outbound = {
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
    local_market_trade_date?: CancelTradeResponseLocalMarketTradeDate$Outbound | null | undefined;
    lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
    mic_code?: string | undefined;
    name?: string | undefined;
    open?: boolean | undefined;
    order_id?: string | undefined;
    route_type?: string | undefined;
    settlement_date?: CancelTradeResponseSettlementDate$Outbound | null | undefined;
    side?: string | undefined;
    side_modifier?: string | undefined;
    source_application?: string | undefined;
    special_instructions?: Array<string> | undefined;
    trade_id?: string | undefined;
    venue?: string | undefined;
    when_issued?: string | undefined;
};
/** @internal */
export declare const CancelTradeResponseTrade$outboundSchema: z.ZodType<CancelTradeResponseTrade$Outbound, z.ZodTypeDef, CancelTradeResponseTrade>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponseTrade$ {
    /** @deprecated use `CancelTradeResponseTrade$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponseTrade, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponseTrade$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponseTrade$Outbound, z.ZodTypeDef, CancelTradeResponseTrade>;
    /** @deprecated use `CancelTradeResponseTrade$Outbound` instead. */
    type Outbound = CancelTradeResponseTrade$Outbound;
}
/** @internal */
export declare const CancelTradeResponse$inboundSchema: z.ZodType<CancelTradeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeResponse$Outbound = {
    trade?: CancelTradeResponseTrade$Outbound | null | undefined;
};
/** @internal */
export declare const CancelTradeResponse$outboundSchema: z.ZodType<CancelTradeResponse$Outbound, z.ZodTypeDef, CancelTradeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeResponse$ {
    /** @deprecated use `CancelTradeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeResponse$Outbound, z.ZodTypeDef, CancelTradeResponse>;
    /** @deprecated use `CancelTradeResponse$Outbound` instead. */
    type Outbound = CancelTradeResponse$Outbound;
}
//# sourceMappingURL=canceltraderesponse.d.ts.map