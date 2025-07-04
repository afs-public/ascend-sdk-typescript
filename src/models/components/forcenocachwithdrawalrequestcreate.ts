/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  NachaNocCreate,
  NachaNocCreate$inboundSchema,
  NachaNocCreate$Outbound,
  NachaNocCreate$outboundSchema,
} from "./nachanoccreate.js";

/**
 * Request to force a Nacha notice of change (NOC) on a completed ACH withdrawal. FOR TESTING ONLY!
 */
export type ForceNocAchWithdrawalRequestCreate = {
  /**
   * A notice of change (NOC) on an ACH transfer from the Nacha network.
   */
  nachaNoc: NachaNocCreate;
  /**
   * The name of the ACH withdrawal to force a Nacha NOC on.
   */
  name: string;
};

/** @internal */
export const ForceNocAchWithdrawalRequestCreate$inboundSchema: z.ZodType<
  ForceNocAchWithdrawalRequestCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  nacha_noc: NachaNocCreate$inboundSchema,
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "nacha_noc": "nachaNoc",
  });
});

/** @internal */
export type ForceNocAchWithdrawalRequestCreate$Outbound = {
  nacha_noc: NachaNocCreate$Outbound;
  name: string;
};

/** @internal */
export const ForceNocAchWithdrawalRequestCreate$outboundSchema: z.ZodType<
  ForceNocAchWithdrawalRequestCreate$Outbound,
  z.ZodTypeDef,
  ForceNocAchWithdrawalRequestCreate
> = z.object({
  nachaNoc: NachaNocCreate$outboundSchema,
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    nachaNoc: "nacha_noc",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForceNocAchWithdrawalRequestCreate$ {
  /** @deprecated use `ForceNocAchWithdrawalRequestCreate$inboundSchema` instead. */
  export const inboundSchema = ForceNocAchWithdrawalRequestCreate$inboundSchema;
  /** @deprecated use `ForceNocAchWithdrawalRequestCreate$outboundSchema` instead. */
  export const outboundSchema =
    ForceNocAchWithdrawalRequestCreate$outboundSchema;
  /** @deprecated use `ForceNocAchWithdrawalRequestCreate$Outbound` instead. */
  export type Outbound = ForceNocAchWithdrawalRequestCreate$Outbound;
}
