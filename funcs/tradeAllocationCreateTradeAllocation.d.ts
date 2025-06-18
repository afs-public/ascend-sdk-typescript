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
 * Create Trade Allocation
 *
 * @remarks
 * Creates a new trade allocation. These are used to allocate or distribute positions between Apex accounts.
 *
 *  Upon success, returns the created trade allocation and its enriched details.
 */
export declare function tradeAllocationCreateTradeAllocation(client: ApexascendCore, tradeAllocationCreate: components.TradeAllocationCreate, accountId: string, requestId?: string | undefined, options?: RequestOptions): Promise<Result<operations.BookingCreateTradeAllocationResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=tradeAllocationCreateTradeAllocation.d.ts.map