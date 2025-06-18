import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get ICT Withdrawal
 *
 * @remarks
 * Gets an existing ICT withdrawal
 */
export declare function instantCashTransferICTGetICTWithdrawal(client: ApexascendCore, accountId: string, ictWithdrawalId: string, options?: RequestOptions): Promise<Result<operations.IctWithdrawalsGetIctWithdrawalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=instantCashTransferICTGetICTWithdrawal.d.ts.map