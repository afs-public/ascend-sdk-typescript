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
export enum IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan {
  AutoEnrollDividendReinvestmentUnspecified =
    "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
  DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
  DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE",
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen =
  OpenEnum<typeof IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan>;

/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export enum IRASimpleEnrollmentMetadataCreateFdicCashSweep {
  AutoEnrollFdicCashSweepUnspecified =
    "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
  FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
  FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE",
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<
  typeof IRASimpleEnrollmentMetadataCreateFdicCashSweep
>;

/**
 * Enrollment metadata for Simple IRA accounts enrollment type
 */
export type IRASimpleEnrollmentMetadataCreate = {
  /**
   * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
   */
  dividendReinvestmentPlan?:
    | IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen
    | undefined;
  /**
   * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
   */
  fdicCashSweep?:
    | IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen
    | undefined;
};

/** @internal */
export const IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema:
  z.ZodType<
    IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema:
  z.ZodType<
    IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen,
    z.ZodTypeDef,
    IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen
  > = z.union([
    z.nativeEnum(IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$ {
  /** @deprecated use `IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
  export const inboundSchema =
    IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema;
  /** @deprecated use `IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
  export const outboundSchema =
    IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema;
}

/** @internal */
export const IRASimpleEnrollmentMetadataCreateFdicCashSweep$inboundSchema:
  z.ZodType<
    IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(IRASimpleEnrollmentMetadataCreateFdicCashSweep),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const IRASimpleEnrollmentMetadataCreateFdicCashSweep$outboundSchema:
  z.ZodType<
    IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen,
    z.ZodTypeDef,
    IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen
  > = z.union([
    z.nativeEnum(IRASimpleEnrollmentMetadataCreateFdicCashSweep),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IRASimpleEnrollmentMetadataCreateFdicCashSweep$ {
  /** @deprecated use `IRASimpleEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
  export const inboundSchema =
    IRASimpleEnrollmentMetadataCreateFdicCashSweep$inboundSchema;
  /** @deprecated use `IRASimpleEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
  export const outboundSchema =
    IRASimpleEnrollmentMetadataCreateFdicCashSweep$outboundSchema;
}

/** @internal */
export const IRASimpleEnrollmentMetadataCreate$inboundSchema: z.ZodType<
  IRASimpleEnrollmentMetadataCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  dividend_reinvestment_plan:
    IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema
      .optional(),
  fdic_cash_sweep: IRASimpleEnrollmentMetadataCreateFdicCashSweep$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "dividend_reinvestment_plan": "dividendReinvestmentPlan",
    "fdic_cash_sweep": "fdicCashSweep",
  });
});

/** @internal */
export type IRASimpleEnrollmentMetadataCreate$Outbound = {
  dividend_reinvestment_plan?: string | undefined;
  fdic_cash_sweep?: string | undefined;
};

/** @internal */
export const IRASimpleEnrollmentMetadataCreate$outboundSchema: z.ZodType<
  IRASimpleEnrollmentMetadataCreate$Outbound,
  z.ZodTypeDef,
  IRASimpleEnrollmentMetadataCreate
> = z.object({
  dividendReinvestmentPlan:
    IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema
      .optional(),
  fdicCashSweep: IRASimpleEnrollmentMetadataCreateFdicCashSweep$outboundSchema
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
export namespace IRASimpleEnrollmentMetadataCreate$ {
  /** @deprecated use `IRASimpleEnrollmentMetadataCreate$inboundSchema` instead. */
  export const inboundSchema = IRASimpleEnrollmentMetadataCreate$inboundSchema;
  /** @deprecated use `IRASimpleEnrollmentMetadataCreate$outboundSchema` instead. */
  export const outboundSchema =
    IRASimpleEnrollmentMetadataCreate$outboundSchema;
  /** @deprecated use `IRASimpleEnrollmentMetadataCreate$Outbound` instead. */
  export type Outbound = IRASimpleEnrollmentMetadataCreate$Outbound;
}
