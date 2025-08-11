import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AcatsAsset, AcatsAsset$Outbound } from "./acatsasset.js";
/**
 * The external account information
 */
export type ExternalAccount = {
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
export type Deliverer = {
    /**
     * The internal apex account id
     */
    apexAccountId?: string | undefined;
    /**
     * The external account information
     */
    externalAccount?: ExternalAccount | null | undefined;
};
/**
 * The direction of the transfer
 */
export declare enum AcatsTransferDirection {
    DirectionUnspecified = "DIRECTION_UNSPECIFIED",
    Outgoing = "OUTGOING",
    Incoming = "INCOMING"
}
/**
 * The direction of the transfer
 */
export type AcatsTransferDirectionOpen = OpenEnum<typeof AcatsTransferDirection>;
/**
 * The NSCC transfer status
 */
export declare enum NsccStatus {
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
export type NsccStatusOpen = OpenEnum<typeof NsccStatus>;
/**
 * The external account information
 */
export type AcatsTransferExternalAccount = {
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
export type Receiver = {
    /**
     * The internal apex account id
     */
    apexAccountId?: string | undefined;
    /**
     * The external account information
     */
    externalAccount?: AcatsTransferExternalAccount | null | undefined;
};
/**
 * The reject code
 */
export declare enum RejectCode {
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
export type RejectCodeOpen = OpenEnum<typeof RejectCode>;
/**
 * The transfer state
 */
export declare enum AcatsTransferState {
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
export type AcatsTransferStateOpen = OpenEnum<typeof AcatsTransferState>;
/**
 * The type of transfer
 */
export declare enum TransferType {
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
export type TransferTypeOpen = OpenEnum<typeof TransferType>;
/**
 * An account transfer which contains the receiving and delivering party information, assets being transferred, NSCC status information, etc.
 */
export type AcatsTransfer = {
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
    deliverer?: Deliverer | null | undefined;
    /**
     * The direction of the transfer
     */
    direction?: AcatsTransferDirectionOpen | undefined;
    /**
     * The service generated name of the transfer. Format: correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}
     */
    name?: string | undefined;
    /**
     * The NSCC transfer status
     */
    nsccStatus?: NsccStatusOpen | undefined;
    /**
     * An associated NSCC transfer identifier, if applicable
     */
    originalControlNumber?: string | undefined;
    /**
     * The receiving party information
     */
    receiver?: Receiver | null | undefined;
    /**
     * The reject code
     */
    rejectCode?: RejectCodeOpen | undefined;
    /**
     * The transfer state
     */
    state?: AcatsTransferStateOpen | undefined;
    /**
     * A reason for the state if applicable
     */
    stateReason?: string | undefined;
    /**
     * The type of transfer
     */
    transferType?: TransferTypeOpen | undefined;
};
/** @internal */
export declare const ExternalAccount$inboundSchema: z.ZodType<ExternalAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type ExternalAccount$Outbound = {
    account_number?: string | undefined;
    account_title?: string | undefined;
    participant_number?: string | undefined;
};
/** @internal */
export declare const ExternalAccount$outboundSchema: z.ZodType<ExternalAccount$Outbound, z.ZodTypeDef, ExternalAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExternalAccount$ {
    /** @deprecated use `ExternalAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExternalAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExternalAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExternalAccount$Outbound, z.ZodTypeDef, ExternalAccount>;
    /** @deprecated use `ExternalAccount$Outbound` instead. */
    type Outbound = ExternalAccount$Outbound;
}
export declare function externalAccountToJSON(externalAccount: ExternalAccount): string;
export declare function externalAccountFromJSON(jsonString: string): SafeParseResult<ExternalAccount, SDKValidationError>;
/** @internal */
export declare const Deliverer$inboundSchema: z.ZodType<Deliverer, z.ZodTypeDef, unknown>;
/** @internal */
export type Deliverer$Outbound = {
    apex_account_id?: string | undefined;
    external_account?: ExternalAccount$Outbound | null | undefined;
};
/** @internal */
export declare const Deliverer$outboundSchema: z.ZodType<Deliverer$Outbound, z.ZodTypeDef, Deliverer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Deliverer$ {
    /** @deprecated use `Deliverer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Deliverer, z.ZodTypeDef, unknown>;
    /** @deprecated use `Deliverer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Deliverer$Outbound, z.ZodTypeDef, Deliverer>;
    /** @deprecated use `Deliverer$Outbound` instead. */
    type Outbound = Deliverer$Outbound;
}
export declare function delivererToJSON(deliverer: Deliverer): string;
export declare function delivererFromJSON(jsonString: string): SafeParseResult<Deliverer, SDKValidationError>;
/** @internal */
export declare const AcatsTransferDirection$inboundSchema: z.ZodType<AcatsTransferDirectionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AcatsTransferDirection$outboundSchema: z.ZodType<AcatsTransferDirectionOpen, z.ZodTypeDef, AcatsTransferDirectionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcatsTransferDirection$ {
    /** @deprecated use `AcatsTransferDirection$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcatsTransferDirectionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcatsTransferDirection$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcatsTransferDirectionOpen, z.ZodTypeDef, AcatsTransferDirectionOpen>;
}
/** @internal */
export declare const NsccStatus$inboundSchema: z.ZodType<NsccStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const NsccStatus$outboundSchema: z.ZodType<NsccStatusOpen, z.ZodTypeDef, NsccStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NsccStatus$ {
    /** @deprecated use `NsccStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NsccStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `NsccStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NsccStatusOpen, z.ZodTypeDef, NsccStatusOpen>;
}
/** @internal */
export declare const AcatsTransferExternalAccount$inboundSchema: z.ZodType<AcatsTransferExternalAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type AcatsTransferExternalAccount$Outbound = {
    account_number?: string | undefined;
    account_title?: string | undefined;
    participant_number?: string | undefined;
};
/** @internal */
export declare const AcatsTransferExternalAccount$outboundSchema: z.ZodType<AcatsTransferExternalAccount$Outbound, z.ZodTypeDef, AcatsTransferExternalAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcatsTransferExternalAccount$ {
    /** @deprecated use `AcatsTransferExternalAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcatsTransferExternalAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcatsTransferExternalAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcatsTransferExternalAccount$Outbound, z.ZodTypeDef, AcatsTransferExternalAccount>;
    /** @deprecated use `AcatsTransferExternalAccount$Outbound` instead. */
    type Outbound = AcatsTransferExternalAccount$Outbound;
}
export declare function acatsTransferExternalAccountToJSON(acatsTransferExternalAccount: AcatsTransferExternalAccount): string;
export declare function acatsTransferExternalAccountFromJSON(jsonString: string): SafeParseResult<AcatsTransferExternalAccount, SDKValidationError>;
/** @internal */
export declare const Receiver$inboundSchema: z.ZodType<Receiver, z.ZodTypeDef, unknown>;
/** @internal */
export type Receiver$Outbound = {
    apex_account_id?: string | undefined;
    external_account?: AcatsTransferExternalAccount$Outbound | null | undefined;
};
/** @internal */
export declare const Receiver$outboundSchema: z.ZodType<Receiver$Outbound, z.ZodTypeDef, Receiver>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Receiver$ {
    /** @deprecated use `Receiver$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Receiver, z.ZodTypeDef, unknown>;
    /** @deprecated use `Receiver$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Receiver$Outbound, z.ZodTypeDef, Receiver>;
    /** @deprecated use `Receiver$Outbound` instead. */
    type Outbound = Receiver$Outbound;
}
export declare function receiverToJSON(receiver: Receiver): string;
export declare function receiverFromJSON(jsonString: string): SafeParseResult<Receiver, SDKValidationError>;
/** @internal */
export declare const RejectCode$inboundSchema: z.ZodType<RejectCodeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RejectCode$outboundSchema: z.ZodType<RejectCodeOpen, z.ZodTypeDef, RejectCodeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectCode$ {
    /** @deprecated use `RejectCode$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectCodeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectCode$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectCodeOpen, z.ZodTypeDef, RejectCodeOpen>;
}
/** @internal */
export declare const AcatsTransferState$inboundSchema: z.ZodType<AcatsTransferStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AcatsTransferState$outboundSchema: z.ZodType<AcatsTransferStateOpen, z.ZodTypeDef, AcatsTransferStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcatsTransferState$ {
    /** @deprecated use `AcatsTransferState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcatsTransferStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcatsTransferState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcatsTransferStateOpen, z.ZodTypeDef, AcatsTransferStateOpen>;
}
/** @internal */
export declare const TransferType$inboundSchema: z.ZodType<TransferTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TransferType$outboundSchema: z.ZodType<TransferTypeOpen, z.ZodTypeDef, TransferTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferType$ {
    /** @deprecated use `TransferType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferTypeOpen, z.ZodTypeDef, TransferTypeOpen>;
}
/** @internal */
export declare const AcatsTransfer$inboundSchema: z.ZodType<AcatsTransfer, z.ZodTypeDef, unknown>;
/** @internal */
export type AcatsTransfer$Outbound = {
    acat_control_number?: string | undefined;
    assets?: Array<AcatsAsset$Outbound> | undefined;
    comment?: string | undefined;
    create_time?: string | null | undefined;
    deliverer?: Deliverer$Outbound | null | undefined;
    direction?: string | undefined;
    name?: string | undefined;
    nscc_status?: string | undefined;
    original_control_number?: string | undefined;
    receiver?: Receiver$Outbound | null | undefined;
    reject_code?: string | undefined;
    state?: string | undefined;
    state_reason?: string | undefined;
    transfer_type?: string | undefined;
};
/** @internal */
export declare const AcatsTransfer$outboundSchema: z.ZodType<AcatsTransfer$Outbound, z.ZodTypeDef, AcatsTransfer>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcatsTransfer$ {
    /** @deprecated use `AcatsTransfer$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcatsTransfer, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcatsTransfer$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcatsTransfer$Outbound, z.ZodTypeDef, AcatsTransfer>;
    /** @deprecated use `AcatsTransfer$Outbound` instead. */
    type Outbound = AcatsTransfer$Outbound;
}
export declare function acatsTransferToJSON(acatsTransfer: AcatsTransfer): string;
export declare function acatsTransferFromJSON(jsonString: string): SafeParseResult<AcatsTransfer, SDKValidationError>;
//# sourceMappingURL=acatstransfer.d.ts.map