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
exports.AccountTransfersListTransfersResponse$ = exports.AccountTransfersListTransfersResponse$outboundSchema = exports.AccountTransfersListTransfersResponse$inboundSchema = exports.AccountTransfersListTransfersRequest$ = exports.AccountTransfersListTransfersRequest$outboundSchema = exports.AccountTransfersListTransfersRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.AccountTransfersListTransfersRequest$inboundSchema = z.object({
    correspondent_id: z.string(),
    account_id: z.string(),
    page_size: z.number().int().optional(),
    page_token: z.string().optional(),
    filter: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "correspondent_id": "correspondentId",
        "account_id": "accountId",
        "page_size": "pageSize",
        "page_token": "pageToken",
    });
});
/** @internal */
exports.AccountTransfersListTransfersRequest$outboundSchema = z.object({
    correspondentId: z.string(),
    accountId: z.string(),
    pageSize: z.number().int().optional(),
    pageToken: z.string().optional(),
    filter: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        correspondentId: "correspondent_id",
        accountId: "account_id",
        pageSize: "page_size",
        pageToken: "page_token",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AccountTransfersListTransfersRequest$;
(function (AccountTransfersListTransfersRequest$) {
    /** @deprecated use `AccountTransfersListTransfersRequest$inboundSchema` instead. */
    AccountTransfersListTransfersRequest$.inboundSchema = exports.AccountTransfersListTransfersRequest$inboundSchema;
    /** @deprecated use `AccountTransfersListTransfersRequest$outboundSchema` instead. */
    AccountTransfersListTransfersRequest$.outboundSchema = exports.AccountTransfersListTransfersRequest$outboundSchema;
})(AccountTransfersListTransfersRequest$ || (exports.AccountTransfersListTransfersRequest$ = AccountTransfersListTransfersRequest$ = {}));
/** @internal */
exports.AccountTransfersListTransfersResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    ListTransfersResponse: components.ListTransfersResponse$inboundSchema
        .optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "ListTransfersResponse": "listTransfersResponse",
        "Status": "status",
    });
});
/** @internal */
exports.AccountTransfersListTransfersResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    listTransfersResponse: components.ListTransfersResponse$outboundSchema
        .optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        listTransfersResponse: "ListTransfersResponse",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AccountTransfersListTransfersResponse$;
(function (AccountTransfersListTransfersResponse$) {
    /** @deprecated use `AccountTransfersListTransfersResponse$inboundSchema` instead. */
    AccountTransfersListTransfersResponse$.inboundSchema = exports.AccountTransfersListTransfersResponse$inboundSchema;
    /** @deprecated use `AccountTransfersListTransfersResponse$outboundSchema` instead. */
    AccountTransfersListTransfersResponse$.outboundSchema = exports.AccountTransfersListTransfersResponse$outboundSchema;
})(AccountTransfersListTransfersResponse$ || (exports.AccountTransfersListTransfersResponse$ = AccountTransfersListTransfersResponse$ = {}));
//# sourceMappingURL=accounttransferslisttransfers.js.map