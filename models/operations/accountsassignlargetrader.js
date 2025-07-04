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
exports.AccountsAssignLargeTraderResponse$ = exports.AccountsAssignLargeTraderResponse$outboundSchema = exports.AccountsAssignLargeTraderResponse$inboundSchema = exports.AccountsAssignLargeTraderRequest$ = exports.AccountsAssignLargeTraderRequest$outboundSchema = exports.AccountsAssignLargeTraderRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.AccountsAssignLargeTraderRequest$inboundSchema = z.object({
    legalNaturalPerson_id: z.string(),
    AssignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "legalNaturalPerson_id": "legalNaturalPersonId",
        "AssignLargeTraderRequestCreate": "assignLargeTraderRequestCreate",
    });
});
/** @internal */
exports.AccountsAssignLargeTraderRequest$outboundSchema = z.object({
    legalNaturalPersonId: z.string(),
    assignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        legalNaturalPersonId: "legalNaturalPerson_id",
        assignLargeTraderRequestCreate: "AssignLargeTraderRequestCreate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AccountsAssignLargeTraderRequest$;
(function (AccountsAssignLargeTraderRequest$) {
    /** @deprecated use `AccountsAssignLargeTraderRequest$inboundSchema` instead. */
    AccountsAssignLargeTraderRequest$.inboundSchema = exports.AccountsAssignLargeTraderRequest$inboundSchema;
    /** @deprecated use `AccountsAssignLargeTraderRequest$outboundSchema` instead. */
    AccountsAssignLargeTraderRequest$.outboundSchema = exports.AccountsAssignLargeTraderRequest$outboundSchema;
})(AccountsAssignLargeTraderRequest$ || (exports.AccountsAssignLargeTraderRequest$ = AccountsAssignLargeTraderRequest$ = {}));
/** @internal */
exports.AccountsAssignLargeTraderResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    LargeTrader: components.LargeTrader$inboundSchema.optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "LargeTrader": "largeTrader",
        "Status": "status",
    });
});
/** @internal */
exports.AccountsAssignLargeTraderResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    largeTrader: components.LargeTrader$outboundSchema.optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        largeTrader: "LargeTrader",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AccountsAssignLargeTraderResponse$;
(function (AccountsAssignLargeTraderResponse$) {
    /** @deprecated use `AccountsAssignLargeTraderResponse$inboundSchema` instead. */
    AccountsAssignLargeTraderResponse$.inboundSchema = exports.AccountsAssignLargeTraderResponse$inboundSchema;
    /** @deprecated use `AccountsAssignLargeTraderResponse$outboundSchema` instead. */
    AccountsAssignLargeTraderResponse$.outboundSchema = exports.AccountsAssignLargeTraderResponse$outboundSchema;
})(AccountsAssignLargeTraderResponse$ || (exports.AccountsAssignLargeTraderResponse$ = AccountsAssignLargeTraderResponse$ = {}));
//# sourceMappingURL=accountsassignlargetrader.js.map