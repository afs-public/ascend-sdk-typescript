import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The amount of the fee being charged from the investor's account
 */
export type TransfersFeeAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
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
export declare enum TransfersFeeStateState {
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
export type TransfersFeeStateStateOpen = OpenEnum<typeof TransfersFeeStateState>;
/**
 * The current state of the fee
 */
export type TransfersFeeState = {
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
    state?: TransfersFeeStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * The type of the fee being charged
 */
export declare enum TransfersFeeType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Management = "MANAGEMENT",
    Advisory = "ADVISORY",
    Exchange = "EXCHANGE",
    Platform = "PLATFORM",
    Inactivity = "INACTIVITY"
}
/**
 * The type of the fee being charged
 */
export type TransfersFeeTypeOpen = OpenEnum<typeof TransfersFeeType>;
/**
 * A transfer using the FEE mechanism. Funds are moved from a customer's brokerage account to the firm account
 */
export type TransfersFee = {
    /**
     * The amount of the fee being charged from the investor's account
     */
    amount?: TransfersFeeAmount | null | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account
     */
    clientTransferId?: string | undefined;
    /**
     * Optional description information that will attach to this transaction
     */
    description?: string | undefined;
    /**
     * Optional account field to denote where the fee amount should be deposited into. If provided, the account must be a fee operating account. In the case of multiple fee operating accounts under the same correspondent, this field must be provided. If not provided, this will be looked up asynchronously (therefore will not be in the initial response)
     */
    feeOperatingAccount?: string | undefined;
    /**
     * Full name of the fee resource, which contains account id and fee transaction id
     */
    name?: string | undefined;
    /**
     * The current state of the fee
     */
    state?: TransfersFeeState | null | undefined;
    /**
     * The type of the fee being charged
     */
    type?: TransfersFeeTypeOpen | undefined;
};
/** @internal */
export declare const TransfersFeeAmount$inboundSchema: z.ZodType<TransfersFeeAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TransfersFeeAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TransfersFeeAmount$outboundSchema: z.ZodType<TransfersFeeAmount$Outbound, z.ZodTypeDef, TransfersFeeAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersFeeAmount$ {
    /** @deprecated use `TransfersFeeAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersFeeAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersFeeAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersFeeAmount$Outbound, z.ZodTypeDef, TransfersFeeAmount>;
    /** @deprecated use `TransfersFeeAmount$Outbound` instead. */
    type Outbound = TransfersFeeAmount$Outbound;
}
/** @internal */
export declare const TransfersFeeStateState$inboundSchema: z.ZodType<TransfersFeeStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransfersFeeStateState$outboundSchema: z.ZodType<TransfersFeeStateStateOpen, z.ZodTypeDef, TransfersFeeStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersFeeStateState$ {
    /** @deprecated use `TransfersFeeStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersFeeStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersFeeStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersFeeStateStateOpen, z.ZodTypeDef, TransfersFeeStateStateOpen>;
}
/** @internal */
export declare const TransfersFeeState$inboundSchema: z.ZodType<TransfersFeeState, z.ZodTypeDef, unknown>;
/** @internal */
export type TransfersFeeState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const TransfersFeeState$outboundSchema: z.ZodType<TransfersFeeState$Outbound, z.ZodTypeDef, TransfersFeeState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersFeeState$ {
    /** @deprecated use `TransfersFeeState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersFeeState, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersFeeState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersFeeState$Outbound, z.ZodTypeDef, TransfersFeeState>;
    /** @deprecated use `TransfersFeeState$Outbound` instead. */
    type Outbound = TransfersFeeState$Outbound;
}
/** @internal */
export declare const TransfersFeeType$inboundSchema: z.ZodType<TransfersFeeTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransfersFeeType$outboundSchema: z.ZodType<TransfersFeeTypeOpen, z.ZodTypeDef, TransfersFeeTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersFeeType$ {
    /** @deprecated use `TransfersFeeType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersFeeTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersFeeType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersFeeTypeOpen, z.ZodTypeDef, TransfersFeeTypeOpen>;
}
/** @internal */
export declare const TransfersFee$inboundSchema: z.ZodType<TransfersFee, z.ZodTypeDef, unknown>;
/** @internal */
export type TransfersFee$Outbound = {
    amount?: TransfersFeeAmount$Outbound | null | undefined;
    client_transfer_id?: string | undefined;
    description?: string | undefined;
    fee_operating_account?: string | undefined;
    name?: string | undefined;
    state?: TransfersFeeState$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const TransfersFee$outboundSchema: z.ZodType<TransfersFee$Outbound, z.ZodTypeDef, TransfersFee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersFee$ {
    /** @deprecated use `TransfersFee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersFee, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersFee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersFee$Outbound, z.ZodTypeDef, TransfersFee>;
    /** @deprecated use `TransfersFee$Outbound` instead. */
    type Outbound = TransfersFee$Outbound;
}
//# sourceMappingURL=transfersfee.d.ts.map