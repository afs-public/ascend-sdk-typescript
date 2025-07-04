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
exports.IctWithdrawalCreate$ = exports.IctWithdrawalCreate$outboundSchema = exports.IctWithdrawalCreate$inboundSchema = exports.IctWithdrawalCreateProgram$ = exports.IctWithdrawalCreateProgram$outboundSchema = exports.IctWithdrawalCreateProgram$inboundSchema = exports.IctWithdrawalCreateProgram = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const decimalcreate_js_1 = require("./decimalcreate.js");
const ictwithdrawaltravelrulecreate_js_1 = require("./ictwithdrawaltravelrulecreate.js");
const retirementdistributioncreate_js_1 = require("./retirementdistributioncreate.js");
/**
 * The name of the program that the ICT withdrawal is associated with.
 */
var IctWithdrawalCreateProgram;
(function (IctWithdrawalCreateProgram) {
    IctWithdrawalCreateProgram["IctProgramUnspecified"] = "ICT_PROGRAM_UNSPECIFIED";
    IctWithdrawalCreateProgram["BrokerPartner"] = "BROKER_PARTNER";
    IctWithdrawalCreateProgram["DepositOnly"] = "DEPOSIT_ONLY";
    IctWithdrawalCreateProgram["BankingPartner"] = "BANKING_PARTNER";
    IctWithdrawalCreateProgram["WithdrawalOnly"] = "WITHDRAWAL_ONLY";
    IctWithdrawalCreateProgram["DigitalPartner"] = "DIGITAL_PARTNER";
})(IctWithdrawalCreateProgram || (exports.IctWithdrawalCreateProgram = IctWithdrawalCreateProgram = {}));
/** @internal */
exports.IctWithdrawalCreateProgram$inboundSchema = z
    .union([
    z.nativeEnum(IctWithdrawalCreateProgram),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.IctWithdrawalCreateProgram$outboundSchema = z.union([
    z.nativeEnum(IctWithdrawalCreateProgram),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IctWithdrawalCreateProgram$;
(function (IctWithdrawalCreateProgram$) {
    /** @deprecated use `IctWithdrawalCreateProgram$inboundSchema` instead. */
    IctWithdrawalCreateProgram$.inboundSchema = exports.IctWithdrawalCreateProgram$inboundSchema;
    /** @deprecated use `IctWithdrawalCreateProgram$outboundSchema` instead. */
    IctWithdrawalCreateProgram$.outboundSchema = exports.IctWithdrawalCreateProgram$outboundSchema;
})(IctWithdrawalCreateProgram$ || (exports.IctWithdrawalCreateProgram$ = IctWithdrawalCreateProgram$ = {}));
/** @internal */
exports.IctWithdrawalCreate$inboundSchema = z.object({
    amount: decimalcreate_js_1.DecimalCreate$inboundSchema.optional(),
    client_transfer_id: z.string(),
    full_disbursement: z.boolean().optional(),
    program: exports.IctWithdrawalCreateProgram$inboundSchema,
    retirement_distribution: retirementdistributioncreate_js_1.RetirementDistributionCreate$inboundSchema
        .optional(),
    travel_rule: ictwithdrawaltravelrulecreate_js_1.IctWithdrawalTravelRuleCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "client_transfer_id": "clientTransferId",
        "full_disbursement": "fullDisbursement",
        "retirement_distribution": "retirementDistribution",
        "travel_rule": "travelRule",
    });
});
/** @internal */
exports.IctWithdrawalCreate$outboundSchema = z.object({
    amount: decimalcreate_js_1.DecimalCreate$outboundSchema.optional(),
    clientTransferId: z.string(),
    fullDisbursement: z.boolean().optional(),
    program: exports.IctWithdrawalCreateProgram$outboundSchema,
    retirementDistribution: retirementdistributioncreate_js_1.RetirementDistributionCreate$outboundSchema
        .optional(),
    travelRule: ictwithdrawaltravelrulecreate_js_1.IctWithdrawalTravelRuleCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        clientTransferId: "client_transfer_id",
        fullDisbursement: "full_disbursement",
        retirementDistribution: "retirement_distribution",
        travelRule: "travel_rule",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IctWithdrawalCreate$;
(function (IctWithdrawalCreate$) {
    /** @deprecated use `IctWithdrawalCreate$inboundSchema` instead. */
    IctWithdrawalCreate$.inboundSchema = exports.IctWithdrawalCreate$inboundSchema;
    /** @deprecated use `IctWithdrawalCreate$outboundSchema` instead. */
    IctWithdrawalCreate$.outboundSchema = exports.IctWithdrawalCreate$outboundSchema;
})(IctWithdrawalCreate$ || (exports.IctWithdrawalCreate$ = IctWithdrawalCreate$ = {}));
//# sourceMappingURL=ictwithdrawalcreate.js.map