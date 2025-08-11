import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to force approval of an existing ACH withdrawal that is pending review. FOR TESTING ONLY!
 */
export type ForceApproveAchWithdrawalRequestCreate = {
    /**
     * The name of the ACH withdrawal to force approve.
     */
    name: string;
};
/** @internal */
export declare const ForceApproveAchWithdrawalRequestCreate$inboundSchema: z.ZodType<ForceApproveAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceApproveAchWithdrawalRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const ForceApproveAchWithdrawalRequestCreate$outboundSchema: z.ZodType<ForceApproveAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceApproveAchWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceApproveAchWithdrawalRequestCreate$ {
    /** @deprecated use `ForceApproveAchWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceApproveAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceApproveAchWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceApproveAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceApproveAchWithdrawalRequestCreate>;
    /** @deprecated use `ForceApproveAchWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = ForceApproveAchWithdrawalRequestCreate$Outbound;
}
export declare function forceApproveAchWithdrawalRequestCreateToJSON(forceApproveAchWithdrawalRequestCreate: ForceApproveAchWithdrawalRequestCreate): string;
export declare function forceApproveAchWithdrawalRequestCreateFromJSON(jsonString: string): SafeParseResult<ForceApproveAchWithdrawalRequestCreate, SDKValidationError>;
//# sourceMappingURL=forceapproveachwithdrawalrequestcreate.d.ts.map