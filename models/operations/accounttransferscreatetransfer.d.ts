import * as z from "zod";
import * as components from "../components/index.js";
export type AccountTransfersCreateTransferRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The account id.
     */
    accountId: string;
    /**
     * A client-specified ID for the account transfer; no specific pattern is imposed. This field is used for idempotency to ensure that repeated requests with the same ID do not result in duplicate transfers.
     */
    requestId?: string | undefined;
    transferCreate: components.TransferCreate;
};
export type AccountTransfersCreateTransferResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    acatsTransfer?: components.AcatsTransfer | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountTransfersCreateTransferRequest$inboundSchema: z.ZodType<AccountTransfersCreateTransferRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersCreateTransferRequest$Outbound = {
    correspondent_id: string;
    account_id: string;
    request_id?: string | undefined;
    TransferCreate: components.TransferCreate$Outbound;
};
/** @internal */
export declare const AccountTransfersCreateTransferRequest$outboundSchema: z.ZodType<AccountTransfersCreateTransferRequest$Outbound, z.ZodTypeDef, AccountTransfersCreateTransferRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersCreateTransferRequest$ {
    /** @deprecated use `AccountTransfersCreateTransferRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersCreateTransferRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersCreateTransferRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersCreateTransferRequest$Outbound, z.ZodTypeDef, AccountTransfersCreateTransferRequest>;
    /** @deprecated use `AccountTransfersCreateTransferRequest$Outbound` instead. */
    type Outbound = AccountTransfersCreateTransferRequest$Outbound;
}
/** @internal */
export declare const AccountTransfersCreateTransferResponse$inboundSchema: z.ZodType<AccountTransfersCreateTransferResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersCreateTransferResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AcatsTransfer?: components.AcatsTransfer$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountTransfersCreateTransferResponse$outboundSchema: z.ZodType<AccountTransfersCreateTransferResponse$Outbound, z.ZodTypeDef, AccountTransfersCreateTransferResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersCreateTransferResponse$ {
    /** @deprecated use `AccountTransfersCreateTransferResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersCreateTransferResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersCreateTransferResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersCreateTransferResponse$Outbound, z.ZodTypeDef, AccountTransfersCreateTransferResponse>;
    /** @deprecated use `AccountTransfersCreateTransferResponse$Outbound` instead. */
    type Outbound = AccountTransfersCreateTransferResponse$Outbound;
}
//# sourceMappingURL=accounttransferscreatetransfer.d.ts.map