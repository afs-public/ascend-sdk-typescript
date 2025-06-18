import * as z from "zod";
import * as components from "../components/index.js";
export type AccountTransfersRejectTransferRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The transfer id.
     */
    transferId: string;
    rejectTransferRequestCreate: components.RejectTransferRequestCreate;
};
export type AccountTransfersRejectTransferResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    rejectTransferResponse?: components.RejectTransferResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     *
     * @remarks
     * FAILED_PRECONDITION: The transfer resource is not in the correct state for this operation.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountTransfersRejectTransferRequest$inboundSchema: z.ZodType<AccountTransfersRejectTransferRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersRejectTransferRequest$Outbound = {
    correspondent_id: string;
    account_id: string;
    transfer_id: string;
    RejectTransferRequestCreate: components.RejectTransferRequestCreate$Outbound;
};
/** @internal */
export declare const AccountTransfersRejectTransferRequest$outboundSchema: z.ZodType<AccountTransfersRejectTransferRequest$Outbound, z.ZodTypeDef, AccountTransfersRejectTransferRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersRejectTransferRequest$ {
    /** @deprecated use `AccountTransfersRejectTransferRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersRejectTransferRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersRejectTransferRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersRejectTransferRequest$Outbound, z.ZodTypeDef, AccountTransfersRejectTransferRequest>;
    /** @deprecated use `AccountTransfersRejectTransferRequest$Outbound` instead. */
    type Outbound = AccountTransfersRejectTransferRequest$Outbound;
}
/** @internal */
export declare const AccountTransfersRejectTransferResponse$inboundSchema: z.ZodType<AccountTransfersRejectTransferResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersRejectTransferResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    RejectTransferResponse?: components.RejectTransferResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountTransfersRejectTransferResponse$outboundSchema: z.ZodType<AccountTransfersRejectTransferResponse$Outbound, z.ZodTypeDef, AccountTransfersRejectTransferResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersRejectTransferResponse$ {
    /** @deprecated use `AccountTransfersRejectTransferResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersRejectTransferResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersRejectTransferResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersRejectTransferResponse$Outbound, z.ZodTypeDef, AccountTransfersRejectTransferResponse>;
    /** @deprecated use `AccountTransfersRejectTransferResponse$Outbound` instead. */
    type Outbound = AccountTransfersRejectTransferResponse$Outbound;
}
//# sourceMappingURL=accounttransfersrejecttransfer.d.ts.map