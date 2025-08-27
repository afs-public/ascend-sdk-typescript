import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Checks extends ClientSDK {
    /**
     * Get Check Deposit
     *
     * @remarks
     * Gets an existing check deposit.
     */
    getCheckDeposit(accountId: string, checkDepositId: string, options?: RequestOptions): Promise<operations.CheckDepositsGetCheckDepositResponse>;
}
//# sourceMappingURL=checks.d.ts.map