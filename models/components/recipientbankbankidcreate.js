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
exports.RecipientBankBankIdCreate$ = exports.RecipientBankBankIdCreate$outboundSchema = exports.RecipientBankBankIdCreate$inboundSchema = exports.RecipientBankBankIdCreateType$ = exports.RecipientBankBankIdCreateType$outboundSchema = exports.RecipientBankBankIdCreateType$inboundSchema = exports.RecipientBankBankIdCreateType = void 0;
const z = __importStar(require("zod"));
const enums_js_1 = require("../../types/enums.js");
/**
 * The type of bank identifier specified
 */
var RecipientBankBankIdCreateType;
(function (RecipientBankBankIdCreateType) {
    RecipientBankBankIdCreateType["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    RecipientBankBankIdCreateType["Aba"] = "ABA";
    RecipientBankBankIdCreateType["Bic"] = "BIC";
})(RecipientBankBankIdCreateType || (exports.RecipientBankBankIdCreateType = RecipientBankBankIdCreateType = {}));
/** @internal */
exports.RecipientBankBankIdCreateType$inboundSchema = z
    .union([
    z.nativeEnum(RecipientBankBankIdCreateType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.RecipientBankBankIdCreateType$outboundSchema = z.union([
    z.nativeEnum(RecipientBankBankIdCreateType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RecipientBankBankIdCreateType$;
(function (RecipientBankBankIdCreateType$) {
    /** @deprecated use `RecipientBankBankIdCreateType$inboundSchema` instead. */
    RecipientBankBankIdCreateType$.inboundSchema = exports.RecipientBankBankIdCreateType$inboundSchema;
    /** @deprecated use `RecipientBankBankIdCreateType$outboundSchema` instead. */
    RecipientBankBankIdCreateType$.outboundSchema = exports.RecipientBankBankIdCreateType$outboundSchema;
})(RecipientBankBankIdCreateType$ || (exports.RecipientBankBankIdCreateType$ = RecipientBankBankIdCreateType$ = {}));
/** @internal */
exports.RecipientBankBankIdCreate$inboundSchema = z.object({
    id: z.string(),
    type: exports.RecipientBankBankIdCreateType$inboundSchema,
});
/** @internal */
exports.RecipientBankBankIdCreate$outboundSchema = z.object({
    id: z.string(),
    type: exports.RecipientBankBankIdCreateType$outboundSchema,
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RecipientBankBankIdCreate$;
(function (RecipientBankBankIdCreate$) {
    /** @deprecated use `RecipientBankBankIdCreate$inboundSchema` instead. */
    RecipientBankBankIdCreate$.inboundSchema = exports.RecipientBankBankIdCreate$inboundSchema;
    /** @deprecated use `RecipientBankBankIdCreate$outboundSchema` instead. */
    RecipientBankBankIdCreate$.outboundSchema = exports.RecipientBankBankIdCreate$outboundSchema;
})(RecipientBankBankIdCreate$ || (exports.RecipientBankBankIdCreate$ = RecipientBankBankIdCreate$ = {}));
//# sourceMappingURL=recipientbankbankidcreate.js.map