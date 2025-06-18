import * as z from "zod";
import { DescriptionDetail, DescriptionDetail$Outbound } from "./descriptiondetail.js";
import { SanctionsListDetail, SanctionsListDetail$Outbound } from "./sanctionslistdetail.js";
/**
 * Profiles related to dow jones profile
 */
export type RelatedProfile = {
    /**
     * Description details
     */
    descriptionDetails?: Array<DescriptionDetail> | undefined;
    /**
     * Dow Jones person id
     */
    dowJonesPersonId?: number | undefined;
    /**
     * Given name relating to profile
     */
    givenName?: string | undefined;
    /**
     * Middle names relating to profile
     */
    middleNames?: string | undefined;
    /**
     * Surname relating to profile
     */
    nameSuffix?: string | undefined;
    /**
     * Relationship type
     */
    relationshipType?: string | undefined;
    /**
     * Sanctions list details
     */
    sanctionsListDetails?: Array<SanctionsListDetail> | undefined;
    /**
     * Surname relating to profile
     */
    surname?: string | undefined;
    /**
     * Dow Jones persons title
     */
    titleHonorific?: string | undefined;
};
/** @internal */
export declare const RelatedProfile$inboundSchema: z.ZodType<RelatedProfile, z.ZodTypeDef, unknown>;
/** @internal */
export type RelatedProfile$Outbound = {
    description_details?: Array<DescriptionDetail$Outbound> | undefined;
    dow_jones_person_id?: number | undefined;
    given_name?: string | undefined;
    middle_names?: string | undefined;
    name_suffix?: string | undefined;
    relationship_type?: string | undefined;
    sanctions_list_details?: Array<SanctionsListDetail$Outbound> | undefined;
    surname?: string | undefined;
    title_honorific?: string | undefined;
};
/** @internal */
export declare const RelatedProfile$outboundSchema: z.ZodType<RelatedProfile$Outbound, z.ZodTypeDef, RelatedProfile>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RelatedProfile$ {
    /** @deprecated use `RelatedProfile$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RelatedProfile, z.ZodTypeDef, unknown>;
    /** @deprecated use `RelatedProfile$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RelatedProfile$Outbound, z.ZodTypeDef, RelatedProfile>;
    /** @deprecated use `RelatedProfile$Outbound` instead. */
    type Outbound = RelatedProfile$Outbound;
}
//# sourceMappingURL=relatedprofile.d.ts.map