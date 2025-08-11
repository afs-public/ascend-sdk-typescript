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
export declare enum CompleteTradeResponseAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
export type CompleteTradeResponseAssetTypeOpen = OpenEnum<typeof CompleteTradeResponseAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum CompleteTradeResponseBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type CompleteTradeResponseBrokerCapacityOpen = OpenEnum<typeof CompleteTradeResponseBrokerCapacity>;
/**
 * Identifier type for the asset being traded.
 */
export declare enum CompleteTradeResponseIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type CompleteTradeResponseIdentifierTypeOpen = OpenEnum<typeof CompleteTradeResponseIdentifierType>;
/**
 * Date field to support extended trading hours.
 */
export type CompleteTradeResponseLocalMarketTradeDate = {
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
export declare enum CompleteTradeResponseRouteType {
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
export type CompleteTradeResponseRouteTypeOpen = OpenEnum<typeof CompleteTradeResponseRouteType>;
/**
 * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
 */
export type CompleteTradeResponseSettlementDate = {
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
export declare enum CompleteTradeResponseSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes if the trade is a SELL or a BUY.
 */
export type CompleteTradeResponseSideOpen = OpenEnum<typeof CompleteTradeResponseSide>;
/**
 * Side modifier for the trade.
 */
export declare enum CompleteTradeResponseSideModifier {
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
export type CompleteTradeResponseSideModifierOpen = OpenEnum<typeof CompleteTradeResponseSideModifier>;
export declare enum CompleteTradeResponseSpecialInstructions {
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
export type CompleteTradeResponseSpecialInstructionsOpen = OpenEnum<typeof CompleteTradeResponseSpecialInstructions>;
/**
 * Exchange venue
 */
export declare enum CompleteTradeResponseVenue {
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
export type CompleteTradeResponseVenueOpen = OpenEnum<typeof CompleteTradeResponseVenue>;
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export declare enum CompleteTradeResponseWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export type CompleteTradeResponseWhenIssuedOpen = OpenEnum<typeof CompleteTradeResponseWhenIssued>;
/**
 * The completed trade.
 */
export type Trade = {
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
    assetType?: CompleteTradeResponseAssetTypeOpen | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity?: CompleteTradeResponseBrokerCapacityOpen | undefined;
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
    identifierType?: CompleteTradeResponseIdentifierTypeOpen | undefined;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * Date field to support extended trading hours.
     */
    localMarketTradeDate?: CompleteTradeResponseLocalMarketTradeDate | null | undefined;
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
    routeType?: CompleteTradeResponseRouteTypeOpen | undefined;
    /**
     * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
     */
    settlementDate?: CompleteTradeResponseSettlementDate | null | undefined;
    /**
     * Denotes if the trade is a SELL or a BUY.
     */
    side?: CompleteTradeResponseSideOpen | undefined;
    /**
     * Side modifier for the trade.
     */
    sideModifier?: CompleteTradeResponseSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication?: string | undefined;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade (E.g. DISCRETION_EXERCISED, BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<CompleteTradeResponseSpecialInstructionsOpen> | undefined;
    /**
     * A ULID to uniquely identify the trade globally.
     */
    tradeId?: string | undefined;
    /**
     * Exchange venue
     */
    venue?: CompleteTradeResponseVenueOpen | undefined;
    /**
     * Denotes that this trade was either when_issued or when_distributed.
     */
    whenIssued?: CompleteTradeResponseWhenIssuedOpen | undefined;
};
/**
 * A response to the complete trade method.
 */
export type CompleteTradeResponse = {
    /**
     * The completed trade.
     */
    trade?: Trade | null | undefined;
};
/** @internal */
export declare const CompleteTradeResponseAssetType$inboundSchema: z.ZodType<CompleteTradeResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompleteTradeResponseAssetType$outboundSchema: z.ZodType<CompleteTradeResponseAssetTypeOpen, z.ZodTypeDef, CompleteTradeResponseAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseAssetType$ {
    /** @deprecated use `CompleteTradeResponseAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseAssetTypeOpen, z.ZodTypeDef, CompleteTradeResponseAssetTypeOpen>;
}
/** @internal */
export declare const CompleteTradeResponseBrokerCapacity$inboundSchema: z.ZodType<CompleteTradeResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompleteTradeResponseBrokerCapacity$outboundSchema: z.ZodType<CompleteTradeResponseBrokerCapacityOpen, z.ZodTypeDef, CompleteTradeResponseBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseBrokerCapacity$ {
    /** @deprecated use `CompleteTradeResponseBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseBrokerCapacityOpen, z.ZodTypeDef, CompleteTradeResponseBrokerCapacityOpen>;
}
/** @internal */
export declare const CompleteTradeResponseIdentifierType$inboundSchema: z.ZodType<CompleteTradeResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompleteTradeResponseIdentifierType$outboundSchema: z.ZodType<CompleteTradeResponseIdentifierTypeOpen, z.ZodTypeDef, CompleteTradeResponseIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseIdentifierType$ {
    /** @deprecated use `CompleteTradeResponseIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseIdentifierTypeOpen, z.ZodTypeDef, CompleteTradeResponseIdentifierTypeOpen>;
}
/** @internal */
export declare const CompleteTradeResponseLocalMarketTradeDate$inboundSchema: z.ZodType<CompleteTradeResponseLocalMarketTradeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteTradeResponseLocalMarketTradeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const CompleteTradeResponseLocalMarketTradeDate$outboundSchema: z.ZodType<CompleteTradeResponseLocalMarketTradeDate$Outbound, z.ZodTypeDef, CompleteTradeResponseLocalMarketTradeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseLocalMarketTradeDate$ {
    /** @deprecated use `CompleteTradeResponseLocalMarketTradeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseLocalMarketTradeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseLocalMarketTradeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseLocalMarketTradeDate$Outbound, z.ZodTypeDef, CompleteTradeResponseLocalMarketTradeDate>;
    /** @deprecated use `CompleteTradeResponseLocalMarketTradeDate$Outbound` instead. */
    type Outbound = CompleteTradeResponseLocalMarketTradeDate$Outbound;
}
export declare function completeTradeResponseLocalMarketTradeDateToJSON(completeTradeResponseLocalMarketTradeDate: CompleteTradeResponseLocalMarketTradeDate): string;
export declare function completeTradeResponseLocalMarketTradeDateFromJSON(jsonString: string): SafeParseResult<CompleteTradeResponseLocalMarketTradeDate, SDKValidationError>;
/** @internal */
export declare const CompleteTradeResponseRouteType$inboundSchema: z.ZodType<CompleteTradeResponseRouteTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompleteTradeResponseRouteType$outboundSchema: z.ZodType<CompleteTradeResponseRouteTypeOpen, z.ZodTypeDef, CompleteTradeResponseRouteTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseRouteType$ {
    /** @deprecated use `CompleteTradeResponseRouteType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseRouteTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseRouteType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseRouteTypeOpen, z.ZodTypeDef, CompleteTradeResponseRouteTypeOpen>;
}
/** @internal */
export declare const CompleteTradeResponseSettlementDate$inboundSchema: z.ZodType<CompleteTradeResponseSettlementDate, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteTradeResponseSettlementDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const CompleteTradeResponseSettlementDate$outboundSchema: z.ZodType<CompleteTradeResponseSettlementDate$Outbound, z.ZodTypeDef, CompleteTradeResponseSettlementDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseSettlementDate$ {
    /** @deprecated use `CompleteTradeResponseSettlementDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseSettlementDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseSettlementDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseSettlementDate$Outbound, z.ZodTypeDef, CompleteTradeResponseSettlementDate>;
    /** @deprecated use `CompleteTradeResponseSettlementDate$Outbound` instead. */
    type Outbound = CompleteTradeResponseSettlementDate$Outbound;
}
export declare function completeTradeResponseSettlementDateToJSON(completeTradeResponseSettlementDate: CompleteTradeResponseSettlementDate): string;
export declare function completeTradeResponseSettlementDateFromJSON(jsonString: string): SafeParseResult<CompleteTradeResponseSettlementDate, SDKValidationError>;
/** @internal */
export declare const CompleteTradeResponseSide$inboundSchema: z.ZodType<CompleteTradeResponseSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompleteTradeResponseSide$outboundSchema: z.ZodType<CompleteTradeResponseSideOpen, z.ZodTypeDef, CompleteTradeResponseSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseSide$ {
    /** @deprecated use `CompleteTradeResponseSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseSideOpen, z.ZodTypeDef, CompleteTradeResponseSideOpen>;
}
/** @internal */
export declare const CompleteTradeResponseSideModifier$inboundSchema: z.ZodType<CompleteTradeResponseSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompleteTradeResponseSideModifier$outboundSchema: z.ZodType<CompleteTradeResponseSideModifierOpen, z.ZodTypeDef, CompleteTradeResponseSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseSideModifier$ {
    /** @deprecated use `CompleteTradeResponseSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseSideModifierOpen, z.ZodTypeDef, CompleteTradeResponseSideModifierOpen>;
}
/** @internal */
export declare const CompleteTradeResponseSpecialInstructions$inboundSchema: z.ZodType<CompleteTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompleteTradeResponseSpecialInstructions$outboundSchema: z.ZodType<CompleteTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, CompleteTradeResponseSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseSpecialInstructions$ {
    /** @deprecated use `CompleteTradeResponseSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, CompleteTradeResponseSpecialInstructionsOpen>;
}
/** @internal */
export declare const CompleteTradeResponseVenue$inboundSchema: z.ZodType<CompleteTradeResponseVenueOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompleteTradeResponseVenue$outboundSchema: z.ZodType<CompleteTradeResponseVenueOpen, z.ZodTypeDef, CompleteTradeResponseVenueOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseVenue$ {
    /** @deprecated use `CompleteTradeResponseVenue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseVenueOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseVenue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseVenueOpen, z.ZodTypeDef, CompleteTradeResponseVenueOpen>;
}
/** @internal */
export declare const CompleteTradeResponseWhenIssued$inboundSchema: z.ZodType<CompleteTradeResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CompleteTradeResponseWhenIssued$outboundSchema: z.ZodType<CompleteTradeResponseWhenIssuedOpen, z.ZodTypeDef, CompleteTradeResponseWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponseWhenIssued$ {
    /** @deprecated use `CompleteTradeResponseWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponseWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponseWhenIssuedOpen, z.ZodTypeDef, CompleteTradeResponseWhenIssuedOpen>;
}
/** @internal */
export declare const Trade$inboundSchema: z.ZodType<Trade, z.ZodTypeDef, unknown>;
/** @internal */
export type Trade$Outbound = {
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
    local_market_trade_date?: CompleteTradeResponseLocalMarketTradeDate$Outbound | null | undefined;
    lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
    mic_code?: string | undefined;
    name?: string | undefined;
    open?: boolean | undefined;
    order_id?: string | undefined;
    route_type?: string | undefined;
    settlement_date?: CompleteTradeResponseSettlementDate$Outbound | null | undefined;
    side?: string | undefined;
    side_modifier?: string | undefined;
    source_application?: string | undefined;
    special_instructions?: Array<string> | undefined;
    trade_id?: string | undefined;
    venue?: string | undefined;
    when_issued?: string | undefined;
};
/** @internal */
export declare const Trade$outboundSchema: z.ZodType<Trade$Outbound, z.ZodTypeDef, Trade>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Trade$ {
    /** @deprecated use `Trade$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Trade, z.ZodTypeDef, unknown>;
    /** @deprecated use `Trade$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Trade$Outbound, z.ZodTypeDef, Trade>;
    /** @deprecated use `Trade$Outbound` instead. */
    type Outbound = Trade$Outbound;
}
export declare function tradeToJSON(trade: Trade): string;
export declare function tradeFromJSON(jsonString: string): SafeParseResult<Trade, SDKValidationError>;
/** @internal */
export declare const CompleteTradeResponse$inboundSchema: z.ZodType<CompleteTradeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CompleteTradeResponse$Outbound = {
    trade?: Trade$Outbound | null | undefined;
};
/** @internal */
export declare const CompleteTradeResponse$outboundSchema: z.ZodType<CompleteTradeResponse$Outbound, z.ZodTypeDef, CompleteTradeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CompleteTradeResponse$ {
    /** @deprecated use `CompleteTradeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CompleteTradeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CompleteTradeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CompleteTradeResponse$Outbound, z.ZodTypeDef, CompleteTradeResponse>;
    /** @deprecated use `CompleteTradeResponse$Outbound` instead. */
    type Outbound = CompleteTradeResponse$Outbound;
}
export declare function completeTradeResponseToJSON(completeTradeResponse: CompleteTradeResponse): string;
export declare function completeTradeResponseFromJSON(jsonString: string): SafeParseResult<CompleteTradeResponse, SDKValidationError>;
//# sourceMappingURL=completetraderesponse.d.ts.map