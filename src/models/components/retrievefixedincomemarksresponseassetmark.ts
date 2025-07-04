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
  MarkPrice,
  MarkPrice$inboundSchema,
  MarkPrice$Outbound,
  MarkPrice$outboundSchema,
} from "./markprice.js";

/**
 * The amount of accrued interest estimated to be exchanged given the requested quantity. Measured in a USD value with 2-decimal places of precision.
 */
export type RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount = {
  /**
   * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
   */
  value?: string | undefined;
};

/**
 * The identifier type of the asset being sought. This will be the same value as what was sent on the request.
 */
export enum RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType {
  AssetId = "ASSET_ID",
  Cusip = "CUSIP",
  Isin = "ISIN",
}
/**
 * The identifier type of the asset being sought. This will be the same value as what was sent on the request.
 */
export type RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen =
  OpenEnum<typeof RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType>;

/**
 * When marks are found and returned, this will be unspecified. If the asset was found, but no pricing data is returned, then: this will denote the reason, the marks[] list will be empty, and the accrued_interest_amount will not be present.
 */
export enum MarkAbsenceReason {
  MarkAbsenceReasonUnspecified = "MARK_ABSENCE_REASON_UNSPECIFIED",
  NotPriced = "NOT_PRICED",
  NotTradable = "NOT_TRADABLE",
}
/**
 * When marks are found and returned, this will be unspecified. If the asset was found, but no pricing data is returned, then: this will denote the reason, the marks[] list will be empty, and the accrued_interest_amount will not be present.
 */
export type MarkAbsenceReasonOpen = OpenEnum<typeof MarkAbsenceReason>;

/**
 * Mark data for a specific asset
 */
export type RetrieveFixedIncomeMarksResponseAssetMark = {
  /**
   * The amount of accrued interest estimated to be exchanged given the requested quantity. Measured in a USD value with 2-decimal places of precision.
   */
  accruedInterestAmount?:
    | RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount
    | null
    | undefined;
  /**
   * Apex Asset ID for this asset.
   */
  assetId?: string | undefined;
  /**
   * Identifier of the asset (of the type specified in `identifier_type`).
   */
  identifier?: string | undefined;
  /**
   * The identifier type of the asset being sought. This will be the same value as what was sent on the request.
   */
  identifierType?:
    | RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen
    | undefined;
  /**
   * When marks are found and returned, this will be unspecified. If the asset was found, but no pricing data is returned, then: this will denote the reason, the marks[] list will be empty, and the accrued_interest_amount will not be present.
   */
  markAbsenceReason?: MarkAbsenceReasonOpen | undefined;
  /**
   * The time this mark data was generated
   */
  markGenerationTime?: Date | null | undefined;
  /**
   * The set of marks available for this asset. If this is non-empty, then it will always contain a PERCENTAGE_OF_PAR typed price in it. Yield prices may not always be available, but never be present without a percentage of par value also returned.
   */
  marks?: Array<MarkPrice> | undefined;
};

/** @internal */
export const RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema:
  z.ZodType<
    RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount,
    z.ZodTypeDef,
    unknown
  > = z.object({
    value: z.string().optional(),
  });

/** @internal */
export type RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound =
  {
    value?: string | undefined;
  };

/** @internal */
export const RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema:
  z.ZodType<
    RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound,
    z.ZodTypeDef,
    RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount
  > = z.object({
    value: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$ {
  /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema;
  /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema;
  /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound` instead. */
  export type Outbound =
    RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound;
}

/** @internal */
export const RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema:
  z.ZodType<
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema:
  z.ZodType<
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen,
    z.ZodTypeDef,
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen
  > = z.union([
    z.nativeEnum(RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$ {
  /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema;
  /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema;
}

/** @internal */
export const MarkAbsenceReason$inboundSchema: z.ZodType<
  MarkAbsenceReasonOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(MarkAbsenceReason),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const MarkAbsenceReason$outboundSchema: z.ZodType<
  MarkAbsenceReasonOpen,
  z.ZodTypeDef,
  MarkAbsenceReasonOpen
> = z.union([
  z.nativeEnum(MarkAbsenceReason),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarkAbsenceReason$ {
  /** @deprecated use `MarkAbsenceReason$inboundSchema` instead. */
  export const inboundSchema = MarkAbsenceReason$inboundSchema;
  /** @deprecated use `MarkAbsenceReason$outboundSchema` instead. */
  export const outboundSchema = MarkAbsenceReason$outboundSchema;
}

/** @internal */
export const RetrieveFixedIncomeMarksResponseAssetMark$inboundSchema: z.ZodType<
  RetrieveFixedIncomeMarksResponseAssetMark,
  z.ZodTypeDef,
  unknown
> = z.object({
  accrued_interest_amount: z.nullable(
    z.lazy(() =>
      RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema
    ),
  ).optional(),
  asset_id: z.string().optional(),
  identifier: z.string().optional(),
  identifier_type:
    RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema
      .optional(),
  mark_absence_reason: MarkAbsenceReason$inboundSchema.optional(),
  mark_generation_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  marks: z.array(MarkPrice$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "accrued_interest_amount": "accruedInterestAmount",
    "asset_id": "assetId",
    "identifier_type": "identifierType",
    "mark_absence_reason": "markAbsenceReason",
    "mark_generation_time": "markGenerationTime",
  });
});

/** @internal */
export type RetrieveFixedIncomeMarksResponseAssetMark$Outbound = {
  accrued_interest_amount?:
    | RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound
    | null
    | undefined;
  asset_id?: string | undefined;
  identifier?: string | undefined;
  identifier_type?: string | undefined;
  mark_absence_reason?: string | undefined;
  mark_generation_time?: string | null | undefined;
  marks?: Array<MarkPrice$Outbound> | undefined;
};

/** @internal */
export const RetrieveFixedIncomeMarksResponseAssetMark$outboundSchema:
  z.ZodType<
    RetrieveFixedIncomeMarksResponseAssetMark$Outbound,
    z.ZodTypeDef,
    RetrieveFixedIncomeMarksResponseAssetMark
  > = z.object({
    accruedInterestAmount: z.nullable(
      z.lazy(() =>
        RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema
      ),
    ).optional(),
    assetId: z.string().optional(),
    identifier: z.string().optional(),
    identifierType:
      RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema
        .optional(),
    markAbsenceReason: MarkAbsenceReason$outboundSchema.optional(),
    markGenerationTime: z.nullable(z.date().transform(v => v.toISOString()))
      .optional(),
    marks: z.array(MarkPrice$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      accruedInterestAmount: "accrued_interest_amount",
      assetId: "asset_id",
      identifierType: "identifier_type",
      markAbsenceReason: "mark_absence_reason",
      markGenerationTime: "mark_generation_time",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveFixedIncomeMarksResponseAssetMark$ {
  /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMark$inboundSchema` instead. */
  export const inboundSchema =
    RetrieveFixedIncomeMarksResponseAssetMark$inboundSchema;
  /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMark$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveFixedIncomeMarksResponseAssetMark$outboundSchema;
  /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMark$Outbound` instead. */
  export type Outbound = RetrieveFixedIncomeMarksResponseAssetMark$Outbound;
}
