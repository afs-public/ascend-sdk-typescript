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
exports.AccountsAssignLargeTraderLegalEntityResponse$ = exports.AccountsAssignLargeTraderLegalEntityResponse$outboundSchema = exports.AccountsAssignLargeTraderLegalEntityResponse$inboundSchema = exports.AccountsAssignLargeTraderLegalEntityRequest$ = exports.AccountsAssignLargeTraderLegalEntityRequest$outboundSchema = exports.AccountsAssignLargeTraderLegalEntityRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.AccountsAssignLargeTraderLegalEntityRequest$inboundSchema = z.object({
    legalEntity_id: z.string(),
    AssignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "legalEntity_id": "legalEntityId",
        "AssignLargeTraderRequestCreate": "assignLargeTraderRequestCreate",
    });
});
/** @internal */
exports.AccountsAssignLargeTraderLegalEntityRequest$outboundSchema = z.object({
    legalEntityId: z.string(),
    assignLargeTraderRequestCreate: components.AssignLargeTraderRequestCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        legalEntityId: "legalEntity_id",
        assignLargeTraderRequestCreate: "AssignLargeTraderRequestCreate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AccountsAssignLargeTraderLegalEntityRequest$;
(function (AccountsAssignLargeTraderLegalEntityRequest$) {
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityRequest$inboundSchema` instead. */
    AccountsAssignLargeTraderLegalEntityRequest$.inboundSchema = exports.AccountsAssignLargeTraderLegalEntityRequest$inboundSchema;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityRequest$outboundSchema` instead. */
    AccountsAssignLargeTraderLegalEntityRequest$.outboundSchema = exports.AccountsAssignLargeTraderLegalEntityRequest$outboundSchema;
})(AccountsAssignLargeTraderLegalEntityRequest$ || (exports.AccountsAssignLargeTraderLegalEntityRequest$ = AccountsAssignLargeTraderLegalEntityRequest$ = {}));
/** @internal */
exports.AccountsAssignLargeTraderLegalEntityResponse$inboundSchema = z.object({
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
exports.AccountsAssignLargeTraderLegalEntityResponse$outboundSchema = z.object({
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
var AccountsAssignLargeTraderLegalEntityResponse$;
(function (AccountsAssignLargeTraderLegalEntityResponse$) {
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityResponse$inboundSchema` instead. */
    AccountsAssignLargeTraderLegalEntityResponse$.inboundSchema = exports.AccountsAssignLargeTraderLegalEntityResponse$inboundSchema;
    /** @deprecated use `AccountsAssignLargeTraderLegalEntityResponse$outboundSchema` instead. */
    AccountsAssignLargeTraderLegalEntityResponse$.outboundSchema = exports.AccountsAssignLargeTraderLegalEntityResponse$outboundSchema;
})(AccountsAssignLargeTraderLegalEntityResponse$ || (exports.AccountsAssignLargeTraderLegalEntityResponse$ = AccountsAssignLargeTraderLegalEntityResponse$ = {}));
//# sourceMappingURL=accountsassignlargetraderlegalentity.js.map