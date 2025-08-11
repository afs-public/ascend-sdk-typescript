import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achWithdrawalSchedule id.
     */
    achWithdrawalScheduleId: string;
    /**
     * A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable
     */
    updateMask?: string | undefined;
    achWithdrawalScheduleUpdate: components.AchWithdrawalScheduleUpdate;
};
export type AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse = {
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
export declare const AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$inboundSchema: z.ZodType<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$Outbound = {
    account_id: string;
    achWithdrawalSchedule_id: string;
    update_mask?: string | undefined;
    AchWithdrawalScheduleUpdate: components.AchWithdrawalScheduleUpdate$Outbound;
};
/** @internal */
export declare const AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$outboundSchema: z.ZodType<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$ {
    /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest>;
    /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$Outbound;
}
export declare function achWithdrawalSchedulesUpdateAchWithdrawalScheduleRequestToJSON(achWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest: AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest): string;
export declare function achWithdrawalSchedulesUpdateAchWithdrawalScheduleRequestFromJSON(jsonString: string): SafeParseResult<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$inboundSchema: z.ZodType<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawalSchedule?: components.AchWithdrawalSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$outboundSchema: z.ZodType<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$ {
    /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse>;
    /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$Outbound;
}
export declare function achWithdrawalSchedulesUpdateAchWithdrawalScheduleResponseToJSON(achWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse: AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse): string;
export declare function achWithdrawalSchedulesUpdateAchWithdrawalScheduleResponseFromJSON(jsonString: string): SafeParseResult<AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse, SDKValidationError>;
//# sourceMappingURL=achwithdrawalschedulesupdateachwithdrawalschedule.d.ts.map