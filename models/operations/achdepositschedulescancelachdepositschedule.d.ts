import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchDepositSchedulesCancelAchDepositScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achDepositSchedule id.
     */
    achDepositScheduleId: string;
    cancelAchDepositScheduleRequestCreate: components.CancelAchDepositScheduleRequestCreate;
};
export type AchDepositSchedulesCancelAchDepositScheduleResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    achDepositSchedule?: components.AchDepositSchedule | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     *
     * @remarks
     * FAILED_PRECONDITION: The schedule is in a state that doesn't allow cancellation.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AchDepositSchedulesCancelAchDepositScheduleRequest$inboundSchema: z.ZodType<AchDepositSchedulesCancelAchDepositScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesCancelAchDepositScheduleRequest$Outbound = {
    account_id: string;
    achDepositSchedule_id: string;
    CancelAchDepositScheduleRequestCreate: components.CancelAchDepositScheduleRequestCreate$Outbound;
};
/** @internal */
export declare const AchDepositSchedulesCancelAchDepositScheduleRequest$outboundSchema: z.ZodType<AchDepositSchedulesCancelAchDepositScheduleRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesCancelAchDepositScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesCancelAchDepositScheduleRequest$ {
    /** @deprecated use `AchDepositSchedulesCancelAchDepositScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesCancelAchDepositScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesCancelAchDepositScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesCancelAchDepositScheduleRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesCancelAchDepositScheduleRequest>;
    /** @deprecated use `AchDepositSchedulesCancelAchDepositScheduleRequest$Outbound` instead. */
    type Outbound = AchDepositSchedulesCancelAchDepositScheduleRequest$Outbound;
}
export declare function achDepositSchedulesCancelAchDepositScheduleRequestToJSON(achDepositSchedulesCancelAchDepositScheduleRequest: AchDepositSchedulesCancelAchDepositScheduleRequest): string;
export declare function achDepositSchedulesCancelAchDepositScheduleRequestFromJSON(jsonString: string): SafeParseResult<AchDepositSchedulesCancelAchDepositScheduleRequest, SDKValidationError>;
/** @internal */
export declare const AchDepositSchedulesCancelAchDepositScheduleResponse$inboundSchema: z.ZodType<AchDepositSchedulesCancelAchDepositScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesCancelAchDepositScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchDepositSchedule?: components.AchDepositSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositSchedulesCancelAchDepositScheduleResponse$outboundSchema: z.ZodType<AchDepositSchedulesCancelAchDepositScheduleResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesCancelAchDepositScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesCancelAchDepositScheduleResponse$ {
    /** @deprecated use `AchDepositSchedulesCancelAchDepositScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesCancelAchDepositScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesCancelAchDepositScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesCancelAchDepositScheduleResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesCancelAchDepositScheduleResponse>;
    /** @deprecated use `AchDepositSchedulesCancelAchDepositScheduleResponse$Outbound` instead. */
    type Outbound = AchDepositSchedulesCancelAchDepositScheduleResponse$Outbound;
}
export declare function achDepositSchedulesCancelAchDepositScheduleResponseToJSON(achDepositSchedulesCancelAchDepositScheduleResponse: AchDepositSchedulesCancelAchDepositScheduleResponse): string;
export declare function achDepositSchedulesCancelAchDepositScheduleResponseFromJSON(jsonString: string): SafeParseResult<AchDepositSchedulesCancelAchDepositScheduleResponse, SDKValidationError>;
//# sourceMappingURL=achdepositschedulescancelachdepositschedule.d.ts.map