import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get Cash Balance
 *
 * @remarks
 * Calculates the cash balance for an account.
 */
export declare function cashBalancesCalculateCashBalance(client: ApexascendCore, accountId: string, mechanism?: operations.Mechanism | undefined, options?: RequestOptions): Promise<Result<operations.CashBalancesCalculateCashBalanceResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=cashBalancesCalculateCashBalance.d.ts.map