import * as z from "zod";
import { WithdrawalScheduleDetailsUpdate, WithdrawalScheduleDetailsUpdate$Outbound } from "./withdrawalscheduledetailsupdate.js";
/**
 * A withdrawal transfer schedule using the Wire mechanism
 */
export type WireWithdrawalScheduleUpdate = {
    /**
     * Details of withdrawal schedule transfers
     */
    scheduleDetails?: WithdrawalScheduleDetailsUpdate | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleUpdate$inboundSchema: z.ZodType<WireWithdrawalScheduleUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalScheduleUpdate$Outbound = {
    schedule_details?: WithdrawalScheduleDetailsUpdate$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalScheduleUpdate$outboundSchema: z.ZodType<WireWithdrawalScheduleUpdate$Outbound, z.ZodTypeDef, WireWithdrawalScheduleUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalScheduleUpdate$ {
    /** @deprecated use `WireWithdrawalScheduleUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalScheduleUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalScheduleUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalScheduleUpdate$Outbound, z.ZodTypeDef, WireWithdrawalScheduleUpdate>;
    /** @deprecated use `WireWithdrawalScheduleUpdate$Outbound` instead. */
    type Outbound = WireWithdrawalScheduleUpdate$Outbound;
}
//# sourceMappingURL=wirewithdrawalscheduleupdate.d.ts.map