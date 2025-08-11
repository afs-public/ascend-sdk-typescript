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
 * Submit Basket
 *
 * @remarks
 * Submits a basket for execution in the market
 *
 *  Upon successful submission, if the request is a duplicate, returns the existing basket in its current state in the system. If the request is not a duplicate, returns the summary of the newly submitted basket in a SUBMITTED state
 */
export declare function basketOrdersSubmitBasket(client: ApexascendCore, submitBasketRequestCreate: components.SubmitBasketRequestCreate, correspondentId: string, basketId: string, options?: RequestOptions): APIPromise<Result<operations.BasketOrdersServiceSubmitBasketResponse, errors.Status | ApexascendError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
//# sourceMappingURL=basketOrdersSubmitBasket.d.ts.map