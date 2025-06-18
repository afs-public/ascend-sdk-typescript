import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Margins extends ClientSDK {
    /**
     * Get Buying Power
     *
     * @remarks
     * Gets the buying power for an account
     */
    getBuyingPower(accountId: string, options?: RequestOptions): Promise<operations.MarginsRealTimeGetBuyingPowerResponse>;
}
//# sourceMappingURL=margins.d.ts.map