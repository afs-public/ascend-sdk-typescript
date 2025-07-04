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
exports.AccountsEndLargeTraderLegalNaturalPersonResponse$ = exports.AccountsEndLargeTraderLegalNaturalPersonResponse$outboundSchema = exports.AccountsEndLargeTraderLegalNaturalPersonResponse$inboundSchema = exports.AccountsEndLargeTraderLegalNaturalPersonRequest$ = exports.AccountsEndLargeTraderLegalNaturalPersonRequest$outboundSchema = exports.AccountsEndLargeTraderLegalNaturalPersonRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.AccountsEndLargeTraderLegalNaturalPersonRequest$inboundSchema = z.object({
    legalNaturalPerson_id: z.string(),
    EndLargeTraderRequestCreate: components.EndLargeTraderRequestCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "legalNaturalPerson_id": "legalNaturalPersonId",
        "EndLargeTraderRequestCreate": "endLargeTraderRequestCreate",
    });
});
/** @internal */
exports.AccountsEndLargeTraderLegalNaturalPersonRequest$outboundSchema = z.object({
    legalNaturalPersonId: z.string(),
    endLargeTraderRequestCreate: components.EndLargeTraderRequestCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        legalNaturalPersonId: "legalNaturalPerson_id",
        endLargeTraderRequestCreate: "EndLargeTraderRequestCreate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AccountsEndLargeTraderLegalNaturalPersonRequest$;
(function (AccountsEndLargeTraderLegalNaturalPersonRequest$) {
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonRequest$inboundSchema` instead. */
    AccountsEndLargeTraderLegalNaturalPersonRequest$.inboundSchema = exports.AccountsEndLargeTraderLegalNaturalPersonRequest$inboundSchema;
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonRequest$outboundSchema` instead. */
    AccountsEndLargeTraderLegalNaturalPersonRequest$.outboundSchema = exports.AccountsEndLargeTraderLegalNaturalPersonRequest$outboundSchema;
})(AccountsEndLargeTraderLegalNaturalPersonRequest$ || (exports.AccountsEndLargeTraderLegalNaturalPersonRequest$ = AccountsEndLargeTraderLegalNaturalPersonRequest$ = {}));
/** @internal */
exports.AccountsEndLargeTraderLegalNaturalPersonResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "Status": "status",
    });
});
/** @internal */
exports.AccountsEndLargeTraderLegalNaturalPersonResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AccountsEndLargeTraderLegalNaturalPersonResponse$;
(function (AccountsEndLargeTraderLegalNaturalPersonResponse$) {
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonResponse$inboundSchema` instead. */
    AccountsEndLargeTraderLegalNaturalPersonResponse$.inboundSchema = exports.AccountsEndLargeTraderLegalNaturalPersonResponse$inboundSchema;
    /** @deprecated use `AccountsEndLargeTraderLegalNaturalPersonResponse$outboundSchema` instead. */
    AccountsEndLargeTraderLegalNaturalPersonResponse$.outboundSchema = exports.AccountsEndLargeTraderLegalNaturalPersonResponse$outboundSchema;
})(AccountsEndLargeTraderLegalNaturalPersonResponse$ || (exports.AccountsEndLargeTraderLegalNaturalPersonResponse$ = AccountsEndLargeTraderLegalNaturalPersonResponse$ = {}));
//# sourceMappingURL=accountsendlargetraderlegalnaturalperson.js.map