import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BookingFee, BookingFee$Outbound } from "./bookingfee.js";
import { BookingLot, BookingLot$Outbound } from "./bookinglot.js";
import { Execution, Execution$Outbound } from "./execution.js";
/**
 * Type of the asset being traded.
 */
export declare enum RebookTradeResponseAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded.
 */
export type RebookTradeResponseAssetTypeOpen = OpenEnum<typeof RebookTradeResponseAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum RebookTradeResponseBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type RebookTradeResponseBrokerCapacityOpen = OpenEnum<typeof RebookTradeResponseBrokerCapacity>;
/**
 * Identifier type for the asset being traded.
 */
export declare enum RebookTradeResponseIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type RebookTradeResponseIdentifierTypeOpen = OpenEnum<typeof RebookTradeResponseIdentifierType>;
/**
 * Date field to support extended trading hours.
 */
export type RebookTradeResponseLocalMarketTradeDate = {
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
export declare enum RebookTradeResponseRouteType {
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
export type RebookTradeResponseRouteTypeOpen = OpenEnum<typeof RebookTradeResponseRouteType>;
/**
 * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
 */
export type RebookTradeResponseSettlementDate = {
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
export declare enum RebookTradeResponseSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes if the trade is a SELL or a BUY.
 */
export type RebookTradeResponseSideOpen = OpenEnum<typeof RebookTradeResponseSide>;
/**
 * Side modifier for the trade.
 */
export declare enum RebookTradeResponseSideModifier {
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
export type RebookTradeResponseSideModifierOpen = OpenEnum<typeof RebookTradeResponseSideModifier>;
export declare enum RebookTradeResponseSpecialInstructions {
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
export type RebookTradeResponseSpecialInstructionsOpen = OpenEnum<typeof RebookTradeResponseSpecialInstructions>;
/**
 * Exchange venue
 */
export declare enum RebookTradeResponseVenue {
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
export type RebookTradeResponseVenueOpen = OpenEnum<typeof RebookTradeResponseVenue>;
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export declare enum RebookTradeResponseWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export type RebookTradeResponseWhenIssuedOpen = OpenEnum<typeof RebookTradeResponseWhenIssued>;
/**
 * The new trade that is booked.
 */
export type NewTrade = {
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
     * Type of the asset being traded.
     */
    assetType?: RebookTradeResponseAssetTypeOpen | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity?: RebookTradeResponseBrokerCapacityOpen | undefined;
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
    identifierType?: RebookTradeResponseIdentifierTypeOpen | undefined;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * Date field to support extended trading hours.
     */
    localMarketTradeDate?: RebookTradeResponseLocalMarketTradeDate | null | undefined;
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
    routeType?: RebookTradeResponseRouteTypeOpen | undefined;
    /**
     * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
     */
    settlementDate?: RebookTradeResponseSettlementDate | null | undefined;
    /**
     * Denotes if the trade is a SELL or a BUY.
     */
    side?: RebookTradeResponseSideOpen | undefined;
    /**
     * Side modifier for the trade.
     */
    sideModifier?: RebookTradeResponseSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication?: string | undefined;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade (E.g. DISCRETION_EXERCISED, BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<RebookTradeResponseSpecialInstructionsOpen> | undefined;
    /**
     * A ULID to uniquely identify the trade globally.
     */
    tradeId?: string | undefined;
    /**
     * Exchange venue
     */
    venue?: RebookTradeResponseVenueOpen | undefined;
    /**
     * Denotes that this trade was either when_issued or when_distributed.
     */
    whenIssued?: RebookTradeResponseWhenIssuedOpen | undefined;
};
/**
 * Type of the asset being traded.
 */
export declare enum RebookTradeResponseOriginalTradeAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded.
 */
export type RebookTradeResponseOriginalTradeAssetTypeOpen = OpenEnum<typeof RebookTradeResponseOriginalTradeAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum RebookTradeResponseOriginalTradeBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type RebookTradeResponseOriginalTradeBrokerCapacityOpen = OpenEnum<typeof RebookTradeResponseOriginalTradeBrokerCapacity>;
/**
 * Identifier type for the asset being traded.
 */
export declare enum RebookTradeResponseOriginalTradeIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type RebookTradeResponseOriginalTradeIdentifierTypeOpen = OpenEnum<typeof RebookTradeResponseOriginalTradeIdentifierType>;
/**
 * Date field to support extended trading hours.
 */
export type RebookTradeResponseOriginalTradeLocalMarketTradeDate = {
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
export declare enum RebookTradeResponseOriginalTradeRouteType {
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
export type RebookTradeResponseOriginalTradeRouteTypeOpen = OpenEnum<typeof RebookTradeResponseOriginalTradeRouteType>;
/**
 * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
 */
export type RebookTradeResponseOriginalTradeSettlementDate = {
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
export declare enum RebookTradeResponseOriginalTradeSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes if the trade is a SELL or a BUY.
 */
export type RebookTradeResponseOriginalTradeSideOpen = OpenEnum<typeof RebookTradeResponseOriginalTradeSide>;
/**
 * Side modifier for the trade.
 */
export declare enum RebookTradeResponseOriginalTradeSideModifier {
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
export type RebookTradeResponseOriginalTradeSideModifierOpen = OpenEnum<typeof RebookTradeResponseOriginalTradeSideModifier>;
export declare enum RebookTradeResponseOriginalTradeSpecialInstructions {
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
export type RebookTradeResponseOriginalTradeSpecialInstructionsOpen = OpenEnum<typeof RebookTradeResponseOriginalTradeSpecialInstructions>;
/**
 * Exchange venue
 */
export declare enum RebookTradeResponseOriginalTradeVenue {
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
export type RebookTradeResponseOriginalTradeVenueOpen = OpenEnum<typeof RebookTradeResponseOriginalTradeVenue>;
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export declare enum RebookTradeResponseOriginalTradeWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export type RebookTradeResponseOriginalTradeWhenIssuedOpen = OpenEnum<typeof RebookTradeResponseOriginalTradeWhenIssued>;
/**
 * The original trade that was rebooked.
 */
export type OriginalTrade = {
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
     * Type of the asset being traded.
     */
    assetType?: RebookTradeResponseOriginalTradeAssetTypeOpen | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity?: RebookTradeResponseOriginalTradeBrokerCapacityOpen | undefined;
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
    identifierType?: RebookTradeResponseOriginalTradeIdentifierTypeOpen | undefined;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * Date field to support extended trading hours.
     */
    localMarketTradeDate?: RebookTradeResponseOriginalTradeLocalMarketTradeDate | null | undefined;
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
    routeType?: RebookTradeResponseOriginalTradeRouteTypeOpen | undefined;
    /**
     * Defaults to T+1 for equities if this is not provided. Calculated by the execution's execution_time field in Eastern Time.
     */
    settlementDate?: RebookTradeResponseOriginalTradeSettlementDate | null | undefined;
    /**
     * Denotes if the trade is a SELL or a BUY.
     */
    side?: RebookTradeResponseOriginalTradeSideOpen | undefined;
    /**
     * Side modifier for the trade.
     */
    sideModifier?: RebookTradeResponseOriginalTradeSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication?: string | undefined;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade (E.g. DISCRETION_EXERCISED, BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<RebookTradeResponseOriginalTradeSpecialInstructionsOpen> | undefined;
    /**
     * A ULID to uniquely identify the trade globally.
     */
    tradeId?: string | undefined;
    /**
     * Exchange venue
     */
    venue?: RebookTradeResponseOriginalTradeVenueOpen | undefined;
    /**
     * Denotes that this trade was either when_issued or when_distributed.
     */
    whenIssued?: RebookTradeResponseOriginalTradeWhenIssuedOpen | undefined;
};
/**
 * A response for the rebook trade method.
 */
export type RebookTradeResponse = {
    /**
     * The new trade that is booked.
     */
    newTrade?: NewTrade | null | undefined;
    /**
     * The original trade that was rebooked.
     */
    originalTrade?: OriginalTrade | null | undefined;
};
/** @internal */
export declare const RebookTradeResponseAssetType$inboundSchema: z.ZodType<RebookTradeResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseAssetType$outboundSchema: z.ZodType<RebookTradeResponseAssetTypeOpen, z.ZodTypeDef, RebookTradeResponseAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseAssetType$ {
    /** @deprecated use `RebookTradeResponseAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseAssetTypeOpen, z.ZodTypeDef, RebookTradeResponseAssetTypeOpen>;
}
/** @internal */
export declare const RebookTradeResponseBrokerCapacity$inboundSchema: z.ZodType<RebookTradeResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseBrokerCapacity$outboundSchema: z.ZodType<RebookTradeResponseBrokerCapacityOpen, z.ZodTypeDef, RebookTradeResponseBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseBrokerCapacity$ {
    /** @deprecated use `RebookTradeResponseBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseBrokerCapacityOpen, z.ZodTypeDef, RebookTradeResponseBrokerCapacityOpen>;
}
/** @internal */
export declare const RebookTradeResponseIdentifierType$inboundSchema: z.ZodType<RebookTradeResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseIdentifierType$outboundSchema: z.ZodType<RebookTradeResponseIdentifierTypeOpen, z.ZodTypeDef, RebookTradeResponseIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseIdentifierType$ {
    /** @deprecated use `RebookTradeResponseIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseIdentifierTypeOpen, z.ZodTypeDef, RebookTradeResponseIdentifierTypeOpen>;
}
/** @internal */
export declare const RebookTradeResponseLocalMarketTradeDate$inboundSchema: z.ZodType<RebookTradeResponseLocalMarketTradeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeResponseLocalMarketTradeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const RebookTradeResponseLocalMarketTradeDate$outboundSchema: z.ZodType<RebookTradeResponseLocalMarketTradeDate$Outbound, z.ZodTypeDef, RebookTradeResponseLocalMarketTradeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseLocalMarketTradeDate$ {
    /** @deprecated use `RebookTradeResponseLocalMarketTradeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseLocalMarketTradeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseLocalMarketTradeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseLocalMarketTradeDate$Outbound, z.ZodTypeDef, RebookTradeResponseLocalMarketTradeDate>;
    /** @deprecated use `RebookTradeResponseLocalMarketTradeDate$Outbound` instead. */
    type Outbound = RebookTradeResponseLocalMarketTradeDate$Outbound;
}
export declare function rebookTradeResponseLocalMarketTradeDateToJSON(rebookTradeResponseLocalMarketTradeDate: RebookTradeResponseLocalMarketTradeDate): string;
export declare function rebookTradeResponseLocalMarketTradeDateFromJSON(jsonString: string): SafeParseResult<RebookTradeResponseLocalMarketTradeDate, SDKValidationError>;
/** @internal */
export declare const RebookTradeResponseRouteType$inboundSchema: z.ZodType<RebookTradeResponseRouteTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseRouteType$outboundSchema: z.ZodType<RebookTradeResponseRouteTypeOpen, z.ZodTypeDef, RebookTradeResponseRouteTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseRouteType$ {
    /** @deprecated use `RebookTradeResponseRouteType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseRouteTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseRouteType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseRouteTypeOpen, z.ZodTypeDef, RebookTradeResponseRouteTypeOpen>;
}
/** @internal */
export declare const RebookTradeResponseSettlementDate$inboundSchema: z.ZodType<RebookTradeResponseSettlementDate, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeResponseSettlementDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const RebookTradeResponseSettlementDate$outboundSchema: z.ZodType<RebookTradeResponseSettlementDate$Outbound, z.ZodTypeDef, RebookTradeResponseSettlementDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseSettlementDate$ {
    /** @deprecated use `RebookTradeResponseSettlementDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseSettlementDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseSettlementDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseSettlementDate$Outbound, z.ZodTypeDef, RebookTradeResponseSettlementDate>;
    /** @deprecated use `RebookTradeResponseSettlementDate$Outbound` instead. */
    type Outbound = RebookTradeResponseSettlementDate$Outbound;
}
export declare function rebookTradeResponseSettlementDateToJSON(rebookTradeResponseSettlementDate: RebookTradeResponseSettlementDate): string;
export declare function rebookTradeResponseSettlementDateFromJSON(jsonString: string): SafeParseResult<RebookTradeResponseSettlementDate, SDKValidationError>;
/** @internal */
export declare const RebookTradeResponseSide$inboundSchema: z.ZodType<RebookTradeResponseSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseSide$outboundSchema: z.ZodType<RebookTradeResponseSideOpen, z.ZodTypeDef, RebookTradeResponseSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseSide$ {
    /** @deprecated use `RebookTradeResponseSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseSideOpen, z.ZodTypeDef, RebookTradeResponseSideOpen>;
}
/** @internal */
export declare const RebookTradeResponseSideModifier$inboundSchema: z.ZodType<RebookTradeResponseSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseSideModifier$outboundSchema: z.ZodType<RebookTradeResponseSideModifierOpen, z.ZodTypeDef, RebookTradeResponseSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseSideModifier$ {
    /** @deprecated use `RebookTradeResponseSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseSideModifierOpen, z.ZodTypeDef, RebookTradeResponseSideModifierOpen>;
}
/** @internal */
export declare const RebookTradeResponseSpecialInstructions$inboundSchema: z.ZodType<RebookTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseSpecialInstructions$outboundSchema: z.ZodType<RebookTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, RebookTradeResponseSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseSpecialInstructions$ {
    /** @deprecated use `RebookTradeResponseSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseSpecialInstructionsOpen, z.ZodTypeDef, RebookTradeResponseSpecialInstructionsOpen>;
}
/** @internal */
export declare const RebookTradeResponseVenue$inboundSchema: z.ZodType<RebookTradeResponseVenueOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseVenue$outboundSchema: z.ZodType<RebookTradeResponseVenueOpen, z.ZodTypeDef, RebookTradeResponseVenueOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseVenue$ {
    /** @deprecated use `RebookTradeResponseVenue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseVenueOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseVenue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseVenueOpen, z.ZodTypeDef, RebookTradeResponseVenueOpen>;
}
/** @internal */
export declare const RebookTradeResponseWhenIssued$inboundSchema: z.ZodType<RebookTradeResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseWhenIssued$outboundSchema: z.ZodType<RebookTradeResponseWhenIssuedOpen, z.ZodTypeDef, RebookTradeResponseWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseWhenIssued$ {
    /** @deprecated use `RebookTradeResponseWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseWhenIssuedOpen, z.ZodTypeDef, RebookTradeResponseWhenIssuedOpen>;
}
/** @internal */
export declare const NewTrade$inboundSchema: z.ZodType<NewTrade, z.ZodTypeDef, unknown>;
/** @internal */
export type NewTrade$Outbound = {
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
    local_market_trade_date?: RebookTradeResponseLocalMarketTradeDate$Outbound | null | undefined;
    lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
    mic_code?: string | undefined;
    name?: string | undefined;
    open?: boolean | undefined;
    order_id?: string | undefined;
    route_type?: string | undefined;
    settlement_date?: RebookTradeResponseSettlementDate$Outbound | null | undefined;
    side?: string | undefined;
    side_modifier?: string | undefined;
    source_application?: string | undefined;
    special_instructions?: Array<string> | undefined;
    trade_id?: string | undefined;
    venue?: string | undefined;
    when_issued?: string | undefined;
};
/** @internal */
export declare const NewTrade$outboundSchema: z.ZodType<NewTrade$Outbound, z.ZodTypeDef, NewTrade>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NewTrade$ {
    /** @deprecated use `NewTrade$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NewTrade, z.ZodTypeDef, unknown>;
    /** @deprecated use `NewTrade$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NewTrade$Outbound, z.ZodTypeDef, NewTrade>;
    /** @deprecated use `NewTrade$Outbound` instead. */
    type Outbound = NewTrade$Outbound;
}
export declare function newTradeToJSON(newTrade: NewTrade): string;
export declare function newTradeFromJSON(jsonString: string): SafeParseResult<NewTrade, SDKValidationError>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeAssetType$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeAssetType$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeAssetTypeOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeAssetType$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeAssetTypeOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeAssetTypeOpen>;
}
/** @internal */
export declare const RebookTradeResponseOriginalTradeBrokerCapacity$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeBrokerCapacity$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeBrokerCapacityOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeBrokerCapacity$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeBrokerCapacityOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeBrokerCapacityOpen>;
}
/** @internal */
export declare const RebookTradeResponseOriginalTradeIdentifierType$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeIdentifierType$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeIdentifierTypeOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeIdentifierType$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeIdentifierTypeOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeIdentifierTypeOpen>;
}
/** @internal */
export declare const RebookTradeResponseOriginalTradeLocalMarketTradeDate$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeLocalMarketTradeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeResponseOriginalTradeLocalMarketTradeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const RebookTradeResponseOriginalTradeLocalMarketTradeDate$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeLocalMarketTradeDate$Outbound, z.ZodTypeDef, RebookTradeResponseOriginalTradeLocalMarketTradeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeLocalMarketTradeDate$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeLocalMarketTradeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeLocalMarketTradeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeLocalMarketTradeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeLocalMarketTradeDate$Outbound, z.ZodTypeDef, RebookTradeResponseOriginalTradeLocalMarketTradeDate>;
    /** @deprecated use `RebookTradeResponseOriginalTradeLocalMarketTradeDate$Outbound` instead. */
    type Outbound = RebookTradeResponseOriginalTradeLocalMarketTradeDate$Outbound;
}
export declare function rebookTradeResponseOriginalTradeLocalMarketTradeDateToJSON(rebookTradeResponseOriginalTradeLocalMarketTradeDate: RebookTradeResponseOriginalTradeLocalMarketTradeDate): string;
export declare function rebookTradeResponseOriginalTradeLocalMarketTradeDateFromJSON(jsonString: string): SafeParseResult<RebookTradeResponseOriginalTradeLocalMarketTradeDate, SDKValidationError>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeRouteType$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeRouteTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeRouteType$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeRouteTypeOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeRouteTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeRouteType$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeRouteType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeRouteTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeRouteType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeRouteTypeOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeRouteTypeOpen>;
}
/** @internal */
export declare const RebookTradeResponseOriginalTradeSettlementDate$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSettlementDate, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeResponseOriginalTradeSettlementDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const RebookTradeResponseOriginalTradeSettlementDate$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSettlementDate$Outbound, z.ZodTypeDef, RebookTradeResponseOriginalTradeSettlementDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeSettlementDate$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeSettlementDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSettlementDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeSettlementDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSettlementDate$Outbound, z.ZodTypeDef, RebookTradeResponseOriginalTradeSettlementDate>;
    /** @deprecated use `RebookTradeResponseOriginalTradeSettlementDate$Outbound` instead. */
    type Outbound = RebookTradeResponseOriginalTradeSettlementDate$Outbound;
}
export declare function rebookTradeResponseOriginalTradeSettlementDateToJSON(rebookTradeResponseOriginalTradeSettlementDate: RebookTradeResponseOriginalTradeSettlementDate): string;
export declare function rebookTradeResponseOriginalTradeSettlementDateFromJSON(jsonString: string): SafeParseResult<RebookTradeResponseOriginalTradeSettlementDate, SDKValidationError>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeSide$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeSide$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSideOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeSide$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSideOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeSideOpen>;
}
/** @internal */
export declare const RebookTradeResponseOriginalTradeSideModifier$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeSideModifier$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSideModifierOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeSideModifier$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSideModifierOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeSideModifierOpen>;
}
/** @internal */
export declare const RebookTradeResponseOriginalTradeSpecialInstructions$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeSpecialInstructions$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSpecialInstructionsOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeSpecialInstructions$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeSpecialInstructionsOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeSpecialInstructionsOpen>;
}
/** @internal */
export declare const RebookTradeResponseOriginalTradeVenue$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeVenueOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeVenue$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeVenueOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeVenueOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeVenue$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeVenue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeVenueOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeVenue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeVenueOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeVenueOpen>;
}
/** @internal */
export declare const RebookTradeResponseOriginalTradeWhenIssued$inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookTradeResponseOriginalTradeWhenIssued$outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeWhenIssuedOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponseOriginalTradeWhenIssued$ {
    /** @deprecated use `RebookTradeResponseOriginalTradeWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponseOriginalTradeWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponseOriginalTradeWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponseOriginalTradeWhenIssuedOpen, z.ZodTypeDef, RebookTradeResponseOriginalTradeWhenIssuedOpen>;
}
/** @internal */
export declare const OriginalTrade$inboundSchema: z.ZodType<OriginalTrade, z.ZodTypeDef, unknown>;
/** @internal */
export type OriginalTrade$Outbound = {
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
    local_market_trade_date?: RebookTradeResponseOriginalTradeLocalMarketTradeDate$Outbound | null | undefined;
    lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
    mic_code?: string | undefined;
    name?: string | undefined;
    open?: boolean | undefined;
    order_id?: string | undefined;
    route_type?: string | undefined;
    settlement_date?: RebookTradeResponseOriginalTradeSettlementDate$Outbound | null | undefined;
    side?: string | undefined;
    side_modifier?: string | undefined;
    source_application?: string | undefined;
    special_instructions?: Array<string> | undefined;
    trade_id?: string | undefined;
    venue?: string | undefined;
    when_issued?: string | undefined;
};
/** @internal */
export declare const OriginalTrade$outboundSchema: z.ZodType<OriginalTrade$Outbound, z.ZodTypeDef, OriginalTrade>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OriginalTrade$ {
    /** @deprecated use `OriginalTrade$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OriginalTrade, z.ZodTypeDef, unknown>;
    /** @deprecated use `OriginalTrade$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OriginalTrade$Outbound, z.ZodTypeDef, OriginalTrade>;
    /** @deprecated use `OriginalTrade$Outbound` instead. */
    type Outbound = OriginalTrade$Outbound;
}
export declare function originalTradeToJSON(originalTrade: OriginalTrade): string;
export declare function originalTradeFromJSON(jsonString: string): SafeParseResult<OriginalTrade, SDKValidationError>;
/** @internal */
export declare const RebookTradeResponse$inboundSchema: z.ZodType<RebookTradeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeResponse$Outbound = {
    new_trade?: NewTrade$Outbound | null | undefined;
    original_trade?: OriginalTrade$Outbound | null | undefined;
};
/** @internal */
export declare const RebookTradeResponse$outboundSchema: z.ZodType<RebookTradeResponse$Outbound, z.ZodTypeDef, RebookTradeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeResponse$ {
    /** @deprecated use `RebookTradeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeResponse$Outbound, z.ZodTypeDef, RebookTradeResponse>;
    /** @deprecated use `RebookTradeResponse$Outbound` instead. */
    type Outbound = RebookTradeResponse$Outbound;
}
export declare function rebookTradeResponseToJSON(rebookTradeResponse: RebookTradeResponse): string;
export declare function rebookTradeResponseFromJSON(jsonString: string): SafeParseResult<RebookTradeResponse, SDKValidationError>;
//# sourceMappingURL=rebooktraderesponse.d.ts.map