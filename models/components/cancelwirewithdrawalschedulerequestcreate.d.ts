import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to cancel a Wire withdrawal transfer schedule
 */
export type CancelWireWithdrawalScheduleRequestCreate = {
    /**
     * A comment as to why the Wire withdrawal schedule is being canceled
     */
    comment?: string | undefined;
    /**
     * The name of the Wire withdrawal transfer schedule to cancel
     */
    name: string;
};
/** @internal */
export declare const CancelWireWithdrawalScheduleRequestCreate$inboundSchema: z.ZodType<CancelWireWithdrawalScheduleRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelWireWithdrawalScheduleRequestCreate$Outbound = {
    comment?: string | undefined;
    name: string;
};
/** @internal */
export declare const CancelWireWithdrawalScheduleRequestCreate$outboundSchema: z.ZodType<CancelWireWithdrawalScheduleRequestCreate$Outbound, z.ZodTypeDef, CancelWireWithdrawalScheduleRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelWireWithdrawalScheduleRequestCreate$ {
    /** @deprecated use `CancelWireWithdrawalScheduleRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelWireWithdrawalScheduleRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelWireWithdrawalScheduleRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelWireWithdrawalScheduleRequestCreate$Outbound, z.ZodTypeDef, CancelWireWithdrawalScheduleRequestCreate>;
    /** @deprecated use `CancelWireWithdrawalScheduleRequestCreate$Outbound` instead. */
    type Outbound = CancelWireWithdrawalScheduleRequestCreate$Outbound;
}
export declare function cancelWireWithdrawalScheduleRequestCreateToJSON(cancelWireWithdrawalScheduleRequestCreate: CancelWireWithdrawalScheduleRequestCreate): string;
export declare function cancelWireWithdrawalScheduleRequestCreateFromJSON(jsonString: string): SafeParseResult<CancelWireWithdrawalScheduleRequestCreate, SDKValidationError>;
//# sourceMappingURL=cancelwirewithdrawalschedulerequestcreate.d.ts.map