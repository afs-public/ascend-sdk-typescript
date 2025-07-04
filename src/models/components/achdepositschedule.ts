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
 * The type of retirement contribution.
 */
export enum AchDepositScheduleType {
  TypeUnspecified = "TYPE_UNSPECIFIED",
  Regular = "REGULAR",
  Employee = "EMPLOYEE",
  Employer = "EMPLOYER",
  Recharacterization = "RECHARACTERIZATION",
  Rollover60Day = "ROLLOVER_60_DAY",
  RolloverDirect = "ROLLOVER_DIRECT",
  Transfer = "TRANSFER",
  TrusteeFee = "TRUSTEE_FEE",
  Conversion = "CONVERSION",
  Repayment = "REPAYMENT",
  ContributionNonReportable = "CONTRIBUTION_NON_REPORTABLE",
}
/**
 * The type of retirement contribution.
 */
export type AchDepositScheduleTypeOpen = OpenEnum<
  typeof AchDepositScheduleType
>;

/**
 * The ira contribution info for an IRA account. Deprecated, see retirement_contribution_details
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type AchDepositScheduleIraContribution = {
  /**
   * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
   */
  taxYear?: number | undefined;
  /**
   * The type of retirement contribution.
   */
  type?: AchDepositScheduleTypeOpen | undefined;
};

/**
 * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
 */
export enum AchDepositScheduleTemporalTaxYear {
  TemporalTaxYearUnspecified = "TEMPORAL_TAX_YEAR_UNSPECIFIED",
  CurrentCalendarYear = "CURRENT_CALENDAR_YEAR",
  MinimumTaxYear = "MINIMUM_TAX_YEAR",
}
/**
 * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
 */
export type AchDepositScheduleTemporalTaxYearOpen = OpenEnum<
  typeof AchDepositScheduleTemporalTaxYear
>;

/**
 * The type of retirement contribution.
 */
export enum AchDepositScheduleRetirementContributionType {
  TypeUnspecified = "TYPE_UNSPECIFIED",
  Regular = "REGULAR",
  Employee = "EMPLOYEE",
  Employer = "EMPLOYER",
  Recharacterization = "RECHARACTERIZATION",
  Rollover60Day = "ROLLOVER_60_DAY",
  RolloverDirect = "ROLLOVER_DIRECT",
  Transfer = "TRANSFER",
  TrusteeFee = "TRUSTEE_FEE",
  Conversion = "CONVERSION",
  Repayment = "REPAYMENT",
  ContributionNonReportable = "CONTRIBUTION_NON_REPORTABLE",
}
/**
 * The type of retirement contribution.
 */
export type AchDepositScheduleRetirementContributionTypeOpen = OpenEnum<
  typeof AchDepositScheduleRetirementContributionType
>;

/**
 * The contribution info for a retirement account
 */
export type AchDepositScheduleRetirementContribution = {
  /**
   * An explicit tax year value. The current year is always valid; and the prior year is valid only before the tax deadline. Must be in "YYYY" format.
   */
  taxYear?: number | undefined;
  /**
   * A temporal tax year value. This will always evaluate to a year based on the date the transfer was initiated.
   */
  temporalTaxYear?: AchDepositScheduleTemporalTaxYearOpen | undefined;
  /**
   * The type of retirement contribution.
   */
  type?: AchDepositScheduleRetirementContributionTypeOpen | undefined;
};

/**
 * A cash amount in the format of decimal value
 */
export type AchDepositScheduleAmount = {
  /**
   * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
   */
  value?: string | undefined;
};

/**
 * The schedule start date
 */
export type AchDepositScheduleStartDate = {
  /**
   * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
   */
  day?: number | undefined;
  /**
   * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
   */
  month?: number | undefined;
  /**
   * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
   */
  year?: number | undefined;
};

/**
 * The state of the represented schedule
 */
export enum AchDepositScheduleState {
  Active = "ACTIVE",
  Canceled = "CANCELED",
  Completed = "COMPLETED",
}
/**
 * The state of the represented schedule
 */
export type AchDepositScheduleStateOpen = OpenEnum<
  typeof AchDepositScheduleState
>;

/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export enum AchDepositScheduleTimeUnit {
  Day = "DAY",
  Week = "WEEK",
  Month = "MONTH",
}
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export type AchDepositScheduleTimeUnitOpen = OpenEnum<
  typeof AchDepositScheduleTimeUnit
>;

/**
 * Common schedule properties
 */
export type AchDepositScheduleScheduleProperties = {
  /**
   * The number of occurrences (empty or 0 indicates unlimited occurrences)
   */
  occurrences?: number | undefined;
  /**
   * The schedule start date
   */
  startDate?: AchDepositScheduleStartDate | null | undefined;
  /**
   * The state of the represented schedule
   */
  state?: AchDepositScheduleStateOpen | undefined;
  /**
   * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
   */
  timeUnit?: AchDepositScheduleTimeUnitOpen | undefined;
  /**
   * The multiplier used to determine the length of the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
   */
  unitMultiplier?: number | undefined;
};

/**
 * The transfer schedule details
 */
export type ScheduleDetails = {
  /**
   * A cash amount in the format of decimal value
   */
  amount?: AchDepositScheduleAmount | null | undefined;
  /**
   * External identifier supplied by the API caller. Each request must have a unique pairing of client_schedule_id and account
   */
  clientScheduleId?: string | undefined;
  /**
   * Common schedule properties
   */
  scheduleProperties?: AchDepositScheduleScheduleProperties | null | undefined;
};

/**
 * A deposit transfer schedule using the ACH mechanism
 */
export type AchDepositSchedule = {
  /**
   * The name of the bank relationship to be used in the ACH transaction
   */
  bankRelationship?: string | undefined;
  /**
   * The ira contribution info for an IRA account. Deprecated, see retirement_contribution_details
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  iraContribution?: AchDepositScheduleIraContribution | null | undefined;
  /**
   * The name of the ACH Deposit transfer schedule
   */
  name?: string | undefined;
  /**
   * The contribution info for a retirement account
   */
  retirementContribution?:
    | AchDepositScheduleRetirementContribution
    | null
    | undefined;
  /**
   * The transfer schedule details
   */
  scheduleDetails?: ScheduleDetails | null | undefined;
};

/** @internal */
export const AchDepositScheduleType$inboundSchema: z.ZodType<
  AchDepositScheduleTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AchDepositScheduleType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AchDepositScheduleType$outboundSchema: z.ZodType<
  AchDepositScheduleTypeOpen,
  z.ZodTypeDef,
  AchDepositScheduleTypeOpen
> = z.union([
  z.nativeEnum(AchDepositScheduleType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleType$ {
  /** @deprecated use `AchDepositScheduleType$inboundSchema` instead. */
  export const inboundSchema = AchDepositScheduleType$inboundSchema;
  /** @deprecated use `AchDepositScheduleType$outboundSchema` instead. */
  export const outboundSchema = AchDepositScheduleType$outboundSchema;
}

/** @internal */
export const AchDepositScheduleIraContribution$inboundSchema: z.ZodType<
  AchDepositScheduleIraContribution,
  z.ZodTypeDef,
  unknown
> = z.object({
  tax_year: z.number().int().optional(),
  type: AchDepositScheduleType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "tax_year": "taxYear",
  });
});

/** @internal */
export type AchDepositScheduleIraContribution$Outbound = {
  tax_year?: number | undefined;
  type?: string | undefined;
};

/** @internal */
export const AchDepositScheduleIraContribution$outboundSchema: z.ZodType<
  AchDepositScheduleIraContribution$Outbound,
  z.ZodTypeDef,
  AchDepositScheduleIraContribution
> = z.object({
  taxYear: z.number().int().optional(),
  type: AchDepositScheduleType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    taxYear: "tax_year",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleIraContribution$ {
  /** @deprecated use `AchDepositScheduleIraContribution$inboundSchema` instead. */
  export const inboundSchema = AchDepositScheduleIraContribution$inboundSchema;
  /** @deprecated use `AchDepositScheduleIraContribution$outboundSchema` instead. */
  export const outboundSchema =
    AchDepositScheduleIraContribution$outboundSchema;
  /** @deprecated use `AchDepositScheduleIraContribution$Outbound` instead. */
  export type Outbound = AchDepositScheduleIraContribution$Outbound;
}

/** @internal */
export const AchDepositScheduleTemporalTaxYear$inboundSchema: z.ZodType<
  AchDepositScheduleTemporalTaxYearOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AchDepositScheduleTemporalTaxYear),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AchDepositScheduleTemporalTaxYear$outboundSchema: z.ZodType<
  AchDepositScheduleTemporalTaxYearOpen,
  z.ZodTypeDef,
  AchDepositScheduleTemporalTaxYearOpen
> = z.union([
  z.nativeEnum(AchDepositScheduleTemporalTaxYear),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleTemporalTaxYear$ {
  /** @deprecated use `AchDepositScheduleTemporalTaxYear$inboundSchema` instead. */
  export const inboundSchema = AchDepositScheduleTemporalTaxYear$inboundSchema;
  /** @deprecated use `AchDepositScheduleTemporalTaxYear$outboundSchema` instead. */
  export const outboundSchema =
    AchDepositScheduleTemporalTaxYear$outboundSchema;
}

/** @internal */
export const AchDepositScheduleRetirementContributionType$inboundSchema:
  z.ZodType<
    AchDepositScheduleRetirementContributionTypeOpen,
    z.ZodTypeDef,
    unknown
  > = z
    .union([
      z.nativeEnum(AchDepositScheduleRetirementContributionType),
      z.string().transform(catchUnrecognizedEnum),
    ]);

/** @internal */
export const AchDepositScheduleRetirementContributionType$outboundSchema:
  z.ZodType<
    AchDepositScheduleRetirementContributionTypeOpen,
    z.ZodTypeDef,
    AchDepositScheduleRetirementContributionTypeOpen
  > = z.union([
    z.nativeEnum(AchDepositScheduleRetirementContributionType),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleRetirementContributionType$ {
  /** @deprecated use `AchDepositScheduleRetirementContributionType$inboundSchema` instead. */
  export const inboundSchema =
    AchDepositScheduleRetirementContributionType$inboundSchema;
  /** @deprecated use `AchDepositScheduleRetirementContributionType$outboundSchema` instead. */
  export const outboundSchema =
    AchDepositScheduleRetirementContributionType$outboundSchema;
}

/** @internal */
export const AchDepositScheduleRetirementContribution$inboundSchema: z.ZodType<
  AchDepositScheduleRetirementContribution,
  z.ZodTypeDef,
  unknown
> = z.object({
  tax_year: z.number().int().optional(),
  temporal_tax_year: AchDepositScheduleTemporalTaxYear$inboundSchema.optional(),
  type: AchDepositScheduleRetirementContributionType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "tax_year": "taxYear",
    "temporal_tax_year": "temporalTaxYear",
  });
});

/** @internal */
export type AchDepositScheduleRetirementContribution$Outbound = {
  tax_year?: number | undefined;
  temporal_tax_year?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const AchDepositScheduleRetirementContribution$outboundSchema: z.ZodType<
  AchDepositScheduleRetirementContribution$Outbound,
  z.ZodTypeDef,
  AchDepositScheduleRetirementContribution
> = z.object({
  taxYear: z.number().int().optional(),
  temporalTaxYear: AchDepositScheduleTemporalTaxYear$outboundSchema.optional(),
  type: AchDepositScheduleRetirementContributionType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    taxYear: "tax_year",
    temporalTaxYear: "temporal_tax_year",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleRetirementContribution$ {
  /** @deprecated use `AchDepositScheduleRetirementContribution$inboundSchema` instead. */
  export const inboundSchema =
    AchDepositScheduleRetirementContribution$inboundSchema;
  /** @deprecated use `AchDepositScheduleRetirementContribution$outboundSchema` instead. */
  export const outboundSchema =
    AchDepositScheduleRetirementContribution$outboundSchema;
  /** @deprecated use `AchDepositScheduleRetirementContribution$Outbound` instead. */
  export type Outbound = AchDepositScheduleRetirementContribution$Outbound;
}

/** @internal */
export const AchDepositScheduleAmount$inboundSchema: z.ZodType<
  AchDepositScheduleAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type AchDepositScheduleAmount$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const AchDepositScheduleAmount$outboundSchema: z.ZodType<
  AchDepositScheduleAmount$Outbound,
  z.ZodTypeDef,
  AchDepositScheduleAmount
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleAmount$ {
  /** @deprecated use `AchDepositScheduleAmount$inboundSchema` instead. */
  export const inboundSchema = AchDepositScheduleAmount$inboundSchema;
  /** @deprecated use `AchDepositScheduleAmount$outboundSchema` instead. */
  export const outboundSchema = AchDepositScheduleAmount$outboundSchema;
  /** @deprecated use `AchDepositScheduleAmount$Outbound` instead. */
  export type Outbound = AchDepositScheduleAmount$Outbound;
}

/** @internal */
export const AchDepositScheduleStartDate$inboundSchema: z.ZodType<
  AchDepositScheduleStartDate,
  z.ZodTypeDef,
  unknown
> = z.object({
  day: z.number().int().optional(),
  month: z.number().int().optional(),
  year: z.number().int().optional(),
});

/** @internal */
export type AchDepositScheduleStartDate$Outbound = {
  day?: number | undefined;
  month?: number | undefined;
  year?: number | undefined;
};

/** @internal */
export const AchDepositScheduleStartDate$outboundSchema: z.ZodType<
  AchDepositScheduleStartDate$Outbound,
  z.ZodTypeDef,
  AchDepositScheduleStartDate
> = z.object({
  day: z.number().int().optional(),
  month: z.number().int().optional(),
  year: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleStartDate$ {
  /** @deprecated use `AchDepositScheduleStartDate$inboundSchema` instead. */
  export const inboundSchema = AchDepositScheduleStartDate$inboundSchema;
  /** @deprecated use `AchDepositScheduleStartDate$outboundSchema` instead. */
  export const outboundSchema = AchDepositScheduleStartDate$outboundSchema;
  /** @deprecated use `AchDepositScheduleStartDate$Outbound` instead. */
  export type Outbound = AchDepositScheduleStartDate$Outbound;
}

/** @internal */
export const AchDepositScheduleState$inboundSchema: z.ZodType<
  AchDepositScheduleStateOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AchDepositScheduleState),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AchDepositScheduleState$outboundSchema: z.ZodType<
  AchDepositScheduleStateOpen,
  z.ZodTypeDef,
  AchDepositScheduleStateOpen
> = z.union([
  z.nativeEnum(AchDepositScheduleState),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleState$ {
  /** @deprecated use `AchDepositScheduleState$inboundSchema` instead. */
  export const inboundSchema = AchDepositScheduleState$inboundSchema;
  /** @deprecated use `AchDepositScheduleState$outboundSchema` instead. */
  export const outboundSchema = AchDepositScheduleState$outboundSchema;
}

/** @internal */
export const AchDepositScheduleTimeUnit$inboundSchema: z.ZodType<
  AchDepositScheduleTimeUnitOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(AchDepositScheduleTimeUnit),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const AchDepositScheduleTimeUnit$outboundSchema: z.ZodType<
  AchDepositScheduleTimeUnitOpen,
  z.ZodTypeDef,
  AchDepositScheduleTimeUnitOpen
> = z.union([
  z.nativeEnum(AchDepositScheduleTimeUnit),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleTimeUnit$ {
  /** @deprecated use `AchDepositScheduleTimeUnit$inboundSchema` instead. */
  export const inboundSchema = AchDepositScheduleTimeUnit$inboundSchema;
  /** @deprecated use `AchDepositScheduleTimeUnit$outboundSchema` instead. */
  export const outboundSchema = AchDepositScheduleTimeUnit$outboundSchema;
}

/** @internal */
export const AchDepositScheduleScheduleProperties$inboundSchema: z.ZodType<
  AchDepositScheduleScheduleProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  occurrences: z.number().int().optional(),
  start_date: z.nullable(
    z.lazy(() => AchDepositScheduleStartDate$inboundSchema),
  ).optional(),
  state: AchDepositScheduleState$inboundSchema.optional(),
  time_unit: AchDepositScheduleTimeUnit$inboundSchema.optional(),
  unit_multiplier: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "start_date": "startDate",
    "time_unit": "timeUnit",
    "unit_multiplier": "unitMultiplier",
  });
});

/** @internal */
export type AchDepositScheduleScheduleProperties$Outbound = {
  occurrences?: number | undefined;
  start_date?: AchDepositScheduleStartDate$Outbound | null | undefined;
  state?: string | undefined;
  time_unit?: string | undefined;
  unit_multiplier?: number | undefined;
};

/** @internal */
export const AchDepositScheduleScheduleProperties$outboundSchema: z.ZodType<
  AchDepositScheduleScheduleProperties$Outbound,
  z.ZodTypeDef,
  AchDepositScheduleScheduleProperties
> = z.object({
  occurrences: z.number().int().optional(),
  startDate: z.nullable(
    z.lazy(() => AchDepositScheduleStartDate$outboundSchema),
  ).optional(),
  state: AchDepositScheduleState$outboundSchema.optional(),
  timeUnit: AchDepositScheduleTimeUnit$outboundSchema.optional(),
  unitMultiplier: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    startDate: "start_date",
    timeUnit: "time_unit",
    unitMultiplier: "unit_multiplier",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositScheduleScheduleProperties$ {
  /** @deprecated use `AchDepositScheduleScheduleProperties$inboundSchema` instead. */
  export const inboundSchema =
    AchDepositScheduleScheduleProperties$inboundSchema;
  /** @deprecated use `AchDepositScheduleScheduleProperties$outboundSchema` instead. */
  export const outboundSchema =
    AchDepositScheduleScheduleProperties$outboundSchema;
  /** @deprecated use `AchDepositScheduleScheduleProperties$Outbound` instead. */
  export type Outbound = AchDepositScheduleScheduleProperties$Outbound;
}

/** @internal */
export const ScheduleDetails$inboundSchema: z.ZodType<
  ScheduleDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.nullable(z.lazy(() => AchDepositScheduleAmount$inboundSchema))
    .optional(),
  client_schedule_id: z.string().optional(),
  schedule_properties: z.nullable(
    z.lazy(() => AchDepositScheduleScheduleProperties$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "client_schedule_id": "clientScheduleId",
    "schedule_properties": "scheduleProperties",
  });
});

/** @internal */
export type ScheduleDetails$Outbound = {
  amount?: AchDepositScheduleAmount$Outbound | null | undefined;
  client_schedule_id?: string | undefined;
  schedule_properties?:
    | AchDepositScheduleScheduleProperties$Outbound
    | null
    | undefined;
};

/** @internal */
export const ScheduleDetails$outboundSchema: z.ZodType<
  ScheduleDetails$Outbound,
  z.ZodTypeDef,
  ScheduleDetails
> = z.object({
  amount: z.nullable(z.lazy(() => AchDepositScheduleAmount$outboundSchema))
    .optional(),
  clientScheduleId: z.string().optional(),
  scheduleProperties: z.nullable(
    z.lazy(() => AchDepositScheduleScheduleProperties$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    clientScheduleId: "client_schedule_id",
    scheduleProperties: "schedule_properties",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ScheduleDetails$ {
  /** @deprecated use `ScheduleDetails$inboundSchema` instead. */
  export const inboundSchema = ScheduleDetails$inboundSchema;
  /** @deprecated use `ScheduleDetails$outboundSchema` instead. */
  export const outboundSchema = ScheduleDetails$outboundSchema;
  /** @deprecated use `ScheduleDetails$Outbound` instead. */
  export type Outbound = ScheduleDetails$Outbound;
}

/** @internal */
export const AchDepositSchedule$inboundSchema: z.ZodType<
  AchDepositSchedule,
  z.ZodTypeDef,
  unknown
> = z.object({
  bank_relationship: z.string().optional(),
  ira_contribution: z.nullable(
    z.lazy(() => AchDepositScheduleIraContribution$inboundSchema),
  ).optional(),
  name: z.string().optional(),
  retirement_contribution: z.nullable(
    z.lazy(() => AchDepositScheduleRetirementContribution$inboundSchema),
  ).optional(),
  schedule_details: z.nullable(z.lazy(() => ScheduleDetails$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "bank_relationship": "bankRelationship",
    "ira_contribution": "iraContribution",
    "retirement_contribution": "retirementContribution",
    "schedule_details": "scheduleDetails",
  });
});

/** @internal */
export type AchDepositSchedule$Outbound = {
  bank_relationship?: string | undefined;
  ira_contribution?:
    | AchDepositScheduleIraContribution$Outbound
    | null
    | undefined;
  name?: string | undefined;
  retirement_contribution?:
    | AchDepositScheduleRetirementContribution$Outbound
    | null
    | undefined;
  schedule_details?: ScheduleDetails$Outbound | null | undefined;
};

/** @internal */
export const AchDepositSchedule$outboundSchema: z.ZodType<
  AchDepositSchedule$Outbound,
  z.ZodTypeDef,
  AchDepositSchedule
> = z.object({
  bankRelationship: z.string().optional(),
  iraContribution: z.nullable(
    z.lazy(() => AchDepositScheduleIraContribution$outboundSchema),
  ).optional(),
  name: z.string().optional(),
  retirementContribution: z.nullable(
    z.lazy(() => AchDepositScheduleRetirementContribution$outboundSchema),
  ).optional(),
  scheduleDetails: z.nullable(z.lazy(() => ScheduleDetails$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    bankRelationship: "bank_relationship",
    iraContribution: "ira_contribution",
    retirementContribution: "retirement_contribution",
    scheduleDetails: "schedule_details",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AchDepositSchedule$ {
  /** @deprecated use `AchDepositSchedule$inboundSchema` instead. */
  export const inboundSchema = AchDepositSchedule$inboundSchema;
  /** @deprecated use `AchDepositSchedule$outboundSchema` instead. */
  export const outboundSchema = AchDepositSchedule$outboundSchema;
  /** @deprecated use `AchDepositSchedule$Outbound` instead. */
  export type Outbound = AchDepositSchedule$Outbound;
}
