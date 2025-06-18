import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Cancel ICT Withdrawal
 *
 * @remarks
 * Cancels an existing ICT withdrawal
 */
export declare function instantCashTransferICTCancelICTWithdrawal(client: ApexascendCore, cancelIctWithdrawalRequestCreate: components.CancelIctWithdrawalRequestCreate, accountId: string, ictWithdrawalId: string, options?: RequestOptions): Promise<Result<operations.IctWithdrawalsCancelIctWithdrawalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=instantCashTransferICTCancelICTWithdrawal.d.ts.map