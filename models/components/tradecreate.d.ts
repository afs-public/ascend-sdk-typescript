import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BookingFeeCreate, BookingFeeCreate$Outbound } from "./bookingfeecreate.js";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
import { ExecutionCreate, ExecutionCreate$Outbound } from "./executioncreate.js";
import { LotCreate, LotCreate$Outbound } from "./lotcreate.js";
/**
 * Type of the asset being traded.
 */
export declare enum TradeCreateAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded.
 */
export type TradeCreateAssetTypeOpen = OpenEnum<typeof TradeCreateAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum TradeCreateBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type TradeCreateBrokerCapacityOpen = OpenEnum<typeof TradeCreateBrokerCapacity>;
/**
 * Identifier type for the asset being traded.
 */
export declare enum TradeCreateIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type TradeCreateIdentifierTypeOpen = OpenEnum<typeof TradeCreateIdentifierType>;
/**
 * Route type for the trade.
 */
export declare enum RouteType {
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
export type RouteTypeOpen = OpenEnum<typeof RouteType>;
/**
 * Denotes if the trade is a SELL or a BUY.
 */
export declare enum TradeCreateSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes if the trade is a SELL or a BUY.
 */
export type TradeCreateSideOpen = OpenEnum<typeof TradeCreateSide>;
/**
 * Side modifier for the trade.
 */
export declare enum SideModifier {
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
export type SideModifierOpen = OpenEnum<typeof SideModifier>;
export declare enum SpecialInstructions {
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
export type SpecialInstructionsOpen = OpenEnum<typeof SpecialInstructions>;
/**
 * Exchange venue
 */
export declare enum Venue {
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
export type VenueOpen = OpenEnum<typeof Venue>;
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export declare enum WhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export type WhenIssuedOpen = OpenEnum<typeof WhenIssued>;
/**
 * A Trade represents an entire order made by a client. Trades can hold one or many executions representing partial fills that aggregate into a whole order.
 */
export type TradeCreate = {
    /**
     * A globally unique identifier referencing a single account.
     */
    accountId: string;
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
    assetType: TradeCreateAssetTypeOpen;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity: TradeCreateBrokerCapacityOpen;
    /**
     * The unique identifier that is associated with an order. Must be unique by date per trade per client.
     */
    clientOrderId: string;
    /**
     * Executing broker of the trade.
     */
    executingBroker?: string | undefined;
    /**
     * The executions (sometimes referred to as partial-fills) that comprise the trade.
     */
    executions: Array<ExecutionCreate>;
    /**
     * Any client calculated fees associated with the trade. Only allowed if trade.open = false. Regulatory fees will be calculated automatically if they are not explicitly overwritten or suppressed.
     */
    fees?: Array<BookingFeeCreate> | undefined;
    /**
     * Identifier (of the type specified in `identifier_type`). Responses will supply the originally requested identifier.
     */
    identifier: string;
    /**
     * Identifier type for the asset being traded.
     */
    identifierType: TradeCreateIdentifierTypeOpen;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    localMarketTradeDate?: DateCreate | undefined;
    /**
     * One or many lot matching instructions for the trade.
     */
    lotMatchingInstructions?: Array<LotCreate> | undefined;
    /**
     * Market Identifier Code
     */
    micCode?: string | undefined;
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
    routeType: RouteTypeOpen;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    settlementDate?: DateCreate | undefined;
    /**
     * Denotes if the trade is a SELL or a BUY.
     */
    side: TradeCreateSideOpen;
    /**
     * Side modifier for the trade.
     */
    sideModifier?: SideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication: string;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade (E.g. DISCRETION_EXERCISED, BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<SpecialInstructionsOpen> | undefined;
    /**
     * Exchange venue
     */
    venue?: VenueOpen | undefined;
    /**
     * Denotes that this trade was either when_issued or when_distributed.
     */
    whenIssued?: WhenIssuedOpen | undefined;
};
/** @internal */
export declare const TradeCreateAssetType$inboundSchema: z.ZodType<TradeCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeCreateAssetType$outboundSchema: z.ZodType<TradeCreateAssetTypeOpen, z.ZodTypeDef, TradeCreateAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeCreateAssetType$ {
    /** @deprecated use `TradeCreateAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeCreateAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeCreateAssetTypeOpen, z.ZodTypeDef, TradeCreateAssetTypeOpen>;
}
/** @internal */
export declare const TradeCreateBrokerCapacity$inboundSchema: z.ZodType<TradeCreateBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeCreateBrokerCapacity$outboundSchema: z.ZodType<TradeCreateBrokerCapacityOpen, z.ZodTypeDef, TradeCreateBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeCreateBrokerCapacity$ {
    /** @deprecated use `TradeCreateBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeCreateBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeCreateBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeCreateBrokerCapacityOpen, z.ZodTypeDef, TradeCreateBrokerCapacityOpen>;
}
/** @internal */
export declare const TradeCreateIdentifierType$inboundSchema: z.ZodType<TradeCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeCreateIdentifierType$outboundSchema: z.ZodType<TradeCreateIdentifierTypeOpen, z.ZodTypeDef, TradeCreateIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeCreateIdentifierType$ {
    /** @deprecated use `TradeCreateIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeCreateIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeCreateIdentifierTypeOpen, z.ZodTypeDef, TradeCreateIdentifierTypeOpen>;
}
/** @internal */
export declare const RouteType$inboundSchema: z.ZodType<RouteTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RouteType$outboundSchema: z.ZodType<RouteTypeOpen, z.ZodTypeDef, RouteTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RouteType$ {
    /** @deprecated use `RouteType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RouteTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RouteType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RouteTypeOpen, z.ZodTypeDef, RouteTypeOpen>;
}
/** @internal */
export declare const TradeCreateSide$inboundSchema: z.ZodType<TradeCreateSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeCreateSide$outboundSchema: z.ZodType<TradeCreateSideOpen, z.ZodTypeDef, TradeCreateSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeCreateSide$ {
    /** @deprecated use `TradeCreateSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeCreateSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeCreateSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeCreateSideOpen, z.ZodTypeDef, TradeCreateSideOpen>;
}
/** @internal */
export declare const SideModifier$inboundSchema: z.ZodType<SideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SideModifier$outboundSchema: z.ZodType<SideModifierOpen, z.ZodTypeDef, SideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SideModifier$ {
    /** @deprecated use `SideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SideModifierOpen, z.ZodTypeDef, SideModifierOpen>;
}
/** @internal */
export declare const SpecialInstructions$inboundSchema: z.ZodType<SpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SpecialInstructions$outboundSchema: z.ZodType<SpecialInstructionsOpen, z.ZodTypeDef, SpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SpecialInstructions$ {
    /** @deprecated use `SpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SpecialInstructionsOpen, z.ZodTypeDef, SpecialInstructionsOpen>;
}
/** @internal */
export declare const Venue$inboundSchema: z.ZodType<VenueOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Venue$outboundSchema: z.ZodType<VenueOpen, z.ZodTypeDef, VenueOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Venue$ {
    /** @deprecated use `Venue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VenueOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Venue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VenueOpen, z.ZodTypeDef, VenueOpen>;
}
/** @internal */
export declare const WhenIssued$inboundSchema: z.ZodType<WhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WhenIssued$outboundSchema: z.ZodType<WhenIssuedOpen, z.ZodTypeDef, WhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WhenIssued$ {
    /** @deprecated use `WhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WhenIssuedOpen, z.ZodTypeDef, WhenIssuedOpen>;
}
/** @internal */
export declare const TradeCreate$inboundSchema: z.ZodType<TradeCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeCreate$Outbound = {
    account_id: string;
    additional_instructions?: string | undefined;
    alternate_order_id?: string | undefined;
    asset_type: string;
    broker_capacity: string;
    client_order_id: string;
    executing_broker?: string | undefined;
    executions: Array<ExecutionCreate$Outbound>;
    fees?: Array<BookingFeeCreate$Outbound> | undefined;
    identifier: string;
    identifier_type: string;
    issuing_region_code?: string | undefined;
    local_market_trade_date?: DateCreate$Outbound | undefined;
    lot_matching_instructions?: Array<LotCreate$Outbound> | undefined;
    mic_code?: string | undefined;
    open?: boolean | undefined;
    order_id?: string | undefined;
    route_type: string;
    settlement_date?: DateCreate$Outbound | undefined;
    side: string;
    side_modifier?: string | undefined;
    source_application: string;
    special_instructions?: Array<string> | undefined;
    venue?: string | undefined;
    when_issued?: string | undefined;
};
/** @internal */
export declare const TradeCreate$outboundSchema: z.ZodType<TradeCreate$Outbound, z.ZodTypeDef, TradeCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeCreate$ {
    /** @deprecated use `TradeCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeCreate$Outbound, z.ZodTypeDef, TradeCreate>;
    /** @deprecated use `TradeCreate$Outbound` instead. */
    type Outbound = TradeCreate$Outbound;
}
export declare function tradeCreateToJSON(tradeCreate: TradeCreate): string;
export declare function tradeCreateFromJSON(jsonString: string): SafeParseResult<TradeCreate, SDKValidationError>;
//# sourceMappingURL=tradecreate.d.ts.map