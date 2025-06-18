import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class AccountTransfers extends ClientSDK {
    /**
     * Create Transfer
     *
     * @remarks
     * Creates a transfer
     */
    createTransfer(transferCreate: components.TransferCreate, correspondentId: string, accountId: string, requestId?: string | undefined, options?: RequestOptions): Promise<operations.AccountTransfersCreateTransferResponse>;
    /**
     * List Transfers
     *
     * @remarks
     * Lists existing transfers using a CEL filter.
     */
    listTransfers(request: operations.AccountTransfersListTransfersRequest, options?: RequestOptions): Promise<operations.AccountTransfersListTransfersResponse>;
    /**
     * Accept Transfer
     *
     * @remarks
     * Accept one side (incoming/outgoing) of an internal Ascend transfer. When both the incoming side and outgoing side of the transfer have been accepted then bookkeeping is done immediately. If neither, or only one side of a transfer is accepted, then both sides of the internal perform bookkeeping one full settlement day after they went into the bookkeeping queue.
     */
    acceptTransfer(acceptTransferRequestCreate: components.AcceptTransferRequestCreate, correspondentId: string, accountId: string, transferId: string, options?: RequestOptions): Promise<operations.AccountTransfersAcceptTransferResponse>;
    /**
     * Reject Transfer
     *
     * @remarks
     * Reject one side (incoming/outgoing) of an internal Ascend transfer. Rejecting one side automatically moves the contra side of the transfer to be rejected as well.
     */
    rejectTransfer(rejectTransferRequestCreate: components.RejectTransferRequestCreate, correspondentId: string, accountId: string, transferId: string, options?: RequestOptions): Promise<operations.AccountTransfersRejectTransferResponse>;
    /**
     * Get Transfer
     *
     * @remarks
     * Gets an existing transfer
     */
    getTransfer(correspondentId: string, accountId: string, transferId: string, options?: RequestOptions): Promise<operations.AccountTransfersGetTransferResponse>;
}
//# sourceMappingURL=accounttransfers.d.ts.map