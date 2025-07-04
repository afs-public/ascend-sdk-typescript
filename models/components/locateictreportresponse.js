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
exports.LocateIctReportResponse$ = exports.LocateIctReportResponse$outboundSchema = exports.LocateIctReportResponse$inboundSchema = exports.LocateIctReportResponseProgram$ = exports.LocateIctReportResponseProgram$outboundSchema = exports.LocateIctReportResponseProgram$inboundSchema = exports.ProcessDate$ = exports.ProcessDate$outboundSchema = exports.ProcessDate$inboundSchema = exports.LocateIctReportResponseProgram = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const enums_js_1 = require("../../types/enums.js");
/**
 * The ICT program associated with the report.
 */
var LocateIctReportResponseProgram;
(function (LocateIctReportResponseProgram) {
    LocateIctReportResponseProgram["IctProgramUnspecified"] = "ICT_PROGRAM_UNSPECIFIED";
    LocateIctReportResponseProgram["BrokerPartner"] = "BROKER_PARTNER";
    LocateIctReportResponseProgram["DepositOnly"] = "DEPOSIT_ONLY";
    LocateIctReportResponseProgram["BankingPartner"] = "BANKING_PARTNER";
    LocateIctReportResponseProgram["WithdrawalOnly"] = "WITHDRAWAL_ONLY";
    LocateIctReportResponseProgram["DigitalPartner"] = "DIGITAL_PARTNER";
})(LocateIctReportResponseProgram || (exports.LocateIctReportResponseProgram = LocateIctReportResponseProgram = {}));
/** @internal */
exports.ProcessDate$inboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/** @internal */
exports.ProcessDate$outboundSchema = z.object({
    day: z.number().int().optional(),
    month: z.number().int().optional(),
    year: z.number().int().optional(),
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var ProcessDate$;
(function (ProcessDate$) {
    /** @deprecated use `ProcessDate$inboundSchema` instead. */
    ProcessDate$.inboundSchema = exports.ProcessDate$inboundSchema;
    /** @deprecated use `ProcessDate$outboundSchema` instead. */
    ProcessDate$.outboundSchema = exports.ProcessDate$outboundSchema;
})(ProcessDate$ || (exports.ProcessDate$ = ProcessDate$ = {}));
/** @internal */
exports.LocateIctReportResponseProgram$inboundSchema = z
    .union([
    z.nativeEnum(LocateIctReportResponseProgram),
    z.string().transform(enums_js_1.catchUnrecognizedEnum),
]);
/** @internal */
exports.LocateIctReportResponseProgram$outboundSchema = z.union([
    z.nativeEnum(LocateIctReportResponseProgram),
    z.string().and(z.custom()),
]);
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var LocateIctReportResponseProgram$;
(function (LocateIctReportResponseProgram$) {
    /** @deprecated use `LocateIctReportResponseProgram$inboundSchema` instead. */
    LocateIctReportResponseProgram$.inboundSchema = exports.LocateIctReportResponseProgram$inboundSchema;
    /** @deprecated use `LocateIctReportResponseProgram$outboundSchema` instead. */
    LocateIctReportResponseProgram$.outboundSchema = exports.LocateIctReportResponseProgram$outboundSchema;
})(LocateIctReportResponseProgram$ || (exports.LocateIctReportResponseProgram$ = LocateIctReportResponseProgram$ = {}));
/** @internal */
exports.LocateIctReportResponse$inboundSchema = z.object({
    batch_id: z.string().optional(),
    create_time: z.nullable(z.string().datetime({ offset: true }).transform(v => new Date(v))).optional(),
    download_uri: z.string().optional(),
    process_date: z.nullable(z.lazy(() => exports.ProcessDate$inboundSchema)).optional(),
    program: exports.LocateIctReportResponseProgram$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "batch_id": "batchId",
        "create_time": "createTime",
        "download_uri": "downloadUri",
        "process_date": "processDate",
    });
});
/** @internal */
exports.LocateIctReportResponse$outboundSchema = z.object({
    batchId: z.string().optional(),
    createTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
    downloadUri: z.string().optional(),
    processDate: z.nullable(z.lazy(() => exports.ProcessDate$outboundSchema)).optional(),
    program: exports.LocateIctReportResponseProgram$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        batchId: "batch_id",
        createTime: "create_time",
        downloadUri: "download_uri",
        processDate: "process_date",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var LocateIctReportResponse$;
(function (LocateIctReportResponse$) {
    /** @deprecated use `LocateIctReportResponse$inboundSchema` instead. */
    LocateIctReportResponse$.inboundSchema = exports.LocateIctReportResponse$inboundSchema;
    /** @deprecated use `LocateIctReportResponse$outboundSchema` instead. */
    LocateIctReportResponse$.outboundSchema = exports.LocateIctReportResponse$outboundSchema;
})(LocateIctReportResponse$ || (exports.LocateIctReportResponse$ = LocateIctReportResponse$ = {}));
//# sourceMappingURL=locateictreportresponse.js.map