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
exports.IctDepositTravelRuleCreate$ = exports.IctDepositTravelRuleCreate$outboundSchema = exports.IctDepositTravelRuleCreate$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const institutioncreate_js_1 = require("./institutioncreate.js");
const travelruleentitypartycreate_js_1 = require("./travelruleentitypartycreate.js");
const travelrulepartycreate_js_1 = require("./travelrulepartycreate.js");
/** @internal */
exports.IctDepositTravelRuleCreate$inboundSchema = z.object({
    entity_originating_party: travelruleentitypartycreate_js_1.TravelRuleEntityPartyCreate$inboundSchema
        .optional(),
    entity_recipient_party: travelruleentitypartycreate_js_1.TravelRuleEntityPartyCreate$inboundSchema.optional(),
    individual_originating_party: travelrulepartycreate_js_1.TravelRulePartyCreate$inboundSchema.optional(),
    individual_recipient_party: travelrulepartycreate_js_1.TravelRulePartyCreate$inboundSchema.optional(),
    originating_institution: institutioncreate_js_1.InstitutionCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "entity_originating_party": "entityOriginatingParty",
        "entity_recipient_party": "entityRecipientParty",
        "individual_originating_party": "individualOriginatingParty",
        "individual_recipient_party": "individualRecipientParty",
        "originating_institution": "originatingInstitution",
    });
});
/** @internal */
exports.IctDepositTravelRuleCreate$outboundSchema = z.object({
    entityOriginatingParty: travelruleentitypartycreate_js_1.TravelRuleEntityPartyCreate$outboundSchema.optional(),
    entityRecipientParty: travelruleentitypartycreate_js_1.TravelRuleEntityPartyCreate$outboundSchema.optional(),
    individualOriginatingParty: travelrulepartycreate_js_1.TravelRulePartyCreate$outboundSchema.optional(),
    individualRecipientParty: travelrulepartycreate_js_1.TravelRulePartyCreate$outboundSchema.optional(),
    originatingInstitution: institutioncreate_js_1.InstitutionCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        entityOriginatingParty: "entity_originating_party",
        entityRecipientParty: "entity_recipient_party",
        individualOriginatingParty: "individual_originating_party",
        individualRecipientParty: "individual_recipient_party",
        originatingInstitution: "originating_institution",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IctDepositTravelRuleCreate$;
(function (IctDepositTravelRuleCreate$) {
    /** @deprecated use `IctDepositTravelRuleCreate$inboundSchema` instead. */
    IctDepositTravelRuleCreate$.inboundSchema = exports.IctDepositTravelRuleCreate$inboundSchema;
    /** @deprecated use `IctDepositTravelRuleCreate$outboundSchema` instead. */
    IctDepositTravelRuleCreate$.outboundSchema = exports.IctDepositTravelRuleCreate$outboundSchema;
})(IctDepositTravelRuleCreate$ || (exports.IctDepositTravelRuleCreate$ = IctDepositTravelRuleCreate$ = {}));
//# sourceMappingURL=ictdeposittravelrulecreate.js.map