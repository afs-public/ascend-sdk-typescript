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
  TaxWithholdingMetadataCreate,
  TaxWithholdingMetadataCreate$inboundSchema,
  TaxWithholdingMetadataCreate$Outbound,
  TaxWithholdingMetadataCreate$outboundSchema,
} from "./taxwithholdingmetadatacreate.js";

/**
 * The purpose of the operating account.
 */
export enum OperatingPurpose {
  OperatingPurposeUnspecified = "OPERATING_PURPOSE_UNSPECIFIED",
  Custody = "CUSTODY",
  SecFee = "SEC_FEE",
  TafFee = "TAF_FEE",
  TefraWithholding = "TEFRA_WITHHOLDING",
  Suspense = "SUSPENSE",
  Allocation = "ALLOCATION",
  Error = "ERROR",
  Deposit = "DEPOSIT",
  WriteOff = "WRITE_OFF",
  UnsecuredReserve = "UNSECURED_RESERVE",
  Payable = "PAYABLE",
  Commission = "COMMISSION",
  Escheatment = "ESCHEATMENT",
  InterestRevenue = "INTEREST_REVENUE",
  StreetDepository = "STREET_DEPOSITORY",
  Inventory = "INVENTORY",
  TaxWithholding = "TAX_WITHHOLDING",
  Fee = "FEE",
  PrincipalTrading = "PRINCIPAL_TRADING",
  SafekeepingBookEntityDomestic = "SAFEKEEPING_BOOK_ENTITY_DOMESTIC",
  Fail = "FAIL",
}
/**
 * The purpose of the operating account.
 */
export type OperatingPurposeOpen = OpenEnum<typeof OperatingPurpose>;

/**
 * Enrollment metadata for the REGISTRATION_OPERATING enrollment type.
 */
export type OperatingEnrollmentMetadataCreate = {
  /**
   * The purpose of the operating account.
   */
  operatingPurpose: OperatingPurposeOpen;
  /**
   * Optional subtitle for the operating purpose
   */
  subtitle?: string | undefined;
  /**
   * Enrollment metadata for TAX_WITHHOLDING operating purpose
   */
  taxWithholdingMetadata?: TaxWithholdingMetadataCreate | undefined;
};

/** @internal */
export const OperatingPurpose$inboundSchema: z.ZodType<
  OperatingPurposeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(OperatingPurpose),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const OperatingPurpose$outboundSchema: z.ZodType<
  OperatingPurposeOpen,
  z.ZodTypeDef,
  OperatingPurposeOpen
> = z.union([
  z.nativeEnum(OperatingPurpose),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OperatingPurpose$ {
  /** @deprecated use `OperatingPurpose$inboundSchema` instead. */
  export const inboundSchema = OperatingPurpose$inboundSchema;
  /** @deprecated use `OperatingPurpose$outboundSchema` instead. */
  export const outboundSchema = OperatingPurpose$outboundSchema;
}

/** @internal */
export const OperatingEnrollmentMetadataCreate$inboundSchema: z.ZodType<
  OperatingEnrollmentMetadataCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  operating_purpose: OperatingPurpose$inboundSchema,
  subtitle: z.string().optional(),
  tax_withholding_metadata: TaxWithholdingMetadataCreate$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "operating_purpose": "operatingPurpose",
    "tax_withholding_metadata": "taxWithholdingMetadata",
  });
});

/** @internal */
export type OperatingEnrollmentMetadataCreate$Outbound = {
  operating_purpose: string;
  subtitle?: string | undefined;
  tax_withholding_metadata?: TaxWithholdingMetadataCreate$Outbound | undefined;
};

/** @internal */
export const OperatingEnrollmentMetadataCreate$outboundSchema: z.ZodType<
  OperatingEnrollmentMetadataCreate$Outbound,
  z.ZodTypeDef,
  OperatingEnrollmentMetadataCreate
> = z.object({
  operatingPurpose: OperatingPurpose$outboundSchema,
  subtitle: z.string().optional(),
  taxWithholdingMetadata: TaxWithholdingMetadataCreate$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    operatingPurpose: "operating_purpose",
    taxWithholdingMetadata: "tax_withholding_metadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OperatingEnrollmentMetadataCreate$ {
  /** @deprecated use `OperatingEnrollmentMetadataCreate$inboundSchema` instead. */
  export const inboundSchema = OperatingEnrollmentMetadataCreate$inboundSchema;
  /** @deprecated use `OperatingEnrollmentMetadataCreate$outboundSchema` instead. */
  export const outboundSchema =
    OperatingEnrollmentMetadataCreate$outboundSchema;
  /** @deprecated use `OperatingEnrollmentMetadataCreate$Outbound` instead. */
  export type Outbound = OperatingEnrollmentMetadataCreate$Outbound;
}
