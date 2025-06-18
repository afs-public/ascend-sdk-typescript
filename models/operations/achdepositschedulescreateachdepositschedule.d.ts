import * as z from "zod";
import * as components from "../components/index.js";
export type AchDepositSchedulesCreateAchDepositScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    achDepositScheduleCreate: components.AchDepositScheduleCreate;
};
export type AchDepositSchedulesCreateAchDepositScheduleResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    achDepositSchedule?: components.AchDepositSchedule | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AchDepositSchedulesCreateAchDepositScheduleRequest$inboundSchema: z.ZodType<AchDepositSchedulesCreateAchDepositScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesCreateAchDepositScheduleRequest$Outbound = {
    account_id: string;
    AchDepositScheduleCreate: components.AchDepositScheduleCreate$Outbound;
};
/** @internal */
export declare const AchDepositSchedulesCreateAchDepositScheduleRequest$outboundSchema: z.ZodType<AchDepositSchedulesCreateAchDepositScheduleRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesCreateAchDepositScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesCreateAchDepositScheduleRequest$ {
    /** @deprecated use `AchDepositSchedulesCreateAchDepositScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesCreateAchDepositScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesCreateAchDepositScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesCreateAchDepositScheduleRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesCreateAchDepositScheduleRequest>;
    /** @deprecated use `AchDepositSchedulesCreateAchDepositScheduleRequest$Outbound` instead. */
    type Outbound = AchDepositSchedulesCreateAchDepositScheduleRequest$Outbound;
}
/** @internal */
export declare const AchDepositSchedulesCreateAchDepositScheduleResponse$inboundSchema: z.ZodType<AchDepositSchedulesCreateAchDepositScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesCreateAchDepositScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDepositSchedule?: components.AchDepositSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositSchedulesCreateAchDepositScheduleResponse$outboundSchema: z.ZodType<AchDepositSchedulesCreateAchDepositScheduleResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesCreateAchDepositScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesCreateAchDepositScheduleResponse$ {
    /** @deprecated use `AchDepositSchedulesCreateAchDepositScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesCreateAchDepositScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesCreateAchDepositScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesCreateAchDepositScheduleResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesCreateAchDepositScheduleResponse>;
    /** @deprecated use `AchDepositSchedulesCreateAchDepositScheduleResponse$Outbound` instead. */
    type Outbound = AchDepositSchedulesCreateAchDepositScheduleResponse$Outbound;
}
//# sourceMappingURL=achdepositschedulescreateachdepositschedule.d.ts.map