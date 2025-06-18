import * as z from "zod";
import { ImmediateFamilyMember, ImmediateFamilyMember$Outbound } from "./immediatefamilymember.js";
/**
 * Detail around the related politically exposed Person
 */
export type RelatedPep = {
    /**
     * Information about the immediate family members of the related politically exposed person
     */
    immediateFamilyMembers?: Array<ImmediateFamilyMember> | undefined;
    /**
     * The organization a politically exposed person is associated with causing them to be considered politically exposed
     */
    organization?: string | undefined;
    /**
     * The name of the related politically exposed person
     */
    pepName?: string | undefined;
    /**
     * The title of the related politically exposed person
     */
    title?: string | undefined;
};
/** @internal */
export declare const RelatedPep$inboundSchema: z.ZodType<RelatedPep, z.ZodTypeDef, unknown>;
/** @internal */
export type RelatedPep$Outbound = {
    immediate_family_members?: Array<ImmediateFamilyMember$Outbound> | undefined;
    organization?: string | undefined;
    pep_name?: string | undefined;
    title?: string | undefined;
};
/** @internal */
export declare const RelatedPep$outboundSchema: z.ZodType<RelatedPep$Outbound, z.ZodTypeDef, RelatedPep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RelatedPep$ {
    /** @deprecated use `RelatedPep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RelatedPep, z.ZodTypeDef, unknown>;
    /** @deprecated use `RelatedPep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RelatedPep$Outbound, z.ZodTypeDef, RelatedPep>;
    /** @deprecated use `RelatedPep$Outbound` instead. */
    type Outbound = RelatedPep$Outbound;
}
//# sourceMappingURL=relatedpep.d.ts.map