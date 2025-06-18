import * as z from "zod";
import { AchDepositSchedule, AchDepositSchedule$Outbound } from "./achdepositschedule.js";
/**
 * A paged response containing a list of ACH deposit transfer schedules
 */
export type ListAchDepositSchedulesResponse = {
    /**
     * The list of transfer schedules
     */
    achDepositSchedules?: Array<AchDepositSchedule> | undefined;
    /**
     * The next page token
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListAchDepositSchedulesResponse$inboundSchema: z.ZodType<ListAchDepositSchedulesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAchDepositSchedulesResponse$Outbound = {
    ach_deposit_schedules?: Array<AchDepositSchedule$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListAchDepositSchedulesResponse$outboundSchema: z.ZodType<ListAchDepositSchedulesResponse$Outbound, z.ZodTypeDef, ListAchDepositSchedulesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAchDepositSchedulesResponse$ {
    /** @deprecated use `ListAchDepositSchedulesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAchDepositSchedulesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAchDepositSchedulesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAchDepositSchedulesResponse$Outbound, z.ZodTypeDef, ListAchDepositSchedulesResponse>;
    /** @deprecated use `ListAchDepositSchedulesResponse$Outbound` instead. */
    type Outbound = ListAchDepositSchedulesResponse$Outbound;
}
//# sourceMappingURL=listachdepositschedulesresponse.d.ts.map