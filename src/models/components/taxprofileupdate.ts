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
 * Federal tax classification.
 */
export enum TaxProfileUpdateFederalTaxClassification {
  FederalTaxClassificationUnspecified =
    "FEDERAL_TAX_CLASSIFICATION_UNSPECIFIED",
  IndivSolepropOrSinglememberllc = "INDIV_SOLEPROP_OR_SINGLEMEMBERLLC",
  Partnership = "PARTNERSHIP",
  CCorporation = "C_CORPORATION",
  SCorporation = "S_CORPORATION",
  TrustEstate = "TRUST_ESTATE",
  LlcTaxedAsCCorp = "LLC_TAXED_AS_C_CORP",
  LlcTaxedAsSCorp = "LLC_TAXED_AS_S_CORP",
  LlcTaxedAsPartnership = "LLC_TAXED_AS_PARTNERSHIP",
  Other = "OTHER",
}
/**
 * Federal tax classification.
 */
export type TaxProfileUpdateFederalTaxClassificationOpen = OpenEnum<
  typeof TaxProfileUpdateFederalTaxClassification
>;

/**
 * IRS form type.
 */
export enum TaxProfileUpdateIrsFormType {
  IrsFormTypeUnspecified = "IRS_FORM_TYPE_UNSPECIFIED",
  W9 = "W_9",
  W8Ben = "W_8BEN",
}
/**
 * IRS form type.
 */
export type TaxProfileUpdateIrsFormTypeOpen = OpenEnum<
  typeof TaxProfileUpdateIrsFormType
>;

/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export enum TaxProfileUpdateUsTinStatus {
  UsTinStatusUnspecified = "US_TIN_STATUS_UNSPECIFIED",
  Passing = "PASSING",
  Failing = "FAILING",
}
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export type TaxProfileUpdateUsTinStatusOpen = OpenEnum<
  typeof TaxProfileUpdateUsTinStatus
>;

/**
 * Tax Profile pertaining to the Legal Entity or Natural Person.
 */
export type TaxProfileUpdate = {
  /**
   * Federal tax classification.
   */
  federalTaxClassification?:
    | TaxProfileUpdateFederalTaxClassificationOpen
    | undefined;
  /**
   * IRS form type.
   */
  irsFormType?: TaxProfileUpdateIrsFormTypeOpen | undefined;
  /**
   * Legal tax region must be "US" if provided W-9, otherwise must be a non-US country.
   */
  legalTaxRegionCode?: string | undefined;
  /**
   * United States Individual Taxpayer Identification Number (ITIN) status.
   */
  usTinStatus?: TaxProfileUpdateUsTinStatusOpen | undefined;
};

/** @internal */
export const TaxProfileUpdateFederalTaxClassification$inboundSchema: z.ZodType<
  TaxProfileUpdateFederalTaxClassificationOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(TaxProfileUpdateFederalTaxClassification),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const TaxProfileUpdateFederalTaxClassification$outboundSchema: z.ZodType<
  TaxProfileUpdateFederalTaxClassificationOpen,
  z.ZodTypeDef,
  TaxProfileUpdateFederalTaxClassificationOpen
> = z.union([
  z.nativeEnum(TaxProfileUpdateFederalTaxClassification),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxProfileUpdateFederalTaxClassification$ {
  /** @deprecated use `TaxProfileUpdateFederalTaxClassification$inboundSchema` instead. */
  export const inboundSchema =
    TaxProfileUpdateFederalTaxClassification$inboundSchema;
  /** @deprecated use `TaxProfileUpdateFederalTaxClassification$outboundSchema` instead. */
  export const outboundSchema =
    TaxProfileUpdateFederalTaxClassification$outboundSchema;
}

/** @internal */
export const TaxProfileUpdateIrsFormType$inboundSchema: z.ZodType<
  TaxProfileUpdateIrsFormTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(TaxProfileUpdateIrsFormType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const TaxProfileUpdateIrsFormType$outboundSchema: z.ZodType<
  TaxProfileUpdateIrsFormTypeOpen,
  z.ZodTypeDef,
  TaxProfileUpdateIrsFormTypeOpen
> = z.union([
  z.nativeEnum(TaxProfileUpdateIrsFormType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxProfileUpdateIrsFormType$ {
  /** @deprecated use `TaxProfileUpdateIrsFormType$inboundSchema` instead. */
  export const inboundSchema = TaxProfileUpdateIrsFormType$inboundSchema;
  /** @deprecated use `TaxProfileUpdateIrsFormType$outboundSchema` instead. */
  export const outboundSchema = TaxProfileUpdateIrsFormType$outboundSchema;
}

/** @internal */
export const TaxProfileUpdateUsTinStatus$inboundSchema: z.ZodType<
  TaxProfileUpdateUsTinStatusOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(TaxProfileUpdateUsTinStatus),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const TaxProfileUpdateUsTinStatus$outboundSchema: z.ZodType<
  TaxProfileUpdateUsTinStatusOpen,
  z.ZodTypeDef,
  TaxProfileUpdateUsTinStatusOpen
> = z.union([
  z.nativeEnum(TaxProfileUpdateUsTinStatus),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxProfileUpdateUsTinStatus$ {
  /** @deprecated use `TaxProfileUpdateUsTinStatus$inboundSchema` instead. */
  export const inboundSchema = TaxProfileUpdateUsTinStatus$inboundSchema;
  /** @deprecated use `TaxProfileUpdateUsTinStatus$outboundSchema` instead. */
  export const outboundSchema = TaxProfileUpdateUsTinStatus$outboundSchema;
}

/** @internal */
export const TaxProfileUpdate$inboundSchema: z.ZodType<
  TaxProfileUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  federal_tax_classification:
    TaxProfileUpdateFederalTaxClassification$inboundSchema.optional(),
  irs_form_type: TaxProfileUpdateIrsFormType$inboundSchema.optional(),
  legal_tax_region_code: z.string().optional(),
  us_tin_status: TaxProfileUpdateUsTinStatus$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "federal_tax_classification": "federalTaxClassification",
    "irs_form_type": "irsFormType",
    "legal_tax_region_code": "legalTaxRegionCode",
    "us_tin_status": "usTinStatus",
  });
});

/** @internal */
export type TaxProfileUpdate$Outbound = {
  federal_tax_classification?: string | undefined;
  irs_form_type?: string | undefined;
  legal_tax_region_code?: string | undefined;
  us_tin_status?: string | undefined;
};

/** @internal */
export const TaxProfileUpdate$outboundSchema: z.ZodType<
  TaxProfileUpdate$Outbound,
  z.ZodTypeDef,
  TaxProfileUpdate
> = z.object({
  federalTaxClassification:
    TaxProfileUpdateFederalTaxClassification$outboundSchema.optional(),
  irsFormType: TaxProfileUpdateIrsFormType$outboundSchema.optional(),
  legalTaxRegionCode: z.string().optional(),
  usTinStatus: TaxProfileUpdateUsTinStatus$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    federalTaxClassification: "federal_tax_classification",
    irsFormType: "irs_form_type",
    legalTaxRegionCode: "legal_tax_region_code",
    usTinStatus: "us_tin_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxProfileUpdate$ {
  /** @deprecated use `TaxProfileUpdate$inboundSchema` instead. */
  export const inboundSchema = TaxProfileUpdate$inboundSchema;
  /** @deprecated use `TaxProfileUpdate$outboundSchema` instead. */
  export const outboundSchema = TaxProfileUpdate$outboundSchema;
  /** @deprecated use `TaxProfileUpdate$Outbound` instead. */
  export type Outbound = TaxProfileUpdate$Outbound;
}
