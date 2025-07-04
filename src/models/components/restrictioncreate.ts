/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

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
export const RestrictionCreate$inboundSchema: z.ZodType<
  RestrictionCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  create_reason: z.string(),
  ended_reason: z.string().optional(),
  restriction_code: z.string(),
}).transform((v) => {
  return remap$(v, {
    "create_reason": "createReason",
    "ended_reason": "endedReason",
    "restriction_code": "restrictionCode",
  });
});

/** @internal */
export type RestrictionCreate$Outbound = {
  create_reason: string;
  ended_reason?: string | undefined;
  restriction_code: string;
};

/** @internal */
export const RestrictionCreate$outboundSchema: z.ZodType<
  RestrictionCreate$Outbound,
  z.ZodTypeDef,
  RestrictionCreate
> = z.object({
  createReason: z.string(),
  endedReason: z.string().optional(),
  restrictionCode: z.string(),
}).transform((v) => {
  return remap$(v, {
    createReason: "create_reason",
    endedReason: "ended_reason",
    restrictionCode: "restriction_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RestrictionCreate$ {
  /** @deprecated use `RestrictionCreate$inboundSchema` instead. */
  export const inboundSchema = RestrictionCreate$inboundSchema;
  /** @deprecated use `RestrictionCreate$outboundSchema` instead. */
  export const outboundSchema = RestrictionCreate$outboundSchema;
  /** @deprecated use `RestrictionCreate$Outbound` instead. */
  export type Outbound = RestrictionCreate$Outbound;
}
