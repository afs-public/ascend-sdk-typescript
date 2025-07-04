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
exports.RestrictionCreate$ = exports.RestrictionCreate$outboundSchema = exports.RestrictionCreate$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
/** @internal */
exports.RestrictionCreate$inboundSchema = z.object({
    create_reason: z.string(),
    ended_reason: z.string().optional(),
    restriction_code: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "create_reason": "createReason",
        "ended_reason": "endedReason",
        "restriction_code": "restrictionCode",
    });
});
/** @internal */
exports.RestrictionCreate$outboundSchema = z.object({
    createReason: z.string(),
    endedReason: z.string().optional(),
    restrictionCode: z.string(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        createReason: "create_reason",
        endedReason: "ended_reason",
        restrictionCode: "restriction_code",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RestrictionCreate$;
(function (RestrictionCreate$) {
    /** @deprecated use `RestrictionCreate$inboundSchema` instead. */
    RestrictionCreate$.inboundSchema = exports.RestrictionCreate$inboundSchema;
    /** @deprecated use `RestrictionCreate$outboundSchema` instead. */
    RestrictionCreate$.outboundSchema = exports.RestrictionCreate$outboundSchema;
})(RestrictionCreate$ || (exports.RestrictionCreate$ = RestrictionCreate$ = {}));
//# sourceMappingURL=restrictioncreate.js.map