/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Request to force approve a pending cash journal
 */
export type ForceApproveCashJournalRequestCreate = {
  /**
   * The name of the cash journal to force approve
   */
  name: string;
};

/** @internal */
export const ForceApproveCashJournalRequestCreate$inboundSchema: z.ZodType<
  ForceApproveCashJournalRequestCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type ForceApproveCashJournalRequestCreate$Outbound = {
  name: string;
};

/** @internal */
export const ForceApproveCashJournalRequestCreate$outboundSchema: z.ZodType<
  ForceApproveCashJournalRequestCreate$Outbound,
  z.ZodTypeDef,
  ForceApproveCashJournalRequestCreate
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForceApproveCashJournalRequestCreate$ {
  /** @deprecated use `ForceApproveCashJournalRequestCreate$inboundSchema` instead. */
  export const inboundSchema =
    ForceApproveCashJournalRequestCreate$inboundSchema;
  /** @deprecated use `ForceApproveCashJournalRequestCreate$outboundSchema` instead. */
  export const outboundSchema =
    ForceApproveCashJournalRequestCreate$outboundSchema;
  /** @deprecated use `ForceApproveCashJournalRequestCreate$Outbound` instead. */
  export type Outbound = ForceApproveCashJournalRequestCreate$Outbound;
}
