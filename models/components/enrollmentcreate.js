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
exports.EnrollmentCreate$ = exports.EnrollmentCreate$outboundSchema = exports.EnrollmentCreate$inboundSchema = exports.EnrollmentCreateType$ = exports.EnrollmentCreateType$outboundSchema = exports.EnrollmentCreateType$inboundSchema = exports.EnrollmentCreateConsentMethod$ = exports.EnrollmentCreateConsentMethod$outboundSchema = exports.EnrollmentCreateConsentMethod$inboundSchema = exports.EnrollmentCreateType = exports.EnrollmentCreateConsentMethod = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const beneficiaryenrollmentmetadatacreate_js_1 = require("./beneficiaryenrollmentmetadatacreate.js");
const corporationenrollmentmetadatacreate_js_1 = require("./corporationenrollmentmetadatacreate.js");
const custodialenrollmentmetadatacreate_js_1 = require("./custodialenrollmentmetadatacreate.js");
const estateenrollmentmetadatacreate_js_1 = require("./estateenrollmentmetadatacreate.js");
const foreignindividualaccountenrollmentmetadatacreate_js_1 = require("./foreignindividualaccountenrollmentmetadatacreate.js");
const foreignjointaccountenrollmentmetadatacreate_js_1 = require("./foreignjointaccountenrollmentmetadatacreate.js");
const fpslenrollmentmetadatacreate_js_1 = require("./fpslenrollmentmetadatacreate.js");
const individualenrollmentmetadatacreate_js_1 = require("./individualenrollmentmetadatacreate.js");
const irabeneficiaryenrollmentmetadatacreate_js_1 = require("./irabeneficiaryenrollmentmetadatacreate.js");
const irarolloverenrollmentmetadatacreate_js_1 = require("./irarolloverenrollmentmetadatacreate.js");
const irarothenrollmentmetadatacreate_js_1 = require("./irarothenrollmentmetadatacreate.js");
const irasepenrollmentmetadatacreate_js_1 = require("./irasepenrollmentmetadatacreate.js");
const irasimpleenrollmentmetadatacreate_js_1 = require("./irasimpleenrollmentmetadatacreate.js");
const iratraditionalenrollmentmetadatacreate_js_1 = require("./iratraditionalenrollmentmetadatacreate.js");
const jointcommunitypropertyenrollmentmetadatacreate_js_1 = require("./jointcommunitypropertyenrollmentmetadatacreate.js");
const jointtenantsbyentiretyenrollmentmetadatacreate_js_1 = require("./jointtenantsbyentiretyenrollmentmetadatacreate.js");
const jointtenantsincommonenrollmentmetadatacreate_js_1 = require("./jointtenantsincommonenrollmentmetadatacreate.js");
const jointwithrightsofsurvivorshipenrollmentmetadatacreate_js_1 = require("./jointwithrightsofsurvivorshipenrollmentmetadatacreate.js");
const llcenrollmentmetadatacreate_js_1 = require("./llcenrollmentmetadatacreate.js");
const operatingenrollmentmetadatacreate_js_1 = require("./operatingenrollmentmetadatacreate.js");
const ordersoptionstradingenrollmentmetadatacreate_js_1 = require("./ordersoptionstradingenrollmentmetadatacreate.js");
const trustenrollmentmetadatacreate_js_1 = require("./trustenrollmentmetadatacreate.js");
const virtualaccountnumberenrollmentmetadatacreate_js_1 = require("./virtualaccountnumberenrollmentmetadatacreate.js");
/**
 * The consent method for the enrollment. Defaults to ESIGNATURE.
 */
var EnrollmentCreateConsentMethod;
(function (EnrollmentCreateConsentMethod) {
    EnrollmentCreateConsentMethod["ConsentMethodUnspecified"] = "CONSENT_METHOD_UNSPECIFIED";
    EnrollmentCreateConsentMethod["Esignature"] = "ESIGNATURE";
    EnrollmentCreateConsentMethod["WetSignature"] = "WET_SIGNATURE";
    EnrollmentCreateConsentMethod["NegativeConsentConversion"] = "NEGATIVE_CONSENT_CONVERSION";
    EnrollmentCreateConsentMethod["InternalConversion"] = "INTERNAL_CONVERSION";
})(EnrollmentCreateConsentMethod || (exports.EnrollmentCreateConsentMethod = EnrollmentCreateConsentMethod = {}));
/**
 * Describes the name of the enrollment; Expressed as an enum
 */
var EnrollmentCreateType;
(function (EnrollmentCreateType) {
    EnrollmentCreateType["EnrollmentTypeUnspecified"] = "ENROLLMENT_TYPE_UNSPECIFIED";
    EnrollmentCreateType["RegistrationIndividual"] = "REGISTRATION_INDIVIDUAL";
    EnrollmentCreateType["LendingFullyPaidStockLoan"] = "LENDING_FULLY_PAID_STOCK_LOAN";
    EnrollmentCreateType["BeneficiaryDesignation"] = "BENEFICIARY_DESIGNATION";
    EnrollmentCreateType["RegistrationJointWros"] = "REGISTRATION_JOINT_WROS";
    EnrollmentCreateType["RegistrationJointTic"] = "REGISTRATION_JOINT_TIC";
    EnrollmentCreateType["RegistrationJointTbe"] = "REGISTRATION_JOINT_TBE";
    EnrollmentCreateType["RegistrationJointCp"] = "REGISTRATION_JOINT_CP";
    EnrollmentCreateType["RegistrationEstate"] = "REGISTRATION_ESTATE";
    EnrollmentCreateType["RegistrationIraTraditional"] = "REGISTRATION_IRA_TRADITIONAL";
    EnrollmentCreateType["RegistrationIraSimple"] = "REGISTRATION_IRA_SIMPLE";
    EnrollmentCreateType["RegistrationIraSep"] = "REGISTRATION_IRA_SEP";
    EnrollmentCreateType["RegistrationIraRoth"] = "REGISTRATION_IRA_ROTH";
    EnrollmentCreateType["RegistrationIraRollover"] = "REGISTRATION_IRA_ROLLOVER";
    EnrollmentCreateType["RegistrationTrust"] = "REGISTRATION_TRUST";
    EnrollmentCreateType["RegistrationCorporation"] = "REGISTRATION_CORPORATION";
    EnrollmentCreateType["RegistrationLlc"] = "REGISTRATION_LLC";
    EnrollmentCreateType["CashFdicCashSweep"] = "CASH_FDIC_CASH_SWEEP";
    EnrollmentCreateType["RetirementBeneficiaryDesignation"] = "RETIREMENT_BENEFICIARY_DESIGNATION";
    EnrollmentCreateType["DividendReinvestmentPlan"] = "DIVIDEND_REINVESTMENT_PLAN";
    EnrollmentCreateType["RegistrationIraBeneficiaryTraditional"] = "REGISTRATION_IRA_BENEFICIARY_TRADITIONAL";
    EnrollmentCreateType["RegistrationIraBeneficiaryRoth"] = "REGISTRATION_IRA_BENEFICIARY_ROTH";
    EnrollmentCreateType["RegistrationIndividualForeign"] = "REGISTRATION_INDIVIDUAL_FOREIGN";
    EnrollmentCreateType["RegistrationCustodial"] = "REGISTRATION_CUSTODIAL";
    EnrollmentCreateType["VirtualAccountNumber"] = "VIRTUAL_ACCOUNT_NUMBER";
})(EnrollmentCreateType || (exports.EnrollmentCreateType = EnrollmentCreateType = {}));
/** @internal */
exports.EnrollmentCreateConsentMethod$inboundSchema = z
    .union([
    z.nativeEnum(EnrollmentCreateConsentMethod),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.EnrollmentCreateConsentMethod$outboundSchema = z.union([
    z.nativeEnum(EnrollmentCreateConsentMethod),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var EnrollmentCreateConsentMethod$;
(function (EnrollmentCreateConsentMethod$) {
    /** @deprecated use `EnrollmentCreateConsentMethod$inboundSchema` instead. */
    EnrollmentCreateConsentMethod$.inboundSchema = exports.EnrollmentCreateConsentMethod$inboundSchema;
    /** @deprecated use `EnrollmentCreateConsentMethod$outboundSchema` instead. */
    EnrollmentCreateConsentMethod$.outboundSchema = exports.EnrollmentCreateConsentMethod$outboundSchema;
})(EnrollmentCreateConsentMethod$ || (exports.EnrollmentCreateConsentMethod$ = EnrollmentCreateConsentMethod$ = {}));
/** @internal */
exports.EnrollmentCreateType$inboundSchema = z
    .union([
    z.nativeEnum(EnrollmentCreateType),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.EnrollmentCreateType$outboundSchema = z.union([
    z.nativeEnum(EnrollmentCreateType),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var EnrollmentCreateType$;
(function (EnrollmentCreateType$) {
    /** @deprecated use `EnrollmentCreateType$inboundSchema` instead. */
    EnrollmentCreateType$.inboundSchema = exports.EnrollmentCreateType$inboundSchema;
    /** @deprecated use `EnrollmentCreateType$outboundSchema` instead. */
    EnrollmentCreateType$.outboundSchema = exports.EnrollmentCreateType$outboundSchema;
})(EnrollmentCreateType$ || (exports.EnrollmentCreateType$ = EnrollmentCreateType$ = {}));
/** @internal */
exports.EnrollmentCreate$inboundSchema = z.object({
    beneficiary_enrollment_metadata: beneficiaryenrollmentmetadatacreate_js_1.BeneficiaryEnrollmentMetadataCreate$inboundSchema.optional(),
    consent_method: exports.EnrollmentCreateConsentMethod$inboundSchema.optional(),
    corporation_enrollment_metadata: corporationenrollmentmetadatacreate_js_1.CorporationEnrollmentMetadataCreate$inboundSchema.optional(),
    custodial_enrollment_metadata: custodialenrollmentmetadatacreate_js_1.CustodialEnrollmentMetadataCreate$inboundSchema
        .optional(),
    estate_enrollment_metadata: estateenrollmentmetadatacreate_js_1.EstateEnrollmentMetadataCreate$inboundSchema
        .optional(),
    foreign_individual_account_enrollment_metadata: foreignindividualaccountenrollmentmetadatacreate_js_1.ForeignIndividualAccountEnrollmentMetadataCreate$inboundSchema.optional(),
    foreign_joint_account_enrollment_metadata: foreignjointaccountenrollmentmetadatacreate_js_1.ForeignJointAccountEnrollmentMetadataCreate$inboundSchema.optional(),
    fpsl_enrollment_metadata: fpslenrollmentmetadatacreate_js_1.FPSLEnrollmentMetaDataCreate$inboundSchema
        .optional(),
    individual_enrollment_metadata: individualenrollmentmetadatacreate_js_1.IndividualEnrollmentMetadataCreate$inboundSchema.optional(),
    ira_beneficiary_enrollment_metadata: irabeneficiaryenrollmentmetadatacreate_js_1.IRABeneficiaryEnrollmentMetadataCreate$inboundSchema.optional(),
    ira_rollover_enrollment_metadata: irarolloverenrollmentmetadatacreate_js_1.IRARolloverEnrollmentMetadataCreate$inboundSchema.optional(),
    ira_roth_enrollment_metadata: irarothenrollmentmetadatacreate_js_1.IRARothEnrollmentMetadataCreate$inboundSchema
        .optional(),
    ira_sep_enrollment_metadata: irasepenrollmentmetadatacreate_js_1.IRASEPEnrollmentMetadataCreate$inboundSchema
        .optional(),
    ira_simple_enrollment_metadata: irasimpleenrollmentmetadatacreate_js_1.IRASimpleEnrollmentMetadataCreate$inboundSchema.optional(),
    ira_traditional_enrollment_metadata: iratraditionalenrollmentmetadatacreate_js_1.IRATraditionalEnrollmentMetadataCreate$inboundSchema.optional(),
    joint_community_property_enrollment_metadata: jointcommunitypropertyenrollmentmetadatacreate_js_1.JointCommunityPropertyEnrollmentMetadataCreate$inboundSchema.optional(),
    joint_tenants_by_entirety_enrollment_metadata: jointtenantsbyentiretyenrollmentmetadatacreate_js_1.JointTenantsByEntiretyEnrollmentMetadataCreate$inboundSchema.optional(),
    joint_tenants_in_common_enrollment_metadata: jointtenantsincommonenrollmentmetadatacreate_js_1.JointTenantsInCommonEnrollmentMetadataCreate$inboundSchema.optional(),
    joint_with_rights_of_survivorship_enrollment_metadata: jointwithrightsofsurvivorshipenrollmentmetadatacreate_js_1.JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$inboundSchema
        .optional(),
    llc_enrollment_metadata: llcenrollmentmetadatacreate_js_1.LLCEnrollmentMetadataCreate$inboundSchema.optional(),
    operating_enrollment_metadata: operatingenrollmentmetadatacreate_js_1.OperatingEnrollmentMetadataCreate$inboundSchema
        .optional(),
    orders_options_trading_enrollment_metadata: ordersoptionstradingenrollmentmetadatacreate_js_1.OrdersOptionsTradingEnrollmentMetadataCreate$inboundSchema.optional(),
    principal_approver_id: z.string(),
    trust_enrollment_metadata: trustenrollmentmetadatacreate_js_1.TrustEnrollmentMetadataCreate$inboundSchema
        .optional(),
    type: exports.EnrollmentCreateType$inboundSchema,
    virtual_account_number_enrollment_metadata: virtualaccountnumberenrollmentmetadatacreate_js_1.VirtualAccountNumberEnrollmentMetadataCreate$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "beneficiary_enrollment_metadata": "beneficiaryEnrollmentMetadata",
        "consent_method": "consentMethod",
        "corporation_enrollment_metadata": "corporationEnrollmentMetadata",
        "custodial_enrollment_metadata": "custodialEnrollmentMetadata",
        "estate_enrollment_metadata": "estateEnrollmentMetadata",
        "foreign_individual_account_enrollment_metadata": "foreignIndividualAccountEnrollmentMetadata",
        "foreign_joint_account_enrollment_metadata": "foreignJointAccountEnrollmentMetadata",
        "fpsl_enrollment_metadata": "fpslEnrollmentMetadata",
        "individual_enrollment_metadata": "individualEnrollmentMetadata",
        "ira_beneficiary_enrollment_metadata": "iraBeneficiaryEnrollmentMetadata",
        "ira_rollover_enrollment_metadata": "iraRolloverEnrollmentMetadata",
        "ira_roth_enrollment_metadata": "iraRothEnrollmentMetadata",
        "ira_sep_enrollment_metadata": "iraSepEnrollmentMetadata",
        "ira_simple_enrollment_metadata": "iraSimpleEnrollmentMetadata",
        "ira_traditional_enrollment_metadata": "iraTraditionalEnrollmentMetadata",
        "joint_community_property_enrollment_metadata": "jointCommunityPropertyEnrollmentMetadata",
        "joint_tenants_by_entirety_enrollment_metadata": "jointTenantsByEntiretyEnrollmentMetadata",
        "joint_tenants_in_common_enrollment_metadata": "jointTenantsInCommonEnrollmentMetadata",
        "joint_with_rights_of_survivorship_enrollment_metadata": "jointWithRightsOfSurvivorshipEnrollmentMetadata",
        "llc_enrollment_metadata": "llcEnrollmentMetadata",
        "operating_enrollment_metadata": "operatingEnrollmentMetadata",
        "orders_options_trading_enrollment_metadata": "ordersOptionsTradingEnrollmentMetadata",
        "principal_approver_id": "principalApproverId",
        "trust_enrollment_metadata": "trustEnrollmentMetadata",
        "virtual_account_number_enrollment_metadata": "virtualAccountNumberEnrollmentMetadata",
    });
});
/** @internal */
exports.EnrollmentCreate$outboundSchema = z.object({
    beneficiaryEnrollmentMetadata: beneficiaryenrollmentmetadatacreate_js_1.BeneficiaryEnrollmentMetadataCreate$outboundSchema.optional(),
    consentMethod: exports.EnrollmentCreateConsentMethod$outboundSchema.optional(),
    corporationEnrollmentMetadata: corporationenrollmentmetadatacreate_js_1.CorporationEnrollmentMetadataCreate$outboundSchema.optional(),
    custodialEnrollmentMetadata: custodialenrollmentmetadatacreate_js_1.CustodialEnrollmentMetadataCreate$outboundSchema
        .optional(),
    estateEnrollmentMetadata: estateenrollmentmetadatacreate_js_1.EstateEnrollmentMetadataCreate$outboundSchema
        .optional(),
    foreignIndividualAccountEnrollmentMetadata: foreignindividualaccountenrollmentmetadatacreate_js_1.ForeignIndividualAccountEnrollmentMetadataCreate$outboundSchema.optional(),
    foreignJointAccountEnrollmentMetadata: foreignjointaccountenrollmentmetadatacreate_js_1.ForeignJointAccountEnrollmentMetadataCreate$outboundSchema.optional(),
    fpslEnrollmentMetadata: fpslenrollmentmetadatacreate_js_1.FPSLEnrollmentMetaDataCreate$outboundSchema
        .optional(),
    individualEnrollmentMetadata: individualenrollmentmetadatacreate_js_1.IndividualEnrollmentMetadataCreate$outboundSchema.optional(),
    iraBeneficiaryEnrollmentMetadata: irabeneficiaryenrollmentmetadatacreate_js_1.IRABeneficiaryEnrollmentMetadataCreate$outboundSchema.optional(),
    iraRolloverEnrollmentMetadata: irarolloverenrollmentmetadatacreate_js_1.IRARolloverEnrollmentMetadataCreate$outboundSchema.optional(),
    iraRothEnrollmentMetadata: irarothenrollmentmetadatacreate_js_1.IRARothEnrollmentMetadataCreate$outboundSchema
        .optional(),
    iraSepEnrollmentMetadata: irasepenrollmentmetadatacreate_js_1.IRASEPEnrollmentMetadataCreate$outboundSchema
        .optional(),
    iraSimpleEnrollmentMetadata: irasimpleenrollmentmetadatacreate_js_1.IRASimpleEnrollmentMetadataCreate$outboundSchema
        .optional(),
    iraTraditionalEnrollmentMetadata: iratraditionalenrollmentmetadatacreate_js_1.IRATraditionalEnrollmentMetadataCreate$outboundSchema.optional(),
    jointCommunityPropertyEnrollmentMetadata: jointcommunitypropertyenrollmentmetadatacreate_js_1.JointCommunityPropertyEnrollmentMetadataCreate$outboundSchema.optional(),
    jointTenantsByEntiretyEnrollmentMetadata: jointtenantsbyentiretyenrollmentmetadatacreate_js_1.JointTenantsByEntiretyEnrollmentMetadataCreate$outboundSchema.optional(),
    jointTenantsInCommonEnrollmentMetadata: jointtenantsincommonenrollmentmetadatacreate_js_1.JointTenantsInCommonEnrollmentMetadataCreate$outboundSchema.optional(),
    jointWithRightsOfSurvivorshipEnrollmentMetadata: jointwithrightsofsurvivorshipenrollmentmetadatacreate_js_1.JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$outboundSchema
        .optional(),
    llcEnrollmentMetadata: llcenrollmentmetadatacreate_js_1.LLCEnrollmentMetadataCreate$outboundSchema.optional(),
    operatingEnrollmentMetadata: operatingenrollmentmetadatacreate_js_1.OperatingEnrollmentMetadataCreate$outboundSchema
        .optional(),
    ordersOptionsTradingEnrollmentMetadata: ordersoptionstradingenrollmentmetadatacreate_js_1.OrdersOptionsTradingEnrollmentMetadataCreate$outboundSchema.optional(),
    principalApproverId: z.string(),
    trustEnrollmentMetadata: trustenrollmentmetadatacreate_js_1.TrustEnrollmentMetadataCreate$outboundSchema
        .optional(),
    type: exports.EnrollmentCreateType$outboundSchema,
    virtualAccountNumberEnrollmentMetadata: virtualaccountnumberenrollmentmetadatacreate_js_1.VirtualAccountNumberEnrollmentMetadataCreate$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        beneficiaryEnrollmentMetadata: "beneficiary_enrollment_metadata",
        consentMethod: "consent_method",
        corporationEnrollmentMetadata: "corporation_enrollment_metadata",
        custodialEnrollmentMetadata: "custodial_enrollment_metadata",
        estateEnrollmentMetadata: "estate_enrollment_metadata",
        foreignIndividualAccountEnrollmentMetadata: "foreign_individual_account_enrollment_metadata",
        foreignJointAccountEnrollmentMetadata: "foreign_joint_account_enrollment_metadata",
        fpslEnrollmentMetadata: "fpsl_enrollment_metadata",
        individualEnrollmentMetadata: "individual_enrollment_metadata",
        iraBeneficiaryEnrollmentMetadata: "ira_beneficiary_enrollment_metadata",
        iraRolloverEnrollmentMetadata: "ira_rollover_enrollment_metadata",
        iraRothEnrollmentMetadata: "ira_roth_enrollment_metadata",
        iraSepEnrollmentMetadata: "ira_sep_enrollment_metadata",
        iraSimpleEnrollmentMetadata: "ira_simple_enrollment_metadata",
        iraTraditionalEnrollmentMetadata: "ira_traditional_enrollment_metadata",
        jointCommunityPropertyEnrollmentMetadata: "joint_community_property_enrollment_metadata",
        jointTenantsByEntiretyEnrollmentMetadata: "joint_tenants_by_entirety_enrollment_metadata",
        jointTenantsInCommonEnrollmentMetadata: "joint_tenants_in_common_enrollment_metadata",
        jointWithRightsOfSurvivorshipEnrollmentMetadata: "joint_with_rights_of_survivorship_enrollment_metadata",
        llcEnrollmentMetadata: "llc_enrollment_metadata",
        operatingEnrollmentMetadata: "operating_enrollment_metadata",
        ordersOptionsTradingEnrollmentMetadata: "orders_options_trading_enrollment_metadata",
        principalApproverId: "principal_approver_id",
        trustEnrollmentMetadata: "trust_enrollment_metadata",
        virtualAccountNumberEnrollmentMetadata: "virtual_account_number_enrollment_metadata",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var EnrollmentCreate$;
(function (EnrollmentCreate$) {
    /** @deprecated use `EnrollmentCreate$inboundSchema` instead. */
    EnrollmentCreate$.inboundSchema = exports.EnrollmentCreate$inboundSchema;
    /** @deprecated use `EnrollmentCreate$outboundSchema` instead. */
    EnrollmentCreate$.outboundSchema = exports.EnrollmentCreate$outboundSchema;
})(EnrollmentCreate$ || (exports.EnrollmentCreate$ = EnrollmentCreate$ = {}));
//# sourceMappingURL=enrollmentcreate.js.map