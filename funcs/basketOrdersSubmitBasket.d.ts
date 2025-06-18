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
 * Submit Basket
 *
 * @remarks
 * Submits a basket for execution in the market
 *
 *  Upon successful submission, if the request is a duplicate, returns the existing basket in its current state in the system. If the request is not a duplicate, returns the summary of the newly submitted basket in a SUBMITTED state
 */
export declare function basketOrdersSubmitBasket(client: ApexascendCore, submitBasketRequestCreate: components.SubmitBasketRequestCreate, correspondentId: string, basketId: string, options?: RequestOptions): Promise<Result<operations.BasketOrdersServiceSubmitBasketResponse, errors.Status | SDKError | SDKValidationError | UnexpectedClientError | InvalidRequestError | RequestAbortedError | RequestTimeoutError | ConnectionError>>;
//# sourceMappingURL=basketOrdersSubmitBasket.d.ts.map