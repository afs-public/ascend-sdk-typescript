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
 * The amount to transfer in USD
 */
export type CashJournalAmount = {
  /**
   * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
   */
  value?: string | undefined;
};

/**
 * Whether a cash journal is first party or third party Determined asynchronously when the transfer is processing, and will be set by the time the transfer is posted
 */
export enum PartyType {
  PartyTypeUnspecified = "PARTY_TYPE_UNSPECIFIED",
  FirstParty = "FIRST_PARTY",
  ThirdParty = "THIRD_PARTY",
}
/**
 * Whether a cash journal is first party or third party Determined asynchronously when the transfer is processing, and will be set by the time the transfer is posted
 */
export type PartyTypeOpen = OpenEnum<typeof PartyType>;

/**
 * The type of retirement contribution.
 */
export enum CashJournalType {
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
export type CashJournalTypeOpen = OpenEnum<typeof CashJournalType>;

/**
 * The retirement contribution details Must be provided when the destination account is a retirement account
 */
export type CashJournalRetirementContribution = {
  /**
   * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
   */
  taxYear?: number | undefined;
  /**
   * The type of retirement contribution.
   */
  type?: CashJournalTypeOpen | undefined;
};

/**
 * Fixed USD amount to withhold for taxes.
 */
export type CashJournalRetirementDistributionAmount = {
  /**
   * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
   */
  value?: string | undefined;
};

/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type CashJournalPercentage = {
  /**
   * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
   */
  value?: string | undefined;
};

/**
 * The federal tax withholding.
 */
export type CashJournalFederalTaxWithholding = {
  /**
   * Fixed USD amount to withhold for taxes.
   */
  amount?: CashJournalRetirementDistributionAmount | null | undefined;
  /**
   * Percentage of total disbursement amount to withhold for taxes.
   */
  percentage?: CashJournalPercentage | null | undefined;
};

/**
 * Fixed USD amount to withhold for taxes.
 */
export type CashJournalRetirementDistributionStateTaxWithholdingAmount = {
  /**
   * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
   */
  value?: string | undefined;
};

/**
 * Percentage of total disbursement amount to withhold for taxes.
 */
export type CashJournalRetirementDistributionPercentage = {
  /**
   * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
   */
  value?: string | undefined;
};

/**
 * The state tax withholding.
 */
export type CashJournalStateTaxWithholding = {
  /**
   * Fixed USD amount to withhold for taxes.
   */
  amount?:
    | CashJournalRetirementDistributionStateTaxWithholdingAmount
    | null
    | undefined;
  /**
   * Percentage of total disbursement amount to withhold for taxes.
   */
  percentage?: CashJournalRetirementDistributionPercentage | null | undefined;
};

/**
 * The type of retirement distribution.
 */
export enum CashJournalRetirementDistributionType {
  TypeUnspecified = "TYPE_UNSPECIFIED",
  Normal = "NORMAL",
  Disability = "DISABILITY",
  Sosepp = "SOSEPP",
  Premature = "PREMATURE",
  Death = "DEATH",
  ExcessContributionRemovalBeforeTaxDeadline =
    "EXCESS_CONTRIBUTION_REMOVAL_BEFORE_TAX_DEADLINE",
  ExcessContributionRemovalAfterTaxDeadline =
    "EXCESS_CONTRIBUTION_REMOVAL_AFTER_TAX_DEADLINE",
  RolloverToQualifiedPlan = "ROLLOVER_TO_QUALIFIED_PLAN",
  RolloverToIra = "ROLLOVER_TO_IRA",
  DistributionTransfer = "DISTRIBUTION_TRANSFER",
  RecharacterizationPriorYear = "RECHARACTERIZATION_PRIOR_YEAR",
  RecharacterizationCurrentYear = "RECHARACTERIZATION_CURRENT_YEAR",
  DistributionConversion = "DISTRIBUTION_CONVERSION",
  ManagementFee = "MANAGEMENT_FEE",
  PlanLoan401K = "PLAN_LOAN_401K",
  PrematureSimpleIraLessThan2Years = "PREMATURE_SIMPLE_IRA_LESS_THAN_2_YEARS",
  NormalRothIraGreaterThan5Years = "NORMAL_ROTH_IRA_GREATER_THAN_5_YEARS",
  NetIncomeAttributable = "NET_INCOME_ATTRIBUTABLE",
  Revocation = "REVOCATION",
  NonReportable = "NON_REPORTABLE",
}
/**
 * The type of retirement distribution.
 */
export type CashJournalRetirementDistributionTypeOpen = OpenEnum<
  typeof CashJournalRetirementDistributionType
>;

/**
 * The retirement distribution details Must be provided when the source account is a retirement account
 */
export type CashJournalRetirementDistribution = {
  /**
   * The federal tax withholding.
   */
  federalTaxWithholding?: CashJournalFederalTaxWithholding | null | undefined;
  /**
   * The institution receiving retirement funds when performing a transfer to an identical retirement account type at a different financial institution. This is required for check and wire withdrawals because we can't always identify the institution using the transfer instructions. For cash journals this value will default to "Apex Clearing", regardless of what is passed in here
   */
  receivingInstitution?: string | undefined;
  /**
   * The state tax withholding.
   */
  stateTaxWithholding?: CashJournalStateTaxWithholding | null | undefined;
  /**
   * Whether or not this distribution has a state withholding waiver.
   */
  stateWithholdingWaiver?: boolean | undefined;
  /**
   * Tax year for which the distribution is applied.
   */
  taxYear?: number | undefined;
  /**
   * The type of retirement distribution.
   */
  type?: CashJournalRetirementDistributionTypeOpen | undefined;
};

/**
 * The high level state of a transfer, one of:
 *
 * @remarks
 * - `PROCESSING` - The transfer is being processed and will be posted if successful.
 * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
 * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
 * - `COMPLETED` - The transfer has been batched and completed.
 * - `REJECTED` - The transfer was rejected.
 * - `CANCELED` - The transfer was canceled.
 * - `RETURNED` - The transfer was returned.
 * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
 */
export enum CashJournalStateState {
  StateUnspecified = "STATE_UNSPECIFIED",
  Processing = "PROCESSING",
  PendingReview = "PENDING_REVIEW",
  Posted = "POSTED",
  Completed = "COMPLETED",
  Rejected = "REJECTED",
  Canceled = "CANCELED",
  Returned = "RETURNED",
  Postponed = "POSTPONED",
}
/**
 * The high level state of a transfer, one of:
 *
 * @remarks
 * - `PROCESSING` - The transfer is being processed and will be posted if successful.
 * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
 * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
 * - `COMPLETED` - The transfer has been batched and completed.
 * - `REJECTED` - The transfer was rejected.
 * - `CANCELED` - The transfer was canceled.
 * - `RETURNED` - The transfer was returned.
 * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
 */
export type CashJournalStateStateOpen = OpenEnum<typeof CashJournalStateState>;

/**
 * The current state of the cash journal
 */
export type CashJournalState = {
  /**
   * The user or service that triggered the state update.
   */
  actor?: string | undefined;
  /**
   * Additional description of the transfer state.
   */
  message?: string | undefined;
  /**
   * Additional metadata relating to the transfer state. Included data depends on the state, e.g.:
   *
   * @remarks
   *  - Rejection reasons are included when the `state` is `REJECTED`
   *  - Reason and comment are included when `state` is `CANCELED`
   */
  metadata?: { [k: string]: any } | null | undefined;
  /**
   * The high level state of a transfer, one of:
   *
   * @remarks
   * - `PROCESSING` - The transfer is being processed and will be posted if successful.
   * - `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
   * - `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
   * - `COMPLETED` - The transfer has been batched and completed.
   * - `REJECTED` - The transfer was rejected.
   * - `CANCELED` - The transfer was canceled.
   * - `RETURNED` - The transfer was returned.
   * - `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.
   */
  state?: CashJournalStateStateOpen | undefined;
  /**
   * The time of the state update.
   */
  updateTime?: Date | null | undefined;
};

/**
 * A cash journal transfer. Funds are moved from a source account to a destination account
 */
export type CashJournal = {
  /**
   * The amount to transfer in USD
   */
  amount?: CashJournalAmount | null | undefined;
  /**
   * The external identifier supplied by the API caller Each request must have a unique pairing of `client_transfer_id` and `source_account`
   */
  clientTransferId?: string | undefined;
  /**
   * The account that funds will be moved to
   */
  destinationAccount?: string | undefined;
  /**
   * The resource name of the cash journal
   */
  name?: string | undefined;
  /**
   * Whether a cash journal is first party or third party Determined asynchronously when the transfer is processing, and will be set by the time the transfer is posted
   */
  partyType?: PartyTypeOpen | undefined;
  /**
   * The retirement contribution details Must be provided when the destination account is a retirement account
   */
  retirementContribution?: CashJournalRetirementContribution | null | undefined;
  /**
   * The retirement distribution details Must be provided when the source account is a retirement account
   */
  retirementDistribution?: CashJournalRetirementDistribution | null | undefined;
  /**
   * The account that funds will be moved from
   */
  sourceAccount?: string | undefined;
  /**
   * The current state of the cash journal
   */
  state?: CashJournalState | null | undefined;
};

/** @internal */
export const CashJournalAmount$inboundSchema: z.ZodType<
  CashJournalAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type CashJournalAmount$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const CashJournalAmount$outboundSchema: z.ZodType<
  CashJournalAmount$Outbound,
  z.ZodTypeDef,
  CashJournalAmount
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalAmount$ {
  /** @deprecated use `CashJournalAmount$inboundSchema` instead. */
  export const inboundSchema = CashJournalAmount$inboundSchema;
  /** @deprecated use `CashJournalAmount$outboundSchema` instead. */
  export const outboundSchema = CashJournalAmount$outboundSchema;
  /** @deprecated use `CashJournalAmount$Outbound` instead. */
  export type Outbound = CashJournalAmount$Outbound;
}

/** @internal */
export const PartyType$inboundSchema: z.ZodType<
  PartyTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(PartyType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const PartyType$outboundSchema: z.ZodType<
  PartyTypeOpen,
  z.ZodTypeDef,
  PartyTypeOpen
> = z.union([
  z.nativeEnum(PartyType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartyType$ {
  /** @deprecated use `PartyType$inboundSchema` instead. */
  export const inboundSchema = PartyType$inboundSchema;
  /** @deprecated use `PartyType$outboundSchema` instead. */
  export const outboundSchema = PartyType$outboundSchema;
}

/** @internal */
export const CashJournalType$inboundSchema: z.ZodType<
  CashJournalTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CashJournalType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CashJournalType$outboundSchema: z.ZodType<
  CashJournalTypeOpen,
  z.ZodTypeDef,
  CashJournalTypeOpen
> = z.union([
  z.nativeEnum(CashJournalType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalType$ {
  /** @deprecated use `CashJournalType$inboundSchema` instead. */
  export const inboundSchema = CashJournalType$inboundSchema;
  /** @deprecated use `CashJournalType$outboundSchema` instead. */
  export const outboundSchema = CashJournalType$outboundSchema;
}

/** @internal */
export const CashJournalRetirementContribution$inboundSchema: z.ZodType<
  CashJournalRetirementContribution,
  z.ZodTypeDef,
  unknown
> = z.object({
  tax_year: z.number().int().optional(),
  type: CashJournalType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "tax_year": "taxYear",
  });
});

/** @internal */
export type CashJournalRetirementContribution$Outbound = {
  tax_year?: number | undefined;
  type?: string | undefined;
};

/** @internal */
export const CashJournalRetirementContribution$outboundSchema: z.ZodType<
  CashJournalRetirementContribution$Outbound,
  z.ZodTypeDef,
  CashJournalRetirementContribution
> = z.object({
  taxYear: z.number().int().optional(),
  type: CashJournalType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    taxYear: "tax_year",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalRetirementContribution$ {
  /** @deprecated use `CashJournalRetirementContribution$inboundSchema` instead. */
  export const inboundSchema = CashJournalRetirementContribution$inboundSchema;
  /** @deprecated use `CashJournalRetirementContribution$outboundSchema` instead. */
  export const outboundSchema =
    CashJournalRetirementContribution$outboundSchema;
  /** @deprecated use `CashJournalRetirementContribution$Outbound` instead. */
  export type Outbound = CashJournalRetirementContribution$Outbound;
}

/** @internal */
export const CashJournalRetirementDistributionAmount$inboundSchema: z.ZodType<
  CashJournalRetirementDistributionAmount,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type CashJournalRetirementDistributionAmount$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const CashJournalRetirementDistributionAmount$outboundSchema: z.ZodType<
  CashJournalRetirementDistributionAmount$Outbound,
  z.ZodTypeDef,
  CashJournalRetirementDistributionAmount
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalRetirementDistributionAmount$ {
  /** @deprecated use `CashJournalRetirementDistributionAmount$inboundSchema` instead. */
  export const inboundSchema =
    CashJournalRetirementDistributionAmount$inboundSchema;
  /** @deprecated use `CashJournalRetirementDistributionAmount$outboundSchema` instead. */
  export const outboundSchema =
    CashJournalRetirementDistributionAmount$outboundSchema;
  /** @deprecated use `CashJournalRetirementDistributionAmount$Outbound` instead. */
  export type Outbound = CashJournalRetirementDistributionAmount$Outbound;
}

/** @internal */
export const CashJournalPercentage$inboundSchema: z.ZodType<
  CashJournalPercentage,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.string().optional(),
});

/** @internal */
export type CashJournalPercentage$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const CashJournalPercentage$outboundSchema: z.ZodType<
  CashJournalPercentage$Outbound,
  z.ZodTypeDef,
  CashJournalPercentage
> = z.object({
  value: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalPercentage$ {
  /** @deprecated use `CashJournalPercentage$inboundSchema` instead. */
  export const inboundSchema = CashJournalPercentage$inboundSchema;
  /** @deprecated use `CashJournalPercentage$outboundSchema` instead. */
  export const outboundSchema = CashJournalPercentage$outboundSchema;
  /** @deprecated use `CashJournalPercentage$Outbound` instead. */
  export type Outbound = CashJournalPercentage$Outbound;
}

/** @internal */
export const CashJournalFederalTaxWithholding$inboundSchema: z.ZodType<
  CashJournalFederalTaxWithholding,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.nullable(
    z.lazy(() => CashJournalRetirementDistributionAmount$inboundSchema),
  ).optional(),
  percentage: z.nullable(z.lazy(() => CashJournalPercentage$inboundSchema))
    .optional(),
});

/** @internal */
export type CashJournalFederalTaxWithholding$Outbound = {
  amount?: CashJournalRetirementDistributionAmount$Outbound | null | undefined;
  percentage?: CashJournalPercentage$Outbound | null | undefined;
};

/** @internal */
export const CashJournalFederalTaxWithholding$outboundSchema: z.ZodType<
  CashJournalFederalTaxWithholding$Outbound,
  z.ZodTypeDef,
  CashJournalFederalTaxWithholding
> = z.object({
  amount: z.nullable(
    z.lazy(() => CashJournalRetirementDistributionAmount$outboundSchema),
  ).optional(),
  percentage: z.nullable(z.lazy(() => CashJournalPercentage$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalFederalTaxWithholding$ {
  /** @deprecated use `CashJournalFederalTaxWithholding$inboundSchema` instead. */
  export const inboundSchema = CashJournalFederalTaxWithholding$inboundSchema;
  /** @deprecated use `CashJournalFederalTaxWithholding$outboundSchema` instead. */
  export const outboundSchema = CashJournalFederalTaxWithholding$outboundSchema;
  /** @deprecated use `CashJournalFederalTaxWithholding$Outbound` instead. */
  export type Outbound = CashJournalFederalTaxWithholding$Outbound;
}

/** @internal */
export const CashJournalRetirementDistributionStateTaxWithholdingAmount$inboundSchema:
  z.ZodType<
    CashJournalRetirementDistributionStateTaxWithholdingAmount,
    z.ZodTypeDef,
    unknown
  > = z.object({
    value: z.string().optional(),
  });

/** @internal */
export type CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound =
  {
    value?: string | undefined;
  };

/** @internal */
export const CashJournalRetirementDistributionStateTaxWithholdingAmount$outboundSchema:
  z.ZodType<
    CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound,
    z.ZodTypeDef,
    CashJournalRetirementDistributionStateTaxWithholdingAmount
  > = z.object({
    value: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalRetirementDistributionStateTaxWithholdingAmount$ {
  /** @deprecated use `CashJournalRetirementDistributionStateTaxWithholdingAmount$inboundSchema` instead. */
  export const inboundSchema =
    CashJournalRetirementDistributionStateTaxWithholdingAmount$inboundSchema;
  /** @deprecated use `CashJournalRetirementDistributionStateTaxWithholdingAmount$outboundSchema` instead. */
  export const outboundSchema =
    CashJournalRetirementDistributionStateTaxWithholdingAmount$outboundSchema;
  /** @deprecated use `CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound` instead. */
  export type Outbound =
    CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound;
}

/** @internal */
export const CashJournalRetirementDistributionPercentage$inboundSchema:
  z.ZodType<
    CashJournalRetirementDistributionPercentage,
    z.ZodTypeDef,
    unknown
  > = z.object({
    value: z.string().optional(),
  });

/** @internal */
export type CashJournalRetirementDistributionPercentage$Outbound = {
  value?: string | undefined;
};

/** @internal */
export const CashJournalRetirementDistributionPercentage$outboundSchema:
  z.ZodType<
    CashJournalRetirementDistributionPercentage$Outbound,
    z.ZodTypeDef,
    CashJournalRetirementDistributionPercentage
  > = z.object({
    value: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalRetirementDistributionPercentage$ {
  /** @deprecated use `CashJournalRetirementDistributionPercentage$inboundSchema` instead. */
  export const inboundSchema =
    CashJournalRetirementDistributionPercentage$inboundSchema;
  /** @deprecated use `CashJournalRetirementDistributionPercentage$outboundSchema` instead. */
  export const outboundSchema =
    CashJournalRetirementDistributionPercentage$outboundSchema;
  /** @deprecated use `CashJournalRetirementDistributionPercentage$Outbound` instead. */
  export type Outbound = CashJournalRetirementDistributionPercentage$Outbound;
}

/** @internal */
export const CashJournalStateTaxWithholding$inboundSchema: z.ZodType<
  CashJournalStateTaxWithholding,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.nullable(
    z.lazy(() =>
      CashJournalRetirementDistributionStateTaxWithholdingAmount$inboundSchema
    ),
  ).optional(),
  percentage: z.nullable(
    z.lazy(() => CashJournalRetirementDistributionPercentage$inboundSchema),
  ).optional(),
});

/** @internal */
export type CashJournalStateTaxWithholding$Outbound = {
  amount?:
    | CashJournalRetirementDistributionStateTaxWithholdingAmount$Outbound
    | null
    | undefined;
  percentage?:
    | CashJournalRetirementDistributionPercentage$Outbound
    | null
    | undefined;
};

/** @internal */
export const CashJournalStateTaxWithholding$outboundSchema: z.ZodType<
  CashJournalStateTaxWithholding$Outbound,
  z.ZodTypeDef,
  CashJournalStateTaxWithholding
> = z.object({
  amount: z.nullable(
    z.lazy(() =>
      CashJournalRetirementDistributionStateTaxWithholdingAmount$outboundSchema
    ),
  ).optional(),
  percentage: z.nullable(
    z.lazy(() => CashJournalRetirementDistributionPercentage$outboundSchema),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalStateTaxWithholding$ {
  /** @deprecated use `CashJournalStateTaxWithholding$inboundSchema` instead. */
  export const inboundSchema = CashJournalStateTaxWithholding$inboundSchema;
  /** @deprecated use `CashJournalStateTaxWithholding$outboundSchema` instead. */
  export const outboundSchema = CashJournalStateTaxWithholding$outboundSchema;
  /** @deprecated use `CashJournalStateTaxWithholding$Outbound` instead. */
  export type Outbound = CashJournalStateTaxWithholding$Outbound;
}

/** @internal */
export const CashJournalRetirementDistributionType$inboundSchema: z.ZodType<
  CashJournalRetirementDistributionTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CashJournalRetirementDistributionType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CashJournalRetirementDistributionType$outboundSchema: z.ZodType<
  CashJournalRetirementDistributionTypeOpen,
  z.ZodTypeDef,
  CashJournalRetirementDistributionTypeOpen
> = z.union([
  z.nativeEnum(CashJournalRetirementDistributionType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalRetirementDistributionType$ {
  /** @deprecated use `CashJournalRetirementDistributionType$inboundSchema` instead. */
  export const inboundSchema =
    CashJournalRetirementDistributionType$inboundSchema;
  /** @deprecated use `CashJournalRetirementDistributionType$outboundSchema` instead. */
  export const outboundSchema =
    CashJournalRetirementDistributionType$outboundSchema;
}

/** @internal */
export const CashJournalRetirementDistribution$inboundSchema: z.ZodType<
  CashJournalRetirementDistribution,
  z.ZodTypeDef,
  unknown
> = z.object({
  federal_tax_withholding: z.nullable(
    z.lazy(() => CashJournalFederalTaxWithholding$inboundSchema),
  ).optional(),
  receiving_institution: z.string().optional(),
  state_tax_withholding: z.nullable(
    z.lazy(() => CashJournalStateTaxWithholding$inboundSchema),
  ).optional(),
  state_withholding_waiver: z.boolean().optional(),
  tax_year: z.number().int().optional(),
  type: CashJournalRetirementDistributionType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "federal_tax_withholding": "federalTaxWithholding",
    "receiving_institution": "receivingInstitution",
    "state_tax_withholding": "stateTaxWithholding",
    "state_withholding_waiver": "stateWithholdingWaiver",
    "tax_year": "taxYear",
  });
});

/** @internal */
export type CashJournalRetirementDistribution$Outbound = {
  federal_tax_withholding?:
    | CashJournalFederalTaxWithholding$Outbound
    | null
    | undefined;
  receiving_institution?: string | undefined;
  state_tax_withholding?:
    | CashJournalStateTaxWithholding$Outbound
    | null
    | undefined;
  state_withholding_waiver?: boolean | undefined;
  tax_year?: number | undefined;
  type?: string | undefined;
};

/** @internal */
export const CashJournalRetirementDistribution$outboundSchema: z.ZodType<
  CashJournalRetirementDistribution$Outbound,
  z.ZodTypeDef,
  CashJournalRetirementDistribution
> = z.object({
  federalTaxWithholding: z.nullable(
    z.lazy(() => CashJournalFederalTaxWithholding$outboundSchema),
  ).optional(),
  receivingInstitution: z.string().optional(),
  stateTaxWithholding: z.nullable(
    z.lazy(() => CashJournalStateTaxWithholding$outboundSchema),
  ).optional(),
  stateWithholdingWaiver: z.boolean().optional(),
  taxYear: z.number().int().optional(),
  type: CashJournalRetirementDistributionType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    federalTaxWithholding: "federal_tax_withholding",
    receivingInstitution: "receiving_institution",
    stateTaxWithholding: "state_tax_withholding",
    stateWithholdingWaiver: "state_withholding_waiver",
    taxYear: "tax_year",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalRetirementDistribution$ {
  /** @deprecated use `CashJournalRetirementDistribution$inboundSchema` instead. */
  export const inboundSchema = CashJournalRetirementDistribution$inboundSchema;
  /** @deprecated use `CashJournalRetirementDistribution$outboundSchema` instead. */
  export const outboundSchema =
    CashJournalRetirementDistribution$outboundSchema;
  /** @deprecated use `CashJournalRetirementDistribution$Outbound` instead. */
  export type Outbound = CashJournalRetirementDistribution$Outbound;
}

/** @internal */
export const CashJournalStateState$inboundSchema: z.ZodType<
  CashJournalStateStateOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(CashJournalStateState),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const CashJournalStateState$outboundSchema: z.ZodType<
  CashJournalStateStateOpen,
  z.ZodTypeDef,
  CashJournalStateStateOpen
> = z.union([
  z.nativeEnum(CashJournalStateState),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalStateState$ {
  /** @deprecated use `CashJournalStateState$inboundSchema` instead. */
  export const inboundSchema = CashJournalStateState$inboundSchema;
  /** @deprecated use `CashJournalStateState$outboundSchema` instead. */
  export const outboundSchema = CashJournalStateState$outboundSchema;
}

/** @internal */
export const CashJournalState$inboundSchema: z.ZodType<
  CashJournalState,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.string().optional(),
  message: z.string().optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  state: CashJournalStateState$inboundSchema.optional(),
  update_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "update_time": "updateTime",
  });
});

/** @internal */
export type CashJournalState$Outbound = {
  actor?: string | undefined;
  message?: string | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  state?: string | undefined;
  update_time?: string | null | undefined;
};

/** @internal */
export const CashJournalState$outboundSchema: z.ZodType<
  CashJournalState$Outbound,
  z.ZodTypeDef,
  CashJournalState
> = z.object({
  actor: z.string().optional(),
  message: z.string().optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  state: CashJournalStateState$outboundSchema.optional(),
  updateTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    updateTime: "update_time",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournalState$ {
  /** @deprecated use `CashJournalState$inboundSchema` instead. */
  export const inboundSchema = CashJournalState$inboundSchema;
  /** @deprecated use `CashJournalState$outboundSchema` instead. */
  export const outboundSchema = CashJournalState$outboundSchema;
  /** @deprecated use `CashJournalState$Outbound` instead. */
  export type Outbound = CashJournalState$Outbound;
}

/** @internal */
export const CashJournal$inboundSchema: z.ZodType<
  CashJournal,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.nullable(z.lazy(() => CashJournalAmount$inboundSchema)).optional(),
  client_transfer_id: z.string().optional(),
  destination_account: z.string().optional(),
  name: z.string().optional(),
  party_type: PartyType$inboundSchema.optional(),
  retirement_contribution: z.nullable(
    z.lazy(() => CashJournalRetirementContribution$inboundSchema),
  ).optional(),
  retirement_distribution: z.nullable(
    z.lazy(() => CashJournalRetirementDistribution$inboundSchema),
  ).optional(),
  source_account: z.string().optional(),
  state: z.nullable(z.lazy(() => CashJournalState$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "client_transfer_id": "clientTransferId",
    "destination_account": "destinationAccount",
    "party_type": "partyType",
    "retirement_contribution": "retirementContribution",
    "retirement_distribution": "retirementDistribution",
    "source_account": "sourceAccount",
  });
});

/** @internal */
export type CashJournal$Outbound = {
  amount?: CashJournalAmount$Outbound | null | undefined;
  client_transfer_id?: string | undefined;
  destination_account?: string | undefined;
  name?: string | undefined;
  party_type?: string | undefined;
  retirement_contribution?:
    | CashJournalRetirementContribution$Outbound
    | null
    | undefined;
  retirement_distribution?:
    | CashJournalRetirementDistribution$Outbound
    | null
    | undefined;
  source_account?: string | undefined;
  state?: CashJournalState$Outbound | null | undefined;
};

/** @internal */
export const CashJournal$outboundSchema: z.ZodType<
  CashJournal$Outbound,
  z.ZodTypeDef,
  CashJournal
> = z.object({
  amount: z.nullable(z.lazy(() => CashJournalAmount$outboundSchema)).optional(),
  clientTransferId: z.string().optional(),
  destinationAccount: z.string().optional(),
  name: z.string().optional(),
  partyType: PartyType$outboundSchema.optional(),
  retirementContribution: z.nullable(
    z.lazy(() => CashJournalRetirementContribution$outboundSchema),
  ).optional(),
  retirementDistribution: z.nullable(
    z.lazy(() => CashJournalRetirementDistribution$outboundSchema),
  ).optional(),
  sourceAccount: z.string().optional(),
  state: z.nullable(z.lazy(() => CashJournalState$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    clientTransferId: "client_transfer_id",
    destinationAccount: "destination_account",
    partyType: "party_type",
    retirementContribution: "retirement_contribution",
    retirementDistribution: "retirement_distribution",
    sourceAccount: "source_account",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CashJournal$ {
  /** @deprecated use `CashJournal$inboundSchema` instead. */
  export const inboundSchema = CashJournal$inboundSchema;
  /** @deprecated use `CashJournal$outboundSchema` instead. */
  export const outboundSchema = CashJournal$outboundSchema;
  /** @deprecated use `CashJournal$Outbound` instead. */
  export type Outbound = CashJournal$Outbound;
}
