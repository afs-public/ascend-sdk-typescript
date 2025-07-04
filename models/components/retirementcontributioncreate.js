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
exports.RetirementContributionCreate$ = exports.RetirementContributionCreate$outboundSchema = exports.RetirementContributionCreate$inboundSchema = exports.RetirementContributionCreateType$ = exports.RetirementContributionCreateType$outboundSchema = exports.RetirementContributionCreateType$inboundSchema = exports.RetirementContributionCreateType = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
/**
 * The type of retirement contribution.
 */
var RetirementContributionCreateType;
(function (RetirementContributionCreateType) {
    RetirementContributionCreateType["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    RetirementContributionCreateType["Regular"] = "REGULAR";
    RetirementContributionCreateType["Employee"] = "EMPLOYEE";
    RetirementContributionCreateType["Employer"] = "EMPLOYER";
    RetirementContributionCreateType["Recharacterization"] = "RECHARACTERIZATION";
    RetirementContributionCreateType["Rollover60Day"] = "ROLLOVER_60_DAY";
    RetirementContributionCreateType["RolloverDirect"] = "ROLLOVER_DIRECT";
    RetirementContributionCreateType["Transfer"] = "TRANSFER";
    RetirementContributionCreateType["TrusteeFee"] = "TRUSTEE_FEE";
    RetirementContributionCreateType["Conversion"] = "CONVERSION";
    RetirementContributionCreateType["Repayment"] = "REPAYMENT";
    RetirementContributionCreateType["ContributionNonReportable"] = "CONTRIBUTION_NON_REPORTABLE";
})(RetirementContributionCreateType || (exports.RetirementContributionCreateType = RetirementContributionCreateType = {}));
/** @internal */
exports.RetirementContributionCreateType$inboundSchema = z
    .union([
    z.nativeEnum(RetirementContributionCreateType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.RetirementContributionCreateType$outboundSchema = z.union([
    z.nativeEnum(RetirementContributionCreateType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RetirementContributionCreateType$;
(function (RetirementContributionCreateType$) {
    /** @deprecated use `RetirementContributionCreateType$inboundSchema` instead. */
    RetirementContributionCreateType$.inboundSchema = exports.RetirementContributionCreateType$inboundSchema;
    /** @deprecated use `RetirementContributionCreateType$outboundSchema` instead. */
    RetirementContributionCreateType$.outboundSchema = exports.RetirementContributionCreateType$outboundSchema;
})(RetirementContributionCreateType$ || (exports.RetirementContributionCreateType$ = RetirementContributionCreateType$ = {}));
/** @internal */
exports.RetirementContributionCreate$inboundSchema = z.object({
    tax_year: z.number().int(),
    type: exports.RetirementContributionCreateType$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "tax_year": "taxYear",
    });
});
/** @internal */
exports.RetirementContributionCreate$outboundSchema = z.object({
    taxYear: z.number().int(),
    type: exports.RetirementContributionCreateType$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        taxYear: "tax_year",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var RetirementContributionCreate$;
(function (RetirementContributionCreate$) {
    /** @deprecated use `RetirementContributionCreate$inboundSchema` instead. */
    RetirementContributionCreate$.inboundSchema = exports.RetirementContributionCreate$inboundSchema;
    /** @deprecated use `RetirementContributionCreate$outboundSchema` instead. */
    RetirementContributionCreate$.outboundSchema = exports.RetirementContributionCreate$outboundSchema;
})(RetirementContributionCreate$ || (exports.RetirementContributionCreate$ = RetirementContributionCreate$ = {}));
//# sourceMappingURL=retirementcontributioncreate.js.map