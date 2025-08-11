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
 * Add Orders
 *
 * @remarks
 * Adds a list of basket orders to a basket
 *
 *  Upon successful submission, returns the basket with a new total count of orders within the basket
 */
export declare function basketOrdersAddOrders(client: ApexascendCore, addOrdersRequestCreate: components.AddOrdersRequestCreate, correspondentId: string, basketId: string, options?: RequestOptions): APIPromise<Result<operations.BasketOrdersServiceAddOrdersResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=basketOrdersAddOrders.d.ts.map