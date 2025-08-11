import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AccountTransfersAcceptTransferRequest = {
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
    acceptTransferRequestCreate: components.AcceptTransferRequestCreate;
};
export type AccountTransfersAcceptTransferResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    acceptTransferResponse?: components.AcceptTransferResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     *
     * @remarks
     * FAILED_PRECONDITION: The transfer resource is not in the correct state for this operation.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountTransfersAcceptTransferRequest$inboundSchema: z.ZodType<AccountTransfersAcceptTransferRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersAcceptTransferRequest$Outbound = {
    correspondent_id: string;
    account_id: string;
    transfer_id: string;
    AcceptTransferRequestCreate: components.AcceptTransferRequestCreate$Outbound;
};
/** @internal */
export declare const AccountTransfersAcceptTransferRequest$outboundSchema: z.ZodType<AccountTransfersAcceptTransferRequest$Outbound, z.ZodTypeDef, AccountTransfersAcceptTransferRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersAcceptTransferRequest$ {
    /** @deprecated use `AccountTransfersAcceptTransferRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersAcceptTransferRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersAcceptTransferRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersAcceptTransferRequest$Outbound, z.ZodTypeDef, AccountTransfersAcceptTransferRequest>;
    /** @deprecated use `AccountTransfersAcceptTransferRequest$Outbound` instead. */
    type Outbound = AccountTransfersAcceptTransferRequest$Outbound;
}
export declare function accountTransfersAcceptTransferRequestToJSON(accountTransfersAcceptTransferRequest: AccountTransfersAcceptTransferRequest): string;
export declare function accountTransfersAcceptTransferRequestFromJSON(jsonString: string): SafeParseResult<AccountTransfersAcceptTransferRequest, SDKValidationError>;
/** @internal */
export declare const AccountTransfersAcceptTransferResponse$inboundSchema: z.ZodType<AccountTransfersAcceptTransferResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountTransfersAcceptTransferResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AcceptTransferResponse?: components.AcceptTransferResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountTransfersAcceptTransferResponse$outboundSchema: z.ZodType<AccountTransfersAcceptTransferResponse$Outbound, z.ZodTypeDef, AccountTransfersAcceptTransferResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTransfersAcceptTransferResponse$ {
    /** @deprecated use `AccountTransfersAcceptTransferResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTransfersAcceptTransferResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTransfersAcceptTransferResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTransfersAcceptTransferResponse$Outbound, z.ZodTypeDef, AccountTransfersAcceptTransferResponse>;
    /** @deprecated use `AccountTransfersAcceptTransferResponse$Outbound` instead. */
    type Outbound = AccountTransfersAcceptTransferResponse$Outbound;
}
export declare function accountTransfersAcceptTransferResponseToJSON(accountTransfersAcceptTransferResponse: AccountTransfersAcceptTransferResponse): string;
export declare function accountTransfersAcceptTransferResponseFromJSON(jsonString: string): SafeParseResult<AccountTransfersAcceptTransferResponse, SDKValidationError>;
//# sourceMappingURL=accounttransfersaccepttransfer.d.ts.map