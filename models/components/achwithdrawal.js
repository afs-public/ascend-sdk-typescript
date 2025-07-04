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
exports.AchWithdrawal$ = exports.AchWithdrawal$outboundSchema = exports.AchWithdrawal$inboundSchema = exports.AchWithdrawalState$ = exports.AchWithdrawalState$outboundSchema = exports.AchWithdrawalState$inboundSchema = exports.AchWithdrawalStateState$ = exports.AchWithdrawalStateState$outboundSchema = exports.AchWithdrawalStateState$inboundSchema = exports.RetirementDistribution$ = exports.RetirementDistribution$outboundSchema = exports.RetirementDistribution$inboundSchema = exports.AchWithdrawalType$ = exports.AchWithdrawalType$outboundSchema = exports.AchWithdrawalType$inboundSchema = exports.StateTaxWithholding$ = exports.StateTaxWithholding$outboundSchema = exports.StateTaxWithholding$inboundSchema = exports.AchWithdrawalRetirementDistributionPercentage$ = exports.AchWithdrawalRetirementDistributionPercentage$outboundSchema = exports.AchWithdrawalRetirementDistributionPercentage$inboundSchema = exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$ = exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$outboundSchema = exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$inboundSchema = exports.FederalTaxWithholding$ = exports.FederalTaxWithholding$outboundSchema = exports.FederalTaxWithholding$inboundSchema = exports.AchWithdrawalPercentage$ = exports.AchWithdrawalPercentage$outboundSchema = exports.AchWithdrawalPercentage$inboundSchema = exports.AchWithdrawalRetirementDistributionAmount$ = exports.AchWithdrawalRetirementDistributionAmount$outboundSchema = exports.AchWithdrawalRetirementDistributionAmount$inboundSchema = exports.AchWithdrawalAmount$ = exports.AchWithdrawalAmount$outboundSchema = exports.AchWithdrawalAmount$inboundSchema = exports.AchWithdrawalStateState = exports.AchWithdrawalType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
/**
 * The type of retirement distribution.
 */
var AchWithdrawalType;
(function (AchWithdrawalType) {
    AchWithdrawalType["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    AchWithdrawalType["Normal"] = "NORMAL";
    AchWithdrawalType["Disability"] = "DISABILITY";
    AchWithdrawalType["Sosepp"] = "SOSEPP";
    AchWithdrawalType["Premature"] = "PREMATURE";
    AchWithdrawalType["Death"] = "DEATH";
    AchWithdrawalType["ExcessContributionRemovalBeforeTaxDeadline"] = "EXCESS_CONTRIBUTION_REMOVAL_BEFORE_TAX_DEADLINE";
    AchWithdrawalType["ExcessContributionRemovalAfterTaxDeadline"] = "EXCESS_CONTRIBUTION_REMOVAL_AFTER_TAX_DEADLINE";
    AchWithdrawalType["RolloverToQualifiedPlan"] = "ROLLOVER_TO_QUALIFIED_PLAN";
    AchWithdrawalType["RolloverToIra"] = "ROLLOVER_TO_IRA";
    AchWithdrawalType["DistributionTransfer"] = "DISTRIBUTION_TRANSFER";
    AchWithdrawalType["RecharacterizationPriorYear"] = "RECHARACTERIZATION_PRIOR_YEAR";
    AchWithdrawalType["RecharacterizationCurrentYear"] = "RECHARACTERIZATION_CURRENT_YEAR";
    AchWithdrawalType["DistributionConversion"] = "DISTRIBUTION_CONVERSION";
    AchWithdrawalType["ManagementFee"] = "MANAGEMENT_FEE";
    AchWithdrawalType["PlanLoan401K"] = "PLAN_LOAN_401K";
    AchWithdrawalType["PrematureSimpleIraLessThan2Years"] = "PREMATURE_SIMPLE_IRA_LESS_THAN_2_YEARS";
    AchWithdrawalType["NormalRothIraGreaterThan5Years"] = "NORMAL_ROTH_IRA_GREATER_THAN_5_YEARS";
    AchWithdrawalType["NetIncomeAttributable"] = "NET_INCOME_ATTRIBUTABLE";
    AchWithdrawalType["Revocation"] = "REVOCATION";
    AchWithdrawalType["NonReportable"] = "NON_REPORTABLE";
})(AchWithdrawalType || (exports.AchWithdrawalType = AchWithdrawalType = {}));
/**
 * The high level state of a transfer, one of:
 *
 * @remarks
 * - `PROCESSING` - The transfer is being processed and will be posted if successful.
 * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
 * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
 * - `COMPLETED` - The transfer has been batched and completed.
 * - `REJECTED` - The transfer was rejected.
 * - `CANCELED` - The transfer was canceled.
 * - `RETURNED` - The transfer was returned.
 * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
 */
var AchWithdrawalStateState;
(function (AchWithdrawalStateState) {
    AchWithdrawalStateState["StateUnspecified"] = "STATE_UNSPECIFIED";
    AchWithdrawalStateState["Processing"] = "PROCESSING";
    AchWithdrawalStateState["PendingReview"] = "PENDING_REVIEW";
    AchWithdrawalStateState["Posted"] = "POSTED";
    AchWithdrawalStateState["Completed"] = "COMPLETED";
    AchWithdrawalStateState["Rejected"] = "REJECTED";
    AchWithdrawalStateState["Canceled"] = "CANCELED";
    AchWithdrawalStateState["Returned"] = "RETURNED";
    AchWithdrawalStateState["Postponed"] = "POSTPONED";
})(AchWithdrawalStateState || (exports.AchWithdrawalStateState = AchWithdrawalStateState = {}));
/** @internal */
exports.AchWithdrawalAmount$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.AchWithdrawalAmount$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalAmount$;
(function (AchWithdrawalAmount$) {
    /** @deprecated use `AchWithdrawalAmount$inboundSchema` instead. */
    AchWithdrawalAmount$.inboundSchema = exports.AchWithdrawalAmount$inboundSchema;
    /** @deprecated use `AchWithdrawalAmount$outboundSchema` instead. */
    AchWithdrawalAmount$.outboundSchema = exports.AchWithdrawalAmount$outboundSchema;
})(AchWithdrawalAmount$ || (exports.AchWithdrawalAmount$ = AchWithdrawalAmount$ = {}));
/** @internal */
exports.AchWithdrawalRetirementDistributionAmount$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.AchWithdrawalRetirementDistributionAmount$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalRetirementDistributionAmount$;
(function (AchWithdrawalRetirementDistributionAmount$) {
    /** @deprecated use `AchWithdrawalRetirementDistributionAmount$inboundSchema` instead. */
    AchWithdrawalRetirementDistributionAmount$.inboundSchema = exports.AchWithdrawalRetirementDistributionAmount$inboundSchema;
    /** @deprecated use `AchWithdrawalRetirementDistributionAmount$outboundSchema` instead. */
    AchWithdrawalRetirementDistributionAmount$.outboundSchema = exports.AchWithdrawalRetirementDistributionAmount$outboundSchema;
})(AchWithdrawalRetirementDistributionAmount$ || (exports.AchWithdrawalRetirementDistributionAmount$ = AchWithdrawalRetirementDistributionAmount$ = {}));
/** @internal */
exports.AchWithdrawalPercentage$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.AchWithdrawalPercentage$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalPercentage$;
(function (AchWithdrawalPercentage$) {
    /** @deprecated use `AchWithdrawalPercentage$inboundSchema` instead. */
    AchWithdrawalPercentage$.inboundSchema = exports.AchWithdrawalPercentage$inboundSchema;
    /** @deprecated use `AchWithdrawalPercentage$outboundSchema` instead. */
    AchWithdrawalPercentage$.outboundSchema = exports.AchWithdrawalPercentage$outboundSchema;
})(AchWithdrawalPercentage$ || (exports.AchWithdrawalPercentage$ = AchWithdrawalPercentage$ = {}));
/** @internal */
exports.FederalTaxWithholding$inboundSchema = z.object({
    amount: z.nullable(z.lazy(() => exports.AchWithdrawalRetirementDistributionAmount$inboundSchema)).optional(),
    percentage: z.nullable(z.lazy(() => exports.AchWithdrawalPercentage$inboundSchema))
        .optional(),
});
/** @internal */
exports.FederalTaxWithholding$outboundSchema = z.object({
    amount: z.nullable(z.lazy(() => exports.AchWithdrawalRetirementDistributionAmount$outboundSchema)).optional(),
    percentage: z.nullable(z.lazy(() => exports.AchWithdrawalPercentage$outboundSchema))
        .optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var FederalTaxWithholding$;
(function (FederalTaxWithholding$) {
    /** @deprecated use `FederalTaxWithholding$inboundSchema` instead. */
    FederalTaxWithholding$.inboundSchema = exports.FederalTaxWithholding$inboundSchema;
    /** @deprecated use `FederalTaxWithholding$outboundSchema` instead. */
    FederalTaxWithholding$.outboundSchema = exports.FederalTaxWithholding$outboundSchema;
})(FederalTaxWithholding$ || (exports.FederalTaxWithholding$ = FederalTaxWithholding$ = {}));
/** @internal */
exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$;
(function (AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$) {
    /** @deprecated use `AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$inboundSchema` instead. */
    AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$.inboundSchema = exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$inboundSchema;
    /** @deprecated use `AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$outboundSchema` instead. */
    AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$.outboundSchema = exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$outboundSchema;
})(AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$ || (exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$ = AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$ = {}));
/** @internal */
exports.AchWithdrawalRetirementDistributionPercentage$inboundSchema = z.object({
    value: z.string().optional(),
});
/** @internal */
exports.AchWithdrawalRetirementDistributionPercentage$outboundSchema = z.object({
    value: z.string().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalRetirementDistributionPercentage$;
(function (AchWithdrawalRetirementDistributionPercentage$) {
    /** @deprecated use `AchWithdrawalRetirementDistributionPercentage$inboundSchema` instead. */
    AchWithdrawalRetirementDistributionPercentage$.inboundSchema = exports.AchWithdrawalRetirementDistributionPercentage$inboundSchema;
    /** @deprecated use `AchWithdrawalRetirementDistributionPercentage$outboundSchema` instead. */
    AchWithdrawalRetirementDistributionPercentage$.outboundSchema = exports.AchWithdrawalRetirementDistributionPercentage$outboundSchema;
})(AchWithdrawalRetirementDistributionPercentage$ || (exports.AchWithdrawalRetirementDistributionPercentage$ = AchWithdrawalRetirementDistributionPercentage$ = {}));
/** @internal */
exports.StateTaxWithholding$inboundSchema = z.object({
    amount: z.nullable(z.lazy(() => exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$inboundSchema)).optional(),
    percentage: z.nullable(z.lazy(() => exports.AchWithdrawalRetirementDistributionPercentage$inboundSchema)).optional(),
});
/** @internal */
exports.StateTaxWithholding$outboundSchema = z.object({
    amount: z.nullable(z.lazy(() => exports.AchWithdrawalRetirementDistributionStateTaxWithholdingAmount$outboundSchema)).optional(),
    percentage: z.nullable(z.lazy(() => exports.AchWithdrawalRetirementDistributionPercentage$outboundSchema)).optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var StateTaxWithholding$;
(function (StateTaxWithholding$) {
    /** @deprecated use `StateTaxWithholding$inboundSchema` instead. */
    StateTaxWithholding$.inboundSchema = exports.StateTaxWithholding$inboundSchema;
    /** @deprecated use `StateTaxWithholding$outboundSchema` instead. */
    StateTaxWithholding$.outboundSchema = exports.StateTaxWithholding$outboundSchema;
})(StateTaxWithholding$ || (exports.StateTaxWithholding$ = StateTaxWithholding$ = {}));
/** @internal */
exports.AchWithdrawalType$inboundSchema = z
    .union([
    z.nativeEnum(AchWithdrawalType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.AchWithdrawalType$outboundSchema = z.union([
    z.nativeEnum(AchWithdrawalType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalType$;
(function (AchWithdrawalType$) {
    /** @deprecated use `AchWithdrawalType$inboundSchema` instead. */
    AchWithdrawalType$.inboundSchema = exports.AchWithdrawalType$inboundSchema;
    /** @deprecated use `AchWithdrawalType$outboundSchema` instead. */
    AchWithdrawalType$.outboundSchema = exports.AchWithdrawalType$outboundSchema;
})(AchWithdrawalType$ || (exports.AchWithdrawalType$ = AchWithdrawalType$ = {}));
/** @internal */
exports.RetirementDistribution$inboundSchema = z.object({
    federal_tax_withholding: z.nullable(z.lazy(() => exports.FederalTaxWithholding$inboundSchema)).optional(),
    receiving_institution: z.string().optional(),
    state_tax_withholding: z.nullable(z.lazy(() => exports.StateTaxWithholding$inboundSchema)).optional(),
    state_withholding_waiver: z.boolean().optional(),
    tax_year: z.number().int().optional(),
    type: exports.AchWithdrawalType$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "federal_tax_withholding": "federalTaxWithholding",
        "receiving_institution": "receivingInstitution",
        "state_tax_withholding": "stateTaxWithholding",
        "state_withholding_waiver": "stateWithholdingWaiver",
        "tax_year": "taxYear",
    });
});
/** @internal */
exports.RetirementDistribution$outboundSchema = z.object({
    federalTaxWithholding: z.nullable(z.lazy(() => exports.FederalTaxWithholding$outboundSchema)).optional(),
    receivingInstitution: z.string().optional(),
    stateTaxWithholding: z.nullable(z.lazy(() => exports.StateTaxWithholding$outboundSchema)).optional(),
    stateWithholdingWaiver: z.boolean().optional(),
    taxYear: z.number().int().optional(),
    type: exports.AchWithdrawalType$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        federalTaxWithholding: "federal_tax_withholding",
        receivingInstitution: "receiving_institution",
        stateTaxWithholding: "state_tax_withholding",
        stateWithholdingWaiver: "state_withholding_waiver",
        taxYear: "tax_year",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RetirementDistribution$;
(function (RetirementDistribution$) {
    /** @deprecated use `RetirementDistribution$inboundSchema` instead. */
    RetirementDistribution$.inboundSchema = exports.RetirementDistribution$inboundSchema;
    /** @deprecated use `RetirementDistribution$outboundSchema` instead. */
    RetirementDistribution$.outboundSchema = exports.RetirementDistribution$outboundSchema;
})(RetirementDistribution$ || (exports.RetirementDistribution$ = RetirementDistribution$ = {}));
/** @internal */
exports.AchWithdrawalStateState$inboundSchema = z
    .union([
    z.nativeEnum(AchWithdrawalStateState),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.AchWithdrawalStateState$outboundSchema = z.union([
    z.nativeEnum(AchWithdrawalStateState),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalStateState$;
(function (AchWithdrawalStateState$) {
    /** @deprecated use `AchWithdrawalStateState$inboundSchema` instead. */
    AchWithdrawalStateState$.inboundSchema = exports.AchWithdrawalStateState$inboundSchema;
    /** @deprecated use `AchWithdrawalStateState$outboundSchema` instead. */
    AchWithdrawalStateState$.outboundSchema = exports.AchWithdrawalStateState$outboundSchema;
})(AchWithdrawalStateState$ || (exports.AchWithdrawalStateState$ = AchWithdrawalStateState$ = {}));
/** @internal */
exports.AchWithdrawalState$inboundSchema = z.object({
    actor: z.string().optional(),
    message: z.string().optional(),
    metadata: z.nullable(z.record(z.any())).optional(),
    state: exports.AchWithdrawalStateState$inboundSchema.optional(),
    update_time: z.nullable(z.string().datetime({ offset: true }).transform(v => new Date(v))).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "update_time": "updateTime",
    });
});
/** @internal */
exports.AchWithdrawalState$outboundSchema = z.object({
    actor: z.string().optional(),
    message: z.string().optional(),
    metadata: z.nullable(z.record(z.any())).optional(),
    state: exports.AchWithdrawalStateState$outboundSchema.optional(),
    updateTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        updateTime: "update_time",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawalState$;
(function (AchWithdrawalState$) {
    /** @deprecated use `AchWithdrawalState$inboundSchema` instead. */
    AchWithdrawalState$.inboundSchema = exports.AchWithdrawalState$inboundSchema;
    /** @deprecated use `AchWithdrawalState$outboundSchema` instead. */
    AchWithdrawalState$.outboundSchema = exports.AchWithdrawalState$outboundSchema;
})(AchWithdrawalState$ || (exports.AchWithdrawalState$ = AchWithdrawalState$ = {}));
/** @internal */
exports.AchWithdrawal$inboundSchema = z.object({
    amount: z.nullable(z.lazy(() => exports.AchWithdrawalAmount$inboundSchema))
        .optional(),
    bank_relationship: z.string().optional(),
    client_transfer_id: z.string().optional(),
    memo: z.string().optional(),
    name: z.string().optional(),
    retirement_distribution: z.nullable(z.lazy(() => exports.RetirementDistribution$inboundSchema)).optional(),
    state: z.nullable(z.lazy(() => exports.AchWithdrawalState$inboundSchema)).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "bank_relationship": "bankRelationship",
        "client_transfer_id": "clientTransferId",
        "retirement_distribution": "retirementDistribution",
    });
});
/** @internal */
exports.AchWithdrawal$outboundSchema = z.object({
    amount: z.nullable(z.lazy(() => exports.AchWithdrawalAmount$outboundSchema))
        .optional(),
    bankRelationship: z.string().optional(),
    clientTransferId: z.string().optional(),
    memo: z.string().optional(),
    name: z.string().optional(),
    retirementDistribution: z.nullable(z.lazy(() => exports.RetirementDistribution$outboundSchema)).optional(),
    state: z.nullable(z.lazy(() => exports.AchWithdrawalState$outboundSchema)).optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        bankRelationship: "bank_relationship",
        clientTransferId: "client_transfer_id",
        retirementDistribution: "retirement_distribution",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AchWithdrawal$;
(function (AchWithdrawal$) {
    /** @deprecated use `AchWithdrawal$inboundSchema` instead. */
    AchWithdrawal$.inboundSchema = exports.AchWithdrawal$inboundSchema;
    /** @deprecated use `AchWithdrawal$outboundSchema` instead. */
    AchWithdrawal$.outboundSchema = exports.AchWithdrawal$outboundSchema;
})(AchWithdrawal$ || (exports.AchWithdrawal$ = AchWithdrawal$ = {}));
//# sourceMappingURL=achwithdrawal.js.map