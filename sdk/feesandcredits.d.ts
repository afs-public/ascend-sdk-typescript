import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class FeesAndCredits extends ClientSDK {
    /**
     * Create Fee
     *
     * @remarks
     * Create a fee
     */
    createFee(transfersFeeCreate: components.TransfersFeeCreate, accountId: string, options?: RequestOptions): Promise<operations.FeesCreateFeeResponse>;
    /**
     * Get Fee
     *
     * @remarks
     * Retrieve an existing fee
     */
    getFee(accountId: string, feeId: string, options?: RequestOptions): Promise<operations.FeesGetFeeResponse>;
    /**
     * Cancel Fee
     *
     * @remarks
     * Cancel an existing fee
     */
    cancelFee(cancelFeeRequestCreate: components.CancelFeeRequestCreate, accountId: string, feeId: string, options?: RequestOptions): Promise<operations.FeesCancelFeeResponse>;
    /**
     * Create Credit
     *
     * @remarks
     * Create a credit
     */
    createCredit(transfersCreditCreate: components.TransfersCreditCreate, accountId: string, options?: RequestOptions): Promise<operations.CreditsCreateCreditResponse>;
    /**
     * Get Credit
     *
     * @remarks
     * Retrieve an existing credit
     */
    getCredit(accountId: string, creditId: string, options?: RequestOptions): Promise<operations.CreditsGetCreditResponse>;
    /**
     * Cancel Credit
     *
     * @remarks
     * Cancel an existing credit
     */
    cancelCredit(cancelCreditRequestCreate: components.CancelCreditRequestCreate, accountId: string, creditId: string, options?: RequestOptions): Promise<operations.CreditsCancelCreditResponse>;
}
//# sourceMappingURL=feesandcredits.d.ts.map