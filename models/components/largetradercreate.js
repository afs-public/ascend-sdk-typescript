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
exports.LargeTraderCreate$ = exports.LargeTraderCreate$outboundSchema = exports.LargeTraderCreate$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const datecreate_js_1 = require("./datecreate.js");
/** @internal */
exports.LargeTraderCreate$inboundSchema = z.object({
    effective_date: datecreate_js_1.DateCreate$inboundSchema,
    large_trader_id: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "effective_date": "effectiveDate",
        "large_trader_id": "largeTraderId",
    });
});
/** @internal */
exports.LargeTraderCreate$outboundSchema = z.object({
    effectiveDate: datecreate_js_1.DateCreate$outboundSchema,
    largeTraderId: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        effectiveDate: "effective_date",
        largeTraderId: "large_trader_id",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var LargeTraderCreate$;
(function (LargeTraderCreate$) {
    /** @deprecated use `LargeTraderCreate$inboundSchema` instead. */
    LargeTraderCreate$.inboundSchema = exports.LargeTraderCreate$inboundSchema;
    /** @deprecated use `LargeTraderCreate$outboundSchema` instead. */
    LargeTraderCreate$.outboundSchema = exports.LargeTraderCreate$outboundSchema;
})(LargeTraderCreate$ || (exports.LargeTraderCreate$ = LargeTraderCreate$ = {}));
//# sourceMappingURL=largetradercreate.js.map