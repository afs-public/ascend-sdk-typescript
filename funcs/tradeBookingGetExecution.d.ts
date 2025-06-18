import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get Execution
 *
 * @remarks
 * Gets an execution by execution_id.
 *
 *  Upon successful submission, returns the execution details by execution_id.
 */
export declare function tradeBookingGetExecution(client: ApexascendCore, accountId: string, tradeId: string, executionId: string, options?: RequestOptions): Promise<Result<operations.BookingGetExecutionResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=tradeBookingGetExecution.d.ts.map