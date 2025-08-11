import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchDepositSchedulesGetAchDepositScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achDepositSchedule id.
     */
    achDepositScheduleId: string;
};
export type AchDepositSchedulesGetAchDepositScheduleResponse = {
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
export declare const AchDepositSchedulesGetAchDepositScheduleRequest$inboundSchema: z.ZodType<AchDepositSchedulesGetAchDepositScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesGetAchDepositScheduleRequest$Outbound = {
    account_id: string;
    achDepositSchedule_id: string;
};
/** @internal */
export declare const AchDepositSchedulesGetAchDepositScheduleRequest$outboundSchema: z.ZodType<AchDepositSchedulesGetAchDepositScheduleRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesGetAchDepositScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesGetAchDepositScheduleRequest$ {
    /** @deprecated use `AchDepositSchedulesGetAchDepositScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesGetAchDepositScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesGetAchDepositScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesGetAchDepositScheduleRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesGetAchDepositScheduleRequest>;
    /** @deprecated use `AchDepositSchedulesGetAchDepositScheduleRequest$Outbound` instead. */
    type Outbound = AchDepositSchedulesGetAchDepositScheduleRequest$Outbound;
}
export declare function achDepositSchedulesGetAchDepositScheduleRequestToJSON(achDepositSchedulesGetAchDepositScheduleRequest: AchDepositSchedulesGetAchDepositScheduleRequest): string;
export declare function achDepositSchedulesGetAchDepositScheduleRequestFromJSON(jsonString: string): SafeParseResult<AchDepositSchedulesGetAchDepositScheduleRequest, SDKValidationError>;
/** @internal */
export declare const AchDepositSchedulesGetAchDepositScheduleResponse$inboundSchema: z.ZodType<AchDepositSchedulesGetAchDepositScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesGetAchDepositScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDepositSchedule?: components.AchDepositSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositSchedulesGetAchDepositScheduleResponse$outboundSchema: z.ZodType<AchDepositSchedulesGetAchDepositScheduleResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesGetAchDepositScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesGetAchDepositScheduleResponse$ {
    /** @deprecated use `AchDepositSchedulesGetAchDepositScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesGetAchDepositScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesGetAchDepositScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesGetAchDepositScheduleResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesGetAchDepositScheduleResponse>;
    /** @deprecated use `AchDepositSchedulesGetAchDepositScheduleResponse$Outbound` instead. */
    type Outbound = AchDepositSchedulesGetAchDepositScheduleResponse$Outbound;
}
export declare function achDepositSchedulesGetAchDepositScheduleResponseToJSON(achDepositSchedulesGetAchDepositScheduleResponse: AchDepositSchedulesGetAchDepositScheduleResponse): string;
export declare function achDepositSchedulesGetAchDepositScheduleResponseFromJSON(jsonString: string): SafeParseResult<AchDepositSchedulesGetAchDepositScheduleResponse, SDKValidationError>;
//# sourceMappingURL=achdepositschedulesgetachdepositschedule.d.ts.map