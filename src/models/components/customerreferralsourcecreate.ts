/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Customer Referral Source
 */
export type CustomerReferralSourceCreate = {
  /**
   * The name of the referrer
   */
  name: string;
  /**
   * The relationship of the referrer to the applicant
   */
  relationshipToApplicant: string;
  /**
   * The years the referrer has known the applicant If the referrer has known the applicant for less than a year, they must specify 1
   */
  relationshipYearsWithApplicant: number;
  /**
   * The years the referrer has known the broker If the referrer has known the broker for less than a year, they must specify 1
   */
  relationshipYearsWithBroker: number;
};

/** @internal */
export const CustomerReferralSourceCreate$inboundSchema: z.ZodType<
  CustomerReferralSourceCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  relationship_to_applicant: z.string(),
  relationship_years_with_applicant: z.number().int(),
  relationship_years_with_broker: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "relationship_to_applicant": "relationshipToApplicant",
    "relationship_years_with_applicant": "relationshipYearsWithApplicant",
    "relationship_years_with_broker": "relationshipYearsWithBroker",
  });
});

/** @internal */
export type CustomerReferralSourceCreate$Outbound = {
  name: string;
  relationship_to_applicant: string;
  relationship_years_with_applicant: number;
  relationship_years_with_broker: number;
};

/** @internal */
export const CustomerReferralSourceCreate$outboundSchema: z.ZodType<
  CustomerReferralSourceCreate$Outbound,
  z.ZodTypeDef,
  CustomerReferralSourceCreate
> = z.object({
  name: z.string(),
  relationshipToApplicant: z.string(),
  relationshipYearsWithApplicant: z.number().int(),
  relationshipYearsWithBroker: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    relationshipToApplicant: "relationship_to_applicant",
    relationshipYearsWithApplicant: "relationship_years_with_applicant",
    relationshipYearsWithBroker: "relationship_years_with_broker",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerReferralSourceCreate$ {
  /** @deprecated use `CustomerReferralSourceCreate$inboundSchema` instead. */
  export const inboundSchema = CustomerReferralSourceCreate$inboundSchema;
  /** @deprecated use `CustomerReferralSourceCreate$outboundSchema` instead. */
  export const outboundSchema = CustomerReferralSourceCreate$outboundSchema;
  /** @deprecated use `CustomerReferralSourceCreate$Outbound` instead. */
  export type Outbound = CustomerReferralSourceCreate$Outbound;
}
