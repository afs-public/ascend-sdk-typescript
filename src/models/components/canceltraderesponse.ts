/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import {
  BookingFee,
  BookingFee$inboundSchema,
  BookingFee$Outbound,
  BookingFee$outboundSchema,
} from "./bookingfee.js";
import {
  BookingLot,
  BookingLot$inboundSchema,
  BookingLot$Outbound,
  BookingLot$outboundSchema,
} from "./bookinglot.js";
import {
  Execution,
  Execution$inboundSchema,
  Execution$Outbound,
  Execution$outboundSchema,
} from "./execution.js";

/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
export enum CancelTradeResponseAssetType {
  AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
  Equity = "EQUITY",
  FixedIncome = "FIXED_INCOME",
}
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
export type CancelTradeResponseAssetTypeOpen = OpenEnum<
  typeof CancelTradeResponseAssetType
>;

/**
 * Broker capacity for the trade.
 */
export enum CancelTradeResponseBrokerCapacity {
  CapacityUnspecified = "CAPACITY_UNSPECIFIED",
  Agency = "AGENCY",
  Principal = "PRINCIPAL",
  Mixed = "MIXED",
}
/**
 * Broker capacity for the trade.
 */
export type CancelTradeResponseBrokerCapacityOpen = OpenEnum<
  typeof CancelTradeResponseBrokerCapacity
>;

/**
 * Identifier type for the asset being traded.
 */
export enum CancelTradeResponseIdentifierType {
  IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
  AssetId = "ASSET_ID",
  Symbol = "SYMBOL",
  Cusip = "CUSIP",
  Isin = "ISIN",
}
/**
 * Identifier type for the asset being traded.
 */
export type CancelTradeResponseIdentifierTypeOpen = OpenEnum<
  typeof CancelTradeResponseIdentifierType
>;

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
export enum CancelTradeResponseRouteType {
  RouteTypeUnspecified = "ROUTE_TYPE_UNSPECIFIED",
  Dma = "DMA",
  Mngd = "MNGD",
  Quik = "QUIK",
  Algo = "ALGO",
  Away = "AWAY",
  Corr = "CORR",
  Boats = "BOATS",
}
/**
 * Route type for the trade.
 */
export type CancelTradeResponseRouteTypeOpen = OpenEnum<
  typeof CancelTradeResponseRouteType
>;

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
export enum CancelTradeResponseSide {
  SideUnspecified = "SIDE_UNSPECIFIED",
  Buy = "BUY",
  Sell = "SELL",
}
/**
 * Denotes if the trade is a SELL or a BUY.
 */
export type CancelTradeResponseSideOpen = OpenEnum<
  typeof CancelTradeResponseSide
>;

/**
 * Side modifier for the trade.
 */
export enum CancelTradeResponseSideModifier {
  SideModifierUnspecified = "SIDE_MODIFIER_UNSPECIFIED",
  Short = "SHORT",
  ShortExempt = "SHORT_EXEMPT",
  ShortCover = "SHORT_COVER",
  Open = "OPEN",
  Close = "CLOSE",
}
/**
 * Side modifier for the trade.
 */
export type CancelTradeResponseSideModifierOpen = OpenEnum<
  typeof CancelTradeResponseSideModifier
>;

export enum CancelTradeResponseSpecialInstructions {
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
  DividendReinvestment = "DIVIDEND_REINVESTMENT",
}
export type CancelTradeResponseSpecialInstructionsOpen = OpenEnum<
  typeof CancelTradeResponseSpecialInstructions
>;

/**
 * Exchange venue
 */
export enum CancelTradeResponseVenue {
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
  Qsr = "QSR",
}
/**
 * Exchange venue
 */
export type CancelTradeResponseVenueOpen = OpenEnum<
  typeof CancelTradeResponseVenue
>;

/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export enum CancelTradeResponseWhenIssued {
  WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
  WhenIssued = "WHEN_ISSUED",
  WhenDistributed = "WHEN_DISTRIBUTED",
}
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
export type CancelTradeResponseWhenIssuedOpen = OpenEnum<
  typeof CancelTradeResponseWhenIssued
>;

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
  localMarketTradeDate?:
    | CancelTradeResponseLocalMarketTradeDate
    | null
    | undefined;
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
  specialInstructions?:
    | Array<CancelTradeResponseSpecialInstructionsOpen>
    | undefined;
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
export const CancelTradeResponseAssetType$inboundSchema: z.ZodType<
  CancelTradeResponseAssetTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CancelTradeResponseAssetType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CancelTradeResponseAssetType$outboundSchema: z.ZodType<
  CancelTradeResponseAssetTypeOpen,
  z.ZodTypeDef,
  CancelTradeResponseAssetTypeOpen
> = z.union([
  z.nativeEnum(CancelTradeResponseAssetType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseAssetType$ {
  /** @deprecated use `CancelTradeResponseAssetType$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseAssetType$inboundSchema;
  /** @deprecated use `CancelTradeResponseAssetType$outboundSchema` instead. */
  export const outboundSchema = CancelTradeResponseAssetType$outboundSchema;
}

/** @internal */
export const CancelTradeResponseBrokerCapacity$inboundSchema: z.ZodType<
  CancelTradeResponseBrokerCapacityOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CancelTradeResponseBrokerCapacity),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CancelTradeResponseBrokerCapacity$outboundSchema: z.ZodType<
  CancelTradeResponseBrokerCapacityOpen,
  z.ZodTypeDef,
  CancelTradeResponseBrokerCapacityOpen
> = z.union([
  z.nativeEnum(CancelTradeResponseBrokerCapacity),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseBrokerCapacity$ {
  /** @deprecated use `CancelTradeResponseBrokerCapacity$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseBrokerCapacity$inboundSchema;
  /** @deprecated use `CancelTradeResponseBrokerCapacity$outboundSchema` instead. */
  export const outboundSchema =
    CancelTradeResponseBrokerCapacity$outboundSchema;
}

/** @internal */
export const CancelTradeResponseIdentifierType$inboundSchema: z.ZodType<
  CancelTradeResponseIdentifierTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CancelTradeResponseIdentifierType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CancelTradeResponseIdentifierType$outboundSchema: z.ZodType<
  CancelTradeResponseIdentifierTypeOpen,
  z.ZodTypeDef,
  CancelTradeResponseIdentifierTypeOpen
> = z.union([
  z.nativeEnum(CancelTradeResponseIdentifierType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseIdentifierType$ {
  /** @deprecated use `CancelTradeResponseIdentifierType$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseIdentifierType$inboundSchema;
  /** @deprecated use `CancelTradeResponseIdentifierType$outboundSchema` instead. */
  export const outboundSchema =
    CancelTradeResponseIdentifierType$outboundSchema;
}

/** @internal */
export const CancelTradeResponseLocalMarketTradeDate$inboundSchema: z.ZodType<
  CancelTradeResponseLocalMarketTradeDate,
  z.ZodTypeDef,
  unknown
> = z.object({
  day: z.number().int().optional(),
  month: z.number().int().optional(),
  year: z.number().int().optional(),
});

/** @internal */
export type CancelTradeResponseLocalMarketTradeDate$Outbound = {
  day?: number | undefined;
  month?: number | undefined;
  year?: number | undefined;
};

/** @internal */
export const CancelTradeResponseLocalMarketTradeDate$outboundSchema: z.ZodType<
  CancelTradeResponseLocalMarketTradeDate$Outbound,
  z.ZodTypeDef,
  CancelTradeResponseLocalMarketTradeDate
> = z.object({
  day: z.number().int().optional(),
  month: z.number().int().optional(),
  year: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseLocalMarketTradeDate$ {
  /** @deprecated use `CancelTradeResponseLocalMarketTradeDate$inboundSchema` instead. */
  export const inboundSchema =
    CancelTradeResponseLocalMarketTradeDate$inboundSchema;
  /** @deprecated use `CancelTradeResponseLocalMarketTradeDate$outboundSchema` instead. */
  export const outboundSchema =
    CancelTradeResponseLocalMarketTradeDate$outboundSchema;
  /** @deprecated use `CancelTradeResponseLocalMarketTradeDate$Outbound` instead. */
  export type Outbound = CancelTradeResponseLocalMarketTradeDate$Outbound;
}

/** @internal */
export const CancelTradeResponseRouteType$inboundSchema: z.ZodType<
  CancelTradeResponseRouteTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CancelTradeResponseRouteType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CancelTradeResponseRouteType$outboundSchema: z.ZodType<
  CancelTradeResponseRouteTypeOpen,
  z.ZodTypeDef,
  CancelTradeResponseRouteTypeOpen
> = z.union([
  z.nativeEnum(CancelTradeResponseRouteType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseRouteType$ {
  /** @deprecated use `CancelTradeResponseRouteType$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseRouteType$inboundSchema;
  /** @deprecated use `CancelTradeResponseRouteType$outboundSchema` instead. */
  export const outboundSchema = CancelTradeResponseRouteType$outboundSchema;
}

/** @internal */
export const CancelTradeResponseSettlementDate$inboundSchema: z.ZodType<
  CancelTradeResponseSettlementDate,
  z.ZodTypeDef,
  unknown
> = z.object({
  day: z.number().int().optional(),
  month: z.number().int().optional(),
  year: z.number().int().optional(),
});

/** @internal */
export type CancelTradeResponseSettlementDate$Outbound = {
  day?: number | undefined;
  month?: number | undefined;
  year?: number | undefined;
};

/** @internal */
export const CancelTradeResponseSettlementDate$outboundSchema: z.ZodType<
  CancelTradeResponseSettlementDate$Outbound,
  z.ZodTypeDef,
  CancelTradeResponseSettlementDate
> = z.object({
  day: z.number().int().optional(),
  month: z.number().int().optional(),
  year: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseSettlementDate$ {
  /** @deprecated use `CancelTradeResponseSettlementDate$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseSettlementDate$inboundSchema;
  /** @deprecated use `CancelTradeResponseSettlementDate$outboundSchema` instead. */
  export const outboundSchema =
    CancelTradeResponseSettlementDate$outboundSchema;
  /** @deprecated use `CancelTradeResponseSettlementDate$Outbound` instead. */
  export type Outbound = CancelTradeResponseSettlementDate$Outbound;
}

/** @internal */
export const CancelTradeResponseSide$inboundSchema: z.ZodType<
  CancelTradeResponseSideOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CancelTradeResponseSide),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CancelTradeResponseSide$outboundSchema: z.ZodType<
  CancelTradeResponseSideOpen,
  z.ZodTypeDef,
  CancelTradeResponseSideOpen
> = z.union([
  z.nativeEnum(CancelTradeResponseSide),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseSide$ {
  /** @deprecated use `CancelTradeResponseSide$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseSide$inboundSchema;
  /** @deprecated use `CancelTradeResponseSide$outboundSchema` instead. */
  export const outboundSchema = CancelTradeResponseSide$outboundSchema;
}

/** @internal */
export const CancelTradeResponseSideModifier$inboundSchema: z.ZodType<
  CancelTradeResponseSideModifierOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CancelTradeResponseSideModifier),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CancelTradeResponseSideModifier$outboundSchema: z.ZodType<
  CancelTradeResponseSideModifierOpen,
  z.ZodTypeDef,
  CancelTradeResponseSideModifierOpen
> = z.union([
  z.nativeEnum(CancelTradeResponseSideModifier),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseSideModifier$ {
  /** @deprecated use `CancelTradeResponseSideModifier$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseSideModifier$inboundSchema;
  /** @deprecated use `CancelTradeResponseSideModifier$outboundSchema` instead. */
  export const outboundSchema = CancelTradeResponseSideModifier$outboundSchema;
}

/** @internal */
export const CancelTradeResponseSpecialInstructions$inboundSchema: z.ZodType<
  CancelTradeResponseSpecialInstructionsOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CancelTradeResponseSpecialInstructions),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CancelTradeResponseSpecialInstructions$outboundSchema: z.ZodType<
  CancelTradeResponseSpecialInstructionsOpen,
  z.ZodTypeDef,
  CancelTradeResponseSpecialInstructionsOpen
> = z.union([
  z.nativeEnum(CancelTradeResponseSpecialInstructions),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseSpecialInstructions$ {
  /** @deprecated use `CancelTradeResponseSpecialInstructions$inboundSchema` instead. */
  export const inboundSchema =
    CancelTradeResponseSpecialInstructions$inboundSchema;
  /** @deprecated use `CancelTradeResponseSpecialInstructions$outboundSchema` instead. */
  export const outboundSchema =
    CancelTradeResponseSpecialInstructions$outboundSchema;
}

/** @internal */
export const CancelTradeResponseVenue$inboundSchema: z.ZodType<
  CancelTradeResponseVenueOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CancelTradeResponseVenue),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CancelTradeResponseVenue$outboundSchema: z.ZodType<
  CancelTradeResponseVenueOpen,
  z.ZodTypeDef,
  CancelTradeResponseVenueOpen
> = z.union([
  z.nativeEnum(CancelTradeResponseVenue),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseVenue$ {
  /** @deprecated use `CancelTradeResponseVenue$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseVenue$inboundSchema;
  /** @deprecated use `CancelTradeResponseVenue$outboundSchema` instead. */
  export const outboundSchema = CancelTradeResponseVenue$outboundSchema;
}

/** @internal */
export const CancelTradeResponseWhenIssued$inboundSchema: z.ZodType<
  CancelTradeResponseWhenIssuedOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CancelTradeResponseWhenIssued),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CancelTradeResponseWhenIssued$outboundSchema: z.ZodType<
  CancelTradeResponseWhenIssuedOpen,
  z.ZodTypeDef,
  CancelTradeResponseWhenIssuedOpen
> = z.union([
  z.nativeEnum(CancelTradeResponseWhenIssued),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseWhenIssued$ {
  /** @deprecated use `CancelTradeResponseWhenIssued$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseWhenIssued$inboundSchema;
  /** @deprecated use `CancelTradeResponseWhenIssued$outboundSchema` instead. */
  export const outboundSchema = CancelTradeResponseWhenIssued$outboundSchema;
}

/** @internal */
export const CancelTradeResponseTrade$inboundSchema: z.ZodType<
  CancelTradeResponseTrade,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string().optional(),
  activity_id: z.string().optional(),
  additional_instructions: z.string().optional(),
  alternate_order_id: z.string().optional(),
  asset_type: CancelTradeResponseAssetType$inboundSchema.optional(),
  broker_capacity: CancelTradeResponseBrokerCapacity$inboundSchema.optional(),
  client_order_id: z.string().optional(),
  executing_broker: z.string().optional(),
  executions: z.array(Execution$inboundSchema).optional(),
  fees: z.array(BookingFee$inboundSchema).optional(),
  identifier: z.string().optional(),
  identifier_type: CancelTradeResponseIdentifierType$inboundSchema.optional(),
  issuing_region_code: z.string().optional(),
  local_market_trade_date: z.nullable(
    z.lazy(() => CancelTradeResponseLocalMarketTradeDate$inboundSchema),
  ).optional(),
  lot_matching_instructions: z.array(BookingLot$inboundSchema).optional(),
  mic_code: z.string().optional(),
  name: z.string().optional(),
  open: z.boolean().optional(),
  order_id: z.string().optional(),
  route_type: CancelTradeResponseRouteType$inboundSchema.optional(),
  settlement_date: z.nullable(
    z.lazy(() => CancelTradeResponseSettlementDate$inboundSchema),
  ).optional(),
  side: CancelTradeResponseSide$inboundSchema.optional(),
  side_modifier: CancelTradeResponseSideModifier$inboundSchema.optional(),
  source_application: z.string().optional(),
  special_instructions: z.array(
    CancelTradeResponseSpecialInstructions$inboundSchema,
  ).optional(),
  trade_id: z.string().optional(),
  venue: CancelTradeResponseVenue$inboundSchema.optional(),
  when_issued: CancelTradeResponseWhenIssued$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "activity_id": "activityId",
    "additional_instructions": "additionalInstructions",
    "alternate_order_id": "alternateOrderId",
    "asset_type": "assetType",
    "broker_capacity": "brokerCapacity",
    "client_order_id": "clientOrderId",
    "executing_broker": "executingBroker",
    "identifier_type": "identifierType",
    "issuing_region_code": "issuingRegionCode",
    "local_market_trade_date": "localMarketTradeDate",
    "lot_matching_instructions": "lotMatchingInstructions",
    "mic_code": "micCode",
    "order_id": "orderId",
    "route_type": "routeType",
    "settlement_date": "settlementDate",
    "side_modifier": "sideModifier",
    "source_application": "sourceApplication",
    "special_instructions": "specialInstructions",
    "trade_id": "tradeId",
    "when_issued": "whenIssued",
  });
});

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
  local_market_trade_date?:
    | CancelTradeResponseLocalMarketTradeDate$Outbound
    | null
    | undefined;
  lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
  mic_code?: string | undefined;
  name?: string | undefined;
  open?: boolean | undefined;
  order_id?: string | undefined;
  route_type?: string | undefined;
  settlement_date?:
    | CancelTradeResponseSettlementDate$Outbound
    | null
    | undefined;
  side?: string | undefined;
  side_modifier?: string | undefined;
  source_application?: string | undefined;
  special_instructions?: Array<string> | undefined;
  trade_id?: string | undefined;
  venue?: string | undefined;
  when_issued?: string | undefined;
};

/** @internal */
export const CancelTradeResponseTrade$outboundSchema: z.ZodType<
  CancelTradeResponseTrade$Outbound,
  z.ZodTypeDef,
  CancelTradeResponseTrade
> = z.object({
  accountId: z.string().optional(),
  activityId: z.string().optional(),
  additionalInstructions: z.string().optional(),
  alternateOrderId: z.string().optional(),
  assetType: CancelTradeResponseAssetType$outboundSchema.optional(),
  brokerCapacity: CancelTradeResponseBrokerCapacity$outboundSchema.optional(),
  clientOrderId: z.string().optional(),
  executingBroker: z.string().optional(),
  executions: z.array(Execution$outboundSchema).optional(),
  fees: z.array(BookingFee$outboundSchema).optional(),
  identifier: z.string().optional(),
  identifierType: CancelTradeResponseIdentifierType$outboundSchema.optional(),
  issuingRegionCode: z.string().optional(),
  localMarketTradeDate: z.nullable(
    z.lazy(() => CancelTradeResponseLocalMarketTradeDate$outboundSchema),
  ).optional(),
  lotMatchingInstructions: z.array(BookingLot$outboundSchema).optional(),
  micCode: z.string().optional(),
  name: z.string().optional(),
  open: z.boolean().optional(),
  orderId: z.string().optional(),
  routeType: CancelTradeResponseRouteType$outboundSchema.optional(),
  settlementDate: z.nullable(
    z.lazy(() => CancelTradeResponseSettlementDate$outboundSchema),
  ).optional(),
  side: CancelTradeResponseSide$outboundSchema.optional(),
  sideModifier: CancelTradeResponseSideModifier$outboundSchema.optional(),
  sourceApplication: z.string().optional(),
  specialInstructions: z.array(
    CancelTradeResponseSpecialInstructions$outboundSchema,
  ).optional(),
  tradeId: z.string().optional(),
  venue: CancelTradeResponseVenue$outboundSchema.optional(),
  whenIssued: CancelTradeResponseWhenIssued$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    activityId: "activity_id",
    additionalInstructions: "additional_instructions",
    alternateOrderId: "alternate_order_id",
    assetType: "asset_type",
    brokerCapacity: "broker_capacity",
    clientOrderId: "client_order_id",
    executingBroker: "executing_broker",
    identifierType: "identifier_type",
    issuingRegionCode: "issuing_region_code",
    localMarketTradeDate: "local_market_trade_date",
    lotMatchingInstructions: "lot_matching_instructions",
    micCode: "mic_code",
    orderId: "order_id",
    routeType: "route_type",
    settlementDate: "settlement_date",
    sideModifier: "side_modifier",
    sourceApplication: "source_application",
    specialInstructions: "special_instructions",
    tradeId: "trade_id",
    whenIssued: "when_issued",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponseTrade$ {
  /** @deprecated use `CancelTradeResponseTrade$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponseTrade$inboundSchema;
  /** @deprecated use `CancelTradeResponseTrade$outboundSchema` instead. */
  export const outboundSchema = CancelTradeResponseTrade$outboundSchema;
  /** @deprecated use `CancelTradeResponseTrade$Outbound` instead. */
  export type Outbound = CancelTradeResponseTrade$Outbound;
}

/** @internal */
export const CancelTradeResponse$inboundSchema: z.ZodType<
  CancelTradeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  trade: z.nullable(z.lazy(() => CancelTradeResponseTrade$inboundSchema))
    .optional(),
});

/** @internal */
export type CancelTradeResponse$Outbound = {
  trade?: CancelTradeResponseTrade$Outbound | null | undefined;
};

/** @internal */
export const CancelTradeResponse$outboundSchema: z.ZodType<
  CancelTradeResponse$Outbound,
  z.ZodTypeDef,
  CancelTradeResponse
> = z.object({
  trade: z.nullable(z.lazy(() => CancelTradeResponseTrade$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelTradeResponse$ {
  /** @deprecated use `CancelTradeResponse$inboundSchema` instead. */
  export const inboundSchema = CancelTradeResponse$inboundSchema;
  /** @deprecated use `CancelTradeResponse$outboundSchema` instead. */
  export const outboundSchema = CancelTradeResponse$outboundSchema;
  /** @deprecated use `CancelTradeResponse$Outbound` instead. */
  export type Outbound = CancelTradeResponse$Outbound;
}
