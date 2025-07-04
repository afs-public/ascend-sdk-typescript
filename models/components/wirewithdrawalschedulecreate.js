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
exports.WireWithdrawalScheduleCreate$ = exports.WireWithdrawalScheduleCreate$outboundSchema = exports.WireWithdrawalScheduleCreate$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const retirementdistributioncreate_js_1 = require("./retirementdistributioncreate.js");
const wirewithdrawalbeneficiarycreate_js_1 = require("./wirewithdrawalbeneficiarycreate.js");
const wirewithdrawalintermediarycreate_js_1 = require("./wirewithdrawalintermediarycreate.js");
const wirewithdrawalrecipientbankcreate_js_1 = require("./wirewithdrawalrecipientbankcreate.js");
const withdrawalscheduledetailscreate_js_1 = require("./withdrawalscheduledetailscreate.js");
/** @internal */
exports.WireWithdrawalScheduleCreate$inboundSchema = z.object({
    beneficiary: wirewithdrawalbeneficiarycreate_js_1.WireWithdrawalBeneficiaryCreate$inboundSchema,
    intermediary: wirewithdrawalintermediarycreate_js_1.WireWithdrawalIntermediaryCreate$inboundSchema.optional(),
    recipient_bank: wirewithdrawalrecipientbankcreate_js_1.WireWithdrawalRecipientBankCreate$inboundSchema,
    retirement_distribution: retirementdistributioncreate_js_1.RetirementDistributionCreate$inboundSchema
        .optional(),
    schedule_details: withdrawalscheduledetailscreate_js_1.WithdrawalScheduleDetailsCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "recipient_bank": "recipientBank",
        "retirement_distribution": "retirementDistribution",
        "schedule_details": "scheduleDetails",
    });
});
/** @internal */
exports.WireWithdrawalScheduleCreate$outboundSchema = z.object({
    beneficiary: wirewithdrawalbeneficiarycreate_js_1.WireWithdrawalBeneficiaryCreate$outboundSchema,
    intermediary: wirewithdrawalintermediarycreate_js_1.WireWithdrawalIntermediaryCreate$outboundSchema.optional(),
    recipientBank: wirewithdrawalrecipientbankcreate_js_1.WireWithdrawalRecipientBankCreate$outboundSchema,
    retirementDistribution: retirementdistributioncreate_js_1.RetirementDistributionCreate$outboundSchema
        .optional(),
    scheduleDetails: withdrawalscheduledetailscreate_js_1.WithdrawalScheduleDetailsCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        recipientBank: "recipient_bank",
        retirementDistribution: "retirement_distribution",
        scheduleDetails: "schedule_details",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var WireWithdrawalScheduleCreate$;
(function (WireWithdrawalScheduleCreate$) {
    /** @deprecated use `WireWithdrawalScheduleCreate$inboundSchema` instead. */
    WireWithdrawalScheduleCreate$.inboundSchema = exports.WireWithdrawalScheduleCreate$inboundSchema;
    /** @deprecated use `WireWithdrawalScheduleCreate$outboundSchema` instead. */
    WireWithdrawalScheduleCreate$.outboundSchema = exports.WireWithdrawalScheduleCreate$outboundSchema;
})(WireWithdrawalScheduleCreate$ || (exports.WireWithdrawalScheduleCreate$ = WireWithdrawalScheduleCreate$ = {}));
//# sourceMappingURL=wirewithdrawalschedulecreate.js.map