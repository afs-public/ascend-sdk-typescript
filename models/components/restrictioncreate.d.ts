import * as z from "zod";
/**
 * An account restriction.
 */
export type RestrictionCreate = {
    /**
     * The plain-text reason set by a person or system explaining why the restriction was set
     */
    createReason: string;
    /**
     * The plain-text reason set by a person or system explaining why the restriction was removed If the restriction is active, the reason will not be set.
     */
    endedReason?: string | undefined;
    /**
     * A enumerated value indicating the nature of a restriction; prefixed by the concerned department (e.g., `MARGIN_CALL_VIOLATION_REG_T`); suspends related entitlements of the account until it is removed; most codes are administrated by the custodian but some are available for use by the integrator
     */
    restrictionCode: string;
};
/** @internal */
export declare const RestrictionCreate$inboundSchema: z.ZodType<RestrictionCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RestrictionCreate$Outbound = {
    create_reason: string;
    ended_reason?: string | undefined;
    restriction_code: string;
};
/** @internal */
export declare const RestrictionCreate$outboundSchema: z.ZodType<RestrictionCreate$Outbound, z.ZodTypeDef, RestrictionCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RestrictionCreate$ {
    /** @deprecated use `RestrictionCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RestrictionCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RestrictionCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RestrictionCreate$Outbound, z.ZodTypeDef, RestrictionCreate>;
    /** @deprecated use `RestrictionCreate$Outbound` instead. */
    type Outbound = RestrictionCreate$Outbound;
}
//# sourceMappingURL=restrictioncreate.d.ts.map