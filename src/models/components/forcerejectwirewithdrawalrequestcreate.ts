/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Request to simulate the rejection of a wire withdrawal
 */
export type ForceRejectWireWithdrawalRequestCreate = {
  /**
   * The name of the wire withdrawal to force a rejection on
   */
  name: string;
  /**
   * The reason for the reject
   */
  reason?: string | undefined;
};

/** @internal */
export const ForceRejectWireWithdrawalRequestCreate$inboundSchema: z.ZodType<
  ForceRejectWireWithdrawalRequestCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  reason: z.string().optional(),
});

/** @internal */
export type ForceRejectWireWithdrawalRequestCreate$Outbound = {
  name: string;
  reason?: string | undefined;
};

/** @internal */
export const ForceRejectWireWithdrawalRequestCreate$outboundSchema: z.ZodType<
  ForceRejectWireWithdrawalRequestCreate$Outbound,
  z.ZodTypeDef,
  ForceRejectWireWithdrawalRequestCreate
> = z.object({
  name: z.string(),
  reason: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForceRejectWireWithdrawalRequestCreate$ {
  /** @deprecated use `ForceRejectWireWithdrawalRequestCreate$inboundSchema` instead. */
  export const inboundSchema =
    ForceRejectWireWithdrawalRequestCreate$inboundSchema;
  /** @deprecated use `ForceRejectWireWithdrawalRequestCreate$outboundSchema` instead. */
  export const outboundSchema =
    ForceRejectWireWithdrawalRequestCreate$outboundSchema;
  /** @deprecated use `ForceRejectWireWithdrawalRequestCreate$Outbound` instead. */
  export type Outbound = ForceRejectWireWithdrawalRequestCreate$Outbound;
}
