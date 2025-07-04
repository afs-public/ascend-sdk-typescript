/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  EnrollmentCreate,
  EnrollmentCreate$inboundSchema,
  EnrollmentCreate$Outbound,
  EnrollmentCreate$outboundSchema,
} from "./enrollmentcreate.js";

/**
 * The request for creating an Enrollment on an account.
 */
export type EnrollAccountRequestCreate = {
  /**
   * An Enrollment represents programs the account may enroll in.
   */
  enrollment: EnrollmentCreate;
};

/** @internal */
export const EnrollAccountRequestCreate$inboundSchema: z.ZodType<
  EnrollAccountRequestCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  enrollment: EnrollmentCreate$inboundSchema,
});

/** @internal */
export type EnrollAccountRequestCreate$Outbound = {
  enrollment: EnrollmentCreate$Outbound;
};

/** @internal */
export const EnrollAccountRequestCreate$outboundSchema: z.ZodType<
  EnrollAccountRequestCreate$Outbound,
  z.ZodTypeDef,
  EnrollAccountRequestCreate
> = z.object({
  enrollment: EnrollmentCreate$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EnrollAccountRequestCreate$ {
  /** @deprecated use `EnrollAccountRequestCreate$inboundSchema` instead. */
  export const inboundSchema = EnrollAccountRequestCreate$inboundSchema;
  /** @deprecated use `EnrollAccountRequestCreate$outboundSchema` instead. */
  export const outboundSchema = EnrollAccountRequestCreate$outboundSchema;
  /** @deprecated use `EnrollAccountRequestCreate$Outbound` instead. */
  export type Outbound = EnrollAccountRequestCreate$Outbound;
}
