import * as z from "zod";
import { NachaReturnCreate, NachaReturnCreate$Outbound } from "./nachareturncreate.js";
/**
 * Request to force a Nacha return on a completed ACH deposit. FOR TESTING ONLY!
 */
export type ForceReturnAchDepositRequestCreate = {
    /**
     * A return on an ACH transfer from the Nacha network.
     */
    nachaReturn: NachaReturnCreate;
    /**
     * The name of the ACH deposit to force a Nacha return on.
     */
    name: string;
};
/** @internal */
export declare const ForceReturnAchDepositRequestCreate$inboundSchema: z.ZodType<ForceReturnAchDepositRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceReturnAchDepositRequestCreate$Outbound = {
    nacha_return: NachaReturnCreate$Outbound;
    name: string;
};
/** @internal */
export declare const ForceReturnAchDepositRequestCreate$outboundSchema: z.ZodType<ForceReturnAchDepositRequestCreate$Outbound, z.ZodTypeDef, ForceReturnAchDepositRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceReturnAchDepositRequestCreate$ {
    /** @deprecated use `ForceReturnAchDepositRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceReturnAchDepositRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceReturnAchDepositRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceReturnAchDepositRequestCreate$Outbound, z.ZodTypeDef, ForceReturnAchDepositRequestCreate>;
    /** @deprecated use `ForceReturnAchDepositRequestCreate$Outbound` instead. */
    type Outbound = ForceReturnAchDepositRequestCreate$Outbound;
}
//# sourceMappingURL=forcereturnachdepositrequestcreate.d.ts.map