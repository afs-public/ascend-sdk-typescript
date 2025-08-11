import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ImmediateFamilyMemberCreate, ImmediateFamilyMemberCreate$Outbound } from "./immediatefamilymembercreate.js";
/**
 * Detail around the related politically exposed Person
 */
export type RelatedPepCreate = {
    /**
     * Information about the immediate family members of the related politically exposed person
     */
    immediateFamilyMembers?: Array<ImmediateFamilyMemberCreate> | undefined;
    /**
     * The organization a politically exposed person is associated with causing them to be considered politically exposed
     */
    organization: string;
    /**
     * The name of the related politically exposed person
     */
    pepName: string;
    /**
     * The title of the related politically exposed person
     */
    title: string;
};
/** @internal */
export declare const RelatedPepCreate$inboundSchema: z.ZodType<RelatedPepCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RelatedPepCreate$Outbound = {
    immediate_family_members?: Array<ImmediateFamilyMemberCreate$Outbound> | undefined;
    organization: string;
    pep_name: string;
    title: string;
};
/** @internal */
export declare const RelatedPepCreate$outboundSchema: z.ZodType<RelatedPepCreate$Outbound, z.ZodTypeDef, RelatedPepCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RelatedPepCreate$ {
    /** @deprecated use `RelatedPepCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RelatedPepCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RelatedPepCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RelatedPepCreate$Outbound, z.ZodTypeDef, RelatedPepCreate>;
    /** @deprecated use `RelatedPepCreate$Outbound` instead. */
    type Outbound = RelatedPepCreate$Outbound;
}
export declare function relatedPepCreateToJSON(relatedPepCreate: RelatedPepCreate): string;
export declare function relatedPepCreateFromJSON(jsonString: string): SafeParseResult<RelatedPepCreate, SDKValidationError>;
//# sourceMappingURL=relatedpepcreate.d.ts.map