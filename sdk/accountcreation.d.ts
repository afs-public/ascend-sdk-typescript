import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class AccountCreation extends ClientSDK {
    /**
     * Create Account
     *
     * @remarks
     * CREATE Creates an account.
     */
    createAccount(request: components.AccountRequestCreate, options?: RequestOptions): Promise<operations.AccountsCreateAccountResponse>;
    /**
     * Get Account
     *
     * @remarks
     * READ Get Account
     */
    getAccount(accountId: string, view?: operations.QueryParamView | undefined, options?: RequestOptions): Promise<operations.AccountsGetAccountResponse>;
}
//# sourceMappingURL=accountcreation.d.ts.map