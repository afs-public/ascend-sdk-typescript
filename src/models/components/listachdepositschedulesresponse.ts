/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AchDepositSchedule,
  AchDepositSchedule$inboundSchema,
  AchDepositSchedule$Outbound,
  AchDepositSchedule$outboundSchema,
} from "./achdepositschedule.js";

/**
 * A paged response containing a list of ACH deposit transfer schedules
 */
export type ListAchDepositSchedulesResponse = {
  /**
   * The list of transfer schedules
   */
  achDepositSchedules?: Array<AchDepositSchedule> | undefined;
  /**
   * The next page token
   */
  nextPageToken?: string | undefined;
};

/** @internal */
export const ListAchDepositSchedulesResponse$inboundSchema: z.ZodType<
  ListAchDepositSchedulesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ach_deposit_schedules: z.array(AchDepositSchedule$inboundSchema).optional(),
  next_page_token: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "ach_deposit_schedules": "achDepositSchedules",
    "next_page_token": "nextPageToken",
  });
});

/** @internal */
export type ListAchDepositSchedulesResponse$Outbound = {
  ach_deposit_schedules?: Array<AchDepositSchedule$Outbound> | undefined;
  next_page_token?: string | undefined;
};

/** @internal */
export const ListAchDepositSchedulesResponse$outboundSchema: z.ZodType<
  ListAchDepositSchedulesResponse$Outbound,
  z.ZodTypeDef,
  ListAchDepositSchedulesResponse
> = z.object({
  achDepositSchedules: z.array(AchDepositSchedule$outboundSchema).optional(),
  nextPageToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    achDepositSchedules: "ach_deposit_schedules",
    nextPageToken: "next_page_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListAchDepositSchedulesResponse$ {
  /** @deprecated use `ListAchDepositSchedulesResponse$inboundSchema` instead. */
  export const inboundSchema = ListAchDepositSchedulesResponse$inboundSchema;
  /** @deprecated use `ListAchDepositSchedulesResponse$outboundSchema` instead. */
  export const outboundSchema = ListAchDepositSchedulesResponse$outboundSchema;
  /** @deprecated use `ListAchDepositSchedulesResponse$Outbound` instead. */
  export type Outbound = ListAchDepositSchedulesResponse$Outbound;
}
