import * as z from "zod";
/**
 * Request to cancel an ACH withdrawal transfer schedule
 */
export type CancelAchWithdrawalScheduleRequestCreate = {
    /**
     * A comment as to why the ACH withdrawal schedule is being canceled
     */
    comment?: string | undefined;
    /**
     * The name of the ACH withdrawal transfer schedule to cancel
     */
    name: string;
};
/** @internal */
export declare const CancelAchWithdrawalScheduleRequestCreate$inboundSchema: z.ZodType<CancelAchWithdrawalScheduleRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelAchWithdrawalScheduleRequestCreate$Outbound = {
    comment?: string | undefined;
    name: string;
};
/** @internal */
export declare const CancelAchWithdrawalScheduleRequestCreate$outboundSchema: z.ZodType<CancelAchWithdrawalScheduleRequestCreate$Outbound, z.ZodTypeDef, CancelAchWithdrawalScheduleRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelAchWithdrawalScheduleRequestCreate$ {
    /** @deprecated use `CancelAchWithdrawalScheduleRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelAchWithdrawalScheduleRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelAchWithdrawalScheduleRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelAchWithdrawalScheduleRequestCreate$Outbound, z.ZodTypeDef, CancelAchWithdrawalScheduleRequestCreate>;
    /** @deprecated use `CancelAchWithdrawalScheduleRequestCreate$Outbound` instead. */
    type Outbound = CancelAchWithdrawalScheduleRequestCreate$Outbound;
}
//# sourceMappingURL=cancelachwithdrawalschedulerequestcreate.d.ts.map