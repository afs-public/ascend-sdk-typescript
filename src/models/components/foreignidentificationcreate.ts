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
  DateCreate,
  DateCreate$inboundSchema,
  DateCreate$Outbound,
  DateCreate$outboundSchema,
} from "./datecreate.js";

/**
 * Identification type
 */
export enum Type {
  IdentificationTypeUnspecified = "IDENTIFICATION_TYPE_UNSPECIFIED",
  Passport = "PASSPORT",
  NationalId = "NATIONAL_ID",
  DriversLicense = "DRIVERS_LICENSE",
}
/**
 * Identification type
 */
export type TypeOpen = OpenEnum<typeof Type>;

/**
 * Foreign identification
 */
export type ForeignIdentificationCreate = {
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
   *
   * @remarks
   *
   *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
   *
   *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
   */
  expirationDate?: DateCreate | undefined;
  /**
   * Denotes if the identification is a tax id or other
   */
  ftin: boolean;
  /**
   * Identification number
   */
  identificationNumber: string;
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
   *
   * @remarks
   *
   *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
   *
   *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
   */
  issueDate?: DateCreate | undefined;
  /**
   * Region of issuance must be provided as a two-character CLDR country code
   */
  issuingRegionCode: string;
  /**
   * Identification type
   */
  type?: TypeOpen | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodType<TypeOpen, z.ZodTypeDef, unknown> = z
  .union([
    z.nativeEnum(Type),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const Type$outboundSchema: z.ZodType<TypeOpen, z.ZodTypeDef, TypeOpen> =
  z.union([
    z.nativeEnum(Type),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const ForeignIdentificationCreate$inboundSchema: z.ZodType<
  ForeignIdentificationCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  expiration_date: DateCreate$inboundSchema.optional(),
  ftin: z.boolean(),
  identification_number: z.string(),
  issue_date: DateCreate$inboundSchema.optional(),
  issuing_region_code: z.string(),
  type: Type$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "expiration_date": "expirationDate",
    "identification_number": "identificationNumber",
    "issue_date": "issueDate",
    "issuing_region_code": "issuingRegionCode",
  });
});

/** @internal */
export type ForeignIdentificationCreate$Outbound = {
  expiration_date?: DateCreate$Outbound | undefined;
  ftin: boolean;
  identification_number: string;
  issue_date?: DateCreate$Outbound | undefined;
  issuing_region_code: string;
  type?: string | undefined;
};

/** @internal */
export const ForeignIdentificationCreate$outboundSchema: z.ZodType<
  ForeignIdentificationCreate$Outbound,
  z.ZodTypeDef,
  ForeignIdentificationCreate
> = z.object({
  expirationDate: DateCreate$outboundSchema.optional(),
  ftin: z.boolean(),
  identificationNumber: z.string(),
  issueDate: DateCreate$outboundSchema.optional(),
  issuingRegionCode: z.string(),
  type: Type$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    expirationDate: "expiration_date",
    identificationNumber: "identification_number",
    issueDate: "issue_date",
    issuingRegionCode: "issuing_region_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForeignIdentificationCreate$ {
  /** @deprecated use `ForeignIdentificationCreate$inboundSchema` instead. */
  export const inboundSchema = ForeignIdentificationCreate$inboundSchema;
  /** @deprecated use `ForeignIdentificationCreate$outboundSchema` instead. */
  export const outboundSchema = ForeignIdentificationCreate$outboundSchema;
  /** @deprecated use `ForeignIdentificationCreate$Outbound` instead. */
  export type Outbound = ForeignIdentificationCreate$Outbound;
}
