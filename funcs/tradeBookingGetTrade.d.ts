import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get Trade
 *
 * @remarks
 * Gets a trade and all executions by trade_id.
 *
 *  Upon successful submission, returns the trade details and all the execution by trade_id.
 */
export declare function tradeBookingGetTrade(client: ApexascendCore, accountId: string, tradeId: string, options?: RequestOptions): Promise<Result<operations.BookingGetTradeResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=tradeBookingGetTrade.d.ts.map