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
exports.FinancialProfileCreate$ = exports.FinancialProfileCreate$outboundSchema = exports.FinancialProfileCreate$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const otheraccountscreate_js_1 = require("./otheraccountscreate.js");
/** @internal */
exports.FinancialProfileCreate$inboundSchema = z.object({
    banking_relationships: z.array(z.string()),
    other_accounts: otheraccountscreate_js_1.OtherAccountsCreate$inboundSchema,
    primary_source_of_deposited_funds: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "banking_relationships": "bankingRelationships",
        "other_accounts": "otherAccounts",
        "primary_source_of_deposited_funds": "primarySourceOfDepositedFunds",
    });
});
/** @internal */
exports.FinancialProfileCreate$outboundSchema = z.object({
    bankingRelationships: z.array(z.string()),
    otherAccounts: otheraccountscreate_js_1.OtherAccountsCreate$outboundSchema,
    primarySourceOfDepositedFunds: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        bankingRelationships: "banking_relationships",
        otherAccounts: "other_accounts",
        primarySourceOfDepositedFunds: "primary_source_of_deposited_funds",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var FinancialProfileCreate$;
(function (FinancialProfileCreate$) {
    /** @deprecated use `FinancialProfileCreate$inboundSchema` instead. */
    FinancialProfileCreate$.inboundSchema = exports.FinancialProfileCreate$inboundSchema;
    /** @deprecated use `FinancialProfileCreate$outboundSchema` instead. */
    FinancialProfileCreate$.outboundSchema = exports.FinancialProfileCreate$outboundSchema;
})(FinancialProfileCreate$ || (exports.FinancialProfileCreate$ = FinancialProfileCreate$ = {}));
//# sourceMappingURL=financialprofilecreate.js.map