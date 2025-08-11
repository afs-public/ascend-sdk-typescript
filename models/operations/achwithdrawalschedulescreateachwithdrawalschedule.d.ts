import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    achWithdrawalScheduleCreate: components.AchWithdrawalScheduleCreate;
};
export type AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse = {
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
export declare const AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$inboundSchema: z.ZodType<AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$Outbound = {
    account_id: string;
    AchWithdrawalScheduleCreate: components.AchWithdrawalScheduleCreate$Outbound;
};
/** @internal */
export declare const AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$outboundSchema: z.ZodType<AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$ {
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest>;
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest$Outbound;
}
export declare function achWithdrawalSchedulesCreateAchWithdrawalScheduleRequestToJSON(achWithdrawalSchedulesCreateAchWithdrawalScheduleRequest: AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest): string;
export declare function achWithdrawalSchedulesCreateAchWithdrawalScheduleRequestFromJSON(jsonString: string): SafeParseResult<AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$inboundSchema: z.ZodType<AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawalSchedule?: components.AchWithdrawalSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$outboundSchema: z.ZodType<AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$ {
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse>;
    /** @deprecated use `AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse$Outbound;
}
export declare function achWithdrawalSchedulesCreateAchWithdrawalScheduleResponseToJSON(achWithdrawalSchedulesCreateAchWithdrawalScheduleResponse: AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse): string;
export declare function achWithdrawalSchedulesCreateAchWithdrawalScheduleResponseFromJSON(jsonString: string): SafeParseResult<AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse, SDKValidationError>;
//# sourceMappingURL=achwithdrawalschedulescreateachwithdrawalschedule.d.ts.map