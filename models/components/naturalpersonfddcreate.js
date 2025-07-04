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
exports.NaturalPersonFddCreate$ = exports.NaturalPersonFddCreate$outboundSchema = exports.NaturalPersonFddCreate$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const customerreferralsourcecreate_js_1 = require("./customerreferralsourcecreate.js");
const negativenewscreate_js_1 = require("./negativenewscreate.js");
const othersourcesofwealthcreate_js_1 = require("./othersourcesofwealthcreate.js");
/** @internal */
exports.NaturalPersonFddCreate$inboundSchema = z.object({
    customer_non_referral_source: z.string().optional(),
    customer_referral_source: customerreferralsourcecreate_js_1.CustomerReferralSourceCreate$inboundSchema
        .optional(),
    employment_and_employer_description: z.string(),
    negative_news: negativenewscreate_js_1.NegativeNewsCreate$inboundSchema,
    other_sources_of_wealth: othersourcesofwealthcreate_js_1.OtherSourcesOfWealthCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "customer_non_referral_source": "customerNonReferralSource",
        "customer_referral_source": "customerReferralSource",
        "employment_and_employer_description": "employmentAndEmployerDescription",
        "negative_news": "negativeNews",
        "other_sources_of_wealth": "otherSourcesOfWealth",
    });
});
/** @internal */
exports.NaturalPersonFddCreate$outboundSchema = z.object({
    customerNonReferralSource: z.string().optional(),
    customerReferralSource: customerreferralsourcecreate_js_1.CustomerReferralSourceCreate$outboundSchema
        .optional(),
    employmentAndEmployerDescription: z.string(),
    negativeNews: negativenewscreate_js_1.NegativeNewsCreate$outboundSchema,
    otherSourcesOfWealth: othersourcesofwealthcreate_js_1.OtherSourcesOfWealthCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        customerNonReferralSource: "customer_non_referral_source",
        customerReferralSource: "customer_referral_source",
        employmentAndEmployerDescription: "employment_and_employer_description",
        negativeNews: "negative_news",
        otherSourcesOfWealth: "other_sources_of_wealth",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var NaturalPersonFddCreate$;
(function (NaturalPersonFddCreate$) {
    /** @deprecated use `NaturalPersonFddCreate$inboundSchema` instead. */
    NaturalPersonFddCreate$.inboundSchema = exports.NaturalPersonFddCreate$inboundSchema;
    /** @deprecated use `NaturalPersonFddCreate$outboundSchema` instead. */
    NaturalPersonFddCreate$.outboundSchema = exports.NaturalPersonFddCreate$outboundSchema;
})(NaturalPersonFddCreate$ || (exports.NaturalPersonFddCreate$ = NaturalPersonFddCreate$ = {}));
//# sourceMappingURL=naturalpersonfddcreate.js.map