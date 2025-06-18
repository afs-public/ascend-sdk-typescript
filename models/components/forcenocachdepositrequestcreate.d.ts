import * as z from "zod";
import { NachaNocCreate, NachaNocCreate$Outbound } from "./nachanoccreate.js";
/**
 * Request to force a Nacha notice of change (NOC) on a completed ACH deposit. FOR TESTING ONLY!
 */
export type ForceNocAchDepositRequestCreate = {
    /**
     * A notice of change (NOC) on an ACH transfer from the Nacha network.
     */
    nachaNoc: NachaNocCreate;
    /**
     * The name of the ACH deposit to force a Nacha NOC on.
     */
    name: string;
};
/** @internal */
export declare const ForceNocAchDepositRequestCreate$inboundSchema: z.ZodType<ForceNocAchDepositRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceNocAchDepositRequestCreate$Outbound = {
    nacha_noc: NachaNocCreate$Outbound;
    name: string;
};
/** @internal */
export declare const ForceNocAchDepositRequestCreate$outboundSchema: z.ZodType<ForceNocAchDepositRequestCreate$Outbound, z.ZodTypeDef, ForceNocAchDepositRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceNocAchDepositRequestCreate$ {
    /** @deprecated use `ForceNocAchDepositRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceNocAchDepositRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceNocAchDepositRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceNocAchDepositRequestCreate$Outbound, z.ZodTypeDef, ForceNocAchDepositRequestCreate>;
    /** @deprecated use `ForceNocAchDepositRequestCreate$Outbound` instead. */
    type Outbound = ForceNocAchDepositRequestCreate$Outbound;
}
//# sourceMappingURL=forcenocachdepositrequestcreate.d.ts.map