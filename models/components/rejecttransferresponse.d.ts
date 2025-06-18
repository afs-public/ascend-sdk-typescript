import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { AcatsAsset, AcatsAsset$Outbound } from "./acatsasset.js";
/**
 * The external account information
 */
export type RejectTransferResponseExternalAccount = {
    /**
     * The account identifier The account number for external communications
     */
    accountNumber?: string | undefined;
    /**
     * Account owner title
     */
    accountTitle?: string | undefined;
    /**
     * The NSCC brokerage / clearing house identifier
     */
    participantNumber?: string | undefined;
};
/**
 * The delivering party information
 */
export type RejectTransferResponseDeliverer = {
    /**
     * The internal apex account id
     */
    apexAccountId?: string | undefined;
    /**
     * The external account information
     */
    externalAccount?: RejectTransferResponseExternalAccount | null | undefined;
};
/**
 * The direction of the transfer
 */
export declare enum RejectTransferResponseDirection {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Outgoing = "OUTGOING",
    Incoming = "INCOMING"
}
/**
 * The direction of the transfer
 */
export type RejectTransferResponseDirectionOpen = OpenEnum<typeof RejectTransferResponseDirection>;
/**
 * The NSCC transfer status
 */
export declare enum RejectTransferResponseNsccStatus {
    NsccStatusUnspecified = "NSCC_STATUS_UNSPECIFIED",
    Request = "REQUEST",
    RequestAdjust = "REQUEST_ADJUST",
    RequestAdjustPast = "REQUEST_ADJUST_PAST",
    RequestPast = "REQUEST_PAST",
    RequestReject = "REQUEST_REJECT",
    Review = "REVIEW",
    ReviewAdjustDeliverer = "REVIEW_ADJUST_DELIVERER",
    ReviewError = "REVIEW_ERROR",
    ReviewAccelerate = "REVIEW_ACCELERATE",
    ReviewAdjustReceiverAccelerate = "REVIEW_ADJUST_RECEIVER_ACCELERATE",
    SettlePrep = "SETTLE_PREP",
    SettleClose = "SETTLE_CLOSE",
    ClosePurge = "CLOSE_PURGE",
    PartialRequest = "PARTIAL_REQUEST",
    MemoPurgePartialTransferRequestReceiver = "MEMO_PURGE_PARTIAL_TRANSFER_REQUEST_RECEIVER",
    Reject = "REJECT",
    SystemPurge = "SYSTEM_PURGE"
}
/**
 * The NSCC transfer status
 */
export type RejectTransferResponseNsccStatusOpen = OpenEnum<typeof RejectTransferResponseNsccStatus>;
/**
 * The external account information
 */
export type RejectTransferResponseTransferExternalAccount = {
    /**
     * The account identifier The account number for external communications
     */
    accountNumber?: string | undefined;
    /**
     * Account owner title
     */
    accountTitle?: string | undefined;
    /**
     * The NSCC brokerage / clearing house identifier
     */
    participantNumber?: string | undefined;
};
/**
 * The receiving party information
 */
export type RejectTransferResponseReceiver = {
    /**
     * The internal apex account id
     */
    apexAccountId?: string | undefined;
    /**
     * The external account information
     */
    externalAccount?: RejectTransferResponseTransferExternalAccount | null | undefined;
};
/**
 * The reject code
 */
export declare enum RejectTransferResponseRejectCode {
    RejectCodeUnspecified = "REJECT_CODE_UNSPECIFIED",
    RejectCodeSsnTaxIdMismatch = "REJECT_CODE_SSN_TAX_ID_MISMATCH",
    RejectCodeAccountTitleMismatch = "REJECT_CODE_ACCOUNT_TITLE_MISMATCH",
    RejectCodeDocumentationNeeded = "REJECT_CODE_DOCUMENTATION_NEEDED",
    RejectCodeAccountFlat = "REJECT_CODE_ACCOUNT_FLAT",
    RejectCodeInvalidAccountNumber = "REJECT_CODE_INVALID_ACCOUNT_NUMBER",
    RejectCodeDuplicate = "REJECT_CODE_DUPLICATE",
    RejectCodeAccountInDistributionOrTransfer = "REJECT_CODE_ACCOUNT_IN_DISTRIBUTION_OR_TRANSFER",
    RejectCodeClientRescinded = "REJECT_CODE_CLIENT_RESCINDED",
    RejectCodeMissingAuthorizationSignature = "REJECT_CODE_MISSING_AUTHORIZATION_SIGNATURE",
    RejectCodeAccountViolatesCreditPolicyOfReceivingFirm = "REJECT_CODE_ACCOUNT_VIOLATES_CREDIT_POLICY_OF_RECEIVING_FIRM",
    RejectCodeUnrecognizedForResidualCreditBalance = "REJECT_CODE_UNRECOGNIZED_FOR_RESIDUAL_CREDIT_BALANCE",
    RejectCodePartialTransferDeliverer = "REJECT_CODE_PARTIAL_TRANSFER_DELIVERER",
    RejectCodeFailReversal = "REJECT_CODE_FAIL_REVERSAL",
    RejectCodeReclaim = "REJECT_CODE_RECLAIM",
    RejectCodeMutualFundCleanup = "REJECT_CODE_MUTUAL_FUND_CLEANUP"
}
/**
 * The reject code
 */
export type RejectTransferResponseRejectCodeOpen = OpenEnum<typeof RejectTransferResponseRejectCode>;
/**
 * The transfer state
 */
export declare enum RejectTransferResponseState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Received = "RECEIVED",
    Submitted = "SUBMITTED",
    Rejected = "REJECTED",
    PendingContraResponse = "PENDING_CONTRA_RESPONSE",
    Error = "ERROR",
    Accepted = "ACCEPTED",
    PendingReview = "PENDING_REVIEW",
    PendingRejection = "PENDING_REJECTION",
    PendingSettlement = "PENDING_SETTLEMENT",
    PendingBookkeeping = "PENDING_BOOKKEEPING",
    Completed = "COMPLETED",
    Purged = "PURGED"
}
/**
 * The transfer state
 */
export type RejectTransferResponseStateOpen = OpenEnum<typeof RejectTransferResponseState>;
/**
 * The type of transfer
 */
export declare enum RejectTransferResponseTransferType {
    TransferTypeUnspecified = "TRANSFER_TYPE_UNSPECIFIED",
    FailReversalBrokerToBrokerOnly = "FAIL_REVERSAL_BROKER_TO_BROKER_ONLY",
    FullTransfer = "FULL_TRANSFER",
    MutualFundCleanup = "MUTUAL_FUND_CLEANUP",
    PartialTransferDeliverer = "PARTIAL_TRANSFER_DELIVERER",
    PartialTransferReceiver = "PARTIAL_TRANSFER_RECEIVER",
    PositionTransferFundFirmToMutualFundCompanyOnly = "POSITION_TRANSFER_FUND_FIRM_TO_MUTUAL_FUND_COMPANY_ONLY",
    Reclaim = "RECLAIM",
    ResidualCredit = "RESIDUAL_CREDIT"
}
/**
 * The type of transfer
 */
export type RejectTransferResponseTransferTypeOpen = OpenEnum<typeof RejectTransferResponseTransferType>;
/**
 * The rejected transfer's resource
 */
export type RejectTransferResponseTransfer = {
    /**
     * The NSCC transfer identifier
     */
    acatControlNumber?: string | undefined;
    /**
     * The assets being transferred (Cash, Equities, etc.)
     */
    assets?: Array<AcatsAsset> | undefined;
    /**
     * User supplied comment
     */
    comment?: string | undefined;
    /**
     * The transfer creation timestamp
     */
    createTime?: Date | null | undefined;
    /**
     * The delivering party information
     */
    deliverer?: RejectTransferResponseDeliverer | null | undefined;
    /**
     * The direction of the transfer
     */
    direction?: RejectTransferResponseDirectionOpen | undefined;
    /**
     * The service generated name of the transfer. Format: correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}
     */
    name?: string | undefined;
    /**
     * The NSCC transfer status
     */
    nsccStatus?: RejectTransferResponseNsccStatusOpen | undefined;
    /**
     * An associated NSCC transfer identifier, if applicable
     */
    originalControlNumber?: string | undefined;
    /**
     * The receiving party information
     */
    receiver?: RejectTransferResponseReceiver | null | undefined;
    /**
     * The reject code
     */
    rejectCode?: RejectTransferResponseRejectCodeOpen | undefined;
    /**
     * The transfer state
     */
    state?: RejectTransferResponseStateOpen | undefined;
    /**
     * A reason for the state if applicable
     */
    stateReason?: string | undefined;
    /**
     * The type of transfer
     */
    transferType?: RejectTransferResponseTransferTypeOpen | undefined;
};
/**
 * Response from rejecting internal Ascend transfers. If this is the first side (delivering/receiving) of an internal transfer that is being rejected, the contra side would be implicitly rejected at the same time.
 */
export type RejectTransferResponse = {
    /**
     * The rejected transfer's resource
     */
    transfer?: RejectTransferResponseTransfer | null | undefined;
};
/** @internal */
export declare const RejectTransferResponseExternalAccount$inboundSchema: z.ZodType<RejectTransferResponseExternalAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type RejectTransferResponseExternalAccount$Outbound = {
    account_number?: string | undefined;
    account_title?: string | undefined;
    participant_number?: string | undefined;
};
/** @internal */
export declare const RejectTransferResponseExternalAccount$outboundSchema: z.ZodType<RejectTransferResponseExternalAccount$Outbound, z.ZodTypeDef, RejectTransferResponseExternalAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseExternalAccount$ {
    /** @deprecated use `RejectTransferResponseExternalAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseExternalAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseExternalAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseExternalAccount$Outbound, z.ZodTypeDef, RejectTransferResponseExternalAccount>;
    /** @deprecated use `RejectTransferResponseExternalAccount$Outbound` instead. */
    type Outbound = RejectTransferResponseExternalAccount$Outbound;
}
/** @internal */
export declare const RejectTransferResponseDeliverer$inboundSchema: z.ZodType<RejectTransferResponseDeliverer, z.ZodTypeDef, unknown>;
/** @internal */
export type RejectTransferResponseDeliverer$Outbound = {
    apex_account_id?: string | undefined;
    external_account?: RejectTransferResponseExternalAccount$Outbound | null | undefined;
};
/** @internal */
export declare const RejectTransferResponseDeliverer$outboundSchema: z.ZodType<RejectTransferResponseDeliverer$Outbound, z.ZodTypeDef, RejectTransferResponseDeliverer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseDeliverer$ {
    /** @deprecated use `RejectTransferResponseDeliverer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseDeliverer, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseDeliverer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseDeliverer$Outbound, z.ZodTypeDef, RejectTransferResponseDeliverer>;
    /** @deprecated use `RejectTransferResponseDeliverer$Outbound` instead. */
    type Outbound = RejectTransferResponseDeliverer$Outbound;
}
/** @internal */
export declare const RejectTransferResponseDirection$inboundSchema: z.ZodType<RejectTransferResponseDirectionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RejectTransferResponseDirection$outboundSchema: z.ZodType<RejectTransferResponseDirectionOpen, z.ZodTypeDef, RejectTransferResponseDirectionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseDirection$ {
    /** @deprecated use `RejectTransferResponseDirection$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseDirectionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseDirection$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseDirectionOpen, z.ZodTypeDef, RejectTransferResponseDirectionOpen>;
}
/** @internal */
export declare const RejectTransferResponseNsccStatus$inboundSchema: z.ZodType<RejectTransferResponseNsccStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RejectTransferResponseNsccStatus$outboundSchema: z.ZodType<RejectTransferResponseNsccStatusOpen, z.ZodTypeDef, RejectTransferResponseNsccStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseNsccStatus$ {
    /** @deprecated use `RejectTransferResponseNsccStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseNsccStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseNsccStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseNsccStatusOpen, z.ZodTypeDef, RejectTransferResponseNsccStatusOpen>;
}
/** @internal */
export declare const RejectTransferResponseTransferExternalAccount$inboundSchema: z.ZodType<RejectTransferResponseTransferExternalAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type RejectTransferResponseTransferExternalAccount$Outbound = {
    account_number?: string | undefined;
    account_title?: string | undefined;
    participant_number?: string | undefined;
};
/** @internal */
export declare const RejectTransferResponseTransferExternalAccount$outboundSchema: z.ZodType<RejectTransferResponseTransferExternalAccount$Outbound, z.ZodTypeDef, RejectTransferResponseTransferExternalAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseTransferExternalAccount$ {
    /** @deprecated use `RejectTransferResponseTransferExternalAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseTransferExternalAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseTransferExternalAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseTransferExternalAccount$Outbound, z.ZodTypeDef, RejectTransferResponseTransferExternalAccount>;
    /** @deprecated use `RejectTransferResponseTransferExternalAccount$Outbound` instead. */
    type Outbound = RejectTransferResponseTransferExternalAccount$Outbound;
}
/** @internal */
export declare const RejectTransferResponseReceiver$inboundSchema: z.ZodType<RejectTransferResponseReceiver, z.ZodTypeDef, unknown>;
/** @internal */
export type RejectTransferResponseReceiver$Outbound = {
    apex_account_id?: string | undefined;
    external_account?: RejectTransferResponseTransferExternalAccount$Outbound | null | undefined;
};
/** @internal */
export declare const RejectTransferResponseReceiver$outboundSchema: z.ZodType<RejectTransferResponseReceiver$Outbound, z.ZodTypeDef, RejectTransferResponseReceiver>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseReceiver$ {
    /** @deprecated use `RejectTransferResponseReceiver$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseReceiver, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseReceiver$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseReceiver$Outbound, z.ZodTypeDef, RejectTransferResponseReceiver>;
    /** @deprecated use `RejectTransferResponseReceiver$Outbound` instead. */
    type Outbound = RejectTransferResponseReceiver$Outbound;
}
/** @internal */
export declare const RejectTransferResponseRejectCode$inboundSchema: z.ZodType<RejectTransferResponseRejectCodeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RejectTransferResponseRejectCode$outboundSchema: z.ZodType<RejectTransferResponseRejectCodeOpen, z.ZodTypeDef, RejectTransferResponseRejectCodeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseRejectCode$ {
    /** @deprecated use `RejectTransferResponseRejectCode$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseRejectCodeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseRejectCode$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseRejectCodeOpen, z.ZodTypeDef, RejectTransferResponseRejectCodeOpen>;
}
/** @internal */
export declare const RejectTransferResponseState$inboundSchema: z.ZodType<RejectTransferResponseStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RejectTransferResponseState$outboundSchema: z.ZodType<RejectTransferResponseStateOpen, z.ZodTypeDef, RejectTransferResponseStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseState$ {
    /** @deprecated use `RejectTransferResponseState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseStateOpen, z.ZodTypeDef, RejectTransferResponseStateOpen>;
}
/** @internal */
export declare const RejectTransferResponseTransferType$inboundSchema: z.ZodType<RejectTransferResponseTransferTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RejectTransferResponseTransferType$outboundSchema: z.ZodType<RejectTransferResponseTransferTypeOpen, z.ZodTypeDef, RejectTransferResponseTransferTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseTransferType$ {
    /** @deprecated use `RejectTransferResponseTransferType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseTransferTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseTransferType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseTransferTypeOpen, z.ZodTypeDef, RejectTransferResponseTransferTypeOpen>;
}
/** @internal */
export declare const RejectTransferResponseTransfer$inboundSchema: z.ZodType<RejectTransferResponseTransfer, z.ZodTypeDef, unknown>;
/** @internal */
export type RejectTransferResponseTransfer$Outbound = {
    acat_control_number?: string | undefined;
    assets?: Array<AcatsAsset$Outbound> | undefined;
    comment?: string | undefined;
    create_time?: string | null | undefined;
    deliverer?: RejectTransferResponseDeliverer$Outbound | null | undefined;
    direction?: string | undefined;
    name?: string | undefined;
    nscc_status?: string | undefined;
    original_control_number?: string | undefined;
    receiver?: RejectTransferResponseReceiver$Outbound | null | undefined;
    reject_code?: string | undefined;
    state?: string | undefined;
    state_reason?: string | undefined;
    transfer_type?: string | undefined;
};
/** @internal */
export declare const RejectTransferResponseTransfer$outboundSchema: z.ZodType<RejectTransferResponseTransfer$Outbound, z.ZodTypeDef, RejectTransferResponseTransfer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponseTransfer$ {
    /** @deprecated use `RejectTransferResponseTransfer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponseTransfer, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponseTransfer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponseTransfer$Outbound, z.ZodTypeDef, RejectTransferResponseTransfer>;
    /** @deprecated use `RejectTransferResponseTransfer$Outbound` instead. */
    type Outbound = RejectTransferResponseTransfer$Outbound;
}
/** @internal */
export declare const RejectTransferResponse$inboundSchema: z.ZodType<RejectTransferResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RejectTransferResponse$Outbound = {
    transfer?: RejectTransferResponseTransfer$Outbound | null | undefined;
};
/** @internal */
export declare const RejectTransferResponse$outboundSchema: z.ZodType<RejectTransferResponse$Outbound, z.ZodTypeDef, RejectTransferResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectTransferResponse$ {
    /** @deprecated use `RejectTransferResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectTransferResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectTransferResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectTransferResponse$Outbound, z.ZodTypeDef, RejectTransferResponse>;
    /** @deprecated use `RejectTransferResponse$Outbound` instead. */
    type Outbound = RejectTransferResponse$Outbound;
}
//# sourceMappingURL=rejecttransferresponse.d.ts.map