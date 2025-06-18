import * as z from "zod";
/**
 * Request to cancel an ACH deposit transfer schedule
 */
export type CancelAchDepositScheduleRequestCreate = {
    /**
     * A comment as to why the ACH deposit schedule is being canceled
     */
    comment?: string | undefined;
    /**
     * The name of the ACH deposit transfer schedule to cancel
     */
    name: string;
};
/** @internal */
export declare const CancelAchDepositScheduleRequestCreate$inboundSchema: z.ZodType<CancelAchDepositScheduleRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelAchDepositScheduleRequestCreate$Outbound = {
    comment?: string | undefined;
    name: string;
};
/** @internal */
export declare const CancelAchDepositScheduleRequestCreate$outboundSchema: z.ZodType<CancelAchDepositScheduleRequestCreate$Outbound, z.ZodTypeDef, CancelAchDepositScheduleRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelAchDepositScheduleRequestCreate$ {
    /** @deprecated use `CancelAchDepositScheduleRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelAchDepositScheduleRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelAchDepositScheduleRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelAchDepositScheduleRequestCreate$Outbound, z.ZodTypeDef, CancelAchDepositScheduleRequestCreate>;
    /** @deprecated use `CancelAchDepositScheduleRequestCreate$Outbound` instead. */
    type Outbound = CancelAchDepositScheduleRequestCreate$Outbound;
}
//# sourceMappingURL=cancelachdepositschedulerequestcreate.d.ts.map