import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    wireWithdrawalScheduleCreate: components.WireWithdrawalScheduleCreate;
};
export type WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse = {
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
export declare const WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$inboundSchema: z.ZodType<WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$Outbound = {
    account_id: string;
    WireWithdrawalScheduleCreate: components.WireWithdrawalScheduleCreate$Outbound;
};
/** @internal */
export declare const WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$outboundSchema: z.ZodType<WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$ {
    /** @deprecated use `WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest>;
    /** @deprecated use `WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest$Outbound;
}
export declare function wireWithdrawalSchedulesCreateWireWithdrawalScheduleRequestToJSON(wireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest: WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest): string;
export declare function wireWithdrawalSchedulesCreateWireWithdrawalScheduleRequestFromJSON(jsonString: string): SafeParseResult<WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest, SDKValidationError>;
/** @internal */
export declare const WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$inboundSchema: z.ZodType<WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireWithdrawalSchedule?: components.WireWithdrawalSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$outboundSchema: z.ZodType<WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$ {
    /** @deprecated use `WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse>;
    /** @deprecated use `WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse$Outbound;
}
export declare function wireWithdrawalSchedulesCreateWireWithdrawalScheduleResponseToJSON(wireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse: WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse): string;
export declare function wireWithdrawalSchedulesCreateWireWithdrawalScheduleResponseFromJSON(jsonString: string): SafeParseResult<WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse, SDKValidationError>;
//# sourceMappingURL=wirewithdrawalschedulescreatewirewithdrawalschedule.d.ts.map