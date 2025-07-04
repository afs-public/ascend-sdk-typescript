/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Request to cancel an existing ACH deposit.
 */
export type CancelAchDepositRequestCreate = {
  /**
   * The name of the ACH deposit to cancel.
   */
  name: string;
  /**
   * Reason why the ACH deposit is being canceled.
   */
  reason?: string | undefined;
};

/** @internal */
export const CancelAchDepositRequestCreate$inboundSchema: z.ZodType<
  CancelAchDepositRequestCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  reason: z.string().optional(),
});

/** @internal */
export type CancelAchDepositRequestCreate$Outbound = {
  name: string;
  reason?: string | undefined;
};

/** @internal */
export const CancelAchDepositRequestCreate$outboundSchema: z.ZodType<
  CancelAchDepositRequestCreate$Outbound,
  z.ZodTypeDef,
  CancelAchDepositRequestCreate
> = z.object({
  name: z.string(),
  reason: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CancelAchDepositRequestCreate$ {
  /** @deprecated use `CancelAchDepositRequestCreate$inboundSchema` instead. */
  export const inboundSchema = CancelAchDepositRequestCreate$inboundSchema;
  /** @deprecated use `CancelAchDepositRequestCreate$outboundSchema` instead. */
  export const outboundSchema = CancelAchDepositRequestCreate$outboundSchema;
  /** @deprecated use `CancelAchDepositRequestCreate$Outbound` instead. */
  export type Outbound = CancelAchDepositRequestCreate$Outbound;
}
