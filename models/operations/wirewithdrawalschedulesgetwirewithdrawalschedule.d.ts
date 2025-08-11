import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The wireWithdrawalSchedule id.
     */
    wireWithdrawalScheduleId: string;
};
export type WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    wireWithdrawalSchedule?: components.WireWithdrawalSchedule | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$inboundSchema: z.ZodType<WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$Outbound = {
    account_id: string;
    wireWithdrawalSchedule_id: string;
};
/** @internal */
export declare const WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$outboundSchema: z.ZodType<WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$ {
    /** @deprecated use `WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest>;
    /** @deprecated use `WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest$Outbound;
}
export declare function wireWithdrawalSchedulesGetWireWithdrawalScheduleRequestToJSON(wireWithdrawalSchedulesGetWireWithdrawalScheduleRequest: WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest): string;
export declare function wireWithdrawalSchedulesGetWireWithdrawalScheduleRequestFromJSON(jsonString: string): SafeParseResult<WireWithdrawalSchedulesGetWireWithdrawalScheduleRequest, SDKValidationError>;
/** @internal */
export declare const WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$inboundSchema: z.ZodType<WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireWithdrawalSchedule?: components.WireWithdrawalSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$outboundSchema: z.ZodType<WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$ {
    /** @deprecated use `WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse>;
    /** @deprecated use `WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse$Outbound;
}
export declare function wireWithdrawalSchedulesGetWireWithdrawalScheduleResponseToJSON(wireWithdrawalSchedulesGetWireWithdrawalScheduleResponse: WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse): string;
export declare function wireWithdrawalSchedulesGetWireWithdrawalScheduleResponseFromJSON(jsonString: string): SafeParseResult<WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse, SDKValidationError>;
//# sourceMappingURL=wirewithdrawalschedulesgetwirewithdrawalschedule.d.ts.map