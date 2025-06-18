import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get ICT Deposit
 *
 * @remarks
 * Gets an existing ICT deposit
 */
export declare function instantCashTransferICTGetICTDeposit(client: ApexascendCore, accountId: string, ictDepositId: string, options?: RequestOptions): Promise<Result<operations.IctDepositsGetIctDepositResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=instantCashTransferICTGetICTDeposit.d.ts.map