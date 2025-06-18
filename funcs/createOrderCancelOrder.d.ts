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
 * Cancel Order
 *
 * @remarks
 * Submits an order cancellation request by order ID. Confirmation of order cancellation requests are provided through asynchronous events.
 *
 *  Upon successful submission, returns the details of the order pending cancellation.
 */
export declare function createOrderCancelOrder(client: ApexascendCore, cancelOrderRequestCreate: components.CancelOrderRequestCreate, accountId: string, orderId: string, options?: RequestOptions): Promise<Result<operations.OrderServiceCancelOrderResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=createOrderCancelOrder.d.ts.map