/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Sanctions list detail used for Dow Jones Profile details
 */
export type SanctionsListDetail = {
  /**
   * Dow Jones day persons will be taken off sanctions list
   */
  endDay?: string | undefined;
  /**
   * Dow Jones month persons will be taken off sanctions list
   */
  endMonth?: string | undefined;
  /**
   * Dow Jones year persons will be taken off sanctions list
   */
  endYear?: string | undefined;
  /**
   * Dow Jones persons sanctions ref id
   */
  sanctionsReferenceDescription?: string | undefined;
  /**
   * Dow Jones day persons were added to the sanctions list
   */
  startDay?: string | undefined;
  /**
   * Dow Jones month persons were added to the sanctions list
   */
  startMonth?: string | undefined;
  /**
   * Dow Jones year persons were added to the sanctions list
   */
  startYear?: string | undefined;
};

/** @internal */
export const SanctionsListDetail$inboundSchema: z.ZodType<
  SanctionsListDetail,
  z.ZodTypeDef,
  unknown
> = z.object({
  end_day: z.string().optional(),
  end_month: z.string().optional(),
  end_year: z.string().optional(),
  sanctions_reference_description: z.string().optional(),
  start_day: z.string().optional(),
  start_month: z.string().optional(),
  start_year: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "end_day": "endDay",
    "end_month": "endMonth",
    "end_year": "endYear",
    "sanctions_reference_description": "sanctionsReferenceDescription",
    "start_day": "startDay",
    "start_month": "startMonth",
    "start_year": "startYear",
  });
});

/** @internal */
export type SanctionsListDetail$Outbound = {
  end_day?: string | undefined;
  end_month?: string | undefined;
  end_year?: string | undefined;
  sanctions_reference_description?: string | undefined;
  start_day?: string | undefined;
  start_month?: string | undefined;
  start_year?: string | undefined;
};

/** @internal */
export const SanctionsListDetail$outboundSchema: z.ZodType<
  SanctionsListDetail$Outbound,
  z.ZodTypeDef,
  SanctionsListDetail
> = z.object({
  endDay: z.string().optional(),
  endMonth: z.string().optional(),
  endYear: z.string().optional(),
  sanctionsReferenceDescription: z.string().optional(),
  startDay: z.string().optional(),
  startMonth: z.string().optional(),
  startYear: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    endDay: "end_day",
    endMonth: "end_month",
    endYear: "end_year",
    sanctionsReferenceDescription: "sanctions_reference_description",
    startDay: "start_day",
    startMonth: "start_month",
    startYear: "start_year",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SanctionsListDetail$ {
  /** @deprecated use `SanctionsListDetail$inboundSchema` instead. */
  export const inboundSchema = SanctionsListDetail$inboundSchema;
  /** @deprecated use `SanctionsListDetail$outboundSchema` instead. */
  export const outboundSchema = SanctionsListDetail$outboundSchema;
  /** @deprecated use `SanctionsListDetail$Outbound` instead. */
  export type Outbound = SanctionsListDetail$Outbound;
}
