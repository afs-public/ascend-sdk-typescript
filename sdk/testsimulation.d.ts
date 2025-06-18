import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class TestSimulation extends ClientSDK {
    /**
     * ACH Deposit Approval
     *
     * @remarks
     * Forces approval of an existing ACH deposit that is pending review. FOR TESTING ONLY!
     */
    forceApproveAchDeposit(forceApproveAchDepositRequestCreate: components.ForceApproveAchDepositRequestCreate, accountId: string, achDepositId: string, options?: RequestOptions): Promise<operations.AchDepositsForceApproveAchDepositResponse>;
    /**
     * NOC for a Deposit
     *
     * @remarks
     * Forces a Nacha notice of change (NOC) on a completed ACH deposit. FOR TESTING ONLY!
     */
    forceNocAchDeposit(forceNocAchDepositRequestCreate: components.ForceNocAchDepositRequestCreate, accountId: string, achDepositId: string, options?: RequestOptions): Promise<operations.AchDepositsForceNocAchDepositResponse>;
    /**
     * ACH Deposit Rejection
     *
     * @remarks
     * Forces rejection of an existing ACH deposit that is pending review. FOR TESTING ONLY!
     */
    forceRejectAchDeposit(forceRejectAchDepositRequestCreate: components.ForceRejectAchDepositRequestCreate, accountId: string, achDepositId: string, options?: RequestOptions): Promise<operations.AchDepositsForceRejectAchDepositResponse>;
    /**
     * ACH Deposit Return
     *
     * @remarks
     * Forces a Nacha return on a completed ACH deposit. FOR TESTING ONLY!
     */
    forceReturnAchDeposit(forceReturnAchDepositRequestCreate: components.ForceReturnAchDepositRequestCreate, accountId: string, achDepositId: string, options?: RequestOptions): Promise<operations.AchDepositsForceReturnAchDepositResponse>;
    /**
     * ACH Withdrawal Approval
     *
     * @remarks
     * Forces approval of an existing ACH withdrawal that is pending review. FOR TESTING ONLY!
     */
    forceApproveAchWithdrawal(forceApproveAchWithdrawalRequestCreate: components.ForceApproveAchWithdrawalRequestCreate, accountId: string, achWithdrawalId: string, options?: RequestOptions): Promise<operations.AchWithdrawalsForceApproveAchWithdrawalResponse>;
    /**
     * ACH Withdrawal NOC
     *
     * @remarks
     * Forces a Nacha notice of change (NOC) on a completed ACH withdrawal. FOR TESTING ONLY!
     */
    forceNocAchWithdrawal(forceNocAchWithdrawalRequestCreate: components.ForceNocAchWithdrawalRequestCreate, accountId: string, achWithdrawalId: string, options?: RequestOptions): Promise<operations.AchWithdrawalsForceNocAchWithdrawalResponse>;
    /**
     * ACH Withdrawal Rejection
     *
     * @remarks
     * Forces rejection of an existing ACH withdrawal that is pending review. FOR TESTING ONLY!
     */
    forceRejectAchWithdrawal(forceRejectAchWithdrawalRequestCreate: components.ForceRejectAchWithdrawalRequestCreate, accountId: string, achWithdrawalId: string, options?: RequestOptions): Promise<operations.AchWithdrawalsForceRejectAchWithdrawalResponse>;
    /**
     * ACH Withdrawal Return
     *
     * @remarks
     * Forces a Nacha return on a completed ACH withdrawal. FOR TESTING ONLY!
     */
    forceReturnAchWithdrawal(forceReturnAchWithdrawalRequestCreate: components.ForceReturnAchWithdrawalRequestCreate, accountId: string, achWithdrawalId: string, options?: RequestOptions): Promise<operations.AchWithdrawalsForceReturnAchWithdrawalResponse>;
    /**
     * Get Relationship Micro Deposit Verification
     *
     * @remarks
     * Gets micro deposit amounts for bank relationships with the `MICRO_DEPOSIT` verification method. FOR TESTING ONLY!
     */
    getMicroDepositAmounts(accountId: string, bankRelationshipId: string, options?: RequestOptions): Promise<operations.BankRelationshipsGetMicroDepositAmountsResponse>;
    /**
     * Force Approve ICT Deposit
     *
     * @remarks
     * Forces an approval on an existing ICT deposit pending review - FOR TESTING
     */
    forceApproveIctDeposit(forceApproveIctDepositRequestCreate: components.ForceApproveIctDepositRequestCreate, accountId: string, ictDepositId: string, options?: RequestOptions): Promise<operations.IctDepositsForceApproveIctDepositResponse>;
    /**
     * Force Reject ICT Deposit
     *
     * @remarks
     * Forces a rejection on an existing ICT deposit pending review - FOR TESTING
     */
    forceRejectIctDeposit(forceRejectIctDepositRequestCreate: components.ForceRejectIctDepositRequestCreate, accountId: string, ictDepositId: string, options?: RequestOptions): Promise<operations.IctDepositsForceRejectIctDepositResponse>;
    /**
     * Force Approve ICT Withdrawal
     *
     * @remarks
     * Forces an approval on an existing ICT withdrawal pending review - FOR TESTING
     */
    forceApproveIctWithdrawal(forceApproveIctWithdrawalRequestCreate: components.ForceApproveIctWithdrawalRequestCreate, accountId: string, ictWithdrawalId: string, options?: RequestOptions): Promise<operations.IctWithdrawalsForceApproveIctWithdrawalResponse>;
    /**
     * Force Reject ICT Withdrawal
     *
     * @remarks
     * Forces a rejection on an existing ICT withdrawal pending review - FOR TESTING
     */
    forceRejectIctWithdrawal(forceRejectIctWithdrawalRequestCreate: components.ForceRejectIctWithdrawalRequestCreate, accountId: string, ictWithdrawalId: string, options?: RequestOptions): Promise<operations.IctWithdrawalsForceRejectIctWithdrawalResponse>;
    /**
     * Force Approve Wire Withdrawal
     *
     * @remarks
     * Forces an approval on an existing wire withdrawal pending review - FOR TESTING
     */
    forceApproveWireWithdrawal(forceApproveWireWithdrawalRequestCreate: components.ForceApproveWireWithdrawalRequestCreate, accountId: string, wireWithdrawalId: string, options?: RequestOptions): Promise<operations.WireWithdrawalsForceApproveWireWithdrawalResponse>;
    /**
     * Force Reject Wire Withdrawal
     *
     * @remarks
     * Forces a rejection on an existing wire withdrawal pending review - FOR TESTING
     */
    forceRejectWireWithdrawal(forceRejectWireWithdrawalRequestCreate: components.ForceRejectWireWithdrawalRequestCreate, accountId: string, wireWithdrawalId: string, options?: RequestOptions): Promise<operations.WireWithdrawalsForceRejectWireWithdrawalResponse>;
    /**
     * Force Approve Cash Journal
     *
     * @remarks
     * Forces approval of an existing cash journal that is pending review FOR TESTING ONLY!
     */
    forceApproveCashJournal(forceApproveCashJournalRequestCreate: components.ForceApproveCashJournalRequestCreate, cashJournalId: string, options?: RequestOptions): Promise<operations.CashJournalsForceApproveCashJournalResponse>;
    /**
     * Force Reject Cash Journal
     *
     * @remarks
     * Forces rejection of an existing cash journal that is pending review FOR TESTING ONLY!
     */
    forceRejectCashJournal(forceRejectCashJournalRequestCreate: components.ForceRejectCashJournalRequestCreate, cashJournalId: string, options?: RequestOptions): Promise<operations.CashJournalsForceRejectCashJournalResponse>;
}
//# sourceMappingURL=testsimulation.d.ts.map