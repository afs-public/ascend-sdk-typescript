import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class CashBalances extends ClientSDK {
    /**
     * Get Cash Balance
     *
     * @remarks
     * Calculates the cash balance for an account.
     */
    calculateCashBalance(accountId: string, mechanism?: operations.Mechanism | undefined, options?: RequestOptions): Promise<operations.CashBalancesCalculateCashBalanceResponse>;
}
//# sourceMappingURL=cashbalances.d.ts.map