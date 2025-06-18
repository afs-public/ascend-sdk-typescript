import * as z from "zod";
import * as components from "../components/index.js";
export type AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achWithdrawalSchedule id.
     */
    achWithdrawalScheduleId: string;
};
export type AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    achWithdrawalSchedule?: components.AchWithdrawalSchedule | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$inboundSchema: z.ZodType<AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$Outbound = {
    account_id: string;
    achWithdrawalSchedule_id: string;
};
/** @internal */
export declare const AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$outboundSchema: z.ZodType<AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$ {
    /** @deprecated use `AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest>;
    /** @deprecated use `AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesGetAchWithdrawalScheduleRequest$Outbound;
}
/** @internal */
export declare const AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$inboundSchema: z.ZodType<AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawalSchedule?: components.AchWithdrawalSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$outboundSchema: z.ZodType<AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$ {
    /** @deprecated use `AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse>;
    /** @deprecated use `AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse$Outbound;
}
//# sourceMappingURL=achwithdrawalschedulesgetachwithdrawalschedule.d.ts.map