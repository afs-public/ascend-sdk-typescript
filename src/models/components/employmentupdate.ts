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
  PostalAddressUpdate,
  PostalAddressUpdate$inboundSchema,
  PostalAddressUpdate$Outbound,
  PostalAddressUpdate$outboundSchema,
} from "./postaladdressupdate.js";

/**
 * Classifies in what capacity (or if) the underlying natural person holds a job
 */
export enum EmploymentUpdateEmploymentStatus {
  StatusUnspecified = "STATUS_UNSPECIFIED",
  Employed = "EMPLOYED",
  SelfEmployed = "SELF_EMPLOYED",
  Unemployed = "UNEMPLOYED",
  Retired = "RETIRED",
  Student = "STUDENT",
}
/**
 * Classifies in what capacity (or if) the underlying natural person holds a job
 */
export type EmploymentUpdateEmploymentStatusOpen = OpenEnum<
  typeof EmploymentUpdateEmploymentStatus
>;

/**
 * Object containing information pertaining to a investor's current employer including the name, address, and duration of employment.
 */
export type EmploymentUpdate = {
  /**
   * The business name of an investor's employer.
   */
  employer?: string | undefined;
  /**
   * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains).
   *
   * @remarks
   *
   *  In typical usage an address would be created via user input or from importing existing data, depending on the type of process.
   *
   *  Advice on address input / editing: - Use an i18n-ready address widget such as  https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of  fields outside countries where that field is used.
   *
   *  For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
   */
  employerAddress?: PostalAddressUpdate | undefined;
  /**
   * Classifies in what capacity (or if) the underlying natural person holds a job
   */
  employmentStatus?: EmploymentUpdateEmploymentStatusOpen | undefined;
  /**
   * The nature of work performed at an investor's place of employment. Required if the employment_status is `EMPLOYED` or `SELF_EMPLOYED`.
   */
  occupation?: string | undefined;
  /**
   * The start year of employment related to a person's stated employer Must be from birth year to current year, or 0 to clear start year value
   */
  startYear?: number | undefined;
};

/** @internal */
export const EmploymentUpdateEmploymentStatus$inboundSchema: z.ZodType<
  EmploymentUpdateEmploymentStatusOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(EmploymentUpdateEmploymentStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const EmploymentUpdateEmploymentStatus$outboundSchema: z.ZodType<
  EmploymentUpdateEmploymentStatusOpen,
  z.ZodTypeDef,
  EmploymentUpdateEmploymentStatusOpen
> = z.union([
  z.nativeEnum(EmploymentUpdateEmploymentStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentUpdateEmploymentStatus$ {
  /** @deprecated use `EmploymentUpdateEmploymentStatus$inboundSchema` instead. */
  export const inboundSchema = EmploymentUpdateEmploymentStatus$inboundSchema;
  /** @deprecated use `EmploymentUpdateEmploymentStatus$outboundSchema` instead. */
  export const outboundSchema = EmploymentUpdateEmploymentStatus$outboundSchema;
}

/** @internal */
export const EmploymentUpdate$inboundSchema: z.ZodType<
  EmploymentUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  employer: z.string().optional(),
  employer_address: PostalAddressUpdate$inboundSchema.optional(),
  employment_status: EmploymentUpdateEmploymentStatus$inboundSchema.optional(),
  occupation: z.string().optional(),
  start_year: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "employer_address": "employerAddress",
    "employment_status": "employmentStatus",
    "start_year": "startYear",
  });
});

/** @internal */
export type EmploymentUpdate$Outbound = {
  employer?: string | undefined;
  employer_address?: PostalAddressUpdate$Outbound | undefined;
  employment_status?: string | undefined;
  occupation?: string | undefined;
  start_year?: number | undefined;
};

/** @internal */
export const EmploymentUpdate$outboundSchema: z.ZodType<
  EmploymentUpdate$Outbound,
  z.ZodTypeDef,
  EmploymentUpdate
> = z.object({
  employer: z.string().optional(),
  employerAddress: PostalAddressUpdate$outboundSchema.optional(),
  employmentStatus: EmploymentUpdateEmploymentStatus$outboundSchema.optional(),
  occupation: z.string().optional(),
  startYear: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    employerAddress: "employer_address",
    employmentStatus: "employment_status",
    startYear: "start_year",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmploymentUpdate$ {
  /** @deprecated use `EmploymentUpdate$inboundSchema` instead. */
  export const inboundSchema = EmploymentUpdate$inboundSchema;
  /** @deprecated use `EmploymentUpdate$outboundSchema` instead. */
  export const outboundSchema = EmploymentUpdate$outboundSchema;
  /** @deprecated use `EmploymentUpdate$Outbound` instead. */
  export type Outbound = EmploymentUpdate$Outbound;
}
