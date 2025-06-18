import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * List Basket Orders
 *
 * @remarks
 * Gets a list of basket orders within a basket.
 *
 *  Upon successful submission, returns a list of basket orders for the basket. If the list of basket orders becomes too large, a token is returned to retrieve the next page of basket orders.
 */
export declare function basketOrdersListBasketOrders(client: ApexascendCore, correspondentId: string, basketId: string, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<Result<operations.BasketOrdersServiceListBasketOrdersResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=basketOrdersListBasketOrders.d.ts.map