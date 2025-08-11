import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { WireWithdrawalSchedule, WireWithdrawalSchedule$Outbound } from "./wirewithdrawalschedule.js";
/**
 * A paged response containing a list of Wire withdrawal transfer schedules
 */
export type ListWireWithdrawalSchedulesResponse = {
    /**
     * The next page token
     */
    nextPageToken?: string | undefined;
    /**
     * The list of transfer schedules
     */
    wireWithdrawalSchedules?: Array<WireWithdrawalSchedule> | undefined;
};
/** @internal */
export declare const ListWireWithdrawalSchedulesResponse$inboundSchema: z.ZodType<ListWireWithdrawalSchedulesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListWireWithdrawalSchedulesResponse$Outbound = {
    next_page_token?: string | undefined;
    wire_withdrawal_schedules?: Array<WireWithdrawalSchedule$Outbound> | undefined;
};
/** @internal */
export declare const ListWireWithdrawalSchedulesResponse$outboundSchema: z.ZodType<ListWireWithdrawalSchedulesResponse$Outbound, z.ZodTypeDef, ListWireWithdrawalSchedulesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListWireWithdrawalSchedulesResponse$ {
    /** @deprecated use `ListWireWithdrawalSchedulesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListWireWithdrawalSchedulesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListWireWithdrawalSchedulesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListWireWithdrawalSchedulesResponse$Outbound, z.ZodTypeDef, ListWireWithdrawalSchedulesResponse>;
    /** @deprecated use `ListWireWithdrawalSchedulesResponse$Outbound` instead. */
    type Outbound = ListWireWithdrawalSchedulesResponse$Outbound;
}
export declare function listWireWithdrawalSchedulesResponseToJSON(listWireWithdrawalSchedulesResponse: ListWireWithdrawalSchedulesResponse): string;
export declare function listWireWithdrawalSchedulesResponseFromJSON(jsonString: string): SafeParseResult<ListWireWithdrawalSchedulesResponse, SDKValidationError>;
//# sourceMappingURL=listwirewithdrawalschedulesresponse.d.ts.map