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
export enum EstateEnrollmentMetadataCreateDividendReinvestmentPlan {
  AutoEnrollDividendReinvestmentUnspecified =
    "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
  DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
  DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE",
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen =
  OpenEnum<typeof EstateEnrollmentMetadataCreateDividendReinvestmentPlan>;

/**
 * Enrollment metadata for estate enrollments
 */
export type EstateEnrollmentMetadataCreate = {
  /**
   * The document id for the certificate of appointment
   */
  certificateOfAppointmentDocumentId?: string | undefined;
  /**
   * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
   */
  dividendReinvestmentPlan?:
    | EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen
    | undefined;
};

/** @internal */
export const EstateEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema:
  z.ZodType<
    EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(EstateEnrollmentMetadataCreateDividendReinvestmentPlan),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const EstateEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema:
  z.ZodType<
    EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen,
    z.ZodTypeDef,
    EstateEnrollmentMetadataCreateDividendReinvestmentPlanOpen
  > = z.union([
    z.nativeEnum(EstateEnrollmentMetadataCreateDividendReinvestmentPlan),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EstateEnrollmentMetadataCreateDividendReinvestmentPlan$ {
  /** @deprecated use `EstateEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
  export const inboundSchema =
    EstateEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema;
  /** @deprecated use `EstateEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
  export const outboundSchema =
    EstateEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema;
}

/** @internal */
export const EstateEnrollmentMetadataCreate$inboundSchema: z.ZodType<
  EstateEnrollmentMetadataCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  certificate_of_appointment_document_id: z.string().optional(),
  dividend_reinvestment_plan:
    EstateEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema
      .optional(),
}).transform((v) => {
  return remap$(v, {
    "certificate_of_appointment_document_id":
      "certificateOfAppointmentDocumentId",
    "dividend_reinvestment_plan": "dividendReinvestmentPlan",
  });
});

/** @internal */
export type EstateEnrollmentMetadataCreate$Outbound = {
  certificate_of_appointment_document_id?: string | undefined;
  dividend_reinvestment_plan?: string | undefined;
};

/** @internal */
export const EstateEnrollmentMetadataCreate$outboundSchema: z.ZodType<
  EstateEnrollmentMetadataCreate$Outbound,
  z.ZodTypeDef,
  EstateEnrollmentMetadataCreate
> = z.object({
  certificateOfAppointmentDocumentId: z.string().optional(),
  dividendReinvestmentPlan:
    EstateEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema
      .optional(),
}).transform((v) => {
  return remap$(v, {
    certificateOfAppointmentDocumentId:
      "certificate_of_appointment_document_id",
    dividendReinvestmentPlan: "dividend_reinvestment_plan",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EstateEnrollmentMetadataCreate$ {
  /** @deprecated use `EstateEnrollmentMetadataCreate$inboundSchema` instead. */
  export const inboundSchema = EstateEnrollmentMetadataCreate$inboundSchema;
  /** @deprecated use `EstateEnrollmentMetadataCreate$outboundSchema` instead. */
  export const outboundSchema = EstateEnrollmentMetadataCreate$outboundSchema;
  /** @deprecated use `EstateEnrollmentMetadataCreate$Outbound` instead. */
  export type Outbound = EstateEnrollmentMetadataCreate$Outbound;
}
