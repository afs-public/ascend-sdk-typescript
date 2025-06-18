import * as z from "zod";
/**
 * The request for ending a Restriction on an Account.
 */
export type EndRestrictionRequestCreate = {
    /**
     * The reason to end the restriction.
     */
    reason: string;
};
/** @internal */
export declare const EndRestrictionRequestCreate$inboundSchema: z.ZodType<EndRestrictionRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type EndRestrictionRequestCreate$Outbound = {
    reason: string;
};
/** @internal */
export declare const EndRestrictionRequestCreate$outboundSchema: z.ZodType<EndRestrictionRequestCreate$Outbound, z.ZodTypeDef, EndRestrictionRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EndRestrictionRequestCreate$ {
    /** @deprecated use `EndRestrictionRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EndRestrictionRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EndRestrictionRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EndRestrictionRequestCreate$Outbound, z.ZodTypeDef, EndRestrictionRequestCreate>;
    /** @deprecated use `EndRestrictionRequestCreate$Outbound` instead. */
    type Outbound = EndRestrictionRequestCreate$Outbound;
}
//# sourceMappingURL=endrestrictionrequestcreate.d.ts.map