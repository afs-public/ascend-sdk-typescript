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
exports.TrustedContact$ = exports.TrustedContact$outboundSchema = exports.TrustedContact$inboundSchema = exports.TrustedContactPhoneNumber$ = exports.TrustedContactPhoneNumber$outboundSchema = exports.TrustedContactPhoneNumber$inboundSchema = exports.TrustedContactShortCode$ = exports.TrustedContactShortCode$outboundSchema = exports.TrustedContactShortCode$inboundSchema = exports.TrustedContactMailingAddress$ = exports.TrustedContactMailingAddress$outboundSchema = exports.TrustedContactMailingAddress$inboundSchema = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
/** @internal */
exports.TrustedContactMailingAddress$inboundSchema = z.object({
    address_lines: z.array(z.string()).optional(),
    administrative_area: z.string().optional(),
    language_code: z.string().optional(),
    locality: z.string().optional(),
    organization: z.string().optional(),
    postal_code: z.string().optional(),
    recipients: z.array(z.string()).optional(),
    region_code: z.string().optional(),
    revision: z.number().int().optional(),
    sorting_code: z.string().optional(),
    sublocality: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "address_lines": "addressLines",
        "administrative_area": "administrativeArea",
        "language_code": "languageCode",
        "postal_code": "postalCode",
        "region_code": "regionCode",
        "sorting_code": "sortingCode",
    });
});
/** @internal */
exports.TrustedContactMailingAddress$outboundSchema = z.object({
    addressLines: z.array(z.string()).optional(),
    administrativeArea: z.string().optional(),
    languageCode: z.string().optional(),
    locality: z.string().optional(),
    organization: z.string().optional(),
    postalCode: z.string().optional(),
    recipients: z.array(z.string()).optional(),
    regionCode: z.string().optional(),
    revision: z.number().int().optional(),
    sortingCode: z.string().optional(),
    sublocality: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        addressLines: "address_lines",
        administrativeArea: "administrative_area",
        languageCode: "language_code",
        postalCode: "postal_code",
        regionCode: "region_code",
        sortingCode: "sorting_code",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var TrustedContactMailingAddress$;
(function (TrustedContactMailingAddress$) {
    /** @deprecated use `TrustedContactMailingAddress$inboundSchema` instead. */
    TrustedContactMailingAddress$.inboundSchema = exports.TrustedContactMailingAddress$inboundSchema;
    /** @deprecated use `TrustedContactMailingAddress$outboundSchema` instead. */
    TrustedContactMailingAddress$.outboundSchema = exports.TrustedContactMailingAddress$outboundSchema;
})(TrustedContactMailingAddress$ || (exports.TrustedContactMailingAddress$ = TrustedContactMailingAddress$ = {}));
/** @internal */
exports.TrustedContactShortCode$inboundSchema = z.object({
    number: z.string().optional(),
    region_code: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "region_code": "regionCode",
    });
});
/** @internal */
exports.TrustedContactShortCode$outboundSchema = z.object({
    number: z.string().optional(),
    regionCode: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        regionCode: "region_code",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var TrustedContactShortCode$;
(function (TrustedContactShortCode$) {
    /** @deprecated use `TrustedContactShortCode$inboundSchema` instead. */
    TrustedContactShortCode$.inboundSchema = exports.TrustedContactShortCode$inboundSchema;
    /** @deprecated use `TrustedContactShortCode$outboundSchema` instead. */
    TrustedContactShortCode$.outboundSchema = exports.TrustedContactShortCode$outboundSchema;
})(TrustedContactShortCode$ || (exports.TrustedContactShortCode$ = TrustedContactShortCode$ = {}));
/** @internal */
exports.TrustedContactPhoneNumber$inboundSchema = z.object({
    e164_number: z.string().optional(),
    extension: z.string().optional(),
    short_code: z.nullable(z.lazy(() => exports.TrustedContactShortCode$inboundSchema))
        .optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "e164_number": "e164Number",
        "short_code": "shortCode",
    });
});
/** @internal */
exports.TrustedContactPhoneNumber$outboundSchema = z.object({
    e164Number: z.string().optional(),
    extension: z.string().optional(),
    shortCode: z.nullable(z.lazy(() => exports.TrustedContactShortCode$outboundSchema))
        .optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        e164Number: "e164_number",
        shortCode: "short_code",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var TrustedContactPhoneNumber$;
(function (TrustedContactPhoneNumber$) {
    /** @deprecated use `TrustedContactPhoneNumber$inboundSchema` instead. */
    TrustedContactPhoneNumber$.inboundSchema = exports.TrustedContactPhoneNumber$inboundSchema;
    /** @deprecated use `TrustedContactPhoneNumber$outboundSchema` instead. */
    TrustedContactPhoneNumber$.outboundSchema = exports.TrustedContactPhoneNumber$outboundSchema;
})(TrustedContactPhoneNumber$ || (exports.TrustedContactPhoneNumber$ = TrustedContactPhoneNumber$ = {}));
/** @internal */
exports.TrustedContact$inboundSchema = z.object({
    email_address: z.string().optional(),
    family_name: z.string().optional(),
    given_name: z.string().optional(),
    mailing_address: z.nullable(z.lazy(() => exports.TrustedContactMailingAddress$inboundSchema)).optional(),
    middle_names: z.string().optional(),
    name: z.string().optional(),
    phone_number: z.nullable(z.lazy(() => exports.TrustedContactPhoneNumber$inboundSchema)).optional(),
    trusted_contact_id: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "email_address": "emailAddress",
        "family_name": "familyName",
        "given_name": "givenName",
        "mailing_address": "mailingAddress",
        "middle_names": "middleNames",
        "phone_number": "phoneNumber",
        "trusted_contact_id": "trustedContactId",
    });
});
/** @internal */
exports.TrustedContact$outboundSchema = z.object({
    emailAddress: z.string().optional(),
    familyName: z.string().optional(),
    givenName: z.string().optional(),
    mailingAddress: z.nullable(z.lazy(() => exports.TrustedContactMailingAddress$outboundSchema)).optional(),
    middleNames: z.string().optional(),
    name: z.string().optional(),
    phoneNumber: z.nullable(z.lazy(() => exports.TrustedContactPhoneNumber$outboundSchema)).optional(),
    trustedContactId: z.string().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        emailAddress: "email_address",
        familyName: "family_name",
        givenName: "given_name",
        mailingAddress: "mailing_address",
        middleNames: "middle_names",
        phoneNumber: "phone_number",
        trustedContactId: "trusted_contact_id",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var TrustedContact$;
(function (TrustedContact$) {
    /** @deprecated use `TrustedContact$inboundSchema` instead. */
    TrustedContact$.inboundSchema = exports.TrustedContact$inboundSchema;
    /** @deprecated use `TrustedContact$outboundSchema` instead. */
    TrustedContact$.outboundSchema = exports.TrustedContact$outboundSchema;
})(TrustedContact$ || (exports.TrustedContact$ = TrustedContact$ = {}));
//# sourceMappingURL=trustedcontact.js.map