import * as z from "zod";
import { AchWithdrawalSchedule, AchWithdrawalSchedule$Outbound } from "./achwithdrawalschedule.js";
/**
 * A paged response containing a list of ACH withdrawal transfer schedules
 */
export type ListAchWithdrawalSchedulesResponse = {
    /**
     * The list of transfer schedules
     */
    achWithdrawalSchedules?: Array<AchWithdrawalSchedule> | undefined;
    /**
     * The next page token
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListAchWithdrawalSchedulesResponse$inboundSchema: z.ZodType<ListAchWithdrawalSchedulesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAchWithdrawalSchedulesResponse$Outbound = {
    ach_withdrawal_schedules?: Array<AchWithdrawalSchedule$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListAchWithdrawalSchedulesResponse$outboundSchema: z.ZodType<ListAchWithdrawalSchedulesResponse$Outbound, z.ZodTypeDef, ListAchWithdrawalSchedulesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAchWithdrawalSchedulesResponse$ {
    /** @deprecated use `ListAchWithdrawalSchedulesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAchWithdrawalSchedulesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAchWithdrawalSchedulesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAchWithdrawalSchedulesResponse$Outbound, z.ZodTypeDef, ListAchWithdrawalSchedulesResponse>;
    /** @deprecated use `ListAchWithdrawalSchedulesResponse$Outbound` instead. */
    type Outbound = ListAchWithdrawalSchedulesResponse$Outbound;
}
//# sourceMappingURL=listachwithdrawalschedulesresponse.d.ts.map