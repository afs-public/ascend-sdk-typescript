/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

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
export const ImmediateFamilyMember$inboundSchema: z.ZodType<
  ImmediateFamilyMember,
  z.ZodTypeDef,
  unknown
> = z.object({
  family_member_name: z.string().optional(),
  relationship: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "family_member_name": "familyMemberName",
  });
});

/** @internal */
export type ImmediateFamilyMember$Outbound = {
  family_member_name?: string | undefined;
  relationship?: string | undefined;
};

/** @internal */
export const ImmediateFamilyMember$outboundSchema: z.ZodType<
  ImmediateFamilyMember$Outbound,
  z.ZodTypeDef,
  ImmediateFamilyMember
> = z.object({
  familyMemberName: z.string().optional(),
  relationship: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    familyMemberName: "family_member_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImmediateFamilyMember$ {
  /** @deprecated use `ImmediateFamilyMember$inboundSchema` instead. */
  export const inboundSchema = ImmediateFamilyMember$inboundSchema;
  /** @deprecated use `ImmediateFamilyMember$outboundSchema` instead. */
  export const outboundSchema = ImmediateFamilyMember$outboundSchema;
  /** @deprecated use `ImmediateFamilyMember$Outbound` instead. */
  export type Outbound = ImmediateFamilyMember$Outbound;
}
