import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Wires extends ClientSDK {
    /**
     * Get Wire Deposit
     *
     * @remarks
     * Gets an existing wire deposit
     */
    getWireDeposit(accountId: string, wireDepositId: string, options?: RequestOptions): Promise<operations.WireDepositsGetWireDepositResponse>;
    /**
     * Create Wire Withdrawal
     *
     * @remarks
     * Creates a wire withdrawal
     */
    createWireWithdrawal(wireWithdrawalCreate: components.WireWithdrawalCreate, accountId: string, options?: RequestOptions): Promise<operations.WireWithdrawalsCreateWireWithdrawalResponse>;
    /**
     * Get Wire Withdrawal
     *
     * @remarks
     * Gets an existing wire withdrawal
     */
    getWireWithdrawal(accountId: string, wireWithdrawalId: string, options?: RequestOptions): Promise<operations.WireWithdrawalsGetWireWithdrawalResponse>;
    /**
     * Cancel Wire Withdrawal
     *
     * @remarks
     * Cancels an existing wire withdrawal
     */
    cancelWireWithdrawal(cancelWireWithdrawalRequestCreate: components.CancelWireWithdrawalRequestCreate, accountId: string, wireWithdrawalId: string, options?: RequestOptions): Promise<operations.WireWithdrawalsCancelWireWithdrawalResponse>;
}
//# sourceMappingURL=wires.d.ts.map