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
exports.IctWithdrawalsCancelIctWithdrawalResponse$ = exports.IctWithdrawalsCancelIctWithdrawalResponse$outboundSchema = exports.IctWithdrawalsCancelIctWithdrawalResponse$inboundSchema = exports.IctWithdrawalsCancelIctWithdrawalRequest$ = exports.IctWithdrawalsCancelIctWithdrawalRequest$outboundSchema = exports.IctWithdrawalsCancelIctWithdrawalRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.IctWithdrawalsCancelIctWithdrawalRequest$inboundSchema = z.object({
    account_id: z.string(),
    ictWithdrawal_id: z.string(),
    CancelIctWithdrawalRequestCreate: components.CancelIctWithdrawalRequestCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_id": "accountId",
        "ictWithdrawal_id": "ictWithdrawalId",
        "CancelIctWithdrawalRequestCreate": "cancelIctWithdrawalRequestCreate",
    });
});
/** @internal */
exports.IctWithdrawalsCancelIctWithdrawalRequest$outboundSchema = z.object({
    accountId: z.string(),
    ictWithdrawalId: z.string(),
    cancelIctWithdrawalRequestCreate: components.CancelIctWithdrawalRequestCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountId: "account_id",
        ictWithdrawalId: "ictWithdrawal_id",
        cancelIctWithdrawalRequestCreate: "CancelIctWithdrawalRequestCreate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IctWithdrawalsCancelIctWithdrawalRequest$;
(function (IctWithdrawalsCancelIctWithdrawalRequest$) {
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalRequest$inboundSchema` instead. */
    IctWithdrawalsCancelIctWithdrawalRequest$.inboundSchema = exports.IctWithdrawalsCancelIctWithdrawalRequest$inboundSchema;
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalRequest$outboundSchema` instead. */
    IctWithdrawalsCancelIctWithdrawalRequest$.outboundSchema = exports.IctWithdrawalsCancelIctWithdrawalRequest$outboundSchema;
})(IctWithdrawalsCancelIctWithdrawalRequest$ || (exports.IctWithdrawalsCancelIctWithdrawalRequest$ = IctWithdrawalsCancelIctWithdrawalRequest$ = {}));
/** @internal */
exports.IctWithdrawalsCancelIctWithdrawalResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    IctWithdrawal: components.IctWithdrawal$inboundSchema.optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "IctWithdrawal": "ictWithdrawal",
        "Status": "status",
    });
});
/** @internal */
exports.IctWithdrawalsCancelIctWithdrawalResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    ictWithdrawal: components.IctWithdrawal$outboundSchema.optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        ictWithdrawal: "IctWithdrawal",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IctWithdrawalsCancelIctWithdrawalResponse$;
(function (IctWithdrawalsCancelIctWithdrawalResponse$) {
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalResponse$inboundSchema` instead. */
    IctWithdrawalsCancelIctWithdrawalResponse$.inboundSchema = exports.IctWithdrawalsCancelIctWithdrawalResponse$inboundSchema;
    /** @deprecated use `IctWithdrawalsCancelIctWithdrawalResponse$outboundSchema` instead. */
    IctWithdrawalsCancelIctWithdrawalResponse$.outboundSchema = exports.IctWithdrawalsCancelIctWithdrawalResponse$outboundSchema;
})(IctWithdrawalsCancelIctWithdrawalResponse$ || (exports.IctWithdrawalsCancelIctWithdrawalResponse$ = IctWithdrawalsCancelIctWithdrawalResponse$ = {}));
//# sourceMappingURL=ictwithdrawalscancelictwithdrawal.js.map