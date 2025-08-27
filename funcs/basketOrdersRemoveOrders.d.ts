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
 * Remove Basket Orders
 *
 * @remarks
 * Removes a list of basket orders by client order ID.
 *
 *  Upon successful submission, returns the details of the removed basket orders.
 */
export declare function basketOrdersRemoveOrders(client: ApexascendCore, removeOrdersRequestCreate: components.RemoveOrdersRequestCreate, correspondentId: string, basketId: string, options?: RequestOptions): APIPromise<Result<operations.BasketOrdersServiceRemoveOrdersResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=basketOrdersRemoveOrders.d.ts.map