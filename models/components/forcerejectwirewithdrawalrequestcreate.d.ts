import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to simulate the rejection of a wire withdrawal
 */
export type ForceRejectWireWithdrawalRequestCreate = {
    /**
     * The name of the wire withdrawal to force a rejection on
     */
    name: string;
    /**
     * The reason for the reject
     */
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectWireWithdrawalRequestCreate$inboundSchema: z.ZodType<ForceRejectWireWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceRejectWireWithdrawalRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectWireWithdrawalRequestCreate$outboundSchema: z.ZodType<ForceRejectWireWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectWireWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceRejectWireWithdrawalRequestCreate$ {
    /** @deprecated use `ForceRejectWireWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceRejectWireWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceRejectWireWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceRejectWireWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceRejectWireWithdrawalRequestCreate>;
    /** @deprecated use `ForceRejectWireWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = ForceRejectWireWithdrawalRequestCreate$Outbound;
}
export declare function forceRejectWireWithdrawalRequestCreateToJSON(forceRejectWireWithdrawalRequestCreate: ForceRejectWireWithdrawalRequestCreate): string;
export declare function forceRejectWireWithdrawalRequestCreateFromJSON(jsonString: string): SafeParseResult<ForceRejectWireWithdrawalRequestCreate, SDKValidationError>;
//# sourceMappingURL=forcerejectwirewithdrawalrequestcreate.d.ts.map