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
exports.Entitlement$ = exports.Entitlement$outboundSchema = exports.Entitlement$inboundSchema = exports.EntitlementState$ = exports.EntitlementState$outboundSchema = exports.EntitlementState$inboundSchema = exports.EntitlementState = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
/**
 * GRANTED if it was activated via an enrollment, SUSPENDED if a restriction has temporarily disabled it, or DENIED if it has never before been GRANTED
 */
var EntitlementState;
(function (EntitlementState) {
    EntitlementState["EntitlementStateUnspecified"] = "ENTITLEMENT_STATE_UNSPECIFIED";
    EntitlementState["Granted"] = "GRANTED";
    EntitlementState["Suspended"] = "SUSPENDED";
    EntitlementState["Denied"] = "DENIED";
})(EntitlementState || (exports.EntitlementState = EntitlementState = {}));
/** @internal */
exports.EntitlementState$inboundSchema = z
    .union([
    z.nativeEnum(EntitlementState),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.EntitlementState$outboundSchema = z.union([
    z.nativeEnum(EntitlementState),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var EntitlementState$;
(function (EntitlementState$) {
    /** @deprecated use `EntitlementState$inboundSchema` instead. */
    EntitlementState$.inboundSchema = exports.EntitlementState$inboundSchema;
    /** @deprecated use `EntitlementState$outboundSchema` instead. */
    EntitlementState$.outboundSchema = exports.EntitlementState$outboundSchema;
})(EntitlementState$ || (exports.EntitlementState$ = EntitlementState$ = {}));
/** @internal */
exports.Entitlement$inboundSchema = z.object({
    display_name: z.string().optional(),
    entitlement_code: z.string().optional(),
    last_modified_reason: z.string().optional(),
    last_modified_time: z.nullable(z.string().datetime({ offset: true }).transform(v => new Date(v))).optional(),
    parent_entitlements: z.array(z.string()).optional(),
    state: exports.EntitlementState$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "display_name": "displayName",
        "entitlement_code": "entitlementCode",
        "last_modified_reason": "lastModifiedReason",
        "last_modified_time": "lastModifiedTime",
        "parent_entitlements": "parentEntitlements",
    });
});
/** @internal */
exports.Entitlement$outboundSchema = z.object({
    displayName: z.string().optional(),
    entitlementCode: z.string().optional(),
    lastModifiedReason: z.string().optional(),
    lastModifiedTime: z.nullable(z.date().transform(v => v.toISOString()))
        .optional(),
    parentEntitlements: z.array(z.string()).optional(),
    state: exports.EntitlementState$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        displayName: "display_name",
        entitlementCode: "entitlement_code",
        lastModifiedReason: "last_modified_reason",
        lastModifiedTime: "last_modified_time",
        parentEntitlements: "parent_entitlements",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Entitlement$;
(function (Entitlement$) {
    /** @deprecated use `Entitlement$inboundSchema` instead. */
    Entitlement$.inboundSchema = exports.Entitlement$inboundSchema;
    /** @deprecated use `Entitlement$outboundSchema` instead. */
    Entitlement$.outboundSchema = exports.Entitlement$outboundSchema;
})(Entitlement$ || (exports.Entitlement$ = Entitlement$ = {}));
//# sourceMappingURL=entitlement.js.map