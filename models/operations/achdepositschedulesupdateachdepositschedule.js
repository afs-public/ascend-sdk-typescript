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
exports.AchDepositSchedulesUpdateAchDepositScheduleResponse$ = exports.AchDepositSchedulesUpdateAchDepositScheduleResponse$outboundSchema = exports.AchDepositSchedulesUpdateAchDepositScheduleResponse$inboundSchema = exports.AchDepositSchedulesUpdateAchDepositScheduleRequest$ = exports.AchDepositSchedulesUpdateAchDepositScheduleRequest$outboundSchema = exports.AchDepositSchedulesUpdateAchDepositScheduleRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.AchDepositSchedulesUpdateAchDepositScheduleRequest$inboundSchema = z.object({
    account_id: z.string(),
    achDepositSchedule_id: z.string(),
    update_mask: z.string().optional(),
    AchDepositScheduleUpdate: components.AchDepositScheduleUpdate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_id": "accountId",
        "achDepositSchedule_id": "achDepositScheduleId",
        "update_mask": "updateMask",
        "AchDepositScheduleUpdate": "achDepositScheduleUpdate",
    });
});
/** @internal */
exports.AchDepositSchedulesUpdateAchDepositScheduleRequest$outboundSchema = z.object({
    accountId: z.string(),
    achDepositScheduleId: z.string(),
    updateMask: z.string().optional(),
    achDepositScheduleUpdate: components.AchDepositScheduleUpdate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountId: "account_id",
        achDepositScheduleId: "achDepositSchedule_id",
        updateMask: "update_mask",
        achDepositScheduleUpdate: "AchDepositScheduleUpdate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchDepositSchedulesUpdateAchDepositScheduleRequest$;
(function (AchDepositSchedulesUpdateAchDepositScheduleRequest$) {
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleRequest$inboundSchema` instead. */
    AchDepositSchedulesUpdateAchDepositScheduleRequest$.inboundSchema = exports.AchDepositSchedulesUpdateAchDepositScheduleRequest$inboundSchema;
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleRequest$outboundSchema` instead. */
    AchDepositSchedulesUpdateAchDepositScheduleRequest$.outboundSchema = exports.AchDepositSchedulesUpdateAchDepositScheduleRequest$outboundSchema;
})(AchDepositSchedulesUpdateAchDepositScheduleRequest$ || (exports.AchDepositSchedulesUpdateAchDepositScheduleRequest$ = AchDepositSchedulesUpdateAchDepositScheduleRequest$ = {}));
/** @internal */
exports.AchDepositSchedulesUpdateAchDepositScheduleResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    AchDepositSchedule: components.AchDepositSchedule$inboundSchema.optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "AchDepositSchedule": "achDepositSchedule",
        "Status": "status",
    });
});
/** @internal */
exports.AchDepositSchedulesUpdateAchDepositScheduleResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    achDepositSchedule: components.AchDepositSchedule$outboundSchema.optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        achDepositSchedule: "AchDepositSchedule",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchDepositSchedulesUpdateAchDepositScheduleResponse$;
(function (AchDepositSchedulesUpdateAchDepositScheduleResponse$) {
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleResponse$inboundSchema` instead. */
    AchDepositSchedulesUpdateAchDepositScheduleResponse$.inboundSchema = exports.AchDepositSchedulesUpdateAchDepositScheduleResponse$inboundSchema;
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleResponse$outboundSchema` instead. */
    AchDepositSchedulesUpdateAchDepositScheduleResponse$.outboundSchema = exports.AchDepositSchedulesUpdateAchDepositScheduleResponse$outboundSchema;
})(AchDepositSchedulesUpdateAchDepositScheduleResponse$ || (exports.AchDepositSchedulesUpdateAchDepositScheduleResponse$ = AchDepositSchedulesUpdateAchDepositScheduleResponse$ = {}));
//# sourceMappingURL=achdepositschedulesupdateachdepositschedule.js.map