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
exports.IctReconReportsLocateIctReportResponse$ = exports.IctReconReportsLocateIctReportResponse$outboundSchema = exports.IctReconReportsLocateIctReportResponse$inboundSchema = exports.IctReconReportsLocateIctReportRequest$ = exports.IctReconReportsLocateIctReportRequest$outboundSchema = exports.IctReconReportsLocateIctReportRequest$inboundSchema = exports.ProgramDateFilterProgram$ = exports.ProgramDateFilterProgram$outboundSchema = exports.ProgramDateFilterProgram$inboundSchema = exports.ProgramDateFilterProgram = void 0;
const z = __importStar(require("zod"));
const primitives_js_1 = require("../../lib/primitives.js");
const components = __importStar(require("../components/index.js"));
/**
 * The ICT program for which to locate the report.
 */
var ProgramDateFilterProgram;
(function (ProgramDateFilterProgram) {
    ProgramDateFilterProgram["IctProgramUnspecified"] = "ICT_PROGRAM_UNSPECIFIED";
    ProgramDateFilterProgram["BrokerPartner"] = "BROKER_PARTNER";
    ProgramDateFilterProgram["DepositOnly"] = "DEPOSIT_ONLY";
    ProgramDateFilterProgram["BankingPartner"] = "BANKING_PARTNER";
    ProgramDateFilterProgram["WithdrawalOnly"] = "WITHDRAWAL_ONLY";
    ProgramDateFilterProgram["DigitalPartner"] = "DIGITAL_PARTNER";
})(ProgramDateFilterProgram || (exports.ProgramDateFilterProgram = ProgramDateFilterProgram = {}));
/** @internal */
exports.ProgramDateFilterProgram$inboundSchema = z.nativeEnum(ProgramDateFilterProgram);
/** @internal */
exports.ProgramDateFilterProgram$outboundSchema = exports.ProgramDateFilterProgram$inboundSchema;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var ProgramDateFilterProgram$;
(function (ProgramDateFilterProgram$) {
    /** @deprecated use `ProgramDateFilterProgram$inboundSchema` instead. */
    ProgramDateFilterProgram$.inboundSchema = exports.ProgramDateFilterProgram$inboundSchema;
    /** @deprecated use `ProgramDateFilterProgram$outboundSchema` instead. */
    ProgramDateFilterProgram$.outboundSchema = exports.ProgramDateFilterProgram$outboundSchema;
})(ProgramDateFilterProgram$ || (exports.ProgramDateFilterProgram$ = ProgramDateFilterProgram$ = {}));
/** @internal */
exports.IctReconReportsLocateIctReportRequest$inboundSchema = z.object({
    correspondent_id: z.string(),
    batch_id: z.string().optional(),
    "program_date_filter.program": exports.ProgramDateFilterProgram$inboundSchema
        .optional(),
    "program_date_filter.process_date.year": z.number().int().optional(),
    "program_date_filter.process_date.month": z.number().int().optional(),
    "program_date_filter.process_date.day": z.number().int().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "correspondent_id": "correspondentId",
        "batch_id": "batchId",
        "program_date_filter.program": "programDateFilterProgram",
        "program_date_filter.process_date.year": "programDateFilterProcessDateYear",
        "program_date_filter.process_date.month": "programDateFilterProcessDateMonth",
        "program_date_filter.process_date.day": "programDateFilterProcessDateDay",
    });
});
/** @internal */
exports.IctReconReportsLocateIctReportRequest$outboundSchema = z.object({
    correspondentId: z.string(),
    batchId: z.string().optional(),
    programDateFilterProgram: exports.ProgramDateFilterProgram$outboundSchema.optional(),
    programDateFilterProcessDateYear: z.number().int().optional(),
    programDateFilterProcessDateMonth: z.number().int().optional(),
    programDateFilterProcessDateDay: z.number().int().optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        correspondentId: "correspondent_id",
        batchId: "batch_id",
        programDateFilterProgram: "program_date_filter.program",
        programDateFilterProcessDateYear: "program_date_filter.process_date.year",
        programDateFilterProcessDateMonth: "program_date_filter.process_date.month",
        programDateFilterProcessDateDay: "program_date_filter.process_date.day",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IctReconReportsLocateIctReportRequest$;
(function (IctReconReportsLocateIctReportRequest$) {
    /** @deprecated use `IctReconReportsLocateIctReportRequest$inboundSchema` instead. */
    IctReconReportsLocateIctReportRequest$.inboundSchema = exports.IctReconReportsLocateIctReportRequest$inboundSchema;
    /** @deprecated use `IctReconReportsLocateIctReportRequest$outboundSchema` instead. */
    IctReconReportsLocateIctReportRequest$.outboundSchema = exports.IctReconReportsLocateIctReportRequest$outboundSchema;
})(IctReconReportsLocateIctReportRequest$ || (exports.IctReconReportsLocateIctReportRequest$ = IctReconReportsLocateIctReportRequest$ = {}));
/** @internal */
exports.IctReconReportsLocateIctReportResponse$inboundSchema = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    LocateIctReportResponse: components.LocateIctReportResponse$inboundSchema
        .optional(),
    Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        "HttpMeta": "httpMeta",
        "LocateIctReportResponse": "locateIctReportResponse",
        "Status": "status",
    });
});
/** @internal */
exports.IctReconReportsLocateIctReportResponse$outboundSchema = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    locateIctReportResponse: components.LocateIctReportResponse$outboundSchema
        .optional(),
    status: components.Status$outboundSchema.optional(),
}).transform((v) => {
    return (0, primitives_js_1.remap)(v, {
        httpMeta: "HttpMeta",
        locateIctReportResponse: "LocateIctReportResponse",
        status: "Status",
    });
});
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
var IctReconReportsLocateIctReportResponse$;
(function (IctReconReportsLocateIctReportResponse$) {
    /** @deprecated use `IctReconReportsLocateIctReportResponse$inboundSchema` instead. */
    IctReconReportsLocateIctReportResponse$.inboundSchema = exports.IctReconReportsLocateIctReportResponse$inboundSchema;
    /** @deprecated use `IctReconReportsLocateIctReportResponse$outboundSchema` instead. */
    IctReconReportsLocateIctReportResponse$.outboundSchema = exports.IctReconReportsLocateIctReportResponse$outboundSchema;
})(IctReconReportsLocateIctReportResponse$ || (exports.IctReconReportsLocateIctReportResponse$ = IctReconReportsLocateIctReportResponse$ = {}));
//# sourceMappingURL=ictreconreportslocateictreport.js.map