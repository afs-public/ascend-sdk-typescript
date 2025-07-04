/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Request to cancel an existing ACH withdrawal.
 */
export type CancelAchWithdrawalRequestCreate = {
  /**
   * The name of the ACH withdrawal to cancel.
   */
  name: string;
  /**
   * The reason why the ACH withdrawal is being canceled.
   */
  reason?: string | undefined;
};

/** @internal */
export const CancelAchWithdrawalRequestCreate$inboundSchema: z.ZodType<
  CancelAchWithdrawalRequestCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  reason: z.string().optional(),
});

/** @internal */
export type CancelAchWithdrawalRequestCreate$Outbound = {
  name: string;
  reason?: string | undefined;
};

/** @internal */
export const CancelAchWithdrawalRequestCreate$outboundSchema: z.ZodType<
  CancelAchWithdrawalRequestCreate$Outbound,
  z.ZodTypeDef,
  CancelAchWithdrawalRequestCreate
> = z.object({
  name: z.string(),
  reason: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelAchWithdrawalRequestCreate$ {
  /** @deprecated use `CancelAchWithdrawalRequestCreate$inboundSchema` instead. */
  export const inboundSchema = CancelAchWithdrawalRequestCreate$inboundSchema;
  /** @deprecated use `CancelAchWithdrawalRequestCreate$outboundSchema` instead. */
  export const outboundSchema = CancelAchWithdrawalRequestCreate$outboundSchema;
  /** @deprecated use `CancelAchWithdrawalRequestCreate$Outbound` instead. */
  export type Outbound = CancelAchWithdrawalRequestCreate$Outbound;
}
