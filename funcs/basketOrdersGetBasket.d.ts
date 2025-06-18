import { ApexascendCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
/**
 * Get Basket
 *
 * @remarks
 * Gets a basket by basket ID.
 *
 *  Upon successful submission, returns the details of the queried basket
 */
export declare function basketOrdersGetBasket(client: ApexascendCore, correspondentId: string, basketId: string, options?: RequestOptions): Promise<Result<operations.BasketOrdersServiceGetBasketResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=basketOrdersGetBasket.d.ts.map