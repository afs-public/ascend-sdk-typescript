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
 * Cancel Execution
 *
 * @remarks
 * Cancel an execution using the original execution_id. If applicable, fees and backup withholdings will be re-calculated.
 *
 *  Upon successful submission, returns the execution that was canceled.
 */
export declare function tradeBookingCancelExecution(client: ApexascendCore, cancelExecutionRequestCreate: components.CancelExecutionRequestCreate, accountId: string, tradeId: string, executionId: string, options?: RequestOptions): APIPromise<Result<operations.BookingCancelExecutionResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=tradeBookingCancelExecution.d.ts.map