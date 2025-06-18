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
 * Cancel ICT Deposit
 *
 * @remarks
 * Cancels an existing ICT deposit
 */
export declare function instantCashTransferICTCancelICTDeposit(client: ApexascendCore, cancelIctDepositRequestCreate: components.CancelIctDepositRequestCreate, accountId: string, ictDepositId: string, options?: RequestOptions): Promise<Result<operations.IctDepositsCancelIctDepositResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=instantCashTransferICTCancelICTDeposit.d.ts.map