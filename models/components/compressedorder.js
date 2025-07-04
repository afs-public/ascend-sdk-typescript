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
exports.CompressedOrder$ = exports.CompressedOrder$outboundSchema = exports.CompressedOrder$inboundSchema = exports.CompressedOrderTimeInForce$ = exports.CompressedOrderTimeInForce$outboundSchema = exports.CompressedOrderTimeInForce$inboundSchema = exports.CompressedOrderSpecialReportingInstructions$ = exports.CompressedOrderSpecialReportingInstructions$outboundSchema = exports.CompressedOrderSpecialReportingInstructions$inboundSchema = exports.CompressedOrderSide$ = exports.CompressedOrderSide$outboundSchema = exports.CompressedOrderSide$inboundSchema = exports.CompressedOrderQuantity$ = exports.CompressedOrderQuantity$outboundSchema = exports.CompressedOrderQuantity$inboundSchema = exports.CompressedOrderOrderType$ = exports.CompressedOrderOrderType$outboundSchema = exports.CompressedOrderOrderType$inboundSchema = exports.CompressedOrderOrderStatus$ = exports.CompressedOrderOrderStatus$outboundSchema = exports.CompressedOrderOrderStatus$inboundSchema = exports.CompressedOrderOrderRejectedReason$ = exports.CompressedOrderOrderRejectedReason$outboundSchema = exports.CompressedOrderOrderRejectedReason$inboundSchema = exports.CompressedOrderNotionalValue$ = exports.CompressedOrderNotionalValue$outboundSchema = exports.CompressedOrderNotionalValue$inboundSchema = exports.CompressedOrderIdentifierType$ = exports.CompressedOrderIdentifierType$outboundSchema = exports.CompressedOrderIdentifierType$inboundSchema = exports.CompressedOrderFilledQuantity$ = exports.CompressedOrderFilledQuantity$outboundSchema = exports.CompressedOrderFilledQuantity$inboundSchema = exports.CompressedOrderCumulativeNotionalValue$ = exports.CompressedOrderCumulativeNotionalValue$outboundSchema = exports.CompressedOrderCumulativeNotionalValue$inboundSchema = exports.CompressedOrderAssetType$ = exports.CompressedOrderAssetType$outboundSchema = exports.CompressedOrderAssetType$inboundSchema = exports.CompressedOrderTimeInForce = exports.CompressedOrderSpecialReportingInstructions = exports.CompressedOrderSide = exports.CompressedOrderOrderType = exports.CompressedOrderOrderStatus = exports.CompressedOrderOrderRejectedReason = exports.CompressedOrderIdentifierType = exports.CompressedOrderAssetType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const baskettradingexecutedprice_js_1 = require("./baskettradingexecutedprice.js");
const baskettradingexecutions_js_1 = require("./baskettradingexecutions.js");
/**
 * The type of the asset in this order
 */
var CompressedOrderAssetType;
(function (CompressedOrderAssetType) {
    CompressedOrderAssetType["AssetTypeUnspecified"] = "ASSET_TYPE_UNSPECIFIED";
    CompressedOrderAssetType["Equity"] = "EQUITY";
    CompressedOrderAssetType["MutualFund"] = "MUTUAL_FUND";
})(CompressedOrderAssetType || (exports.CompressedOrderAssetType = CompressedOrderAssetType = {}));
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported
 */
var CompressedOrderIdentifierType;
(function (CompressedOrderIdentifierType) {
    CompressedOrderIdentifierType["Symbol"] = "SYMBOL";
    CompressedOrderIdentifierType["Cusip"] = "CUSIP";
    CompressedOrderIdentifierType["Isin"] = "ISIN";
})(CompressedOrderIdentifierType || (exports.CompressedOrderIdentifierType = CompressedOrderIdentifierType = {}));
/**
 * When an order has the REJECTED status, this will be populated with a system code describing the rejection.
 */
var CompressedOrderOrderRejectedReason;
(function (CompressedOrderOrderRejectedReason) {
    CompressedOrderOrderRejectedReason["OrderRejectReasonUnspecified"] = "ORDER_REJECT_REASON_UNSPECIFIED";
    CompressedOrderOrderRejectedReason["BrokerOption"] = "BROKER_OPTION";
    CompressedOrderOrderRejectedReason["UnknownSecurity"] = "UNKNOWN_SECURITY";
    CompressedOrderOrderRejectedReason["ExchangeClosed"] = "EXCHANGE_CLOSED";
    CompressedOrderOrderRejectedReason["TooLateToEnter"] = "TOO_LATE_TO_ENTER";
    CompressedOrderOrderRejectedReason["UnknownOrder"] = "UNKNOWN_ORDER";
    CompressedOrderOrderRejectedReason["DuplicateOrder"] = "DUPLICATE_ORDER";
    CompressedOrderOrderRejectedReason["StaleOrder"] = "STALE_ORDER";
    CompressedOrderOrderRejectedReason["BelowNotionalMinimum"] = "BELOW_NOTIONAL_MINIMUM";
    CompressedOrderOrderRejectedReason["AccountNotEntitled"] = "ACCOUNT_NOT_ENTITLED";
    CompressedOrderOrderRejectedReason["SystemError"] = "SYSTEM_ERROR";
    CompressedOrderOrderRejectedReason["BlockingCorporateAction"] = "BLOCKING_CORPORATE_ACTION";
    CompressedOrderOrderRejectedReason["UnavailablePriceQuote"] = "UNAVAILABLE_PRICE_QUOTE";
    CompressedOrderOrderRejectedReason["ExecutionMisconfiguredClient"] = "EXECUTION_MISCONFIGURED_CLIENT";
    CompressedOrderOrderRejectedReason["FractionalQuantityNotAllowedForSecurity"] = "FRACTIONAL_QUANTITY_NOT_ALLOWED_FOR_SECURITY";
    CompressedOrderOrderRejectedReason["OnlyFractionalSellOrWholeOrdersAllowedForSecurity"] = "ONLY_FRACTIONAL_SELL_OR_WHOLE_ORDERS_ALLOWED_FOR_SECURITY";
    CompressedOrderOrderRejectedReason["SymbolNotTradeable"] = "SYMBOL_NOT_TRADEABLE";
    CompressedOrderOrderRejectedReason["AboveNotionalMaximum"] = "ABOVE_NOTIONAL_MAXIMUM";
    CompressedOrderOrderRejectedReason["AboveShareMaximum"] = "ABOVE_SHARE_MAXIMUM";
    CompressedOrderOrderRejectedReason["MaxSellQuantityRequired"] = "MAX_SELL_QUANTITY_REQUIRED";
    CompressedOrderOrderRejectedReason["MaxSellQuantityProhibited"] = "MAX_SELL_QUANTITY_PROHIBITED";
    CompressedOrderOrderRejectedReason["StockTradesDisabled"] = "STOCK_TRADES_DISABLED";
    CompressedOrderOrderRejectedReason["AssetNotSetUpToTrade"] = "ASSET_NOT_SET_UP_TO_TRADE";
    CompressedOrderOrderRejectedReason["AnotherBasketOrderForAccountHasFailedRiskChecks"] = "ANOTHER_BASKET_ORDER_FOR_ACCOUNT_HAS_FAILED_RISK_CHECKS";
    CompressedOrderOrderRejectedReason["InsufficientPosition"] = "INSUFFICIENT_POSITION";
    CompressedOrderOrderRejectedReason["FailedBuyingPower"] = "FAILED_BUYING_POWER";
})(CompressedOrderOrderRejectedReason || (exports.CompressedOrderOrderRejectedReason = CompressedOrderOrderRejectedReason = {}));
/**
 * The processing status of the order
 */
var CompressedOrderOrderStatus;
(function (CompressedOrderOrderStatus) {
    CompressedOrderOrderStatus["OrderStatusUnspecified"] = "ORDER_STATUS_UNSPECIFIED";
    CompressedOrderOrderStatus["PendingNew"] = "PENDING_NEW";
    CompressedOrderOrderStatus["New"] = "NEW";
    CompressedOrderOrderStatus["PartiallyFilled"] = "PARTIALLY_FILLED";
    CompressedOrderOrderStatus["Filled"] = "FILLED";
    CompressedOrderOrderStatus["Rejected"] = "REJECTED";
})(CompressedOrderOrderStatus || (exports.CompressedOrderOrderStatus = CompressedOrderOrderStatus = {}));
/**
 * The execution type of this order. Only MARKET is supported.
 */
var CompressedOrderOrderType;
(function (CompressedOrderOrderType) {
    CompressedOrderOrderType["OrderTypeUnspecified"] = "ORDER_TYPE_UNSPECIFIED";
    CompressedOrderOrderType["Market"] = "MARKET";
})(CompressedOrderOrderType || (exports.CompressedOrderOrderType = CompressedOrderOrderType = {}));
/**
 * The side of this order.
 */
var CompressedOrderSide;
(function (CompressedOrderSide) {
    CompressedOrderSide["SideUnspecified"] = "SIDE_UNSPECIFIED";
    CompressedOrderSide["Buy"] = "BUY";
    CompressedOrderSide["Sell"] = "SELL";
})(CompressedOrderSide || (exports.CompressedOrderSide = CompressedOrderSide = {}));
var CompressedOrderSpecialReportingInstructions;
(function (CompressedOrderSpecialReportingInstructions) {
    CompressedOrderSpecialReportingInstructions["SpecialReportingInstructionsUnspecified"] = "SPECIAL_REPORTING_INSTRUCTIONS_UNSPECIFIED";
    CompressedOrderSpecialReportingInstructions["Solicited"] = "SOLICITED";
    CompressedOrderSpecialReportingInstructions["Unsolicited"] = "UNSOLICITED";
    CompressedOrderSpecialReportingInstructions["RoundUp"] = "ROUND_UP";
})(CompressedOrderSpecialReportingInstructions || (exports.CompressedOrderSpecialReportingInstructions = CompressedOrderSpecialReportingInstructions = {}));
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
var CompressedOrderTimeInForce;
(function (CompressedOrderTimeInForce) {
    CompressedOrderTimeInForce["TimeInForceUnspecified"] = "TIME_IN_FORCE_UNSPECIFIED";
    CompressedOrderTimeInForce["Day"] = "DAY";
})(CompressedOrderTimeInForce || (exports.CompressedOrderTimeInForce = CompressedOrderTimeInForce = {}));
/** @internal */
exports.CompressedOrderAssetType$inboundSchema = z
    .union([
    z.nativeEnum(CompressedOrderAssetType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompressedOrderAssetType$outboundSchema = z.union([
    z.nativeEnum(CompressedOrderAssetType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderAssetType$;
(function (CompressedOrderAssetType$) {
    /** @deprecated use `CompressedOrderAssetType$inboundSchema` instead. */
    CompressedOrderAssetType$.inboundSchema = exports.CompressedOrderAssetType$inboundSchema;
    /** @deprecated use `CompressedOrderAssetType$outboundSchema` instead. */
    CompressedOrderAssetType$.outboundSchema = exports.CompressedOrderAssetType$outboundSchema;
})(CompressedOrderAssetType$ || (exports.CompressedOrderAssetType$ = CompressedOrderAssetType$ = {}));
/** @internal */
exports.CompressedOrderCumulativeNotionalValue$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.CompressedOrderCumulativeNotionalValue$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderCumulativeNotionalValue$;
(function (CompressedOrderCumulativeNotionalValue$) {
    /** @deprecated use `CompressedOrderCumulativeNotionalValue$inboundSchema` instead. */
    CompressedOrderCumulativeNotionalValue$.inboundSchema = exports.CompressedOrderCumulativeNotionalValue$inboundSchema;
    /** @deprecated use `CompressedOrderCumulativeNotionalValue$outboundSchema` instead. */
    CompressedOrderCumulativeNotionalValue$.outboundSchema = exports.CompressedOrderCumulativeNotionalValue$outboundSchema;
})(CompressedOrderCumulativeNotionalValue$ || (exports.CompressedOrderCumulativeNotionalValue$ = CompressedOrderCumulativeNotionalValue$ = {}));
/** @internal */
exports.CompressedOrderFilledQuantity$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.CompressedOrderFilledQuantity$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderFilledQuantity$;
(function (CompressedOrderFilledQuantity$) {
    /** @deprecated use `CompressedOrderFilledQuantity$inboundSchema` instead. */
    CompressedOrderFilledQuantity$.inboundSchema = exports.CompressedOrderFilledQuantity$inboundSchema;
    /** @deprecated use `CompressedOrderFilledQuantity$outboundSchema` instead. */
    CompressedOrderFilledQuantity$.outboundSchema = exports.CompressedOrderFilledQuantity$outboundSchema;
})(CompressedOrderFilledQuantity$ || (exports.CompressedOrderFilledQuantity$ = CompressedOrderFilledQuantity$ = {}));
/** @internal */
exports.CompressedOrderIdentifierType$inboundSchema = z
    .union([
    z.nativeEnum(CompressedOrderIdentifierType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompressedOrderIdentifierType$outboundSchema = z.union([
    z.nativeEnum(CompressedOrderIdentifierType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderIdentifierType$;
(function (CompressedOrderIdentifierType$) {
    /** @deprecated use `CompressedOrderIdentifierType$inboundSchema` instead. */
    CompressedOrderIdentifierType$.inboundSchema = exports.CompressedOrderIdentifierType$inboundSchema;
    /** @deprecated use `CompressedOrderIdentifierType$outboundSchema` instead. */
    CompressedOrderIdentifierType$.outboundSchema = exports.CompressedOrderIdentifierType$outboundSchema;
})(CompressedOrderIdentifierType$ || (exports.CompressedOrderIdentifierType$ = CompressedOrderIdentifierType$ = {}));
/** @internal */
exports.CompressedOrderNotionalValue$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.CompressedOrderNotionalValue$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderNotionalValue$;
(function (CompressedOrderNotionalValue$) {
    /** @deprecated use `CompressedOrderNotionalValue$inboundSchema` instead. */
    CompressedOrderNotionalValue$.inboundSchema = exports.CompressedOrderNotionalValue$inboundSchema;
    /** @deprecated use `CompressedOrderNotionalValue$outboundSchema` instead. */
    CompressedOrderNotionalValue$.outboundSchema = exports.CompressedOrderNotionalValue$outboundSchema;
})(CompressedOrderNotionalValue$ || (exports.CompressedOrderNotionalValue$ = CompressedOrderNotionalValue$ = {}));
/** @internal */
exports.CompressedOrderOrderRejectedReason$inboundSchema = z
    .union([
    z.nativeEnum(CompressedOrderOrderRejectedReason),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompressedOrderOrderRejectedReason$outboundSchema = z.union([
    z.nativeEnum(CompressedOrderOrderRejectedReason),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderOrderRejectedReason$;
(function (CompressedOrderOrderRejectedReason$) {
    /** @deprecated use `CompressedOrderOrderRejectedReason$inboundSchema` instead. */
    CompressedOrderOrderRejectedReason$.inboundSchema = exports.CompressedOrderOrderRejectedReason$inboundSchema;
    /** @deprecated use `CompressedOrderOrderRejectedReason$outboundSchema` instead. */
    CompressedOrderOrderRejectedReason$.outboundSchema = exports.CompressedOrderOrderRejectedReason$outboundSchema;
})(CompressedOrderOrderRejectedReason$ || (exports.CompressedOrderOrderRejectedReason$ = CompressedOrderOrderRejectedReason$ = {}));
/** @internal */
exports.CompressedOrderOrderStatus$inboundSchema = z
    .union([
    z.nativeEnum(CompressedOrderOrderStatus),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompressedOrderOrderStatus$outboundSchema = z.union([
    z.nativeEnum(CompressedOrderOrderStatus),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderOrderStatus$;
(function (CompressedOrderOrderStatus$) {
    /** @deprecated use `CompressedOrderOrderStatus$inboundSchema` instead. */
    CompressedOrderOrderStatus$.inboundSchema = exports.CompressedOrderOrderStatus$inboundSchema;
    /** @deprecated use `CompressedOrderOrderStatus$outboundSchema` instead. */
    CompressedOrderOrderStatus$.outboundSchema = exports.CompressedOrderOrderStatus$outboundSchema;
})(CompressedOrderOrderStatus$ || (exports.CompressedOrderOrderStatus$ = CompressedOrderOrderStatus$ = {}));
/** @internal */
exports.CompressedOrderOrderType$inboundSchema = z
    .union([
    z.nativeEnum(CompressedOrderOrderType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompressedOrderOrderType$outboundSchema = z.union([
    z.nativeEnum(CompressedOrderOrderType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderOrderType$;
(function (CompressedOrderOrderType$) {
    /** @deprecated use `CompressedOrderOrderType$inboundSchema` instead. */
    CompressedOrderOrderType$.inboundSchema = exports.CompressedOrderOrderType$inboundSchema;
    /** @deprecated use `CompressedOrderOrderType$outboundSchema` instead. */
    CompressedOrderOrderType$.outboundSchema = exports.CompressedOrderOrderType$outboundSchema;
})(CompressedOrderOrderType$ || (exports.CompressedOrderOrderType$ = CompressedOrderOrderType$ = {}));
/** @internal */
exports.CompressedOrderQuantity$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.CompressedOrderQuantity$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderQuantity$;
(function (CompressedOrderQuantity$) {
    /** @deprecated use `CompressedOrderQuantity$inboundSchema` instead. */
    CompressedOrderQuantity$.inboundSchema = exports.CompressedOrderQuantity$inboundSchema;
    /** @deprecated use `CompressedOrderQuantity$outboundSchema` instead. */
    CompressedOrderQuantity$.outboundSchema = exports.CompressedOrderQuantity$outboundSchema;
})(CompressedOrderQuantity$ || (exports.CompressedOrderQuantity$ = CompressedOrderQuantity$ = {}));
/** @internal */
exports.CompressedOrderSide$inboundSchema = z
    .union([
    z.nativeEnum(CompressedOrderSide),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompressedOrderSide$outboundSchema = z.union([
    z.nativeEnum(CompressedOrderSide),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderSide$;
(function (CompressedOrderSide$) {
    /** @deprecated use `CompressedOrderSide$inboundSchema` instead. */
    CompressedOrderSide$.inboundSchema = exports.CompressedOrderSide$inboundSchema;
    /** @deprecated use `CompressedOrderSide$outboundSchema` instead. */
    CompressedOrderSide$.outboundSchema = exports.CompressedOrderSide$outboundSchema;
})(CompressedOrderSide$ || (exports.CompressedOrderSide$ = CompressedOrderSide$ = {}));
/** @internal */
exports.CompressedOrderSpecialReportingInstructions$inboundSchema = z
    .union([
    z.nativeEnum(CompressedOrderSpecialReportingInstructions),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompressedOrderSpecialReportingInstructions$outboundSchema = z.union([
    z.nativeEnum(CompressedOrderSpecialReportingInstructions),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderSpecialReportingInstructions$;
(function (CompressedOrderSpecialReportingInstructions$) {
    /** @deprecated use `CompressedOrderSpecialReportingInstructions$inboundSchema` instead. */
    CompressedOrderSpecialReportingInstructions$.inboundSchema = exports.CompressedOrderSpecialReportingInstructions$inboundSchema;
    /** @deprecated use `CompressedOrderSpecialReportingInstructions$outboundSchema` instead. */
    CompressedOrderSpecialReportingInstructions$.outboundSchema = exports.CompressedOrderSpecialReportingInstructions$outboundSchema;
})(CompressedOrderSpecialReportingInstructions$ || (exports.CompressedOrderSpecialReportingInstructions$ = CompressedOrderSpecialReportingInstructions$ = {}));
/** @internal */
exports.CompressedOrderTimeInForce$inboundSchema = z
    .union([
    z.nativeEnum(CompressedOrderTimeInForce),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.CompressedOrderTimeInForce$outboundSchema = z.union([
    z.nativeEnum(CompressedOrderTimeInForce),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrderTimeInForce$;
(function (CompressedOrderTimeInForce$) {
    /** @deprecated use `CompressedOrderTimeInForce$inboundSchema` instead. */
    CompressedOrderTimeInForce$.inboundSchema = exports.CompressedOrderTimeInForce$inboundSchema;
    /** @deprecated use `CompressedOrderTimeInForce$outboundSchema` instead. */
    CompressedOrderTimeInForce$.outboundSchema = exports.CompressedOrderTimeInForce$outboundSchema;
})(CompressedOrderTimeInForce$ || (exports.CompressedOrderTimeInForce$ = CompressedOrderTimeInForce$ = {}));
/** @internal */
exports.CompressedOrder$inboundSchema = z.object({
    asset_id: z.string().optional(),
    asset_type: exports.CompressedOrderAssetType$inboundSchema.optional(),
    average_price_account_id: z.string().optional(),
    average_prices: z.array(baskettradingexecutedprice_js_1.BasketTradingExecutedPrice$inboundSchema).optional(),
    compressed_order_id: z.string().optional(),
    create_time: z.nullable(z.string().datetime({ offset: true }).transform(v => new Date(v))).optional(),
    cumulative_notional_value: z.nullable(z.lazy(() => exports.CompressedOrderCumulativeNotionalValue$inboundSchema)).optional(),
    currency_code: z.string().optional(),
    executions: z.array(baskettradingexecutions_js_1.BasketTradingExecutions$inboundSchema).optional(),
    filled_quantity: z.nullable(z.lazy(() => exports.CompressedOrderFilledQuantity$inboundSchema)).optional(),
    identifier: z.string().optional(),
    identifier_type: exports.CompressedOrderIdentifierType$inboundSchema.optional(),
    last_update_time: z.nullable(z.string().datetime({ offset: true }).transform(v => new Date(v))).optional(),
    name: z.string().optional(),
    notional_value: z.nullable(z.lazy(() => exports.CompressedOrderNotionalValue$inboundSchema)).optional(),
    order_rejected_reason: exports.CompressedOrderOrderRejectedReason$inboundSchema
        .optional(),
    order_status: exports.CompressedOrderOrderStatus$inboundSchema.optional(),
    order_type: exports.CompressedOrderOrderType$inboundSchema.optional(),
    quantity: z.nullable(z.lazy(() => exports.CompressedOrderQuantity$inboundSchema))
        .optional(),
    side: exports.CompressedOrderSide$inboundSchema.optional(),
    special_reporting_instructions: z.array(exports.CompressedOrderSpecialReportingInstructions$inboundSchema).optional(),
    time_in_force: exports.CompressedOrderTimeInForce$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "asset_id": "assetId",
        "asset_type": "assetType",
        "average_price_account_id": "averagePriceAccountId",
        "average_prices": "averagePrices",
        "compressed_order_id": "compressedOrderId",
        "create_time": "createTime",
        "cumulative_notional_value": "cumulativeNotionalValue",
        "currency_code": "currencyCode",
        "filled_quantity": "filledQuantity",
        "identifier_type": "identifierType",
        "last_update_time": "lastUpdateTime",
        "notional_value": "notionalValue",
        "order_rejected_reason": "orderRejectedReason",
        "order_status": "orderStatus",
        "order_type": "orderType",
        "special_reporting_instructions": "specialReportingInstructions",
        "time_in_force": "timeInForce",
    });
});
/** @internal */
exports.CompressedOrder$outboundSchema = z.object({
    assetId: z.string().optional(),
    assetType: exports.CompressedOrderAssetType$outboundSchema.optional(),
    averagePriceAccountId: z.string().optional(),
    averagePrices: z.array(baskettradingexecutedprice_js_1.BasketTradingExecutedPrice$outboundSchema).optional(),
    compressedOrderId: z.string().optional(),
    createTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
    cumulativeNotionalValue: z.nullable(z.lazy(() => exports.CompressedOrderCumulativeNotionalValue$outboundSchema)).optional(),
    currencyCode: z.string().optional(),
    executions: z.array(baskettradingexecutions_js_1.BasketTradingExecutions$outboundSchema).optional(),
    filledQuantity: z.nullable(z.lazy(() => exports.CompressedOrderFilledQuantity$outboundSchema)).optional(),
    identifier: z.string().optional(),
    identifierType: exports.CompressedOrderIdentifierType$outboundSchema.optional(),
    lastUpdateTime: z.nullable(z.date().transform(v => v.toISOString()))
        .optional(),
    name: z.string().optional(),
    notionalValue: z.nullable(z.lazy(() => exports.CompressedOrderNotionalValue$outboundSchema)).optional(),
    orderRejectedReason: exports.CompressedOrderOrderRejectedReason$outboundSchema
        .optional(),
    orderStatus: exports.CompressedOrderOrderStatus$outboundSchema.optional(),
    orderType: exports.CompressedOrderOrderType$outboundSchema.optional(),
    quantity: z.nullable(z.lazy(() => exports.CompressedOrderQuantity$outboundSchema))
        .optional(),
    side: exports.CompressedOrderSide$outboundSchema.optional(),
    specialReportingInstructions: z.array(exports.CompressedOrderSpecialReportingInstructions$outboundSchema).optional(),
    timeInForce: exports.CompressedOrderTimeInForce$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        assetId: "asset_id",
        assetType: "asset_type",
        averagePriceAccountId: "average_price_account_id",
        averagePrices: "average_prices",
        compressedOrderId: "compressed_order_id",
        createTime: "create_time",
        cumulativeNotionalValue: "cumulative_notional_value",
        currencyCode: "currency_code",
        filledQuantity: "filled_quantity",
        identifierType: "identifier_type",
        lastUpdateTime: "last_update_time",
        notionalValue: "notional_value",
        orderRejectedReason: "order_rejected_reason",
        orderStatus: "order_status",
        orderType: "order_type",
        specialReportingInstructions: "special_reporting_instructions",
        timeInForce: "time_in_force",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CompressedOrder$;
(function (CompressedOrder$) {
    /** @deprecated use `CompressedOrder$inboundSchema` instead. */
    CompressedOrder$.inboundSchema = exports.CompressedOrder$inboundSchema;
    /** @deprecated use `CompressedOrder$outboundSchema` instead. */
    CompressedOrder$.outboundSchema = exports.CompressedOrder$outboundSchema;
})(CompressedOrder$ || (exports.CompressedOrder$ = CompressedOrder$ = {}));
//# sourceMappingURL=compressedorder.js.map