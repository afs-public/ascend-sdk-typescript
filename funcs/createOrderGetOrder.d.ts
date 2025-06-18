import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get Order
 *
 * @remarks
 * Gets an order by order ID.
 *
 *  Upon successful submission, returns the details of the queried order.
 */
export declare function createOrderGetOrder(client: ApexascendCore, accountId: string, orderId: string, options?: RequestOptions): Promise<Result<operations.OrderServiceGetOrderResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=createOrderGetOrder.d.ts.map