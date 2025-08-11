import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to cancel an existing ACH withdrawal.
 */
export type CancelAchWithdrawalRequestCreate = {
    /**
     * The name of the ACH withdrawal to cancel.
     */
    name: string;
    /**
     * The reason why the ACH withdrawal is being canceled.
     */
    reason?: string | undefined;
};
/** @internal */
export declare const CancelAchWithdrawalRequestCreate$inboundSchema: z.ZodType<CancelAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelAchWithdrawalRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const CancelAchWithdrawalRequestCreate$outboundSchema: z.ZodType<CancelAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, CancelAchWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelAchWithdrawalRequestCreate$ {
    /** @deprecated use `CancelAchWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelAchWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, CancelAchWithdrawalRequestCreate>;
    /** @deprecated use `CancelAchWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = CancelAchWithdrawalRequestCreate$Outbound;
}
export declare function cancelAchWithdrawalRequestCreateToJSON(cancelAchWithdrawalRequestCreate: CancelAchWithdrawalRequestCreate): string;
export declare function cancelAchWithdrawalRequestCreateFromJSON(jsonString: string): SafeParseResult<CancelAchWithdrawalRequestCreate, SDKValidationError>;
//# sourceMappingURL=cancelachwithdrawalrequestcreate.d.ts.map