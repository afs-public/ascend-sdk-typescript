import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to force rejection of an existing ACH deposit that is pending review. FOR TESTING ONLY!
 */
export type ForceRejectAchDepositRequestCreate = {
    /**
     * The name of the ACH deposit to force reject.
     */
    name: string;
    /**
     * Reason why the ACH deposit is being rejected.
     */
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectAchDepositRequestCreate$inboundSchema: z.ZodType<ForceRejectAchDepositRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceRejectAchDepositRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const ForceRejectAchDepositRequestCreate$outboundSchema: z.ZodType<ForceRejectAchDepositRequestCreate$Outbound, z.ZodTypeDef, ForceRejectAchDepositRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceRejectAchDepositRequestCreate$ {
    /** @deprecated use `ForceRejectAchDepositRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceRejectAchDepositRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceRejectAchDepositRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceRejectAchDepositRequestCreate$Outbound, z.ZodTypeDef, ForceRejectAchDepositRequestCreate>;
    /** @deprecated use `ForceRejectAchDepositRequestCreate$Outbound` instead. */
    type Outbound = ForceRejectAchDepositRequestCreate$Outbound;
}
export declare function forceRejectAchDepositRequestCreateToJSON(forceRejectAchDepositRequestCreate: ForceRejectAchDepositRequestCreate): string;
export declare function forceRejectAchDepositRequestCreateFromJSON(jsonString: string): SafeParseResult<ForceRejectAchDepositRequestCreate, SDKValidationError>;
//# sourceMappingURL=forcerejectachdepositrequestcreate.d.ts.map