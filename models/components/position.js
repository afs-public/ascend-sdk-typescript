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
exports.Position$ = exports.Position$outboundSchema = exports.Position$inboundSchema = exports.Unrestricted$ = exports.Unrestricted$outboundSchema = exports.Unrestricted$inboundSchema = exports.PositionTrade$ = exports.PositionTrade$outboundSchema = exports.PositionTrade$inboundSchema = exports.Settled$ = exports.Settled$outboundSchema = exports.Settled$inboundSchema = exports.PendingWithdrawal$ = exports.PendingWithdrawal$outboundSchema = exports.PendingWithdrawal$inboundSchema = exports.PendingOutgoingAcat$ = exports.PendingOutgoingAcat$outboundSchema = exports.PendingOutgoingAcat$inboundSchema = exports.PendingDrip$ = exports.PendingDrip$outboundSchema = exports.PendingDrip$inboundSchema = exports.LastAdjustedDate$ = exports.LastAdjustedDate$outboundSchema = exports.LastAdjustedDate$inboundSchema = exports.Free$ = exports.Free$outboundSchema = exports.Free$inboundSchema = exports.PositionFpsl$ = exports.PositionFpsl$outboundSchema = exports.PositionFpsl$inboundSchema = exports.DateT$ = exports.DateT$outboundSchema = exports.DateT$inboundSchema = exports.AdjustedTrade$ = exports.AdjustedTrade$outboundSchema = exports.AdjustedTrade$inboundSchema = exports.AdjustedSettled$ = exports.AdjustedSettled$outboundSchema = exports.AdjustedSettled$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
/** @internal */
exports.AdjustedSettled$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.AdjustedSettled$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AdjustedSettled$;
(function (AdjustedSettled$) {
    /** @deprecated use `AdjustedSettled$inboundSchema` instead. */
    AdjustedSettled$.inboundSchema = exports.AdjustedSettled$inboundSchema;
    /** @deprecated use `AdjustedSettled$outboundSchema` instead. */
    AdjustedSettled$.outboundSchema = exports.AdjustedSettled$outboundSchema;
})(AdjustedSettled$ || (exports.AdjustedSettled$ = AdjustedSettled$ = {}));
/** @internal */
exports.AdjustedTrade$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.AdjustedTrade$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AdjustedTrade$;
(function (AdjustedTrade$) {
    /** @deprecated use `AdjustedTrade$inboundSchema` instead. */
    AdjustedTrade$.inboundSchema = exports.AdjustedTrade$inboundSchema;
    /** @deprecated use `AdjustedTrade$outboundSchema` instead. */
    AdjustedTrade$.outboundSchema = exports.AdjustedTrade$outboundSchema;
})(AdjustedTrade$ || (exports.AdjustedTrade$ = AdjustedTrade$ = {}));
/** @internal */
exports.DateT$inboundSchema = z
    .object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/** @internal */
exports.DateT$outboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var DateT$;
(function (DateT$) {
    /** @deprecated use `DateT$inboundSchema` instead. */
    DateT$.inboundSchema = exports.DateT$inboundSchema;
    /** @deprecated use `DateT$outboundSchema` instead. */
    DateT$.outboundSchema = exports.DateT$outboundSchema;
})(DateT$ || (exports.DateT$ = DateT$ = {}));
/** @internal */
exports.PositionFpsl$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.PositionFpsl$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var PositionFpsl$;
(function (PositionFpsl$) {
    /** @deprecated use `PositionFpsl$inboundSchema` instead. */
    PositionFpsl$.inboundSchema = exports.PositionFpsl$inboundSchema;
    /** @deprecated use `PositionFpsl$outboundSchema` instead. */
    PositionFpsl$.outboundSchema = exports.PositionFpsl$outboundSchema;
})(PositionFpsl$ || (exports.PositionFpsl$ = PositionFpsl$ = {}));
/** @internal */
exports.Free$inboundSchema = z
    .object({
    value: z.string().optional(),
});
/** @internal */
exports.Free$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Free$;
(function (Free$) {
    /** @deprecated use `Free$inboundSchema` instead. */
    Free$.inboundSchema = exports.Free$inboundSchema;
    /** @deprecated use `Free$outboundSchema` instead. */
    Free$.outboundSchema = exports.Free$outboundSchema;
})(Free$ || (exports.Free$ = Free$ = {}));
/** @internal */
exports.LastAdjustedDate$inboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/** @internal */
exports.LastAdjustedDate$outboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var LastAdjustedDate$;
(function (LastAdjustedDate$) {
    /** @deprecated use `LastAdjustedDate$inboundSchema` instead. */
    LastAdjustedDate$.inboundSchema = exports.LastAdjustedDate$inboundSchema;
    /** @deprecated use `LastAdjustedDate$outboundSchema` instead. */
    LastAdjustedDate$.outboundSchema = exports.LastAdjustedDate$outboundSchema;
})(LastAdjustedDate$ || (exports.LastAdjustedDate$ = LastAdjustedDate$ = {}));
/** @internal */
exports.PendingDrip$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.PendingDrip$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var PendingDrip$;
(function (PendingDrip$) {
    /** @deprecated use `PendingDrip$inboundSchema` instead. */
    PendingDrip$.inboundSchema = exports.PendingDrip$inboundSchema;
    /** @deprecated use `PendingDrip$outboundSchema` instead. */
    PendingDrip$.outboundSchema = exports.PendingDrip$outboundSchema;
})(PendingDrip$ || (exports.PendingDrip$ = PendingDrip$ = {}));
/** @internal */
exports.PendingOutgoingAcat$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.PendingOutgoingAcat$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var PendingOutgoingAcat$;
(function (PendingOutgoingAcat$) {
    /** @deprecated use `PendingOutgoingAcat$inboundSchema` instead. */
    PendingOutgoingAcat$.inboundSchema = exports.PendingOutgoingAcat$inboundSchema;
    /** @deprecated use `PendingOutgoingAcat$outboundSchema` instead. */
    PendingOutgoingAcat$.outboundSchema = exports.PendingOutgoingAcat$outboundSchema;
})(PendingOutgoingAcat$ || (exports.PendingOutgoingAcat$ = PendingOutgoingAcat$ = {}));
/** @internal */
exports.PendingWithdrawal$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.PendingWithdrawal$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var PendingWithdrawal$;
(function (PendingWithdrawal$) {
    /** @deprecated use `PendingWithdrawal$inboundSchema` instead. */
    PendingWithdrawal$.inboundSchema = exports.PendingWithdrawal$inboundSchema;
    /** @deprecated use `PendingWithdrawal$outboundSchema` instead. */
    PendingWithdrawal$.outboundSchema = exports.PendingWithdrawal$outboundSchema;
})(PendingWithdrawal$ || (exports.PendingWithdrawal$ = PendingWithdrawal$ = {}));
/** @internal */
exports.Settled$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.Settled$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Settled$;
(function (Settled$) {
    /** @deprecated use `Settled$inboundSchema` instead. */
    Settled$.inboundSchema = exports.Settled$inboundSchema;
    /** @deprecated use `Settled$outboundSchema` instead. */
    Settled$.outboundSchema = exports.Settled$outboundSchema;
})(Settled$ || (exports.Settled$ = Settled$ = {}));
/** @internal */
exports.PositionTrade$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.PositionTrade$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var PositionTrade$;
(function (PositionTrade$) {
    /** @deprecated use `PositionTrade$inboundSchema` instead. */
    PositionTrade$.inboundSchema = exports.PositionTrade$inboundSchema;
    /** @deprecated use `PositionTrade$outboundSchema` instead. */
    PositionTrade$.outboundSchema = exports.PositionTrade$outboundSchema;
})(PositionTrade$ || (exports.PositionTrade$ = PositionTrade$ = {}));
/** @internal */
exports.Unrestricted$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.Unrestricted$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Unrestricted$;
(function (Unrestricted$) {
    /** @deprecated use `Unrestricted$inboundSchema` instead. */
    Unrestricted$.inboundSchema = exports.Unrestricted$inboundSchema;
    /** @deprecated use `Unrestricted$outboundSchema` instead. */
    Unrestricted$.outboundSchema = exports.Unrestricted$outboundSchema;
})(Unrestricted$ || (exports.Unrestricted$ = Unrestricted$ = {}));
/** @internal */
exports.Position$inboundSchema = z.object({
    account_id: z.string().optional(),
    adjusted_settled: z.nullable(z.lazy(() => exports.AdjustedSettled$inboundSchema))
        .optional(),
    adjusted_trade: z.nullable(z.lazy(() => exports.AdjustedTrade$inboundSchema))
        .optional(),
    asset_id: z.string().optional(),
    correspondent_id: z.string().optional(),
    date: z.nullable(z.lazy(() => exports.DateT$inboundSchema)).optional(),
    fpsl: z.nullable(z.lazy(() => exports.PositionFpsl$inboundSchema)).optional(),
    free: z.nullable(z.lazy(() => exports.Free$inboundSchema)).optional(),
    last_adjusted_date: z.nullable(z.lazy(() => exports.LastAdjustedDate$inboundSchema))
        .optional(),
    name: z.string().optional(),
    pending_drip: z.nullable(z.lazy(() => exports.PendingDrip$inboundSchema)).optional(),
    pending_outgoing_acat: z.nullable(z.lazy(() => exports.PendingOutgoingAcat$inboundSchema)).optional(),
    pending_withdrawal: z.nullable(z.lazy(() => exports.PendingWithdrawal$inboundSchema))
        .optional(),
    settled: z.nullable(z.lazy(() => exports.Settled$inboundSchema)).optional(),
    trade: z.nullable(z.lazy(() => exports.PositionTrade$inboundSchema)).optional(),
    unrestricted: z.nullable(z.lazy(() => exports.Unrestricted$inboundSchema)).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_id": "accountId",
        "adjusted_settled": "adjustedSettled",
        "adjusted_trade": "adjustedTrade",
        "asset_id": "assetId",
        "correspondent_id": "correspondentId",
        "last_adjusted_date": "lastAdjustedDate",
        "pending_drip": "pendingDrip",
        "pending_outgoing_acat": "pendingOutgoingAcat",
        "pending_withdrawal": "pendingWithdrawal",
    });
});
/** @internal */
exports.Position$outboundSchema = z.object({
    accountId: z.string().optional(),
    adjustedSettled: z.nullable(z.lazy(() => exports.AdjustedSettled$outboundSchema))
        .optional(),
    adjustedTrade: z.nullable(z.lazy(() => exports.AdjustedTrade$outboundSchema))
        .optional(),
    assetId: z.string().optional(),
    correspondentId: z.string().optional(),
    date: z.nullable(z.lazy(() => exports.DateT$outboundSchema)).optional(),
    fpsl: z.nullable(z.lazy(() => exports.PositionFpsl$outboundSchema)).optional(),
    free: z.nullable(z.lazy(() => exports.Free$outboundSchema)).optional(),
    lastAdjustedDate: z.nullable(z.lazy(() => exports.LastAdjustedDate$outboundSchema))
        .optional(),
    name: z.string().optional(),
    pendingDrip: z.nullable(z.lazy(() => exports.PendingDrip$outboundSchema)).optional(),
    pendingOutgoingAcat: z.nullable(z.lazy(() => exports.PendingOutgoingAcat$outboundSchema)).optional(),
    pendingWithdrawal: z.nullable(z.lazy(() => exports.PendingWithdrawal$outboundSchema))
        .optional(),
    settled: z.nullable(z.lazy(() => exports.Settled$outboundSchema)).optional(),
    trade: z.nullable(z.lazy(() => exports.PositionTrade$outboundSchema)).optional(),
    unrestricted: z.nullable(z.lazy(() => exports.Unrestricted$outboundSchema))
        .optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountId: "account_id",
        adjustedSettled: "adjusted_settled",
        adjustedTrade: "adjusted_trade",
        assetId: "asset_id",
        correspondentId: "correspondent_id",
        lastAdjustedDate: "last_adjusted_date",
        pendingDrip: "pending_drip",
        pendingOutgoingAcat: "pending_outgoing_acat",
        pendingWithdrawal: "pending_withdrawal",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Position$;
(function (Position$) {
    /** @deprecated use `Position$inboundSchema` instead. */
    Position$.inboundSchema = exports.Position$inboundSchema;
    /** @deprecated use `Position$outboundSchema` instead. */
    Position$.outboundSchema = exports.Position$outboundSchema;
})(Position$ || (exports.Position$ = Position$ = {}));
//# sourceMappingURL=position.js.map