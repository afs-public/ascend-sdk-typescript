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
exports.CreditsGetCreditResponse$ = exports.CreditsGetCreditResponse$outboundSchema = exports.CreditsGetCreditResponse$inboundSchema = exports.CreditsGetCreditRequest$ = exports.CreditsGetCreditRequest$outboundSchema = exports.CreditsGetCreditRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.CreditsGetCreditRequest$inboundSchema = z.object({
    account_id: z.string(),
    credit_id: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_id": "accountId",
        "credit_id": "creditId",
    });
});
/** @internal */
exports.CreditsGetCreditRequest$outboundSchema = z.object({
    accountId: z.string(),
    creditId: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountId: "account_id",
        creditId: "credit_id",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CreditsGetCreditRequest$;
(function (CreditsGetCreditRequest$) {
    /** @deprecated use `CreditsGetCreditRequest$inboundSchema` instead. */
    CreditsGetCreditRequest$.inboundSchema = exports.CreditsGetCreditRequest$inboundSchema;
    /** @deprecated use `CreditsGetCreditRequest$outboundSchema` instead. */
    CreditsGetCreditRequest$.outboundSchema = exports.CreditsGetCreditRequest$outboundSchema;
})(CreditsGetCreditRequest$ || (exports.CreditsGetCreditRequest$ = CreditsGetCreditRequest$ = {}));
/** @internal */
exports.CreditsGetCreditResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    TransfersCredit: components.TransfersCredit$inboundSchema.optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "TransfersCredit": "transfersCredit",
        "Status": "status",
    });
});
/** @internal */
exports.CreditsGetCreditResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    transfersCredit: components.TransfersCredit$outboundSchema.optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        transfersCredit: "TransfersCredit",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var CreditsGetCreditResponse$;
(function (CreditsGetCreditResponse$) {
    /** @deprecated use `CreditsGetCreditResponse$inboundSchema` instead. */
    CreditsGetCreditResponse$.inboundSchema = exports.CreditsGetCreditResponse$inboundSchema;
    /** @deprecated use `CreditsGetCreditResponse$outboundSchema` instead. */
    CreditsGetCreditResponse$.outboundSchema = exports.CreditsGetCreditResponse$outboundSchema;
})(CreditsGetCreditResponse$ || (exports.CreditsGetCreditResponse$ = CreditsGetCreditResponse$ = {}));
//# sourceMappingURL=creditsgetcredit.js.map