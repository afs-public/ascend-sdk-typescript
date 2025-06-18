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
 * Rebook Execution
 *
 * @remarks
 * Rebook an execution by the original execution_id. If applicable, fees and backup withholdings will be re-calculated.
 *
 *  Upon successful submission, returns the rebooked execution details.
 */
export declare function tradeBookingRebookExecution(client: ApexascendCore, rebookExecutionRequestCreate: components.RebookExecutionRequestCreate, accountId: string, tradeId: string, executionId: string, options?: RequestOptions): Promise<Result<operations.BookingRebookExecutionResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=tradeBookingRebookExecution.d.ts.map