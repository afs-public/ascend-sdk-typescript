import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchDepositSchedulesUpdateAchDepositScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achDepositSchedule id.
     */
    achDepositScheduleId: string;
    /**
     * A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable
     */
    updateMask?: string | undefined;
    achDepositScheduleUpdate: components.AchDepositScheduleUpdate;
};
export type AchDepositSchedulesUpdateAchDepositScheduleResponse = {
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
export declare const AchDepositSchedulesUpdateAchDepositScheduleRequest$inboundSchema: z.ZodType<AchDepositSchedulesUpdateAchDepositScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesUpdateAchDepositScheduleRequest$Outbound = {
    account_id: string;
    achDepositSchedule_id: string;
    update_mask?: string | undefined;
    AchDepositScheduleUpdate: components.AchDepositScheduleUpdate$Outbound;
};
/** @internal */
export declare const AchDepositSchedulesUpdateAchDepositScheduleRequest$outboundSchema: z.ZodType<AchDepositSchedulesUpdateAchDepositScheduleRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesUpdateAchDepositScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesUpdateAchDepositScheduleRequest$ {
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesUpdateAchDepositScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesUpdateAchDepositScheduleRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesUpdateAchDepositScheduleRequest>;
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleRequest$Outbound` instead. */
    type Outbound = AchDepositSchedulesUpdateAchDepositScheduleRequest$Outbound;
}
export declare function achDepositSchedulesUpdateAchDepositScheduleRequestToJSON(achDepositSchedulesUpdateAchDepositScheduleRequest: AchDepositSchedulesUpdateAchDepositScheduleRequest): string;
export declare function achDepositSchedulesUpdateAchDepositScheduleRequestFromJSON(jsonString: string): SafeParseResult<AchDepositSchedulesUpdateAchDepositScheduleRequest, SDKValidationError>;
/** @internal */
export declare const AchDepositSchedulesUpdateAchDepositScheduleResponse$inboundSchema: z.ZodType<AchDepositSchedulesUpdateAchDepositScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesUpdateAchDepositScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDepositSchedule?: components.AchDepositSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositSchedulesUpdateAchDepositScheduleResponse$outboundSchema: z.ZodType<AchDepositSchedulesUpdateAchDepositScheduleResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesUpdateAchDepositScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesUpdateAchDepositScheduleResponse$ {
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesUpdateAchDepositScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesUpdateAchDepositScheduleResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesUpdateAchDepositScheduleResponse>;
    /** @deprecated use `AchDepositSchedulesUpdateAchDepositScheduleResponse$Outbound` instead. */
    type Outbound = AchDepositSchedulesUpdateAchDepositScheduleResponse$Outbound;
}
export declare function achDepositSchedulesUpdateAchDepositScheduleResponseToJSON(achDepositSchedulesUpdateAchDepositScheduleResponse: AchDepositSchedulesUpdateAchDepositScheduleResponse): string;
export declare function achDepositSchedulesUpdateAchDepositScheduleResponseFromJSON(jsonString: string): SafeParseResult<AchDepositSchedulesUpdateAchDepositScheduleResponse, SDKValidationError>;
//# sourceMappingURL=achdepositschedulesupdateachdepositschedule.d.ts.map