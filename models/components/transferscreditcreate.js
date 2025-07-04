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
exports.TransfersCreditCreate$ = exports.TransfersCreditCreate$outboundSchema = exports.TransfersCreditCreate$inboundSchema = exports.TransfersCreditCreateType$ = exports.TransfersCreditCreateType$outboundSchema = exports.TransfersCreditCreateType$inboundSchema = exports.TransfersCreditCreateType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const decimalcreate_js_1 = require("./decimalcreate.js");
/**
 * The type of the credit being issued
 */
var TransfersCreditCreateType;
(function (TransfersCreditCreateType) {
    TransfersCreditCreateType["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    TransfersCreditCreateType["Promotional"] = "PROMOTIONAL";
    TransfersCreditCreateType["WriteOff"] = "WRITE_OFF";
    TransfersCreditCreateType["Reimbursement"] = "REIMBURSEMENT";
})(TransfersCreditCreateType || (exports.TransfersCreditCreateType = TransfersCreditCreateType = {}));
/** @internal */
exports.TransfersCreditCreateType$inboundSchema = z
    .union([
    z.nativeEnum(TransfersCreditCreateType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.TransfersCreditCreateType$outboundSchema = z.union([
    z.nativeEnum(TransfersCreditCreateType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var TransfersCreditCreateType$;
(function (TransfersCreditCreateType$) {
    /** @deprecated use `TransfersCreditCreateType$inboundSchema` instead. */
    TransfersCreditCreateType$.inboundSchema = exports.TransfersCreditCreateType$inboundSchema;
    /** @deprecated use `TransfersCreditCreateType$outboundSchema` instead. */
    TransfersCreditCreateType$.outboundSchema = exports.TransfersCreditCreateType$outboundSchema;
})(TransfersCreditCreateType$ || (exports.TransfersCreditCreateType$ = TransfersCreditCreateType$ = {}));
/** @internal */
exports.TransfersCreditCreate$inboundSchema = z.object({
    amount: decimalcreate_js_1.DecimalCreate$inboundSchema,
    client_transfer_id: z.string(),
    description: z.string().optional(),
    fee_operating_account: z.string().optional(),
    type: exports.TransfersCreditCreateType$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "client_transfer_id": "clientTransferId",
        "fee_operating_account": "feeOperatingAccount",
    });
});
/** @internal */
exports.TransfersCreditCreate$outboundSchema = z.object({
    amount: decimalcreate_js_1.DecimalCreate$outboundSchema,
    clientTransferId: z.string(),
    description: z.string().optional(),
    feeOperatingAccount: z.string().optional(),
    type: exports.TransfersCreditCreateType$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        clientTransferId: "client_transfer_id",
        feeOperatingAccount: "fee_operating_account",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var TransfersCreditCreate$;
(function (TransfersCreditCreate$) {
    /** @deprecated use `TransfersCreditCreate$inboundSchema` instead. */
    TransfersCreditCreate$.inboundSchema = exports.TransfersCreditCreate$inboundSchema;
    /** @deprecated use `TransfersCreditCreate$outboundSchema` instead. */
    TransfersCreditCreate$.outboundSchema = exports.TransfersCreditCreate$outboundSchema;
})(TransfersCreditCreate$ || (exports.TransfersCreditCreate$ = TransfersCreditCreate$ = {}));
//# sourceMappingURL=transferscreditcreate.js.map