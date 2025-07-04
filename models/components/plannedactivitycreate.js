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
exports.PlannedActivityCreate$ = exports.PlannedActivityCreate$outboundSchema = exports.PlannedActivityCreate$inboundSchema = exports.WithdrawalFrequency$ = exports.WithdrawalFrequency$outboundSchema = exports.WithdrawalFrequency$inboundSchema = exports.PrimaryAccountActivityType$ = exports.PrimaryAccountActivityType$outboundSchema = exports.PrimaryAccountActivityType$inboundSchema = exports.WithdrawalFrequency = exports.PrimaryAccountActivityType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const foreignbondtradingdetailscreate_js_1 = require("./foreignbondtradingdetailscreate.js");
const lowpricedsecuritiescreate_js_1 = require("./lowpricedsecuritiescreate.js");
/**
 * The primary account activity type
 */
var PrimaryAccountActivityType;
(function (PrimaryAccountActivityType) {
    PrimaryAccountActivityType["PrimaryAccountActivityTypeUnspecified"] = "PRIMARY_ACCOUNT_ACTIVITY_TYPE_UNSPECIFIED";
    PrimaryAccountActivityType["ActiveTrading"] = "ACTIVE_TRADING";
    PrimaryAccountActivityType["ShortTermInvesting"] = "SHORT_TERM_INVESTING";
    PrimaryAccountActivityType["LongTermInvesting"] = "LONG_TERM_INVESTING";
})(PrimaryAccountActivityType || (exports.PrimaryAccountActivityType = PrimaryAccountActivityType = {}));
/**
 * The frequency by which cash is anticipated to be withdrawn from the account
 */
var WithdrawalFrequency;
(function (WithdrawalFrequency) {
    WithdrawalFrequency["WithdrawalFrequencyUnspecified"] = "WITHDRAWAL_FREQUENCY_UNSPECIFIED";
    WithdrawalFrequency["Frequent"] = "FREQUENT";
    WithdrawalFrequency["Occasional"] = "OCCASIONAL";
    WithdrawalFrequency["Rare"] = "RARE";
})(WithdrawalFrequency || (exports.WithdrawalFrequency = WithdrawalFrequency = {}));
/** @internal */
exports.PrimaryAccountActivityType$inboundSchema = z
    .union([
    z.nativeEnum(PrimaryAccountActivityType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.PrimaryAccountActivityType$outboundSchema = z.union([
    z.nativeEnum(PrimaryAccountActivityType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var PrimaryAccountActivityType$;
(function (PrimaryAccountActivityType$) {
    /** @deprecated use `PrimaryAccountActivityType$inboundSchema` instead. */
    PrimaryAccountActivityType$.inboundSchema = exports.PrimaryAccountActivityType$inboundSchema;
    /** @deprecated use `PrimaryAccountActivityType$outboundSchema` instead. */
    PrimaryAccountActivityType$.outboundSchema = exports.PrimaryAccountActivityType$outboundSchema;
})(PrimaryAccountActivityType$ || (exports.PrimaryAccountActivityType$ = PrimaryAccountActivityType$ = {}));
/** @internal */
exports.WithdrawalFrequency$inboundSchema = z
    .union([
    z.nativeEnum(WithdrawalFrequency),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.WithdrawalFrequency$outboundSchema = z.union([
    z.nativeEnum(WithdrawalFrequency),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var WithdrawalFrequency$;
(function (WithdrawalFrequency$) {
    /** @deprecated use `WithdrawalFrequency$inboundSchema` instead. */
    WithdrawalFrequency$.inboundSchema = exports.WithdrawalFrequency$inboundSchema;
    /** @deprecated use `WithdrawalFrequency$outboundSchema` instead. */
    WithdrawalFrequency$.outboundSchema = exports.WithdrawalFrequency$outboundSchema;
})(WithdrawalFrequency$ || (exports.WithdrawalFrequency$ = WithdrawalFrequency$ = {}));
/** @internal */
exports.PlannedActivityCreate$inboundSchema = z.object({
    foreign_bond_trading_details: foreignbondtradingdetailscreate_js_1.ForeignBondTradingDetailsCreate$inboundSchema,
    low_priced_securities: lowpricedsecuritiescreate_js_1.LowPricedSecuritiesCreate$inboundSchema,
    primary_account_activity_type: exports.PrimaryAccountActivityType$inboundSchema,
    withdrawal_frequency: exports.WithdrawalFrequency$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "foreign_bond_trading_details": "foreignBondTradingDetails",
        "low_priced_securities": "lowPricedSecurities",
        "primary_account_activity_type": "primaryAccountActivityType",
        "withdrawal_frequency": "withdrawalFrequency",
    });
});
/** @internal */
exports.PlannedActivityCreate$outboundSchema = z.object({
    foreignBondTradingDetails: foreignbondtradingdetailscreate_js_1.ForeignBondTradingDetailsCreate$outboundSchema,
    lowPricedSecurities: lowpricedsecuritiescreate_js_1.LowPricedSecuritiesCreate$outboundSchema,
    primaryAccountActivityType: exports.PrimaryAccountActivityType$outboundSchema,
    withdrawalFrequency: exports.WithdrawalFrequency$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        foreignBondTradingDetails: "foreign_bond_trading_details",
        lowPricedSecurities: "low_priced_securities",
        primaryAccountActivityType: "primary_account_activity_type",
        withdrawalFrequency: "withdrawal_frequency",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var PlannedActivityCreate$;
(function (PlannedActivityCreate$) {
    /** @deprecated use `PlannedActivityCreate$inboundSchema` instead. */
    PlannedActivityCreate$.inboundSchema = exports.PlannedActivityCreate$inboundSchema;
    /** @deprecated use `PlannedActivityCreate$outboundSchema` instead. */
    PlannedActivityCreate$.outboundSchema = exports.PlannedActivityCreate$outboundSchema;
})(PlannedActivityCreate$ || (exports.PlannedActivityCreate$ = PlannedActivityCreate$ = {}));
//# sourceMappingURL=plannedactivitycreate.js.map