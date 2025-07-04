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
exports.AffirmAgreementsResponse$ = exports.AffirmAgreementsResponse$outboundSchema = exports.AffirmAgreementsResponse$inboundSchema = void 0;
const z = __importStar(require("zod"));
const agreement_js_1 = require("./agreement.js");
/** @internal */
exports.AffirmAgreementsResponse$inboundSchema = z.object({
    agreements: z.array(agreement_js_1.Agreement$inboundSchema).optional(),
});
/** @internal */
exports.AffirmAgreementsResponse$outboundSchema = z.object({
    agreements: z.array(agreement_js_1.Agreement$outboundSchema).optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var AffirmAgreementsResponse$;
(function (AffirmAgreementsResponse$) {
    /** @deprecated use `AffirmAgreementsResponse$inboundSchema` instead. */
    AffirmAgreementsResponse$.inboundSchema = exports.AffirmAgreementsResponse$inboundSchema;
    /** @deprecated use `AffirmAgreementsResponse$outboundSchema` instead. */
    AffirmAgreementsResponse$.outboundSchema = exports.AffirmAgreementsResponse$outboundSchema;
})(AffirmAgreementsResponse$ || (exports.AffirmAgreementsResponse$ = AffirmAgreementsResponse$ = {}));
//# sourceMappingURL=affirmagreementsresponse.js.map