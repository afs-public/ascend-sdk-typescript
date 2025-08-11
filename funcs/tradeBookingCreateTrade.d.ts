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
 * Create Trade
 *
 * @remarks
 * Creates a trade with one or more executions. Combination of (account_id, client_order_id, and the process_date (determined by Booking service)) determines the uniqueness of the trade.
 *
 *  Upon successful submission, returns the created trade and its details including Booking service enriched details.
 */
export declare function tradeBookingCreateTrade(client: ApexascendCore, tradeCreate: components.TradeCreate, accountId: string, options?: RequestOptions): APIPromise<Result<operations.BookingCreateTradeResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=tradeBookingCreateTrade.d.ts.map