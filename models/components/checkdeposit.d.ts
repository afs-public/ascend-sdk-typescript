import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The amount in USD.
 */
export type CheckDepositAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of retirement contribution.
 */
export declare enum CheckDepositType {
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
    ContributionNonReportable = "CONTRIBUTION_NON_REPORTABLE"
}
/**
 * The type of retirement contribution.
 */
export type CheckDepositTypeOpen = OpenEnum<typeof CheckDepositType>;
/**
 * The retirement contribution details.
 */
export type CheckDepositRetirementContribution = {
    /**
     * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
     */
    taxYear?: number | undefined;
    /**
     * The type of retirement contribution.
     */
    type?: CheckDepositTypeOpen | undefined;
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
export declare enum CheckDepositStateState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Processing = "PROCESSING",
    PendingReview = "PENDING_REVIEW",
    Posted = "POSTED",
    Completed = "COMPLETED",
    Rejected = "REJECTED",
    Canceled = "CANCELED",
    Returned = "RETURNED",
    Postponed = "POSTPONED"
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
export type CheckDepositStateStateOpen = OpenEnum<typeof CheckDepositStateState>;
/**
 * The current state of the check deposit.
 */
export type CheckDepositState = {
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
    metadata?: {
        [k: string]: any;
    } | null | undefined;
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
    state?: CheckDepositStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * A deposit transfer using the check mechanism.
 */
export type CheckDeposit = {
    /**
     * The amount in USD.
     */
    amount?: CheckDepositAmount | null | undefined;
    /**
     * The resource name of the check deposit. Format: accounts/{account}/checkDeposits/{check_deposit}
     */
    name?: string | undefined;
    /**
     * The retirement contribution details.
     */
    retirementContribution?: CheckDepositRetirementContribution | null | undefined;
    /**
     * The current state of the check deposit.
     */
    state?: CheckDepositState | null | undefined;
};
/** @internal */
export declare const CheckDepositAmount$inboundSchema: z.ZodType<CheckDepositAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDepositAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CheckDepositAmount$outboundSchema: z.ZodType<CheckDepositAmount$Outbound, z.ZodTypeDef, CheckDepositAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDepositAmount$ {
    /** @deprecated use `CheckDepositAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDepositAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDepositAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDepositAmount$Outbound, z.ZodTypeDef, CheckDepositAmount>;
    /** @deprecated use `CheckDepositAmount$Outbound` instead. */
    type Outbound = CheckDepositAmount$Outbound;
}
export declare function checkDepositAmountToJSON(checkDepositAmount: CheckDepositAmount): string;
export declare function checkDepositAmountFromJSON(jsonString: string): SafeParseResult<CheckDepositAmount, SDKValidationError>;
/** @internal */
export declare const CheckDepositType$inboundSchema: z.ZodType<CheckDepositTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CheckDepositType$outboundSchema: z.ZodType<CheckDepositTypeOpen, z.ZodTypeDef, CheckDepositTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDepositType$ {
    /** @deprecated use `CheckDepositType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDepositTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDepositType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDepositTypeOpen, z.ZodTypeDef, CheckDepositTypeOpen>;
}
/** @internal */
export declare const CheckDepositRetirementContribution$inboundSchema: z.ZodType<CheckDepositRetirementContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDepositRetirementContribution$Outbound = {
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const CheckDepositRetirementContribution$outboundSchema: z.ZodType<CheckDepositRetirementContribution$Outbound, z.ZodTypeDef, CheckDepositRetirementContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDepositRetirementContribution$ {
    /** @deprecated use `CheckDepositRetirementContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDepositRetirementContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDepositRetirementContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDepositRetirementContribution$Outbound, z.ZodTypeDef, CheckDepositRetirementContribution>;
    /** @deprecated use `CheckDepositRetirementContribution$Outbound` instead. */
    type Outbound = CheckDepositRetirementContribution$Outbound;
}
export declare function checkDepositRetirementContributionToJSON(checkDepositRetirementContribution: CheckDepositRetirementContribution): string;
export declare function checkDepositRetirementContributionFromJSON(jsonString: string): SafeParseResult<CheckDepositRetirementContribution, SDKValidationError>;
/** @internal */
export declare const CheckDepositStateState$inboundSchema: z.ZodType<CheckDepositStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CheckDepositStateState$outboundSchema: z.ZodType<CheckDepositStateStateOpen, z.ZodTypeDef, CheckDepositStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDepositStateState$ {
    /** @deprecated use `CheckDepositStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDepositStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDepositStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDepositStateStateOpen, z.ZodTypeDef, CheckDepositStateStateOpen>;
}
/** @internal */
export declare const CheckDepositState$inboundSchema: z.ZodType<CheckDepositState, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDepositState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const CheckDepositState$outboundSchema: z.ZodType<CheckDepositState$Outbound, z.ZodTypeDef, CheckDepositState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDepositState$ {
    /** @deprecated use `CheckDepositState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDepositState, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDepositState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDepositState$Outbound, z.ZodTypeDef, CheckDepositState>;
    /** @deprecated use `CheckDepositState$Outbound` instead. */
    type Outbound = CheckDepositState$Outbound;
}
export declare function checkDepositStateToJSON(checkDepositState: CheckDepositState): string;
export declare function checkDepositStateFromJSON(jsonString: string): SafeParseResult<CheckDepositState, SDKValidationError>;
/** @internal */
export declare const CheckDeposit$inboundSchema: z.ZodType<CheckDeposit, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckDeposit$Outbound = {
    amount?: CheckDepositAmount$Outbound | null | undefined;
    name?: string | undefined;
    retirement_contribution?: CheckDepositRetirementContribution$Outbound | null | undefined;
    state?: CheckDepositState$Outbound | null | undefined;
};
/** @internal */
export declare const CheckDeposit$outboundSchema: z.ZodType<CheckDeposit$Outbound, z.ZodTypeDef, CheckDeposit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckDeposit$ {
    /** @deprecated use `CheckDeposit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckDeposit, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckDeposit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckDeposit$Outbound, z.ZodTypeDef, CheckDeposit>;
    /** @deprecated use `CheckDeposit$Outbound` instead. */
    type Outbound = CheckDeposit$Outbound;
}
export declare function checkDepositToJSON(checkDeposit: CheckDeposit): string;
export declare function checkDepositFromJSON(jsonString: string): SafeParseResult<CheckDeposit, SDKValidationError>;
//# sourceMappingURL=checkdeposit.d.ts.map