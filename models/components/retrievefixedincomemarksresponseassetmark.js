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
exports.RetrieveFixedIncomeMarksResponseAssetMark$ = exports.RetrieveFixedIncomeMarksResponseAssetMark$outboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMark$inboundSchema = exports.MarkAbsenceReason$ = exports.MarkAbsenceReason$outboundSchema = exports.MarkAbsenceReason$inboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$ = exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$ = exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema = exports.MarkAbsenceReason = exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const markprice_js_1 = require("./markprice.js");
/**
 * The identifier type of the asset being sought. This will be the same value as what was sent on the request.
 */
var RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType;
(function (RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType) {
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType["AssetId"] = "ASSET_ID";
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType["Cusip"] = "CUSIP";
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType["Isin"] = "ISIN";
})(RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType || (exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType = RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType = {}));
/**
 * When marks are found and returned, this will be unspecified. If the asset was found, but no pricing data is returned, then: this will denote the reason, the marks[] list will be empty, and the accrued_interest_amount will not be present.
 */
var MarkAbsenceReason;
(function (MarkAbsenceReason) {
    MarkAbsenceReason["MarkAbsenceReasonUnspecified"] = "MARK_ABSENCE_REASON_UNSPECIFIED";
    MarkAbsenceReason["NotPriced"] = "NOT_PRICED";
    MarkAbsenceReason["NotTradable"] = "NOT_TRADABLE";
})(MarkAbsenceReason || (exports.MarkAbsenceReason = MarkAbsenceReason = {}));
/** @internal */
exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$;
(function (RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$) {
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema` instead. */
    RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$.inboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema;
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema` instead. */
    RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$.outboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema;
})(RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$ || (exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$ = RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$ = {}));
/** @internal */
exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema = z
    .union([
    z.nativeEnum(RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema = z.union([
    z.nativeEnum(RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$;
(function (RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$) {
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema` instead. */
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$.inboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema;
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema` instead. */
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$.outboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema;
})(RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$ || (exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$ = RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$ = {}));
/** @internal */
exports.MarkAbsenceReason$inboundSchema = z
    .union([
    z.nativeEnum(MarkAbsenceReason),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.MarkAbsenceReason$outboundSchema = z.union([
    z.nativeEnum(MarkAbsenceReason),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var MarkAbsenceReason$;
(function (MarkAbsenceReason$) {
    /** @deprecated use `MarkAbsenceReason$inboundSchema` instead. */
    MarkAbsenceReason$.inboundSchema = exports.MarkAbsenceReason$inboundSchema;
    /** @deprecated use `MarkAbsenceReason$outboundSchema` instead. */
    MarkAbsenceReason$.outboundSchema = exports.MarkAbsenceReason$outboundSchema;
})(MarkAbsenceReason$ || (exports.MarkAbsenceReason$ = MarkAbsenceReason$ = {}));
/** @internal */
exports.RetrieveFixedIncomeMarksResponseAssetMark$inboundSchema = z.object({
    accrued_interest_amount: z.nullable(z.lazy(() => exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema)).optional(),
    asset_id: z.string().optional(),
    identifier: z.string().optional(),
    identifier_type: exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema
        .optional(),
    mark_absence_reason: exports.MarkAbsenceReason$inboundSchema.optional(),
    mark_generation_time: z.nullable(z.string().datetime({ offset: true }).transform(v => new Date(v))).optional(),
    marks: z.array(markprice_js_1.MarkPrice$inboundSchema).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "accrued_interest_amount": "accruedInterestAmount",
        "asset_id": "assetId",
        "identifier_type": "identifierType",
        "mark_absence_reason": "markAbsenceReason",
        "mark_generation_time": "markGenerationTime",
    });
});
/** @internal */
exports.RetrieveFixedIncomeMarksResponseAssetMark$outboundSchema = z.object({
    accruedInterestAmount: z.nullable(z.lazy(() => exports.RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema)).optional(),
    assetId: z.string().optional(),
    identifier: z.string().optional(),
    identifierType: exports.RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema
        .optional(),
    markAbsenceReason: exports.MarkAbsenceReason$outboundSchema.optional(),
    markGenerationTime: z.nullable(z.date().transform(v => v.toISOString()))
        .optional(),
    marks: z.array(markprice_js_1.MarkPrice$outboundSchema).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accruedInterestAmount: "accrued_interest_amount",
        assetId: "asset_id",
        identifierType: "identifier_type",
        markAbsenceReason: "mark_absence_reason",
        markGenerationTime: "mark_generation_time",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RetrieveFixedIncomeMarksResponseAssetMark$;
(function (RetrieveFixedIncomeMarksResponseAssetMark$) {
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMark$inboundSchema` instead. */
    RetrieveFixedIncomeMarksResponseAssetMark$.inboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMark$inboundSchema;
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMark$outboundSchema` instead. */
    RetrieveFixedIncomeMarksResponseAssetMark$.outboundSchema = exports.RetrieveFixedIncomeMarksResponseAssetMark$outboundSchema;
})(RetrieveFixedIncomeMarksResponseAssetMark$ || (exports.RetrieveFixedIncomeMarksResponseAssetMark$ = RetrieveFixedIncomeMarksResponseAssetMark$ = {}));
//# sourceMappingURL=retrievefixedincomemarksresponseassetmark.js.map