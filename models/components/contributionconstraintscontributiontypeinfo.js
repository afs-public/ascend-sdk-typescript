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
exports.ContributionConstraintsContributionTypeInfo$ = exports.ContributionConstraintsContributionTypeInfo$outboundSchema = exports.ContributionConstraintsContributionTypeInfo$inboundSchema = exports.ContributionConstraintsContributionTypeInfoType$ = exports.ContributionConstraintsContributionTypeInfoType$outboundSchema = exports.ContributionConstraintsContributionTypeInfoType$inboundSchema = exports.PreviousYearDeadline$ = exports.PreviousYearDeadline$outboundSchema = exports.PreviousYearDeadline$inboundSchema = exports.ContributionConstraintsContributionTypeInfoType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
/**
 * Retirement contribution type
 */
var ContributionConstraintsContributionTypeInfoType;
(function (ContributionConstraintsContributionTypeInfoType) {
    ContributionConstraintsContributionTypeInfoType["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    ContributionConstraintsContributionTypeInfoType["Regular"] = "REGULAR";
    ContributionConstraintsContributionTypeInfoType["Employee"] = "EMPLOYEE";
    ContributionConstraintsContributionTypeInfoType["Employer"] = "EMPLOYER";
    ContributionConstraintsContributionTypeInfoType["Recharacterization"] = "RECHARACTERIZATION";
    ContributionConstraintsContributionTypeInfoType["Rollover60Day"] = "ROLLOVER_60_DAY";
    ContributionConstraintsContributionTypeInfoType["RolloverDirect"] = "ROLLOVER_DIRECT";
    ContributionConstraintsContributionTypeInfoType["Transfer"] = "TRANSFER";
    ContributionConstraintsContributionTypeInfoType["TrusteeFee"] = "TRUSTEE_FEE";
    ContributionConstraintsContributionTypeInfoType["Conversion"] = "CONVERSION";
    ContributionConstraintsContributionTypeInfoType["Repayment"] = "REPAYMENT";
    ContributionConstraintsContributionTypeInfoType["ContributionNonReportable"] = "CONTRIBUTION_NON_REPORTABLE";
})(ContributionConstraintsContributionTypeInfoType || (exports.ContributionConstraintsContributionTypeInfoType = ContributionConstraintsContributionTypeInfoType = {}));
/** @internal */
exports.PreviousYearDeadline$inboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/** @internal */
exports.PreviousYearDeadline$outboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var PreviousYearDeadline$;
(function (PreviousYearDeadline$) {
    /** @deprecated use `PreviousYearDeadline$inboundSchema` instead. */
    PreviousYearDeadline$.inboundSchema = exports.PreviousYearDeadline$inboundSchema;
    /** @deprecated use `PreviousYearDeadline$outboundSchema` instead. */
    PreviousYearDeadline$.outboundSchema = exports.PreviousYearDeadline$outboundSchema;
})(PreviousYearDeadline$ || (exports.PreviousYearDeadline$ = PreviousYearDeadline$ = {}));
/** @internal */
exports.ContributionConstraintsContributionTypeInfoType$inboundSchema = z
    .union([
    z.nativeEnum(ContributionConstraintsContributionTypeInfoType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.ContributionConstraintsContributionTypeInfoType$outboundSchema = z.union([
    z.nativeEnum(ContributionConstraintsContributionTypeInfoType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var ContributionConstraintsContributionTypeInfoType$;
(function (ContributionConstraintsContributionTypeInfoType$) {
    /** @deprecated use `ContributionConstraintsContributionTypeInfoType$inboundSchema` instead. */
    ContributionConstraintsContributionTypeInfoType$.inboundSchema = exports.ContributionConstraintsContributionTypeInfoType$inboundSchema;
    /** @deprecated use `ContributionConstraintsContributionTypeInfoType$outboundSchema` instead. */
    ContributionConstraintsContributionTypeInfoType$.outboundSchema = exports.ContributionConstraintsContributionTypeInfoType$outboundSchema;
})(ContributionConstraintsContributionTypeInfoType$ || (exports.ContributionConstraintsContributionTypeInfoType$ = ContributionConstraintsContributionTypeInfoType$ = {}));
/** @internal */
exports.ContributionConstraintsContributionTypeInfo$inboundSchema = z.object({
    previous_year_allowed: z.boolean().optional(),
    previous_year_deadline: z.nullable(z.lazy(() => exports.PreviousYearDeadline$inboundSchema)).optional(),
    type: exports.ContributionConstraintsContributionTypeInfoType$inboundSchema
        .optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "previous_year_allowed": "previousYearAllowed",
        "previous_year_deadline": "previousYearDeadline",
    });
});
/** @internal */
exports.ContributionConstraintsContributionTypeInfo$outboundSchema = z.object({
    previousYearAllowed: z.boolean().optional(),
    previousYearDeadline: z.nullable(z.lazy(() => exports.PreviousYearDeadline$outboundSchema)).optional(),
    type: exports.ContributionConstraintsContributionTypeInfoType$outboundSchema
        .optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        previousYearAllowed: "previous_year_allowed",
        previousYearDeadline: "previous_year_deadline",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var ContributionConstraintsContributionTypeInfo$;
(function (ContributionConstraintsContributionTypeInfo$) {
    /** @deprecated use `ContributionConstraintsContributionTypeInfo$inboundSchema` instead. */
    ContributionConstraintsContributionTypeInfo$.inboundSchema = exports.ContributionConstraintsContributionTypeInfo$inboundSchema;
    /** @deprecated use `ContributionConstraintsContributionTypeInfo$outboundSchema` instead. */
    ContributionConstraintsContributionTypeInfo$.outboundSchema = exports.ContributionConstraintsContributionTypeInfo$outboundSchema;
})(ContributionConstraintsContributionTypeInfo$ || (exports.ContributionConstraintsContributionTypeInfo$ = ContributionConstraintsContributionTypeInfo$ = {}));
//# sourceMappingURL=contributionconstraintscontributiontypeinfo.js.map