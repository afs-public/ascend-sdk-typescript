import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The amount to deposit in USD.
 */
export type Amount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of retirement contribution.
 */
export declare enum AchDepositType {
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
export type AchDepositTypeOpen = OpenEnum<typeof AchDepositType>;
/**
 * The retirement contribution details.
 */
export type RetirementContribution = {
    /**
     * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
     */
    taxYear?: number | undefined;
    /**
     * The type of retirement contribution.
     */
    type?: AchDepositTypeOpen | undefined;
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
export declare enum AchDepositStateState {
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
export type AchDepositStateStateOpen = OpenEnum<typeof AchDepositStateState>;
/**
 * The current state of the ACH deposit.
 */
export type AchDepositState = {
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
    state?: AchDepositStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * A deposit transfer using the ACH mechanism.
 */
export type AchDeposit = {
    /**
     * The amount to deposit in USD.
     */
    amount?: Amount | null | undefined;
    /**
     * The bank relationship to be used for the ACH deposit.
     */
    bankRelationship?: string | undefined;
    /**
     * The external identifier supplied by the API caller. Each request must have a unique pairing of `client_transfer_id` and `account`.
     */
    clientTransferId?: string | undefined;
    /**
     * The memo that will appear on the customer's bank statement.
     */
    memo?: string | undefined;
    /**
     * The resource name of the ACH deposit.
     */
    name?: string | undefined;
    /**
     * The retirement contribution details.
     */
    retirementContribution?: RetirementContribution | null | undefined;
    /**
     * The current state of the ACH deposit.
     */
    state?: AchDepositState | null | undefined;
};
/** @internal */
export declare const Amount$inboundSchema: z.ZodType<Amount, z.ZodTypeDef, unknown>;
/** @internal */
export type Amount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Amount$outboundSchema: z.ZodType<Amount$Outbound, z.ZodTypeDef, Amount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Amount$ {
    /** @deprecated use `Amount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Amount, z.ZodTypeDef, unknown>;
    /** @deprecated use `Amount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Amount$Outbound, z.ZodTypeDef, Amount>;
    /** @deprecated use `Amount$Outbound` instead. */
    type Outbound = Amount$Outbound;
}
/** @internal */
export declare const AchDepositType$inboundSchema: z.ZodType<AchDepositTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchDepositType$outboundSchema: z.ZodType<AchDepositTypeOpen, z.ZodTypeDef, AchDepositTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositType$ {
    /** @deprecated use `AchDepositType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositTypeOpen, z.ZodTypeDef, AchDepositTypeOpen>;
}
/** @internal */
export declare const RetirementContribution$inboundSchema: z.ZodType<RetirementContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type RetirementContribution$Outbound = {
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const RetirementContribution$outboundSchema: z.ZodType<RetirementContribution$Outbound, z.ZodTypeDef, RetirementContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetirementContribution$ {
    /** @deprecated use `RetirementContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetirementContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetirementContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetirementContribution$Outbound, z.ZodTypeDef, RetirementContribution>;
    /** @deprecated use `RetirementContribution$Outbound` instead. */
    type Outbound = RetirementContribution$Outbound;
}
/** @internal */
export declare const AchDepositStateState$inboundSchema: z.ZodType<AchDepositStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AchDepositStateState$outboundSchema: z.ZodType<AchDepositStateStateOpen, z.ZodTypeDef, AchDepositStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositStateState$ {
    /** @deprecated use `AchDepositStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositStateStateOpen, z.ZodTypeDef, AchDepositStateStateOpen>;
}
/** @internal */
export declare const AchDepositState$inboundSchema: z.ZodType<AchDepositState, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const AchDepositState$outboundSchema: z.ZodType<AchDepositState$Outbound, z.ZodTypeDef, AchDepositState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositState$ {
    /** @deprecated use `AchDepositState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositState, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositState$Outbound, z.ZodTypeDef, AchDepositState>;
    /** @deprecated use `AchDepositState$Outbound` instead. */
    type Outbound = AchDepositState$Outbound;
}
/** @internal */
export declare const AchDeposit$inboundSchema: z.ZodType<AchDeposit, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDeposit$Outbound = {
    amount?: Amount$Outbound | null | undefined;
    bank_relationship?: string | undefined;
    client_transfer_id?: string | undefined;
    memo?: string | undefined;
    name?: string | undefined;
    retirement_contribution?: RetirementContribution$Outbound | null | undefined;
    state?: AchDepositState$Outbound | null | undefined;
};
/** @internal */
export declare const AchDeposit$outboundSchema: z.ZodType<AchDeposit$Outbound, z.ZodTypeDef, AchDeposit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDeposit$ {
    /** @deprecated use `AchDeposit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDeposit, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDeposit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDeposit$Outbound, z.ZodTypeDef, AchDeposit>;
    /** @deprecated use `AchDeposit$Outbound` instead. */
    type Outbound = AchDeposit$Outbound;
}
//# sourceMappingURL=achdeposit.d.ts.map