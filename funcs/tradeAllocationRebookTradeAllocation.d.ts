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
 * Rebook Trade Allocation
 *
 * @remarks
 * Rebook a trade allocation by the original trade_allocation_id. The allocation is rebooked by canceling the original allocation and creating a new one with the provided details.
 *
 *  Upon successful submission, returns both the original and new allocation, as separate resources.
 */
export declare function tradeAllocationRebookTradeAllocation(client: ApexascendCore, rebookTradeAllocationRequestCreate: components.RebookTradeAllocationRequestCreate, accountId: string, tradeAllocationId: string, options?: RequestOptions): APIPromise<Result<operations.BookingRebookTradeAllocationResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=tradeAllocationRebookTradeAllocation.d.ts.map