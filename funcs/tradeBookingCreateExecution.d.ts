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
 * Create Execution
 *
 * @remarks
 * Create a new execution under an existing trade that is open.
 *
 *  Upon successful submission, returns the created execution and its details.
 */
export declare function tradeBookingCreateExecution(client: ApexascendCore, executionCreate: components.ExecutionCreate, accountId: string, tradeId: string, options?: RequestOptions): Promise<Result<operations.BookingCreateExecutionResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=tradeBookingCreateExecution.d.ts.map