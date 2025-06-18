import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get ACH Withdrawal
 *
 * @remarks
 * Gets an existing ACH withdrawal.
 */
export declare function achTransfersGetACHWithdrawal(client: ApexascendCore, accountId: string, achWithdrawalId: string, options?: RequestOptions): Promise<Result<operations.AchWithdrawalsGetAchWithdrawalResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=achTransfersGetACHWithdrawal.d.ts.map