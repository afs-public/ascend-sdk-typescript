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
export enum IRARothEnrollmentMetadataCreateDividendReinvestmentPlan {
  AutoEnrollDividendReinvestmentUnspecified =
    "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
  DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
  DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE",
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen =
  OpenEnum<typeof IRARothEnrollmentMetadataCreateDividendReinvestmentPlan>;

/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export enum IRARothEnrollmentMetadataCreateFdicCashSweep {
  AutoEnrollFdicCashSweepUnspecified =
    "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
  FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
  FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE",
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type IRARothEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<
  typeof IRARothEnrollmentMetadataCreateFdicCashSweep
>;

/**
 * Enrollment metadata for ROTH IRA accounts enrollment type
 */
export type IRARothEnrollmentMetadataCreate = {
  /**
   * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
   */
  dividendReinvestmentPlan?:
    | IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen
    | undefined;
  /**
   * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
   */
  fdicCashSweep?: IRARothEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};

/** @internal */
export const IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema:
  z.ZodType<
    IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(IRARothEnrollmentMetadataCreateDividendReinvestmentPlan),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema:
  z.ZodType<
    IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen,
    z.ZodTypeDef,
    IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen
  > = z.union([
    z.nativeEnum(IRARothEnrollmentMetadataCreateDividendReinvestmentPlan),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$ {
  /** @deprecated use `IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
  export const inboundSchema =
    IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema;
  /** @deprecated use `IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
  export const outboundSchema =
    IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema;
}

/** @internal */
export const IRARothEnrollmentMetadataCreateFdicCashSweep$inboundSchema:
  z.ZodType<
    IRARothEnrollmentMetadataCreateFdicCashSweepOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(IRARothEnrollmentMetadataCreateFdicCashSweep),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const IRARothEnrollmentMetadataCreateFdicCashSweep$outboundSchema:
  z.ZodType<
    IRARothEnrollmentMetadataCreateFdicCashSweepOpen,
    z.ZodTypeDef,
    IRARothEnrollmentMetadataCreateFdicCashSweepOpen
  > = z.union([
    z.nativeEnum(IRARothEnrollmentMetadataCreateFdicCashSweep),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IRARothEnrollmentMetadataCreateFdicCashSweep$ {
  /** @deprecated use `IRARothEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
  export const inboundSchema =
    IRARothEnrollmentMetadataCreateFdicCashSweep$inboundSchema;
  /** @deprecated use `IRARothEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
  export const outboundSchema =
    IRARothEnrollmentMetadataCreateFdicCashSweep$outboundSchema;
}

/** @internal */
export const IRARothEnrollmentMetadataCreate$inboundSchema: z.ZodType<
  IRARothEnrollmentMetadataCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  dividend_reinvestment_plan:
    IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema
      .optional(),
  fdic_cash_sweep: IRARothEnrollmentMetadataCreateFdicCashSweep$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "dividend_reinvestment_plan": "dividendReinvestmentPlan",
    "fdic_cash_sweep": "fdicCashSweep",
  });
});

/** @internal */
export type IRARothEnrollmentMetadataCreate$Outbound = {
  dividend_reinvestment_plan?: string | undefined;
  fdic_cash_sweep?: string | undefined;
};

/** @internal */
export const IRARothEnrollmentMetadataCreate$outboundSchema: z.ZodType<
  IRARothEnrollmentMetadataCreate$Outbound,
  z.ZodTypeDef,
  IRARothEnrollmentMetadataCreate
> = z.object({
  dividendReinvestmentPlan:
    IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema
      .optional(),
  fdicCashSweep: IRARothEnrollmentMetadataCreateFdicCashSweep$outboundSchema
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
export namespace IRARothEnrollmentMetadataCreate$ {
  /** @deprecated use `IRARothEnrollmentMetadataCreate$inboundSchema` instead. */
  export const inboundSchema = IRARothEnrollmentMetadataCreate$inboundSchema;
  /** @deprecated use `IRARothEnrollmentMetadataCreate$outboundSchema` instead. */
  export const outboundSchema = IRARothEnrollmentMetadataCreate$outboundSchema;
  /** @deprecated use `IRARothEnrollmentMetadataCreate$Outbound` instead. */
  export type Outbound = IRARothEnrollmentMetadataCreate$Outbound;
}
