import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { ApexascendError } from "../models/errors/apexascenderror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * Cancel ICT Deposit
 *
 * @remarks
 * Cancels an existing ICT deposit
 */
export declare function instantCashTransferICTCancelICTDeposit(client: ApexascendCore, cancelIctDepositRequestCreate: components.CancelIctDepositRequestCreate, accountId: string, ictDepositId: string, options?: RequestOptions): APIPromise<Result<operations.IctDepositsCancelIctDepositResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=instantCashTransferICTCancelICTDeposit.d.ts.map