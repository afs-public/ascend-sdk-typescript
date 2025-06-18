import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class InstantCashTransferICT extends ClientSDK {
    /**
     * Create ICT Deposit
     *
     * @remarks
     * Creates an ICT deposit
     */
    createIctDeposit(ictDepositCreate: components.IctDepositCreate, accountId: string, options?: RequestOptions): Promise<operations.IctDepositsCreateIctDepositResponse>;
    /**
     * Get ICT Deposit
     *
     * @remarks
     * Gets an existing ICT deposit
     */
    getIctDeposit(accountId: string, ictDepositId: string, options?: RequestOptions): Promise<operations.IctDepositsGetIctDepositResponse>;
    /**
     * Cancel ICT Deposit
     *
     * @remarks
     * Cancels an existing ICT deposit
     */
    cancelIctDeposit(cancelIctDepositRequestCreate: components.CancelIctDepositRequestCreate, accountId: string, ictDepositId: string, options?: RequestOptions): Promise<operations.IctDepositsCancelIctDepositResponse>;
    /**
     * Create ICT Withdrawal
     *
     * @remarks
     * Creates an ICT withdrawal
     */
    createIctWithdrawal(ictWithdrawalCreate: components.IctWithdrawalCreate, accountId: string, options?: RequestOptions): Promise<operations.IctWithdrawalsCreateIctWithdrawalResponse>;
    /**
     * Get ICT Withdrawal
     *
     * @remarks
     * Gets an existing ICT withdrawal
     */
    getIctWithdrawal(accountId: string, ictWithdrawalId: string, options?: RequestOptions): Promise<operations.IctWithdrawalsGetIctWithdrawalResponse>;
    /**
     * Cancel ICT Withdrawal
     *
     * @remarks
     * Cancels an existing ICT withdrawal
     */
    cancelIctWithdrawal(cancelIctWithdrawalRequestCreate: components.CancelIctWithdrawalRequestCreate, accountId: string, ictWithdrawalId: string, options?: RequestOptions): Promise<operations.IctWithdrawalsCancelIctWithdrawalResponse>;
    /**
     * Locate ICT Report
     *
     * @remarks
     * Returns a signed link pointing to a recon report file for a specific ICT batch.
     */
    locateIctReport(request: operations.IctReconReportsLocateIctReportRequest, options?: RequestOptions): Promise<operations.IctReconReportsLocateIctReportResponse>;
}
//# sourceMappingURL=instantcashtransferict.d.ts.map