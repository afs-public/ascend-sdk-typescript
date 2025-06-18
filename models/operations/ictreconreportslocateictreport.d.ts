import * as z from "zod";
import * as components from "../components/index.js";
/**
 * The ICT program for which to locate the report.
 */
export declare enum ProgramDateFilterProgram {
    IctProgramUnspecified = "ICT_PROGRAM_UNSPECIFIED",
    BrokerPartner = "BROKER_PARTNER",
    DepositOnly = "DEPOSIT_ONLY",
    BankingPartner = "BANKING_PARTNER",
    WithdrawalOnly = "WITHDRAWAL_ONLY",
    DigitalPartner = "DIGITAL_PARTNER"
}
export type IctReconReportsLocateIctReportRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The id of the ICT batch for which to locate the report.
     */
    batchId?: string | undefined;
    /**
     * The ICT program for which to locate the report.
     */
    programDateFilterProgram?: ProgramDateFilterProgram | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    programDateFilterProcessDateYear?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    programDateFilterProcessDateMonth?: number | undefined;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    programDateFilterProcessDateDay?: number | undefined;
};
export type IctReconReportsLocateIctReportResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    locateIctReportResponse?: components.LocateIctReportResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const ProgramDateFilterProgram$inboundSchema: z.ZodNativeEnum<typeof ProgramDateFilterProgram>;
/** @internal */
export declare const ProgramDateFilterProgram$outboundSchema: z.ZodNativeEnum<typeof ProgramDateFilterProgram>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProgramDateFilterProgram$ {
    /** @deprecated use `ProgramDateFilterProgram$inboundSchema` instead. */
    const inboundSchema: z.ZodNativeEnum<typeof ProgramDateFilterProgram>;
    /** @deprecated use `ProgramDateFilterProgram$outboundSchema` instead. */
    const outboundSchema: z.ZodNativeEnum<typeof ProgramDateFilterProgram>;
}
/** @internal */
export declare const IctReconReportsLocateIctReportRequest$inboundSchema: z.ZodType<IctReconReportsLocateIctReportRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type IctReconReportsLocateIctReportRequest$Outbound = {
    correspondent_id: string;
    batch_id?: string | undefined;
    "program_date_filter.program"?: string | undefined;
    "program_date_filter.process_date.year"?: number | undefined;
    "program_date_filter.process_date.month"?: number | undefined;
    "program_date_filter.process_date.day"?: number | undefined;
};
/** @internal */
export declare const IctReconReportsLocateIctReportRequest$outboundSchema: z.ZodType<IctReconReportsLocateIctReportRequest$Outbound, z.ZodTypeDef, IctReconReportsLocateIctReportRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctReconReportsLocateIctReportRequest$ {
    /** @deprecated use `IctReconReportsLocateIctReportRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctReconReportsLocateIctReportRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctReconReportsLocateIctReportRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctReconReportsLocateIctReportRequest$Outbound, z.ZodTypeDef, IctReconReportsLocateIctReportRequest>;
    /** @deprecated use `IctReconReportsLocateIctReportRequest$Outbound` instead. */
    type Outbound = IctReconReportsLocateIctReportRequest$Outbound;
}
/** @internal */
export declare const IctReconReportsLocateIctReportResponse$inboundSchema: z.ZodType<IctReconReportsLocateIctReportResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type IctReconReportsLocateIctReportResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LocateIctReportResponse?: components.LocateIctReportResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const IctReconReportsLocateIctReportResponse$outboundSchema: z.ZodType<IctReconReportsLocateIctReportResponse$Outbound, z.ZodTypeDef, IctReconReportsLocateIctReportResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IctReconReportsLocateIctReportResponse$ {
    /** @deprecated use `IctReconReportsLocateIctReportResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IctReconReportsLocateIctReportResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `IctReconReportsLocateIctReportResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IctReconReportsLocateIctReportResponse$Outbound, z.ZodTypeDef, IctReconReportsLocateIctReportResponse>;
    /** @deprecated use `IctReconReportsLocateIctReportResponse$Outbound` instead. */
    type Outbound = IctReconReportsLocateIctReportResponse$Outbound;
}
//# sourceMappingURL=ictreconreportslocateictreport.d.ts.map