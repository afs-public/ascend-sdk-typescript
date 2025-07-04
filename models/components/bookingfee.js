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
exports.BookingFee$ = exports.BookingFee$outboundSchema = exports.BookingFee$inboundSchema = exports.BookingFeeType$ = exports.BookingFeeType$outboundSchema = exports.BookingFeeType$inboundSchema = exports.BookingFeeAmount$ = exports.BookingFeeAmount$outboundSchema = exports.BookingFeeAmount$inboundSchema = exports.BookingFeeType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
/**
 * The type of fee
 */
var BookingFeeType;
(function (BookingFeeType) {
    BookingFeeType["FeeTypeUnspecified"] = "FEE_TYPE_UNSPECIFIED";
    BookingFeeType["ClientClearing"] = "CLIENT_CLEARING";
    BookingFeeType["Liquidity"] = "LIQUIDITY";
    BookingFeeType["TradeActivity"] = "TRADE_ACTIVITY";
    BookingFeeType["FinancialTransactionTax"] = "FINANCIAL_TRANSACTION_TAX";
    BookingFeeType["IndexOptionFee"] = "INDEX_OPTION_FEE";
    BookingFeeType["SecFee"] = "SEC_FEE";
    BookingFeeType["OptionsRegulatory"] = "OPTIONS_REGULATORY";
    BookingFeeType["GeneralPurposeFee"] = "GENERAL_PURPOSE_FEE";
    BookingFeeType["BrokerFee"] = "BROKER_FEE";
    BookingFeeType["ContractFee"] = "CONTRACT_FEE";
    BookingFeeType["OccFee"] = "OCC_FEE";
})(BookingFeeType || (exports.BookingFeeType = BookingFeeType = {}));
/** @internal */
exports.BookingFeeAmount$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.BookingFeeAmount$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingFeeAmount$;
(function (BookingFeeAmount$) {
    /** @deprecated use `BookingFeeAmount$inboundSchema` instead. */
    BookingFeeAmount$.inboundSchema = exports.BookingFeeAmount$inboundSchema;
    /** @deprecated use `BookingFeeAmount$outboundSchema` instead. */
    BookingFeeAmount$.outboundSchema = exports.BookingFeeAmount$outboundSchema;
})(BookingFeeAmount$ || (exports.BookingFeeAmount$ = BookingFeeAmount$ = {}));
/** @internal */
exports.BookingFeeType$inboundSchema = z
    .union([
    z.nativeEnum(BookingFeeType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.BookingFeeType$outboundSchema = z.union([
    z.nativeEnum(BookingFeeType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingFeeType$;
(function (BookingFeeType$) {
    /** @deprecated use `BookingFeeType$inboundSchema` instead. */
    BookingFeeType$.inboundSchema = exports.BookingFeeType$inboundSchema;
    /** @deprecated use `BookingFeeType$outboundSchema` instead. */
    BookingFeeType$.outboundSchema = exports.BookingFeeType$outboundSchema;
})(BookingFeeType$ || (exports.BookingFeeType$ = BookingFeeType$ = {}));
/** @internal */
exports.BookingFee$inboundSchema = z.object({
    amount: z.nullable(z.lazy(() => exports.BookingFeeAmount$inboundSchema)).optional(),
    suppress_fee: z.boolean().optional(),
    type: exports.BookingFeeType$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "suppress_fee": "suppressFee",
    });
});
/** @internal */
exports.BookingFee$outboundSchema = z.object({
    amount: z.nullable(z.lazy(() => exports.BookingFeeAmount$outboundSchema)).optional(),
    suppressFee: z.boolean().optional(),
    type: exports.BookingFeeType$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        suppressFee: "suppress_fee",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BookingFee$;
(function (BookingFee$) {
    /** @deprecated use `BookingFee$inboundSchema` instead. */
    BookingFee$.inboundSchema = exports.BookingFee$inboundSchema;
    /** @deprecated use `BookingFee$outboundSchema` instead. */
    BookingFee$.outboundSchema = exports.BookingFee$outboundSchema;
})(BookingFee$ || (exports.BookingFee$ = BookingFee$ = {}));
//# sourceMappingURL=bookingfee.js.map