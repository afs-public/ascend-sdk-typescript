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
exports.TaxProfileCreate$ = exports.TaxProfileCreate$outboundSchema = exports.TaxProfileCreate$inboundSchema = exports.UsTinStatus$ = exports.UsTinStatus$outboundSchema = exports.UsTinStatus$inboundSchema = exports.IrsFormType$ = exports.IrsFormType$outboundSchema = exports.IrsFormType$inboundSchema = exports.FederalTaxClassification$ = exports.FederalTaxClassification$outboundSchema = exports.FederalTaxClassification$inboundSchema = exports.UsTinStatus = exports.IrsFormType = exports.FederalTaxClassification = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
/**
 * Federal tax classification.
 */
var FederalTaxClassification;
(function (FederalTaxClassification) {
    FederalTaxClassification["FederalTaxClassificationUnspecified"] = "FEDERAL_TAX_CLASSIFICATION_UNSPECIFIED";
    FederalTaxClassification["IndivSolepropOrSinglememberllc"] = "INDIV_SOLEPROP_OR_SINGLEMEMBERLLC";
    FederalTaxClassification["Partnership"] = "PARTNERSHIP";
    FederalTaxClassification["CCorporation"] = "C_CORPORATION";
    FederalTaxClassification["SCorporation"] = "S_CORPORATION";
    FederalTaxClassification["TrustEstate"] = "TRUST_ESTATE";
    FederalTaxClassification["LlcTaxedAsCCorp"] = "LLC_TAXED_AS_C_CORP";
    FederalTaxClassification["LlcTaxedAsSCorp"] = "LLC_TAXED_AS_S_CORP";
    FederalTaxClassification["LlcTaxedAsPartnership"] = "LLC_TAXED_AS_PARTNERSHIP";
    FederalTaxClassification["Other"] = "OTHER";
})(FederalTaxClassification || (exports.FederalTaxClassification = FederalTaxClassification = {}));
/**
 * IRS form type.
 */
var IrsFormType;
(function (IrsFormType) {
    IrsFormType["IrsFormTypeUnspecified"] = "IRS_FORM_TYPE_UNSPECIFIED";
    IrsFormType["W9"] = "W_9";
    IrsFormType["W8Ben"] = "W_8BEN";
})(IrsFormType || (exports.IrsFormType = IrsFormType = {}));
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
var UsTinStatus;
(function (UsTinStatus) {
    UsTinStatus["UsTinStatusUnspecified"] = "US_TIN_STATUS_UNSPECIFIED";
    UsTinStatus["Passing"] = "PASSING";
    UsTinStatus["Failing"] = "FAILING";
})(UsTinStatus || (exports.UsTinStatus = UsTinStatus = {}));
/** @internal */
exports.FederalTaxClassification$inboundSchema = z
    .union([
    z.nativeEnum(FederalTaxClassification),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.FederalTaxClassification$outboundSchema = z.union([
    z.nativeEnum(FederalTaxClassification),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var FederalTaxClassification$;
(function (FederalTaxClassification$) {
    /** @deprecated use `FederalTaxClassification$inboundSchema` instead. */
    FederalTaxClassification$.inboundSchema = exports.FederalTaxClassification$inboundSchema;
    /** @deprecated use `FederalTaxClassification$outboundSchema` instead. */
    FederalTaxClassification$.outboundSchema = exports.FederalTaxClassification$outboundSchema;
})(FederalTaxClassification$ || (exports.FederalTaxClassification$ = FederalTaxClassification$ = {}));
/** @internal */
exports.IrsFormType$inboundSchema = z
    .union([
    z.nativeEnum(IrsFormType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.IrsFormType$outboundSchema = z.union([
    z.nativeEnum(IrsFormType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IrsFormType$;
(function (IrsFormType$) {
    /** @deprecated use `IrsFormType$inboundSchema` instead. */
    IrsFormType$.inboundSchema = exports.IrsFormType$inboundSchema;
    /** @deprecated use `IrsFormType$outboundSchema` instead. */
    IrsFormType$.outboundSchema = exports.IrsFormType$outboundSchema;
})(IrsFormType$ || (exports.IrsFormType$ = IrsFormType$ = {}));
/** @internal */
exports.UsTinStatus$inboundSchema = z
    .union([
    z.nativeEnum(UsTinStatus),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.UsTinStatus$outboundSchema = z.union([
    z.nativeEnum(UsTinStatus),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var UsTinStatus$;
(function (UsTinStatus$) {
    /** @deprecated use `UsTinStatus$inboundSchema` instead. */
    UsTinStatus$.inboundSchema = exports.UsTinStatus$inboundSchema;
    /** @deprecated use `UsTinStatus$outboundSchema` instead. */
    UsTinStatus$.outboundSchema = exports.UsTinStatus$outboundSchema;
})(UsTinStatus$ || (exports.UsTinStatus$ = UsTinStatus$ = {}));
/** @internal */
exports.TaxProfileCreate$inboundSchema = z.object({
    federal_tax_classification: exports.FederalTaxClassification$inboundSchema,
    irs_form_type: exports.IrsFormType$inboundSchema,
    legal_tax_region_code: z.string(),
    us_tin_status: exports.UsTinStatus$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "federal_tax_classification": "federalTaxClassification",
        "irs_form_type": "irsFormType",
        "legal_tax_region_code": "legalTaxRegionCode",
        "us_tin_status": "usTinStatus",
    });
});
/** @internal */
exports.TaxProfileCreate$outboundSchema = z.object({
    federalTaxClassification: exports.FederalTaxClassification$outboundSchema,
    irsFormType: exports.IrsFormType$outboundSchema,
    legalTaxRegionCode: z.string(),
    usTinStatus: exports.UsTinStatus$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        federalTaxClassification: "federal_tax_classification",
        irsFormType: "irs_form_type",
        legalTaxRegionCode: "legal_tax_region_code",
        usTinStatus: "us_tin_status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var TaxProfileCreate$;
(function (TaxProfileCreate$) {
    /** @deprecated use `TaxProfileCreate$inboundSchema` instead. */
    TaxProfileCreate$.inboundSchema = exports.TaxProfileCreate$inboundSchema;
    /** @deprecated use `TaxProfileCreate$outboundSchema` instead. */
    TaxProfileCreate$.outboundSchema = exports.TaxProfileCreate$outboundSchema;
})(TaxProfileCreate$ || (exports.TaxProfileCreate$ = TaxProfileCreate$ = {}));
//# sourceMappingURL=taxprofilecreate.js.map