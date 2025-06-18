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
 * Cancel ACH Withdrawal
 *
 * @remarks
 * Cancels an existing ACH withdrawal.
 */
export declare function achTransfersCancelACHWithdrawal(client: ApexascendCore, cancelAchWithdrawalRequestCreate: components.CancelAchWithdrawalRequestCreate, accountId: string, achWithdrawalId: string, options?: RequestOptions): Promise<Result<operations.AchWithdrawalsCancelAchWithdrawalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=achTransfersCancelACHWithdrawal.d.ts.map