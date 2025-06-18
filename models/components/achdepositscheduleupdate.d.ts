import * as z from "zod";
import { DepositScheduleDetailsUpdate, DepositScheduleDetailsUpdate$Outbound } from "./depositscheduledetailsupdate.js";
/**
 * A deposit transfer schedule using the ACH mechanism
 */
export type AchDepositScheduleUpdate = {
    /**
     * Details of deposit schedule transfers
     */
    scheduleDetails?: DepositScheduleDetailsUpdate | undefined;
};
/** @internal */
export declare const AchDepositScheduleUpdate$inboundSchema: z.ZodType<AchDepositScheduleUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositScheduleUpdate$Outbound = {
    schedule_details?: DepositScheduleDetailsUpdate$Outbound | undefined;
};
/** @internal */
export declare const AchDepositScheduleUpdate$outboundSchema: z.ZodType<AchDepositScheduleUpdate$Outbound, z.ZodTypeDef, AchDepositScheduleUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositScheduleUpdate$ {
    /** @deprecated use `AchDepositScheduleUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositScheduleUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositScheduleUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositScheduleUpdate$Outbound, z.ZodTypeDef, AchDepositScheduleUpdate>;
    /** @deprecated use `AchDepositScheduleUpdate$Outbound` instead. */
    type Outbound = AchDepositScheduleUpdate$Outbound;
}
//# sourceMappingURL=achdepositscheduleupdate.d.ts.map