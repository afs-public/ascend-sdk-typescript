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
 * Cancel Trade Allocation
 *
 * @remarks
 * Cancel a trade allocation using the original trade_allocation_id.
 *
 *  Upon successful submission, returns an empty response. CancelTradeAllocation will either cancel everything, or nothing at all if a failure occurs.
 */
export declare function tradeAllocationCancelTradeAllocation(client: ApexascendCore, cancelTradeAllocationRequestCreate: components.CancelTradeAllocationRequestCreate, accountId: string, tradeAllocationId: string, options?: RequestOptions): Promise<Result<operations.BookingCancelTradeAllocationResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=tradeAllocationCancelTradeAllocation.d.ts.map