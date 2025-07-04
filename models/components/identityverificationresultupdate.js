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
exports.IdentityVerificationResultUpdate$ = exports.IdentityVerificationResultUpdate$outboundSchema = exports.IdentityVerificationResultUpdate$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const dateupdate_js_1 = require("./dateupdate.js");
/** @internal */
exports.IdentityVerificationResultUpdate$inboundSchema = z.object({
    address_verified: z.boolean().optional(),
    birth_date_verified: z.boolean().optional(),
    execution_date: dateupdate_js_1.DateUpdate$inboundSchema.optional(),
    external_case_id: z.string().optional(),
    identity_verification_document_ids: z.array(z.string()).optional(),
    name_verified: z.boolean().optional(),
    raw_vendor_data_document_id: z.string().optional(),
    tax_id_verified: z.boolean().optional(),
    vendor: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "address_verified": "addressVerified",
        "birth_date_verified": "birthDateVerified",
        "execution_date": "executionDate",
        "external_case_id": "externalCaseId",
        "identity_verification_document_ids": "identityVerificationDocumentIds",
        "name_verified": "nameVerified",
        "raw_vendor_data_document_id": "rawVendorDataDocumentId",
        "tax_id_verified": "taxIdVerified",
    });
});
/** @internal */
exports.IdentityVerificationResultUpdate$outboundSchema = z.object({
    addressVerified: z.boolean().optional(),
    birthDateVerified: z.boolean().optional(),
    executionDate: dateupdate_js_1.DateUpdate$outboundSchema.optional(),
    externalCaseId: z.string().optional(),
    identityVerificationDocumentIds: z.array(z.string()).optional(),
    nameVerified: z.boolean().optional(),
    rawVendorDataDocumentId: z.string().optional(),
    taxIdVerified: z.boolean().optional(),
    vendor: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        addressVerified: "address_verified",
        birthDateVerified: "birth_date_verified",
        executionDate: "execution_date",
        externalCaseId: "external_case_id",
        identityVerificationDocumentIds: "identity_verification_document_ids",
        nameVerified: "name_verified",
        rawVendorDataDocumentId: "raw_vendor_data_document_id",
        taxIdVerified: "tax_id_verified",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IdentityVerificationResultUpdate$;
(function (IdentityVerificationResultUpdate$) {
    /** @deprecated use `IdentityVerificationResultUpdate$inboundSchema` instead. */
    IdentityVerificationResultUpdate$.inboundSchema = exports.IdentityVerificationResultUpdate$inboundSchema;
    /** @deprecated use `IdentityVerificationResultUpdate$outboundSchema` instead. */
    IdentityVerificationResultUpdate$.outboundSchema = exports.IdentityVerificationResultUpdate$outboundSchema;
})(IdentityVerificationResultUpdate$ || (exports.IdentityVerificationResultUpdate$ = IdentityVerificationResultUpdate$ = {}));
//# sourceMappingURL=identityverificationresultupdate.js.map