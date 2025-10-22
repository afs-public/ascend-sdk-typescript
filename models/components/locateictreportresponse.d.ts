import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The process date of the batch associated with the report.
 */
export type ProcessDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * The ICT program associated with the report.
 */
export declare enum LocateIctReportResponseProgram {
    IctProgramUnspecified = "ICT_PROGRAM_UNSPECIFIED",
    BrokerPartner = "BROKER_PARTNER",
    DepositOnly = "DEPOSIT_ONLY",
    BankingPartner = "BANKING_PARTNER",
    MoneyTransmitter = "MONEY_TRANSMITTER",
    WithdrawalOnly = "WITHDRAWAL_ONLY",
    DigitalPartner = "DIGITAL_PARTNER"
}
/**
 * The ICT program associated with the report.
 */
export type LocateIctReportResponseProgramOpen = OpenEnum<typeof LocateIctReportResponseProgram>;
/**
 * A response containing recon report descriptors and a file download link for the report.
 */
export type LocateIctReportResponse = {
    /**
     * The id of the batch associated with the report.
     */
    batchId?: string | undefined;
    /**
     * The timestamp when the report was created.
     */
    createTime?: Date | null | undefined;
    /**
     * The signed file download uri. The link will expire after a set period of time.
     */
    downloadUri?: string | undefined;
    /**
     * The process date of the batch associated with the report.
     */
    processDate?: ProcessDate | null | undefined;
    /**
     * The ICT program associated with the report.
     */
    program?: LocateIctReportResponseProgramOpen | undefined;
};
/** @internal */
export declare const ProcessDate$inboundSchema: z.ZodType<ProcessDate, z.ZodTypeDef, unknown>;
/** @internal */
export type ProcessDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const ProcessDate$outboundSchema: z.ZodType<ProcessDate$Outbound, z.ZodTypeDef, ProcessDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProcessDate$ {
    /** @deprecated use `ProcessDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProcessDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProcessDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProcessDate$Outbound, z.ZodTypeDef, ProcessDate>;
    /** @deprecated use `ProcessDate$Outbound` instead. */
    type Outbound = ProcessDate$Outbound;
}
export declare function processDateToJSON(processDate: ProcessDate): string;
export declare function processDateFromJSON(jsonString: string): SafeParseResult<ProcessDate, SDKValidationError>;
/** @internal */
export declare const LocateIctReportResponseProgram$inboundSchema: z.ZodType<LocateIctReportResponseProgramOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LocateIctReportResponseProgram$outboundSchema: z.ZodType<LocateIctReportResponseProgramOpen, z.ZodTypeDef, LocateIctReportResponseProgramOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LocateIctReportResponseProgram$ {
    /** @deprecated use `LocateIctReportResponseProgram$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LocateIctReportResponseProgramOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LocateIctReportResponseProgram$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LocateIctReportResponseProgramOpen, z.ZodTypeDef, LocateIctReportResponseProgramOpen>;
}
/** @internal */
export declare const LocateIctReportResponse$inboundSchema: z.ZodType<LocateIctReportResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type LocateIctReportResponse$Outbound = {
    batch_id?: string | undefined;
    create_time?: string | null | undefined;
    download_uri?: string | undefined;
    process_date?: ProcessDate$Outbound | null | undefined;
    program?: string | undefined;
};
/** @internal */
export declare const LocateIctReportResponse$outboundSchema: z.ZodType<LocateIctReportResponse$Outbound, z.ZodTypeDef, LocateIctReportResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LocateIctReportResponse$ {
    /** @deprecated use `LocateIctReportResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LocateIctReportResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `LocateIctReportResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LocateIctReportResponse$Outbound, z.ZodTypeDef, LocateIctReportResponse>;
    /** @deprecated use `LocateIctReportResponse$Outbound` instead. */
    type Outbound = LocateIctReportResponse$Outbound;
}
export declare function locateIctReportResponseToJSON(locateIctReportResponse: LocateIctReportResponse): string;
export declare function locateIctReportResponseFromJSON(jsonString: string): SafeParseResult<LocateIctReportResponse, SDKValidationError>;
//# sourceMappingURL=locateictreportresponse.d.ts.map