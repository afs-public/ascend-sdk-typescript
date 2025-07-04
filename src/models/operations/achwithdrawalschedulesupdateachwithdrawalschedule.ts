/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest = {
  /**
   * The account id.
   */
  accountId: string;
  /**
   * The achWithdrawalSchedule id.
   */
  achWithdrawalScheduleId: string;
  /**
   * A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable
   */
  updateMask?: string | undefined;
  achWithdrawalScheduleUpdate: components.AchWithdrawalScheduleUpdate;
};

export type AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  achWithdrawalSchedule?: components.AchWithdrawalSchedule | undefined;
  /**
   * INVALID_ARGUMENT: The request has an invalid argument.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$inboundSchema:
  z.ZodType<
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    account_id: z.string(),
    achWithdrawalSchedule_id: z.string(),
    update_mask: z.string().optional(),
    AchWithdrawalScheduleUpdate:
      components.AchWithdrawalScheduleUpdate$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "account_id": "accountId",
      "achWithdrawalSchedule_id": "achWithdrawalScheduleId",
      "update_mask": "updateMask",
      "AchWithdrawalScheduleUpdate": "achWithdrawalScheduleUpdate",
    });
  });

/** @internal */
export type AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$Outbound =
  {
    account_id: string;
    achWithdrawalSchedule_id: string;
    update_mask?: string | undefined;
    AchWithdrawalScheduleUpdate:
      components.AchWithdrawalScheduleUpdate$Outbound;
  };

/** @internal */
export const AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$outboundSchema:
  z.ZodType<
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$Outbound,
    z.ZodTypeDef,
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest
  > = z.object({
    accountId: z.string(),
    achWithdrawalScheduleId: z.string(),
    updateMask: z.string().optional(),
    achWithdrawalScheduleUpdate:
      components.AchWithdrawalScheduleUpdate$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      accountId: "account_id",
      achWithdrawalScheduleId: "achWithdrawalSchedule_id",
      updateMask: "update_mask",
      achWithdrawalScheduleUpdate: "AchWithdrawalScheduleUpdate",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$ {
  /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$inboundSchema` instead. */
  export const inboundSchema =
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$inboundSchema;
  /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$outboundSchema` instead. */
  export const outboundSchema =
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$outboundSchema;
  /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$Outbound` instead. */
  export type Outbound =
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleRequest$Outbound;
}

/** @internal */
export const AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$inboundSchema:
  z.ZodType<
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    AchWithdrawalSchedule: components.AchWithdrawalSchedule$inboundSchema
      .optional(),
    Status: components.Status$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "AchWithdrawalSchedule": "achWithdrawalSchedule",
      "Status": "status",
    });
  });

/** @internal */
export type AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$Outbound =
  {
    HttpMeta: components.HTTPMetadata$Outbound;
    AchWithdrawalSchedule?:
      | components.AchWithdrawalSchedule$Outbound
      | undefined;
    Status?: components.Status$Outbound | undefined;
  };

/** @internal */
export const AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$outboundSchema:
  z.ZodType<
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$Outbound,
    z.ZodTypeDef,
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    achWithdrawalSchedule: components.AchWithdrawalSchedule$outboundSchema
      .optional(),
    status: components.Status$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      achWithdrawalSchedule: "AchWithdrawalSchedule",
      status: "Status",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$ {
  /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$inboundSchema` instead. */
  export const inboundSchema =
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$inboundSchema;
  /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$outboundSchema` instead. */
  export const outboundSchema =
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$outboundSchema;
  /** @deprecated use `AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$Outbound` instead. */
  export type Outbound =
    AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse$Outbound;
}
