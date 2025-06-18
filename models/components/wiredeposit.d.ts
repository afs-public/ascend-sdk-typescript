import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The amount of the wire deposit being issued to the investor in USD
 */
export type WireDepositAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of retirement contribution.
 */
export declare enum WireDepositType {
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
export type WireDepositTypeOpen = OpenEnum<typeof WireDepositType>;
/**
 * The retirement contribution details
 */
export type WireDepositRetirementContribution = {
    /**
     * Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format.
     */
    taxYear?: number | undefined;
    /**
     * The type of retirement contribution.
     */
    type?: WireDepositTypeOpen | undefined;
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
export declare enum WireDepositStateState {
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
export type WireDepositStateStateOpen = OpenEnum<typeof WireDepositStateState>;
/**
 * The current state of the wire deposit
 */
export type WireDepositState = {
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
    state?: WireDepositStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * A deposit transfer using the wire mechanism
 */
export type WireDeposit = {
    /**
     * The amount of the wire deposit being issued to the investor in USD
     */
    amount?: WireDepositAmount | null | undefined;
    /**
     * External reference identifier supplied by the bank
     */
    bankReferenceId?: string | undefined;
    /**
     * The FedWire reference number for the deposit
     */
    fedReferenceNumber?: string | undefined;
    /**
     * Full name of the wire deposit which contains account_id and deposit transaction id
     */
    name?: string | undefined;
    /**
     * The retirement contribution details
     */
    retirementContribution?: WireDepositRetirementContribution | null | undefined;
    /**
     * Whether this wire deposit is a return of a wire withdrawal
     */
    returnedWireWithdrawal?: boolean | undefined;
    /**
     * The current state of the wire deposit
     */
    state?: WireDepositState | null | undefined;
    /**
     * The wire instructions received by Apex's bank for the wire deposit
     */
    wireInstructions?: Array<string> | undefined;
};
/** @internal */
export declare const WireDepositAmount$inboundSchema: z.ZodType<WireDepositAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type WireDepositAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WireDepositAmount$outboundSchema: z.ZodType<WireDepositAmount$Outbound, z.ZodTypeDef, WireDepositAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireDepositAmount$ {
    /** @deprecated use `WireDepositAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireDepositAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireDepositAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireDepositAmount$Outbound, z.ZodTypeDef, WireDepositAmount>;
    /** @deprecated use `WireDepositAmount$Outbound` instead. */
    type Outbound = WireDepositAmount$Outbound;
}
/** @internal */
export declare const WireDepositType$inboundSchema: z.ZodType<WireDepositTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WireDepositType$outboundSchema: z.ZodType<WireDepositTypeOpen, z.ZodTypeDef, WireDepositTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireDepositType$ {
    /** @deprecated use `WireDepositType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireDepositTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireDepositType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireDepositTypeOpen, z.ZodTypeDef, WireDepositTypeOpen>;
}
/** @internal */
export declare const WireDepositRetirementContribution$inboundSchema: z.ZodType<WireDepositRetirementContribution, z.ZodTypeDef, unknown>;
/** @internal */
export type WireDepositRetirementContribution$Outbound = {
    tax_year?: number | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const WireDepositRetirementContribution$outboundSchema: z.ZodType<WireDepositRetirementContribution$Outbound, z.ZodTypeDef, WireDepositRetirementContribution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireDepositRetirementContribution$ {
    /** @deprecated use `WireDepositRetirementContribution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireDepositRetirementContribution, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireDepositRetirementContribution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireDepositRetirementContribution$Outbound, z.ZodTypeDef, WireDepositRetirementContribution>;
    /** @deprecated use `WireDepositRetirementContribution$Outbound` instead. */
    type Outbound = WireDepositRetirementContribution$Outbound;
}
/** @internal */
export declare const WireDepositStateState$inboundSchema: z.ZodType<WireDepositStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WireDepositStateState$outboundSchema: z.ZodType<WireDepositStateStateOpen, z.ZodTypeDef, WireDepositStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireDepositStateState$ {
    /** @deprecated use `WireDepositStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireDepositStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireDepositStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireDepositStateStateOpen, z.ZodTypeDef, WireDepositStateStateOpen>;
}
/** @internal */
export declare const WireDepositState$inboundSchema: z.ZodType<WireDepositState, z.ZodTypeDef, unknown>;
/** @internal */
export type WireDepositState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const WireDepositState$outboundSchema: z.ZodType<WireDepositState$Outbound, z.ZodTypeDef, WireDepositState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireDepositState$ {
    /** @deprecated use `WireDepositState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireDepositState, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireDepositState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireDepositState$Outbound, z.ZodTypeDef, WireDepositState>;
    /** @deprecated use `WireDepositState$Outbound` instead. */
    type Outbound = WireDepositState$Outbound;
}
/** @internal */
export declare const WireDeposit$inboundSchema: z.ZodType<WireDeposit, z.ZodTypeDef, unknown>;
/** @internal */
export type WireDeposit$Outbound = {
    amount?: WireDepositAmount$Outbound | null | undefined;
    bank_reference_id?: string | undefined;
    fed_reference_number?: string | undefined;
    name?: string | undefined;
    retirement_contribution?: WireDepositRetirementContribution$Outbound | null | undefined;
    returned_wire_withdrawal?: boolean | undefined;
    state?: WireDepositState$Outbound | null | undefined;
    wire_instructions?: Array<string> | undefined;
};
/** @internal */
export declare const WireDeposit$outboundSchema: z.ZodType<WireDeposit$Outbound, z.ZodTypeDef, WireDeposit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireDeposit$ {
    /** @deprecated use `WireDeposit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireDeposit, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireDeposit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireDeposit$Outbound, z.ZodTypeDef, WireDeposit>;
    /** @deprecated use `WireDeposit$Outbound` instead. */
    type Outbound = WireDeposit$Outbound;
}
//# sourceMappingURL=wiredeposit.d.ts.map