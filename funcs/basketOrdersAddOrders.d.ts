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
 * Add Orders
 *
 * @remarks
 * Adds a list of basket orders to a basket
 *
 *  Upon successful submission, returns the basket with a new total count of orders within the basket
 */
export declare function basketOrdersAddOrders(client: ApexascendCore, addOrdersRequestCreate: components.AddOrdersRequestCreate, correspondentId: string, basketId: string, options?: RequestOptions): Promise<Result<operations.BasketOrdersServiceAddOrdersResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=basketOrdersAddOrders.d.ts.map