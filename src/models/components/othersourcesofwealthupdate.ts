/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Applicant's other source of wealth
 */
export type OtherSourcesOfWealthUpdate = {
  /**
   * Indicates whether the applicant has other sources of wealth.
   */
  applicantHasOtherSourcesOfWealth?: boolean | undefined;
  /**
   * The applicant's other source of wealth description. If the applicant has no other sources of wealth, they must specify "N/A."
   */
  otherSourcesOfWealth?: string | undefined;
  /**
   * The applicant's other source of wealth verification. If the applicant has no other sources of wealth, they must specify "N/A."
   */
  otherSourcesOfWealthVerification?: string | undefined;
};

/** @internal */
export const OtherSourcesOfWealthUpdate$inboundSchema: z.ZodType<
  OtherSourcesOfWealthUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  applicant_has_other_sources_of_wealth: z.boolean().optional(),
  other_sources_of_wealth: z.string().optional(),
  other_sources_of_wealth_verification: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "applicant_has_other_sources_of_wealth": "applicantHasOtherSourcesOfWealth",
    "other_sources_of_wealth": "otherSourcesOfWealth",
    "other_sources_of_wealth_verification": "otherSourcesOfWealthVerification",
  });
});

/** @internal */
export type OtherSourcesOfWealthUpdate$Outbound = {
  applicant_has_other_sources_of_wealth?: boolean | undefined;
  other_sources_of_wealth?: string | undefined;
  other_sources_of_wealth_verification?: string | undefined;
};

/** @internal */
export const OtherSourcesOfWealthUpdate$outboundSchema: z.ZodType<
  OtherSourcesOfWealthUpdate$Outbound,
  z.ZodTypeDef,
  OtherSourcesOfWealthUpdate
> = z.object({
  applicantHasOtherSourcesOfWealth: z.boolean().optional(),
  otherSourcesOfWealth: z.string().optional(),
  otherSourcesOfWealthVerification: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    applicantHasOtherSourcesOfWealth: "applicant_has_other_sources_of_wealth",
    otherSourcesOfWealth: "other_sources_of_wealth",
    otherSourcesOfWealthVerification: "other_sources_of_wealth_verification",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OtherSourcesOfWealthUpdate$ {
  /** @deprecated use `OtherSourcesOfWealthUpdate$inboundSchema` instead. */
  export const inboundSchema = OtherSourcesOfWealthUpdate$inboundSchema;
  /** @deprecated use `OtherSourcesOfWealthUpdate$outboundSchema` instead. */
  export const outboundSchema = OtherSourcesOfWealthUpdate$outboundSchema;
  /** @deprecated use `OtherSourcesOfWealthUpdate$Outbound` instead. */
  export type Outbound = OtherSourcesOfWealthUpdate$Outbound;
}
