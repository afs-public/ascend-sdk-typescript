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
exports.AchWithdrawalsForceNocAchWithdrawalResponse$ = exports.AchWithdrawalsForceNocAchWithdrawalResponse$outboundSchema = exports.AchWithdrawalsForceNocAchWithdrawalResponse$inboundSchema = exports.AchWithdrawalsForceNocAchWithdrawalRequest$ = exports.AchWithdrawalsForceNocAchWithdrawalRequest$outboundSchema = exports.AchWithdrawalsForceNocAchWithdrawalRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.AchWithdrawalsForceNocAchWithdrawalRequest$inboundSchema = z.object({
    account_id: z.string(),
    achWithdrawal_id: z.string(),
    ForceNocAchWithdrawalRequestCreate: components.ForceNocAchWithdrawalRequestCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_id": "accountId",
        "achWithdrawal_id": "achWithdrawalId",
        "ForceNocAchWithdrawalRequestCreate": "forceNocAchWithdrawalRequestCreate",
    });
});
/** @internal */
exports.AchWithdrawalsForceNocAchWithdrawalRequest$outboundSchema = z.object({
    accountId: z.string(),
    achWithdrawalId: z.string(),
    forceNocAchWithdrawalRequestCreate: components.ForceNocAchWithdrawalRequestCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountId: "account_id",
        achWithdrawalId: "achWithdrawal_id",
        forceNocAchWithdrawalRequestCreate: "ForceNocAchWithdrawalRequestCreate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalsForceNocAchWithdrawalRequest$;
(function (AchWithdrawalsForceNocAchWithdrawalRequest$) {
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalRequest$inboundSchema` instead. */
    AchWithdrawalsForceNocAchWithdrawalRequest$.inboundSchema = exports.AchWithdrawalsForceNocAchWithdrawalRequest$inboundSchema;
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalRequest$outboundSchema` instead. */
    AchWithdrawalsForceNocAchWithdrawalRequest$.outboundSchema = exports.AchWithdrawalsForceNocAchWithdrawalRequest$outboundSchema;
})(AchWithdrawalsForceNocAchWithdrawalRequest$ || (exports.AchWithdrawalsForceNocAchWithdrawalRequest$ = AchWithdrawalsForceNocAchWithdrawalRequest$ = {}));
/** @internal */
exports.AchWithdrawalsForceNocAchWithdrawalResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    AchWithdrawal: components.AchWithdrawal$inboundSchema.optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "AchWithdrawal": "achWithdrawal",
        "Status": "status",
    });
});
/** @internal */
exports.AchWithdrawalsForceNocAchWithdrawalResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    achWithdrawal: components.AchWithdrawal$outboundSchema.optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        achWithdrawal: "AchWithdrawal",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalsForceNocAchWithdrawalResponse$;
(function (AchWithdrawalsForceNocAchWithdrawalResponse$) {
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalResponse$inboundSchema` instead. */
    AchWithdrawalsForceNocAchWithdrawalResponse$.inboundSchema = exports.AchWithdrawalsForceNocAchWithdrawalResponse$inboundSchema;
    /** @deprecated use `AchWithdrawalsForceNocAchWithdrawalResponse$outboundSchema` instead. */
    AchWithdrawalsForceNocAchWithdrawalResponse$.outboundSchema = exports.AchWithdrawalsForceNocAchWithdrawalResponse$outboundSchema;
})(AchWithdrawalsForceNocAchWithdrawalResponse$ || (exports.AchWithdrawalsForceNocAchWithdrawalResponse$ = AchWithdrawalsForceNocAchWithdrawalResponse$ = {}));
//# sourceMappingURL=achwithdrawalsforcenocachwithdrawal.js.map