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
 * Rebook Trade
 *
 * @remarks
 * Rebook a trade by the original trade_id. The entire original trade's executions are rebooked using the executions provided in the request. If applicable, fees and backup withholdings will be re-calculated.
 *
 *  Upon successful submission, returns the rebooked trade details and all the executions.
 */
export declare function tradeBookingRebookTrade(client: ApexascendCore, rebookTradeRequestCreate: components.RebookTradeRequestCreate, accountId: string, tradeId: string, options?: RequestOptions): APIPromise<Result<operations.BookingRebookTradeResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=tradeBookingRebookTrade.d.ts.map