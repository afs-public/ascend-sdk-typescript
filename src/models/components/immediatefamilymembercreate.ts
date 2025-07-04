/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Immediate Family Member detail.
 */
export type ImmediateFamilyMemberCreate = {
  /**
   * The name of the immediate family member of the politically exposed person
   */
  familyMemberName: string;
  /**
   * The relationship of the immediate family member to the related politically exposed person
   */
  relationship: string;
};

/** @internal */
export const ImmediateFamilyMemberCreate$inboundSchema: z.ZodType<
  ImmediateFamilyMemberCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  family_member_name: z.string(),
  relationship: z.string(),
}).transform((v) => {
  return remap$(v, {
    "family_member_name": "familyMemberName",
  });
});

/** @internal */
export type ImmediateFamilyMemberCreate$Outbound = {
  family_member_name: string;
  relationship: string;
};

/** @internal */
export const ImmediateFamilyMemberCreate$outboundSchema: z.ZodType<
  ImmediateFamilyMemberCreate$Outbound,
  z.ZodTypeDef,
  ImmediateFamilyMemberCreate
> = z.object({
  familyMemberName: z.string(),
  relationship: z.string(),
}).transform((v) => {
  return remap$(v, {
    familyMemberName: "family_member_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImmediateFamilyMemberCreate$ {
  /** @deprecated use `ImmediateFamilyMemberCreate$inboundSchema` instead. */
  export const inboundSchema = ImmediateFamilyMemberCreate$inboundSchema;
  /** @deprecated use `ImmediateFamilyMemberCreate$outboundSchema` instead. */
  export const outboundSchema = ImmediateFamilyMemberCreate$outboundSchema;
  /** @deprecated use `ImmediateFamilyMemberCreate$Outbound` instead. */
  export type Outbound = ImmediateFamilyMemberCreate$Outbound;
}
