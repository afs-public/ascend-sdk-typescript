"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingTrade$ = exports.BookingTrade$outboundSchema = exports.BookingTrade$inboundSchema = exports.BookingTradeWhenIssued$ = exports.BookingTradeWhenIssued$outboundSchema = exports.BookingTradeWhenIssued$inboundSchema = exports.BookingTradeVenue$ = exports.BookingTradeVenue$outboundSchema = exports.BookingTradeVenue$inboundSchema = exports.BookingTradeSpecialInstructions$ = exports.BookingTradeSpecialInstructions$outboundSchema = exports.BookingTradeSpecialInstructions$inboundSchema = exports.BookingTradeSideModifier$ = exports.BookingTradeSideModifier$outboundSchema = exports.BookingTradeSideModifier$inboundSchema = exports.BookingTradeSide$ = exports.BookingTradeSide$outboundSchema = exports.BookingTradeSide$inboundSchema = exports.SettlementDate$ = exports.SettlementDate$outboundSchema = exports.SettlementDate$inboundSchema = exports.BookingTradeRouteType$ = exports.BookingTradeRouteType$outboundSchema = exports.BookingTradeRouteType$inboundSchema = exports.LocalMarketTradeDate$ = exports.LocalMarketTradeDate$outboundSchema = exports.LocalMarketTradeDate$inboundSchema = exports.BookingTradeIdentifierType$ = exports.BookingTradeIdentifierType$outboundSchema = exports.BookingTradeIdentifierType$inboundSchema = exports.BookingTradeBrokerCapacity$ = exports.BookingTradeBrokerCapacity$outboundSchema = exports.BookingTradeBrokerCapacity$inboundSchema = exports.BookingTradeAssetType$ = exports.BookingTradeAssetType$outboundSchema = exports.BookingTradeAssetType$inboundSchema = exports.BookingTradeWhenIssued = exports.BookingTradeVenue = exports.BookingTradeSpecialInstructions = exports.BookingTradeSideModifier = exports.BookingTradeSide = exports.BookingTradeRouteType = exports.BookingTradeIdentifierType = exports.BookingTradeBrokerCapacity = exports.BookingTradeAssetType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const bookingfee_js_1 = require("./bookingfee.js");
const bookinglot_js_1 = require("./bookinglot.js");
const execution_js_1 = require("./execution.js");
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
var BookingTradeAssetType;
(function (BookingTradeAssetType) {
    BookingTradeAssetType["AssetTypeUnspecified"] = "ASSET_TYPE_UNSPECIFIED";
    BookingTradeAssetType["Equity"] = "EQUITY";
    BookingTradeAssetType["FixedIncome"] = "FIXED_INCOME";
})(BookingTradeAssetType || (exports.BookingTradeAssetType = BookingTradeAssetType = {}));
/**
 * Broker capacity for the trade.
 */
var BookingTradeBrokerCapacity;
(function (BookingTradeBrokerCapacity) {
    BookingTradeBrokerCapacity["CapacityUnspecified"] = "CAPACITY_UNSPECIFIED";
    BookingTradeBrokerCapacity["Agency"] = "AGENCY";
    BookingTradeBrokerCapacity["Principal"] = "PRINCIPAL";
    BookingTradeBrokerCapacity["Mixed"] = "MIXED";
})(BookingTradeBrokerCapacity || (exports.BookingTradeBrokerCapacity = BookingTradeBrokerCapacity = {}));
/**
 * Identifier type for the asset being traded.
 */
var BookingTradeIdentifierType;
(function (BookingTradeIdentifierType) {
    BookingTradeIdentifierType["IdentifierTypeUnspecified"] = "IDENTIFIER_TYPE_UNSPECIFIED";
    BookingTradeIdentifierType["AssetId"] = "ASSET_ID";
    BookingTradeIdentifierType["Symbol"] = "SYMBOL";
    BookingTradeIdentifierType["Cusip"] = "CUSIP";
    BookingTradeIdentifierType["Isin"] = "ISIN";
})(BookingTradeIdentifierType || (exports.BookingTradeIdentifierType = BookingTradeIdentifierType = {}));
/**
 * Route type for the trade.
 */
var BookingTradeRouteType;
(function (BookingTradeRouteType) {
    BookingTradeRouteType["RouteTypeUnspecified"] = "ROUTE_TYPE_UNSPECIFIED";
    BookingTradeRouteType["Dma"] = "DMA";
    BookingTradeRouteType["Mngd"] = "MNGD";
    BookingTradeRouteType["Quik"] = "QUIK";
    BookingTradeRouteType["Algo"] = "ALGO";
    BookingTradeRouteType["Away"] = "AWAY";
    BookingTradeRouteType["Corr"] = "CORR";
    BookingTradeRouteType["Boats"] = "BOATS";
})(BookingTradeRouteType || (exports.BookingTradeRouteType = BookingTradeRouteType = {}));
/**
 * Denotes if the trade is a SELL or a BUY.
 */
var BookingTradeSide;
(function (BookingTradeSide) {
    BookingTradeSide["SideUnspecified"] = "SIDE_UNSPECIFIED";
    BookingTradeSide["Buy"] = "BUY";
    BookingTradeSide["Sell"] = "SELL";
})(BookingTradeSide || (exports.BookingTradeSide = BookingTradeSide = {}));
/**
 * Side modifier for the trade.
 */
var BookingTradeSideModifier;
(function (BookingTradeSideModifier) {
    BookingTradeSideModifier["SideModifierUnspecified"] = "SIDE_MODIFIER_UNSPECIFIED";
    BookingTradeSideModifier["Short"] = "SHORT";
    BookingTradeSideModifier["ShortExempt"] = "SHORT_EXEMPT";
    BookingTradeSideModifier["ShortCover"] = "SHORT_COVER";
    BookingTradeSideModifier["Open"] = "OPEN";
    BookingTradeSideModifier["Close"] = "CLOSE";
})(BookingTradeSideModifier || (exports.BookingTradeSideModifier = BookingTradeSideModifier = {}));
var BookingTradeSpecialInstructions;
(function (BookingTradeSpecialInstructions) {
    BookingTradeSpecialInstructions["SpecialInstructionsUnspecified"] = "SPECIAL_INSTRUCTIONS_UNSPECIFIED";
    BookingTradeSpecialInstructions["Rule144"] = "RULE_144";
    BookingTradeSpecialInstructions["WithDividend"] = "WITH_DIVIDEND";
    BookingTradeSpecialInstructions["WithRights"] = "WITH_RIGHTS";
    BookingTradeSpecialInstructions["CloseContract"] = "CLOSE_CONTRACT";
    BookingTradeSpecialInstructions["CoverShort"] = "COVER_SHORT";
    BookingTradeSpecialInstructions["CrossTrade"] = "CROSS_TRADE";
    BookingTradeSpecialInstructions["OpenContractCovered"] = "OPEN_CONTRACT_COVERED";
    BookingTradeSpecialInstructions["DiscretionExercised"] = "DISCRETION_EXERCISED";
    BookingTradeSpecialInstructions["DiscretionNotExercised"] = "DISCRETION_NOT_EXERCISED";
    BookingTradeSpecialInstructions["OptionAssignment"] = "OPTION_ASSIGNMENT";
    BookingTradeSpecialInstructions["EmployeeStockOption"] = "EMPLOYEE_STOCK_OPTION";
    BookingTradeSpecialInstructions["InvestmentBanking"] = "INVESTMENT_BANKING";
    BookingTradeSpecialInstructions["BrokerDealerOrder"] = "BROKER_DEALER_ORDER";
    BookingTradeSpecialInstructions["MakeMarketInSecurity"] = "MAKE_MARKET_IN_SECURITY";
    BookingTradeSpecialInstructions["MakeMarketSolicited"] = "MAKE_MARKET_SOLICITED";
    BookingTradeSpecialInstructions["MakeMarketUnsolicited"] = "MAKE_MARKET_UNSOLICITED";
    BookingTradeSpecialInstructions["CustomerDirected"] = "CUSTOMER_DIRECTED";
    BookingTradeSpecialInstructions["FullyRegistered"] = "FULLY_REGISTERED";
    BookingTradeSpecialInstructions["OpenContract"] = "OPEN_CONTRACT";
    BookingTradeSpecialInstructions["OddlotDiffOnRequest"] = "ODDLOT_DIFF_ON_REQUEST";
    BookingTradeSpecialInstructions["ProspectusEnclosed"] = "PROSPECTUS_ENCLOSED";
    BookingTradeSpecialInstructions["ProspectusSeparateMail"] = "PROSPECTUS_SEPARATE_MAIL";
    BookingTradeSpecialInstructions["Solicited"] = "SOLICITED";
    BookingTradeSpecialInstructions["Unsolicited"] = "UNSOLICITED";
    BookingTradeSpecialInstructions["XDividend"] = "X_DIVIDEND";
    BookingTradeSpecialInstructions["ActingAsPrincipal"] = "ACTING_AS_PRINCIPAL";
    BookingTradeSpecialInstructions["AveragePrice"] = "AVERAGE_PRICE";
    BookingTradeSpecialInstructions["BrokerLiquidation"] = "BROKER_LIQUIDATION";
    BookingTradeSpecialInstructions["CouponBooks"] = "COUPON_BOOKS";
    BookingTradeSpecialInstructions["HasPostageFee"] = "HAS_POSTAGE_FEE";
    BookingTradeSpecialInstructions["InternetOrder"] = "INTERNET_ORDER";
    BookingTradeSpecialInstructions["MarginSellout"] = "MARGIN_SELLOUT";
    BookingTradeSpecialInstructions["MarketMakersAsPrincipal"] = "MARKET_MAKERS_AS_PRINCIPAL";
    BookingTradeSpecialInstructions["NegativeNetProceed"] = "NEGATIVE_NET_PROCEED";
    BookingTradeSpecialInstructions["PreFigIndicator"] = "PRE_FIG_INDICATOR";
    BookingTradeSpecialInstructions["RisklessPrincipalInstruction"] = "RISKLESS_PRINCIPAL_INSTRUCTION";
    BookingTradeSpecialInstructions["ShortInstruction"] = "SHORT_INSTRUCTION";
    BookingTradeSpecialInstructions["ThirdMarket"] = "THIRD_MARKET";
    BookingTradeSpecialInstructions["SuppressMsrbTransmission"] = "SUPPRESS_MSRB_TRANSMISSION";
    BookingTradeSpecialInstructions["SuppressTraceReporting"] = "SUPPRESS_TRACE_REPORTING";
    BookingTradeSpecialInstructions["SuppressEmailNotification"] = "SUPPRESS_EMAIL_NOTIFICATION";
    BookingTradeSpecialInstructions["StockReward"] = "STOCK_REWARD";
    BookingTradeSpecialInstructions["SuppressRegFees"] = "SUPPRESS_REG_FEES";
    BookingTradeSpecialInstructions["SuppressSecFee"] = "SUPPRESS_SEC_FEE";
    BookingTradeSpecialInstructions["SuppressTafFee"] = "SUPPRESS_TAF_FEE";
    BookingTradeSpecialInstructions["DividendReinvestment"] = "DIVIDEND_REINVESTMENT";
})(BookingTradeSpecialInstructions || (exports.BookingTradeSpecialInstructions = BookingTradeSpecialInstructions = {}));
/**
 * Exchange venue
 */
var BookingTradeVenue;
(function (BookingTradeVenue) {
    BookingTradeVenue["ExchangeVenueUnspecified"] = "EXCHANGE_VENUE_UNSPECIFIED";
    BookingTradeVenue["Amex"] = "AMEX";
    BookingTradeVenue["Arca"] = "ARCA";
    BookingTradeVenue["Bats"] = "BATS";
    BookingTradeVenue["BatsByx"] = "BATS_BYX";
    BookingTradeVenue["Boston"] = "BOSTON";
    BookingTradeVenue["Box"] = "BOX";
    BookingTradeVenue["Bzx"] = "BZX";
    BookingTradeVenue["C2"] = "C2";
    BookingTradeVenue["Cboe"] = "CBOE";
    BookingTradeVenue["Chicago"] = "CHICAGO";
    BookingTradeVenue["Cincinnati"] = "CINCINNATI";
    BookingTradeVenue["Edga"] = "EDGA";
    BookingTradeVenue["Edgx"] = "EDGX";
    BookingTradeVenue["Exclearing"] = "EXCLEARING";
    BookingTradeVenue["Iex"] = "IEX";
    BookingTradeVenue["Ise"] = "ISE";
    BookingTradeVenue["IseGemini"] = "ISE_GEMINI";
    BookingTradeVenue["Miax"] = "MIAX";
    BookingTradeVenue["Nasdaq"] = "NASDAQ";
    BookingTradeVenue["NasdaqOmxBx"] = "NASDAQ_OMX_BX";
    BookingTradeVenue["Nyse"] = "NYSE";
    BookingTradeVenue["Phlx"] = "PHLX";
    BookingTradeVenue["Otc"] = "OTC";
    BookingTradeVenue["Qsr"] = "QSR";
})(BookingTradeVenue || (exports.BookingTradeVenue = BookingTradeVenue = {}));
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
var BookingTradeWhenIssued;
(function (BookingTradeWhenIssued) {
    BookingTradeWhenIssued["WhenIssuedTypeUnspecified"] = "WHEN_ISSUED_TYPE_UNSPECIFIED";
    BookingTradeWhenIssued["WhenIssued"] = "WHEN_ISSUED";
    BookingTradeWhenIssued["WhenDistributed"] = "WHEN_DISTRIBUTED";
})(BookingTradeWhenIssued || (exports.BookingTradeWhenIssued = BookingTradeWhenIssued = {}));
/** @internal */
exports.BookingTradeAssetType$inboundSchema = z
    .union([
    z.nativeEnum(BookingTradeAssetType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingTradeAssetType$outboundSchema = z.union([
    z.nativeEnum(BookingTradeAssetType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingTradeAssetType$;
(function (BookingTradeAssetType$) {
    /** @deprecated use `BookingTradeAssetType$inboundSchema` instead. */
    BookingTradeAssetType$.inboundSchema = exports.BookingTradeAssetType$inboundSchema;
    /** @deprecated use `BookingTradeAssetType$outboundSchema` instead. */
    BookingTradeAssetType$.outboundSchema = exports.BookingTradeAssetType$outboundSchema;
})(BookingTradeAssetType$ || (exports.BookingTradeAssetType$ = BookingTradeAssetType$ = {}));
/** @internal */
exports.BookingTradeBrokerCapacity$inboundSchema = z
    .union([
    z.nativeEnum(BookingTradeBrokerCapacity),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingTradeBrokerCapacity$outboundSchema = z.union([
    z.nativeEnum(BookingTradeBrokerCapacity),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingTradeBrokerCapacity$;
(function (BookingTradeBrokerCapacity$) {
    /** @deprecated use `BookingTradeBrokerCapacity$inboundSchema` instead. */
    BookingTradeBrokerCapacity$.inboundSchema = exports.BookingTradeBrokerCapacity$inboundSchema;
    /** @deprecated use `BookingTradeBrokerCapacity$outboundSchema` instead. */
    BookingTradeBrokerCapacity$.outboundSchema = exports.BookingTradeBrokerCapacity$outboundSchema;
})(BookingTradeBrokerCapacity$ || (exports.BookingTradeBrokerCapacity$ = BookingTradeBrokerCapacity$ = {}));
/** @internal */
exports.BookingTradeIdentifierType$inboundSchema = z
    .union([
    z.nativeEnum(BookingTradeIdentifierType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingTradeIdentifierType$outboundSchema = z.union([
    z.nativeEnum(BookingTradeIdentifierType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingTradeIdentifierType$;
(function (BookingTradeIdentifierType$) {
    /** @deprecated use `BookingTradeIdentifierType$inboundSchema` instead. */
    BookingTradeIdentifierType$.inboundSchema = exports.BookingTradeIdentifierType$inboundSchema;
    /** @deprecated use `BookingTradeIdentifierType$outboundSchema` instead. */
    BookingTradeIdentifierType$.outboundSchema = exports.BookingTradeIdentifierType$outboundSchema;
})(BookingTradeIdentifierType$ || (exports.BookingTradeIdentifierType$ = BookingTradeIdentifierType$ = {}));
/** @internal */
exports.LocalMarketTradeDate$inboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/** @internal */
exports.LocalMarketTradeDate$outboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var LocalMarketTradeDate$;
(function (LocalMarketTradeDate$) {
    /** @deprecated use `LocalMarketTradeDate$inboundSchema` instead. */
    LocalMarketTradeDate$.inboundSchema = exports.LocalMarketTradeDate$inboundSchema;
    /** @deprecated use `LocalMarketTradeDate$outboundSchema` instead. */
    LocalMarketTradeDate$.outboundSchema = exports.LocalMarketTradeDate$outboundSchema;
})(LocalMarketTradeDate$ || (exports.LocalMarketTradeDate$ = LocalMarketTradeDate$ = {}));
/** @internal */
exports.BookingTradeRouteType$inboundSchema = z
    .union([
    z.nativeEnum(BookingTradeRouteType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingTradeRouteType$outboundSchema = z.union([
    z.nativeEnum(BookingTradeRouteType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingTradeRouteType$;
(function (BookingTradeRouteType$) {
    /** @deprecated use `BookingTradeRouteType$inboundSchema` instead. */
    BookingTradeRouteType$.inboundSchema = exports.BookingTradeRouteType$inboundSchema;
    /** @deprecated use `BookingTradeRouteType$outboundSchema` instead. */
    BookingTradeRouteType$.outboundSchema = exports.BookingTradeRouteType$outboundSchema;
})(BookingTradeRouteType$ || (exports.BookingTradeRouteType$ = BookingTradeRouteType$ = {}));
/** @internal */
exports.SettlementDate$inboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/** @internal */
exports.SettlementDate$outboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var SettlementDate$;
(function (SettlementDate$) {
    /** @deprecated use `SettlementDate$inboundSchema` instead. */
    SettlementDate$.inboundSchema = exports.SettlementDate$inboundSchema;
    /** @deprecated use `SettlementDate$outboundSchema` instead. */
    SettlementDate$.outboundSchema = exports.SettlementDate$outboundSchema;
})(SettlementDate$ || (exports.SettlementDate$ = SettlementDate$ = {}));
/** @internal */
exports.BookingTradeSide$inboundSchema = z
    .union([
    z.nativeEnum(BookingTradeSide),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingTradeSide$outboundSchema = z.union([
    z.nativeEnum(BookingTradeSide),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingTradeSide$;
(function (BookingTradeSide$) {
    /** @deprecated use `BookingTradeSide$inboundSchema` instead. */
    BookingTradeSide$.inboundSchema = exports.BookingTradeSide$inboundSchema;
    /** @deprecated use `BookingTradeSide$outboundSchema` instead. */
    BookingTradeSide$.outboundSchema = exports.BookingTradeSide$outboundSchema;
})(BookingTradeSide$ || (exports.BookingTradeSide$ = BookingTradeSide$ = {}));
/** @internal */
exports.BookingTradeSideModifier$inboundSchema = z
    .union([
    z.nativeEnum(BookingTradeSideModifier),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingTradeSideModifier$outboundSchema = z.union([
    z.nativeEnum(BookingTradeSideModifier),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingTradeSideModifier$;
(function (BookingTradeSideModifier$) {
    /** @deprecated use `BookingTradeSideModifier$inboundSchema` instead. */
    BookingTradeSideModifier$.inboundSchema = exports.BookingTradeSideModifier$inboundSchema;
    /** @deprecated use `BookingTradeSideModifier$outboundSchema` instead. */
    BookingTradeSideModifier$.outboundSchema = exports.BookingTradeSideModifier$outboundSchema;
})(BookingTradeSideModifier$ || (exports.BookingTradeSideModifier$ = BookingTradeSideModifier$ = {}));
/** @internal */
exports.BookingTradeSpecialInstructions$inboundSchema = z
    .union([
    z.nativeEnum(BookingTradeSpecialInstructions),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingTradeSpecialInstructions$outboundSchema = z.union([
    z.nativeEnum(BookingTradeSpecialInstructions),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingTradeSpecialInstructions$;
(function (BookingTradeSpecialInstructions$) {
    /** @deprecated use `BookingTradeSpecialInstructions$inboundSchema` instead. */
    BookingTradeSpecialInstructions$.inboundSchema = exports.BookingTradeSpecialInstructions$inboundSchema;
    /** @deprecated use `BookingTradeSpecialInstructions$outboundSchema` instead. */
    BookingTradeSpecialInstructions$.outboundSchema = exports.BookingTradeSpecialInstructions$outboundSchema;
})(BookingTradeSpecialInstructions$ || (exports.BookingTradeSpecialInstructions$ = BookingTradeSpecialInstructions$ = {}));
/** @internal */
exports.BookingTradeVenue$inboundSchema = z
    .union([
    z.nativeEnum(BookingTradeVenue),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingTradeVenue$outboundSchema = z.union([
    z.nativeEnum(BookingTradeVenue),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingTradeVenue$;
(function (BookingTradeVenue$) {
    /** @deprecated use `BookingTradeVenue$inboundSchema` instead. */
    BookingTradeVenue$.inboundSchema = exports.BookingTradeVenue$inboundSchema;
    /** @deprecated use `BookingTradeVenue$outboundSchema` instead. */
    BookingTradeVenue$.outboundSchema = exports.BookingTradeVenue$outboundSchema;
})(BookingTradeVenue$ || (exports.BookingTradeVenue$ = BookingTradeVenue$ = {}));
/** @internal */
exports.BookingTradeWhenIssued$inboundSchema = z
    .union([
    z.nativeEnum(BookingTradeWhenIssued),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingTradeWhenIssued$outboundSchema = z.union([
    z.nativeEnum(BookingTradeWhenIssued),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingTradeWhenIssued$;
(function (BookingTradeWhenIssued$) {
    /** @deprecated use `BookingTradeWhenIssued$inboundSchema` instead. */
    BookingTradeWhenIssued$.inboundSchema = exports.BookingTradeWhenIssued$inboundSchema;
    /** @deprecated use `BookingTradeWhenIssued$outboundSchema` instead. */
    BookingTradeWhenIssued$.outboundSchema = exports.BookingTradeWhenIssued$outboundSchema;
})(BookingTradeWhenIssued$ || (exports.BookingTradeWhenIssued$ = BookingTradeWhenIssued$ = {}));
/** @internal */
exports.BookingTrade$inboundSchema = z.object({
    account_id: z.string().optional(),
    activity_id: z.string().optional(),
    additional_instructions: z.string().optional(),
    alternate_order_id: z.string().optional(),
    asset_type: exports.BookingTradeAssetType$inboundSchema.optional(),
    broker_capacity: exports.BookingTradeBrokerCapacity$inboundSchema.optional(),
    client_order_id: z.string().optional(),
    executing_broker: z.string().optional(),
    executions: z.array(execution_js_1.Execution$inboundSchema).optional(),
    fees: z.array(bookingfee_js_1.BookingFee$inboundSchema).optional(),
    identifier: z.string().optional(),
    identifier_type: exports.BookingTradeIdentifierType$inboundSchema.optional(),
    issuing_region_code: z.string().optional(),
    local_market_trade_date: z.nullable(z.lazy(() => exports.LocalMarketTradeDate$inboundSchema)).optional(),
    lot_matching_instructions: z.array(bookinglot_js_1.BookingLot$inboundSchema).optional(),
    mic_code: z.string().optional(),
    name: z.string().optional(),
    open: z.boolean().optional(),
    order_id: z.string().optional(),
    route_type: exports.BookingTradeRouteType$inboundSchema.optional(),
    settlement_date: z.nullable(z.lazy(() => exports.SettlementDate$inboundSchema))
        .optional(),
    side: exports.BookingTradeSide$inboundSchema.optional(),
    side_modifier: exports.BookingTradeSideModifier$inboundSchema.optional(),
    source_application: z.string().optional(),
    special_instructions: z.array(exports.BookingTradeSpecialInstructions$inboundSchema)
        .optional(),
    trade_id: z.string().optional(),
    venue: exports.BookingTradeVenue$inboundSchema.optional(),
    when_issued: exports.BookingTradeWhenIssued$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
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
exports.BookingTrade$outboundSchema = z.object({
    accountId: z.string().optional(),
    activityId: z.string().optional(),
    additionalInstructions: z.string().optional(),
    alternateOrderId: z.string().optional(),
    assetType: exports.BookingTradeAssetType$outboundSchema.optional(),
    brokerCapacity: exports.BookingTradeBrokerCapacity$outboundSchema.optional(),
    clientOrderId: z.string().optional(),
    executingBroker: z.string().optional(),
    executions: z.array(execution_js_1.Execution$outboundSchema).optional(),
    fees: z.array(bookingfee_js_1.BookingFee$outboundSchema).optional(),
    identifier: z.string().optional(),
    identifierType: exports.BookingTradeIdentifierType$outboundSchema.optional(),
    issuingRegionCode: z.string().optional(),
    localMarketTradeDate: z.nullable(z.lazy(() => exports.LocalMarketTradeDate$outboundSchema)).optional(),
    lotMatchingInstructions: z.array(bookinglot_js_1.BookingLot$outboundSchema).optional(),
    micCode: z.string().optional(),
    name: z.string().optional(),
    open: z.boolean().optional(),
    orderId: z.string().optional(),
    routeType: exports.BookingTradeRouteType$outboundSchema.optional(),
    settlementDate: z.nullable(z.lazy(() => exports.SettlementDate$outboundSchema))
        .optional(),
    side: exports.BookingTradeSide$outboundSchema.optional(),
    sideModifier: exports.BookingTradeSideModifier$outboundSchema.optional(),
    sourceApplication: z.string().optional(),
    specialInstructions: z.array(exports.BookingTradeSpecialInstructions$outboundSchema)
        .optional(),
    tradeId: z.string().optional(),
    venue: exports.BookingTradeVenue$outboundSchema.optional(),
    whenIssued: exports.BookingTradeWhenIssued$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
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
var BookingTrade$;
(function (BookingTrade$) {
    /** @deprecated use `BookingTrade$inboundSchema` instead. */
    BookingTrade$.inboundSchema = exports.BookingTrade$inboundSchema;
    /** @deprecated use `BookingTrade$outboundSchema` instead. */
    BookingTrade$.outboundSchema = exports.BookingTrade$outboundSchema;
})(BookingTrade$ || (exports.BookingTrade$ = BookingTrade$ = {}));
//# sourceMappingURL=bookingtrade.js.map