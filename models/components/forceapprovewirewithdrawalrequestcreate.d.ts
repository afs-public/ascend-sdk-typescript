import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to simulate approve of a wire withdrawal
 */
export type ForceApproveWireWithdrawalRequestCreate = {
    /**
     * The name of the wire withdrawal to force approve
     */
    name: string;
};
/** @internal */
export declare const ForceApproveWireWithdrawalRequestCreate$inboundSchema: z.ZodType<ForceApproveWireWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceApproveWireWithdrawalRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const ForceApproveWireWithdrawalRequestCreate$outboundSchema: z.ZodType<ForceApproveWireWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceApproveWireWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceApproveWireWithdrawalRequestCreate$ {
    /** @deprecated use `ForceApproveWireWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceApproveWireWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceApproveWireWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceApproveWireWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceApproveWireWithdrawalRequestCreate>;
    /** @deprecated use `ForceApproveWireWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = ForceApproveWireWithdrawalRequestCreate$Outbound;
}
export declare function forceApproveWireWithdrawalRequestCreateToJSON(forceApproveWireWithdrawalRequestCreate: ForceApproveWireWithdrawalRequestCreate): string;
export declare function forceApproveWireWithdrawalRequestCreateFromJSON(jsonString: string): SafeParseResult<ForceApproveWireWithdrawalRequestCreate, SDKValidationError>;
//# sourceMappingURL=forceapprovewirewithdrawalrequestcreate.d.ts.map