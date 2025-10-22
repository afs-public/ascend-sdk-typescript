import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The achWithdrawalSchedule id.
     */
    achWithdrawalScheduleId: string;
    cancelAchWithdrawalScheduleRequestCreate: components.CancelAchWithdrawalScheduleRequestCreate;
};
export type AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    achWithdrawalSchedule?: components.AchWithdrawalSchedule | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     *
     * @remarks
     * FAILED_PRECONDITION: The schedule is in a state that doesn't allow cancellation.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$inboundSchema: z.ZodType<AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$Outbound = {
    account_id: string;
    achWithdrawalSchedule_id: string;
    CancelAchWithdrawalScheduleRequestCreate: components.CancelAchWithdrawalScheduleRequestCreate$Outbound;
};
/** @internal */
export declare const AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$outboundSchema: z.ZodType<AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$ {
    /** @deprecated use `AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest>;
    /** @deprecated use `AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest$Outbound;
}
export declare function achWithdrawalSchedulesCancelAchWithdrawalScheduleRequestToJSON(achWithdrawalSchedulesCancelAchWithdrawalScheduleRequest: AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest): string;
export declare function achWithdrawalSchedulesCancelAchWithdrawalScheduleRequestFromJSON(jsonString: string): SafeParseResult<AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$inboundSchema: z.ZodType<AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawalSchedule?: components.AchWithdrawalSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$outboundSchema: z.ZodType<AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$ {
    /** @deprecated use `AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse>;
    /** @deprecated use `AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse$Outbound;
}
export declare function achWithdrawalSchedulesCancelAchWithdrawalScheduleResponseToJSON(achWithdrawalSchedulesCancelAchWithdrawalScheduleResponse: AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse): string;
export declare function achWithdrawalSchedulesCancelAchWithdrawalScheduleResponseFromJSON(jsonString: string): SafeParseResult<AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse, SDKValidationError>;
//# sourceMappingURL=achwithdrawalschedulescancelachwithdrawalschedule.d.ts.map