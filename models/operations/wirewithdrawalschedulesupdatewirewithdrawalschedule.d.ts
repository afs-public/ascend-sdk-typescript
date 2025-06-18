import * as z from "zod";
import * as components from "../components/index.js";
export type WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The wireWithdrawalSchedule id.
     */
    wireWithdrawalScheduleId: string;
    /**
     * A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable
     */
    updateMask?: string | undefined;
    wireWithdrawalScheduleUpdate: components.WireWithdrawalScheduleUpdate;
};
export type WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse = {
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
export declare const WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$inboundSchema: z.ZodType<WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$Outbound = {
    account_id: string;
    wireWithdrawalSchedule_id: string;
    update_mask?: string | undefined;
    WireWithdrawalScheduleUpdate: components.WireWithdrawalScheduleUpdate$Outbound;
};
/** @internal */
export declare const WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$outboundSchema: z.ZodType<WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$ {
    /** @deprecated use `WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest>;
    /** @deprecated use `WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest$Outbound;
}
/** @internal */
export declare const WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$inboundSchema: z.ZodType<WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WireWithdrawalSchedule?: components.WireWithdrawalSchedule$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$outboundSchema: z.ZodType<WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$ {
    /** @deprecated use `WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse>;
    /** @deprecated use `WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse$Outbound;
}
//# sourceMappingURL=wirewithdrawalschedulesupdatewirewithdrawalschedule.d.ts.map