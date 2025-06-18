import * as z from "zod";
import { NachaNocCreate, NachaNocCreate$Outbound } from "./nachanoccreate.js";
/**
 * Request to force a Nacha notice of change (NOC) on a completed ACH withdrawal. FOR TESTING ONLY!
 */
export type ForceNocAchWithdrawalRequestCreate = {
    /**
     * A notice of change (NOC) on an ACH transfer from the Nacha network.
     */
    nachaNoc: NachaNocCreate;
    /**
     * The name of the ACH withdrawal to force a Nacha NOC on.
     */
    name: string;
};
/** @internal */
export declare const ForceNocAchWithdrawalRequestCreate$inboundSchema: z.ZodType<ForceNocAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceNocAchWithdrawalRequestCreate$Outbound = {
    nacha_noc: NachaNocCreate$Outbound;
    name: string;
};
/** @internal */
export declare const ForceNocAchWithdrawalRequestCreate$outboundSchema: z.ZodType<ForceNocAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceNocAchWithdrawalRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceNocAchWithdrawalRequestCreate$ {
    /** @deprecated use `ForceNocAchWithdrawalRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceNocAchWithdrawalRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceNocAchWithdrawalRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceNocAchWithdrawalRequestCreate$Outbound, z.ZodTypeDef, ForceNocAchWithdrawalRequestCreate>;
    /** @deprecated use `ForceNocAchWithdrawalRequestCreate$Outbound` instead. */
    type Outbound = ForceNocAchWithdrawalRequestCreate$Outbound;
}
//# sourceMappingURL=forcenocachwithdrawalrequestcreate.d.ts.map