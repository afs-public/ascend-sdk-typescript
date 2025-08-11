import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The wireWithdrawalSchedule id.
     */
    wireWithdrawalScheduleId: string;
    cancelWireWithdrawalScheduleRequestCreate: components.CancelWireWithdrawalScheduleRequestCreate;
};
export type WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse = {
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
export declare const WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$inboundSchema: z.ZodType<WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$Outbound = {
    account_id: string;
    wireWithdrawalSchedule_id: string;
    CancelWireWithdrawalScheduleRequestCreate: components.CancelWireWithdrawalScheduleRequestCreate$Outbound;
};
/** @internal */
export declare const WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$outboundSchema: z.ZodType<WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$ {
    /** @deprecated use `WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest>;
    /** @deprecated use `WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest$Outbound;
}
export declare function wireWithdrawalSchedulesCancelWireWithdrawalScheduleRequestToJSON(wireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest: WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest): string;
export declare function wireWithdrawalSchedulesCancelWireWithdrawalScheduleRequestFromJSON(jsonString: string): SafeParseResult<WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest, SDKValidationError>;
/** @internal */
export declare const WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$inboundSchema: z.ZodType<WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireWithdrawalSchedule?: components.WireWithdrawalSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$outboundSchema: z.ZodType<WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$ {
    /** @deprecated use `WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse>;
    /** @deprecated use `WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse$Outbound;
}
export declare function wireWithdrawalSchedulesCancelWireWithdrawalScheduleResponseToJSON(wireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse: WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse): string;
export declare function wireWithdrawalSchedulesCancelWireWithdrawalScheduleResponseFromJSON(jsonString: string): SafeParseResult<WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse, SDKValidationError>;
//# sourceMappingURL=wirewithdrawalschedulescancelwirewithdrawalschedule.d.ts.map