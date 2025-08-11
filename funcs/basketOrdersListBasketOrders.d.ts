import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ApexascendError } from "../models/errors/apexascenderror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";
/**
 * List Basket Orders
 *
 * @remarks
 * Gets a list of basket orders within a basket.
 *
 *  Upon successful submission, returns a list of basket orders for the basket. If the list of basket orders becomes too large, a token is returned to retrieve the next page of basket orders.
 */
export declare function basketOrdersListBasketOrders(client: ApexascendCore, request: operations.BasketOrdersServiceListBasketOrdersRequest, options?: RequestOptions): APIPromise<Result<operations.BasketOrdersServiceListBasketOrdersResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=basketOrdersListBasketOrders.d.ts.map