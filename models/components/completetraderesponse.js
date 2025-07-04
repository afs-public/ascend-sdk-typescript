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
exports.CompleteTradeResponse$ = exports.CompleteTradeResponse$outboundSchema = exports.CompleteTradeResponse$inboundSchema = exports.Trade$ = exports.Trade$outboundSchema = exports.Trade$inboundSchema = exports.CompleteTradeResponseWhenIssued$ = exports.CompleteTradeResponseWhenIssued$outboundSchema = exports.CompleteTradeResponseWhenIssued$inboundSchema = exports.CompleteTradeResponseVenue$ = exports.CompleteTradeResponseVenue$outboundSchema = exports.CompleteTradeResponseVenue$inboundSchema = exports.CompleteTradeResponseSpecialInstructions$ = exports.CompleteTradeResponseSpecialInstructions$outboundSchema = exports.CompleteTradeResponseSpecialInstructions$inboundSchema = exports.CompleteTradeResponseSideModifier$ = exports.CompleteTradeResponseSideModifier$outboundSchema = exports.CompleteTradeResponseSideModifier$inboundSchema = exports.CompleteTradeResponseSide$ = exports.CompleteTradeResponseSide$outboundSchema = exports.CompleteTradeResponseSide$inboundSchema = exports.CompleteTradeResponseSettlementDate$ = exports.CompleteTradeResponseSettlementDate$outboundSchema = exports.CompleteTradeResponseSettlementDate$inboundSchema = exports.CompleteTradeResponseRouteType$ = exports.CompleteTradeResponseRouteType$outboundSchema = exports.CompleteTradeResponseRouteType$inboundSchema = exports.CompleteTradeResponseLocalMarketTradeDate$ = exports.CompleteTradeResponseLocalMarketTradeDate$outboundSchema = exports.CompleteTradeResponseLocalMarketTradeDate$inboundSchema = exports.CompleteTradeResponseIdentifierType$ = exports.CompleteTradeResponseIdentifierType$outboundSchema = exports.CompleteTradeResponseIdentifierType$inboundSchema = exports.CompleteTradeResponseBrokerCapacity$ = exports.CompleteTradeResponseBrokerCapacity$outboundSchema = exports.CompleteTradeResponseBrokerCapacity$inboundSchema = exports.CompleteTradeResponseAssetType$ = exports.CompleteTradeResponseAssetType$outboundSchema = exports.CompleteTradeResponseAssetType$inboundSchema = exports.CompleteTradeResponseWhenIssued = exports.CompleteTradeResponseVenue = exports.CompleteTradeResponseSpecialInstructions = exports.CompleteTradeResponseSideModifier = exports.CompleteTradeResponseSide = exports.CompleteTradeResponseRouteType = exports.CompleteTradeResponseIdentifierType = exports.CompleteTradeResponseBrokerCapacity = exports.CompleteTradeResponseAssetType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const bookingfee_js_1 = require("./bookingfee.js");
const bookinglot_js_1 = require("./bookinglot.js");
const execution_js_1 = require("./execution.js");
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
var CompleteTradeResponseAssetType;
(function (CompleteTradeResponseAssetType) {
    CompleteTradeResponseAssetType["AssetTypeUnspecified"] = "ASSET_TYPE_UNSPECIFIED";
    CompleteTradeResponseAssetType["Equity"] = "EQUITY";
    CompleteTradeResponseAssetType["FixedIncome"] = "FIXED_INCOME";
})(CompleteTradeResponseAssetType || (exports.CompleteTradeResponseAssetType = CompleteTradeResponseAssetType = {}));
/**
 * Broker capacity for the trade.
 */
var CompleteTradeResponseBrokerCapacity;
(function (CompleteTradeResponseBrokerCapacity) {
    CompleteTradeResponseBrokerCapacity["CapacityUnspecified"] = "CAPACITY_UNSPECIFIED";
    CompleteTradeResponseBrokerCapacity["Agency"] = "AGENCY";
    CompleteTradeResponseBrokerCapacity["Principal"] = "PRINCIPAL";
    CompleteTradeResponseBrokerCapacity["Mixed"] = "MIXED";
})(CompleteTradeResponseBrokerCapacity || (exports.CompleteTradeResponseBrokerCapacity = CompleteTradeResponseBrokerCapacity = {}));
/**
 * Identifier type for the asset being traded.
 */
var CompleteTradeResponseIdentifierType;
(function (CompleteTradeResponseIdentifierType) {
    CompleteTradeResponseIdentifierType["IdentifierTypeUnspecified"] = "IDENTIFIER_TYPE_UNSPECIFIED";
    CompleteTradeResponseIdentifierType["AssetId"] = "ASSET_ID";
    CompleteTradeResponseIdentifierType["Symbol"] = "SYMBOL";
    CompleteTradeResponseIdentifierType["Cusip"] = "CUSIP";
    CompleteTradeResponseIdentifierType["Isin"] = "ISIN";
})(CompleteTradeResponseIdentifierType || (exports.CompleteTradeResponseIdentifierType = CompleteTradeResponseIdentifierType = {}));
/**
 * Route type for the trade.
 */
var CompleteTradeResponseRouteType;
(function (CompleteTradeResponseRouteType) {
    CompleteTradeResponseRouteType["RouteTypeUnspecified"] = "ROUTE_TYPE_UNSPECIFIED";
    CompleteTradeResponseRouteType["Dma"] = "DMA";
    CompleteTradeResponseRouteType["Mngd"] = "MNGD";
    CompleteTradeResponseRouteType["Quik"] = "QUIK";
    CompleteTradeResponseRouteType["Algo"] = "ALGO";
    CompleteTradeResponseRouteType["Away"] = "AWAY";
    CompleteTradeResponseRouteType["Corr"] = "CORR";
    CompleteTradeResponseRouteType["Boats"] = "BOATS";
})(CompleteTradeResponseRouteType || (exports.CompleteTradeResponseRouteType = CompleteTradeResponseRouteType = {}));
/**
 * Denotes if the trade is a SELL or a BUY.
 */
var CompleteTradeResponseSide;
(function (CompleteTradeResponseSide) {
    CompleteTradeResponseSide["SideUnspecified"] = "SIDE_UNSPECIFIED";
    CompleteTradeResponseSide["Buy"] = "BUY";
    CompleteTradeResponseSide["Sell"] = "SELL";
})(CompleteTradeResponseSide || (exports.CompleteTradeResponseSide = CompleteTradeResponseSide = {}));
/**
 * Side modifier for the trade.
 */
var CompleteTradeResponseSideModifier;
(function (CompleteTradeResponseSideModifier) {
    CompleteTradeResponseSideModifier["SideModifierUnspecified"] = "SIDE_MODIFIER_UNSPECIFIED";
    CompleteTradeResponseSideModifier["Short"] = "SHORT";
    CompleteTradeResponseSideModifier["ShortExempt"] = "SHORT_EXEMPT";
    CompleteTradeResponseSideModifier["ShortCover"] = "SHORT_COVER";
    CompleteTradeResponseSideModifier["Open"] = "OPEN";
    CompleteTradeResponseSideModifier["Close"] = "CLOSE";
})(CompleteTradeResponseSideModifier || (exports.CompleteTradeResponseSideModifier = CompleteTradeResponseSideModifier = {}));
var CompleteTradeResponseSpecialInstructions;
(function (CompleteTradeResponseSpecialInstructions) {
    CompleteTradeResponseSpecialInstructions["SpecialInstructionsUnspecified"] = "SPECIAL_INSTRUCTIONS_UNSPECIFIED";
    CompleteTradeResponseSpecialInstructions["Rule144"] = "RULE_144";
    CompleteTradeResponseSpecialInstructions["WithDividend"] = "WITH_DIVIDEND";
    CompleteTradeResponseSpecialInstructions["WithRights"] = "WITH_RIGHTS";
    CompleteTradeResponseSpecialInstructions["CloseContract"] = "CLOSE_CONTRACT";
    CompleteTradeResponseSpecialInstructions["CoverShort"] = "COVER_SHORT";
    CompleteTradeResponseSpecialInstructions["CrossTrade"] = "CROSS_TRADE";
    CompleteTradeResponseSpecialInstructions["OpenContractCovered"] = "OPEN_CONTRACT_COVERED";
    CompleteTradeResponseSpecialInstructions["DiscretionExercised"] = "DISCRETION_EXERCISED";
    CompleteTradeResponseSpecialInstructions["DiscretionNotExercised"] = "DISCRETION_NOT_EXERCISED";
    CompleteTradeResponseSpecialInstructions["OptionAssignment"] = "OPTION_ASSIGNMENT";
    CompleteTradeResponseSpecialInstructions["EmployeeStockOption"] = "EMPLOYEE_STOCK_OPTION";
    CompleteTradeResponseSpecialInstructions["InvestmentBanking"] = "INVESTMENT_BANKING";
    CompleteTradeResponseSpecialInstructions["BrokerDealerOrder"] = "BROKER_DEALER_ORDER";
    CompleteTradeResponseSpecialInstructions["MakeMarketInSecurity"] = "MAKE_MARKET_IN_SECURITY";
    CompleteTradeResponseSpecialInstructions["MakeMarketSolicited"] = "MAKE_MARKET_SOLICITED";
    CompleteTradeResponseSpecialInstructions["MakeMarketUnsolicited"] = "MAKE_MARKET_UNSOLICITED";
    CompleteTradeResponseSpecialInstructions["CustomerDirected"] = "CUSTOMER_DIRECTED";
    CompleteTradeResponseSpecialInstructions["FullyRegistered"] = "FULLY_REGISTERED";
    CompleteTradeResponseSpecialInstructions["OpenContract"] = "OPEN_CONTRACT";
    CompleteTradeResponseSpecialInstructions["OddlotDiffOnRequest"] = "ODDLOT_DIFF_ON_REQUEST";
    CompleteTradeResponseSpecialInstructions["ProspectusEnclosed"] = "PROSPECTUS_ENCLOSED";
    CompleteTradeResponseSpecialInstructions["ProspectusSeparateMail"] = "PROSPECTUS_SEPARATE_MAIL";
    CompleteTradeResponseSpecialInstructions["Solicited"] = "SOLICITED";
    CompleteTradeResponseSpecialInstructions["Unsolicited"] = "UNSOLICITED";
    CompleteTradeResponseSpecialInstructions["XDividend"] = "X_DIVIDEND";
    CompleteTradeResponseSpecialInstructions["ActingAsPrincipal"] = "ACTING_AS_PRINCIPAL";
    CompleteTradeResponseSpecialInstructions["AveragePrice"] = "AVERAGE_PRICE";
    CompleteTradeResponseSpecialInstructions["BrokerLiquidation"] = "BROKER_LIQUIDATION";
    CompleteTradeResponseSpecialInstructions["CouponBooks"] = "COUPON_BOOKS";
    CompleteTradeResponseSpecialInstructions["HasPostageFee"] = "HAS_POSTAGE_FEE";
    CompleteTradeResponseSpecialInstructions["InternetOrder"] = "INTERNET_ORDER";
    CompleteTradeResponseSpecialInstructions["MarginSellout"] = "MARGIN_SELLOUT";
    CompleteTradeResponseSpecialInstructions["MarketMakersAsPrincipal"] = "MARKET_MAKERS_AS_PRINCIPAL";
    CompleteTradeResponseSpecialInstructions["NegativeNetProceed"] = "NEGATIVE_NET_PROCEED";
    CompleteTradeResponseSpecialInstructions["PreFigIndicator"] = "PRE_FIG_INDICATOR";
    CompleteTradeResponseSpecialInstructions["RisklessPrincipalInstruction"] = "RISKLESS_PRINCIPAL_INSTRUCTION";
    CompleteTradeResponseSpecialInstructions["ShortInstruction"] = "SHORT_INSTRUCTION";
    CompleteTradeResponseSpecialInstructions["ThirdMarket"] = "THIRD_MARKET";
    CompleteTradeResponseSpecialInstructions["SuppressMsrbTransmission"] = "SUPPRESS_MSRB_TRANSMISSION";
    CompleteTradeResponseSpecialInstructions["SuppressTraceReporting"] = "SUPPRESS_TRACE_REPORTING";
    CompleteTradeResponseSpecialInstructions["SuppressEmailNotification"] = "SUPPRESS_EMAIL_NOTIFICATION";
    CompleteTradeResponseSpecialInstructions["StockReward"] = "STOCK_REWARD";
    CompleteTradeResponseSpecialInstructions["SuppressRegFees"] = "SUPPRESS_REG_FEES";
    CompleteTradeResponseSpecialInstructions["SuppressSecFee"] = "SUPPRESS_SEC_FEE";
    CompleteTradeResponseSpecialInstructions["SuppressTafFee"] = "SUPPRESS_TAF_FEE";
    CompleteTradeResponseSpecialInstructions["DividendReinvestment"] = "DIVIDEND_REINVESTMENT";
})(CompleteTradeResponseSpecialInstructions || (exports.CompleteTradeResponseSpecialInstructions = CompleteTradeResponseSpecialInstructions = {}));
/**
 * Exchange venue
 */
var CompleteTradeResponseVenue;
(function (CompleteTradeResponseVenue) {
    CompleteTradeResponseVenue["ExchangeVenueUnspecified"] = "EXCHANGE_VENUE_UNSPECIFIED";
    CompleteTradeResponseVenue["Amex"] = "AMEX";
    CompleteTradeResponseVenue["Arca"] = "ARCA";
    CompleteTradeResponseVenue["Bats"] = "BATS";
    CompleteTradeResponseVenue["BatsByx"] = "BATS_BYX";
    CompleteTradeResponseVenue["Boston"] = "BOSTON";
    CompleteTradeResponseVenue["Box"] = "BOX";
    CompleteTradeResponseVenue["Bzx"] = "BZX";
    CompleteTradeResponseVenue["C2"] = "C2";
    CompleteTradeResponseVenue["Cboe"] = "CBOE";
    CompleteTradeResponseVenue["Chicago"] = "CHICAGO";
    CompleteTradeResponseVenue["Cincinnati"] = "CINCINNATI";
    CompleteTradeResponseVenue["Edga"] = "EDGA";
    CompleteTradeResponseVenue["Edgx"] = "EDGX";
    CompleteTradeResponseVenue["Exclearing"] = "EXCLEARING";
    CompleteTradeResponseVenue["Iex"] = "IEX";
    CompleteTradeResponseVenue["Ise"] = "ISE";
    CompleteTradeResponseVenue["IseGemini"] = "ISE_GEMINI";
    CompleteTradeResponseVenue["Miax"] = "MIAX";
    CompleteTradeResponseVenue["Nasdaq"] = "NASDAQ";
    CompleteTradeResponseVenue["NasdaqOmxBx"] = "NASDAQ_OMX_BX";
    CompleteTradeResponseVenue["Nyse"] = "NYSE";
    CompleteTradeResponseVenue["Phlx"] = "PHLX";
    CompleteTradeResponseVenue["Otc"] = "OTC";
    CompleteTradeResponseVenue["Qsr"] = "QSR";
})(CompleteTradeResponseVenue || (exports.CompleteTradeResponseVenue = CompleteTradeResponseVenue = {}));
/**
 * Denotes that this trade was either when_issued or when_distributed.
 */
var CompleteTradeResponseWhenIssued;
(function (CompleteTradeResponseWhenIssued) {
    CompleteTradeResponseWhenIssued["WhenIssuedTypeUnspecified"] = "WHEN_ISSUED_TYPE_UNSPECIFIED";
    CompleteTradeResponseWhenIssued["WhenIssued"] = "WHEN_ISSUED";
    CompleteTradeResponseWhenIssued["WhenDistributed"] = "WHEN_DISTRIBUTED";
})(CompleteTradeResponseWhenIssued || (exports.CompleteTradeResponseWhenIssued = CompleteTradeResponseWhenIssued = {}));
/** @internal */
exports.CompleteTradeResponseAssetType$inboundSchema = z
    .union([
    z.nativeEnum(CompleteTradeResponseAssetType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompleteTradeResponseAssetType$outboundSchema = z.union([
    z.nativeEnum(CompleteTradeResponseAssetType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseAssetType$;
(function (CompleteTradeResponseAssetType$) {
    /** @deprecated use `CompleteTradeResponseAssetType$inboundSchema` instead. */
    CompleteTradeResponseAssetType$.inboundSchema = exports.CompleteTradeResponseAssetType$inboundSchema;
    /** @deprecated use `CompleteTradeResponseAssetType$outboundSchema` instead. */
    CompleteTradeResponseAssetType$.outboundSchema = exports.CompleteTradeResponseAssetType$outboundSchema;
})(CompleteTradeResponseAssetType$ || (exports.CompleteTradeResponseAssetType$ = CompleteTradeResponseAssetType$ = {}));
/** @internal */
exports.CompleteTradeResponseBrokerCapacity$inboundSchema = z
    .union([
    z.nativeEnum(CompleteTradeResponseBrokerCapacity),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompleteTradeResponseBrokerCapacity$outboundSchema = z.union([
    z.nativeEnum(CompleteTradeResponseBrokerCapacity),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseBrokerCapacity$;
(function (CompleteTradeResponseBrokerCapacity$) {
    /** @deprecated use `CompleteTradeResponseBrokerCapacity$inboundSchema` instead. */
    CompleteTradeResponseBrokerCapacity$.inboundSchema = exports.CompleteTradeResponseBrokerCapacity$inboundSchema;
    /** @deprecated use `CompleteTradeResponseBrokerCapacity$outboundSchema` instead. */
    CompleteTradeResponseBrokerCapacity$.outboundSchema = exports.CompleteTradeResponseBrokerCapacity$outboundSchema;
})(CompleteTradeResponseBrokerCapacity$ || (exports.CompleteTradeResponseBrokerCapacity$ = CompleteTradeResponseBrokerCapacity$ = {}));
/** @internal */
exports.CompleteTradeResponseIdentifierType$inboundSchema = z
    .union([
    z.nativeEnum(CompleteTradeResponseIdentifierType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompleteTradeResponseIdentifierType$outboundSchema = z.union([
    z.nativeEnum(CompleteTradeResponseIdentifierType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseIdentifierType$;
(function (CompleteTradeResponseIdentifierType$) {
    /** @deprecated use `CompleteTradeResponseIdentifierType$inboundSchema` instead. */
    CompleteTradeResponseIdentifierType$.inboundSchema = exports.CompleteTradeResponseIdentifierType$inboundSchema;
    /** @deprecated use `CompleteTradeResponseIdentifierType$outboundSchema` instead. */
    CompleteTradeResponseIdentifierType$.outboundSchema = exports.CompleteTradeResponseIdentifierType$outboundSchema;
})(CompleteTradeResponseIdentifierType$ || (exports.CompleteTradeResponseIdentifierType$ = CompleteTradeResponseIdentifierType$ = {}));
/** @internal */
exports.CompleteTradeResponseLocalMarketTradeDate$inboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/** @internal */
exports.CompleteTradeResponseLocalMarketTradeDate$outboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseLocalMarketTradeDate$;
(function (CompleteTradeResponseLocalMarketTradeDate$) {
    /** @deprecated use `CompleteTradeResponseLocalMarketTradeDate$inboundSchema` instead. */
    CompleteTradeResponseLocalMarketTradeDate$.inboundSchema = exports.CompleteTradeResponseLocalMarketTradeDate$inboundSchema;
    /** @deprecated use `CompleteTradeResponseLocalMarketTradeDate$outboundSchema` instead. */
    CompleteTradeResponseLocalMarketTradeDate$.outboundSchema = exports.CompleteTradeResponseLocalMarketTradeDate$outboundSchema;
})(CompleteTradeResponseLocalMarketTradeDate$ || (exports.CompleteTradeResponseLocalMarketTradeDate$ = CompleteTradeResponseLocalMarketTradeDate$ = {}));
/** @internal */
exports.CompleteTradeResponseRouteType$inboundSchema = z
    .union([
    z.nativeEnum(CompleteTradeResponseRouteType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompleteTradeResponseRouteType$outboundSchema = z.union([
    z.nativeEnum(CompleteTradeResponseRouteType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseRouteType$;
(function (CompleteTradeResponseRouteType$) {
    /** @deprecated use `CompleteTradeResponseRouteType$inboundSchema` instead. */
    CompleteTradeResponseRouteType$.inboundSchema = exports.CompleteTradeResponseRouteType$inboundSchema;
    /** @deprecated use `CompleteTradeResponseRouteType$outboundSchema` instead. */
    CompleteTradeResponseRouteType$.outboundSchema = exports.CompleteTradeResponseRouteType$outboundSchema;
})(CompleteTradeResponseRouteType$ || (exports.CompleteTradeResponseRouteType$ = CompleteTradeResponseRouteType$ = {}));
/** @internal */
exports.CompleteTradeResponseSettlementDate$inboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/** @internal */
exports.CompleteTradeResponseSettlementDate$outboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseSettlementDate$;
(function (CompleteTradeResponseSettlementDate$) {
    /** @deprecated use `CompleteTradeResponseSettlementDate$inboundSchema` instead. */
    CompleteTradeResponseSettlementDate$.inboundSchema = exports.CompleteTradeResponseSettlementDate$inboundSchema;
    /** @deprecated use `CompleteTradeResponseSettlementDate$outboundSchema` instead. */
    CompleteTradeResponseSettlementDate$.outboundSchema = exports.CompleteTradeResponseSettlementDate$outboundSchema;
})(CompleteTradeResponseSettlementDate$ || (exports.CompleteTradeResponseSettlementDate$ = CompleteTradeResponseSettlementDate$ = {}));
/** @internal */
exports.CompleteTradeResponseSide$inboundSchema = z
    .union([
    z.nativeEnum(CompleteTradeResponseSide),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompleteTradeResponseSide$outboundSchema = z.union([
    z.nativeEnum(CompleteTradeResponseSide),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseSide$;
(function (CompleteTradeResponseSide$) {
    /** @deprecated use `CompleteTradeResponseSide$inboundSchema` instead. */
    CompleteTradeResponseSide$.inboundSchema = exports.CompleteTradeResponseSide$inboundSchema;
    /** @deprecated use `CompleteTradeResponseSide$outboundSchema` instead. */
    CompleteTradeResponseSide$.outboundSchema = exports.CompleteTradeResponseSide$outboundSchema;
})(CompleteTradeResponseSide$ || (exports.CompleteTradeResponseSide$ = CompleteTradeResponseSide$ = {}));
/** @internal */
exports.CompleteTradeResponseSideModifier$inboundSchema = z
    .union([
    z.nativeEnum(CompleteTradeResponseSideModifier),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompleteTradeResponseSideModifier$outboundSchema = z.union([
    z.nativeEnum(CompleteTradeResponseSideModifier),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseSideModifier$;
(function (CompleteTradeResponseSideModifier$) {
    /** @deprecated use `CompleteTradeResponseSideModifier$inboundSchema` instead. */
    CompleteTradeResponseSideModifier$.inboundSchema = exports.CompleteTradeResponseSideModifier$inboundSchema;
    /** @deprecated use `CompleteTradeResponseSideModifier$outboundSchema` instead. */
    CompleteTradeResponseSideModifier$.outboundSchema = exports.CompleteTradeResponseSideModifier$outboundSchema;
})(CompleteTradeResponseSideModifier$ || (exports.CompleteTradeResponseSideModifier$ = CompleteTradeResponseSideModifier$ = {}));
/** @internal */
exports.CompleteTradeResponseSpecialInstructions$inboundSchema = z
    .union([
    z.nativeEnum(CompleteTradeResponseSpecialInstructions),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompleteTradeResponseSpecialInstructions$outboundSchema = z.union([
    z.nativeEnum(CompleteTradeResponseSpecialInstructions),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseSpecialInstructions$;
(function (CompleteTradeResponseSpecialInstructions$) {
    /** @deprecated use `CompleteTradeResponseSpecialInstructions$inboundSchema` instead. */
    CompleteTradeResponseSpecialInstructions$.inboundSchema = exports.CompleteTradeResponseSpecialInstructions$inboundSchema;
    /** @deprecated use `CompleteTradeResponseSpecialInstructions$outboundSchema` instead. */
    CompleteTradeResponseSpecialInstructions$.outboundSchema = exports.CompleteTradeResponseSpecialInstructions$outboundSchema;
})(CompleteTradeResponseSpecialInstructions$ || (exports.CompleteTradeResponseSpecialInstructions$ = CompleteTradeResponseSpecialInstructions$ = {}));
/** @internal */
exports.CompleteTradeResponseVenue$inboundSchema = z
    .union([
    z.nativeEnum(CompleteTradeResponseVenue),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompleteTradeResponseVenue$outboundSchema = z.union([
    z.nativeEnum(CompleteTradeResponseVenue),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseVenue$;
(function (CompleteTradeResponseVenue$) {
    /** @deprecated use `CompleteTradeResponseVenue$inboundSchema` instead. */
    CompleteTradeResponseVenue$.inboundSchema = exports.CompleteTradeResponseVenue$inboundSchema;
    /** @deprecated use `CompleteTradeResponseVenue$outboundSchema` instead. */
    CompleteTradeResponseVenue$.outboundSchema = exports.CompleteTradeResponseVenue$outboundSchema;
})(CompleteTradeResponseVenue$ || (exports.CompleteTradeResponseVenue$ = CompleteTradeResponseVenue$ = {}));
/** @internal */
exports.CompleteTradeResponseWhenIssued$inboundSchema = z
    .union([
    z.nativeEnum(CompleteTradeResponseWhenIssued),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompleteTradeResponseWhenIssued$outboundSchema = z.union([
    z.nativeEnum(CompleteTradeResponseWhenIssued),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponseWhenIssued$;
(function (CompleteTradeResponseWhenIssued$) {
    /** @deprecated use `CompleteTradeResponseWhenIssued$inboundSchema` instead. */
    CompleteTradeResponseWhenIssued$.inboundSchema = exports.CompleteTradeResponseWhenIssued$inboundSchema;
    /** @deprecated use `CompleteTradeResponseWhenIssued$outboundSchema` instead. */
    CompleteTradeResponseWhenIssued$.outboundSchema = exports.CompleteTradeResponseWhenIssued$outboundSchema;
})(CompleteTradeResponseWhenIssued$ || (exports.CompleteTradeResponseWhenIssued$ = CompleteTradeResponseWhenIssued$ = {}));
/** @internal */
exports.Trade$inboundSchema = z
    .object({
    account_id: z.string().optional(),
    activity_id: z.string().optional(),
    additional_instructions: z.string().optional(),
    alternate_order_id: z.string().optional(),
    asset_type: exports.CompleteTradeResponseAssetType$inboundSchema.optional(),
    broker_capacity: exports.CompleteTradeResponseBrokerCapacity$inboundSchema
        .optional(),
    client_order_id: z.string().optional(),
    executing_broker: z.string().optional(),
    executions: z.array(execution_js_1.Execution$inboundSchema).optional(),
    fees: z.array(bookingfee_js_1.BookingFee$inboundSchema).optional(),
    identifier: z.string().optional(),
    identifier_type: exports.CompleteTradeResponseIdentifierType$inboundSchema
        .optional(),
    issuing_region_code: z.string().optional(),
    local_market_trade_date: z.nullable(z.lazy(() => exports.CompleteTradeResponseLocalMarketTradeDate$inboundSchema)).optional(),
    lot_matching_instructions: z.array(bookinglot_js_1.BookingLot$inboundSchema).optional(),
    mic_code: z.string().optional(),
    name: z.string().optional(),
    open: z.boolean().optional(),
    order_id: z.string().optional(),
    route_type: exports.CompleteTradeResponseRouteType$inboundSchema.optional(),
    settlement_date: z.nullable(z.lazy(() => exports.CompleteTradeResponseSettlementDate$inboundSchema)).optional(),
    side: exports.CompleteTradeResponseSide$inboundSchema.optional(),
    side_modifier: exports.CompleteTradeResponseSideModifier$inboundSchema.optional(),
    source_application: z.string().optional(),
    special_instructions: z.array(exports.CompleteTradeResponseSpecialInstructions$inboundSchema).optional(),
    trade_id: z.string().optional(),
    venue: exports.CompleteTradeResponseVenue$inboundSchema.optional(),
    when_issued: exports.CompleteTradeResponseWhenIssued$inboundSchema.optional(),
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
exports.Trade$outboundSchema = z.object({
    accountId: z.string().optional(),
    activityId: z.string().optional(),
    additionalInstructions: z.string().optional(),
    alternateOrderId: z.string().optional(),
    assetType: exports.CompleteTradeResponseAssetType$outboundSchema.optional(),
    brokerCapacity: exports.CompleteTradeResponseBrokerCapacity$outboundSchema.optional(),
    clientOrderId: z.string().optional(),
    executingBroker: z.string().optional(),
    executions: z.array(execution_js_1.Execution$outboundSchema).optional(),
    fees: z.array(bookingfee_js_1.BookingFee$outboundSchema).optional(),
    identifier: z.string().optional(),
    identifierType: exports.CompleteTradeResponseIdentifierType$outboundSchema.optional(),
    issuingRegionCode: z.string().optional(),
    localMarketTradeDate: z.nullable(z.lazy(() => exports.CompleteTradeResponseLocalMarketTradeDate$outboundSchema)).optional(),
    lotMatchingInstructions: z.array(bookinglot_js_1.BookingLot$outboundSchema).optional(),
    micCode: z.string().optional(),
    name: z.string().optional(),
    open: z.boolean().optional(),
    orderId: z.string().optional(),
    routeType: exports.CompleteTradeResponseRouteType$outboundSchema.optional(),
    settlementDate: z.nullable(z.lazy(() => exports.CompleteTradeResponseSettlementDate$outboundSchema)).optional(),
    side: exports.CompleteTradeResponseSide$outboundSchema.optional(),
    sideModifier: exports.CompleteTradeResponseSideModifier$outboundSchema.optional(),
    sourceApplication: z.string().optional(),
    specialInstructions: z.array(exports.CompleteTradeResponseSpecialInstructions$outboundSchema).optional(),
    tradeId: z.string().optional(),
    venue: exports.CompleteTradeResponseVenue$outboundSchema.optional(),
    whenIssued: exports.CompleteTradeResponseWhenIssued$outboundSchema.optional(),
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
var Trade$;
(function (Trade$) {
    /** @deprecated use `Trade$inboundSchema` instead. */
    Trade$.inboundSchema = exports.Trade$inboundSchema;
    /** @deprecated use `Trade$outboundSchema` instead. */
    Trade$.outboundSchema = exports.Trade$outboundSchema;
})(Trade$ || (exports.Trade$ = Trade$ = {}));
/** @internal */
exports.CompleteTradeResponse$inboundSchema = z.object({
    trade: z.nullable(z.lazy(() => exports.Trade$inboundSchema)).optional(),
});
/** @internal */
exports.CompleteTradeResponse$outboundSchema = z.object({
    trade: z.nullable(z.lazy(() => exports.Trade$outboundSchema)).optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompleteTradeResponse$;
(function (CompleteTradeResponse$) {
    /** @deprecated use `CompleteTradeResponse$inboundSchema` instead. */
    CompleteTradeResponse$.inboundSchema = exports.CompleteTradeResponse$inboundSchema;
    /** @deprecated use `CompleteTradeResponse$outboundSchema` instead. */
    CompleteTradeResponse$.outboundSchema = exports.CompleteTradeResponse$outboundSchema;
})(CompleteTradeResponse$ || (exports.CompleteTradeResponse$ = CompleteTradeResponse$ = {}));
//# sourceMappingURL=completetraderesponse.js.map