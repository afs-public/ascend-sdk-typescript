import * as z from "zod";
import * as components from "../components/index.js";
export type AccountTransfersGetTransferRequest = {
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
};
export type AccountTransfersGetTransferResponse = {
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
export declare const AccountTransfersGetTransferRequest$inboundSchema: z.ZodType<AccountTransfersGetTransferRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersGetTransferRequest$Outbound = {
    correspondent_id: string;
    account_id: string;
    transfer_id: string;
};
/** @internal */
export declare const AccountTransfersGetTransferRequest$outboundSchema: z.ZodType<AccountTransfersGetTransferRequest$Outbound, z.ZodTypeDef, AccountTransfersGetTransferRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersGetTransferRequest$ {
    /** @deprecated use `AccountTransfersGetTransferRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersGetTransferRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersGetTransferRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersGetTransferRequest$Outbound, z.ZodTypeDef, AccountTransfersGetTransferRequest>;
    /** @deprecated use `AccountTransfersGetTransferRequest$Outbound` instead. */
    type Outbound = AccountTransfersGetTransferRequest$Outbound;
}
/** @internal */
export declare const AccountTransfersGetTransferResponse$inboundSchema: z.ZodType<AccountTransfersGetTransferResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersGetTransferResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AcatsTransfer?: components.AcatsTransfer$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountTransfersGetTransferResponse$outboundSchema: z.ZodType<AccountTransfersGetTransferResponse$Outbound, z.ZodTypeDef, AccountTransfersGetTransferResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersGetTransferResponse$ {
    /** @deprecated use `AccountTransfersGetTransferResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersGetTransferResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersGetTransferResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersGetTransferResponse$Outbound, z.ZodTypeDef, AccountTransfersGetTransferResponse>;
    /** @deprecated use `AccountTransfersGetTransferResponse$Outbound` instead. */
    type Outbound = AccountTransfersGetTransferResponse$Outbound;
}
//# sourceMappingURL=accounttransfersgettransfer.d.ts.map