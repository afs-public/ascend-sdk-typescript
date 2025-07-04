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
 * A withdrawal transfer schedule using the ACH mechanism
 */
export type AchWithdrawalScheduleUpdate = {
  /**
   * Details of withdrawal schedule transfers
   */
  scheduleDetails?: WithdrawalScheduleDetailsUpdate | undefined;
};

/** @internal */
export const AchWithdrawalScheduleUpdate$inboundSchema: z.ZodType<
  AchWithdrawalScheduleUpdate,
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
export type AchWithdrawalScheduleUpdate$Outbound = {
  schedule_details?: WithdrawalScheduleDetailsUpdate$Outbound | undefined;
};

/** @internal */
export const AchWithdrawalScheduleUpdate$outboundSchema: z.ZodType<
  AchWithdrawalScheduleUpdate$Outbound,
  z.ZodTypeDef,
  AchWithdrawalScheduleUpdate
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
export namespace AchWithdrawalScheduleUpdate$ {
  /** @deprecated use `AchWithdrawalScheduleUpdate$inboundSchema` instead. */
  export const inboundSchema = AchWithdrawalScheduleUpdate$inboundSchema;
  /** @deprecated use `AchWithdrawalScheduleUpdate$outboundSchema` instead. */
  export const outboundSchema = AchWithdrawalScheduleUpdate$outboundSchema;
  /** @deprecated use `AchWithdrawalScheduleUpdate$Outbound` instead. */
  export type Outbound = AchWithdrawalScheduleUpdate$Outbound;
}
