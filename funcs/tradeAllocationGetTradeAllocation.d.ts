import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get Trade Allocation
 *
 * @remarks
 * Retrieves a trade allocation and its details.
 *
 *  Upon successful submission, returns the trade allocation details.
 */
export declare function tradeAllocationGetTradeAllocation(client: ApexascendCore, accountId: string, tradeAllocationId: string, options?: RequestOptions): Promise<Result<operations.BookingGetTradeAllocationResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=tradeAllocationGetTradeAllocation.d.ts.map