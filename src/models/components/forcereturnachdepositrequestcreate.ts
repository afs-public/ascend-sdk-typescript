/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  NachaReturnCreate,
  NachaReturnCreate$inboundSchema,
  NachaReturnCreate$Outbound,
  NachaReturnCreate$outboundSchema,
} from "./nachareturncreate.js";

/**
 * Request to force a Nacha return on a completed ACH deposit. FOR TESTING ONLY!
 */
export type ForceReturnAchDepositRequestCreate = {
  /**
   * A return on an ACH transfer from the Nacha network.
   */
  nachaReturn: NachaReturnCreate;
  /**
   * The name of the ACH deposit to force a Nacha return on.
   */
  name: string;
};

/** @internal */
export const ForceReturnAchDepositRequestCreate$inboundSchema: z.ZodType<
  ForceReturnAchDepositRequestCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  nacha_return: NachaReturnCreate$inboundSchema,
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "nacha_return": "nachaReturn",
  });
});

/** @internal */
export type ForceReturnAchDepositRequestCreate$Outbound = {
  nacha_return: NachaReturnCreate$Outbound;
  name: string;
};

/** @internal */
export const ForceReturnAchDepositRequestCreate$outboundSchema: z.ZodType<
  ForceReturnAchDepositRequestCreate$Outbound,
  z.ZodTypeDef,
  ForceReturnAchDepositRequestCreate
> = z.object({
  nachaReturn: NachaReturnCreate$outboundSchema,
  name: z.string(),
}).transform((v) => {
  return remap$(v, {
    nachaReturn: "nacha_return",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForceReturnAchDepositRequestCreate$ {
  /** @deprecated use `ForceReturnAchDepositRequestCreate$inboundSchema` instead. */
  export const inboundSchema = ForceReturnAchDepositRequestCreate$inboundSchema;
  /** @deprecated use `ForceReturnAchDepositRequestCreate$outboundSchema` instead. */
  export const outboundSchema =
    ForceReturnAchDepositRequestCreate$outboundSchema;
  /** @deprecated use `ForceReturnAchDepositRequestCreate$Outbound` instead. */
  export type Outbound = ForceReturnAchDepositRequestCreate$Outbound;
}
