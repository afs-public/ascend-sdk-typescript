import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * List Compressed Orders
 *
 * @remarks
 * Gets a list of compressed orders within a basket.
 *
 *  Upon successful submission, returns a list of compressed orders for the basket. If the basket has not been submitted yet, this list will be empty. If the list of compressed orders becomes too large, a token is returned to retrieve the next page of compressed orders.
 */
export declare function basketOrdersListCompressedOrders(client: ApexascendCore, correspondentId: string, basketId: string, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<Result<operations.BasketOrdersServiceListCompressedOrdersResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=basketOrdersListCompressedOrders.d.ts.map