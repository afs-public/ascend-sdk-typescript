/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  WithdrawalScheduleDetailsUpdate,
  WithdrawalScheduleDetailsUpdate$inboundSchema,
  WithdrawalScheduleDetailsUpdate$Outbound,
  WithdrawalScheduleDetailsUpdate$outboundSchema,
} from "./withdrawalscheduledetailsupdate.js";

/**
 * A withdrawal transfer schedule using the Wire mechanism
 */
export type WireWithdrawalScheduleUpdate = {
  /**
   * Details of withdrawal schedule transfers
   */
  scheduleDetails?: WithdrawalScheduleDetailsUpdate | undefined;
};

/** @internal */
export const WireWithdrawalScheduleUpdate$inboundSchema: z.ZodType<
  WireWithdrawalScheduleUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  schedule_details: WithdrawalScheduleDetailsUpdate$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "schedule_details": "scheduleDetails",
  });
});

/** @internal */
export type WireWithdrawalScheduleUpdate$Outbound = {
  schedule_details?: WithdrawalScheduleDetailsUpdate$Outbound | undefined;
};

/** @internal */
export const WireWithdrawalScheduleUpdate$outboundSchema: z.ZodType<
  WireWithdrawalScheduleUpdate$Outbound,
  z.ZodTypeDef,
  WireWithdrawalScheduleUpdate
> = z.object({
  scheduleDetails: WithdrawalScheduleDetailsUpdate$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    scheduleDetails: "schedule_details",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WireWithdrawalScheduleUpdate$ {
  /** @deprecated use `WireWithdrawalScheduleUpdate$inboundSchema` instead. */
  export const inboundSchema = WireWithdrawalScheduleUpdate$inboundSchema;
  /** @deprecated use `WireWithdrawalScheduleUpdate$outboundSchema` instead. */
  export const outboundSchema = WireWithdrawalScheduleUpdate$outboundSchema;
  /** @deprecated use `WireWithdrawalScheduleUpdate$Outbound` instead. */
  export type Outbound = WireWithdrawalScheduleUpdate$Outbound;
}
