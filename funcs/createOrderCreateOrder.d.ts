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
 * Create Order
 *
 * @remarks
 * Creates a new order for equity or fixed income securities.
 *
 *  Equity quantities may be for fractional shares, whole shares, or notional dollar amounts. Fixed income orders may be specified in face value currency amounts, with prices expressed in conventional "percentage of par" values.
 *
 *  Upon successful submission, if the request is a duplicate, returns the existing order in its current state in the system. If the request is not a duplicate, returns the summary of the newly submitted order.
 */
export declare function createOrderCreateOrder(client: ApexascendCore, orderCreate: components.OrderCreate, accountId: string, options?: RequestOptions): Promise<Result<operations.OrderServiceCreateOrderResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=createOrderCreateOrder.d.ts.map