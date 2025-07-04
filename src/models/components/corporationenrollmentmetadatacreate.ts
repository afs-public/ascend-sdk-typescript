/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import {
  EddAccountEnrollmentMetadataCreate,
  EddAccountEnrollmentMetadataCreate$inboundSchema,
  EddAccountEnrollmentMetadataCreate$Outbound,
  EddAccountEnrollmentMetadataCreate$outboundSchema,
} from "./eddaccountenrollmentmetadatacreate.js";

/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export enum DividendReinvestmentPlan {
  AutoEnrollDividendReinvestmentUnspecified =
    "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
  DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
  DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE",
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type DividendReinvestmentPlanOpen = OpenEnum<
  typeof DividendReinvestmentPlan
>;

/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export enum FdicCashSweep {
  AutoEnrollFdicCashSweepUnspecified =
    "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
  FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
  FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE",
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type FdicCashSweepOpen = OpenEnum<typeof FdicCashSweep>;

export type CorporationEnrollmentMetadataCreate = {
  /**
   * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
   */
  dividendReinvestmentPlan?: DividendReinvestmentPlanOpen | undefined;
  /**
   * Enrollment metadata for Entity Accounts
   */
  eddAccountEnrollmentMetadata?: EddAccountEnrollmentMetadataCreate | undefined;
  /**
   * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
   */
  fdicCashSweep?: FdicCashSweepOpen | undefined;
};

/** @internal */
export const DividendReinvestmentPlan$inboundSchema: z.ZodType<
  DividendReinvestmentPlanOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(DividendReinvestmentPlan),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const DividendReinvestmentPlan$outboundSchema: z.ZodType<
  DividendReinvestmentPlanOpen,
  z.ZodTypeDef,
  DividendReinvestmentPlanOpen
> = z.union([
  z.nativeEnum(DividendReinvestmentPlan),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DividendReinvestmentPlan$ {
  /** @deprecated use `DividendReinvestmentPlan$inboundSchema` instead. */
  export const inboundSchema = DividendReinvestmentPlan$inboundSchema;
  /** @deprecated use `DividendReinvestmentPlan$outboundSchema` instead. */
  export const outboundSchema = DividendReinvestmentPlan$outboundSchema;
}

/** @internal */
export const FdicCashSweep$inboundSchema: z.ZodType<
  FdicCashSweepOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(FdicCashSweep),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const FdicCashSweep$outboundSchema: z.ZodType<
  FdicCashSweepOpen,
  z.ZodTypeDef,
  FdicCashSweepOpen
> = z.union([
  z.nativeEnum(FdicCashSweep),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FdicCashSweep$ {
  /** @deprecated use `FdicCashSweep$inboundSchema` instead. */
  export const inboundSchema = FdicCashSweep$inboundSchema;
  /** @deprecated use `FdicCashSweep$outboundSchema` instead. */
  export const outboundSchema = FdicCashSweep$outboundSchema;
}

/** @internal */
export const CorporationEnrollmentMetadataCreate$inboundSchema: z.ZodType<
  CorporationEnrollmentMetadataCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  dividend_reinvestment_plan: DividendReinvestmentPlan$inboundSchema.optional(),
  edd_account_enrollment_metadata:
    EddAccountEnrollmentMetadataCreate$inboundSchema.optional(),
  fdic_cash_sweep: FdicCashSweep$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "dividend_reinvestment_plan": "dividendReinvestmentPlan",
    "edd_account_enrollment_metadata": "eddAccountEnrollmentMetadata",
    "fdic_cash_sweep": "fdicCashSweep",
  });
});

/** @internal */
export type CorporationEnrollmentMetadataCreate$Outbound = {
  dividend_reinvestment_plan?: string | undefined;
  edd_account_enrollment_metadata?:
    | EddAccountEnrollmentMetadataCreate$Outbound
    | undefined;
  fdic_cash_sweep?: string | undefined;
};

/** @internal */
export const CorporationEnrollmentMetadataCreate$outboundSchema: z.ZodType<
  CorporationEnrollmentMetadataCreate$Outbound,
  z.ZodTypeDef,
  CorporationEnrollmentMetadataCreate
> = z.object({
  dividendReinvestmentPlan: DividendReinvestmentPlan$outboundSchema.optional(),
  eddAccountEnrollmentMetadata:
    EddAccountEnrollmentMetadataCreate$outboundSchema.optional(),
  fdicCashSweep: FdicCashSweep$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    dividendReinvestmentPlan: "dividend_reinvestment_plan",
    eddAccountEnrollmentMetadata: "edd_account_enrollment_metadata",
    fdicCashSweep: "fdic_cash_sweep",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CorporationEnrollmentMetadataCreate$ {
  /** @deprecated use `CorporationEnrollmentMetadataCreate$inboundSchema` instead. */
  export const inboundSchema =
    CorporationEnrollmentMetadataCreate$inboundSchema;
  /** @deprecated use `CorporationEnrollmentMetadataCreate$outboundSchema` instead. */
  export const outboundSchema =
    CorporationEnrollmentMetadataCreate$outboundSchema;
  /** @deprecated use `CorporationEnrollmentMetadataCreate$Outbound` instead. */
  export type Outbound = CorporationEnrollmentMetadataCreate$Outbound;
}
