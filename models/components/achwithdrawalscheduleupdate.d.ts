import * as z from "zod";
import { WithdrawalScheduleDetailsUpdate, WithdrawalScheduleDetailsUpdate$Outbound } from "./withdrawalscheduledetailsupdate.js";
/**
 * A withdrawal transfer schedule using the ACH mechanism
 */
export type AchWithdrawalScheduleUpdate = {
    /**
     * Details of withdrawal schedule transfers
     */
    scheduleDetails?: WithdrawalScheduleDetailsUpdate | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleUpdate$inboundSchema: z.ZodType<AchWithdrawalScheduleUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalScheduleUpdate$Outbound = {
    schedule_details?: WithdrawalScheduleDetailsUpdate$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalScheduleUpdate$outboundSchema: z.ZodType<AchWithdrawalScheduleUpdate$Outbound, z.ZodTypeDef, AchWithdrawalScheduleUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalScheduleUpdate$ {
    /** @deprecated use `AchWithdrawalScheduleUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalScheduleUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalScheduleUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalScheduleUpdate$Outbound, z.ZodTypeDef, AchWithdrawalScheduleUpdate>;
    /** @deprecated use `AchWithdrawalScheduleUpdate$Outbound` instead. */
    type Outbound = AchWithdrawalScheduleUpdate$Outbound;
}
//# sourceMappingURL=achwithdrawalscheduleupdate.d.ts.map