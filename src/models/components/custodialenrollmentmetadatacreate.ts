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

/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export enum CustodialEnrollmentMetadataCreateDividendReinvestmentPlan {
  AutoEnrollDividendReinvestmentUnspecified =
    "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
  DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
  DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE",
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen =
  OpenEnum<typeof CustodialEnrollmentMetadataCreateDividendReinvestmentPlan>;

/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export enum CustodialEnrollmentMetadataCreateFdicCashSweep {
  AutoEnrollFdicCashSweepUnspecified =
    "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
  FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
  FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE",
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type CustodialEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<
  typeof CustodialEnrollmentMetadataCreateFdicCashSweep
>;

/**
 * Enrollment metadata for the CUSTODIAL enrollment type
 */
export type CustodialEnrollmentMetadataCreate = {
  /**
   * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
   */
  dividendReinvestmentPlan?:
    | CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen
    | undefined;
  /**
   * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
   */
  fdicCashSweep?:
    | CustodialEnrollmentMetadataCreateFdicCashSweepOpen
    | undefined;
};

/** @internal */
export const CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema:
  z.ZodType<
    CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(CustodialEnrollmentMetadataCreateDividendReinvestmentPlan),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema:
  z.ZodType<
    CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen,
    z.ZodTypeDef,
    CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen
  > = z.union([
    z.nativeEnum(CustodialEnrollmentMetadataCreateDividendReinvestmentPlan),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$ {
  /** @deprecated use `CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
  export const inboundSchema =
    CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema;
  /** @deprecated use `CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
  export const outboundSchema =
    CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema;
}

/** @internal */
export const CustodialEnrollmentMetadataCreateFdicCashSweep$inboundSchema:
  z.ZodType<
    CustodialEnrollmentMetadataCreateFdicCashSweepOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(CustodialEnrollmentMetadataCreateFdicCashSweep),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const CustodialEnrollmentMetadataCreateFdicCashSweep$outboundSchema:
  z.ZodType<
    CustodialEnrollmentMetadataCreateFdicCashSweepOpen,
    z.ZodTypeDef,
    CustodialEnrollmentMetadataCreateFdicCashSweepOpen
  > = z.union([
    z.nativeEnum(CustodialEnrollmentMetadataCreateFdicCashSweep),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustodialEnrollmentMetadataCreateFdicCashSweep$ {
  /** @deprecated use `CustodialEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
  export const inboundSchema =
    CustodialEnrollmentMetadataCreateFdicCashSweep$inboundSchema;
  /** @deprecated use `CustodialEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
  export const outboundSchema =
    CustodialEnrollmentMetadataCreateFdicCashSweep$outboundSchema;
}

/** @internal */
export const CustodialEnrollmentMetadataCreate$inboundSchema: z.ZodType<
  CustodialEnrollmentMetadataCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  dividend_reinvestment_plan:
    CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema
      .optional(),
  fdic_cash_sweep: CustodialEnrollmentMetadataCreateFdicCashSweep$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "dividend_reinvestment_plan": "dividendReinvestmentPlan",
    "fdic_cash_sweep": "fdicCashSweep",
  });
});

/** @internal */
export type CustodialEnrollmentMetadataCreate$Outbound = {
  dividend_reinvestment_plan?: string | undefined;
  fdic_cash_sweep?: string | undefined;
};

/** @internal */
export const CustodialEnrollmentMetadataCreate$outboundSchema: z.ZodType<
  CustodialEnrollmentMetadataCreate$Outbound,
  z.ZodTypeDef,
  CustodialEnrollmentMetadataCreate
> = z.object({
  dividendReinvestmentPlan:
    CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema
      .optional(),
  fdicCashSweep: CustodialEnrollmentMetadataCreateFdicCashSweep$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    dividendReinvestmentPlan: "dividend_reinvestment_plan",
    fdicCashSweep: "fdic_cash_sweep",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustodialEnrollmentMetadataCreate$ {
  /** @deprecated use `CustodialEnrollmentMetadataCreate$inboundSchema` instead. */
  export const inboundSchema = CustodialEnrollmentMetadataCreate$inboundSchema;
  /** @deprecated use `CustodialEnrollmentMetadataCreate$outboundSchema` instead. */
  export const outboundSchema =
    CustodialEnrollmentMetadataCreate$outboundSchema;
  /** @deprecated use `CustodialEnrollmentMetadataCreate$Outbound` instead. */
  export type Outbound = CustodialEnrollmentMetadataCreate$Outbound;
}
