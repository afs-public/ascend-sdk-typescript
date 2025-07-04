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
exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$ = exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$outboundSchema = exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$inboundSchema = exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$ = exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$outboundSchema = exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/** @internal */
exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$inboundSchema = z.object({
    account_id: z.string(),
    AchWithdrawalScheduleCreate: components.AchWithdrawalScheduleCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "account_id": "accountId",
        "AchWithdrawalScheduleCreate": "achWithdrawalScheduleCreate",
    });
});
/** @internal */
exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$outboundSchema = z.object({
    accountId: z.string(),
    achWithdrawalScheduleCreate: components.AchWithdrawalScheduleCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        accountId: "account_id",
        achWithdrawalScheduleCreate: "AchWithdrawalScheduleCreate",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$;
(function (AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$) {
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$inboundSchema` instead. */
    AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$.inboundSchema = exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$inboundSchema;
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$outboundSchema` instead. */
    AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$.outboundSchema = exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$outboundSchema;
})(AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$ || (exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$ = AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$ = {}));
/** @internal */
exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    AchWithdrawalSchedule: components.AchWithdrawalSchedule$inboundSchema
        .optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "AchWithdrawalSchedule": "achWithdrawalSchedule",
        "Status": "status",
    });
});
/** @internal */
exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    achWithdrawalSchedule: components.AchWithdrawalSchedule$outboundSchema
        .optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        achWithdrawalSchedule: "AchWithdrawalSchedule",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$;
(function (AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$) {
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$inboundSchema` instead. */
    AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$.inboundSchema = exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$inboundSchema;
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$outboundSchema` instead. */
    AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$.outboundSchema = exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$outboundSchema;
})(AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$ || (exports.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$ = AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$ = {}));
//# sourceMappingURL=achwithdrawalschedulescreateachwithdrawalschedule.js.map