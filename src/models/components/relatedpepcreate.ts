/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ImmediateFamilyMemberCreate,
  ImmediateFamilyMemberCreate$inboundSchema,
  ImmediateFamilyMemberCreate$Outbound,
  ImmediateFamilyMemberCreate$outboundSchema,
} from "./immediatefamilymembercreate.js";

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
export const RelatedPepCreate$inboundSchema: z.ZodType<
  RelatedPepCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  immediate_family_members: z.array(ImmediateFamilyMemberCreate$inboundSchema)
    .optional(),
  organization: z.string(),
  pep_name: z.string(),
  title: z.string(),
}).transform((v) => {
  return remap$(v, {
    "immediate_family_members": "immediateFamilyMembers",
    "pep_name": "pepName",
  });
});

/** @internal */
export type RelatedPepCreate$Outbound = {
  immediate_family_members?:
    | Array<ImmediateFamilyMemberCreate$Outbound>
    | undefined;
  organization: string;
  pep_name: string;
  title: string;
};

/** @internal */
export const RelatedPepCreate$outboundSchema: z.ZodType<
  RelatedPepCreate$Outbound,
  z.ZodTypeDef,
  RelatedPepCreate
> = z.object({
  immediateFamilyMembers: z.array(ImmediateFamilyMemberCreate$outboundSchema)
    .optional(),
  organization: z.string(),
  pepName: z.string(),
  title: z.string(),
}).transform((v) => {
  return remap$(v, {
    immediateFamilyMembers: "immediate_family_members",
    pepName: "pep_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RelatedPepCreate$ {
  /** @deprecated use `RelatedPepCreate$inboundSchema` instead. */
  export const inboundSchema = RelatedPepCreate$inboundSchema;
  /** @deprecated use `RelatedPepCreate$outboundSchema` instead. */
  export const outboundSchema = RelatedPepCreate$outboundSchema;
  /** @deprecated use `RelatedPepCreate$Outbound` instead. */
  export type Outbound = RelatedPepCreate$Outbound;
}
