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
exports.BankRelationshipsCreateBankRelationshipResponse$ = exports.BankRelationshipsCreateBankRelationshipResponse$outboundSchema = exports.BankRelationshipsCreateBankRelationshipResponse$inboundSchema = exports.BankRelationshipsCreateBankRelationshipRequest$ = exports.BankRelationshipsCreateBankRelationshipRequest$outboundSchema = exports.BankRelationshipsCreateBankRelationshipRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.BankRelationshipsCreateBankRelationshipRequest$inboundSchema = z.object({
    account_id: z.string(),
    BankRelationshipCreate: components.BankRelationshipCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_id": "accountId",
        "BankRelationshipCreate": "bankRelationshipCreate",
    });
});
/** @internal */
exports.BankRelationshipsCreateBankRelationshipRequest$outboundSchema = z.object({
    accountId: z.string(),
    bankRelationshipCreate: components.BankRelationshipCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountId: "account_id",
        bankRelationshipCreate: "BankRelationshipCreate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BankRelationshipsCreateBankRelationshipRequest$;
(function (BankRelationshipsCreateBankRelationshipRequest$) {
    /** @deprecated use `BankRelationshipsCreateBankRelationshipRequest$inboundSchema` instead. */
    BankRelationshipsCreateBankRelationshipRequest$.inboundSchema = exports.BankRelationshipsCreateBankRelationshipRequest$inboundSchema;
    /** @deprecated use `BankRelationshipsCreateBankRelationshipRequest$outboundSchema` instead. */
    BankRelationshipsCreateBankRelationshipRequest$.outboundSchema = exports.BankRelationshipsCreateBankRelationshipRequest$outboundSchema;
})(BankRelationshipsCreateBankRelationshipRequest$ || (exports.BankRelationshipsCreateBankRelationshipRequest$ = BankRelationshipsCreateBankRelationshipRequest$ = {}));
/** @internal */
exports.BankRelationshipsCreateBankRelationshipResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    BankRelationship: components.BankRelationship$inboundSchema.optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "BankRelationship": "bankRelationship",
        "Status": "status",
    });
});
/** @internal */
exports.BankRelationshipsCreateBankRelationshipResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    bankRelationship: components.BankRelationship$outboundSchema.optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        bankRelationship: "BankRelationship",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BankRelationshipsCreateBankRelationshipResponse$;
(function (BankRelationshipsCreateBankRelationshipResponse$) {
    /** @deprecated use `BankRelationshipsCreateBankRelationshipResponse$inboundSchema` instead. */
    BankRelationshipsCreateBankRelationshipResponse$.inboundSchema = exports.BankRelationshipsCreateBankRelationshipResponse$inboundSchema;
    /** @deprecated use `BankRelationshipsCreateBankRelationshipResponse$outboundSchema` instead. */
    BankRelationshipsCreateBankRelationshipResponse$.outboundSchema = exports.BankRelationshipsCreateBankRelationshipResponse$outboundSchema;
})(BankRelationshipsCreateBankRelationshipResponse$ || (exports.BankRelationshipsCreateBankRelationshipResponse$ = BankRelationshipsCreateBankRelationshipResponse$ = {}));
//# sourceMappingURL=bankrelationshipscreatebankrelationship.js.map