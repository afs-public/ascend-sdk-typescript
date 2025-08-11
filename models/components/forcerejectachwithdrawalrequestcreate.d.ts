import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to force rejection of an existing ACH withdrawal that is pending review. FOR TESTING ONLY!
 */
export type ForceRejectAchWithdrawalRequestCreate = {
    /**
     * The name of the ACH withdrawal to force reject.
     */
    name: string;
    /**
     * Reason why the ACH withdrawal is being rejected.
     */
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectAchWithdrawalRequestCreate$inboundSchema: z.ZodType<ForceRejectAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceRejectAchWithdrawalRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectAchWithdrawalRequestCreate$outboundSchema: z.ZodType<ForceRejectAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectAchWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceRejectAchWithdrawalRequestCreate$ {
    /** @deprecated use `ForceRejectAchWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceRejectAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceRejectAchWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceRejectAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectAchWithdrawalRequestCreate>;
    /** @deprecated use `ForceRejectAchWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = ForceRejectAchWithdrawalRequestCreate$Outbound;
}
export declare function forceRejectAchWithdrawalRequestCreateToJSON(forceRejectAchWithdrawalRequestCreate: ForceRejectAchWithdrawalRequestCreate): string;
export declare function forceRejectAchWithdrawalRequestCreateFromJSON(jsonString: string): SafeParseResult<ForceRejectAchWithdrawalRequestCreate, SDKValidationError>;
//# sourceMappingURL=forcerejectachwithdrawalrequestcreate.d.ts.map