import * as z from "zod";
/**
 * Available Restriction on an Account.
 */
export type AvailableRestriction = {
    /**
     * The description of the restriction.
     */
    description?: string | undefined;
    /**
     * The human readable representation of the restriction code.
     */
    displayName?: string | undefined;
    /**
     * The restriction code.
     */
    restrictionCode?: string | undefined;
};
/** @internal */
export declare const AvailableRestriction$inboundSchema: z.ZodType<AvailableRestriction, z.ZodTypeDef, unknown>;
/** @internal */
export type AvailableRestriction$Outbound = {
    description?: string | undefined;
    display_name?: string | undefined;
    restriction_code?: string | undefined;
};
/** @internal */
export declare const AvailableRestriction$outboundSchema: z.ZodType<AvailableRestriction$Outbound, z.ZodTypeDef, AvailableRestriction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AvailableRestriction$ {
    /** @deprecated use `AvailableRestriction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AvailableRestriction, z.ZodTypeDef, unknown>;
    /** @deprecated use `AvailableRestriction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AvailableRestriction$Outbound, z.ZodTypeDef, AvailableRestriction>;
    /** @deprecated use `AvailableRestriction$Outbound` instead. */
    type Outbound = AvailableRestriction$Outbound;
}
//# sourceMappingURL=availablerestriction.d.ts.map