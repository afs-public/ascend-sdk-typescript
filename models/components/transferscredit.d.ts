import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The amount of the credit being issued to the investor
 */
export type TransfersCreditAmount = {
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
export declare enum TransfersCreditStateState {
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
export type TransfersCreditStateStateOpen = OpenEnum<typeof TransfersCreditStateState>;
/**
 * The current state of the credit
 */
export type TransfersCreditState = {
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
    state?: TransfersCreditStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * The type of the credit being issued
 */
export declare enum TransfersCreditType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Promotional = "PROMOTIONAL",
    WriteOff = "WRITE_OFF",
    Reimbursement = "REIMBURSEMENT"
}
/**
 * The type of the credit being issued
 */
export type TransfersCreditTypeOpen = OpenEnum<typeof TransfersCreditType>;
/**
 * A transfer using the CREDIT mechanism. Funds are moved from a firm account to a customer's brokerage account
 */
export type TransfersCredit = {
    /**
     * The amount of the credit being issued to the investor
     */
    amount?: TransfersCreditAmount | null | undefined;
    /**
     * Bulk upload identifier to group related credit transfers
     */
    bulkUploadId?: string | undefined;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account
     */
    clientTransferId?: string | undefined;
    /**
     * Optional description information that will attach to this transaction
     */
    description?: string | undefined;
    /**
     * Optional account field to denote where the credit amount should be withdrawn from. If provided, the account must be a fee operating account. In the case of multiple fee operating accounts under the same correspondent, this field must be provided. If not provided, this will be looked up asynchronously (therefore will not be in the initial response)
     */
    feeOperatingAccount?: string | undefined;
    /**
     * Full name of the credit resource, which contains account id and credit transaction id
     */
    name?: string | undefined;
    /**
     * The current state of the credit
     */
    state?: TransfersCreditState | null | undefined;
    /**
     * The type of the credit being issued
     */
    type?: TransfersCreditTypeOpen | undefined;
};
/** @internal */
export declare const TransfersCreditAmount$inboundSchema: z.ZodType<TransfersCreditAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TransfersCreditAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TransfersCreditAmount$outboundSchema: z.ZodType<TransfersCreditAmount$Outbound, z.ZodTypeDef, TransfersCreditAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersCreditAmount$ {
    /** @deprecated use `TransfersCreditAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersCreditAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersCreditAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersCreditAmount$Outbound, z.ZodTypeDef, TransfersCreditAmount>;
    /** @deprecated use `TransfersCreditAmount$Outbound` instead. */
    type Outbound = TransfersCreditAmount$Outbound;
}
export declare function transfersCreditAmountToJSON(transfersCreditAmount: TransfersCreditAmount): string;
export declare function transfersCreditAmountFromJSON(jsonString: string): SafeParseResult<TransfersCreditAmount, SDKValidationError>;
/** @internal */
export declare const TransfersCreditStateState$inboundSchema: z.ZodType<TransfersCreditStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransfersCreditStateState$outboundSchema: z.ZodType<TransfersCreditStateStateOpen, z.ZodTypeDef, TransfersCreditStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersCreditStateState$ {
    /** @deprecated use `TransfersCreditStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersCreditStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersCreditStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersCreditStateStateOpen, z.ZodTypeDef, TransfersCreditStateStateOpen>;
}
/** @internal */
export declare const TransfersCreditState$inboundSchema: z.ZodType<TransfersCreditState, z.ZodTypeDef, unknown>;
/** @internal */
export type TransfersCreditState$Outbound = {
    actor?: string | undefined;
    message?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const TransfersCreditState$outboundSchema: z.ZodType<TransfersCreditState$Outbound, z.ZodTypeDef, TransfersCreditState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersCreditState$ {
    /** @deprecated use `TransfersCreditState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersCreditState, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersCreditState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersCreditState$Outbound, z.ZodTypeDef, TransfersCreditState>;
    /** @deprecated use `TransfersCreditState$Outbound` instead. */
    type Outbound = TransfersCreditState$Outbound;
}
export declare function transfersCreditStateToJSON(transfersCreditState: TransfersCreditState): string;
export declare function transfersCreditStateFromJSON(jsonString: string): SafeParseResult<TransfersCreditState, SDKValidationError>;
/** @internal */
export declare const TransfersCreditType$inboundSchema: z.ZodType<TransfersCreditTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransfersCreditType$outboundSchema: z.ZodType<TransfersCreditTypeOpen, z.ZodTypeDef, TransfersCreditTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersCreditType$ {
    /** @deprecated use `TransfersCreditType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersCreditTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersCreditType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersCreditTypeOpen, z.ZodTypeDef, TransfersCreditTypeOpen>;
}
/** @internal */
export declare const TransfersCredit$inboundSchema: z.ZodType<TransfersCredit, z.ZodTypeDef, unknown>;
/** @internal */
export type TransfersCredit$Outbound = {
    amount?: TransfersCreditAmount$Outbound | null | undefined;
    bulk_upload_id?: string | undefined;
    client_transfer_id?: string | undefined;
    description?: string | undefined;
    fee_operating_account?: string | undefined;
    name?: string | undefined;
    state?: TransfersCreditState$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const TransfersCredit$outboundSchema: z.ZodType<TransfersCredit$Outbound, z.ZodTypeDef, TransfersCredit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransfersCredit$ {
    /** @deprecated use `TransfersCredit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransfersCredit, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransfersCredit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransfersCredit$Outbound, z.ZodTypeDef, TransfersCredit>;
    /** @deprecated use `TransfersCredit$Outbound` instead. */
    type Outbound = TransfersCredit$Outbound;
}
export declare function transfersCreditToJSON(transfersCredit: TransfersCredit): string;
export declare function transfersCreditFromJSON(jsonString: string): SafeParseResult<TransfersCredit, SDKValidationError>;
//# sourceMappingURL=transferscredit.d.ts.map