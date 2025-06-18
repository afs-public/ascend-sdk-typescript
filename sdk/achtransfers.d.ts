import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class ACHTransfers extends ClientSDK {
    /**
     * Create ACH Deposit
     *
     * @remarks
     * Creates an ACH deposit.
     */
    createAchDeposit(achDepositCreate: components.AchDepositCreate, accountId: string, options?: RequestOptions): Promise<operations.AchDepositsCreateAchDepositResponse>;
    /**
     * Get ACH Deposit
     *
     * @remarks
     * Gets an existing ACH deposit.
     */
    getAchDeposit(accountId: string, achDepositId: string, options?: RequestOptions): Promise<operations.AchDepositsGetAchDepositResponse>;
    /**
     * Cancel ACH Deposit
     *
     * @remarks
     * Cancels an existing ACH deposit.
     */
    cancelAchDeposit(cancelAchDepositRequestCreate: components.CancelAchDepositRequestCreate, accountId: string, achDepositId: string, options?: RequestOptions): Promise<operations.AchDepositsCancelAchDepositResponse>;
    /**
     * Create ACH Withdrawal
     *
     * @remarks
     * Creates an ACH withdrawal.
     */
    createAchWithdrawal(achWithdrawalCreate: components.AchWithdrawalCreate, accountId: string, options?: RequestOptions): Promise<operations.AchWithdrawalsCreateAchWithdrawalResponse>;
    /**
     * Get ACH Withdrawal
     *
     * @remarks
     * Gets an existing ACH withdrawal.
     */
    getAchWithdrawal(accountId: string, achWithdrawalId: string, options?: RequestOptions): Promise<operations.AchWithdrawalsGetAchWithdrawalResponse>;
    /**
     * Cancel ACH Withdrawal
     *
     * @remarks
     * Cancels an existing ACH withdrawal.
     */
    cancelAchWithdrawal(cancelAchWithdrawalRequestCreate: components.CancelAchWithdrawalRequestCreate, accountId: string, achWithdrawalId: string, options?: RequestOptions): Promise<operations.AchWithdrawalsCancelAchWithdrawalResponse>;
}
//# sourceMappingURL=achtransfers.d.ts.map