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
exports.FeesCancelFeeResponse$ = exports.FeesCancelFeeResponse$outboundSchema = exports.FeesCancelFeeResponse$inboundSchema = exports.FeesCancelFeeRequest$ = exports.FeesCancelFeeRequest$outboundSchema = exports.FeesCancelFeeRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.FeesCancelFeeRequest$inboundSchema = z.object({
    account_id: z.string(),
    fee_id: z.string(),
    CancelFeeRequestCreate: components.CancelFeeRequestCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_id": "accountId",
        "fee_id": "feeId",
        "CancelFeeRequestCreate": "cancelFeeRequestCreate",
    });
});
/** @internal */
exports.FeesCancelFeeRequest$outboundSchema = z.object({
    accountId: z.string(),
    feeId: z.string(),
    cancelFeeRequestCreate: components.CancelFeeRequestCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountId: "account_id",
        feeId: "fee_id",
        cancelFeeRequestCreate: "CancelFeeRequestCreate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var FeesCancelFeeRequest$;
(function (FeesCancelFeeRequest$) {
    /** @deprecated use `FeesCancelFeeRequest$inboundSchema` instead. */
    FeesCancelFeeRequest$.inboundSchema = exports.FeesCancelFeeRequest$inboundSchema;
    /** @deprecated use `FeesCancelFeeRequest$outboundSchema` instead. */
    FeesCancelFeeRequest$.outboundSchema = exports.FeesCancelFeeRequest$outboundSchema;
})(FeesCancelFeeRequest$ || (exports.FeesCancelFeeRequest$ = FeesCancelFeeRequest$ = {}));
/** @internal */
exports.FeesCancelFeeResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    TransfersFee: components.TransfersFee$inboundSchema.optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "TransfersFee": "transfersFee",
        "Status": "status",
    });
});
/** @internal */
exports.FeesCancelFeeResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    transfersFee: components.TransfersFee$outboundSchema.optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        transfersFee: "TransfersFee",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var FeesCancelFeeResponse$;
(function (FeesCancelFeeResponse$) {
    /** @deprecated use `FeesCancelFeeResponse$inboundSchema` instead. */
    FeesCancelFeeResponse$.inboundSchema = exports.FeesCancelFeeResponse$inboundSchema;
    /** @deprecated use `FeesCancelFeeResponse$outboundSchema` instead. */
    FeesCancelFeeResponse$.outboundSchema = exports.FeesCancelFeeResponse$outboundSchema;
})(FeesCancelFeeResponse$ || (exports.FeesCancelFeeResponse$ = FeesCancelFeeResponse$ = {}));
//# sourceMappingURL=feescancelfee.js.map