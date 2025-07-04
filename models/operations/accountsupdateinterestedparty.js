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
exports.AccountsUpdateInterestedPartyResponse$ = exports.AccountsUpdateInterestedPartyResponse$outboundSchema = exports.AccountsUpdateInterestedPartyResponse$inboundSchema = exports.AccountsUpdateInterestedPartyRequest$ = exports.AccountsUpdateInterestedPartyRequest$outboundSchema = exports.AccountsUpdateInterestedPartyRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.AccountsUpdateInterestedPartyRequest$inboundSchema = z.object({
    account_id: z.string(),
    interestedParty_id: z.string(),
    update_mask: z.string().optional(),
    InterestedPartyUpdate: components.InterestedPartyUpdate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_id": "accountId",
        "interestedParty_id": "interestedPartyId",
        "update_mask": "updateMask",
        "InterestedPartyUpdate": "interestedPartyUpdate",
    });
});
/** @internal */
exports.AccountsUpdateInterestedPartyRequest$outboundSchema = z.object({
    accountId: z.string(),
    interestedPartyId: z.string(),
    updateMask: z.string().optional(),
    interestedPartyUpdate: components.InterestedPartyUpdate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountId: "account_id",
        interestedPartyId: "interestedParty_id",
        updateMask: "update_mask",
        interestedPartyUpdate: "InterestedPartyUpdate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AccountsUpdateInterestedPartyRequest$;
(function (AccountsUpdateInterestedPartyRequest$) {
    /** @deprecated use `AccountsUpdateInterestedPartyRequest$inboundSchema` instead. */
    AccountsUpdateInterestedPartyRequest$.inboundSchema = exports.AccountsUpdateInterestedPartyRequest$inboundSchema;
    /** @deprecated use `AccountsUpdateInterestedPartyRequest$outboundSchema` instead. */
    AccountsUpdateInterestedPartyRequest$.outboundSchema = exports.AccountsUpdateInterestedPartyRequest$outboundSchema;
})(AccountsUpdateInterestedPartyRequest$ || (exports.AccountsUpdateInterestedPartyRequest$ = AccountsUpdateInterestedPartyRequest$ = {}));
/** @internal */
exports.AccountsUpdateInterestedPartyResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    InterestedParty: components.InterestedParty$inboundSchema.optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "InterestedParty": "interestedParty",
        "Status": "status",
    });
});
/** @internal */
exports.AccountsUpdateInterestedPartyResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    interestedParty: components.InterestedParty$outboundSchema.optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        interestedParty: "InterestedParty",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AccountsUpdateInterestedPartyResponse$;
(function (AccountsUpdateInterestedPartyResponse$) {
    /** @deprecated use `AccountsUpdateInterestedPartyResponse$inboundSchema` instead. */
    AccountsUpdateInterestedPartyResponse$.inboundSchema = exports.AccountsUpdateInterestedPartyResponse$inboundSchema;
    /** @deprecated use `AccountsUpdateInterestedPartyResponse$outboundSchema` instead. */
    AccountsUpdateInterestedPartyResponse$.outboundSchema = exports.AccountsUpdateInterestedPartyResponse$outboundSchema;
})(AccountsUpdateInterestedPartyResponse$ || (exports.AccountsUpdateInterestedPartyResponse$ = AccountsUpdateInterestedPartyResponse$ = {}));
//# sourceMappingURL=accountsupdateinterestedparty.js.map