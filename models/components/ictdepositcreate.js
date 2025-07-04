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
exports.IctDepositCreate$ = exports.IctDepositCreate$outboundSchema = exports.IctDepositCreate$inboundSchema = exports.Program$ = exports.Program$outboundSchema = exports.Program$inboundSchema = exports.Program = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
const decimalcreate_js_1 = require("./decimalcreate.js");
const ictdeposittravelrulecreate_js_1 = require("./ictdeposittravelrulecreate.js");
const retirementcontributioncreate_js_1 = require("./retirementcontributioncreate.js");
/**
 * The name of the program the ICT deposit is associated with
 */
var Program;
(function (Program) {
    Program["IctProgramUnspecified"] = "ICT_PROGRAM_UNSPECIFIED";
    Program["BrokerPartner"] = "BROKER_PARTNER";
    Program["DepositOnly"] = "DEPOSIT_ONLY";
    Program["BankingPartner"] = "BANKING_PARTNER";
    Program["WithdrawalOnly"] = "WITHDRAWAL_ONLY";
    Program["DigitalPartner"] = "DIGITAL_PARTNER";
})(Program || (exports.Program = Program = {}));
/** @internal */
exports.Program$inboundSchema = z
    .union([
    z.nativeEnum(Program),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.Program$outboundSchema = z.union([
    z.nativeEnum(Program),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var Program$;
(function (Program$) {
    /** @deprecated use `Program$inboundSchema` instead. */
    Program$.inboundSchema = exports.Program$inboundSchema;
    /** @deprecated use `Program$outboundSchema` instead. */
    Program$.outboundSchema = exports.Program$outboundSchema;
})(Program$ || (exports.Program$ = Program$ = {}));
/** @internal */
exports.IctDepositCreate$inboundSchema = z.object({
    amount: decimalcreate_js_1.DecimalCreate$inboundSchema,
    client_transfer_id: z.string(),
    program: exports.Program$inboundSchema,
    retirement_contribution: retirementcontributioncreate_js_1.RetirementContributionCreate$inboundSchema
        .optional(),
    travel_rule: ictdeposittravelrulecreate_js_1.IctDepositTravelRuleCreate$inboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "client_transfer_id": "clientTransferId",
        "retirement_contribution": "retirementContribution",
        "travel_rule": "travelRule",
    });
});
/** @internal */
exports.IctDepositCreate$outboundSchema = z.object({
    amount: decimalcreate_js_1.DecimalCreate$outboundSchema,
    clientTransferId: z.string(),
    program: exports.Program$outboundSchema,
    retirementContribution: retirementcontributioncreate_js_1.RetirementContributionCreate$outboundSchema
        .optional(),
    travelRule: ictdeposittravelrulecreate_js_1.IctDepositTravelRuleCreate$outboundSchema,
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        clientTransferId: "client_transfer_id",
        retirementContribution: "retirement_contribution",
        travelRule: "travel_rule",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IctDepositCreate$;
(function (IctDepositCreate$) {
    /** @deprecated use `IctDepositCreate$inboundSchema` instead. */
    IctDepositCreate$.inboundSchema = exports.IctDepositCreate$inboundSchema;
    /** @deprecated use `IctDepositCreate$outboundSchema` instead. */
    IctDepositCreate$.outboundSchema = exports.IctDepositCreate$outboundSchema;
})(IctDepositCreate$ || (exports.IctDepositCreate$ = IctDepositCreate$ = {}));
//# sourceMappingURL=ictdepositcreate.js.map