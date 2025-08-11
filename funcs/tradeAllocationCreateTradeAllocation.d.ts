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
 * Create Trade Allocation
 *
 * @remarks
 * Creates a new trade allocation. These are used to allocate or distribute positions between Apex accounts.
 *
 *  Upon success, returns the created trade allocation and its enriched details.
 */
export declare function tradeAllocationCreateTradeAllocation(client: ApexascendCore, tradeAllocationCreate: components.TradeAllocationCreate, accountId: string, requestId?: string | undefined, options?: RequestOptions): APIPromise<Result<operations.BookingCreateTradeAllocationResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=tradeAllocationCreateTradeAllocation.d.ts.map