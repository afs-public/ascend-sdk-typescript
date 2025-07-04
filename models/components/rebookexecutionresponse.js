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
exports.RebookExecutionResponse$ = exports.RebookExecutionResponse$outboundSchema = exports.RebookExecutionResponse$inboundSchema = exports.RebookExecutionResponseExecution$ = exports.RebookExecutionResponseExecution$outboundSchema = exports.RebookExecutionResponseExecution$inboundSchema = exports.RebookExecutionResponseState$ = exports.RebookExecutionResponseState$outboundSchema = exports.RebookExecutionResponseState$inboundSchema = exports.RebookExecutionResponseQuantity$ = exports.RebookExecutionResponseQuantity$outboundSchema = exports.RebookExecutionResponseQuantity$inboundSchema = exports.RebookExecutionResponsePriceAdjustment$ = exports.RebookExecutionResponsePriceAdjustment$outboundSchema = exports.RebookExecutionResponsePriceAdjustment$inboundSchema = exports.RebookExecutionResponsePriceAdjustmentType$ = exports.RebookExecutionResponsePriceAdjustmentType$outboundSchema = exports.RebookExecutionResponsePriceAdjustmentType$inboundSchema = exports.RebookExecutionResponsePriceAdjustmentAmount$ = exports.RebookExecutionResponsePriceAdjustmentAmount$outboundSchema = exports.RebookExecutionResponsePriceAdjustmentAmount$inboundSchema = exports.RebookExecutionResponsePrice$ = exports.RebookExecutionResponsePrice$outboundSchema = exports.RebookExecutionResponsePrice$inboundSchema = exports.RebookExecutionResponsePrevailingMarketPrice$ = exports.RebookExecutionResponsePrevailingMarketPrice$outboundSchema = exports.RebookExecutionResponsePrevailingMarketPrice$inboundSchema = exports.RebookExecutionResponseGrossAmount$ = exports.RebookExecutionResponseGrossAmount$outboundSchema = exports.RebookExecutionResponseGrossAmount$inboundSchema = exports.RebookExecutionResponseCommissionAmount$ = exports.RebookExecutionResponseCommissionAmount$outboundSchema = exports.RebookExecutionResponseCommissionAmount$inboundSchema = exports.RebookExecutionResponseAccruedInterestAmount$ = exports.RebookExecutionResponseAccruedInterestAmount$outboundSchema = exports.RebookExecutionResponseAccruedInterestAmount$inboundSchema = exports.RebookExecutionResponseState = exports.RebookExecutionResponsePriceAdjustmentType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const bondyield_js_1 = require("./bondyield.js");
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
var RebookExecutionResponsePriceAdjustmentType;
(function (RebookExecutionResponsePriceAdjustmentType) {
    RebookExecutionResponsePriceAdjustmentType["PriceAdjustmentTypeUnspecified"] = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED";
    RebookExecutionResponsePriceAdjustmentType["Markup"] = "MARKUP";
    RebookExecutionResponsePriceAdjustmentType["Markdown"] = "MARKDOWN";
    RebookExecutionResponsePriceAdjustmentType["GrossCredit"] = "GROSS_CREDIT";
})(RebookExecutionResponsePriceAdjustmentType || (exports.RebookExecutionResponsePriceAdjustmentType = RebookExecutionResponsePriceAdjustmentType = {}));
/**
 * The state that the trade is in.
 */
var RebookExecutionResponseState;
(function (RebookExecutionResponseState) {
    RebookExecutionResponseState["StateUnspecified"] = "STATE_UNSPECIFIED";
    RebookExecutionResponseState["Creating"] = "CREATING";
    RebookExecutionResponseState["Rebooking"] = "REBOOKING";
    RebookExecutionResponseState["Canceling"] = "CANCELING";
    RebookExecutionResponseState["Booked"] = "BOOKED";
    RebookExecutionResponseState["Rebooked"] = "REBOOKED";
    RebookExecutionResponseState["Canceled"] = "CANCELED";
    RebookExecutionResponseState["Failed"] = "FAILED";
})(RebookExecutionResponseState || (exports.RebookExecutionResponseState = RebookExecutionResponseState = {}));
/** @internal */
exports.RebookExecutionResponseAccruedInterestAmount$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.RebookExecutionResponseAccruedInterestAmount$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponseAccruedInterestAmount$;
(function (RebookExecutionResponseAccruedInterestAmount$) {
    /** @deprecated use `RebookExecutionResponseAccruedInterestAmount$inboundSchema` instead. */
    RebookExecutionResponseAccruedInterestAmount$.inboundSchema = exports.RebookExecutionResponseAccruedInterestAmount$inboundSchema;
    /** @deprecated use `RebookExecutionResponseAccruedInterestAmount$outboundSchema` instead. */
    RebookExecutionResponseAccruedInterestAmount$.outboundSchema = exports.RebookExecutionResponseAccruedInterestAmount$outboundSchema;
})(RebookExecutionResponseAccruedInterestAmount$ || (exports.RebookExecutionResponseAccruedInterestAmount$ = RebookExecutionResponseAccruedInterestAmount$ = {}));
/** @internal */
exports.RebookExecutionResponseCommissionAmount$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.RebookExecutionResponseCommissionAmount$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponseCommissionAmount$;
(function (RebookExecutionResponseCommissionAmount$) {
    /** @deprecated use `RebookExecutionResponseCommissionAmount$inboundSchema` instead. */
    RebookExecutionResponseCommissionAmount$.inboundSchema = exports.RebookExecutionResponseCommissionAmount$inboundSchema;
    /** @deprecated use `RebookExecutionResponseCommissionAmount$outboundSchema` instead. */
    RebookExecutionResponseCommissionAmount$.outboundSchema = exports.RebookExecutionResponseCommissionAmount$outboundSchema;
})(RebookExecutionResponseCommissionAmount$ || (exports.RebookExecutionResponseCommissionAmount$ = RebookExecutionResponseCommissionAmount$ = {}));
/** @internal */
exports.RebookExecutionResponseGrossAmount$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.RebookExecutionResponseGrossAmount$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponseGrossAmount$;
(function (RebookExecutionResponseGrossAmount$) {
    /** @deprecated use `RebookExecutionResponseGrossAmount$inboundSchema` instead. */
    RebookExecutionResponseGrossAmount$.inboundSchema = exports.RebookExecutionResponseGrossAmount$inboundSchema;
    /** @deprecated use `RebookExecutionResponseGrossAmount$outboundSchema` instead. */
    RebookExecutionResponseGrossAmount$.outboundSchema = exports.RebookExecutionResponseGrossAmount$outboundSchema;
})(RebookExecutionResponseGrossAmount$ || (exports.RebookExecutionResponseGrossAmount$ = RebookExecutionResponseGrossAmount$ = {}));
/** @internal */
exports.RebookExecutionResponsePrevailingMarketPrice$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.RebookExecutionResponsePrevailingMarketPrice$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponsePrevailingMarketPrice$;
(function (RebookExecutionResponsePrevailingMarketPrice$) {
    /** @deprecated use `RebookExecutionResponsePrevailingMarketPrice$inboundSchema` instead. */
    RebookExecutionResponsePrevailingMarketPrice$.inboundSchema = exports.RebookExecutionResponsePrevailingMarketPrice$inboundSchema;
    /** @deprecated use `RebookExecutionResponsePrevailingMarketPrice$outboundSchema` instead. */
    RebookExecutionResponsePrevailingMarketPrice$.outboundSchema = exports.RebookExecutionResponsePrevailingMarketPrice$outboundSchema;
})(RebookExecutionResponsePrevailingMarketPrice$ || (exports.RebookExecutionResponsePrevailingMarketPrice$ = RebookExecutionResponsePrevailingMarketPrice$ = {}));
/** @internal */
exports.RebookExecutionResponsePrice$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.RebookExecutionResponsePrice$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponsePrice$;
(function (RebookExecutionResponsePrice$) {
    /** @deprecated use `RebookExecutionResponsePrice$inboundSchema` instead. */
    RebookExecutionResponsePrice$.inboundSchema = exports.RebookExecutionResponsePrice$inboundSchema;
    /** @deprecated use `RebookExecutionResponsePrice$outboundSchema` instead. */
    RebookExecutionResponsePrice$.outboundSchema = exports.RebookExecutionResponsePrice$outboundSchema;
})(RebookExecutionResponsePrice$ || (exports.RebookExecutionResponsePrice$ = RebookExecutionResponsePrice$ = {}));
/** @internal */
exports.RebookExecutionResponsePriceAdjustmentAmount$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.RebookExecutionResponsePriceAdjustmentAmount$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponsePriceAdjustmentAmount$;
(function (RebookExecutionResponsePriceAdjustmentAmount$) {
    /** @deprecated use `RebookExecutionResponsePriceAdjustmentAmount$inboundSchema` instead. */
    RebookExecutionResponsePriceAdjustmentAmount$.inboundSchema = exports.RebookExecutionResponsePriceAdjustmentAmount$inboundSchema;
    /** @deprecated use `RebookExecutionResponsePriceAdjustmentAmount$outboundSchema` instead. */
    RebookExecutionResponsePriceAdjustmentAmount$.outboundSchema = exports.RebookExecutionResponsePriceAdjustmentAmount$outboundSchema;
})(RebookExecutionResponsePriceAdjustmentAmount$ || (exports.RebookExecutionResponsePriceAdjustmentAmount$ = RebookExecutionResponsePriceAdjustmentAmount$ = {}));
/** @internal */
exports.RebookExecutionResponsePriceAdjustmentType$inboundSchema = z
    .union([
    z.nativeEnum(RebookExecutionResponsePriceAdjustmentType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.RebookExecutionResponsePriceAdjustmentType$outboundSchema = z.union([
    z.nativeEnum(RebookExecutionResponsePriceAdjustmentType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponsePriceAdjustmentType$;
(function (RebookExecutionResponsePriceAdjustmentType$) {
    /** @deprecated use `RebookExecutionResponsePriceAdjustmentType$inboundSchema` instead. */
    RebookExecutionResponsePriceAdjustmentType$.inboundSchema = exports.RebookExecutionResponsePriceAdjustmentType$inboundSchema;
    /** @deprecated use `RebookExecutionResponsePriceAdjustmentType$outboundSchema` instead. */
    RebookExecutionResponsePriceAdjustmentType$.outboundSchema = exports.RebookExecutionResponsePriceAdjustmentType$outboundSchema;
})(RebookExecutionResponsePriceAdjustmentType$ || (exports.RebookExecutionResponsePriceAdjustmentType$ = RebookExecutionResponsePriceAdjustmentType$ = {}));
/** @internal */
exports.RebookExecutionResponsePriceAdjustment$inboundSchema = z.object({
    price_adjustment_amount: z.nullable(z.lazy(() => exports.RebookExecutionResponsePriceAdjustmentAmount$inboundSchema)).optional(),
    price_adjustment_type: exports.RebookExecutionResponsePriceAdjustmentType$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "price_adjustment_amount": "priceAdjustmentAmount",
        "price_adjustment_type": "priceAdjustmentType",
    });
});
/** @internal */
exports.RebookExecutionResponsePriceAdjustment$outboundSchema = z.object({
    priceAdjustmentAmount: z.nullable(z.lazy(() => exports.RebookExecutionResponsePriceAdjustmentAmount$outboundSchema)).optional(),
    priceAdjustmentType: exports.RebookExecutionResponsePriceAdjustmentType$outboundSchema
        .optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        priceAdjustmentAmount: "price_adjustment_amount",
        priceAdjustmentType: "price_adjustment_type",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponsePriceAdjustment$;
(function (RebookExecutionResponsePriceAdjustment$) {
    /** @deprecated use `RebookExecutionResponsePriceAdjustment$inboundSchema` instead. */
    RebookExecutionResponsePriceAdjustment$.inboundSchema = exports.RebookExecutionResponsePriceAdjustment$inboundSchema;
    /** @deprecated use `RebookExecutionResponsePriceAdjustment$outboundSchema` instead. */
    RebookExecutionResponsePriceAdjustment$.outboundSchema = exports.RebookExecutionResponsePriceAdjustment$outboundSchema;
})(RebookExecutionResponsePriceAdjustment$ || (exports.RebookExecutionResponsePriceAdjustment$ = RebookExecutionResponsePriceAdjustment$ = {}));
/** @internal */
exports.RebookExecutionResponseQuantity$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.RebookExecutionResponseQuantity$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponseQuantity$;
(function (RebookExecutionResponseQuantity$) {
    /** @deprecated use `RebookExecutionResponseQuantity$inboundSchema` instead. */
    RebookExecutionResponseQuantity$.inboundSchema = exports.RebookExecutionResponseQuantity$inboundSchema;
    /** @deprecated use `RebookExecutionResponseQuantity$outboundSchema` instead. */
    RebookExecutionResponseQuantity$.outboundSchema = exports.RebookExecutionResponseQuantity$outboundSchema;
})(RebookExecutionResponseQuantity$ || (exports.RebookExecutionResponseQuantity$ = RebookExecutionResponseQuantity$ = {}));
/** @internal */
exports.RebookExecutionResponseState$inboundSchema = z
    .union([
    z.nativeEnum(RebookExecutionResponseState),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.RebookExecutionResponseState$outboundSchema = z.union([
    z.nativeEnum(RebookExecutionResponseState),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponseState$;
(function (RebookExecutionResponseState$) {
    /** @deprecated use `RebookExecutionResponseState$inboundSchema` instead. */
    RebookExecutionResponseState$.inboundSchema = exports.RebookExecutionResponseState$inboundSchema;
    /** @deprecated use `RebookExecutionResponseState$outboundSchema` instead. */
    RebookExecutionResponseState$.outboundSchema = exports.RebookExecutionResponseState$outboundSchema;
})(RebookExecutionResponseState$ || (exports.RebookExecutionResponseState$ = RebookExecutionResponseState$ = {}));
/** @internal */
exports.RebookExecutionResponseExecution$inboundSchema = z.object({
    accrued_interest_amount: z.nullable(z.lazy(() => exports.RebookExecutionResponseAccruedInterestAmount$inboundSchema)).optional(),
    activity_id: z.string().optional(),
    bond_yield: z.array(bondyield_js_1.BondYield$inboundSchema).optional(),
    commission_amount: z.nullable(z.lazy(() => exports.RebookExecutionResponseCommissionAmount$inboundSchema)).optional(),
    execution_id: z.string().optional(),
    execution_time: z.nullable(z.string().datetime({ offset: true }).transform(v => new Date(v))).optional(),
    external_id: z.string().optional(),
    gross_amount: z.nullable(z.lazy(() => exports.RebookExecutionResponseGrossAmount$inboundSchema)).optional(),
    memo: z.string().optional(),
    name: z.string().optional(),
    prevailing_market_price: z.nullable(z.lazy(() => exports.RebookExecutionResponsePrevailingMarketPrice$inboundSchema)).optional(),
    price: z.nullable(z.lazy(() => exports.RebookExecutionResponsePrice$inboundSchema))
        .optional(),
    price_adjustment: z.nullable(z.lazy(() => exports.RebookExecutionResponsePriceAdjustment$inboundSchema)).optional(),
    quantity: z.nullable(z.lazy(() => exports.RebookExecutionResponseQuantity$inboundSchema)).optional(),
    state: exports.RebookExecutionResponseState$inboundSchema.optional(),
    street_execution_id: z.string().optional(),
    trade_id: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "accrued_interest_amount": "accruedInterestAmount",
        "activity_id": "activityId",
        "bond_yield": "bondYield",
        "commission_amount": "commissionAmount",
        "execution_id": "executionId",
        "execution_time": "executionTime",
        "external_id": "externalId",
        "gross_amount": "grossAmount",
        "prevailing_market_price": "prevailingMarketPrice",
        "price_adjustment": "priceAdjustment",
        "street_execution_id": "streetExecutionId",
        "trade_id": "tradeId",
    });
});
/** @internal */
exports.RebookExecutionResponseExecution$outboundSchema = z.object({
    accruedInterestAmount: z.nullable(z.lazy(() => exports.RebookExecutionResponseAccruedInterestAmount$outboundSchema)).optional(),
    activityId: z.string().optional(),
    bondYield: z.array(bondyield_js_1.BondYield$outboundSchema).optional(),
    commissionAmount: z.nullable(z.lazy(() => exports.RebookExecutionResponseCommissionAmount$outboundSchema)).optional(),
    executionId: z.string().optional(),
    executionTime: z.nullable(z.date().transform(v => v.toISOString()))
        .optional(),
    externalId: z.string().optional(),
    grossAmount: z.nullable(z.lazy(() => exports.RebookExecutionResponseGrossAmount$outboundSchema)).optional(),
    memo: z.string().optional(),
    name: z.string().optional(),
    prevailingMarketPrice: z.nullable(z.lazy(() => exports.RebookExecutionResponsePrevailingMarketPrice$outboundSchema)).optional(),
    price: z.nullable(z.lazy(() => exports.RebookExecutionResponsePrice$outboundSchema))
        .optional(),
    priceAdjustment: z.nullable(z.lazy(() => exports.RebookExecutionResponsePriceAdjustment$outboundSchema)).optional(),
    quantity: z.nullable(z.lazy(() => exports.RebookExecutionResponseQuantity$outboundSchema)).optional(),
    state: exports.RebookExecutionResponseState$outboundSchema.optional(),
    streetExecutionId: z.string().optional(),
    tradeId: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accruedInterestAmount: "accrued_interest_amount",
        activityId: "activity_id",
        bondYield: "bond_yield",
        commissionAmount: "commission_amount",
        executionId: "execution_id",
        executionTime: "execution_time",
        externalId: "external_id",
        grossAmount: "gross_amount",
        prevailingMarketPrice: "prevailing_market_price",
        priceAdjustment: "price_adjustment",
        streetExecutionId: "street_execution_id",
        tradeId: "trade_id",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponseExecution$;
(function (RebookExecutionResponseExecution$) {
    /** @deprecated use `RebookExecutionResponseExecution$inboundSchema` instead. */
    RebookExecutionResponseExecution$.inboundSchema = exports.RebookExecutionResponseExecution$inboundSchema;
    /** @deprecated use `RebookExecutionResponseExecution$outboundSchema` instead. */
    RebookExecutionResponseExecution$.outboundSchema = exports.RebookExecutionResponseExecution$outboundSchema;
})(RebookExecutionResponseExecution$ || (exports.RebookExecutionResponseExecution$ = RebookExecutionResponseExecution$ = {}));
/** @internal */
exports.RebookExecutionResponse$inboundSchema = z.object({
    execution: z.nullable(z.lazy(() => exports.RebookExecutionResponseExecution$inboundSchema)).optional(),
});
/** @internal */
exports.RebookExecutionResponse$outboundSchema = z.object({
    execution: z.nullable(z.lazy(() => exports.RebookExecutionResponseExecution$outboundSchema)).optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RebookExecutionResponse$;
(function (RebookExecutionResponse$) {
    /** @deprecated use `RebookExecutionResponse$inboundSchema` instead. */
    RebookExecutionResponse$.inboundSchema = exports.RebookExecutionResponse$inboundSchema;
    /** @deprecated use `RebookExecutionResponse$outboundSchema` instead. */
    RebookExecutionResponse$.outboundSchema = exports.RebookExecutionResponse$outboundSchema;
})(RebookExecutionResponse$ || (exports.RebookExecutionResponse$ = RebookExecutionResponse$ = {}));
//# sourceMappingURL=rebookexecutionresponse.js.map