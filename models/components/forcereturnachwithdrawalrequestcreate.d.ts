import * as z from "zod";
import { NachaReturnCreate, NachaReturnCreate$Outbound } from "./nachareturncreate.js";
/**
 * Request to force a Nacha return on a completed ACH withdrawal. FOR TESTING ONLY!
 */
export type ForceReturnAchWithdrawalRequestCreate = {
    /**
     * A return on an ACH transfer from the Nacha network.
     */
    nachaReturn: NachaReturnCreate;
    /**
     * The name of the ACH withdrawal to force a Nacha return on.
     */
    name: string;
};
/** @internal */
export declare const ForceReturnAchWithdrawalRequestCreate$inboundSchema: z.ZodType<ForceReturnAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceReturnAchWithdrawalRequestCreate$Outbound = {
    nacha_return: NachaReturnCreate$Outbound;
    name: string;
};
/** @internal */
export declare const ForceReturnAchWithdrawalRequestCreate$outboundSchema: z.ZodType<ForceReturnAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceReturnAchWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceReturnAchWithdrawalRequestCreate$ {
    /** @deprecated use `ForceReturnAchWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceReturnAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceReturnAchWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceReturnAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceReturnAchWithdrawalRequestCreate>;
    /** @deprecated use `ForceReturnAchWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = ForceReturnAchWithdrawalRequestCreate$Outbound;
}
//# sourceMappingURL=forcereturnachwithdrawalrequestcreate.d.ts.map