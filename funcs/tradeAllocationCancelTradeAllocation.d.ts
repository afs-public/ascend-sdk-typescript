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
 * Cancel Trade Allocation
 *
 * @remarks
 * Cancel a trade allocation using the original trade_allocation_id.
 *
 *  Upon successful submission, returns an empty response. CancelTradeAllocation will either cancel everything, or nothing at all if a failure occurs.
 */
export declare function tradeAllocationCancelTradeAllocation(client: ApexascendCore, cancelTradeAllocationRequestCreate: components.CancelTradeAllocationRequestCreate, accountId: string, tradeAllocationId: string, options?: RequestOptions): APIPromise<Result<operations.BookingCancelTradeAllocationResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=tradeAllocationCancelTradeAllocation.d.ts.map