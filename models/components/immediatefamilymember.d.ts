import * as z from "zod";
/**
 * Immediate Family Member detail.
 */
export type ImmediateFamilyMember = {
    /**
     * The name of the immediate family member of the politically exposed person
     */
    familyMemberName?: string | undefined;
    /**
     * The relationship of the immediate family member to the related politically exposed person
     */
    relationship?: string | undefined;
};
/** @internal */
export declare const ImmediateFamilyMember$inboundSchema: z.ZodType<ImmediateFamilyMember, z.ZodTypeDef, unknown>;
/** @internal */
export type ImmediateFamilyMember$Outbound = {
    family_member_name?: string | undefined;
    relationship?: string | undefined;
};
/** @internal */
export declare const ImmediateFamilyMember$outboundSchema: z.ZodType<ImmediateFamilyMember$Outbound, z.ZodTypeDef, ImmediateFamilyMember>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ImmediateFamilyMember$ {
    /** @deprecated use `ImmediateFamilyMember$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ImmediateFamilyMember, z.ZodTypeDef, unknown>;
    /** @deprecated use `ImmediateFamilyMember$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ImmediateFamilyMember$Outbound, z.ZodTypeDef, ImmediateFamilyMember>;
    /** @deprecated use `ImmediateFamilyMember$Outbound` instead. */
    type Outbound = ImmediateFamilyMember$Outbound;
}
//# sourceMappingURL=immediatefamilymember.d.ts.map