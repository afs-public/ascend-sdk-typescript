import * as z from "zod";
/**
 * Request to cancel an existing ICT deposit
 */
export type CancelIctDepositRequestCreate = {
    /**
     * Full name of the ICT deposit resource, which contains account id and ICT deposit id
     */
    name: string;
    /**
     * Reason why the ICT deposit is being canceled
     */
    reason?: string | undefined;
};
/** @internal */
export declare const CancelIctDepositRequestCreate$inboundSchema: z.ZodType<CancelIctDepositRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelIctDepositRequestCreate$Outbound = {
    name: string;
    reason?: string | undefined;
};
/** @internal */
export declare const CancelIctDepositRequestCreate$outboundSchema: z.ZodType<CancelIctDepositRequestCreate$Outbound, z.ZodTypeDef, CancelIctDepositRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelIctDepositRequestCreate$ {
    /** @deprecated use `CancelIctDepositRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelIctDepositRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelIctDepositRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelIctDepositRequestCreate$Outbound, z.ZodTypeDef, CancelIctDepositRequestCreate>;
    /** @deprecated use `CancelIctDepositRequestCreate$Outbound` instead. */
    type Outbound = CancelIctDepositRequestCreate$Outbound;
}
//# sourceMappingURL=cancelictdepositrequestcreate.d.ts.map