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
exports.BookingFeeCreate$ = exports.BookingFeeCreate$outboundSchema = exports.BookingFeeCreate$inboundSchema = exports.BookingFeeCreateType$ = exports.BookingFeeCreateType$outboundSchema = exports.BookingFeeCreateType$inboundSchema = exports.BookingFeeCreateType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const decimalcreate_js_1 = require("./decimalcreate.js");
/**
 * The type of fee
 */
var BookingFeeCreateType;
(function (BookingFeeCreateType) {
    BookingFeeCreateType["FeeTypeUnspecified"] = "FEE_TYPE_UNSPECIFIED";
    BookingFeeCreateType["ClientClearing"] = "CLIENT_CLEARING";
    BookingFeeCreateType["Liquidity"] = "LIQUIDITY";
    BookingFeeCreateType["TradeActivity"] = "TRADE_ACTIVITY";
    BookingFeeCreateType["FinancialTransactionTax"] = "FINANCIAL_TRANSACTION_TAX";
    BookingFeeCreateType["IndexOptionFee"] = "INDEX_OPTION_FEE";
    BookingFeeCreateType["SecFee"] = "SEC_FEE";
    BookingFeeCreateType["OptionsRegulatory"] = "OPTIONS_REGULATORY";
    BookingFeeCreateType["GeneralPurposeFee"] = "GENERAL_PURPOSE_FEE";
    BookingFeeCreateType["BrokerFee"] = "BROKER_FEE";
    BookingFeeCreateType["ContractFee"] = "CONTRACT_FEE";
    BookingFeeCreateType["OccFee"] = "OCC_FEE";
})(BookingFeeCreateType || (exports.BookingFeeCreateType = BookingFeeCreateType = {}));
/** @internal */
exports.BookingFeeCreateType$inboundSchema = z
    .union([
    z.nativeEnum(BookingFeeCreateType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingFeeCreateType$outboundSchema = z.union([
    z.nativeEnum(BookingFeeCreateType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingFeeCreateType$;
(function (BookingFeeCreateType$) {
    /** @deprecated use `BookingFeeCreateType$inboundSchema` instead. */
    BookingFeeCreateType$.inboundSchema = exports.BookingFeeCreateType$inboundSchema;
    /** @deprecated use `BookingFeeCreateType$outboundSchema` instead. */
    BookingFeeCreateType$.outboundSchema = exports.BookingFeeCreateType$outboundSchema;
})(BookingFeeCreateType$ || (exports.BookingFeeCreateType$ = BookingFeeCreateType$ = {}));
/** @internal */
exports.BookingFeeCreate$inboundSchema = z.object({
    amount: decimalcreate_js_1.DecimalCreate$inboundSchema.optional(),
    suppress_fee: z.boolean().optional(),
    type: exports.BookingFeeCreateType$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "suppress_fee": "suppressFee",
    });
});
/** @internal */
exports.BookingFeeCreate$outboundSchema = z.object({
    amount: decimalcreate_js_1.DecimalCreate$outboundSchema.optional(),
    suppressFee: z.boolean().optional(),
    type: exports.BookingFeeCreateType$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        suppressFee: "suppress_fee",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingFeeCreate$;
(function (BookingFeeCreate$) {
    /** @deprecated use `BookingFeeCreate$inboundSchema` instead. */
    BookingFeeCreate$.inboundSchema = exports.BookingFeeCreate$inboundSchema;
    /** @deprecated use `BookingFeeCreate$outboundSchema` instead. */
    BookingFeeCreate$.outboundSchema = exports.BookingFeeCreate$outboundSchema;
})(BookingFeeCreate$ || (exports.BookingFeeCreate$ = BookingFeeCreate$ = {}));
//# sourceMappingURL=bookingfeecreate.js.map