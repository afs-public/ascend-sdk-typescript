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
exports.BankRelationshipCreate$ = exports.BankRelationshipCreate$outboundSchema = exports.BankRelationshipCreate$inboundSchema = exports.VerificationMethod$ = exports.VerificationMethod$outboundSchema = exports.VerificationMethod$inboundSchema = exports.VerificationMethod = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const bankaccountcreate_js_1 = require("./bankaccountcreate.js");
/**
 * The verification method of the bank relationship.
 */
var VerificationMethod;
(function (VerificationMethod) {
    VerificationMethod["VerificationMethodUnspecified"] = "VERIFICATION_METHOD_UNSPECIFIED";
    VerificationMethod["MicroDeposit"] = "MICRO_DEPOSIT";
    VerificationMethod["Yodlee"] = "YODLEE";
    VerificationMethod["Quovo"] = "QUOVO";
    VerificationMethod["Giact"] = "GIACT";
    VerificationMethod["Synapse"] = "SYNAPSE";
    VerificationMethod["Sophtron"] = "SOPHTRON";
    VerificationMethod["InternalBank"] = "INTERNAL_BANK";
    VerificationMethod["Mx"] = "MX";
    VerificationMethod["Fiserv"] = "FISERV";
    VerificationMethod["PlaidToken"] = "PLAID_TOKEN";
})(VerificationMethod || (exports.VerificationMethod = VerificationMethod = {}));
/** @internal */
exports.VerificationMethod$inboundSchema = z
    .union([
    z.nativeEnum(VerificationMethod),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.VerificationMethod$outboundSchema = z.union([
    z.nativeEnum(VerificationMethod),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var VerificationMethod$;
(function (VerificationMethod$) {
    /** @deprecated use `VerificationMethod$inboundSchema` instead. */
    VerificationMethod$.inboundSchema = exports.VerificationMethod$inboundSchema;
    /** @deprecated use `VerificationMethod$outboundSchema` instead. */
    VerificationMethod$.outboundSchema = exports.VerificationMethod$outboundSchema;
})(VerificationMethod$ || (exports.VerificationMethod$ = VerificationMethod$ = {}));
/** @internal */
exports.BankRelationshipCreate$inboundSchema = z.object({
    bank_account: bankaccountcreate_js_1.BankAccountCreate$inboundSchema.optional(),
    nickname: z.string(),
    plaid_processor_token: z.string().optional(),
    verification_method: exports.VerificationMethod$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "bank_account": "bankAccount",
        "plaid_processor_token": "plaidProcessorToken",
        "verification_method": "verificationMethod",
    });
});
/** @internal */
exports.BankRelationshipCreate$outboundSchema = z.object({
    bankAccount: bankaccountcreate_js_1.BankAccountCreate$outboundSchema.optional(),
    nickname: z.string(),
    plaidProcessorToken: z.string().optional(),
    verificationMethod: exports.VerificationMethod$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        bankAccount: "bank_account",
        plaidProcessorToken: "plaid_processor_token",
        verificationMethod: "verification_method",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var BankRelationshipCreate$;
(function (BankRelationshipCreate$) {
    /** @deprecated use `BankRelationshipCreate$inboundSchema` instead. */
    BankRelationshipCreate$.inboundSchema = exports.BankRelationshipCreate$inboundSchema;
    /** @deprecated use `BankRelationshipCreate$outboundSchema` instead. */
    BankRelationshipCreate$.outboundSchema = exports.BankRelationshipCreate$outboundSchema;
})(BankRelationshipCreate$ || (exports.BankRelationshipCreate$ = BankRelationshipCreate$ = {}));
//# sourceMappingURL=bankrelationshipcreate.js.map