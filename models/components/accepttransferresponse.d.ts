import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { AcatsAsset, AcatsAsset$Outbound } from "./acatsasset.js";
/**
 * The external account information
 */
export type AcceptTransferResponseExternalAccount = {
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
export type AcceptTransferResponseDeliverer = {
    /**
     * The internal apex account id
     */
    apexAccountId?: string | undefined;
    /**
     * The external account information
     */
    externalAccount?: AcceptTransferResponseExternalAccount | null | undefined;
};
/**
 * The direction of the transfer
 */
export declare enum AcceptTransferResponseDirection {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Outgoing = "OUTGOING",
    Incoming = "INCOMING"
}
/**
 * The direction of the transfer
 */
export type AcceptTransferResponseDirectionOpen = OpenEnum<typeof AcceptTransferResponseDirection>;
/**
 * The NSCC transfer status
 */
export declare enum AcceptTransferResponseNsccStatus {
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
export type AcceptTransferResponseNsccStatusOpen = OpenEnum<typeof AcceptTransferResponseNsccStatus>;
/**
 * The external account information
 */
export type AcceptTransferResponseTransferExternalAccount = {
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
export type AcceptTransferResponseReceiver = {
    /**
     * The internal apex account id
     */
    apexAccountId?: string | undefined;
    /**
     * The external account information
     */
    externalAccount?: AcceptTransferResponseTransferExternalAccount | null | undefined;
};
/**
 * The reject code
 */
export declare enum AcceptTransferResponseRejectCode {
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
export type AcceptTransferResponseRejectCodeOpen = OpenEnum<typeof AcceptTransferResponseRejectCode>;
/**
 * The transfer state
 */
export declare enum AcceptTransferResponseState {
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
export type AcceptTransferResponseStateOpen = OpenEnum<typeof AcceptTransferResponseState>;
/**
 * The type of transfer
 */
export declare enum AcceptTransferResponseTransferType {
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
export type AcceptTransferResponseTransferTypeOpen = OpenEnum<typeof AcceptTransferResponseTransferType>;
/**
 * The accepted transfer's resource
 */
export type Transfer = {
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
    deliverer?: AcceptTransferResponseDeliverer | null | undefined;
    /**
     * The direction of the transfer
     */
    direction?: AcceptTransferResponseDirectionOpen | undefined;
    /**
     * The service generated name of the transfer. Format: correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}
     */
    name?: string | undefined;
    /**
     * The NSCC transfer status
     */
    nsccStatus?: AcceptTransferResponseNsccStatusOpen | undefined;
    /**
     * An associated NSCC transfer identifier, if applicable
     */
    originalControlNumber?: string | undefined;
    /**
     * The receiving party information
     */
    receiver?: AcceptTransferResponseReceiver | null | undefined;
    /**
     * The reject code
     */
    rejectCode?: AcceptTransferResponseRejectCodeOpen | undefined;
    /**
     * The transfer state
     */
    state?: AcceptTransferResponseStateOpen | undefined;
    /**
     * A reason for the state if applicable
     */
    stateReason?: string | undefined;
    /**
     * The type of transfer
     */
    transferType?: AcceptTransferResponseTransferTypeOpen | undefined;
};
/**
 * Response from accepting internal Ascend transfers. If this is the second side (delivering/receiving) of an internal transfer that is being accepted, bookkeeping is performed immediately and both sides of the internal transfer would be complete barring any errors.
 */
export type AcceptTransferResponse = {
    /**
     * The accepted transfer's resource
     */
    transfer?: Transfer | null | undefined;
};
/** @internal */
export declare const AcceptTransferResponseExternalAccount$inboundSchema: z.ZodType<AcceptTransferResponseExternalAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptTransferResponseExternalAccount$Outbound = {
    account_number?: string | undefined;
    account_title?: string | undefined;
    participant_number?: string | undefined;
};
/** @internal */
export declare const AcceptTransferResponseExternalAccount$outboundSchema: z.ZodType<AcceptTransferResponseExternalAccount$Outbound, z.ZodTypeDef, AcceptTransferResponseExternalAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponseExternalAccount$ {
    /** @deprecated use `AcceptTransferResponseExternalAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponseExternalAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponseExternalAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponseExternalAccount$Outbound, z.ZodTypeDef, AcceptTransferResponseExternalAccount>;
    /** @deprecated use `AcceptTransferResponseExternalAccount$Outbound` instead. */
    type Outbound = AcceptTransferResponseExternalAccount$Outbound;
}
/** @internal */
export declare const AcceptTransferResponseDeliverer$inboundSchema: z.ZodType<AcceptTransferResponseDeliverer, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptTransferResponseDeliverer$Outbound = {
    apex_account_id?: string | undefined;
    external_account?: AcceptTransferResponseExternalAccount$Outbound | null | undefined;
};
/** @internal */
export declare const AcceptTransferResponseDeliverer$outboundSchema: z.ZodType<AcceptTransferResponseDeliverer$Outbound, z.ZodTypeDef, AcceptTransferResponseDeliverer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponseDeliverer$ {
    /** @deprecated use `AcceptTransferResponseDeliverer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponseDeliverer, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponseDeliverer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponseDeliverer$Outbound, z.ZodTypeDef, AcceptTransferResponseDeliverer>;
    /** @deprecated use `AcceptTransferResponseDeliverer$Outbound` instead. */
    type Outbound = AcceptTransferResponseDeliverer$Outbound;
}
/** @internal */
export declare const AcceptTransferResponseDirection$inboundSchema: z.ZodType<AcceptTransferResponseDirectionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AcceptTransferResponseDirection$outboundSchema: z.ZodType<AcceptTransferResponseDirectionOpen, z.ZodTypeDef, AcceptTransferResponseDirectionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponseDirection$ {
    /** @deprecated use `AcceptTransferResponseDirection$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponseDirectionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponseDirection$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponseDirectionOpen, z.ZodTypeDef, AcceptTransferResponseDirectionOpen>;
}
/** @internal */
export declare const AcceptTransferResponseNsccStatus$inboundSchema: z.ZodType<AcceptTransferResponseNsccStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AcceptTransferResponseNsccStatus$outboundSchema: z.ZodType<AcceptTransferResponseNsccStatusOpen, z.ZodTypeDef, AcceptTransferResponseNsccStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponseNsccStatus$ {
    /** @deprecated use `AcceptTransferResponseNsccStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponseNsccStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponseNsccStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponseNsccStatusOpen, z.ZodTypeDef, AcceptTransferResponseNsccStatusOpen>;
}
/** @internal */
export declare const AcceptTransferResponseTransferExternalAccount$inboundSchema: z.ZodType<AcceptTransferResponseTransferExternalAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptTransferResponseTransferExternalAccount$Outbound = {
    account_number?: string | undefined;
    account_title?: string | undefined;
    participant_number?: string | undefined;
};
/** @internal */
export declare const AcceptTransferResponseTransferExternalAccount$outboundSchema: z.ZodType<AcceptTransferResponseTransferExternalAccount$Outbound, z.ZodTypeDef, AcceptTransferResponseTransferExternalAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponseTransferExternalAccount$ {
    /** @deprecated use `AcceptTransferResponseTransferExternalAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponseTransferExternalAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponseTransferExternalAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponseTransferExternalAccount$Outbound, z.ZodTypeDef, AcceptTransferResponseTransferExternalAccount>;
    /** @deprecated use `AcceptTransferResponseTransferExternalAccount$Outbound` instead. */
    type Outbound = AcceptTransferResponseTransferExternalAccount$Outbound;
}
/** @internal */
export declare const AcceptTransferResponseReceiver$inboundSchema: z.ZodType<AcceptTransferResponseReceiver, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptTransferResponseReceiver$Outbound = {
    apex_account_id?: string | undefined;
    external_account?: AcceptTransferResponseTransferExternalAccount$Outbound | null | undefined;
};
/** @internal */
export declare const AcceptTransferResponseReceiver$outboundSchema: z.ZodType<AcceptTransferResponseReceiver$Outbound, z.ZodTypeDef, AcceptTransferResponseReceiver>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponseReceiver$ {
    /** @deprecated use `AcceptTransferResponseReceiver$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponseReceiver, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponseReceiver$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponseReceiver$Outbound, z.ZodTypeDef, AcceptTransferResponseReceiver>;
    /** @deprecated use `AcceptTransferResponseReceiver$Outbound` instead. */
    type Outbound = AcceptTransferResponseReceiver$Outbound;
}
/** @internal */
export declare const AcceptTransferResponseRejectCode$inboundSchema: z.ZodType<AcceptTransferResponseRejectCodeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AcceptTransferResponseRejectCode$outboundSchema: z.ZodType<AcceptTransferResponseRejectCodeOpen, z.ZodTypeDef, AcceptTransferResponseRejectCodeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponseRejectCode$ {
    /** @deprecated use `AcceptTransferResponseRejectCode$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponseRejectCodeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponseRejectCode$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponseRejectCodeOpen, z.ZodTypeDef, AcceptTransferResponseRejectCodeOpen>;
}
/** @internal */
export declare const AcceptTransferResponseState$inboundSchema: z.ZodType<AcceptTransferResponseStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AcceptTransferResponseState$outboundSchema: z.ZodType<AcceptTransferResponseStateOpen, z.ZodTypeDef, AcceptTransferResponseStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponseState$ {
    /** @deprecated use `AcceptTransferResponseState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponseStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponseState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponseStateOpen, z.ZodTypeDef, AcceptTransferResponseStateOpen>;
}
/** @internal */
export declare const AcceptTransferResponseTransferType$inboundSchema: z.ZodType<AcceptTransferResponseTransferTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AcceptTransferResponseTransferType$outboundSchema: z.ZodType<AcceptTransferResponseTransferTypeOpen, z.ZodTypeDef, AcceptTransferResponseTransferTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponseTransferType$ {
    /** @deprecated use `AcceptTransferResponseTransferType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponseTransferTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponseTransferType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponseTransferTypeOpen, z.ZodTypeDef, AcceptTransferResponseTransferTypeOpen>;
}
/** @internal */
export declare const Transfer$inboundSchema: z.ZodType<Transfer, z.ZodTypeDef, unknown>;
/** @internal */
export type Transfer$Outbound = {
    acat_control_number?: string | undefined;
    assets?: Array<AcatsAsset$Outbound> | undefined;
    comment?: string | undefined;
    create_time?: string | null | undefined;
    deliverer?: AcceptTransferResponseDeliverer$Outbound | null | undefined;
    direction?: string | undefined;
    name?: string | undefined;
    nscc_status?: string | undefined;
    original_control_number?: string | undefined;
    receiver?: AcceptTransferResponseReceiver$Outbound | null | undefined;
    reject_code?: string | undefined;
    state?: string | undefined;
    state_reason?: string | undefined;
    transfer_type?: string | undefined;
};
/** @internal */
export declare const Transfer$outboundSchema: z.ZodType<Transfer$Outbound, z.ZodTypeDef, Transfer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Transfer$ {
    /** @deprecated use `Transfer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Transfer, z.ZodTypeDef, unknown>;
    /** @deprecated use `Transfer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Transfer$Outbound, z.ZodTypeDef, Transfer>;
    /** @deprecated use `Transfer$Outbound` instead. */
    type Outbound = Transfer$Outbound;
}
/** @internal */
export declare const AcceptTransferResponse$inboundSchema: z.ZodType<AcceptTransferResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptTransferResponse$Outbound = {
    transfer?: Transfer$Outbound | null | undefined;
};
/** @internal */
export declare const AcceptTransferResponse$outboundSchema: z.ZodType<AcceptTransferResponse$Outbound, z.ZodTypeDef, AcceptTransferResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptTransferResponse$ {
    /** @deprecated use `AcceptTransferResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptTransferResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptTransferResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptTransferResponse$Outbound, z.ZodTypeDef, AcceptTransferResponse>;
    /** @deprecated use `AcceptTransferResponse$Outbound` instead. */
    type Outbound = AcceptTransferResponse$Outbound;
}
//# sourceMappingURL=accepttransferresponse.d.ts.map